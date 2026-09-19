#!/usr/bin/env python3
"""Collect DC AI gallery list posts via mobile HTML (desktop often blocked).

Prefer: chatgpt, ai_utilize. Optional: aijonghap (sparse). Never id=ai (game gallery).

Usage:
  python3 scripts/collect-dc.py                 # stdout JSON
  python3 scripts/collect-dc.py -o /tmp/dc.json
  python3 scripts/collect-dc.py --bodies 5      # also fetch top N post bodies per list
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone, timedelta
from html import unescape
from pathlib import Path
from typing import Any

KST = timezone(timedelta(hours=9))
UA = (
    "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
)

GALLERIES = [
    {"id": "chatgpt", "name": "챗지피티", "priority": 1},
    {"id": "ai_utilize", "name": "AI활용", "priority": 1},
    {"id": "aijonghap", "name": "AI종합", "priority": 2},  # often sparse
]

NOTICE_MARKERS = ("공지", "AD", "광고", "설문")


def fetch(url: str, retries: int = 3) -> str:
    last: Exception | None = None
    for i in range(retries):
        try:
            req = urllib.request.Request(
                url,
                headers={
                    "User-Agent": UA,
                    "Accept": "text/html,application/xhtml+xml",
                    "Accept-Language": "ko-KR,ko;q=0.9,en;q=0.8",
                    "Cache-Control": "no-cache",
                },
            )
            with urllib.request.urlopen(req, timeout=30) as resp:
                raw = resp.read()
                # empty / tiny = soft block
                if len(raw) < 2000:
                    raise RuntimeError(f"short response {len(raw)} bytes for {url}")
                return raw.decode("utf-8", "replace")
        except Exception as e:  # noqa: BLE001
            last = e
            time.sleep(1.2 * (i + 1))
    raise RuntimeError(f"fetch failed {url}: {last}")


def _intish(s: str | None) -> int:
    if not s:
        return 0
    s = s.replace(",", "").strip()
    m = re.search(r"\d+", s)
    return int(m.group(0)) if m else 0


def parse_list(html: str, gallery_id: str) -> list[dict[str, Any]]:
    """Parse m.dcinside.com board list HTML."""
    posts: list[dict[str, Any]] = []
    # each row: <div class="gall-detail-lnktb"> ... </div> roughly inside <li>
    blocks = re.findall(
        r'<div class="gall-detail-lnktb">([\s\S]*?)</div>\s*(?:<span[^>]*class="blockInfo"|</li>)',
        html,
    )
    if not blocks:
        # fallback: split on subjectin anchors
        blocks = re.findall(
            r'(<a href="https://m\.dcinside\.com/board/[^"]+/\d+[^"]*"[\s\S]*?</ul>\s*</a>)',
            html,
        )

    seen: set[str] = set()
    for block in blocks:
        hm = re.search(
            rf'href="(https://m\.dcinside\.com/board/{re.escape(gallery_id)}/(\d+)(?:\?[^"]*)?)"',
            block,
        )
        if not hm:
            continue
        url, no = hm.group(1).split("?")[0], hm.group(2)
        if no in seen:
            continue
        tm = re.search(r'<span class="subjectin">([^<]*)</span>', block)
        if not tm:
            continue
        title = unescape(tm.group(1)).strip()
        if not title:
            continue
        # skip notices / ads
        if any(x in title for x in NOTICE_MARKERS):
            continue
        cat_m = re.search(r'<ul class="ginfo\s*">\s*<li[^>]*>\s*([^<]+?)\s*</li>', block)
        cat = unescape(cat_m.group(1)).strip() if cat_m else ""
        if cat in ("공지", "AD", "설문"):
            continue
        views_m = re.search(r"조회\s*([\d,]+)", block)
        rec_m = re.search(r"추천\s*(?:<span>)?([\d,]+)", block)
        time_m = re.search(
            r"<li>(\d{1,2}:\d{2}|\d{2}\.\d{2}|\d{2}/\d{2})</li>", block
        )
        ct_m = re.search(r'<span class="ct\s*">\s*([\d,]+)\s*</span>', block)
        # nick sometimes present
        nick_m = re.search(r'class="list-nick"[^>]*>([^<]+)', block)

        views = _intish(views_m.group(1) if views_m else None)
        rec = _intish(rec_m.group(1) if rec_m else None)
        comments = _intish(ct_m.group(1) if ct_m else None)
        desktop = (
            f"https://gall.dcinside.com/mgallery/board/view/"
            f"?id={gallery_id}&no={no}"
        )
        posts.append(
            {
                "id": no,
                "title": title,
                "url": url,
                "desktop_url": desktop,
                "views": views,
                "rec": rec,
                "comments": comments,
                "time": time_m.group(1) if time_m else "",
                "cat": cat,
                "author": unescape(nick_m.group(1)).strip() if nick_m else "",
                "gallery": gallery_id,
            }
        )
        seen.add(no)
    return posts


def parse_body(html: str) -> str:
    # mobile post body
    m = re.search(
        r'<div class="thum-txt[^"]*"[^>]*>([\s\S]*?)</div>\s*(?:<div class="appending|<!--|</section>)',
        html,
    )
    if not m:
        m = re.search(r'id="container"[\s\S]*?<div class="writing_view_box[^"]*"[^>]*>([\s\S]*?)</div>', html)
    if not m:
        return ""
    text = re.sub(r"<br\s*/?>", "\n", m.group(1), flags=re.I)
    text = re.sub(r"<[^>]+>", " ", text)
    text = unescape(re.sub(r"[ \t]+\n", "\n", re.sub(r"\s+", " ", text)))
    return text.strip()[:4000]


def collect_gallery(gid: str, with_bodies: int = 0) -> dict[str, Any]:
    base = f"https://m.dcinside.com/board/{gid}"
    all_html = fetch(base)
    rec_html = fetch(f"{base}?recommend=1")
    all_posts = parse_list(all_html, gid)
    rec_posts = parse_list(rec_html, gid)

    # hot = high views from all, exclude already in rec if desired
    hot = sorted(all_posts, key=lambda p: (p["views"], p["rec"], p["comments"]), reverse=True)

    out: dict[str, Any] = {
        "gallery": gid,
        "ok": True,
        "counts": {"all": len(all_posts), "recommend": len(rec_posts)},
        "recommend": rec_posts[:40],
        "hot": hot[:40],
        "all": all_posts[:60],
    }

    if with_bodies > 0:
        # prefer recommend then hot
        picks: list[dict[str, Any]] = []
        seen: set[str] = set()
        for src in (rec_posts, hot):
            for p in src:
                if p["id"] in seen:
                    continue
                seen.add(p["id"])
                picks.append(p)
                if len(picks) >= with_bodies:
                    break
            if len(picks) >= with_bodies:
                break
        bodies = []
        for p in picks:
            try:
                bhtml = fetch(p["url"])
                bodies.append({**p, "body": parse_body(bhtml)})
                time.sleep(0.4)
            except Exception as e:  # noqa: BLE001
                bodies.append({**p, "body": "", "body_error": str(e)})
        out["bodies"] = bodies
    return out


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("-o", "--output", help="write JSON path")
    ap.add_argument("--bodies", type=int, default=0, help="fetch top N bodies per gallery")
    ap.add_argument(
        "--galleries",
        default="chatgpt,ai_utilize",
        help="comma ids (default chatgpt,ai_utilize; add aijonghap if needed)",
    )
    args = ap.parse_args()
    ids = [g.strip() for g in args.galleries.split(",") if g.strip()]
    # safety: never allow game gallery
    ids = [g for g in ids if g != "ai"]

    result: dict[str, Any] = {
        "fetched_at_kst": datetime.now(KST).isoformat(),
        "method": "m.dcinside.com HTML",
        "note": "Desktop gall.dcinside.com often returns empty for some minor galleries; mobile is preferred.",
        "galleries": {},
        "errors": [],
    }
    for gid in ids:
        try:
            result["galleries"][gid] = collect_gallery(gid, with_bodies=args.bodies)
            print(
                f"[ok] {gid}: all={result['galleries'][gid]['counts']['all']} "
                f"rec={result['galleries'][gid]['counts']['recommend']}",
                file=sys.stderr,
            )
        except Exception as e:  # noqa: BLE001
            result["galleries"][gid] = {"gallery": gid, "ok": False, "error": str(e)}
            result["errors"].append({"gallery": gid, "error": str(e)})
            print(f"[fail] {gid}: {e}", file=sys.stderr)

    # briefing-friendly flat summary
    summary = []
    for gid, data in result["galleries"].items():
        if not data.get("ok"):
            continue
        for p in data.get("recommend", [])[:15]:
            summary.append({**p, "bucket": "recommend"})
        for p in data.get("hot", [])[:15]:
            summary.append({**p, "bucket": "hot"})
    # dedupe by gallery+id preferring recommend
    dedup: dict[str, dict] = {}
    for p in summary:
        key = f"{p['gallery']}:{p['id']}"
        if key not in dedup or p["bucket"] == "recommend":
            dedup[key] = p
    result["briefing_candidates"] = sorted(
        dedup.values(),
        key=lambda p: (0 if p["bucket"] == "recommend" else 1, -p["views"], -p["rec"]),
    )

    text = json.dumps(result, ensure_ascii=False, indent=2)
    if args.output:
        Path(args.output).write_text(text, encoding="utf-8")
        print(f"wrote {args.output}", file=sys.stderr)
    else:
        print(text)

    # non-zero if all failed
    ok_any = any(g.get("ok") for g in result["galleries"].values())
    return 0 if ok_any else 2


if __name__ == "__main__":
    raise SystemExit(main())

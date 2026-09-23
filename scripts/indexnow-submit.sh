#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
KEYFILE=$(ls public/ | grep -E '^[a-f0-9]{32}\.txt$' | head -1)
KEY=${KEYFILE%.txt}
HOST="ai.optiwork.co.kr"
mapfile -t URLS < <(curl -fsSL "https://${HOST}/sitemap.xml" | grep -oE 'https://ai.optiwork.co.kr[^<]+')
python3 - "$KEY" "$HOST" "${URLS[@]}" <<'PY'
import json, sys, urllib.request
key, host, *urls = sys.argv[1:]
assert urls, 'no urls'
body = json.dumps({
  "host": host,
  "key": key,
  "keyLocation": f"https://{host}/{key}.txt",
  "urlList": urls,
}).encode()
req = urllib.request.Request(
  "https://api.indexnow.org/indexnow",
  data=body,
  headers={"Content-Type": "application/json; charset=utf-8"},
)
try:
  with urllib.request.urlopen(req) as r:
    print("IndexNow", r.status)
except urllib.error.HTTPError as e:
  print("IndexNow HTTP", e.code, e.read()[:500].decode())
  raise
PY

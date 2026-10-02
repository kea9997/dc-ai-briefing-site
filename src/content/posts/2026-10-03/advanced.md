---
title: "D+3: Fable 5.5 heat · 6.1 Sol wall-clock revolt · reset/nerf morning"
date: 2026-10-03
level: advanced
description: "DevDay D+3 — 로컬 KPI는 Fable 5.5 bake-off·voxel·6.1 Sol ‘실패’ 장문, 핫은 paid reset/nerf/quota-burn; 해외는 Apple FDA harden·ChatGPT Sites·LocalLLaMA RSS OK(ML 429); AA 보드는 10-01 유지."
tags: ["daily", "advanced", "Fable55", "61Sol", "reset", "nerf", "Argon", "Dots", "AppleFDA", "Sites", "AA"]
---

## 오늘 핵심 세 가지

1. **로컬 KPI shift = Fable 5.5 heat over Argon 1M folklore:** AI활용 「페이블 5.5 / 6.1 Sol 해파리」(≈**3,817**·**14**), 「복셀 근황」(≈**3,612**·**12**), 「6솔보다 6.1솔이 더 실패」(≈**2,979**·**41**), 핫 「5.5페이블 > 6.1아스트라」. 요지 — *community bake-off + long critique of Sol latency/agency*가 D+2의 젬황 1M-out·Dot sticky를 밀어냄. WeirdML row add(6.1 Sol / Sonnet 5.5 / Grok 4.7, ≈**1,585**·**12**) = niche bench folklore. **AA coding.value(6.1 Sol II≈52 · ≈$0.72)는 보드상 유지** — 로컬 온도는 `wall_clock_s` vs `$/task` 갈등.
2. **Reset/nerf morning + Dot pet SKU:** 챗 핫 도배 — 「유료 전역 리셋」「초기화?」「사용량 다섯배」「93% 남았는데 리셋」. 활용 「너프얼마나」(≈**2,461**·**21**), 챗 「너프된 챗지피티」(≈**1,475**·**15**). 「펫 닷 연동」(≈**4,555**·**17**) = companion play lane 유지; D+2 Tibo reset-refusal·calendar는 recommend 잔향. 계측 키: `reset_ts`, `pct_morning/evening`, `burn_rate_felt`, `dot_pet?`.
3. **해외 교차 — Apple FDA · Sites · Local RSS partial:** TechCrunch — Apple macOS **Full Disk Access** harden (AI agent file/mail/message risk). HN: **Sites in ChatGPT**(≈173), Opus 5.5 paint canvas(≈173), Stratego budget win(Ars). r/LocalLLaMA·r/ChatGPT RSS **200 OK**(D+2 전면 403과 다름); r/MachineLearning **429**. ChatGPT 스레드: Pro **20×→10× Oct 30** rumor, Plus→Pro unauthorized upgrade, Dot grocery (credential risk), Blender bake-off Astra win claim. `model-board.json` **2026-10-01 KEEP**.

---

## 국내 — Fable/Sol 체감전쟁 위에 reset politics

### Fable 5.5 bake-off · voxel · WeirdML (확인=공유/niche bench / GA·가격·대표성 미확인)

**확인:** 해파리 스레드 = X clip reloc — Fable 5.5 routing via web app + Claude Code claim; Claude Pro ×5에서 non-agent test ≈**7% weekly** burn 주장 vs Codex ×20 비교 프레임. Voxel = self-build demo “≫ Opus 5.5 detail” 주장. 핫 「> 6.1 Astra」「$5 미만?」= *price/rank folklore*. WeirdML 추가는 소형 ML 실무 벤치 row — 댓글도 “종합 벤치 ≠, weird 가능” self-caveat.

고급 읽기: **community_eval_temp ≠ router change.** Fable presence 전엔 `same_ticket_vs_sonnet_opus`만. Cost 신호가 Claude weekly %로 오면 OpenAI `$/task` AA와 **단위가 다름** — 표 합산 금지.

계측: `fable_icon?`, `claude_weekly_pctΔ`, `voxel_clip_url`, `weirdml_snapshot_ts`, `same_ticket_wall_clock`.

**미확인:** Fable 5.5 formal SKU·요금·KR seat, bake-off task 대표성, WeirdML 순위 고정성.

### 6.1 Sol wall-clock revolt (확인=장문 community critique / fleet-wide regression 미확인)

**확인:** 「6.1 실패」r=**41** — 구조적 주장: (a) 6 Sol = weak but usable **subagent** when scope small; (b) 6.1 = **no progress / slower than local / no tiki-taka**; (c) “cheap without completion ≠ value”; (d) Astra laziness/over-verify 미해결. 핫 「사용량 적나?」「업데이트면 빨라지나?」「high ×6 goals 1h」= latency·quota·session heat.

고급 읽기: AA **II≈52 · ≈$0.72**는 **벤치 스냅샷**이지 wall-clock SLA가 아님. 로컬 revolt는 `goals.coding.value`를 즉시 flip하라는 신호가 아니라 **instrumentation debt** 신호. Pareto: Sol Cost/Task ≪ Sonnet max(≈$7.60) · Argon(≈$1.99) — 표상 value 유지 이유 불변. 다만 ops runbook에 `sol_wall_clock_p50` 없으면 표만으로 라우팅하면 D+3 온도에 먹힘.

계측: `ticket_id`, `model`, `wall_clock_s`, `tool_calls`, `human_edits`, `pctΔ`, `local_baseline_s`(있으면).

**미확인:** 작성자 SKU/network/prompt 대표성, “로컬보다 느림” 재현, 서버측 regression vs prompt/harness drift.

### Reset / nerf / burn-rate (확인=hot density / official global nerf 미확인)

**확인:** 챗 hot = reset confusion cluster. 「전역 리셋 적용 완료」제목은 **community label** — 공식 status 문구와 1:1 검증 전엔 `rumor_reset`. 너프 글 = quality+burn 한탄. 「93%→reset」= **timer UX opacity**.

| 레이어 | D+2 | D+3 |
|--------|-----|-----|
| Argon | 1M-out folklore | tester-deploy rumor (아래) |
| Sol | CoT bake-off side | **wall-clock revolt main** |
| Dot | reset_denied sticky | **pet update + sticky 잔향** |
| Quota UX | deeper-work grammar | **reset timing + burn felt** |

계측: `reset_expected_ts`, `reset_observed_ts`, `pct_pre/post`, `quality_subjective∈{ok,meh,bad}`, `status_page_checked?`.

**미확인:** official global reset blast radius, model-version pin for “nerf”, burn×SKU 동일성.

### Argon tester rumor · RRSI · Dot pet · build-show · Muse (확인=공유/정보형 / GA·ToS 미확인)

**확인:** 「argon 슬슬 후기」(≈**3,529**·**14**) — X: internal deploy, `gemini-4-argon`, not public. RRSI(≈**3,356**·**15**) = Google harness self-improve narrative (정보형). Pet Dot(≈**4,555**·**17**) = companion SKU play. GOAT meme(≈**3,147**·**19**) = Dario×MJ parody. Opus MMORPG rewrite(≈**1,800**·**13**), Claude Tetris(≈**1,257**·**13**) = build-show lane. 챗: Altman punch game(≈**2,388**·**36**), art/prompt/UI theme/구름소라. 핫: Muse KR signup, 「필쫀쿠 ×20 vs 클맥 ×5」, 「닷츠 조삼모사」.

**미확인:** Argon tester→GA, RRSI user-facing ETA, pet/calendar PII scopes, Muse KR funnel, ×20 vs ×5 fairness.

---

## 해외·언론 교차

### AA board — KEEP 2026-10-01 (확인)

Artificial Analysis HTML: Opus 5.5 / Sonnet 5.5 highest-intelligence framing 유지; Argon / Astra / 6.1 Sol / Luna rows 존재. **오늘 major new top model·price overhaul 신호 없음** → `model-board.json` **갱신 안 함**(주간 윈도우 내 D+2일).

| 모델 | II (대략) | 작업당 $ | 비고 |
|------|-----------|----------|------|
| Opus 5.5 max+fallback | **≈58** | **≈5.98** | #1 |
| Sonnet 5.5 max+fallback | **≈56** | **≈7.60** | token-heavy max |
| Gemini 4 Argon (High) | **≈53** | **≈1.99** | phased · 1M-out 주장 · tester rumor |
| Astra max | **≈53** | ≈3.26 | Dots engine |
| **GPT-6.1 Sol max** | **≈52** | **≈0.72** | **coding value KEEP** · local wall-clock dispute |
| Luna max | **≈37** | ≈0.07 | bulk |

Coding Agent Index 전용 Argon·Fable 수치 **미확인**. `goals.coding.value` → 6.1 Sol (표). Ops note: Sol revolt 있으면 **shadow A/B**만 — JSON flip은 major launch/price 때.

### Apple Full Disk Access · agent threat model

**확인:** TechCrunch 10/02 — Apple to tighten macOS FDA controls; agents make broad access to files/messages/mail/history riskier. Bloomberg/Daring Fireball 동축. 고급 번역: **OS vendor = shrinking ambient authority for agent SKUs**. 로컬 Dot/Codex permission hygiene와 정렬.

**미확인:** ship date, API surface, which incidents drove the note.

### ChatGPT Sites · Opus canvas · Stratego · local stack

**확인:**
- **Sites:** official feature page — describe → converse → publish sites/dashboards/games/decks/apps. HN ≈173.
- Opus paint canvas Show HN ≈173 — eval/play harness.
- Ars: Stratego (hidden info) beaten on a budget.
- LocalLLaMA RSS: iPhone-as-second-GPU (Qwen 3.8 27B prefill claim), Humanlike-Chat 2.0 + tools, 5090 Micro Center paperwork/no-export lore, llama.cpp **Decision Models**, FrogNano-4B (MSFT, GPU-poor agentic), Ascend ×2 Qwen notes, DGX Spark 64GB price talk, “self-hosting ≠ save money”.

**미확인:** Sites geo/plan gates, 5090 paperwork generality, FrogNano production win-rate, Decision Models API stability.

### Subscription / safety / politics residue

**확인(커뮤니티·보도 혼합 — 라벨 분리):**
- r/ChatGPT: Pro **20×→10× Oct 30 / $200 flat** claim (**미확인=공식**); Plus→Pro upgrade without consent complaints; Dot grocery with Walmart login (**credential anti-pattern**); 14-model Blender rebuild — Astra win claim.
- Safety ×3 exit + Head of Safety Systems quit framing 재유통 (WSJ/TC D+1 잔향).
- TC: Sean Parker × Stability → music pivot; Pope Leo XIV anti AI-art stance.
- WaPo: Jay Clayton as possible AI czar.
- Amazon Jev-clone (decision-model flood) 10/01 residue.

Reddit: LocalLLaMA·ChatGPT **OK**; ML **429**. D+2 “전면 403”과 **다르게 기록**.

### 오늘 판 한 문장

로컬 = **Fable heat + Sol wall-clock revolt + reset/nerf UX**; Argon/Dot = **tester rumor + pet SKU**; 해외 = **FDA harden + Sites + local RSS**; 보드 = **10-01 freeze**.

---

## 목적별 모델 고르기 (한국어)

**확인(벤치 스냅샷 2026-10-01 서울 · 오늘 보드 유지):**
- 가장 좋음: Opus 5.5 max+fallback — II **≈58** · ≈$5.98/task
- 추격: Sonnet 5.5 max+fallback — **≈56** · ≈$7.60 (max 토큰 다소비)
- 구글: Argon (High) — **≈53** · ≈$1.99 · $2/$10 · **phased** · tester rumor
- GPT 상단: Astra max — **≈53** · ≈$3.26
- **코딩 가성비 앵커:** GPT-6.1 Sol max — **≈52** · ≈$0.72 (**표 유지**; 로컬은 wall-clock 계측 병행)
- 대량: Luna max ≈$0.07

운영 한 줄: **II는 Opus, Fable/Argon은 presence 전 shadow, coding value 표는 6.1 Sol, bulk는 Luna — D+3 KPI는 `sol_wall_clock`·`fable_icon?`·`reset_ts`.** Fable 영상 = **미확인 체감**. → [/models/](/models/) · [AA](https://artificialanalysis.ai/leaderboards/models) · [Argon](https://artificialanalysis.ai/models/gemini-4-argon) · [6.1 Sol](https://artificialanalysis.ai/models/gpt-6-1-sol)

**미확인:** Fable GA/price, Argon seat ETA, Sol fleet regression, Pro multiplier official, global nerf bulletin.

---

## 오늘이 의미하는 것 · 바꾸지 말 것

의미: D+3는 announce hangover가 **SKU 체감전쟁 + quota UX 스트레스**로 접힌 날. 표의 Sol value와 커뮤니티 wall-clock revolt가 동시에 참이 될 수 있음 — 전자는 AA snapshot, 후자는 local instrumentation. Apple FDA는 agent threat model이 OS 정책 언어로 올라왔다는 신호. Sites는 consumer creation surface 확장.

바꾸지 말 것:

- Fable clip 하나로 `goals.*` JSON flip 금지
- Sol 실패 장문 r=41만으로 coding.value 폐기 금지 — **p50 wall-clock 없이 단정 금지**
- reset hot = official global nerf로 promote 금지
- Argon tester rumor = default router change 금지
- Dot pet/calendar = PII/payment scope 확장 금지
- Pro 20×→10× thread = billing action 즉시 실행 금지
- Sites = corp data / FDA-wide agent 승인으로 번역 금지
- Reddit partial OK를 “모든 서브 정상”으로 과장 금지(ML 429)
- jailbreak/bypass hot → runbook 금지

---

### D+3 ops checklist

1. Screenshot: chat/Work/Dot/Claude/Gemini — icons + % (`6.1|Astra|Luna|Sonnet|Opus|Fable?|Argon?|deeper_work`).
2. One golden ticket → Sol → `wall_clock_s` + edits + pctΔ.
3. Same ticket → Sonnet or Opus once (Fable if present).
4. If reset chatter: log `pct_am/pm` + status page; no fleet panic.
5. Dot: read+confirm only; pet/calendar = toy; no shop logins.
6. Mac: audit FDA / Files access for AI apps → minimize.
7. Sites: one personal page max; no secrets.
8. Board: keep 10-01; shadow only until major launch/price.

---

## 시도 후보

1. **Sol wall-clock A/B:** fixed ticket, n=3 days, record p50/p90.
2. **Sonnet/Opus twin:** same ticket once; compare edits + weekly%/cost proxy.
3. **Luna→Sol ladder:** draft on Luna, finish on Sol; fail → effort↑ one step.
4. **Fable/Argon presence probe:** icon? → one ticket; else skip.
5. **Dot:** one research draft; revoke scopes after review.
6. **Sites:** hobby page; block corp SSO data.
7. **macOS:** revoke FDA on AI agents; folder-scoped access only.
8. **Local:** draft on Qwen-class; judge on cloud (RTX 5090 Laptop 24GB/64GB baseline).
9. **WeirdML/AA:** bookmark snapshot ts — do not merge into coding.value without methodology.
10. **Billing rumor:** screenshot invoice + official pricing; 48h hold before cancel/upgrade.

---

### 표 vs 벽시계 — 라우팅 메모

| 신호 | 소스 | 액션 |
|------|------|------|
| II≈52 · ≈$0.72 | AA 10-01 | keep `coding.value=6.1 Sol` |
| “실패/느림” r=41 | community | add `wall_clock` metric; no JSON flip |
| Fable > Astra hot | community clip | shadow eval if icon |
| Argon tester | X share | track `argon_icon?` only |
| Reset/nerf hot | chat density | `pct` log + status |
| FDA harden | Apple/TC | shrink agent scopes |
| Sites | OpenAI feature | play SKU, not prod auth |

### Harness / subagent 노트

Sol 비판의 핵심 중 하나는 **subagent로서의 범위 제어**가 6→6.1에서 무너졌다는 주장. 고급 대응: (1) ticket 크기를 줄여 Sol에 재시도, (2) 병렬 subagent 예산을 명시, (3) parent를 Astra/Opus로 두고 Sol을 leaf에만 — 그래도 wall-clock이 깨지면 **라우터 예외 리스트**에 ticket class를 올린다. “가성비 모델 폐기”보다 **class-conditional routing**이 D+3에 맞다.

Fable 쪽 한도 자랑(Pro ×5에서 7%)은 OpenAI Codex ×20 burn과 **요금제 문법이 다름**. Cross-vendor %를 같은 축에 그리지 말 것. 내부 대시보드에는 `vendor_quota_unit∈{claude_weekly_pct, openai_codex_pct, aa_usd_per_task}`를 분리.

### Argon · RRSI · decision-model 잔향

Argon tester rumor는 D+2 1M-out folklore의 다음 프레임: **seat scarcity → early access lore**. RRSI는 harness self-improve — 사용자 KPI는 “구글이 자동으로 내 에이전트를 고쳐 준다”가 아니라 **벤더 harness 노이즈 ↑ → 내 eval harness를 더 짧게** 유지하라는 뜻. Amazon Jev clone · llama.cpp Decision Models는 “decision model flood” — 로컬/클라우드 모두 **router SKU 실험 과열**; prod default에 넣기 전 golden ticket n≥3.

### 구독·보안 교차

Pro multiplier rumor + unauthorized upgrade complaints = **billing trust debt**. Runbook: invoice CSV, plan page, support ticket id — 커뮤니티 제목 금지. Dot grocery with merchant login = textbook **credential sharing to agent**; FDA harden과 같은 threat model. Muse KR signup · 필쫀쿠 vs 클맥 hot = ARPU folklore; keep as `community_temp`.

Self-hosting thread (“doesn’t save money”)는 5090 Laptop baseline 사용자에게도 유효: **local = latency/privacy/control**, not CFO win, unless batch volume 증명.

---

### 고급 읽기 체크리스트

1. Fable clips = `community_eval_temp`; presence 전 router 변경 ≠
2. Sol revolt = instrument wall-clock; AA value KEEP until major launch/price
3. Reset/nerf hot = local pct + status; global bulletin 단정 ≠
4. Argon tester = icon probe only
5. Dot pet = play; PII/payment scopes shrink
6. Apple FDA = minimize agent filesystem authority
7. Sites = creation SKU; corp data ≠
8. Reddit: LLAMA/ChatGPT OK, ML 429 — cite accurately
9. Pro 20×→10× = unofficial until OpenAI doc
10. Board date stays **2026-10-01**

---


### 한국어로 다시 쓰는 D+3 판세

오늘 고급 판의 중심은 “또 새 모델이 떴다”가 아니라 **가성비 앵커(6.1 솔)에 대한 벽시계 반란**과 **페이블 5.5 체감 열기**, 그리고 **리셋·너프라는 한도 UX 스트레스**가 한 타임라인에 겹친 것입니다. 어제(D+2) 최고조회가 젬황 백만 출력 주장이었다면, 오늘은 해파리 비교·복셀 근황·「6.1이 더 실패」 장문이 그 자리를 밀어냅니다. 발표 쇼의 사흘째에 커뮤니티가 묻는 질문은 “무엇이 나왔는가”보다 “내 티켓이 끝나는가 / 내 %가 어디로 갔는가”입니다.

페이블 쪽 공유 영상은 Claude Pro 주간 한도의 일부만 쓰고도 품질이 좋다는 식의 **요금제 문법**을 같이 데려옵니다. 이를 오픈AI Codex ×20 사용량과 같은 축에 그리면 안 됩니다. 벤더마다 한도 단위가 다르고, Artificial Analysis 작업당 달러와도 단위가 다릅니다. 고급 런북은 `claude_weekly_pct` / `openai_codex_pct` / `aa_usd_per_task`를 분리해 적습니다. 복셀 데모가 Opus보다 디테일이 낫다는 주장은 **한 클립의 체감**이지 Coding Agent Index 대체가 아닙니다.

6.1 솔 비판 장문(추천 41)은 무시할 소음이 아닙니다. 다만 AA Intelligence 약 52·작업당 약 0.72달러를 **즉시 폐기**하라는 신호로 읽지도 말아야 합니다. 표는 벤치 스냅샷이고, 장문은 특정 워크로드의 벽시계·에이전시 후기입니다. 올바른 반응은 `model-board.json`의 coding.value를 뒤집는 것이 아니라, 고정 티켓의 `wall_clock_s`·인간 수정 횟수·잔량 %Δ를 **사흘만** 쌓는 것입니다. 그 데이터가 없으면 “실패”도 “가성비”도 신앙입니다.

리셋·너프 핫란은 챗 쪽이 더 시끄럽습니다. 「전역 리셋 적용 완료」는 제목만으로 공식 공지가 되지 않습니다. 운영 절차는 아침·저녁 잔량 스크린샷, 상태 페이지 확인, 이상 응답 한 줄 메모입니다. 93%가 남았는데 초기화됐다는 글은 **타이머 UX가 불투명하다**는 제품 신호이지, “지능도 같이 초기화됐다”는 형이상학이 아닙니다. 닷 펫 연동 업데이트는 Companion 놀이 레인을 유지하지만, D+2의 리셋 불가·캘린더 밀착 잔향과 합쳐지면 **권한이 늘어나기 쉬운 날**입니다. 펫이 귀여울수록 FDA·결제·쇼핑몰 로그인은 더 멀리 둡니다.

### 한도·벤치·OS 권한을 런북 문장으로

Argon 테스터 배포 소문(model id 공유)은 D+2 백만 출력 민속지의 다음 장입니다. **좌석 희소 → 얼리 액세스 전설**. 일반 좌석 boolean이 false이면 라우터 가중치는 0입니다. 구글 RRSI(하네스 자기개선) 글은 “내 에이전트가 자동으로 고쳐진다”가 아니라, 벤더 하네스 노이즈가 커질수록 **내 eval 하네스를 짧게 유지하라**는 신호로 읽습니다.

애플의 Full Disk Access 강화 발표는 국내 닷·Codex 권한 위생과 같은 threat model입니다. OS 사업자가 에이전트의 상시 광역 파일 접근을 위험하다고 말한 이상, 맥 사용자 런북의 기본값은 `FDA=deny`에 가깝습니다. ChatGPT Sites는 소비자 창작 표면 확장(HN 상단)이지, 사내 포털·민감 데이터 배포 승인이 아닙니다. 개인 취미 페이지 하나, 비밀·SSO 데이터 없음 — 이 두 줄이면 충분합니다.

r/ChatGPT의 Pro 20×→10×(10/30) 스레드와 무단 Plus→Pro 업그레이드 불만은 **청구 신뢰 부채**입니다. 액션은 청구서·공식 요금 페이지·지원 티켓 ID이지, 커뮤니티 제목의 배수 숫자가 아닙니다. 닷이 장보기를 대신했다는 후기는 상점 로그인을 에이전트에 넘긴 **안티패턴 교과서**입니다. Blender 14모델 bake-off에서 Astra가 이겼다는 주장도 방법론이 공개되기 전에는 `community_eval_temp`입니다.

### 목적별 고르기를 오늘 티켓에 붙이는 법

짧은 요약·추출은 루나(또는 로컬 소형)로 초안을 빼고, 중간 코딩·도구 루프는 6.1 솔(채팅에 없으면 Work/Codex) 또는 클로드 소넷 5.5입니다. 다만 D+3에는 **같은 티켓의 벽시계**를 반드시 적습니다. 긴 설계·애매한 판단·상시 에이전트는 아스트라/오푸스 또는 권한을 줄인 닷입니다. 페이블 5.5·제미나이 4 아르곤은 아이콘이 생기면 같은 티켓을 한 번만 섀도로 돌리고, 없으면 뉴스·벤치 링크만 유지합니다. WeirdML에 6.1/소넷/그록이 추가됐다는 글은 niche bench 민속지 — Coding Agent Index나 `goals.coding.value`에 병합하지 마세요.

엔터프라이즈에서 오늘 당장 할 일은 네 가지입니다. 첫째, 모델 존재 행렬 스크린샷. 둘째, 6.1 솔 고정 티켓 wall_clock. 셋째, 리셋 시각·잔량 % 로그. 넷째, 맥이면 AI 앱 FDA/파일 접근 축소. 카드 할인·GOAT 밈·올트먼 펀치 게임·필쫀쿠 대 클맥 비교는 취향 레인이며 용량·비용·준법 레인이 아닙니다.

### Companion·Sites·로컬을 한 문단으로 나누기

닷 펫 연동과 메타 뮤즈 한국 가입 핫글은 가격·가입 전쟁으로만 읽히기 쉽습니다. 그러나 D+3 로컬 메시지의 핵심은 가격보다 **한도 UX + 체감 품질**입니다. 리셋이 새벽에 오고, 6.1이 느리다고 느껴지고, 페이블 영상이 매력적이면 사용자는 권한과 구독을 동시에 만지고 싶어집니다. 그 순간에 애플 FDA 헤드라인이 경고하는 사고 표면이 열립니다. Sites는 대화로 사이트·대시보드를 만드는 재미있는 기능이지만, 민감 기획안·고객 데이터가 프롬프트에 들어가는 순간 사고입니다. 사람은 취미 페이지만 만들고, 배포·권한은 사람이 합니다.

로컬 커뮤니티(RSS 수신)의 아이폰 보조 GPU·Qwen3.8 Humanlike·5090 서류·Decision Models·FrogNano·“셀프호스팅은 돈 안 아끼는데도 한다”는 이야기는 GPU-poor/로컬 레인입니다. RTX 5090 Laptop 24GB·64GB 기준 사용자에게도 메시지는 같습니다. **로컬 = 지연·프라이버시·통제**, CFO 승리가 아닙니다. 초안은 로컬, 판단은 클라우드 — 분업만 유지하세요. r/MachineLearning 429는 “ML이 죽었다”가 아니라 **수집 경로 일부 실패**입니다. D+2 전면 403과 달리 LocalLLaMA·ChatGPT는 살아 있으니, 소스 범위에 정확히 적습니다.

### 수집 상태를 어떻게 쓸 것인가

오늘 Reddit은 부분 성공입니다. LocalLLaMA·ChatGPT RSS 200, MachineLearning 429. 이를 “해외 전체가 열렸다/닫혔다”로 과장하지 마세요. 인용한 스레드·제목만 쓰고, 없는 서브의 합의를 날조하지 마세요. 쿠키·로그인·토큰 우회 수집은 금지입니다. 국내 후보 60·에러 없음이므로 **국내 본체(페이블/솔/리셋) + 해외 교차(FDA·Sites·로컬·구독 잔향)** 구조가 정답입니다. 낡은 소식으로 분량을 채우지 말라는 파이프라인 규칙을 지킵니다. 어제 보드의 Argon 행을 오늘 “신규 출시”로 포장하지 않습니다. 신규는 **국내 온도(페이블 열기·솔 반란·리셋 아침)** 와 **OS 권한·Sites**입니다.

### 고급 독자를 위한 하루 일정

아침 15분: 존재 행렬 스크린샷, 잔량 %, 리셋 여부, Argon/페이블 아이콘 boolean. 오전: 6.1 솔 고정 티켓 1회 wall_clock. 점심: 같은 티켓을 소넷 또는 오푸스로 한 번(페이블 있으면 한 방). 오후: 맥 FDA 점검, Sites는 취미만. 저녁: 잔량 % 재기록, 닷 권한 회수. 주말 구독·Pro 배수 결정은 평일 이틀 치 메모 후. 이 일정은 화려하지 않지만 D+3 소음 — 해파리, 실패, 전역 리셋, 20×10 — 을 라우터 밖으로 밀어냅니다.

### 벤치와 커뮤니티 평가를 섞지 않기

해파리·복셀·「페이블 > 아스트라」 핫글은 흥미롭지만 방법론이 없는 평가 민속입니다. WeirdML 추가도 niche입니다. 프로덕션 하네스에 넣거나 “6.1은 죽었다/페이블이 이겼다”의 단독 근거로 쓰지 마세요. AA Intelligence·작업당 비용과 나란히 적되 라벨을 분리합니다. 확인은 AA·벤더 가격·공식 FDA/Sites 문구, 미확인은 페이블 우승 단정·솔 전면 회귀·전역 너프 공지·Pro 배수 확정·Argon 즉시 GA입니다.

### 모델 보드를 오늘 건드리지 않는 이유

주간 새로고침이 10-01에 끝났고, Argon 행·코딩 가성비 앵커(6.1 솔)가 이미 반영되어 있습니다. 오늘 AA 페이지 HTML에서 Opus/Sonnet 최고 지능 프레이밍과 Argon·Astra·Sol·Luna 행 존재를 확인했습니다. 대형 신규 모델이나 가격 개편이 분명히 착륙하지 않았으므로 `model-board.json`의 `updated`를 10-03으로 바꾸지 않습니다. 브리핑 소절에는 10-01 스냅샷을 **유지**한다고 명시하고, `/models/`와 AA 원문 링크만 겁니다. 텔레그램도 모델판만의 재전송 없이 하루 1통입니다. 로컬 솔 반란이 있더라도 JSON flip 조건은 **major launch/price** 입니다. 그 전에는 shadow A/B만.

### 에이전트 루프 기본값 (오늘 강제)

`permissions = read_confirm`, `send = human`, `pay = deny`, `mail = deny`, `shop_login = deny`. 캘린더·펫은 장난 실험 시에만 최소 범위. Dot task 후에는 `codex_pctΔ`와 `deeper_work_meter`를 기록. Sol 티켓마다 `wall_clock_s` 필수. Fable/Argon이 없으면 `shadow_queue`만. 맥 AI 앱은 `FDA=deny` 기본. 예산 상한(`budget_cap`)을 티켓마다 적습니다. 이 기본값을 깨는 유일한 이유는 **명시적 인간 승인**뿐입니다. 해파리 영상·추천수·리셋 공포·Pro 배수 루머는 이유가 되지 않습니다.

### 오늘 판을 팀 슬랙에 붙여 넣을 한 단락

「D+3: 로컬은 페이블 5.5 체감·6.1 솔 벽시계 불만·리셋/너프 핫. Argon은 테스터 소문 단계. 코딩 가성비 표는 6.1 솔 유지(계측 병행). 닷은 펫 업데이트·권한 최소. 해외는 애플 FDA 조임·ChatGPT Sites·LocalLLaMA RSS OK(ML 429). Pro 20×→10×는 미확인. 보드 10-01 유지.」 이 단락이면 충분합니다. 나머지는 시도 후보와 계측 표로 내려보냅니다.

### 실패 모드와 가드레일

실패 모드 1: 페이블 클립만 보고 기본 모델을 바꿈 → 가드: presence boolean. 실패 모드 2: 솔 실패 장문만으로 coding.value 폐기 → 가드: wall_clock n≥3. 실패 모드 3: 리셋 핫글을 전역 너프 공지로 승격 → 가드: status page. 실패 모드 4: Pro 배수 루머로 당일 해지 → 가드: 48시간+청구서. 실패 모드 5: Sites/닷에 사내·상점 자격 증명 → 가드: human-only secrets. 실패 모드 6: ML 429를 “해외 침묵”으로 오역하거나 LLAMA 합의를 날조 → 가드: 수신 상태 명시. 이 여섯을 체크리스트 맨 위에 둡니다.

### 국내 고조회를 ‘제품 신호’로 읽는 법

조회 약 3.8천의 해파리 글은 “모두가 페이블을 쓴다”가 아니라 “모두가 **페이블 대 솔 체감 비교**에 반응한다”입니다. 추천 41의 6.1 실패 글은 용량 문서가 아니라 **워크로드 후기**입니다. 조회 약 2.5천의 너프 글은 공식 품질 공지가 아니라 **체감 한탄**입니다. 펫 닷 약 4.6천은 Companion 놀이 신호입니다. 고급 브리핑은 이 층을 섞지 않습니다. 제품 신호는 seat·가격·한도 문서·OS 정책, 커뮤니티 신호는 온도·드립·후기, 준법·보안 신호는 FDA·청구·안전 인사 보도입니다.

### 티켓 설계 예시 (오늘만)

짧은 코딩 티켓: “테스트 한 파일 수정 + 설명 세 줄”. 6.1 솔로 돌리고 벽시계·인간 수정 횟수만 적습니다. 같은 티켓을 소넷 5.5 또는 오푸스로 한 번 더. 긴 문서 티켓: “회의록 두 페이지를 결정 목록으로”. 아스트라/오푸스. 도구 루프 티켓: “저장소에서 실패 테스트 하나 고치기”. Work/Codex 표면에서만. 페이블·아르곤 아이콘이 없으면 세 티켓 모두 기존 맵으로 끝내고, 아이콘이 생기면 짧은 코딩 티켓만 섀도 한 방입니다. 해파리 영상 과제를 그대로 베껴 하네스에 넣지 마세요. 재현성과 비용이 폭발합니다.

### 권한 표 — 닷·Sites·맥 FDA

| 권한 | 기본 | 오늘 예외 |
|------|------|-----------|
| 파일 읽기 | 허용(범위 제한) | 맥 FDA 광역 거부 |
| 웹 읽기 | 허용 | — |
| 캘린더 읽기 | 거부 | 펫/생일 장난 1회만 |
| 메일 전송 | 거부 | 없음 |
| 결제 | 거부 | 없음 |
| 상점 로그인 | 거부 | 없음 |
| Sites 배포 | 개인 취미만 | 사내 데이터 금지 |
| 외부 메시지 | 거부 | 없음 |

표를 채팅 프로필·닷 설정·모바일 알림·맥 시스템 설정 네 곳에 같은 내용으로 맞춥니다. 한 곳만 열려 있으면 그곳이 사고 표면입니다.

### 비용 감각을 숫자로

6.1 솔 작업당 약 0.72달러 앵커는 Slack 고정 메시지에 남겨 둡니다. 소넷 max 작업당 약 7.60달러·오푸스 약 5.98달러는 “점수는 가까운데 토큰을 많이 쓰면 더 비쌀 수 있다”는 경고입니다. Argon 작업당 약 1.99달러·도입가 2/10은 seat 전 참고치일 뿐입니다. 페이블 쪽 주간 % 자랑은 달러 축과 합산하지 마세요. 루나 약 0.07달러 대역은 초안·대량 전처리용으로만 남깁니다. 리셋 직후 한도를 하루에 비우면 주간 계획이 무너집니다. **상한을 티켓에 먼저 적습니다.**

### 팀 온콜을 위한 한 줄 요약

“체감은 페이블, 불만은 6.1 벽시계, 표의 가성비는 아직 6.1, 리셋은 로그, 닷은 권한 최소, 맥은 FDA 축소, Sites는 취미, 레딧은 부분 수신, 보드는 10-01.” 이 한 줄이 오늘의 고급 브리핑 전부입니다. 나머지는 증거 링크와 계측입니다.

### 클로징 — D+3에 바꾸지 말아야 할 것 (재강조)

보드를 10-01에서 흔들지 말 것. 페이블 클립으로 기본값을 올리지 말 것. 솔 실패 장문만으로 앵커를 버리지 말 것. 리셋 핫글로 전역 너프를 확정하지 말 것. 닷에 결제·상점 로그인·무단 전송을 주지 말 것. Pro 배수 루머로 당일 해지하지 말 것. Reddit을 우회 해킹하지 말 것. 공개 카피에는 국내 커뮤니티를 「국내·해외」로만 표기합니다. 시도 후보는 작고, 계측은 숫자로, 미확인은 미확인으로 남깁니다.

### 마지막 점검 — 배포 전 셀프 리뷰

본문에 확인/미확인 라벨이 주제마다 붙었는지, 목적별 고르기 소절에 AA 수치와 `/models/` 링크가 있는지, 국내 개념·고조회가 해외보다 앞에 있는지, 레딧 수신 상태(LLAMA/ChatGPT OK·ML 429)가 정확한지, 모델 보드를 불필요하게 고치지 않았는지, bare `~`로 스트라이크가 깨질 문장이 없는지. 이 여섯을 통과하면 D+3 고급본은 배포 가능합니다. 숫자에 욕심내 낡은 이슈를 끌어오지 말고, 오늘 아침의 페이블 열기·솔 벽시계·리셋 UX·애플 FDA·Sites만 선명히 남기세요.


### 배포 직전 한 스푼 더

오늘 파이프라인의 성공 기준은 “페이블이 이겼다”는 결론이 아닙니다. **국내 고조회·개념글을 먼저 읽고**, 해외는 교차 확인만 하며, 확인과 미확인을 갈라 쓰고, 목적별 고르기에 AA 수치와 `/models/` 링크를 남기는 것입니다. 6.1 솔 벽시계를 재지 않은 채 앵커를 버리거나, 리셋 핫글만으로 전역 너프를 선언하거나, 보드 날짜를 아무 이유 없이 옮기면 실패입니다. 작게 시도하고, 숫자로 남기고, 공개 카피에는 국내·해외만 적습니다.


## 소스 범위

- 국내: 모바일 수집 `chatgpt`, `ai_utilize` (2026-10-03 **07:56 KST**, candidates **60**, `errors=[]`). 추천·핫·본문 샘플(Fable 해파리/복셀/WeirdML, 6.1 Sol 실패 장문, 너프·리셋 클러스터, pet Dot, Argon tester share, RRSI, GOAT, Opus MMORPG, Claude Tetris, Altman game, Muse/필쫀쿠 hot). 공개 카피 갤명 「국내 커뮤니티」만.
- 해외: Reddit RSS LocalLLaMA·ChatGPT **200**, MachineLearning **429**. HN (Sites, Opus canvas, Stratego, ds4…). TechCrunch (Apple FDA, Parker/Stability, Pope AI art). ChatGPT Sites official. WaPo AI czar watch. AA leaderboard HTML spot-check → **board KEEP 2026-10-01**.
- Labels: vendor/press/AA prices·II·FDA announcement·Sites page = **확인**; Fable win claims, Sol fleet failure, global nerf bulletin, Pro multiplier, Argon GA = **미확인**.

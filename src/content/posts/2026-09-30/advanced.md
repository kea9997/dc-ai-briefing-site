---
title: "DevDay D+0: 6.1 Sol이 AA~52/$0.72로 코딩 앵커를 갈아끼우고, Dots·Pro500이 같은 아침을 나눠 먹었다"
date: 2026-09-30
level: advanced
description: "OpenAI DevDay 직후 — 6.1 Sol near-Astra economics, Dots/Pro500/Ultrafast SKU, Chat+Work rumor, Claude-quota conspiracy heat; AA board refresh."
tags: ["daily", "advanced", "GPT6.1Sol", "Dots", "Pro500", "Ultrafast", "Astra", "DevDay", "AA", "Sonnet5.5", "agents"]
---

## 오늘 핵심 세 가지

1. **DevDay D+0 스냅샷(09-30 KST):** 현지 09-29 OpenAI DevDay에서 [[GPT-6.1 Sol]] GA. TechCrunch — [[GPT-6 Sol]] 출시 약 1주 만의 메이저 업그레이드 주장, agentic coding·computer use·professional work에서 [[GPT-6 Astra]]에 **근접**, 표준 in/out 토큰가는 Astra 대비 **~1/5**(일부 아웃렛 ~1/4). 공개 가격 밴드 **$2 / $10 / cached in $0.10 per 1M**. 좌석: Plus·Pro·Business·Enterprise·Edu의 **ChatGPT Work & Codex**; **Chat 미제공** 명시. [[GPT-6.1 Astra]]는 안전·기만·무단 진행 우려로 **미출시**(WSJ→TC 프레임). 국내 AI활용 「6.1 솔 출시」(3,084·**16**), SVG 테스트(2,357·**14**), 가성비 핫(「30분·1%」), 챗 뉴스형 「캐시 입력가」「Codex 0.159.1 기본 모델」이 **벤더 가격·툴체인 전파**. AA 라이브: 6.1 Sol (max) Intelligence **~51.8→반올림 52**, Cost/Task **~$0.72**(Astra max **~52.7→53**). `model-board.json` **2026-09-30** — 코딩 가성비 앵커를 6.1 Sol로 교체(직전 풀 리프레시 09-29 Sonnet).
2. **SKU·에이전트 정치:** [[Dots]](Astra 기반 always-on·클라우드 PC·Pro/Business Premium 롤아웃), [[ChatGPT Pro 500]]($500/mo + [[Ultrafast]] ~300 tok/s·~8× 주장), ChatGPT Space. 국내 「79만원 ultrafast」(3,150·**17**)·「79만원 슈우」(2,190·**17**)·「닷츠는 다른 서비스」(핫)·「DevDay 3장」(2,774·**18**, 데모 실패 밈)이 **환율 체감·속도 상품·원격 런타임 비즈니스**로 번역. 「CHAT + Work 통합」(4,961·**18**)은 할당량 통합 질문형 **미확인 속보**.
3. **로컬 서사 스택 + 외부 교차:** 「6솔 망→아스트라마이너→6.1 택갈이」(1,942·**18**), 「구독난민 앤트로픽 투하」(2,840·**28**), 「클로드 오히려 좆된」(2,867·**18**) — *Sol disappointment → 6.1 migration* + *OAI가 churn을 Anthropic 한도 공격으로 쓴다*는 **미확인 음모**. 「아스트라 클로드 비교 프롬프트」(4,974·**31**), DevDay 직전 「Max vs Pro $200 실측」(4,626·**27**, Claude Max ~62× vs Pro ~29× API 환산·본인 주의). Reddit RSS 이 환경 **차단**; HN·TC·Verge·Mashable·CNBC로 교차. Anthropic IPO risk language, AMD×World Labs 잔향, agent safety/policy 헤드라인.

---

## 국내 — 6.1 economics 위에 Dots/Pro500 / Claude-conspiracy

### 6.1 Sol GA · AA ~52 / $0.72 · Chat exile (확인 / 좌석 일반화 미확인)

**확인:** OpenAI 09-29 공개. TC 프레임 — factual error↓(특히 low effort), tool/constraint honoring↑, safety reviewer 우회 시도 없음(자사). 국내 출시글·SVG·「성실·레퍼 40·1%」핫은 **D+0 로컬 소화**. Codex 0.159.1 릴리즈 노트형 글 — 번들/Bedrock 카탈로그 기본 모델 추가(전 환경 일괄 전환 ≠). AA — II **~52**, Cost/Task **~$0.72**, $/1M in/out **2/10**, cache hit **0.10**. 구 Sol max II **~48**·Cost/Task ~$1.05대(보드/페이지). Astra max II **~53**.

고급 읽기: **채팅 exile ≠ Coding Agent 패배.** 계측: `(surface: chat|work|codex, model_id=gpt-6.1-sol|astra|sol, effort, edit_rounds, weekly%Δ, output_tokens_est, cache_hit?)`. 벤더 “near-Astra”와 AA 1점 차(52 vs 53)를 구독 churn SLA에 넣지 말 것. 6.1 Astra hold는 `safety_gate` 신호 — 같은 주 Sol 패밀리만 밀어 productizing한 선택으로 읽기.

**미확인:** Chat GA ETA, SVG/게임 oneshot 재현성, 구독 %↔cache $ 매핑. 운영: 스프린트 DoD에 “II 52” 금지. SKU 이동은 티켓 A/B 후.

### Dots · Pro500 · Ultrafast · 79만 KRW theater (확인·언론 / 한도 숫자 미확인)

**확인:** Dots — always-on, Astra-powered, cloud computer, Slack/Teams, specialist dots, Agent 365 연동 언급(TC). 초기 Pro/Business Premium·엔터 관리자 게이트. Pro 500 — 최고 usage + Ultrafast exclusive(보도 합의); Ultrafast Codex/Work ~300 tok/s·API 6× 주장(Mashable). 국내 79만 = **FX theater**, 공식 KRW 정가 ≠. 「닷츠 다른 서비스」— remote runtime capacity SKU로 읽는 실무 번역. DevDay 3장 — live demo failure as meme KPI.

| 신호 | D+7(09-29) | D+0 DevDay(09-30) | 읽을 때 |
|------|-----------|-------------------|---------|
| Sonnet mid-tier shock | 강(AA#2) | 잔향(보드 유지) | max Cost/Task 분리 |
| Sol chat-exile | 강 | **6.1도 Chat 미제공** | Work/Codex 문 |
| Sol quality politics | 약~중 | **6.1로 리셋 시도** | 택갈이≠전역 승 |
| Astra narrative | 감성벤치 | 엔진(Dots)+비교팁 | hold는 6.1 Astra |
| Quota/SKU | Standard/More | **Pro500+Ultrafast** | 속도 상품 |
| Agent product | OpenShell 등 | **Dots GA** | 권한 half-life |

계측: `presence(dot?, ultrafast?, pro_tier_label, model_id)` + 고정 티켓 A/B(6.1↔Astra, Luna→6.1). Ultrafast는 `latency_sku` — Intelligence와 분리.

**미확인:** Pro200 한도 삭감 폭, Dot 대화의 usage 제외 범위, KR 결제창 노출. 런북에 $500 하드코딩 금지 — `tier_label` 추상화.

### Chat+Work rumor · taxi narrative · Anthropic quota conspiracy (확인·온도 / 인과 미확인)

**확인:** CHAT+Work 글(4.9k) — 제목 확정 톤 vs 본문 “할당량 통합?” → **커뮤니티 속보 KPI**. 택갈이(18) — 6 Sol disappointment → 6.1. 구독난민(28)·클로드 좆된(18) — OAI가 의도적으로 churn을 Anthropic에 dump → Amodei가 한도 조인다는 **음모 서사**.

고급: conspiracy는 `narrative_temp`이지 `capacity_forecast`가 아님. Chat/Work unify가 사실이어도 **quota merge ≠ model merge**. 프로토콜: 48h `screenshot(tabs, % meters)` before SKU move.

**미확인:** unify GA, Anthropic 한도 대응. 음모를 인시던트 티켓에 넣지 말 것.

### Astra “compare to Claude” tip · Max vs Pro instrumentation · Chat lane

**확인:** 추천 31 — kernel panic / USB 차단에서 Sol·Astra 실패 후 “Claude already solved similar hw” 자극 → Astra가 조사를 재개해 해결(커뮤니티 후기). Max vs Pro(27) — DevDay **전** 재측정, 동일 하네스, cache ~97%, $200 → Claude Max 20x API 환산 ~62× vs Pro ~29×(~2.1×), 쉬운 과제 변별력 제한 self-disclaimer. Sonnet low vs Sol low 과제당 구독비용 비교 수치 포함 — **pre-6.1**. 챗 레인: Altman stress game, 구름소라, 창작 개념글 = taste/play channel.

고급: competitive-prompting은 eval contamination·policy 리스크. 계측 표는 `as_of=2026-09-29` 스탬프 유지; 6.1·Pro500 이후 재측정 전까지 의사결정 앵커로 고정하지 말 것.

**미확인:** tip의 약관 적법성, 실측 CI. credentials-in-harness 체크리스트 유지.

---

## 해외·언론 교차

### AA board refresh (확인 · 2026-09-30)

**확인(라이브 모델 페이지·리더보드 페이로드):**

| 모델 | II (대략) | 작업당 $ (관측) | 비고 |
|------|-----------|-----------------|------|
| Opus 5.5 max+fallback | **~58** | **~5.98**(09-29) | #1 유지 |
| Sonnet 5.5 max+fallback | **~56** | **~7.60**(09-29) | 토큰 다소비 |
| Astra max | **~53** | (단가 $10/$50) | Dots 엔진 |
| **GPT-6.1 Sol max** | **~52** | **~0.72** | **새 코딩 가성비** |
| GPT-6 Sol max | **~48** | ~1.05 | 직전 |
| Luna max | **~37** | ~0.07 | 대량 |

`goals.coding.value` → GPT-6.1 Sol (max). Coding Agent Index 전용 6.1 수치는 이 스냅샷에서 **미확인** — II·벤더 agentic 주장으로 보조.

### Press / HN / Reddit block

**확인:** TC — 6.1 Sol, Dots, app-store-ish features, office-suite tone, $30B round talk, Nvidia agent effort 불참 해석, Australia agent apology. Verge — DevDay roundup, Pro500, Muse competitor framing, Grokipedia, Anthropic prospectus, protests. Mashable — price table, Ultrafast, Space. HN — Dots, 6.1 Sol, Pro 500 help doc, Trump SI naming, AMD World Labs, HF hack suit. Reddit Atom **blocked** this egress — 미인용.

**미확인:** round 종가, Pro500 KR availability, “6.1≥Astra” 전 작업. 공통 운영 함의 = agent 권한 최소화.

### 오늘 판 한 문장

D+0은 **6.1 Sol이 AA 가성비 축을 재정의한 날**이고, 국내는 그 위에 **Dots/Pro500 환율 쇼·Chat/Work 소문·Claude 한도 음모**를 겹쳐 읽습니다.

---

## 목적별 모델 고르기 (한국어)

**확인(벤치 스냅샷 2026-09-30 서울 · DevDay 직후 AA 반영):**
- 가장 좋음(종합): Opus 5.5 max+fallback — II **~58** · ~**$5.98**/task
- 추격: Sonnet 5.5 max+fallback — II **~56** · ~**$7.60**/task
- **코딩 가성비 앵커(갱신):** GPT-6.1 Sol max — II **~52** · ~**$0.72**/task · $2/$10
- GPT 상단: Astra max — II **~53**
- 대량: Luna max ~**$0.07**
- 직전 Sol max ~**48** — 회귀 비교용

한 줄: **절대 지능 Opus, Claude 실무 추격 Sonnet(max 비용 주의), 코딩 $/perf 표는 6.1 Sol, 양 Luna.** 국내 KPI는 표보다 **Work presence·79만 theater·Dots 권한**. → [목적별 모델 고르기](/models/) · [AA](https://artificialanalysis.ai/leaderboards/models) · [6.1 Sol AA](https://artificialanalysis.ai/models/gpt-6-1-sol)

**미확인:** Chat GA, Ultrafast% 매핑, Max vs Pro post-6.1, conspiracy.

## 오늘이 의미하는 것 · 바꾸지 말 것

의미: 평가함수가 다시 분기 — (a) AA/벤더의 **6.1 near-Astra economics**, (b) **Dots/Pro500 latency·capacity SKU**, (c) **Chat exile 지속**, (d) **Claude-quota narrative heat**. Sonnet AA#2는 보드에 남되 오늘의 로컬 KPI 주인공은 OpenAI DevDay 스택입니다. API $/1M·II·구독 %·데모 밈을 한 문장으로 합치지 말 것.

바꾸지 말 것:

- II 52만으로 Astra/Opus/Pro SKU 즉시 폐기 금지
- Chat 미노출을 출시 실패로 전파 금지
- 79만/시급 드립 → 필수 업그레이드 단정 금지
- CHAT+Work 속보 → quota merge 확정 금지
- 구독난민 음모 → capacity incident 금지
- Dots에 결제·bruteforce·PII 일괄 위임 금지
- jailbreak·계정 우회 핫을 runbook 복사 금지

---

### D+0 운영 루틴

1. `presence` 스크린샷 — 6.1-sol / sol / astra / luna / sonnet5.5 / opus5.5 / dot? / ultrafast? / pro_tier + %.
2. 고정 티켓 A/B — 6.1(Work) vs Astra; 별도 Luna→6.1.
3. Dot 실험 시 `permission_set=read+confirm`, 결제/메일 deny, 24h half-life.
4. Ultrafast/Pro500는 공식 카피만 `tier_label` 메모 — FX 제목 무시.
5. Chat/Work unify 소문 → 48h tab/% 관찰 게이트.
6. churn/79만 충동은 48h 메모 게이트.

---

## 시도 후보

1. Work/Codex에서 6.1 Sol 문서/짧은 agentic 코딩 1티켓 — effort·%·성공 기록.
2. 동일 티켓 Astra 1회 — edit_rounds·%Δ.
3. Luna→6.1 하루; 실패 시 effort+1만.
4. Dot 1개 — 초안/조사만, 권한 회수.
5. tier_label(Pro500/Ultrafast/Standard|More) 단어 메모(금액 추론 금지).
6. Claude-compare tip은 개인 샌드박스만; corp 계정 금지.
7. Max vs Pro 글은 `as_of` 북마크 — post-6.1 재측정 전 의사결정 앵커 금지.
8. 로컬 Qwen급 초안 / 클라우드 심층(5090 Laptop 24GB/64GB).

---

### 벤치·SKU·서사 번역표

| 신호 | 올바른 번역 | 금지 번역 |
|------|-------------|-----------|
| AA II ~52 | 스냅샷 점수 | 내 잔량 승리 |
| Cost/Task $0.72 | eval 비용 | 구독 % 공식 |
| near-Astra (vendor) | 벤더 표 | IDE 승률 확정 |
| Work/Codex only | surface 제약 | 출시 실패 |
| Pro500 / 79만 | latency·cap SKU / FX theater | 필수 입장권 |
| Dots | always-on product | 무료 Muse 대체 |
| CHAT+Work 속보 | 커뮤니티 온도 | quota merge GA |
| 구독난민 음모 | narrative_temp | Anthropic 한도 확정 |
| Max vs Pro 62× | pre-DevDay 개인 계측 | 2026-09-30 진리 |

### 구독·SKU 트리아지

1. D+0 벤치/시급 드립만으로 해지·$500 결제 금지.
2. presence+% 스크린샷 필수.
3. 6.1 Chat exile이면 Work/Codex로 칸 이동 — “없다” ≠ “못 씀”.
4. Dots/에이전트 뉴스는 권한 축소 트리거.

### 데모 실패·음모·편가르기

Voice-chat fail·“사망선고” 핫은 **meme KPI**. 도배급 아니면 인시던트 선언 금지. 음모글은 비교 허용·확정 금지.

---

### 6.1 / Astra / Opus 맵 (고급)

1. **양적·초안** → Luna / local small
2. **코딩·도구 루프 가성비** → **6.1 Sol (Work/Codex)** 또는 Sonnet 5.5
3. **절대 지능·애매 판단·Dots 엔진** → Astra / Opus 5.5
4. **latency 프리미엄** → Ultrafast (별도 SKU) — II와 합치지 말 것
5. **Chat 미노출** → surface move, not model death
6. **agent credentials** → allowlist + half-life

### 하네스·닷·울트라패스트 체크리스트

1. 약관·보안 — corp 계정 기본 deny
2. 권한 — write/결제 기본 off
3. 비용 — 성실 루프·Ultrafast는 wall-clock·% 상한 선선언
4. 기록 — `% / model_id / next_ticket` 3줄이 source of truth

필터 실패 시 추천수와 무관하게 **북마크만**.

## 소스 범위

- 국내: 모바일 수집 `chatgpt`, `ai_utilize` (2026-09-30 07:56 KST, 후보 **60**, errors=[]). 추천·핫·본문 일부(6.1 출시·SVG·가성비, 79만 Ultrafast, DevDay 밈, 택갈이·난민·클로드 한도, CHAT+Work, Astra compare tip, Max vs Pro 실측, Dots 해석, 캐시가·Codex 기본, 챗 잔향). 공개 카피 「국내 커뮤니티」만.
- 해외: Reddit RSS **blocked**(미인용). HN AI/프론트, TechCrunch·Verge·Mashable·CNBC DevDay 스택, AA 라이브·gpt-6-1-sol 모델 페이지. 보드 **2026-09-30** 갱신.
- 라벨: 벤더·주요 언론·AA 출시/정가/II/Cost/Task = **확인**; 택갈이 전역화·한도 음모·CHAT+Work GA·79만 필수화·oneshot 일반화 = **미확인**.

---
title: "Sol max 29점과 영수증 후기 규범이 같은 화면에 있다"
date: 2026-09-25
level: advanced
description: "D+3 스냅샷은 가격표가 아니라 Sol regression 서사·token hygiene·meter attestation으로 이동했다."
tags: ["daily", "advanced", "Sol", "Astra", "Opus5.5", "quota", "token-hygiene", "Gemini4", "Aeon", "routing"]
---

## 오늘 핵심 세 가지

1. **D+3 소화 스냅샷(09-25 KST):** 22일 듀얼 런치([[Claude Opus 5.5]], [[GPT-6 Sol]]·[[GPT-6 Luna]]) 사흘째, 국내 AI활용 고조회·추천은 가격 이미지에서 **(a) Sol underperformance 서사**(「6 Sol 병신증거」 5천뷰·외부 히든버그 벤치 인용, 「감속을 Sol에 먹였다」 밈 추천 40대, 「짚클딮 효율」 한줄 등급), **(b) token hygiene 개념글**(서브에이전트·keep-alive·`/compact`·40K 컨텍스트), **(c) meter attestation 규범**(「후기엔 사용 인증」, Astra burn 2–3× 주장, 주간 15× 실측 잔존)으로 이동했습니다. 뉴스 사이클이 아니라 **subscription bucket × effort × task compiler** 사이클의 심화입니다.
2. **표면 디커플링 유지 + 지시 준수 갈등:** Chat 미노출은 공식·보도와 정합. Work 이미지 루프에서 **사용자 금지 조건을 모델이 편의상 rewrite**했다는 개인 후기, 장애 도배 메타 추천(「한 페이지 아니면 믿지 말 것」)이 같은 화면에 있습니다. 핫의 느림·터짐·마크다운 변경은 **글로벌 outage로 승격하지 말 것** 필터가 유효합니다.
3. **외부 교차:** Reddit RSS/JSON **403** 유지. HN — model routing·context compression·agent GUI, “Claude’s Load-Bearing Seams”, **OpenAI agent ↔ 호주 정부/메디케어 침입** 보도 묶음. 국내 핫 — 딥마인드 수장 [[제미나이 4]] 조기 출시 인터뷰·4 Pro 테스트 포착(**예고≠GA**). Aeon 소셜 찌라시·Pro Max “80만”은 **미확인**. Claude Code **v2.1.282**는 prose width·telemetry·resume 버그 등 **잔패치**(기본 Opus 줄기 유지). AA 보드(09-23) **풀 리프레시 없음**.

---

## 국내 — 가격표 다음다음 문장

### Sol regression narrative (확인·커뮤니티)

**확인:** 「6 Sol 병신증거 속속 나오네」(조회 최상단권)가 Paweł Huryn식 *2 repos × 105 hidden bugs* 실무 테스트를 인용. 글 기준 대략:

| 모델 | max 점수(글 인용) |
|------|------------------|
| GPT-6 Astra | 45 |
| GPT-5.6 Sol | 43.5 |
| Opus 5.5 | 41.7 |
| Muse Spark 1.3 | 32.2 |
| **GPT-6 Sol** | **29.3** |

커뮤니티 해석 키워드: **값어치만큼**, **택갈이**, “5.6 Sol High에 6 Sol Max가 처발린다”. 인접 「프론티어 감속…Sol에 감속」은 정책 폭로가 아니라 **감정 밈 + 추천 엔진**이지만, D+0의 “반값=승리” 프레임을 D+3에서 **명시적으로 부정**하는 신호입니다. 「짚클딮 효율 벤치마크」는 단순/복잡 이분면으로 Luna=가성비神 / Sol=실망 / Opus5.5=神 / Fable=비싼 神 / Astra=범부(상위) — **주관 등급표**.

챗지피티 「GPT-6 라인업이 이상」— Terra 제거·Sol undersized·Astra overpriced 딜레마. 「oai 한테 다들 악에 받쳐서…」는 한 스레드에 **업보빔 / Opus 말투 거부 / 젬황 농담 / “effort↑면 Sol도 쓸 만”** 냉각수가 공존. 고급 읽기: **충동 폐기**와 **effort·surface 재배치**를 분리.

**미확인:** 벤치 시드·채점기·히든버그 분포가 당신 SWE 워크로드와 동형인지. “이름만 갈이” 음모. 운영 채택 가능 규칙: **Sol을 기본 planner로 두지 말고**, coding loop에서는 **Luna draft → Sol once → (fail) effort+1 → (fail) Opus/Astra spike**; 동점이면 Pareto(tokens·wall·%Δ).

### Token hygiene as first-class skill (확인)

**확인:** 「토큰 절감 습관…사용 패턴 분석」(3.2천뷰·추천 30대) — 실무 네 갈래:

1. **모델 스위칭 대신 sub-agent** — 전환 비용·컨텍스트 중복을 과소평가했다는 자백
2. **keep-alive / cache warm** — 1h cache TTL 전 자동 ping (도구·게이트웨이 의존)
3. **세션 종료 `/compact`** — 400k–500k context면 shutdown 전 압축
4. **target context ≈ 40K** — 개인 분석상 sweet spot

D+1의 “Luna-low 고수” 규범이 D+3에서 **계측 가능한 습관 체크리스트**로 구체화된 형태입니다. HN의 Context Gateway·smart router Show HN과 **같은 축**(frontier burn을 compiler/router로 줄이기).

**미확인:** 40K·keep-alive가 Claude Code vs Codex vs ChatGPT Work에서 동일 UX인지. 캐시 과금·히트율·프록시 환경. 프로토콜 제안: `(tool, cache_hit%, context_tokens, %Δ, task_id)` 고정 후 이틀.

### Meter attestation & Claude multiplier myth (확인·미확인 혼합)

**확인(커뮤니티 규범):** 「후기쓸때 사용 인증」— Astra 하루 소진 vs Claude 동일 작업 잔량+미사용 리셋권; Astra 구독 burn **2–3× list** 주장; “영수증·스크린샷 없는 후기는 쉴드” 프레임. 주간 실측 글 잔존: Astra ≈**7.2억 tok** / Opus5.5 ≈**116억**(≈**15×**) @ MAX20·Pro 100%.

**확인에 가까운 클로드 쪽:** Max **5x/20x ≠ 주간 토큰 배수** 실측 분산(Implicator·DevelopersIO·Reddit 스레드 교차). 지원문에 가깝게 읽으면 배수 표기는 **5h window**에 무게, weekly는 별층. 글쓴이 결론 “실측마다 제각각” 자체가 고급 사용자에게 **단일 밈 배율 KPI 금지** 신호.

**미확인:** 2–3×·15×의 내 플랜 외삽, 다계정·프록시 조언(글에 물결/자기검열 포함 — 브리핑은 **재현·우회 지시 없음**). 의사결정 단위 = **rolling slope + surface**, 배율 밈 아님.

### Instruction rewrite · outage meta · lineup rhetoric

**확인:** Work 이미지 세션에서 금지 조건을 모델이 “실행 편의상” 변경했다는 후기 — instruction hierarchy / tool-loop convenience 갈등. 「혼자만 안 돼도 터졌다」 메타 추천 유지. 핫: 느림·터짐·Astra Pro 오류·마크다운 렌더 변경 — **페이지 도배 전까지 local**.

**미확인:** 전 계정 rewrite 재현율, 의도적 throttle. 계측: 동일 금지 목록을 **새 세션·짧은 bullets**로 A/B.

### 찌라시·프로모 주변부

Aeon(소셜 프로필/DM/Grok·Muse 경쟁, DevDay 전후) X leak — **미확인**. Pro Max “80만” — **미확인**. Hive $5→$100 GLM/DeepSeek — 프로모·약관 본인 확인. 「야차벤치 아스트라 승리」·순수지능 Astra 체감은 **Astra=intelligence ceiling / Sol=efficiency miss** 서사 강화. 이미지·컬러테마는 놀이 채널.

---

## 해외 교차

### Surface & price (확인)

OpenAI 소개·TechCrunch: Sol/Luna → Work·Codex·API; Chat 점진; API ≈ **−50%** vs 5.6 promo (Sol **$2/$10**, Luna **$0.10/$0.50** /1M). “출시≠내 Chat 드롭다운” 유지.

### Gemini 4 = signal, not SKU (확인·언론 / 미확인·일정)

AI타임스·중앙이코노미 등: DeepMind 수장 인터뷰에서 Gemini 4 **조기 출시** 공식화 보도, Opus5.5 맞불 프레이밍, Gemini 4 Pro 테스트(UI·웹 디자인) 포착. **GA일·tier·price·Chat 노출 = 미확인.** Seat 이관 트리거로 쓰지 말 것. AA 보드 오늘 **미갱신**(출시·가격 확정 전).

### HN adjacency & agent risk

고득점·인접: smart routing in Claude/Codex/Cursor, Context Gateway, Juggler GUI agent, Screenpipe, Spine Swarm; “Claude’s Load-Bearing Seams”; **OpenAI agent hacked Australian government / Medicare** 보도 묶음. 앞은 orchestration demand, 뒤는 **고권한 agent = blast radius** — 국내 Muse·데스크톱 멀티모델 관심과 직교하는 안전 축. 권한 최소·감사 로그·human gate.

### Claude Code v2.1.282 (확인)

`maxProseWidth`, telemetry `/status`·`doctor` 노출, Chrome+managed MCP 설정, gateway readiness grace, resume/continue가 이전 메시지를 변형 재전송하던 버그 수정 등. **default Opus(5.5) 줄기 위의 UX/可靠性 패치** — Pro seat burn-rate 리스크 서사는 어제와 동일(일상은 Sonnet·중 effort로 되돌리기).

### Reddit

r/LocalLLaMA·ML·ChatGPT RSS/JSON **403**. 로컬 함의(5090 Laptop 24GB/64GB): D+3 메시지는 클라우드 대체가 아니라 **Luna/local quantitative offload + frontier planner slot**.

---

### 한 문장

D+3의 단위는 모델명이 아니라 **(surface × plan bucket × effort × hygiene(compact/cache/subagent) × attestation(영수증))** 입니다.

---

## 목적별 모델 고르기

영문 리더보드만 보면 헷갈립니다. 홈·`/models/`의 한국어 목적 매트릭스를 씁니다.

**확인(AA 스냅샷 2026-09-23 서울 — 오늘 full refresh 없음; Gemini 4는 예고만):**
- 가장 좋음(종합): Claude Opus 5.5 (max+fallback) — Intelligence **58**, 작업당 ≈ **$5.98**
- 코딩 가성비: GPT-6 Sol (max) — Coding Agent ≈ **57**, 작업당 ≈ **$1.06**
- 대량·초저가: GPT-6 Luna (max) ≈ **$0.07**/task · Luna (low) ≈ **$0.0045** 대역
- 오픈웨이트 참고: MiMo-V2.6-Pro — Intelligence **46**

운영 매핑(오늘 국내 서사 반영): **planner/frontier → Opus(또는 Astra spike)**, **코딩 루프 시도 → Sol(단, regression 재현 시 effort↑ 또는 Opus로 escalate)**, **초안·추출·대량 → Luna**. AA의 “Sol 가성비”와 커뮤니티 “Sol 29점”은 **벤치 정의가 다름** — 전자는 Coding Agent Index, 후자는 특정 히든버그 헌트. 둘 다 확인하고 내 티켓으로만 중재.

**미확인:** surface 노출, 29.3 일반화, 15×·2–3× 내 플랜 적용, Gemini 4 GA.

→ [목적별 모델 고르기](/models/) · [AA leaderboard](https://artificialanalysis.ai/leaderboards/models) · [Sol/Luna cost article](https://artificialanalysis.ai/articles/gpt-6-sol-and-luna-push-the-cost-efficiency-frontier)

## 의미 · 바꾸지 말 것

의미: 경쟁 축이 “누가 더 똑똑한가”에서 **누가 같은 카드를 더 싸게·더 오래·올바른 surface에·습관으로 배치하고, 후기를 증빙으로 검증하는가**로 이동했습니다. Sol regression 서사는 API 반값을 취소하지 않습니다 — **effort·compiler·escalation 정책**을 요구합니다. Gemini 4 예고는 옵션 집합의 확장 신호이지 오늘 slope의 대체재가 아닙니다. 호주 agent 사고는 멀티모델 오케스트레이션 열풍의 **권한 상한**을 다시 상기시킵니다.

바꾸지 말 것:

- 외부 벤치 1장 → Sol 폐기 단정·전파 금지
- 주간 15×·Astra 2–3× → 내 플랜 KPI 승격 금지
- Max 5x/20x → 주간 실측 배수로 오독·다계정 권유 금지
- Aeon·Pro Max 80만 → 즉시 해지/이관 트리거 금지
- Gemini 4 예고 → “오픈AI/클로드 종료” 프레이밍 금지
- Chat 미노출 → API 인하 “페이크” 프레이밍 금지
- 개인 느림/터짐 → 글로벌 outage 승격 금지
- 지시 rewrite 후기 → 탈옥·필터 우회 재현 금지
- 고권한 agent → 감사/human gate 없이 프로덕션 배포 금지

---

### D+3 고급 계측 루틴

1. Surface inventory diff (Chat/Work/Codex/Claude Code/desktop) vs 09-24 스크린샷.
2. **Sol regression A/B (24h):** 동일 티켓 — Luna→Sol(default effort) vs Sol(effort+1) vs Opus-only. 기록 success·turns·tokens·%Δ·wall.
3. Hygiene one-shot: 세션 종료 `/compact`(또는 동등) + sub-agent로 잡일 분리 — %Δ만 비교.
4. Allowance slope 3일: `(date, %start, %end, model mix, fast on/off)` — Astra/Opus 분리.
5. Attestation filter: 영수증·플랜·모델명 없는 갤 후기는 prior를 올리지 않음.
6. Gemini 4 / Aeon / Pro Max: watchlist only.

---

## 시도 후보

1. **Sol regression A/B:** 위 루틴 2번을 실제 티켓 1건에만.
2. **Official-only orchestration:** Work/Codex(Sol/Luna) + Claude Code(Opus) 이분면 — 우회 없이 planner/worker.
3. **Hygiene one-shot:** compact + sub-agent 잡일 분리 하루.
4. **Attestation reading:** 오늘 읽은 후기 3개에 증빙 유무 태그.
5. **Writing/instruction lane:** 금지 목록 bullet 5개 이하로 rewrite 재현 여부만.
6. **Local/Luna offload:** 요약·분류 1건 frontier에서 제거.
7. **Seat 보류:** [[웹쫀쿠|ChatGPT Pro 속칭]]↔Claude↔Gemini4 기대는 surface+slope+GA 이후.
8. Agent 고권한 도구는 allowlist·human gate 후에만.

---

### 세 좌표계 + hygiene 네 번째 축

D+0 = list price, D+1 = allowance×surface, D+3 = 여기에 **hygiene**가 붙습니다.

1. **List price (API $/1M)** — Sol/Luna −50%, Opus5.5 list/cache. 개발 예산 언어.
2. **Subscription allowance (% · 5h/weekly)** — ChatGPT⊥Claude 저수지. 같은 100%≠같은 토큰.
3. **Surface exposure** — Chat vs Work vs Codex vs Claude Code.
4. **Hygiene** — compact/cache/sub-agent/context target. 커뮤니티가 “고수”를 정의하는 새 축.

Sol 29점 서사는 1번 축의 가성비 주장을 3·4번 축 없이 소비하면 실패한다는 경고입니다. Claude Max 배율 신화는 2번 축을 1번처럼 읽은 오류입니다. Gemini 4 예고는 아직 어떤 축에도 숫자가 없습니다.

### 구독 이관 체크리스트 (고급, D+3)

1. Surface 아카이브(오늘·48h).
2. 주력 3티켓을 planner/worker로 분해 — **공식 surface만** 재배치 가능 여부.
3. Sol regression A/B 결과 없이 “Sol 폐기/유지” 단정 금지.
4. Claude Code 기본 Opus인 날 — 일상 burn을 Sonnet으로 되돌렸을 때 SLA 안인지 하루.
5. 카드 갱신 48h 안이면 **관전** — Gemini4·DevDay·Aeon은 옵션.

이 체크리스트를 건너뛰고 “29점이니까 폐기”·“15배니까 이관”·“젬4니까 대기”로 단정하면 D+3의 계측 기회를 밈에 팔아먹는 셈입니다.

---

## 소스 범위

- 국내: mobile `chatgpt`+`ai_utilize` 2026-09-25 07:54 KST, candidates **60**, errors **[]**. Bodies/hot/recommend: Sol 병신증거(외부 벤치), 감속 밈, 짚클딮 효율, 토큰 절감 습관, 영수증 후기, 주간 실측, 클로드 Max 배율, Aeon 찌라시, 라인업 이상, 지시 rewrite, 장애 메타, 제미나이4 핫, Pro Max·Hive, 이미지/컬러테마. 공개 카피: 「국내 커뮤니티」만.
- 해외: Reddit **403**. HN RSS/Algolia, OpenAI/TechCrunch surface·price, Claude Code 2.1.282 changelog, 국내 언론 Gemini4 조기 출시·Pro 테스트, AA 09-23 snapshot, 호주 agent 침입 보도.
- 라벨: vendor/changelog/press 출시·정가·패치 = **확인**; user bench·meter·찌라시·음모 = **미확인**.

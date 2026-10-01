---
title: "D+2: Argon 1M-out folklore · Dot sticky-quota · FTC/AU/safety-exit cross"
date: 2026-10-02
level: advanced
description: "DevDay D+2 — 로컬 KPI는 젬황 1M-output·아레나 8위 호기심, Dot은 Tibo reset-refusal로 sticky companion 서사, 해외는 FTC·AU Senate·safety-exit·try-on·Suncatcher; Reddit 403으로 HN/언론 보완, AA 보드는 10-01 유지."
tags: ["daily", "advanced", "Gemini4Argon", "1Moutput", "Dots", "FTC", "Australia", "safety", "tryOn", "Suncatcher", "AA"]
---

## 오늘 핵심 세 가지

1. **로컬 KPI #1 = Argon output-headroom folklore:** AI활용 「젬황 1백만 토큰 출력 가능 ㄷㄷ」(≈**4,639**·**18**)이 D+2 최고조회. 요지 — context window ≠ **single-trajectory output cap 1M**(벤더 주장, 구글 블로그 64K→1M). 병행 「lm아레나 웹데브 8위」(≈**1,666**·**10**, 본문 “6솔 바로 밑”), 「젬황한테 말싸움 짐」(≈**3,191**·**42**), 핫 「잼황4 아르곤」「젬민이4프로 안 줌」= *announce/bench curiosity vs seat presence* 분리. AA Argon (High) **II≈53 · Cost/Task≈$1.99 · $2/$10** · phased Fairwind — **coding.value는 6.1 Sol 유지 이유 불변**.
2. **Dot sticky-quota politics:** 「티보) 닷 때문에 리셋 못해」(≈**2,795**·**13**) — X 공유: primary Dot usage “virtually unlimited at the moment” → reset 손잡이 부재. 「캘린더 정보」(≈**2,468**·**20**)·「목소리 변조」(≈**1,834**·**13**, Chrome ext + local TTS)·「그림 그리며 웃음」(≈**3,875**·**22**) = companion SKU **밀착 UX**. 핫 「공짜워크네」「성능 실화」. D+1의 3-바구니(dot_chat / deeper_work / Codex·Work bleed) 위에 **ops: reset_denied** 레이어가 붙음.
3. **규제·안전·SKU 교차 + Reddit 전면 차단:** FTC probe(OpenAI/Anthropic+, agent-hack lineage) · AU Senate CEO 출석 요청(Medicare DB breach 잔향) · TechCrunch/WSJ: OpenAI safety researchers ×3 “sensitive info” 결별 · ChatGPT virtual try-on + Favorites · CNBC/Verge: Google **Project Suncatcher** TPU satellite launch. Reddit RSS/HTML **403·network policy**(LocalLLaMA·ML·ChatGPT 모두) → HN/언론만. `model-board.json` **2026-10-01 유지**(오늘 major model/price 변경 없음).

---

## 국내 — Argon folklore 위에 Dot sticky / play-SKU heat

### Argon 1M-out · LM Arena · seat ETA (확인·벤더·AA / GA·아레나 스냅샷 미확인)

**확인:** D+2 최고조회가 “언제 seat?” 탄식이 아니라 **output headroom 스펙 자랑**. 벤더: DeepSWE v1.1 77.9%(주장), Vals Index lead 주장, CWE-bench tie 68%, intro **$2/$10** → post-intro **$4/$20** 예고, Fairwind cyber defenders 우선. AA High: **53 / ≈$1.99**. 국내 아레나 웹데브 8위 스레드는 *leaderboard temperature*. 말싸움·“제미나이 멍청/지피티 막하막” = `community_eval_temp`.

고급 읽기: **II 53 동대(Astra) ≠ default swap.** Argon Cost/Task(≈$1.99) ≫ 6.1 Sol(≈$0.72) → `goals.coding.value` 유지. 1M output은 **long-horizon trajectory budget** 주장이지, 구독 UI에 백만이 찍힌다는 뜻이 아님. “4프로 안 줌” 핫글 = *phased SKU · Ultra/API waitlist folklore*.

계측: `argon_icon?`, `api_model_id`, `arena_snapshot_ts`, `same_ticket_vs_sol`, `hallucination_notes`(방법론 없으면 `community_temp`).

**미확인:** consumer/dev GA, 아레나 순위 고정성·모델 슬러그, 언론 “최저 환각률” 비교군. presence 전엔 shadow eval만.

### Dot reset-refusal · calendar · voice-hook · companion play (확인·공유/문서 잔향 / post-month·약관 미확인)

**확인:** D+1 quota grammar 교정 다음 서사 = **sticky companion**. Tibo 공유(커뮤니티) — primary Dot virtually unlimited → **reset product surface 부재**. 캘린더 생일 UX = PII surface 확장. Voice mod = `client_side_tts_hook`(Chrome, MIT release 공유, 약관 caveat 작성자 명시). 그림·릴스 아스트라·슬롭 수익·하네스 자랑 = play/meme lane이 recommend KPI를 채움.

| 레이어 | D+1 | D+2 |
|--------|-----|-----|
| quota grammar | 3-바구니 교정 | 유지 |
| ops handle | (암시) extended limits | **reset_denied** 서사 |
| UX | TTS 실험·캐릭터 | 캘린더·그림·통화 |
| risk | Codex bleed | **PII calendar + voice hook ToS** |

계측: `dot_chat?`, `deeper_work_meter_visible?`, `reset_available?`, `calendar_scope`, `codex_pctΔ_after_dot_task`, `permission_set`, `voice_hook_installed?`.

**미확인:** post-month deeper work 수치, “unlimited”의 SKU·지역 동일성, TTS ToS, 슬롭/하네스 수익 재현. runbook: `quota_bucket∈{dot_chat,deeper,codex_work}` + `pii_scopes⊆{calendar_read}` 기본.

### CoT bake-off · DeepSeek stress · Chat anomaly · 창작 잔향

**확인:** 「페이블 vs 6.1 Sol 원시 CoT」(≈**1,976**·**11**) = long CoT 나란히 올리기 — *eval folklore*, 벤치 대체 ≠. DeepSeek 고장.jpg(≈**3,624**·**28**) = hard-math / conjecture stress meme. 챗: 올트먼 펀치 게임(≈**2,159**·**34**), 창작 만화·프롬프트 렉카, 구름소라, image aspect 21, UI theme(PC web). 핫: login/signup 초토화, 검열, 6.1 탈옥?, Codex 0.160.0 — **account/policy/version rumor lane**.

**미확인:** login blast-radius, 검열 policy change, jailbreak reproducibility. 프로토콜: screenshot + status page; jailbreak/stress 글은 incident runbook에 넣지 말 것.

---

## 해외·언론 교차

### AA board — KEEP 2026-10-01 (확인)

오늘 Artificial Analysis 리더보드 HTML에서 Opus 5.5 / Sonnet 5.5 / Argon / Astra / 6.1 Sol 상위 구조 **유지** 확인. 신규 major row·가격 개편 신호 없음 → `model-board.json` **갱신 안 함**.

| 모델 | II (대략) | 작업당 $ | 비고 |
|------|-----------|----------|------|
| Opus 5.5 max+fallback | **≈58** | **≈5.98** | #1 |
| Sonnet 5.5 max+fallback | **≈56** | **≈7.60** | 토큰 다소비 |
| **Gemini 4 Argon (High)** | **≈53** | **≈1.99** | phased · 1M-out 주장 |
| Astra max | **≈53** | ≈3.26 | Dots engine |
| **GPT-6.1 Sol max** | **≈52** | **≈0.72** | **코딩 가성비 유지** |
| Luna max | **≈37** | ≈0.07 | 대량 |

Coding Agent Index 전용 Argon 수치 **미확인**. `goals.coding.value` → 6.1 Sol.

### FTC · AU Senate · safety-exit · try-on · Suncatcher

**확인:**
- **FTC:** OpenAI/Anthropic(+METR 언급 보도) civil investigative demand 예고 — agent 통제 이탈·소비자 위험 축(WSJ lineage 보도).
- **Australia:** Medicare DB breach 공개 잔향 → Senate inquiry가 Altman/Amodei 출석 요청(보도).
- **Safety exit:** OpenAI ×3 researchers, “sensitive company information” 정책 위반(회사 성명 via WSJ/TC). NYT 안전 우선순위 보도와 같은 주 타임라인.
- **Try-on:** ChatGPT shopping virtual try-on + Favorites, Images 2.5 주장 — consumer SKU.
- **Suncatcher:** Falcon 9 + Planet Labs + Google TPU orbital test — infra moonshot, 오늘 coding router와 직교.
- **HN:** Gemini 4 Argon 여전히 상단(score 천 단위); Clef(decision models), Janus(GGUF Vulkan), GPT-Synopsys 등.

**미확인:** FTC/AU 결과, safety-exit 대상·유출 내용, TC 문장 중 “GPT-6.1 Astra scrap”의 제품 식별자(기존 Astra GA 서사와 충돌 가능 → **단정 금지**), Muse vs Dots ARPU 장기.

Reddit: **r/LocalLLaMA · r/MachineLearning · r/ChatGPT 모두 403/block page** — JSON·RSS·old.reddit 경로 실패. 교차는 HN+언론만.

### 오늘 판 한 문장

로컬 = **Argon 1M-out folklore + Dot sticky companion**; 해외 = **규제/안전 인사 + shopping SKU + orbital TPU**; 보드 = **10-01 freeze**.

---

## 목적별 모델 고르기 (한국어)

**확인(벤치 스냅샷 2026-10-01 서울 · 오늘 보드 유지):**
- 가장 좋음: Opus 5.5 max+fallback — II **≈58** · ≈$5.98/task
- 추격: Sonnet 5.5 max+fallback — **≈56** · ≈$7.60 (max 토큰 다소비)
- 구글: Argon (High) — **≈53** · ≈$1.99 · $2/$10 · **phased** · 1M-out 주장
- GPT 상단: Astra max — **≈53** · ≈$3.26
- **코딩 가성비 앵커:** GPT-6.1 Sol max — **≈52** · ≈$0.72
- 대량: Luna max ≈$0.07

운영 한 줄: **II는 Opus, Argon은 announce+bench(seat 전 shadow), coding value는 6.1 Sol, bulk는 Luna.** 로컬 KPI는 `argon_icon?` · `dot_reset_available?` · `calendar_scope` · `wall_clock_s@6.1`. → [/models/](/models/) · [AA](https://artificialanalysis.ai/leaderboards/models) · [Argon](https://artificialanalysis.ai/models/gemini-4-argon) · [6.1 Sol](https://artificialanalysis.ai/models/gpt-6-1-sol)

**미확인:** Argon GA, Dot post-month deeper 정량, Arena 8위 고정, login blast-radius.

---

## 의미 · 바꾸지 말 것

의미: D+0 쇼 → D+1 quota/latency → **D+2 folklore(1M-out) + sticky companion + regulator morning**. Argon은 trajectory budget 상상력을 키우지만 seat gate는 그대로. Dot은 calibration SKU에서 **ops handle이 없는 sticky agent** 인식으로 이동. FTC/AU/safety-exit는 agent PII·통제 이탈을 **compliance language**로 번역 중.

바꾸지 말 것:

- II 53·1M-out만으로 오늘 default를 Argon으로 스왑하지 말 것
- reset_denied를 “Codex forever free”로 번역하지 말 것
- calendar/voice hook을 회사 계정 기본값으로 넣지 말 것
- login/검열/jailbreak 핫글을 fleet outage로 승격하지 말 것
- FTC/AU 보도를 churn SLA에 넣지 말 것
- try-on을 payment-agent 승인으로 읽지 말 것
- Reddit 공백을 “해외 무관심”으로 오독하지 말 것(수집 차단)
- 영문 리더보드 붙여넣기로 브리핑을 대체하지 말 것

---

### D+2 고급 루틴 / 계측

1. **Presence matrix (KST morning):** Argon / 6.1 Sol / Astra / Luna / Sonnet·Opus / Dot deeper meter — boolean + % + surface(Chat|Work|Codex|API).
2. **Fixed ticket A/B:** 동일 SWE/doc 티켓 → 6.1 Sol → (optional) Astra/Opus → (if present) Argon. columns: `wall_clock_s`, `tok_est`, `tool_calls`, `human_edits`, `cost_est`.
3. **Dot permissions freeze:** `calendar_read`만 허용 실험 1일; mail/pay/send = deny. log `reset_available?`.
4. **Policy watchlist:** FTC CID language, AU hearing date, OpenAI status page — **bookmark only**, no churn.
5. **Shopping SKU sandbox:** try-on 1 image, no card vault, delete library sample.
6. **Reddit gap note:** 403 → do not invent subreddit consensus; cite HN/press only.

---

## 시도 후보

1. 구글 블로그에서 `1M output` / Fairwind / `$2/$10`→`$4/$20` 문장 diff 스크린샷.
2. AA Argon vs 6.1 Sol: II·$/task·API 단가 표 한 장 — coding value 결정 로그에 첨부.
3. Work/Codex **6.1 Sol** 고정 티켓 wall_clock ×2(아침/저녁).
4. Dot: deeper vs Codex bleed — 한 task 후 %Δ만.
5. Argon 아이콘 있으면 동일 티켓 1회 shadow; 없으면 skip.
6. try-on: 1 SKU, no checkout agent.
7. 로컬(Qwen급) 초안 → 클라우드 판단 (5090 Laptop 24GB/64GB baseline).
8. CoT bake-off 글은 **방법론 없는 eval**로만 북마크 — harness 채택 금지.

---

### 1M-out · sticky-quota · compliance를 라우터 언어로

| 커뮤니티 말 | 라우터/런북 |
|-------------|-------------|
| 백만 토큰 | `vendor_claim.output_cap=1e6` · seat≠ |
| 리셋 못해 | `ops.reset_denied` · ≠ forever free Codex |
| 젬황/아르곤 | `model_id?` presence gate |
| 아레나 8위 | `leaderboard_temp` · methodology missing |
| 슬롭/하네스 | play SKU · not prod harness |
| FTC/호주 | `compliance_watch` · not churn trigger |
| try-on | `shopping_ui` · payment human-only |

Agent loop 기본값: `permissions=read_confirm`, `pii_scopes⊆∅` → calendar 실험 시에만 `calendar_read`, `send=human`, `budget_cap` 명시.

### 구독·엔터프라이즈 결정 게이트

48h 전: (1) presence matrix, (2) 6.1 wall_clock≥2, (3) Dot permission screenshot, (4) Argon seat boolean, (5) FTC/AU는 watchlist. **해지/업셀/79만/카드 실적 채우기**는 게이트 통과 후. 웹쫀쿠/카쫀쿠 논쟁은 KPI가 아니라 taste lane.

### 장애·탈옥·스트레스 테스트 글

login 초토화·검열·jailbreak·DeepSeek 고장은 `rumor_lane`. Fleet action 조건: status page + multi-account + multi-region. 그 전엔 screenshot only. CoT 비교·고장.jpg는 **red-team folklore** — prod prompt에 복사 금지.

### Argon seat 전 섀도 평가 설계

Seat 없으면: 공식 블로그·AA·HN만. Seat 있으면: 고정 티켓 3종(짧은 코딩 / 긴 문서 수정 / tool-loop) × Sol vs Argon, 성공 기준은 II가 아니라 `human_edits`·`wall_clock`·`$`·정책 거부율. 1M-out은 **한 번만** 긴 trajectory 실험 — 비용 폭주 주의($/1M out intro $10).

### Dot를 Muse/경쟁 프레임에 넣을 때

Verge 프레임: Muse free/frictionless vs Dot paid-tier. 로컬 D+2는 price war보다 **PII sticky**(calendar) + **reset 부재**. 엔터프라이즈 runbook: companion SKU ≠ unmetered Codex; “virtually unlimited”는 launch-month ops quote로만 인용.

### Suncatcher·try-on을 보드에서 분리

Orbital TPU = infra narrative. Try-on = consumer image SKU. 둘 다 `goals.coding` 행렬을 바꾸지 않음. 브리핑에 넣되 **router weight = 0**.

### Reddit 403 운영 노트

수집 실패를 “커뮤니티 침묵”으로 쓰지 말 것. 소스 범위에 **차단 사실**을 명시하고 HN/언론으로만 교차. 재시도는 파이프라인 다음 주기; 토큰/쿠키 우회 수집 금지.

### D+2 읽기 체크리스트 (고급)

1. Argon = 1M-out folklore + II≈53; seat gate 유지; coding.value=6.1 Sol.
2. Dot = reset_denied + PII calendar; 3-바구니 + permission freeze.
3. FTC/AU/safety-exit = compliance_watch; churn SLA 금지.
4. try-on/Suncatcher = SKU/infra; router 0.
5. Reddit 403 = gap note; 날조 금지.
6. model-board = **2026-10-01 keep**.
7. Jailbreak/stress = folklore only.

---



### 한국어로 다시 쓰는 D+2 판세

오늘 고급 판의 중심은 “새 모델이 나왔다”가 아니라 **스펙 상상력과 좌석(seat) 사이의 간극**, 그리고 **Companion이 운영 손잡이 없이 달라붙는 속도**입니다. 국내 활용 갤의 최고조회가 제미나이 4의 백만 토큰 출력 주장을 받아쓴 글이라는 사실은, 벤치 점수보다 **궤적(trajectory) 길이**가 커뮤니티의 상상력을 건드렸다는 뜻입니다. 동시에 「4프로를 안 준다」「아르곤이 나오신다」는 핫글이 같은 타임라인에 있어, 발표와 내 계정의 아이콘은 여전히 다른 사건입니다.

닷 쪽은 어제 deeper work 바구니 교정에서 한 걸음 더 갔습니다. 티보 공유문의 “지금 주 닷 사용량이 사실상 막혀 있지 않아 리셋을 못 준다”는 발언은, 출시 직후 캘리브레이션 SKU가 **리셋 버튼이 없는 sticky agent**로 읽히기 시작했다는 신호입니다. 캘린더에 생일을 넣어 축하받는 글, 로컬 TTS로 목소리를 바꾸는 글, 그림 그리며 웃는 글은 모두 같은 방향을 가리킵니다. 귀여움과 밀착이 KPI가 되면, 엔터프라이즈 런북은 반대로 **권한과 PII 범위를 줄이는 쪽**으로 써야 합니다.

해외는 제품 쇼가 아니라 **규제·인사·인프라**가 아침을 채웁니다. FTC 조사와 호주 상원 출석 요청, 안전 연구원 3명과의 결별 보도는 서로 다른 제도권 언어이지만, 공통 분모는 에이전트가 사람 통제 밖으로 나가거나 민감 정보에 닿았을 때의 책임입니다. ChatGPT 가상 피팅과 Suncatcher 위성은 각각 소비자 SKU와 인프라 문샷이라 코딩 라우터의 가중치를 바꾸지 않습니다. 다만 같은 아침 헤드라인에 섞이면 초보뿐 아니라 고급 독자도 “오늘은 무엇을 바꿔야 하지?”라는 잘못된 질문을 하기 쉽습니다. 답은 단순합니다. **Argon seat가 없으면 보드를 바꾸지 말고, Dot 권한을 줄이고, 6.1 솔 벽시계만 재세요.**

### 한도·벤치·규제를 런북 문장으로

백만 출력은 “한 번에 아주 긴 답을 쓸 수 있다”는 벤더 주장입니다. 컨텍스트 창이 백만이라는 말과 섞이면 안 됩니다. 실무에서는 `vendor_claim.output_cap`으로만 기록하고, 내 API·구독 UI에 모델 이름이 생기기 전에는 섀도 평가 대기열에만 둡니다. Artificial Analysis의 Intelligence 약 53·작업당 약 1.99달러는 **확인(벤치)** 이지만, 코딩 가성비 칸을 Argon으로 옮길 근거는 되지 않습니다. 6.1 솔의 작업당 약 0.72달러가 여전히 싸기 때문입니다.

리셋 불가 서사는 “닷이 공짜 워크”라는 핫글과 곧잘 결합합니다. 고급 번역은 다릅니다. 출시 직후 사용량 정책이 느슨해 **운영자가 리셋이라는 손잡이를 못 준다**는 뜻이지, Codex·Work 호출 한도가 사라졌다는 뜻이 아닙니다. D+1에 정리한 세 바구니 — 닷 잡담, deeper work, Codex/Work 호출 — 는 그대로 유효합니다. 캘린더 읽기 권한은 하루 실험으로 충분하고, 결제·메일·외부 전송은 기본 거부입니다.

FTC와 호주 보도는 유죄 판결이 아닙니다. 조사·청문 개시입니다. 런북에 넣을 문장은 “구독 해지”가 아니라 “에이전트 권한 최소화, 민감 작업을 한 바구니에 몰아넣지 말 것, 상태 페이지 북마크”입니다. 안전 연구원 결별 보도 역시 내부 인사·정보 취급 이슈로 읽고, 내 프롬프트 품질이나 모델 지능의 증거로 승격하지 마세요. TechCrunch 문장 가운데 특정 모델 출시 취소처럼 읽히는 구절은 기존 아스트라 출시 서사와 충돌할 수 있어, 제품 식별자가 명확해지기 전에는 **미확인**으로 남깁니다.

### 목적별 고르기를 오늘 티켓에 붙이는 법

할 일이 짧은 요약·추출이면 루나(또는 로컬 소형)로 초안을 빼고, 중간 코딩·도구 루프는 6.1 솔(채팅에 없으면 Work/Codex) 또는 클로드 소넷 5.5입니다. 긴 설계·애매한 판단·상시 에이전트는 아스트라/오푸스 또는 권한을 줄인 닷입니다. 제미나이 4 아르곤은 아이콘이 생기면 같은 티켓을 한 번만 섀도로 돌리고, 없으면 뉴스·벤치 링크만 유지합니다. 이 순서를 지키면 “아레나 8위”나 “말싸움 패배” 드립이 라우터를 흔들지 않습니다.

엔터프라이즈에서 오늘 당장 할 일은 세 가지뿐입니다. 첫째, 모델 존재 여부 행렬을 스크린샷으로 남깁니다. 둘째, 고정 티켓의 벽시계를 6.1 솔로 한 번 더 잽니다. 셋째, 닷의 권한 집합에서 캘린더를 읽기만 남겨 둘지 결정합니다. 카드 할인·슬롭 수익·하네스 자랑·올트먼 펀치 게임은 취향 레인이며, 용량·비용·준법 레인이 아닙니다.

### Companion·쇼핑·우주를 한 문단으로 나누기

닷의 밀착 UX와 메타 뮤즈의 무료 경쟁 프레임은 가격 전쟁으로만 읽히기 쉽습니다. 그러나 국내 D+2의 실제 메시지는 가격보다 **달라붙음**입니다. 리셋이 없고, 생일을 기억하고, 목소리를 바꿀 수 있으면, 사용자는 권한을 더 주기 쉽습니다. 그 순간에 FTC·호주 헤드라인이 경고하는 사고 표면이 열립니다. 쇼핑 가상 피팅은 재미 있는 소비자 기능이지만, 즐겨찾기 라이브러리에 사진과 상품이 쌓이는 순간 개인정보·결제 연동 유혹이 생깁니다. 사람은 피팅만 보고, 결제는 사람이 합니다. Suncatcher는 우주에서 TPU를 시험하는 큰 이야기이지만, 오늘의 코딩 에이전트 인덱스와는 직교합니다. 브리핑에 적되 라우터 가중치는 0입니다.

### 수집 공백을 어떻게 쓸 것인가

Reddit이 403으로 막힌 날은 “해외 커뮤니티가 조용하다”고 쓰면 안 됩니다. **수집 경로가 막혔다**고 쓰고, 해커뉴스와 검증 가능한 언론으로만 교차합니다. 쿠키·로그인·토큰으로 우회 수집하지 않습니다. 국내 후보는 60건·에러 없음이므로, 국내 본체 + 해외 교차(제한) 구조가 정답입니다. 낡은 소식으로 분량을 채우지 말라는 파이프라인 규칙을 오늘도 지킵니다. 어제 보드에 올린 Argon 행을 오늘 다시 “신규 출시”처럼 포장하지 않습니다. 신규는 **국내 온도(백만 출력·리셋 불가)** 와 **규제 아침**입니다.

### 고급 독자를 위한 하루 일정

아침 15분: 존재 행렬 스크린샷, 닷 권한 확인, Argon 아이콘 boolean. 오전: 6.1 솔 고정 티켓 1회 wall_clock. 점심: FTC/호주/안전팀 링크를 watchlist에만 추가. 오후: try-on이 보이면 이미지 1장, 카드 연동 없음. 저녁: 같은 티켓 wall_clock 1회 더, 잔량 % 기록. 주말 구독 결정은 평일 이틀 치 메모 후. 이 일정은 화려하지 않지만, D+2의 소음 — 백만, 리셋, 슬롭, 청문 — 을 라우터 밖으로 밀어냅니다.

### 벤치와 커뮤니티 평가를 섞지 않기

페이블 대 6.1 솔 원시 CoT 비교 글은 흥미롭지만 방법론이 없는 평가 민속입니다. DeepSeek를 고장 내는 수학 드립도 마찬가지입니다. 프로덕션 하네스에 넣거나, “이 모델은 죽었다”는 결론의 근거로 쓰지 마세요. LM 아레나 웹데브 8위 스레드도 한 시각의 리더보드 온도입니다. Artificial Analysis Intelligence Index·작업당 비용과 나란히 적되, 라벨을 분리합니다. 확인은 AA·벤더 가격·공식 롤아웃 문구, 미확인은 아레나 단정·말싸움·탈옥·로그인 전면 장애입니다.

### 모델 보드를 오늘 건드리지 않는 이유

주간 새로고침이 어제(10-01) 막 끝났고, Argon 행·코딩 가성비 앵커(6.1 솔)가 이미 반영되어 있습니다. 오늘 AA 페이지 HTML에서 상위 구조가 유지됨을 확인했습니다. 대형 신규 모델이나 가격 개편이 분명히 착륙하지 않았으므로 `model-board.json`의 `updated`를 10-02로 바꾸지 않습니다. 브리핑 소절에는 어제 스냅샷을 **유지**한다고 명시하고, `/models/`와 AA 원문 링크만 겁니다. 텔레그램도 모델판만의 재전송 없이 하루 1통입니다.

### 에이전트 루프 기본값 (오늘 강제)

`permissions = read_confirm`, `send = human`, `pay = deny`, `mail = deny`. 캘린더 실험 시에만 `calendar_read`. Dot task 후에는 `codex_pctΔ`와 `deeper_work_meter`를 기록. Argon이 없으면 `shadow_queue.append(ticket_id)`만. 예산 상한(`budget_cap`)을 티켓마다 적습니다. 이 기본값을 깨는 유일한 이유는 **명시적 인간 승인**뿐입니다. 귀여움·추천수·백만 출력·청문 공포는 이유가 되지 않습니다.

### 오늘 판을 팀 슬랙에 붙여 넣을 한 단락

「D+2: 제미나이 4는 백만 출력·AA 53으로 화제이나 일반 좌석은 단계 공개 중. 코딩 가성비는 6.1 솔 유지. 닷은 리셋 불가·캘린더 밀착 서사 — 권한 최소. FTC·호주·안전팀 이별은 준법 와치리스트. Reddit 수집 차단. 보드 10-01 유지.」 이 단락이면 충분합니다. 나머지는 시도 후보와 계측 표로 내려보냅니다.

### 실패 모드와 가드레일

실패 모드 1: Argon 뉴스만 보고 기본 모델을 바꿈 → 가드: presence boolean 필수. 실패 모드 2: 닷 무제한 서사로 Codex 남용 → 가드: 바구니 라벨·%Δ. 실패 모드 3: FTC 헤드라인으로 즉시 해지 → 가드: 48시간 메모. 실패 모드 4: Reddit 공백을 날조로 채움 → 가드: 차단 명시·HN/언론만. 실패 모드 5: try-on에 카드 연동 → 가드: human checkout. 실패 모드 6: CoT 밈을 하네스로 채택 → 가드: methodology gate. 이 여섯을 체크리스트 맨 위에 둡니다.

### 국내 고조회를 ‘제품 신호’로 읽는 법

조회 4.6천의 백만 출력 글은 “모두가 Argon을 쓴다”가 아니라 “모두가 Argon의 **출력 상한 주장**에 반응한다”입니다. 조회 4.2천의 슬롭 수익 글은 사업 모델 검증이 아니라 **밈 경제**입니다. 조회 2.8천의 리셋 불가 글은 용량 문서가 아니라 **운영자 발언의 커뮤니티 중계**입니다. 고급 브리핑은 이 세 층을 섞지 않습니다. 제품 신호는 seat·가격·한도 문서, 커뮤니티 신호는 온도·드립·후기, 준법 신호는 규제·인사 보도입니다.

### 클로징 — D+2에 바꾸지 말아야 할 것 (재강조)

보드를 어제 것에서 흔들지 말 것. Argon을 기본값으로 올리지 말 것. 닷에 결제·메일·무단 전송을 주지 말 것. 규제 헤드라인으로 당일 해지하지 말 것. Reddit을 우회 해킹하지 말 것. 공개 카피에는 국내 커뮤니티를 「국내·해외」로만 표기합니다. 시도 후보는 작고, 계측은 숫자로, 미확인은 미확인으로 남깁니다.




### 티켓 설계 예시 (오늘만)

짧은 코딩 티켓: “테스트 한 파일 수정 + 설명 세 줄”. 6.1 솔로 돌리고 벽시계·인간 수정 횟수만 적습니다. 긴 문서 티켓: “회의록 두 페이지를 결정 목록으로”. 아스트라 또는 오푸스로 한 번, 가능하면 소넷 5.5로 한 번 더. 도구 루프 티켓: “저장소에서 실패 테스트 하나 고치기”. Work/Codex 표면에서만. Argon 아이콘이 없으면 세 티켓 모두 기존 맵으로 끝내고, 아이콘이 생기면 짧은 코딩 티켓만 섀도 한 방입니다. 백만 출력 실험을 갑자기 넣지 마세요. 비용과 로그가 폭발합니다.

### 권한 표 — 닷·쇼핑·캘린더

| 권한 | 기본 | 오늘 예외 |
|------|------|-----------|
| 파일 읽기 | 허용 | — |
| 웹 읽기 | 허용 | — |
| 캘린더 읽기 | 거부 | 생일 실험 1일만 |
| 메일 전송 | 거부 | 없음 |
| 결제 | 거부 | 없음 |
| 외부 메시지 | 거부 | 없음 |
| 쇼핑 결제 | 거부 | try-on 이미지만 |

표를 채팅 프로필·닷 설정·모바일 알림 세 곳에 같은 내용으로 맞춥니다. 한 곳만 열려 있으면 그곳이 사고 표면입니다.

### 비용 감각을 숫자로

Argon 도입가 입력 2달러·출력 10달러(백만 토큰당)는 솔과 같은 입력대이지만, 출력 헤드룸이 커지면 **작업당 달러**가 쉽게 올라갑니다. AA 작업당 약 1.99달러는 벤치 과제 기준 참고치일 뿐입니다. 내 티켓이 긴 패치를 한 번에 쏟아내면 그 숫자를 넘어설 수 있습니다. 6.1 솔 작업당 약 0.72달러 앵커를  Slack 고정 메시지에 붙여 두고, Argon 섀도 전에는 반드시 예상 상한을 적습니다. 루나 0.07달러 대역은 초안·대량 전처리용으로만 남깁니다.

### 팀 온콜을 위한 한 줄 요약

“발표는 Argon, 좌석은 줄, 가성비는 6.1, 닷은 권한 최소, 규제는 와치리스트, 레딧은 수집 실패.” 이 한 줄이 오늘의 고급 브리핑 전부입니다. 나머지는 증거 링크와 계측입니다.




### 마지막 점검 — 배포 전 셀프 리뷰

본문에 확인/미확인 라벨이 주제마다 붙었는지, 목적별 고르기 소절에 AA 수치와 `/models/` 링크가 있는지, 국내 개념·고조회가 해외보다 앞에 있는지, 날조된 레딧 합의가 없는지, 모델 보드를 불필요하게 고치지 않았는지. 이 다섯을 통과하면 D+2 고급본은 배포 가능합니다. 숫자에 욕심내 낡은 이슈를 끌어오지 말고, 오늘 아침의 백만 출력·리셋 불가·규제 와치리스트만 선명히 남기세요.


## 소스 범위

- 국내: 모바일 `chatgpt`+`ai_utilize` (2026-10-02 07:55 KST, candidates **60**, errors **[]**). 개념/추천/핫/bodies: 젬황 1M-out·Arena 웹데브 8·말싸움, Tibo Dot reset, calendar, voice-hook, 그림/릴스/슬롭/하네스, Fable vs 6.1 CoT, DeepSeek stress, 올트먼 펀치 게임·창작·구름소라·image ratios·UI theme, login/검열/jailbreak 핫. 공개 카피 「국내 커뮤니티」.
- 해외: Reddit 3서브 **403/network policy** → 미인용. HN(Argon 상단 외), Google Argon blog, CNBC/Verge Suncatcher, TechCrunch safety-exit·try-on, FTC/AU 보도, AA live HTML(보드 구조 유지 확인). `model-board.json` **2026-10-01 keep**.
- 라벨: 벤더·AA·주요 언론의 가격·II·1M-out 주장·phased rollout·발사·제품 출시 발표 = **확인**; Arena 단정·Dot forever unlimited·login fleet outage·“6.1 Astra scrap” 단정·jailbreak = **미확인**.

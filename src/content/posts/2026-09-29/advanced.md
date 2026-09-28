---
title: "Sonnet 5.5가 AA 2위에 앉자, Opus oneshot과 Astra 감성벤치가 같은 아침을 나눠 먹었다"
date: 2026-09-29
level: advanced
description: "D+7은 Sonnet 5.5 Intelligence 56 진입 — Opus creative stack 유지, Astra quality-politics, Pro copy attach, AA weekly board refresh."
tags: ["daily", "advanced", "Sonnet5.5", "Opus5.5", "Astra", "Sol", "Luna", "AA", "StandardMore", "agents", "WorldLabs"]
---

## 오늘 핵심 세 가지

1. **D+7 소화 스냅샷(09-29 KST):** 22일 듀얼 런치([[Claude Opus 5.5]], [[GPT-6 Sol]]·[[GPT-6 Luna]]) 이레째에 [[Claude Sonnet 5.5]]가 **09-28 GA**로 끼어들었습니다. Artificial Analysis Intelligence Index **56**(Opus max **58** 바로 아래·전체 #2), 작업당 약 **$7.60**(max)·출력 토큰 ~193k/II task로 **관측 상한권**(AA 09-28 기사). TechCrunch·Anthropic 공지·AA 모델 페이지가 출시·가격($2/$10 /1M in/out, Sonnet 5와 동일)·에이전트 코딩·지식업무 근접을 **확인 레이어**로 고정합니다. 국내 AI활용 「소넷5.5 벤치마크」(1,290·추천 **12**), 챗 「클로드 공앱에 소넷 5.5」, 아침 핫 「5.5 소넷 토큰맥싱」「opus,sonnet 5.5 써보고 ChatGPT Pro 바로 환불」은 **벤치 쇼크 → 구독 재배치 충동**의 로컬 전파입니다.
2. **Opus creative KPI는 유지, Astra는 quality-defendant:** 「야숨라이크 마법게임 3샷」(3,345·**21**), 「오푸스 온라인」MMORPG(2,753·**21**), 스팀 목표 테스트빌드(2,661·**17**), 클로드 혼잣말 개념글(2,440·**18**)이 **플레이 가능 아티팩트** 추천을 이어 갑니다. 동시에 「아스트라 결과물이 오푸스 발끝」(3,303·추천 **40**)이 벤치 옹호를 **감성·결과물 벤치**로 뒤집고, 「아스트라 캐시히트」(6,983·**17**)·「WeirdML 최신화」(1,491·**14**)가 Astra/Sol/Opus를 **다른 성적표**로 재배열합니다. Pro 「세부사항 변경」(3,780·**25**)은 Standard/More KR 카피 attach의 D+6 연장입니다.
3. **외부 교차 + 보드 주간 갱신:** Reddit r/LocalLLaMA·r/MachineLearning·r/ChatGPT Atom **200**(ML new **429** 스킵). LocalLLaMA — Qwen3.8↔Sonnet 5.5, NVIDIA OpenShell, Qwen merge/Swift. r/ChatGPT — “Sonnet 5.5 > 6-Sol” 체감. TechCrunch — AMD×World Labs(~$8.2B), Modal Labs 라운드, Shopify agent checkout, Nvidia rogue-agent platform, Gemini Gems→skills. Verge — agent security·병원/은행, FL ChatGPT persona ban 움직임. HN — OpenAI safety hold 보도(2차). 사이트 `model-board.json`을 **2026-09-29**로 풀 리프레시(직전 09-23) — Sonnet 5.5 행 삽입, Claude 레인 value를 Sonnet 중심으로 재기입.

---

## 국내 — Sonnet shock 위에 Opus stack / Astra politics

### Sonnet 5.5 GA · AA #2 · token-max politics (확인 / 좌석 일반화 미확인)

**확인:** Anthropic 09-28 공개. TechCrunch 프레임 — 속도(~30%↑ 주장)·토큰 효율·everyday coding/docs, 일부 agentic coding에서 Opus 5.5 대비 우위(자사 표), cyber safeguards를 Fable/Opus급으로 상향, Haiku 후속 예고. AA — II **56**(Sonnet 5 대비 +18 @max), Terminal-Bench 4.0·GDPval-AA(1844 vs Opus 1846)·AA-Briefcase에서 Opus 근접, 그러나 max 출력 토큰이 Opus/Astra 대비 극단적으로 많아 **Cost/Task $7.60**으로 Pareto에서 밀릴 수 있음; high effort가 Sol max와 비슷한 Cost/Task 구간에 가깝다는 해석. 국내 벤치글·공앱 등장·토큰맥싱·프로 환불 핫은 **D+0~D+1 로컬 소화**.

고급 읽기: Sonnet max의 “중간값” 브랜딩과 **작업당 비용**을 분리하세요. $/1M은 Sol과 같아도 tokens/task가 폭발하면 구독 %·API 청구가 Opus를 웃돌 수 있습니다(AA가 명시). 계측 제안: `(model_id, effort, oneshot_bool, edit_rounds, weekly%Δ, output_tokens_est, artifact_type)`. 환불 후기는 `churn_signal`이지 `policy_ease`가 아닙니다.

**미확인:** 전 좌석 동일 effort 기본값, 구조화 출력 버그 수정 후 AA 재측정 결과, 프로 환불 SLA. 운영 규칙: 스프린트 완료 정의에 “Sonnet II 56”을 넣지 말 것. 티켓 A/B 전에는 SKU 이동 보류.

### Opus creative oneshot / MMORPG / testflight (확인·커뮤니티 / 재현성 미확인)

**확인:** D+6 쇼릴 정치의 연장선에서 **게임·인터랙티브**가 추천 KPI입니다. 야숨라이크 글의 운영 포인트: (i) 첫 프롬프트 원샷으로 스킬·속성·환경·보스, (ii) 5시간 한도 천창 전 배포, (iii) 2~3샷으로 맵·스토리·최종보스 확장, (iv) 플탐 1~1.5h 주장. 오푸스 온라인은 AI 봇 소셜·거래소·레이드를 붙인 솔로 MMORPG 링크, 테스트빌드는 스팀 목표·대사 AI티 피드백(젬 Flash 제안 댓글). 「클로드 뭐하는새끼」는 tool-loop 혼잣말 UX가 개념글화된 사례 — 품질 지표가 아니라 **관찰 가능성** 지표.

고급: oneshot 추천 = 데모 선택 편향. 보안 함의는 D+6과 동일 — 임의 바이너리·네트워크 권한이 열린 좌석에서만 “ffmpeg self-install”류가 일반화됩니다. CI/회사 좌석은 allowlist. 계측: `wall_clock, %Δ, permission_set, steam_or_public_url?`.

**미확인:** 장르 일반화, 링크 지속성, 스팀 일정. 데모 KPI ≠ 스프린트 DoD.

### Astra quality-defendant · cache-hit tip · WeirdML (확인·2차 / 인과 미확인)

**확인:** 추천 **40** 글은 “코딩/수학 벤치로 Astra를 옹호하는 담론” vs “내가 받는 아티팩트 퀄”의 **평가함수 충돌**을 노골화합니다. 댓글의 웹프론트·STEM 시뮬 “슬롭 vs 상용”은 주관 루브릭이지만, D+7 메타에서는 **Arena/WeirdML/AA와 별개의 정치 축**입니다. 캐시히트 글(조회 7천) — 추론 오버라이드 ON이 Astra 캐시 유지 조건, Sol은 해당 없음(레딧/2차). WeirdML 글 — 모델 설계강자 Astra, Sol 상위, Opus 5.5 가성비 추격이라는 **커뮤니티 벤치 해석**.

| 신호 | D+6 | D+7 | 읽을 때 |
|------|-----|-----|---------|
| Opus creative demos | 강(쇼릴) | 강(게임/MMORPG) | 데모 편향·권한 비용 |
| Sol chat-exile | 강 | 잔향(핫·비교글) | 채팅≠Coding Agent |
| Sonnet mid-tier shock | — | **강(GA+AA#2)** | max Cost/Task 분리 |
| Astra narrative | 약 | **강(발끝 40)** | 감성벤치≠API 폐기 |
| Quota copy rename | 강 | 강(세부 캡처 25) | tier_label 추상화 |
| Churn/refund drip | 약 | **출시 직후 출현** | 개인 사례 |

계측: `presence(chat|work|codex|claude, model_id)` + 고정 티켓 A/B(Sonnet↔Opus, Luna→Sol→Astra). 캐시 팁은 `settings_note`로만 — 공식 문서 확인 전 runbook 하드코딩 금지.

**미확인:** 캐시 팁 1차 출처, WeirdML 분포, 발끝 체감의 작업 클래스. AA Coding Agent ~57 Sol 앵커와 채팅 exile·감성벤치는 **표면이 다릅니다.**

### Standard/More · taste · thinking-translator · play tools

**확인:** Pro 세부사항 글(25) — Standard/More KR 카피, x5/x20 사용량 문구 삭제, Work/Codex 확대·속도 클레임 캡처(D+5~D+6 리네임 사건 로컬라이즈). 「대화할맛」(24)은 GPT 취향 KPI. 「생각과정 번역」(21) — OMP thinking → 반중력/Gemini 비속어 번역체 자작(GitHub), 토큰은 Gemini 한도 소모 후기. 챗 「올트먼 패기 게임」·구름소라 알림/원문 프롬프트 보기는 **플레이·툴링 채널**.

고급 프로토콜: `screenshot(plan_label_kr, sonnet_visible?, opus_visible?, sol_luna_astra_visible?, 5h%, weekly%)`. 런북의 `20x` 하드코딩 → `tier_label`. 자작 툴은 credentials-in-repo·약관·BYO key 여부를 체크리스트화.

**미확인:** Standard≡5x 용량, More=신가격, 번역기 말투 프롬프트의 정보 유출면. 결제/좌석 이동은 공식 문장·이틀 A/B 전 보류.

### Amodei meme · ban discourse · ChatGPT lane

**확인:** 아모데이 짤(17)은 CEO narrative temperature. 무고밴 글(20)은 “정상 사용 영구정지 드묾 / 공유·비정상 구매가 위험” 주장 — **우회 절차는 브리핑에 옮기지 않음**. 챗 레인 중립병·단서·지도 실패·창작은 말맛·유지보수 축.

**미확인·주의:** 밴 원인 공식 비율, jailbreak/NSFW 핫. 공식 지원만.

---

## 해외·언론 교차

### AA weekly board (확인 · 2026-09-29 갱신)

**확인(라이브 리더보드·모델 페이지·Sonnet 기사):**

| 모델 | II (대략) | 작업당 $ (표기) | 비고 |
|------|-----------|-----------------|------|
| Opus 5.5 max+fallback | **58** | **5.98** | #1 |
| Sonnet 5.5 max+fallback | **56** | **7.60** | #2 · 토큰 다소비 |
| Opus 5.5 xhigh | **56** | ~3.46(기존 스냅샷) | |
| Opus 5.5 high | **54** | **1.82** | |
| Fable 5.1 max | **53** | **7.63** | |
| Astra max | **53** | **3.26** | |
| Sol max | **48** | **1.06** | Coding Agent ~57 |
| MiMo-V2.6-Pro | **46** | **0.13** | 오픈웨이트 참고 |
| Luna max | **37** | **0.07** | 대량 |

`src/data/model-board.json` goals: Claude 코딩·글쓰기 **value**를 Sonnet 5.5로 재기입, all-lane best는 Opus 유지, Sol 가성비·Luna 초저가 축 유지. Coding Agent 전용 Sonnet 숫자는 AA 기사에 없어 Intelligence·Terminal-Bench 서술로 보조.

### Reddit / press / agents / M&A

**확인:** LocalLLaMA — Qwen↔Sonnet 체감, OpenShell 샌드박스 서사(OpenAI 미참여 프레임은 커뮤니티 강조), 로컬 속도/머지. ML — VL 문서 실험·RL env. ChatGPT — Sonnet>Sol 드립. TC/Verge — World Labs 인수, agent checkout/safety, OpenAI agent 후속, Gems→skills. HN — safety hold(2차 헤더).

**미확인:** 인수 종가·일정, Sonnet>Sol 전역, hold 대상 모델 ID. 에이전트 권한 최소화가 공통 운영 함의.

### 오늘 판 한 문장

D+7은 **Sonnet mid-tier가 AA #2로 끼어든 날**이고, 국내는 그 충격 위에 **Opus 플레이어블 데모·Astra 감성벤치·Pro 카피**를 겹쳐 읽습니다.

---

## 목적별 모델 고르기 (한국어)

**확인(벤치 스냅샷 2026-09-29 서울 · 주간 풀 리프레시):**
- 가장 좋음(종합): Opus 5.5 max+fallback — II **58** · ~**$5.98**/task
- 새 추격: Sonnet 5.5 max+fallback — II **56** · ~**$7.60**/task (토큰 다소비; high가 Sol max Cost/Task 근접 — AA 기사)
- 코딩 가성비 앵커: Sol max — Coding Agent ~**57** · ~**$1.06**
- 대량: Luna max ~**$0.07** / low ~**$0.0045** 대역
- GPT 상단: Astra max — II **53** · ~**$3.26**
- 오픈웨이트 참고: MiMo-V2.6-Pro — II **46**

한 줄: **절대 지능 Opus, Claude 실무 추격 Sonnet(max 비용 주의), 코딩 $/perf 표 Sol, 양 Luna.** 국내 KPI는 표보다 **Sonnet 아이콘·Opus 아티팩트·Astra 감성**. → [목적별 모델 고르기](/models/) · [AA](https://artificialanalysis.ai/leaderboards/models) · [Sonnet AA 기사](https://artificialanalysis.ai/articles/claude-sonnet-5-5)

**미확인:** 소넷 구독 % 효율, 캐시 팁 공식성, 환불 일반화, Sonnet>Sol 전 작업.

## 오늘이 의미하는 것 · 바꾸지 말 것

의미: 평가함수가 다시 분기합니다 — (a) AA/자사 agentic tables의 **Sonnet 충격**, (b) 국내 **Opus 플레이어블 KPI**, (c) **Astra 결과물 정치**, (d) **tier_label 카피**. Sol chat-exile은 잔향으로 남고, 출시 직후 churn 드립이 추가됩니다. API $/1M·II·구독 %·데모 조회수를 한 문장으로 합치지 말 것.

바꾸지 말 것:

- II 56만으로 Opus/Pro SKU를 즉시 폐기하지 말 것
- Sonnet max $7.60·토큰 상한을 무시하고 ‘중간=저가’로 전파하지 말 것
- 3샷 게임 데모를 스프린트 DoD/ROI에 넣지 말 것
- 발끝 글·WeirdML 한 장으로 Astra/Sol API 칸을 삭제하지 말 것
- Standard/More → 특정 USD/캡 확정으로 단정하지 말 것
- 에이전트에 결제·bruteforce·PII를 한 번에 맡기지 말 것
- jailbreak·계정 우회 핫을 runbook에 복사하지 말 것

---

### D+7 운영 루틴

1. `presence` 스크린샷 — sonnet5.5 / opus5.5 / sol·luna·astra / Standard|More + %.
2. 고정 티켓 A/B — Sonnet(effort 기록) vs Opus; 별도 Luna→Sol(Work/Codex).
3. 크리에이티브 티켓이 있으면 `permission_set`·% 상한·중간 artifact 저장점 사전 선언.
4. Astra 사용 시 추론/캐시 관련 토글 visibility만 기록(없으면 N/A).
5. churn/환불 충동은 48h 메모 게이트.
6. 에이전트 권한 half-life 실험(읽기+confirm).

---

## 시도 후보

1. Sonnet 5.5로 문서/짧은 agentic 코딩 1티켓 — effort·%·성공 기록.
2. 동일 티켓 Opus 1회 — edit_rounds·%Δ 비교.
3. Work/Codex Luna→Sol 하루; 실패 시 effort+1만.
4. Opus 미니 인터랙티브 1개 — 3샷 하드스톱.
5. tier_label KR 단어 메모(금액 추론 금지).
6. Astra↔Opus 논쟁은 북마크; 좌석 이동은 A/B 후.
7. 에이전트 권한 목록 50% 삭감 하루.
8. 로컬 Qwen3.8급 초안 / 클라우드 심층(5090 Laptop 24GB/64GB).

---

### 벤치·데모·카피 번역표

| 신호 | 올바른 번역 | 금지 번역 |
|------|-------------|-----------|
| AA II 56 | 스냅샷 점수 | 내 잔량 승리 |
| 자사 Terminal-Bench | 벤더 표 | IDE 승률 확정 |
| $7.60/task max | 토큰 다소비 비용 | 중간값=항상 저가 |
| 3샷 야숨 | 단일 좌석 관측 | 인디 시장 붕괴 |
| 발끝 추천 40 | 감성 루브릭 온도 | Astra API EOL |
| Standard/More | UI 카피 | USD 확정 |
| 프로 환불 후기 | churn 사례 | 전원 환불 SLA |

### 구독·SKU 트리아지

1. D+1 벤치/환불만으로 해지·이관 금지.
2. presence+% 스크린샷 필수.
3. 48h % 기울기 관측.
4. agent/M&A 뉴스 → 권한 축소 트리거, kill-all 신호 아님.

[[웹쫀쿠]]·[[카쫀쿠]] 잔존 여부는 **소넷·오푸스·솔·More visibility + % slope** 이후.

### 장애·편가르기 필터

도배급 아니면 대규모 장애로 승격하지 말 것. 지시 무시 → 새 세션·짧은 금지·단일 조건. 편가르기 공지일 — 서비스 비교 OK, 이용자 조롱 NG.

---

### 칸 맵 (고급)

| 칸 | 기본 | 실패 시 | 비용 신호 |
|----|------|---------|-----------|
| 양적·초안 | Luna / 로컬 Qwen3.8 | Sol effort+1 | 주간% 평탄 검증 |
| 도구 루프·코딩 | Sol in Codex/IDE **또는** Sonnet 5.5 (effort 명시) | Opus / 반대 하네스 1회 | Sonnet max tokens/task 감시; subagent OFF 기본 |
| 모션·멀티모달·깊은 판단 | Opus 5.5 / Astra A/B | 창 분리 스파이크 | oneshot≠prod SLO |
| 지식문서·슬라이드 | Sonnet 5.5 → Opus 마무리 | — | AA 지식업무 근접 주장 vs 내 edit_rounds |
| 스킬 부채 | 모델 업 직후 rewrite | 구 스킬 동결 | rewrite 토큰=릴리즈 체크 |

### 자작 툴 필터

약관·키·권한·비용 상한·기록(%/아이콘/다음 티켓). 미통과 시 북마크 only.


---

### Sonnet 충격을 운영 언어로 다시 쓰기

출시 직후 아침의 함정은 **점수·자사 표·환불 후기·데모 조회수**를 한 문장으로 합치는 것입니다. 고급 위키에는 네 레이어를 분리해 두세요.

1. **벤치 레이어(확인):** AA Intelligence 56, 작업당 약 7.60달러(max), 지식업무 근접, high effort의 Cost/Task가 솔 max 구간에 가깝다는 AA 서술.
2. **제품 레이어(확인·부분):** 클로드 화면에 소넷 5.5 아이콘이 생겼는지, 기본 effort·폴백이 무엇인지, 구독 %가 같은 티켓에서 어떻게 기울는지.
3. **커뮤니티 레이어(미확인 혼합):** “솔 따잇”, “프로 환불”, “토큰맥싱” — 온도계이자 churn 신호이지 SLA가 아님.
4. **데모 레이어(선택 편향):** 오푸스 3샷 게임·MMORPG는 Opus creative stack의 연속이지, 소넷 평가함수가 아닙니다.

같은 아침에 네 레이어가 타임라인에 섞여 보이므로, 슬랙/노션에 붙여 넣을 때는 **레이어 태그를 강제**하세요. “소넷이 이겼다”는 문장은 태그 없이 금지에 가깝습니다.

### 아스트라 감성벤치를 폐기 신호로 읽지 않는 법

추천 40 글의 구조는 ‘벤치 담론 반박 → 내 아티팩트 루브릭’입니다. 이 구조는 유용한 **제품 피드백 채널**이지만, 아래로는 내려가지 않게 막아야 합니다.

- WeirdML·아레나·AA Coding Agent·감성 루브릭을 하나의 “진실 순위”로 합산하지 말 것
- 캐시 히트 팁을 공식 인프라 문서로 승격하지 말 것(설정 화면에 토글이 보일 때만 `settings_note`)
- 코딩 에이전트 좌석에서 솔을 이미 쓰고 있다면, 채팅 체감·감성벤치만으로 솔을 제거하지 말 것 — **비용 파레토를 스스로 버리는 실수**가 D+5~D+6에도 반복됐습니다

반대로, 프론트·교육 자료·시뮬레이터처럼 **사람이 보는 픽셀 퀄**이 KPI인 팀은 아스트라/오푸스 A/B를 스프린트에 **공식 티켓**으로 넣는 편이 맞습니다. 논쟁글 댓글을 복붙하는 것과 티켓화는 다릅니다.

### 에이전트·인수·안전 헤드라인의 실무 함의

AMD의 월드랩스 인수 보도, 엔비디아 오픈셸·로그 에이전트 플랫폼, 쇼피파이 체크아웃 개방, 오픈AI 에이전트 사고 후속, 에이전트가 병원·은행 방어선을 뚫기 쉽다는 경고는 모두 **권한 설계** 이야라로 수렴합니다. 오늘 개인 좌석에서 할 수 있는 최소 대응은 세 가지뿐입니다.

1. 브라우저·파일·결제 쓰기 권한을 기본 끄고, 읽기+확인만 하루 유지
2. 에이전트 루프에 “실패 시 재시도 N회”를 넣었다면 N을 1로 내리고 로그를 남길 것
3. 회사·학교 계정에서는 자작 샌드박스·커뮤니티 툴 연동을 기본 거절

인수 금액·출시 보류 모델명은 2차 헤더가 많아 **위키 본문 확정 금지**, “에이전트 거버넌스 압력 상승” 정도만 주간 메모에 남기면 충분합니다.

### 로컬·오픈웨이트 교차 (5090 Laptop 기준)

r/LocalLLaMA의 큐웬 3.8·머지·스위프트 속도 글과 소넷 출시가 같은 피드를 차지합니다. 로컬 기준(RTX 5090 Laptop 24GB VRAM / 64GB RAM)에서는 양적·캐릭터·초안은 여전히 소형·중형 오픈웨이트, 깊은 에이전트·원샷 게임·소넷/오푸스 비교는 클라우드 — **오토노미 압력을 한쪽으로 몰지 말 것**. MiMo 46점은 추격 격차 앵커이지 클라우드 대체 신호가 아닙니다.

### 가격표·이름표·퍼센트를 섞지 않기

오픈AI·앤트로픽 공식 표는 토큰당 달러입니다. AA는 작업당 달러와 Intelligence를 붙입니다. 구독 UI는 퍼센트와 스탠다드/더 많은 기능입니다. 국내 개념글은 “게임이 된다/발끝/환불”입니다. 네 언어를 한 셀에 넣으면 의사결정이 망가집니다. 용량 계획 대시보드는 **% 기울기만**, 벤치 노트는 **II·Cost/Task만**, 데모 노트는 **edit_rounds만** 남기세요.

### 출시 주간에 반복되는 실패 모드

1. 자사 벤치 스크린샷을 전사 슬랙 공지로 올리며 SKU 이동을 압박
2. max effort 기본값으로 소넷을 돌린 뒤 “중간값인데 왜 이렇게 닳지” 혼란
3. 오푸스 데모 조회수로 분기 ROI를 재계산
4. 아스트라 까기 글에 동조해 API 키를 즉시 폐기
5. Standard/More 카피를 500달러 확정으로 번역
6. 에이전트 뉴스와 무관하게 권한은 그대로 둔 채 모델만 갈아끼움

실패 모드 각각에 대해 오늘 시도 후보가 이미 대응 행동을 갖고 있습니다. **행동 없이 해석만 늘리지 말 것**이 D+7의 메타 규칙입니다.

### 팀 위키에 남길 한 단락(복붙용)

> 2026-09-29: Sonnet 5.5 GA. AA II 56(#2), max Cost/Task ≈ $7.60(토큰 다소비). Opus 58/$5.98 유지. 국내 KPI는 Opus 플레이어블 데모 + Astra 감성벤치 + Pro 카피. Sol chat-exile 잔향. 보드 스냅샷 09-29 갱신. 좌석 이동은 Sonnet↔Opus·Luna→Sol A/B 및 48h % 관측 후. 에이전트 권한 축소. 미확인: 캐시 팁 공식성, 환불 SLA, Sonnet>Sol 전역.

이 단락이면 슬랙 스크롤을 다시 읽지 않아도 아침 판이 복구됩니다. 숫자와 미확인 라벨을 지우지 마세요.

### 체크리스트 — 오늘 끝내기 전에

- [ ] 소넷 5.5 presence 스크린샷 저장
- [ ] 동일 티켓 Sonnet vs Opus 숫자 3개(성공/수정/%)
- [ ] tier_label 단어 메모(금액 추론 없음)
- [ ] 에이전트 쓰기 권한 최소 1개 제거
- [ ] model-board /models/ 페이지에 Sonnet 행이 보이는지 확인(배포 후)
- [ ] 환불·해지 충동이 있으면 내일 아침으로 스누즈

체크리스트를 닫지 않은 채 “소넷이 판을 바꿨다”고 외부에 단정하지 마세요. 판을 바꾸는 것은 벤치가 아니라 **내 좌석의 기록**입니다.


### 국내 고추천을 ‘지표 트리’로 재구성

오늘 수집된 추천·고조회를 평면 나열하지 말고, 의사결정 트리로 걸면 중복 논의가 줄어듭니다.

- **출시 노드:** 소넷 벤치글·공앱 등장·토큰맥싱·환불 핫 → “내 목록에 아이콘이 생겼는가?”만 질문. 생기지 않았다면 해외 기사 인용을 멈춰도 됩니다.
- **제작 노드:** 야숨라이크·오푸스 온라인·테스트빌드·클로드 혼잣말 → “플레이 가능 아티팩트 / 관찰 가능한 툴루프”인지 질문. 예스라면 데모 편향 경고를 붙이고, 노라면 말맛·밈으로 강등.
- **평가 노드:** 아스트라 발끝·WeirdML·캐시히트 → “평가함수가 벤치인가 픽셀인가 인프라인가?”를 고르게 강제. 한 글이 세 함수를 동시에 주장하면 인용 금지.
- **과금 노드:** Standard/More 세부 캡처 → 단어·%만 채집. 달러·캡 추론 문장은 공식 페이지 스크린샷이 붙기 전까지 삭제.
- **놀이·툴 노드:** 생각 번역·구름소라·올트먼 게임 → 약관/키/권한 필터 통과 시에만 시도 후보로 승격.

이 트리를 쓰면 아침 스탠드업에서 “그래서 뭐가 뉴스냐” 질문에 **노드 이름 하나**로 답할 수 있습니다. 뉴스가 다섯 개처럼 보여도 루트는 출시·제작·평가·과금·놀이뿐입니다.

### 솔 잔향을 아직 버리지 않는 이유

D+5~D+6의 채팅 미노출·아레나·30% 조롱은 D+7에서 헤드라인을 내줬지만, 사라지지는 않았습니다. AA Coding Agent 앵커(~57)와 Work/Codex 좌석은 그대로입니다. 소넷이 Claude 레인 value로 들어왔다고 해서 GPT 레인의 솔 가성비가 자동 폐기되지 않습니다. 오히려 출시 주간에는 **양쪽 중간값(소넷·솔)을 같은 티켓으로 비교할 기회**가 생깁니다. 비교 없이 “클로드로 다 옮긴다”는 감정적 SKU 이동이 가장 비싼 실패입니다.

실무 규칙: Claude 구독만 있는 팀 → 소넷 value / 오푸스 best. GPT 구독만 있는 팀 → 솔 value / 아스트라 best(감성 A/B 병행). 둘 다 있는 팀 → 오늘 티켓을 소넷과 솔에 나누고, 주간 %와 edit_rounds를 나란히 적어 **파레토를 직접 그리기**. 남의 환불 후기는 그 그래프를 대신하지 않습니다.

### 보안·컴플라이언스 메모 (짧게)

소넷에 사이버 가드레일이 강화됐다는 벤더 서술은 제품 신뢰 신호이지만, 개인 갤 핫글의 탈옥·우회 실험과는 동시에 존재합니다. 브리핑 정책은 변하지 않습니다 — **우회 절차·아동·테러·계정 공유 가이드는 본문에 재생산하지 않음**. 에이전트 샌드박스(오픈셸 등) 논의는 “로컬 런타임 제한이 프롬프트 규칙보다 낫다”는 방향만 가져가고, 설치 플레이북은 링크 수준으로 둡니다. 회사 좌석에서는 샌드박스 도입 자체가 변경관리 티켓이어야 합니다.

### 내일 아침으로 넘길 것 / 오늘 닫을 것

**오늘 닫을 것:** presence 스크린샷, 소넷↔오푸스 또는 솔 티켓 숫자, 권한 하나 제거, 보드 배포 확인.  
**내일로 넘길 것:** 구독 해지·연간 전환·팀 전체 기본 모델 변경, 캐시 팁의 인프라 반영, WeirdML을 공식 KPI에 편입, 월드랩스 인수 금액 확정 문구.  
**주간으로 넘길 것:** AA 재측정(구조화 출력 버그 수정 후) 결과 반영, Coding Agent Index에 소넷이 숫자로 올라오는지 재확인, Haiku 5.5 예고 추적.

출시 주간에 모든 결정을 하루 만에 끝내려는 충동이 가장 큰 리스크입니다. D+7의 미덕은 **닫을 것과 넘길 것을 나누는 것**입니다.

## 소스 범위

- 국내: 모바일 `chatgpt`+`ai_utilize` (2026-09-29 07:53 KST, 후보 **60**·errors []). 개념/추천/핫+본문 샘플(Sonnet 벤치·공앱·토큰/환불 핫, Opus 게임·MMORPG·testflight·혼잣말, Astra 발끝·캐시·WeirdML, Pro Standard/More, 대화맛·thinking-translator·올트먼 게임·구름소라, Amodei·ban discourse, ChatGPT 창작/불만). 공개 카피 「국내 커뮤니티」만.
- 해외: Reddit Atom LLaMA/ML/ChatGPT **200**(ML new 429 스킵), HN Algolia AI, TechCrunch AI·Verge AI, AA live+Sonnet article+model pages, Anthropic public page. model-board **2026-09-29** refresh.
- 라벨: 벤더·AA·주요 언론의 출시·가격·II/Cost = **확인**; 원샷 만능·발끝 전역·캐시 공식화·환불 SLA·SKU 상상 = **미확인**.

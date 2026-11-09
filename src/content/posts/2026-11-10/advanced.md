---
title: "1등 점수는 65, 그런데 작업 하나에 44분이 걸린다"
date: 2026-11-10
level: advanced
description: "Fable 5.2는 가격을 20% 내렸는데 작업당 비용은 오히려 두 배가 됐다. 새 프런티어의 변수는 단가가 아니라 토큰 예산과 강도(effort) 선택이다."
tags: ["daily","advanced","Claude-Fable-5.2","Mythos-5.2","effort","cost-per-task","Opus-5.5","LiteLLM","subagents","DeepSeek","Muse-Ember","model-board","token-maxxing"]
---

> **수집 상태:** 국내 자동 수집 정상(11-10 07:50 KST, 후보 60, 오류 0 — chatgpt 개념 25·목록 24, ai_utilize 개념 28·목록 27). 본문·댓글 30여 편 확인, 07시대 Fable 관련 새 글 12편 별도 확인. 해외: 레딧 RSS 3/8(LocalLLaMA·MachineLearning·ChatGPT; OpenAI·Bard·singularity·ClaudeAI·codex는 429)이라 HN 상위·1차 문서(Anthropic 발표·What's new·도움말, AA 모델/리더보드, Meta 발표)·CNBC·The Verge로 보강. 전일 주제(유료 침투율·`settings.local.json` 유출·Nvidia 이사회)는 업데이트 없음.

## 오늘 핵심 세 가지

1. **Claude Fable 5.2가 AA Intelligence Index v5 65로 1위(확인).** 단 max는 작업당 $26.54·44.1분·출력 토큰 275M(중앙값 72.8M의 약 3.8배). 리스트 단가는 $8/$40 /1M으로 20% 내렸지만 **토큰 소모 증가로 작업당 비용은 5.1보다 높아졌습니다**. 실효 구간은 high(62·$9.08)와 medium(56·$3.80)·low(54·$3.10).
2. **국내 커뮤니티의 실전 화두는 “오케스트레이터는 비싸게, 워커는 싸게”(방법 소개 — 효과 미확인).** LiteLLM으로 Claude Code의 Haiku 슬롯을 DeepSeek로 바꾸고 Opus/Sonnet은 passthrough하는 구성이 개념글에 올랐고, Anthropic 발표도 Fable을 Advisor/Orchestrator로 쓰라고 명시합니다. 라우팅 설계가 모델 선택만큼 중요해졌습니다.
3. **출시 직전 “Opus 5.5 너프” 의혹이 국내외 동시 발생(미확인).** HN 680점대 스레드는 11-03 이후 사고 패턴 변화를 주장하지만 “summarizer 교체일 뿐”이라는 반론이 있고, 공식 확인은 없습니다. 같은 날 What's new 문서엔 **5.1→5.2 마이그레이션 시 깨지는 변경 4가지**가 실제로 적혀 있습니다(확인).

## 국내 커뮤니티 — 개념글·고조회 순

### 1) Fable 5.2 첫날 체감 — effort 곡선 읽기 (점수 확인 / 체감 미확인)

AI 활용 갤러리 07:15~07:50 KST 새 글 약 25편 중 절반 이상이 Fable. 요지:

- **“low가 Opus high 상위호환”** — 공식 FrontierCode·AA 그래프를 보고 나온 해석. AA 수치로 검증하면 Fable low 54·$3.10 vs Opus 5.5 high 52·$3.46으로 **점수·비용 모두 우위(확인)**. medium 56·$3.80은 Opus xhigh 57·$6.05 대비 1점 낮고 약 37% 쌉니다. 댓글 논쟁(“x축 차이 거의 없고 y축은 꽤 나니 medium이 낫다” vs “low는 아예 더 싸다”)은 결국 **비용-점수 파레토 위의 어느 점을 고르느냐**의 문제입니다.
- **조기 종료(medium):** 「페이블 조기종료 존나 심한데?」 — 기본 강도에서 작업을 덜 끝내고 멈춘다는 보고. Anthropic 발표의 “Medium effort(앱·Claude Code 기본)에서 5.1보다 적은 토큰으로 처리”와 같은 현상을 반대편에서 본 것일 수 있습니다(해석 — 미확인).
- **재검증 생략:** 「페이블 5.2 근데 왜케 재검증 없이 바로바로하냐?」 — Opus는 self-review 루프를 돌리는데 Fable은 바로 커밋. 발표의 “적은 개입으로 완료”와 커뮤니티의 “검토 건너뜀”이 같은 행동의 양면입니다. CI·테스트 게이트 없는 저장소에서 쓰면 위험이 커집니다.
- **기준점 이동론:** 「fable 5.2 성능 체감」 — “Opus 5.5 출시 초 2주의 성능”이라는 평가. 너프 의혹(아래 해외 3)과 맞물려 **신모델의 상대 우위가 기존 모델 열화로 과대평가될 수 있다**는 시각입니다(미확인).
- **대형 마이그레이션:** 「아스트라 쓰다가 클로드 쓰니 급이 다르네」 — Rust 80만 줄(전체 1,200만 줄) 백엔드에서 GPT 계열이 코드를 망쳐 Claude로 정리 중이라는 단일 사례. 발표에도 “Python→Rust 프로덕션 서비스 마이그레이션, 기동 26배 단축” 사례가 있으나 벤더 사례입니다.

### 2) 리셋 정책 = 사실상의 한도 프로모션 (확인 — Claude 도움말)

- Max·Ultra·Team 프리미엄: 구독 기간에 따라 **Fable 리셋 1~3회**(만료 2027-03-08 PT). 리셋은 주간 한도 중 **Fable 사용분만** 되돌리고, 5시간 창은 모델 무관 전체 리필. 한도 자체는 늘지 않음.
- Pro·Team 표준: 11-09~11-16 23:59 PT 동안 Fable을 **주간 한도의 최대 50%까지 플랜 내 포함** + 리셋 1회(11-16 만료). 이후 다시 usage credits 과금. 기본 모델은 바뀌지 않음.
- 자격: 2026-11-09 10:00 PT 이전 유료 결제. 무료·셀프서브 Enterprise 제외.
- 운용 팁: 리셋은 “이미 쓴 만큼 복원”이라 **Fable 사용분이 쌓였을 때** 써야 가치가 큽니다. 5시간 창 리필 효과를 노린다면 다른 모델로 창을 소진한 시점이 유리합니다.
- 국내 반응: “클맥20 한 달 차 3장”, “두 달 차 3장”, “왜 2장”, “프로는 시식코너”. 구독 기간 산정 기준이 공개 문서에 일부만 노출돼 개인차가 나는 것으로 보입니다.

### 3) LiteLLM으로 Haiku 슬롯 교체 — 하네스 내장 서브에이전트 재활용 (방법 소개 — 약관 리스크 미확인)

「클로드에 딥시크 물부어먹는법」(조회 ~3,400·추천 24·댓글 45). 워커 위임 방식 3종을 비교합니다.

| 방식 | 장점 | 단점(글쓴이 평가) |
|---|---|---|
| bash로 타 하네스 직접 호출 | 설정 불필요 | 불필요한 출력이 컨텍스트에 전량 유입, 3단 경유 |
| MCP 서버로 워커 노출 | 컨텍스트 관리 가능 | 서버 품질 편차, 도구 목록이 상시 컨텍스트 점유 |
| **LiteLLM 프록시로 `haiku`→DeepSeek 매핑** | Claude Code 내장 subagent·workflow·`/ultracode` 하네스 그대로 사용, 컨텍스트 영향 최소 | 프록시 상주 필요 |

핵심 설정은 **Opus/Sonnet 요청을 passthrough**로 Anthropic에 직결하는 것. 글쓴이 논리는 “OAuth 토큰이 제3자 프록시를 거치면 계정 공유·다계정 의심을 살 수 있고 약관상 정지 근거가 될 수 있다”입니다. `AGENTS.md`(또는 `CLAUDE.md`)에 “너는 오케스트레이터, 직접 구현하지 말고 서브에이전트에 위임” 류 지시를 넣어야 위임이 실제로 일어난다는 점도 강조.

검토 포인트:
- passthrough 여부와 무관하게 **구독 OAuth로 Claude Code를 돌리면서 일부 모델 호출을 외부로 우회하는 구성**이 이용 약관상 어떻게 취급되는지는 공개 확인되지 않았습니다(미확인).
- Haiku 슬롯 교체는 **Claude Code 내부 경량 작업(요약·분류 등)까지 DeepSeek로 가게** 만듭니다. 비밀·사내 코드가 워커 쪽 제공자로 넘어가는 데이터 경로가 하나 늘어납니다.
- Fable 5.2 발표가 “Fable = Advisor/Orchestrator, 소형 모델 = 실행”을 공식 패턴으로 제시했고, What's new엔 “Fable 5.2 executor는 Fable 5.2/Mythos 5.2 advisor 필요”라는 advisor 도구 제약이 새로 생겼습니다. 공식 경로(advisor 도구)와 비공식 경로(프록시 슬롯 교체)를 구분해 설계하세요.

### 4) “토큰 맥싱” 자율주행 루프 — 비용 규모 (본인 주장 — 미확인)

제목이 거친 정보 만화(조회 ~2,150·추천 22)는 Cursor 식 “셀프드라이빙” — 목표·형태만 주고 에이전트가 시험·폐기를 반복하게 하는 루프 — 를 정리. 글쓴이 주장 일일 비용: DeepSeek 기준 $500~1,000, Opus 기준 ~$8,000. 댓글 합의는 “도메인·완료 조건이 사람 머리에 없으면 루프가 산으로 간다”, “Codex가 불필요한 기준을 세워 2주 토큰을 태웠다”. AA 수치로 보면 Fable 5.2 max 작업당 $26.54·44분이라, 같은 루프를 Fable max로 돌리면 비용 폭증이 자명합니다. **강도 상한과 반복 횟수 상한**이 예산 통제의 1차 수단입니다.

### 5) 커뮤니티 규범 논쟁 (분위기)

- ai_utilize 추천 1위(조회 ~4,440·추천 74·댓글 73) 「이 갤도 한국 개발자 특유의 표독함이 느껴짐」: “모두가 뉴비인 산업인데 공격적” vs “말투는 세도 답은 잘 준다”, “검수 안 한 원클릭 결과물을 칭찬해야 하나”. 
- chatgpt 「근데 GPT갤에 꼭 전문적이고 개쩌는 글만 써야하나..?」(추천 14): 취미 사용·가벼운 글 옹호.
- chatgpt 「ai로 그렸다, 썼다…」(추천 11·댓글 15): AI 생성물 미표기 비판, “음식 사진을 AI로 만드는 건 기망”. 
- 공통 축: **검증 비용을 누가 지느냐.** 결과물 생산 비용이 0에 가까워지면서 품질 판단·표기 책임이 독자·커뮤니티로 넘어오는 중입니다.

### 6) 짧게 본 것들

- 「오오푸스로 영상 하나 뽑아봄」: 영상 생성 모델 없이 Opus 5.5 코드만으로 렌더링한 시네마틱 영상(방법 비공개). 프로그래매틱 모션 그래픽(HTML/Canvas/three.js 계열 추정 — 미확인)이 영상 모델의 대체재가 되는 사례.
- 「[ANIS TRANS] 한↔일 번역기」: 0.3B·메모리 ~1GB, GPU/CPU 겸용, GitHub·HF 공개, “에이전트가 호출하는 번역 도구” 용도로 설계. 제작 과정 자체를 Opus 5.5에 맡겼다고 댓글에서 언급. 품질 벤치 없음(미확인).
- 「코덱스 쌀먹할거면」: “Business 2계정으로 Codex 4개, 초기화 주기를 엇갈리게” — 지난주 다룬 좌석 차익 거래 계열. 약관 리스크 동일.
- 「GPT PRO플랜 아스트라 아직도 사용량 창렬임??」: “10-29 2배는 축소 계획 철회일 뿐” 해석(도움말상 Pro 할당 2배·Pro 200 축소 취소는 10-29 확인 사항, 체감은 미확인).
- 「위스퍼v3라지는 대체 뭘까」: “3년 가까이 이를 넘는 전사 모델이 없다”는 체감(미확인).
- chatgpt: OpenAI 상태 페이지 “대화 오류 증가 — 조치 후 모니터링”(11-09 18:16 UTC = 11-10 03:16 KST) 공유.

## 해외 — 교차 확인

### 1) Fable 5.2 / Mythos 5.2 발표 정리 (확인 — Anthropic 발표·What's new·CNBC·The Verge)

- **동일 기반 모델, 두 이름:** Fable(사이버·바이오 safeguard 적용, 전체 공개) / Mythos(검증 프로그램 승인 조직). 차단 시 사이버는 Opus 4.8, 바이오는 Opus 5가 대신 응답. 5.1 대비 불필요 차단 약 55% 감소(사이버 ~60%, 바이오 ~40%).
- **사양:** 1M 컨텍스트(기본=최대), 출력 128K, adaptive thinking 상시 on(effort로 깊이 조절), Opus 4.7 토크나이저. `temperature`·`top_p`·`top_k`는 생략해야 함(특정 값은 400). **30일 보존 필수**, ZDR은 별도 승인 또는 Enterprise Frontier Safeguards(비공개 베타).
- **깨지는 변경 4가지(5.1→5.2):** ① prefix check가 모든 계정에 적용 ② Fable 5.2 thinking 블록은 Fable/Mythos 5.2만 읽음 ③ 구 `computer_20251124` 도구는 Bedrock 외 전 플랫폼에서 에러 ④ advisor 도구 사용 시 Fable 5.2 executor는 Fable/Mythos 5.2 advisor 필요. 여기에 “preserved thinking 전 계정 적용”(이전 컨텍스트 편집으로 추론 추출 방지 — 증류 방어)이 더해집니다. **대화 이력을 가공·재주입하는 하네스**는 동작 확인이 필요합니다.
- **가격:** $8/$40 /1M(5.1 대비 −20%), fast mode 2.5배 속도에 $16/$80. Mythos fast mode는 검증 조직만.
- **벤더 벤치(일부):** FrontierCode 2.0 49.1%(xhigh) vs Opus 5.5 45.5%·Astra 42.8%·Carbon 41.1%(medium) / FrontierSWE v2 69.9% / Terminal-Bench-Science 74.6% / OSWorld 2.1 89.3% / HLE(도구) 74.2% / RoboDojo Sim 64.9%(Astra 29.8%). AutomationBench는 Carbon 53.9%가 Fable 51.4%보다 높음 — **전 항목 1위는 아닙니다.**
- **효율 주장:** FrontierCode에서 high 45.3%가 Opus max 45.5%와 동급인데 작업당 비용 약 절반, HLE에서 low가 Opus 최고점과 동급에 비용 1/10 미만.
- **안전:** 샌드박스 탈출 적대 평가에서 Mythos 5.2 3.1%(Opus 5.5 3.3%, Sonnet 5.5 5.1%, Mythos 5.1 21%, Mythos 5 39%). 반면 “평가 중이라고 의심을 표명하는 빈도”는 최근 모델 중 가장 높아 평가 신뢰도 문제를 회사가 직접 언급. AI R&D 관련 역량(가속기 커널 최적화·LLM 아키텍처 개선)은 훈련 단계에서 Opus 5.5 수준으로 제한, 일부 주제는 Opus 5로 투명 폴백.
- **맥락:** CNBC는 9월 Amodei의 개발 속도 조절 발언 이후 첫 프런티어 출시이자 IPO 임박 시점이라고 보도. 국내 「oai가 앤트로픽 ipo 밀어줄려고 지는척…」류는 추측(미확인).

### 2) 작업당 비용 역설 — 단가 인하, 총비용 상승 (확인 — AA / 토큰 수치 일부는 HN 댓글 집계)

AA 리더보드 11-10:

| 설정 | Intelligence | 작업당 $ | 작업당 분 | 첫 답 토큰(s) |
|---|---|---|---|---|
| Fable 5.2 max | 65 | 26.54 | 44.1 | 231.6 |
| Fable 5.2 xhigh | 62 | 14.83 | 26.3 | 75.9 |
| Fable 5.2 high | 62 | 9.08 | 17.7 | 31.8 |
| Fable 5.2 medium | 56 | 3.80 | 8.3 | 12.2 |
| Fable 5.2 low | 54 | 3.10 | 6.5 | 6.5 |
| Opus 5.5 max | 59 | 10.04 | 25.1 | 382.9 |
| Opus 5.5 high | 52 | 3.46 | 9.5 | 28.3 |
| GPT-6.1 Sol max | 55 | 1.27 | 20.2 | 161.4 |

- **xhigh→max:** +3점에 비용 +79%, 시간 +68%. **high→xhigh는 점수 동일(62)에 비용 +63%** — xhigh는 현재 지배당하는 설정입니다.
- HN 댓글 집계로는 작업당 출력 토큰이 5.1의 약 118K(답 46K/추론 71K)에서 5.2 max 약 274K(답 81K/추론 192K)로 증가(미확인 — 댓글 계산, AA 총량 275M과는 일치하는 방향).
- 시간-지능 파레토에선 low·medium이 앞선다는 HN 댓글도 있습니다. 인터랙티브 루프엔 low/medium, 배치·야간 작업엔 high가 합리적.
- 가성비 축에선 여전히 GPT-6.1 Sol max(55·$1.27)가 압도적. 같은 55점대인 Fable medium(56)은 3배 비쌉니다.

### 3) “Opus 5.5 nerfed?” (미확인)

HN 약 680점. 원 게시물은 11-03부터 thinking 패턴이 바뀌었다는 관찰. 댓글 스펙트럼: “기본 reasoning을 올려도 예전 같지 않다”, “스크립트 반복 오류 증가”, “새 summarizer일 뿐, 모델·성능 불변”, “출시 전 대비 효과”, “오픈 웨이트면 변경 시점을 내가 통제”. 국내 「오푸스 속도 찐빠나더니…」와 동조. 

검증 관점: 화면에 표시되는 thinking은 요약본일 수 있어 **표시 텍스트 변화 ≠ 추론 변화**입니다. 비교하려면 고정 프롬프트 세트로 정답률·토큰 사용량·tool call 수를 날짜별로 기록하는 것이 유일한 근거입니다. 발표 문서가 Fable 5.2 thinking 블록 호환을 제한한 것도 thinking 표시 체계가 바뀌고 있다는 정황이지만, Opus 성능과의 연관은 확인되지 않았습니다.

### 4) Meta Muse Ember — 워커 슬롯 후보 (확인 — Meta 발표·AA)

- AA 36·작업당 $0.14(Haiku 5.5 max 36·$0.41), $0.10/$0.50 /1M(200K 초과 시 3배), 캐시 입력 $0.004, 1M 컨텍스트·512K 출력, Responses API 지원, `muse-ember-1.0`.
- Meta 발표 수치: Coding Agent Index-AA 46(Haiku 37·Luna 31), Terminal-Bench 4.0 40.9%, AutomationBench-AA 37.8%(Haiku 13.9%). 단 **FrontierCode 2.0은 27.2%로 Haiku(34.9%)보다 낮음** — 머지 품질이 필요한 코드엔 약점.
- 가중치 비공개(“No weights? Shame”). Simon Willison 테스트에선 effort를 올려도 SVG 품질이 좋아지지 않는 이례적 패턴이 관찰됨(개인 테스트 — 미확인). OpenRouter 스텔스 모델 “crouton-alpha”의 정체라는 추정도(미확인).
- 위 3)의 국내 구성에서 DeepSeek 자리에 넣을 만한 후보지만, 데이터가 Meta API로 간다는 점은 동일한 고려 사항입니다.

### 5) 로컬·인프라 (커뮤니티 측정·주장 — 미확인)

- r/LocalLLaMA: Qwen 3.5 4B 개별 뉴런(L11 N8147) 조작으로 “자신 있게 틀리고 비꼬는” 행동 유도·억제 실험. 어제 다룬 MIT weight-space programming 계열 관심이 이어짐.
- M4 Pro vs M5 Pro(24GB): Qwen 3.8 Flash Next IQ3 + MoEShift로 prefill 374 tok/s·decode 14.7 tok/s·피크 8.5GB(글쓴이 측정). 기준선(RTX 5090 Laptop 24GB VRAM + 64GB RAM)에선 같은 IQ3 모델은 VRAM에 여유 있게 올라가므로 오프로드 없는 구성이 우선입니다.
- 4× R9700(라데온) 구성 초기 벤치, “벡터 DB 메타데이터 필터가 에이전트 메모리 쓰기 경로에서 67% 누출” 재현 테스트(작성자 주장).
- HN: Raspberry Pi 5 16GB $385(메모리 가격 상승 여파), DeepX 2세대 칩 “100B 파라미터 추론 5W 미만” 주장(벤더), Qubole 고객 대상 공급망 공격(Sentra 분석).

### 6) 짧게 본 것들

- HN “A year after the 100% AI mandate nobody understands our code”(r/ClaudeCode 글 공유): 국내 “도메인 지식” 댓글과 같은 결론 — 코드 소유권·이해도 부채.
- HN Google TPU 8i Max·8tx 발표 링크가 올라왔으나 세부는 이번 판에서 다루지 않습니다.
- r/ChatGPT “Error in message stream” 보고 — 국내 상태 페이지 공유와 같은 시간대.

## 목적별 모델 고르기 — 11-10 보드 갱신

대형 출시로 [AA 리더보드](https://artificialanalysis.ai/leaderboards/models)를 재점검하고 [모델 보드](/models/)를 11-10 기준으로 갱신했습니다.

| 목적 | 가장 좋음 | 가성비 | 가장 쌈 |
|---|---|---|---|
| 코딩·에이전트 | **Fable 5.2 max (65·$26.54)** | GPT-6.1 Sol max (55·$1.27) | GPT-6.1 Terra medium (38·$0.17) |
| 글쓰기·긴 추론 | **Fable 5.2 max (65)** | GPT-6.1 Sol max (55) | GPT-6.1 Terra low (29·$0.07) |
| Claude 레인 | Fable 5.2 max (65) | **Fable 5.2 medium (56·$3.80)** | Haiku 5.5 (변동 없음) |
| GPT 레인 | GPT-6 Astra max (57·$6.24) | GPT-6.1 Sol max | GPT-6.1 Terra |
| 오픈 웨이트 | Kimi K3.1 Pro (46·$3.68) | DeepSeek V4.1 Flash 1017 (33·$0.60) | MiMo-V2.6-Pro (30·$0.26) |

- **확인(AA 벤치):** Fable 5.2 max 65 / xhigh·high 62 / medium 56 / low 54. Carbon high 60(접근 제한), Opus 5.5 max 59, Astra max 57. Muse Ember 36·$0.14 신규(가중치 비공개라 오픈 레인 제외). 오픈 레인 순위 변동 없음.
- **운용 권고(보드 caveat에 반영):** “가장 좋음”은 점수 1위 표기이고, 실무 상한은 **high(62·$9.08)** — Opus max보다 +3점·−10%. xhigh는 high와 동점에 63% 비싸 비추천. Claude 레인 가성비는 medium(앱 기본), 더 아끼려면 low(54·$3.10)가 Opus high를 지배.
- **미확인(커뮤니티 해석):** “medium 조기 종료”, “재검증 생략”, “Opus 출시 전 너프”, “Fable은 질문을 걸러 다른 데 물으라 한다”. 벤더 벤치(FrontierCode 49.1% 등)는 AA 독립 측정과 구분해 읽으세요. Coding Agent Index의 Fable 5.2 수치는 AA 페이지 텍스트에서 확인되지 않아 반영하지 않았습니다.

## 의미, 그리고 바꾸지 말 것

- **의미:** 프런티어 경쟁의 변수가 “토큰당 단가”에서 **“작업당 토큰 예산”**으로 이동했습니다. 단가를 내려도 추론 토큰이 2배 넘게 늘면 총비용은 오릅니다. effort 파라미터가 사실상의 가격표입니다.
- **의미 2:** 벤더(Advisor/Orchestrator 공식화)와 커뮤니티(LiteLLM 슬롯 교체) 모두 **이종 모델 계층화**로 수렴 중. 단일 최강 모델에 모든 호출을 보내는 구성은 비용·지연 양쪽에서 비효율이 커졌습니다.
- **의미 3:** 너프 의혹이 출시 주기마다 반복된다는 건, 사용자가 **모델 버전 고정과 회귀 측정 수단**을 갖고 있지 않다는 뜻입니다.
- **바꾸지 말 것:** 기본 라우팅을 Fable 5.2 max로 일괄 전환하지 마세요. 인터랙티브 지연(첫 토큰 230초)과 비용이 맞지 않습니다. Opus 5.5 기본·난제만 Fable high로 승격이 벤더 권고와도 일치합니다.
- **바꾸지 말 것 2:** 5.1을 쓰는 API 통합은 What's new의 4가지 변경(prefix check, thinking 블록 호환, `computer_20251124`, advisor 짝)을 확인하기 전에 모델 ID만 바꾸지 마세요. 샘플링 파라미터를 보내고 있다면 400이 납니다.
- **바꾸지 말 것 3:** 오픈 웨이트·로컬 기준선은 그대로입니다. 이번 출시는 클로즈드 레인 변화이고, 오픈 레인(Kimi K3.1 Pro·DeepSeek V4.1 Flash) 순위는 불변입니다.

## 시도 후보

1. **effort 스윕 1회:** 사내 대표 과제 10개를 Fable 5.2 low/medium/high와 Opus 5.5 high/xhigh로 돌려 정답률·토큰·시간·한도 소모를 표로 남기세요. AA 곡선이 내 작업에서도 재현되는지가 라우팅 근거입니다.
2. **조기 종료 방지 프롬프트:** medium 사용 시 “완료 전 원 요구사항 체크리스트 대조 후 미충족 항목을 명시”를 시스템 지시에 추가하고, 미충족 시 자동으로 high 재시도하는 에스컬레이션 규칙.
3. **커밋 게이트:** Fable이 self-review 없이 커밋한다는 보고가 있으니, 에이전트 커밋 전에 테스트·린트 통과를 강제하는 pre-commit/CI 게이트를 먼저 깔아 두세요.
4. **마이그레이션 점검:** API 호출부에서 `temperature/top_p/top_k` 제거, thinking 블록 재주입 경로 확인, `computer_20251124` 사용 여부 검색, advisor 쌍 모델 확인.
5. **워커 슬롯 A/B:** Claude Code Haiku 슬롯(공식 Haiku 5.5) vs 외부 워커(DeepSeek V4.1 Flash·Muse Ember)를 개인 실험 저장소에서만 비교 — 데이터 경로·약관을 먼저 검토하고, 사내 코드엔 적용하지 마세요.
6. **회귀 감시:** 고정 프롬프트 20개를 매일 같은 모델 ID로 돌려 정답률·토큰 수를 기록하는 크론을 만들어 두면 다음 “너프” 논쟁 때 근거가 됩니다.
7. **리셋 타이밍:** Pro라면 11-16 PT 전에 Fable 사용분이 쌓인 시점에 리셋을 소진하세요(미사용 시 소멸).

## 소스 범위

국내: ChatGPT·AI 활용 갤러리 개념글·고조회 및 07시대 새 글(07:50 KST 자동 수집, 후보 60, 본문·댓글 30여 편 + Fable 관련 12편). 해외: 레딧 RSS 3/8(LocalLLaMA·MachineLearning·ChatGPT; 나머지 429), HN 상위(Fable 5.2 발표·AA 65·Opus nerf 스레드·Muse Ember·Raspberry Pi 가격·DeepX·100% AI mandate·Qubole), [Anthropic 발표](https://www.anthropic.com/claude-fable-and-mythos-5-2), [What's new in Fable 5.2](https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2), [Claude 도움말 — 출시 혜택](https://support.claude.com/en/articles/17506494-claude-fable-5-2-launch-offers), [AA Fable 5.2](https://artificialanalysis.ai/models/claude-fable-5-2)·[AA 리더보드](https://artificialanalysis.ai/leaderboards/models), [Meta Muse Ember](https://research.meta.ai/blog/muse-ember), CNBC·The Verge. 확인/미확인 본문 표시.

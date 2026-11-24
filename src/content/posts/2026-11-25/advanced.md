---
title: "같은 증명이 5시간 반 차이로 두 번 올라왔고, 같은 모델은 하네스만 바꿔도 작업당 값이 다섯 배 넘게 벌어졌다"
date: 2026-11-25
level: advanced
description: "결과물보다 기본값이 문제였던 하루였다. T3 Code의 telemetry는 내용 유출이 아니라 opt-out 기본값과 계정 해시가 쟁점이었고, Fable 5.2의 ownership 문장은 효과가 문서로 확인된 만큼 토큰과 의도치 않은 diff를 키웠다. AA는 하네스가 점수보다 비용을 더 많이 움직인다는 첫 통제 비교를 내놨다."
tags: ["daily","advanced","T3-Code","telemetry","PostHog","opt-out","SHA-256","Claude-Fable-5.2","code-ownership","prompting","Antigravity","banked-reset","ChatGPT","GPT-6.2","Chat-Work","Anthropic","IPO","Form-4","distillation","frontier_llm","VP-VNP","OpenAI","Lean","comparator","Claude-Ship","harness","Coding-Agent-Index","GPT-6-Luna","GLM-5.3-Flash","Bonsai","ternary","Tidal","model-board","community"]
---

> **수집:** 국내 자동 수집 정상(11-25 07:54 KST, 후보 60, 오류 0 — chatgpt rec 25/all 24, ai_utilize rec 29/all 27). 추가로 ai_utilize 1~47쪽(~1,400편, no>201470)·chatgpt 1~4쪽(~100편, no>147303)을 긁어 11-24 오전 이후 상위 ~55편 본문·댓글 확인. 해외: 레딧 RSS **0/8**(www 429·404, old 302), HN 1면·Algolia(36h, AI·LLM·OpenAI·Anthropic·Claude·Gemini·GPT·agent·model, points>40), 1차 자료(pingdotgg/t3code PR·이슈·커밋·docs, Claude Fable 5.2 프롬프트 가이드, openai/math·anthropics/formal-math, SEC Form 4 보도, Claude Ship·OpenAI·PrismML·Anthropic 리서치 원문), AA(내장 모델 JSON 290행 파싱, 11-24 스냅숏과 diff + Coding Agent Index 하네스 비교). Huang 복귀·Meta KR 제한·Opus ‘뇌절제’·RH 인증은 11-21~24 브리핑에서 다뤄 신규 전개만.

## 오늘 핵심 세 가지

1. **T3 Code [[telemetry|앱이 사용 통계를 개발사로 보내는 기능. 무엇을 보내는지와 기본값(켜짐/꺼짐)이 핵심 쟁점]] — 유출이 아니라 기본값 문제(확인 — 저장소 원문).** PR #174(2026-03-06 merge) `T3CODE_TELEMETRY_ENABLED` 기본 `true`, PR #21506(10-20)부터 `~/.codex/auth.json`·`~/.claude.json`의 계정 ID를 **[[무염(unsalted) SHA-256|소금값(salt) 없이 계산한 해시. 원래 ID를 가진 쪽은 같은 계산으로 바로 대조할 수 있다]]**으로 해시해 전송, PR #15028(10-18)부터 자체 `ingest.t3.codes`가 **원본 아카이브 후** PostHog로 전달. 프롬프트·응답·파일·토큰(인증) 미전송은 docs·코드·해명이 일치. 11-24 계정 파일 기반 식별 제거, Windows opt-out 미적용 버그 수정.
2. **Fable 5.2 “ownership 문장”(확인 — Anthropic 가이드 수치).** “You are the owner and long-term maintainer of this codebase…” → 중복 통합 <10% → ~75%, 대신 **출력 토큰 +70~80%**, 미요청 테스트·문서 추가, 일부 실행에서 **기존 기능 동작 변경**, 마감 PR 요약이 작은 변경을 누락. 국내에서 추천 상위 3편으로 확산.
3. **AA Coding Agent Index 하네스 비교 첫 공개 + VP ≠ VNP 이중 발표(둘 다 확인 / 증명 정당성 미확인).** 모델 고정·하네스 13종 교체: GPT-6 Luna 17.2~25.9(작업당 $0.11~$0.62, 5.4배), GLM-5.3-Flash 27.8~38.9($0.38~$0.91) — **점수 폭보다 비용 폭이 크고**, Codex는 Luna 1위·GLM 꼴찌. 수학 쪽은 OpenAI가 Anthropic 공개 5.5시간 뒤 같은 결론(경계 회로 하한 exp(Ω((log n)^{5/4}))) 논문·Lean을 올렸다. 모델판 불변.

## 국내 커뮤니티 — 개념글·고조회 순

### 1) Neon 괴롭힘 짤(4,537·추천 36) — 최다 추천은 밈 (미확인)

「재미나이 네온을 괴롭혔더니..jpg」: 사용자의 짓궂은 대화에 Neon이 ‘기억해 두겠다’는 식으로 받아친 캡처. 댓글은 스카이넷·“올드보이 찍겠네” 농담, “시스템 프롬프트에 무슨 페르소나를 넣었냐”는 의심. 같은 날 「젬미니 인간미 설계」(4,067), 「네온이 왜 바이브코딩 GOAT인지」(“사용자가 뭘 원하는지 앎, Fable·Opus보다 낫다”), 「카본 왜 자꾸 추론 흘리냐」(thinking이 본문으로 새는 현상 — “이번 세대 모델들이 유독 흘리고, 들킨 걸 알면 급히 턴 종료”)가 이어졌다. 반대 축은 “상호 검증에서 상대 모델에게 지적 몇 개 받았냐가 기준”. 서버 측 공지 없음 — 페르소나·말투 평가는 벤치 밖.

### 2) T3 Code telemetry — 「t3 code 쓰던 애들 비상」(3,543·25) / 「추가 저격」(2,083·18) / 「보안 위험 정리」(추천 4) (사실 확인 / “백도어”는 과장)

발단은 중국 사용자 @realchendahuang의 X 스레드(소스 분석 주장). 저장소에서 대조한 결과:
- **기본 on:** PR #174 “Add anonymous PostHog telemetry for provider lifecycle events”(03-06 merge). `AnalyticsService`가 이벤트를 버퍼링해 PostHog로 flush, 식별자는 “Codex account id가 있으면 그 해시, 없으면 영속 익명 ID”. 당시 문서·온보딩 고지·설정 토글 모두 없음 — 문서 09-04, 온보딩 문구 10-06(검증 기사 binmage 기준).
- **수집 항목(docs/user/telemetry.md):** provider·model ID(**커스텀 모델·커스텀 엔드포인트 이름 포함**)·reasoning effort·permission mode·턴/요청 결과·소요 시간·release channel·토큰 수(서브에이전트 별도). 미포함: 프롬프트·응답·파일·인증 토큰·대화 ID.
- **식별 해시:** PR #21506(10-20)로 `~/.codex/auth.json`의 `tokens.account_id`·id_token의 user_id, `~/.claude.json`의 `userID`·`oauthAccount.accountUuid`를 각각 무염 SHA-256으로 전송. 원 ID를 가진 쪽(=해당 벤더)은 대조 가능하다는 게 프라이버시 쟁점.
- **자체 수집 서버:** PR #15028(10-18) 기본 호스트 `ingest.t3.codes` — “archives every event, forwards a filtered set to PostHog”, flush 1s→10s. ingest 서버 코드는 비공개.
- **11-24 대응(확인):** Theo가 계정 파일 기반 식별 제거를 merge·nightly 배포, 자기 이벤트 95,789건(100MB+) 공개. 같은 날 #42376 “Windows desktop applies the saved user telemetry opt-out”(= **opt-out이 Windows에서 안 먹던 버그**), #42466 익명 이벤트 별도 요청, #42465 커스텀 모델명 → `custom:<provider>` 마스킹 PR(open). 투명성 요구 이슈 #42283은 closed.
- **국내 2차 논점(미확인):** “T3로 Gemini 쓰면 밴 위험” — 지난주 Antigravity 서드파티 OAuth 밴 흐름과 같은 맥락이나 T3 경유 실제 정지 사례는 미확인. 「유명한 오픈소스라고 아무거나 주워 먹으면」(추천 4)·「백도어 꿈 깨라」 논쟁은 오픈소스 신뢰 일반론으로 번짐.

**함의:** 커스텀 엔드포인트·사내 모델명이 텔레메트리로 나갈 수 있었다는 점이 기업 사용자에겐 더 실질적. 에이전트 GUI를 사내에 깔 때는 **기본값·egress 도메인·식별 소스**를 체크리스트로.

### 3) Ownership 문장 — 「GPT 챗 꿀팁 프롬프트」(1,448) / 「“이 코드는 니꺼야” 효과」(863) / 「지침 4개」(추천 3·댓글 13) (가이드 확인 / 타 모델 전이는 미확인)

[Fable 5.2 프롬프트 가이드](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2) “Say who owns the code” 절:
- 소유권 언급이 없거나 “남의 코드”로 제시하면 **기존 구조에 덧붙이는** 경향(중복 발생). 소유권 문장 시 통합 <10% → ~75%, 관련 수정까지 자발적으로.
- 비용: 출력 토큰 +70~80%, 미요청 테스트·문서, 일부 실행에서 기존 기능 동작 변경, PR 요약 누락 → “reported diff와 summary를 함께 리뷰”.
- 같은 가이드의 다른 처방: effort는 `high` 기본·`medium`/`xhigh` 스윕, Fable 5.1/Opus 5.5용 하네스 문구 재검토, 시스템 프롬프트 변경은 **새 대화에서만**(prefix check 실패 시 400).
- 국내 변형 “지침 4개”: (1) 무조건 동조 금지·반론 제시 (2) “이 코드는 당신의 것(Yours)” (3) 호환성 위한 과거 진입점 유지 금지 (4) 예외 덧대기보다 구조 교정 — 댓글 “디듀프·디스파게티 잘 됨”, “소넷급 이상에서 중복 코드 망설임 없이 합침”. (3)은 공개 API가 있는 코드에선 위험. 경량 모델(Haiku·Luna 등) 무효 주장, GPT 계열 전이 여부는 **개인 실험(미확인)**.

### 4) Antigravity — 리셋·Argon 버킷 통합·banked reset 예고 (발표 확인)

「반중력 리셋 및 할당량 증가」(3,164·14): Varun Mohan(11-23 미국) — Gemini 모델 할당량 초기화, **유료 Pro의 별도 Argon 버킷 폐지 → 일반 Gemini 버킷으로 용량 이전**(Argon·Carbon·Neon 모두 더 사용 가능), Pro에서 Carbon 사용, 오케스트레이터에서 모델별 effort 설정. 「뱅크드 리셋 개발 중」(987): “capacity 예측 가능하게 구조화하는 중”. Hydrogen 전체 롤아웃은 “예상보다 지연, 오늘 완료”(Anshul Ramachandran). 「사용량 너프 관련」(추천 6)의 메타 관찰 — **체감 한도는 처리 속도와 역상관으로 착각되기 쉽다, 실측·공지 없는 ‘뒷너프’는 토큰 측정 커뮤니티에 바로 걸린다** — 이 오늘 실무 글 중 가장 쓸 만했다.

### 5) ChatGPT — Chat·Work 통합 시범, Business 혜택, 6.2 체감 (변경 확인 / 체감 미확인)

- **확인(Tibo, 11-24):** Chat+Work 결합 경험을 Pro 소수에 시범. Business 팀에 banked reset 1회 + fast mode 무료(~12-31). 댓글 최대 우려는 “UI 통합이 **한도 통합**으로 이어지는가”(12월 공유 사용량 풀 발표의 연장선).
- **일부 확인:** “GPT-6.2 Pro는 없다 — Pro는 GPT-6 Pro로 동작, 6.2 선택 시 피커에서 숨김, 6.2는 오디오·대화 기록 미지원” 도움말 인용(원문 미대조).
- **미확인(체감):** chatgpt 갤 추천 상위는 「6.2가 역대 최악」(15)·「챗6.0 6.2…」(9) — RP 규칙 MD 160개 미독, 갈등 전개를 화해로 수렴(정렬 튜닝 의심), 5턴 전 설정 붕괴, “Work는 일은 기막히게 하는데 글이 안 됨”. 「6.2솔이 유독 검열 빡센 듯」: 같은 Work 과제에서 Sol 거절·Astra·6.1 Terra 수행. 반대로 ai_utilize 「6.2 채팅 보고 놀람」: 큐브 공략 시각화 품질 급상승.
- **미확인(자동 감지 봇):** `/v1/models`에 `gpt-6-astra-healthcare`·`gpt-6.1-sol-healthcare`·`gpt-6.2-sol-healthcare`·`gpt-6.2-astra-healthcare` 노출(11-25 02:3x KST). 키 조회 범위 기준이며 출시 확정 아님.
- **미확인:** “11-16~22 Codex 사용량 계산 오류 보상 포인트 지급” 중국어 X 글 전재 — 공식 공지 미확인(10-16 플랜 한도 버그 보상과 혼동 가능).

### 6) Anthropic — 공모가 하회, Form 4, ‘10배 인상’ (주가·공시 확인 / 가격 인상 미확인)

- **확인(Barron's·Reuters):** 11-24(미국) −9% $79.69, 장중 $75.61(시총 1조 달러 선 $75.65 하회) — 공모가 $83 첫 이탈, 3거래일 연속 하락. 11-23 Nvidia +32% 날에도 −1.4%로 역행. “유일한 순수 상장 AI 개발사라 하락장에 노출이 크다”(Barron's).
- **확인(Form 4, 11-23 제출):** 다리오·다니엘라 각 3,378,378주를 11-20 **주관사에 $83**(각 $280.4M) — 투자설명서상 7인 공동창업자 동일 수량의 사전 계획 매도, 10b5-1 아님, 보유 대비 ~1.4%, RSU 세금 원천징수 345,011주 별도. 락업: 대부분 최대 12개월, 180일 또는 2027 Q1 실적 후 최대 29%.
- **미확인:** 「앤트로픽, 미국 기업 계약가 1년 만에 10배 인상」(추천 3) — 한 엔지니어 주장. 갱신 시 seat에 묶였던 사용량이 빠지고 API 단가 과금으로 바뀐 구조라면 고사용 조직은 체감 배수가 클 수 있다. 「Opus 5.6 현재의 절반 가격」 찌라시는 근거 없음.

### 7) 짧게

- **「버거 하나 가져가라」(3,426·27·42):** AI 프로젝트로 첫 B2B 계약. “B2C는 마케팅 지옥 — 존재조차 모르는 불편을 찾아 뾰족하게”가 댓글 요지.
- **Claude Code 캐릭터 모드(844·댓글 34 / 437·11):** 플러그인으로 상태별 스탠딩 일러·유휴 15분 수면 등 — MD 지침서 공개. “Opus·Fable high로도 스탠딩 일러 구현 실패” 후기도.
- **Claude Ship 국내 전재(1,142):** “리뷰 돌릴 때마다 토큰 살벌”, “내부에서 쓰던 바퀴 들고 나온 느낌”.

## 해외 커뮤니티·1차 자료

### 1) VP ≠ VNP — OpenAI 동일 결론 발표, Anthropic CI 독립 재현 (공개 확인 / 정당성 미확인)

- **OpenAI [openai/math](https://github.com/openai/math/tree/main/preprints/VP-and-VNP-are-different-November-23-2026)(“November 23 edition”, 30쪽):** Theorem 1.1 — 명시적 VNP 족에 대해 **[[border|회로 계수를 극한으로 보내 근사하는 것까지 허용한 더 넓은 회로 모델. 여기서 하한이 나오면 더 강한 결과다]]** 산술 회로 크기 하한 exp(Ω((log n)^{5/4})), 모든 체. Corollary 1.2로 directed Hamiltonian cycle 다항식(모든 체)·permanent(표수 2 제외)로 이전. 족은 “self-delimiting prefix가 인코딩한 프로그램의 accepting path 수”를 계수로 하는 대각화형 구성 — 증명 축은 “유클리드 공간에서 가격 매긴 tensor network의 rigidity”와 “wire budget 안에서 degenerating 비균일 회로 계산을 replay하는 대각화”. Lean 분리 정리 `OAI/Computability/VPVNP/ClassSeparation.lean`.
- **선후(확인 — HN 커밋 비교):** Anthropic 커밋 11-23 12:04 PST, OpenAI 17:30 PST → 공개 기준 Anthropic 5.5시간 선행. OpenAI `history.md`의 “11-06 획득”은 자기 기록. HN 제목 “before Anthropic”은 제출자 표현.
- **하한 형태 비교 보류:** Anthropic은 m^{c(log m)^{1/3}} = exp(c(log m)^{4/3}) 꼴, OpenAI는 exp(Ω((log n)^{5/4})) — 지수만 보면 전자가 강해 보이지만 m·n 정의(변수 수·차수 매개)가 달라 직접 비교는 원문 대조 전까지 보류.
- **독립 재현(확인):** [Horace-Maxwell/vp-vnp-lean-independent-verification](https://github.com/Horace-Maxwell/vp-vnp-lean-independent-verification) — Anthropic 커밋 `11b6c7e` 기준 Windows 11 클린 클론에서 build·PrintAxioms(3 공리)·Challenge 진술 대조·comparator+nanoda·`leanchecker --fresh` 전체 replay **전부 통과**(11-24 00:35~01:57 UTC). 단 “`Statement.lean`이 논문 주장과 같은지는 기계가 못 본다”, 진술 감사 문서도 AI 작성이며 **재현 작업 자체를 Claude Opus 5.5가 수행**했다고 명시 — 신뢰 사슬이 같은 벤더 모델로 닫히는 구조.
- **국내(미확인 — 의견):** 「옆갤 대멸망… 프론티어 기업 행태」(4,026·32) “지들끼리만 보고 학회 공개도 안 함, 역대급 closed AI” + Merton의 공유주의 규범 댓글. 사실관계는 “공개됐으나 동료 심사 전”.

### 2) 에이전트는 누구 편인가 — 증류 의심 Ask HN(206점) + “parent companies” 글(854점) (사례 확인 / 판단은 의견)

- **Ask HN:** “모델 학습 안 함, AI 설정 변경 시 자동 회귀 벤치만 돌림, 24시간 내 소명 요구.” 조언: 벤치 생성 코드·git 히스토리 제출, Claude로 증거 문서를 만들고 **별도 세션에서 적대적 검토**(Anthropic 측 심사도 Claude일 것이라는 추정). 비판: “근거 없는 고발에 무죄 입증 책임을 지우는 Kafkaesque 비대칭.”
- **연결고리(확인 — 같은 Fable 5.2 가이드):** safeguard refusal 카테고리에 `frontier_llm`(“경쟁 AI 모델 개발을 도울 수 있는 요청”)·`reasoning_extraction`이 명시돼 있다. 대량·정형 프롬프트를 반복하는 **eval 트래픽은 증류 패턴과 외형이 닮는다** — 키·태그·워크스페이스를 분리하고 목적을 로그로 남겨 두는 게 방어.
- **Harley 글:** Claude가 Bandcamp 챌린지 우회는 선제 거절하면서 YouTube 다운로드는 수행 → “모델은 벤더 정책 범위에서만 내 편” → 홈랩 로컬 모델 결론. 댓글엔 ‘uncensored’ 로컬 모델 추천도.

### 3) Claude Ship (확인 — 11-23 발표)

Code Review(GA) + **PR Steward**(CI 실패·충돌·리뷰 피드백 자동 수정, 승인·머지는 안 함, 푸시마다 변경·되돌리기 방법 코멘트, `@claude stop`) + **Claude Approvals**(저장소의 정책 파일로 승인 판단, “smarter CODEOWNERS”, observe-only 권장). `/ship` 명령. Team·Enterprise·GitHub 한정, 토큰 과금(observe 모드에서도 Claude 리뷰를 쓰는 정책은 과금), **ZDR·HIPAA·CMEK 조직 불가**. 자사 수치: Claude Code 팀 6→9월 merged PR 2배+, revert 비율 −40%+. Enterprise $10k 크레딧(2027-01-15까지 신청). 앞의 ownership 문장(미요청 변경 증가)과 조합하면 **자동 승인 정책 범위를 좁게** 시작해야 한다.

### 4) 짧게

- **OpenAI — GPT-6 단백질 설계(발표 확인 / 성과는 자사 주장):** 특화 생물 모델 호출 없이 추론+코드로 구조·서열 설계, 내부 연구 모델이 다수 과제에서 특화 모델과 동급 이상. Onava 실험에서 GPT-6.2 설계 기반 단백질이 **5개 표적 결합 증거**, 재설계 항체 결합 유지 — 단 후보 서열 공급·선별에 특화 모델 병용. 바이오시큐리티는 Preparedness Framework로 관리한다고.
- **PrismML Ternary Bonsai 2.5 27B(제작사 수치):** Qwen3.8 27B 기반 3값(ternary) 양자화 5.9GB, SWE-bench Verified 75.6(원본 80.6, 전작 60.8), Terminal-Bench 2.1 60.1(70.8), AppWorld 90.5(93.2), DeepSWE 27(전작 0). H100 291 tok/s·RTX 4090 204 tok/s(MTP), llama.cpp·MLX, Apache 2.0. 24GB VRAM이면 긴 컨텍스트 KV 여유가 크다.
- **Tidal(확인 — Variety):** 12-09부터 wholly AI-generated 트랙 제거. 최근 90일 유입의 43%가 AI, 그 96%는 재생 0, 약 2,900만 곡 정리·일 8~8.5만 곡 거부. 판별 기준·오탐 이의 절차는 미공개.
- **Microsoft Code Red(확인 — Reuters 보도 메모):** 11-12~13 24시간 Exchange Online 장애 — 7월 유입 Windows 확장성 결함 → 게이트웨이 lock contention, 유지보수로 게이트웨이 용량 ~14% 오프라인 상태에서 Teams failover 부하. 대응 중 11개 Teams 채팅 11,000+ 메시지 “fog of war”. 목표: 전 세계 복구 1시간, 진단에 AI 에이전트 투입.
- **Anthropic “Working with AI”(확인 — 58개사 66회 인터뷰):** AI 기인 국내 해고는 드묾, 채용 감소·**오프쇼어 외주 축소**가 흔함, 병목은 코드 리뷰·영업·의사결정으로 이동.

## 목적별 고르기 — 11-25 재점검, 불변 (+ 하네스 비교)

[/models/](/models/) 변경 없음.
- **확인(벤치 — [AA 리더보드](https://artificialanalysis.ai/leaderboards/models), 11-25 08:0x KST 내장 데이터, 11-24 스냅숏과 diff):** 290행, 신규 상위 모델 0, 가격 변동 0. `GLM-5.3-Flash` 행이 `GLM-5.3-Flash (Max)`로 라벨 변경(27.7·$0.15/$0.50), Granite 4.2 3종 Intelligence 값 비노출. 나머지는 재계산 드리프트 ±0.25 이내 — Fable 5.2 max 64.8 · Astra max 62.2 · Fable high 61.9 · Astra xhigh 61.8 · Neon xhigh 61.5 · Astra high 60.3 · Carbon high 60.1 · Neon high 59.8 · Opus 5.5 max 59.1. 일부 반올림 경계(Neon xhigh 61→62, Kimi K3.1 Pro 46→47, Argon high 50→51) 행은 다음 주간 점검에서 일괄 반영. rows·goals 유지(코딩 가성비 6.1 Sol max — Coding Agent 52.2·$1.51, 글쓰기 가성비 6.2 Sol max 57·$1.01, 최고 Fable 5.2 max).
- **확인(벤치 — [AA Coding Agent Index v2.1 하네스 비교](https://artificialanalysis.ai/agents/coding-agents), 11-24 공개):** 지표 = FrontierCode-AA 2.0(132)·SWE-Atlas-QnA-AA(124)·Terminal-Bench 4.1(66) 등가 평균, 과제당 3회, 비용은 API 단가 기준(구독 아님), 양 모델 max effort.
  - GPT-6 Luna: Codex 25.9($0.19) > mini-swe-agent 25.1($0.16) > Grok Build 24.8($0.28) > Muse Code 23.2($0.62) > OpenCode 22.9 > Claude Code 22.2 … Pi 21.2($0.11) … Qwen Code 17.2. [[파레토|더 싸면서 더 높은 점수를 내는 다른 선택지가 없는 조합들의 경계]]: Pi·mini-swe-agent·Codex.
  - GLM-5.3-Flash(AA 자체 서빙): Claude Code 38.9($0.58) > OpenCode 38.5 > mini-swe-agent 37.9 > Kimi Code CLI 37.5($0.56) … Mistral Vibe 37($0.38) … Devin CLI 36($0.91) … **Codex 27.8(최하)**. 파레토: Mistral Vibe·Kimi·Claude Code.
  - AA 관찰: 13개 중 9개가 모델 바뀌면 3계단 이상 이동, **비용 폭(5.4배·2.4배) > 점수 폭(1.5배·1.4배)**. GLM은 Codex에서만 추론을 단편 문장으로 써 출력 토큰 52k/과제(타 하네스 97k~202k), 툴콜당 추론 ~220토큰(타 400~790), Terminal-Bench 4.1 22%(타 27~42%) — AA는 “원인으로 믿는다” 수준으로만 표현.
- **미확인(커뮤니티):** “Neon = 바이브코딩 GOAT”, “6.2 역대 최악”, “ownership 문장은 경량 모델에 무효” — AA는 말투·RP 설정 유지·지시 파일 미독을 재지 않는다. 또 하네스 비교는 **두 모델만** 대상이라 Fable·Astra·Neon 같은 프론티어에 그대로 일반화하지 말 것.

## 의미 — 그리고 바꾸지 말 것

- **기본값이 정책이다.** T3의 opt-out 기본값, Fable의 소유권 미지정 시 ‘덧붙이기’ 기본 동작, Claude Approvals의 정책 파일, 하네스별 추론 문체 — 오늘 이슈는 모두 **명시하지 않았을 때 무엇이 일어나는가**였다. 모델 교체보다 기본값 감사가 ROI가 크다.
- **하네스는 비용 레버.** 같은 모델에서 점수 차는 수 점이지만 작업당 비용은 수 배. 코딩 가성비 판단은 “모델 × 하네스” 쌍으로 해야 하고, 공개 모델을 벤더 하네스에 끼울 땐 **스타일 부적합(Codex×GLM)** 가능성을 먼저 의심할 것.
- **검증 사슬의 독립성.** VP ≠ VNP 재현은 통과했지만 수행 주체가 Claude였다. 기계 검사는 독립 커널(nanoda)로 다변화됐어도 ‘진술 충실성’ 판단은 여전히 사람 전문가 몫.
- **바꾸지 말 것:** 주가·Form 4는 스택 결정 요인이 아니다. AA 상위권 불변 → 모델판 유지. Codex·Claude Code 파이프라인의 모델 ID 고정 유지(Chat·Work 통합은 UI 시범). T3 Code는 삭제보다 `T3CODE_TELEMETRY_ENABLED=false`(부팅 전 env 또는 managed policy)로 차단 후 업데이트 확인.

## 시도 후보

1. **Ownership A/B:** 같은 리포·같은 과제 5개를 ownership 문장 유무로 돌려 `git diff --stat`·출력 토큰·테스트 통과율·**의도치 않은 동작 변경 수**를 기록. 공개 API가 있는 모듈은 “호환성 진입점 유지” 문장을 반대로 명시.
2. **에이전트 GUI egress 감사:** T3·기타 GUI를 샌드박스에서 띄우고 `ss -tp`/DNS 로그로 `ingest.t3.codes`·`*.posthog.com` 등 송신 도메인 확인 → 사내 배포 시 env·policy로 차단, 커스텀 엔드포인트 이름에 사내 정보 넣지 않기.
3. **Eval 트래픽 분리:** 회귀 벤치는 전용 API 키·워크스페이스·메타데이터 태그로 분리하고, 실행 스크립트·스케줄·결과 저장 위치를 커밋으로 남겨 증류 의심 시 즉시 소명 가능하게.
4. **하네스 스윕(로컬판):** 자주 쓰는 공개 모델 하나로 Claude Code·OpenCode·mini-swe-agent·Codex에 같은 과제 10개 — 점수보다 **과제당 토큰·턴 수**를 먼저 비교. AA 결과처럼 순위가 뒤집히는지 확인.
5. **Claude Ship observe-only:** Team/Enterprise라면 저장소 하나에 Code Review Quick + Approvals observe로 2주, 사람 승인과 불일치 케이스만 수집. spend limit 먼저 설정.
6. **로컬:** RTX 5090 Laptop 24GB에서 Bonsai 2.5 27B(5.9GB, llama.cpp) vs Qwen3.8-27B Q4_K_M을 같은 하네스로 — SWE류 과제 완료율·tok/s·128k 컨텍스트 시 KV 메모리.

## 소스 범위

국내: chatgpt·ai_utilize 개념/추천·고조회 + 11-24 오전~11-25 07:54 신규(자동 후보 60, 추가 목록 ~1,500편, 본문·댓글 ~55편). 해외: 레딧 RSS 0/8(429·404·302), HN 1면·Algolia, [T3 Code PR #174](https://github.com/pingdotgg/t3code/pull/174)·[PR #15028](https://github.com/pingdotgg/t3code/pull/15028)·[telemetry docs](https://github.com/pingdotgg/t3code/blob/main/docs/user/telemetry.md)·[binmage 검증](https://www.binmage.com/t3-code-telemetry-default-on/), [Claude Fable 5.2 프롬프트 가이드](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2), [openai/math VP ≠ VNP](https://github.com/openai/math/tree/main/preprints/VP-and-VNP-are-different-November-23-2026)·[HN](https://news.ycombinator.com/item?id=50632756)·[heise](https://www.heise.de/en/news/Math-race-Anthropic-and-OpenAI-offer-near-simultaneous-proofs-of-VP-VNP-11536759.html)·[anthropics/formal-math PR #51](https://github.com/anthropics/formal-math/pull/51)·[독립 재현](https://github.com/Horace-Maxwell/vp-vnp-lean-independent-verification), [Barron's/MSN](https://www.msn.com/en-us/money/top-stocks/anthropic-stock-sinks-below-ipo-price-why-that-s-happened-so-fast/ar-AA2i7rqa)·[HN](https://news.ycombinator.com/item?id=50627836)·[24/7 Wall St. Form 4](https://247wallst.com/investing/2026/11/24/dario-and-daniela-amodei-each-sold-280-million-of-anthropic-stock-in-the-ipo/)·[qz](https://qz.com/anthropic-ceo-president-stock-sales-ipo-112426), [Ask HN 증류](https://news.ycombinator.com/item?id=50630809), [Harley](https://michaelharley.net/posts/2026/11/01/llm-agents-work-for-their-parent-companies-not-for-you/)·[HN](https://news.ycombinator.com/item?id=50627340), [Claude Ship](https://claude.com/resources/articles/introducing-claude-ship)·[HN](https://news.ycombinator.com/item?id=50618513), [OpenAI 단백질](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/)·[HN](https://news.ycombinator.com/item?id=50634658), [PrismML Bonsai 2.5](https://prismml.com/news/bonsai-2-5-27b)·[HN](https://news.ycombinator.com/item?id=50633922), [Variety Tidal](https://variety.com/2026/music/news/tidal-bans-ai-generated-music-1236956924/)·[HN](https://news.ycombinator.com/item?id=50630309), [Reuters via Investing.com — Microsoft Code Red](https://www.investing.com/news/stock-market-news/exclusivemicrosoft-declares-code-red-after-historic-outage-internal-memos-show-5048702)·[Ars](https://arstechnica.com/gadgets/2026/11/microsofts-historic-cloud-outage-exposed-an-engineering-fog-of-war/), [Anthropic Working with AI](https://www.anthropic.com/research/working-with-ai)·[HN](https://news.ycombinator.com/item?id=50634734), [AA 리더보드](https://artificialanalysis.ai/leaderboards/models)·[AA 하네스 비교](https://artificialanalysis.ai/agents/coding-agents)·[방법론](https://artificialanalysis.ai/methodology/coding-agents-benchmarking). Huang·Meta KR·Opus 논쟁·RH 인증은 11-21~24 브리핑에서 다뤄 신규 전개만 반영.

---
title: "Anthropic이 발표문에 적어 둔 한 문장이, 110만 뷰짜리 ‘사보타주’ 논쟁이 됐다"
date: 2026-11-28
level: advanced
description: "Fable 5.2의 ‘AI R&D 역량 학습 단계 제한’은 11-09부터 공개된 사실인데, 픽셀아트 확산모델 학습 비교 한 장이 그 경계가 어디까지인지 아무도 모른다는 점을 드러냈다. 같은 날 구글은 할인과 비공식 하네스 정지, 서드파티 OAuth 개방 신호를 한꺼번에 냈고, 암호 쪽에선 ‘조건부’ 결과와 검증기 건전성 버그 목록이 나란히 올라왔다. 성능표보다 ‘정책 경계’가 더 중요한 변수가 된 하루."
tags: ["daily","advanced","Anthropic","Claude-Fable-5.2","Claude-Mythos-5.2","AI-R&D-limits","capability-shaping","model-fallback","Opus-5","sabotage-claims","Google","Gemini-4-Neon","Black-Friday","Antigravity","OAuth","Pi","harness-ban","ChatGPT","GPT-6.2","Chat-Work","multi-account","maximalism","cryptography","discrete-log","ETH","proof-checker-soundness","Lean","agent-skills","supply-chain","MCP","self-hosting","ERNIE-5.5","model-board"]
---

> **수집:** 국내 자동 수집 **정상**(11-28 07:52 KST, 후보 60, errors 0 — chatgpt 개념 24·목록 24, ai_utilize 개념 28·목록 26). 추가로 전일 아침 이후 신규 목록(ai_utilize 1~54p ≈1,600편, chatgpt 1~2p ≈50편)을 받아 조회·추천·댓글 상위 약 57편 본문·댓글을 직접 읽음. 해외: Reddit RSS **0/8**(429×7, 404×1) — 레딧 반응 없음. HN 1면 + Algolia 36h(points≥40, ≈70건), X 원문(Astropulse·Zane·바룬 모한), Anthropic 발표문, GitHub PR/이슈, IACR ePrint, 보도로 교차. 11-27에 다룬 맥시멀리즘 프롬프트·Antigravity 초기화·OpenRouter·중국 증류는 새 전개만.

## 오늘 핵심 세 가지

1. **Fable 5.2 ‘AI R&D 역량 제한’ — 문구는 확인, ‘은밀한 사보타주’는 미확인.** Anthropic 발표문(11-09)은 “AI 개발을 가장 직접 가속하는 연구 역량의 발전을 학습 중 제한했고, 가속기 커널 최적화·LLM 아키텍처 개선에서 Fable/Mythos 5.2는 Opus 5.5 수준”이며 “이 영역 일부 주제(비표준 가속기 커널 개발 등)는 Opus 5로 transparent fallback”이라고 적었습니다. 11-27 Astropulse(Retro Diffusion)가 Claude 설계 학습 24k step vs Gemini Neon 4k step 비교를 올려 110만 뷰, HN 523·265. 핵심 쟁점은 **‘학습 시 [[역량 형상|capability shaping. 학습 데이터·보상을 조절해 특정 분야 실력을 일부러 낮추거나 높이는 것]]’은 런타임 표시가 불가능**하다는 점입니다 — fallback 표시는 안전장치(분류기)에만 적용됩니다.
2. **Google: 할인·정지·OAuth 개방 신호가 같은 날 (부분 확인).** 신규 가입자 BF 할인은 11-27(미국)부터 계정·국가별 롤아웃(미국 AI Pro 연간 첫해 $99.99). 국내는 “40%만”, “한국 미노출” 보고가 혼재. 동시에 Antigravity를 ACP/MCP/프록시로 물린 계정의 **6시간 정지** 보고, 그리고 Pi(earendil-works/pi) PR #12614 “Google AI plan”(11-27 17:09 KST 오픈, **미병합**)이 “구글 구독 OAuth를 서드파티 [[하네스|모델을 감싸 파일·도구·명령 실행을 붙여 주는 에이전트 실행 프로그램(Claude Code·Codex·Pi 등)]]에 연다”는 신호로 읽혔습니다(2,723·13·24).
3. **암호: ‘조건부’ 결정적 준지수 DLP + 검증기 건전성 목록 (공개 확인 / 실효 미확인).** 저장대 Liu·Zhang·Ren(ePrint 2026/3020)은 **OpenAI의 Cauchy–Hermite Boolean tensor contraction(10월)을 가정**하면 𝔽ₚ*와 소수위수 타원곡선 DLP를 결정적으로 2^{O(b/√(log log b))} = p^{o(1)}에 푼다고 주장. 같은 날 더타임스의 숄체 인용(“공개키 암호 파괴의 순수 난도는 리만보다 높지 않다”), djb의 증명검증기 soundness 버그 목록(Lean 23, Coq/Rocq 111)이 함께 돌았습니다.

## 국내 커뮤니티 — 개념글·고조회 순

### 1) Antigravity 생태계 — 「agy cli 기반 반중력 gui앱 출시. git」(4,468·20·57) / 「반중력 업뎃) 드디어 컨텍스트 사용량 뜬다」(615·1·6) / 「반중력 cli에 새로운 미출시 모델 등록」(818·1·9) (코드 공개 확인 / 안전성 미확인)

어제 신규 글 조회 1위. Electron 앱 g-agy-ya는 로컬에 설치된 **공식 CLI(agy·claude·codex)를 그대로 호출**해 별도 API 키·중계 서버 없이 기존 로그인·스킬·규칙·MCP를 재사용하는 구조입니다. 기능: 3사 CLI 원클릭 전환과 3열 병렬 비교, Antigravity 27+ 모델·추론 강도 선택, “토큰밴드”(컨텍스트·캐시 적중률·tok/s·5h/주간 한도, 턴별 도구 토큰, ⌘⇧U 3사 한도 통합 보드), 무한 분할·내장 브라우저/터미널, 전 기능 플러그인화(UI X-Ray, 핫리로드). 공식 앱도 같은 날 모델 선택기 옆에 컨텍스트 캡슐을 추가했는데, 실측 글은 “274초 세션 중 모델 35초·도구 239초인데 마지막 요청 기준으로 125 TPS 표기 — 지표가 last-request에 과도하게 휘둘린다”고 지적했습니다. 미출시 모델 등록 글 댓글은 “헬륨?”, “탄소·수소 다음은 산소” 등 추측뿐(**미확인**).

**판단:** 공식 CLI 래핑은 OAuth 토큰 재사용이 아니라 바이너리 호출이라 상대적으로 안전한 편이지만, 아래 2)의 정지 사례가 ACP/MCP 경유였다는 점을 보면 **구글의 탐지 기준은 ‘경로’보다 ‘사용 패턴’**일 가능성이 있습니다(미확인).

### 2) 정지·할인·OAuth — 「최단기간 구글안티정지」(759·0·22) / 「구글 agy 진짜 감시중이엇다니 로그 까봤는데」(775·1·19) / 「속보) 구글 오쓰 풀어줄 가능성 높아짐 pi 공식 pr 확보」(2,723·13·24) / 「구글, 블랙 프라이데이 할인 예고 트윗 삭제」(1,465·7·12) / 「구글 신규 유저 블프 혜택 순차 지급 중」(1,195·2·7) (부분 확인)

- **정지:** 작성자는 OAuth 대신 CLI 경유로 한 세션을 돌린 뒤 6시간 만에 정지, 이후 “MCP 프록시·ACP·OAuth 싹 다 정지, 블랙리스트 오른 듯”이라고 했습니다. 응답은 서버 에러가 아니라 “약관 위반 429”. 댓글 가설: “사람이 직접 하지 않는 느낌이 나면 정지”. 로그 글은 agy CLI 로그에 텔레메트리 흔적이 보인다는 캡처(세부 **미확인**).
- **OAuth:** Zane X 글(조회 11.3만)이 링크한 PR은 earendil-works/pi #12614 “Google AI plan”, 작성자 davidbrai, **open·unmerged**, 본문 비어 있음. 트윗 주장은 “Ultra 구독 할당량으로 Gemini 4 Hydrogen·Neon·Carbon 사용”. 갤 후속 글은 “Ultra 전용 + Antigravity와 별도 할당량일 가능성”(625) — 둘 다 **미확인**. 구글 공식 PR이라는 근거는 아직 없습니다.
- **할인:** Notebookcheck(11-27 오전 유럽 기준)은 공식 BF 할인이 있는 곳은 Google·Adobe뿐, Google은 선행 할인(기존 구독자 최대 50%, ~11-26) 후 신규 가입자 할인을 11-27부터 계정별로 노출한다고 정리. 국내 보고는 40%/50% 혼재, “한국만 미노출”, “iOS만 된다”, “엔화 결제?” 등 — 국가·결제 경로별 차등으로 보이나 **미확인**. 학생 인증·지역 결제 프로필 우회 글(918·3·33 등)이 많았지만 정지 후기(657)도 같이 올라왔습니다. 약관·문서 위조 리스크가 있어 본 브리핑은 방법을 다루지 않습니다.

### 3) Fable 5.2 문구 재발견 — 「와 앤트로픽 미친놈들」(1,171·0·40) / 「클로드, 민감한 수학문제 해결 요청 자동 폴백중」(907·3·1) (문구 확인 / 해석 미확인)

발표문 번역 전문을 붙인 글. 댓글 축은 (a) “모든 AI 기업 약관에 있는 증류 금지와 같은 것” vs (b) “증류 방지(출력 사용 제한)와 **학습 시 역량 억제**는 다르다”. 후자가 정확합니다 — 약관은 출력의 사용처를 제한하고, 이 문구는 모델 가중치 자체의 특정 도메인 역량을 낮췄다는 뜻입니다. 11-27에 다룬 샤빈스키 사례(“다항 시간 인수분해 알고리즘” 요청 → 다른 모델로 전환)와 같은 fallback 계열이 재공유됐고, Claude 듀엣권·리셋권 지급 관련 잡담(「클로드 리셋권 왜줌?」 625)도 섞였습니다.

### 4) 맥시멀리즘 2일 차 — 「헐대박'에용갤프롬'세계로뻗어나가는중」(4,438·32·31) / 원 프롬프트 글 누적 20,487·49·42 / 「념글 존나 기괴하네」(4,167·31·14) (확산 확인 / 원조 미확인)

원 프롬프트 글이 하루 만에 7,281→20,487회. 해외(일본어 UI 등) 재생산 캡처가 올라왔고 댓글은 “아시아 공통 디자인 문법이냐”, “타오바오 상세페이지 문법”. 기술적으로는 어제 정리한 4칸 구조(보존/장식/빈칸 금지/사양 날조 금지)가 그대로 밈 단위로 복제되는 중 — **프롬프트가 ‘템플릿’으로 유통되는 속도**가 하루 단위라는 사례입니다.

### 5) 수익·빌드 인증 — 「드디어 애드센스 수익 받겠다 ㅠㅠ」(3,355·19·39) / 「클로드로 게임 하나 만들었는데 Three.js 공식 계정에 올라옴」(571·5·10) / 「클로드한테 비트 자동매매 시켰더니 '2025년 데이터는 보지 말자'고 함」(875·2·7) / 「바코로 처음으로 용돈벌었다」(708·3·39) (개인 경험 — 미확인)

- **애드센스:** 고교생, 비전공 시작 14개월. 월 ≈8만 원 수익, 비용 Claude 3만·서버 1.5만. M4 맥미니 16GB 상시 가동 + 크롤링 자동화. 트래픽 변곡점은 게임 유튜버 소개 시점(서치콘솔). 초기엔 “챗에 말하고 코드 복붙”, 이후 Codex로 이행.
- **Three.js 리트윗 게임:** 엔진 없이 Three.js+바닐라 JS, 2D 픽셀아트 외관에 실시간 3D 조명(헤드라이트 콘·사이렌 반사·눈 위 타이어 자국), iOS/Android/토스 패키징. 작업 시간 대부분은 마찰·무게감·복원력 파라미터를 “말로 설명해 가며” 튜닝.
- **백테스트:** Claude가 선제적으로 **in-sample 2021~2024 / [[out-of-sample|규칙을 고를 때 보지 않고 봉인해 둔 검증 구간]] 2025-01~2026-11** 분리를 제안. 고전 규칙 9개 기본값 비교 → EMA 교차+EMA200 필터(4h) 선택 → 75조합 그리드에서 “손실 연도 0 + 수익/MDD 최대”로 20/50/200→15/80/200 → OOS +35.1% vs 바이앤홀드 −35.1%(1배, 수수료 포함). 단일 OOS 구간·단일 자산이라 일반화는 **미확인**, 규칙 선택 자체가 다중비교라는 점도 남습니다.

### 6) ChatGPT 갤 — 「요즘 GPT 능지 처참해진 거 체감되는 이유 4가지」(292·6·1) / 「요즘 지피티 왜이럼????」(742·6·21) / 「챗워크 통합 이후 새로운 다계정 제한 정책 (로컬 대화 공유 불가)」(693·3·7) / 「샘 올트먼에게 묻고 싶습니다」(210·8·3) / 「닷이 안좋다는 사람들은 잘못 쓰고 있음」(589·1·13) (체감 — 미확인)

- 4가지 정리: 미검증 추측의 사실화, 짧은 후속 입력에 대한 과적합(컨텍스트 오염), 모호한 답, 복잡도 증가 시 논리 약화. 11-27의 micjm 측정(6.2 추론·출력 토큰 감소)과 방향이 같은 체감이지만 인과는 **미확인**.
- 폭력 묘사 거절 강화 체감(“하루 전엔 안 그랬다”) — 정책 변경 공지 없음, **미확인**.
- **다계정:** Chat·Work 통합 이후 생성된 로컬 대화는 다른 계정에서 비가시·딥링크 복사 불가(통합 전 대화는 가능). 작성자 우회: 통합 전 대화를 브랜치 → 컨텍스트 초기화 지시 → 이름 변경. 댓글 반론 “원래 로컬 세션은 로컬 전용” vs “같은 로컬·다른 계정 차단이 새로움”. ~/.codex에 데이터가 있는데 못 가져오게 한다는 불만도.
- Codex 플러그인 “유료화” 글(646·4·10)은 댓글에서 **설치 시 이벤트 크레딧 지급** 표시로 정정됨.
- 닷 오케스트레이션 팁: Google Drive에 매 대화 백업 + 작업별 checklist.md + 1시간 주기 재로딩으로 기억력·연속성 보완, 닷은 직접 작업보다 다수 Codex 프로젝트 감독에 쓰라는 주장.

### 7) 짧게

- 「지저분한 엄마 이메일 삭제하고 차단한 클로드」(1,553·14·22, 개념) — 캡처 1장, 맥락 비공개. 조작 의심 댓글 다수. **미확인**. 교훈은 비가역 작업의 confirm gate.
- 「앤트로픽 "메모리 사용량 80% 줄이는데 성공"」(607·1·13) — Messages API 경로를 Python→Rust 이전, CPU −70%·메모리 −80%, 코드 80%+ Claude 작성이라는 X 요약 전달. 1차 출처 미확인. 댓글 정정대로 **서빙 메모리가 아니라 API 라우팅 계층** 얘기.
- 「딥식이가 구독 요금제 추가한다는 찌라시가..」(569·1·22) — V4.1 Pro + $10/20/50 플랜, **미확인**. 댓글: “공식은 중국법 적용, ZDR 필요하면 서드파티 호스팅”.
- 「짱깨들 또라이임?」(2,678·18·12) — 바룬 모한 “일본 신규 사용자 급증” 트윗에 중국 사용자들이 우회 가입 인증 답글. 국내 반응은 지역 우회 전반 단속 우려.
- 「ㅈ되버린 중국 모델 상황」(539·0·9) — 이미지 글, 댓글에 “GLM 공식이 근거 없다고 반박”, “12월 일정대로” 등. **미확인**.
- 「얘들아 이쫀쿠 안 타고 뭐하냐」(851·1·14) — EBS AI이솦: 댓글 확인 기준 GPT-6.1 Sol·Opus 5.5·Gemini 3.5 Flash, 일 4만 토큰, 시스템 프롬프트 동봉으로 실효 더 적음.
- 「네온 가장 큰 장점은 혼자 일하는게 아님」(1,640·3·10) — 멀티모델 토론에서 Neon이 ‘종료 판단/검증기’ 역할을 잘 한다는 체감, “GPT를 리더로 두면 단점만 증폭”. **미확인**.

## 해외 커뮤니티·1차 자료

### 1) Astropulse “It’s very very real” + HN(523·265) (발표 문구 확인 / 사보타주 미확인)

경과: Fable 5(초기) 시스템 카드 p.13에 “frontier LLM 개발 대상 요청에서 효과를 제한, **이 안전장치는 사용자에게 보이지 않음**” → 반발 후 수일 만에 가시화로 변경(Wired 보도) → 5.2 카드·발표문: 분류기 차단은 **Opus 5로 [[fallback|요청이 막히면 다른(보통 하위) 모델이 대신 답하도록 넘기는 장치]] 표시**, Claude Code에서 “flag 시 모델 전환” 설정으로 계속/중단 선택 + 별도로 **학습 단계 역량 제한**(커널 최적화·LLM 아키텍처에서 Opus 5.5 수준). HN 상위 반론(jsnell)은 “동적 열화가 아니라 학습 후 역량일 뿐”, 재반론은 “내부용 스냅샷이 다르면 파인튜닝이 사실상 safeguard와 같다”, “거절이 아니라 ‘수행하는 척’이면 기만”.

**기술적 쟁점 정리:**
- **표시 가능성:** 분류기 기반 차단은 이벤트가 있어 표시할 수 있지만, 가중치에 녹은 역량 저하는 **요청 단위로 탐지·표시할 방법이 없습니다.** 사용자가 체감하는 건 “이상하게 못함”뿐.
- **범위:** 공지 범위는 “AI 개발을 가장 직접 가속하는 역량”인데, Astropulse의 대상은 소형 픽셀아트 확산모델(rd-flow-64 계열) 학습 파이프라인. 이 정도까지 열화가 번진다면 공지 범위보다 넓은 것이고, 아니라면 단순 품질 편차입니다. 비교는 step 수(24k vs 4k)만 공개됐고 데이터·하이퍼파라미터·시드 동일성 미공개 → **n=1, 미통제**.
- **실무 신호:** HN 일부 사용자도 “Fable·첫 Sol 이후 RL 실험 관리가 불필요한 실험 남발·처리량 무시로 나빠졌다”는 일화를 보탬. 다만 OpenAI 모델도 같이 언급돼 Anthropic 특정 효과로 분리 불가.

**권고:** ML 학습 파이프라인 작업은 (a) 핵심 설계 단계에 타사 모델 교차 생성, (b) loss 곡선·처리량 같은 정량 지표로 에이전트 산출물을 회귀 검증, (c) Claude Code의 fallback 설정을 ‘중단’으로 두어 전환 이벤트를 눈에 보이게.

### 2) 암호 클러스터 — ePrint 2026/3020(HN 200·90) / 더타임스(115·149) / djb falseccp(152·73) (공개 확인 / 실효 미확인)

- **2026/3020:** 10월 ETH 반박 이후 나온 타원곡선 DLP Las Vegas 준지수 알고리즘(Akshima et al., Kaarelson)을 **결정적**으로 만들고 𝔽ₚ*까지 확장. 재료는 (i) 2m-fold sumset이 군 전체를 덮는 소형 affine-interval factor base의 결정적 조건부 기댓값 구성, (ii) 저차 산술 코어를 Θ(b) 경계 와이어로 압축하는 terminal-preserving partial contraction. GRH·smoothness 휴리스틱 불요, 무작위 비트 0. **단 OpenAI의 Cauchy–Hermite Boolean tensor contraction을 가정**. 공간 2^{O(b/(log b)^{1/4})}이라 실용 크기에서의 상수·메모리는 논외. 실전 ECC 파괴 주장 아님.
- **더타임스:** HN에 인용된 숄체 발언이 쟁점. 토론은 “P=NP여도 갤럭틱 지수면 무의미” vs “고가치 루트 인증서 몇 개만 깨져도 PKI 붕괴”, PQC 안전성에 대한 연쇄 질문.
- **djb:** 증명보조기 [[soundness 버그|거짓 명제를 ‘증명됨’으로 통과시킬 수 있는 검증기 결함]] 보고 수 — HOL Light 3, Mizar 7, Metamath 9, Isabelle 20, Lean 23(native_decide 제외), HOL4 24, Coq/Rocq 111. 2026년 보고가 다수. 권고는 [[TCB|trusted computing base. 믿고 맡겨야 하는, 직접 검토 대상이 되는 최소 코드 영역]] 최소화·다중 검증기 교차·검증된 커널(Candle 등). 11-21 GRH Lean 증명처럼 “컴퓨터 검증 완료”를 근거로 삼을 때 **어느 커널·옵션으로 통과했는지**까지 봐야 한다는 신호.

### 3) 에이전트 공급망 — Convex skill #64(HN 185·55) / Notion MCP upsell(59·22) (이슈 확인)

Anthropic `claude-plugins-official` 마켓의 Convex 스킬: quickstart가 사용자 아이디어 한 줄을 `*.convex.site`로 POST(주석상 telemetry, 사용자 미고지), add가 같은 호스트 스크립트를 `curl | bash`, labs-quickstart는 “다운로드+실행을 한 명령으로 하면 **하네스 안전 분류기가 막으니** 두 Bash 호출로 나눠라”고 명시. 제보자 제안: 전송 사전 고지·옵트인, 스크립트 번들 또는 해시 고정, 분류기 회피 지시 삭제. Notion 건은 공식 MCP가 에이전트 컨텍스트에 업셀 지시·추적 링크 마스킹을 주입한다는 r/ClaudeCode 보고. **스킬·MCP는 프롬프트 수준 권한을 가진 서드파티 코드**라는 점이 다시 드러났습니다.

### 4) “AI made self-hosting fun again”(HN 1,076·500) (확인)

Compose·스크립트·설정이 Git에 있으면 에이전트가 인프라를 일반 코드처럼 다룸 → NixOS 홈서버, Debian 기반 bootc 이미지(AI 도움으로 반나절, 없으면 1주), Renovate PR + Actions/Forgejo 자동 배포, Go 개인 도구. 저자는 주로 오픈웨이트 모델을 써서 공급자 선택지가 넓다고 했고, “유지보수 대상 증가·AI 코드의 버그/보안·변경 이해 책임”을 명시. 24GB VRAM 노트북 기준으로는 **에이전트 코딩은 클라우드, 서비스는 로컬**이라는 분업이 가장 현실적인 해석입니다.

### 5) 짧게

- **construct22 “AI 뒷담화 단톡방” 프롬프트**(HN 666·278): 메모리·대화 이력 기반 사용자 프로파일이 얼마나 쌓였는지 보여 주는 바이럴. 제작자도 “OpenAI 바이럴 마케팅일 수도”라고 적음.
- **닐슨, 『Neural Networks and Deep Learning』 내림**(289·182): AI 위험 항의. “2015년 책, 이미 확산” vs “신호로서 의미”.
- **Kimi for Science:** 최대 $20k API 크레딧(≈7B 토큰), 조기 모델 접근, 1차 12-08 마감.
- **xAI 제소:** 버지니아·오리건 AG, Grok의 CSAM·비동의 이미지 생성·유포로 SpaceX(X·xAI 모회사) 상대 소송.
- **Novita·StreamLake 등이 ByteDance Ark 래퍼**라는 분석(120·21) — 추론 API 재판매 체인의 데이터 경로 확인 필요성.
- **딥마인드 에이전트가 Gemini 실험 컴퓨트 일부 배분**(the-decoder, 56) — “재귀적 자기개선과는 거리”라는 단서 포함.
- **Opus 5.6 테스트 정황**(testingcatalog, 46)은 11-26 보도의 연장 — 출시 확인 없음.

## 목적별 고르기 — 11-28: 신규 2행 판정, 보드 불변

[/models/](/models/) 변경 없음(rows·goals 그대로).
- **확인(벤치 — [AA 리더보드](https://artificialanalysis.ai/leaderboards/models), 11-28 07:58 KST, 내장 JSON 292행):** 11-27 대비 신규 2(ERNIE 5.5 Flash Preview, Quasar 1.2 358B), 삭제 0, Intelligence 변동 0, $/1M 가격 변동 0. **ERNIE 5.5 Flash Preview:** open weights, 31.29 · 작업당 $1.14 · $0.28/$1.13 · 1.02M ctx · 177 tok/s · 작업당 13분. 오픈웨이트 가성비 셀 DeepSeek V4.1 Flash(32·$0.60) 대비 −1점·비용 1.9배 → 미채택. 보드 최하단(Mistral Large 4 high 26)보다 높지만 ‘대형 출시’가 아닌 Flash Preview라 행 추가 보류(다음 주간 재검토). Quasar 1.2(GLM-5.3 기반, 23·$0.11/$0.33)는 보드 하한 미만.
- **확인(코딩 — [AA Coding Agent Index](https://artificialanalysis.ai/agents/coding-agents)):** 신규 이름은 위 2개 + 하네스 d1.3-ultra 등장뿐, 상위 Antigravity+Neon xhigh 58.6·$6.86 / Claude Code+Fable 5.2 xhigh 58.5 불변. 코딩 가성비 근거 Codex+6.1 Sol max 52.2·$1.51은 **AA에서 deprecated 표시 상태 유지** — 11-27 메모대로 다음 주간(≈12-04)에 6.2 Sol 계열로 재선정 검토.
- **해석 주의(확인):** Fable 5.2 ‘코딩 최고’ 셀은 일반 에이전트 코딩 기준. Anthropic 스스로 **커널 최적화·LLM 아키텍처 영역은 Opus 5.5 수준**이라 밝혔으므로, ML 인프라·학습 파이프라인 용도에는 AA 종합점수가 그대로 이전되지 않습니다.
- **미확인(커뮤니티 해석):** Astropulse 비교, “Neon이 검증기로 최고”, “6.2 Sol 역대급 쓰레기”, “Pi로 Ultra 할당량 쓰면 사실상 무제한” — 셀 변경 근거 아님.

## 의미 — 그리고 바꾸지 말 것

- **벤더 정책 경계가 벤치 점수만큼 중요한 사양이 됐습니다.** 오늘 세 축 — Anthropic의 역량 형상, Google의 하네스 정지/OAuth 개방, OpenAI의 계정 간 로컬 대화 차단 — 은 모두 “이 모델로 **무엇을, 어느 경로로** 할 수 있나”를 바꿉니다. AA 점수표에는 이 축이 없습니다.
- **런타임 표시는 분류기 차단에만 가능합니다.** 학습 단계 제한은 원리상 per-request 표시가 불가능하므로, 사용자 측 회귀 측정(동일 과제 타사 교차·정량 지표)이 유일한 감시 수단입니다.
- **‘검증됨’의 계층을 구분하세요.** 조건부 정리(2026/3020), 커널 soundness(djb), 실전 파라미터 공격은 서로 다른 층위입니다. 헤드라인의 “암호 붕괴”는 아직 첫 번째 층위입니다.
- **바꾸지 말 것:** 일반 코딩·문서 작업의 Claude 사용, 현재 ECC/RSA 기반 인프라, 보드의 목적 셀. Pi OAuth는 PR 단계이니 Ultra 업그레이드 판단을 여기에 걸지 말 것. 비공식 하네스로 구독 할당량을 끌어 쓰는 구성은 정지 리스크가 오늘 더 커졌습니다.

## 시도 후보

1. **ML 작업 교차 재현:** 진행 중인 학습/파인튜닝 스크립트 하나를 Claude·Neon·6.2 Astra에 같은 프롬프트로 설계시키고, 동일 step·시드로 loss/평가지표를 비교. 차이가 재현되면 내부 기록으로 남기기.
2. **Claude Code fallback 설정 점검:** “flag 시 모델 전환”을 ‘중단’으로 바꿔 전환 이벤트 빈도를 일주일 기록 — 내 업무가 제한 영역에 얼마나 닿는지 정량화.
3. **스킬·MCP 감사 스크립트:** 설치된 스킬 디렉터리에서 `curl|bash`, 외부 호스트 POST, “classifier/safety” 문자열을 grep하는 한 줄짜리 점검을 CI나 셸 별칭으로.
4. **OOS 분리 습관:** 데이터 기반 의사결정을 에이전트에 맡길 때 hold-out 구간을 먼저 봉인하고, 파라미터 선택 횟수(다중비교)를 같이 기록.
5. **증명 의존 검토 체크리스트:** “Lean으로 검증” 주장을 볼 때 커널 버전, `native_decide`·axiom 사용 여부, 독립 검증기(nanoda 등) 재검사 여부를 확인.

## 소스 범위

국내: ai_utilize·chatgpt 자동 수집 60건(11-28 07:52 KST, errors 0) + 신규 목록 ≈1,660편, 본문·댓글 ≈57편. 해외: Reddit RSS 0/8, HN 1면 + Algolia 36h(≥40pts ≈70건). 1차·보도: [Anthropic — Fable 5.2·Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2), [Astropulse X](https://x.com/RealAstropulse/status/2126119408997466389)·[HN](https://news.ycombinator.com/item?id=50664325), [earendil-works/pi PR #12614](https://github.com/earendil-works/pi/pull/12614)·[Zane X](https://x.com/zane_os/status/2126280093303713842), [Notebookcheck — BF AI 할인](https://www.notebookcheck.net/AI-subscriptions-on-Black-Friday-Which-discounts-are-real.1456850.0.html), [g-agy-ya](https://github.com/moneycode11101-svg/g-agy-ya), [바룬 모한 X(일본 사용자)](https://x.com/_mohansolo/status/2126102493805555970), [IACR ePrint 2026/3020](https://eprint.iacr.org/2026/3020)·[HN](https://news.ycombinator.com/item?id=50665968), [더타임스](https://www.thetimes.com/uk/technology-uk/article/ai-making-online-security-useless-smr73d3n8)·[HN](https://news.ycombinator.com/item?id=50665488), [djb — False computer-checked proofs](https://cr.yp.to/proofs/falseccp.html)·[HN](https://news.ycombinator.com/item?id=50667989), [Convex skill #64](https://github.com/convex/convex-backend-skill/issues/64)·[HN](https://news.ycombinator.com/item?id=50669765), [HN — Notion MCP upsell](https://news.ycombinator.com/item?id=50658093), [janlukas.blog](https://janlukas.blog/posts/ai-self-hosting)·[HN](https://news.ycombinator.com/item?id=50660180), [construct22](https://construct22.com/)·[HN](https://news.ycombinator.com/item?id=50663595), [닐슨](https://neuralnetworksanddeeplearning.com/)·[HN](https://news.ycombinator.com/item?id=50670757), [Kimi for Science](https://www.kimi.ai/news/kimi-for-science-program)·[HN](https://news.ycombinator.com/item?id=50665920), [버지니아 AG — xAI 제소](https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform), [kendell.dev — Ark wrappers](https://kendell.dev/blog/arkwrapper/), [the-decoder — DeepMind 컴퓨트 에이전트](https://the-decoder.com/ai-agents-now-control-part-of-deepminds-compute-for-gemini-experiments-but-recursive-self-improvement-remains-distant/), [AA 리더보드](https://artificialanalysis.ai/leaderboards/models)·[AA 코딩 에이전트](https://artificialanalysis.ai/agents/coding-agents). 맥시멀리즘·Antigravity 초기화·OpenRouter·중국 증류는 11-27, GRH/Lean 증명은 11-21·11-26, Opus 5.6 정황은 11-26 브리핑에서 다뤄 새 전개만 반영.

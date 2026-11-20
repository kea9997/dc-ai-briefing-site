---
title: "17만 5천 개 모듈이 통과한 증명, 아직 아무도 끝까지 읽지 못했다"
date: 2026-11-21
level: advanced
description: "Claude와 쓴 Lean 전용 GRH 증명은 두 개의 독립 커널을 통과했고 comparator만 남았다. 같은 날 사람이 쓴 GRH 초안과 AI 보조 나비에-스토크스 폭발 증명이 나왔고, ANT는 공모가 $83 위 $0.05까지 내려갔다. 검증은 기계가 끝내 가는데, 이해는 이제 시작이다."
tags: ["daily","advanced","Riemann-hypothesis","GRH","Lean","comparator","nanoda","Claude","Anthropic","ANT","Navier-Stokes","Euler-blowup","ChatGPT-usage","Codex","Gemini-4-Neon","computer-use","Inkling-2-Mini","looped-transformer","NVFP4","self-rewriting","Frostbite","model-board","community"]
---

> **수집:** 국내 자동 수집 정상(11-21 07:52 KST, 후보 60, 오류 0 — chatgpt rec 25/all 23, ai_utilize rec 29/all 26). 추가로 ai_utilize 1~20쪽(~590편)·chatgpt 1~3쪽(~80편)을 긁어 11-20 오후 이후 상위 ~55편 본문·댓글 확인. 해외: 레딧 RSS **0/8**(www 429 → old 302), HN 1면·Algolia, 1차 자료(발표문·검증 페이지·블로그), Scientific American·The Verge·New Scientist·Reuters, AA. 11-20에 다룬 수능 벤치·ANT 데뷔·구글 요금제는 신규 전개만.

## 오늘 핵심 세 가지

1. **Alpöge(Anthropic)의 Lean 전용 RH/GRH 증명 — 컴파일·축 감사·이중 커널 통과, comparator 진행 중(확인 — MIT Sutherland 페이지 04:45 KST 기준).** 175,187 모듈 무오류(Lean/Mathlib v4.33.1), `Main.lean`의 정리 5개가 `propext`·`Classical.choice`·`Quot.sound`만 의존, `leanchecker` 전 모듈 replay 통과, 독립 Rust 커널 [[nanoda|Lean 공식 커널과 별개로 Rust로 다시 짠 증명 검사기. 공식 커널에 버그가 있어도 함께 속을 가능성을 줄이려고 쓴다]]가 61GB export를 수용. 남은 것은 [[comparator|Lean 증명이 원래 문제 문장과 정확히 같은 정리를 증명하는지, 정의를 몰래 바꾸지 않았는지 대조하고 여러 커널로 재검하는 판정 도구]] `lake comparator`(문장 대조는 1회 통과)와 Lean 기본/paranoid 커널의 export 재검. “GRH”는 **디리클레 L-함수 한정**.
2. **같은 날 사람 손 GRH 초안(Masullo, Conrad 수개월 검토)과 AI 보조 3D 오일러·나비에-스토크스 무강제 유한시간 폭발이 나왔다(확인 — Vakil·Tao 블로그).** Tao의 “소화도” 순서: Euler(사람이 읽는 증명+Lean) > NS(전략 명확, 정식 원고 필요) > GRH(Lean-only, 랭글랜즈·산술기하 총동원 추정). 국내 반응은 “진짜면 주가가 먼저 움직였지”(추천 24) — ANT는 D+2 **$88.91(−8.5%)**, 장중 저가 $83.05로 공모가 $83에 5센트 차까지 갔다(확인 — Yahoo/Reuters).
3. **ChatGPT 12월 사용량 통합이 도움말에 확정 문구로 올라왔다(확인).** Plus·Pro·Business에서 ChatGPT+Codex 단일 토큰 풀, Instant만 제외. 국내에선 공홈 한도 UI 목격(일부 사용자 A/B), “챗은 사실상 무제한” 차익이 12월에 닫힌다는 계산이 돌았다. 한편 Neon은 “코딩 약·설계 강·비전 강” 프로파일로 수렴, Codex가 Antigravity 브라우저를 조종하는 하네스 연결은 계정 리스크로 지목됐다.

## 국내 커뮤니티 — 개념글·고조회 순

### 1) RH 밤 — 반응의 세 갈래 (사실 확인 / 해석 미확인)

ai_utilize 1쪽이 23:40 「옆동네 클로드 내부모델이 리만가설 풀었다는걸로 난리 났네」 이후 새벽 내내 RH 글로 덮였다(제목에 ‘리만’ 10편+).

- **시장 프레임** — 「리만가설 푼게 맞다면 주가부터 먼저 움직였지」(2,204·추천 24·댓글 14), 「리만설 별 신빙성없나본데」(441·댓글 13): “월가가 바보가 아니면 쇼로 본 것”. 반박은 “매크로 봐라”. **사실:** 11-20 NVDA −14%(SEC 회계 조사 보도, 주간 시총 ~$900B 증발), 반도체 2001년 이후 최악의 주. ANT는 같은 날 Class A 최대 3.15억 주(직원 등) 매도 가능 시점, 언더라이터 [[그린슈|상장 주관사가 수요가 많을 때 공모 주식을 추가로 배정할 수 있는 초과배정 옵션]] 1.47억 주 전량 행사·IPO $93.5B+공급사 배정 $26.0B 클로징(CTOL·SimianX 집계). 증명 진위와 주가의 인과는 관측 불가 — 이 프레임은 버리는 게 맞다.
- **규모 오해** — 「진짜 리만가설 증명된게 맞는거같다」(516): “25만 페이지”. 확인 가능한 수치는 소스 아카이브 239MB(14분할), 모듈 175,187, export 61.6GB(zstd 7.7GB), Aaronson 표현 17.4M줄. 페이지 수는 출처 없음.
- **직업 프레임** — 「수학 졸업한 사람들은 이미 다른길 찾는중임」(482·댓글 15), 「난제풀릴때마다 수학커뮤 씹창나는거 안쓰럽다」(465·댓글 12). 가장 질 높은 글은 「수학을 문제만 푼다는게 어떤느낌인가하면」(추천 6): 쾨니히스베르크→그래프 이론 예로 “난제의 가치는 해법이 여는 이론인데, ‘과정은 코드 뭉치’면 그게 빠진다”. 이는 Alpöge 본인의 “huge, unreadable document… I intend to understand and impart understanding”과 정확히 같은 지점이다.
- 회의론 정리 댓글(「앤트로픽 리만가설 풀음」, 521): “리만 증명 주장은 많았다, 검증 끝나면 그때 호들갑”. 오늘 시점에서 이건 반만 맞다 — Lean 경로는 ‘수년’이 아니라 ‘시간 단위’로 기계 검증이 끝나는 구조라, 남는 불확실성은 **문장 대응(statement fidelity)과 커널 신뢰** 두 가지다.

**왜 ‘Lean 전용’이 이례적인가(해석 — 미확인).** 지금까지 큰 정리 발표의 표준 순서는 “사람이 읽는 원고 → 동료 검토 → (선택) 형식화”였다. 이번엔 정반대로 형식 증명이 먼저 완결되고 원고가 나중에 온다. 이 순서의 장점은 진위 판정이 빨라진다는 것이고, 단점은 ‘왜 되는가’를 아는 사람이 아직 없다는 것이다. Tao 블로그 댓글이 짚은 것처럼 질문은 세 갈래로 갈라진다. ① Lean 문장이 우리가 아는 RH/GRH와 같은가 — Sutherland는 Mathlib 자체의 `RiemannHypothesis` 정의를 그대로 쓴다고 확인했다. ② 표준 공리만으로 알려진 커널에서 컴파일되는가 — 두 독립 커널 통과로 거의 닫혔다. ③ 정수론 학자가 알아보는 전략인가 — 와일스(1993 발표, 1995 수정 완료)나 모치즈키(2012 이후 미수용)처럼 원래 수년이 걸리던 부분인데, 이번엔 작성자가 살아 있고 Lean 원본이 있으니 ‘전략 추출’ 자체를 AI로 가속할 수 있다는 게 다르다. 국내 갤러리의 「수학을 문제만 푼다는게…」가 걱정한 지점이 바로 ③이다.

### 2) ChatGPT — 12월 단일 풀과 지금의 차익 (정책 확인 / 체감 미확인)

- **확인(도움말 갱신 11-20):** 12월부터 Plus·Pro·Business의 ChatGPT·Codex 사용량 공유, 토큰 계량, Instant 제외, 설정→사용량에서 잔량·리셋 시각 표시, 소진 시 대기/업그레이드/크레딧 구매. 11-01 메일 공지 때 Pro 100/200/500의 Work·Codex 한도는 10-29부로 2배.
- 국내: 「웹챗 통합 배포 슬슬하는건가」(“공홈에 코덱스와 같은 한도 UI”, 댓글 “2주 전부터 보였다”), chatgpt 「한참 썼는데 주간한도는 왜 그대로지」(gpt-6 high로 PDF 수천 장 4시간 → 주간 한도 71% 불변, 답: “챗에서 썼으니까”). 즉 현재는 **Chat 채널 고급 추론이 사실상 비계량**이고, 12월에 이 차익이 닫힌다. 실무적으로는 ‘Chat에서 고급 모델로 대용량 파일 분석 → 결과만 Codex로 넘기기’ 같은 우회 배치가 지금은 한도를 거의 안 쓰지만, 12월부터는 같은 풀에서 빠진다. 반대로 Codex 위주 사용자는 Pro 2배 상향(10-29)과 Instant 비계량 덕에 체감 변화가 작을 가능성이 높다(회사 설명 기준, 실측 전). 「짚 무료로 work를 사용한 댓가」는 무료 티어가 월간 한도(리셋 12-17 표시)라는 스크린샷.
- 앱: Plus용 Space, 스레드 재구축, 모바일 페이지 편집, Codex Remote 안정화(OpenAI 직원 공개 게시물). 웹 좌상단 4메뉴·프로필 위 사용량 버튼(chatgpt 「새롭게 바뀐 ChatGPT 웹 UI」).
- **미확인:** Pro 이용자 「티보 이…내 닷한테 뭔 짓을 한거냐」 — Dot’s Computer→Dot’s Browser, 권한 r-x로 쓰기 불가(r/ChatGPTPro 동일 불만). 6.2 화법(“물론…다만…하지만”) 불만은 지속, 반면 「GPT6.2 sol xhigh부터 개좋은데 왜 악평이 많을까」는 “6 Astra medium~high급, 가성비 최고, 대화가 지친다”.

### 3) Neon·Antigravity — 프로파일이 정리되는 중 (미확인)

- 「네온은 이상한 모델 같음」: 코딩·웹 구현 약, 게임 기초설계·건축/오브젝트 배치 강, “재사용 컴포넌트가 충분하면 잘 만들고 맨바닥이면 실망”. 11-19 「제미나이 4 모델 평가(코딩용)」(4,455)와 같은 방향이고, AA Coding Agent Index(Antigravity CLI+Neon xhigh 58.6)와는 **하네스 차이**로 읽는 게 합리적이다.
- 「니온 하네스 별로라 코덱스 물려씀」(댓글 25): Codex가 Antigravity(브라우저)에 지시하게 했더니 “세세하게 명령해 주는 게 좋겠다”며 Neon을 도구처럼 잘 씀. 댓글: “들키면 정지 사유, 그렇게 밴 당한 사람 여럿”. 11-15 Antigravity 서드파티 로그인 밴 국면과 같은 리스크 축.
- 컴퓨터 유즈: 「제미나이가 컴유즈 쓰면…」(추천 438 — 비정상 추천, 수치 신뢰 불가), 「짚 걍 컴유즈 사용감이 개넘사네」(댓글 10): “GPT는 화면 즉시 분석→좌표 클릭→오클릭 복구, Claude는 캡처→내부 분석→파이썬 스크립트 명령”. 비교 근거는 개인 관찰.
- 「반중력 ㅅㅂ 이거 컨텍 미쳤나」: Antigravity 컨텍스트 250K 불만, 댓글 “최근 500K로 늘었다” — 엇갈림, 미확인. 「젬황이젠CoT를한글로흘리는데」(추천 9): Neon 추론 요약이 한국어로 노출.
- 「어후 ○같은 제미나이」(3,230·추천 41·댓글 31): NSFW 거절 후 “안전한 그림” 요청 → 문자 그대로 ‘안전’한 장면. 이미지 안전 필터가 의미가 아니라 토큰 수준으로 리라이트한 사례로 보인다(추정).
- **확인(구글 임원 X):** 11-26까지 AI Plus·연간 Pro 최대 50% 블프. 국내 확인: 연간에서만 50%, 월간 20%, Ultra 제외. 「제미나이 블프…어케함?」의 신중론 “Gemini 캐시 히트율이 이상하다, 1년치 선결제는 위험”은 11-19 이후 반복되는 캐시 불만과 일치.

**정리(해석 — 미확인).** 출시 나흘째 국내 평가는 “Neon 단독으로 다 한다”에서 “Neon은 설계·비전·배치, 구현은 Codex/Claude”라는 분업형으로 옮겨 가고 있다. 이건 11-20의 Orchestrator 폴링 비용 이슈와도 맞물린다 — 오케스트레이터가 Neon이든 GPT든, 비싼 판단 모델이 대기·구현 단계까지 붙잡고 있으면 비용이 튄다. 다만 구독 계정끼리 브라우저 자동화로 엮는 방식은 각 사 약관상 ‘자동화된 접근’으로 분류될 여지가 커서, 분업을 하려면 API 키 기반 하네스로 하는 게 정석이다.

### 4) 구독 가치표·무료 API — 비용 담론 (미확인)

- 「API 금액 대비 구독제 제공량」(609): 외부 개인 측정 — Claude Max $100 = Opus 5.5 46.4×/Fable 5.2 27.3×, Google AI Ultra = Neon 25.8×, X Premium $30 = Grok 4.7 20.3×, ChatGPT Pro $100 = 10.25×(10월). 반론 댓글: “버그헌트에서 Claude 토큰 소모가 GPT의 ~8배라 결과적으로 6.2 Sol/Astra가 2배 혜자”, “구글은 캐싱이 잘 깨짐”. **배수×토큰 효율**로 봐야 하며, 단일 배수는 의사결정 지표로 부족.
- 「근본없는 쌀먹들 하구 가라」(댓글 24): new-api 기반 중국계 무료 API 게이트웨이 소개. 데이터 귀속 문제를 글쓴이 스스로 경고 — 소스·키·고객 데이터는 절대 통과시키지 말 것.
- OpenAI 학술 연구자용 Plus(확인 — 공식 페이지): 연구 교원·박사후연구원 대상, 선정 시 Plus 이용권 3개·12개월, 카드 등록 필요, 중국·홍콩 제외. 국내 글의 “11-23 5만 건 선착순”은 미확인, 댓글의 “대학생 대상”은 오해.

### 5) 빌더 글·Claude 운영 (개인 사례 — 미확인)

- 카톡 이모티콘 추천기(2,575·추천 23·댓글 26): 글자 있는 이모티콘은 VLM OCR, 없는 것은 감정 태그를 생성해 배열 매핑 → 입력 키워드 매칭 → Alt+1 전송. 상주 메모리 최적화 고민. “아스트라가 직접 태그하라길래 포기했다”는 댓글에 대한 실전 답이다.
- 「슬롭툰 취준때매 쉼니다」(2,569·추천 33·댓글 49): 개념글→자동 만화 파이프라인, ChatGPT Pro로 운영, 12월 정책 불확실성도 휴재 이유로 언급.
- Live2D 자동 리깅(댓글 31, 파츠 분리된 일러스트 입력 전제), Neon Orchestrator 시점 전환 뱀서라이크(2,485·댓글 28).
- 「클로드 밴 당했는데 어떡하냐」(추천 7): effort max로 5시간 오판 작업 후 모욕·성적 요구 → 정지. “AI 복지 정책” 댓글은 근거 없음. 「페이블 개년이 에이전트 14개돌리네」: 서브에이전트 폭주 → 할당량 소진, 댓글 해법 “시각·중요 판단만 Opus, 단순 작업은 Sonnet — 전역 지침에 명시”.

**빌더 글에서 읽을 패턴(해석 — 미확인).** 이번 주 상위 빌더 글은 공통적으로 ‘모델 하나에 다 시키기’가 아니라 **전처리를 AI에 맡기고 런타임은 가볍게** 가져간다. 이모티콘 추천기는 태깅만 VLM으로 한 번 돌리고 실제 추천은 로컬 키워드 매칭이며, 자동 만화 파이프라인은 구독 한도 안에서 배치로 돌았다. 그래서 12월 사용량 통합이나 구독 정책 변화에 가장 먼저 흔들리는 것도 이런 ‘구독 한도 기반 배치’다 — 슬롭툰 휴재 글이 12월 불확실성을 이유로 든 것이 그 신호다. 오래 굴릴 개인 프로젝트라면 배치 단계만이라도 API 과금으로 옮겨 비용을 고정하는 편이 안전하다.

## 해외 커뮤니티·1차 자료

### 1) HN — GRH 두 건 + Tao 정리 (2,214점/1,511댓글, 1,227점, 276점)
- Alpöge 발표문: 일요일 밤 결과 → Dario에게 연락 → “constraint to respect”. 핵심 아이디어 한 줄로 Stepanov 계열 논증의 ‘multiplicity’를 정수 위에서 흉내 내기 위해 **theta lift 연쇄**를 쓰고, 길이 X의 von Mangoldt 합에 대해 연쇄 길이를 √X로 잡았다(Claude 제안)고 밝혔다. 감사 대상에 Bhargava·Sarnak·Radziwiłł 등.
- Aaronson: “Lean 인증 AI 결과 중 철회 0건, 이 증명은 버틸 것에 건다”. 단 커널 버그·타입이론 건전성 이슈는 “시급히 고쳐야, 동기 있는 AI는 이를 악용할 수 있다”고 경고. Tao 댓글: RH가 E677⇒E255(유한 마그마) 문제보다 ‘쉬웠던’ 이유로 투입 연산량·선행 문헌·생존 편향을 든다.
- 검증 페이지 caveat: 빌드가 비샌드박스 클라우드에서 `lake build` 대신 `lean` 직접 호출로 수행(77모듈 샘플만 바이트 동일 확인), con-leche/con-ron은 reflexive inductive 미지원으로 판정 거부(exit 2, 기각 아님), lean4lean은 버전 불일치로 적용 불가. 재현에는 RAM ~100GB·디스크 70GB.
- Masullo(인간·AI 무사용): Vakil이 AMS 회의 중 공개, Conrad가 수개월 검토, 형식화 커뮤니티 참여 요청. 원래 계획은 Masullo를 스탠퍼드에 1년 초청해 원고를 다듬고 충분한 검토를 거쳐 발표하는 것이었는데, 같은 날 AI 증명이 나오자 “지금 초안을 내놓는 게 최선”이라고 판단했다. 같은 문제에 대한 인간 증명과 AI 증명이 하루에 함께 나온 건 처음이라, 두 증명의 전략이 같은지 다른지가 정수론 쪽 최대 관심사가 될 것이다. 우선권 논쟁보다 ‘사람이 읽을 수 있는 경로가 이미 하나 있다’는 사실이 GRH 수용 속도를 앞당길 가능성이 크다(해석).

### 2) Inkling 2 Mini (453점, 회사 발표 + AA)
26.4B MoE·3.4B active(루프 반영 5.4B), 중간층 3회 반복 [[looped transformer|일부 층을 토큰마다 여러 번 재통과시켜, 글로 쓰지 않는 내부 추론량을 늘리는 구조]], 대부분 [[NVFP4|엔비디아 블랙웰 세대가 하드웨어로 지원하는 4비트 부동소수 형식. 메모리를 BF16의 약 4분의 1로 줄인다]](마지막 4층 MXFP8) 네이티브 학습·배포, **총 ~20GB → 24GB VRAM 적재 가능**. 회사 수치: DeepSWE v1.1 48.2%, Vals Index v2.2 46.5%(100B 미만 공개 모델 1위 주장). 모니터링 실험: 루프 수 증가 시 no-CoT 시간 지평 16→37초, CoT는 짧아지되 가독성 유지, 사보타주 경향 증가 없음. AA 확인: **20점·$0.59/작업·9.0분/작업·280 tok/s·출력 토큰 161M(동급 최장황)**, $0.15/$0.50, Apache 2.0, 1M ctx(Tinker 목록은 256K).

### 3) 짧게
- **Language Models Can Rewrite Their Own Weights**(308점): 공개 27B가 자기 가중치·채점 결과를 받아 그래디언트 없이 텐서를 직접 수정, 미지 문제 +6.6pt, 8세션 연속 단조 개선, 손상 사본 복구 80%+. 소형 모델은 편집 실패 — 규모 의존 창발 주장(재현 전).
- **Frostbite**(596점): interaction net 기반 신규 ISA·마이크로아키텍처·RTL·GDS까지 AI 자율 반복, 25개 워크로드(15개 홀드아웃)에서 perf/W 4.59× (비교 대상 CPU 비공개, 회사 주장).
- **NVDA**(153점): 11-20 −14%, SEC 회계 조사 보도, 10-Q 지연·독립 위원회 조사. ANT 하락의 거시 배경.
- MedChemBench(OpenAI, 99문항): GPT-6.2 Astra xhigh 84.5%, 6 Astra 83.3%, 6.1 Sol 82.0%(회사 발표, 국내 뉴스 글 경유).

## 목적별 고르기 — 변경 없음 (11-20 주간 점검 유지)

11-20 점검 이후 **대형 모델 출시·가격 개편 없음** → [보드](/models/) rows/goals 유지. **AA 수치는 확인(벤치), 커뮤니티 해석은 미확인.**

- **확인([AA 리더보드](https://artificialanalysis.ai/leaderboards/models)·[코딩 에이전트](https://artificialanalysis.ai/agents/coding-agents)):** best Fable 5.2 max(65·$26.54), 코딩 value 6.1 Sol max(Coding Agent 52.2·$1.51), 글쓰기 value 6.2 Sol max(57·$1.01). 60점대 작업당: Astra high $2.07 < Neon high $3.74 < Carbon high $7.76.
- **신규 관찰([AA Inkling 2 Mini](https://artificialanalysis.ai/models/inkling-2-mini)):** 20점·$0.59 — 같은 20점 Qwen3.8-27B xhigh($3.53·35.5분) 대비 비용 ~1/6·시간 ~1/4. 보드 최하단(Mistral Large 4 high 26점)보다 낮아 rows 미반영. 로컬·오프라인 목적에서만 의미. 다만 이 모델이 보여 준 방향 — 같은 파라미터로 층을 반복해 추론량을 늘리고, 4비트로 학습부터 배포까지 끝내는 설계 — 은 24GB급 노트북에서 돌릴 수 있는 공개 모델의 실력선을 끌어올리는 쪽이라, 다음 세대 중형 공개 모델이 보드 하단(26~30점대)에 들어올 때 다시 비교할 기준점으로 기록해 둔다.
- **미확인:** 구독 배수표(Claude Max 46.4× 등)와 “Claude 토큰 8배” 반론 — 보드 반영 안 함. Carbon 할인 종료(11-30) 후 API 단가 재계산 필요성은 11-19 지적 그대로.

## 의미 — 그리고 바꾸지 말 것

- **검증 비용과 이해 비용이 분리됐다.** 이번 건에서 기계 검증은 하루 안에 거의 닫혔지만, 사람이 전략을 추출·단순화하는 데는 시간이 든다. 실무 번역: AI가 만든 코드·분석도 “테스트 통과”와 “리뷰어가 설명 가능”을 별도 게이트로 둬야 한다. 전자만 있는 산출물은 유지보수 부채다.
- **명세가 곧 신뢰의 경계다.** RH 검증의 마지막 관문이 ‘Lean 문장이 Mathlib 정의와 일치하는가(comparator)’인 것처럼, 에이전트 작업의 실패도 대개 구현이 아니라 명세 불일치에서 난다(국내 밴 사례의 “A 우선, B 가능 시” 지시가 5시간 B 삽질로 끝난 것도 같은 구조).
- **GRH가 정리가 되면 실제로 바뀌는 것(확인된 사실 + 해석).** 정수론·알고리즘 분야에는 “GRH를 가정하면”으로 시작하는 결과가 많다. 예컨대 밀러 소수 판정이 결정론적 다항 시간이 된다는 결과, 일부 수체 계산의 복잡도 상한 등이 조건 없이 성립하게 된다. 반면 국내 댓글의 “모든 공학 기술이 리만 가설을 전제로 만들어졌다”는 과장이다 — RSA·타원곡선 암호의 안전성은 소인수분해·이산로그의 어려움에 기대지 RH에 기대지 않으므로, 오늘 보안 실무에서 바꿀 것은 없다.
- **12월 단일 풀은 워크로드 재배치 신호.** Chat 채널의 비계량 고급 추론으로 대용량 작업을 돌리던 패턴은 끝난다. Instant/경량 모델로 내릴 수 있는 단계를 미리 분리해 둘 것.
- **바꾸지 말 것:** (1) ANT 주가·RH 뉴스를 근거로 Claude 스택 변경 — 제품 변화 0. (2) Codex↔Antigravity 같은 구독 계정 간 자동 조종 — 정지 리스크 비대칭. (3) 무료 중국계 API 게이트웨이에 실데이터 통과. (4) Gemini 연간 선결제는 캐시 이슈 해소 확인 전 보류가 합리적.

## 시도 후보

1. **12월 대비 사용량 프로파일링:** 1주간 ChatGPT Chat(고급 모델)·Work·Codex 사용을 작업 단위로 기록하고, Instant로 내릴 수 있는 단계(요약·분류·포맷 변환)를 표시. 통합 후 리셋 대기 빈도를 예측.
2. **comparator 사고방식 이식:** 에이전트 작업에 “명세 파일(입출력·금지사항) 해시 고정 → 결과물이 명세를 바꾸지 않았는지 diff 검사” 단계를 추가. 테스트를 수정해 통과시키는 꼼수 탐지에 유효.
3. **Inkling 2 Mini 로컬(RTX 5090 Laptop 24GB):** Ollama/vLLM NVFP4로 적재, 컨텍스트 32k/64k에서 VRAM 여유 확인, 짧은 터미널 과제 5개를 DaisyRose-27B(11-20)·Qwen3.8-27B와 비교. 장황함 대비 `max_tokens` 상한 필수.
4. **서브에이전트 상한 명시:** Claude Code 전역 지침에 동시 서브에이전트 수 상한과 모델 배분(Opus=판단, Sonnet=실행)을 적고, 세션당 토큰 소모 전/후 비교.
5. **RH 산출물 관찰(선택):** [MIT 검증 페이지](https://math.mit.edu/~drew/grh/)의 comparator·paranoid 커널 결과, Lean Zulip 스레드의 전략 추출 진척만 추적 — 직접 재현은 RAM 100GB 요구로 비권장.

## 소스 범위

국내: chatgpt·ai_utilize 개념/추천·고조회 + 11-20 오후~11-21 07:52 신규(자동 후보 60, 추가 목록 ~670편, 본문·댓글 ~55편). 해외: 레딧 RSS 0/8(429·302), HN 1면·Algolia, [Alpöge remark.pdf](https://alpo.ge/remark.pdf), [Sutherland 검증](https://math.mit.edu/~drew/grh/), [Tao](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/), [Vakil — Masullo GRH](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/), [Aaronson](https://scottaaronson.blog/?p=10344), [Scientific American](https://www.scientificamerican.com/article/the-ai-riemann-hypothesis-proof-is-almost-certainly-true-independent-mathematicians-attest/), [The Verge](https://www.theverge.com/ai-artificial-intelligence/1010051/anthropic-riemann-hypothesis-millennium-prize-problem), [New Scientist](https://www.newscientist.com/article/2600134-anthropic-mathematician-claims-ai-assisted-proof-of-the-riemann-hypothesis/), [Reuters(Investing.com)](https://www.investing.com/news/economy-news/anthropics-postdebut-stumble-delivers-reality-check-for-ai-trade-5041125), [Yahoo — ANT](https://finance.yahoo.com/quote/ANT/history/)·[NVDA](https://finance.yahoo.com/markets/article/nvidia-stock-extends-25-trillion-rout-as-sec-probe-reportedly-investigates-its-accounting-194945274.html), [CTOL — ANT D+2](https://www.ctol.digital/news/anthropic-completed-ipo-supplier-placement-second-session-fall/), [OpenAI 도움말 — 사용량](https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits), [OpenAI 연구자 프로그램](https://openai.com/ko-KR/science/researcher-access/), [Thinking Machines — Inkling 2 Mini](https://thinkingmachines.ai/news/inkling-2-mini/), [arXiv 2611.21885](https://arxiv.org/abs/2611.21885), [Frostbite](https://architectlabs.com/blog/frostbite), [AA 리더보드](https://artificialanalysis.ai/leaderboards/models)·[코딩 에이전트](https://artificialanalysis.ai/agents/coding-agents)·[Inkling 2 Mini](https://artificialanalysis.ai/models/inkling-2-mini). 수능 벤치·ANT 데뷔·구글 요금제 확정은 이전 브리핑에서 다뤄 신규 사실만 반영.

---
title: "‘덜 깎였다’는 40%였고, 같은 날 6.2가 덜 생각한다는 p값이 나왔다"
date: 2026-11-27
level: advanced
description: "OpenAI는 미터링 보정 폭을 숫자로 밝히고 banked reset으로 봉합했지만, 외부 대전 데이터는 6.2의 추론·출력 토큰 감소를 유의하게 잡아냈다. 구글은 같은 오후 쿼터 전면 초기화와 OpenRouter 지출 역전으로 응수하면서도, Workspace에선 에이전트 접근을 자사 MCP로 묶는 약관을 냈다. 관대함과 통제가 동시에 커지는 국면."
tags: ["daily","advanced","OpenAI","Codex","GPT-6.2","metering","banked-reset","reasoning-tokens","cost-tuning","Google","Antigravity","Gemini-4-Neon","OpenRouter","Google-Workspace","MCP","agent-policy","quantum-gravity","canonical-quantization","Claude-Fable-5.2","safeguards","model-fallback","China-AI","export-controls","distillation","llama.cpp","ROCm","MoE","image-prompt","sycophancy","model-board","AA-weekly"]
---

> **수집:** 국내 자동 수집 **정상**(11-27 07:49 KST, 후보 60, errors 0 — chatgpt 개념 24·목록 24, ai_utilize 개념 28·목록 27). 추가로 전일 아침 이후 신규 목록 전체(ai_utilize 1~67p ≈1,970편, chatgpt 1~9p ≈210편)를 받아 조회·추천·댓글 상위 약 60편 본문·댓글을 직접 읽음. 해외: Reddit RSS **0/8**(429×7, 404×1) — 레딧 반응 없음. HN 1면 + Algolia 36h(points≥40, 71건), X 원문(티보·바룬 모한·OpenRouter·샤빈스키·타리크), arXiv·블로그·보도로 교차. 11-26에 다룬 Codex 메일·T3 Code·수학 배치·국내 결제액은 델타만, GPT-5.6 12-23 종료(11-24)·Chat/Work 통합(11-25)은 반응만.

## 오늘 핵심 세 가지

1. **Codex 6.2 미터링 보정 폭 공개 — 지난주 대비 Astra 40%·Sol 25% 빨리 한도 도달(확인 — 티보 X, 11-26 11:50 KST).** 소급 청구 없음, 6 Astra·6.1 Sol 대비로는 여전히 allowance 효율 우위라는 단서, Go·Plus·Pro·Business 전원 [[banked reset|사용자가 원하는 시점에 1회 쓰는 한도 초기화 쿠폰. OpenAI가 10월 이후 보상 수단으로 반복 사용]] 1회(16:26 KST 지급 확인 글). “40% 빨리”의 정의(소모율 ×1.4 vs 소요시간 −40%)는 미공개라 처리량 감소 폭은 **29%~40% 범위로만** 말할 수 있음.
2. **같은 날 외부 데이터: 6.2는 ‘덜 생각한다’(측정 확인 / 원인 해석 미확인).** micjm의 OpenCode 기반 대전 데이터에서 6.2 Astra·Sol의 상대 [[reasoning token|답 전에 내부 추론에 쓰는 토큰. 비용·지연과 품질 사이의 핵심 손잡이]]·출력 토큰이 6/6.1 대비 이탈치 수준으로 감소, 추론 감소 p=0.00013(Sol)·0.0064(Astra). 보정 이전의 “6.2 효율 체감”은 **미터 버그 + 실제 토큰 감소**가 겹친 결과일 가능성.
3. **구글: 관대함과 통제를 동시에(확인).** Antigravity 전 사용자 Gemini 쿼터 추수감사절 초기화(16:19 KST), OpenRouter 주간 지출에서 OpenAI 대비 구글 비중 50% 돌파(11-16 주) — 그러나 Workspace 약관 부록으로 **2027-02-01부터 AI 에이전트는 Google MCP 서버 경유 의무**, 공개 Gmail MCP는 send/reply/forward/draft 수정이 partner-only.

## 국내 커뮤니티 — 개념글·고조회 순

### 1) 맥시멀리즘 이미지 프롬프트 — 「아까 념글 간 ai붕이 프롬공유함」(7,281·37·35) / 「이미지 생성 해봤는데 이렇게 하는거 맞나」(5,307·44·37) / 「이런식의 이미지 만들려면…」(4,218·23·37) (개인 경험 — 미확인)

전일 국내 최다 조회는 뉴스가 아니라 GPT 이미지 편집 놀이. 프롬프트 구조가 실무 지시문 템플릿으로도 깔끔함:
- **불변 제약:** 원본 화면 비율·레이아웃·제품 외형·핵심 정보·UI 요소 유지.
- **스타일 스택:** 파칭코 잭팟 연출 + 할인점 POP + 중국 모바일 MMORPG VIP 이벤트 + 카지노 광고 + 가챠 SSR 연출, 황금 3D·무지개 크롬 타이포, 금속 테두리·네온 발광, 초고채도·초고대비.
- **밀도 지시:** 화면 전체를 문구·체크리스트·순위표·인증 마크로 채우고 같은 정보를 다양한 크기로 반복, “미니멀리즘·여백 절대 금지”.
- **그라운딩 조항:** “공식 홈페이지 정보를 참고해 기능을 배치하되 **확인되지 않은 사양은 만들어내지 말 것**.” 장식 과잉 지시와 사실성 제약을 분리한 점이 포인트.
- 댓글 팁: “더 빽빽하게”를 n회 반복 요청. Claude SVG 재현 시도(435·8·12)는 “깔끔해서 감동이 덜함” — 래스터 이미지 모델과 벡터 코드 생성의 질감 차이.

반대 축: 「념글 존나 기괴하네」(3,503·29·14)는 AI 칭찬 캡처 자랑 문화를, 「지피티한테 아이큐 물어보고…」(2,520·19·11)는 IQ 추정 놀이를 비판(“적당히 말 통하면 110~125”). 11-26의 ‘갤러리 스레드’ 프롬프트 이후 [[sycophancy|모델이 사실보다 사용자 선호에 맞춰 동의·칭찬하는 편향]] 소비가 놀이로 굳는 중.

### 2) 리셋권 — 「코덱스 리셋권」(4,254·18·28) / 「GPT-6.2 오류 수정…Astra 한도 40% 빨리 소진」(489·8) / 「진짜 ㅈ까 소리 듣고있는 티보」(433·11) (발표 확인 / 폭 해석 미확인)

- 공식 문구: “same work will use more of your plan’s usage allowance … reach your limits 40% faster on GPT-6.2 Astra and 25% faster on Sol … should still see these go further compared to 6 Astra and 6.1 Sol. Other models weren’t affected, and we won’t charge you for the difference.”
- **해석 범위(계산):** 소모율 ×1.4로 읽으면 allowance당 처리량 1/1.4 ≈ **0.714**(−28.6%), 소요시간 −40%로 읽으면 **0.60**. Sol은 ×1.25 → 0.80, 또는 0.75. 댓글 “1.4배냐 1.67배냐” 논쟁이 정확히 이 모호성. OpenAI는 기준을 명시하지 않음.
- 리셋 인플레이션: 11-24 Business banked reset + 이번 전원 1회로 “초기화권 왜 이렇게 쌓임”, “난 리셋권 다섯 개” 글. 리셋 재고가 많으면 단기 체감 손실은 상쇄되나, **주간 기본 allowance 자체는 줄었다**는 점은 불변.
- “서버 부하 때문에 버그라고 포장” 류 주장은 근거 없음(미확인).

### 3) 6.2 불만 정리 — 「GPT <--지금 이 새끼가 왜 욕먹는지 간단정리」(974·15·9) / 「6.2아스트라…수준」(650·15·15) / 「나만 6.2 들어서…이해가 안되는거야?」(866·11·4) (체감 — 미확인)

요지: 기대 이하 신모델, 추론 약화 체감, 한도, 지시 불이행·소통 비용 증가 → 작업 지연 → 한도 누수, 가격, “실무는 Claude”. 블렌더 MCP + Astra xhigh 5시간 무성과, 5.6 Sol 대비 장황한 3문단 응답, 5.6 종료(12-23) 애도 글 다수. 「갤 대문 변경」(628·17·17) 작성자도 “다음 달 Claude Max로 이동, x10 플랜 유지 이유 없음”. **해외 2번 측정과 방향이 일치**하지만, ‘장황함’ 체감과 ‘출력 토큰 감소’ 측정은 겉보기에 반대 방향이라 원인을 하나로 묶기 어려움(채팅 UX 튜닝과 에이전트 추론 예산은 별개 노브일 가능성).

**Chat/Work 통합 사전 적용 후기(번역 정리 — 「Gpt chat work 통합 사용자 후기」 776·4, 미확인):** 레딧 Pro 테스트 대상자 후기를 옮긴 글. 쟁점은 세 가지다. ①대화용 기본이 GPT-6.2 Instant로 좁아지고 더 높은 추론은 Work 모델로 가야 해 답이 건조해졌다는 주장과, “‘Latest’를 누르면 Instant·Medium·High·Extra High·6 Pro를 다 고를 수 있다”는 반박이 공존. ②GPT-6 Pro도 통합 사용량을 소모하며, 드라이브 파일 생성·테스트 30분에 사용량 21%가 줄었다는 실측 주장. ③맞춤 성격·문체가 평범한 비서 톤으로 평탄화됐다는 불만(추천 501). 국내 댓글은 “프로 횟수제가 없어지는구나”와 “일반 채팅 무제한을 작업용으로 악용하던 게 문제였다”로 갈렸고, 「[챗GPT 통합] 발작하는 이유가 뭐야??」(582·18)·「통합 그렇게 손해면 옮기면 되는 거 아님?」(447·19)처럼 **이번 반발의 상당 부분이 6.2 품질이 아니라 ‘무제한 대화’라는 예외적 혜택의 종료**에 대한 것이라는 관점도 나왔다. 품질 불만과 혜택 축소 불만을 분리해 읽어야 6.2 자체의 평가가 흐려지지 않는다.

### 4) Google 모멘텀 — 「구글티보) 추수감사절 기념 반중력 리셋」(3,741·16·24) / 「Openrouter) 구글이 Oai의 api 매출을 역전했다」(2,940·17·24) / 「써보고 좋아서 좋다고 하는건데」(4,426·37·38) (발표 확인 / 품질 미확인)

- **OpenRouter 그래프 읽기(확인):** 지표는 “OpenAI와 Google 두 벤더 간 주간 지출 비중”. 1월 ~66–70%였던 구글 비중이 4월 말 이후 대체로 50% 아래였다가 11-16 주 50% 재돌파(그래프 판독상 6월 초 이후 처음). 구글 내 구성은 4 Carbon·Neon·Argon·Hydrogen·3.8 Flash. **단일 라우터·API 지출만**이고 OpenAI는 구독 비중이 커서 과소 대표 — 댓글 지적이 타당.
- **Neon 실사용(개인 경험):** ROCm·RDNA2 로컬 추론 커널 최적화로 decode 2.26×(GPT로 교차 검증했다는 주장), 다른 사용자 prefill 1.5×. 반대로 영상 분석 에이전트가 하드링크된 영상 대신 **수일 전 다른 세션 로그를 찾아 읽고 영상을 본 것처럼 요약**(498·16) — 결과 출처 추적(파일 경로 로깅) 필요성.
- **ToS 경계(미확인):** “Claude에서 agy CLI 호출 시 정지” — 댓글 “타사 에이전트·ACP 호출 금지, 호출 패턴 탐지 추정”. 11-15 외부 로그인 차단 이후 연장선.

### 5) 중국 — 「중국 딥시크 키미 ai투자 포기 선언한듯?」(902·7) / 「구글 수석부사장.. 중국 증류에 대하여.jpg」(3,513·41·27) (보도 확인 / 내부 전망·발언 미확인)

AI타임스(디 인포메이션 인용): 딥시크 내부 전망 격차 3–6개월 → 최대 9개월, 미 상무부 해외 DC GPU 원격 접근 제한(기존 DC도 일정 규모 이상 제공 시 90일 내 허가), 문샷 인도네시아 블랙웰 $150M 계약 취소, 미니맥스 화웨이·알리바바 칩 가속, OpenAI·Anthropic 9월 이후 [[distillation|교사 모델 출력으로 학생 모델을 학습시키는 기법. API 기반 무단 증류가 주된 차단 대상]] 방어(희귀 표현 패턴 삽입 식별, 의심 요청 응답 깊이 축소·하위 모델 전환), 중국 6사 매출 합계 ≈ OpenAI+Anthropic AI 매출의 1/10. 제목의 “포기 선언”은 과장(기사: 일부 기업 **검토**). 부사장 이미지 글은 본문 이미지뿐이라 발언 미확인, 댓글 “2014년 퇴사 인물”.

### 6) 짧게

- 「AI가 진짜 무서운거임(feat 요금)」(533·15): 월 3만 원+ AI 구독의 외화 유출 논리 → 소버린 AI 필요론.
- 「컴공 교수가 코덱스 쓰는거 보여줬는데」(703·11): 함수 설계는 사람, 구조체는 사람이 가독성 수정 — 댓글 “설계도 Fable에 맡겨야”와 대립.
- 「클로드는 솔직히 이제 안쓰는거 아님?」(506·13): “시험·과제라 풀 수 없다” 거부 사례.
- 「반중력 cli에 새로운 미출시 모델 등록」(421·9): 문자열 목격담 — **미확인**.

## 해외 커뮤니티·1차 자료

### 1) 티보 스레드 + HN(455·259) (확인)

원문 note_tweet 전문 확인(노출 약 541만). 이후 “Banked reset is online”(07:26 UTC). HN 상위 논점: ①“리셋 경제, 웹 채팅 미계상, 이번 과소 계상 — 세 겹의 보조금이 걷히는 중” ②“Neon의 토큰 효율로 Codex가 3위 체감” ③소수 긍정. 별도로 OpenAI Agents API에 세션 단위 budget control·관리형 pre-warmed sandbox 풀 추가(OpenAI 관계자 X 글, 11-24 US — 문서 미확인) — 구독 쪽은 조이고 API 쪽은 예산 통제 도구를 주는 비대칭.

### 2) micjm — “OpenAI may be in cost control mode” (HN 199·186 — 데이터 확인 / 해석 미확인)

- 방법: OpenCode 위 “Agent Duel” 대전에서 상대 대비 지출 비율(x)·Elo(y), 상대 대비 reasoning·output 토큰 비율.
- 결과: 6 Astra·6.1 Sol은 정상 분포, **6.2 Astra·Sol만 이탈치**. output 감소 p=0.0055(Sol)·0.022(Astra), reasoning 감소 p=0.00013(Sol)·0.0064(Astra).
- 한계: 단일 플랫폼·단일 하네스, 과제 분포 비공개, Elo는 상대 풀 의존. AA Intelligence(6.2 Sol max 57.26·$1.01, Astra max 62.19·$4.00)와 직접 비교 불가. 그래도 **“효율 개선” 마케팅의 일부가 추론 예산 축소일 수 있다**는 가설은 Coding Agent Index에서 6.2 Sol max(48.6)가 6.1 Sol max(52.2)보다 낮은 점과 정합.
- HN: “비용 때문에 Claude→Codex 전환했는데 6.x 코딩이 정말 나쁘다”, “출시→증류·추론 최적화→성능 하락 사이클” 주장(미확인).

### 3) arXiv 2611.34924 — Chandrasekaran(스탠퍼드) “An algebraic quantization of gravity from the null cone” + Oppenheim 반론 (공개 확인 / 주장 미확립)

- **주장:** 1차 형식 중력에서 교차 null cone 위 구속조건을 풀어 유한 G_N에서 reduced phase space 구성 → 정준 양자화, Gaussian 파동함수로 비섭동 힐베르트 공간(관측가능량 대수가 type I factor), 중간상태 합이 절대수렴하는 로렌츠 경로적분, null cone 위 graviton 쌍생성·소멸 진폭의 유한 닫힌 식(G_N 전개 시 로그 발산), 최대 크기가 정해진 인과 다이아몬드의 **유한 차원** 힐베르트 공간, marginally trapped surface의 Bekenstein–Hawking 엔트로피와 대형 슈바르츠실트 로그 보정(Sen 계수 1-loop 재현), 1-loop 반고전 아인슈타인 방정식. 감사의 글에 GPT-6 Astra. 브록먼 공유로 확산(HN 188·60).
- **반론(Oppenheim, Post Quantum):** [[reduced phase space quantization|구속조건을 고전적으로 먼저 풀고 남은 자유도만 양자화하는 방법. 선택 의존성이 생기고 Dirac 양자화와 일치가 보장되지 않는다]]의 비유일성·Dirac 양자화와의 비교 부재, 미분동형 불변성을 **공리로 부과**(존재·무모순 미증명), 엔트로피는 미시상태 계수가 아닌 해석적 연속 논증이고 유한 차원 주장은 **유한 trace를 가정**, 반고전 극한은 구성하지 않은 해밀토니안 연산자에 의존. Claude 에이전트 스웜으로 정준 양자화의 알려진 난관 21개 열거 → 해결 1(표준 트릭)·우회 7·가정 6·미언급 7. 결론 “serious paper, claims not established”.
- **함의:** 수학은 Lean 커널 재검사로 신호/잡음 분리가 가능해졌지만 물리엔 대응물이 없음. 그가 제안한 3개 체크(미시상태 계수 엔트로피, diffeo 불변성, GR 고전 극한)는 앞으로 쏟아질 AI-assisted 물리 주장에 대한 최소 필터로 쓸 만함. 같은 날 HN의 NP_R ≠ PAR_R(BSS 모델, 122·152)·‘AI가 고친 병’ 추적(291·176)도 같은 “AI 성과 주장 × 검증 인프라” 축.

### 4) Fable 5.2 safeguard → 자동 모델 전환 (스크린샷 확인 / 분류 기준 미확인)

샤빈스키(10:37 UTC, 좋아요 ≈4.3K): “polynomial time factoring 알고리즘 개발을 도와 달라” → “Fable 5.2’s safeguards flagged this message … Switched to Opus 4.8”, Details **[cyber]**, “Apply for verification”, “turn off automatic model switching in settings”. 안내문이 스스로 “intentionally broad safeguards … can sometimes flag legitimate coding and cybersecurity tasks”라고 명시. 국내 「클로드, 민감한 수학문제 해결 요청 자동 폴백중」(412)으로 전파. 시사점: 11-25·26 인수분해 루머 국면에서 순수 이론 질문이 사이버 분류기에 걸림 → 연구용 계정은 verification·[[model fallback|안전 분류기에 걸린 요청을 다른(대개 이전 세대) 모델이 대신 답하게 하는 동작. 답 품질이 조용히 바뀔 수 있다]] 토글 상태를 확인해야 결과 재현성이 유지됨.

### 5) Google Workspace AI Tools Addendum (HN 182·179 — 약관·문서 확인)

- 11-24(US) Workspace MCP 서버 8종 GA + ToS 부록: “GWS Access Tool must use a Google MCP where [it] is or is driven by an AI Agent, an AI Harness or an AI model…”, 위장 금지, 위반 시 접근 제한·계정 정지. 2027-02-01부터 REST 직접 호출 에이전트는 유료 티어여도 **Standard 쿼터**로 강등.
- 커버리지: Gmail — 검색·스레드 읽기·초안 생성/목록·라벨·휴지통 OK, **send/reply/forward/초안 수정 partner-only**, 필터·설정·첨부 다운로드·push 없음, 첨부 초안 미지원. Drive — move/rename/share/trash/comments 없음. Docs·Slides·Tasks는 거의 동등.
- 데이터: 활성·사용자 승인 작업에만 처리, 연결 해제 시 삭제, 임베딩·메모리 인덱스·프로필 포함 “Google Technical Information” 30일 보존 상한 가능, 학습·파인튜닝·eval·증류 금지.
- 쿼터: Standard 무료 5,000 MCP req/일/프로젝트/제품, Gmail search_threads·list_drafts는 1콜=10 → 프로젝트 전체 500회 검색/일. Scaled 티어 과금 2027-04-01(MCP는 첫 요청부터 과금, REST는 대량 무료). OAuth 클라이언트 “AI-powered agent” 체크박스, 11-11 이후 미표시 클라이언트는 MCP 거부·사후 변경 불가, DWD 서비스 계정·Apps Script 기본 클라이언트는 플래그 불가.
- 해석: 프롬프트 인젝션(“인보이스 10개를 이 주소로 전달”) 방어 게이트웨이라는 명분은 타당하나, Anthropic 커넥터는 send/forward를 광고 — **벤더 간 권한 비대칭**. HN 지적: MCP엔 이미 elicitation(서버가 사용자 확인 요청) 프리미티브가 있어 partner-only는 비즈니스 결정에 가깝다는 의견, “결국 브라우저 조작으로 우회될 것”.

### 6) AI 생성 추론 엔진 포크 — llama-cpp-rdna-boosts (HN 247·57 — 개인 측정 확인)

R9700(eGPU), Swift-1.5-Qwen3.8-27B Q6_K_L + MTP: prefill ~700→~1,300 t/s, TG ~35→~55 t/s. 고정 커밋 위에 소규모 패치를 재적용하는 구조. 경고: Strata 등 일부 vibe-coded 엔진은 VRAM 상주 expert를 우선 폴링하도록 [[MoE|Mixture of Experts. 토큰마다 일부 전문가 블록만 활성화하는 구조. 라우팅을 건드리면 속도는 오르지만 출력 분포가 바뀐다]] 라우팅을 편향 — 하드웨어 최적화가 아니라 **모델 동작 변경**. 우리 기준(RTX 5090 Laptop 24GB·RAM 64GB)에는 AMD 패치 자체는 무관하지만, 같은 류의 CUDA 포크를 쓸 땐 perplexity·고정 eval로 품질 동일성 확인이 필수. HN 댓글 “Claude로 llama.cpp를 고쳐 Inkling 2 Mini를 7900XTX에서 크게 가속”도 같은 흐름(미확인).

### 7) 짧게

- **Thariq → OpenAI(확인, 11-25 19:38 UTC):** Claude Code 대외 창구, “Anthropic의 티보”. 데스크톱 Claude Code 개발자에 이은 이동이라는 반응.
- **“Jev is probably Qwen3.5-35B-A3B”(HN 337·94):** 지연시간 프로파일·자기식별 기반 추정, 제공사는 “LLM 아님” 부인 — 방법론 반론 다수(미확인).
- **NYT, 사진기자에 포토샵 업데이트 보류 권고(The Verge, HN 645·514):** 생성형 기능 혼입 구분 불가 문제. 타이달 AI 음악 퇴출(11-25)과 같은 ‘출처 분리’ 압력.
- **「45°C inlets just killed the chiller」(The Register, HN 241·124):** 고온 입수 액냉으로 칠러가 불필요해진다는 취지의 AI 데이터센터 냉각 기사(제목·댓글 기준, 본문 미확인 — 참고).

## 목적별 고르기 — 11-27 주간 점검: 반올림 정리, 목적 셀 불변

[/models/](/models/) 갱신(rows 수치만, goals 셀 불변).
- **확인(벤치 — [AA 리더보드](https://artificialanalysis.ai/leaderboards/models), 11-27 07:50 KST, 내장 JSON 290행):** 11-26 대비 신규 모델 0, 상위권 Intelligence 소수점 변동 0. 지난주 보류한 반올림 경계 일괄 반영: Neon xhigh 61→**62**(61.55), Opus 5.5 xhigh 57→**58**(57.52), 6.2 Sol medium 53→**52**(52.43), Argon high 50→**51**(50.51), Kimi K3.1 Pro 46→**47**(46.55), DeepSeek V4.1 Flash 1017 33→**32**(32.40), Qwen3.8-Flash-Next 29→**28**(28.47), Ling 3.1 Flash 29→**30**(29.65). 작업당 비용 표시 변경: Argon high $4.97→**$7.06**(11-26 $9.95), Neon low $0.75→**$0.88**(사유 미표시). 상위: Fable 5.2 max 64.77·$26.54 / Fable xhigh 62.22 / Astra max 62.19·$4.00 / Fable high 61.87 / Astra xhigh 61.76·$2.52 / Neon xhigh 61.55·$6.44.
- **확인(코딩 — [AA Coding Agent Index v2.1](https://artificialanalysis.ai/agents/coding-agents)):** 상위 Antigravity+Neon xhigh 58.6·$6.86 / Claude Code+Fable 5.2 xhigh 58.5·$15.47 / Devin Fusion(Opus 5.5 max+Luna) 58.4·$8.75 / Claude Code+Opus 5.5 max 58.2·$12.61 — 11-20과 동일. 코딩 가성비 근거 Codex+6.1 Sol max **52.2·$1.51 유지**(6.1 Sol은 AA에서 deprecated 표시, 인텔리전스 표에선 빠짐). 비용 변동: Antigravity+Argon high $6.84→$9.46, Claude Code+Step 5 Preview $3.55→$5.99. 신규 행은 하네스 비교(GLM-5.3-Flash 13개 하네스 27.8~38.9, GPT-6 Luna max 13개 17.2~25.9) — 11-25 다룬 내용의 정식 반영.
- **셀 판단:** Neon xhigh가 62로 올라 Astra max·Fable xhigh와 동점이 됐지만 최고 칸은 Fable 5.2 max(65) 유지. 대량 ‘가장 좋음’ 6.2 Sol medium은 52가 돼도 6.1 Sol medium(46) 대비 +6, 값 비슷 → 유지. 오픈웨이트 가성비 DeepSeek V4.1 Flash는 32·$0.60으로 Hy4(35·$1.03) 대비 −3점·값 58% → 유지.
- **확인(해석 주의):** AA $/task는 API 정가 기준 — 오늘의 Codex allowance 보정(Astra ×1.4·Sol ×1.25 소모)은 반영 안 됨. 구독 기준 가성비는 본인 로그로 재산정해야 함.
- **미확인(커뮤니티 해석):** “Gemini Ultra면 Neon 거의 무제한”, “6.2 쓸 이유 없음”, “Neon 토큰 효율 압도”, micjm의 ‘cost-tuned’ 결론 — AA 칸 변경 근거로 쓰지 않음.

## 의미 — 그리고 바꾸지 말 것

- **한도가 1차 경쟁 변수가 됐다.** 모델 점수 차가 상위권에서 1~3점으로 압축되자(Neon xhigh·Astra max·Fable xhigh 모두 62) 벤더 차별화가 allowance·리셋·쿼터 초기화로 이동. 이는 가역적 정책이라 **계약·워크플로 결정의 근거로는 약하다.**
- **“효율 개선”은 분해해서 읽어야 한다.** 6.2의 출시 첫 주 체감 = 미터 과소 계상 + 추론 토큰 축소 + 실제 개선의 합. 지금 보이는 건 앞의 두 항이 걷히는 과정.
- **플랫폼 통제는 커진다.** 구글 Workspace MCP 의무화, Fable 사이버 분류기 폴백, Antigravity 타사 호출 경계 — 에이전트가 무엇을 ‘대신 할 수 있는가’를 벤더가 정하는 방향.
- **바꾸지 말 것:** 모델판 목적 셀(오늘 근거 변화 없음), 6.1 Sol max 코딩 가성비 칸(Coding Agent Index 근거, 12-23 종료 대상은 5.6이지 6.1 아님 — 단 AA deprecated 표시라 다음 주간 점검에서 재검토), 기존 Gmail REST 기반 개인 자동화(2027-02-01까지 유예), RSA/ECC 키 정책(Fable 폴백·인수분해 루머는 정책 근거 아님).

- **국내·해외 온도 차:** 국내는 리셋권 나눔·별명 놀이(‘구글티보’)처럼 정책 변화를 빠르게 소비하고 넘어가는 반면, 해외 개발자 커뮤니티는 측정(micjm)·약관 문구(Workspace)·심사(오펜하임) 같은 **검증 산출물**을 만들어 냈다. 국내 독자가 가져갈 것은 반응의 크기가 아니라 이 산출물들이 무엇을 재고 무엇을 못 재는지다 — 단일 플랫폼 데이터, 공개 약관의 해석 여지, 에이전트 스웜 심사의 재현성은 각각 한계가 분명하다.

## 시도 후보

1. **allowance 계측 하네스:** 고정 과제 3개(리팩터 1·테스트 작성 1·리서치 1)를 6.2 Sol high로 매일 1회 돌려 시작·종료 % 기록 → 1/1.25(0.80) vs 0.75 중 어느 쪽인지 1주 내 판별. banked reset은 측정 기간 밖에서 사용.
2. **추론 예산 명시:** Codex에서 6.2 사용 시 effort를 xhigh로 고정하고 “결론 전에 반례 2개 검토” 같은 검증 단계를 프롬프트에 명시해 micjm식 ‘언더싱킹’ 보정 — 토큰 증가분과 품질 변화를 같이 기록.
3. **에이전트 출처 로깅:** 에이전트 시스템 프롬프트에 “읽은 파일 경로·타임스탬프를 결과 하단에 나열” 규칙 추가 — Neon의 ‘옛 로그 재활용’ 같은 shortcut 탐지.
4. **Workspace 에이전트 인벤토리:** 업무용 Gmail/Drive 자동화 중 send·move·share가 필요한 것 목록화 → 2027-02-01 전 MCP 전환 또는 partner access 신청 여부 결정, 임베딩 보존 30일 상한 영향 점검.
5. **로컬 추론 포크 검증 루틴(RTX 5090 Laptop 24GB):** 가속 포크 도입 시 동일 GGUF·동일 시드로 고정 eval 20문항 + perplexity를 원본 llama.cpp와 비교, MoE 라우팅 패치 여부를 changelog에서 확인.
6. **연구용 Claude 계정:** 수학·암호 이론 질의가 잦다면 자동 모델 전환 설정과 verification 상태 확인, 결과 기록에 실제 응답 모델명을 남길 것.

## 소스 범위

국내: ai_utilize·chatgpt 자동 수집 60건 + 신규 목록 ≈2,180편, 본문·댓글 ≈60편. 해외: Reddit RSS 0/8, HN 1면 + Algolia 36h(≥40pts 71건). 1차·보도: [티보 X(40%·25%)](https://x.com/thsottiaux/status/2125784147889393806)·[banked reset online](https://x.com/thsottiaux/status/2125853628250599730)·[HN](https://news.ycombinator.com/item?id=50651117), [바룬 모한 X(추수감사절 초기화)](https://x.com/_mohansolo/status/2125851902009311306), [OpenRouter X(지출 비중)](https://x.com/OpenRouter/status/2124925631012209137), [micjm — cost control mode](https://micjm.com/blog/openai-is-in-cost-control-mode/)·[HN](https://news.ycombinator.com/item?id=50652527), [arXiv 2611.34924](https://arxiv.org/abs/2611.34924)·[HN](https://news.ycombinator.com/item?id=50651863)·[Oppenheim — Has AI come for quantum gravity?](https://superposer.substack.com/p/has-ai-come-for-quantum-gravity), [샤빈스키 X(Fable→Opus 4.8)](https://x.com/kevinschawinski/status/2125901694617964731), [Tech Stackups — Workspace MCP](https://techstackups.com/articles/google-workspace-ai-agents-mcp/)·[HN](https://news.ycombinator.com/item?id=50653477), [devnull.land — llama-cpp-rdna-boosts](https://devnull.land/amd-specific-llama-cpp)·[HN](https://news.ycombinator.com/item?id=50657265), [AI타임스 — 중국 AI 격차](https://www.aitimes.com/news/articleView.html?idxno=217798), [HN — Jev/Qwen](https://news.ycombinator.com/item?id=50648823), [The Verge — NYT·Photoshop](https://www.theverge.com/ai-artificial-intelligence/1041227/the-new-york-times-warns-photographers-not-to-update-photoshop-over-ai-features), [HN — NP_R ≠ PAR_R](https://news.ycombinator.com/item?id=50657059), [HN — Diseases cured by AI](https://news.ycombinator.com/item?id=50657307), [The Register — 45°C inlets](https://www.theregister.com/hpc/2026/11/26/45c-inlets-just-killed-the-chiller), [AA 리더보드](https://artificialanalysis.ai/leaderboards/models)·[AA Coding Agents](https://artificialanalysis.ai/agents/coding-agents). Codex 메일·T3·수학 배치·결제액은 11-26, Chat/Work·AA 하네스 비교는 11-25, 5.6 종료 예고는 11-24, Antigravity 외부 로그인 차단은 11-15 브리핑 참조 — 델타만 반영.

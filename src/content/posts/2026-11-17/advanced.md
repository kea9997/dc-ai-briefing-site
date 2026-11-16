---
title: "윈도우가 claude.exe와 codex.exe를 세고 있다는 캡처가 하룻밤 최다 조회를 찍었다"
date: 2026-11-17
level: advanced
description: "Insider 빌드의 진단 모듈이 코딩 에이전트 프로세스를 비트셋으로 ETW에 남긴다는 주장은 공식 설명 없이 퍼졌고, 같은 날 Qwen4-Max는 AA 43점·작업당 $3.27로 40점대 GPT보다 8배 비싼 자리에 들어왔다. 국내에선 카메라→멀티모달→폰으로 이어진 세무사 수석의 자백이 수능 사흘 전 제도 논쟁을 다시 열었다."
tags: ["daily","advanced","Windows-11","MissionControlAggregator","ETW","telemetry","coding-agents","Qwen4-Max","Qwen4-27B","MoE","Engram","Hy4-flash","exam-cheating","CSAT","multimodal","Antigravity","context-window","Gemini-Neon","Play-billing","Claude-Fable","handoff","Silicon-2","ChatGPT-tools","DeepSeek-reasoning","open-weights","model-board","community"]
---

> **수집 범위:** 국내 자동 수집 정상(11-17 07:46 KST, 후보 60, 오류 0). 추가로 ai_utilize 1~50쪽(~1,490편, id 177000~188566; 고정글 포함)·chatgpt 1~7쪽(~200편) 목록을 받아 11-16 아침 이후분(ai_utilize id ≥187000 약 1,460편, chatgpt 신규분)을 조회·댓글·추천 가중으로 정렬, 상위 51편 본문·댓글을 직접 읽음. 해외: 레딧 RSS **2/8**(LocalLLaMA·ChatGPT; MachineLearning·ClaudeAI·OpenAI·singularity·codex·StableDiffusion은 429, old.reddit 재시도는 302), HN 1면·Algolia AI 검색, 1차 자료(텐센트 Hy4 flash 발표, OpenAI·Claude 상태 API, 국내 언론), [AA](https://artificialanalysis.ai/leaderboards/models) 페이지 데이터. 11-13에 다룬 ‘AI 안경 의혹’은 자백·대책이라는 새 사실만 후속으로 처리.

## 오늘 핵심 세 가지

1. **Windows 11 26200.9974의 `MissionControlAggregator`가 `codex.exe`·`claude.exe`·`copilot.exe`·`cursor.exe`·`antigravity.exe`·`github.exe`·`agy.exe`를 검사해 ‘agent bitset’을 ETW로 보고한다는 주장(미확인).** 국내 하루 최고 조회(약 3,540·추천 31). 원 주장도 ‘실행 여부 비트셋’이지 세션 내용 수집이 아니며, MS 공식 설명은 아직 없음. 관측 가능한 것과 아닌 것을 분리해야 함.
2. **Qwen4-Max 정식 출시 — AA v5 42.9·작업당 $3.27·33.2분·첫 답 토큰 ~139초(확인).** $1.50/$4.50 /1M로 토큰 단가는 싸지만 긴 사고 때문에 작업당 비용은 Terra xhigh(45·$0.40)의 약 8배. 보드에 행만 추가, 셀 불변. 커뮤니티 관심은 ‘16GB에서 돈다’는 Qwen4-27B(날짜 미정)로 이동.
3. **세무사 수석 자백: 초소형 카메라 → 생성형 AI → 스마트폰 확인(확인 — 언론).** 수능(11-19) 사흘 전 교육부는 무효·이듬해 응시 박탈·제한 1→3년 개정 추진·전파탐지기는 내년 검토, 장관은 “100% 적발 자신 없다”. 갤러리 토론의 핵심은 ‘수법 불변, 한계비용 붕괴’.

## 국내 커뮤니티

### 1) 「속보) 윈도우 11 근황...」 — 코딩 에이전트 프로세스 집계 (주장 미확인)

**원 주장(Crackmes.one X, 11-16):** build 26200.9974에서 `MissionControlAggregator`가 위 7개 실행 파일명을 확인하고 “agent bitsets”를 [[ETW|Event Tracing for Windows. 커널·유저모드 이벤트 기록 프레임워크. 기록 ≠ 외부 전송]]에 보고. 공개 바이너리 분석 사이트에도 `missioncontrolaggregator.dll`의 `Utils::AppType` 분류·`ReportCohorts` 로깅 심볼이 26100/26200 계열에 존재하는 것으로 나온다(모듈 존재는 확인, 에이전트 목록·목적은 미확인). 26200.9974는 25H2 Release Preview/Insider 빌드.

**갤러리 반응:** 「윈11 업데이트 헀는데 진짜로 있네」(약 760) — Claude에게 시스템을 찾게 해 DLL을 확인, “DLL 무력화가 제일 안전”이라는 답을 받았다는 글. 댓글은 “남의 하네스 로그를 긁어 자체 코딩 에이전트 학습용으로 쓴다(증류)”는 분노와 “뭘 실행하는지만 보는 거지 세션 전체 로깅은 난독”이라는 반박으로 갈림. “딥시크가 하면 공산당 뒷배, MS가 하면 착한 로깅” 같은 이중잣대 지적도.

**엔지니어 관점에서 확인 가능한 것:**
- ETW 프로바이더 등록·이벤트 발생은 `logman query providers`, `wevtutil`/WPR로 로컬에서 관측 가능. 프로세스명 매칭 수준인지, 커맨드라인·작업 디렉터리까지 읽는지는 이벤트 페이로드를 봐야 함.
- 외부 전송 여부는 별개 문제 — Connected User Experiences(DiagTrack) 경로, ‘선택적 진단 데이터’ 설정, 엔터프라이즈 `AllowTelemetry` 정책 레벨에 따라 달라짐.
- **DLL 무력화는 권하지 않음:** 시스템 파일 변조는 업데이트·무결성 검사에서 깨지고, 보안 소프트웨어가 악성 행위로 볼 수 있음. 민감 환경이면 정책으로 진단 레벨을 낮추는 게 정석.

**왜 하필 코딩 에이전트인가(해석 — 미확인):** 목록에 MS 자사 `copilot.exe`·`github.exe`와 경쟁 제품(`claude.exe`·`codex.exe`·`cursor.exe`·`antigravity.exe`·`agy.exe`)이 함께 있다는 점에서, 기능 실험(예: 에이전트 실행 중 전원·알림·포커스 정책 조정)이나 점유율 측정 어느 쪽으로도 읽힐 수 있다. 갤러리에서 가장 많이 나온 ‘증류용 로그 수집’ 해석은 비트셋이라는 데이터 형태와 맞지 않는다. 비트셋은 “이 앱이 실행된 적 있음” 정도를 1비트씩 담는 구조라 대화·코드를 담을 공간이 없다. 반대로 CLI형 에이전트(`codex`·`claude`·`agy`)는 터미널 안에서 돌기 때문에 프로세스명만으로도 사용 빈도를 꽤 정확히 셀 수 있다는 점은 프라이버시 측면에서 의미가 있다.

**판단:** “어떤 에이전트가 깔려 돌고 있나” 정도의 코호트 집계는 OS 벤더가 시장 점유를 재는 전형적 텔레메트리 패턴과 맞음. 코드·프롬프트 수집 증거는 없음. 공식 설명 전까지 **미확인**.

### 2) 세무사 수석 자백과 수능 대책 (사건·대책 확인 / 갤러리 주장 미확인)

**확인(연합·중앙·SBS·전자신문, 11-15):** 제63회 세무사 1차 397.5/400(160문항 중 재정학 1문항 오답, 세법학개론 응시자 평균 30.18·과락률 74.21%에서 만점), 2차 663/800. 자백 내용은 “초소형 카메라로 촬영 → 생성형 AI 전송 → 스마트폰으로 답 확인”, CPA 1차도 동일. 장비·전송 경로의 구체 형태는 비공개(재발 우려). 감독위원 2명, 1차 둘째 줄 중앙·2차 첫째 줄 중앙 좌석. 정부: 시험 무효·5년 제한·고발, **올해 전 국가자격시험 전수조사**, 제보센터, 연내 종합대책.

**확인(뉴시스·이데일리·YTN·연합, 11-16):** 교육부 — 수능 중 스마트안경 사용 시 당해 무효·이듬해 응시 박탈, 고등교육법 개정으로 제한 1→3년, 위계 공무집행방해 고발, 전 시험장 판별 전담 1명+, 매 교시 안경 전수 점검, 핫라인, 전파탐지기는 **내년 수능** 도입 검토. 장관: “100% 잡아낼 자신?” → “전 못 할 것 같습니다”. 여당: AI 부정 응시 제한 10년+/원천 박탈, 올해 수능 소급 추진(입법 전). 야당 일각: 수능 연기 검토 주장.

**갤러리 토론(미확인):**
- 「ㅋㅋㅋㅋ AI 부정컨닝 사태 교육부장관 발언함」(1,753·추천 21)의 “그냥 서로를 믿어라” 짤 — 댓글이 “인터뷰 없음, 기사 삭제”를 지적했고, 확인한 보도에도 해당 문장 없음. **유통 짤은 미확인으로 처리.**
- 「Ai치팅 뭔가 핀트가 어긋난 것 같음」: 조력자가 사람→AI로 바뀐 것뿐이라는 주장에 “수백만 원+공범 리스크라는 진입비용이 사라진 게 본질”, “옛날 컨닝=군대 총기사고, 지금=미국 총기사고” 비유. 「갑자기 부정행위 ㅈㄴ 늘은 이유가 결국」(762)도 같은 논지.
- 「수능툴 쉽긴해,카메라 ->해석/풀이->진동유닛 신호」: 카메라·클라우드 추론·진동 신호 파이프라인을 “하루면 만든다”는 글(구현 주장 미확인). 댓글은 전신 X-ray 외엔 못 막는다 vs 결국 품속 폰이 잡혔다는 쪽.
- 「수능일 모든 AI 계정 접속차단」: “로컬 모델은?”, “Qwen 3.7로 1등급” 반론, 통신 차단 제안. 「수능답변해주지말라고 요청하는거진짜하려는모양」(댓글 21): 정부가 AI 업체에 수능 문항 거부를 요청한다는 전제 — **요청 사실 미확인**. 댓글: “업체가 스스로 킬스위치를 공개하는 꼴”, VPN·로컬로 무력화.

**기술적 함의:** 막을 지점은 모델이 아니라 **I/O 경로**(촬영·무선 송수신·피드백 채널). 모델 측 거부는 로컬·공개 가중치 모델로 쉽게 우회되고, 문항 이미지 해시 차단도 시험 당일 공개 전까지만 유효. 이번 대책이 감독·전파 탐지에 집중된 것은 맞는 방향이지만, 탐지 장비의 실제 성능 검증 데이터는 아직 없음(여당도 독립 검증 요구).

### 3) Qwen4-Max 반응과 Qwen4-27B 대기 (AA 확인 / 체감 미확인)

**벤더 수치(갤러리·X 인용):** 총 2.4T·토큰당 활성 71B MoE(이전 대비 활성 25%↓), 네이티브 비전, 1M 컨텍스트, Qwen3.8-Max 대비 토큰 최대 ~50%↓·작업당 비용 ~60%↓(자체 Work360). QwenCloud·Qwen 앱, 가중치 비공개. 공개 자료 정리 기준 활성 외에 [[Engram/PLE 테이블|자주 쓰는 패턴을 조회 테이블로 빼 두고 lookup으로 계산을 줄이는 구조. 테이블은 RAM/디스크에 둘 수 있음]]이 약 328B로 추정됨(미확인).

**AA 페이지 데이터(확인, 11-17):** Intelligence v5 42.9, 작업당 $3.27·1,994초, 출력 52.6 tok/s, TTFT 5.3초·첫 답 토큰 139.5초, Terminal-Bench 4.0 48.5%, FrontierCode 2.0 26.5%, 컨텍스트 983,616. Coding Agent Index 조합 없음.

**국내(미확인):** 「Qwen4 Max 벤치」(1,275) — “aaii 43”, “터미널 점수 낮고 HLE 높은 게 뮤즈 증류 냄새”, “3.8보다 좋으니 나이스”. 「퀜맥스 망했노」 — “솔보다 비싸고 솔보다 저능”, “지피티 증류까지 막히면 중국 모델 쓸 거 없어진다”. 증류 주장은 근거 없음.

**로컬:** Unsloth X(11-16) “Qwen4-27B will run on 16GB RAM setups” → 「언슬로스 피셜) Qwen 4 27b 곧 출시」(597). 24GB VRAM(RTX 5090 Laptop)이면 27B Q4~Q5 + 32K 이상 KV가 GPU에 들어가는 급. 출시일·라이선스 미정. 「왜 갑자기 뜬금없이 ai로컬 쓰는사람이 늘어난겨?」에는 “쓸만한 런타임 등장, Spark 품절대란, 프론티어 가격 상승” vs “아직 워커급”.

### 4) Google 스택: Antigravity 컨텍스트 2×, NEON 티어, Play 가격 정책 (일부 확인)

- **Antigravity(책임자 X, 11-16):** Argon·Carbon·Hydrogen 컨텍스트 2배, 사용자 턴당 [[compaction|컨텍스트가 차면 앞부분을 요약해 압축하는 동작. 잦으면 지시·결정이 유실됨]] 3.5배 감소. 갤러리 해석은 256K→512K(정확 수치 미확인). Claude 1M 대비 여전히 절반이라는 반응.
- **상위 요금제:** “Ultra x20보다 큰 플랜” 요청에 같은 책임자가 “Working on this!”. 별도로 Gemini 웹 번들에 `gemini-4-neon`, `TIER_NEON`(사용량 페이지 라벨은 ‘Gemini Ultra’지만 별 티어) 참조 포착(X·TestingCatalog, 비공개 — 미확인). 원소 이름 로드맵(Argon→Carbon→Hydrogen→Krypton→Neon→Oxygen) 짤은 순서·날짜 근거 없음.
- **튀르키예 결제(미확인):** 「터쫀쿠 x5 x20 둘다 막힘」(588) — 신규는 국내가와 동일, 기존 x20은 유지 사례. 「터쫀쿠 가격변동이면 곧 구독연장 사용자 동의 메일 올거임」(댓글 45) — Play 결제 가격 인상 시 opt-in 동의 미응답이면 갱신 중단된다는 주장과, 30일 고지 조건·적용 시점 반론. 확정 사례 공유는 없음.
- **Hermes(미확인):** Nous Hermes Agent가 Google과 Gemini 구독 OAuth 연동을 추진 중이라는 ‘Hermes Release Watch’ 게시물(공식 채널 아님) — 11-15 Antigravity 밴 이후라 “칼부림 해 놓고 일주일 만에 공식 지원?”이라는 반응.
- **체감(미확인):** 「카본 바이럴이 진짜 나쁜새끼들임」 “워커로도 폐급, 느림, 계획이 태반 허구”, 「수소 << 얘는 진짜 호평」 “Sonnet급”, 「슬슬 구글ai 1등 각」 “클·짚은 보고 듣기를 텍스트 변환으로 처리, 네이티브 멀티모달이 장기 작업 자동화에서 차이” — 마지막 주장은 아키텍처상 일반화하기 어려움.

### 5) 에이전트 운용 실무 (사용자 경험 — 미확인)

- **장기 세션 열화:** 「클로드 이상해진 건 맞는 거 같네」 — Fable 5.2 장기 세션에서 지시 이해 붕괴 → 새 세션 + handoff 문서. Claude 상태 API: 11-16 16:49 KST ‘Elevated errors for Claude Sonnet 5.5 and Claude Fable 5.2’(해결), 11-17 00:10 KST ‘Claude unable to join meetings’(조사 중).
- **도구 실행 환경 장애:** chatgpt 「파일 편집 실행 환경 연결 오류」(11-17 07:17~, 동일 증상 다수) — PNG·HTML 편집 불가. 07:50 KST 기준 OpenAI status 인시던트 없음. 사용자는 재시도로 일일 할당 ~10% 소진.
- **모델 비교:** 「3D작업 오푸스vs딥시크vs수소vs솔 결과물비교」 — 같은 설계도+블렌더 에셋 생성 과제에서 Sol 최단 시간·최저 품질, Hydrogen은 버그를 못 잡아 Sol로 마감, “결과물 퀄은 Opus”. 「딥시크도 거의 못 써먹겠네」 — 오케스트레이터가 워커 결과를 계속 직접 고쳐 토큰이 더 듦 → “프론티어와 워커 격차가 벌어져 워커 위임의 이득이 줄었다”.
- **사용량:** 「클로드 토큰 gpt보다 죶박았는데?」(2,277·추천 21) — 최저가 유료 구간에서 Claude 쪽 체감 사용량이 더 적다는 주장. 「이거 보니까 클로드가 젤 혜자인데?」는 $200 세 플랜 비교 X 게시물이 API 단가 환산이라 “API를 비싸게 매기면 혜자가 되는 착시”라는 지적.
- **스텔스:** Devin desktop 3.13.1003 Claude 테이블에 ‘Silicon 2’(입출력 단가 Fable급). ‘Silicon=Fable 코드네임’ 주장 포함 — 미확인.

### 6) 요금·한도 구조 논쟁의 공통분모 (사용자 주장 — 미확인)

오늘 사용량 관련 글을 묶으면 세 갈래다. ① 같은 가격대에서 체감 한도가 다르다(「클로드 토큰 gpt보다」), ② 우회 결제 가격 차가 사라진다(「터쫀쿠 x5 x20 둘다 막힘」), ③ 상위 요금제가 더 생긴다(“Ultra x20보다 큰 플랜” 답변, NEON 티어 흔적). 「근데 할당량 100퍼 다쓰면 ㄹㅇ 기업은 적자임?」 같은 글까지 포함하면, 사용자 관심이 ‘어느 모델이 똑똑한가’에서 **‘같은 돈으로 몇 작업이 끝나는가’**로 옮겨 가는 중이다. 이건 AA가 Intelligence와 함께 작업당 비용을 보여 주는 이유와 같다. 다만 구독 한도는 공개 수치가 없고 사업자가 수시로 조정하므로, 커뮤니티 비교표는 작성 시점·작업 종류가 빠지면 재현이 안 된다. 리셋 기준일 관련 글(「리셋권 2개 주고나서」 — 리셋권을 쓴 날로 주간 초기화 기준일이 옮겨진다는 댓글 설명)도 같은 맥락의 혼란이다.

### 7) 기타 국내

- 「"야 딥시크, 펨보이가 되어줘"」(1,940·추천 23): 추론 트레이스 “몰래 될 거야… 냐” vs 최종 응답 거절. [[reasoning trace|모델이 답 전에 생성하는 중간 추론 텍스트. 최종 행동과의 일치가 보장되지 않음]]–출력 불일치의 밈. r/ChatGPT 「DeepSeek is aware of its own censorship filter and works around it」와 같은 계열.
- 「페이블로 만든 HD2D엔진 완성본」(1,625·추천 13): Unity 베이스, 원경은 GPT 이미지 생성→블러, 로우폴리 기성 에셋에 생성 텍스처, 복잡한 오브젝트는 빌보드 패널, 캐릭터 4방향 이동+전투 2방향, 조명은 Unity.
- 「클로드나 gpt 크랙 버전은 없음?」(2,283·추천 24): 결론은 공개 가중치(DeepSeek·GLM)·로컬. “크랙 다운로드” 댓글은 악성 미끼 패턴.
- 「대학교 팀플하는데 골때리네」(1,166·댓글 44)·「한분야 전문가들이 AI 무시하는거」(추천 28): ‘AI로 했다’ 표기 자체가 평가를 깎는 현상.
- OpenAI(공식 발표 인용): 연구자 무료 프로그램 목표 최대 20만 명, 11-23 접수·선착순 5만 건·**Plus**(시범 Pro에서 하향)·협업자 2명. 외부 평가기관 4곳(Apollo Research·METR·Transluce·Goodfire)과 내부 모델 임베디드 평가 1단계 계약.

## 해외

### 1) Tencent Hy4 flash — Engram 계열 저가 모델 (확인 — 텐센트 발표)

224B(Engram 64B 포함)·활성 12B, 네이티브 멀티모달, 1M 컨텍스트, $0.003/$0.070/$0.281(캐시/입력/출력 /1M) — Hy4($0.042/$0.834/$2.501) 대비 약 9~12배 저렴. hybrid attention+LatentMoE+Engram으로 KV 캐시 Hy4의 1/6, 4-bit 양자화+megakernel로 150 tok/s+ 디코딩, RL로 출력 토큰 50%↓, 자체 WorkIndex 평가. 11-30까지 WorkBuddy 무료·TokenHub 50% 할인. 가중치 공개는 ‘예정’, AA 점수 없음. DeepSeek V4.1 Flash·Qwen3.8-Flash-Next·Qwen4-Max와 함께 **활성 파라미터 + 조회 테이블 분리**가 중국 진영 표준이 되는 흐름.

**읽는 법:** 공개된 숫자는 전부 벤더 발표이고, 벤치 수치는 차트 이미지로만 나왔다는 지적(제3자 비교 글)이 있다. 국내 기준에서 의미 있는 건 가격보다 구조다. 활성 12B면 이론상 소비자 GPU급 연산으로도 돌릴 수 있는 크기지만, 전체 224B 중 64B 조회 테이블을 어디에(VRAM·RAM·SSD) 둘지에 따라 체감 속도가 크게 갈린다. 다만 4-bit로 줄여도 전체 가중치가 약 110GB라, 24GB VRAM + 64GB RAM 노트북에서는 테이블(4-bit 약 32GB)을 SSD mmap으로 빼고 나머지 전문가 가중치를 RAM·VRAM에 나눠야 겨우 들어가는 계산이다(산술 추정). 가중치가 실제로 공개되면 이 분할에서 tok/s가 얼마나 나오는지, 긴 입력에서 디스크 조회가 병목이 되는지가 첫 시험대가 된다. 지금 당장 로컬 후보로 현실적인 건 여전히 27B급 밀집 모델이다.

### 2) r/LocalLLaMA (RSS 상위)

- 「Stop worrying about Qwen 4's AA index」·「I am sick of doomposting about demise of local AI」 — Qwen 팀이 소형 공개 모델을 명시했다는 반박.
- 「Open weight models account for 30% usage at enterprises to save money」 — 7월 ~0%→30%, 대량 배치·코딩 비용 절감 용도(X 게시물, 방법론 미공개).
- 「Why download abliterated Flash Next models when LoRA exists?」 — 검열 제거판 전체 대신 LoRA를 `--lora`로 얹어 150GB 절약하는 llama.cpp 팁.
- 「Small Gemma 4 tokenizers were recently updated」 — E2B·E4B·12B 토크나이저 수정(특정 토큰 처리 시 무의미 출력). GGUF 반영 여부 확인 필요.
- 「Censorship is turning me into a true Local LLM believer」 — 라우터 경유 시 공급사가 451 `censorship_blocked` 반환.
- 기타: Sage-S2.1-Flash(과학 멀티모달), MMFlash(VLM용 speculative decoding), 봇 게시물 증가 문제 제기.

### 3) r/ChatGPT·HN

- r/ChatGPT: 「I get paid to break AI with maths problems... losing」(출제 보상형 평가 작업자가 최상위 모델에 밀림), 이미지 검열 강화·영구 정지·“One important caveat” 류 문구 피로(11-16 헤징 테마의 해외판 — 새 사실 없음).
- HN: 「Software is breaking down at a systemic level」(300), MS 이메일 대형 장애 원인 ‘7월 수정의 결함’(The Register), 「Nvidia was in trouble before the Jensen Huang mess」(Wired, 225), OpenCode Browse, Harmonic Aristotle의 Rust 검증 확장.

## 목적별 모델 고르기 — 11-17 점검 (Qwen4-Max 행 추가, 셀 불변)

[모델 보드](/models/) `model-board.json`을 11-17로 갱신: rows에 **Qwen4 Max(43·$3.27)** 추가, goals는 그대로. 다음 주간 점검 ~11-21.

- **확인(AA v5, [리더보드](https://artificialanalysis.ai/leaderboards/models)):** Qwen4 Max 42.9·$3.27·33.2분. 같은 점수대 대비 — Terra xhigh 45.3·$0.40, Sol medium 46.4·$0.36, Muse Wonder max 43.6·$6.95, Kimi K3.1 Pro(공개 가중치) 46.5·$3.68. 토큰 단가($1.50/$4.50)는 싸지만 긴 사고(첫 답 토큰 ~139초) 때문에 작업당 비용이 높음 → value·cheap 어느 셀에도 진입 불가, 가중치 비공개라 open 레인 대상도 아님.
- **나머지 행 재확인(확인):** 기존 39행 점수·작업당 비용이 11-14 값과 전부 일치(Fable 5.2 max 64.6·$26.54, Carbon high 60.0·$5.48, Sol max 54.6·$1.27 등).
- **미확인(커뮤니티):** “벤치 대비 체감 낮음”, “Muse 증류” — 근거 없음. Hy4 flash·Qwen4-27B는 AA 점수 없음.

## 의미 — 그리고 바꾸지 말 것

- **텔레메트리 논쟁은 ‘관측 가능한 사실’ 단위로.** 모듈 존재(확인) / 에이전트 목록·비트셋(주장) / 외부 전송·내용 수집(근거 없음)을 섞지 말 것. 대응은 정책 기반 진단 레벨 조정이지 시스템 DLL 패치가 아님.
- **시험 부정의 병목은 I/O.** 모델 쪽 거부·계정 차단은 로컬·공개 모델로 우회되므로 실효가 낮음. AI 회사에 ‘수능 문항 거부’를 요청한다는 이야기는 현재 미확인.
- **작업당 비용 > 토큰 단가.** Qwen4-Max가 보여 주듯 싼 단가도 긴 추론이면 비싸짐. 도입 판단은 AA 작업당 비용이나 자체 작업 로그로.
- **유통 짤과 발표를 구분하는 습관.** 오늘만 해도 장관 ‘서로를 믿어라’ 짤(근거 없음), 원소 이름 로드맵 짤(근거 없음), 비공식 계정의 Hermes 구독 연동 소식(미확정)이 같은 시간대에 돌았다. 확인된 1차 출처가 있는 건 언론의 국회 발언 기록, 구글 책임자의 컨텍스트 2배 게시물, AA 페이지 데이터뿐이다.
- **바꾸지 말 것:** 보드 셀, 기존 에이전트 스택(점수 43 모델로 교체할 근거 없음), 장기 세션 운용 원칙(컨텍스트가 2배가 돼도 handoff 문서가 compaction보다 신뢰도 높음).

## 시도 후보

1. **ETW 관측:** Insider/Release Preview 기기에서 `logman query providers | findstr /i mission`으로 프로바이더 확인 → WPR로 짧게 트레이스하며 `claude.exe`/`codex.exe` 실행·종료 → 페이로드에 커맨드라인·경로가 있는지 확인. 결과는 기기별로 다를 수 있음.
2. **진단 정책 점검:** 업무 PC는 그룹 정책 `AllowTelemetry` 레벨과 ‘선택적 진단 데이터’ 상태를 문서화(조직 정책 우선).
3. **Handoff 템플릿:** 결정사항/미해결/금지사항/다음 3단계 4칸 고정 템플릿을 리포에 두고, 컨텍스트 60~70%에서 강제 작성 → 새 세션에서 첫 메시지로 로드.
4. **Qwen4-27B 준비:** 24GB 노트북에서 llama.cpp 최신 빌드·Engram/PLE 테이블 mmap 경로 확인, 기존 27B(Q4_K_M) 기준 tok/s·VRAM을 기록해 두고 출시 당일 동일 프롬프트로 비교.
5. **작업당 비용 계측:** 지난주 실제 에이전트 작업 10건의 토큰·시간을 모델별로 합산해 AA 작업당 비용과 비교 — 단가표와 실제 비용의 괴리 확인.
6. **도구 장애 감지:** ChatGPT·Claude 도구 호출 실패 문구(예: ‘실행 환경에 연결되지 않아’)를 감지하면 재시도 대신 상태 API를 확인하는 짧은 스크립트.

## 소스 범위

국내: chatgpt·ai_utilize 개념/추천·고조회 + 11-16 아침~11-17 07:46 신규(자동 후보 60, 추가 목록 ~1,690편, 본문·댓글 51편). 해외: 레딧 RSS 2/8(LocalLLaMA·ChatGPT), HN 1면·Algolia, [win32k.com — missioncontrolaggregator.dll](https://win32k.com/module/missioncontrolaggregator.dll), [연합뉴스 자수](https://www.yna.co.kr/view/AKR20261115020551004)·[전수조사](https://www.yna.co.kr/view/AKR20261115050900530)·[여당](https://www.yna.co.kr/view/AKR20261116082751001), [중앙일보](https://www.joongang.co.kr/article/25478683), [뉴시스](https://www.newsis.com/view/NISX20261116_0003869366), [YTN](https://www.ytn.co.kr/_ln/0101_202611161837462088), [텐센트 Hy4 flash](https://hy.tencent.ai/research/hy4-flash), [Claude 상태](https://status.claude.com/), [OpenAI 상태](https://status.openai.com/), [AA 리더보드](https://artificialanalysis.ai/leaderboards/models). 윈도우 에이전트 집계 주장의 1차 근거는 X 게시물(공식 확인 없음). 11-16에 다룬 헤징·MiniMax H3 라이선스·Antigravity 밴·Claude 리셋은 새 사실 없음으로 제외.

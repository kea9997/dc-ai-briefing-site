---
title: "구독 토큰은 공식 앱 밖으로 나가지 못한다 — 구글이 먼저 선을 그었다"
date: 2026-11-15
level: advanced
description: "Antigravity 구독 OAuth를 서드파티 하네스에 물린 계정이 다시 무더기로 막혔다. 같은 주에 구글은 /teamwork로 공식 표면 안의 멀티 에이전트를 자랑했고, 국내에선 수노로 부른 노래가 멜론 1위를 지켰다."
tags: ["daily","advanced","Antigravity","Google-OAuth","oauth-personal","TOS_VIOLATION","third-party-harness","teamwork","AI-music","Melon","SUNO","ChatGPT-moderation","GPT-6.2","Gemini-4-Krypton","Fable-5.2","banked-reset","Lovable","Supabase-RLS","tokenizer","multilingual-energy","tandem.cpp","model-board","community"]
---

> **수집 범위:** 국내 자동 수집 정상(11-15 07:46 KST, 후보 60, 오류 0). 추가로 ai_utilize 1~21쪽(~620편, 11-14 19:40~11-15 07:43)·chatgpt 1~4쪽(~110편) 목록을 받아 조회·댓글 상위 38편 본문·댓글을 직접 읽음. 해외: 레딧 RSS 2/8(LocalLLaMA·ClaudeAI; 나머지 빈 응답), HN 1면 30, 1차 자료(Antigravity 약관·Google AI Developers Forum 답변, GitHub 이슈, Google Research 블로그, 국토교통부·산업통상부 참고자료, Crissy Field 보고서, U-M 발표), 보도(연합뉴스·한겨레·뉴시스·AI타임스), [AA](https://artificialanalysis.ai/leaderboards/models) 페이지 데이터. 11-12~11-14에 다룬 Claude 장애·Duet 리셋·Nvidia 건은 새 사실이 없어 제외.

## 오늘 핵심 세 가지

1. **Antigravity 구독 [[OAuth|비밀번호 대신 ‘허락 토큰’을 다른 프로그램에 넘기는 로그인 방식]]의 서드파티 사용 = 약관 위반, 정지 재개(약관·포럼 확인 / 11-14 웨이브 규모 미확인).** 약관 6조가 “제3자 소프트웨어로 서비스 접근(예: OpenClaw + Antigravity OAuth)”을 명시적 위반·정지 사유로 규정하고, 포럼 답변은 `oauth-personal`을 공식 표면(앱·CLI·IDE·공식 확장)으로 한정, `agy -p` 래핑도 금지. 국내에선 11-14 저녁부터 OpenCodex·Hermes·OMP 같은 [[하네스|모델을 감싸 파일 수정·명령 실행을 시키는 에이전트 실행 프로그램]] 사용자 정지 보고가 이어졌고, 해외 GitHub엔 11-05~06(미국) 선행 웨이브 기록이 있음.
2. **수노 보컬 곡이 멜론 톱100 1위(확인).** 머무르 「꿈꾸던 어른이 되었나요?」 11-13 17시 1위 → 11-15 07시 유지(뉴시스). 24h+1h 합산 차트라 단기 스트리밍으로 버티기 어려운 구조인데도 갤러리에선 “바이럴·사재기” 주장이 나왔고 대다수가 반박. 저작권료는 음저협 미신탁으로 0원.
3. **GPT-6.2는 여전히 카탈로그·체인지로그·AA 어디에도 없음(확인), “6.2 Sol 라우팅” 체감·Krypton 아레나설은 미확인.** 동시에 ChatGPT 갤러리는 ‘자살 언급 누적 → 영구 정지’ 추측과 반박으로 하루를 보냄(사례 미확인).

## 국내 커뮤니티

### 1) 「❗지금 절대 구글 OAuth 서드파티에 물리지 말것❗」 — 반중력 밴웨이브 (약관 확인 / 규모·기준 미확인)

**확인(1차 자료):**

- **[Antigravity 추가 약관](https://antigravity.google/terms/) 6조:** “using third party software, tools, or services to access the Service (e.g. using OpenClaw with Antigravity OAuth) is a breach” → Antigravity 및/또는 Gemini CLI 계정 정지·해지 사유.
- **Google AI Developers Forum 공식 답변:** 개인 로그인(`"auth": {"type": "oauth-personal"}`)은 Antigravity App·CLI·IDE·공식 IDE 확장(VS Code, Visual Studio, IntelliJ 계열, Zed, Xcode, Eclipse)에서만 지원. 플랜에 포함된 Gemini·Claude 추론 모델 접근도 이 표면 한정. **`agy -p`(헤드리스)를 서드파티 앱 안에 감싸는 것도 위반.** 서드파티 하네스엔 **AI Studio API 키(`GEMINI_API_KEY`) 또는 Gemini Enterprise/Vertex AI**를 쓰라고 권고.
- 예외적으로 Google의 **수정되지 않은 `antigravity-acp` 바이너리 + 네이티브 브라우저 OAuth**를 호환 ACP 에디터에서 **단일 사용자 대화형 코딩**에 쓰는 건 지원된다고 함. 반면 로컬 `agy` 로그인 파일을 읽거나, 자격 증명 파일을 평문으로 쓰거나, `agy`로 쿼터를 폴링하거나, 멀티 워커 풀을 돌리는 플러그인은 금지 사례로 명시.
- **정지 증상·절차:** `403 PERMISSION_DENIED / reason: TOS_VIOLATION / domain: cloudcode-pa.googleapis.com`, “This service has been disabled in this account…”. 이의 신청은 **계정당 1회**, 자동 검토 48~72시간·확인 메일 없음, 복구 후 재위반 시 영구 정지. 재로그인 전 **myaccount.google.com/permissions에서 OAuth 그랜트 철회** 필수(로컬 파일 삭제만으론 그랜트가 남음).
- **선행 웨이브(GitHub 이슈):** CLIProxyAPI #7296은 11-06 03:00(UTC+8) 무렵 3개 중 2개 자격 증명이 4분 간격으로 동시 사망, **정지 범위는 Cloud Code 서비스 한정**(구글 계정·구독·토큰 갱신·모델 카탈로그 조회는 정상)이라고 보고. OmniRoute #19266은 11-05~06 4개 계정 ToS 정지 + 1개 계정 인증 요구를 기록했고, 이후 프로젝트 문서에 “스텔스·핑거프린트 옵션은 계정당 트래픽을 줄일 뿐 사용을 허가된 것으로 만들지 않는다”는 경고가 추가됨.

**국내 반응(경험담 — 미확인):**

- 경고글(댓글 26): “11-14자로 본격 시작, 인쫀쿠·터쫀쿠(해외 우회 결제 구독)든 정가든 **핑거프린트**에 서드파티 하네스·루프에서 구독 OAuth로 Gemini 호출이 잡히면 권한 회수, 한 번은 어필로 복구되지만 재사용 시 영정.” 댓글엔 “ACP·CLI 경로는 문서상 된다·안 된다가 섞여 있어 위험은 같다”는 정리.
- 「ouath 잘못 연결한 건지 agy 정지먹었는데」(23): OpenCodex 라우터 경유 → 정지. “앙망문(이의 신청) 쓰면 풀어 주고 그 뒤 안 까불면 됨”, “agy만 막히고 구글 전체는 못 봤다”(GitHub 보고와 일치).
- 「인쫀쿠 말고 AGY OAUTH 정지된 사람도있음?」(16): “11만 원 정식 울트라, 워커로 쓴 적도 없는데 정지” vs “계정 승계형 우회 구독을 제일 싫어하는 패턴이라 잡은 것, 정식 구독 정지 사례는 최근 못 봤다”. 「구글 밴 특징 가르쳐준다」는 “울트라 장기 구독으로 hermes·omp·opencode·cliproxyapi 다 물려도 멀쩡”이라는 반대 사례.
- 「와 반중력이거 -p도 정지구나」: “얼마 전 안내가 뒤집혔다”, “자동화(서드파티 에이전트 호출)가 문제”, “Claude reviewer로 Gemini 쓰던 것도 위험한가” 질문.
- 패밀리 플랜 멤버가 “메일 없이 무료 티어로 떨어졌다”는 댓글엔 “그건 정지가 아니라 관리자가 플랜을 해지한 것”이라는 답.

**해석:** Anthropic이 Claude 구독 OAuth의 제3자 사용 범위를 둘러싸고 겪은 논쟁(11-10 고급판에서 다룬 passthrough 구성 등)을 Google이 더 강하게, 더 먼저 문서화한 형태입니다. 하네스 선택권이 필요한 워크로드는 **API 키 과금으로 옮기는 비용**을 계산해야 하고, EEA·스위스·영국 사용자 대상 서비스라면 Gemini API 추가 약관상 유료 서비스만 허용된다는 점(OmniRoute 문서 인용)도 체크 대상입니다. “정식 구독은 안전”이라는 갤러리 통념은 근거가 약합니다 — 공식 문서는 결제 경로가 아니라 **접근 표면**으로 선을 긋습니다.

### 2) 「멜론1등바이럴존나하네」 — 수노 보컬 곡 1위 (차트 확인 / 바이럴설 근거 없음)

- **확인(연합뉴스·한겨레·뉴시스·이투데이):** 6-23 발매, 11-13 17시 멜론 톱100 1위(리센느 2·A2O 라이트 3·아일릿 5위), 23시까지 유지, 11-15 07시에도 1위. 유튜브 국내 일간 인기 MV 1위(9월) → 벅스·지니 선 1위 → 멜론. 이전 AI곡 최고 기록은 5월 ‘마음의 숲’ 89위.
- **제작 파이프라인:** 글로리웨이브(이용석·최성혁)가 기획·작사 → 수노로 멜로디·편곡·보컬 → 큐베이스 후반 작업. 한국어 발음·뉘앙스 문제는 **가사·음절을 고쳐 재생성하는 루프**를 여러 번 반복. 소개란에 수노 보컬 명시.
- **제도:** 음저협 미신탁 → 작사·작곡·편곡 저작권료 0, 저작인접권(음반 제작자 몫)만 정산. 음저협은 8월 AI 활용곡 신탁 기준을 발표했다가 철회, 국회 토론회 2회 후에도 기여도 입증·배분 기준 부재.
- **국내 반응(의견):** 「멜론1등바이럴존나하네」(31): “초반 순위는 돈” vs “유튜브 2천만은 바이럴로 못 만든다, 화제성과 바이럴은 다르다”. 멜론 집계(24h+1h 합산) 구조상 단기 화력만으론 장기 1위가 어렵다는 게 뉴시스 설명이라 **사재기 주장은 근거 없음**. 11-13 개념글 「수노SUNO를 오픈소스화 한다고?」(ACE Music v1 소식)와 이어지는 관심.

**해석:** “원클릭(딸깍) 음원”이 아니라 사람이 **선별·재생성 루프**를 돌린 결과라는 점이 이미지·코드 쪽 슬롭 논쟁과 같은 구도입니다. 생성물의 상업 성공이 확인된 이상, 저작권 신탁 기준이 다음 쟁점입니다.

### 3) ChatGPT 정지 담론 — 「정지 ㅅㅂ」·「gpt밴은 걍 러시안룰렛임」 (사례 미확인)

- 「정지 ㅅㅂ」(29): 업무 매뉴얼·직장 상담 용도, 유료 2개월 차에 경고(빨간 경고) 없이 정지, 복구 거절 통보. 우울증 호전 여부를 물은 적은 있으나 “자살 상담으로 빠지지 말라”고 지시했다는 설명.
- 「밑에게이 본인은 억울하다고 하는데」(추천 10): ‘죽고 싶다’ 상습 사용 누적 가설. 「죽고싶다는 말로 정지된거 아니라고봄」: 2년간 50회 이상 + 욕설 + 수위 질문에도 무경고 — “오류성 오탐 90%” 주장. 3년 사용자도 같은 경험담.
- 같은 갤러리의 반대 방향 신호: 「지금 api 검열률 왜이럼? 버그같은데」 — 이미지 생성 성공률 1%이던 프롬프트가 100장 중 92장 통과(일시적 완화 체감), 「어제부터 갑자기 이미지랑 대화 존나 이상해졌는데」 — 품질 저하·번역체 체감. 즉 **분류기 동작이 시간대별로 흔들린다는 체감**이 정지 공포와 겹쳐 있음.
- **확인 가능한 것:** OpenAI는 이번 주 정지 기준 변경을 발표하지 않았습니다. 데이터 내보내기는 정지 후 불가할 수 있다는 사례가 반복됩니다(사례 기반).

### 4) 모델 소문 — 6.2 Sol 라우팅설·Gemini 4 Krypton (미확인)

- 개념글 「6.2 sol 로 만든 픽셀스타일 슬롭 게임보구가」(추천 14·댓글 30·조회 약 1,380): 50분·1.37MB 픽셀 게임. 글쓴이 판별법은 “검색 끈 상태에서 2026-06 이후 사건(예: Fable 5 출시일)을 알면 6.2로 라우팅된 것” — 컷오프 프로빙은 시스템 프롬프트·메모리·도구 결과 누수로 쉽게 오염되므로 근거로 약합니다.
- **확인:** 11-13~14 기준 OpenAI API 모델 목록(gpt-6-astra·gpt-6.1-sol·gpt-6.1-terra·gpt-6-luna·gpt-6-cyber), API 체인지로그(최신 11-05 gpt-6-cyber), Codex 모델 카탈로그, AA 어디에도 6.2 없음. 유일한 공식 흔적은 API 레퍼런스의 “models 6.2 and later” 문구(복수 해외 점검 글).
- 「6.2 폐기하고 6.5로 낸다는 소문」(출처 없음), 「GPT가 요즘 욕먹는 이유 정리」: “Astra가 GPU를 너무 먹어 피크 시간 추론 단계를 줄였다(뇌절제), 경량화 실패로 6.2 지연” — 서빙 측 effort 다운시프트는 공개 증거 없음(**의견**).
- 「X) gemini 4 크립톤 라우팅 중??」: LuminaBench가 아레나에서 Krypton 추정 출력(15분 코드 생성)을 공유, “Hydrogen에서 Krypton으로 라우팅된다”는 말. 중국어 X 글은 H<C<Ar<Kr 순 체급, Kr = Fable 5.2·GPT-6.2 Sol 대응 플래그십이라 정리. **구글 발표 없음.**

### 5) Claude 한도 경제학 (사용자 측정 — 미확인)

- 「페이블 5.2는 클맥(5x) 기준 … 2.5~3배 빠르게 소모」: API 환산 시 주간 1%당 Opus/Sonnet ≈ $16, **Fable 5.2 ≈ $6~7**. AA상 Fable 5.2 high 작업당 $9.08 vs Opus 5.5 xhigh $6.05라 “토큰당 단가 + 출력 토큰 증가(Fable max 출력 275M, 중앙값의 약 4배)”를 감안하면 방향은 그럴듯하나 **구독 보조금 비율은 비공개**. 댓글 합의: 플랜 수립·작업 후 교차 리뷰·오케스트레이터/어드바이저 전용. r/ClaudeAI에도 “Fable을 advisor로 쓰면 Fable 주간 한도를 건드리지 않는다”는 PSA(**개인 관찰**).
- 「프로계정 듀엣 받으면서 받은 초기화권 맥스로 올릴때 두장은 쓰고 올려」: Pro→Max 업그레이드 시 banked reset 3장 중 2장 소멸 후기 + “고객센터가 소멸 대상이라 답했다”는 댓글, 레딧 후기는 반반(**미확인**, Duet 리셋은 미국 대상).
- 「GPT와 클로드 결제일 사용량 팁」: GPT는 결제일 직전 $100 다운그레이드 → 결제일 100% 충전 → $200 업그레이드로 재충전(결제 주 약 2.5배), Claude는 업그레이드로 재충전되지 않지만 $110/$220 티어 간 주간 사용량을 공유하지 않는다는 주장. “반복하면 감시 대상” 댓글.
- **확인 일정:** Pro·Team 표준 좌석의 플랜 내 Fable 사용(주간 한도의 최대 50%)은 **11-16(미국)**까지(Claude 도움말), 이후 사용량 크레딧 과금.

### 6) 기타 국내

- **ChatGPT 계정 전환 UI**(「계정 전환이라는 거 생겼어!」) — 설정에서 다계정 추가·전환, 모바일 알림은 전 계정 수신(배포 범위 미확인).
- **ChatGPT Wallet**(TestingCatalog·@mark_k): 미국 Pro 대상 dots 결제, 카드 정보 비노출·결제 토큰·구매별 생체 승인, 장기적으로 한도 내 사전 승인 목표 — **OpenAI 공식 발표 없음**. 같은 브리프는 Antigravity Dynamic Workflows(`/run-workflow`가 서브에이전트 조율 Python 생성), GitHub Copilot의 Gemini 4 Hydrogen GA, Sesame Plus $20 출시도 전함(관찰 계정 종합, 각 항목 1차 확인 전).
- **그록 이매진 팀 해고**(AI타임스 ← 디 인포메이션): 약 60명 대부분 정리, 서비스 유지, 코딩·에이전트(Grok Bot) 집중. 1분기 월 20억 영상·약 100억 이미지 생성(SEC 신고서) — **보도 확인**.
- 「딥시크 이제 안쓸듯」: 워커를 Muse Ember로 이전 — 캐시 적중 $0.004·입력 $0.10·출력 $0.50(/1M), 200K 초과 시 3배, 약 400 tok/s, 병렬 16 제한(사용자 측정). AA상 36·작업당 $0.14, 가중치 비공개.
- 「본인 AI 개발(클로드)환경과 작업방식 업그레이드(v3.0)」: 중앙 집중형 멀티 에이전트(스웜 지양), 스펙 중심 + ATDD/Test-First + Mutation Testing + Risk-Based Testing, Windows·Linux 이중 검사 후 사람 확인 — “토큰을 더 써도 GB 단위 앱·게임에 맞는 구조”라는 자기 평가.
- **도구 선택 Q&A 두 건(의견):** 「코덱스 골수유전데… 궁금한거있음」(댓글 31)과 「아르곤 vs 아스트라 뭐가 좋냐」(26)에 모인 답을 요약하면 — Codex는 하네스가 좋아서 쓰고, Plus 사용자는 Codex 한도가 빡빡해 웹챗(‘웹쫀쿠’)으로 우회, $100 이상은 5시간 제한이 없어 사실상 3사 중 사용량 최대라는 주장; Gemini는 Carbon이 “센스 있게 일하지만 코딩은 약하다”, Argon은 “머리는 좋은데 손재주가 없다”, Carbon은 “머리도 손재주도 좋다”; Claude는 “설명 없이도 알잘딱”이라 비전공자에게 유리. 문서·대량 엑셀 정리는 GPT, 창작은 Gemini, 개발은 Claude라는 분업론이 다수였고, “Argon으로 아이디어·분석 → Astra로 실행”이라는 조합도 나왔습니다. 모두 체감이며 AA 숫자와 일부 어긋납니다(예: Carbon high 60 > Astra max 57).
- **구글 지도:** 11-13 협의체가 1:5,000 지도 반출 조건(한국 영토 경·위도 표시 제거, 업데이트 시 좌표 노출 감지되면 배포 차단하는 전용 제어 레이어, 국토지리정보원 보안처리 영상으로 교체, 보안시설 50m 스트리트뷰 삭제, 1영업일 내 조치) 이행 확인. 제휴사는 티맵(연합뉴스).

## 해외

### 1) Lovable 159,041개 프로젝트 감사 (확인 — Crissy Field, HN 1위 533점)

- Common Crawl에서 2025-12~2026-09 Lovable 프로젝트 159,041개 식별 → 34,545개가 Supabase 사용 → 24,664개가 첫 로드에 DB 레코드를 전송 → 같은 anon 키로 추가 **읽기 전용** 요청 시 **7,403곳(30%)·10,560개 테이블**에서 이메일 포함 레코드 접근.
- 사례: 독일 포럼 프로필 8만+·채팅 20만+, 여권 번호 1,000+, 티켓·결제 수만 건, 이메일 28만 통, AI 요약된 내부 메일.
- 저자 단서: 30%는 확정 유출률이 아님(공개 연락처·테스트 데이터 포함 가능, 이메일 없는 개인정보는 누락). 핵심 원인은 **[[RLS|Row Level Security. 데이터베이스 행마다 ‘누가 읽을 수 있는지’를 정하는 규칙. 꺼져 있으면 공개 키만으로 표를 읽을 수 있음]]** 설정 누락 같은 반복 패턴이고, “패턴이 같아 한 번 통한 공격이 다른 앱에도 통한다”는 점이 AI 빌더 고유 위험이라고 지적.

### 2) 비영어 추론의 에너지 격차 (연구 확인 — U-M, EMNLP 2026)

- Qwen 3·Gemma 3·Llama 3.1, Belebele(122개 언어 독해) + 번역한 수학·개방형 프롬프트. 비영어는 **1.4~180배** 에너지, 서유럽어는 대체로 2배 이하, 힌디 7.9배·벵골 15.3배. 모델 크기·하드웨어를 바꿔도 격차 유지.
- 메커니즘: 토큰 수 증가 → KV 메모리 점유 증가 → **배치 크기 축소로 토큰당 에너지 추가 상승**(복리 효과). 고에너지 언어일수록 정확도도 낮은 경향. 권고: 언어 특화 라우팅, 신뢰할 만한 번역 파이프라인.
- 한국어 수치는 보도자료에 별도 표기 없음. 실무 함의: 토큰 과금 API에서 **긴 시스템 프롬프트·도구 설명은 영어로, 출력만 한국어로**가 비용·컨텍스트 양쪽에 유리할 수 있음(언어별 토크나이저 효율은 모델마다 다르니 직접 측정 권장).

### 3) Google Research — Antigravity /teamwork (벤더 발표)

- 설계 원리 두 가지: ① 병렬 탐색 + **전용 반증기(falsifier)**(Lean 4 증명 검사, 수정하지 않은 테스트 스위트, 시뮬레이터, 하드웨어 카운터)로 후보 자동 검증, ② **컨텍스트 분할** — 각 에이전트에 필요한 파일·도구만, 코디네이터가 새 후임에게 인계, 비평·감사 에이전트는 생산자의 추론 없이 깨끗한 컨텍스트에서 검증.
- 결과(구글 주장): Courtade–Kumar 추측(2013) 일반형 증명·Lean 5천만 줄, Weil 추측 Lean 형식화 약 180만 줄(서브에이전트 28,800회), Zircon 마이크로커널 잔여 C++ → safe Rust 약 80만 줄(arm64 부팅), libgav1 Rust 포팅이 원본 대비 20~30% 빠름, 9x9 바둑 엔진 8일 +2,600 Elo, Borg 스케줄링으로 일부 TPU 선점 24%↓. `/boost`는 강결합 코드엔 병렬 분할보다 순차 구현·수정이 낫다는 궤적 분석을 반영.
- 외부 공개: /teamwork·/boost·Deep Review 사용 가능, 학계 1만 명 최고 등급 6개월 무료 신청. **같은 주에 서드파티 OAuth를 막고 공식 표면의 하네스를 키우는 것** — 전략적으로 일관된 그림입니다.

### 4) 기타 해외

- **채용 공고 집계(r/ClaudeAI, 작성사 자체 데이터):** AI 빌더 공고 내 Claude 언급 1월 37% → 10월 61%, OpenAI 83% → 63%(오차 범위 동률), 회사 수는 OpenAI 1,802 vs Claude 1,576(OpenAI의 약 1/4은 Azure OpenAI). 200인 미만은 Claude 우세, 1만 명 이상은 OpenAI 42% vs 7.7%. AI 코딩 채용 5,635곳 중 Claude Code 4,522, Cursor 2,765, Copilot 2,566(**방법론 미검증**).
- **로컬:** tandem.cpp 업데이트 — DeepSeek-V4.1을 64GB RAM + 16GB GPU PC에서, ROCm 지원 추가(개발자 주장). RustingStrata는 Flint 40B를 12GB 카드에서 64 tok/s(llama.cpp 대비 1.3배), Leech 격자 양자화로 Qwen3 4B~14B를 약 2.7bpw에서 IQ2_S보다 품질 우위(속도는 열세). RTX 5090 Laptop 24GB·64GB RAM 기준이면 tandem.cpp 계열 CPU-GPU 분할 실행이 가장 직접적인 실험 대상.
- **보안:** IBM이 문서 속 숨은 지시(간접 프롬프트 인젝션)를 무시하도록 훈련한 소형 공개 모델 2종(LocalLLaMA 공유), Google Project Zero는 보고 후 90일 공개 정책을 재정리(HN).
- **담론:** 「Hot take: frontier models haven’t actually become much smarter」, 「Finally clicked for me: local AI is the future」 — 같은 날 상위권. Microsoft의 ‘유휴 게이밍 GPU를 유료 학습 하드웨어로’ 특허도 화제.

## 목적별 모델 고르기 — 11-15 재확인 (보드 변경 없음)

- **확인(벤치, [AA](https://artificialanalysis.ai/leaderboards/models) 11-15 07시대 페이지 데이터):** Fable 5.2 max 65·$26.54·44.3분, Carbon high 60·$5.48, Opus 5.5 max 59·$10.04, Astra max 57·$6.24, **Sol max 55·$1.27**, Sonnet 5.5 max 55·$10.02, Hydrogen xhigh 54·$3.16, Terra max 51·$0.96, Argon high 50·$4.97, Muse Ember 36·$0.14, DeepSeek V4.1 Flash 1017 33·$0.60. 전부 11-14 보드와 동일 → [/models/](/models/) 목적 셀(가성비 Sol max, 최고 Fable 5.2 max, Claude 가성비 Fable medium) 유지.
- **미반영:** GPT-6.2·Gemini 4 Krypton(미출시), AA 하단의 Ling 3.1 Flash 1019(30·$3.19)는 오픈웨이트 셀 후보(DeepSeek V4.1 Flash 33·$0.60) 대비 열위라 추가하지 않음.
- **미확인(커뮤니티):** “Fable은 한도 2.5~3배 소모”(개인 측정, 방향은 AA 비용 구조와 부합), “Hydrogen = Terra급”(AA상 Hydrogen xhigh 54 > Terra max 51이지만 작업당 비용 3.3배), “Krypton = Fable 대항마”(근거 없음).

## 의미 — 그리고 바꾸지 말 것

- **구독 = 표면 종속 라이선스.** Google은 결제 경로(정가/우회)가 아니라 접근 표면으로 선을 그었고, 정지는 서비스 단위·이의 1회·재위반 영구라는 운영 규칙까지 공개했습니다. 서드파티 하네스가 필요하면 API 키 비용으로 재견적하는 것이 정석입니다.
- **AI 빌더의 실패 모드는 ‘반복되는 기본값’.** Lovable 감사의 핵심은 개별 실수보다 같은 RLS 누락 패턴이 수천 개 앱에 복제된다는 점입니다.
- **바꾸지 말 것 1:** 공식 표면만 쓰는 Antigravity/Gemini 구독은 그대로 두세요. 이번 조치의 대상이 아닙니다.
- **바꾸지 말 것 2:** 6.2 라우팅·Krypton 소문으로 모델 라우팅·요금제를 바꾸지 마세요. 보드 숫자는 하루 새 변동이 없습니다.
- **바꾸지 말 것 3:** Fable을 기본 구현 모델로 올리지 마세요. 계획·리뷰·어드바이저 위치가 한도 대비 효율이 높다는 데 국내외 체감이 일치합니다.

## 시도 후보

1. **OAuth 그랜트 감사:** myaccount.google.com/permissions에서 Antigravity/Gemini CLI 그랜트를 가진 서드파티 앱 철회 → 하네스는 `GEMINI_API_KEY`로 재구성하고 일주일 비용을 측정.
2. **언어별 토큰 측정:** 쓰는 모델의 토크나이저로 같은 시스템 프롬프트를 한국어·영어로 세어 보고, 긴 지시문을 영어로 바꿨을 때 입력 토큰·지연이 얼마나 줄어드는지 기록.
3. **Supabase/RLS 점검:** AI 빌더로 만든 앱에서 anon 키로 각 테이블 `select`가 막히는지 확인(시크릿 창 + 브라우저 개발자 도구 네트워크 탭).
4. **Fable 마감 전 배치:** 11-16(미국)까지 Pro 사용자는 계획·아키텍처 리뷰·회귀 원인 분석처럼 고레버리지 작업만 Fable에 몰아 넣기.
5. **로컬 실험:** 24GB VRAM·64GB RAM 환경이면 tandem.cpp의 CPU-GPU 분할로 DeepSeek-V4.1을 돌려 tok/s와 품질을 클라우드 Flash 계열과 비교.

## 소스 범위

국내: chatgpt·ai_utilize 개념/추천·고조회 + 11-14 19:40~11-15 07:46 신규(자동 후보 60, 추가 목록 ~730편, 본문·댓글 38편). 해외: 레딧 RSS 2/8(LocalLLaMA·ClaudeAI), HN 1면 30, [Antigravity 약관](https://antigravity.google/terms/), [포럼 — oauth-personal 범위](https://discuss.ai.google.dev/t/supported-gemini-subscription-access-for-a-third-party-vs-code-extension/189889/3), [포럼 — antigravity-acp 예외](https://discuss.ai.google.dev/t/tos-clarification-dsh-antigravity-acp/199574/2), [포럼 — 이의 신청 1회](https://discuss.ai.google.dev/t/antigravity-access-disabled-after-using-opencode-requesting-manual-review/199661), [CLIProxyAPI #7296](https://github.com/router-for-me/CLIProxyAPI/issues/7296), [OmniRoute #19266](https://github.com/cheaper-inference/OmniRoute/issues/19266), [연합뉴스 — 머무르](https://www.yna.co.kr/view/AKR20261113157000005), [한겨레](https://www.hani.co.kr/arti/culture/music/1287281.html), [뉴시스(파이낸셜뉴스)](https://www.fnnews.com/news/202611150730270589), [산업통상부 참고자료 — 구글 지도](https://www.motir.go.kr/kor/article/ATCL3f49a5a8c/172405/view), [Crissy Field — Lovable](https://www.crissyfield.de/research/lovable-en/), [U-M — Language-Energy Divide](https://news.umich.edu/generative-ai-uses-more-energy-on-non-english-text/), [Google Research — /teamwork](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/), [r/ClaudeAI 채용 집계](https://www.reddit.com/r/ClaudeAI/comments/1xwe6q9/claude_went_from_37_to_61_of_aibuilder_job/), [r/LocalLLaMA tandem.cpp](https://www.reddit.com/r/LocalLLaMA/comments/1xwan2j/update_tandemcpp_deepseekv41_on_a_64_gb_pc_with_a/), [AA 리더보드](https://artificialanalysis.ai/leaderboards/models). 확인/미확인 표기는 본문 기준.

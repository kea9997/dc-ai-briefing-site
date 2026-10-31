---
title: "한도는 계정이 아니라 기기에 붙는다 — 다계정 봉쇄·리셋권·12월 공유 한도가 한 주에 겹친 계산"
date: 2026-11-01
level: advanced
description: "오픈AI는 ‘계정 수로 한도 늘리기’를 기기 단위로 끊고, 남는 수요를 크레딧과 리셋권으로 받기 시작했다. 같은 날 해외에선 공유 링크 하나로 세션이 털리는 체인이 공개됐다."
tags: ["daily","advanced","ChatGPT","device-limit","usage-limits","Codex","credits","Claude-Ultra","security","prompt-injection","infostealer","local-LLM"]
---

> **오늘 수집 안내:** 국내 자동 수집 **정상**(서울 11-01 07:55, 후보 60, 오류 0 — ChatGPT 갤러리 개념글 25·인기 24·목록 24, AI 활용 갤러리 개념글 28·인기 27·목록 27). 본문·댓글 30여 개 직접 열람. 해외: 레딧 RSS 2/8 — r/LocalLLaMA 15·r/Bard 1 **OK**, r/ChatGPT·r/OpenAI·r/ClaudeAI·r/codex·r/MachineLearning·r/singularity **429(old.reddit 재시도도 302 차단)**. 공백은 해커뉴스 최근 36시간 상위 40개와 1차 문서·보도로 메웠습니다. 10-31에 다룬 Ultra 개명·변조 확장 사건은 새 사실만 덧붙입니다.

## 오늘 핵심 세 가지

1. **오픈AI가 ‘다계정으로 한도 늘리기’를 기기 단위로 차단한다고 문서화했습니다(확인).** 도움말 「Understanding card and device limits in ChatGPT」: 한 기기의 유료 계정 수 상한(숫자 비공개), 카드당 구독 수 상한, 사후 점검 로그아웃 가능, 대안은 크레딧·리셋. Free와 Business/Enterprise/Edu 워크스페이스는 카운트 제외.
2. **수요는 ‘계정’이 아니라 ‘크레딧·리셋권’으로 유도되는 중입니다(문서 확인 / 배포 기준 미확인).** 같은 새벽 리셋권 수령 인증이 대량으로 올라왔고, 아침엔 “채팅도 Codex 한도를 쓴다”는 해석이 퍼졌지만 현행 도움말상 **Work+Codex만 공유, Chat 모델별 한도는 별도**입니다. “12월부터 ChatGPT 전체+Codex 단일 한도”는 결제 화면 문구 보도뿐(미확인).
3. **보안 축: 공유 링크 → HTML Preview → 서드파티 수학 라이브러리의 postMessage 리스너로 이어지는 ChatGPT 세션 탈취 체인(확인, 10-26 수정·P1)**, 그리고 LLM을 ‘피해자 감정사’로 쓰는 인포스틸러 VOLTA(확인, Talos). 기능 조합이 경계를 뚫는다는 같은 교훈입니다.

## 국내 커뮤니티에서 오늘 많이 나온 이야기

### 1) 「다계정 금지」 — 기기 한도 도움말 (문서 확인 / 집행 강도 미확인)

AI 활용 갤러리 10-31 23시대 글(조회 약 2,700·추천 29·댓글 26)이 출발점입니다. 원문을 직접 대조한 요점:

- **대상 요금제:** Go, Plus, Pro 100, Pro 200, Pro 500. **제외:** Free, Business·Enterprise·Edu 워크스페이스 좌석.
- **두 가지 제한이 따로 존재:** (a) 카드·기기당 **구독 구매** 상한 — 결제 단계에서 “Too many subscriptions associated with this card or device”, (b) 한 기기에서 **사용 가능한 유료 계정 수** 상한 — “Device limit reached”.
- **사후 집행:** “처음엔 작동했어도 이후 점검에서 로그아웃될 수 있다.” 로그아웃한다고 다른 유료 계정이 자격을 얻는 것도 아님.
- **우회 경로 차단 문구:** 크레딧은 “구독을 합치거나 계정 간 사용량을 옮기지 않는다.” 크레딧·리셋 구매로 기기 제한이 풀리지도 않음.
- **계정 전환과 별개:** 도움말은 기기 한도와 **계정 전환 한도**를 구분합니다. 모바일 계정 전환 출시(오픈AI 쪽 28일 이벤트 Day 26)와 모순이라는 반응이 많았지만, 문서상으로는 “전환 UI는 제공하되, 유료 계정 다수 운용은 기기 단위로 세겠다”로 읽힙니다.

**커뮤니티 축:** “제한 수가 몇 개?”(비공개), “클로드로 가라고 등 떠민다”, “결국 비즈니스 좌석을 쓰라는 것”. 후속 글 「다계정이 당연한 줄 아는 사람들은 절대 크레딧 안 사냐」(조회 약 2,000·추천 22)에선 ‘Plus 여러 개 = 싸게 Pro 흉내’라는 오래된 관행에 대한 찬반이 맞섰습니다.

**실무 판단(해석):** 워크스페이스 좌석이 카운트에서 빠진다는 점이 핵심입니다. 개인이 Plus를 2~3개 돌리던 패턴은 “Pro 단일 계정 + 크레딧” 또는 “Business Standard 좌석 + 개인 Plus”로 재편될 압력을 받습니다. 공유 기기(가족 PC·사무실 공용 PC)에서 오탐이 날 수 있다는 점은 도움말도 인정하고 지원 요청 경로를 적어 두었습니다.

### 2) 리셋권 새벽 배포, 그리고 아침의 ‘한도 통합’ 소동 (일부 확인 / 일부 미확인)

- **리셋권:** ChatGPT 갤러리 05:00~06:30 사이 “초기화권 받았다” 인증 글이 연속으로 올라왔습니다. 오픈AI 쪽 28일 이벤트 막바지의 “이틀간 [[적립 리셋|한도 소진 시 바로 다시 채우는 권리를 미리 쌓아 두는 것]]” 예고와 시점이 맞습니다. Plus 수령 인증도 있고 미수령 글도 있어 **지급 기준은 미확인**입니다.
- **Chat/Work 한도:** 07:16~07:55 AI 활용 갤러리에 「미디엄부터 한도 쓴다는 예상 맞았네」, 「5시간 한도동안 챗에서 6.1솔 몇 번?」, 「크레딧 팔이 본격」, 「한도 절반으로 줄여도 되니 챗만 가져가지 마세요」가 몰렸습니다. 근거는 [Business 모델·한도 도움말](https://help.openai.com/en/articles/12003714-chatgpt-business-models-and-limits)의 Standard 좌석 5시간 추정치(GPT-6 Astra 5–45, GPT-6.1 Sol·GPT-6 Sol 15–150, GPT-6.1 Terra 35–285)였는데, 원문은 이 표가 **Work·Codex의 ‘로컬 메시지’ 추정**이라고 명시합니다. 같은 문서는 “Premium 좌석은 Work·Codex 포함량이 더 크지만 **개별 ChatGPT 모델 한도는 별도**”라고 적습니다. 즉 현 시점 문서로는 “채팅 Medium 이상이 Codex 한도를 깎는다”는 **근거가 없습니다**.
- **12월 단일 한도:** TokenPost 등은 웹 결제 화면에 “12월부터 ChatGPT와 Codex가 플랜 사용량을 공유”라는 문구가 있다고 보도했습니다. 날짜·배분·Pro Chat 한도 처리 모두 미기재, 공식 발표 없음 → **미확인**. 댓글의 “일부 Pro에 통합 테스트 중 2배 안내 메일”(X 링크) 역시 미확인.
- **참고 수치(확인):** Plus는 [Astra 사용량 도움말](https://help.openai.com/en/articles/20001516-managing-usage-with-gpt-6-astra-in-work-and-codex) 기준 Work·Codex 5시간 추정 GPT-6.1 Sol 15–160, Astra 5–45. Pro 100/200/500은 Work·Codex에 5시간 한도가 없고 주간 포함량만 있습니다. 도움말은 “Astra Low가 Sol High를 이길 수 있다”, “높은 추론 단계가 항상 더 좋진 않다”고도 적습니다.

### 3) 구독 ‘API 환산 가치’ 비교 (미확인 — 개인 측정 + 외부 차트)

AI 활용 갤러리 글(조회 약 2,400·추천 21·댓글 35)의 작성자 측정: GPT Pro 200으로 6.1 Sol 사용 시 월 약 **$4,168** 상당, Claude 5배 요금제(현 Max)로 Opus 사용 시 약 **$5,725**, Astra만 쓰면 약 $5,200. 작성자는 “Opus가 Astra보다 단가가 2.5배 싸게 먹힌다”고 주장합니다. 반박 글은 비교 차트가 SemiAnalysis 뉴스레터에서 왔다고 출처를 짚었고, 댓글엔 “Claude Pro 5시간=주간의 10%, GPT Plus=16%” 계산도 나왔습니다.

**읽는 법:** 이런 환산은 (1) 캐시 적중률, (2) 긴 컨텍스트 재전송 비중, (3) 로컬 vs 클라우드 작업, (4) 추론 단계에 따라 몇 배씩 흔들립니다. 그리고 오늘부터는 “계정 여러 개로 곱하기”가 문서상 막혔으니, **단일 계정 기준 환산**만 의미가 있습니다. 숫자 자체는 재현 전까지 미확인으로 둡니다.

### 4) Claude Ultra 표기와 공정위 신고 (미확인 — 개인 신고)

「클로드 공정위에 신고함」(조회 약 2,500·추천 38)과 신고서 양식 글(조회 약 3,300·추천 48). 논지는 기존 Max 20x가 “Pro의 20배(Save 50%)”로 판매됐는데 10-30 개편 후 “주간 Pro의 10배”로 보인다는 것. 양식은 표시광고법 제3조와 Anthropic의 국내 통신판매업 신고번호를 인용합니다. “미국 소송 진행 중”, “OpenAI는 크레딧으로 보상했다(62,500크레딧≈$2,500)” 같은 댓글은 **출처 미확인**.

**확인된 사실(10-30 미국 발표, 10-31 보도):** Max 5x→Max($100), Max 20x→Ultra($200), 인증 Ultra는 5시간 한도 제거, 주간 한도는 Pro의 10배 유지(신규 계정은 임시 한도). 20배→10배가 ‘축소’인지 ‘5시간 축 제거에 따른 재표기’인지가 쟁점이며, 결론은 공식 답변이 나와야 갈립니다.

### 5) SK하이닉스 AI 해커톤 2차 예선 서버 장애 (일정 확인 / 중단·재응시 미확인)

[공식 페이지](https://skhynix-hackathon.com/ai-2026): 2차 예선 10/31~11/1 중 하루, 온라인 “AI Native 역량 검증”, 본선 11/11 코엑스(확인). 9월 보도 기준 평가 도구로 OpenAI가 파트너로 참여한 크래프톤의 Cofa-Probe 등이 쓰입니다(확인). 31일 AI 활용 갤러리 「예선 중단」(조회 약 3,700)·「재응시 고려」 등 다수. 응시자 블로그(velog)는 “40~50초마다 튕김, 502·503”, “사과문 수신, 재시험 대상자 취합 후 안내 예정”이라고 적었습니다. **주최 측 공개 공지는 찾지 못해 미확인.** 1차 예선(10/17~18) 때 GPT-5.2 제공·서버 끊김 논란은 [한겨레](https://www.hani.co.kr/arti/economy/it/1283118.html)가 보도했습니다(확인). “AI 역량 평가 플랫폼이 동시 접속 부하를 못 버틴다”는 점은 기업 채용형 AI 평가 전반의 리스크로 볼 만합니다.

### 6) 짧게 (미확인)

- **헤징 피로:** 「그놈의 다만」 — 공유된 맞춤 지시문 핵심: 습관적 ‘다만/그러나/한편’ 금지, 묻지 않은 주의사항 금지, 답하고 멈출 것. 10-28부터 이어지는 GPT 6.x 계열 말투 불만의 연장선.
- **이미지 오탐 줄이기:** 메모리 끄기, 새 대화, 병렬 생성 금지, 맞춤 지시문 점검. 11-01 오전부터 이미지 화질 저하 체감 글, “이 대화는 읽기 전용” 오류 글 — 원인 미확인.
- **업무 자동화:** 엑셀 사양서 → 파이썬 변환, 카페24 반복 작업 자동화 후기.
- **사용량 % 논쟁:** “2배 이벤트면 34%가 68%로 보여야 하나” — 분모(포함량)가 바뀌는지 분자가 바뀌는지에 따라 달라지는 표시 문제로, 공식 설명 없음.
- 갤러리 뷰어를 유튜브 스타일로 바꾸는 사용자 테마(추천 30), ChatGPT 갤러리 4주년 AI 활용 대회(11/1~29) 공지.

## 해외 커뮤니티·보도에서 오늘 많이 나온 이야기

### 1) “Do the Math” — 공유 링크로 ChatGPT 계정 탈취 (확인 — 연구팀 공개, 10-26 수정, P1)

[Parameter](https://www.parameter.ai/labs/we-found-a-gap-at-openai) 10-28 공개, 해커뉴스 293점. 체인:

1. 공격자가 HTML 코드 블록과 인터랙티브 그래프가 함께 든 대화를 만들고 **공개 공유**.
2. 그래프가 MathLive(수식 입력 라이브러리)를 로드하면서 **메인 chatgpt.com 페이지에 postMessage 리스너**를 설치.
3. 별도 오리진에 격리된 **HTML Preview** 프레임이 `top.postMessage`로 가상 키보드 레이아웃을 HTML 마크업으로 바꾸라는 메시지를 보냄 — 리스너가 **발신 오리진을 검증하지 않음**.
4. 키보드 표시 메시지로 그 마크업이 메인 페이지에서 렌더 → 피해자 세션에서 JS 실행, 대화 목록 열거·비공개 대화 유출·인증 API 호출.

피해자 행동은 **링크 열기 하나**. 수정 완료라 지금 조치는 불필요하지만, 시사점은 분명합니다: 샌드박스 프레임 자체는 견고해도, **부모 페이지에 올라온 서드파티 위젯의 메시지 핸들러**가 출입구가 됩니다. 사내에서 LLM 출력 렌더러(아티팩트·미리보기)를 만든다면 postMessage 수신부의 `event.origin` 검증과 렌더 가능한 HTML 범위를 점검할 이유입니다.

### 2) VOLTA — LLM을 ‘피해자 감정사’로 쓰는 인포스틸러 (확인 — Cisco Talos 10-31)

[Talos 분석](https://blog.talosintelligence.com/appraisal-by-ai-model-driven-victim-prioritization-in-the-volta-infostealer/): 자가 삭제형 윈도 인포스틸러가 브라우저 비밀번호·쿠키·카드·지갑 시드·각종 세션 토큰·SSH/클라우드 키를 훔친 뒤, 훔친 Gmail 세션으로 영수증을 뒤져 주소를 보강하는 등 **증거 묶음**을 만들고 OpenRouter로 보내 “WHAT THEY'RE WORTH(무엇이 돈이 되나)”와 “THEIR OPSEC(보안 습관)” 섹션이 있는 표적 평가서를 받습니다. 기본 모델은 하드코딩된 `anthropic/claude-opus-4.6`, 거절 문구(“I can't” 등)를 감지하면 Kimi K2 → Gemini 2.5 Flash 순으로 폴백, temperature 0.2. 공격자 소유 인프라 없이 남의 API 게이트웨이를 씁니다.

**의미:** 가드레일 거절은 “막는 것”이 아니라 **폴백 체인으로 우회되는 지연 요인**이 됐습니다. 방어 측에선 세션 토큰 수명 단축과 하드웨어 키 사용이 여전히 가장 큰 레버입니다.

### 3) Claude 거절 범위 확대 논란 (보도 확인 / 회사 입장 없음 / 개별 사례 미확인)

10-31의 “Claude Code 게임 재현 금지” 후속. [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropics-ai-model-is-now-blocking-attempts-at-video-game-recreation-and-cloning-users-also-claim-non-malicious-generic-reverse-engineering-tasks-are-blocked)는 크래시 덤프 분석, TV 정크웨어 정리, 자사 게임 안티치트 개발·보안 리뷰까지 거절됐다는 사용자 주장을 모으고, 10-06 시행된 Cyber Verification Program(고급 사이버 역량을 Project Glasswing 대상 기관으로 제한)과 같은 규칙셋일 가능성을 제기했습니다. Anthropic 공식 입장은 없다고 명시. Mashable도 같은 흐름을 보도했습니다.

같은 날 r/LocalLLaMA 상위·HN 108점: 한 연구자가 “Claude를 증류하지 않았고 오픈소스 모델 롤아웃을 썼는데 ‘경쟁 모델 학습’으로 태깅돼 RFT·SFT·대형 모델 학습 관련 작업이 전부 막혔다”고 X에 썼습니다(**미확인 — 당사자 주장**). 10-30 보도된 증류 의혹 이후 탐지 기준이 넓어졌다는 해석이 붙지만 근거는 없습니다.

**실무:** 역분석·보안·학습 파이프라인 작업이 많은 팀은 Claude 단일 의존을 줄이고, 거절 시 GPT·오픈 웨이트로 넘기는 경로를 미리 문서화해 두는 게 안전합니다(해석).

### 4) 그 밖의 해외 상위 (확인/미확인 표기)

- **Cisco가 27세 엔지니어에게 ‘무제한 AI 토큰’을 주고 레거시 코드 재작성** — Fortune 보도, HN 299점·댓글 367(제목·요지 기준, 세부 미확인). 신입 일자리 논쟁으로 번짐.
- **Karpathy ‘HackerTube’** — HN에서 추천된 영상만 모은 유튜브식 페이지(확인, 개인 프로젝트).
- **Prospero** — nullprogram의 새 코딩 하네스 글, HN 177점(확인).
- **“GPT-5.6 Sol이 Factorio 평화 모드를 깼다”** — 개인 블로그 실험, HN 140점(미확인).
- **LLM 인 LLM** — Qwen 3.5-4B 가중치 안에 NPU를 컴파일해 Karpathy stories260k를 돌렸다는 r/LocalLLaMA 글(미확인, 재미 실험).

### 5) 로컬 AI (커뮤니티 측정 — 미확인)

- **Qwen 3.8 Flash Next on RTX 3060 12GB + DDR4 16GB:** “Betelgeuse” 엔진으로 초당 22토큰 지속(최대 48), IQ4_XS·전문가 드롭 0·비트 일치 주장. 2×8GB DDR4 듀얼 채널 24 tok/s, 단일 16GB 14 tok/s — **메모리 채널 수가 MoE 오프로딩 속도를 좌우**한다는 데이터 포인트.
- **같은 모델 2×RTX 5090 디코드 504 tok/s**(QEngine 1.3.1, 차선책 대비 1.5~1.9배 주장).
- **DeepSeek V4.1 Flash on 2×DGX Spark + 3090:** 256K까지 프리필 2,600+ tok/s, 구조화 출력 322 tok/s, 원자료 공개.
- **“엔진이 모델을 뇌절제하고 있나?”** — 추론 엔진별 품질 손실 측정 글. 양자화·샘플러 기본값 차이를 의심하라는 결론.
- Koboldcpp v1.124 출시, Hugging Face에 microsoft/Mage-VL-Cowork 공개, “AI 붐에 PCB까지 품귀, 2030년까지 주문 마감” 보도 공유.

**기준 기기(RTX 5090 노트북 24GB·RAM 64GB) 관점:** Qwen 3.8 Flash Next급 MoE는 VRAM 24GB + 듀얼 채널 DDR5로 위 3060 사례보다 넉넉할 것으로 보이나 직접 측정치는 없습니다. 바꿀 필요는 없고, 엔진 비교 글의 측정 방법만 참고할 만합니다.

## 목적별 모델 고르기 — 점수 고정, 바뀐 건 ‘계정 경제학’

서울 11-01 07:59 [AA 리더보드](https://artificialanalysis.ai/leaderboards/models) 재확인: Gemini 4 Carbon 59·$7.76, Opus 5.5 max 58·$10.04, Astra max 57·$6.24, 6.1 Sol max 55·$1.27, 6.1 Terra max 51·$0.96, Fable 5.1 xhigh 50·$10.85 — **10-31과 동일**. [모델 보드](/models/)는 갱신하지 않았습니다. 기준: [AA Intelligence Index v5](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5)(10-28 이전과 비교 불가).

| 목적 | 가장 좋음 | 가성비 | 가장 쌈 |
|---|---|---|---|
| 코딩·에이전트 | Claude Opus 5.5 max (58·$10.04) | GPT-6.1 Sol max (55·$1.27) | GPT-6.1 Terra medium (38·$0.17) |
| 글쓰기·긴 추론 | Claude Opus 5.5 max (58) | GPT-6.1 Sol max (55) | GPT-6.1 Terra low (29·$0.07) |
| 오픈 웨이트 | DeepSeek V4.1 Flash 1017 (32·$0.60) | MiMo-V2.6-Pro (30·$0.26) | — |

- **확인(AA 벤치):** 칸 추천 불변. Carbon은 일부 기관 한정이라 제외 유지. 같은 점수대에서 Astra high(55·$3.24)가 xhigh(55·$3.66)보다 쌈.
- **확인(문서):** 오픈AI 쪽은 Work·Codex 공유 포함량 + 크레딧, 기기 한도로 다계정 차단. Claude 쪽은 Ultra(인증) 5시간 한도 없음·주간 Pro 10배.
- **미확인(커뮤니티 해석):** “다계정이 막히면 Claude Max/Ultra가 본전이 크다”는 환산(위 3번)은 개인 측정. 표의 작업당 비용은 **API 기준**이라 구독 체감 한도와 일대일로 대응하지 않습니다. 다계정을 쓰던 사용자라면 가성비 칸(Sol)이 단일 계정에서 더 중요해집니다 — 같은 포함량으로 더 많은 작업을 돌릴 수 있어서입니다.
- **주목:** 보드 메모 기준 Kimi K3.1 Pro 가중치가 11-04까지 공개 예정 — 공개되면 오픈 웨이트 칸 재검토 대상.

## 오늘 소식이 뜻하는 것, 그리고 바꾸지 말 것

- **뜻하는 것:** 소비자 요금제의 병목이 ‘모델 성능’에서 **‘포함량을 어떻게 사고파는가’**로 옮겨 왔습니다. 오픈AI는 기기 한도(공급 차단) + 리셋권(이벤트성 공급) + 크레딧(유상 공급) + 12월 단일 한도 문구(통합 예고, 미확인)를 동시에 움직이고 있고, Anthropic은 5시간 축을 없애고 주간 축으로 일원화했습니다. 두 회사 모두 “주간 포함량 + 유상 추가분” 구조로 수렴 중입니다(해석).
- **보안 쪽:** 공유 링크 탈취와 VOLTA는 “AI 기능·AI API가 공격 표면이자 공격 도구”라는 같은 축입니다. 거절 정책은 공격자의 폴백 체인으로 쉽게 우회되고, 반대로 정당한 보안·역분석 사용자는 거절당하는 비대칭이 커지고 있습니다(Tom's Hardware 사례).
- **바꾸지 말 것:** 12월 통합은 공식 발표 전이니 지금 구독 구조를 갈아엎지 마세요. 기기 한도 숫자도 비공개라, “몇 개까지 괜찮다”는 커뮤니티 수치에 기대지 마세요. 모델 보드 추천도 그대로입니다.

## 오늘 해 볼 만한 것

1. **계정 구조 점검:** 한 기기에 유료 개인 계정이 2개 이상이면 주 작업을 하나로 모으고, 팀이라면 Business 좌석(카운트 제외)으로 옮길지 비용을 계산해 보세요.
2. **한도 예산 실험:** Work·Codex에서 같은 작업을 Sol high / Astra low로 각각 돌려 사용량(%) 차이를 기록하세요. 도움말이 직접 권하는 비교입니다.
3. **렌더러 보안 체크(개발자):** LLM 출력·HTML 미리보기를 띄우는 내부 도구가 있다면 부모 페이지의 `message` 이벤트 리스너를 전수 조사하고 `event.origin` 검증을 확인하세요.
4. **거절 대비 라우팅:** 역분석·보안·학습 데이터 작업이 Claude에서 거절되면 GPT 또는 DeepSeek V4.1 Flash 등으로 넘기는 절차를 팀 문서에 한 줄 넣어 두세요.
5. **헤징 억제 지시문 A/B:** 위 「그놈의 다만」 지시문을 하루 켜 두고, 답 길이와 놓친 경고가 있는지 비교하세요.

## 소스 범위

- **국내:** ChatGPT 갤러리·AI 활용 갤러리 개념글·인기·목록 후보 60개(서울 11-01 07:55), 본문·댓글 30여 개 열람. 성인물·광고·욕설 제외, 인용은 순화.
- **공식 문서:** [카드·기기 한도](https://help.openai.com/en/articles/20001559-understanding-card-and-device-limits-in-chatgpt), [Business 모델·한도](https://help.openai.com/en/articles/12003714-chatgpt-business-models-and-limits), [Work와 Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex), [Astra 사용량 관리](https://help.openai.com/en/articles/20001516-managing-usage-with-gpt-6-astra-in-work-and-codex), [SK하이닉스 AI 해커톤 2026](https://skhynix-hackathon.com/ai-2026).
- **보도·분석:** [Parameter](https://www.parameter.ai/labs/we-found-a-gap-at-openai), [Cisco Talos](https://blog.talosintelligence.com/appraisal-by-ai-model-driven-victim-prioritization-in-the-volta-infostealer/), [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropics-ai-model-is-now-blocking-attempts-at-video-game-recreation-and-cloning-users-also-claim-non-malicious-generic-reverse-engineering-tasks-are-blocked), [TokenPost — 12월 공유 한도 문구](https://www.tokenpost.com/news/technology/44356), [한겨레 — 해커톤 1차 예선](https://www.hani.co.kr/arti/economy/it/1283118.html).
- **해외 커뮤니티:** 레딧 r/LocalLLaMA·r/Bard(6곳 429), 해커뉴스 최근 36시간 상위 40개.
- **모델 수치:** [AA 리더보드](https://artificialanalysis.ai/leaderboards/models) 서울 11-01 07:59 확인, 10-31 대비 변동 없음.

---
title: "시험지를 비공개로 바꾸자 공개 모델과의 격차가 네 배로 벌어졌다 — 같은 밤, Chat과 Work의 경계도 지워졌다"
date: 2026-10-29
level: advanced
description: "벤치마크는 외워서 풀기 어려워졌고, UI는 모드를 숨기기 시작했다. 둘 다 ‘지금 무엇이 얼마를 쓰고 있는지’를 사용자가 직접 재야 하는 방향이다."
tags: ["daily","advanced","AA-v5","Gemini-4-Carbon","FrontierCode","Chat-Work-merge","Pro-200","API-credits","Cathedral","Alphabet-Q3","Nemotron-Transcribe"]
---

> **오늘 수집 안내:** 국내 자동 수집 **정상**(서울 07:53, 후보 59, 오류 0 — ChatGPT 갤러리 전체 24·개념 25, AI 활용 갤러리 전체 26·개념 27). 추가로 두 갤러리 목록 1~15쪽(고유 글 약 890개)을 훑고 본문·댓글 40여 개를 직접 읽었습니다. 해외: 레딧 r/LocalLLaMA·r/singularity·r/ChatGPT(재시도 후) **OK** / r/OpenAI·r/ClaudeAI·r/MachineLearning·r/codex·r/Bard **429**(2회 재시도 실패) — 3/8. Hacker News(Firebase API) 상위권, Google·AA·OpenAI·NVIDIA·Surge 원문, WaPo·CNBC·로이터 보도 교차. 수치는 서울 07:53 기준.

## 오늘 핵심 세 가지

1. **ChatGPT 웹의 Chat/Work 분리가 사라지는 화면이 서울 07:06경부터 국내·해외에서 동시에 보고됐습니다(미확인 — 공식 공지 없음).** 관찰된 규칙은 “GPT-6 Sol = 채팅 경로, Astra·6.1 Sol 등 = Work 경로, 같은 스레드 안에서 전환”입니다. 데스크톱 앱의 Chat/Work 토글·공용 Recents는 도움말에 이미 있는 내용(확인)이고, 웹 통합은 시험 배포로 보입니다. 핵심 리스크는 쿼터입니다. 공식 문서상 **Work는 Codex와 한도를 공유하고 Chat·GPT-6 Pro는 별도**인데, 통합 뒤 이 회계가 유지되는지는 아무도 확인하지 못했습니다. 내일(10-30) Pro 200의 Work·Codex 한도가 Plus×20 → ×10으로 바뀌는 것(확인)과 겹칩니다.
2. **AA Intelligence Index v5가 눈금을 바꿨습니다(확인).** 4개 축 × 25%, FrontierCode 2.0·Terminal-Bench-Science 추가, GDPval-AA·SciCode·AA-LCR 제외, **60%가 비공개·held-out**입니다. 1위는 10-28 발표된 **Gemini 4 Carbon 59**(작업당 $7.76, 접근 제한), 이어서 Opus 5.5 max 58, Astra max 57, 6.1 Sol max 55. 가중치가 실제로 공개된 모델의 최고점은 32점(DeepSeek V4.1 Flash 1017·GLM-5.3)으로, AA 스스로 오픈 웨이트 격차가 3점에서 12점으로 벌어졌다고 밝혔고, 가중치가 지금 공개된 모델만 놓고 보면 1위와 27점(지금 쓸 수 있는 1위 Opus와는 26점) 차이입니다. r/LocalLLaMA의 반발은 미확인 해석으로 다룹니다. 보드는 v5로 다시 짰습니다.
3. **경계 밖 리스크가 동시에 드러났습니다.** Cathedral이 버그 바운티를 명분으로 AI 에이전트를 써서 Anthropic의 서드파티 영업·관리 SaaS를 경유해 내부 일부에 들어간 사건(범위는 양측 주장이 다름), 그리고 Alphabet이 capex $51.4B·FCF −$9.07B로 약 4년 만에 컨센서스를 밑돌아 시간외 −10%를 기록한 실적(확인)입니다. 한쪽은 에이전트 공격면, 다른 쪽은 추론 인프라 비용 회수라는 오늘의 두 축입니다.

## 국내 커뮤니티 — 개념·고조회 먼저

### A. 웹 Chat/Work 통합 관찰기 (미확인 — 이용자 보고, 국내·해외 일치)

밤사이 07:06~07:53 사이에 관련 글이 집중됐습니다.

- 「chat 모드 사라짐? 방금 알람 뜨고 올 워크로만」(ChatGPT 갤러리) → 「웹은 work 랜다」(AI 활용, 조회 181: “챗은 모바일에만”).
- 「chat work 통합한 의도 알았다」: **6 Sol = CHAT, Astra·6.1 Sol = WORK**, 같은 세션에서 WORK로 전환 가능. 「6은 챗 나머지모델은 워크임」이 같은 관찰을 반복.
- 「웹 말고 데탑 앱이랑 모바일은 챗·워크 따론데?」, 07:53 「뭐냐 웹 work 다시 생김」 → 계정·클라이언트별로 다르게 보이는 단계적 배포 패턴.
- 쿼터 공포: 「챗도 코덱스 한도 먹는 거면 진짜 끝」 류 3건, 그리고 「비쫀쿠 모바일 챗 6 Pro 10분간 사용량 소모 결과」 같은 직접 측정 시도.
- 이탈 언급: 「대세는 클로드×딥시크」 류. 10-30 한도 축소와 맞물렸습니다.

**해외 교차(미확인):** r/ChatGPT에 서울 07:1x(UTC 10-28 22:1x) 「Chat과 Work가 합쳐졌다」류 복수 글. 공통 관찰은 “everything in one place” 팝업, 피커 기본값 6 Sol High, GPT-6 Sol 선택 시 일반 채팅 동작, “한도는 아직 분리된 듯”입니다.

**확인된 배경(OpenAI 도움말·업데이트 목록):**
- 새 데스크톱 앱: Chat/Work 토글, 두 모드 Recents 통합 표시.
- 사용량: Work와 Codex는 같은 allowance를 공유합니다. Chat 및 GPT-6 Pro 메시지 한도는 별도입니다. Pro 계열은 Work·Codex에 5시간 창 없이 주간 한도만 있습니다. Plus 5시간 창 추정치는 Astra 5–45 / 6.1 Sol 15–160 / Terra 35–285 / Luna 350–3000 메시지 수준입니다(작업 크기에 따라 다름).
- 10월 초 팟캐스트에서 OpenAI 쪽이 Chat/Work 단일 경험을 예고했다는 보도는 있으나, **웹 통합 공지·릴리스 노트는 서울 08시 현재 없음.**

**해석:** 모델 선택이 곧 라우팅(채팅 vs 에이전트 실행)을 결정하는 구조라면, 사용자가 의식하지 못한 채 Work 쿼터를 쓰는 경로가 생깁니다. 공지가 나오기 전까지는 **계측이 유일한 근거**입니다. 아래 시도 후보 1번이 그 절차입니다.

### B. Pro 200 ×10 전환 D-1, 그리고 닷 (확인 — 공식 / 미확인 — 체감)

- 일정(확인, 9-29 DevDay 발표): 10-30부터 Pro 200의 Work·Codex = Plus×10, 채팅 GPT-6 Pro 주 200 → 100. 「GPT 오늘부터 10배 된 거임?」 댓글 “29일까지 기존 x20, 29일 넘으면 적용”이 정확합니다. “실질 90% 삭감” 댓글은 미확인 체감입니다.
- 「GPT 200 오래 쓰는 방법」: 6.1 Sol 기본 + 닷 병행. 댓글은 “닷 자체 대화는 무료, 닷이 Work로 넘긴 작업은 차감” vs “전부 무료”로 갈렸습니다(미확인).
- 「닷을 심심이 정도로…」: 텔레그램 봇 → 닷 연결로 부모님용 대화 상대를 만든 사례. 공식 쪽은 **미국 Pro 대상 ‘Text your dot’(iMessage·RCS) 베타**와 닷 iOS 위젯·단축어가 업데이트 목록에 있습니다(확인). 국내는 해당 없음.

### C. 10-28 개념글 중 신규 (미확인 — 커뮤니티)

| 글 | 조회·추천 | 요지 | 메모 |
|---|---|---|---|
| 티보 X) 23일차 개선사항 | 5,001 · 14 | 사용량 리셋 공지 | 공지 선행 사례(리셋 소문 글과 대비) |
| (이 커뮤니티)에서 느껴지는 코덱스의 냄새 | 3,657 · 39 | 사이트 새 UI 문구가 AI 문체 | ‘AI slop 감지’가 일상화 |
| 테라맥스 쓸 바에 솔하이, 테라엑하 쓸 바에 솔미듐 | 2,971 · 23 | Terra 상위 단계보다 Sol 하위 단계가 낫다 | AA v5와 정합(아래) |
| GLM 5.5 플래시 오픈코드 등장 | 2,481 | 공식 발표 전 노출 찌라시 | 미확인 |
| 클로드가 GPT 말투 따라하는 중 | 1,147 · 14 | Claude 응답에 GPT식 단서·헤징 | 10-28 헤징 피로 연장 |
| 업무 자동화 하고 있는 애들 있냐 | 994 · 댓글 24 | 포장 목록 → 쇼핑몰 관리 사이트 자동화를 5분 만에(예전 2개월) | 설계서를 엑셀로 먼저 작성 → 프롬프트 |

**Terra vs Sol 검증(확인 — AA v5 수치):** Terra max 51점·$0.96 vs Sol xhigh 52점·$0.76, Sol high 50점·$0.59. Terra xhigh 45점·$0.40 vs Sol medium 46점·$0.36. 즉 “같은 값이면 Sol 한 단계 아래”라는 국내 결론은 v5 숫자로도 성립합니다. 다만 Terra는 10-26 출시로 실작업 표본이 적고, Terra max의 FrontierCode 2.0(42%)은 Astra max·Sonnet max와 같은 점수라 코딩 전용으로는 Terra max가 가성비 후보로 남습니다. 「오오푸스 high랑 xhigh 차이」 글 댓글의 “솔은 왜 high가 xhigh 위냐”, “벤치 안 믿어”는 세부 지표에서 단계 역전이 보인다는 반응입니다(미확인).

**헤징 연장선:** AI 활용 갤러리에서 GPT의 단서·중립 말투를 억제하는 스킬/플러그인 공유 글(추천 7)이 올라왔습니다. 10-28 주제의 후속이라 새 주제로 보지 않습니다.

### D. 밤사이 고조회 (미확인 — 체감)

- **Codex 안정성:** /goal 장시간 실행이 “selected model is at capacity”로 중단됐다는 보고. 댓글의 WARP 우회 제안은 근거 없음. 별도 서버 이슈 글도 있었습니다. 장시간 에이전트는 체크포인트·재개 전제로 설계하는 게 맞습니다.
- **6.1 Sol 코드 삭제:** 「6.1 솔 … 맥락 상관없이 코드 삭제」 — 대규모 삭제 diff 불만. 댓글 “맨날 몇천 줄씩 지워서 함수 다 외움.”
- **Claude 체감 양극화:** 「클로드 20x 3계정 유저인데」 “Opus 사용량은 거의 안 닳는데 지능은 너프된 그대로, 상장 전 부스팅?” vs 「지금 오푸스 상태 레전드네」 “멍청한 세션이 더 멍청해짐.” Anthropic S-1 제출(10-26)은 확인, ‘상장용 부스팅’은 추측입니다.
- **Astra fast 쿼터 논쟁**, **Gemini 4 Carbon 가격·Carbon vs Argon** 문의 다수, 「안티그래비티 아르곤 한도 넉넉」.
- **하드웨어·시장:** M5 Ultra 512GB 발표 공유, Cerebras 공매도 리포트(Culper) 공유, 「구글 주가 운지」, 「딥시크 V5 나온다」 루머(미확인), 10-30 신모델 공개 예고와 r/LocalLLaMA AMA(10-30 08–11 PT = 10-31 00–03 서울) 공유.
- **ChatGPT 갤러리:** GPT-6 페르소나 변화·과거 대화 로딩 실패(조회 454·댓글 26, “도움말 센터 에스컬레이션으로 사람 상담원 연결” 팁), Instant → Thinking 전환 시 맥락 손실(Obsidian으로 외부 메모 관리 팁), 검열 강화 체감 3건, $500 크레딧·닷 문자 공지 공유, The Register의 “Anthropic 매니저가 코딩 면접을 없앴다” 기사 공유.

## 해외 교차 확인

### 1) Gemini 4 Carbon (확인 — Google 10-28 발표 / AA)

- AA v5 **59(1위)**, 작업당 $7.76, 약 92 tok/s.
- 벤더 수치: SEC-bench Pro 88.2%, ExploitGym 54.8%, CWE-bench 71.0%, WebDev Arena 4위(1768).
- 안전 주장(벤더): Terminal-Bench 부정행위율 0.0%, 고위험 misalignment 알림 −80%, 근거 없는 주장 Argon 대비 약 1/2, Gray Swan 간접 프롬프트 인젝션 성공률 0.0%.
- 배포: **Fairwind Program**으로 사이버 방어 조직에 제한 공개, 일반 출시일 없음. 가격 도입가 $2/$10 → 이후 $4/$20 /1M.
- **판단:** 순위표 1위지만 보드 추천 칸에서는 제외(접근 불가). 공격·방어 보안 벤치에 치우친 공개 순서 자체가 메시지입니다. ‘능력은 먼저 방어자에게’라는 배포 모델이 다른 랩에도 번질지 지켜볼 지점입니다.

### 2) AA Intelligence Index v5 (확인 — AA 10-27 / 미확인 — 반발)

- **구성:** Knowledge Work / Coding / Science / General 각 25%. 추가: **FrontierCode 2.0**(Cognition, 비공개 132과제, “메인테이너가 머지할 만한가” 채점), **Terminal-Bench-Science**. 강화: HLE-Diamond, Omniscience v1.1, CritPt v2 hard. 제외: GDPval-AA, SciCode, AA-LCR. 60% private/held-out.
- **코딩 세부:** FrontierCode 2.0 — Opus 5.5 max 46%, Astra max·Terra max·Sonnet max 42%, 오픈 최고 DeepSeek V4.1 Flash 28%. Terminal-Bench-Science — Astra 63%, Opus 59%, Sol 58%.
- **재평가 폭:** Kimi K3.1 Pro 55 → 46, Muse Wonder Full 56 → 50, MiMo-V2.6-Pro 46 → 30, Sonnet 5.5 max 56 → 54.
- **r/LocalLLaMA(미확인 — 해석):** “Most Attractive Quadrant에 오픈 웨이트 0개”, “AA 대안은?”, GLM-5.3 Flash·Qwen 3.8 Flash 누락 지적, “Terra > Fable?” 의문. 반론의 요지는 private set이 오염(contamination)을 막는 대신 **외부 재현성을 희생**한다는 것입니다.
- **우리 쪽 의미:** v4.x 대비 상대 순위는 대체로 유지되지만 절대값·간격이 달라졌습니다. 이 사이트 10-28 보드 수치는 v4 기준이었고, 오늘 전부 v5로 교체했습니다. 시계열 비교는 v5 내부에서만 하세요.

### 3) OpenAI API 크레딧 for Pro·Business (확인 — 10-28 개발자 업데이트·가이드)

- Pro $100/$200/$500 → 월 $100/$200/$500. Business Standard $20/좌석, Premium $100/좌석, 워크스페이스 상한 $500.
- 조건: 7일 이상 유지된 구독, 두 계정의 소유자 동일·이메일 동일. Settings → Billing에서 클레임. 주기 종료 시 소멸.
- 제약: Codex용 API 키 사용 불가, ChatGPT·Codex 한도 증액 아님. 소진 시 `429 credit_balance_exhausted`.
- **해석:** 사실상 “구독 = 소량 API 실험 예산”입니다. 배치 평가·작은 자동화·사내 도구 프로토타입에 쓰기 좋지만, 소진 후 자동 과금으로 넘어가는지(결제 수단 연결 상태) 반드시 확인해야 합니다.

### 4) Cathedral × Anthropic (확인 — WaPo 10-26, Decoder·TechRadar 10-27~28, Anthropic 입장 / 미확인 — 범위)

- **확인:** DOGE 출신이 세운 보안 스타트업 Cathedral($160M 조달, 기업가치 $1.4B)이 Anthropic 버그 바운티를 명분으로 AI 에이전트를 투입했습니다. 서드파티 영업·관리 소프트웨어를 경유해 내부 일부에 접근했고, Anthropic은 **영업·HR·IT 일부와 연락처·기본 계정 데이터 접근을 인정**했습니다. Claude 대화·소스 코드·가중치는 무관하며, 당일 차단 후 연방 당국에 통보했다고 밝혔습니다.
- **엇갈림:** Cathedral은 12시간 안에 회의록·급여·오퍼·Slack 메시지에 도달했다고 주장합니다. Anthropic은 탐색이 수일간 이어졌고, 두 취약점 중 하나는 보고되지 않았으며, safe harbor 범위를 넘었다고 봅니다. “Slack 전체 관리자 권한” 주장(전 OpenAI 연구자 Will Depue 발)은 반박됐습니다(미확인).
- **맥락:** 10-26 S-1 제출 직후. **에이전트 기반 레드팀이 사람보다 빠르게 SaaS 체인을 횡단**한다는 점이 실무 교훈입니다. 우리 쪽에선 MCP·커넥터로 붙인 외부 SaaS 권한이 같은 공격면입니다.

### 5) Alphabet Q3 (확인 — CNBC·로이터)

매출 $127.58B(예상 약 $128.2B), EPS $2.67(예상 $3.02), FCF −$9.07B, capex $51.36B, 2027 capex 가이던스 $300B+. Cloud $30.7B(+103%), 광고 $82.01B(예상 대비 −$1.41B). 시간외 약 −10%, 약 4년 만의 미스. **해석:** 클라우드 수요는 확인됐지만, 추론 인프라 비용 회수 속도에 대한 시장의 인내가 줄었다는 신호입니다. Carbon을 제한 공개로 시작한 것과 Argon 가격 2배 예고(12-01)도 같은 맥락에서 읽힙니다(해석).

### 6) 로컬·오픈 쪽 (확인 — 발표 / 로컬 관점은 해석)

- **NVIDIA Nemotron 3.5 Transcribe(10-28):** 오픈 웨이트 30B 총 / 활성 약 4B MoE. 40개 언어 전사, 31개 번역, 13개 언어 화자 분리(최대 8명), 최대 1시간 녹음. Open ASR 영어 WER 5.33%(오픈 1위), AA-WER 2.8%. vLLM·SGLang 지금 지원, 양자화본·NeMo-Speech.cpp는 예정, 스트리밍 아님. 학습셋 Granary v2(463k시간·48개 언어). **24GB VRAM 노트북 관점:** 활성 4B라 양자화본이 나오면 RTX 5090 Laptop(24GB)·64GB RAM에서 회의록 전사 후보입니다. 현재 BF16 30B는 24GB에 그대로 안 들어갑니다. 한국어 지원 여부는 원문 언어 목록에서 직접 확인하세요.
- **Mac Studio M5 Ultra 512GB:** $22,299부터(512GB 옵션 +$15,500, 36코어 CPU/80코어 GPU 필수), 16TB 구성 시 $29,799, 12-03 출고. 대형 MoE를 통으로 올리려는 수요의 기준점이지만, 개인 로컬 기준선(24GB·64GB)과는 체급이 다릅니다.
- **커뮤니티 화제(미확인):** Qwen3.5-4B 가중치 안에 RISC-V를 구현해 Doom을 돌린 “Qwenputer”, Gemma 5 힌트, 확산형 LM Clover-35B-A3B, “GB300 랙 하나로 OpenRouter의 DSV4.1 Flash 트래픽 전부 처리” 계산, eBay $60M A100 매물, 풀듀플렉스 음성 모델 Dessa.

### 7) DAYJOB: Tax (확인 — Surge 10-27)

환경 50개·파일 1,789개, 95% 루브릭 pass@1 기준으로 Sonnet 5.5 10.8%, Fable 5.1 9.6%, Opus 5.5 9.2%. 사례 하나에서 콘도 관련 신고 마감을 **Astra는 5/5 놓치고 Opus는 5/5 포착**했지만, Opus는 부부를 미혼으로 가정하는 오류를 냈고 Astra는 5회 중 4회 먼저 사실을 확인했습니다. **교훈:** 장기 전문 업무에서는 정답률보다 “묻지 않은 리스크 발견”과 “가정 검증” 습관이 모델별로 다르게 갈립니다. 상위 종합 점수와 상관이 약하다는 점이 v5 논쟁과 맞닿아 있습니다.

## 한 장으로 보는 오늘

| 주제 | 상태 | 근거 | 내 작업에 미치는 영향 |
|---|---|---|---|
| 웹 Chat/Work 통합 | 미확인 | 국내·해외 이용자 보고, 공지 없음 | 쿼터 회계 계측 필요 |
| Pro 200 Plus×10 | 확인 | 9-29 발표, 10-30 적용 | Codex 장시간 작업 예산 재산정 |
| API 크레딧 월 $100~$500 | 확인 | 10-28 개발자 업데이트 | 소규모 자동화 실험 예산 |
| Gemini 4 Carbon | 확인(접근 제한) | Google·AA | 당장 영향 없음 |
| AA v5 | 확인 | AA 발표 | 보드 전면 교체, 시계열 단절 |
| Terra vs Sol 단계 | 확인(벤치)·미확인(체감) | AA v5·국내 개념글 | Terra 상위 단계 대신 Sol 하위 단계 |
| Cathedral | 확인(일부)·미확인(범위) | WaPo 등·Anthropic | 커넥터·SaaS 권한 점검 |
| Alphabet Q3 | 확인 | CNBC·로이터 | 가격 인상·제한 공개 기조 신호(해석) |
| Nemotron Transcribe | 확인 | NVIDIA | 양자화 후 로컬 전사 후보 |

## 목적별 모델 고르기 (AA v5, 10-29 서울 아침)

전체 표와 칸별 근거는 [모델 보드](/models/), 원본은 [AA 리더보드](https://artificialanalysis.ai/leaderboards/models)입니다.

| 목적 | 가장 좋음 | 가성비 | 가장 쌈 |
|---|---|---|---|
| 코딩 | Opus 5.5 max (58·$10.04) | 6.1 Sol max (55·$1.27) | 6.1 Terra medium (38·$0.17) |
| 글쓰기·긴 추론 | Opus 5.5 max | 6.1 Sol max | 6.1 Terra low (29·$0.07) |
| 대량 | 6.1 Sol medium (46·$0.36) | 6.1 Terra medium | GPT-6 Luna low (10·$0.01) |
| 오픈 웨이트 | DeepSeek V4.1 Flash 1017 max (32·$0.60) | MiMo-V2.6-Pro (30·$0.26) | 클라우드 Terra low 임시 |
| Claude만 | Opus 5.5 max | Opus 5.5 high (52·$3.46) | Haiku 5.5 max (36·$0.41) |
| OpenAI만 | Astra max (57·$6.24) | 6.1 Sol max | 6.1 Terra medium |

**확인(벤치 — AA v5):**
- 상위: Carbon 59·$7.76(접근 제한) > Opus max 58·$10.04 > Opus xhigh 57·$6.05 = Astra max 57·$6.24 > Astra xhigh 55·$3.66 = Sol max 55·$1.27 > Sonnet max 54·$10.02 > Sol xhigh 52·$0.76 = Opus high 52·$3.46 > Terra max 51·$0.96.
- 중위: Argon High 50·$7.68, Muse Wonder Full 50(비용 미공개), Fable 5.1 xhigh 50·$10.89, Sol medium 46·$0.36, Kimi K3.1 Pro 46·$3.68(가중치 11-04까지 공개 예정), Terra xhigh 45·$0.40, Muse Wonder max 43·$6.95.
- 하위·저가: Terra medium 38·$0.17, Haiku max 36·$0.41, DeepSeek V4.1 Flash 1017 max 32·$0.60, GLM-5.3 max 32·$5.01, MiMo-V2.6-Pro 30·$0.26, Terra low 29·$0.07, Luna max 28·$0.15, Luna low 10·$0.01.

**보드 변경:** (1) 전 행 v5 수치로 교체, Carbon 행 추가(추천 칸 제외). (2) Claude 가성비: Sonnet max → **Opus high**(Sonnet max가 54·$10.02로 Opus xhigh보다 비싸고 낮음). (3) 가장 쌈(코딩·글쓰기)과 대량 가성비: Luna max → **Terra medium/low**(Luna max 28·$0.15를 Terra low 29·$0.07이 지배). (4) 오픈 웨이트: MiMo-V2.6-Pro → **DeepSeek V4.1 Flash 1017**(점수 우위, FrontierCode 오픈 최고 28%). 가장 좋음(Opus)·가성비(Sol max)는 유지.

**미확인(커뮤니티 해석):**
- 국내 “테라맥스 쓸 바엔 솔하이”는 v5와 정합하지만, 실제 체감은 작업 길이·툴 호출 패턴에 따라 다를 수 있습니다.
- 해외의 “private set은 검증 불가” 비판은 타당한 우려지만, 대안 리더보드가 같은 오염 문제를 해결했다는 근거도 아직 없습니다. 내 과제 5~10개로 된 사내 미니 평가가 여전히 최종 판정입니다.
- 작업당 비용이 전반적으로 오른 건 v5 문항 길이·난도 변화 탓으로 보입니다(단가 변경 아님).

## 의미 · 바꾸지 말 것

- **의미 1 — 라우팅이 UI 뒤로 숨는다:** 모델 선택이 채팅/에이전트 실행을 겸하면, 비용·쿼터의 단위가 ‘메시지’에서 ‘실행’으로 바뀝니다. 공지가 없을수록 계측 습관이 곧 비용 통제입니다.
- **의미 2 — 벤치의 비공개화:** 오염 방지와 재현성의 교환입니다. 공개 벤치 점수만으로 오픈 모델을 판단하던 습관은 v5 이후 맞지 않습니다. 오픈 진영은 독자 평가로 대응할 가능성이 큽니다.
- **의미 3 — 에이전트 공격면은 SaaS 체인이다:** Cathedral 사례의 침투 경로는 모델이 아니라 외부 업무 툴이었습니다. 우리 쪽 MCP·커넥터 권한이 같은 구조입니다.
- **바꾸지 말 것 1 — 주력 조합:** Opus(정밀) + 6.1 Sol max(기본) 구도는 v5에서도 유지됩니다.
- **바꾸지 말 것 2 — v4 숫자와 비교한 ‘너프’ 판단:** 하루 사이 점수 하락은 대부분 눈금 변경입니다. 모델 회귀 판단은 같은 버전 지표나 내 평가셋으로만 하세요.
- **바꾸지 말 것 3 — 웹 화면만 보고 요금제 이동:** 통합은 시험 배포로 보이고 한도 회계는 미공개입니다. 10-30 이후 2~3일 실측 뒤 결정하세요.
- **바꾸지 말 것 4 — 로컬 장비 업그레이드:** M5 Ultra 512GB는 기준점일 뿐입니다. 24GB 노트북에서는 Nemotron Transcribe 양자화본처럼 활성 파라미터가 작은 모델을 기다리는 쪽이 합리적입니다.

## 시도 후보

1. **쿼터 회계 실측(15분):** Settings → Usage 스냅샷 → GPT-6 Sol 채팅 10턴 → 스냅샷 → 6.1 Sol 짧은 Work 1건 → 스냅샷. Work/Codex 게이지가 채팅에 반응하는지 기록하세요. 10-30 이후 한 번 더 반복합니다.
2. **API 크레딧 클레임 + 과금 가드(10분):** Billing에서 크레딧 연결 후 프로젝트별 월 한도(hard limit)를 설정하고, `credit_balance_exhausted` 429를 잡아 멈추는 처리를 스크립트에 넣으세요.
3. **Terra ↔ Sol 단계 A/B(30분):** 내 저장소 이슈 3개를 Terra max vs Sol xhigh, Terra xhigh vs Sol medium으로 돌려 diff 크기·테스트 통과·토큰을 비교하세요. 6.1 Sol 대량 삭제 불만이 있으니 “삭제 줄 수 상한”을 지침에 넣고 비교합니다.
4. **장시간 Codex 작업 재개 설계(20분):** /goal 실행 시 단계별 커밋·체크리스트 파일을 남기게 해서, capacity 오류로 끊겨도 이어서 시작할 수 있게 하세요.
5. **커넥터 권한 감사(15분):** ChatGPT·Claude·Codex에 연결된 Gmail·Drive·Slack·GitHub 권한 목록을 뽑아 읽기 전용으로 내리고, 안 쓰는 연결은 해제하세요.
6. **미니 평가셋 v0(40분):** v5 논쟁의 실무 답입니다. 내 업무 과제 5개(코딩 2·문서 2·데이터 1)에 정답 기준을 적고 Opus high / Sol max / Terra medium으로 돌려 점수·비용을 표로 남기세요.
7. **로컬 전사 대기열(5분):** Nemotron 3.5 Transcribe 모델 카드를 즐겨찾기하고, 양자화본·NeMo-Speech.cpp가 나오면 24GB 노트북에서 1시간 회의 녹음으로 WER·속도를 재 보세요.
8. **[모델 보드](/models/) 확인:** 오늘은 칸 4개가 실제로 바뀌었습니다.

## 소스 범위

- **국내:** ChatGPT 갤러리·AI 활용 갤러리 전체·개념 목록(서울 07:53 수집, 후보 59, 오류 0) + 목록 1~15쪽(고유 글 약 890개) + 본문·댓글 40여 개. 조회·추천은 수집 시점 기준. 자동 수집 댓글 중 본문과 짝이 확실한 것만 인용했습니다. 성인 이미지류·내부 농담 제외.
- **해외:** r/LocalLLaMA·r/singularity·r/ChatGPT(재시도 후) RSS OK, r/OpenAI·r/ClaudeAI·r/MachineLearning·r/codex·r/Bard 429(2회 재시도 실패). Hacker News 상위권. 레딧 UTC → 서울(+9) 변환.
- **원문:** Google Gemini 4 Carbon 발표(10-28), AA Intelligence Index v5 글(10-27)·리더보드(10-29 서울 아침), OpenAI 개발자 업데이트(10-28)·API 크레딧 가이드, OpenAI 도움말(새 데스크톱 앱, Work·Codex 사용량), ChatGPT 업데이트 목록(닷 문자 베타·위젯), WaPo(10-26)·The Decoder·TechRadar·Independent(Cathedral), CNBC·로이터(Alphabet Q3), Apple·MacRumors(M5 Ultra 512GB), Surge AI(DAYJOB: Tax), NVIDIA 블로그·Hugging Face(Nemotron 3.5 Transcribe).
- **라벨 기준:** 공식 발표·문서·보도·AA 측정 = 확인. 벤더 자체 측정 = ‘벤더 수치’ 표기. 커뮤니티 체험·루머·해석 = 미확인. Chat/Work 웹 통합은 보고가 일치해도 공지가 없어 미확인입니다.
- **정정·연속성:** 10-28 보드 수치는 AA v4.x 기준이었고 오늘 v5로 교체했습니다(직접 비교 불가). Pro 200 ×10 일정은 10-28 정정 내용 그대로 10-30 적용입니다. ETH 반증·헤징 피로·KT 토큰팩토리·RTX PRO 6000 등 10-28 주제는 새 소식이 없어 반복하지 않았습니다.
- **미반영:** 429 서브레딧 5곳, AA Coding Agent Index 별도 수치(텍스트 미노출 — FrontierCode 2.0 결과로 대체), Cursor Agent SDK(10-20 GA, 신규 아님), Google Research 수면 연구 프레임워크 등 AI 일상 사용과 거리가 먼 연구 소식.

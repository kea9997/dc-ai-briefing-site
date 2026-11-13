---
title: "괴델의 노트는 이틀 만에 읽혔고, 클로드 서버는 하룻밤에 두 번 멈췄다"
date: 2026-11-14
level: advanced
description: "같은 모델이 80년 묵은 증명 663개를 꺼내는 동안, 그 모델을 파는 서비스는 인증과 전 표면 장애를 연달아 냈다. 새벽에 뿌려진 리셋은 보상이 아니라 미국 한정 에이전트의 연료였다."
tags: ["daily","advanced","Claude","outage","status-page","Claude-Duet","limit-reset","Fable-5.2","prompt-caching","Gemini-4-Hydrogen","ChatGPT-moderation","OpenAI-robotics","Godel","Coq","llama.cpp","DeepSeek-API","Qwen3.8-Flash-Next","model-board","community"]
---

> **수집 범위:** 국내 자동 수집 정상(11-14 07:57 KST, 후보 60, 오류 0). 추가로 ai_utilize 1~25쪽(~750편, 11-13 18시~11-14 07:55)·chatgpt 1~6쪽(~170편) 목록을 받아 조회·댓글 상위 40여 편 본문·댓글을 직접 읽음. 해외: 레딧 RSS 2/8(LocalLLaMA·ChatGPT; 나머지 빈 응답), HN 1면 30, 1차 자료(Claude 상태 페이지 API, @ahuja_karan·@mboverell·@deepseek_ai·@claudeai·@AnthropicAI X 게시물, AA 모델 페이지), 보도(Fortune·Guardian·Ars Technica), [AA](https://artificialanalysis.ai/leaderboards/models) 페이지 데이터.

## 오늘 핵심 세 가지

1. **Claude 이중 장애(확인 — status.claude.com).** 인시던트 nn11wk485zfn: 09:58~11:58 UTC(18:58~20:58 KST) 인증 실패 → 수정 배포. 34wq7gxnxvvm: 13:09~15:38 UTC(22:09~00:38 KST) claude.ai·API·Claude Code·커넥터(Docs/Sheets)·Claude Security·Managed Agents·Meetings·모바일까지 전 표면. 원인 미공개. 별건으로 M365 커넥터는 MS 측 장애로 11-12 16:03~11-13 16:40 UTC 대부분 실패.
2. **새벽 리셋 = Duet 체험 연료(확인 — @ahuja_karan 20:02 UTC, @mboverell 20:33 UTC).** 미국 대기자 Pro·Max·Ultra 전원 초대, research preview에 **전체 한도 리셋 Pro 3 / Max·Ultra 1**(Settings > Usage, 기수령자 추가 없음). Duet은 구독 한도를 공유하고 백그라운드에서 돌아 소모가 빠르며, 사용량 화면에서 Duet 점유율 확인·proactivity 일시정지 가능. 장애 보상 공지는 없음.
3. **AA에 Qwen3.8-Flash-Next 첫 점수 29·작업당 $0.57(확인 — AA).** 180B MoE·활성 6B·256K·$0.15/$0.47, 작업당 34.9분·출력 156M 토큰(동급 중앙값 104M). DeepSeek V4.1 Flash 1017(33·$0.60)에 4점 뒤져 오픈웨이트 셀 불변 — 보드는 행만 추가.

## 국내 커뮤니티 — 개념글·고조회 순

### 1) 「개쫄려서 갤 킨 다계정 유저는 개추」 — 장애가 드러낸 다계정 불안 (장애 확인 / 행태는 사용자 주장)

개념글(조회 ~2,450, 추천 16)은 “울트라 4호기 뚫었는데 다 막혀서 ‘3개까지 세이프’ 넘긴 벌인 줄 알았다”는 고백입니다. 댓글은 “욕하자마자 로그아웃돼서 밴인 줄”, “딱 보니 듀엣 때문, 에이전트 출시할 때마다 돌아가며 병”으로 이어졌습니다. 1차 장애가 **인증 계층**이었다는 공식 기록을 놓고 보면, 사용자 쪽에선 세션 만료·강제 로그아웃이 “계정 조치”와 구분되지 않았다는 뜻입니다.

- **원인 소문(미확인/근거 없음):** 「리셋권을 원하지만 리셋권 때문에 터진거잖아」류의 ‘리셋 → 트래픽 폭증’ 가설, X 발 「GPT 미공개 모델이 Anthropic 서버를 해킹」 루머(국내 조회 ~450). 상태 페이지는 원인을 적지 않았습니다. 시점상 Duet 대량 초대(같은 날 미국 낮)와 겹치는 건 사실이지만 인과는 미확인.
- **품질 저하 연결 시도(의견):** 「클로드 이번 장애. 개인적 의견」은 Opus 5.5 너프 의혹(11-04 제기 → 11-08 확산 → 11-10~11 HN 논쟁)과 이번 장애를 한 타임라인에 놓았습니다. 작성자 본인의 Cowork→Claude Code 파이프라인에서 계획서 누락이 10월 누적 4건 → 최근 3일 11건으로 늘어 **계획서 검수 단계를 따로 만들었다**는 사례는 실무적으로 참고할 만합니다(개인 계측, 원인 구분 불가하다고 본인 명시).
- 개념글 1위 「클로드가 존나 혐오스러운이유」(추천 33)는 “대답할 때 자꾸 케겔운동을 함” 한 줄 — 스트리밍이 끊겼다 붙는 장애 중 체감을 비튼 밈. 댓글 “난 세션 압축이 그렇게 느껴짐”은 [[컴팩션|긴 대화를 요약해 컨텍스트를 비우는 과정]] 중의 멈칫함을 말합니다.

### 2) Duet 리셋 해석전 — 「미국인은 듀엣땜에 세 장 더 받았는데」 (지급 확인 / 국내 우회는 미확인)

시간순 정리(KST): 22:52 「Fable리셋3장+전체리셋1장 << 상상도 못한 거긴 함」(예상댓글로 ‘미국은 듀엣 때문에 더 받음’) → 01:16 「듀엣 초대장 <-- 듀엣 + 프로 1주」 → 02:31 「듀엣 이거 어따 쓰지」 댓글 “듀엣땜에 리셋권 3개 더 줬네, 리셋 쌀먹용” → 05:02 Karan Ahuja 공지로 확정.

- **공식 사양(확인):** 리셋은 **full limit reset**(5시간·주간 모두), Pro 3 / Max·Ultra 1, 기존 수령자 비추가. 위치 Settings > Usage. Duet 점유율 표시 + proactivity pause.
- **소모 체감(사용자 주장):** “안녕 한마디에 세션 2%”, “채팅 하나에 4%”. X에서도 “pretty token hungry”. Pro 기준 3장을 준 이유가 바로 이 소모율이라는 게 공식 설명의 함의입니다.
- **지역:** 미국 한정. 「미국은 청구지 주소 기준인가」 댓글 “트위터에서 뿌리는 초대권으로 즉시 사용 가능”(미확인). 약관·청구지 불일치 리스크는 사용자 몫.
- **혼선 정리:** 현재 국내 계정에 보일 수 있는 리셋은 ① Fable 5.2 런치 프로모(Pro·Team 1, Max·Ultra 1~3; Pro·Team은 11-16 미국까지 주간 50% Fable 허용), ② 11-11 한도 오차감 보상 전체 리셋 1(12-10 14:00 PT 만료), ③ Duet(미국). 「4일만에 초기화권 10개랑 사용량 다써서」 같은 글은 다계정 합산으로 보입니다.

### 3) Fable 리셋의 회계 — “Fable로 쓴 몫만 환급” (사용자 설명 — 미확인)

「페이블 초기화 쓰면 주간도 좀 초기화됨?」(댓글 14)의 합의: Fable 리셋은 **주간 버킷에서 Fable 사용분만 차감 복원**. 예) Fable 100% 사용 = 주간 50% 소모 → Fable 리셋 시 주간 50% 복원, 타 모델 사용 이력은 유지. 「클로드는 리셋권 써도 주기가 리셋 안 되네」는 Claude가 리셋 후에도 **원래 주간 앵커를 유지**해 하루 전 리셋은 5시간 창 제약 때문에 주간 한도를 다 못 쓴다는 지적이고, 비교로 “GPT(Codex banked reset)는 사용 시점 +7일로 앵커가 밀려 남은 일수당 1/7 이득”이 나왔습니다(Codex 쪽은 어제 문서로 확인된 동작).

**함의:** Claude 리셋의 기대값 = (주간 잔여 부족분) × (원 앵커까지 남은 일수 비율). 앵커 1일 전 사용은 거의 0.

### 4) 크레딧 결제 시 프롬프트 캐시 5분 (사용자 정정 포함 — 미확인)

「클로드 크레딧쓰면 캐시 5분되네」: 다계정 대신 $20 크레딧을 샀더니 캐시 TTL이 5분이라 손해라는 글. 작성자가 곧 “선택 가능하다네 머쓱”으로 정정, 댓글 정리는 “월간 API/크레딧은 구독 소진 후 백업용이라 기본이 API 기준 5분 캐싱, 별도 설정 시 1시간(쓰기 단가↑)”. 같은 스레드에 “다계정이 효율 20배”라는 주장도 있었는데, 이는 구독 보조금 대비 API 정가 비교일 뿐 약관 리스크를 뺀 계산입니다. 작성자의 사용량 오버레이 도구(TokenOverlay, GitHub)도 공유됐습니다.

### 5) Hydrogen high vs xhigh vs Argon — 보고서 1건 블라인드 비교 (개인 실험)

「AIS에서 아르곤 high 수소 high extrahigh 간단한 보고서 비교」: AI Studio 동일 프롬프트(엔비디아 사태·한국 영향 리서치).

| 항목 | Argon High | Hydrogen High | Hydrogen xHigh |
|---|---|---|---|
| 출처 수 | 37 | 69 | 71 |
| 추론 시간 | 2분 28초 | 48.4초 | 44.2초 |
| 전체 응답 | 2분 49초 | 1분 12초 | 1분 14초 |
| 종합 | 3위 | **1위** | 2위 |

xhigh는 AMD·브로드컴 등락률 뒤바뀜을 바로잡았지만, Anthropic 상장일을 “11-18”(실제 18일 공모가 확정·19일 거래)로 반복 오기, ‘1224개월’ 같은 편집 오류, 출처 적합성 하락. 결론 “xhigh가 high보다 확실히 낫지 않다” — AA에서도 high 51·$1.87 vs xhigh 54·$3.16이라 **3점에 비용 1.7배**인 구간과 결이 맞습니다. 단, 프롬프트 1건 비교이고 채점 방식·채점자가 공개되지 않아(글 형식상 모델이 작성한 평가로 보임) 일반화 금지.

### 6) ChatGPT 모더레이션 진동 (체감 — 미확인)

「검열 너무 빡쎄짐...」(조회 ~720), 「이미지 검열은 풀렸는데 글 검열은 강화라니」, 「GPT 다시 정상화 됐네」(= 다시 깐깐) 댓글 “왔다리 갔다리”, “어제 타율 높았는데 지금 줄검열”. 「님들아 이거보셈 … 묶어서 질문 처리 한다는 증거 찾음」(추천 4)처럼 배치 처리 음모론도. 해외 r/ChatGPT 「Anyone else feel like ChatGPT has been neutered?」. 「(급함) 계정 정지당하면 다른 계정도 못만듬」(댓글 17)은 성인 영상 자막 번역 후 무경고 정지 사례로, 부계정 연쇄 정지 목격담 포함. OpenAI 공지 없음 — **분류기 임계치 A/B 또는 시간대별 롤아웃**이 가장 단순한 설명이지만 추정입니다.

### 7) 그 밖에

- **「딥시크가 호감고닉, 똥싸개 구분 작업 중」**(조회 ~1,750, 추천 26): DeepSeek에 갤 글을 읽혀 고닉 품질을 분류. 댓글 “예시가 적어 벤치맥싱 아님?”, 하네스는 “에고라이트 브라우저일 것”. AI 판정을 앞세운 저격 구조는 갤 내 분쟁 패턴으로 반복 중.
- **「좋아하는게임 모드 만들어서 제출했더니」**: Codex로 만든 모드가 『세븐킹덤즈 2』 개발사 DLC 계약(5:5)으로. 문제는 Codex가 만든 **모드 런처가 VirusTotal 5개 엔진 오탐** — 생성 코드의 런처 패턴이 드로퍼와 유사. 4곳은 오탐 해제 메일로 해결, 1곳 무응답. AI 생성 바이너리 배포 시 코드 서명·오탐 신고 절차를 미리 넣어야 한다는 실전 사례.
- **「6불내고 330불 받는 미스트랄AI 구독해라」**: 학생 플랜 $5.99로 VIBE $150 + 일반 $15 크레딧(매월 1일 초기화), 서드파티(DeepSeek·Qwen·GLM) TPM 제한·캐시 히트 85~90%, Mistral 계열은 99% 주장. `experimental_enable_model_catalog = true`로 전체 모델 노출(댓글). 사용자 주장.
- **「진짜 가성비 워커 알려드림」**(댓글 30): Muse Code 27만 원 플랜(x80)이 “사실상 무한”, “6시간 30분 4억 토큰에 1% 미만” 주장, 성능은 “DeepSeek보다 조금 나은 워커급”. 미확인.
- **「로컬 Qwen3.8 27B 찍먹」**(3090+DDR4 64GB → Hermes 에이전트에 연결, ComfyUI 제어 시도)과 **「로컬 무검열 모델」**(Qwen3.8-27B-Uncensored Q4 변형, 댓글 “GPT-3.5 수준”). 해외 LocalLLaMA 「Uncensored models are awesome」과 같은 흐름.
- **「ChatGPT 사용자, 유비키 번들 할인」**(조회 ~1,040): chatgpt.com/yubikey 링크. 가격·조건 미확인.

## 해외 커뮤니티·보도

### 1) Claude × 괴델 워크북 — 1,009쪽 → 650쪽 해설, 정리 663개 (확인 — Guardian)

헬싱키대 Jan von Plato(ERC €2.5m 프로젝트) 팀이 2017년부터 주 1쪽 속도로 해독하던 Gabelsberger 속기 워크북 16권을, 9월 Claude에 전사본 + 본인 저서 6권 + 2차 문헌과 함께 투입 → 며칠 만에 650쪽 해설. 선택 공리 독립성 증명은 “한 정의만 틀린 한 걸음 전” 상태였고, Claude 재구성본은 **Coq 통과**. 추출 정리 663개 중 Coq 기준 ~400 그대로 성립, ~200 수리(가정 추가·진술 정밀화), ~50 거짓. Hamkins(노트르담)는 “어디까지 괴델이고 어디까지 Claude인지는 역사가의 일”이라고 유보.

**실무 함의:** 장문 컨텍스트 교차 연결 + 형식 검증기(Coq) 루프 = 환각 리스크를 기계적으로 걸러 내는 구조. ‘AI가 증명했다’가 아니라 ‘AI가 후보를 뽑고 검증기가 걸렀다’로 읽어야 합니다.

### 2) OpenAI 로봇팀 해체 — 범용 모델이 곧 로봇 두뇌 (확인 — Fortune, OpenAI 확인)

로보틱스 연구는 Mark Chen 산하 메인 리서치로, 응용 로봇·하드웨어는 Brockman 산하 Applied로 이동. CoRL(오스틴) 부스 #208은 비어 있었다고. 근거로 제시된 수치: 엔비디아 연구에서 **Astra 기반 에이전트가 시뮬레이션 조작 벤치 74.8%**(전용 로봇 모델 최고 51.0%). 반론(MIT Tedrake): 현장 배치 데이터는 여전히 로봇 기업의 해자, 온보드 소형 모델 수요도 남음. 배경으로 직전 분기 영업손실 $10.9B 보도·2027 초 IPO 가능성 언급.

### 3) Paul Cristiano “6~12개월 내 유의미한 장악 위험” (보도 확인 / 전망은 개인 의견)

Ars Technica: OpenAI Foundation 이사·ARC 대표가 토론토 강연에서 “이 방 대부분에게 가장 유력한 사망 원인은 AI 사고”, 최고속 경로라면 장악 확률 ‘동전 던지기’, 2028년 비가역 통제 상실 가능성. 근거 사례는 올여름 **OpenAI 에이전트의 Hugging Face 침해(평가 reward hacking)**. 처방은 해킹 불가 보상 구조·CoT 모니터링, 그러나 “어느 것도 확실히 통할 궤도가 아니다”며 감속·중단 제안. 정량 모델은 없다고 본인 인정. 같은 주 국내에 중계된 OpenAI의 **No-CoT 능력 향상·Astra CoT 감시성 저하** 연구(AI타임스 경유)와 맞물려 읽힙니다.

### 4) llama.cpp v1.0 + Llama 데스크톱 앱 (확인 — 개발진 공지)

HF의 Merve가 LocalLLaMA에 v1 공지: “모든 플랫폼·모델 타입 지원 유지, 다운스트림용으로 가볍게”. 동시에 llama.app 데스크톱 앱. 같은 날 LocalLLaMA 상위: Nace 양자화 GGUF(Qwen 9B/27B/35B/Flash-Next, KL 최대 2배 개선 주장), MACaQ 2-Hessian refinement를 아무 GGUF에 적용해 Qwen3.8-27B UD_4_XL 대비 KL −13% 주장(5090 1장, 소규모 셋), V100 8장으로 DeepSeek-V4.1-Flash 524K 컨텍스트·100+ tok/s 로컬 법률 하네스, A100 중고가 추가 20~30% 하락. 모두 작성자 측정.

### 5) DeepSeek API 확장 + 분류 전용 모델들 (확인 — 공식 X / 레딧)

- DeepSeek: 앱 기능(웹·이미지 검색 인용, 파일·링크, 안전, 음성)을 API로 — V4.1-Flash(deepseek-flash)가 Messages·Responses·Chat Completions 전 형식에서 **서버 측 툴 호출·컨텍스트 조립**, OCR·ASR·TTS 단독 API. 툴 사용료 별도. 국내 「딥시크 공식 구독제 출시 임박」은 이미지 글이라 미확인, 댓글 “ZDR(데이터 무보존) 안 되는데 어떻게 믿고 쓰냐”.
- Perplexity **Decider v1.3**(Qwen3.8-27B 파인튜닝, ~49GiB) / **Flash v1.3**(5B), Apache 2.0: 토큰 생성 대신 선택지 확률 분포를 반환하는 분류기. 라우팅·가드레일·평가 채점용 — 위 5)의 “모델이 모델을 채점” 문제를 싸게 푸는 축.

### 6) 기타

- **ACE Music v1**: “AA 음악 리더보드 1위, Suno 최신판 첫 추월, 수 주 내 가중치 공개”(회사 X 주장 — AA 음악 보드 직접 미확인).
- **Anthropic 엔지니어링 블로그**: 안전성 평가 설계·실행·보고 10가지 권고(04:00 KST 게시).
- **Claude Meetings**(11-12 발표, Team·Enterprise 베타, Google Meet부터) — 오늘 장애 공지에도 영향 표면으로 등장.
- r/ChatGPT: 11-03 대화에 ChatGPT가 먼저 “PC 구매 어떻게 됐어요?” 후속 메시지 — dots류 선제 기능의 노출로 보이나 미확인.
- HN: 「Models can now transmit viruses in weight-space」(alphaxiv, 미독), 엔비디아 장비 $11.4M 운송 중 분실(FreightWaves), Apify 보안 사고.

## 목적별 모델 고르기 — 11-14 보드 점검

[/models/](/models/) 갱신: **행 1개 추가, 목적 셀 불변.**

- **확인(벤치, [AA](https://artificialanalysis.ai/leaderboards/models)):** 상위권(Fable 5.2 max 65·$26.54, Fable high 62·$9.08, Carbon high 60·$5.48, Sol max 55·$1.27, Sol xhigh 52·$0.76, Hydrogen high 51·$1.87) 변동 없음.
- **신규 — [Qwen3.8-Flash-Next](https://artificialanalysis.ai/models/qwen3-8-flash-next):** 29·$0.57, 180B/활성 6B, Qwen Community License 1.0, 작업당 34.9분, TTFT 88.8s, 71 tok/s. 공개 진영 비교: DeepSeek V4.1 Flash 1017 33·$0.60(가성비 셀 유지), MiMo-V2.6-Pro 30·$0.26(가장 쌈 셀 유지). 활성 6B라 디코드는 가볍지만 180B 총량은 Q4 기준 대략 100GB 안팎이라 **24GB VRAM + 64GB RAM 노트북에선 오프로딩 한계선 밖**일 가능성이 큼(추정 — 실측 아님).
- **AA Coding Agent Index:** Hydrogen·Qwen Flash-Next 조합 아직 없음.
- **미확인(커뮤니티):** “젬이 가성비 1황”(AA 기준 Sol 우위), “Fable 5.5 다음 주”(출처 없음), “6.2는 12월”(출처 없음).

## 의미 — 그리고 바꾸지 말 것

- **같은 날 두 얼굴.** 모델은 1,009쪽 교차 해독을 해내는데, 서비스 층은 인증과 전 표면 장애를 하룻밤 두 번 냈습니다. 에이전트(Duet·Managed Agents·Meetings)가 늘수록 장애 반경도 넓어집니다 — 이번 2차 장애 영향 목록에 Security·Managed Agents·Meetings가 다 들어간 게 그 증거입니다.
- **리셋 경제학이 상품 설계가 됐습니다.** Fable 프로모, 오차감 보상, Duet 연료 — 리셋이 ‘사과’가 아니라 신기능 채택 비용을 사용자 한도로 흡수하는 장치로 쓰입니다.
- **바꾸지 말 것 1:** 장애 대응으로 다계정·지역 우회로 가지 마세요. 1차 장애에서 보듯 정지와 장애는 겉보기로 구분이 안 되고, 우회 계정은 실제 정지 시 복구 경로가 없습니다.
- **바꾸지 말 것 2:** 리서치·요약 기본 강도를 xhigh로 올리지 마세요. AA 비용 곡선과 오늘 사용자 실험 모두 high가 효율 구간입니다.
- **바꾸지 말 것 3:** 오픈웨이트 기본값(DeepSeek V4.1 Flash, 날짜 버전 ID 고정)은 유지. Qwen Flash-Next는 점수·속도 모두 아직 대체 근거가 약합니다.

## 시도 후보

1. **상태 페이지 웹훅/RSS 구독:** status.claude.com·status.openai.com 인시던트를 슬랙·텔레그램으로 받아, 에이전트 파이프라인에 “장애 중 재시도 중단” 플래그를 거세요.
2. **리셋 사용 규칙 명문화:** Claude는 ‘원 앵커까지 ≥3일 & 주간 잔여 ≤20%’, Codex banked reset은 ‘주간 잔여 ≤20%’면 즉시(앵커 +7일 이동). 팀 문서에 한 줄로.
3. **계획서 검수 스텝:** Cowork/플래너 출력 → 구현 에이전트 전달 전, “논의 항목 체크리스트 대조”를 별도 저가 모델(또는 Decider류 분류기)로 돌리세요.
4. **장문 + 검증기 루프:** 사내 규정·계약서 묶음에 대해 “조항 간 충돌 후보 추출 → 사람/규칙 엔진 검증”으로 괴델 사례를 축소 재현.
5. **AI 생성 바이너리 배포 전:** 코드 서명, VirusTotal 사전 검사, 주요 벤더 오탐 신고 템플릿 준비.
6. **로컬:** llama.cpp v1로 올리고 Qwen3.8-27B를 Nace/MACaQ 계열 양자화와 기존 UD_4_XL로 KL·체감 비교(24GB에 적재 가능 구간).

## 소스 범위

국내: chatgpt·ai_utilize 개념/추천·고조회 + 11-13 18시~11-14 07:57 신규(자동 후보 60, 추가 목록 ~920편, 본문·댓글 40여 편). 해외: 레딧 RSS 2/8(LocalLLaMA·ChatGPT), HN 1면 30, [Claude 상태 페이지](https://status.claude.com/), [Karan Ahuja — Duet 초대·리셋](https://x.com/ahuja_karan/status/2121332990836163033), [Mike Overell — Duet 사용량](https://x.com/mboverell/status/2121340715771077044), [DeepSeek API](https://x.com/deepseek_ai/status/2121247896918253875), [Anthropic 안전성 평가 권고](https://x.com/AnthropicAI/status/2121317227618340990), [Guardian — 괴델](https://www.theguardian.com/science/2026/nov/13/kurt-godel-notebooks-ai-helps-unlock-hidden-discoveries-man-who-transformed-maths), [Fortune — OpenAI 로봇팀](https://fortune.com/2026/11/13/openai-disbands-robotics-team-as-its-general-models-start-running-robots/), [Ars Technica — Cristiano](https://arstechnica.com/ai/2026/11/ai-is-the-most-likely-reason-youll-die-openai-board-member-warns/), [llama.cpp v1](https://www.reddit.com/r/LocalLLaMA/comments/1xv8t2e/llamacpp_v10_is_here/), [Perplexity Decider v1.3(레딧)](https://www.reddit.com/r/LocalLLaMA/comments/1xv7fku/perplexity_releases_decider_v13_26b_and_decider/), [AA — Qwen3.8-Flash-Next](https://artificialanalysis.ai/models/qwen3-8-flash-next), [AA 리더보드](https://artificialanalysis.ai/leaderboards/models). 확인/미확인 표기는 본문 기준.

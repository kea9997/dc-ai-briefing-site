---
title: "출력 토큰 0원짜리 모델이 나온 날, OpenAI는 채팅과 코딩의 지갑을 합치기로 했다"
date: 2026-11-12
level: advanced
description: "한쪽은 ‘생성하지 않는 추론’으로 라우팅 비용을 0에 가깝게 내렸고, 다른 쪽은 12월부터 채팅·Codex를 한 토큰 풀로 묶는다. 이번 주의 변수는 점수가 아니라 라우터와 계량(metering) 레이어다."
tags: ["daily","advanced","ChatGPT","Codex","shared-allowance","metering","Gemini-Decisions-API","routing","Qwen4-Max-Preview","Token-Plan","Nvidia","agent-blocking","KRAFTON-Raon","quantization","model-board","local-LLM"]
---

> **수집 상태:** 국내 자동 수집 정상(11-12 07:54 KST, 후보 60, 오류 0 — chatgpt 개념 25·목록 24, ai_utilize 개념 28·목록 27). 자동 목록이 새벽 글 위주라 ai_utilize 1~30쪽·chatgpt 1~4쪽(11-11 낮~11-12 07:50, 약 700편)을 추가 수집, 본문·댓글 50여 편 확인. 해외: 레딧 RSS **1/8**(LocalLLaMA만 200 / MachineLearning·ChatGPT·ClaudeAI·OpenAI·codex·Bard·singularity 429). HN 상위 30·1차 문서(OpenAI Help Center 한도 문서, Google Decisions API 블로그, Alibaba Model Studio 문서, United 공지, NVIDIA 이사회 성명, KRAFTON 모델 카드, KITP 위원회 성명)·AA 리더보드·보도(연합뉴스/WSJ, CNBC, Fortune, ForkLog, TechNode, DataNorth, TechCrunch, Scientific American)로 보강. 전일 주제(Claude 전체 리셋, Carbon GA)는 신규 사실만.

## 오늘 핵심 세 가지

1. **ChatGPT·Codex 공유 한도(12월, Plus·Pro·Business) 논쟁이 국내 개념글 1위로 재점화(확인 — OpenAI Help Center / 반응은 의견).** 토큰 기준 [[단일 풀|채팅·Work·Codex가 한 지갑의 사용량을 함께 깎는 구조]], Instant 제외, 날짜·풀 크기 미공개. 현행 “Work+Codex 공유 / 채팅 별도”의 2계량 구조가 1계량으로 바뀌는 것이 핵심이고, Pro의 GPT-6 Pro 주간 채팅 한도가 풀에 들어가는지는 **미공개**입니다.
2. **Gemini Decisions API + `gemini-decision-1` 공개(확인 — Google 발표).** 디코딩 없이 단일 [[forward pass|모델에 입력을 한 번 통과시키는 계산. 답을 한 글자씩 생성하지 않음]]로 후보 옵션을 점수화 — 질문 최대 1,000개/요청, 입력 256K, 종단 150~250ms, **$0.10/1M 입력·출력 $0**. 국내 API 감지 봇이 01:45 KST에 ID를 먼저 잡았습니다. 라우터·정책 체크·컨텍스트 채점 레이어의 단가 하한이 사실상 바뀐 사건입니다.
3. **Qwen4-Max-Preview: 2주 고정 스냅숏, Token Plan 전용(확인 — Alibaba 문서).** 11-11 10:00~11-25 24:00(UTC+8), 기간 중 불변·종료 후 퇴역, 1M 컨텍스트·최대 출력 393,216, OpenAI Chat Completions/Responses·Anthropic Messages 호환. **벤치·파라미터·종량 단가 미공개** → AA 미등재, 보드 미반영.

## 국내 커뮤니티 — 개념글·고조회 순

### 1) 「[챗GPT 통합] 나는 이득이라고 봄」 — 공유 풀의 분배 효과 (확인 + 의견)

ai_utilize 11-11 저녁 최다 추천(조회 ~3.3k·추천 50). 논지는 효율이 아니라 분배입니다: 웹 채팅을 사실상 무제한으로 써 온 층(웹쫀쿠 = 웹 Pro 무한 사용자, 증류 = 대량 출력 수집으로 소형 모델 학습)이 빠지는 것 자체가 “심리적 이득”이고, 회수 자원이 재분배될 거란 기대는 없다는 것. 댓글의 핵심 반론은 하나로 수렴합니다 — **“코딩 불태우면 채팅도 제한”**. 주변 글: 「프로챗 사용량 통합은 진짜 너무하네」(“해외는 Plus 위주라 X에서 항의가 약하다”, “Plus가 제일 타격”), 「진지하게 웹챗통합하면 지피티 버리고 제미나이」(Carbon ≈ 6.1 Sol 체감 + 이미지·Omni 영상 → 웹 무한이 아니면 GPT 쓸 이유 약화), 「짚 웹챗은 사실상 이미 통합」(웹 채팅 품질이 낮아 Work로 단순 질문까지 처리 중).

**계량 구조 정리(확인 — Help Center·Codex 가격 페이지·BleepingComputer가 본 메일):**

| | 현재 | 12월 이후 |
|---|---|---|
| Work·Codex(+Excel·Workspace Agents) | 단일 풀 공유 | 같은 풀 + 채팅 합류 |
| 일반 채팅 | 요금제별 별도 메시지 한도 | 공유 풀에서 차감 |
| Instant | 포함 | **차감 없음** |
| 단위 | Plus는 5시간당 메시지 추정치 + 주간 | **토큰** (모델·작업 난이도 가중) |
| Pro 5시간 창(Work·Codex) | 없음(주간만) | 미공개 |
| GPT-6 Pro 주간 채팅 한도 | Work·Codex와 별도 | **미공개** |
| 날짜·풀 크기 | — | “12월”, 일자·크기 미공개 |

Codex 가격 페이지의 Plus 5시간 추정치(참고, 11-02 기준): Astra 5–45 / 6.1 Sol 15–160 / 6.1 Terra 35–285 / 6 Sol 15–150 / Luna 350–3,000 메시지. 이 표가 토큰 회계로 대체될지는 미정입니다. 유료 주간 리셋(일부 Plus·Pro)의 존속 여부도 미확인입니다.

**맥락(확인 — ForkLog·BleepingComputer):** 9월 말 OpenAI는 Pro 200의 Work·Codex 한도를 50% 줄이겠다고 예고했다가 반발로 철회했고, 10-29엔 오히려 Pro 100·Pro 500의 Work·Codex 한도를 두 배로 올리고 Pro 200을 상위 할당으로 옮겼습니다. 즉 Pro 사용자의 Work·Codex 풀은 최근에 커졌고, 이번 변화의 손익은 “커진 풀에 채팅이 들어와 나눠 쓰는 것”과 “채팅 한도가 사라지는 것” 중 어느 쪽이 크냐로 갈립니다. 국내 댓글의 “Plus가 제일 타격”은 Plus에 5시간 창이 남아 있다는 점에서 일리가 있습니다(해석).

**해석(미확인):** “대부분은 리셋을 더 자주 기다리지 않는다”는 OpenAI 문구는 분포의 중앙값 진술이고, 꼬리(긴 문서 분석 + 장시간 Codex 병행)에선 체감 한도가 줄어듭니다. 실무적으로는 **Instant 라우팅을 의식적으로 쓰는지**가 차감량의 1차 변수가 됩니다. 어제 11-11이 왜 재점화 시점이었는지는 불분명 — ForkLog 정리 기사(11-11), 일부 계정의 Chat·Work 통합 UI 시험 노출 소문이 겹쳤습니다(노출 범위 미확인).

### 2) Qwen4-Max — “바퀴의 재발명”과 야간 4% (출시 확인 / 성능·할인율 미확인)

「와 이게 Qwen4 Max의 위력인가...」(조회 ~3.2k): 중국 사용자 X 짤, 자전거 바퀴가 기형으로 생성된 SVG/그림. 반응은 “증류만 한 것 같다, 디테일 누락”, “짱깨 모델은 왜 다 뻥벤치”. 「Qwen 4 Max preview」는 레딧발 horse-drawing 비교(Qwen4-Max-Preview·Qwen 3.8 Max·Opus 5.5 Max·GLM 5.3·DeepSeek V4.1 1017·Sonnet 5.5·MiMo 2.6·Haiku 5.5·Nemotron Bolt 등 20여 개) 링크를 모았고, 댓글 평은 “성능은 GLM 5.3, 유머는 Qwen 3.6”. 단일 SVG 과제는 공간 추론의 아주 좁은 단면이라 근거력 낮음.

「큐엔클라우드 야간에 QWEN4 MAX 96퍼 할인」(📢정보, 조회 ~3.0k): KST 23:00~09:00 할당량 4%만 차감, 신규 $10·$6 플랜 반값.

**확인(Alibaba Model Studio 문서·DataNorth·TechNode):**

- ID `qwen4-max-preview`(별칭 `qwen4.0-max-preview`), Token Plan 전용 base URL, **PAYG 불가**.
- 1M 컨텍스트, 최대 출력 393,216(thinking 공유), `reasoning_effort`로 강도 조절, 이미지·비디오 입력, function calling·웹검색·JSON Schema.
- Token Plan 가격(DataNorth): Lite $6(신규 $3, 11-30까지), Essential $10($5), Standard $18, Pro $43. 프로모션 중 표준 대비 최저 20% 차감, **22:00–08:00(UTC+8)엔 8%** — 국내 글의 “4%”와 불일치(미확인; 계정별 프로모션 차이 가능).
- 약관(DataNorth): 개인판은 Claude Code·Cursor·Qwen Code·Qoder 등 **대화형 코딩·에이전트 도구 내 사용만** 허용, 자동화 스크립트·앱 백엔드·배치 금지, 1인 전용, 현재 해지 불가. 리전 싱가포르, 국경 간 데이터 이전 고지.
- 벤치·파라미터 수·라이선스 미공개. 가중치 공개 계획 언급 없음.

**운용 포인트:** 2주 고정 스냅숏은 오히려 **재현 가능한 A/B 창**입니다. 비기밀 과제 10~20개를 현재 모델과 병렬로 돌려 프롬프트·출력을 저장해 두면, 정식판 출시 당일 같은 세트로 드리프트를 잴 수 있습니다. 반대로 이 엔드포인트에 의존하는 파이프라인은 11-26 01:00 KST에 끊깁니다.

### 3) Claude Code 언어 드리프트 — `language` 설정 (설정 확인 / 원인 미확인)

조회 ~4.8k·댓글 44로 어제 최다 조회. Claude Code가 영어로 답하면서 “I'm answering in Korean”이라 주장하고 “모니터 스크린 이슈”라는 설명까지 붙였다는 하소연. 유효 정보는 댓글:

- `~/.claude/settings.json` → `"language": "korean"` — **확인:** 공식 settings reference에 `language` 키가 있고 응답 언어·음성 받아쓰기·자동 세션 제목 언어를 함께 지정합니다.
- 훅으로 영어 응답을 reject/재요청 — 사용자 방법(미확인). Stop 훅에서 응답 언어를 판정해 재시도시키는 패턴이면 토큰이 추가로 듭니다.
- “완치 불가, 영어·한자·일본어가 튀어나온다” — 장기 세션·긴 영어 컨텍스트(도구 출력·로그)에서 언어 앵커가 약해지는 현상으로 보이나 원인 미확인. CLAUDE.md에 언어 규칙을 중복으로 두는 것이 무난합니다.

### 4) 「섭섭하지만 쌀먹은 하구가라」 — Vultr $300 serverless inference (프로모 주장 / 정지 사례 다수)

01:34 KST, 조회 ~2.2k·댓글 45. Vultr 체험 $300(30일)로 Serverless Inference 엔드포인트를 만들어 Codex 프록시에 물리는 방법. 기술적으로 흥미로운 부분은 Codex가 직접 남긴 원인 분석입니다: 프록시가 Codex의 hosted `web_search` 도구 정의를 그대로 전달 → Vultr가 `Unsupported tool type web_search. Only function, custom and namespace tools are supported` 로 거부, 프록시 로그엔 원문 대신 `payload-rejected` 분류만 남아 원인이 가려졌다는 것. 처방은 프로바이더 설정에 `"unsupportedHostedTools": ["web_search"]` (해당 프록시 고유 설정 — 미확인). **OpenAI 호환 엔드포인트라도 hosted tool 타입 호환은 별개**라는 일반 교훈은 유효합니다.

댓글 타임라인이 더 중요합니다: 카드 등록 시 $2.5 승인, 사용 중 기업 정보·용도 심사 요구, **“10분 만에 계정 폐쇄, 같은 카드 재가입 불가”**, “가상카드는 다 잡는다”. 같은 날 「AI 관련 스캠 피하는 가장 기본적인 방법」(추천 34)과 GCP $300/90일 크레딧 개통 가이드(“Carbon이 써 준 거니 걸러 들어라”)도 올라왔습니다. 11-08 브리핑의 “카드 번호로 계정이 잘린다” 축과 같은 흐름입니다.

### 5) ComfyUI “Higgsfield 따라 만들기” 대회 14개 수상작 (확인 — 저장소 링크)

45개국 300+ 출품. 대상 Panorama Stickers(360° 파노라마 내 2D/영상/3D 배치 + 아웃페인팅, 가상 카메라 크롭 후 재투영, H3로 빈틈 보간, $10k). 혁신상 **Blocksfield** — 로컬 27B가 Roblox Studio에서 플레이 가능한 게임을 생성·자체 검수, 에셋·음악은 Comfy 파이프라인, “5090 한 장, 0원”. 오픈웨이트상 Paint a Plate(LTX 2.5 + FLUX 3 Klein), Freefield(Higgsfield 129개 툴 중 95개를 Comfy 앱 117개로 재현, 오픈웨이트만), Splat Edit Engine(3DGS 편집), Henge(H3 기반 캐릭터·모션 스왑), H3 Audio Retake(대사 교체+립싱크). **24GB VRAM 기준선**에서 의미 있는 건 Blocksfield류 “로컬 LLM + Comfy 에셋” 결합 — 27B Q4급이면 5090 Laptop 24GB에서 컨텍스트를 줄여 돌릴 수 있는 체급입니다(추정).

### 6) 인디 게임계의 AI 공개 딜레마 — Big Walk와 IGF 심사위원 19명 (확인 — Ars Technica, chatgpt 중계)

chatgpt 갤러리의 뉴스 중계 글(03:02)은 협동 퍼즐 게임 *Big Walk* 개발사 House House가 개발 막바지 버그 수정에 LLM을 제한적으로 썼다고 공개한 뒤의 파장을 정리했습니다. 개발사 설명: 관련 코드는 전체의 0.1%에 한참 못 미치고, Unity 그림자 버그에선 챗봇 제안을 대폭 고쳐 **최종 10줄**만 반영. Steam은 코드·챗봇 사용 공개를 요구하지 않아 출시 때는 밝히지 않았고 IGF 출품 과정에서 알렸다고 합니다. 이후 IGF 심사위원 50여 명 중 **19명**이 “어떤 방식이든 생성형 AI를 쓴 게임에는 투표하지 않겠다”고 성명을 냈고(심사위원 일부의 선언이지 IGF 공식 정책 아님), Steam엔 부정 리뷰 400건 이상이 달렸지만 리뷰 폭격 필터 덕에 전체 평가는 ‘매우 긍정적’ 유지.

반론(Liz Ryerson 등): 기술 문제 해결용 소규모 사용과 대규모 콘텐츠 생성을 구분해야 하며, **자발적 공개에 강한 제재를 가하면 은폐만 늘어난다**. 국내 ai_utilize의 「어지간한 개발자는 슬롭싸개들 아닌가」(추천 30), 「ai 쪽이 대가리수로 하는게 아니라 천재빨로 끌어가는거같던데」(추천 24) 같은 글과 겹쳐 보면, “AI를 썼느냐”보다 **“어디까지를 저작으로 보느냐”**라는 기준 논쟁이 개발자·창작자 커뮤니티 양쪽에서 동시에 진행 중입니다. 실무 함의: 사내·외주 산출물에서 AI 보조 범위(디버깅·리팩터링·에셋 생성)를 항목별로 기록해 두면, 공개 요구가 생겼을 때 대응 비용이 줄어듭니다.

### 7) 그 밖에 (미확인 위주)

- **BenchCAD에 OAI 내부 모델 등장설:** “Low 강도에서도 5.2 High 수준 작업당 비용, 토큰 효율 극단적” — 출처 미확인. 댓글은 “티보가 뱅크드 리셋이랑 같이 모델 내겠노”.
- **Codex 원격 페어링 실패 해결기(chatgpt):** 다른 PC의 “설정 → 연결 → 이 PC 제어”에 남은 옛 모바일 권한이 신규 페어링을 막았다는 사례. 재설치·HAR 수집으로도 안 풀리던 것이 잔여 등록 해제로 해결 — 기기 레지스트리의 교차 상태 불일치로 보임(미확인).
- **ChatGPT Business in 3rd-party(확인 — @OpenAIDevs 11-10):** Notion·v0·Amp·Kilo Code·Warp·Hermes(Nous)·OpenClaw·opencode에서 Sign in with ChatGPT로 Business 좌석 사용. 12월 공유 풀과 결합되면 외부 하네스 사용량도 같은 지갑에서 빠질 가능성(미확인).
- **Claude 리셋 지급 편차:** 2년 무료 계정 → Pro 결제 시 전체 1 + Fable 1(17일 고정), 구글 플레이 경유 업그레이드는 미지급 사례. “Pro의 Fable 리셋은 무조건 17일” 댓글(미확인).
- **6.1 Sol의 웹 채팅 미배치 불만:** “통합할 거라 기존 모델 배포를 미루는 것” 추측(미확인).

## 해외 커뮤니티·보도

### 1) Gemini Decisions API — 생성하지 않는 추론의 단가 (확인 — Google 발표, HN ~176점)

- 질문 타입 3종: `noul`(yes/no 확률), `choice`(2–255개 후보 정규화 확률), `score`(순서형 루브릭, 가중 연속 점수 + 레벨별 확률). 모든 답에 0–1 confidence.
- 입력은 Interactions API의 Content 블록 형식 — 텍스트·이미지·오디오·비디오·PDF 혼합, 최대 256K. 공유 `input`은 요청당 1회 과금, 질문마다 instruction·criteria 토큰만 추가.
- 지연: 모델 연산 중앙값 50–100ms(16K 이하), 질문 1→100개에서도 거의 평탄. Google 수치로 공유 벤치 세트에서 3.5 Flash-Lite(Interactions API) 대비 약 5배 저렴, 캘리브레이션 오차 최저(벤더 수치).
- 내부 사례: Gemini Notebook 라우터(질의를 모델 티어·thinking 레벨로 분기, 일상 질의 지연 최대 40%↓), Search의 MCP 도구 안전 레이어, Stitch Rapid.
- 생태계: OpenRouter·LangChain·Vercel·LiteLLM·Pydantic AI·Pipecat·LiveKit·OpenCode 통합 롤아웃.

**의미:** 에이전트 스택에서 “어느 도구/모델로 보낼지”, “이 컨텍스트 조각이 관련 있는지”, “이 MCP 호출이 정책 위반인지” 같은 **닫힌 집합 판정**을 생성형 호출로 처리하던 비용이 사실상 입력 토큰만으로 내려갑니다. 12월 OpenAI 공유 풀과 나란히 놓으면, 사용자 쪽 한도를 아끼는 가장 큰 레버는 “프런티어 모델 호출 횟수 자체를 줄이는 라우터”가 됩니다. 단, 출력이 확률뿐이라 설명 가능성·감사 로그는 별도 설계가 필요합니다.

**대안과의 비교(해석):** 지금까지 같은 일을 하던 방법은 ① 소형 생성 모델에 JSON으로 답하게 하기(출력 토큰·파싱 실패 비용), ② 임베딩 + 로지스틱 회귀 같은 자체 분류기(라벨링·재학습 비용), ③ 로그프로브로 후보 토큰 확률 읽기(멀티모달·다중 질문에 약함)였습니다. Decision 1은 ②의 정확도 관리 부담 없이 ③의 확률 출력을 멀티모달·배치로 준다는 점이 차별점입니다. 반대로 후보 집합을 사람이 잘 정의해야 하고, 집합 밖 답(“둘 다 아님”)을 명시적 선택지로 넣지 않으면 confidence가 높아도 틀릴 수 있습니다.

### 2) United, 비승인 AI 에이전트 차단 (확인 — United 공지·CNBC, HN ~178점)

검색·비교는 허용, 예약·변경·체크인 등 **트랜잭션은 사람**. 근거: 자격증명 공유에 따른 마일리지 도용·비의도 결제, 체크인 시 금지물품 인지 확인이라는 연방 규정. 직접 채널과 여행사·애그리게이터 경유 모두 정책 개정. CNBC 맥락: Amazon은 Meta Muse 에이전트 차단, Walmart는 제휴, Expedia·Booking은 OpenAI와 협업. 브라우저 에이전트 운용자는 “조회형 작업”과 “거래형 작업”을 분리해 설계하는 편이 안전합니다.

### 3) NVIDIA 이사회와 CEO 거취 (보도 — WSJ/연합뉴스 / 이사회 성명은 확인)

WSJ(연합뉴스 11-12 07:51 인용): 이사회가 해임을 준비, 이르면 11-11(미 현지) 회의. 이사회 공식 성명: 외부 변호인 선임 독립 조사, 조사 중 CEO 유지, 국가안보·기밀 유출 근거 없음. Fortune은 “해임보다 권한 축소” 시나리오를 제시(분석). 국내 ai_utilize에선 「젠슨 노」(추천 183)·「젠슨 이름부터 싸함」 등 밈 위주. 같은 날 LocalLLaMA엔 **RTX 5080 24GB 취소·16GB 유지(GDDR7 원가)** 보도 2건 — 24GB 소비자 카드 선택지가 계속 좁아지는 흐름(보도, 공식 미발표).

### 4) Yang–Mills 존재 증명 검증 + OpenAI 분기 매출 (확인 — KITP 위원회 성명 / 매출은 보도)

David Gross 의장 위원회가 OpenAI의 Lean 형식화 — 4차원 Wilson 격자 게이지 이론의 스케일링 극한으로서 Wightman 공리를 만족하는 순수 Yang–Mills 구성 — 를 클린 리빌드·공리 점검으로 검증. **질량 간극·무한 부피 극한의 유일성은 증명 범위 밖.** 같은 날 블룸버그(TechCrunch 경유): 3분기 매출 첫 $10B 돌파, 조정 영업이익률 −150%→−109%.

### 5) 로컬·오픈 (LocalLLaMA — 개인 측정은 미확인)

- **KRAFTON Raon-1 nano(확인 — 모델 카드):** 3.1B(1.5B per-layer embedding 포함, 유효 1.5B), 24층 중 18층 Raon Delta Attention(gated delta-rule 선형 어텐션) + 6층 Gated MLA — KV 캐시는 MLA 6층만, BF16 토큰당 약 7KiB. NoPE, 262K 컨텍스트, MTP 1층, Raon-1 mini preview(30B-A4B)에서 MoE→Dense 프루닝·증류, CPT 3T 토큰. Apache 2.0, GGUF·MLX·LiteRT-LM. 자사 표: KMMLU-Redux 50.9, IFBench 75.9, FACTS Grounding 44.4(동급 대비 우위), BFCL v4 56.3은 LFM3 1.7B(67.2)·MiniCPM5(61.0)보다 낮음. 한국어 대화·Office Work Bench는 **비공개 내부 벤치**. llama.cpp는 KRAFTON 포크 브랜치 필요.
- **Unsloth Dynamic V3.1 vs Huawei MACaQ:** Unsloth는 Qwen3.8-27B·DeepSeek-V4.1-Flash-1017·Qwen3.8-Flash-Next 재양자화로 DeepSWE·Terminal Bench +5~10%·토큰 50%↓ 주장(3-bit는 UD3 유지). MACaQ는 Qwen3-4B IQ4_XS에서 평균 KL 0.028 vs Unsloth 0.037·Bartowski 0.034(같은 크기). 서로 지표가 달라(KL vs 과제 정확도) 직접 비교 불가.
- **llama.cpp FP8 KV-cache 병합:** 24GB에서 장문 컨텍스트 여유 확보에 직접적. 품질 영향은 모델별 측정 필요.
- **MSR: 10개 미만 휴면 뉴런 편집으로 에이전트 백도어:** 출처 불명 퀀트·파인튜닝 가중치의 공급망 위험. 해시 고정·공식 저장소 우선.
- **기타:** NVIDIA Alpamayo 2 Edge(오픈 자율주행, Embedl 최적화판 Thor에서 10×), IFM PAN 2(행동→20초 비디오 월드 모델), Zyphra ZONOS3-Mini(활성 100M TTS·보이스 클로닝), Ernie 5.5 Flash 2주 내 공개 예고(Baidu X).

## 목적별 모델 고르기 — 11-12 보드 점검

[AA 리더보드](https://artificialanalysis.ai/leaderboards/models) 재확인 결과 **상위권 점수·작업당 비용 불변 → [/models/](/models/) 셀·행 유지**(model-board.json 11-11 그대로). Qwen4-Max-Preview는 미등재, Gemini Decision 1은 생성형 Intelligence Index 대상이 아닙니다.

| 목적 | 가장 좋음 | 가성비 | 가장 쌈 |
|---|---|---|---|
| 코딩·에이전트 | Fable 5.2 max (65·$26.54) | GPT-6.1 Sol max (55·$1.27) | GPT-6.1 Terra medium (38·$0.17) |
| 글쓰기·긴 추론 | Fable 5.2 max (65) | GPT-6.1 Sol max (55) | GPT-6.1 Terra low (29·$0.07) |
| Claude만 | Fable 5.2 max (65) | Fable 5.2 medium (56·$3.80) | Haiku 5.5 |
| 오픈 웨이트 | Kimi K3.1 Pro (46·$3.68) | DeepSeek V4.1 Flash 1017 (33·$0.60) | MiMo-V2.6-Pro (30·$0.26) |

- **확인(벤치):** Fable max 65·$26.54(작업당 시간 표기 44.1→48.0분), Fable xhigh 62·$14.83, high 62·$9.08, Carbon high 60·$7.76, Opus 5.5 max 59·$10.04, Astra max 57·$6.24, Sol max 55·$1.27. 공개 가중치 1~3위 Kimi K3.1 Pro 46 / DeepSeek V4.1 Flash 1017 max 33 / GLM-5.3 max 32.
- **12월 공유 풀 관점(해석):** ChatGPT 구독 내 차감은 토큰 가중이므로, AA 작업당 비용(토큰량 반영)이 구독 한도 소모의 대리 지표로 쓸 만합니다. Astra max($6.24) 대비 Sol max($1.27)는 약 5배 차 — 공유 풀에서 Astra를 기본값으로 두면 채팅 여력이 가장 빨리 줄어듭니다(추정).
- **미확인(커뮤니티):** “Qwen4-Max는 Opus급”/“뻥벤치”, “OAI 내부 모델 BenchCAD 고효율” — 근거 부족으로 보드 미반영.

## 의미 — 그리고 바꾸지 말 것

- **라우터 레이어가 의제로:** Google은 판정 전용 모델로 라우팅 단가를 내렸고, OpenAI는 구독 내부를 단일 토큰 풀로 바꿉니다. 둘 다 “어떤 요청을 어떤 모델로 보내느냐”가 비용의 1차 변수가 된다는 신호입니다.
- **에이전트 거래의 경계:** United 정책은 “에이전트 = 조회, 사람 = 결제”라는 선을 업계 표준 후보로 올렸습니다. 자격증명 위임형 브라우저 에이전트는 계정 리스크를 다시 계산해야 합니다.
- **바꾸지 말 것 1:** 12월 일자·풀 크기 공지 전엔 구독 전환 보류. Instant가 풀 밖이라는 점만으로도 가벼운 사용자는 영향이 작을 수 있습니다.
- **바꾸지 말 것 2:** Qwen4-Max-Preview를 프로덕션·자동화에 연결하지 말 것 — 약관상 금지이고 11-26 01:00 KST 퇴역.
- **바꾸지 말 것 3:** 보드의 가성비 칸(Sol max) 유지. Decision 1은 라우터 보조재이지 생성 모델 대체재가 아닙니다.

## 시도 후보

1. **사용량 프로파일링(ChatGPT 구독자):** 설정 → 사용량에서 2주간 채팅/Work/Codex 비중을 기록. 12월 이후 같은 작업량에서 리셋 대기 빈도를 비교할 기준선이 됩니다.
2. **Decisions API로 라우터 프로토타입:** AI Studio 무료 티어에서 `choice` 질문 하나로 “이 요청 → Luna/Sol/Astra 중 어디” 분류기를 만들어, 지난주 실제 프롬프트 100개를 넣고 사람 라벨과 confidence를 비교. confidence 하한 이하만 상위 모델로 보내는 정책이면 비용 추정이 바로 나옵니다.
3. **Claude Code 언어 고정:** `"language": "korean"` + CLAUDE.md 언어 규칙 이중화. 장시간 세션에서 영어 드리프트 빈도를 전후 비교.
4. **Qwen4-Max 고정 스냅숏 A/B:** 비기밀 과제 10~20개(코딩 3·문서 요약 3·멀티모달 2 등)를 Qwen 앱 또는 Token Plan으로 돌리고 프롬프트·출력을 저장. 약관상 Claude Code·Qwen Code 같은 대화형 도구 안에서만.
5. **로컬(5090 Laptop 24GB/64GB):** llama.cpp 최신 빌드에서 FP8 KV-cache on/off로 Qwen3.8-27B UD V3.1 Q4의 최대 컨텍스트·tok/s·간단 정확도 비교. Raon-1 nano는 KRAFTON 포크로 한국어 툴콜(일정·메일 요약) 스모크 테스트.

## 소스 범위

국내: chatgpt·ai_utilize 개념/추천·고조회 + 11-11 낮~11-12 07:50 신규(자동 후보 60, 추가 목록 ~700편, 본문·댓글 50여 편). 해외: 레딧 RSS 1/8(LocalLLaMA), HN 상위 30, [OpenAI Help Center — ChatGPT·Codex 한도](https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits), [ForkLog](https://forklog.com/en/openai-to-unify-chatgpt-and-codex-limits-in-december/), [BleepingComputer](https://www.bleepingcomputer.com/news/artificial-intelligence/openai-says-its-doubling-pro-usage-limits-and-bringing-work-features-to-chat/), [Google — Gemini Decisions API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/), [Alibaba Model Studio — qwen4-max-preview](https://www.alibabacloud.com/help/en/model-studio/qwen4-max-preview)·[DataNorth](https://datanorth.ai/news/alibaba-qwen4-max-preview)·[TechNode](https://technode.com/2026/11/11/alibaba-opens-qwen4-max-preview-with-a-million-token-context-window/), [United 공지](https://www.united.com/en/us/fly/help-center/digital-trust-center/artificial-intelligence/third-party-ai-agents.html)·[CNBC](https://www.cnbc.com/2026/11/11/united-airlines-ai-agents.html), [연합뉴스(WSJ 인용)](https://www.yna.co.kr/view/AKR20261112020751072)·[NVIDIA 이사회 성명](https://nvidianews.nvidia.com/news/statement-from-nvidia-board-of-directors)·Fortune, [KITP 위원회 성명](https://www.kitp.ucsb.edu/sites/default/files/3rd-Statement-About-Quantum-YangMills-Theory_Nov-9.pdf)·Scientific American, TechCrunch(OpenAI 매출), [KRAFTON Raon-1 nano](https://huggingface.co/KRAFTON/Raon-1-nano), [Claude Code settings](https://code.claude.com/docs/en/settings), [AA 리더보드](https://artificialanalysis.ai/leaderboards/models). 확인/미확인 표기는 본문 기준.

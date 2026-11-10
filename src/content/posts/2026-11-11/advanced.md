---
title: "카본은 열렸는데, 보드의 칸은 하나도 바뀌지 않았다"
date: 2026-11-11
level: advanced
description: "도입가 기간의 Carbon은 Fable high와 겹치는 자리에 섰고, 같은 새벽 Anthropic은 한도 계량 버그를 인정했다. 이번 주 변수는 지능 점수가 아니라 계량(metering)과 접근 게이트다."
tags: ["daily","advanced","Gemini-4-Carbon","Antigravity-swarm","Claude-reset","metering","Claude-Fable-5.2","prompting","Coding-Agent-Index","AlphaProof-Code","OpenRouter","Anthropic-IPO","model-board","local-LLM"]
---

> **수집 상태:** 국내 자동 수집 정상(11-11 07:53 KST, 후보 60, 오류 0 — chatgpt 개념 25·목록 23, ai_utilize 개념 28·목록 27). 자동 목록이 07:33 이후 글만 덮어서 ai_utilize 2~7쪽·chatgpt 2~4쪽(03:29~07:33, 약 150편)을 추가 수집, 본문·댓글 70여 편 확인. 해외: 레딧 RSS 4/8(LocalLLaMA·Bard 1차, MachineLearning·ClaudeAI 재시도 성공 / ChatGPT·OpenAI·singularity·codex 429). HN 상위·1차 문서(Google Carbon 발표, Anthropic 프롬프팅 가이드·What's new, @ClaudeDevs 공지, 상장 공지, Stripe·OpenRouter 공지)·AA(리더보드·모델 페이지·Coding Agent 페이지 데이터)·CNBC·9to5Mac·Ars Technica·The Register로 보강. 전일 주제 중 Fable 출시 스펙·Opus 너프 의혹·LiteLLM 슬롯 교체는 신규 사실이 있는 부분만 다룹니다.

## 오늘 핵심 세 가지

1. **Anthropic이 한도 계량 문제를 인정하고 유료 전 요금제에 “전체 모델·전체 한도 1회 리셋”을 지급(확인 — @ClaudeDevs, 11-11 06:59 KST).** 어제의 Fable 리셋은 주간 막대를 *Fable 사용분만큼만* 되돌려 이미 타 모델로 주간을 소진한 사용자에겐 효과가 없었다는 점까지 공지에 명시됐습니다. 기한 12-10 14:00 PT(12-11 07:00 KST), [[banked|지급 즉시 적용되지 않고 보관했다가 사용자가 원할 때 누르는 방식]] 방식.
2. **Gemini 4 Carbon 일반 공개 — 그러나 개인 구독은 Ultra($99.99~) 게이트(확인 — Google 발표).** AA v5 high 60·$7.76(정가 $4/$20 기준), medium 58·$6.59, low 54·$7.19. 11-30까지 도입가 $2/$10이라 실제 작업당 비용은 대략 절반(추정)으로 Fable 5.2 high(62·$9.08) 바로 아래에 겹칩니다. AA Coding Agent Index에선 Antigravity CLI+Carbon high가 약 59로 단일 모델 에이전트 최상위권. **보드 셀은 불변, 행·주석만 갱신.**
3. **Fable 5.2의 행동 차이 중 두 가지가 공식 문서로 확인(확인 — Prompting Claude Fable 5.2·What's new).** ① 코드 소유권 문장 하나로 중복 병합률 <10%→~50%(대가: 출력 토큰 ~1.5배, 6~10회 중 1회 기존 동작 변경). ② low/medium에서 *작업 완료 전 턴 종료*가 더 잦음 — 어제 국내 “미디움 조기종료” 체감(미확인)이 문서 수준에서 뒷받침됐습니다.

## 국내 커뮤니티 — 개념글·고조회 순

### 1) 전체 리셋 = 계량 버그 보상 (확인 — @ClaudeDevs / 운용 요령은 미확인)

ai_utilize 07:00~07:33 새 글 약 30편 중 절반이 리셋. 「클로드 주간리셋」, 「리셋권 바로 써버렸는데 또주네」, 「이제 리셋컴퍼니는 앤트로픽임」, 「리셋도 안주고 업데이트도 안하는 GPT는 뭐하냐」, 「티보야 미안해 우리도줘라」(티보 = Codex 사용량 리셋을 자주 공지해 온 OpenAI 측 인물을 부르는 국내 호칭).

공지 원문의 요지(서울 06:59, 노출 약 33만·좋아요 약 1.2만):

- 대상 Pro·Max·Ultra·Team, **“one free full reset, across all models and limits”**, 12-10 2:00PM PT까지 사용.
- 사유: “최근 한도를 의도보다 많이 쓰게 만들던 작은 문제 몇 가지를 고쳤다. 그리고 Fable 리셋은 이미 모든 모델의 주간 한도에 도달한 사람에게 별 도움이 안 됐다. 모두가 영향을 받은 건 아니지만 보상하고 싶다.”
- 해외 X에서는 “새 리셋 직후 10시간 만에 주간 100%”라는 GitHub 이슈와 연결하는 글이 돌았습니다(이슈 자체는 미확인). 「Claude 전체사용 100%, Fable 55%라면」류 질문이 새벽 내내 나온 것도 같은 맥락입니다.

**리셋 시맨틱 정리** — 오늘 시점의 리셋은 두 층입니다.

| 종류 | 지급 | 되돌리는 범위 | 기한 |
|---|---|---|---|
| Fable 리셋 | Max·Ultra 1~3장(구독 기간), Pro 1장 | Fable 막대 0, 5시간 창 비움, **주간 막대는 Fable 사용분만** | Max·Ultra 2027-03-08 PT / Pro 11-16 PT |
| 전체 리셋 | Pro·Max·Ultra·Team 1장 | 모든 모델·모든 한도 | 12-10 14:00 PT |

Fable 리셋의 “주간은 Fable분만” 동작은 「페이블 리셋 어떻게 적용 된다는거야?」 댓글(“페이블 0, 주간 32%”, “옅은 노란색 바만큼만 까짐”)과 공지의 사유 문장이 서로 맞물립니다. 운용상 결론은 단순합니다: **전체 리셋은 주간 막대가 95% 이상일 때만, Fable 리셋은 Fable 사용분이 주간의 큰 몫을 차지할 때만.**

**요금제 업그레이드 리셋 차익(미확인):** 「프거지는 초기화권 쓸거면 맥스로 올리고 쓰면 이익?」·「맥스 사야하는 이유있음」(“울트라 넘어가기 전에 맥스로 주간 50% 비우고 업글해서 리셋”)·「맥스에서 울트라 업글할떄」(“맥스 사용량 일할 계산을 200불에서 뺀 만큼”). 업그레이드 시 사용량이 새 플랜 기준으로 재시작된다는 레딧 증언 인용이지만 공식 문서로 확인하지 못했고, 과금은 일할(prorated) 계산입니다. 「클로드도 주간 리셋 쓰면 지피티처럼 날짜도 초기화 됨?」 → “클로드는 계정 갱신일 고정”(사용자 답변 — 미확인).

### 2) Carbon 첫 새벽 — 접근 게이트가 평가를 지배 (출시·가격 확인 / 체감 미확인)

03:29~06:30 ai_utilize 조회 상위 60편 중 약 35편이 Carbon. 반응 축은 세 개였습니다.

- **게이트:** 「카본쓰려면 10만원 내라고?」(“페이블이라도 따먹은 줄 알겠다” → 댓글 “커서벤치에선 따먹음”, “페이블을 따먹었는데 가격은 1/4?”), 「구글 요금제 급나누기 지림」(“인도는 아직 아르곤 안 열렸고 프로단은 카본 안 열림”), 「카본 얘기는 많은데 써본 놈은 없노」. 해외 r/Bard도 「Carbon's here, but not for Pro user, only for Ultra」, Plus 사용자 “Permission denied” 캡처가 상위. 공식 표기는 “Available to Google AI Ultra subscribers in select countries”.
- **오케스트레이터 후보론:** 「카본 좋습니다 꼭 써보셈.」 — “Fable 5.2 프록시(지휘)용으로 쓸 만, Fable 토큰도 아끼고 오케스트레이션 잘함”. 댓글에선 “사고 과정을 학습시킨 Luna(저가 GPT)가 제일 쓸만”이라는 반론. 구글 발표도 /swarm에서 Carbon을 “설계·조율·감사” 역할에 두고 가벼운 모델과 짝지으라고 합니다 — 어제의 *지휘·실행 분리*가 벤더 3사 모두의 공식 권고가 된 셈입니다.
- **체감 품질:** 긍정 「제미나이 카본 미디움 가성비 괜찮네」(“아르곤보다 훨씬 싼데 성능 잘 나옴” — 댓글 “로우·미디엄·하이 다 비싸다”, “지금 할인가”), 「카본은 걍 다시 짚클잼 3대장 시절」. 회의 「카본 좋다는건 걸러들어」(“지금 후기는 기존 울트라 구독자 표본, 아르곤도 벤치는 잘 나왔다, 2~3일 스테이”), 「카본 단점」(high가 느림 → “과추론, 벤치에서도 미디움이 위”), 「카본 검열필터」, 「제미나이 4 카본 vs 3사 모델별 침수 시뮬레이션」(“배가 뭔지를 모르나”, 동시에 “페이블 가격 심각”). 3D 데모 글엔 “출시 전 유출샷·수십 시간 깎은 구라샷” 반박.

AA 수치로 몇 가지를 검증하면(확인 — AA):

- high의 Intelligence Index 출력 토큰 205M(중앙값 72.8M의 약 2.8배), 작업당 26.0분, 첫 답 토큰 67초 — “느리다·과추론” 체감과 일치.
- **low(54·$7.19)가 medium(58·$6.59)보다 비쌉니다.** 점수는 4점 낮은데 작업당 비용은 9% 높고 시간도 비슷(22.7분 vs 23.8분). low가 낮은 effort에서 실패·재시도로 토큰을 더 쓰는 것으로 보입니다(해석 — 미확인). 실용 결론: **Carbon을 쓴다면 low는 건너뛰고 medium부터.**
- “오오푸스 이김”은 점수상 사실(60 vs Opus 5.5 max 59)이지만 차이는 1점입니다.

### 3) Fable 5.2 소유권 문장 — 하네스 설계 변수 (확인 — Anthropic 가이드)

「5.2블 신규(?) 행동양식」(추천 3)이 X 요약을 소개했고, 원문은 공식 「Prompting Claude Fable 5.2 › Say who owns the code」입니다. 수치(Anthropic 내부 소규모 코딩 과제 기준):

- 소유권 미기재 또는 “타인 코드” → 기존 구조에 덧붙이고 **인접 문제는 수정 대신 보고**.
- `This codebase is yours: what it's for and how it's built are your call, and you'll keep building on it.` → 중복 병합 <1/10 → 약 1/2. 긴 시스템 프롬프트 안에 있어도 효과 유지. 요청 기능 성공률은 양쪽 모두 거의 100%.
- 비용: 출력 토큰 약 1.5배, 미요청 변경(주로 테스트·문서) 증가, **버그 수정 외 기존 동작 변경 6~10회 중 1회**(effort가 높을수록 잦음), 최종 요약에서 작은 변경 누락 → *diff 리뷰 필수*.
- “No drive-by refactors, renames or cleanups”를 같은 프롬프트에 둬도 약 1/3은 여전히 병합 — **범위 제한 규칙이 소유권 문장을 상쇄하지 못함.**

같은 날 What's new 문서의 “Behavior differences”도 함께 볼 만합니다(확인): medium 이상에선 “숙고 없이 바로 답하라”는 지시로 thinking이 꺼지지 않음(→ effort로 조절), **긴 다단계 작업에서 남은 목록·계속할지 제안을 남기고 턴을 끝내는 일이 low·medium에서 더 잦음**, 긴 tool call 연속 중 사용자向 텍스트가 적음, 서브에이전트 위임량이 하네스 프롬프트에 크게 좌우(세션 비용의 큰 몫), 문장 길이 같은 스타일 규칙을 과하게 지켜 문장이 끊김. 마이그레이션 권장 순서는 `effort: high` 명시 → medium·xhigh 평가 병행 → 이전 모델용 지시 정리 → 최장 에이전트 작업으로 조기 종료·과위임·덧붙이기 관찰입니다.

댓글: “말해 줬더니 ‘그것도 모르겠냐’고 함”, “자기 코드 아니라 생각해서 주눅 든 것 같았다”.

### 4) Fable 한도 배율 (미확인)

「5.2 페이블의 한도 소모는 5.5 오푸스와 같은 토큰 기준 약 3배」(조회 약 400, 본문은 이미지), 「52페이블 미디움이 55푸스 하이보다 싼 거 체감 됨?」 → “구독제에선 오푸스보다 4~5배 빨리 닳아” vs “그건 API 기준 아닌가” vs “cost per task로도 페이블 미디움($3.80)이 오오푸스 하이($3.46)보다 비싸”. 마지막 지적은 AA 수치로 맞습니다. 배율 3~5배는 공개 근거가 없습니다. 확인된 건 도움말의 “Fable은 다른 모델보다 한도를 빨리 쓴다”와 오늘 공지의 “계량 문제 수정”뿐이라, **수정 전후로 배율 체감이 달라질 수 있다**는 점도 염두에 두세요.

### 5) ChatGPT 갤러리 (제보·체감 — 미확인 위주)

- 개념글 「개인 맞춤 설정 성격 강도 헷갈리지 않게 주의하삼」(추천 8): 성격 강도 슬라이더가 **왼쪽=강, 오른쪽=약**. “왜 자꾸 약으로 돌아가나 했다”는 고닉 댓글. UI 버전별 차이 가능.
- 「챗GPT 프로 결제하고 내 인생이 달라졌다」(댓글 30): 영상 PD가 Sol(인포그래픽은 Astra medium)로 프리미어 편집을 MCP 연동 자동화, “3시간 → 40분”. computer use(마우스·키보드 조작)보다 MCP가 훨씬 안정적이라는 실무 팁이 핵심.
- 「6.2로 한동안 라우팅 됐던 것 같은데」(“Astra max 이상, 저녁 먹고 오니 라우팅 끊김”), 「아스트라 5.2 출격한다는」: 미발표 모델 A/B 체감. 근거 없음.
- 사용량: Plus Codex 일일 소진, 「dots 너무 사기아니냐」(GPT 200 한도 소진 후 dots로 이어서 작업, “무제한”) — dots 정책 미확인.
- OpenAI Status 장애 복구(01:07 공유, 확인).

### 6) 보안 — capability URL·무샌드박스 에이전트·키 유출 (확인 — 보도 / 개인 사례는 미확인)

- **Grok Build 공유 앱(Ars Technica, Claroc 조사):** [[passive DNS|여러 네트워크에서 관측된 도메인 조회 기록을 모아 검색할 수 있게 한 데이터베이스]]로 `grok.me` 주소 43,601개 수집, 35,000개 이상이 링크만으로 앱·데이터 열람 가능. 원인은 [[capability URL|주소 안의 추측하기 어려운 문자열 자체가 접근 권한이 되는 링크. 주소가 새면 권한도 샘]]의 비밀 토큰을 **경로가 아닌 서브도메인**에 둔 설계 — DNS 조회 로그는 수집·검색됩니다. Claude 아티팩트·ChatGPT 공유·Gemini 공유는 경로 배치라 해당 없음이라고 기사 비교. 기본 공유 범위에 대해 회사 설명(기본 비공개)과 조사사 테스트(기본 ‘링크 보유자 전체’)가 엇갈림.
- **Autark(The Register):** Codex·Claude Code·Gemini CLI·Copilot CLI·Kimi Code를 매니저 에이전트가 배분하는 오픈소스(Apache). 샌드박스·승인·권한 차단 없음, 자체 실험에서 모호한 지시에 몇 분 만에 저장소·백업·SSH 키·`.env` 접근, 파일 권한 변경.
- **레딧 ClaudeAI:** “지출 한도 $30인데 Opus·Fable로 $167 사용됨, 커밋한 적 없는 오래된 키도 털림”(미확인). 지출 한도가 하드 캡이 아닐 수 있다는 점, 미사용 키 폐기·주기적 로테이션을 다시 확인하세요.

### 7) 짧게 본 것들

- 「오늘은 qwen4가 나오는날~」: 알리바바 후원 행사설, “주최는 아니다”는 반론 — 미확인.
- 「AI로 매출 1300만원」: 단순 클릭 게임 광고 수익 영상(본인 주장).
- 「ㅈ블럭스 쌀먹 COOMING SOON」: 로블록스 게임을 AI로 만들어 일 2만 원 광고로 유입시키는 실험(본인 주장).
- 어제 개념글: 커뮤니티 게시판을 메신저·시트·업무 채팅 UI로 바꾸는 크롬 확장(외부 서버 없음, 로컬 저장) — 작성자 “Opus 5.5는 레퍼런스를 줘야 디자인이 슬롭스럽지 않다”. Anthropic 직원의 Fable 5.2 “코드 페인팅”(1~2천 줄 파이썬 붓 시뮬레이터, 최대 70만 스트로크, 이미지 모델 미사용) 조회 약 5,500.

## 해외 — 교차 확인

### 1) Gemini 4 Carbon 발표 정리 (확인 — Google 발표·9to5Google·Engadget)

- **포지셔닝:** “Argon은 대부분의 SWE·지식 업무에 적합, Carbon은 다단계 코딩·디버깅·개방형 과학 연구처럼 지능 한계를 시험하는 작업용 — Argon보다 토큰을 더 써 탐색·심층 추론·검증 루프를 돈다.”
- **접근:** 유료 Gemini API(AI Studio·Android Studio)·Gemini for business 전체, Google AI Ultra(5x $99.99 / 20x $199.99)의 Gemini 앱·AI 모드·Antigravity. Pro($19.99)는 Argon까지. 과학자 6개월 무료 프로그램·사이버 방어 Fairwind 프로그램 별도.
- **가격:** 도입가 $2/$10 /1M(11-30까지, Argon과 동일) → $4/$20. AA 비용은 정가 기준이라 **도입 기간 실비는 대략 절반으로 추정**(캐시 할인 95% 등 구성에 따라 달라짐).
- **벤더 수치:** CursorBench 4.0·Perplexity WANDR·Zapier AutomationBench 1위 “차순위 외부 모델 대비 작업당 비용 2배 이상 저렴”; AA와 공동 개발한 Multimodal Knowledge Agent(MKA) 2위, 1위 대비 평균 작업당 비용 6배 이상 저렴.
- **/swarm(Antigravity 프리뷰):** 단일 프롬프트 → 병렬 격리 워크스페이스의 에이전트 팀, 적대적 검증자(adversarial verifier)가 모든 변경을 시험. Antigravity에는 비코딩 “Knowledge Work”도 추가.
- **안전 수치:** 적응형 레드팀 에이전트의 공격 궤적 99% 차단, 시도당 침투율 0.8%(Argon 3.1%), Gray Swan 자동 사이버공격 질의 성공률 2.17%(Argon 9.86%), 375개 에이전트 정직성 과제 92% 통과(Argon 70%).

### 2) AA Coding Agent Index — Carbon 첫 측정 (확인 — AA 페이지 데이터)

AA 코딩 에이전트 페이지(Index v2.0 = FrontierCode v1.1 + Terminal-Bench 4.0 + SWE-Atlas-QnA-AA 단순 평균)의 내장 데이터 기준, 에이전트+모델 조합 점수(약):

| 조합 | Coding Agent Index |
|---|---|
| Antigravity CLI · Gemini 4 Carbon (high) | 59.4 |
| Muse Code · Muse Wonder Full (max) | 58.9 |
| Codex · GPT-6 Astra (max) | 54.7 |
| Codex · GPT-6.1 Sol (max) | 54.1 |
| Antigravity CLI · Gemini 4 Argon (high) | 53.2 |
| Codex · GPT-6.1 Terra (max) | 48.1 |
| Codex · DeepSeek V4.1 Flash (max) | 47.3 |

라우터형 조합(Devin Fusion: Opus 5.5 max + GPT-6 Luna high 약 61.5, GitHub Copilot Fusion 약 59.9)이 더 높게 나옵니다. **Claude Code + Fable 5.2는 아직 측정 전**이고, Claude Code + Opus 5.5 행은 페이지 텍스트에서 점수를 안정적으로 읽지 못해 생략했습니다. 페이지가 차트 중심이라 수치는 내장 데이터 추출값이며, 소수점 이하는 반올림입니다.

### 3) AlphaProof Code (확인 — DeepMind, HN 약 550점)

Carbon 포함 다중 모델로 보안 목표를 정리(theorem)로 번역하고, 에이전트가 Lean 코드 수백만 줄을 생성해 Signal 암호 프로토콜 *실제 구현 코드*의 핵심 보안 성질을 수 주 만에 증명. HN 상위 반론: “과거 버그가 있던 사람 코드 전체를 검증했는데 버그 0개? 정리를 잘못 세웠거나 좁은 성질만 증명한 것 아닌가”, “사양은 의심하지 않고 구현만 검사”, “무엇을 증명할지는 여전히 인간이 정한다”. 형식 검증은 **명세가 곧 보증의 상한**이라는 점을 다시 확인시킨 스레드입니다.

### 4) Anthropic 상장 — 가격 범위와 리셋 해석 (확인 — Anthropic 공지·CNBC·Reuters / 연결 해석은 미확인)

- 8억 2,500만 주(회사 801,351,354주 + 기존 주주 23,648,646주), 주당 $70~78, 나스닥 “ANT”, [[그린슈|수요가 많을 때 주관사가 추가로 살 수 있는 옵션 물량]] 1억 2,375만 주. CNBC(소식통): 11-18 가격 확정·11-19 거래, 개인 배정 약 20%, 상단 기준 순조달 최대 $64.35B·완전희석 가치 최대 약 $1.405T. Reuters: 구글·엔비디아·AMD·브로드컴·마이크론·MS·TSMC 등 코너스톤 $26B 별도, 총 최대 약 $90.4B.
- 국내 「지금 ipo때문에 진짜 무리하는듯」(“유료 구독자 매출 숫자 뻥튀기”)은 해석일 뿐입니다. 공지된 리셋 사유는 계량 버그 보상이고, **로드쇼 기간에 한도 신뢰 문제를 진화할 유인**은 있다고 볼 수 있지만 인과는 확인할 수 없습니다.

### 5) Stripe × OpenRouter — 라우팅 레이어의 소유권 이동 (확인 — Stripe·OpenRouter 공식 계정)

Stripe가 OpenRouter 인수를 공식화(04:42 KST). OpenRouter: “1천만+ 개발자·기업”, “모든 모델은 동등한 위치(neutrality) 유지”. 의미: 멀티 벤더 라우팅·과금 레이어가 결제 인프라 회사로 들어갔습니다. 당장 API 변경은 없지만, OpenRouter에 데이터 경로·과금을 의존하는 팀은 **약관·데이터 처리 조항 변경 공지**를 추적하고, 대체 경로(LiteLLM 자체 호스팅 등)를 문서화해 두는 편이 안전합니다.

### 6) Claude Whiteboards·Sheets·Data (확인 — Anthropic, HN 약 130점)

Whiteboards·Sheets 베타, 기존 Dashboards → **Claude Data GA**(certified queries·live sharing 베타, 디자인 시스템·캐싱·변경 추적). interactive connectors가 대화 옆 풀 앱으로 열림(Adobe·Atlassian·Box·Notion). 관리자: Team은 3종 기본 ON, Enterprise는 Whiteboards·Sheets 기본 OFF, **Claude Data는 11-19 기본 ON** — 데이터 커넥터가 붙은 조직은 그 전에 권한 정책을 점검하세요.

### 7) 로컬·연구 (레딧 LocalLLaMA·MachineLearning — 개인 측정·주장은 미확인)

- **Apple “Harbor”(9to5Mac, 유출):** 썬더볼트 5로 여러 맥의 통합 메모리를 풀링해 오픈 웨이트 추론 서버화. Claris 브랜드 비공개 프리뷰. 맥 전용이라 기준 장비(RTX 5090 Laptop 24GB VRAM / 64GB RAM)와 무관.
- **DeepSeek V4.1 Flash(UD IQ1_M) vs Qwen 3.8 FN(NVFP4):** 같은 원샷 과제에 단일 에이전트 94 tok/s·60분·25만 토큰 생성·컨텍스트 34.6만 무압축 vs 메인+서브 5개 집계 350 tok/s·70분·총 80만 컨텍스트(압축 2회), 서브 2개는 “쓰겠다” 선언 후 미작성. 참고로 V4.1 Flash는 552B MoE라 IQ1_M이라도 우리 기준 장비의 VRAM+RAM 합(88GB)을 넘습니다 — 로컬 재현 대상 아님.
- **24GB에 들어오는 것:** Sophon-Realtime v1(32B 전이중 음성, Apache-2.0 — Q4급이면 24GB 근처, 실측 미확인), Qwen3.5-0.8B 풀 파인튜닝 스페인어 교정기(Q4_K_M 529MB, 렌트 RTX 5090 22분·약 $2.5), tts-bench 3차(오픈 91종 RTX 5090 32GB·3090 24GB 실측 — AuroraTTS-100K 첫 오디오 12ms·603배 실시간), Hugging Face 트렌딩 2D→3D(8GB VRAM).
- **연구:** Deletion Tuning — 게이트 프로젝션의 가중치 0.05% 미만을 0으로 만드는 이진 마스크만으로 RLVR·SFT·on-policy distillation에서 풀 파인튜닝과 동급, 망각이 적고 체크포인트가 수백~수천 배 작음. [[Weight-Space Programming|학습 없이 에이전트가 신경망 파라미터를 직접 읽고 고쳐 성능을 바꾸는 방법]] — Qwen3.5-9B에서 파라미터 1,023개 수정으로 MATH-500 +29.45pt(16개 궤적 중 6개는 실패). MiniMax H3-Image 오픈 웨이트 공개.
- **비판:** “AA가 오픈 웨이트가 근접할 때마다 재보정한다”, “Fable 5.2는 AI 가속 관련 능력을 학습 단계에서도 제한” — 둘 다 근거 미제시.

### 8) 짧게 본 것들

- **HN 「AI usage generates a fragile codebase」(약 320점·댓글 370):** “6개월 전부터 코드 품질은 아무도 신경 안 씀” vs “50만 줄 7개월, 취약성은 무의미” vs “정적 타입·정제 타입·함수형으로 테스트 표면을 줄여라” vs “주니어처럼 지침·도구로 기준을 맞추게 하라”. 위 3)의 *요약 말고 diff를 보라*와 같은 결론으로 수렴.
- **레딧 ClaudeAI:** 「Piano Test on Fable 5.2」 max 47분 07초·출력 262,305토큰(사고 243,553)·API $13.30; 「Unconvinced by Claude Fable 5.2」(토목: Opus 5.5가 더 담백·정직); 「Opus 5.5 vs Fable 5.2: Blender 3D」 high 대 high 비교; Fable 5.2 픽셀 애니메이션 개선 체감.
- **VulnCheck 「Glasswing 7개월」:** Anthropic 보안 프로젝트가 유지보수자에게 저품질 발견을 쏟아낸다는 비판(HN 상위 진입 전, 미확인 — 다음 점검).

## 목적별 모델 고르기 — 11-11 보드 점검

Carbon 일반 공개로 [AA 리더보드](https://artificialanalysis.ai/leaderboards/models)·[Carbon 모델 페이지](https://artificialanalysis.ai/models/gemini-4-carbon)·[코딩 에이전트 페이지](https://artificialanalysis.ai/agents/coding)를 재점검하고 [모델 보드](/models/)를 11-11 기준으로 갱신했습니다(**셀 불변, 행·주석 갱신**: Carbon high·medium 주석을 ‘일부 기관만’ → 일반 공개·가격으로, Carbon low 행 추가).

| 목적 | 가장 좋음 | 가성비 | 가장 쌈 |
|---|---|---|---|
| 코딩·에이전트 | Fable 5.2 max (65·$26.54) | GPT-6.1 Sol max (55·$1.27) | GPT-6.1 Terra medium (38·$0.17) |
| 글쓰기·긴 추론 | Fable 5.2 max (65) | GPT-6.1 Sol max (55) | GPT-6.1 Terra low (29·$0.07) |
| Claude 레인 | Fable 5.2 max (65) | Fable 5.2 medium (56·$3.80) | Haiku 5.5 |
| GPT 레인 | GPT-6 Astra max (57·$6.24) | GPT-6.1 Sol max | GPT-6.1 Terra |
| 오픈 웨이트 | Kimi K3.1 Pro (46·$3.68) | DeepSeek V4.1 Flash 1017 (33·$0.60) | MiMo-V2.6-Pro (30·$0.26) |

- **확인(AA 벤치, 11-11 08시 KST):** 상위 순서 Fable 5.2 max 65 > xhigh·high 62 > **Carbon high 60·$7.76** > Opus 5.5 max 59 > **Carbon medium 58·$6.59** > Opus xhigh·Astra max 57 > Fable medium 56 > … > **Carbon low 54·$7.19**(Fable low 54·$3.10과 동점, 비용 약 2.3배). Argon high 50·$9.95. 오픈 레인 변동 없음(Kimi K3.1 Pro 46).
- **셀을 안 바꾼 이유:** 정가 기준 Carbon high는 Fable high 대비 −2점·−15% 비용으로 [[파레토 곡선|같은 비용에서 더 높은 점수를 내는 모델이 없는 점들을 이은 선]]상 *사이*에 끼지만, 어느 셀의 1위도 아닙니다. 가성비 셀(Sol max)은 작업당 비용이 6배 차이. 다만 **도입가 기간(~11-30)엔 Carbon high 실비가 Fable medium($3.80) 근처까지 내려올 수 있어(추정)** API 사용자에겐 “60점을 4달러 안팎에” 쓰는 한시 옵션입니다. 12월 정가 전환 후 다시 판단.
- **Coding Agent Index(확인 — 페이지 데이터):** Carbon high 약 59로 단일 모델 최상위권, Argon high 약 53, Astra max 약 55, Sol max 약 54. Fable 5.2 미측정.
- **미확인(커뮤니티 해석):** “카본이 오오푸스 이김”(점수 1점 차), “카본 미디움 가성비”(AA상 medium이 low보다 싸고 높아 방향은 맞음), “카본은 Fable 지휘 프록시로 쓸 만”, “Fable은 Opus 대비 한도 3~5배 소모”, 벤더 벤치(CursorBench·MKA)는 독립 측정과 구분.

## 의미, 그리고 바꾸지 말 것

- **의미:** 프런티어 3사의 1군 모델 점수 차가 5점 안으로 좁혀지면서, 실제 선택을 가르는 건 **계량(구독 한도가 어떻게 깎이는가)과 접근 게이트(어느 요금제에 여는가)** 입니다. Anthropic은 계량 버그를 인정하고 보상했고, 구글은 1군을 최고가 티어 뒤에 뒀습니다. 둘 다 “점수표 밖” 변수입니다.
- **의미 2:** Carbon /swarm, Fable Advisor, 국내 LiteLLM 슬롯 교체, Copilot·Devin Fusion 라우터가 코딩 에이전트 점수 상위권을 차지하는 현상 — **단일 모델보다 조합이 점수와 비용 양쪽에서 앞서기 시작**했습니다. 라우팅 레이어(OpenRouter)가 결제 회사로 넘어간 것도 같은 흐름의 인프라 쪽 신호입니다.
- **의미 3:** Fable 5.2는 프롬프트의 *역할 프레이밍*(소유권)에 민감합니다. 기존 하네스의 “최소 변경” 규칙은 소유권 문장을 이기지 못하므로, 두 지시가 충돌하지 않게 **하나만 남기는** 설계가 필요합니다.
- **바꾸지 말 것:** 기본 라우팅을 Carbon으로 옮기지 마세요. 점수·비용 모두 기존 셀을 이기지 못하고, 개인 구독은 Ultra 게이트입니다. 도입가 기간 API 실험만 별도 레인에서.
- **바꾸지 말 것 2:** 전체 리셋을 지금 쓰지 마세요. banked라 12-10 PT까지 유효하고, 계량 버그가 고쳐진 뒤의 실제 소모율을 며칠 측정한 다음 주간 막대가 찼을 때 쓰는 게 기대값이 높습니다.
- **바꾸지 말 것 3:** 오픈 레인·로컬 기준선은 그대로입니다. 오늘 화제의 로컬 측정(DeepSeek V4.1 Flash IQ1_M)은 24GB+64GB에 들어가지 않습니다.

## 시도 후보

1. **소유권 A/B:** 개인 저장소 과제 5개를 Fable 5.2 high로 소유권 문장 유/무 각 1회 — 변경 파일 수, 출력 토큰, 기존 동작 변경 여부(테스트), 요약 누락 항목을 표로. 사내·오픈소스 저장소엔 넣지 말고, 넣는다면 “최소 변경” 규칙은 제거해 충돌을 없애세요.
2. **조기 종료 가드:** low/medium 실행 시 “종료 전 원 요구사항을 체크리스트로 대조, 미완료 항목이 있으면 턴을 끝내지 말 것”을 넣고, 미완료 감지 시 high 재시도 규칙(문서의 ‘Finish the whole task’ 절 참고).
3. **계량 로그:** 리셋 직후부터 3일간 작업별(모델·effort·대략 토큰) 주간 막대 증가분을 기록 — 버그 수정 후 Fable/Opus 실소모 배율을 내 작업 기준으로 산출.
4. **Carbon 한시 실험(API 사용자):** 11-30 전 AI Studio 유료 키로 Fable high에 맡기던 과제 3개를 Carbon **medium**(low 아님)으로 돌려 정답률·시간·실청구액 비교. 12월 정가 전환 시 재평가 메모를 남기세요.
5. **공유 URL 감사:** 팀에서 쓰는 AI 앱 빌더(Grok Build·Lovable·Bolt·Replit)의 공유 링크가 서브도메인 토큰 방식인지 확인, 공유 범위를 초대 기반으로.
6. **키 위생:** Anthropic·OpenAI·Google 콘솔에서 90일 이상 미사용 키 폐기, 지출 한도가 하드 캡인지 알림인지 문서로 확인, 남은 키 로테이션.
7. **라우팅 의존성 문서화:** OpenRouter 의존 서비스가 있다면 대체 경로(직접 벤더 API 또는 LiteLLM 자체 호스팅) 전환 절차를 한 페이지로 적어 두세요.

## 소스 범위

국내: ChatGPT·AI 활용 갤러리 개념글·고조회, 03:29~07:53 새 글(자동 수집 07:53 KST 후보 60 + 추가 목록 약 150편, 본문·댓글 70여 편). 해외: 레딧 RSS 4/8(LocalLLaMA·Bard·MachineLearning·ClaudeAI; ChatGPT·OpenAI·singularity·codex 429), HN 상위(AlphaProof Code·fragile codebase·Claude Whiteboards/Sheets/Data·Apple Harbor·Glasswing), [@ClaudeDevs 공지](https://x.com/ClaudeDevs/status/2120275296637321476), [Google — Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/), [Prompting Claude Fable 5.2](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2)·[What's new in Fable 5.2](https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2), [Anthropic 로드쇼 공지](https://www.anthropic.com/news/roadshow-launch)·CNBC·Reuters, [Claude Whiteboards·Sheets·Data](https://claude.com/resources/articles/sheets-whiteboards-data), [Stripe](https://x.com/stripe/status/2120240651778355306)·OpenRouter 공지, [AA 리더보드](https://artificialanalysis.ai/leaderboards/models)·[AA Carbon](https://artificialanalysis.ai/models/gemini-4-carbon)·[AA 코딩 에이전트](https://artificialanalysis.ai/agents/coding), 9to5Mac·9to5Google·Engadget·Ars Technica·The Register. 확인/미확인 본문 표시.

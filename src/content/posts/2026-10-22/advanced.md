---
title: "AI가 10년 묵은 PHP 구멍을 연 밤, 오픈AI는 ‘닷, 듀엣을 만나라’고 썼다"
date: 2026-10-22
level: advanced
description: "발견 비용이 무너지면 병목은 패치 배포와 권한 설계로 옮겨 간다. 같은 밤 세 회사의 상시형 에이전트가 메일·결제 권한을 달라고 줄을 섰고, AI 개발 도구의 키를 노린 공급망 공격이 PyPI에 두 시간 머물렀다."
tags: ["daily","advanced","PHP2Shell","CVE-2026-109618","CVE-2026-109619","Patch-the-Planet","Daybreak","defender-window","Claude-Duet","Dots-Day17","Muse-10M","Codex-Day16-indefinite-cache","busy-wait-quota-burn","Claude-reset-expiry","Fable-5-incident","LiteLLM-1.107.0-supply-chain","Raon-1-mini","EAGLE-4","OpenAI-on-Google-Cloud","AA"]
---

> **수집 상태(먼저 밝힘):** 국내 게시판 자동 수집기가 서울 07:53 TLS 단계에서 끊겼다(도메인 → 198.18.0.1, `UNEXPECTED_EOF_WHILE_READING`, 10-15부터 여드레째). 대체 경로로 ChatGPT·AI 활용 **목록과 개념글 목록**을 확보했지만, 오늘은 같은 경로로 **글 본문이 열리지 않았다**(뷰 페이지가 목록만 반환). 시간 창은 **ChatGPT 00:17\~07:25(+10-21 밤 일부)**, **AI 활용 04:31\~07:52**, 개념글 목록은 10-21 글 포함. 국내 부분은 **제목·조회·추천·댓글 수만으로** 쓴다. v=조회, r=추천, c=댓글, 시각은 서울(KST), 수치는 08:05\~08:20 기준. Reddit은 r/LocalLLaMA·r/codex만 성공, 나머지 6곳은 429(재시도는 302).

## 오늘 핵심 세 가지

1. **PHP2Shell: 발견의 한계비용이 무너졌다.** PHP 코어 엔진의 메모리 안전 결함 2건(CVE-2026-109618/109619, CVSS 9.2)으로 **비인증 원격 코드 실행 + 메모리 노출**이 가능했고, 영향 범위는 **5.4\~8.5.11**(10년 이상). 10-21 패치(8.5.12/8.4.27/8.3.36/8.2.35), 8.1 이하는 EOL로 무패치. Wiz는 Wiz Atlas·**Gemini 4 Argon**·**GPT-5.6 Sol**을 썼고, 오픈AI는 별도로 Calif가 5.6 Sol로 찾았다고 밝혔다. 국내 AI 활용 개념글(v1,980·r13)과 “근들갑” 반론이 동시에 돌았다. **결함·패치·타임라인은 확인**, “소프트웨어 역사상 손꼽히는 심각도”는 **발견자 평가**.
2. **상시형 에이전트 3파전 개막.** 앤트로픽 **Claude Duet**(Opus 5.5 기반, VM+브라우저, 결제·삭제 전 승인, 미국 Pro·Max 대기 명단, 플랜 한도 공유) 공개 25분 만에 티보가 「Dot, meet Duet」으로 **17일차**를 열었고, 메타는 실적 발표에서 **Muse 설정 1,000만 명**을 말했다. 국내는 「클 듀엣 왜 미국 계정밖에 안 줌」. **출시·수치는 확인**, 17일차의 구체 변경은 **미확인**.
3. **캐시는 무기한, 리셋은 만료, 대기는 과금.** 16일차(서울 10-21 10:10): API 12시간 프롬프트 캐시 + Codex·Work 로그인 사용자 **캐시 무기한 보관**. 국내 새벽은 “초기화권 만료 전에 쓰라”(v406)·“클로드 초기화권 23일 01시 소멸”(v275), r/codex는 **busy-wait로 한도 소진** 버그 신고. 그리고 **LiteLLM 1.107.0**(PyPI, 약 2시간 노출)이 Codex `auth.json`·Claude Code 설정까지 긁어 가는 탈취기를 실었다. **모두 원문 확인**, 피해 규모는 **미확인**.

## 국내 커뮤니티 — 개념·고조회 먼저

### 1) PHP2Shell — 개념글과 “근들갑” 사이

**국내(제목·수치 확인, 본문 미확인):**
- AI 활용 개념글 「OAI, 이번 PHP 취약점은 5.6 솔로 발견」(📢정보, 10-21, v1,980·r13·c6) — 어제 아침 이후 개념 탭에 오른 정보글 중 최다 조회.
- ChatGPT 00:33 「전세계 웹사이트에 해킹 비상…AI가 치명적 보안결함 발견」(📰뉴스, v202·r1).
- 반론: AI 활용 06:50 「Php 해킹 근들갑 아니냐」(v325·c4), 07:44 「php 취약점은 php가 구려서 그런 게 맞음」(c4). 같은 게시판 10-21 개념글 「빌 게이츠 “불순한 세력이 AI 쓰면 10억 명 사망할 수 있어”」(v1,462·r18)와 함께 “AI 위험론 피로감”이 섞인 분위기로 보인다(해석).

**기술 요지(확인=구글 클라우드·Wiz·PHP 재단):**
- **109618:** OOM 처리 경로가 요청 데이터를 *부분 초기화 상태*에서 끊고, 요청 정리 단계가 이를 유효한 데이터로 취급.
- **109619:** 요청 소유 내부 상태가 백킹 메모리 해제 후에도 살아남아, **같은 워커가 처리하는 다음 요청**이 정상 초기화 전에 낡은 상태를 사용(요청 간 [[UAF|use-after-free. 이미 해제된 메모리를 다시 참조하는 버그로, 공격자가 그 자리에 원하는 데이터를 심을 수 있음]]).
- 워커 재사용 모델(PHP-FPM 등)에서 요청 간 격리가 깨지는 구조라, 앱 코드와 무관하게 **런타임 자체**가 공격면이 된다. Wiz는 드루팔(8-20)·워드프레스(8-21)에서 비인증 RCE를 확인했다고 적었고, “Heartbleed형 메모리 노출”이라는 표현을 썼다.

**타임라인(확인=Wiz):** 8-19 발견 → 8-24 PHP 보안팀 보고 → 9-21 PHP 인지·공동 수정 착수 → 10-21 패치·공개. 보고부터 공개까지 **58일**.

**누가 찾았나 — 귀속의 정치(해석):**
- 구글 클라우드 블로그: “**Gemini 4 Argon**이 발견·익스플로잇 개발·공격 탐지·패치 검증에 *invaluable*한 기여.”
- Wiz: “Wiz Atlas, Gemini 4 Argon, GPT-5.6 Sol을 연구 전반에 사용했고, 특히 Argon의 기여가 컸다.”
- 오픈AI: “Calif가 Patch the Planet의 일환으로 **GPT-5.6 Sol**로 치명적 결함을 찾았고, Wiz도 *독립적으로* 두 결함을 찾아 보고했다.” 오픈AI는 자신이 메인테이너·연구자·보안업체 연합을 **이끌었다**고 썼다.
- 즉 **같은 결함이 최소 두 경로(Calif+Sol, Wiz+Argon/Sol)로 독립 발견**됐다. 국내 개념글 제목은 오픈AI 서사를 따랐다. “어느 모델이 찾았나”보다 중요한 건, **독립 재발견이 두 달 안에 일어났다는 사실 자체가 공격자 재발견 확률을 시사한다**는 점이다.

**오픈AI가 제안한 5단계 대응 틀(확인=원문):** ① 업스트림 검증·수정(프론티어 모델로 패치 우회·변종 탐색 포함) ② 사전 통지 대상 선정(배포판 백포트, 호스팅 완화, WAF 룰) ③ 정부 협력(백악관 Super Intelligence Force, ONCD, CISA 언급) ④ 제품군 전반 업데이트 준비 ⑤ 공개 후 배포 지원. 그리고 공개 질문으로 “관리 권한을 잃은 시스템을 정부·운영자가 **취약점을 이용해 대신 패치**해도 되는가”, “인터넷 전역 상시 스캔 후 통지 또는 패치”를 던졌다. 함께 **Daybreak 보조 접근 10억 달러**, Daybreak용 **추가 차단 분류기** 보정을 발표했다.

**읽기:**
- 병목 이동: 발견이 싸지면 비용은 **트리아지·백포트·배포**로 간다. 오픈AI가 “비슷한 발견이 앞으로 몇 달간 급증할 것”이라 적은 건, 메인테이너 측 처리량이 다음 제약이라는 뜻이다. Codex for OSS 구독·러스트 재단 후원도 같은 맥락.
- “근들갑” 반론의 맞는 부분: C로 짠 런타임의 메모리 안전 문제는 새 유형이 아니다. 틀린 부분: Wiz 요지는 *결함의 존재*가 아니라 *익스플로잇 체인 구성 비용*이 AI로 무너졌다는 것 — “버전·설정·메모리 레이아웃별 적응을 모델이 반복 디버깅으로 해 준다.” 이는 **패치 지연 = 노출 기간**의 공식이 더 가팔라졌다는 뜻이다.
- 실무: 8.1 이하 EOL 스택(레거시 호스팅, 오래된 컨테이너 베이스 이미지)이 최대 리스크. 구글 클라우드는 서버리스 PHP 런타임 자동 패치를 롤아웃 중이고, AWS도 보안 공지를 냈다. 정적 사이트(GitHub Pages 등)는 무관.

### 2) Dot · Duet · Muse — 상시형 에이전트 3파전

**국내(제목 확인):** AI 활용 05:53 「클 듀엣 왜 미국 계정밖에 안 줌ㅠ」(v213·c2), 05:24 「클로드리플은 근데 약관 ㄱㅊ한 건가」(v162), 07:46 「17일차 개선은 닷인가 보네」(v72), 07:49 「티보 닷 소식 가져오려고 했는데」(v79), 04:36 「오늘 티보 개선 아직 안 올라왔지?」(v335), 04:38 「dots로 키배 뜰 수 있나?」, 06:03 「Muse 가입, 예전 방법이 요즘 잘 안 된다는 얘기가 나오는 이유」(v172). 10-21 개념글 「외국의 AI 어항 에피소드...jpg」(v2,852·r22)도 상위였으나 이미지 글로 내용 미확인.

**Claude Duet(확인=더버지·CNBC·MacRumors, 서울 10-22 04시대):**
- Opus 5.5 기반. 아침 브리프 → 연결 앱을 몇 시간 간격으로 점검 → 필요 시에만 메시지. 대시보드·재무/영업 예측·프로토타입·웹앱 구축까지.
- 실행 환경: **브라우저 달린 VM**. Claude 계정의 메모리·스킬·커넥터를 그대로 가져오고, 대화는 **단일 연속 스레드**.
- 안전 설계: 결제·메시지 발송·서명·삭제 전 **승인 요청**, 비밀번호·로그인 정보는 보지 않음, 최고 등급 민감정보(카드 번호 등) 공유를 거부하는 **전용 분류기 + 안전 시스템 프롬프트**.
- 접근·과금: 미국 Pro·Max, 대기 명단. MacRumors: “기존 Claude 플랜 한도를 쓰고, **백그라운드 점검도 한도에 계산**된다.” 앤트로픽 자평: “스레드를 오독하거나 긴급도를 잘못 잴 수 있다”, 티켓 예매 같은 개인 심부름은 약함.
- VentureBeast는 “Claude Loop가 Duet로 이름을 바꿨다”고 썼다(**미확인**, 앤트로픽 공식 설명 없음).

**Dots 쪽(확인=티보 글 원문 문구, 해석=미확인):**
- 서울 04:38 「Dot, meet Duet. Duet, meet Dot. Be nice to each other.」 — 해커뉴스 「Claude Duet」 등록(04:14) 약 25분 뒤. 07:08 「Dot, Dotter, Dottest — Fully included in the Pro plan, doesn't draw on your weekly usage.」
- 비교 기준선(확인=OpenAI 도움말): 첫 닷은 Pro·Business Premium에 포함, **닷과의 대화는 한도 미차감**, 닷이 시작·관리하는 Codex/Work 작업은 공유 한도 차감. 07:08 문구가 “닷의 직접 작업까지 주간 한도에서 뺀다”는 확장인지, 등급(Dot/Dotter/Dottest) 신설인지는 **08시 기준 공식 문서로 확인되지 않았다.**

**Muse(확인=CNBC):** 저커버그, 실적 콜에서 “지난 한 달 반 동안 미국·캐나다 1,000만 명 이상이 Muse 개인 에이전트를 설정.”

**읽기:**
- 과금 철학이 갈린다. Duet은 **백그라운드 점검까지 플랜 한도 차감**, Dots는 **대화 무료·작업 차감(+17일차 확장 가능성)**. 상시형 에이전트의 비용 대부분은 “지켜보기”(폴링)에서 나온다는 점에서, 이 차이는 체감 한도에 직접 반영될 것이다(해석).
- 공격면: 세 제품 모두 메일·캘린더·드라이브 커넥터가 전제다. 10-20 고급판의 「Dots에 지메일·드라이브 연결 금지」 PSA(간접 [[프롬프트 주입|에이전트가 읽는 외부 콘텐츠에 명령을 숨겨 권한을 탈취하는 공격]])는 Duet에도 그대로 적용된다. Duet의 “승인 게이트 + 민감정보 분류기”는 **출력 쪽 방어**이고, 입력(메일 본문) 쪽 주입 방어는 공개 자료에 구체적이지 않다.
- 오픈AI 16일차의 API 문구 자체가 “Persistent agents, like dots, reuse context throughout the day”였다 — **무기한 캐시는 상시형 에이전트 원가 구조의 전제 조건**이다. 이제 3번 항목과 연결된다.

### 3) 캐시·리셋·대기 — 한도의 회계학

**국내(제목 확인):** AI 활용 05:39 「리셋권 시간 지나서 날리지 말고 빠딱빠딱 쓰셈」(v406·c2), 05:58 「클로드 초기화권 23일 새벽 1시 소멸이다」(v275·c2), 05:50 「내일 만료되는 클로드 리셋권 몇 시까지임?」, 07:15 「2\~3일 간격으로 리셋권 쳐뿌리지 말고」(v195), 06:45 「초기화권도 나오자마자 다 쓰는 편」, 06:47 「토큰 녹아버렸네...」, 07:05 「ㅅㅂ 토큰을 얼마나 갖다 버린 거지」, 05:39 「티보가 리셋을 뿌리게 하는 방법」. 10-21 개념글 「파딱아 미안하다 월에 수백 달러씩 쓰고 있는 줄 몰랐노..」(v2,225·r19).

**16일차(확인=티보 원문, 서울 10-21 10:10):** “API에서 12시간 캐시 선택 가능, Codex·Work 로그인 사용자는 **캐시를 영구 보관**, 오래된 대화 복귀·몇 시간 뒤 재개에도 패널티 없이 **캐시 적중 보장**.” OpenAI Devs: “공유 지시문·도구·컨텍스트를 더 오래 캐시해 몇 시간 간격 요청에도 낮은 cached-input 단가.”

**r/codex 반응(미확인):**
- 「Permanent Caching… Makes Pro Subscriptions More Valuable Than Ever」 — “사실상 가격 인하. 단 **계정을 바꿔 쓰면 캐시를 잃는다**.” 다계정 운용 유인을 줄이는 설계로도 읽힌다(해석).
- 「Bug: Codex exhausts entire usage quota busy-waiting on a long-running test instead of sleeping」 — docker 로그·API로 상태를 확인할 수 있는 장기 작업을 기다리며 **추론 토큰으로 폴링**. 캐시가 무기한이어도 폴링 출력 토큰은 공짜가 아니다.
- 「Astra: Selected model is at capacity」($500 플랜, xHigh-Ultra 4시간에 전체 한도 소진·리셋 2회), 「Astra Light」(5시간 창을 45분에 소진, 대신 Sol 6.1 high보다 성과), 「Quality nerf is worse than quota nerf」, 「Anyone get /goal to do something useful?」(10시간 goal 실행이 목표 무시하고 잡버그 수정).

**Claude 무료 리셋(확인=Claude 도움말):** Settings > Usage에서 즉시 적용, 취소 불가, 주간 리셋 주기는 그대로, **만료 시각은 해당 화면에 표시**, 모바일·Claude Code에서는 버튼 없음(웹·데스크톱). 국내 “23일 01시”와 서드파티 “10-22 PT 23:59” 표기가 불일치 — **계정 화면 기준으로 확인할 것**.

**읽기:**
- 리셋은 만료되는 **할인권**, 크레딧은 잔액, 캐시는 **감가상각 없는 선급 비용**이 됐다. 최적 전략이 단순해진다: 만료 직전 리셋 소진, 긴 작업은 **같은 스레드에서 재개**(새 스레드 = 캐시 미스), 장기 대기는 에이전트 밖으로(`sleep`/백오프, 외부 웹훅).
- 28일 이벤트 17일차 시점 집계(트래커 기준): 리셋 7회, 개선 14회(일부 날 중복). 리셋이 예측 가능해질수록 사용자가 리셋 *타이밍*에 맞춰 사용을 몰아 쓰고, 그게 다시 용량 오류를 부르는 순환이 r/codex 글들에서 보인다(해석·미확인).

### 4) ChatGPT 새벽: 언어 혼입·라우팅 의심

**국내(제목 확인, ChatGPT):** 04:28 「지피티 갑자기 왜 러시아어 하는 건데?」, 03:36 「지금 중국어 쓰고 영어 쓰고 난리 났다」, 10-21 밤 「이거 왜 짱개말함」(c3), 03:45 「6이든 5.6이든 왜 자꾸 5.4로 라우팅되냐」, 00:25 「모델 제멋대로 바꾸는 버그는」, 01:00 「그냥 6.1 아래는 다 폐급 같다」(v319·c3), 03:42 「대답을 초등학생마냥 하는 거임?」(v140·r2), 01:07 「내 지피티는 항상 2025년 기준으로 말함」, 이미지 02:00 「100% 확률로 에러가 발생하는 이미지 프롬프트」(v374), 01:47 「이미지 만드는 거 왜 이렇게 병슨 됐지」.

**해외(r/codex, 미확인):** 「Does Codex secretly downgrade you to GPT-5?」 — Astra가 “GPT-5.0 기반”이라 자기 보고.

**읽기:** 모델 자기 보고는 학습 데이터 속 명칭의 재생산이라 라우팅 증거가 아니다. 언어 혼입은 긴 컨텍스트·압축(compaction) 이후, 또는 샘플링 쪽 문제에서 흔하다(일반론). 판별은 ① 같은 프롬프트를 새 스레드에서 N회 ② UI 모델 표기·응답 헤더 ③ 응답 지연 분포로 하는 게 맞다. status.openai.com에는 08시 기준 해당 시간대 기록 없음.

### 5) Fable 5 장애(04:49\~05:29 KST)와 “다른 모델 성능 저하”

- **확인(status.claude.com):** 10-21 19:49 UTC “Claude Fable 5 요청 오류 증가 조사” → 20:29 UTC “**다른 Claude 모델에 영향을 준 문제**가 해결됨”. StatusGator 기준 영향 컴포넌트: claude.ai·API·Claude Code·Cowork.
- **국내:** 07:17 「페이블 고장으로 다른 모델 성능 저하」(v185), 04:54 「지금 opus5.5 쓴다고 페이블에 라우팅되는 거 없지?」(v227).
- 읽기: 해결 문구가 장애 범위를 Fable 밖으로 넓혔다는 점에서 국내 체감과 정합. Duet 발표(04:14\~04:53) 직후 시간대라는 점은 우연일 수 있다(**미확인**).

### 6) 로컬·오픈 모델

- **국내:** 05:23 「한국어 특화 decision 모델 Xevn-4B 공개함 (Jev류)」(📚활용, v371·r5), 07:41 「로컬의 발전 속도가 도를 넘고 있다」, 05:05 「Qwen5 나올 쯤이면 6솔 정도는 로컬로도…」, 07:06 「이미지 생성 모델 쓸 때 양자화 모델 쓰면 생성 속도 더 느림?」(c2).
- **KRAFTON Raon-1-mini-preview(확인=HF 카드 요지):** 30B-A4B MoE, 처음부터 자체 학습, 한국어 대화·에이전트 과제 강조, Apache-2.0, GGUF 동시 공개. RTX 5090 Laptop(24GB)에서 Q4급이면 가중치 약 17\~18GB 추정으로 KV 여유가 빠듯하지만 시도 가능 구간(**추정**).
- **r/LocalLLaMA(미확인):** 「EAGLE-4」 Qwen3.8-27B 기준 바닐라 대비 MTP 2.22× / DSpark 2.57× / DFlash 2 2.80× / **EAGLE-4 3.59×**(llama.cpp·vLLM 미지원). 「RecursiveSI/flint (40B A2.5B)」. 「OK, fine, Qwen 3.8 Flash Next is nice」(Strata IQ4_XS). 「35B MoE on iPhone 20.5 tok/s」(OpenBMB, 전문가 가중치 플래시→연산 선읽기). 「Tried running 748B DeepSeek-V4.1-Flash on a €2k PC」(3090+DDR4 128GB, 1비트 양자화 7.2 tok/s) — 제목의 748B는 모델판 기록(총 552B)과 불일치, **미확인**. 「Specter」(양자화+멀티스텝 추측 오프로딩) 논문.
- **하드웨어 경보(미확인 공유):** 「삼성 2027년 HBM 100% 완판, HBM 200%·DRAM 두 자릿수 상승 예상」, 「바이트댄스·알리바바·텐센트 엔비디아 칩 350억 달러 주문」. 반대로 「중국, RAM 생산 두 배」.

## 해외 교차 확인

- **LiteLLM 1.107.0 공급망 공격(확인=SafeDep, HN 약 390점):** PyPI 업로드 11:39 UTC(서울 20:39) → 13:40 UTC 이전 삭제. 휠 7종 모두 `site-packages`에 `cook.pth`·`cook.py`·`sitecustomize.py` 투하 — **litellm을 import하지 않아도 모든 파이썬 프로세스 시작 시 실행**. 수집 대상: SSH 키, 클라우드 자격증명, CI/CD 비밀, 브라우저 비밀번호, LiteLLM 프록시 DB의 공급자 키, 그리고 `ai_devtools` 모듈로 **Claude Code·Claude Desktop·Cursor·Windsurf·Copilot·VS Code `mcp.json`·Gemini CLI·Codex `auth.json`·Aider·opencode·Hugging Face 토큰**. 매시간 GitHub 파일에서 C2 주소를 읽어 2단계 코드 실행(계정 삭제로 현재 비활성). 태그·sdist 불일치, provenance 증명 부재 — SafeDep은 “비공개 릴리스 파이프라인이 공격자 수정 소스로 빌드”를 중·고 신뢰로 평가. 1.106.2·rc1·rc2는 정상. IOC: `/tmp/.pc_once_72129118c59f5636c0bb`, `/tmp/remote_code_loader.lock`, `PRIVCOLLECT_ACTIVE=1`. **국내 두 게시판 목록에서는 미언급.**
- **OpenAI models on Google Cloud(확인=공식):** Model Garden 판매(마켓플레이스 결제, GCP 약정 차감 가능), Antigravity·Gemini Agent에도 곧 탑재. “주 클라우드 파트너는 여전히 마이크로소프트.” 같은 날 PHP 건에서 구글은 Argon을, 오픈AI는 Sol을 앞세웠다 — 경쟁과 유통 제휴가 동시에 진행 중.
- **기타 HN:** eMudhra CA 키가 수 밀리초 만에 크래킹(약 797점, AI 무관 PKI 이슈), GitLab·Railway 보안 공지, 오픈AI 「수천 개 에이전트로 생물학 데이터의 새 단서 탐색」(약 123점).

## 한 장으로 보는 오늘

| 항목 | 확인 | 미확인 |
| --- | --- | --- |
| PHP2Shell | CVE 2건·CVSS 9.2·패치 4개 라인·58일 공개 창 | 실제 악용 여부 |
| 발견 귀속 | Calif+Sol, Wiz+Argon/Sol 독립 발견 | 모델별 기여 비중 |
| Claude Duet | Opus 5.5·VM·승인 게이트·미국 대기 명단 | 입력측 주입 방어·한국 일정 |
| Dots 17일차 | 티보 문구 2건 | 변경 범위·한도 정책 |
| 캐시·리셋 | 16일차 무기한 캐시·Claude 리셋 규칙 | 계정별 리셋 만료 시각 |
| LiteLLM | 1.107.0 악성·IOC 공개 | 감염 호스트 수 |
| Fable 5 | 40분 장애, 타 모델 영향 문구 | 영향 범위 |

## 목적별 모델 고르기 (AA 10-22 재확인)

[/models/](/models/) 스냅샷을 **10-22로 갱신**했다. 근거 [Artificial Analysis 리더보드](https://artificialanalysis.ai/leaderboards/models). **goals(가성비/가장 좋음/가장 쌈) 셀은 변경 없음.**

- **확인(벤치·AA):** Opus 5.5 max 58·$5.98 / Sonnet 5.5 max 56·$5.46 / Opus 5.5 xhigh 56·$3.46 / Muse Wonder Full max 56·비용 미공개 / Astra max 53·$3.26 / Gemini 4 Argon high 53·$1.99 / **GPT-6.1 Sol max 52·$0.72**(코딩 가성비 앵커) / 6.1 Sol medium 48·$0.21(대량 바닥선) / MiMo-V2.6-Pro 46·$0.13(오픈웨이트 1위) / DeepSeek V4.1 Flash 1017 max 45·$0.26·약 206 tok/s / Haiku 5.5 max 43·$0.21 / **MiniMax-M3.1-Flash 42→43**·$0.22 / Luna max 38·$0.07.
- **오늘 화제 대입:** PHP2Shell에서 거론된 두 모델 — Argon high(53·$1.99)와 5.6 Sol — 중 5.6 세대는 현재 AA 상위 표에 없고 후속 6.1 Sol이 앵커다. 보안 연구용 Daybreak 계열(GPT-6 Sol Daybreak Blue)은 AA에 점수 미표기. Duet은 Opus 5.5 위의 제품이라 행 추가 없음. Raon-1-mini·flint는 AA 미등재.
- **미확인(커뮤니티):** “Argon이 Sol보다 보안에서 낫다/못 쓸 정도다”, “6.1 아래는 폐급”은 단일 사례·체감. AA Intelligence는 범용 지표이고 **취약점 발견 능력의 대리지표가 아니다.** Coding Agent Index는 이번에도 텍스트로 읽히지 않아 미반영.

## 의미 · 바꾸지 말 것

- **의미 ①:** 발견 비용이 0에 수렴하면 보안의 단위 경제는 “얼마나 빨리 배포하나”로 바뀐다. 58일 창은 이번엔 방어자 편이었지만, 독립 재발견이 두 경로에서 일어났다는 건 **다음 창은 더 짧을 수 있다**는 신호다.
- **의미 ②:** 상시형 에이전트의 원가는 추론이 아니라 **대기와 감시**에서 난다. 무기한 캐시(OpenAI), 백그라운드 점검 한도 차감(Anthropic), busy-wait 버그(Codex)는 모두 같은 축 위의 사건이다.
- **의미 ③:** 공격자도 이 축을 안다. LiteLLM 탈취기의 수집 목록에 **AI 개발 도구 자격증명이 독립 모듈**로 들어갔다 — 에이전트 키는 이제 클라우드 키와 같은 등급의 표적이다.
- **바꾸지 말 것 ①:** Duet·Dots 발표만으로 메일·드라이브 전체 권한을 열지 말 것. 승인 게이트는 출력 측 방어일 뿐이다.
- **바꾸지 말 것 ②:** PHP 건 때문에 정적 사이트 배포 파이프라인을 건드릴 이유는 없다(서버 측 PHP 없음).
- **바꾸지 말 것 ③:** 모델판 goals는 유지.

## 시도 후보

1. **(5분) PHP 노출 점검:** `php -v`로 8.2.35/8.3.36/8.4.27/8.5.12 이상인지, 컨테이너 베이스 이미지·서버리스 런타임 자동 업데이트 여부 확인. 8.1 이하는 즉시 업그레이드 계획. 오픈AI가 배포한 Codex 스킬(PHP 버전 체커)도 선택지.
2. **(5분) LiteLLM IOC 스윕:** `pip show litellm` → 1.107.0이면 `site-packages`의 `cook.pth`·`sitecustomize.py`, `/tmp/.pc_once_72129118c59f5636c0bb`, `/tmp/remote_code_loader.lock` 확인 후 **SSH·클라우드·Codex/Claude Code·HF 토큰 전량 교체**. 의존성은 해시 고정(`--require-hashes`)으로.
3. **(10분) 캐시 친화 운용:** Codex·Work 장기 작업은 같은 스레드에서 재개, 계정 전환 최소화. 장기 테스트 대기는 에이전트에게 `sleep`+로그 확인 간격을 명시하거나 외부 스크립트로 넘겨 폴링 토큰 제거.
4. **(2분) 리셋 만료 확인:** Claude Settings > Usage의 만료 시각 확인 후 만료 직전 소진. Codex 리셋은 패턴상 개선이 없는 날 전역 지급되므로 별도 행동 불필요.
5. **(30분) Raon-1-mini 로컬 시험:** GGUF Q4급으로 한국어 지시 따르기·도구 호출을 Qwen3.8-27B와 같은 프롬프트 10개로 비교. 24GB에서 컨텍스트 길이별 속도 기록.

## 소스 범위

- **국내:** ChatGPT 목록(10-22 00:17\~07:25, 10-21 밤 일부)·개념글 목록, AI 활용 목록(04:31\~07:52)·개념글 목록(10-21 포함). **본문 0건 확인**(대체 경로가 뷰 페이지에서 목록만 반환). 자동 수집기 실패(07:53, TLS EOF·여드레째). AI 활용 자정\~04:30, 댓글 미확인.
- **해외:** Reddit RSS 2곳(r/LocalLLaMA·r/codex 각 15건; r/ChatGPT·r/OpenAI·r/ClaudeAI·r/MachineLearning·r/singularity·r/Bard는 429, old.reddit 재시도 302), 해커뉴스 1면(Algolia), Wiz·PHP 재단·구글 클라우드·오픈AI(Patch the Planet, Google Cloud 제휴)·AP, 더버지·CNBC·MacRumors·VentureBeast(Duet), status.claude.com·StatusGator, Claude·OpenAI 도움말, SafeDep, 티보 글(resets.pro·codexy.fyi 트래커 경유), HF 모델 카드.
- **벤치:** [Artificial Analysis](https://artificialanalysis.ai/leaderboards/models) 10-22 서울 확인, [/models/](/models/).
- 원문 링크: [Wiz PHP2Shell](https://www.wiz.io/blog/php2shell-php-rce) · [Google Cloud CVE 대응](https://cloud.google.com/blog/products/identity-security/responding-to-core-php-vulnerabilities-cve-2026-109618-cve-2026-109619) · [OpenAI Patch the Planet](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/) · [PHP 재단](https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/) · [The Verge: Claude Duet](https://www.theverge.com/ai-artificial-intelligence/1015843/anthropic-claude-duet-ai-agent) · [CNBC: Duet·Muse](https://www.cnbc.com/2026/10/21/anthropic-preview-of-claude-duet-personal-ai-agent-take-on-muse-dots.html) · [SafeDep: LiteLLM](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/) · [OpenAI on Google Cloud](https://openai.com/index/openai-models-google-cloud/) · [Raon-1-mini](https://huggingface.co/KRAFTON/Raon-1-mini-preview) · [Claude 리셋 도움말](https://support.claude.com/en/articles/17007452-what-is-a-limit-reset)

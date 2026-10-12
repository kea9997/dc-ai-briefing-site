---
title: "코드는 30% 늘었는데 소프트웨어는 그대로 — 원더 풀은 소넷과 동점이다"
date: 2026-10-13
level: advanced
description: "메타 Full은 AA 56으로 Sonnet과 나란히 섰지만 API 밖에 있고, 하버드는 에이전트 도입이 리뷰 병목만 키웠다고 적었다. 접근권과 검증 비용이 같은 날의 공통 분모다."
tags: ["daily","advanced","MuseWonder","MuseWonderFull","AA","Tibo-Day7","Sol-500k","Harvard-Jellyfish","QGIS-QEP428","SynthID","Archify","쌀먹","ActiveMemory","CodingAgentIndex"]
---

## 오늘 핵심 세 가지

1. **메타 Muse Wonder Full(max)이 AA Intelligence 56으로 Sonnet 5.5(max)와 동점 — 그러나 Muse Code 전용.** Wonder(max) API는 52·작업당 $4.52($4/$20 /1M). AA 기사: Full Coding Agent Index 68(Sonnet 5.5 max와 동점, Opus 5.5 max 66), Wonder 63. Spark 1.3(max·48) 대비 Full +8 / Wonder +4, 6주 간격. HN 약 482점. 모델판을 10-13로 갱신. 점수 표만 보면 메타가 프론티어 클럽에 복귀했고, 구매 표만 보면 Full은 아직 ‘없는 모델’에 가깝다.
2. **하버드 작업 논문(718사): 에이전트 도입 → 코드·커밋·PR↑, 이슈·에픽 완료≒0, 리뷰 시간 +49%.** 생성 이득이 인간 리뷰에 흡수된다. 국내 추천 47 글(고아 node/python)과 QGIS QEP428(AI 코드 기여 금지)이 같은 축의 다른 스케일이다. “더 짜는 것”과 “더 내보내는 것”을 한 KPI로 묶으면 오늘의 함의를 놓친다.
3. **티보: 투표 결과에 “confused”, Day7은 Sol 기본 컨텍스트 272k→500k + 구독 시 long-context fee 면제.** 정책 투표와 엔지니어링 챌린지는 계층이 다르다. 국내는 옛 “5h 재도입 안 함” 캡처와 투표 후기가 각각 4천 조회대다. 운영자는 감정 서사와 적용된 패치를 나눠 기록해야 한다.

## 국내 — 개념글·인기글이 말한 것

### A. 티보 축: 투표 정치 / Day7 엔지니어링 / 요금 위계 밈

**확인(X):**
- 투표 최종(10-12 02:22 KST 마감): no-5h 37.8% / 5h+2× 33.2% / results 29%, n≈240,643.
- 후기(10-12 09:21 KST, ≈179만 노출): “2× 방향으로 훨씬 기울 줄 알았다… demand curve smoothing.”
- Day7(10-12 08:45 KST, ≈204만 노출): Codex/Work Sol default context 500k(←272k, \~80%). override 가능, hard max 1M. 후속 트윗: subscription draw에서 Sol long-context fee 미청구.

**확인(국내 캡처·정리글):** 「투표결과 혼란스럽다」(v≈4.3k, r16), 「진심으로 당황」(v≈4.4k, r21), 「5시간 제한 도입 안하겠다」(v≈4.1k, r21, 과거 공지 인용), 「7일차」(v≈3.7k, r14, 원문 번역·시리즈 링크). 「플거지들 아스트라…」(r23): Plus에서 Astra 회수·짧은 한도 농담. 댓글 스펙트럼은 위계·풍차·크레딧 전환.

**해석:** 투표 문항은 “UX 제약(5h) ↔ 주간 총량” 교환. 커뮤니티는 과거 “5h 재도입 안 함”을 규범 앵커로 읽고, 티보의 confused는 그 앵커가 작동했다는 역설적 증거로 소비된다. Day7은 교환 정치와 무관한 **제품 표면 개선**(compaction↓, 장기 작업). 둘을 인과로 묶지 말 것.

**운영:** Sol 500k가 기본이 되면 컨텍스트 비용 감각이 바뀐다. 구독 경로에서 long-context fee=0이면 ‘짧게 자르기’ 습관의 ROI가 달라짐 — 단, 주간 한도 자체는 별개. 사용량 스냅샷을 Day7 전후로 비교할 때만 체감 검증이 된다.

### B. 메타 Wonder — 국내 신호는 약, 조건은 해외에서 먼저

수집 시각 국내 hot에 Wonder 심층 리뷰 부재. 새벽 단문 체감(“프롬프팅”)만. 교차는 해외 섹션. 국내 함의는 **접근권 담론**(학생 지원금 r34, 쌀먹 v≈4.3k, 플·프로 위계)과 맞닿음: 새 프론티어가 열려도 ‘누가 문을 통과하는가’.

### C. 고아 프로세스 클리너 (r47) — 완료 신호의 OS 층

**확인:** 세션 종료 후 node/python 잔류 → 전용 클리너(클로드 코드로 작성), 기본 무료·자동 유료, 미서명→SmartScreen. URL 공개.

**연결:** 10-12 ‘XX 삭제 도배’ = 문서/커밋 층의 과잉 증명. 오늘은 프로세스 층의 **잔여 상태**. 하버드의 “리뷰가 길어진다”는 조직 층의 잔여. 세 층 모두 ‘done’ 비트와 관측 가능 상태가 어긋남.

**실무:** (1) 도구별 teardown 스크립트/설정 확인 (2) 서명·평판 없는 바이너리는 업무 이미지에 금지 (3) 관측 모델≠청구 모델(어제 Haiku→Opus 하청)에 더해 **관측 종료≠OS 종료**.

### D. SynthID 포렌식 밈

**확인(방법 스케치):** 인물 앞머리 대각선 → 흰 캔버스의 다색·스펙트럼·RGB 과장 → OpenAI verify 링크. ChatGPT/Gemini 비가시 워터마크, 상호 비호환. iPhone 18 Pro HW 워터마크 주장은 미재검증.

**함의:** 생성 표시가 UX(거슬리는 획)로 드러나는 순간, 탐지는 ‘도구’가 아니라 ‘미학 버그’로 소비된다. 제출·공모 맥락에서는 정책 페이지가 1차, 육안 휴리스틱은 2차.

### E. 장편 소설 8계층 소스

**확인:** 설정 / 운영 / 스타일 / 인물 / 연속성(챕터) / 전체 시놉시스 / 상세 시놉시스 / 비주얼. 연계 댓글: 계층화 후에도 주기적 전수·무결성 패스 필요.

**엔지니어링 대응:** 사실 저장소(1)와 렌더 정책(3)과 상태(5)의 분리. 에이전트 워크플로의 “월드 모델 / 스타일 / 런타임 스테이트”와 동형. 실패 모드는 계층 부재가 아니라 **갱신 주기 부재**.

### F. Archify — 렌더를 CLI로 외부화

**확인(인용 수치, 환경 의존):** Sonnet 5.5 중앙값 사례 — HTML 직접 생성 vs MD→CLI 렌더, 출력 토큰 6.1×↓, wall 2.8×↑속도. 레포 tt-a1i/archify.

**해석:** 토큰 절감의 정석 — 모델에게 ‘최종 바이트 포맷’을 맡기지 않기. AesCode·레퍼런스 가이드(어제)와 같은 “기준 객체를 밖에 두기”. Coding Agent Index가 올라가도, HTML 슬롭을 모델이 쓰면 $/task와 지연이 동시에 오른다.

### G. 쌀먹 리스트 — 수요 신호, 운영 비추천

**확인(게시글 서술):** Hive($5→$100 보너스 주장), Sail/Experiential 월 $5 리필, Token Harbor :free 슬롯, OpenAI 호환으로 Harness/OpenCode에 연결. 단가 표는 글쓴이 시점.

**위험 프레임:** (1) ToS·지역·KYC 가변 (2) 10-12 DeepSeek 키 남용 제보와 같은 주 — 키·샌드박스 위생과 반대 방향의 ‘크레딧 파밍’ 유혹 (3) abliterated/uncensored 엔드포인트는 정책·안전 평가 밖. 브리핑은 **추천하지 않음**. 신호만: 가격 민감 사용자가 공식 구독 밖으로 이미 탐색 중.

### H. 학생 지원금 (r34) · 정보글 놀이터 논쟁 (r23) · 유출 안내 UI (r18)

접근권 정치 / 커뮤니티 정체성 / 보안 UX 말투. 제도·사고 범위는 미확인. 대회(조회 \~5.9k)와 동시에 ‘정보글 피로’가 개념글이 된 점이 중요 — 품질 게이트(재현·기준일) 수요와 반정보글 정서가 공존.

### I. Paseo 가이드 (r13)

Writer/Reviewer 역할 분리. 이미지 본문 → 명령 전수 미전사. 패턴만: 멀티 에이전트를 ‘팀’이 아니라 **게이트가 있는 파이프라인**으로 만들라는 어제 교훈의 국내 입문화.

## 해외 — 교차 확인

### Muse Wonder / Full (확인: Meta blog · AA article · VentureBeat · HN)

| 항목 | Wonder Full (max) | Wonder (max) | 비고 |
| --- | --- | --- | --- |
| AA Intelligence | 56 | 52 | Full = Sonnet 5.5 max 동점 |
| Cost/task | n/a | $4.52 | Full 비API |
| Coding Agent Index | 68 | 63 | AA 기사; Sonnet 68 / Opus 66 |
| Terminal-Bench 4.0 | 57%(Full, vs Spark 33%) | 52% | AA 기사 |
| 가격 | Muse Code $50/$200 티어 | $4/$20 /1M (+cache $0.20) | Opus와 토큰 단가 동형 |
| 입력 모달 | text/image/audio/video | 동 | 출력 text |
| 가중치 | 비공개 | 비공개 | Llama 개방 노선과 단절 |

AA: Full은 CritPt·GDP.pdf 1위권, GDPval·Briefcase·Automation·SciCode 상위. 지식(Omniscience) 약, 환각률은 동급 대비 낮음(Full 23% 주장). Wonder $/task가 Spark 대비 2.8×인 주원인: 토큰 단가↑ + 입력 토큰/task↑(7.69M).

**제품 조건(VB):** Muse Code 기본 Contributor(학습 사용) — 옵트아웃은 이후 제출분만. API Wonder는 Standard(비학습) 전용 주장. ZDR은 기능 제약(서버 상태·파일·웹검색 등). Active Memory / Active Focus는 벤더 서사 — 독립 장기 에이전트 평가와 분리.

**보드 함의:** ‘가장 좋음’ 기본값은 여전히 Opus 58. Full을 best에 올리지 않은 이유: **호출 표면이 Muse Code로 잠김**. value 자리는 Sol($0.72) 유지 — Wonder($4.52)는 지능 동급 Sol 대비 비싸.

### Harvard / Jellyfish (확인: 논문 중계 · Ars · HN ≈284)

에이전트 도입 DiD: LoC +30%, commits +20%, PRs +23% / worker. Issues/Epics 완료 유의한 ↑ 없음(이슈 +0.12/worker-month vs baseline 3.67, SE 0.17). 리뷰 리드타임 +49%, changes-requested 비율 ≈2×, 댓글/PR +35%. 리뷰로 인력 재배분(+14% 리뷰 쪽)하나 고용 총량 유의 ↓ 없음. 데이터 종단 \~2026-03 — 장기 적응 여지. AI 리뷰 코멘트 비중 3월 기준 \~23%로 여전히 보조.

**읽법:** Coding Agent Index↑와 기업 산출↑를 잇는 다리에 **인간 리뷰 capacity**가 빠지면 단절. QGIS가 문을 닫은 이유(리뷰어 시간 추출)와 하버드가 측정한 병목이 동일 변수.

### QGIS QEP428 (확인: 제안 병합·보도, HN ≈359)

qgis/qgis에 LLM/AI/agent-assisted code contribution 금지. 사후 발견 시 revert·권한 제재. “닫고 선택 개방” 의도(IDE 자동완성·번역 등은 후속 QEP). 탐지 자동화는 명시되지 않음 → 규범·신뢰 기반 집행.

### 기타

- Karpathy funnel·METR HF·Anthropic 오인 제보·버클리 10분 끈기: 10-11/10-12에 소진 — 오늘은 재탕하지 않음.
- Reddit LocalLLaMA: QwenGyre RL, MiniCPM-V-4.7, Decision 3.0, RTX 5080 24GB 2027Q1 루머 등 — 로컬 메인 테마는 약함. 5090 Laptop 베이스라인 변경 신호 없음.
- r/OpenAI: ChatGPT for Financial Services, Astra 페이지, Tibo poll 재유통, unlimited resets vs limits.
- r/ClaudeAI: Muse Wonder vs Opus/Astra 벤치 밈, Projects를 “올해 최대 업데이트”로 보는 개인글, 5h→24h 루머성 제목(미확인).



### 국내 독자를 위한 Wonder 조건 체크리스트

벤치만 보면 Full이 Sonnet과 동점이라 “클로드 대신 메타”로 읽히기 쉽습니다. 제품 표면으로 옮기면 질문이 바뀝니다.

1. **호출면:** Full은 Muse Code. IDE·에이전트 루프를 메타 도구 안에 둘 수 있는가.
2. **데이터면:** Contributor 기본값이면 코드·프롬프트 학습 사용 가능. 옵트아웃 시점 이후만 적용되는지 확인.
3. **비용면:** Wonder API $/task ≈$4.52는 Sol max ≈$0.72의 약 6배. 지능 52 vs 52에서 가성비 논쟁은 거의 종료.
4. **모달면:** 이미지·오디오·비디오 입력은 강점 후보. 텍스트 코딩만이면 이점이 벤치에 덜 드러날 수 있음.
5. **대체면:** Active Memory/Focus는 벤더 서사. 하버드가 보여 준 것은 메모리 기능이 아니라 **리뷰 capacity**다. 기능을 켜도 리뷰 SLA가 그대로면 산출은 안 움직인다.

### 하버드를 국내 에이전트 운영에 꽂으면

숫자만 재진술하면 끝이다. 운영 언어로 바꾸면 다음이 남는다.

- **생성 KPI를 버리라**는 뜻이 아니라, 생성 KPI 옆에 `time-to-merge`, `changes-requested rate`, `reviewer comments/PR`을 같은 대시보드에 두라는 뜻이다.
- 국내 개념글의 고아 프로세스는 개인 스케일의 같은 그래프다. “세션 종료” 이벤트가 있어도 RSS·핸들·자식 프로세스가 남으면 머신이 느려지고, 사용자는 ‘AI가 무겁다’고 느낀다. teardown을 수락 기준에 넣지 않은 결과다.
- QGIS가 문을 닫은 것은 탐지 자신감이 아니라 리뷰어 시간 방어다. 사내 저장소에 동일한 규범을 문서로 남기지 않으면, 하버드형 병목이 ‘문화’로만 존재하고 측정되지 않는다.

### Day7 Sol 500k가 바꾸는 것과 바꾸지 않는 것

**바뀜:** Codex/Work 기본 컨텍스트, compaction 빈도, 구독 경로 long-context fee. 장기 리팩터·다중 파일 추적 작업의 마찰이 줄어들 가능성이 크다(티보 서술).

**안 바뀜:** 주간 한도 총량, 채팅 말투, Plus/Pro 위계, 5h 정책. 투표 후기(“confused”)는 요금 UX 정치이지 Day7의 원인이 아니다. 국내 댓글이 둘을 한 서사로 묶을 때, 운영자는 분리해서 읽어야 한다.

**측정 제안:** Day7 전후 동일 레포에서 (a) compaction 발생 횟수 (b) 세션당 입력 토큰 (c) 주간 % 소진 속도를 三日만 기록. 체감 “여유”가 한도 소진을 가속하는지도 같이 본다.

### SynthID·Archify·8계층 소설 — 고급 한 줄씩

- **SynthID:** 비가시 표시가 가시 미학으로 새는 사례. 탐지 정책과 이미지 QA를 한 파이프라인에 둘 이유.
- **Archify:** 모델 출력 언어를 ‘인간 가독 중간 표현’으로 고정하고 렌더는 결정적 도구에 맡김. Coding Agent Index가 높아도 HTML 슬롭을 허용하면 $/task가 다시 오른다.
- **8계층 소설:** 월드 진실 / 렌더 정책 / 런타임 상태 분리. 에이전트 실패의 다수는 모델 크기보다 **상태 갱신 주기** 문제.

### 쌀먹 글을 보안·비용 관점에서만

게시글이 나열한 보너스·리필·:free 슬롯은 ‘가격 민감 수요’의 존재 증명이다. 동시에 (1) ToS 회피 유인 (2) 비공식 엔드포인트 공급망 (3) abliterated 모델의 정책 우회를 한 글에 모아 둔다. 10-12의 샌드박스 키 남용 제보와 같은 주에 읽으면, **키 위생과 크레딧 파밍이 반대 방향의 유혹**임이 드러난다. 조직 가이드에는 “비공식 크레딧 파밍 금지” 한 줄을 명시하는 편이 벤치 갱신보다 우선이다.




## 주제별 심화 — 한국어로 다시 쓰기

### 왜 Full 동점이 ‘교체 신호’가 아닌가

Intelligence Index 56은 Sonnet 5.5 max와 같다. 그런데 Sonnet은 API·클로드 구독·클로드 코드 등 **이미 열린 호출면**이 여러 개다. Full은 Muse Code 상위 티어에 잠겨 있고 작업당 비용 수치도 없다. 보드에서 ‘가장 좋음’을 Opus에 남겨 둔 이유는 점수가 낮아서가 아니라, <strong>같은 점수를 내 워크플로에 붙일 수 있는 경로가 비대칭</strong>이기 때문이다. Wonder API(52·$4.52)는 열려 있지만 Sol(52·$0.72)과 점수가 같고 비용만 약 6배다. “메타가 돌아왔다”와 “내 기본 경로를 바꿔라” 사이에는 이 비대칭이 끼어 있다.

벤처비트가 강조한 Contributor 기본값·ZDR 기능 제약은 벤치 표 바깥의 실제 도입 비용이다. 코드·고객 데이터를 넣는 조직이라면 Intelligence 2점 차이보다 학습 사용 조항이 먼저다. Active Memory·Active Focus는 데모 서사로는 강력하나, 하버드가 잰 병목은 메모리가 아니라 리뷰다. 기능을 켜도 리뷰어 시간이 그대로면 이슈 완료율은 안 움직인다.

### 하버드 숫자가 국내 에이전트 팀에 말하는 것

코드 줄 +30%、PR +23%는 ‘생산성’ 슬라이드에 올리기 좋은 숫자다. 같은 논문의 다른 줄 — 이슈 완료 유의차 없음, 리뷰 +49% — 을 같이 올리지 않으면 의사결정이 왜곡된다. 국내 게시판의 바이브코더 논쟁(어제)과 오늘 고아 프로세스 글은 개인 스케일에서 같은 왜곡을 보여 준다. 생성은 티켓을 닫는 느낌이 나고, 확인은 남는 일처럼 느껴진다.

실무로 옮기면 세 가지다. 첫째, 에이전트 도입 실험의 성공 정의를 `LoC`가 아니라 `merged PR that closes an issue within SLA`로 둔다. 둘째, 리뷰어 수를 고정한 채 생성만 늘리는 실험을 금지한다 — 하버드에서 리뷰로 인력을 돌렸어도 고용 총량은 안 줄었다. 셋째, AI 리뷰 코멘트 비중(논문 시점 \~23%)을 과신하지 않는다. 아직 보조다.

### QGIS 문 닫기와 ‘추출적 기여’

QEP428의 핵심 문장은 탐지기가 아니다. “리뷰어 시간을 추출하지 말라”는 규범이다. LLM이 쓴 코드를 인간이 읽지 않은 채 PR로 던지는 행위는, 하버드가 측정한 리뷰 부하를 오픈소스 유지보수자에게 전가한다. 사내에도 같은 규범을 문서화하지 않으면, 금지/허용이 팀장 취향으로 남고 측정되지 않는다. 탐지 자동화를 기다리다가 문을 여닫는 논쟁만 반복하는 것보다, “에이전트 PR은 인간이 재작성한 뒤에만”처럼 <strong>집행 가능한 한 줄</strong>이 먼저다.

### 티보 서사의 두 층위를 운영 일지에 나누어 적기

층위 A — 요금 UX 정치: 투표 문항, 결과, confused 트윗, 과거 5h 약속 캡처, 플·프로 위계 밈. 상태: **미결정**.
층위 B — 제품 패치: Sol 500k, long-context fee 면제, compaction 감소 주장. 상태: **적용됨(원문 기준)**.

국내 개념글은 A와 B를 한 감정으로 묶는다. “당황했으니 컨텍스트로 달랬다”는 서사는 읽기 좋지만 인과가 아니다. 운영 일지에는 A/B를 다른 행에 쓰고, A에 대한 액션(요금제 변경)은 동결, B에 대한 액션(장기 세션 재측정)만 허용하는 편이 안전하다.

### 완료 신호의 세 층 — 어제와 오늘을 잇기

| 층 | 어제(10-12) 사례 | 오늘(10-13) 사례 | 수락 기준 후보 |
| --- | --- | --- | --- |
| 문서/깃 | XX 삭제 도배 | — | diff + 잔여 문자열 grep |
| OS/런타임 | — | 고아 node/python | teardown 훅·프로세스 목록 |
| 조직/리뷰 | METR 없는 채점기(재순환) | 하버드 리뷰 +49%, QGIS 문 닫기 | 리뷰 SLA·changes-requested |

공통 처방은 ‘더 센 모델’이 아니라 **관측 가능한 완료 정의**다. Haiku가 Opus를 하청하던 어제 사례까지 합치면, 관측 모델·청구 모델·OS 잔여·리뷰 상태가 네 갈래로 어긋날 수 있다.




### 시도 후보를 실행 순서로 묶으면

오늘 시도 목록은 네 묶음으로 재배열하는 편이 낫다. (1) **관측** — Sol 500k·compaction·프로세스 teardown·리뷰 SLA. 비용 0에 가깝고 즉시 가능하다. (2) **포맷** — HTML 금지·MD 렌더·소설 계층·SynthID QA. 토큰과 미학 비용을 동시에 줄인다. (3) **벤더 A/B** — Wonder API 10티켓. Full은 Muse Code 안에서만. (4) **규범** — QGIS식 한 줄 정책·쌀먹 금지 조항. 벤치 갱신(10-13)은 (3)의 배경일 뿐, (1)(4)를 대체하지 않는다.

로컬 베이스라인(RTX 5090 Laptop 24GB·64GB)은 오늘 국내·해외 모두 주제가 약해 보드·권고를 바꾸지 않았다. LocalLLaMA의 5080 24GB 2027Q1 루머는 시점이 멀고 미확인이다.




### 커뮤니티 온도계 (미확인 혼합)

해외 Reddit·HN은 Wonder 벤치와 “Full은 API 없음”에 먼저 반응했고, 국내은 티보·요금·접근권 글이 조회를 가져갔다. 같은 날짜라도 **관심의 무게 중심이 다르다**. 브리핑이 둘을 억지로 하나의 내러티브로 합치면, 국내 독자에게는 메타가 과대 포장되고 해외 독자(영문 원문)에게는 티보 감정선이 과해 보인다. 오늘은 의도적으로 축을 나란히 두되, 교차점은 ‘접근권’과 ‘확인 비용’ 두 개로만 묶었다.


## 목적별 모델 고르기 (한국어)

**모델판 갱신: 2026-10-13** (직전 스냅샷 10-08). 트리거 = Muse Wonder/Full 출시. [/models/](/models/) · [AA](https://artificialanalysis.ai/leaderboards/models) · [AA 기사](https://artificialanalysis.ai/articles/muse-wonder).

- **확인(벤치):** Opus 5.5 max 58·$5.98 / Sonnet 5.5 max 56·$5.46 / **Wonder Full max 56·$/task n/a** / Opus high 54·$1.82 / Astra max 53·$3.26 / Argon high 53·$1.99 / Fable 5.1 max 53·$7.63 / Sol max 52·$0.72 / **Wonder max 52·$4.52** / Sol medium 48·$0.21 / MiMo-V2.6-Pro 46·$0.13 / Haiku 5.5 max 43·$0.21 / Luna max 38·$0.07.
- **확인(벤치·AA 기사):** Coding Agent — Full 68 · Sonnet 68 · Opus 66 · Wonder 63 · (참고) Spark 1.3 max 54.
- **미확인:** “Full 없으면 메타 의미 없다”, “Sol이 여전히 구독 가성비 왕”, “Wonder $/task가 Opus에 가까워 실험용”. 구독 잔량·라우팅·거절률은 AA 밖.

**고급 한 줄:** 벤더 다변화 실험 예산이 있으면 Wonder API를 **A/B 한 축**으로만. 프로덕션 기본 경로는 Sol(가성비)·Sonnet/Opus(품질) 유지. Full은 Muse Code 안에서만 관측.

## 오늘이 의미하는 것 · 바꾸지 말 것

- **의미:** 프론티어 점수가 ‘구매 가능한 표면’과 분리되는 제품 전략(Full⊂Muse Code)이 메타에서도 재현됐다. Anthropic·OpenAI 구독 락인과 동형이며, 보드의 ‘가장 좋음’을 API 가용 모델에 묶어야 하는 이유를 다시 확인시킨다.
- **의미:** Day7(컨텍스트·수수료)과 투표 후기(요금 UX 정치)를 분리해야 운영 판단이 가능하다. 국내 개념글은 둘을 한 서사로 묶는 경향이 있다.
- **의미:** 에이전트 ROI의 병목이 생성에서 리뷰로 이동했다는 기업 데이터(하버드)와, 오픈소스의 문 닫기(QGIS), 개인의 OS 잔여(고아 프로세스), 어제 문서층의 과잉 완료 증명이 같은 변수 — **확인 비용** — 을 가리킨다.
- **의미:** 국내 상위 감정은 접근권(학생 지원, 플·프로, 쌀먹)이다. 프론티어 출시 주에도 ‘누가 쓰느냐’가 ‘무엇이 나왔느냐’와 동시에 움직인다.
- **바꾸지 말 것:** Full 56점만으로 기본 모델을 메타로 전환하지 말 것. Muse Code·Contributor·ZDR 제약을 계약 검토 전에 건너뛰지 말 것.
- **바꾸지 말 것:** 쌀먹·미서명 클리너를 보안 경계 안에 들이지 말 것. 보너스 크레딧은 비용 항목이 아니라 공급망·약관 항목으로 취급.
- **바꾸지 말 것:** Coding Agent Index 상승을 배포 빈도·이슈 완료율 KPI에 자동 반영하지 말 것. 리뷰 capacity·teardown·수락 기준을 먼저 계측할 것.
- **바꾸지 말 것:** Sol 500k 확장을 “한도가 늘었다”로 오해하지 말 것. 컨텍스트≠주간 토큰 예산.

## 시도 후보

1. **Sol 500k 전후 compaction 로그 비교** (동일 장기 세션 재현).
2. **PR 리뷰 SLA 계측:** AI 도입 전후 time-to-first-review / changes-requested 비율 (하버드 지표 축소판).
3. **렌더 외부화:** HTML 생성 금지 규칙 + MD→CLI (Archify류)로 $/task 측정.
4. **Wonder API A/B:** 동일 티켓 10건 Sol max vs Wonder max, 품질·비용·지연. Full은 Muse Code에서만 별도.
5. **프로세스 teardown 체크리스트**를 에이전트 종료 훅에 포함.
6. **SynthID/verify**를 디자인 QA 한 줄로 추가(제출물).
7. **QGIS식 정책 초안:** 내부 저장소에 “에이전트 PR은 인간 재작성 없이 금지/허용” 중 하나를 문서화 — 탐지 자동화 전에 규범부터.
8. **모델판 동기화 확인:** 홈·/models/가 10-13 JSON을 읽는지 빌드 후 스모크.

### 닫는 문장

오늘 판의 한 줄은 이것이다. <strong>점수가 같아도 문이 다르고, 코드가 늘어도 소프트웨어는 그대로일 수 있다.</strong> 문을 여는 쪽(API·구독·데이터 조항)과 확인을 사는 쪽(리뷰·teardown·수락 기준)을 먼저 고치면, 모델 교체는 그다음이다.

## 소스 범위

- **국내:** collect-dc.py 모바일 정상 — chatgpt+ai_utilize, candidates 58, errors [], 2026-10-13 07:58 KST. 개념/추천/고조회 본문·이미지 글 다수. Paseo·일부 캡처는 이미지 위주라 절차 전수 미전사.
- **해외:** Reddit RSS UA — LL/OpenAI/ChatGPT/ML/singularity 200, ClaudeAI 429→Safari UA 200. HN top(Firebase). X: thsottiaux Day7·poll aftermath; Zuckerberg Muse Wonder 소개(인용). Meta research blog, AA live leaderboard·muse-wonder article, VentureBeat, Ars(Harvard), QGIS QEP428 보도.
- **원문:** [Meta Wonder](https://research.meta.ai/blog/muse-wonder) · [AA article](https://artificialanalysis.ai/articles/muse-wonder) · [Tibo Day7](https://x.com/thsottiaux/status/2109430343346581527) · [Tibo confused](https://x.com/thsottiaux/status/2109439315570999598) · [Ars/Harvard](https://arstechnica.com/ai/2026/10/ai-coding-agents-generate-more-code-but-not-more-software/) · [/models/](/models/)

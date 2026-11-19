---
title: "2조 달러로 문 열고 ‘폭락’ 소리 들은 날, Carbon 값표만 조용히 1.6배가 됐다"
date: 2026-11-20
level: advanced
description: "ANT는 $111.50에 열고 $97.17에 닫았다. 같은 밤 AA는 Carbon 작업당 비용을 정가 기준으로 다시 매겨 high $4.90→$7.76이 됐고, 국내에선 수능 전 과목 만점(Astra·Neon)과 Carbon의 출력 한도 0점, Orchestrator의 폴링 토큰 1.5억 개가 같은 결론을 가리켰다 — 크고 오래 생각하는 쪽이 늘 이기지 않는다."
tags: ["daily","advanced","CSAT-benchmark","GPT-6.2-Astra","GPT-6.2-Sol","Gemini-4-Neon","Gemini-4-Carbon","Orchestrator","Antigravity","output-limit","polling","cost-per-task","Artificial-Analysis","Coding-Agent-Index","Google-AI-plans","regional-pricing","account-risk","Anthropic-IPO","ANT","AI-safeguards","cyber-safeguards","Claude-Fable-5.2","black-hole-physics","GPT-Live-1.1","DaisyRose-27B","NVFP4","RL-post-training","Frontier-Design-Benchmark","moderation","model-board","community"]
---

> **수집 범위:** 국내 자동 수집 정상(11-20 07:54 KST, 후보 60, 오류 0). 추가로 ai_utilize 1~14쪽(~410편, id ≥192850)·chatgpt 1~5쪽(~140편, id ≥146330) 목록을 받아 11-19 아침 이후분을 조회·추천·댓글 가중으로 정렬, 상위 약 45편 본문·댓글을 직접 읽음(이미지 전용 글은 댓글로 맥락 보강). 해외: 레딧 RSS **0/8**(`top/.rss?t=day` 404/429, `old.reddit` 403) → HN 1면·Algolia, 1차 자료(CSAT 대시보드, Google One 요금제, Anthropic 연구 글, OpenAI 개발자 문서·changelog, RadixArk 블로그, Contra Labs), [AA](https://artificialanalysis.ai/leaderboards/models) 리더보드·[코딩 에이전트](https://artificialanalysis.ai/agents/coding-agents) 임베디드 데이터(11-19 스냅숏과 diff), 보도(CNBC·Reuters·AP). 11-19 테마(Neon 출시·DrivingBench·6.2 D+1·노무사 의혹)는 신규 사실만 후속으로.

## 오늘 핵심 세 가지

1. **2027 수능 LLM 벤치(국내 개념글, 추천 21): GPT-6.2 Astra·Gemini 4 Neon(high) 원점수 1276/1276 전 과목 만점.** Sol·Argon 1273, Fable 5.2·Opus 5.5 1270, Terra 1240, **Carbon 1176 — 일부 과목이 출력 한도까지 답을 못 내 0점 처리**. 도구·검색·시스템 프롬프트 없이 과목 단위 일괄 투입. 만점 가능 최저가는 GPT-6.1 Terra(전 과목 ≈1,171원), 최단 시간은 6.2 Sol(≈48분). 국산 1위 K-EXAONE 2.5(1019).
2. **AA 주간 점검: 상위권 점수 불변, Carbon 작업당 비용만 정가($4/$20) 기준으로 재산정** — high $4.90→**$7.76**, medium $4.16→$6.59, low $4.68→$7.19(×1.55~1.58). 같은 60점에서 Neon high $3.74가 Carbon high의 ~48%. 코딩 에이전트 표에 Antigravity CLI+Neon xhigh 정식 등재(58.6·$6.86, 40개 조합). 보드는 Carbon 3행·관련 주석만 갱신, **목적별 셀 유지**.
3. **ANT 데뷔: 공모가 $83 → 시가 $111.50(시총 ≈$2.01T) → 종가 $97.17(+17%, 완전희석 ≈$1.77~1.8T).** 조달 $81.3B(9.8억 주), 거래량 8.46억 주. 국내는 “폭락” vs “원래 IPO가 그렇다”, 사용량 리셋 ‘상장 보상’ 낚시글, “다음 모델 가격 대폭 인하”·“당분간 신모델 없음” 루머(둘 다 미확인). HN 1위(766점·1,419댓글) 옆에서 **Claude Code 사이버 세이프가드에 막혀 GLM 5.3로 보안 패치했다**는 글이 432점.

## 국내 커뮤니티 — 개념글·고조회 순

### 1) 2027 수능 LLM 벤치 — ‘누가 푸나’에서 ‘누가 안 끊기나’로 (결과 확인 / 해석 미확인)

「2027학년도 대입 수능 전체 결과」(11-20 01:49, 조회 1,395·추천 21). [대시보드](https://hehee9.github.io/CSAT-benchmark/) 기준.

**방법(확인 — 제작자 설명):** PDF→텍스트(Markdown 등 구조 유지), 텍스트화 불가 영역만 이미지 캡처 첨부. 최신 모델에 1문항 단위는 너무 쉬워 **1회 실행 = 1과목**. 검색·계산 도구 없음, 지시는 “제공된 모든 문제를 풀어라”뿐. API 호출, 시스템 프롬프트 없음. 원점수 1276(국124·수152·영100·한50·탐구 17과목 850), 수험생식 환산 450점.

| 모델 | 국 | 수 | 영 | 한 | 탐구 | 합계 |
| --- | --- | --- | --- | --- | --- | --- |
| GPT-6.2 Astra (high) | 124 | 152 | 100 | 50 | 850 | 1276 |
| Gemini 4 Neon (high) | 124 | 152 | 100 | 50 | 850 | 1276 |
| GPT-6.2 Sol (high) | 124 | 152 | 100 | 50 | 847 | 1273 |
| Gemini 4 Argon (high) | 124 | 152 | 100 | 50 | 847 | 1273 |
| Claude Fable 5.2 / Opus 5.5 (high) | 124 | 152 | 100 | 50 | 844 | 1270 |
| GPT-6.1 Terra (high) | 124 | 152 | 100 | 50 | 814 | 1240 |
| Kimi K3.1 Pro (high) | 124 | 148 | 100 | 50 | 782 | 1204 |
| Gemini 4 Carbon (high) | 124 | 152 | 100 | 50 | 750 | 1176 |
| DeepSeek V4.1 Flash 1017 / Qwen4 Max | 119 / 124 | 148 | 100 | 50 | 757 / 752 | 1174 |
| K-EXAONE 2.5 (high) | 120 | 152 | 96 | 50 | 601 | 1019 |
| Solar Pro 4 (max) | 109 | 149 | 88 | 50 | 576 | 972 |
| GLM-5.3 Flash (high) | 124 | 149 | 100 | 47 | 443 | 863 |
| Mi:dm K 3.0 Pro | 74 | 149 | 94 | 48 | 483 | 848 |

**읽을 지점:**
- **공통 4과목은 포화.** 변별력은 탐구 17과목(특히 자료 해석·그래프 문항이 섞인 과탐/사탐)에 몰렸다. 사탐 9과목 만점 모델은 3개, 과탐 8과목 만점은 4개뿐(제작자 집계).
- **Carbon 1176은 능력보다 실패 모드.** 제작자: “일부 과목에서 출력 한도에 걸릴 때까지 답을 못 내 0점.” 과목 단위 일괄 투입은 [[출력 예산|모델이 한 응답에서 생각+답에 쓸 수 있는 최대 토큰 수]]을 강하게 압박한다. 11-19 DrivingBench에서 Carbon이 출력 66k·시도당 17분으로 혼자 완주한 것과 정확히 같은 성향이, 여기선 감점으로 뒤집혔다. AA 데이터에서도 Carbon high의 작업당 시간은 ~37분(Neon high ~15분)이다. **장기 탐색형 모델을 배치형 파이프라인에 넣을 땐 max output·청크 분할을 먼저 설계하라**는 교훈.
- **비용·시간(제작자 집계):** 만점 가능 9개 중 최저가 Terra(≈1,171원), 최단 Sol(≈48분). 과목별 최저가는 국어 GLM-5.3 Flash 53원, 수학 Claude Haiku 5.5 47원, 영어 GPT-6 Luna 4원, 한국사 Luna 2원, 사탐 Neon 2,376원, 과탐 6.2 Sol 1,044원(겸 최단 23분). “언제나 그렇듯 GPT 계열이 토큰을 가장 적게 쓴다.”
- **국산:** K-EXAONE 2.5 > Solar Pro 4 > 믿:음 K 3.0 Pro / Raon-1 mini(원점수·환산 순위 역전 — KT는 공통, 크래프톤은 탐구에서 손실). Motif는 API 점검으로 미포함. 탐구 601 vs 850이 국산·해외 격차의 대부분이다.
- **한계(미확인 — 해석):** 단일 실행, 분산 미보고. 1~6점 차이는 노이즈 범위로 봐야 한다. 무료 플랜 비교(“무료–유료 격차 최대 GPT, 최소 Claude”)는 제작자 해석.

같은 밤 「평가원 사이트 뭐냐」(댓글 26)는 평가원 정답 공개 페이지가 “짚 냄새(겉) + 클 냄새(속)”라는 AI 제작 의혹 → “공공 공지 페이지에 외주 디자인이 필요하냐” 반론으로 번졌다(미확인).

### 2) Neon D+2 — Orchestrator 폴링이 토큰을 태운다 (개인 실험 — 미확인)

「오늘 카본이랑 네온 작업 맡긴 거 비교한 결과」(추천 7·댓글 9) — 가장 정량적인 후기. 설정: 일반 Carbon(medium) / Carbon+[[Orchestrator|Antigravity에서 계획 모델이 하위 워커 모델에 작업을 나눠 주는 기능]] / 일반 Neon(high) / Neon+Orchestrator에 **난이도 중상~최상 실무 과제 3~4건씩**(알고리즘 R&D, 3D 셰이더, 물리 애니메이션, 다중 파일 이식·UI 개편, 과제는 서로 다르나 난이도 유사). 워커는 간단한 건 DeepSeek, 복잡한 건 Hydrogen 또는 Sonnet. 비용 = 사용 토큰 × API 정가(Orchestrator는 하위 모델 집계가 안 돼 실제는 더 낮을 수 있음). 결론은 Opus와 Carbon에게 상호 토론시켜 도출.

- **Neon 단독:** 건당 $11~19, 중간 멈춤 0, 4/4 통과(시각 검수 워커 1차 반려 2회 → 2차 통과). “직접 수정 금지” 지침을 지키며 워커에게 **수식·상수·검증 절차까지 설계도**를 내려보냄(본체 비용 비중 20~45%). 백지 R&D는 미검증.
- **Neon+Orchestrator:** 건당 $8~53, 멈춤 최다 4회. 짧은 마무리 과제는 $10.7·18분. 그러나 수 분짜리 반복 측정이 낀 장기 과제에서 **대기 폴링으로 누적 입력 토큰 1.5억 개 초과** — 캐시가 있어도 컨텍스트 재전송이 쌓이는 구조.
- **Carbon(medium) 단독:** 워커 분담 지침 없을 땐 연속 실패·한 과제에 수백 달러. 분담 규칙 강제 후 소규모 UI $2대, 애니메이션 $19대 통과. 가드레일 의존도 높음.
- **Carbon+Orchestrator:** 건당 $12~34, 3건 모두 멈춤 1회씩, 3/3 통과. **정답 없는 알고리즘 탐색에서 채택 가능한 돌파구를 낸 유일한 조합.**

**실무 해석(미확인):** 장기 대기(빌드·측정·녹화)가 있는 루프에서 오케스트레이터가 상태를 짧은 간격으로 폴링하면, 비용은 출력이 아니라 **입력 재전송**에서 터진다. 대기 단계는 셸 측 `sleep`/완료 알림으로 빼고, 오케스트레이터에는 완료 이벤트만 돌려주는 구조가 낫다. 11-19 AA 분석의 “Neon은 Carbon보다 토큰을 ~15% 더 쓰지만 단가 덕에 싸다”와 겹쳐 보면, Neon의 비용 우위는 **하네스가 토큰을 낭비하지 않을 때만** 성립한다.

**나머지 체감(미확인):**
- 「네온 써보고 클로드 구독 해지함」(5,642·추천 26·비추 6): “출력 품질은 Opus와 차이 없고 더 싸고 대화감 상위호환.”
- 「젬황 메인으로 못쓴다는 건 어디서 나온 말임??」(댓글 22): 30만 줄 모듈화 후 Claude 교차 검수에서 이슈 0, “Opus high 2시간 삽질 → Neon 10분”, “젬 메인 + 짚 워커가 딱” vs “작업마다 다름”.
- 「네온 엑하랑 소넷 엑하 동시 써보는 체감!」: Claude·GPT·Gemini 모두 20x 구독자라는 댓글러 “코딩은 Claude 압도”. 「아니 네온이 페이블급이라고?」: “Neon high~xhigh ≈ Fable medium”(AA상 Neon high 59.6 vs Fable medium 56.4 — 벤치 기준으론 오히려 위).
- 「네온 COT 진짜 개웃기네」: “WAIT, 유저가 내 생각 블럭을 볼 수 있어!!!” — Argon·Carbon과 같은 CoT 스타일.
- 「프로 쌀먹충 수소랑 네온 생기고 나서부터 5시간 한도 모자란데」: Pro에서 Neon 문제풀이 3개로 5시간 한도 소진, “Ultra도 빨림”, Plus의 GPT-6로는 거의 안 닳음.
- AI Studio에 X 밈이던 ‘모델 선택’ UI가 실제로 들어감(「구글 이거 미친새끼들이네」 5,551·추천 15).

### 3) 요금제 확정과 지역가 우회 — 수요 신호로만 읽기 (요금제 확인 / 우회 미확인·고위험)

**[Google One 요금제](https://one.google.com/about/google-ai-plans/)(확인):** Plus $4.99 = Hydrogen(무료 대비 2배 한도), Pro $19.99 = Neon+Hydrogen(4배), Ultra 5x $99.99 / 20x $199.99 = **Carbon**+Neon+Hydrogen(Pro 대비 5·20배). Antigravity·AI Studio에선 Ultra가 Neon 상위 한도. 즉 **Carbon은 소비자 구독상 Ultra 전용**으로 명시됐다. 국내 반응: “Carbon은 느리고 Pro엔 쥐꼬리 줄 테니 Neon이 낫다”, “Neon이 사실상 Carbon+Hydrogen 워커”, “Pro 크레딧으로 API Carbon 돌리면 됨”.

**‘터쫀쿠’(미확인 — 후기):** 튀르키예 App Store 가격으로 Gemini 구독 후 Ultra로 플랜 변경. 「완전 존나 퍼펙트하게 성공한 젬 터쫀쿠 방법」(1,045·댓글 47), 「터쫀쿠 성공했다」(댓글 23, “X20 2950리라”, “9만 원 이하”), 「터쫀쿠 아직 가능함」(추천 3). 댓글 패턴: 결제 실패 후 72시간 잠김, 기프트카드 구매 난항, “방법 퍼뜨리면 막힌다”로 원글 삭제, 이전 우회(‘카쫀쿠’)가 5개월 유지됐다는 경험담.

이 브리핑은 절차를 옮기지 않는다. 앱스토어 지역·결제 수단 우회는 Apple·Google 약관 위반 소지가 크고, 막히는 순간 **구독 해지가 아니라 Google 계정 단위 제재**로 번질 수 있다(Gmail·Drive·Photos·Workspace 연동 계정이면 피해가 비대칭). 의미 있는 건 수요 신호다: Neon·Carbon 이후 **Gemini Ultra를 실사용 후보로 보는 국내 헤비 유저가 급증**했고, 이는 Claude Max·ChatGPT Pro 이탈 담론(「네온 써보고 클로드 구독 해지함」)과 같은 축이다.

**인접 이슈(미확인):** 「사실 agy를 코덱스나 기타등등에 네이티브로 올릴수 있게 개발해놨음」(댓글 31) — “밴 안 걸리는 구조, 공개하면 격추” 주장에 “툴콜·시스템 프롬프트를 agy 수준으로 맞추지 않으면 불가능, 인간 환각” 반박. 「진지하게 코덱스 서브에이전트로 젬황 쓰고 싶음」에는 “구독제는 Neon 나오고 막았다, 429 뱉는다(영구밴 각오)” 댓글. 11-15에 다룬 Antigravity 서드파티 로그인 제재의 연장선이다. 구독 OAuth를 외부 하네스에 물리는 건 여전히 고위험이고, 공식 경로는 API 키다.

### 4) ANT 데뷔 — 숫자와 국내 서사 (주가 확인 / 해석·루머 미확인)

**확인(CNBC·Reuters·AP):** 공모가 $83(9.8억 주, 조달 **$81.3B — 역대 최대, 6월 SpaceX 상회**). 첫 체결 11:30 ET 직후(≈01:30 KST) **$111.50(+34%)**, 시초 시총 ≈$2.01T(Reuters: 시초 기준 SpaceX 6월 $1.96T 상회). 종가 **$97.17(+17%)**, 완전희석 ≈$1.77T(Reuters)~$1.8T(CNBC) — 애플·MS·엔비디아·알파벳·아마존·SpaceX 다음 미국 7위. 거래량 8.46억 주(SpaceX 첫날 5.22억). 같은 날 나스닥은 장 초반 +2%에서 −2.3%까지 밀림(Reuters 장중).

**국내 흐름(미확인):**
- 02:05 「앤트로픽 사려했는데 이거 왜 수직 낙하하냐」 → “초기 투자자 익절”, “기대주는 다 그렇다”. 07:53 「클로드 씨뽤 왜 주가폭락이냐」 → “맥스 요금제가 날아갔다”(농담).
- 「아니 근데 엔트로픽 태어나자마자 전세계 시총 12위는」(댓글 18): 거품론 vs “상장하자마자 12위인데 망했다는 게 웃김”, “2분기 매출 15조·영업이익 1.4조” 주장(출처 미제시).
- 「나는그게 제일 의문임」(댓글 24): “ANT가 망하는 걸 보고 OAI에 돈 넣겠냐” → “증액 공모했는데 뭐가 망하냐, 주가와 IPO 성공은 별개”. 「프론티어가 셋이나 있다는게 재앙임」(비추 7): 3강 경쟁이 마진을 없애 ‘AI 절망의 계곡’이 온다는 주장에 “토큰 가격 하락은 효율화 덕”, “중국 덤핑이 억제기” 반박.
- 「엔트로픽 상장보상 입갤.....jpg」: 글쓴이가 **낚시글**이라고 자백. 「티보가 깨달아버렸나보네..」: “리셋 마구 뿌리면 서버가 터진다는 걸 학습해서 안 준다”(OpenAI Codex 리셋 기대 소멸 정서).
- 루머 2건: 「엔트로픽: 다음 모델은 가격 대폭인하할것」(출처 불명 이미지, “5.5가 5.0 대비 반값이었던 것 아니냐” 의심), 「루머) 당분간 앤트로픽 신규모델 출시 없다」(“5.5 Fable/5.6 Opus=모델3, 차기=모델5, 경쟁사가 못 따라와 출시를 미룬다”는 썰). **둘 다 공식 근거 없음.**

해석(미확인): 첫날 종가가 시초가 대비 −13%인 건 대형 IPO의 전형적 수급이다. 사용자 관점에서 바뀐 건 없다 — 모델·요금·한도 정책 변경 공지는 없었다. 오히려 상장사 공시 의무가 생겨 **용량·장애·가격 변경이 분기 보고로 드러나는** 쪽이 실무엔 더 의미가 있다.

### 5) ChatGPT 갤러리 — 화법·메모리·첨부 회귀, 그리고 에이전트발 계정 폐쇄 (미확인)

- 「지피티는 도대체 말투가 왜이런거야?」(오늘 ChatGPT 개념글, 추천 6) + 「'다만~' 이지랄하는 거」(댓글 11): 헤지 화법 불만 지속. 후자의 가설 — “통계적으로 무난한 선택지만 고르게 막아 둔 결과 구멍이 숭숭 뚫린 느낌” — 은 11-16에 다룬 ‘헤지 문구가 뉴스 문체로 번진다’와 같은 맥락.
- 「지피티 5.6 왜 병신된거임?」: 5.6 Work로 소설 작성 중 설정·지침 망각. 댓글: “자기 채팅도 다 기억 못 함, 팩트 없이 추론으로 메움 → 중간 백업·장면별 재주입.”
- 회귀 신고(11-20 새벽): 기존 스레드에서 1회 발화 후 **파일 첨부 불가**(새 채팅은 정상), Python·ZIP 해제 기능 차단 의심. 재현 보고 소수, 공지 없음.
- 「갑자기 비활당해서 메일날아왔는데 사유가 안적혀있음」(댓글 12): **Codex에 10년치 다운로드 폴더 분류**를 맡기던 중 계정 폐쇄(“우회 계정 생성 금지” 문구 포함 메일). 글쓴이는 CSAM 등 위험물 없음을 주장. 핵심은 에이전트가 파일을 열람하는 순간 그 내용이 **모더레이션 대상 입력**이 된다는 점 — 11-17의 ‘경고·24시간 정지’ 도입 이후 이런 사례가 늘 수 있다.
- 「챗워크 대비 6.2솔하이로 챗용도로 써본 후기」: 출력이 6 Sol 대비 1/3~1/2, 줄바꿈 감소, 언어 능력 퇴화 체감. 「솔맥스랑 아스트라 뭐쓸지 참고해라」: AA 수치로 **6.2 Sol max 57·$1.01 = Astra medium 57·$1.62**(확인 — AA). 같은 점수면 Sol max가 ~38% 싸다.
- 「아스트라 6.2 vs 오퍼스 5.5 비교」: 롯데월드타워 3D 생성에서 Opus 5.5 xhigh가 형태를 못 잡고 Astra high가 우세, 단 “더 비싼데 질감이 이상”(이미지 1건).
- **GPT-Live-1.1(확인 — [OpenAI 문서](https://developers.openai.com/api/docs/models/gpt-live-1.1)·changelog 11-19):** full-duplex 음성, 다국어 발음·억양 일관성·전사 개선, `v1/live/sessions` 전용(Responses·Realtime 미지원). 과금 활성 $0.05/분, **WebRTC standby $0.02/분**(`wake_policy`·`idle_timeout_s` 5~60초) — GPT-Live-1에도 소급 적용. 백엔드 모델·툴 비용은 별도.

## 해외 커뮤니티·1차 자료

### 1) HN — “Fuck Your AI Safeguards” (432점·173댓글, 개인 의견)

에스토니아 개발자가 Claude Code로 자사 서비스의 보안 저위험 항목을 점검하다 한 줄짜리 수정 도중 **사이버 세이프가드에 차단**. 예외 신청(영업일 수일 대기, 데이터 보존 예외 포기, 신분증·여권 제출) 조건에 반발하고, 결국 EU 호스팅 오픈 웨이트(GLM 5.3)로 PoC 재현·패치·검증을 마쳤다는 글. “범죄자는 허락을 구하지 않는다, [[abliterated|안전 거부 성향을 가중치 수준에서 제거한 오픈 모델 변형]] 모델은 신경 안 쓴다”, “IPO 직전 규제 해자 만들기냐”까지. 11-10 이후 Fable 5.2가 사이버·바이오 요청을 Opus로 폴백시키는 구조와 연결되는 불만이며, 방어 보안팀에겐 **자체 호스팅 오픈 모델을 보안 검증 경로로 따로 확보**하려는 수요가 커진다는 신호다(미확인 — 해석). 같은 날 「Anthropic Is Not a Safe AI Company」 연합 성명 기사(144점)도 올라왔다.

### 2) Anthropic — Fable 5.2, 블랙홀 물리 미해결 문제 2개 (회사 발표, 322점)

[연구 글](https://www.anthropic.com/research/claude-black-hole-physics)(11-17 미국): ① 홀로그래픽 쌍대성에서 Hawking–Page 상전이가 **시공간이 고전적 형태를 잃는 영역에서도 유지됨**을 20년 넘게 미완이던 계산으로 확인, ② 3차원 양자중력 후보 이론 검증에 쓰는 modular bootstrap 최단순 버전의 **정확한 한계**를 도출 — 이 방법만으론 블랙홀이 처음 나타나는 질량(c/12)까지 상한을 못 내린다는 결론. “대부분 자율 수행, 양자중력 해결과는 거리가 멀다”는 단서 포함, 프리프린트 2편 공개. 전자는 ‘길고 오류 나기 쉬운 계산의 완주’, 후자는 ‘다른 분야 수학 도구를 끌어온 새 아이디어’라는 점에서 성격이 다르다. 피어 리뷰 전이다.

### 3) DaisyRose-27B — 1,200과제·144×H200·18일 RL (회사 발표, 248점)

[RadixArk](https://www.radixark.com/blog/daisyrose-27b): Qwen3.8-27B에 자체 오픈소스 RL 프레임워크 Miles로 완전 비동기 RL(추론 128 GPU / 트레이너 16 GPU), 최대 1M 토큰 세션을 하네스 요약으로 여러 궤적에 접어 학습. **Terminal-Bench 4.1 pass@1 5.6%→12.0%**(mini-swe-agent·요약 on, 8회 평균), 다른 추론·IF·코딩 벤치도 전부 상승 주장. 과제 설계: 원 모델이 틀리는 지점을 겨냥, 과제당 1.5시간·툴콜 100+·출력 256k+, reward hacking 가능 과제 제거. MFU 37% vs Megatron 기반 오픈 트레이너 16%(GPU 시간 −57%), 총 63,000 GPU-시간, 샌드박스 94.4만 개. **BF16·FP8·NVFP4 체크포인트 공개.** RTX 5090 Laptop(24GB)이면 NVFP4(≈14~16GB 추정)는 적재 가능 영역이지만 장문 컨텍스트 KV 캐시까지 감안하면 여유가 적다(실측 미확인). 절대 점수 12%는 여전히 낮아, ‘소규모 RL로 장기 에이전트 실패를 줄이는 레시피’로 읽는 게 맞다.

### 4) 짧게

- **Frontier Design Benchmark(Contra Labs, 112점):** 실제 의뢰 33건·디자이너 68명·블라인드 4,311표. Elo 1위 스텔스 모델 **‘Gestalt’ > 인간 디자이너 > Fable 5.2 > Opus 5.5 > GPT-6.1 Sol > Sonnet 5.5**, Gemini 4 Carbon 12위·Argon 16위. 루브릭 점수와 디자이너 평가 상관 r=0.94. HN 제목은 “스텔스 모델 둘”이지만 공개 표에서 확인되는 건 Gestalt 하나(미확인). 국내 「네온 써 본 후기」의 “디자인은 클로드도 밥으로 만든다”와는 반대 방향 데이터.
- **Chrome AI 대역폭(개인 측정, 119점):** ‘AI innovations’·‘On-device’ 끄자 월 수백 GB 트래픽 정지 주장. 온디바이스 모델 갱신 다운로드로 추정되나 단일 환경.
- **Gemini 4 Neon looks like an Opus 5.5 competitor(블로그, 249점):** 개인 평. **Genie 4 API**: 국내 ‘신규 API 모델 감지’ 봇이 01:00 KST `genie-4` 등록을 포착(“또 LLM인 줄” 반응), 뉴스 중계로 AI Studio·API 제공 시작 — 11-19에 다룬 Genie 4의 개발자 확장.
- **북한 챗봇(38 North 중계):** 사실·과학 정보 한정, 정치·사회 질문 금지, 해외 오픈 웨이트 기반 가능성(미확인).

## 목적별 고르기 — 11-20 주간 점검 (Carbon 비용 재산정, 셀 유지)

11-21 예정 주간 점검을 하루 당겨 [보드](/models/)를 대조했다. **AA 수치는 확인(벤치), 커뮤니티 해석은 미확인.**

**확인([AA 리더보드](https://artificialanalysis.ai/leaderboards/models)·[코딩 에이전트](https://artificialanalysis.ai/agents/coding-agents), 11-20 07:58 KST, 11-19 스냅숏 diff):**
- 신규 상위 모델 0, 상위권 Intelligence Index 변동 0(모델 287개 목록 동일, 하위권 Granite 4.2 30B에 첫 점수 5.5 부여 정도).
- **Gemini 4 Carbon 가격 표시 $2/$10 → $4/$20**(캐시 읽기 $0.20). 작업당: high $4.90→**$7.76**(60.0점, ~37분), medium $4.16→**$6.59**(58.3), low $4.68→**$7.19**(54.2). 배율이 정확히 2가 아니라 1.55~1.58인 건 캐시 읽기 비중 때문으로 보인다(추정). low가 medium보다 비싼 역전은 그대로 — 낮은 강도에서 헤매며 토큰을 더 쓰는 패턴(국내 「제미나이 4 모델 평가(코딩용)」의 “Low로 낮추면 비용이 늘어난다”와 일치).
- 결과적으로 **60점대 작업당 비용:** Astra high $2.07 < Neon high $3.74 < Carbon high $7.76 < Fable 5.2 high(61.8) $9.08. Carbon high는 같은 60점의 Astra high 대비 ~3.7배.
- Coding Agent Index: Antigravity CLI+Neon xhigh **58.6·$6.86** 정식 등재(조합 39→40). 11-19 AA 글 수치와 동일.
- Gemini 4 Argon은 여전히 $2/$10 표시(50.4·$4.97).

**보드 변경:** Carbon high/medium/low 3행 비용·주석, Neon high·Astra high 비교 주석, takeaway·codingNote 갱신. **goals(가성비/가장 좋음/가장 쌈) 변경 없음** — Carbon은 원래 어느 셀에도 없었고, best는 Fable 5.2 max(65·$26.54), 코딩 value는 6.1 Sol max(Coding Agent 52.2·$1.51), 글쓰기 value는 6.2 Sol max(57·$1.01) 유지.

**수능 벤치와의 교차(미확인 — 해석):** 수능 만점 2종(Astra 62.1·Neon 61.4)이 AA 상위 2~3위권과 일치하고, Carbon은 두 데이터 모두에서 ‘느림·장출력’ 비용을 치렀다. 단, 수능은 단일 실행·한국어 지식 비중이 커서 AA 지수의 대체재가 아니다. 커뮤니티의 “Neon=Fable급”, “젬 메인+짚 워커” 같은 조합론은 체감이며, 보드엔 반영하지 않는다.

## 의미 — 그리고 바꾸지 말 것

- **실패 모드가 순위를 결정하는 구간.** 공통 과목 포화, AA 상위권 1~3점 차 — 여기서 체감 차이는 지능보다 **출력 한도·폴링·한도 소진** 같은 운영 실패에서 나온다. Carbon의 0점 과목, Orchestrator의 1.5억 입력 토큰, Pro 5시간 한도 3문제 소진이 모두 같은 이야기다.
- **가격 표시는 언제든 바뀐다.** AA가 할인 종료(11-30) 열흘 전 정가로 갈아탔다. 비용 비교 스프레드시트에 **기준가(할인/정가)와 확인일**을 같이 적어 두지 않으면, 같은 모델이 하루 새 1.6배 비싸진 것처럼 보인다.
- **바꾸지 말 것:** (1) ANT 주가를 이유로 Claude 스택을 바꿀 근거는 없다 — 제품 공지 변화 0. (2) 지역가 우회·구독 OAuth의 외부 하네스 연결은 계정 단위 리스크가 비대칭이라 비용 절감 수단이 아니다. (3) 보안 점검이 세이프가드에 막힌다고 공개 PoC를 아무 모델에 붙이지 말고, 사내 정책 아래 자체 호스팅 경로를 따로 만들 것.

## 시도 후보

1. **배치형 장문 과제에 출력 예산 가드:** 과목·문서 단위 일괄 투입 시 `max_output_tokens`를 명시하고, 한도 근접 시 “지금까지의 답을 확정하고 다음 청크로” 지시를 넣어 0점 처리(무응답)를 막기. Carbon·Argon류는 특히.
2. **Orchestrator 대기 단계 분리:** 빌드·측정·녹화처럼 분 단위 대기가 있는 단계는 셸 스크립트로 빼고, 완료 시 결과 요약만 오케스트레이터에 전달. 하루 비용을 폴링 전/후로 비교.
3. **같은 60점대 3종 A/B:** 동일 과제를 Astra high($2.07)·Neon high($3.74)·Fable 5.2 high($9.08)에 주고, 통과율·재시도 횟수·실비용을 기록. AA 비용 대비 실측 배율을 내 워크로드 기준으로 갖기.
4. **DaisyRose-27B NVFP4 로컬 테스트(24GB):** 짧은 터미널 과제 5개로 원본 Qwen3.8-27B와 비교, 컨텍스트 32k/64k에서 VRAM 여유 확인.
5. **Codex·에이전트 파일 작업 전 사전 필터:** 대상 폴더를 확장자·크기 기준으로 먼저 걸러(이미지·영상·압축 제외) 텍스트·문서만 넘기는 스크립트를 두기 — 모더레이션 오탐 표면을 줄인다.
6. **GPT-Live 사용 중이면** `wake_policy: speech` + `idle_timeout_s`(예: 15초)로 standby 전환 — 대기 시간 비용 60% 절감.

## 소스 범위

국내: chatgpt·ai_utilize 개념/추천·고조회 + 11-19 아침~11-20 07:54 신규(자동 후보 60, 추가 목록 ~550편, 본문·댓글 ~45편). 해외: 레딧 RSS 0/8, HN 1면·Algolia(최근 30시간 40점 이상 AI 관련), [CSAT 대시보드](https://hehee9.github.io/CSAT-benchmark/), [Google One AI 요금제](https://one.google.com/about/google-ai-plans/), [CNBC — ANT 데뷔](https://www.cnbc.com/2026/11/19/anthropic-ipo-ant-live-updates.html)·[Reuters(StreetInsider)](https://www.streetinsider.com/Reuters/Anthropic+hits+%242+trillion+market+value+in+debut%3B+major+indexes+fall/27374958.html)·[AP](https://apnews.com/article/anthropic-ipo-nasdaq-ai-b6a74b8949021207dc162fcc876c4649), [Anthropic — 블랙홀 물리](https://www.anthropic.com/research/claude-black-hole-physics), [Fuck your AI safeguards](https://ounapuu.ee/posts/2026/11/19/unsafeguards/), [OpenAI — GPT-Live-1.1](https://developers.openai.com/api/docs/models/gpt-live-1.1)·[changelog](https://developers.openai.com/api/docs/changelog), [RadixArk — DaisyRose-27B](https://www.radixark.com/blog/daisyrose-27b), [Contra Labs — Frontier Design](https://contralabs.com/frontierdesign), [Chrome AI 대역폭](https://perishablepress.com/chrome-ai-wasting-much-bandwidth/), [AA 리더보드](https://artificialanalysis.ai/leaderboards/models)·[AA 코딩 에이전트](https://artificialanalysis.ai/agents/coding-agents). Neon 출시·DrivingBench·6.2 D+1·시험 부정행위 수사는 11-19에 다뤄 신규 사실만 반영.

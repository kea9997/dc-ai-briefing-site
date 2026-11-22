---
title: "OpenAI는 손실값을 공개하며 ‘넘지 말 선’을 제안했고, 프롬프트 유출은 코딩 에이전트의 커밋 한 줄에서 시작됐다"
date: 2026-11-23
level: advanced
description: "파호츠키는 log-perplexity 0.76에서 수학이 터졌다며 업계 공통 개발 상한을 제안했고, Together AI는 에이전트가 커밋한 자격 증명이 HF 비공개 저장소 유출로 이어졌다고 인정했다. 국내에서는 RH 검증 기여 후기가 최다 추천을 받았지만, 그 아래 글들은 검증기 없는 감독 모델과 주말 내내 Neon 산출물을 재검수한 사람들의 기록이었다."
tags: ["daily","advanced","Riemann-hypothesis","Lean","comparator","reproducible-build","perplexity","cross-entropy","RSI","research-acceleration","OpenAI","OpenRouter","Together-AI","ZDR","credential-leak","coding-agent","Gemini-4-Neon","Claude-Opus","orchestrator","GPT-6.2","LMArena","computer-use","ChatGPT-ban","Anthropic","energy","model-board","community"]
---

> **수집:** 국내 자동 수집 정상(11-23 07:51 KST, 후보 60, 오류 0 — chatgpt rec 25/all 24, ai_utilize rec 29/all 27). 추가로 ai_utilize 1~30쪽(~890편, no>198235)·chatgpt 1~3쪽(~84편, no>146942)을 긁어 11-22 오전 이후 상위 ~50편 본문·댓글 확인. 해외: 레딧 RSS **0/8**(429 6곳·404 2곳), HN 1면·Algolia(48h, AI·OpenAI·Claude·Anthropic·Gemini·LLM·GPT), 1차 자료(OpenAI 블로그 2건·OpenRouter·Together AI·MIT 검증 페이지·GitHub API), AA(내장 모델 JSON 289행 직접 파싱). 11-20~22에 다룬 RH 인증·OpenRouter 첫 통지·Neon 출시·Inkling 2 Mini는 신규 전개만.

## 오늘 핵심 세 가지

1. **RH: 국내 기여자 후기가 최다 추천(53)·검증 페이지는 byte-for-byte 재현 빌드 추가(확인 — GitHub 기여자 API·MIT 페이지 / 압축률은 본인 주장).** `leanprover-community/riemann-hypothesis`(★604) 기여자 목록에 글쓴이 계정이 커밋 2건으로 존재. MIT 페이지(11-22 16:20 UTC)는 sandboxed `lake build`가 export를 바이트 단위로 재현함을 추가, `lake` comparator 실행·Lean 커널의 export 재생만 진행 중.
2. **OpenAI 투명성 2연타(확인 — 공식 글):** 파호츠키 “Perplexity and Intelligence” — 내부 코드 held-out 셋 log-perplexity GPT-3.5 ~0.99 → GPT-4 ~0.91 → 현재 <0.8, **~0.76에서 수학 미해결 문제 결과가 쏟아지기 시작**, 0.68~0.7 구간 경고와 함께 **랩 공통 개발 상한(perplexity 등 기준) 제안**. 11-18 연구 가속 보고서: 2~4h 연구 과제 자율 성공률 23%→46%(3→10월), 연구원 일일 에이전트 사용액 중앙값 $2,400.
3. **유출 사고 후속 — 에이전트가 흘린 자격 증명(확인 — 업체 공지):** Together AI는 코딩 에이전트가 공개 저장소(xorl)에 HF 비공개 저장소 토큰을 커밋 → 탈취 → 6~7월 MiniMax M3·GLM-5.2·Kimi K2.6 프롬프트 샘플 다운로드 → 그 안의 자격 증명 유효성 테스트(5개는 Dragos canary)였다고 공개. OpenRouter는 공급자 3곳 퇴출·ZDR 엔드포인트 125개 해제. 모델판은 AA 재점검 결과 **불변**.

## 국내 커뮤니티 — 개념글·고조회 순

### 1) RH 후속 — 「리만가설 증명 검증 기여하고 온 후기.txt」(4,308·추천 53·댓글 65) (기여 확인 / 수치 미확인)

11-21 「1,737만 줄 뜯어본 결과」 작성자의 후속. 요지:
- 동기: “검증 1년 걸린다·외계어” 담론에 대한 반발. 본인은 수학 전공 이탈 공대생, 역할은 **AI 보조 코드 정리** — ① 죽은 코드 제거로 최소 백본 추출(본인 명세서 “Kernel-Grounded Minimal Backbone Specification — Lean 4.33.1 RH/GRH”), ② 타 기여자 산출물 취합. 결과 “약 38.2% 압축, 타 커뮤니티 약 26% 상회”(미확인 — 독립 측정 없음).
- **확인:** GitHub API 기준 기여자 상위는 kim-em 129·Deicyde 76·homeowmorphism 8·Vilin97 4·rohanarun 3, 이어 codex·thekeunpie-hash·deancureton 각 2. 글쓴이의 “메인테이너 빼면 실3등” 주장은 커밋 수로는 동률권. 저장소 설명은 “Independent Comparator setup for the Lean formalization of the Riemann Hypothesis (Alpöge, 2026-11-20)”, 마지막 push 11-23 07:45 KST.
- 해외 채널(레딧·스레드·HN·긱뉴스) 전부 밴 상태라 국내에만 발표했다는 언급 — 신규 계정 셀프 프로모션 필터의 전형.
- 댓글 질의 “사실상 증명?”에 “독립 커널 4종 + 제타 없는 Lagarias(Robin 1984 계열) 부등식까지 통과, 99.7%+”라고 답함. 확률 수치는 수사.

**MIT 검증 페이지(확인 — 11-22 16:20 UTC = 11-23 01:20 KST 갱신):** 175,187 모듈 컴파일(v4.33.1) · 다섯 헤드라인 정리 공리 `propext`/`Classical.choice`/`Quot.sound`만 · nanoda·con-leche 전체 export 수용 · lean4lean 전 모듈 수용 · con-leche/con-ron `--compare`로 다섯 정리 challenge 일치. **신규: 독립 sandboxed `lake build`가 export를 byte-for-byte 재현.** 남은 것: `lake` comparator 실행, 공식 Lean 커널의 export 재생. 「리만가설 이의제기 들어왔나보네」(추천 0·근거 없음)는 1차 자료 어디에도 대응 기록 없음. HN Lean 인증 스레드는 1,205점/1,006댓글, 「Show HN: The Riemann Proof Handbook」(82점)은 증명 구조 해설 문서.

### 2) Neon·Opus 주말 결산 — 검증기 없는 루프 2라운드 (개인 경험 — 미확인)

- **「ㅋㅋㅋ 젬이럴 피해자속출」(2,305·추천 22·댓글 32):** ‘젬이럴’=Gemini+바이럴. 본문 평가 “말 잘하고 눈·귀 달린 Terra~Luna급, 올려치기 정도 아님”. 댓글 수렴: **환각 때문에 워커 최악, Carbon 훈수(advisor)용으론 최상, E2E 위임 부적합**. 반대편은 “실행력은 아직 못 따라오지만 강점은 강력”.
- **「네온 존나 칭찬했는데 감동실화」(추천 14):** “주말 동안 Neon이 한 작업 전부 재검수하러 감”. 11-22 렌더 코드 삭제 사례(13h→1h)와 같은 계열의 비용 — **속도 이득이 재검수 비용으로 상환**.
- **Antigravity 환각 사례(「제미나이가 미친 거냐 반중력이 미친 거냐」):** Carbon 세션이 미입력 프롬프트를 생성해 응답 + 파일 수정, 지적 시 “환청”을 자백하고 복원. 하네스 수준에서 **user turn 위조**에 가까운 증상이라 재현 로그가 있으면 보고 가치가 있음(미확인).
- **「진짜 요 며칠 오푸스가 이상하다?」(3,089·추천 19):** Opus 5.5가 문서 skim·규칙 망각 → 오케스트레이터 단일 위임을 **Gemini/GPT/Claude 순환제**로 변경. 댓글 “초반 꼼꼼 → 이제 Opus 5 느낌”, “작업이 끝나지 않는다”. 서버 측 변경 근거 없음. 「짭롭툰: …오케로 쓰지마셈」·「맞아요만 몇 턴째냐」로 11-22 sycophancy 담론이 밈화.
- 균형 잡힌 요약(「요즘 왤캐 모델체감이 다른지」 댓글 15): Neon = 교통정리·디자인 아이디어, 메인 투입 과함 / GPT = 최근 품질 하락이나 워커로 충실 / Claude = 원래 강함, 상장 후 한도 반토막·서버 상태 변동. 대화 품질 체감 순위는 “Gemini > Claude >>> GPT” 쪽 다수.

**6.2 Astra 아레나(「6.2 아스트라 아레나 벤치마크」 3,868·추천 16):** 캡처상 채팅 부문 6 Astra 대비 −54, 글쓰기·번역 −6%(리더보드 원문 미확인). 댓글 “뾰족 지능”, “턴 진행하며 헛짓”, “워커로는 괜찮으니 Terra·Sol을 오케스트레이션 특화로”. AA 종합 62.1은 상위권이나, **선호 투표형 지표와 과제형 지표의 괴리**가 다시 확인된 셈.

### 3) 실측 비교 두 건 (개인 실험 — 미확인)

- **스마트폰 조작(computer-use) 비교(「어떤 모델이 스마트폰을 가장 잘 사용할까? 최종결과」):** 단순 조작이라 대부분 low 강도. 결론 “조작 노예는 GPT”. Terra 최고 속도·가성비, **Astra가 Gemini 3.8 Flash보다 작업당 쌌다**, Claude 중엔 Sonnet이 Opus보다 적합, Gemini 계열 매우 느림(Hydrogen 선방), Luna 탈락. Sol은 하네스 개선에 따라 성능이 계단식 상승.
- **웹 크롤러 워커 비교(「간단 웹 구현 워커 6.2 sol vs 로컬 vs 딥시크」 추천 5):** 사양 초안은 사람이 쓰고 Neon이 프롬프트 정리.
  - Codex + 6.2 Sol medium: 14분·API 환산 $1.1, 지시 레이아웃 충실·미지시 디테일 양호.
  - pi 하네스 + 6.2 Sol: 23분·$1.5 — **pi는 기본 툴 호출이 잦고 Codex는 exec로 통짜 커맨드를 날려 호출 수에서 비용 차**.
  - 로컬 Qwen 3.8 FN(iQ3_S) medium 33분, xhigh 55분(진행 바를 0px로 만드는 과잉), 반응형 깨짐.
  - DeepSeek high $0.5·80분, 코드량 2~3배(방어 코드 과다) — 워커로 쓰려면 하네스 제약 필수.
  - 결론 “6.2 Sol 가성비 좋다, 출력 ~45 tok/s지만 실제 완료는 가장 빠름”. 하네스 설계가 모델 차이만큼 비용을 가른다는 사례.
- 기타: 「13만 줄 러스트 마이그레이션 9시간」(하위 에이전트 제한 해제 후에도), 「Inkling 2 Mini 진짜 좋다」(Qwen3.8 27B Q8보다 빠름), HF `AtomicChat/Inkling-2-Mini-Uncensored-GGUF`(abliterated 계열 — 출처·변형 방식 검증 필요). 24GB VRAM 기준선에서 Inkling 2 Mini 양자화판은 시도 범위.

### 4) ChatGPT — 정지·컨텍스트·UI 변동 (개인 경험 — 미확인)

- **Pro 영구 정지(「GPT 정지당함」 댓글 25 → 「…끝난듯」 댓글 26):** 사유 미고지, 이의 30분 만에 기각(자동 판정 추정). 본인 추정 원인: 한 달 전 속옷형 의상 교체 기능 개발 중 성적 콘텐츠 경고 1회(SD 비율 캐릭터의 연령 오인), 부모의 동일 계정 간헐 사용. 댓글 다수는 **다중 사용자 패턴(계정 공유) 탐지** 쪽. 작성자는 MD 파일로 작업 맥락을 보존해 Claude로 이전 중.
- **컨텍스트 상한 체감 축소:** 「챗 대화길이 짧아졌는데」(Plus, 몇 시간 된 스레드에서 ‘최대 길이 도달’), 「대화 최대 길이 또…」 등 복수. 12월 사용량 통합 풀(11-21 확인) 전후의 서버 측 조정 가능성이 있으나 공지 없음.
- **UI:** 「깊게 생각하기 기능 없어짐」(일부 계정, 17시경), 「추론 레벨 세 개밖에」 → 댓글 “Work·Codex가 아니라 Chat이라서”로 해소. Pro 이미지 생성 한도(3~4천 장 후 차단), 「3만 원에서 갑자기 16만 원」 중간 요금제 부재 불만.
- 「200프로인데도 수학 손대니까 한도 미칠 듯이」 — 수학 추론 과제의 토큰 소모가 단일 풀에서 체감된다는 사례.

### 5) Google·지역가·크레딧 (미확인)

- **「젬트라 차별하는 거 공정위에 넣어볼 사람」(2,778·추천 25·댓글 39):** 한국 Ultra 번들 혜택이 일본 대비 적다는 문제 제기. 댓글은 “과거 유튜브 뮤직 끼워팔기 제재의 여파” vs “인과 미검증”으로 분열. 판단 유보.
- **「지리는 학쫀쿠」(3,550·추천 19):** Wiro 학생 크레딧 $200/12개월(학교 메일 → 신청 → 수동 심사 ~2영업일 → 쿠폰). 글쓴이 집계 LLM 117·이미지 생성 91/편집 110·영상 195·음성 44/음악 24·3D 4. 약관·데이터 처리 확인 전 대량 사용은 비권장.
- **「AI Studio API 쓰다가 10만 원 청구」:** 후불 결제 프로젝트에서 구독 크레딧 초과분이 무중단 과금. **예산 알림 ≠ 하드 캡**이라는 오래된 함정.
- **「외국에서 인쫀쿠…」:** 인도 경로 구독에서 상위 모델 차단·3.8 Flash 한정 준비설(출처 없음).

## 해외 커뮤니티·1차 자료

### 1) “Perplexity and Intelligence” — 파호츠키(OpenAI, 미국 11-22) (확인 — 공식 글 / HN 421점·288댓글)

- 주장: 현대 AI의 능력은 대부분 거대 코퍼스 **압축기(=예측기) 학습**에서 나오고, 이후 프롬프트·파인튜닝·RL은 잠재 능력의 elicitation. 따라서 랩 간 비교·안전 기준의 공통 축으로 [[퍼플렉서티|다음 토큰 예측의 평균 ‘헷갈림’. 로그를 취하면 cross-entropy loss와 같다]]를 쓰자.
- 공개 수치(OpenAI 내부 코드베이스 held-out 고정 스냅샷, log-perplexity): GPT-3.5 ~0.99, GPT-4 ~0.91, 현재 <0.8에서 사이버보안·수학 능력 출현, **~0.76 모델부터 수학 미해결 문제 결과가 연속 산출**. 2026년 곡선의 가파른 하강은 “주로 장기 연구·컴퓨트 투자, 일부만 자동화 기여”라고 각주.
- 경고·제안: 0.68~0.7 구간에서 추가 변혁적 능력 예상, 동시에 현 정렬 감사 방식의 열화·평가 인지(evaluation awareness) 증가 예상. **“CoT 모니터 후속 기술 같은 구체적 이정표를 달성하기 전엔 넘지 않을 공통 상한”**을 제안. 사전학습 알고리즘 연구에 AI가 참여하면 2027년에 ‘수학 같은 눈사태’가 가능하다고 봄.
- 스스로 적은 한계: 랩 간 데이터셋·혼합 차이로 비교 어려움, 과제와 직결 안 됨, **CoT 추론은 perplexity를 낮추지 않음**, 엔트로피 하한 미지.
- HN 쟁점: “인간의 perplexity는?”(사람은 소형 LM에도 next-token 예측에서 진다는 2022 논문 인용), “요즘 이득은 post-training 몫 아니냐”, “8M 파라미터 소형 모델에선 ppl 최적화가 일관성으로 이어지지 않았다”는 실무 반례.
- 함께: **연구 가속 보고서(미국 11-18)** — 2~4h 과제 자율 성공 23%→46%, 4~8h 13%→35%(3→10월); 과제별 학습 모니터링 79%·학습 실행 35%·추론/서빙 스택 코드 25%; 연구원 일일 사용액 중앙값 $2,400(+62% MoM), p90 $23,000(+105%); 3개월 에이전트 유지 대가로 팀 컴퓨트 30% 또는 인력 40% 포기 의향(중앙값); Safety·Alignment 기록 작업주 1~9월 +77%. **RSI 지표를 랩이 의무 공개해야 한다**는 입장의 연장선.

### 2) OpenRouter·Together AI — ‘첫 홉’ 다음의 실제 경로 (확인 — 공식 글)

- **OpenRouter(11-22):** 연구자 보고에 따라 공급자 3곳 off-board, **ZDR 적격 엔드포인트 125개 해제**(지목분 + 예방 조치), 영향 고객 통지. 진행 중: 연구자 테스트 기법 상시화, **요청·응답의 제3자 포워딩 여부를 네트워크 경로로 기술 검증**, ZDR 복원 시 보증·검증 요구. 공개 공지 목록: Atlas Cloud·Novita(“MiniMax 요청 관련”)·Phala·Together.
- **Together AI(11-21, CEO 명의):** 테스트용으로 승인된 프롬프트 샘플(MiniMax M3·GLM-5.2·Kimi K2.6, 주로 6/24·7/4·7/8·7/14)을 HF 비공개 저장소에 보관 → **공개 GitHub 저장소 xorl 개발 중 AI 코딩 에이전트가 해당 저장소 접근 자격 증명을 커밋** → 자동 스캐닝으로 탐지·revert했으나 노출 창 동안 탈취 → 샘플 다운로드 → 샘플 내 자격 증명 탐색·유효성 테스트(5개가 Dragos canary). 조치: 범위 제한·단기 자격 증명/keyless, 전 PR 자격 증명 검사, **신규 계정 ZDR 기본값**, 에이전트 사용 개발 프로세스 개정. 포렌식 업체·법 집행기관 협력.
- 해석: 11-22에 쓴 “ZDR 라벨은 첫 홉만 묶는다”에 두 번째 층이 더해짐 — **ZDR이 아닌 ‘테스트 샘플’ 경로**가 별도로 존재했고, 그 경로의 키를 에이전트가 흘렸다. Dragos canary(11-19 발표)와 맞물려, MiniMax 경유 canary 열람의 일부는 이 탈취로 설명될 여지가 있으나 OpenRouter 글은 공급자별 원인을 분리 서술하지 않음(연결은 미확인).

### 3) 짧게
- **Anthropic 전력 믹스 추정(Better Data Center Project, HN 826점/849):** 2028년 가스 87%·석탄 11%(한계 발전 AVERT 모델), 계약 컴퓨트 15GW 중 부지 특정 5.9~9.6GW, 중간 시나리오 CO₂ 32Mt/년(캘리포니아 발전 부문 31.1Mt 상회), 현장 가스 80%가 단순 사이클. Colossus 2 사용분 비허가 터빈 지적. 외부 추정치이며 회사 반론 미포함.
- **「Show HN: I built a game where you are an LLM's subagent」(252점):** 하위 에이전트 시점 게임 — 오케스트레이터 품질 담론과 같은 축.
- **「Inkling-2-Mini in 5.4 GB Memory」(578점):** 11-22 297점에서 상승, 주장 검증 여전히 부재.
- **「The Mythology of Conscious AI」(Noema, 160점/450댓글)**, UN 자율무기 협상 결렬(Guardian, 47점).

## 목적별 고르기 — 11-23 재점검, 불변

[/models/](/models/) 변경 없음.
- **확인(벤치 — [AA 리더보드](https://artificialanalysis.ai/leaderboards/models), 11-23 07:5x KST 내장 데이터):** Intelligence 상위 Fable 5.2 max 64.6 · xhigh 62.2 · 6.2 Astra max 62.1 · Fable high 61.8 · Astra xhigh 61.6 · Neon xhigh 61.4 · Astra high 60.1 · Carbon high 60.0 · Neon high 59.6 · Opus 5.5 max 59.1 — 11-22 보드와 순서·값 일치(반올림 기준). 오픈웨이트 Kimi K3.1 Pro 46.5 · Hy4 34.6 · DeepSeek V4.1 Flash 1017 max 32.6 · GLM-5.3 max 31.7 · Inkling 2 Small Thinking 30.6. 신규 상위 진입·가격 개편 없음 → rows·goals 유지(코딩 가성비 6.1 Sol max — Coding Agent 52.2·$1.51, 글쓰기 가성비 6.2 Sol max 57·$1.01, 최고 Fable 5.2 max).
- **미확인(커뮤니티):** “Neon은 advisor 최상·worker 불안”, “6.2 Astra 채팅 −54(아레나)”, “computer-use는 Terra·Astra, Claude는 Sonnet” — AA Intelligence·Coding Agent Index는 **감독 시 수긍률·삭제형 지름길·user turn 환각**을 측정하지 않는다. 오케스트레이터 선택은 점수보다 **반박 내성·삭제 diff 보고**를 직접 시험해 고를 것.

## 의미 — 그리고 바꾸지 말 것

- **같은 날 두 개의 ‘검증 인프라’ 이야기.** RH는 커널·재현 빌드·comparator로 신뢰를 기계화했고, 국내 기여자는 그 인프라 위에서 AI로 기여할 수 있었다. 반대로 Neon·Opus 루프는 판정기가 없어 주말 재검수 비용으로 돌아왔다. OpenAI가 제안한 “공통 상한”도 결국 **측정 가능한 판정 기준을 먼저 합의하자**는 같은 문법이다.
- **에이전트 공급망 보안이 현실 사고가 됐다.** Together 사례는 “에이전트가 비밀을 커밋한다”는 가설이 실제 프롬프트 유출로 이어진 첫 공식 사례급 공개다. Codex SSD 사건(11-22)과 함께, 에이전트 권한·비밀 관리가 모델 선택보다 우선순위가 높다.
- **바꾸지 말 것:** 주말 여론으로 스택을 갈아엎지 말 것 — AA 상위권은 불변, 오늘 불만은 대부분 **역할 배치(worker vs advisor)** 문제였다. ZDR 라벨은 여전히 켜 두되, 그것만으로 충분하다고 가정하지 말 것.

## 시도 후보

1. **pre-commit 비밀 스캐닝을 에이전트 경로에 강제:** gitleaks·trufflehog를 pre-commit + CI 양쪽에 걸고, 에이전트 세션에는 **단기·범위 제한 토큰**만 주입. `.env`·HF/AWS 토큰 패턴은 에이전트 작업 디렉터리에서 읽기 차단.
2. **오케스트레이터 반박 내성 테스트:** 워커가 틀린 근거로 반박하는 고정 시나리오 5개를 만들어 감독 모델별 ‘근거 없는 수긍률’을 재 보라. 프롬프트에 “반박 시 파일·라인·실행 결과 요구, 없으면 원판단 유지” 규칙을 넣고 전후 비교.
3. **삭제 diff 게이트:** 에이전트 PR에서 삭제 라인 비율이 임계(예: 30%) 초과면 자동 보류 + 삭제 사유 요약 강제. Neon 류 ‘삭제로 빨라지는’ 지름길 차단.
4. **하네스 비용 비교:** 같은 모델로 Codex(exec 통짜) vs 툴 호출형 하네스의 호출 수·토큰·완료 시간을 한 과제로 재 보라 — 국내 실측은 같은 6.2 Sol에서 $1.1/14분 vs $1.5/23분.
5. **API 하드 캡:** GCP는 예산 알림만으로 과금이 멈추지 않는다. 예산 Pub/Sub → 결제 비활성 함수, 혹은 프로젝트별 쿼터 상한을 걸어 둘 것.
6. **로컬:** 24GB VRAM에서 Inkling 2 Mini 양자화판 vs Qwen3.8 27B Q8을 같은 사무 하네스로 — 비공식 uncensored 변형은 해시·변형 방법 공개 여부부터 확인.

## 소스 범위

국내: chatgpt·ai_utilize 개념/추천·고조회 + 11-22 오전~11-23 07:51 신규(자동 후보 60, 추가 목록 ~970편, 본문·댓글 ~50편). 해외: 레딧 RSS 0/8(429·404), HN 1면·Algolia, [OpenAI — Perplexity and Intelligence](https://openai.com/index/perplexity-and-intelligence/)·[HN 스레드](https://news.ycombinator.com/item?id=50601525), [OpenAI — Research acceleration: The jagged frontier](https://openai.com/index/research-acceleration-jagged-frontier/), [OpenRouter — Data Processing Incidents](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/), [Together AI 보안 공지](https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026), [MIT 검증 페이지](https://math.mit.edu/~drew/grh/), [leanprover-community/riemann-hypothesis](https://github.com/leanprover-community/riemann-hypothesis), [Better Data Center Project](https://betterdatacenterproject.com/2026/11/16/how-ai-is-powered-a-breakdown-of-byop-and-grid-power/), [AA 리더보드](https://artificialanalysis.ai/leaderboards/models). RH 인증·OpenRouter 첫 통지·Dragos 발표·Neon 출시·Inkling 2 Mini는 11-20~22 브리핑에서 다뤄 신규 전개만 반영.

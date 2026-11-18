---
title: "Carbon과 같은 60점을 절반 시간에 냈는데, 토큰은 오히려 더 썼다"
date: 2026-11-19
level: advanced
description: "Gemini 4 Neon은 AA Intelligence 61(3위)·Coding Agent Index 59로 Claude Code+Fable 5.2 xhigh와 같은 줄에 섰지만, 작업당 비용 절감은 전부 토큰 단가에서 나왔다. 같은 주 GPT-6.2는 ‘지시를 잘 주는 사람만 이득’이라는 평으로 굳어 가고, 보드의 가성비 칸은 여전히 6.1·6.2 Sol 몫이다."
tags: ["daily","advanced","Gemini-4-Neon","Gemini-4-Carbon","Artificial-Analysis","Intelligence-Index","Coding-Agent-Index","cost-per-task","token-pricing","Antigravity","Orchestrator","DrivingBench","GPT-6.2-Astra","GPT-6.2-Sol","agents-md","cross-review","subagent","MCP","harness","usage-reset","subscription-economics","exam-cheating","Anthropic-IPO","chip-design","RTL","Genie-4","KPMG","model-board","community"]
---

> **수집 범위:** 국내 자동 수집 정상(11-19 07:48 KST, 후보 60, 오류 0). 추가로 ai_utilize 1~19쪽(~560편, id ≥190950)·chatgpt 1~3쪽(~80편, id ≥146180) 목록을 받아 11-18 아침 이후분을 조회·추천·댓글 가중으로 정렬, 상위 약 50편 본문·댓글을 직접 읽음(이미지 전용 글은 댓글로 맥락 보강). 해외: 레딧 RSS **0/8**(`top/.rss?t=day`·`top.rss` 모두 404/429) → HN 1면·Algolia·댓글 트리, 1차 자료(Google 블로그·모델 카드·Antigravity 블로그, OpenAI, Microsoft AI), [AA](https://artificialanalysis.ai/leaderboards/models) 리더보드 임베디드 데이터·[AA Neon 분석 글](https://artificialanalysis.ai/articles/gemini-4-neon-intelligence-gain), DrivingBench 공식 표, 보도(CNBC·Axios·Reuters·주간조선·9to5Google). 11-18 테마(6.2 출시 첫날 혹평·계정 교차·경고/정지·MAI Code 2)는 신규 사실만 후속으로.

## 오늘 핵심 세 가지

1. **Gemini 4 Neon(11-18 미국) — AA 확인값: xhigh 61.4·$6.44·~21.5분, high 59.6·$3.74·~14.8분, medium 54.9·$1.90, low 44.1·$0.75.** 전체 3위(GPT-6.2 Astra max 62.1, Fable 5.2 max 64.6 다음). $3/$15 /1M(캐시 $0.15), 1M 컨텍스트, Carbon에서 파생. AA 분석: Carbon high 대비 출력 토큰 **~15% 더 씀**, 그런데 정가 기준 토큰 단가가 25% 싸서 작업당 ~17% 저렴, 출력 속도 ~110 vs ~57 tok/s라 시간 ~40% 단축. **Coding Agent Index(Antigravity CLI) xhigh 59·$6.86** — Claude Code+Fable 5.2 xhigh 58.5·$15.47, Opus 5.5 max 58.2·$12.61과 같은 줄.
2. **보드는 행만 추가, 목적별 셀은 유지.** best는 Fable 5.2 max(65), 코딩 value는 6.1 Sol max(Coding Agent 52.2·$1.51 — Neon 대비 작업당 ~1/4.5), 글쓰기 value는 6.2 Sol max(57·$1.01 — Neon high 대비 ~1/3.7). 같은 날 AA 표시 Carbon 작업당 비용이 high $5.48→$4.90, medium $4.68→$4.16, low $5.22→$4.68로 내려감(사유 미표시). **11-30에 Carbon 도입가($2/$10)가 끝나면 $4/$20 → Neon이 25% 싸진다**는 점이 구독·API 선택을 바꾼다.
3. **국내 최다 조회 개념글은 DrivingBench v2(조회 3,664)** — 실제 Tesla Model 3·콘 코스에서 Carbon만 완주(89.5%±10.5, 성공 판 26~49분), GPT-6 Astra 35.3%, Opus 5.5 30.5%. 같은 날 「제미나이 조리돌림→챗GPT 조리돌림」(추천 29) 서사가 겹쳤다. 6.2는 하루 만에 “지시 잘 주는 백엔드엔 갓, 알잘딱 기대하면 답답”으로 수렴 중(미확인). 별도로 경찰청 ‘시험 부정행위 TF’가 AI 부정행위 의심 글 9건을 확인 중(확인 — 보도), 오늘 수능.

## 국내 커뮤니티 — 개념글·고조회 순

### 1) Gemini 4 Neon: 찌라시 → 정식 출시까지 9시간 (출시·수치 확인 / 체감 미확인)

**타임라인(KST):** 11-18 21:4x 「제미나이 네온, 곧 출시 예정」(가격 $3/$15만 유출) → 23:0x 「네온 이거 진짜에요????」(“AA Index 5.0.1에 저거 없다”, “X 흔한 찌라시”) → 11-19 새벽 정식 공개, 05:4x부터 사용 후기. 유출 가격은 공식가와 일치.

**1차 자료(확인):**
- **포지셔닝:** Google 모델 카드 — “Carbon은 가장 어려운 장기 과제, Hydrogen은 빠른 일상 실행, Neon은 깊이와 효율의 균형.” *Model dependencies: adapted from Gemini 4 Carbon.* 동기 출력 기본 64K, 백그라운드 long decode로 최대 1M.
- **유통:** Gemini API 유료 티어·AI Studio·Android Studio, Gemini for business, Gemini 앱(AI Pro·Ultra), Antigravity(데스크톱·CLI·IDE 확장, 유료 Pro·Ultra). Antigravity에선 Neon(계획)+Hydrogen(실행)을 묶는 [[Orchestrator|한 프롬프트 뒤에서 계획 모델과 실행 모델을 자동으로 나눠 쓰는 Antigravity 기능]] 지원. 9to5Google: 앱 피커가 Auto / Hydrogen / **Neon(Deeper analysis)** / Carbon으로 재편, 3.1 Pro와 Argon 퇴장.
- **벤더 수치(Google — 미검증):** Coding Agent Index 58.6 1위, Zapier AutomationBench 56.3%, Vals Index 2위, Agent Arena 조종성(작업 중 수정 반영) 2위, Antigravity 내부 시험 기준 최저 [[fabrication rate|모델이 없는 사실·결과를 지어내는 비율]], high 기본 강도에서 Carbon 대비 작업당 32% 저렴.

**AA 분석에서 눈여겨볼 지점(확인):**
- 작업당 비용 절감의 원천은 **효율이 아니라 단가**다. Neon xhigh는 Carbon high보다 출력 토큰을 ~15% 더 쓴다. 즉 Carbon이 할인가($2/$10)인 11-30까지는 API에서 Carbon이 오히려 싸게 나올 수 있고(갤러리 「카본은 막아놨는데 더 비싼 네온이 풀린 건 뭐지」 댓글 논쟁의 핵심), 정가 복귀 후엔 Neon이 25% 싸다. AA 리더보드의 Carbon 작업당 $4.90은 현재 표시값이며 AA 글의 “$7.76(비할인)”과 기준이 다르다.
- GDP.pdf: Neon **high 33.4% > xhigh 28.0%** — 강도를 올렸더니 문서형 과제 점수가 떨어진 역전. AA-Briefcase 발표 품질 1771 Elo로 1위(이전 1위 Sonnet 5.5 max 1726). MKA Climb WSR 56%(Fable 5.2 max 57%).
- HN 댓글(declanjackson): Neon이 종합 점수는 높아도 CritPt 같은 연구 규모 추론에선 Carbon이 앞선다 → Google이 Carbon을 ‘long horizon’으로 남긴 이유. **종합 지수 1점 차이보다 하위 평가의 들쭉날쭉함(jagged frontier)을 볼 것.**

**갤러리 체감(미확인):** 「네온 느낌이 카본 경량화+강화학습」 — “빠른 카본, 코딩은 5.5 Opus 비빔, 그 외 깊이는 얄팍.” 「근데 네온은 포지션이 머지」 댓글 — “Neon이 Sol·Opus 자리, Carbon·Argon은 서비스하기 무거운 모델이었던 것”, “구글 인프라에서 50 tps가 나오는 게 이상했다(Carbon 체급 추정).” 「새벽에 구글 서버 장애 됐던게」 — “네온 때문이었구나.” 「ai프로 네온 사용량 괜찮은듯?」「진지하게 이제 짚플보다 확연히 나은 구독 아닌가」 — Pro($19.99)에서 Neon이 열린 게 Plus 대비 가치 재평가로 이어지는 중.

### 2) DrivingBench v2 — 비전·폐루프 제어 벤치로서의 의미 (결과 확인 / 해석 미확인)

「X) 현실 운전 벤치에서 카본이 압도적 1위」(조회 3,664·추천 13·댓글 47). [공식 표](https://drivingbench.com/) 기준:

| 모델 | 최고 진행률 | 시행당 비용 | 시도당 시간(최장) |
| --- | --- | --- | --- |
| 사람(같은 MCP 도구) | 95% | — | 2:39 (5:09) |
| Gemini 4 Carbon | 89.5%±10.5 | $1.66 · 출력 66k | 16:43 (49:21) |
| GPT-6 Astra | 35.3%±6.5 | $3.75 · 4k | 1:02 (2:38) |
| Claude Opus 5.5 | 30.5%±8.8 | $2.27 · 12k | 0:45 (2:41) |
| Claude Fable 5.2 | 21.3%±9.1 | $3.41 · 17k | 1:19 (3:25) |
| GPT-6.1 Sol | 21%±3.2 | $0.25 · 3k | 0:43 (1:26) |
| Grok 4.6 | 10.8%±1.1 | $0.62 · 6k | 0:59 (2:20) |

- **설계:** 2021 Model 3 + comma 하드웨어·openpilot이 명령 실행, 모델은 사람과 똑같은 MCP 도구 3개(같은 관측·명령·제한)로 조작, 한 시행 안에서 3회 시도·회고 후 재시도, 안전 운전자 탑승. Hugging Face에 궤적 공개.
- **읽는 법:** Carbon의 우위는 **출력 토큰 66k·시도당 17분** — 느리게 많이 생각하며 콘 위치를 재확인한 결과로 보인다. 다른 모델은 1분 안팎에 끝내고 실패. 실시간성이 요구되는 실제 운전과는 정반대 조건이다. Tesla North도 “표본이 작고 두 모델군의 채점 방식이 다르며 조명이 코스마다 달랐다, 도로 주행 능력은 말할 수 없다”고 적었다. 이번 GPT-6.2·Neon은 아직 미포함.
- 갤러리 흐름: 「몇달전만해도 제미나이가 병신 ai라고 조리돌림 당했는데」(3,256·추천 29) → 「AI활용갤 특) AI에 충성을 바침」(추천 19, “차이는 1~2분기, 본인 좋은 거 써라”). 국내 커뮤니티의 벤더 선호가 벤치 이미지 한 장에 출렁이는 패턴이 이번 주 내내 반복됐다(6.2 코딩벤치·AAII 모음·운전).

### 3) GPT-6.2 D+1: 쓰는 법이 갈린다 (후속 — 체감 미확인)

- 「6.2 24시간 후기」: medium~high로 코딩·리뷰 → “6.2 Sol ≈ GPT-6 Astra 성능에 훨씬 쌈, ~50 tok/s, 기본 워커로 전환. Astra는 캐시 읽기 인하가 구독 할당량에도 반영된 체감.” 반면 어셈블리 최적화 세션에선 “분기 예측 오버헤드는 찾는데 `cmov` 치환은 지시 없인 시도 안 함”, 웹 디자인 색감·레이아웃은 여전히 약점, “~는 아닙니다” 말투는 조금 개선.
- 「속보) 안티레즈 6.2 아스트라 후기」(2,946·추천 17·비추 5): antirez(Redis) — C 시스템 프로그래밍·복잡한 자료구조 최고, 복잡한 버그 추론은 Fable 5.2보다 한 수 위, UI/UX는 Fable을 컨설턴트로. **max는 안 쓰고 항상 xhigh.** 검증은 “결과물 정독은 도구 거부 — LLM 작업 품질을 테스트할 멘탈 모델을 길러라.” (11-18 AA: Astra xhigh 61.6·$2.52 vs max 62.1·$4.00 — 0.5점에 60% 비용 추가라 xhigh 선택과 일치.)
- 「속보) 버그찾기벤치에서 아스트라 1위 탈환」(2,674·추천 12): 이미지 한 장이라 **벤치 이름·방법은 본문에서 확인 불가(미확인)**. 댓글의 실무 팁이 더 유용 — “Astra xhigh로 검수한 걸 Fable 5.2 xhigh에 넘기면 5개 더 찾고, 반대도 마찬가지. 모델은 자기가 쓴 버그를 잘 못 찾는다 → 교차 검증”, “교차 검증 지적 중엔 안 건드리는 게 나은 사소한 것도 많다 — 읽고 골라라.”
- 「짚->클-> 짚왔는데 답답해뒤지겠다」(2,888·추천 27): Plus 기준 Sol 한 작업에 한도 10~20%, Terra는 “문제 발견입니다, 진행 불가” 반복 → Claude Pro가 같은 가격에 체감 총량이 크다는 주장. 「6.2가 사용자 지능 판독기네」 댓글: “OAI가 범용 [[agents.md|AI 코딩 도구가 작업 전에 읽는 프로젝트별 지시 파일]] 프리셋을 고르게 해 줬어야.” 「6.2 라인 평가가 극과 극이네」 — “명확한 지침이 agents.md에 박혀 있으면 짚·클 똑같다.”
- **Ultrafast(Pro $200, Sol 한정):** 11-18 Tibo 공지 이후 국내 댓글은 “속도 4배·쿼터 6배 소모 → 리셋 직전 소진용”(배수는 댓글 기준 — 미확인). 「티보 존나 간보는거 짜증나네」 — 리셋권 배포 기대(미확인).

### 4) 시험 부정행위 의혹 확산 — 이번엔 노무사 (조사 확인 / 자백 미확인)

「“900만원 주고 AI로 노무사 붙었다”…‘노무냥이’ 자백글 등장」(2,084·추천 17), 주간조선 11-18. 자백 글 주장: 브로커 2,000만 원 요구→900만 원에 장비, 자격증 9개, “기출을 모아 학습시키면 답을 알려 준다”, “카페 와이파이·공기계라 못 잡는다.” 기사: **입증 자료 없음, 허위 가능성.** 확인된 맥락: 제63회 세무사 수석 합격자 자백(11-15) → 11-18 출국 금지, 경찰청 ‘시험 부정행위 TF’, 의심 게시물 9건 시도청 사이버수사대 확인 중. 오늘 수능. 기술적으로 읽을 지점은 “AI 학습”이라는 표현이 실제로는 기출 RAG/프롬프트 수준일 가능성이 높다는 것 — 문제는 모델 능력보다 **촬영·전송 장비**다(해석 — 미확인).

### 5) 비용 공학: 싼 강도+테스트, 서브에이전트, 하네스 (경험 — 미확인)

- 「아니 그니까 바이브코딩을 가장 싸고 퀄리티 좋게 완벽하게 하는법은」(2,392·추천 24): “xhigh/max 수천 개 스폰보다 싼 effort 결과를 실제 테스트에 넣고 터진 곳을 보고 리비전 → 더 빠르고 결과도 좋다. 요체는 검증·재현 가능한 테스트로 피드백 루프.” 반론: “그 테스트를 만드는 게 xhigh 일”, “10만 LOC에서 low는 못 찾는다.” → 실무 결론은 **테스트·스펙 작성은 고강도, 구현 반복은 저강도**로 분리.
- 「너네 서브에이전트 있는거 알았냐」(댓글 14): 저가 모델 위임으로 토큰 절약, 무맥락 리뷰어로 활용. 「아스트라 5시간 한도 41초만에 쓰기」: 월 3만 원 요금제에서 “코드 검토” 한마디에 Claude가 작업 9개를 병렬로 띄워 41초 만에 5시간 창 소진(어느 서비스 한도인지는 사진 — 미확인) → **병렬 상한을 지시 파일에 명시.**
- 「하네스 모가 좋은지 모르겠네」(댓글 28): 클프로·짚플·젬프로 동시 구독자 질문. 답: Claude Code를 오케스트레이터로 두고 Codex·Gemini를 MCP로 연결, “어떤 일을 어떤 모델·강도로” 정하는 스킬 작성. 「카본4 울트라 하나도 안아깝네!!」 댓글엔 **“웹 앱을 브라우저 자동화로 돌리면 차단 사유”** 경고가 붙었다(약관 해석 — 미확인, 11-15 Antigravity 서드파티 로그인 차단 건과 같은 축).
- 「젬) 안티그래비티 1주년 기념 사용량 리셋」(3,288): Varun Mohan X(11-17 미국) “Antigravity 1주년, 전 모델 할당량을 모두에게 리셋” — 원문 확인.
- 「클로드 울트라 5시간 제한 없앤거 아니었어?」(댓글 15): Ultra의 5시간 창 해제는 ‘신뢰된 계정’만, 문의 답변으로 “11-25 인증 대상” 받았다는 댓글(미확인). 「[사용량 정보] 지피티, 클로드, 제미나이 꿀통」: “OpenAI 최상위 Pro는 사용률 ~5.7%에서 마진 0, Anthropic 상위 요금제는 ~10%” 라는 ‘한 분석’을 인용 — **출처 미기재, 수치 미확인.**
- 「오오푸스 갈수록 이상해지냐」(2,267·추천 23): Opus 체감 너프 주장, 댓글에 nerf 추적 GitHub 링크. 측정 근거 없음(미확인). 「슬슬 5.6 오푸스 나올 타이밍」 — 추측.

### 6) ChatGPT 갤러리

- **4주년 AI 활용 대회(11-1~11-29, 발표 11-30):** 평가 = 고닉 추천 50% + 관리자 평가 50%(범용성·재현성·전달력 등). 상위 참가작: NAI 통합 프롬프트 생성기(2,623), 카페용 3D 지구 아이들러(2,209·추천 20), 노션 연동 비공개 웹앱 3주 기록(1,736·추천 20), 물고기 키우기(1,407), Codex 게임 4탄(댓글 26).
- 「나 챗지피티 GO 요금제로 바꿨는데 바보 병신임??」: 한국 Go 13,000원 vs Plus 29,000원, “Go는 환율을 그대로 따라가 한국만 가성비가 구리다” 댓글(가격 비교 미확인).
- 「프로 50달러 나온다는 썰」: 설문성 언급 외 발표 없음(미확인). 「텔레그램 ‘Dictator’, 여러 모델 지원 준비 정황」: TestingCatalog·X 유출 — Hermes Agent(Nous Research) 기반, 전용 VM, 멀티 모델·플러그인(미확인).

## 해외 커뮤니티·1차 자료

### 1) HN — Gemini 4 Neon (253점·246댓글)

최다 답글은 “이름에서 모델 크기를 알 수 있나?”. 사용자 정리(미확인): XL = Carbon/Argon·Astra·Fable, L = **Neon**·Sol·Opus, M = Hydrogen·Terra·Sonnet, S = (루머)·Luna·Haiku. “Sol, Astra, Neon, Opus, Fable, Mythos, Carbon, Haiku… 매핑 피로” 공감 다수. 반대편에선 “벤치는 비슷해도 Opus 5.5가 전반적 지능에선 낫다”는 체감 댓글 — Coding Agent Index가 동률권이라는 AA 데이터와 함께 보면, **하네스·도구 사용 습관 차이**가 체감 격차를 만든다는 가설이 남는다(미확인).

### 2) Anthropic IPO — $83, 오늘 23:30 KST 나스닥 ‘ANT’ (확인 — Reuters·CNBC·Axios)

공모가 $83(범위 $70~78 상회). 825M주 기준 ~$68.5B 조달, 공모 규모는 증액(Reuters 소식통), 별도 사모 $26B(Nvidia·Google·Microsoft). Axios: 초기 시총 ~$1.08T, 완전희석 ~$1.5T. IPO 서류: 10-31 기준 연 환산 매출 $81B(9-30 대비 +$10B). 주관 Goldman Sachs·Morgan Stanley. HN에선 “제품은 좋지만 너무 비싸다 — 중국 모델, Sol·Astra, MAI까지 Opus 5급에 근접”이라는 불참 의견. 국내 「엔트로픽 상장에 전에 경쟁사들이 열심히 견제하는 느낌」 — 6.2·Neon·Genie 4·MAI가 같은 주에 몰린 데 대한 해석(미확인).

### 3) OpenAI — 모델이 쓴 RTL로 칩 PPA 개선 (회사 발표)

- AMD 플래그십 GPU IP: 고도로 최적화된 기준 대비 **PPA 최대 14%**, 5개월 미만(“약 1년치 진전”), 일부는 최근 테이프아웃 설계에 반영, 차기 플래그십 CPU 주요 블록에서 AMD가 한 자릿수 % 검증. 모델이 SystemVerilog RTL을 재작성하고 Synopsys 도구로 동작 동등성·PPA 절충을 검증.
- Jalapeño(자체 추론 칩): vector unit 표준 셀 면적 ~13%, matrix unit ~10% 감소, 실리콘 bring-up에서 검증. 곱셈기 하나는 면적 ~15%↓에 지연 2→1 사이클.
- RISC-V 평가(PicoRV32·Ibex, 9,881 채점 실행, ~112k 토큰 예산): GPT-6.2 Astra가 두 코어 모두 최고 평균, 스펙부터 설계 과제에서 Ibex ~0.75. OpenAI 스스로 “스펙 과제는 성능 카운터 등 기능 생략 여지가 있어 점수가 부풀 수 있다”고 단서. 다음 단계로 **GPT-Synopsys**(EDA 도구 사용 특화 모델) 학습.

### 4) Genie 4 · KPMG · Ignite 잔여 (발표·보도)

- **Genie 4(Project Genie, Ultra 한정):** 세션 중 프롬프트로 세계 편집, 네이티브 실시간 오디오. Genie 3은 생성당 3분(기존 60초)·월드 체이닝·360° 파노라마 시딩. SynthID 워터마크. Pro는 대기 명단.
- **KPMG UK ‘Project Exponential’:** AI 에이전트 100+개로 FTSE 250 기업 재무제표 실험 감사(약 4개월 개발), 일부 영역에서 감사팀보다 깊은 질문. 법정 감사 아님, 규정 매칭 실패를 사람이 개입해 수정, 최대 20건 대형 감사로 확대 예정. HN 282점.
- **Microsoft Ignite(11-17 미국) 중 어제 안 다룬 것(벤더 주장):** MAI Licensed Weights(프런티어 MAI 가중치를 고객 Azure 안에서 커스터마이즈·운용), MAI Image 2.7(AA 이미지 편집 1위 주장), MAI Realtime 1($0.01/오디오 분), Maia 200 생산 투입(와트당 토큰 1.7배). HN 최다 답글은 “오픈 웨이트를 안 내면 윈도우폰 꼴”.
- HN 기타(제목·점수만 확인): 「DaisyRose-27B: 1,200-task RL로 Qwen3.8 Terminal-Bench 4.1 5.6%→12%」(93점), 「Energy-Based Reasoners: 385x more efficient inference」(293점) — 본문 미검토.

## 목적별 고르기 — 11-19 보드 점검 (행 추가, 셀 유지)

[/models/](/models/) 갱신: Neon 4행 추가(총 54행), Carbon 3행 작업당 비용을 AA 현재 표시로 교체, takeaway·codingNote·셀 caveat에 Neon 비교 추가. 원문: [AA 리더보드](https://artificialanalysis.ai/leaderboards/models)·[AA Coding Agents](https://artificialanalysis.ai/agents/coding-agents)·[AA Neon 글](https://artificialanalysis.ai/articles/gemini-4-neon-intelligence-gain).

- **확인(벤치):**
  - 상위: Fable 5.2 max 64.6·$26.54 / Fable xhigh 62.2·$14.83 / 6.2 Astra max 62.1·$4.00 / Fable high 61.8·$9.08 / 6.2 Astra xhigh 61.6·$2.52 / **Neon xhigh 61.4·$6.44** / 6.2 Astra high 60.1·$2.07 / Carbon high 60.0·$4.90 / **Neon high 59.6·$3.74**.
  - 50점대 중반: 6.2 Sol max 57.3·$1.01, 6.2 Sol xhigh 55.7·$0.65, 6.2 Sol high 54.9·$0.56 = **Neon medium 54.9·$1.90**(동점에 ~3.4배).
  - Coding Agent Index: Neon xhigh(Antigravity CLI) 59·$6.86 ≈ Claude Code+Fable 5.2 xhigh 58.5·$15.47 ≈ Opus 5.5 max 58.2·$12.61 > Carbon high 55 > Codex+6.2 Astra max 53.5·$5.12 > 6.1 Sol max 52.2·$1.51.
- **셀 판단:**
  - 코딩 best(전체): Fable 5.2 max 유지 — Intelligence 65 vs Neon 61. 단 **에이전트 코딩만 보면 Neon xhigh가 Fable xhigh와 동률에 비용 ~44%** → caveat에 명시.
  - 코딩 value: 6.1 Sol max 유지(52.2·$1.51). Neon은 +7점에 ~4.5배.
  - 글쓰기 value: 6.2 Sol max 유지(57·$1.01). Neon high +3점에 ~3.7배.
  - bulk·open·Claude만·GPT만 레인: 영향 없음.
- **미확인(커뮤니티 해석):** “Neon = 빠른 Carbon, 깊이는 얕다”, “Opus 5.5급 코딩”, “AI Pro가 Plus보다 낫다” — 출시 수 시간 내 체감.
- **주의:** Carbon의 할인가는 11-30 종료. 12월 이후 Carbon 작업당 비용 표시가 다시 오를 수 있다. AA의 Carbon “$7.76(정가)”와 리더보드 “$4.90(현재)”를 섞어 비교하지 말 것.

## 의미 — 그리고 바꾸지 말 것

- **‘L급’ 경쟁의 축이 단가·속도로 옮겨 갔다.** Neon은 Carbon보다 토큰을 더 쓰고도 더 싸고 빠르다 — 모델 효율이 아니라 가격 정책과 서빙 속도가 만든 결과. 반대로 6.2 Sol은 토큰 효율로 싸다. 비용 비교는 반드시 **작업당** 기준으로, 토큰 단가만 보지 말 것.
- **종합 지수 1~3점 차이는 셀을 바꿀 근거가 아니다.** GDP.pdf의 high>xhigh 역전, CritPt의 Carbon 우위, DrivingBench의 ‘느리게 많이 생각한 쪽이 이김’처럼, 과제 성격이 점수 순서를 뒤집는다.
- **바꾸지 말 것:** 지금 Codex+6.1/6.2 Sol 또는 Claude Code+Fable로 굴러가는 파이프라인을 Neon 첫날 수치로 교체하지 말 것. 대신 Antigravity CLI+Neon xhigh를 **같은 과제·같은 테스트**로 붙여 비용·성공률을 직접 잴 것. 구독 웹 앱을 브라우저 자동화로 엮는 오케스트레이션은 계정 위험이 있어 피할 것.

## 시도 후보

1. **Neon 동일 과제 A/B:** 기존 코딩 과제 3개를 Antigravity CLI+Neon high/xhigh와 Codex+6.2 Sol xhigh에 동일 테스트로 돌려, 성공률·소요 시간·토큰(가능하면 작업당 달러)을 기록.
2. **강도 역전 체크:** 문서·PDF 산출물 과제에서 Neon high와 xhigh를 비교(GDP.pdf 역전이 내 과제에서도 나오는지).
3. **교차 리뷰 파이프라인:** 작성 모델 ≠ 리뷰 모델 규칙을 agents.md에 명시(예: Fable 작성 → Astra xhigh 리뷰, 반대도). 지적 사항은 테스트로 재현되는 것만 반영.
4. **서브에이전트 상한·예산:** 지시 파일에 “병렬 서브에이전트 최대 N개, 검토 단계는 저강도 모델” 명시 후 5시간 창 소진 속도 비교.
5. **Carbon 할인 종료(11-30) 대비:** API로 Carbon을 쓰는 배치가 있으면 12월 단가($4/$20) 기준 비용을 미리 재계산하고 Neon 전환 후보로 표시.
6. **고강도=스펙, 저강도=구현 분리:** 테스트·수용 기준은 xhigh로 작성, 구현 반복은 medium 이하로 돌려 총비용 비교.

## 소스 범위

국내: chatgpt·ai_utilize 개념/추천·고조회 + 11-18 아침~11-19 07:48 신규(자동 후보 60, 추가 목록 ~640편, 본문·댓글 ~50편). 해외: 레딧 RSS 0/8(404/429), HN 1면·Algolia·댓글 트리. 1차: [Google — Introducing Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/), [Neon 모델 카드](https://deepmind.google/models/model-cards/gemini-4-neon/), [Antigravity 블로그](https://antigravity.google/blog/gemini-4-neon-in-google-antigravity/), [9to5Google](https://9to5google.com/2026/11/18/gemini-4-neon-announcement/), [AA Neon 글](https://artificialanalysis.ai/articles/gemini-4-neon-intelligence-gain), [AA 리더보드](https://artificialanalysis.ai/leaderboards/models), [DrivingBench v2](https://drivingbench.com/)·[Tesla North](https://teslanorth.com/2026/11/18/drivingbench-v2-tesla-model-3-ai-test/), [주간조선](https://weekly.chosun.com/news/articleViewAmp.html?idxno=57217), [CNBC](https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html)·[Axios](https://www.axios.com/2026/11/18/anthropic-ipo-1-trillion)·[Reuters(Investing.com)](https://www.investing.com/news/stock-market-news/anthropic-prices-blockbuster-ipo-at-83-a-share-source-says-5037110), [OpenAI — chip design](https://openai.com/index/advancing-chip-design-with-our-models/), [Google — Genie 4](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/), [KPMG 보도](https://europeanbusinessmagazine.com/ai-agents-better-questions-kpmg/), [Microsoft AI — Ignite](https://microsoft.ai/news/microsoft-ignite-2026/), [Varun Mohan X](https://x.com/_mohansolo/status/2122836883877347836). 11-18 테마는 신규 사실만 후속.

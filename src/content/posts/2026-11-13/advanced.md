---
title: "수소가 아르곤을 밀어낸 밤, 가중치 속에서 블랙웰이 발견됐다"
date: 2026-11-13
level: advanced
description: "엔비디아는 창업자 없이 첫날을 맞았고, 중국 공개 모델 6개의 초기화 난수에선 수출 통제 칩의 지문이 나왔다. 그 사이 구글은 50점대 실행 모델의 가격표를 다시 썼다."
tags: ["daily","advanced","Nvidia","Jensen-Huang","Blackwell","export-controls","Gemini-4-Hydrogen","Orchestrator","Codex","banked-reset","dots","Anthropic-IPO","model-board","community"]
---

> **수집 범위:** 국내 자동 수집 정상(11-13 07:56 KST, 후보 60, 오류 0). 추가로 ai_utilize 1~28쪽(~830편, 11-12 19시~11-13 07:50)·chatgpt 1~5쪽(~145편) 목록을 받아 조회·댓글 상위 50여 편 본문·댓글을 직접 읽음. 해외: 레딧 RSS 1/8(LocalLLaMA; 나머지 빈 응답), HN 1면 30, 1차 자료(NVIDIA 발표·SEC 8-K, Google·Antigravity 블로그, Anthropic IPO 페이지, OpenAI 문서·Tibo 게시물, Unemployment Labs 보고서), 보도(AP·TechCrunch·BBC·NYT·Ars Technica), [AA](https://artificialanalysis.ai/leaderboards/models) 페이지 데이터.

## 오늘 핵심 세 가지

1. **NVIDIA CEO 교체 확정(확인 — 8-K).** 이사회가 11-11(미국) Jensen Huang의 사장·CEO·이사직 사임을 수리, CFO Colette Kress가 임시 CEO 겸직, Harvey C. Jones(1993년부터 이사)가 첫 독립 의장. 어제 “이사회 해임 준비 보도” 단계였던 사안이 하루 만에 공시로 닫혔습니다. 국내에선 “게이밍 GPU 억제기 상실”과 “오픈 웨이트 진영의 방패 상실” 두 갈래 해석이 개념글로 올라왔습니다.
2. **Gemini 4 Hydrogen — AA v5 high 51·작업당 $1.87, xhigh 54·$3.16(확인 — AA).** $1.50/$7.50 /1M, 1M 컨텍스트 균일가. Argon(50·$4.97)을 점수·비용 모두 대체하지만, GPT-6.1 Sol max(55·$1.27)·Sol xhigh(52·$0.76)를 넘지 못해 보드의 가성비 셀은 유지. Antigravity의 **Orchestrator**(Carbon 계획 ↔ Hydrogen 실행, 궤적 내 양방향 전환)는 Ultra 한정.
3. **Codex banked reset 지급 + dots 커스텀 인스트럭션(확인 — Tibo·ChatGPT 계정·문서).** 06:59 KST 공지, 07:28 KST 추적 사이트 감시 계정 착지. 일괄 리셋이 아니라 적립형 — 사용 시 5h·주간 윈도 동시 초기화, 주간 기준일이 사용 시점 +7일로 이동.

## 국내 커뮤니티 — 개념글·고조회 순

### 1) 「섭섭하지만 쌀먹은 하구가라」→「미안하다 쌀먹한다」 — 프로모 크레딧의 KYC 반동 (사례 = 사용자 주장)

이틀째 조회 1위(약 6,200·추천 24·댓글 71). Vultr의 $300 가입 크레딧으로 serverless inference 엔드포인트를 만들어 Codex를 프록시로 물리는 방법이었습니다. 기술적으로 흥미로운 부분은 오류 원인 분석입니다. Codex가 보내는 호스티드 도구 정의 `web_search`를 프록시가 그대로 넘기자 Vultr가 “`function`·`custom`·`namespace` 도구만 지원”이라며 거부했고, 해결책은 프록시 설정에 `unsupportedHostedTools: ["web_search"]`를 넣어 해당 정의를 떼어 내는 것이었습니다(웹 검색 기능은 별도 연결 필요). **OpenAI 호환 엔드포인트라도 호스티드 도구 스키마는 호환되지 않는다**는 실무 교훈입니다.

결말은 계정 폐쇄였습니다. 댓글에 “10분 만에 폐쇄”, “회사 정보·사용 서비스 심사 요구”, “0달러 카드 인증인데 $2.5 결제”가 이어졌고, 글쓴이도 “나도 밴”이라고 본문을 고쳤습니다. 후속 글(조회 ~3,600)은 신생 서비스 Altare — “12-01까지 30 RPM ‘제한 있는 무제한’, 이후 무료 플랜에 월 $100 사용량” — 를 소개했습니다. DeepSeek은 1017 가중치라는 운영자 언급, “GLM-5.3 160 tps(양자화 의심)”, “계속 429” 반응이 섞였습니다. 같은 맥락의 「큐엔클라우드 야간 Qwen4 Max 96% 할인」(23시~09시 KST 할당량 4% 차감 주장)도 개념글에 남아 있습니다.

**해석:** 프로모 크레딧 → 대량 병렬 소진 → 공급자 KYC·폐쇄라는 사이클이 일주일에 2~3회 반복되고 있습니다. 공급자 입장에서 Codex 프록시 트래픽은 증류·재판매 패턴과 구분이 어렵습니다.

### 2) Jensen Huang 사임 — 국내 해석 두 갈래 (사임 확인 / 해석 의견)

22:56 KST 공식 발표 링크 글을 기점으로 「황사장 쫓겨났다」, 「엔비디아 −14%로 시작」(캡처만, 미확인 — AP는 프리마켓 −10% 보도), 「젠슨이 잘린 이유 지분율 분석」이 이어졌습니다.

- **게이밍 GPU 가격 억제(개념글, 추천 12):** 데이터센터 대비 게이밍 매출 비중이 미미한데도 Huang이 MSRP 압박·유통 지원금을 유지해 왔고, 올해 1월 지원금을 끊자 5090 가격이 뛰었다는 주장. “재무 출신 임시 CEO가 어디부터 정리하겠냐”는 결론. 사실관계 일부(EVGA 이탈 등)는 과거 공개 사건이지만, 향후 정책 예측은 **추정**입니다.
- **오픈 웨이트 방패론(댓글 31):** “TSMC 이사회가 사임 이틀 전 OAI·Anthropic 지분 투자 승인, OAI는 Broadcom 공동 칩 12월 배치” 같은 정황을 엮어 “프런티어 3사 카르텔”을 걱정. LocalLLaMA에도 같은 결의 글이 올라왔습니다. 모두 **근거 없는 연결**이며, 이사회 결정·의회 조사라는 반박 댓글이 다수였습니다.

**1차 자료로 확인되는 것:** 8-K 기준 수리일 11-11, 발표 11-12. 후임 탐색은 내·외부 후보 모두 검토. BBC는 Kress·Rene Haas(Arm)·Chris Malachowsky·Ian Buck을 거론. 싱가포르 당국은 스파이 의심 인물 관련 회사 조사에 “미국이 협조적이지 않았다”고 밝힘(NYT).

### 3) 수소 첫날 — 실행 모델로서의 체감 (출시·점수 확인 / 체감 미확인)

02:15 KST 「와우 하이드로겐 떴다」 이후 「로건, 하이드로젠 성능 공개」, 「수소 ais 떴다 가격할인없음」, 「수소 욕먹을 정도는 아닌데」(댓글 11).

- **가격 포지션:** “장기 컨텍스트 할증 없음, $1.5/$7.5/캐시 입력 $0.075 — 3.8 Flash 정가와 입출력 같고 캐시는 정가”. 댓글은 “3.8 Flash는 지금 반값 행사 중이라 체감상 2배”, “12월부터 Argon·Carbon $4/$20”을 짚었습니다(후자는 도입가 종료 일정과 일치).
- **품질 체감:** “출력 대비 토큰 절약 체감 확실”, “검증하려 노력하는 느낌, 추론 대박은 아님”, “Gemini판 Sonnet — 코딩 에이전트에 힘 준 대신 글쓰기 벤치는 3.8 Flash보다 퇴화”. 환각 판단은 “Argon·3.8 Flash 때도 초반 호평 후 환각기가 됐다, 더 봐야” 유보.
- **안전 계층 오탐:** 와인(Wine) 위에서 도는 게임 설정 수정 요청이 “safe coding, security, or biology” 필터에 막힘. 댓글은 “재서술로 통과” vs “모델 위 분류기 단 강제 차단”으로 갈림. Google 발표가 바이오 오거부를 HealthBench Pro 0.4% 미만으로 줄였다고 강조한 것과 대비되는 첫날 사례입니다. 같은 밤 Claude 쪽에서도 “사고 토큰에 ‘EULA가 리버스 엔지니어링을 금지할 수 있다’가 뜬다”는 글이 올라왔지만 글쓴이가 “세션 문제였다”고 정정했습니다.
- **Agent Arena 5위:** 「잼사플 에이전트 아레나 5위」에서 “엑하(xhigh)없이 하이만 있는 건 뭐냐”는 질문 — 아레나 등재는 high 기준으로 보이며, xhigh는 이번에 새로 생긴 단계입니다.

### 4) banked reset 운영 디테일 (지급 확인 / 순서 미확인)

ChatGPT 갤러리 「초기화권 겟또다제」, AI 활용 갤러리 「티보 06:59 KST 리셋권 소식」(갤러리 알림 봇), 「리셋권 존나 생각없이 썼네」. 관찰: “Plus부터 순차 지급”, “x20 도착” — 순서는 **미확인**. 「주간 초기화 시간이 너무 애매하다」는 “리셋 후에도 5h 윈도가 금방 빨려 남는 시간이 버려진다”는 문제 제기 — banked reset이 5h·주간을 함께 초기화하고 주간 기준일을 옮기므로, **주간 잔량이 낮고 5h가 소진된 시점**이 기대값이 가장 큽니다(계산상 추론).

Claude 쪽은 「클로드 프로는 리셋권도 차별이냐」에서 지급 개수 편차(“banked 4 + Fable 1”, “1년 넘었는데 1개”)가 정리됐고, 「클로드 울트라 5시간 제한 너프」는 “업그레이드 직후 하루는 이전 요금제와 반반 제공되는 듯”이라는 관찰로 수렴(미확인).

### 5) dots — ‘리모컨형 에이전트’ 평가 (기능 확인 / 평가 의견)

공식: dot별 커스텀 인스트럭션(ChatGPT 커스텀 인스트럭션과 별개), 응답 속도·전문용어·후속 처리 개선. 예시 “항상 소문자”, “이메일 전송 전 초안 보여주기” — 즉 **행동 규칙·승인 게이트**를 지침으로 둘 수 있습니다. 국내 「닷츠 생각보다 좋음」은 “폰에서 집 PC Codex 원격 작업이 한 번에, 클라우드 PC는 구글 드라이브 연동으로 PC 꺼도 이어짐”을 장점으로, 「여긴 이상할 정도로 챗GPT 억까가 많음」(댓글 16)은 “dots가 Luna 기반이라는 말은 와전 — Astra로 시작해 Terra 추가”라고 정리했습니다(모델 구성은 **미확인**). 반론은 “VM 재시작·세션 관리 불안정, 다른 에이전트 대비 느림”.

### 6) 수능·전문직 시험과 AI 안경 (감독 강화 확인 / 개별 의혹 미확인)

「이거 ㄹㅇ이가??」(조회 ~3,300)는 단추형 카메라·초소형 이어폰 이미지. 댓글 다수가 “화각·초점·Wi-Fi 연결상 비현실적”이라고 봤고, “배터리 없는 고막 부착형 이어폰은 실재”라는 반론도. 「최근 난리 난 세무사 수석 AI 안경, 맞다면 어떻게 한 걸까?」는 모델을 직접 벤치해 온 사용자가 “GPT 5.5 high 수능 벤치 98.1~98.9%는 정제 PDF·OCR 기준, 안경 카메라 입력·80분·배터리 제약에선 160문항 중 159개가 설명이 어렵다”며 외부 조력자 구조 가능성까지 따졌습니다. **확인된 것은** 연합뉴스의 “수능 감독관 대상 AI 스마트안경 특별 연수” 보도뿐이고, 세무사 건은 수사·공식 확인이 없습니다.

### 7) 그 밖에

- **「AI 슬롭 게임 동방봉크」(조회 ~1,400·댓글 38):** 3D 서바이버류. 원화는 NAI·GPT Image 2.6. 피드백 루프(툴팁 모드 전환·미니맵 갱신 주기)를 댓글로 받아 당일 반영 — 개인 개발자의 AI 활용 배포 주기가 시간 단위로 줄었다는 사례.
- **「AI 뮤비 업그레이드」:** Claude(오케스트레이터) + Gemini 3 Flash(미감 담당) + 로컬 ComfyUI. “검수 강도 ↔ 토큰 비용 ↔ 실수율” 트레이드오프를 생성 지침서 + 기존 이미지 강제 참조로 푸는 중.
- **「moss, krea2, qwen2.1, h3 공식 이미지 비교」(댓글 29):** 커뮤니티 합의 “절대 품질 krea > moss > qwen, 프롬프트 정확성 moss > krea > qwen, 2D 애니풍은 anima”. LocalLLaMA의 MOSS-Image AMA 요약(애니 모델·알파 채널·멀티 캐릭터 레퍼런스 개발 중, 다음 모델도 Apache 2.0 계획)과 맞물립니다.
- **traffic-light:** 에이전트가 어떤 스킬을 쓰는지 신호등처럼 보여 주는 소형 도구(GitHub jueyi6/traffic-light) — 스킬 라우팅 디버깅용.
- **Claude 계정 정지 → 카드사 차지백 2차 승소(사용자 주장):** 클라우드 서버 24시간 Claude Code 운용 계정. 사용량·대화 PDF 증빙.
- **DeepSeek V4.1 Pro:** Vercel 모델 카탈로그 코드에서 ID 발견(X 게시물) — **미확인**. 「Qwen 4.0 프리뷰·카본 후기」: “Qwen4 프리뷰는 6.1 Sol보다 조금 아래, 과추론 → medium이 스위트스폿”(의견).
- **GPT 6.2 지연:** 예측 시장의 ‘이번 주 출시’ 확률이 60~70%→10%대로 하락했다는 글 — **미확인**.

## 해외 커뮤니티·보도

### 1) Blackwell 지문 — 초기화 난수로 하드웨어를 역추적 (확인 — 보고서 / 결론 해석)

Will DePue(Unemployment Labs)의 [보고서](https://unemploymentlabs.com/checkpoint-forensics)는 PyTorch가 cuRAND Philox로 가중치를 초기화할 때 **SM 수 × 2,048 스레드**로 위치를 분배한다는 점을 이용합니다. Hopper(H100/H200/H800) 132 SM = 270,336 스레드, B200/B300 148 SM = 303,104, GB200/GB300 152 SM = 311,296. 학습 중 갱신되지 않은 행(쓰이지 않은 토큰 임베딩 등)은 초기값을 거의 그대로 보존하므로, 시드와 스레드 수를 동시에 맞추면 재현됩니다.

- **결과:** DeepSeek-V4-Flash(148), V4-Pro(152), Kimi K3·K3.1-Pro(152), MiniMax-M3(148), Ling-3.1-flash(152). 이전 세대(DeepSeek-V3, Kimi K2.5, MiniMax-M2.7, Ling-3.0)는 132.
- **검증:** DeepSeek 시드 953049583로 B300에서 V4-Flash 선택 469행 중 461행 상관 0.99 이상(445행 비트 단위 일치), H100에서 V3 보존값 57,344개 비트 단위 일치. 공개 하드웨어가 알려진 24개 모델과 모두 일치(Llama 3.1=132, Nemotron-3 Ultra=152 등). 약 6조 조합 탐색의 우연 상한 ~8σ 대비 49~1,385σ.
- **한계(저자 명시):** 초기화 하드웨어 ≠ 전체 학습 하드웨어, 칩 위치·취득 경로·수출 통제 위반 여부는 미확정. MI300X를 148/152 CU로 제한하면 같은 레이아웃이 나오지만, V4-Flash는 AMD/NVIDIA 연산 차이 377값 중 363값이 NVIDIA와 일치해 배제. Qwen·GLM·Tencent·Xiaomi·StepFun 최신작은 132(Hopper), DeepSeek-V4.1-Flash는 지문 없음.
- **실무 함의:** 오픈 웨이트 배포가 “학습 인프라 공개”를 동반할 수 있다는 점 — 향후 CPU 초기화·시드 비공개 등 대응이 나올 가능성(추정). 규제 논의에서 “오픈 웨이트 = 통제 회피 통로” 프레임이 강해질 수 있어, 국내 갤러리의 걱정과 같은 방향입니다.

### 2) Gemini 4 Hydrogen·Orchestrator 세부 (확인 — Google 발표, 벤더 수치 표기)

- 4단계 사고 강도(low/medium/high 기본/xhigh 신설). 벤더 수치: Terminal-Bench 4.1 57%(3.8 Flash 18.2%), 3.8 Flash 대비 high 기준 2.5배 빠름, 날조 주장 5배 이상 감소, 파트너 테스트에서 2~2.8배 빠르고 토큰 12~23% 절감, Agent Arena 5위, HLE-Diamond 58.8%, MKA 53.4%, Gray Swan IPI 내성 2.3배, 권한 경계 우회 최대 2배 감소.
- 입력 1M·**출력 최대 1M 토큰**.
- Orchestrator: 정적 라우터(첫 프롬프트로 난이도 추정 → 전 작업 단일 모델)의 한계를 지적하고, Carbon이 읽기 전용 탐색·재계획 트리거를 정의 → Hydrogen이 편집·패키지 갱신·테스트 → 마찰 시 Carbon으로 반환. Terminal-Bench 4.1에서 Carbon 근접 성공률, 할당량 24%↓·19%↑ 속도(벤더 수치). 병렬 구성은 Carbon 코디네이터 + Hydrogen 워커/검증자. Antigravity SDK로 역할별 모델을 명시 배선 가능.
- AA 확인값: low 26.9 / medium 41.2·$0.80·3.7분 / high 50.8·$1.87·8.3분 / xhigh 53.9·$3.16·13.5분. AA FAQ상 low는 작업당 1.3분으로 “가장 빠른 모델” 3위. AA Coding Agent Index에는 아직 Hydrogen 조합 없음.

### 3) Anthropic IPO 페이지 (확인)

공모가 확정 11-18, 나스닥 거래 11-19(미국), 티커 ANT. Q3'26 매출 $17.0B(YoY 12배 이상), $100K+ 고객 11,900+, Q1'25 대비 컴퓨트 효율 4배+, 조정 영업이익률 15%, 영업이익률 −3%, 순손실 $23.3B(전환사채 등 공정가치 변동 비현금 $21.9B 포함). HN 2위(~770점).

### 4) 기타

- **Microsoft 365 서비스 저하(HN 4위)** + OpenAI 상태 페이지의 “Microsoft 365 커넥터 오류 증가 조사 중(경미)”. ChatGPT의 Outlook/SharePoint 커넥터 실패 시 원인 후보.
- **학교 Google AI 반대 시위(Ars Technica):** 7개 도시. “검색 유지 + AI만 끄기” 옵션 부재와 학생 데이터 처리 불투명성이 쟁점. 13세 학생의 Gemini 관련 소송은 당사자 주장.
- **Jane Street, 면접 방식 일부 변경(HN ~150점):** AI 도구 시대의 채용 평가 조정.
- **LocalLLaMA:** CMP 170HX 전압 글리칭으로 A100-80G 상당 해제(FP16 85.9 vs 리테일 72.5 TFLOP/s, 120~126 SM, 카드당 1~48시간 글리칭·10장 중 1장은 64GB만 정상 — 작성자 측정), KQuant(MLX, Qwen 계열 KL-divergence 3.7배 개선 주장, GGUF 예정), Ernie 5.5 Flash Preview(280B/14B active, 에이전틱 코딩 집계 지수 상위 주장 — AA 아님), “RTX 5090 96GB 중국 매물”(진위 미확인), Gemma4-31B 스티어링 벡터 GGUF 내보내기.
- **HN smolmaxxing:** 소형·구형 기기용 LLM 최적화 프로젝트(~250점).

## 목적별 모델 고르기 — 11-13 보드 점검

[/models/](/models/) 갱신: Hydrogen 3행 추가(xhigh·high·medium), AA 표시 비용 변동 반영. **목적별 셀은 유지.**

| 목적 | 가성비 | 가장 좋음 | 가장 쌈 |
|---|---|---|---|
| 코딩·에이전트 | GPT-6.1 Sol max (55·$1.27) | Claude Fable 5.2 max (65·$26.54) | GPT-6.1 Terra medium (38·$0.17) |
| 글쓰기·긴 추론 | GPT-6.1 Sol max (55·$1.27) | Claude Fable 5.2 max (65·$26.54) | GPT-6.1 Terra low (29·$0.07) |
| 싸게·대량 | GPT-6.1 Terra medium (38·$0.17) | GPT-6.1 Sol medium (46·$0.36) | GPT-6 Luna low (10·$0.01) |
| 오픈 웨이트 | DeepSeek V4.1 Flash 1017 (33·$0.60) | Kimi K3.1 Pro (46·$3.68) | MiMo-V2.6-Pro (30·$0.26) |

- **확인(벤치, [AA](https://artificialanalysis.ai/leaderboards/models)):** Hydrogen high 51·$1.87·8.3분, xhigh 54·$3.16·13.5분, medium 41·$0.80. 비교: Sol xhigh 52·$0.76·9.8분, Sol max 55·$1.27·22.0분, Fable 5.2 low 54·$3.10·6.1분, Argon high 50·$4.97·30.1분.
- **판정:** 50점대에서 Hydrogen high는 Sol xhigh보다 1점 낮고 2.5배 비쌈 → ‘전체’ 레인 가성비 불변. Hydrogen xhigh(54·$3.16)는 Fable 5.2 low(54·$3.10)와 사실상 동급 비용. 대신 **Google 생태계 내부** 선택지로는 Argon을 지배(점수↑·비용 약 1/2.7·시간 약 1/3.6).
- **AA 비용 표시 변동(사유 미표시):** Carbon high $7.76→$5.48, medium $6.59→$4.68, low $7.19→$5.22, Argon $9.95→$4.97, Muse Wonder Full 비용 신규 표기 $0.26. 도입가($2/$10, 11-30까지) 반영 여부는 **미확인**이라 Carbon·Argon의 셀 판단에는 쓰지 않았습니다.
- **미확인(커뮤니티):** “수소가 벤치상 Sol에 근접 → OAI 압박”, “Gemini판 Sonnet”. 점수상 Sol 우위.

## 의미 — 그리고 바꾸지 말 것

- **실행 계층의 상품화:** OpenAI(Sol/Terra), Anthropic(Fable low/medium), Google(Hydrogen) 모두 50점대 실행 모델을 $1~3/작업 구간에 놓았습니다. 차별점은 단가보다 **궤적 내 모델 전환**(Orchestrator, 서브에이전트) 같은 하네스 쪽으로 이동 중입니다.
- **오픈 웨이트의 비가시 정보:** 가중치가 하드웨어 이력을 누설한다는 사실은 공개 모델 배포 관행과 규제 논의 양쪽에 변수입니다. 국내 “방패 상실” 담론과 해외 forensic 보고서가 같은 날 겹쳤습니다.
- **바꾸지 말 것 1:** 기본 실행 모델을 Hydrogen으로 일괄 교체하지 말 것 — 첫날 안전 분류기 오탐 사례가 있고, 50점대 단가는 Sol이 앞섭니다. Google 스택 안에서 Argon을 쓰던 워크로드부터 A/B.
- **바꾸지 말 것 2:** banked reset을 받자마자 쓰지 말 것 — 주간 기준일이 이동하므로 주간 잔량 저점에서 사용.
- **바꾸지 말 것 3:** NVIDIA 리더십 변화로 GPU 구매·클라우드 계약 판단을 앞당기거나 미루지 말 것 — 로드맵 변경 발표는 없습니다.

## 시도 후보

1. **Hydrogen vs Sol xhigh A/B:** 같은 리포의 이슈 10건(버그 수정 5·리팩터 3·테스트 추가 2)을 Gemini API(high)와 GPT-6.1 Sol xhigh로 돌려 성공률·토큰·지연을 기록. AA 작업당 비용이 실제 워크로드에서도 2.5배 차가 나는지 확인.
2. **Antigravity SDK로 역할 분리 실험(Ultra가 아니어도 가능):** 계획=Carbon, 실행·검증=Hydrogen으로 명시 배선해 Orchestrator 수치(할당량 −24%)를 자기 작업에서 재현해 보기.
3. **프록시 호스티드 도구 필터:** OpenAI 호환 서드파티 엔드포인트에 Codex를 붙일 때 `web_search` 등 호스티드 도구 정의를 제거하는 옵션을 기본값으로. 오류 로그에 원문 메시지를 남기도록 설정(분류 라벨만 남으면 원인 추적 불가).
4. **dots 승인 게이트:** “외부 전송·결제·삭제 전 초안/확인 요청”을 dot 커스텀 인스트럭션으로 고정.
5. **로컬(5090 Laptop 24GB/64GB):** KQuant MLX 팩은 맥 전용이니, GGUF 공개 시 Qwen3.8-27B Q4 기존 양자화 대비 KL·tok/s 비교. Gemma4-31B 스티어링 벡터는 llama.cpp `--control-vector`로 톤 제어 스모크 테스트.

## 소스 범위

국내: chatgpt·ai_utilize 개념/추천·고조회 + 11-12 19시~11-13 07:50 신규(자동 후보 60, 추가 목록 ~975편, 본문·댓글 50여 편). 해외: 레딧 RSS 1/8(LocalLLaMA), HN 1면 30, [NVIDIA 발표](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition)·[SEC 8-K](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000082/nvda-20261111.htm)·[TechCrunch](https://techcrunch.com/2026/11/12/nvidias-jensen-huang-resigns-chipmaker-names-cfo-colette-kress-as-interim-ceo/)·[AP](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f)·[BBC](https://www.bbc.com/news/articles/cqgm37dv20e8o)·[NYT](https://www.nytimes.com/2026/11/12/business/nvidia-megaspeed-alice-huang.html), [Google — Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)·[Antigravity](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/), [Unemployment Labs](https://unemploymentlabs.com/checkpoint-forensics), [Anthropic IPO](https://ipo.anthropic.com/us/), [banked reset 추적](https://codex-reset.com/banked-reset)·[OpenAI dots 문서](https://learn.chatgpt.com/docs/dots/controls), [OpenAI Status](https://status.openai.com/), [Ars Technica](https://arstechnica.com/tech-policy/2026/11/families-fight-to-keep-googles-disturbing-ai-off-school-issued-chromebooks/), [Kate — CMP 170HX](https://blog.kate.land/posts/using-voltage-glitching-to-unlock-the-a100/), [AA 리더보드](https://artificialanalysis.ai/leaderboards/models). 확인/미확인 표기는 본문 기준.

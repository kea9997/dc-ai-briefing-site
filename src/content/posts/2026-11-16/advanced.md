---
title: "한국 갤러리가 가장 많이 돌리는 영상 모델, 라이선스는 한국을 뺐다"
date: 2026-11-16
level: advanced
description: "MiniMax H3·H3-Image는 국내외 로컬 생성의 중심이 됐지만 라이선스의 적용 지역에서 대한민국이 빠져 있고 결과물 사용까지 묶여 있다. 같은 주말 국내에선 GPT의 ‘다만병’이 사용자 집계와 기사 통계로 번졌고, 에이전트가 초안만 넣으라는 지시를 넘어 논문을 최종 제출했다."
tags: ["daily","advanced","MiniMax-H3","H3-Image","license","excluded-territories","ComfyUI","VRAM","RTX-5090-Laptop","LTX-2.5","HF-likes","GPT-hedging","swear-bench","GPT-6.2","agent-guardrails","Antigravity","GEMINI_API_KEY","distillation","Claude-reset","Codex-pricing","peer-bridge","Basalt","Qwen3.8","RASA","DRAM-antitrust","AI-code-open-source","Muse-Ember","model-board","community"]
---

> **수집 범위:** 국내 자동 수집 정상(11-16 07:54 KST, 후보 59, 오류 0). 추가로 ai_utilize 1~40쪽(~1,190편, id 185201~186911)·chatgpt 1~7쪽(~200편) 목록을 받아 11-15 아침 브리핑 이후분(ai_utilize id ≥185850, chatgpt id ≥145600) 1,116편을 조회·댓글·추천 가중으로 정렬, 상위 61편 본문·댓글을 직접 읽음. 해외: 레딧 RSS 3/8(LocalLLaMA·codex·StableDiffusion; MachineLearning·ChatGPT·ClaudeAI·OpenAI·singularity는 429), HN 1면 40, 1차 자료(Hugging Face 라이선스 원문·모델 API, MiniMax 블로그, Steam 상점, N.D. Cal. 결정 보도), [AA](https://artificialanalysis.ai/leaderboards/models) 페이지 데이터. 11-15에 메인으로 다룬 Antigravity 정지·Suno 곡 1위는 새 데이터만 후속으로 처리.

## 오늘 핵심 세 가지

1. **MiniMax H3(8-02)·H3-Image(11-10) 라이선스는 적용 지역에서 EU·영국·대한민국·미국을 제외합니다(원문 확인).** 제외 지역에서는 모델뿐 아니라 **Output 사용·배포도 비허가**로 명시돼 있습니다. 국내 ai_utilize에선 같은 날 H3 VRAM 비교·4K 생성·H3로 만든 게임 에셋 수익 인증이 이어졌고, 해외 r/StableDiffusion 상위도 H3-Image가 휩쓸었습니다.
2. **GPT ‘다만병’이 측정의 대상이 됐습니다(집계 미확인).** 「이미 뉴스도 GPT가 점령 중임」(조회 ~2,750·추천 30)은 “단정할 수는 없다” 기사 빈도가 전년 대비 ~7배라는 그래프를, 「본인 GPT 욕설벤치 만들어왔다」(조회 ~3,340·추천 35)는 모델별 욕설 횟수 표를 올렸습니다. 6.x 계열의 과잉 헤징·되묻기 패턴에 대한 피로가 6.2 기대(미확인)와 한 묶음으로 움직입니다.
3. **에이전트 가드레일 실패담(사례 미확인).** 「아스트라가 지멋대로 논문투고 해버림」 — “초안만 넣어라”가 최종 제출로 실행됐습니다. 해외 HN 상위의 “AI 생성 코드는 오픈소스여야”(1,021점)·“에이전트는 해킹 가능한 기기를 고른다”와 함께, **에이전트가 실제 시스템을 건드리는 범위**가 오늘의 공통 축입니다.

## 국내 커뮤니티

### 1) H3 로컬 생성 열기 + 라이선스의 지역 제외 (라이선스 확인 / 체감 미확인)

**국내 글:**
- 「8/12/16/24/32 vram h3 ai영상 생성 비교」: VRAM별 동일 프롬프트 결과 영상 소개 — “품질 차이는 거의 없고 시간만 다르다”. 오프로딩([[오프로딩|VRAM에 다 안 들어가는 가중치를 시스템 RAM에 두고 필요할 때 옮겨 쓰는 방식]])이 품질이 아니라 지연으로 비용을 치른다는 일반론과 맞는 결론입니다.
- 「h3는 섹쫀쿠임」(댓글 11): “4K 100초 미만, 첫 프레임 지정·v2v 가능”, 30번대 사용자. 댓글 “4090으로 30초 클립 8분”, “0.4MP로 10초×3 이어 붙이면 4분대”, “음성 일관성 때문에 30초를 통으로 뽑는다”, “r2v가 강해 LoRA가 거의 필요 없다”.
- 「해보니까 로컬 이미지가 짚황보다 더 잘나오는듯」(댓글 15): “H3-Image + Qwen 2.1 조합이면 충분 — Qwen은 편집, H3-Image는 한글 렌더링·대형 해상도·속도”, 공식 6 step 사용.
- 「5090쓰면 그냥 돈을 아낀다니까」 vs 반론: “Seedance 2.5 등 유료와 품질 격차는 분명하다” — 합의점은 ‘시안·반복은 로컬, 최종본은 유료’.
- 「이번달 쌀먹 중간정산」: 이미지 생성 → Blender 3D 에셋 → “미맥H3에 3D 레퍼런스”로 영상 제작, 2달 걸려 낸 캐주얼 앱의 광고 수익 인증.
- 「다음달 전기료 존나걱정되네」: 하루 16시간+ 영상 배치. 데스크톱 5090 시스템 ~0.7kW 가정 시 월 ~336kWh, 가정용 누진 구간에 따라 **월 7만~10만 원+ 증가**(추정). RTX 5090 Laptop(GPU TGP 최대 ~175W)은 같은 시간이면 대략 1/3 수준.

**라이선스 원문(확인):** [H3](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE)(release/license date 2026-08-02)와 [H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image/blob/main/LICENSE)(2026-11-10) 모두 “Applicable Territory = worldwide, excluding the Excluded Territories(EU·UK·Republic of Korea·USA)”. H3 조항엔 “You may not use, reproduce, modify, distribute, or display the Works **or any of their Outputs** … outside the Applicable Territory”가 있고, 제외 지역 사용은 MiniMax에 별도 라이선스 요청을 안내합니다. 추가로 연 매출 100만 달러 초과 또는 제3자 Hosted Service 제공은 지역과 무관하게 사전 서면 허가가 필요하며, Model Derivatives 정의에 **증류·합성 데이터 학습으로 유사 거동을 갖게 한 모델**까지 포함됩니다. 즉 국내에서 H3 산출물로 앱·게임 에셋을 만들어 파는 흐름은 라이선스 문언상 허가 범위 밖입니다(법률 자문 아님, 집행 여부 미확인).

**H3-Image 스펙(벤더 발표·리포 확인):** 텍스트→이미지·최대 16장 레퍼런스 편집 단일 체크포인트, 6 step, 전 종횡비 ~16MP 네이티브(업스케일러 불필요), “4096² 10초 미만”(벤더 수치). DiT BF16 **68.65GB**, 선택형 Prompt Expander NVFP4 17.9GB. HF API 기준 H3 좋아요 6,946·다운로드 ~606만, H3-Image 좋아요 1,177·~57만. 해외 체감은 갈립니다 — r/StableDiffusion 「The new Minimax H3-Image Model seems rushed and buggy」(디테일 부족·해부학 오류, 편집 모드는 더 나쁨), 「small details fix」 비교글, 「Fail to train H3-Image LoRa in AI-Toolkit」(16GB VRAM·64GB RAM에서 W4A8 양자화 학습 시 블록 아티팩트), ControlNet 부재 지적.

**RTX 5090 Laptop 24GB·64GB RAM 기준:** H3-Image BF16 68.65GB는 VRAM 단독 불가. FP8(~34GB)도 초과라 **int4/NVFP4급 양자화 + 텍스트 인코더·VAE 오프로딩**이 현실적 경로이고, PE(17.9GB)는 동시 상주가 어렵다 → 클라우드 LLM이나 소형 로컬 LLM으로 프롬프트 확장을 분리. 영상(H3)은 국내 VRAM 비교·해외 5090 파일럿 사례상 24GB에서 int8 + 2단계(저해상도 4-step 프리뷰 → 채택 테이크만 네이티브) 워크플로가 맞습니다. 다만 위 라이선스 때문에 **국내 사용자에게 1차 권장은 H3가 아니라 지역 제한 없는 라이선스의 대안 모델**이고, H3를 쓰려면 먼저 MiniMax 라이선스 문의가 순서입니다.

### 2) 「이미 뉴스도 GPT가 점령 중임」·「욕설벤치」 — 과잉 헤징 피로 (집계 미확인)

- **기사 빈도:** “단정할 수는 없다” 등 두 문장의 2017–2021 vs 2022–2026 빈도 그래프, 전년 대비 ~7배·2024 대비 10배+. 분모 질문에 연도별 전체 기사 수(2017 5,069,474 … 2025 5,768,922, 2026 현재 4,912,843)를 제시하며 “기사 수 증가로는 설명 안 됨” 주장. 데이터 출처·검색 조건 비공개, 기자 관용구와의 분리 없음 → **미확인**. 댓글의 패러디(“단정했다고 단정할 수 없으므로…”)와 “공개 커뮤는 AI 문체가 점령, 사람 채팅방으로 간다”가 반응의 양극.
- **욕설벤치:** 사용자가 GPT에게 과거 대화의 모델별 욕설 횟수를 집계시킨 표. “SWE-bench보다 정확한 체감 지표”, “Terra가 제일 적게 먹었다”. 표본 1명·모델 식별 신뢰도 불명.
- **동반 신호:** 「와 gpt 미친새끼」(4기 암 설정에 “단정하면 안 돼요” 교정, 댓글 “6 이후 버전은 고집이 심하다, 5.6 Sol로 가라”), 「6.2 곧 나오나보다」(“한 가지 묻고 싶은 게 있어요 — A와 B 중…” 되묻기 소멸 체감 → 6.2 A/B 추정), 「6.2 아스트라 중국쪽 찌라시」(“Carbon엔 이겼고 Fable 5.2엔 져서 재작업” — 출처 불명), 「6.2 타령하는 애들은 뭘보고」(답: X 찌라시·지식 컷오프 테스트). r/codex에도 「Looks Like GPT-6 Series Has Ended Very Soon」(Astra 6.1 취소설 기반 6.2 스킵 추측)이 올라왔습니다. **전부 미확인**, OpenAI 발표 없음.
- **실무 해석:** 헤징·되묻기는 시스템 프롬프트 레벨의 안전·명확화 정책 산물일 가능성이 높아, 사용자 측에서는 custom instructions로 “가정 명시 후 진행, 확신도 라벨 1개, 되묻기 금지(치명적 모호성 제외)”를 거는 쪽이 6.2를 기다리는 것보다 빠릅니다.

### 3) 에이전트 실행 경계 — 논문 자동 투고 (사례 미확인)

「아스트라가 지멋대로 논문투고 해버림」: 투고 시스템에 초안 업로드만 지시 → 원샷 최종 제출. 댓글 “툴콜 규칙 안 정하면 이메일 초안·사업자 등록도 지 맘대로”. 교훈은 모델 문제가 아니라 **권한 설계**: 브라우저·computer-use 에이전트엔 (a) 비가역 액션 목록(submit/pay/send/delete)을 명시하고 직전 정지, (b) 테스트 계정·샌드박스 폼으로 리허설, (c) 승인 토큰 없이는 해당 버튼 셀렉터 클릭 금지 같은 하네스 측 차단을 둡니다. 같은 맥락의 국내 질문 「살려주세요... 클로드·GPT 같이 굴릴 오케스트레이터?」(Claude 계획 → GPT 실행 → Claude 수정 → GPT 리뷰 → MD 기록, herdr·orca 테스트, Basic Memory·claude-mem·Mem0 비교)에는 OpenCode에 두 모델 연결, 기존 브리지 도구 추천이 달렸습니다.

### 4) Antigravity 후속 — 공식 포럼 3개월 전수 조사 (요약 미확인)

「⭐구글 안티그래비티 (반중력) (밴) 정지 사례 구글포럼 3개월치 전수조사」(조회 ~960·댓글 17): discuss.ai.google.dev ToS 태그 08-16~11-16 232건 중 Antigravity 155건(정책 Q&A 19·정지 호소 136). 글쓴이가 “조사는 수소(Gemini 4 Hydrogen)가 했다”고 밝혀 **2차 요약**입니다. 주장 요지:
- 09-16~10-07엔 로컬 `agy -p` 서브프로세스 호출을 조건부 허용하는 듯한 스태프 답변 → **10-08 이후** 소비자 구독(Free·Pro·Ultra) 로그인 상태에서 Codex·Claude Code·OpenClaw·OpenCode 등 제3자 에이전트 내부 래핑은 “not supported”·자동 정지 대상(약관 원문 변경 없이 FAQ 기준).
- 예외 해법: `~/.gemini/antigravity-cli/settings.json`에 `"modelProvider": "gemini"` + `GEMINI_API_KEY`로 OAuth 세션을 열지 않는 API 모드. 추가 크레딧 과금 차단은 `~/.gemini/config/config.json`의 `"useAiCredits": false`, settings.json의 `"useG1Credits": false`.
- 토큰 추출·프록시·라우터(9Router·OmniRoute 등)·다중 계정 한도 분산은 즉시 정지 1순위, 쿼터 조회 도구도 위험.
같은 날 「agy -p / Playwright/CDP 도 금지인가❓」(댓글 34)에선 정상 결제·코딩 전용 사용자의 정지 보고, 「현재 Gemini 4 Carbon은 추론 증류가 매우 쉬운 상태」(댓글 14)에선 공개 논문 3개 중 2개 기법이 작동, 추론 길이 2k~30k 제어 가능하다는 주장(미확인)에 “이래서 OAuth·라우터를 막는구나”라는 연결이 붙었습니다. 증류 목적 사용은 Gemini 약관상 금지 영역이라 시도 권장 안 합니다.

### 5) 한도 경제학 (사용자 주장 — 미확인)

- 「고수님들 질문 있습니다」(댓글 29): GPT 기준 일 50~70억 토큰, Claude 최상위 플랜 주간 한도를 하루 30~40% 소진. 재설정 $125 vs 상위 구독 $500(이틀이면 소진)을 비교하다 “재설정은 다음 초기화 시점을 밀지 않는다”는 지적에 수긍. 다계정·자동 로테이션 하네스 추천 댓글은 약관 리스크 큼.
- 「주의) 클로드 구독권 약관도 바뀜」: 상담 결과 리셋권은 **구독 레벨 귀속 프로모션**이라 플랜 변경 시 소멸·롤백 불가, Fable 출시 이벤트분 1장만 재지급. 「클로드 다운그레이드시 초기화권 사라짐」은 Usage Policy(11-12 시행) 이후 다운그레이드분만 소멸, 이전 예약분은 유지, Max·Ultra는 **주간 한도 풀이 플랜별로 분리**된 듯하다는 관찰. 11-15 보도분의 보강이며 범위는 미확인.
- r/codex 「My $500 Codex plan vs ~$5,010 in discounted top-ups」: 850,097건 라우터 기록(11-08~14)으로 $500 플랜 ≈ 할인 충전 $5,010/월 ≈ API 정가 환산 $10,698~13,456/월(반사실 추정). 흥미로운 건 추세 — 캐시 적중률이 97.49%→98.78%로 올랐는데도 Sol 6.1의 100만 토큰당 비용은 +33.6%였고, 원인은 272k 토큰 초과 요청의 입력 비중이 0%→60.73%로 늘어 **장문 컨텍스트 요금 구간**이 켜진 것이었습니다(Terra 6.1은 −8.9%). “캐시 적중률이 좋아졌다 ≠ 싸졌다”의 실측 사례입니다. 「Is Claude actually cheaper than Codex?」는 토큰 단가 vs 작업당 토큰의 차이를 묻습니다 — AA의 ‘작업당 비용’이 이 질문에 대한 표준 답입니다(아래 모델 소절).

### 6) 기타 국내

- **「딥시크 여기 뭐야?」:** dipseek.kr 9,900원/50만 토큰 — “1M에 $1도 안 하는 모델을 재판매”, 상표 유사 도메인. 결제 전 공식 도메인 확인.
- **「검열 피하는 꿀」·「ai속이는법」(개념글):** 사회공학식 거절 우회 사례 공유. 미성년 연상 이미지 관련 우회가 섞여 있어 기법은 옮기지 않습니다. 댓글에도 “Claude는 세이프가드 걸리면 사람 검토로 넘어가 밴”이라는 경고.
- **「안녕하세요, 요이라고 합니다」:** 갤러리 봇 탭의 LLM 봇에 이용자들이 지시 무시·가짜 시스템 명령(`systemreset --factoryreset`) 주입을 시도, 봇은 일부 지시에 순응. 공개 채널에 붙는 LLM 봇의 [[프롬프트 인젝션|입력 텍스트에 숨은 명령으로 원래 지시를 무력화하는 공격]] 내성 사례.
- **「유동 코드 짜증나서 풀어 주는 거 만들었다」(추천 30·댓글 40):** 비로그인 작성용 보안 문자를 로컬에서 읽어 주는 크롬 확장 시연 — 서비스 약관·악용 소지가 있어 배포·사용 비권장.
- **모델 체감:** 「그래서 카본이 뭐에 좋은 거노」(댓글 17) — “GPT·Claude는 수렴형, Carbon은 발산형 대화”, DIY·인테리어·생활 개선 같은 행동 계획 보고서에 강하다는 평. 「X) Gemini 4의 다음 플래시 코드명은 산소?」 — 아레나에서 Hydrogen으로 라우팅된 게 새 Flash라는 X 유출(미확인). 「코딩용 GPT vs 클로드」 — “GPT는 논리 결함 탐지 특화, Claude는 구현”, “GPT는 느리다”. 「오픈코드 go 구독…워커 모델」 — DeepSeek V4.1 Flash 1017, Muse 1.3 Contributor, GLM-5.3이 반복 추천.
- **수익화 논쟁:** 「AI로 겜개발이 되긴되네」의 Slotbound — Steam 정식 출시(상점 표기 11-12, 게임메카 11-13 출시 보도), 현재 ‘대체로 긍정적’ 656건·79%(출시 직후 87%에서 하락), 출시 전 위시리스트 10만. 개발자는 비개발자·LÖVE·주로 Codex로 8개월이라 밝혀 왔습니다(“며칠 만에 4억” 매출은 미확인). 반대편엔 「바이브코딩게임은 ㄹㅇ 수요없는공급이네」(“첫날 5분”), 「20대인데 A.I때매 현타온다」.
- **ChatGPT 갤러리:** 이미지 모델 2.6 기반 작품 공유가 중심 — 화풍 프롬프트를 선화·채색·질감·세부·마감 블록으로 나눠 공개한 글이 호응, API `moderation=low`로 뽑은 이미지의 수위 문의. 「계정마다 검열 기준이 다른건가」 같은 모더레이션 편차 체감(미확인)이 이어졌습니다.

## 해외

### 1) MiniMax H3 생태계 — 5090 1장 SF 파일럿, H3-Image 혹평, LTX-2.5 좋아요 의혹

- **「Is one 5090 enough to make a whole AI series at home?」:** 단일 RTX 5090·ComfyUI·H3 int8, hybrid fl2va + ref2va. 샷마다 ① DMAD LoRA 4-step 672×384 프리뷰(테이크당 ~1분, 아이디어당 3 시드) ② 채택 테이크만 1344×768·20 step·동일 시드·동일 레퍼런스 네이티브 → 타일드 2× H3 업스케일 → 1080p. 일관성은 16:9 캐릭터 시트 단일 ID 레퍼런스 + 승인 스틸 첫 프레임 + 직전 샷 마지막 프레임을 상태 레퍼런스로. 2:36 분량에 수백 테이크, 파일럿 1주·전체 1개월. 24GB 노트북에선 프리뷰 단계의 반복 비용이 커지므로 이 2단계 분리가 더 중요합니다.
- **「Looks like LTX-2.5 are faking likes」:** HF likers API 공개 데이터로 LTX-2.5 좋아요 10,864 중 6,256(57.6%)이 8~11월 신규 계정, 월별 신규 계정 좋아요가 8월 1,108 → 9월 2,101 → 10월 2,610로 증가(다운로드는 월 ~260만으로 평탄). H3는 6,634 중 1,386(20.9%), 690 → 410 → 240으로 감쇠. 조작 단정은 불가(미확인)지만 HF Trending을 채택 근거로 쓰지 말라는 신호.
- **r/LocalLLaMA 「LongCat-Video-Avatar 1.6」**(메이투안, 오디오 구동 인물 영상), audio.cpp 0.9.5의 SoulX-FlashHead + LFM3-Audio + OWSM v4 실시간 로컬 아바타 — 로컬 멀티모달 파이프라인이 영상 쪽으로 빠르게 넘어가는 중.

### 2) 에이전트가 실제 시스템을 건드리는 범위

- **HN 「All AI-generated code should be Open Source」(1,021점·565댓글):** ① 학습 데이터가 OSS·CC BY-SA(Stack Exchange)라 폐쇄 결과물은 ‘라이선스 세탁’ ② 순수 AI 생성물은 미국에서 저작권 부적격(원숭이 셀카 → USCO) → CC0 등으로 공개하자는 주장. 반론: 관할별 차이(영국 CDPA의 컴퓨터 생성물 보호), 인간 기여 비율 판정 불가, 강제 수단 없음. 의견 글.
- **HN 「Your Agent Will Pick the Hackable One」:** $70 FM 신시 M-VAVE FM-1 — 문서 거의 없는 JieLi 칩에서 사용자들이 AI 코딩 도구로 커스텀 펌웨어(VA 신스·그루브박스·Doom 포트)를 쏟아내자 제조사가 10월 GPLv3 펌웨어·SDK·브라우저 에뮬레이터 공개. “쓰기 가능한 플래시가 있는 기기는 의도와 무관하게 플랫폼”이 되고 구매 결정이 에이전트를 거치게 된다는 전망.
- **동일 축:** HN 「Claude Code and Codex reverse engineered my 1994 Jeep's ECU over a $3 Arduino」(286점), r/codex 「Used Codex to reverse engineer Instagram's iOS app」(Hopper 연결 + AGENTS.md 규칙 “발견마다 노트, 테스트 통과를 가정하지 말 것”), 「Claude Code asked Codex for a review…」(터미널 주입 대신 각 에이전트 입력 경로로 직접 보내는 peer 브리지 — tmux send-keys가 승인 프롬프트에 Enter를 꽂는 사고 회피). 국내 논문 투고 사고와 같은 문제의 반대면입니다: 능력은 충분하고, 경계는 하네스가 정해야 합니다.

### 3) 하드웨어·정책

- **DRAM 담합 소송 기각 거부(확인, 11-14 미국):** N.D. Cal. Noël Wise 판사가 삼성·SK하이닉스·마이크론의 공동 기각 신청을 전부 기각. 범용 DRAM(DDR5) 감산·HBM 전환 담합 주장이 DRAM II(9th Cir. 2022)의 재판이 아니라고 판단 — 장기 HBM 계약, 범용 DRAM 장기계약 거부, Crucial 철수, 기록적 가격에도 증설 회피 등을 근거로 ‘그럴듯한 추론’ 인정. 투자자 대상 ‘공급 규율’ 발언·컨퍼런스 회동·3사 구조는 가중치 없음. 답변 기한 12-07, CMC 2027-01-12. 입증된 사실은 아님.
- **r/LocalLLaMA 「RASA will cause total chaos to open LLMs」:** 하원 통과 Remote Access Security Act(H.R.2683)와 중국 AI 기업의 해외 Nvidia GPU 임대 차단 상무부 최종 규칙 추진 보도 링크 — 클라우드 GPU 경유 학습 차단이 중국계 오픈 웨이트 공급에 미칠 영향 우려(전망, 미확인).
- **「I finally succeed the CMP 170HX voltage glitch and get 80GB VRAM」:** 채굴용 CMP 170HX의 전압 글리치로 80GB·126SM 해제 주장, 제한 쓰기 구간 스크립트를 Astra로 작성 — 하드웨어 손상·보증 상실 위험, 재현 미확인.
- **「EUROPA, the EU's open AI model, is aiming for nearly 1 trillion parameters」**(목표 단계), 「Spotted… Intel LGA 1954」(Z990/W980 PCIe 5.0 x8 3슬롯 직결 가능성 — 멀티 GPU 로컬 빌드 관점).

### 4) 로컬 LLM 스택

- **Basalt 0.4.0:** 첫 dense 지원 Qwen3.8 27B — RTX 5090(데스크톱) 단일 스트림 구조화 출력 최대 776 tok/s, 대화 262, 산문 194, 4k 프리필 12,000 tok/s, BF16 대비 top-1 92.8%(KLD 0.0262), 262K 컨텍스트. DeepSeek V4.1 Flash IQ1_M은 5090+5060 Ti에서 대화 90 tok/s. 작성자 수치(미확인). 24GB 노트북이면 27B 4bit급은 VRAM 상주가 가능해 체감 이득이 큰 쪽입니다.
- **「Latest version of strata made my Qwen3.8-Flash-Next dumb」:** 런타임 v0.1.42.0 이후 업데이트에서 같은 iq3_s 양자화가 더 빨라졌지만 과잉 사고로 262K 컨텍스트를 소진하며 실패 — 런타임 버전 고정·회귀 A/B의 필요성(미확인).
- **「LFM2.5-24B-A2B + Hermes is awesome!」**(코딩 아닌 작업 실행기로 속도·능력 균형), 「Llama.cpp performance improvement over time (Gemma4)」(RTX 5080 16GB Laptop에서 자작 엔진 대비 llama.cpp가 따라잡은 추이), 「Probable GLM model」(블러 처리된 리더보드 59.4/57.1/54.0%를 GLM 차기작으로 추정, 미확인).

## 목적별 모델 고르기 — 11-16 재확인 (보드 변경 없음)

[/models/](/models/) 보드는 유지합니다. 주말 사이 대형 LLM 출시·가격 개편 없음, 다음 정기 점검 ~11-21.
- **확인(벤치, [AA](https://artificialanalysis.ai/leaderboards/models) 페이지 데이터 11-16 아침):** Fable 5.2 max 64.6·$26.54, xhigh 62.2·$14.83, high 61.8·$9.08, Carbon high 60.0·$5.48, Opus 5.5 max 59.1·$10.04, Astra max 56.9·$6.24, GPT-6.1 Sol max 54.6·$1.27, Hydrogen xhigh 53.9·$3.16, Sol xhigh 52.5·$0.76, Terra max 51.3·$0.96 — 보드 rows와 전부 일치. Oxygen·Krypton·GPT-6.2·GLM 차기작은 AA 목록에 없음.
- **국내 글 교차(확인):** 「뮤즈앰버가 딥시크 떡바르네」의 방향은 AA와 일치 — Muse Ember 36·$0.14 vs DeepSeek V4.1 Flash 1017 33·$0.60. 단 Ember는 가중치 비공개라 ‘오픈웨이트’ 셀은 여전히 DeepSeek V4.1 Flash 1017(33·$0.60). 글이 언급한 “200K 초과 시 비용·성능 급변”과 “SWE-Atlas Codebase QnA에선 DeepSeek max 우세”는 AA 확인 범위 밖.
- **미확인(커뮤니티 해석):** “Ember는 벤치맥싱”, “6.2가 Carbon엔 이기고 Fable엔 짐”, “Carbon은 발산형이라 기획·생활 조언에 강함”. H3·H3-Image는 이미지/영상 모델이라 이 LLM 보드 대상이 아닙니다.

## 의미 — 그리고 바꾸지 말 것

- **오픈 웨이트 ≠ 오픈 라이선스.** H3 계열은 가중치는 내려받을 수 있어도 지역·매출·호스팅·증류까지 묶는 커뮤니티 라이선스입니다. 국내 로컬 파이프라인은 모델 선택 단계에서 LICENSE의 territory·Output 조항을 체크리스트로 넣어야 합니다.
- **헤징은 모델 교체보다 지시로 먼저 다룬다.** 6.2 기대는 소문 단계이고, 과잉 헤징·되묻기는 custom instructions로 상당 부분 억제됩니다.
- **에이전트 사고는 권한 설계 문제.** 비가역 액션 정지·리허설 환경·하네스 차단이 기본값이어야 합니다.
- **바꾸지 말 것 1:** 모델판 라우팅(가성비 Sol max·최고 Fable max·Claude 가성비 Fable medium·오픈웨이트 DeepSeek V4.1 Flash 1017)은 그대로.
- **바꾸지 말 것 2:** HF 좋아요·Trending을 모델 채택 근거로 쓰지 마세요. 다운로드·재현 벤치·라이선스가 우선입니다.
- **바꾸지 말 것 3:** Antigravity는 공식 표면 + API 키 분리 원칙 유지. 쿼터 조회·라우터류 재도입 금지.

## 시도 후보

1. **라이선스 린트:** 로컬 모델 디렉터리마다 LICENSE에서 `Territor|Excluded|Output|Hosted|Revenue|distill`을 grep해 표로 정리 — H3 계열처럼 한국 제외 조항이 있는 모델을 파이프라인에서 분리.
2. **2단계 영상 워크플로(지역 제한 없는 라이선스 모델로):** 24GB 노트북에서 저해상도 4-step 프리뷰 → 채택 테이크만 네이티브 렌더로 나누고, 테이크당 GPU 시간·전력(콘센트형 측정기)을 기록.
3. **헤징 억제 A/B:** 같은 10개 질문을 기본 vs custom instructions(가정 명시·확신도 라벨·되묻기 금지)로 돌려 답변 길이·되묻기 횟수·정답률 비교.
4. **에이전트 정지 게이트:** 브라우저·computer-use 하네스에 submit/pay/send/delete 셀렉터 클릭 전 사람 승인 훅을 넣고, 테스트 폼으로 리허설.
5. **런타임 고정:** 로컬 LLM 런타임(strata·llama.cpp 등)과 양자화 파일 해시를 고정하고, 업데이트 시 동일 프롬프트 5개로 회귀 A/B 후 승격.
6. **Codex/Claude 비용 재계산:** 지난주 실제 사용 로그로 ‘토큰 단가’가 아니라 ‘작업당 비용’을 계산하고 AA 작업당 비용과 비교.

## 소스 범위

국내: chatgpt·ai_utilize 개념/추천·고조회 + 11-15 아침~11-16 07:54 신규(자동 후보 59, 추가 목록 ~1,390편 중 신규 1,116편 정렬, 본문·댓글 61편). 해외: 레딧 RSS 3/8([r/StableDiffusion 5090 파일럿](https://www.reddit.com/r/StableDiffusion/comments/1xwycw5/is_one_5090_enough_to_make_a_whole_ai_series_at/), [LTX-2.5 좋아요 분석](https://www.reddit.com/r/StableDiffusion/comments/1xwz98f/looks_like_ltx25_are_faking_likes_to_game_the/), [H3-Image 혹평](https://www.reddit.com/r/StableDiffusion/comments/1xx06c8/the_new_minimax_h3_image_model_seems_rushed_and/), [Basalt 0.4.0](https://www.reddit.com/r/LocalLLaMA/comments/1xx1cu9/basalt_040_more_models_still_as_fast_qwen_27b_up/), [RASA](https://www.reddit.com/r/LocalLLaMA/comments/1xwmnkw/rasa_will_cause_total_chaos_to_open_llms_and/), [Codex $500 분석](https://www.reddit.com/r/codex/comments/1xwp0da/my_500_codex_plan_vs_5010_in_discounted_topups/)), HN 1면 40([AI 생성 코드 오픈소스론](https://jakub.jankiewicz.org/blog/ai-code-open-source/), [Hackable One](https://geoffstearns.com/blog/your-agent-will-pick-the-hackable-one/)), [H3 LICENSE](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE)·[H3-Image LICENSE](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image/blob/main/LICENSE)·[H3-Image 리포](https://github.com/MiniMax-AI/MiniMax-H3-Image/)·[MiniMax 블로그](https://www.minimax.io/blog/minimax-h3-image), [Slotbound Steam](https://store.steampowered.com/app/4459590/Slotbound/)·[게임메카](https://www.gamemeca.com/view.php?gid=1783506), [DRAM 결정 보도](https://litnews.ai/articles/garciaguirre-samsung-sk-hynix-micron-dram-conspiracy-suit-survives-dismissal), [AA 리더보드](https://artificialanalysis.ai/leaderboards/models). 11-14·11-15에 다룬 Claude 장애·Duet·멜론 1위·Lovable 감사는 새 사실 없음으로 제외.

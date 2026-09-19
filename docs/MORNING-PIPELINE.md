# 옵티 AI 데일리 · 아침 파이프라인 (초보·고급)

매일 08:00 Asia/Seoul. 같은 날 **초보**와 **고급** 두 글을 모두 쓴다.

## 0) 국내 갤러리 수집 (필수 선행)
```bash
python3 scripts/collect-dc.py -o /tmp/dc-YYYY-MM-DD.json --bodies 8
```
- **모바일** `m.dcinside.com` HTML만 사용. 데스크톱 `gall.dcinside.com`은 자주 빈 응답(차단).
- 기본 갤: `chatgpt`, `ai_utilize` (우선). 필요 시 `--galleries chatgpt,ai_utilize,aijonghap`.
- `id=ai`는 AI 게임 갤이니 **절대 사용 금지**.
- 출력 JSON의 `briefing_candidates` + 각 갤 `recommend`(개념·추천) / `hot` / `bodies`를 브리핑 재료로 쓴다.
- `errors`가 있거나 후보가 비면: 1회 재시도 → 그래도 실패 시 한국어 언론 중계+해외 1차로 채우되, **국내 갤 수집 실패를 본문에 명시**하고 낡은 소식으로 분량을 채우지 않는다.

## 출력물
1. `src/content/posts/YYYY-MM-DD/beginner.md` — `level: beginner`
2. `src/content/posts/YYYY-MM-DD/advanced.md` — `level: advanced`
3. `bash scripts/deploy.sh` (gh-pages 증분 커밋, orphan force-push 금지)
4. 텔레그램 1통: format + send 스크립트로 초보 핵심 3 + 고급 핵심 3 + 두 URL

## URL
- https://ai.optiwork.co.kr/posts/YYYY-MM-DD/beginner/
- https://ai.optiwork.co.kr/posts/YYYY-MM-DD/advanced/


## 제목·요약 카피 (중요)
- `title`: 날짜·「초보/고급 브리핑」·「쉬운 말로」를 넣지 말 것. **호기심이 생기는 한 문장 훅** (궁금증·긴장·반전).
- `description`: 주제 나열 금지. 오늘 판의 **한 줄 긴장/의미**만. 초보도 「쉬운 말로」라고 쓰지 말 것(본문이 이미 쉽게 쓰면 됨).
- 나쁜 예: `옵티 AI 데일리 초보: A, B, C, D까지 쉬운 말로.`
- 좋은 예: `클로드가 오픈AI 담장 너머를 봤다` / `웹쫀쿠는 잘 되는데, 한도만 먼저 사라진다`
- 레벨 표시는 카드 UI·badge로 하고, 제목에 `초보`/`고급`을 반복하지 말 것.

## 품질
- 각 버전 한국어 본문 ~5000자 이상. 초보는 쉬운 말이지 얇은 요약이 아님.
- 구조: 핵심 3 → 주제별(확인/미확인 표시) → 의미·바꾸지 말 것 → 시도 후보 → 소스 범위
- 용어는 `[[용어|쉬운 설명]]`
- 공개 카피에 「디시」 금지 → 국내·해외
- **국내 개념글·고조회를 먼저** 다루고, 해외는 교차 확인. 갤 안 들어가도 읽히게.

## 소스 우선
1. 국내: collect-dc.py 결과 (chatgpt, ai_utilize 개념/추천·고조회)
2. 해외: r/LocalLLaMA, r/MachineLearning, HN AI, r/ChatGPT (Reddit은 RSS; JSON 403 주의)

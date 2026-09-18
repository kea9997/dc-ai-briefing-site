# 옵티 AI 데일리 · 아침 파이프라인 (초보·고급)

매일 08:00 Asia/Seoul. 같은 날 **초보**와 **고급** 두 글을 모두 쓴다.

## 출력물
1. `src/content/posts/YYYY-MM-DD/beginner.md` — `level: beginner`
2. `src/content/posts/YYYY-MM-DD/advanced.md` — `level: advanced`
3. `bash scripts/deploy.sh` (gh-pages 증분 커밋, orphan force-push 금지)
4. 텔레그램 1통: format + send 스크립트로 초보 핵심 3 + 고급 핵심 3 + 두 URL

## URL
- https://ai.optiwork.co.kr/posts/YYYY-MM-DD/beginner/
- https://ai.optiwork.co.kr/posts/YYYY-MM-DD/advanced/

## 품질
- 각 버전 한국어 본문 ~5000자 이상. 초보는 쉬운 말이지 얇은 요약이 아님.
- 구조: 핵심 3 → 주제별(확인/미확인 표시) → 의미·바꾸지 말 것 → 시도 후보 → 소스 범위
- 용어는 `[[용어|쉬운 설명]]`
- 공개 카피에 「디시」 금지 → 국내·해외
- 갤러리 안 들어가도 읽히게. 원문 링크는 호기심용.

## 소스 우선
국내 AI 커뮤니티(개념글·고조회) → 해외(r/LocalLLaMA, r/MachineLearning, HN AI, r/ChatGPT 등).

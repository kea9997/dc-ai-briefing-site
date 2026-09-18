export const SITE = {
  name: '옵티 AI 데일리',
  nameEn: 'Opti AI Daily',
  domain: 'https://ai.optiwork.co.kr',
  description:
    '국내·해외 AI 커뮤니티 동향을 매일 한국어로 정리하는 브리핑. Optiwork의 AI 인사이트 채널.',
  parent: {
    name: 'Optiwork',
    url: 'https://optiwork.co.kr',
  },
  locale: 'ko-KR',
  twitter: '',
  ogImage: '/og-default.png',
  analytics: {
    /** Cloudflare Web Analytics beacon token */
    cloudflareBeacon: '9a74a246645d43b8bb3bb291566feb71',
    /** GA4 measurement ID, e.g. G-XXXXXXXX */
    ga4MeasurementId: 'G-XG5G6DGSWX',
  },
} as const;

export type NetworkItem = {
  name: string;
  url: string;
  blurb: string;
};

/** All Optiwork sites in one flat list — no company/project/domain split */
export const NETWORK: NetworkItem[] = [
  {
    name: 'Optiwork',
    url: 'https://optiwork.co.kr',
    blurb: '제조·중소기업용 홈페이지·웹앱, AI 업무 자동화, ERP 연동과 IT 운영',
  },
  {
    name: '반품 가격 비교',
    url: 'https://banpum.optiwork.co.kr',
    blurb: '반품 상품 가격을 한곳에서 비교',
  },
  {
    name: 'Music Time Machine',
    url: 'https://music.optiwork.co.kr',
    blurb: '1970–2022 한·미·일·브라질 곡을 연도·아티스트로 다시 찾기',
  },
  {
    name: '아이디어 성적표',
    url: 'https://idea.optiwork.co.kr',
    blurb: '사업 아이디어의 시장성·차별성·수익성·실행 난이도를 AI 성적표로 정리',
  },
  {
    name: '로컬 LLM GPU 픽커',
    url: 'https://llm.optiwork.co.kr',
    blurb: '엔비디아 GPU VRAM·AI 스펙과 신품·중고가로 로컬 LLM용 카드 고르기',
  },
  {
    name: '반품노트북.com',
    url: 'https://xn--o80bm5r84ax63ci8b.com',
    blurb: '반품·중고 대체 노트북 입고를 빠르게 훑는 실시간 탐색기',
  },
  {
    name: '가공견적.com',
    url: 'https://xn--o39aum6g720h.com',
    blurb: 'PDF·DXF·STEP 도면으로 CNC 가공 참고 견적',
  },
  {
    name: 'FindMyNote',
    url: 'https://findmynote.com',
    blurb: '쿠팡 신품 노트북 실구매가를 스펙·용도별로 비교',
  },
];

import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export type DayGroup = {
  dateKey: string;
  date: Date;
  beginner?: Post;
  advanced?: Post;
};

export async function getPublishedPosts(): Promise<Post[]> {
  return (await getCollection('posts'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function groupPostsByDay(posts: Post[]): DayGroup[] {
  const byDate = new Map<string, DayGroup>();
  for (const post of posts) {
    const dateKey = post.data.date.toISOString().slice(0, 10);
    let g = byDate.get(dateKey);
    if (!g) {
      g = { dateKey, date: post.data.date };
      byDate.set(dateKey, g);
    }
    if (post.data.level === 'beginner') g.beginner = post;
    else g.advanced = post;
  }
  return Array.from(byDate.values()).sort(
    (a, b) => b.date.valueOf() - a.date.valueOf()
  );
}

/** YYYY-MM in Asia/Seoul */
export function monthKeyKST(date: Date): string {
  return date.toLocaleDateString('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
  });
}

/** ISO week key like 2026-W39 in Asia/Seoul */
export function isoWeekKeyKST(date: Date): string {
  // Shift to KST midday to avoid UTC boundary issues
  const kst = new Date(
    date.toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
  );
  // Copy of ISO week algorithm on local calendar date
  const d = new Date(Date.UTC(kst.getFullYear(), kst.getMonth(), kst.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

export function formatDateKo(date: Date): string {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Seoul',
  });
}

export function formatMonthKo(monthKey: string): string {
  const [y, m] = monthKey.split('-');
  return `${y}년 ${Number(m)}월`;
}

export type TopicDef = {
  slug: string;
  title: string;
  short: string;
  keywords: string[];
};

export const TOPICS: TopicDef[] = [
  {
    slug: 'quota',
    title: '한도·쿼터',
    short: '구독·API 한도, 주간 예산, Inference Gap',
    keywords: [
      '한도',
      '쿼터',
      'quota',
      '예산',
      '반토막',
      'allowance',
      'Inference Gap',
      'InferenceGap',
      '출전',
      '너프',
    ],
  },
  {
    slug: 'local-llm',
    title: '로컬 LLM',
    short: '로컬 실행, LocalLLaMA, 온디바이스 라우팅',
    keywords: [
      '로컬',
      'LocalLLaMA',
      'local',
      '온디바이스',
      '라우팅',
      'Qwen',
      'VRAM',
      '로컬 LLM',
    ],
  },
  {
    slug: 'model-launch',
    title: '모델 출시·가격',
    short: '새 모델 공개, 토큰 단가, DevDay·릴리스',
    keywords: [
      '가격',
      '반값',
      '출시',
      '단가',
      'DevDay',
      'Sol',
      'Luna',
      'Opus',
      'GPT-6',
      '릴리스',
      '모델',
    ],
  },
];

export function postMatchesTopic(post: Post, topic: TopicDef): boolean {
  const hay = `${post.data.title} ${post.data.description} ${(post.data.tags || []).join(' ')}`.toLowerCase();
  return topic.keywords.some((k) => hay.includes(k.toLowerCase()));
}

export function filterPostsByTopic(posts: Post[], topic: TopicDef): Post[] {
  // Prefer one card per day: keep beginner if both match, else whichever matches
  const days = groupPostsByDay(posts);
  const matched: Post[] = [];
  for (const day of days) {
    const b = day.beginner && postMatchesTopic(day.beginner, topic) ? day.beginner : undefined;
    const a = day.advanced && postMatchesTopic(day.advanced, topic) ? day.advanced : undefined;
    if (b) matched.push(b);
    else if (a) matched.push(a);
  }
  return matched;
}

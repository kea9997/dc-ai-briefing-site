import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/site';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('posts'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const items = posts
    .map((p) => {
      const url = `${SITE.domain}/posts/${p.id}/`;
      return `<item>
  <title><![CDATA[${p.data.title}]]></title>
  <link>${url}</link>
  <guid>${url}</guid>
  <pubDate>${p.data.date.toUTCString()}</pubDate>
  <description><![CDATA[${p.data.description}]]></description>
</item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${SITE.name}</title>
  <link>${SITE.domain}</link>
  <description>${SITE.description}</description>
  <language>ko</language>
  ${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};

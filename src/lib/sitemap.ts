import { getCollection } from 'astro:content';
import { SITE } from './site';
import { TOPICS } from './posts';

export async function buildSitemapXml(): Promise<string> {
  const posts = (await getCollection('posts')).filter((p) => !p.data.draft);
  const staticPaths = [
    '/',
    '/about/',
    '/faq/',
    '/archive/',
    '/topics/',
    '/weekly/',
    ...TOPICS.map((t) => `/topics/${t.slug}/`),
  ];
  const urls = [
    ...staticPaths.map((path) => ({
      loc: `${SITE.domain}${path}`,
      lastmod: new Date().toISOString(),
    })),
    ...posts.map((p) => ({
      loc: `${SITE.domain}/posts/${p.id}/`,
      lastmod: p.data.date.toISOString(),
    })),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`)
  .join('\n')}
</urlset>`;
}

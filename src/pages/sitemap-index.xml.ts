import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/site';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('posts')).filter((p) => !p.data.draft);
  const staticPaths = ['/', '/about/', '/faq/'];
  const urls = [
    ...staticPaths.map((path) => ({ loc: `${SITE.domain}${path}`, lastmod: new Date().toISOString() })),
    ...posts.map((p) => ({
      loc: `${SITE.domain}/posts/${p.id}/`,
      lastmod: p.data.date.toISOString(),
    })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`
  )
  .join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

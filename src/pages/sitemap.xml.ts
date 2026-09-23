import type { APIRoute } from 'astro';
import { buildSitemapXml } from '../lib/sitemap';

export const GET: APIRoute = async () => {
  const body = await buildSitemapXml();
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

import { defineConfig } from 'astro/config';

// GitHub Pages project site: set site + base after repo name is known.
// For user/org site (owner.github.io) use base: '/'.
export default defineConfig({
  site: 'https://example.github.io',
  base: '/dc-ai-briefing-site',
  markdown: {
    syntaxHighlight: false,
  },
});

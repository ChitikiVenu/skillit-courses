// Writes a static <head> (title, description, canonical, robots, Open Graph, Twitter card) for
// every real route, as its own dist/<path>/index.html.
//
// Why: this is a client-rendered SPA — every page's real title/description/OG tags are set by
// react-helmet-async, which only runs once the JS bundle has loaded and executed. Google's crawler
// runs that JS, so it always saw the correct tags. But link-preview bots (WhatsApp, LinkedIn,
// Facebook, Slack, Telegram, iMessage...) fetch the URL and read the *raw* HTML only — none of them
// execute JavaScript — so every single page was showing the same generic "Skill IT Education" title
// with no description or image, regardless of what the page's own <Seo> component set.
//
// This script runs after `vite build` and, for each route in scripts/lib/site-pages.mjs (the same
// list scripts/seo-audit.mjs checks for duplicates), writes a copy of the already-built
// dist/index.html with that route's real title/description/canonical/OG/Twitter tags spliced in.
// Vercel serves a matching static file before it ever falls through to the SPA catch-all rewrite in
// vercel.json, so a crawler hitting /courses/cyber-security/penetration-tester gets this static,
// route-correct HTML — while a real browser gets the exact same file, then boots the same JS bundle
// and hydrates into the normal interactive app.
//
// Every injected tag carries data-prerendered="true" so src/main.jsx can strip them the moment React
// mounts, before react-helmet-async inserts its own — otherwise a real browser would end up with two
// of each meta/link tag (one static, one Helmet-managed) after hydration. This never affects bots,
// since they never run the JS that would do that swap in the first place.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { getSitePages } from './lib/site-pages.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');
const indexPath = resolve(distDir, 'index.html');

if (!process.env.VITE_SITE_URL && typeof process.loadEnvFile === 'function') {
  try {
    process.loadEnvFile(resolve(root, '.env'));
  } catch {
    // no .env file — fine, fall through to the hard-coded fallback below
  }
}
const FALLBACK_SITE_URL = 'https://www.skillit.education';
const DOMAIN = (process.env.VITE_SITE_URL || FALLBACK_SITE_URL).replace(/\/+$/, '');
const SITE_LOGO = `${DOMAIN}/img/skill-it-logo.png`;
const SITE_NAME = 'Skill IT Education';

if (!existsSync(indexPath)) {
  console.error('✗ dist/index.html not found — run `vite build` before this script (see the "build" script in package.json).');
  process.exit(1);
}
const template = readFileSync(indexPath, 'utf8');
if (!template.includes('<title>') || !template.includes('</head>')) {
  console.error('✗ dist/index.html does not look like the expected template (missing <title> or </head>).');
  process.exit(1);
}

const escapeHtml = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

function renderPage(page) {
  const canonical = new URL(page.path, DOMAIN + '/').toString();
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description ?? '');
  const image = page.ogImage ? DOMAIN + page.ogImage : SITE_LOGO;
  const ogType = page.ogType ?? 'website';
  const robots = page.noindex ? 'noindex, follow' : 'index, follow';

  // react-helmet-async creates its own new <title> element on mount rather than reusing an existing
  // one, so this one needs data-prerendered too, or the page ends up with two <title> tags after
  // hydration (invalid HTML — main.jsx's cleanup only removes tags carrying this attribute).
  const head = [
    `<title data-prerendered="true">${title}</title>`,
    `<meta name="description" content="${description}" data-prerendered="true" />`,
    `<link rel="canonical" href="${canonical}" data-prerendered="true" />`,
    `<meta name="robots" content="${robots}" data-prerendered="true" />`,
    `<meta property="og:type" content="${ogType}" data-prerendered="true" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" data-prerendered="true" />`,
    `<meta property="og:title" content="${title}" data-prerendered="true" />`,
    `<meta property="og:description" content="${description}" data-prerendered="true" />`,
    `<meta property="og:url" content="${canonical}" data-prerendered="true" />`,
    `<meta property="og:image" content="${image}" data-prerendered="true" />`,
    `<meta name="twitter:card" content="summary_large_image" data-prerendered="true" />`,
    `<meta name="twitter:title" content="${title}" data-prerendered="true" />`,
    `<meta name="twitter:description" content="${description}" data-prerendered="true" />`,
    `<meta name="twitter:image" content="${image}" data-prerendered="true" />`,
  ].join('\n    ');

  return template
    .replace(/<title>[^<]*<\/title>/, '')
    .replace('</head>', `    ${head}\n  </head>`);
}

const pages = await getSitePages();
let written = 0;
for (const page of pages) {
  const html = renderPage(page);
  if (page.path === '/') {
    writeFileSync(indexPath, html);
    written += 1;
    continue;
  }
  // Written both ways (as a directory's index.html AND as a flat <path>.html) since which one a
  // static host resolves a trailing-slash-less clean URL to isn't something to guess at — this
  // covers either resolution order.
  const dirOut = resolve(distDir, `.${page.path}`, 'index.html');
  mkdirSync(dirname(dirOut), { recursive: true });
  writeFileSync(dirOut, html);
  writeFileSync(resolve(distDir, `.${page.path}.html`), html);
  written += 1;
}
console.log(`✓ Prerendered <head> tags for ${written} routes (${DOMAIN})`);

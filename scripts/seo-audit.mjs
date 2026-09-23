// Static SEO audit — checks the same data the app renders titles/descriptions from for the things
// that are cheap and reliable to catch without a headless browser: missing/duplicate titles,
// missing/duplicate descriptions, title/description length, a hard-coded domain string anywhere in
// src/, and sitemap coverage vs. the real route list. Run with `npm run seo:audit`.
//
// This is a linter, not a rich-results validator — it can't check rendered H1s, canonical
// consistency after JS runs, or JSON-LD validity (see scripts/generate-sitemap.mjs for the one thing
// it *does* cross-check at build time: blogCourses.js's counts against the real BLOG_POSTS).
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { getSitePages } from './lib/site-pages.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const pages = await getSitePages();

const errors = [];
const warnings = [];

// --- missing / duplicate titles & descriptions ---
const titleMap = new Map();
const descMap = new Map();
for (const p of pages) {
  if (!p.title) errors.push(`Missing title: ${p.path}`);
  else {
    const key = p.title.trim().toLowerCase();
    if (!titleMap.has(key)) titleMap.set(key, []);
    titleMap.get(key).push(p.path);
  }
  if (!p.description) errors.push(`Missing description: ${p.path}`);
  else {
    const key = p.description.trim().toLowerCase();
    if (!descMap.has(key)) descMap.set(key, []);
    descMap.get(key).push(p.path);
  }
}
for (const [title, paths] of titleMap) {
  if (paths.length > 1) errors.push(`Duplicate title "${title}" on: ${paths.join(', ')}`);
}
for (const [desc, paths] of descMap) {
  if (paths.length > 1) errors.push(`Duplicate description ("${desc.slice(0, 60)}…") on: ${paths.join(', ')}`);
}

// --- length warnings (informational — not a hard rule; long/short titles aren't wrong, just flagged) ---
for (const p of pages) {
  if (p.title && (p.title.length < 15 || p.title.length > 65)) {
    warnings.push(`Title length ${p.title.length} on ${p.path}: "${p.title}"`);
  }
  if (p.description && (p.description.length < 50 || p.description.length > 165)) {
    warnings.push(`Description length ${p.description.length} on ${p.path}`);
  }
}

// --- hard-coded domain anywhere in src/ (should only ever come from src/config/site.js) ---
const HARDCODED_DOMAIN_RE = /https?:\/\/(www\.)?(skillit\.education|skillit-courses\.vercel\.app|skilliteducation\.com)/;
function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'dist') continue;
    const full = resolve(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.(jsx?|mjs)$/.test(entry.name)) out.push(full);
  }
  return out;
}
for (const file of walk(resolve(root, 'src'))) {
  if (file.endsWith('/config/site.js')) continue; // the one legitimate place the fallback domain lives
  const text = readFileSync(file, 'utf8');
  const m = text.match(HARDCODED_DOMAIN_RE);
  if (m) warnings.push(`Hard-coded domain "${m[0]}" in ${file.replace(root + '/', '')} — should come from src/config/site.js`);
}

// --- sitemap coverage: every page above should be in sitemap.xml, and vice versa ---
let sitemapUrls = [];
try {
  const xml = readFileSync(resolve(root, 'public/sitemap.xml'), 'utf8');
  sitemapUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
} catch {
  errors.push('public/sitemap.xml not found — run `npm run sitemap` first.');
}
if (sitemapUrls.length) {
  // noindex pages (currently none — just kept generic here for whenever one exists again) are
  // deliberately left out of the sitemap by scripts/generate-sitemap.mjs, so they're excluded from
  // this comparison too.
  const pagePaths = new Set(pages.filter((p) => !p.noindex).map((p) => p.path));
  const sitemapSet = new Set(sitemapUrls);
  for (const p of pagePaths) {
    if (!sitemapSet.has(p)) warnings.push(`In page list but missing from sitemap.xml: ${p}`);
  }
  for (const s of sitemapSet) {
    if (!pagePaths.has(s)) warnings.push(`In sitemap.xml but not in this audit's page list (check it's real & indexable): ${s}`);
  }
}

// --- report ---
console.log(`\nSEO audit — ${pages.length} pages checked\n`);
if (errors.length) {
  console.log(`✗ ${errors.length} error(s):`);
  errors.forEach((e) => console.log(`  - ${e}`));
} else {
  console.log('✓ No errors (no missing/duplicate titles or descriptions).');
}
console.log();
if (warnings.length) {
  console.log(`⚠ ${warnings.length} warning(s) (informational — review, not necessarily wrong):`);
  warnings.forEach((w) => console.log(`  - ${w}`));
} else {
  console.log('✓ No warnings.');
}
console.log();

if (errors.length) process.exit(1);

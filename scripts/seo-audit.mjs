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

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const cyberSecurity = (await import('../src/data/cyberSecurity.js')).default;
const aiMl = (await import('../src/data/aiMl.js')).default;
const dataScience = (await import('../src/data/dataScience.js')).default;
const socAnalyst = (await import('../src/data/socAnalyst.js')).default;
const dataAnalyst = (await import('../src/data/dataAnalyst.js')).default;
const { ROLE_COURSES } = await import('../src/data/roleCourses/index.js');
const { BLOG_POSTS } = await import('../src/data/blogPosts.js');
const { PRIVACY_POLICY, DATA_COMPLIANCE_POLICY } = await import('../src/data/policies.js');

const COURSES = [cyberSecurity, aiMl, dataScience, socAnalyst, dataAnalyst];

// Mirrors BlogPostPage.jsx's own fallback exactly, so this audit reports what actually ships, not the
// raw (often much longer) lede.
function truncate(s, limit) {
  const trimmed = s.trim();
  if (trimmed.length <= limit) return trimmed;
  const cut = trimmed.slice(0, limit);
  const lastSpace = cut.lastIndexOf(' ');
  const safe = lastSpace > 0 ? cut.slice(0, lastSpace) : cut;
  return safe.replace(/[,.;—-]+$/, '') + '…';
}

const pages = [
  { path: '/', title: 'Cyber Security, AI & Data Courses in Hyderabad | Skill IT Education', description: 'set in LandingPage.jsx' },
  { path: '/blog', title: 'Career Insights | Skill IT Education Blog', description: 'set in BlogIndexPage.jsx' },
  { path: '/faqs', title: 'FAQs — Courses, Fees, Internships & Placement | Skill IT Education', description: 'set in FaqPage.jsx' },
  { path: '/privacy-policy', title: PRIVACY_POLICY.metaTitle, description: PRIVACY_POLICY.metaDescription },
  { path: '/data-compliance-policy', title: DATA_COMPLIANCE_POLICY.metaTitle, description: DATA_COMPLIANCE_POLICY.metaDescription },
  ...COURSES.map((c) => ({ path: c.routeBase, title: c.COPY.metaTitle, description: c.COPY.metaDesc })),
  ...COURSES.flatMap((c) =>
    c.MODULES.map((m) => {
      const descPrefix = `Module ${m.number} — ${c.COPY.courseShortName} (${m.duration}): `;
      return {
        path: `${c.routeBase}/${m.slug}`,
        title: `${m.title} — ${c.COPY.courseShortName} | Skill IT Education`,
        description: descPrefix + truncate(m.hero, 160 - descPrefix.length),
      };
    }),
  ),
  ...ROLE_COURSES.map((r) => ({ path: r.href, title: r.metaTitle, description: r.metaDescription })),
  ...BLOG_POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    title: p.metaTitle ?? `${p.question} | Skill IT Education`,
    description: p.metaDescription ?? truncate(p.lede, 158),
  })),
];

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
const HARDCODED_DOMAIN_RE = /https?:\/\/(skillit-courses\.vercel\.app|skilliteducation\.com)/;
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
  const pagePaths = new Set(pages.map((p) => p.path));
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

// Generates three build-time artifacts from the site's own route data, so none of them can drift out
// of sync with what actually exists: public/sitemap.xml, public/robots.txt, and
// src/data/roleCoursesLite.js (a lightweight {title, href} projection of the 5 role-course files —
// Footer.jsx needs only that much to render its link columns, but the real files are full role pages,
// ~4,300 lines combined; importing them there just for link text used to force all of it into the
// main bundle on every page). Runs automatically as part of `npm run build`; run it on its own with
// `npm run sitemap`.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Node doesn't load .env files itself the way Vite does for the client bundle, so this picks up
// VITE_SITE_URL from the same .env file if it's not already in the environment (Vercel's own build
// step sets real environment variables directly, so this is mainly for local `npm run build`/`npm run
// sitemap`). Never throws if there's no .env or no loadEnvFile support on the Node version in use —
// the same FALLBACK_SITE_URL as the client config is always the final fallback.
if (!process.env.VITE_SITE_URL && typeof process.loadEnvFile === 'function') {
  try {
    process.loadEnvFile(resolve(__dirname, '../.env'));
  } catch {
    // no .env file — fine, fall through to the hard-coded fallback below
  }
}
const FALLBACK_SITE_URL = 'https://www.skillit.education';
const DOMAIN = (process.env.VITE_SITE_URL || FALLBACK_SITE_URL).replace(/\/+$/, '');

const cyberSecurity = (await import('../src/data/cyberSecurity.js')).default;
const aiMl = (await import('../src/data/aiMl.js')).default;
const dataScience = (await import('../src/data/dataScience.js')).default;
const socAnalyst = (await import('../src/data/socAnalyst.js')).default;
const dataAnalyst = (await import('../src/data/dataAnalyst.js')).default;
const { ROLE_GROUPS, ROLE_COURSES } = await import('../src/data/roleCourses/index.js');
const { BLOG_POSTS } = await import('../src/data/blogPosts.js');
const { BLOG_COURSES } = await import('../src/data/blogCourses.js');
const { CAREERS } = await import('../src/data/careers.js');

// blogCourses.js hand-keeps a per-programme article count (so the header doesn't have to import
// every full article body just to show "23 articles"). Cross-check it against the real BLOG_POSTS
// here, on every build, so a post added/removed without updating that file fails loudly instead of
// silently showing the wrong count in the header forever.
for (const c of BLOG_COURSES) {
  const real = BLOG_POSTS.filter((p) => p.courseKey === c.key).length;
  if (real !== c.count) {
    console.error(
      `✗ blogCourses.js says ${c.key} has ${c.count} articles, but blogPosts.js actually has ${real}. ` +
        `Update the "count" for "${c.key}" in src/data/blogCourses.js to ${real}.`,
    );
    process.exitCode = 1;
  }
}
if (process.exitCode === 1) process.exit(1);

const COURSES = [cyberSecurity, aiMl, dataScience, socAnalyst, dataAnalyst];
const TODAY = new Date().toISOString().slice(0, 10);

// path, change frequency, priority (1.0 highest — home and the five programme pages are the pages
// most worth a crawler's attention; module/role/blog pages are real, valuable, indexable content but
// one level down).
const urls = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/faqs', changefreq: 'weekly', priority: '0.8' },
  { path: '/careers', changefreq: 'weekly', priority: '0.6' },
  ...CAREERS.map((c) => ({ path: `/careers/${c.slug}`, changefreq: 'weekly', priority: '0.5' })),
  { path: '/about-us', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/data-compliance-policy', changefreq: 'yearly', priority: '0.3' },
  ...COURSES.map((c) => ({ path: c.routeBase, changefreq: 'weekly', priority: '1.0' })),
  ...COURSES.flatMap((c) => c.MODULES.map((m) => ({ path: `${c.routeBase}/${m.slug}`, changefreq: 'monthly', priority: '0.6' }))),
  ...ROLE_COURSES.map((r) => ({ path: r.href, changefreq: 'monthly', priority: '0.7' })),
  ...BLOG_POSTS.map((p) => ({ path: `/blog/${p.slug}`, changefreq: 'monthly', priority: '0.6' })),
];

// Not included on purpose: /refund-policy (still PlaceholderPage, noindex — a sitemap should only
// list pages meant to be indexed), /programmes (a redirect), /404, and /blog?course=... (a
// client-side filter of /blog, not a distinct indexable page — see BlogIndexPage.jsx/Header.jsx; it
// has no canonical of its own and isn't meant to be crawled as a separate URL).

const seen = new Set();
for (const u of urls) {
  if (seen.has(u.path)) {
    console.error(`✗ Duplicate URL in sitemap: ${u.path}`);
    process.exit(1);
  }
  seen.add(u.path);
}

const body = urls
  .map(
    (u) => `  <url>\n    <loc>${DOMAIN}${u.path}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml);
console.log(`✓ Wrote ${urls.length} URLs to public/sitemap.xml (${DOMAIN})`);

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${DOMAIN}/sitemap.xml\n`;
writeFileSync(resolve(__dirname, '../public/robots.txt'), robots);
console.log(`✓ Wrote public/robots.txt (Sitemap: ${DOMAIN}/sitemap.xml)`);

// Lightweight role-course projection for Footer.jsx — see the file header comment for why this
// exists. Generated, not hand-written: it can never list a role that doesn't really exist, link to a
// wrong href, or drift from the real title.
const roleGroupsLite = ROLE_GROUPS.map((g) => ({
  key: g.key,
  label: g.label,
  href: g.href,
  roles: g.roles.map((r) => ({ href: r.href, title: r.title })),
}));
const roleCoursesLiteJs =
  `// GENERATED by scripts/generate-sitemap.mjs (\`npm run sitemap\` / \`npm run build\`) — do not hand-edit.\n` +
  `// A lightweight {label, href, roles: [{title, href}]} projection of src/data/roleCourses/*.js (~4,300\n` +
  `// lines of full role-page content combined), for Footer.jsx's link columns, which need only titles and\n` +
  `// hrefs. Importing the real files there for that used to pull all of it into the main bundle on every\n` +
  `// page, since Footer is on every page. RoleCoursePage.jsx still imports the real, full data — this file\n` +
  `// is for link text only.\n` +
  `export const ROLE_GROUPS_LITE = ${JSON.stringify(roleGroupsLite, null, 2)};\n`;
writeFileSync(resolve(__dirname, '../src/data/roleCoursesLite.js'), roleCoursesLiteJs);
console.log(`✓ Wrote src/data/roleCoursesLite.js (${ROLE_COURSES.length} roles across ${ROLE_GROUPS.length} groups)`);

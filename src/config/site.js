// Central site/SEO configuration. To move the site to a new domain later, change exactly one thing —
// the VITE_SITE_URL environment variable (.env, or the project's Environment Variables setting on
// Vercel) — and every canonical URL, Open Graph tag, Twitter card, JSON-LD block, sitemap entry and
// robots.txt reference on the site follows automatically. Nothing else needs editing.
//
// Falls back to the domain the site is actually deployed to today (not an aspirational future one) if
// the env var isn't set, so a build without it configured still produces correct, working URLs.
const FALLBACK_SITE_URL = 'https://skillit-courses.vercel.app';

export const SITE_URL = (import.meta.env.VITE_SITE_URL || FALLBACK_SITE_URL).replace(/\/+$/, '');

export const SITE_NAME = 'Skill IT Education';
export const SITE_DESCRIPTION =
  'Skill IT Education, in Madhapur, Hyderabad, trains graduates, IT professionals and career switchers in Cyber Security, SOC Analyst, AI & ML, Data Science and Data Analytics — with hands-on labs, real projects and a real-time internship.';
export const SITE_LOGO = `${SITE_URL}/img/skill-it-logo.png`;

// Builds an absolute URL from a site-relative path: absoluteUrl('/cyber-security') ->
// "https://.../cyber-security". Used for every canonical, Open Graph, Twitter and JSON-LD URL, so
// none of them ever hard-code the domain directly — they all resolve against SITE_URL above.
export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString();
}

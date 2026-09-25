import { PROGRAMMES_LITE } from './programmesLite.js';

// Lightweight per-programme blog metadata — just enough for the header's "Career Insights" dropdown
// (name + article count per programme), split out from blogPosts.js on purpose. blogPosts.js pulls in
// every full article body (src/data/blog/*.js — ~120 posts, ~1.4MB combined) to build BLOG_POSTS, and
// that whole module used to load in the main bundle just because Header.jsx (always on screen, never
// lazy) imported BLOG_COURSES from the same file. Names and durations come from the generated
// programmesLite.js (also so the five full course files stay out of the main bundle).
//
// Counts are hand-kept here rather than computed from BLOG_POSTS.length, by design — computing them
// would require importing the very thing this file exists to avoid. `npm run sitemap`
// (scripts/generate-sitemap.mjs) cross-checks these numbers against the real BLOG_POSTS length on
// every build and fails loudly if a post was added or removed without updating this file, so it can't
// silently drift.
const COUNTS = {
  'cyber-security': 28,
  'ai-ml': 23,
  'data-science': 23,
  'soc-analyst': 23,
  'data-analyst': 23,
};

export const BLOG_COURSES = PROGRAMMES_LITE.map((p) => ({ ...p, count: COUNTS[p.key] }));

import cyberSecurity from './cyberSecurity.js';
import aiMl from './aiMl.js';
import dataScience from './dataScience.js';
import socAnalyst from './socAnalyst.js';
import dataAnalyst from './dataAnalyst.js';

// One "how do I become a ___" post per programme — content is assembled from that course's own
// COPY/CAREER_TRACKS/MODULES data (see BlogPostPage.jsx), not hand-written per post, so it never
// drifts out of sync with the course pages themselves.
export const BLOG_POSTS = [
  { course: cyberSecurity, slug: 'how-to-become-a-cyber-security-professional', role: 'Cyber Security Professional' },
  { course: aiMl, slug: 'how-to-become-an-ai-ml-engineer', role: 'AI/ML Engineer' },
  { course: dataScience, slug: 'how-to-become-a-data-scientist', role: 'Data Scientist' },
  { course: socAnalyst, slug: 'how-to-become-a-soc-analyst', role: 'SOC Analyst' },
  { course: dataAnalyst, slug: 'how-to-become-a-data-analyst', role: 'Data Analyst' },
];

export function blogPostForCourse(course) {
  return BLOG_POSTS.find((p) => p.course.routeBase === course.routeBase);
}

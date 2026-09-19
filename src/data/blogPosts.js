import cyberSecurity from './cyberSecurity.js';
import aiMl from './aiMl.js';
import dataScience from './dataScience.js';
import socAnalyst from './socAnalyst.js';
import dataAnalyst from './dataAnalyst.js';

const STARTS_WITH_VOWEL = /^[aeiou]/i;
const article = (word) => (STARTS_WITH_VOWEL.test(word) ? 'an' : 'a');

// Six short, student-search-intent questions per programme — "how do I become X", "which academy
// is best", "how do I prepare", "what do I need to learn", "how long does it take", "is it a good
// career" — the things students actually type into a search engine. Answers are assembled from
// that course's own COPY/MODULES/CAREER_TRACKS data, not hand-written, so they can't drift out of
// sync with the course page itself.
function buildInsights(course, role) {
  const { COPY, MODULES, CAREER_TRACKS } = course;
  const firstModules = MODULES.slice(0, 3).map((m) => m.title).join(', ');
  const lastModule = MODULES[MODULES.length - 1].title;
  const topRoles = CAREER_TRACKS.flatMap((t) => t.roles).slice(0, 3).join(', ');

  return [
    {
      q: `How can I become ${article(role)} ${role}?`,
      a: `Complete a structured, hands-on ${COPY.courseShortName} programme — ${COPY.heroStats[0].value.toLowerCase()}, ${MODULES.length} modules, real projects and a ${COPY.heroStats[2].value.toLowerCase()} real-time internship — then apply with a portfolio of finished work, not just a certificate. That combination is what gets you past the first screening.`,
      anchor: 'about',
    },
    {
      q: `Which is the best academy for ${COPY.courseShortName} training in Hyderabad?`,
      a: `Look for an institute that teaches with live labs and real projects, not recorded videos and slides. Skill IT Education, in Madhapur, Hyderabad, runs a ${COPY.heroStats[0].value.toLowerCase()} ${COPY.courseShortName} programme built exactly that way, with a real-time internship included — not an add-on you pay extra for.`,
      anchor: 'about',
    },
    {
      q: `What do I need to learn to become ${article(role)} ${role}?`,
      a: `Start with ${firstModules}, and work through to ${lastModule} — ${MODULES.length} modules in total, each closing with a lab or a real project instead of a quiz. See the full ${COPY.courseShortName} curriculum below for the complete module-by-module path.`,
      anchor: 'learn',
    },
    {
      q: `How long does it take to become job-ready as ${article(role)} ${role}?`,
      a: `About ${COPY.heroStats[0].value.toLowerCase()} with a structured programme — ${COPY.heroStats[1].value.toLowerCase()} of learning plus ${COPY.heroStats[2].value.toLowerCase()} of real-time internship — instead of the three to four years a traditional degree takes to get you to the same starting point.`,
      anchor: 'timeline',
    },
    {
      q: `How do I prepare for a ${role} job interview?`,
      a: `Build a portfolio of real projects you can explain in detail, get hands-on with the exact tools listed in job postings, and practice walking through your work out loud. The ${COPY.courseShortName} programme's hands-on modules and internship are built to give you real material to talk about, not just theory to recite.`,
      anchor: 'spotlight',
    },
    {
      q: `Is ${COPY.courseShortName} a good career choice right now?`,
      a: `Yes — it opens roles like ${topRoles}, with entry-to-mid salaries typically in the ${COPY.salaryIndia.range} range in India (${COPY.salaryGlobal.range} globally). Demand keeps growing as more companies build this work into their core teams instead of outsourcing it.`,
      anchor: 'salary',
    },
  ];
}

// One programme entry per course — role is the plain-language job title used in "how do I become
// ___" questions, slug is the full-guide page at /blog/:slug, insights are the short FAQ list shown
// inline on the /blog index. sectionOrder gives each post its own structure (same six sections,
// different sequence) so the five long-form pages don't read as one template stamped out five
// times — BlogPostPage.jsx renders sections in this order.
export const BLOG_POSTS = [
  {
    course: cyberSecurity,
    slug: 'how-to-become-a-cyber-security-professional',
    role: 'Cyber Security Professional',
    sectionOrder: ['about', 'spotlight', 'roles', 'learn', 'timeline', 'salary'],
  },
  {
    course: aiMl,
    slug: 'how-to-become-an-ai-ml-engineer',
    role: 'AI/ML Engineer',
    sectionOrder: ['about', 'roles', 'spotlight', 'learn', 'salary', 'timeline'],
  },
  {
    course: dataScience,
    slug: 'how-to-become-a-data-scientist',
    role: 'Data Scientist',
    sectionOrder: ['about', 'learn', 'spotlight', 'roles', 'timeline', 'salary'],
  },
  {
    course: socAnalyst,
    slug: 'how-to-become-a-soc-analyst',
    role: 'SOC Analyst',
    sectionOrder: ['about', 'roles', 'learn', 'spotlight', 'salary', 'timeline'],
  },
  {
    course: dataAnalyst,
    slug: 'how-to-become-a-data-analyst',
    role: 'Data Analyst',
    sectionOrder: ['about', 'roles', 'salary', 'learn', 'spotlight', 'timeline'],
  },
].map((p) => ({ ...p, insights: buildInsights(p.course, p.role) }));

export function blogPostForCourse(course) {
  return BLOG_POSTS.find((p) => p.course.routeBase === course.routeBase);
}

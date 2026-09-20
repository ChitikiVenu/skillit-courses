import cyberSecurity from './cyberSecurity.js';
import aiMl from './aiMl.js';
import dataScience from './dataScience.js';
import socAnalyst from './socAnalyst.js';
import dataAnalyst from './dataAnalyst.js';
import cyberSecurityCorePosts from './blog/cyberSecurity.js';
import csSalary1 from './blog/csSalary1.js';
import csSalary2 from './blog/csSalary2.js';
import csSalary3 from './blog/csSalary3.js';
import csSalary4 from './blog/csSalary4.js';
import aiMlCorePosts from './blog/aiMl.js';
import aiSeo1 from './blog/aiSeo1.js';
import aiSeo2 from './blog/aiSeo2.js';
import aiSeo3 from './blog/aiSeo3.js';
import dataScienceCorePosts from './blog/dataScience.js';
import dsSeo1 from './blog/dsSeo1.js';
import dsSeo2 from './blog/dsSeo2.js';
import dsSeo3 from './blog/dsSeo3.js';
import socAnalystCorePosts from './blog/socAnalyst.js';
import socSeo1 from './blog/socSeo1.js';
import socSeo2 from './blog/socSeo2.js';
import socSeo3 from './blog/socSeo3.js';
import dataAnalystPosts from './blog/dataAnalyst.js';

// The Cyber Security programme's salary and career questions (20 more articles) sit after its core posts.
const cyberSecurityPosts = [...cyberSecurityCorePosts, ...csSalary1, ...csSalary2, ...csSalary3, ...csSalary4];

// The AI & ML programme's search-question articles (15 more) sit after its core posts.
const aiMlPosts = [...aiMlCorePosts, ...aiSeo1, ...aiSeo2, ...aiSeo3];

// The SOC Analyst programme's search-question articles (15 more) sit after its core posts.
const socAnalystPosts = [...socAnalystCorePosts, ...socSeo1, ...socSeo2, ...socSeo3];

// The Data Science programme's search-question articles (15 more) sit after its core posts.
const dataSciencePosts = [...dataScienceCorePosts, ...dsSeo1, ...dsSeo2, ...dsSeo3];

// One entry per programme, in the order the filter buttons show them. Each programme has its own
// file of long-form posts under ./blog/ — one standalone article per student question.
const PROGRAMME_POSTS = [
  { course: cyberSecurity, posts: cyberSecurityPosts },
  { course: aiMl, posts: aiMlPosts },
  { course: dataScience, posts: dataSciencePosts },
  { course: socAnalyst, posts: socAnalystPosts },
  { course: dataAnalyst, posts: dataAnalystPosts },
];

export const BLOG_COURSES = PROGRAMME_POSTS.map(({ course, posts }) => ({
  key: course.routeBase.slice(1),
  name: course.COPY.courseShortName,
  course,
  count: posts.length,
}));

// The "All Insights" view is a deliberate mix so no two neighbouring cards in the 4-wide grid come from
// the same programme. Each programme's posts are spread evenly along the sequence, any neighbours that
// still share a programme are separated, and every programme keeps its own posts in their original
// order. Filtering to one programme shows just its posts, in that same order.
export const BLOG_POSTS = (() => {
  const tagged = PROGRAMME_POSTS.map(({ course, posts }) =>
    posts.map((p) => ({ ...p, courseKey: course.routeBase.slice(1), courseName: course.COPY.courseShortName, course })),
  );
  const seq = tagged
    .flatMap((list, c) => list.map((_, i) => ({ c, at: (i + 0.5) / list.length })))
    .sort((a, b) => a.at - b.at || a.c - b.c)
    .map((s) => s.c);
  for (let k = 1; k < seq.length; k += 1) {
    if (seq[k] === seq[k - 1]) {
      let j = k + 1;
      while (j < seq.length && seq[j] === seq[k]) j += 1;
      if (j < seq.length) [seq[k], seq[j]] = [seq[j], seq[k]];
    }
  }
  const next = tagged.map(() => 0);
  return seq.map((c) => tagged[c][next[c]++]);
})();

// The course page's "how do I become..." link points at that programme's first post.
export function blogPostForCourse(course) {
  return BLOG_POSTS.find((p) => p.course.routeBase === course.routeBase);
}

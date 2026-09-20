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
import aiMlPosts from './blog/aiMl.js';
import dataSciencePosts from './blog/dataScience.js';
import socAnalystPosts from './blog/socAnalyst.js';
import dataAnalystPosts from './blog/dataAnalyst.js';

// The Cyber Security programme's salary and career questions (20 more articles) sit after its core posts.
const cyberSecurityPosts = [...cyberSecurityCorePosts, ...csSalary1, ...csSalary2, ...csSalary3, ...csSalary4];

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
// the same programme. The smaller programmes are dealt out round-robin (post 1 of each, then post 2 of
// each, ...), and the biggest programme's posts are then spread evenly between them, which gives the
// zigzag. Filtering to one programme keeps that programme's posts in their original order.
export const BLOG_POSTS = (() => {
  const tagged = PROGRAMME_POSTS.map(({ course, posts }) =>
    posts.map((p) => ({ ...p, courseKey: course.routeBase.slice(1), courseName: course.COPY.courseShortName, course })),
  );
  const biggest = tagged.reduce((a, b) => (b.length > a.length ? b : a));
  const rest = tagged.filter((list) => list !== biggest);
  const dealt = [];
  for (let i = 0; i < Math.max(0, ...rest.map((list) => list.length)); i += 1) {
    rest.forEach((list) => {
      if (list[i]) dealt.push(list[i]);
    });
  }
  const slotted = [
    ...biggest.map((post, i) => ({ post, at: (i + 0.5) / biggest.length, tie: 0 })),
    ...dealt.map((post, i) => ({ post, at: (i + 0.5) / dealt.length, tie: 1 })),
  ];
  return slotted.sort((a, b) => a.at - b.at || a.tie - b.tie).map((s) => s.post);
})();

// The course page's "how do I become..." link points at that programme's first post.
export function blogPostForCourse(course) {
  return BLOG_POSTS.find((p) => p.course.routeBase === course.routeBase);
}

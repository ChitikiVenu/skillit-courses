import cyberSecurity from './cyberSecurity.js';
import aiMl from './aiMl.js';
import dataScience from './dataScience.js';
import socAnalyst from './socAnalyst.js';
import dataAnalyst from './dataAnalyst.js';
import cyberSecurityPosts from './blog/cyberSecurity.js';
import aiMlPosts from './blog/aiMl.js';
import dataSciencePosts from './blog/dataScience.js';
import socAnalystPosts from './blog/socAnalyst.js';
import dataAnalystPosts from './blog/dataAnalyst.js';

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

// The "All Insights" view is a deliberate mix: round-robin across programmes (post 1 of each, then
// post 2 of each, ...), so no two neighbouring cards in the 4-wide grid come from the same
// programme. Filtering to one programme keeps that programme's posts in their original order.
export const BLOG_POSTS = (() => {
  const tagged = PROGRAMME_POSTS.map(({ course, posts }) =>
    posts.map((p) => ({ ...p, courseKey: course.routeBase.slice(1), courseName: course.COPY.courseShortName, course })),
  );
  const rounds = Math.max(...tagged.map((list) => list.length));
  const mixed = [];
  for (let i = 0; i < rounds; i += 1) {
    tagged.forEach((list) => {
      if (list[i]) mixed.push(list[i]);
    });
  }
  return mixed;
})();

// The course page's "how do I become..." link points at that programme's first post.
export function blogPostForCourse(course) {
  return BLOG_POSTS.find((p) => p.course.routeBase === course.routeBase);
}

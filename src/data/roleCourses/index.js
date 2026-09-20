import cyberSecurity from '../cyberSecurity.js';
import aiMl from '../aiMl.js';
import dataScience from '../dataScience.js';
import socAnalyst from '../socAnalyst.js';
import dataAnalyst from '../dataAnalyst.js';
import cyberSecurityRoles from './cyber-security.js';
import aiMlRoles from './ai-ml.js';
import dataScienceRoles from './data-science.js';
import socAnalystRoles from './soc-analyst.js';
import dataAnalystRoles from './data-analyst.js';

// A "role course" is one job role inside a main programme: the same programme, duration and fees, with the
// learning path arranged around that role. Each role's data (src/data/roleCourses/<programme>.js) points into
// the parent programme's real modules, so what a role page teaches always comes from the programme's own syllabus.
// Order matches the footer: Cyber Security, SOC, AI/ML, Data Science, Data Analyst.
const PARENTS = [
  { key: 'cyber-security', label: 'Cyber Security', course: cyberSecurity, roles: cyberSecurityRoles },
  { key: 'soc-analyst', label: 'SOC Analyst', course: socAnalyst, roles: socAnalystRoles },
  { key: 'ai-ml', label: 'AI / ML', course: aiMl, roles: aiMlRoles },
  { key: 'data-science', label: 'Data Science', course: dataScience, roles: dataScienceRoles },
  { key: 'data-analyst', label: 'Data Analyst', course: dataAnalyst, roles: dataAnalystRoles },
];

export const ROLE_GROUPS = PARENTS.map(({ key, label, course, roles }) => ({
  key,
  label,
  course,
  href: course.routeBase,
  roles: roles.map((r) => ({ ...r, parentKey: key, parentLabel: label, course, href: `/courses/${key}/${r.slug}` })),
}));

export const ROLE_COURSES = ROLE_GROUPS.flatMap((g) => g.roles);

export function roleCourse(parentKey, slug) {
  return ROLE_COURSES.find((r) => r.parentKey === parentKey && r.slug === slug);
}

// The roles that belong to a main programme, by its route (for example "/soc-analyst").
export function rolesForCourse(routeBase) {
  return ROLE_GROUPS.find((g) => g.course.routeBase === routeBase)?.roles ?? [];
}

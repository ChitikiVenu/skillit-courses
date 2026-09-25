import { ROLE_GROUPS_LITE } from './roleCoursesLite.js';

// The lightweight (title, href, first three skills) role list for a programme, by its route. Pages that
// only show role links use this instead of the full role-course files (~250KB), which only the role
// pages themselves need.
export function rolesLiteForCourse(routeBase) {
  return ROLE_GROUPS_LITE.find((g) => g.href === routeBase)?.roles ?? [];
}

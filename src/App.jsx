import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import cyberSecurity from './data/cyberSecurity.js';
import aiMl from './data/aiMl.js';
import socAnalyst from './data/socAnalyst.js';
import dataScience from './data/dataScience.js';
import dataAnalyst from './data/dataAnalyst.js';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { DATA_COMPLIANCE_POLICY, PRIVACY_POLICY } from './data/policies.js';

// Every page is lazy — split into its own chunk instead of the main bundle, so a visitor only
// downloads the page they actually landed on (plus Layout/Header/Footer, which stay eager since
// they're on every page anyway). Layout.jsx wraps the <Outlet/> in the one <Suspense> boundary this
// needs, so only the routed content area shows the fallback while its chunk loads — the header and
// footer never do. The five course data files stay eager here (not lazy): the footer's role-course
// listing (Footer.jsx -> roleCourses/index.js) needs all five on every page anyway, so deferring them
// per-route would just add complexity for no real saving.
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));
const CourseHomePage = lazy(() => import('./pages/CourseHomePage.jsx'));
const CourseModulePage = lazy(() => import('./pages/CourseModulePage.jsx'));
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage.jsx'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage.jsx'));
const RoleCoursePage = lazy(() => import('./pages/RoleCoursePage.jsx'));
const PolicyPage = lazy(() => import('./pages/PolicyPage.jsx'));
const FaqPage = lazy(() => import('./pages/FaqPage.jsx'));
const PlaceholderPage = lazy(() => import('./pages/PlaceholderPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const CareersPage = lazy(() => import('./pages/CareersPage.jsx'));
const CareerDetailPage = lazy(() => import('./pages/CareerDetailPage.jsx'));

const COURSES = [cyberSecurity, aiMl, socAnalyst, dataScience, dataAnalyst];

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          {/* the programmes page is now the home page; keep old /programmes links working */}
          <Route path="/programmes" element={<Navigate to="/" replace />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/courses/:parent/:role" element={<RoleCoursePage />} />
          <Route path="/privacy-policy" element={<PolicyPage policy={PRIVACY_POLICY} related={{ to: '/data-compliance-policy', label: 'Data Compliance Policy' }} />} />
          <Route path="/data-compliance-policy" element={<PolicyPage policy={DATA_COMPLIANCE_POLICY} related={{ to: '/privacy-policy', label: 'Privacy Policy' }} />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:slug" element={<CareerDetailPage />} />
          {/* linked from the footer; content to be added */}
          <Route path="/about-us" element={<PlaceholderPage title="About Us" path="/about-us" />} />
          <Route path="/refund-policy" element={<PlaceholderPage title="Refund Policy" path="/refund-policy" />} />
          {COURSES.map((course) => (
            <Route key={course.routeBase} path={course.routeBase} element={<CourseHomePage key={course.routeBase} course={course} />} />
          ))}
          {COURSES.map((course) => (
            <Route key={`${course.routeBase}/:slug`} path={`${course.routeBase}/:slug`} element={<CourseModulePage course={course} />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

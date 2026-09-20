import { Navigate, Route, Routes } from 'react-router-dom';
import cyberSecurity from './data/cyberSecurity.js';
import aiMl from './data/aiMl.js';
import socAnalyst from './data/socAnalyst.js';
import dataScience from './data/dataScience.js';
import dataAnalyst from './data/dataAnalyst.js';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import LandingPage from './pages/LandingPage.jsx';
import CourseHomePage from './pages/CourseHomePage.jsx';
import CourseModulePage from './pages/CourseModulePage.jsx';
import BlogIndexPage from './pages/BlogIndexPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import RoleCoursePage from './pages/RoleCoursePage.jsx';
import PolicyPage from './pages/PolicyPage.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';
import { DATA_COMPLIANCE_POLICY, PRIVACY_POLICY } from './data/policies.js';
import NotFoundPage from './pages/NotFoundPage.jsx';

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
          {/* linked from the footer; content to be added */}
          <Route path="/about-us" element={<PlaceholderPage title="About Us" path="/about-us" />} />
          <Route path="/faqs" element={<PlaceholderPage title="FAQs" path="/faqs" />} />
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

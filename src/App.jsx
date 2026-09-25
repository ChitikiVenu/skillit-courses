import { lazy, use } from 'react';
import { PROGRAMMES_LITE } from './data/programmesLite.js';
import { getHome } from './homeModule.js';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { DATA_COMPLIANCE_POLICY, PRIVACY_POLICY, REFUND_POLICY } from './data/policies.js';

// Every page is lazy — split into its own chunk instead of the main bundle, so a visitor only
// downloads the page they actually landed on (plus Layout/Header/Footer, which stay eager since
// they're on every page anyway). Layout.jsx wraps the <Outlet/> in the one <Suspense> boundary this
// needs, so only the routed content area shows the fallback while its chunk loads — the header and
// footer never do. The five course data files stay eager here (not lazy): the footer's role-course
// listing (Footer.jsx -> roleCourses/index.js) needs all five on every page anyway, so deferring them
// per-route would just add complexity for no real saving.
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));
function HomeRoute() {
  const Home = getHome();
  return Home ? <Home /> : <LandingPage />;
}
const CourseHomePage = lazy(() => import('./pages/CourseHomePage.jsx'));
const CourseModulePage = lazy(() => import('./pages/CourseModulePage.jsx'));
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage.jsx'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage.jsx'));
const RoleCoursePage = lazy(() => import('./pages/RoleCoursePage.jsx'));
const PolicyPage = lazy(() => import('./pages/PolicyPage.jsx'));
const FaqPage = lazy(() => import('./pages/FaqPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const CareersPage = lazy(() => import('./pages/CareersPage.jsx'));
const CareerDetailPage = lazy(() => import('./pages/CareerDetailPage.jsx'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));

// The five full course files (~180KB) are no longer in the main bundle: a programme's data is fetched
// the first time one of its pages is visited (the home page loads them all, as part of its own chunk).
const COURSE_LOADERS = {
  '/cyber-security': () => import('./data/cyberSecurity.js'),
  '/ai-ml': () => import('./data/aiMl.js'),
  '/data-science': () => import('./data/dataScience.js'),
  '/soc-analyst': () => import('./data/socAnalyst.js'),
  '/data-analyst': () => import('./data/dataAnalyst.js'),
};
const courseCache = new Map();
function loadCourse(routeBase) {
  if (!courseCache.has(routeBase)) courseCache.set(routeBase, COURSE_LOADERS[routeBase]().then((m) => m.default));
  return courseCache.get(routeBase);
}
// Suspends (inside Layout's boundary) until the programme's data has arrived, then renders the page.
function CourseRoute({ routeBase, Page }) {
  return <Page course={use(loadCourse(routeBase))} />;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeRoute />} />
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
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/refund-policy" element={<PolicyPage policy={REFUND_POLICY} related={{ to: '/faqs', label: 'FAQs' }} />} />
          {PROGRAMMES_LITE.map(({ routeBase }) => (
            <Route key={routeBase} path={routeBase} element={<CourseRoute key={routeBase} routeBase={routeBase} Page={CourseHomePage} />} />
          ))}
          {PROGRAMMES_LITE.map(({ routeBase }) => (
            <Route key={`${routeBase}/:slug`} path={`${routeBase}/:slug`} element={<CourseRoute key={routeBase} routeBase={routeBase} Page={CourseModulePage} />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

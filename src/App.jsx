import { Route, Routes } from 'react-router-dom';
import cyberSecurity from './data/cyberSecurity.js';
import aiMl from './data/aiMl.js';
import socAnalyst from './data/socAnalyst.js';
import dataScience from './data/dataScience.js';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import LandingPage from './pages/LandingPage.jsx';
import CourseHomePage from './pages/CourseHomePage.jsx';
import CourseModulePage from './pages/CourseModulePage.jsx';
import ComingSoonPage from './pages/ComingSoonPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const COURSES = [cyberSecurity, aiMl, socAnalyst, dataScience];

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          {COURSES.map((course) => (
            <Route key={course.routeBase} path={course.routeBase} element={<CourseHomePage course={course} />} />
          ))}
          {COURSES.map((course) => (
            <Route key={`${course.routeBase}/:slug`} path={`${course.routeBase}/:slug`} element={<CourseModulePage course={course} />} />
          ))}
          <Route path="/data-analyst" element={<ComingSoonPage programme="Data Analyst" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

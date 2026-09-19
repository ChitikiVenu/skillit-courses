import { Route, Routes } from 'react-router-dom';
import cyberSecurity from './data/cyberSecurity.js';
import aiMl from './data/aiMl.js';
import socAnalyst from './data/socAnalyst.js';
import dataScience from './data/dataScience.js';
import dataAnalyst from './data/dataAnalyst.js';
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import CourseHomePage from './pages/CourseHomePage.jsx';
import CourseModulePage from './pages/CourseModulePage.jsx';
import BlogIndexPage from './pages/BlogIndexPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const COURSES = [cyberSecurity, aiMl, socAnalyst, dataScience, dataAnalyst];

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/programmes" element={<LandingPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
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

import { Suspense, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AdvisorModal from './AdvisorModal.jsx';
import FloatingActions from './FloatingActions.jsx';
import PromoBar from './PromoBar.jsx';
import ScrollTopButton from './ScrollTopButton.jsx';
import AboutDots from './AboutDots.jsx';
import AboutRope from './AboutRope.jsx';
import { SiaHelp } from './RopeCards.jsx';
import { useSectionTint } from '../useSectionTint.js';

// Every page in App.jsx is React.lazy()-loaded (its own chunk instead of the main bundle), so the
// routed content needs one Suspense boundary. It sits here, around just the <Outlet/>, so the header
// and footer (always the same, never lazy) never flash to a fallback — only the page area between
// them does, and only while its chunk is still downloading (usually imperceptible once the main
// bundle is cached).
function PageFallback() {
  return <div className="page-fallback" aria-hidden="true" />;
}

export default function Layout() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const storyRef = useRef(null);
  const { pathname } = useLocation();
  useSectionTint(storyRef, pathname);
  return (
    <>
      <PromoBar />
      <Header />
      <div className="site-story" ref={storyRef}>
        <AboutDots />
        <AboutRope key={pathname} storyRef={storyRef} />
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
        <SiaHelp />
        <Footer onBook={() => setBookingOpen(true)} />
      </div>
      <FloatingActions onBook={() => setBookingOpen(true)} />
      <ScrollTopButton />
      <AdvisorModal open={bookingOpen} onClose={() => setBookingOpen(false)} title="Book a free session" />
    </>
  );
}

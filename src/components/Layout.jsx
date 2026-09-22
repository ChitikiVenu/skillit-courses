import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AdvisorModal from './AdvisorModal.jsx';
import FloatingActions from './FloatingActions.jsx';
import PromoBar from './PromoBar.jsx';

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
  return (
    <>
      <PromoBar />
      <Header />
      <Suspense fallback={<PageFallback />}>
        <Outlet />
      </Suspense>
      <Footer onBook={() => setBookingOpen(true)} />
      <FloatingActions onBook={() => setBookingOpen(true)} />
      <AdvisorModal open={bookingOpen} onClose={() => setBookingOpen(false)} title="Book a free session" />
    </>
  );
}

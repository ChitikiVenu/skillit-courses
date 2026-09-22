import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AdvisorModal from './AdvisorModal.jsx';
import FloatingActions from './FloatingActions.jsx';
import PromoBar from './PromoBar.jsx';

export default function Layout() {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <>
      <PromoBar />
      <Header />
      <Outlet />
      <Footer onBook={() => setBookingOpen(true)} />
      <FloatingActions onBook={() => setBookingOpen(true)} />
      <AdvisorModal open={bookingOpen} onClose={() => setBookingOpen(false)} title="Book a free session" />
    </>
  );
}

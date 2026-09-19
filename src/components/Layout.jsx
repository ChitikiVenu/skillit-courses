import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AdvisorModal from './AdvisorModal.jsx';

export default function Layout() {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <>
      <Header onBook={() => setBookingOpen(true)} />
      <Outlet />
      <Footer />
      <AdvisorModal open={bookingOpen} onClose={() => setBookingOpen(false)} title="Book a free session" />
    </>
  );
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics.js';

// Client-side routing doesn't reset scroll position, or honor a `#hash` target, on navigation
// the way a full page load does — so each route change needs to do both explicitly.
//
// A `#hash` target can move while the page settles (fonts load, the home funnel measures and resizes itself), so the
// jump is repeated a few times over the first second, and stops as soon as the visitor scrolls or presses a key.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    const id = decodeURIComponent(hash.slice(1));
    const jump = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView();
      else window.scrollTo(0, 0);
    };
    jump();
    const timers = [150, 450, 1000].map((ms) => setTimeout(jump, ms));
    const stop = () => timers.forEach(clearTimeout);
    const events = ['wheel', 'touchstart', 'keydown', 'mousedown'];
    events.forEach((e) => window.addEventListener(e, stop, { passive: true, once: true }));
    return () => {
      stop();
      events.forEach((e) => window.removeEventListener(e, stop));
    };
  }, [pathname, hash]);
  return null;
}

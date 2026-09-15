import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Client-side routing doesn't reset scroll position, or honor a `#hash` target, on navigation
// the way a full page load does — so each route change needs to do both explicitly.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

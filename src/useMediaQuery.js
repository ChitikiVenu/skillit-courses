import { useEffect, useState } from 'react';

// What counts as the desktop version of the site.
//
// The desktop layout is for laptops and desktops (mouse or trackpad = `pointer: fine`), which keep
// it down to 800px of CSS width. That matters because browser zoom and Windows display scaling
// shrink the CSS width: a 1366px screen at 150% zoom is only ~911px wide, and it must still show the
// main site. Touch devices (phones and tablets, `pointer: coarse`) switch to the mobile layout at
// the usual widths, and anything narrower than 800px is mobile whatever the device.
//
// The same rules are written out in style.css; keep the two in step.
export const DESKTOP_HEADER = '(min-width: 961px), (min-width: 800px) and (pointer: fine)';
export const DESKTOP_FLOW = '(min-width: 1151px), (min-width: 800px) and (pointer: fine)';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    setMatches(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

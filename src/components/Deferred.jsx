import { useEffect, useRef, useState } from 'react';

// Renders a below-the-fold section only when it is about to scroll into view. The section's code is a
// separate chunk fetched at that moment (`loader` is a dynamic import), so the first screen has less
// JavaScript to download, parse and run. Until then a blank block of `minHeight` keeps the page layout
// stable, so nothing jumps when the real section arrives.
export default function Deferred({ loader, minHeight = 400, rootMargin = '800px 0px' }) {
  const ref = useRef(null);
  const [Comp, setComp] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let cancelled = false;
    const load = () =>
      loader().then((m) => {
        if (!cancelled) setComp(() => m.default);
      });
    if (typeof IntersectionObserver === 'undefined') {
      load();
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          load();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, [loader, rootMargin]);

  if (Comp) return <Comp />;
  return <div ref={ref} style={{ minHeight }} aria-hidden="true" />;
}

import { useEffect } from 'react';

// Light, solid section backgrounds would hide the coloured dots drawn behind the page, so make them slightly
// see-through. Dark or gradient backgrounds are left alone.
export function useSectionTint(rootRef, pathname) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const tint = () => {
      root.querySelectorAll('main section').forEach((el) => {
        if (el.dataset.tinted) return;
        const cs = getComputedStyle(el);
        const m = cs.backgroundColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        if (!m || cs.backgroundImage !== 'none') return;
        const [r, g, b] = [+m[1], +m[2], +m[3]];
        if ((r + g + b) / 3 < 225) return;
        el.dataset.tinted = '1';
        el.style.backgroundColor = `rgba(${r},${g},${b},.55)`;
      });
    };
    const timers = [setTimeout(tint, 400), setTimeout(tint, 1400)];
    return () => timers.forEach(clearTimeout);
  }, [rootRef, pathname]);
}

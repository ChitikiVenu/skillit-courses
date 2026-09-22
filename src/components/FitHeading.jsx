import { useLayoutEffect, useRef } from 'react';

// A page headline that always stays on `maxLines` lines. It starts at the stylesheet's font size
// and steps down one pixel at a time until the text fits (no line overflows the column and the
// height is no more than maxLines lines), then re-fits whenever the column width changes or the
// web font finishes loading. Pass `html` for a headline with its own <br> line break (the course
// titles), or children for plain text that wraps on its own (the module titles).
export default function FitHeading({ html, children, maxLines = 2, minPx = 15, className: extraClassName }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let lastWidth = -1;
    let cancelled = false;

    const fit = () => {
      el.style.fontSize = '';
      const cs = getComputedStyle(el);
      let size = parseFloat(cs.fontSize);
      const ratio = (parseFloat(cs.lineHeight) || size * 1.15) / size;
      const tooBig = () => el.scrollWidth > el.clientWidth + 1 || el.offsetHeight > size * ratio * maxLines + 2;
      while (tooBig() && size > minPx) {
        size -= 1;
        el.style.fontSize = `${size}px`;
      }
    };

    fit();
    const ro = new ResizeObserver(() => {
      const w = Math.round(el.parentElement?.clientWidth ?? 0);
      if (w !== lastWidth) {
        lastWidth = w;
        fit();
      }
    });
    if (el.parentElement) ro.observe(el.parentElement);
    document.fonts?.ready.then(() => {
      if (!cancelled) fit();
    });
    return () => {
      cancelled = true;
      ro.disconnect();
    };
  }, [html, children, maxLines, minPx]);

  const className = `fit-h1${html ? ' fit-h1-nowrap' : ''}${extraClassName ? ` ${extraClassName}` : ''}`;
  return html ? (
    <h1 ref={ref} className={className} dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
}

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import CodeStrip from './CodeStrip.jsx';
import { DESKTOP_FLOW, DESKTOP_HEADER, useMediaQuery } from '../useMediaQuery.js';

// The home page tablet: the Skill IT benefits are typed at the top of the screen and a small code
// editor types away in the bottom fifth (CodeStrip).
//
// What the tablet types out at the top. Each entry is typed as its own line; earlier lines
// stay exactly where they are while the next one is typed underneath. After the last line the
// screen holds for a moment and then starts again from the top.
const SEGMENTS = [
  { kind: 'title', text: '5 Advanced Certification Programmes' },
  { kind: 'sub', text: 'What You Get at Skill IT Education' },
  { kind: 'item', text: '01 — Expert Training' },
  { kind: 'desc', text: 'Learn from experienced industry professionals.' },
  { kind: 'item', text: '02 — 1:1 Doubt Support' },
  { kind: 'desc', text: 'Get personalized guidance whenever you need it.' },
  { kind: 'item', text: '03 — Real-Time Projects' },
  { kind: 'desc', text: 'Build practical skills through industry-based projects.' },
  { kind: 'item', text: '04 — Internship Opportunities' },
  { kind: 'desc', text: 'Access paid and unpaid internship opportunities.' },
  { kind: 'item', text: '05 — Placement Assistance' },
  { kind: 'desc', text: 'Get career guidance and placement support.' },
];

const HOLD_AT_END = 3500;
const FADE_MS = 450;

// "01 — Expert Training": the number (and the dash) is coloured, the rest is the item title.
function Segment({ kind, text, cursor }) {
  let body = text;
  if (kind === 'item') {
    const dash = text.indexOf(' —');
    body =
      dash === -1 ? (
        <span className="typed-num">{text}</span>
      ) : (
        <>
          <span className="typed-num">{text.slice(0, dash + 2)}</span>
          {text.slice(dash + 2)}
        </>
      );
  }
  return (
    <div className={`typed-${kind}`}>
      {body}
      {cursor && <span className="typed-cursor" />}
    </div>
  );
}

export default function TypedScreen({ active, animate = true }) {
  const [view, setView] = useState({ done: animate ? 0 : SEGMENTS.length, partial: '', fading: false });
  const engine = useRef({ i: 0, c: 0, timer: null });
  const bodyRef = useRef(null);
  const innerRef = useRef(null);
  const screenRef = useRef(null);
  const ghostRef = useRef(null);
  const [shift, setShift] = useState(0);
  // The code strip is left out on the mobile layout (phones and small touch tablets).
  const showCode = useMediaQuery(DESKTOP_HEADER);
  // On the tall desktop tablet the text is sized so the finished screen fills everything above the code strip.
  const fill = useMediaQuery(DESKTOP_FLOW);

  useEffect(() => {
    if (!animate || !active) return undefined;
    const e = engine.current;

    const publish = (fading = false) => setView({ done: e.i, partial: SEGMENTS[e.i]?.text.slice(0, e.c) ?? '', fading });

    const tick = () => {
      let delay;
      const seg = SEGMENTS[e.i];
      if (!seg) {
        // Finished the last line: hold, fade out, start over from the first line.
        e.timer = setTimeout(() => {
          publish(true);
          e.timer = setTimeout(() => {
            e.i = 0;
            e.c = 0;
            publish(false);
            e.timer = setTimeout(tick, 400);
          }, FADE_MS);
        }, HOLD_AT_END);
        return;
      }
      if (e.c < seg.text.length) {
        e.c += 1;
        const ch = seg.text[e.c - 1];
        delay = 30 + Math.random() * 38 + (' ,—'.includes(ch) ? 35 : 0);
      } else {
        e.i += 1;
        e.c = 0;
        delay = 260 + Math.random() * 160;
      }
      publish(false);
      e.timer = setTimeout(tick, delay);
    };

    e.timer = setTimeout(tick, 350);
    return () => clearTimeout(e.timer);
  }, [active, animate]);

  // If the text is taller than the screen (the small tablets), slide it up so the line being typed
  // stays visible. On the tall home-page tablet everything fits and nothing moves.
  useLayoutEffect(() => {
    const body = bodyRef.current;
    const inner = innerRef.current;
    if (!body || !inner) return;
    const bottomPad = 14;
    const overflow = inner.offsetTop + inner.offsetHeight - (body.clientHeight - bottomPad);
    setShift((prev) => {
      const next = Math.max(0, Math.round(overflow));
      return prev === next ? prev : next;
    });
  }, [view]);

  // Fill mode: find the largest text scale at which the complete, fully typed content (an invisible copy of
  // it, so the size doesn't change while typing) still fits the space above the code strip.
  useLayoutEffect(() => {
    const body = bodyRef.current;
    const ghost = ghostRef.current;
    const screen = screenRef.current;
    if (!fill || !body || !ghost || !screen) return undefined;
    const fit = () => {
      const bodyH = body.clientHeight;
      if (!bodyH) return;
      const top = Math.round(bodyH * 0.05);
      const target = bodyH - top - 18;
      let lo = 0.8;
      let hi = 2.6;
      for (let k = 0; k < 12; k += 1) {
        const mid = (lo + hi) / 2;
        screen.style.setProperty('--typed-scale', mid.toFixed(3));
        if (ghost.offsetHeight <= target) lo = mid;
        else hi = mid;
      }
      screen.style.setProperty('--typed-scale', lo.toFixed(3));
      screen.style.setProperty('--typed-top', `${top}px`);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(body);
    document.fonts?.ready.then(fit);
    return () => {
      ro.disconnect();
      screen.style.removeProperty('--typed-scale');
      screen.style.removeProperty('--typed-top');
    };
  }, [fill]);

  const finished = view.done >= SEGMENTS.length;

  return (
    <div className="typed-screen" aria-hidden="true" ref={screenRef}>
      <div className="typed-bar">
        <span className="typed-dots">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className="typed-stage">
        <div className="typed-body" ref={bodyRef}>
          {fill && (
            <div className="typed-inner typed-ghost" ref={ghostRef}>
              {SEGMENTS.map((sg, i) => (
                <Segment key={i} kind={sg.kind} text={sg.text} />
              ))}
            </div>
          )}
          <div
            className={`typed-inner${view.fading ? ' is-fading' : ''}`}
            ref={innerRef}
            style={{ transform: `translateY(${-shift}px)` }}
          >
            {SEGMENTS.slice(0, view.done).map((s, i) => (
              <Segment key={i} kind={s.kind} text={s.text} />
            ))}
            {!finished && animate && <Segment kind={SEGMENTS[view.done].kind} text={view.partial} cursor />}
          </div>
        </div>
        {showCode && (
          <div className="code-strip">
            <CodeStrip active={active} animate={animate} />
          </div>
        )}
      </div>
    </div>
  );
}

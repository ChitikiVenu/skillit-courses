import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// What the tablet on the home page types out. Each entry is typed as its own line; earlier lines
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
  const [shift, setShift] = useState(0);

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

  const finished = view.done >= SEGMENTS.length;

  return (
    <div className="typed-screen" aria-hidden="true">
      <div className="typed-bar">
        <span className="typed-dots">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className="typed-body" ref={bodyRef}>
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
    </div>
  );
}

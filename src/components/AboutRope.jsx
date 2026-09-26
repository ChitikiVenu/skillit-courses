import { useEffect, useRef, useState } from 'react';
import { Boy, Confetti, Girl } from './AboutCartoons.jsx';

// Design units, before the phone scale-down: the lane is 110 wide, the rope hangs at x = 78.
const LANE_W = 110;
const BOY_TOP = 78;
const BOY_HAND = 52; // the boy's fist sits this far below his top
const GIRL_H = 112;
const GIRL_HAND = 8; // where the girl's hands hold the rope, from her top

const BOY_LINES = ["I've got the rope. Go on!", 'Real projects, not just slides.', 'Practice is the whole point.'];
const GIRL_LINES = ['Wheee! Keep scrolling!', 'Hands-on labs? Yes please!', "I'm learning by doing!", 'Next section, here I come!'];

// The boy holds a rope at the first section; the girl slides down it as the visitor scrolls, section by
// section. Positions are written straight to the DOM on scroll (no React re-render), and a numbered flag
// marks each section on the rope. `storyRef` is the element that wraps all the sections.
export default function AboutRope({ storyRef, sections }) {
  const laneRef = useRef(null);
  const innerRef = useRef(null);
  const girlRef = useRef(null);
  const threadRef = useRef(null);
  const [marks, setMarks] = useState([]);
  const [landed, setLanded] = useState(false);
  const [bubble, setBubble] = useState(null);
  const lineIdx = useRef({ boy: 0, girl: 0 });
  const bubbleTimer = useRef();

  useEffect(() => {
    const story = storyRef.current;
    const lane = laneRef.current;
    const inner = innerRef.current;
    const girl = girlRef.current;
    const thread = threadRef.current;
    if (!story || !lane || !inner || !girl || !thread) return undefined;

    let k = 1;
    let storyH = 0;
    let raf = 0;
    let movingTimer;
    const minY = BOY_TOP + BOY_HAND + 26;

    const place = () => {
      raf = 0;
      const top = story.getBoundingClientRect().top;
      const maxY = Math.max(minY, storyH - GIRL_H - 10);
      // She follows the middle of the screen; over the last stretch of the page she eases down to the very bottom.
      const vh = window.innerHeight;
      const toEnd = document.documentElement.scrollHeight - vh - window.scrollY;
      const ease = Math.max(0, Math.min(1, 1 - toEnd / (vh * 0.6)));
      const extra = ease * Math.max(0, vh * 0.5 - GIRL_H * k * 0.5 - 10);
      const y = Math.max(minY, Math.min(maxY, (vh * 0.5 + extra - top) / k - GIRL_H / 2));
      girl.style.transform = `translate3d(0,${y.toFixed(1)}px,0)`;
      thread.style.height = `${(y + GIRL_HAND - (BOY_TOP + BOY_HAND)).toFixed(1)}px`;
      const done = y >= maxY - 1;
      setLanded((prev) => (prev === done ? prev : done));
    };

    const measure = () => {
      k = inner.getBoundingClientRect().width / inner.offsetWidth || 1;
      const sr = story.getBoundingClientRect();
      // The lane runs from the top of the story to the very bottom of the page (through the form and footer).
      const laneH = document.documentElement.scrollHeight - (sr.top + window.scrollY);
      lane.style.height = `${laneH}px`;
      storyH = laneH / k;
      setMarks(
        sections
          .map((s) => {
            const el = document.getElementById(s.id);
            return el ? { ...s, top: (el.getBoundingClientRect().top - sr.top) / k } : null;
          })
          .filter(Boolean),
      );
      place();
    };

    const onScroll = () => {
      inner.classList.add('is-moving');
      clearTimeout(movingTimer);
      movingTimer = setTimeout(() => inner.classList.remove('is-moving'), 200);
      if (!raf) raf = requestAnimationFrame(place);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    const ro = new ResizeObserver(measure);
    ro.observe(story);
    ro.observe(document.body);
    // Fonts and images shift the section heights after load.
    const late = setTimeout(measure, 800);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      ro.disconnect();
      clearTimeout(movingTimer);
      clearTimeout(late);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [storyRef, sections]);

  useEffect(() => () => clearTimeout(bubbleTimer.current), []);

  const say = (who) => {
    const lines = who === 'boy' ? BOY_LINES : GIRL_LINES;
    const i = lineIdx.current[who]++ % lines.length;
    setBubble({ who, text: lines[i] });
    clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(null), 2600);
  };

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div className={`about-lane${landed ? ' is-landed' : ''}`} ref={laneRef}>
      <div className="about-lane-inner" ref={innerRef} style={{ width: LANE_W }}>
        <button type="button" className="about-char about-boy" style={{ top: BOY_TOP }} onClick={() => say('boy')} aria-label="Say hello to the boy holding the rope">
          <Boy />
        </button>
        <div className="about-thread" ref={threadRef} style={{ top: BOY_TOP + BOY_HAND }} />
        {marks.map((m, i) => (
          <button key={m.id} type="button" className="about-flag" style={{ top: m.top + 6 }} onClick={() => jump(m.id)} aria-label={`Jump to: ${m.label}`}>
            {i + 1}
          </button>
        ))}
        <div className="about-girl-wrap" ref={girlRef}>
          <button type="button" className="about-char about-girl" onClick={() => say('girl')} aria-label="Say hello to the girl sliding down the rope">
            <Girl />
          </button>
          {bubble?.who === 'girl' && (
            <div className="about-bubble about-bubble-girl" role="status">
              {bubble.text}
            </div>
          )}
        </div>
        {bubble?.who === 'boy' && (
          <div className="about-bubble about-bubble-boy" role="status">
            {bubble.text}
          </div>
        )}
        {landed && <Confetti />}
      </div>
    </div>
  );
}

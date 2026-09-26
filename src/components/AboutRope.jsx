import { useEffect, useRef, useState } from 'react';
import { Boy, Girl } from './AboutCartoons.jsx';

// Design units, before the phone scale-down: the lane is 110 wide, the rope hangs at x = 78.
const LANE_W = 110;
const GIRL_TOP = 78; // the girl stands at the top, level with the page's H1
const GIRL_HAND = 52; // her fist sits this far below her top
const BOY_H = 112;
const BOY_HAND = 8; // where the boy's hand grips the rope, from his top
const BOY_W = 64;
const BOY_FEET = 105;
const ROPE_X = 78;

const GIRL_LINES = ["I've got the rope. Go on!", 'Real projects, not just slides.', 'Practice is the whole point.'];
const BOY_LINES = ['Wheee! Keep scrolling!', 'Hands-on labs? Yes please!', "I'm learning by doing!", 'Next section, here I come!'];

const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

// The girl holds the rope at the top. The boy slides down it, one hand on the rope, as the visitor scrolls,
// section by section. At the footer he lets go, walks along the Skill IT logo, jumps to the WhatsApp icon and
// stands there with his hands on his hips, smiling at the viewer. Positions are written straight to the DOM
// (no React re-render while scrolling); a numbered flag marks each section on the rope.
export default function AboutRope({ storyRef, sections }) {
  const laneRef = useRef(null);
  const innerRef = useRef(null);
  const boyRef = useRef(null);
  const threadRef = useRef(null);
  const [marks, setMarks] = useState([]);
  const [pose, setPose] = useState('hang');
  const [bubble, setBubble] = useState(null);
  const lineIdx = useRef({ boy: 0, girl: 0 });
  const bubbleTimer = useRef();

  useEffect(() => {
    const story = storyRef.current;
    const lane = laneRef.current;
    const inner = innerRef.current;
    const boy = boyRef.current;
    const thread = threadRef.current;
    if (!story || !lane || !inner || !boy || !thread) return undefined;

    const threadTop = GIRL_TOP + GIRL_HAND;
    const minY = threadTop + 28;
    let k = 1;
    let laneH = 0;
    let raf = 0;
    let movingTimer;
    let release = null; // { standY, logoL, logoR, waX, waY } once measured, else null
    let phase = 'rope'; // 'rope' | 'running' | 'done'
    let token = 0;
    let frozenThread = 0;

    const setBoy = (x, y) => {
      boy.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
    };

    const stopSequence = () => {
      token += 1;
      phase = 'rope';
      setPose('hang');
      setBubble((b) => (b?.who === 'boy' && b.pinned ? null : b));
    };

    const tween = (from, to, ms, step, myToken) =>
      new Promise((resolve) => {
        const t0 = performance.now();
        const tick = (now) => {
          if (myToken !== token) return resolve(false);
          const t = Math.min(1, (now - t0) / ms);
          step(from, to, t);
          if (t < 1) requestAnimationFrame(tick);
          else resolve(true);
        };
        requestAnimationFrame(tick);
      });

    const runSequence = async (startX, startY) => {
      const my = ++token;
      phase = 'running';
      frozenThread = threadTop + 0; // rope stays hanging where he let go
      const r = release;
      const arc = (a, b, t, h) => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t - Math.sin(Math.PI * t) * h });
      // 1. let go and hop onto the logo
      setPose('jump');
      const A = { x: startX, y: startY };
      const B = { x: r.logoL, y: r.standY };
      if (!(await tween(A, B, 520, (a, b, t) => { const p = arc(a, b, ease(t), 30); setBoy(p.x, p.y); }, my))) return;
      // 2. walk along the logo
      setPose('walk');
      const walkTo = Math.max(r.logoL, r.logoR);
      const dist = Math.abs(walkTo - B.x);
      if (dist > 4 && !(await tween(B.x, walkTo, Math.max(600, (dist / 110) * 1000), (a, b, t) => setBoy(a + (b - a) * t, r.standY), my))) return;
      // 3. jump to the WhatsApp icon (if it is on screen)
      let endX = walkTo;
      let endY = r.standY;
      if (r.waX != null) {
        setPose('jump');
        const from = { x: walkTo, y: r.standY };
        const to = { x: r.waX, y: r.waY };
        if (!(await tween(from, to, 900, (a, b, t) => { const p = arc(a, b, ease(t), 70); setBoy(p.x, p.y); }, my))) return;
        endX = to.x;
        endY = to.y;
      }
      // 4. hands on hips, smiling at the viewer, with a caption
      setBoy(endX, endY);
      setPose('stand');
      phase = 'done';
      release.endX = endX;
      release.endY = endY;
      setBubble({ who: 'boy', text: 'Still need anything?', pinned: true });
    };

    const place = () => {
      raf = 0;
      if (phase !== 'rope' && !release) return;
      const top = story.getBoundingClientRect().top;
      const vh = window.innerHeight;
      const toEnd = document.documentElement.scrollHeight - vh - window.scrollY;
      const easeEnd = Math.max(0, Math.min(1, 1 - toEnd / (vh * 0.6)));
      const extra = easeEnd * Math.max(0, vh * 0.5 - BOY_H * k * 0.5 - 10);
      const followY = Math.max(minY, Math.min(laneH / 1 - BOY_H - 10, (vh * 0.5 + extra - top) / k - BOY_H / 2));
      const atFooter = release && followY >= release.standY - 2;
      if (phase === 'rope') {
        setBoy(ROPE_X - 36, followY);
        thread.style.height = `${(followY + BOY_HAND - threadTop).toFixed(1)}px`;
        if (atFooter) runSequence(ROPE_X - 36, followY);
      } else if (release && followY < release.standY - 70) {
        // scrolled back up: he climbs back onto the rope
        stopSequence();
        setBoy(ROPE_X - 36, followY);
        thread.style.height = `${(followY + BOY_HAND - threadTop).toFixed(1)}px`;
      }
    };

    const measure = () => {
      k = inner.getBoundingClientRect().width / inner.offsetWidth || 1;
      const sr = story.getBoundingClientRect();
      const ir = inner.getBoundingClientRect();
      const docH = document.documentElement.scrollHeight;
      laneH = (docH - (sr.top + window.scrollY)) / k;
      lane.style.height = `${laneH * k}px`;
      setMarks(
        sections
          .map((s) => {
            const el = document.getElementById(s.id);
            return el ? { ...s, top: (el.getBoundingClientRect().top - sr.top) / k } : null;
          })
          .filter(Boolean),
      );
      const logo = document.querySelector('.footer-brand img');
      const wa = document.querySelector('.footer-whatsapp');
      if (logo) {
        const lr = logo.getBoundingClientRect();
        const wr = wa ? wa.getBoundingClientRect() : null;
        const waOn = wr && wr.width > 0 && wr.height > 0;
        release = {
          standY: (lr.top - sr.top) / k - BOY_FEET,
          logoL: (lr.left - ir.left) / k + 8,
          logoR: (lr.right - ir.left) / k - BOY_W - 8,
          waX: waOn ? (wr.left + wr.width / 2 - ir.left) / k - BOY_W / 2 : null,
          waY: waOn ? (wr.top - sr.top) / k - BOY_FEET : null,
        };
      } else release = null;
      if (phase === 'done' && release && release.waX != null) {
        setBoy(release.waX, release.waY);
      } else if (phase === 'done' && release) {
        setBoy(release.logoR, release.standY);
      }
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
    const late = setTimeout(measure, 800);
    return () => {
      token += 1;
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
    if (who === 'boy' && pose === 'stand') return;
    const lines = who === 'girl' ? GIRL_LINES : BOY_LINES;
    const i = lineIdx.current[who]++ % lines.length;
    setBubble({ who, text: lines[i] });
    clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble((b) => (b && !b.pinned ? null : b)), 2600);
  };

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div className="about-lane" ref={laneRef}>
      <div className="about-lane-inner" ref={innerRef} style={{ width: LANE_W }}>
        <button type="button" className="about-char about-girl" style={{ top: GIRL_TOP }} onClick={() => say('girl')} aria-label="Say hello to the girl holding the rope">
          <Girl />
        </button>
        {bubble?.who === 'girl' && (
          <div className="about-bubble about-bubble-girl" style={{ top: GIRL_TOP + 8 }} role="status">
            {bubble.text}
          </div>
        )}
        <div className="about-thread" ref={threadRef} style={{ top: GIRL_TOP + GIRL_HAND }} />
        {marks.map((m, i) => (
          <button key={m.id} type="button" className="about-flag" style={{ top: m.top + 6 }} onClick={() => jump(m.id)} aria-label={`Jump to: ${m.label}`}>
            {i + 1}
          </button>
        ))}
        <div className={`about-boy-wrap pose-${pose}`} ref={boyRef}>
          <button type="button" className="about-char about-boy" onClick={() => say('boy')} aria-label="Say hello to the boy">
            <Boy pose={pose} />
          </button>
          {bubble?.who === 'boy' && (
            <div className={`about-bubble about-bubble-boy${bubble.pinned ? ' is-caption' : ''}`} role="status">
              {bubble.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

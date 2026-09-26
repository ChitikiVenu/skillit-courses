import { useEffect, useRef, useState } from 'react';
import { PHONE } from '../constants.js';
import { Boy, Girl } from './AboutCartoons.jsx';

// Design units, before the phone scale-down. The rope hangs at x = 78.
const LANE_W = 146;
const GIRL_LEFT = -2;
const GIRL_TOP = 78; // both characters start standing level, at the page's H1
const ROPE_X = 78;
const PULLEY_Y = GIRL_TOP - 4;
const BOY_LEFT = 71; // the boy's SVG left edge; his raised hand meets the rope
const BOY_H = 112;
const BOY_W = 64;
const BOY_FEET = 105;

const SIA_LINES = ["Hi, I'm Sia!", 'Hands-on labs? Yes please!', "I'm learning by doing!", 'A little more down…'];
const GIRL_LINES = ["Go on, I'll hold the rope!", 'Real projects, not just slides.', 'Practice is the whole point.'];

const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// The girl stands at the top holding the rope. Sia, the boy, stands on a small plate on the rope, one hand on it,
// waving, and is lowered as the visitor scrolls. He speaks at the start, a little further down, and at the third
// section. At the footer he jumps off, walks along the Skill IT logo, jumps to the WhatsApp icon and stands there
// with his hands on his hips, smiling, and offers help with the phone number. Positions are written straight to
// the DOM (no React re-render while scrolling); a numbered flag marks each section on the rope.
export default function AboutRope({ storyRef, sections }) {
  const laneRef = useRef(null);
  const innerRef = useRef(null);
  const boyRef = useRef(null);
  const threadRef = useRef(null);
  const [marks, setMarks] = useState([]);
  const [pose, setPose] = useState('ride');
  const [boySays, setBoySays] = useState(null); // { text, kind: 'side' | 'caption' }
  const [girlSays, setGirlSays] = useState(null);
  const lineIdx = useRef({ boy: 0, girl: 0 });
  const timers = useRef({});

  const show = (who, payload, ms) => {
    const set = who === 'boy' ? setBoySays : setGirlSays;
    clearTimeout(timers.current[who]);
    set(payload);
    if (ms) timers.current[who] = setTimeout(() => set(null), ms);
  };
  const showRef = useRef(show);
  showRef.current = show;

  useEffect(() => {
    const story = storyRef.current;
    const lane = laneRef.current;
    const inner = innerRef.current;
    const boy = boyRef.current;
    const thread = threadRef.current;
    if (!story || !lane || !inner || !boy || !thread) return undefined;

    let k = 1;
    let laneH = 0;
    let laneTopPage = 0;
    let markTops = [];
    let raf = 0;
    let movingTimer;
    let release = null;
    let phase = 'rope'; // 'rope' | 'running' | 'done'
    let token = 0;
    let stage = '';

    const setBoy = (x, y) => {
      boy.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
    };
    const say = (who, payload, ms) => showRef.current(who, payload, ms);

    const stopSequence = () => {
      token += 1;
      phase = 'rope';
      stage = '';
      setPose('ride');
      say('boy', null);
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

    const runSequence = async (startY) => {
      const my = ++token;
      phase = 'running';
      say('boy', null);
      say('girl', null);
      const r = release;
      const arc = (a, b, t, h) => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t - Math.sin(Math.PI * t) * h });
      // 1. jump off the plate onto the logo
      setPose('jump');
      const A = { x: BOY_LEFT, y: startY };
      const B = { x: r.logoL, y: r.standY };
      if (!(await tween(A, B, 560, (a, b, t) => { const p = arc(a, b, ease(t), 34); setBoy(p.x, p.y); }, my))) return;
      // 2. walk along the logo
      setPose('walk');
      const walkTo = Math.max(r.logoL, r.logoR);
      const dist = Math.abs(walkTo - B.x);
      if (dist > 4 && !(await tween(B.x, walkTo, Math.max(600, (dist / 110) * 1000), (a, b, t) => setBoy(a + (b - a) * t, r.standY), my))) return;
      // 3. jump to the WhatsApp icon, if it is on screen
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
      // 4. hands on hips, smiling at the viewer, offering help
      setBoy(endX, endY);
      setPose('stand');
      phase = 'done';
      say('boy', { kind: 'caption' });
    };

    const speakForStage = (s) => {
      if (s === stage) return;
      stage = s;
      if (s === 'intro') {
        say('boy', { kind: 'side', text: "Hi, I'm Sia! Let's go down…" }, 3400);
        clearTimeout(timers.current.girlIntro);
        timers.current.girlIntro = setTimeout(() => say('girl', { text: "Go on, I'll hold the rope!" }, 3000), 1900);
      } else if (s === 'second') {
        say('boy', { kind: 'side', text: 'A little more down, I want to go!' }, 3400);
      } else if (s === 'third') {
        say('boy', { kind: 'side', text: 'Still a little further down…' }, 3400);
      }
    };

    const place = () => {
      raf = 0;
      if (phase !== 'rope' && !release) return;
      const s = window.scrollY;
      const vh = window.innerHeight;
      const t = clamp(s / (vh * 0.8), 0, 1);
      // He starts level with the girl; over the first stretch of scrolling he settles to the middle of the screen.
      const c0 = laneTopPage + (GIRL_TOP + BOY_H / 2) * k;
      let vy = c0 + (vh * 0.5 - c0) * ease(t);
      const toEnd = document.documentElement.scrollHeight - vh - s;
      const easeEnd = clamp(1 - toEnd / (vh * 0.6), 0, 1);
      vy += easeEnd * Math.max(0, vh * 0.5 - BOY_H * k * 0.5 - 10);
      const y = clamp((s + vy - laneTopPage) / k - BOY_H / 2, GIRL_TOP, Math.max(GIRL_TOP, laneH - BOY_H - 10));
      const atFooter = release && y >= release.standY - 2;
      if (phase === 'rope') {
        setBoy(BOY_LEFT, y);
        thread.style.height = `${(y + BOY_FEET - PULLEY_Y).toFixed(1)}px`;
        if (atFooter) {
          runSequence(y);
          return;
        }
        const passed = markTops.filter((m) => m <= y + BOY_FEET - 20).length;
        speakForStage(passed >= 3 ? 'third' : passed >= 1 ? 'second' : s < 80 ? 'intro' : '');
      } else if (release && y < release.standY - 70) {
        stopSequence(); // scrolled back up: he climbs back onto the plate
        setBoy(BOY_LEFT, y);
        thread.style.height = `${(y + BOY_FEET - PULLEY_Y).toFixed(1)}px`;
      }
    };

    const measure = () => {
      k = inner.getBoundingClientRect().width / inner.offsetWidth || 1;
      const sr = story.getBoundingClientRect();
      const ir = inner.getBoundingClientRect();
      laneTopPage = sr.top + window.scrollY;
      laneH = (document.documentElement.scrollHeight - laneTopPage) / k;
      lane.style.height = `${laneH * k}px`;
      const m = sections
        .map((sec) => {
          const el = document.getElementById(sec.id);
          return el ? { ...sec, top: (el.getBoundingClientRect().top - sr.top) / k } : null;
        })
        .filter(Boolean);
      markTops = m.map((x) => x.top);
      setMarks(m);
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
      if (phase === 'done' && release) setBoy(release.waX ?? release.logoR, release.waX != null ? release.waY : release.standY);
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
      Object.values(timers.current).forEach(clearTimeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [storyRef, sections]);

  const tap = (who) => {
    if (who === 'boy' && pose === 'stand') return;
    const lines = who === 'girl' ? GIRL_LINES : SIA_LINES;
    const i = lineIdx.current[who]++ % lines.length;
    show(who, who === 'boy' ? { kind: 'side', text: lines[i] } : { text: lines[i] }, 2800);
  };

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div className="about-lane" ref={laneRef}>
      <div className="about-lane-inner" ref={innerRef} style={{ width: LANE_W }}>
        <div className="about-beam" style={{ left: ROPE_X - 26, top: PULLEY_Y - 12 }} aria-hidden="true">
          <span className="about-pulley" />
        </div>
        <button type="button" className="about-char about-girl" style={{ top: GIRL_TOP, left: GIRL_LEFT }} onClick={() => tap('girl')} aria-label="Say hello to the girl holding the rope">
          <Girl />
        </button>
        {girlSays && (
          <div className="about-bubble about-bubble-girl" style={{ top: GIRL_TOP - 46 }} role="status">
            {girlSays.text}
          </div>
        )}
        <div className="about-thread" ref={threadRef} style={{ top: PULLEY_Y }}>
          <span className="about-plate" aria-hidden="true" />
        </div>
        {marks.map((m, i) => (
          <button key={m.id} type="button" className="about-flag" style={{ top: m.top + 6 }} onClick={() => jump(m.id)} aria-label={`Jump to: ${m.label}`}>
            {i + 1}
          </button>
        ))}
        <div className={`about-boy-wrap pose-${pose}`} ref={boyRef}>
          <button type="button" className="about-char about-boy" onClick={() => tap('boy')} aria-label="Say hello to Sia, the boy on the rope">
            <Boy pose={pose} />
          </button>
          {boySays?.kind === 'side' && (
            <div className="about-bubble about-bubble-boy" role="status">
              {boySays.text}
            </div>
          )}
          {boySays?.kind === 'caption' && (
            <div className="about-bubble about-bubble-boy is-caption" role="status">
              <strong>Still need anything?</strong>
              <span>I&rsquo;m happy to help &mdash; call me!</span>
              <a href={`tel:${PHONE.replace(/\s+/g, '')}`}>&#9742; {PHONE}</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

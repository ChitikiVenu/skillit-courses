import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPostForCourse } from '../data/blogPosts.js';

const ROW_HEIGHT = 118;
const MODULE_X1 = 40;
const MODULE_X2 = 95;
const LAPTOP_X = 12;
const LAPTOP_ASPECT = 193 / 320;

// Heartbeat timing, in seconds. Every cable carries a "lub" (arrow packet) and a "dub" (round
// packet) once per CYCLE; the lines fire top-to-bottom, STAGGER apart, so the pulse sweeps down
// the fan instead of all cables blinking at once.
const CYCLE = 3.6;
const TRAVEL = 1.5;
const STAGGER = 0.16;
const DUB_LAG = 0.32;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

// One data packet riding a cable from the laptop to a module: a bright head with a fading tail.
// The same animation clock (begin + dur) drives the fade-in, the motion and the arrival ripple,
// so a packet is never visible before it leaves or after it lands.
function Packet({ pathId, delay, kind, tailId }) {
  const frac = TRAVEL / CYCLE;
  const common = { dur: `${CYCLE}s`, begin: `${delay.toFixed(2)}s`, repeatCount: 'indefinite' };
  return (
    <g className={`mf-packet mf-packet-${kind}`} opacity="0">
      <animateMotion
        {...common}
        rotate="auto"
        calcMode="spline"
        keyPoints="0;1;1"
        keyTimes={`0;${frac.toFixed(4)};1`}
        keySplines="0.4 0 0.3 1;0 0 1 1"
      >
        <mpath href={`#${pathId}`} />
      </animateMotion>
      <animate
        {...common}
        attributeName="opacity"
        values="0;1;1;0;0"
        keyTimes={`0;0.04;${(frac * 0.9).toFixed(4)};${frac.toFixed(4)};1`}
      />
      <rect className="mf-tail" x={kind === 'arrow' ? -44 : -28} y="-2" width={kind === 'arrow' ? 44 : 28} height="4" rx="2" fill={`url(#${tailId})`} />
      {kind === 'arrow' ? (
        <>
          <circle className="mf-halo" r="13" />
          <polygon className="mf-head" points="9,0 -5.5,-6.6 -1.6,0 -5.5,6.6" />
        </>
      ) : (
        <>
          <circle className="mf-halo" r="10" />
          <circle className="mf-head" r="4.2" />
        </>
      )}
    </g>
  );
}

// An expanding ring — the visible "beat" at the laptop's hub and on each module's socket.
function Ripple({ cx, cy, from, to, begin }) {
  const dur = `${CYCLE}s`;
  const grow = 0.2;
  return (
    <circle className="mf-ripple" cx={cx} cy={cy} r={from} opacity="0">
      <animate attributeName="r" dur={dur} begin={`${begin.toFixed(2)}s`} repeatCount="indefinite" values={`${from};${to};${to}`} keyTimes={`0;${grow};1`} />
      <animate attributeName="opacity" dur={dur} begin={`${begin.toFixed(2)}s`} repeatCount="indefinite" values="0.75;0;0" keyTimes={`0;${grow};1`} />
    </circle>
  );
}

// Same left-to-right funnel language as the landing page's programme flow: a bigger laptop asks
// "How can I become a ___?", a "Get an Answer" button on its screen leads to that role's blog
// post, and a line runs out to every module in this course — one column, one name + hours +
// Explore Me per module.
export default function ModuleFlow({ course }) {
  const { MODULES, COPY, routeBase } = course;
  const wrapRef = useRef(null);
  const svgRef = useRef(null);
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const [inView, setInView] = useState(false);
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      if (w > 0) setSize(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Don't burn cycles animating a flow nobody can see.
  const animate = inView && !reducedMotion;
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || typeof svg.pauseAnimations !== 'function') return;
    if (visible) svg.unpauseAnimations();
    else svg.pauseAnimations();
  }, [visible, animate, size]);

  const n = MODULES.length;
  const rowY = (i) => (n === 1 ? 50 : 10 + i * (80 / (n - 1)));
  const wrapHeight = Math.max(520, n * ROW_HEIGHT + 140);

  // Cables run from a hub just off the laptop screen to a socket in front of each module card,
  // as smooth S-curves; y2 is the card's vertical centre (cards are centred on rowY).
  const laptopW = Math.max(0.21 * size, 220);
  const x1 = (LAPTOP_X / 100) * size + laptopW * 0.44;
  const y1 = wrapHeight / 2 - laptopW * LAPTOP_ASPECT * 0.06;
  const cardLeft = (MODULE_X1 / 100) * size;
  const x2 = cardLeft - 10;
  const cables = MODULES.map((m, i) => {
    const y2 = (rowY(i) / 100) * wrapHeight;
    const dx = (x2 - x1) * 0.55;
    return {
      slug: m.slug,
      y2,
      delay: i * STAGGER,
      d: `M${x1.toFixed(1)} ${y1.toFixed(1)} C${(x1 + dx).toFixed(1)} ${y1.toFixed(1)} ${(x2 - dx).toFixed(1)} ${y2.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`,
    };
  });

  const post = blogPostForCourse(course);
  const answerHref = post ? `/blog/${post.slug}` : '/blog';
  const gradId = `mf-grad-${uid}`;
  const tailArrowId = `mf-tail-a-${uid}`;
  const tailDotId = `mf-tail-d-${uid}`;

  return (
    <div className={`module-flow-wrap ${inView ? 'in-view' : ''} ${animate ? 'is-flowing' : ''} ${visible ? '' : 'is-offscreen'}`} ref={wrapRef} style={{ height: `${wrapHeight}px` }}>
      {size > 0 && (
        <svg className="module-flow-lines" viewBox={`0 0 ${size} ${wrapHeight}`} preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1={x1} y1="0" x2={x2} y2="0">
              <stop offset="0" style={{ stopColor: 'var(--accent)' }} />
              <stop offset="1" style={{ stopColor: 'var(--accent-2)' }} />
            </linearGradient>
          </defs>
          {cables.map((c) => (
            <g key={c.slug}>
              <path className="mf-cable" d={c.d} stroke={`url(#${gradId})`} />
              <path className="mf-cable-stub" d={`M${x2} ${c.y2} H${cardLeft}`} stroke={`url(#${gradId})`} />
              <path className="mf-flow" d={c.d} stroke={`url(#${gradId})`} />
              <circle className="mf-socket" cx={x2} cy={c.y2} r="4.5" />
            </g>
          ))}
          <circle className="mf-hub-glow" cx={x1} cy={y1} r="11" />
          <circle className="mf-hub" cx={x1} cy={y1} r="5" />
        </svg>
      )}

      {size > 0 && animate && (
        <svg ref={svgRef} className="module-flow-pulses" viewBox={`0 0 ${size} ${wrapHeight}`} preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id={tailArrowId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" style={{ stopColor: 'var(--accent-2)', stopOpacity: 0 }} />
              <stop offset="1" style={{ stopColor: 'var(--accent-2)', stopOpacity: 0.85 }} />
            </linearGradient>
            <linearGradient id={tailDotId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" style={{ stopColor: 'var(--accent)', stopOpacity: 0 }} />
              <stop offset="1" style={{ stopColor: 'var(--accent)', stopOpacity: 0.8 }} />
            </linearGradient>
            {cables.map((c, i) => (
              <path key={c.slug} id={`mf-p-${uid}-${i}`} d={c.d} />
            ))}
          </defs>
          <Ripple cx={x1} cy={y1} from={5} to={30} begin={0} />
          <Ripple cx={x1} cy={y1} from={5} to={22} begin={DUB_LAG} />
          {cables.map((c, i) => (
            <g key={c.slug}>
              <Packet pathId={`mf-p-${uid}-${i}`} delay={c.delay} kind="arrow" tailId={tailArrowId} />
              <Packet pathId={`mf-p-${uid}-${i}`} delay={c.delay + DUB_LAG} kind="dot" tailId={tailDotId} />
              <Ripple cx={x2} cy={c.y2} from={4.5} to={17} begin={c.delay + TRAVEL} />
              <Ripple cx={x2} cy={c.y2} from={4.5} to={13} begin={c.delay + DUB_LAG + TRAVEL} />
            </g>
          ))}
        </svg>
      )}

      <div className="module-flow-laptop" style={{ left: `${LAPTOP_X}%` }}>
        <div className="module-flow-laptop-inner">
          <img src="/img/computer-illustration.png" alt="" width={320} height={193} loading="lazy" />
          <div className="module-flow-screen">
            <p className="module-flow-question">{post ? post.question : `How can I become a ${COPY.courseShortName} professional?`}</p>
            <Link to={answerHref} className="module-flow-answer-btn">
              Get an Answer
            </Link>
          </div>
        </div>
      </div>

      {MODULES.map((m, i) => (
        <Link
          key={m.slug}
          to={`${routeBase}/${m.slug}`}
          className="module-flow-card"
          style={{
            left: `${MODULE_X1}%`,
            width: `${MODULE_X2 - MODULE_X1}%`,
            top: `${rowY(i)}%`,
            '--beat-delay': `${(i * STAGGER + TRAVEL).toFixed(2)}s`,
          }}
        >
          <span className="module-flow-idx">{String(m.number).padStart(2, '0')}</span>
          <h4>{m.title}</h4>
          <div className="module-flow-bottom">
            <span className="module-flow-hrs">
              {m.hours} &middot; {m.duration}
            </span>
            <span className="module-flow-explore-btn">{'{<Explore Me />}'}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

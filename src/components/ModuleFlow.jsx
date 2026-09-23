import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Tablet from './Tablet.jsx';
import { DUB_LAG, Packet, Ripple, STAGGER, TRAVEL, TailGradients, cablePath, usePrefersReducedMotion } from './flowPulse.jsx';
import { blogPostForCourse } from '../data/blogPosts.js';

const ROW_SPACING = 105; // px between card centres — fixed regardless of module count, so a 9-module course isn't cramped while a 6-module course isn't overly spread out
const TOP_PAD = 58; // px from the top of the flow to the first card's centre
const MODULE_X1 = 43;
const MODULE_X2 = 95;
const TABLET_X = 16;
const TABLET_WIDTH_PCT = 28;
const TABLET_MIN_WIDTH = 290;

// Same left-to-right funnel language as the landing page's programme flow: a bigger tablet asks
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
  const wrapHeight = Math.max(520, TOP_PAD * 2 + (n - 1) * ROW_SPACING);
  const rowY = (i) => (n === 1 ? wrapHeight / 2 : TOP_PAD + i * ROW_SPACING);

  // Cables run from a hub on the tablet's right edge to a socket in front of each module card,
  // as smooth S-curves; y2 is the card's vertical centre (cards are centred on rowY).
  const tabletW = Math.max((TABLET_WIDTH_PCT / 100) * size, TABLET_MIN_WIDTH);
  const tabletCentre = Math.max((TABLET_X / 100) * size, TABLET_MIN_WIDTH / 2);
  const x1 = tabletCentre + tabletW / 2 + 8;
  const y1 = wrapHeight / 2;
  const cardLeft = (MODULE_X1 / 100) * size;
  const x2 = cardLeft - 10;
  const cables = MODULES.map((m, i) => {
    const y2 = rowY(i);
    return {
      slug: m.slug,
      y2,
      delay: i * STAGGER,
      d: cablePath(x1, y1, x2, y2),
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
            <TailGradients arrowId={tailArrowId} dotId={tailDotId} />
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

      <div className="module-flow-tablet" style={{ left: `max(${TABLET_X}%, ${TABLET_MIN_WIDTH / 2}px)` }}>
        <Tablet>
          <div className="module-flow-screen">
            <p className="module-flow-question">{post ? post.question : `How can I become a ${COPY.courseShortName} professional?`}</p>
            <Link to={answerHref} className="module-flow-answer-btn">
              Get an Answer
            </Link>
          </div>
        </Tablet>
      </div>

      {MODULES.map((m, i) => (
        <Link
          key={m.slug}
          to={`${routeBase}/${m.slug}`}
          className="module-flow-card"
          style={{
            left: `${MODULE_X1}%`,
            width: `${MODULE_X2 - MODULE_X1}%`,
            top: `${(rowY(i) / wrapHeight) * 100}%`,
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

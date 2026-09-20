import { Fragment, useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Tablet from './Tablet.jsx';
import TypedScreen from './TypedScreen.jsx';
import { DESKTOP_FLOW, useMediaQuery } from '../useMediaQuery.js';
import { DUB_LAG, Packet, Ripple, STAGGER, TRAVEL, TailGradients, cablePath, usePrefersReducedMotion } from './flowPulse.jsx';

const ROW_TOP = 10;
const ROW_BOTTOM = 90;
// Programme boxes and their "Become A" boxes are the same width (28% each).
const TABLET_X = 13.5;
const TABLET_WIDTH_PCT = 25;
const TABLET_MIN_WIDTH = 260;
const PROGRAM_X1 = 34;
const PROGRAM_X2 = 62;
const ROLES_X1 = 66;
const ROLES_X2 = 94;
// On laptops and desktops the funnel is laid out at a design width of at least 1100px and simply
// scaled down to fit a narrower window (for example a browser zoomed to 150%), so it always looks
// like the desktop version instead of dropping to the stacked mobile layout.
const DESIGN_MIN_W = 1100;
const DESIGN_MAX_W = 1400;
// Below this scale the funnel would be too small to read, so it stops shrinking and scrolls a little instead.
const MIN_SCALE = 0.45;
const BOTTOM_GAP = 26;
const FIT_MARGIN_TOP = 8; // .flow-wrap's top margin
// How long a packet takes to hop across the short programme -> roles link.
const RELAY_TRAVEL = 0.6;

// A left-to-right funnel: the tablet sits at the narrow end, a power line fans out to each
// programme box, and a second short line carries on from each programme box to its own roles box
// — the packet that lands on a programme is handed on to its roles. Box positions are CSS
// percentages (row = i / (n-1)); the lines are drawn in real pixels from the measured container
// size so the curves and packets are never stretched. Sized to fit one screen — no scrolling.
export default function ProgrammeFlow({ programmes }) {
  const wrapRef = useRef(null);
  const tabletRef = useRef(null);
  const svgRef = useRef(null);
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const [inView, setInView] = useState(false);
  const [wrapVisible, setWrapVisible] = useState(false);
  const [typing, setTyping] = useState(false);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const fitRef = useRef(null);
  const [outerW, setOuterW] = useState(0);
  const [availH, setAvailH] = useState(0);
  const desktopLayout = useMediaQuery(DESKTOP_FLOW);
  const [tabletBox, setTabletBox] = useState(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setWrapVisible(entry.isIntersecting);
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Width available to the whole funnel; used to scale it down when it is narrower than the design.
  useEffect(() => {
    const el = fitRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver((entries) => setOuterW(Math.round(entries[0].contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Height left in the window below the header, so the funnel can be scaled to fit one screen's height. Browser zoom and window resizes both fire `resize`.
  useEffect(() => {
    const el = fitRef.current;
    if (!el) return undefined;
    const measure = () => {
      // Size the funnel as if it began right under the header: whatever sits above it in the hero (the
      // headline and its gap) pushes the funnel down the page, it does not shrink it.
      const section = el.closest('section');
      const top = section
        ? section.getBoundingClientRect().top + window.scrollY + parseFloat(getComputedStyle(section).paddingTop)
        : el.getBoundingClientRect().top + window.scrollY;
      setAvailH(Math.max(0, Math.round(window.innerHeight - top - BOTTOM_GAP)));
    };
    measure();
    // Browser zoom, window resizes, the toolbar showing/hiding and late layout shifts all change the room left.
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);
    window.visualViewport?.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    const settle = setTimeout(measure, 500);
    return () => {
      clearTimeout(settle);
      window.removeEventListener('resize', measure);
      window.removeEventListener('load', measure);
      window.visualViewport?.removeEventListener('resize', measure);
    };
  }, [desktopLayout]);

  // The editor types while the tablet itself is on screen (on phones the stacked section is far
  // taller than the screen, so the whole section is never 30% visible at once).
  useEffect(() => {
    const el = tabletRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(([entry]) => setTyping(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (width > 0 && height > 0) setDims({ w: width, h: height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // On large screens the tablet is a tall workstation panel whose top and bottom line up with the
  // first and last programme cards. Measure those cards (they can change height as fonts load).
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return undefined;
    const cards = [...wrap.querySelectorAll('.flow-program')];
    if (cards.length < 2) return undefined;
    // Use layout positions (offsetTop/offsetHeight), not on-screen rectangles: the cards slide in with a
    // transform transition, and a rectangle measured mid-slide (for example right after the window is
    // resized across the phone breakpoint) would leave the tablet the wrong size. Each card rests
    // centred on its offsetTop (translateY(-50%)).
    const measure = () => {
      const firstCard = cards[0];
      const lastCard = cards[cards.length - 1];
      const top = Math.round(firstCard.offsetTop - firstCard.offsetHeight / 2);
      const bottom = Math.round(lastCard.offsetTop + lastCard.offsetHeight / 2);
      const height = bottom - top;
      setTabletBox((prev) => (prev && prev.top === top && prev.height === height ? prev : { top, height }));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    cards.forEach((c) => ro.observe(c));
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [programmes.length]);

  // Don't burn cycles animating a flow nobody can see.
  const animate = inView && !reducedMotion;
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || typeof svg.pauseAnimations !== 'function') return;
    if (wrapVisible) svg.unpauseAnimations();
    else svg.pauseAnimations();
  }, [wrapVisible, animate, dims.w, dims.h]);

  const n = programmes.length;
  const rowY = (i) => (n === 1 ? 50 : ROW_TOP + i * ((ROW_BOTTOM - ROW_TOP) / (n - 1)));

  const { w, h } = dims;
  // Hub on the tablet's right edge; a socket just before each programme box; the roles link runs
  // from the programme box's right edge to the roles box's left edge.
  const tabletW = Math.max((TABLET_WIDTH_PCT / 100) * w, TABLET_MIN_WIDTH);
  const hubX = (TABLET_X / 100) * w + tabletW / 2 + 8;
  const hubY = tabletBox ? tabletBox.top + tabletBox.height / 2 : h / 2;
  const progLeft = (PROGRAM_X1 / 100) * w;
  const socketX = progLeft - 10;
  const progRight = (PROGRAM_X2 / 100) * w;
  const rolesLeft = (ROLES_X1 / 100) * w;
  const links = programmes.map((p, i) => {
    const y = (rowY(i) / 100) * h;
    const delay = i * STAGGER;
    return {
      key: p.course.routeBase,
      y,
      delay,
      main: cablePath(hubX, hubY, socketX, y),
      relay: `M${progRight.toFixed(1)} ${y.toFixed(1)} H${rolesLeft.toFixed(1)}`,
      arrive: delay + TRAVEL,
      relayArrive: delay + TRAVEL + RELAY_TRAVEL,
    };
  });

  const gradId = `pf-grad-${uid}`;
  const tailArrowId = `pf-tail-a-${uid}`;
  const tailDotId = `pf-tail-d-${uid}`;

  // Desktop layout: the funnel is drawn at a fixed design size and scaled down so the whole thing
  // (tablet, five programmes, roles) fits the window in one view, with no scrolling. `scaleH` is the
  // scale the window height allows; when it is the limit the design is widened so the funnel still
  // fills the width, then centred.
  const scaleH = desktopLayout && availH && dims.h ? Math.min(1, Math.max(MIN_SCALE, (availH - FIT_MARGIN_TOP) / dims.h)) : 1;
  const designW = desktopLayout && outerW
    ? Math.min(DESIGN_MAX_W / scaleH, Math.max(DESIGN_MIN_W, outerW / scaleH))
    : undefined;
  const scale = designW ? Math.min(scaleH, outerW / designW) : 1;
  // Centre the drawn content, not the box: the tablet's left edge sits ~1% in from the box's left, while the
  // roles boxes stop ~6% short of its right, so the box is nudged right to balance them (the empty strip that overflows is clipped by .flow-outer).
  const spare = designW ? Math.max(0, outerW - designW * scale) : 0;
  const centreOffset = Math.round(spare / 2 + ((100 - ROLES_X2 - (TABLET_X - TABLET_WIDTH_PCT / 2)) / 200) * (designW ?? 0) * scale);
  const wrapStyle = designW
    ? {
        width: designW,
        maxWidth: 'none',
        marginLeft: centreOffset,
        ...(scale < 1 ? { transform: `scale(${scale})`, transformOrigin: 'top left' } : {}),
      }
    : undefined;
  const fitStyle = desktopLayout && dims.h ? { height: Math.round(FIT_MARGIN_TOP + dims.h * scale) } : undefined;

  return (
    <div className="flow-fit" ref={fitRef} style={fitStyle}>
    <div
      className={`flow-wrap ${inView ? 'in-view' : ''} ${animate ? 'is-flowing' : ''} ${wrapVisible ? '' : 'is-offscreen'}`}
      ref={wrapRef}
      style={wrapStyle}
    >
      {w > 0 && (
        <svg className="flow-lines" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1={hubX} y1="0" x2={rolesLeft} y2="0">
              <stop offset="0" style={{ stopColor: 'var(--accent)' }} />
              <stop offset="1" style={{ stopColor: 'var(--accent-2)' }} />
            </linearGradient>
          </defs>
          {links.map((l) => (
            <g key={l.key}>
              <path className="mf-cable" d={l.main} stroke={`url(#${gradId})`} />
              <path className="mf-cable-stub" d={`M${socketX.toFixed(1)} ${l.y.toFixed(1)} H${progLeft.toFixed(1)}`} stroke={`url(#${gradId})`} />
              <path className="mf-flow" d={l.main} stroke={`url(#${gradId})`} />
              <circle className="mf-socket" cx={socketX} cy={l.y} r="4.5" />
              <path className="mf-cable mf-cable-relay" d={l.relay} stroke={`url(#${gradId})`} />
              <path className="mf-flow mf-flow-relay" d={l.relay} stroke={`url(#${gradId})`} />
              <circle className="mf-socket mf-socket-small" cx={progRight} cy={l.y} r="3.5" />
              <circle className="mf-socket mf-socket-small" cx={rolesLeft} cy={l.y} r="3.5" />
            </g>
          ))}
          <circle className="mf-hub-glow" cx={hubX} cy={hubY} r="11" />
          <circle className="mf-hub" cx={hubX} cy={hubY} r="5" />
        </svg>
      )}

      {w > 0 && animate && (
        <svg ref={svgRef} className="flow-pulses" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <TailGradients arrowId={tailArrowId} dotId={tailDotId} />
            {links.map((l, i) => (
              <Fragment key={l.key}>
                <path id={`pf-m-${uid}-${i}`} d={l.main} />
                <path id={`pf-r-${uid}-${i}`} d={l.relay} />
              </Fragment>
            ))}
          </defs>
          <Ripple cx={hubX} cy={hubY} from={5} to={30} begin={0} />
          <Ripple cx={hubX} cy={hubY} from={5} to={22} begin={DUB_LAG} />
          {links.map((l, i) => (
            <g key={l.key}>
              <Packet pathId={`pf-m-${uid}-${i}`} delay={l.delay} kind="arrow" tailId={tailArrowId} />
              <Packet pathId={`pf-m-${uid}-${i}`} delay={l.delay + DUB_LAG} kind="dot" tailId={tailDotId} />
              <Ripple cx={socketX} cy={l.y} from={4.5} to={17} begin={l.arrive} />
              <Ripple cx={socketX} cy={l.y} from={4.5} to={13} begin={l.arrive + DUB_LAG} />
              <Packet pathId={`pf-r-${uid}-${i}`} delay={l.arrive} kind="dot" tailId={tailDotId} travel={RELAY_TRAVEL} />
              <Packet pathId={`pf-r-${uid}-${i}`} delay={l.arrive + DUB_LAG} kind="dot" tailId={tailDotId} travel={RELAY_TRAVEL} />
              <Ripple cx={rolesLeft} cy={l.y} from={3.5} to={13} begin={l.relayArrive} />
              <Ripple cx={rolesLeft} cy={l.y} from={3.5} to={10} begin={l.relayArrive + DUB_LAG} />
            </g>
          ))}
        </svg>
      )}

      <div
        className="flow-tablet"
        style={{ left: `${TABLET_X}%`, ...(tabletBox ? { '--tablet-top': `${tabletBox.top}px`, '--tablet-h': `${tabletBox.height}px` } : {}) }}
        ref={tabletRef}
      >
        <Tablet>
          <TypedScreen active={typing} animate={!reducedMotion} />
        </Tablet>
      </div>

      {programmes.map(({ course, title, blurb, roles }, i) => (
        <Fragment key={course.routeBase}>
          <Link
            to={course.routeBase}
            className="flow-program"
            style={{
              left: `${PROGRAM_X1}%`,
              width: `${PROGRAM_X2 - PROGRAM_X1}%`,
              top: `${rowY(i)}%`,
              transitionDelay: `${0.15 + i * 0.06}s`,
              '--beat-delay': `${links[i].arrive.toFixed(2)}s`,
            }}
          >
            <h4>{title ?? course.COPY.courseShortName}</h4>
            <p>{blurb}</p>
            <div className="flow-program-bottom">
              <span className="flow-duration">{course.COPY.heroStats[0].value}</span>
              <span className="flow-explore-btn">{'{<Explore Me />}'}</span>
            </div>
          </Link>
          <div
            className="flow-roles"
            style={{
              left: `${ROLES_X1}%`,
              width: `${ROLES_X2 - ROLES_X1}%`,
              top: `${rowY(i)}%`,
              transitionDelay: `${0.5 + i * 0.06}s`,
              '--beat-delay': `${links[i].relayArrive.toFixed(2)}s`,
            }}
          >
            <span className="flow-roles-label">Become A</span>
            <div className="flow-roles-list">
              {roles.map((r) => (<span className="flow-role-chip" key={r}>{r}</span>))}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
    </div>
  );
}

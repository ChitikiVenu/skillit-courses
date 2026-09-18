import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const CODE_LINES = [
  'const goal = "your next career";',
  'function buildSkills() {',
  '  learn(handsOnLabs);',
  '  ship(realProjects);',
  '  return jobReady;',
  '}',
];

// The laptop screen types this out, character by character, while the section is in view — and
// picks up from the start again each time it re-enters view. `active` toggles on every scroll
// in/out (not just once), unlike the orbit position below.
function TypingScreen({ active }) {
  const [lines, setLines] = useState([]);
  const [current, setCurrent] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!active) {
      clearTimeout(timeoutRef.current);
      return undefined;
    }
    let lineIndex = 0;
    let charIndex = 0;
    setLines([]);
    setCurrent('');

    function tick() {
      const line = CODE_LINES[lineIndex];
      if (charIndex < line.length) {
        charIndex += 1;
        setCurrent(line.slice(0, charIndex));
        timeoutRef.current = setTimeout(tick, 38);
      } else if (lineIndex < CODE_LINES.length - 1) {
        setLines((prev) => [...prev, line]);
        lineIndex += 1;
        charIndex = 0;
        setCurrent('');
        timeoutRef.current = setTimeout(tick, 260);
      } else {
        setLines((prev) => [...prev, line]);
        timeoutRef.current = setTimeout(() => {
          lineIndex = 0;
          charIndex = 0;
          setLines([]);
          setCurrent('');
          timeoutRef.current = setTimeout(tick, 400);
        }, 1500);
      }
    }
    timeoutRef.current = setTimeout(tick, 300);
    return () => clearTimeout(timeoutRef.current);
  }, [active]);

  return (
    <div className="orbit-screen">
      {lines.map((l, i) => (
        <div className="orbit-code-line" key={i}>
          {l || ' '}
        </div>
      ))}
      <div className="orbit-code-line">
        {current}
        <span className="orbit-cursor" />
      </div>
    </div>
  );
}

// Two concentric rings around the center laptop: programme cards on the inner ring, "You could
// become a" role boxes on the outer ring — each pair at the same angle, joined by a straight bond
// line. Both rings use the same rotate/translate/counter-rotate trick so card and box content stay
// upright no matter where they land on the circle. The line is plain SVG, drawn in the wrap's own
// live measured pixel size (via ResizeObserver) so its endpoints always land exactly on the card and
// role-box positions — a fixed logical size here would drift out of sync with the CSS radii the
// moment the wrap renders narrower than its max-width.
const CARD_RADIUS_FRAC = 0.22; // of wrap width
const ROLES_RADIUS_FRAC = 0.43;

function polarPoint(angleDeg, radius, size) {
  const rad = (angleDeg * Math.PI) / 180;
  const c = size / 2;
  return { x: c + radius * Math.sin(rad), y: c - radius * Math.cos(rad) };
}

export default function ProgrammeOrbit({ programmes }) {
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [typing, setTyping] = useState(false);
  const [size, setSize] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTyping(entry.isIntersecting);
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.35 },
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

  const cardRadius = size * CARD_RADIUS_FRAC;
  const rolesRadius = size * ROLES_RADIUS_FRAC;

  return (
    <div className={`orbit-wrap ${inView ? 'in-view' : ''}`} ref={wrapRef}>
      {size > 0 && (
        <svg className="orbit-lines" viewBox={`0 0 ${size} ${size}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          {programmes.map(({ course }, i) => {
            const angle = i * (360 / programmes.length);
            const from = polarPoint(angle, cardRadius + size * 0.055, size);
            const to = polarPoint(angle, rolesRadius - size * 0.062, size);
            return (
              <g className="orbit-connector" key={course.routeBase}>
                <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
                <circle cx={from.x} cy={from.y} r={Math.max(3, size * 0.0045)} />
                <circle cx={to.x} cy={to.y} r={Math.max(3, size * 0.0045)} />
              </g>
            );
          })}
        </svg>
      )}

      <div className="orbit-center">
        <div className="orbit-center-inner">
          <img src="/img/computer-illustration.png" alt="" width={300} height={181} loading="lazy" />
          <TypingScreen active={typing} />
        </div>
      </div>

      {programmes.map(({ course, blurb, roles }, i) => {
        const angle = i * (360 / programmes.length);
        return (
          <div
            key={course.routeBase}
            className="orbit-item"
            style={{ '--angle': `${angle}deg`, '--card-r': `${cardRadius}px`, '--roles-r': `${rolesRadius}px` }}
          >
            <div className="orbit-card">
              <h4>{course.COPY.courseShortName}</h4>
              <p>{blurb}</p>
              <span className="orbit-duration">{course.COPY.heroStats[0].value}</span>
              <Link to={course.routeBase} className="orbit-explore-btn">
                {'{<Explore Me />}'}
              </Link>
            </div>
            <div className="orbit-roles-box">
              <span className="orbit-roles-label">You could become a:</span>
              <div className="orbit-roles-list">
                {roles.map((r) => (
                  <span className="orbit-role-chip" key={r}>
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

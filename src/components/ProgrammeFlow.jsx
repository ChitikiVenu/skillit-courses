import { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const CODE_LINES = [
  'const goal = "your next career";',
  'learn(handsOnLabs);',
  'ship(realProjects);',
];

// The laptop screen types this out, character by character, while the section is in view.
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
        }, 1200);
      }
    }
    timeoutRef.current = setTimeout(tick, 300);
    return () => clearTimeout(timeoutRef.current);
  }, [active]);

  return (
    <div className="flow-screen">
      {lines.map((l, i) => (
        <div className="flow-code-line" key={i}>{l || ' '}</div>
      ))}
      <div className="flow-code-line">{current}<span className="flow-cursor" /></div>
    </div>
  );
}

// A left-to-right funnel: the laptop sits at the narrow end, a line fans out to each programme
// box, and a second line carries on from each programme box to its own roles box — two lines per
// programme, one flow. Every position is a plain CSS percentage (row = i / (n-1)) so the SVG
// connector lines (viewBox 0 0 100 100, preserveAspectRatio="none") always line up with the boxes
// at any container size, no measurement needed. Sized to fit one screen — no scrolling to see it.
export default function ProgrammeFlow({ programmes }) {
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTyping(entry.isIntersecting);
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const n = programmes.length;
  const rowY = (i) => (n === 1 ? 50 : 10 + i * (80 / (n - 1)));

  const LAPTOP_X = 10;
  const PROGRAM_X1 = 28;
  const PROGRAM_X2 = 58;
  const ROLES_X1 = 62;
  const ROLES_X2 = 97;

  return (
    <div className={`flow-wrap ${inView ? 'in-view' : ''}`} ref={wrapRef}>
      <svg className="flow-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {programmes.map((p, i) => {
          const y = rowY(i);
          return (
            <g className="flow-connector" key={p.course.routeBase} style={{ transitionDelay: `${0.15 + i * 0.06}s` }}>
              <line x1={LAPTOP_X + 8} y1={50} x2={PROGRAM_X1} y2={y} vectorEffect="non-scaling-stroke" />
              <line className="flow-connector-roles" x1={PROGRAM_X2} y1={y} x2={ROLES_X1} y2={y} vectorEffect="non-scaling-stroke" style={{ transitionDelay: `${0.5 + i * 0.06}s` }} />
            </g>
          );
        })}
      </svg>

      <div className="flow-laptop" style={{ left: `${LAPTOP_X}%` }}>
        <div className="flow-laptop-inner">
          <img src="/img/computer-illustration.png" alt="" width={280} height={169} loading="lazy" />
          <TypingScreen active={typing} />
        </div>
      </div>

      {programmes.map(({ course, blurb, roles }, i) => (
        <Fragment key={course.routeBase}>
          <Link
            to={course.routeBase}
            className="flow-program"
            style={{ left: `${PROGRAM_X1}%`, width: `${PROGRAM_X2 - PROGRAM_X1}%`, top: `${rowY(i)}%`, transitionDelay: `${0.15 + i * 0.06}s` }}
          >
            <h4>{course.COPY.courseShortName}</h4>
            <p>{blurb}</p>
            <div className="flow-program-bottom">
              <span className="flow-duration">{course.COPY.heroStats[0].value}</span>
              <span className="flow-explore-btn">{'{<Explore Me />}'}</span>
            </div>
          </Link>
          <div
            className="flow-roles"
            style={{ left: `${ROLES_X1}%`, width: `${ROLES_X2 - ROLES_X1}%`, top: `${rowY(i)}%`, transitionDelay: `${0.5 + i * 0.06}s` }}
          >
            <span className="flow-roles-label">You could become a:</span>
            <div className="flow-roles-list">
              {roles.map((r) => (<span className="flow-role-chip" key={r}>{r}</span>))}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

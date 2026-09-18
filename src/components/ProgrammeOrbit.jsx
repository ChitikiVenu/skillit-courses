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
          {l || ' '}
        </div>
      ))}
      <div className="orbit-code-line">
        {current}
        <span className="orbit-cursor" />
      </div>
    </div>
  );
}

// A "solar system" layout: a laptop with a live-typing screen sits at the center, and the five
// programme cards are placed around it in a circle. Collapsed at the center until this section
// scrolls into view, then animates out to its orbit positions once — and drifts a little further
// out on hover.
export default function ProgrammeOrbit({ programmes }) {
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
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`orbit-wrap ${inView ? 'in-view' : ''}`} ref={wrapRef}>
      <div className="orbit-center">
        <div className="orbit-center-inner">
          <img src="/img/computer-illustration.png" alt="" width={300} height={181} loading="lazy" />
          <TypingScreen active={typing} />
        </div>
      </div>
      {programmes.map(({ course, blurb, roles }, i) => {
        const angle = i * (360 / programmes.length);
        // Each item's roles panel sits "below" the card in local (unrotated) space, which always
        // renders straight down on screen once the counter-rotation cancels out — fine for items
        // on the lower half of the circle, but it collides with the center laptop or a neighbour
        // for items on the upper half. Flipping those to column-reverse puts the panel above the
        // card instead, pointing away from the center.
        const isUpperHalf = angle <= 90 || angle >= 270;
        return (
          <div
            key={course.routeBase}
            className={`orbit-item${isUpperHalf ? ' orbit-item--flip' : ''}`}
            style={{ '--angle': `${angle}deg` }}
          >
            <div className="orbit-card">
              <h4>{course.COPY.courseShortName}</h4>
              <p>{blurb}</p>
              <span className="orbit-duration">{course.COPY.heroStats[0].value}</span>
              <Link to={course.routeBase} className="orbit-explore-btn">
                {'{<Explore Me />}'}
              </Link>
            </div>
            <div className="orbit-roles">
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

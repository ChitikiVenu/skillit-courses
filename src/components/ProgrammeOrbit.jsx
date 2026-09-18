import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// A "solar system" layout: a center computer illustration with the five programme cards placed
// around it in a circle. Collapsed at the center until this section scrolls into view, then
// animates out to its orbit positions once — and drifts a little further out on hover, so the
// section feels alive without re-triggering on every scroll.
export default function ProgrammeOrbit({ programmes }) {
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`orbit-wrap ${inView ? 'in-view' : ''}`} ref={wrapRef}>
      <div className="orbit-center">
        <img src="/img/computer-illustration.png" alt="" width={280} height={169} loading="lazy" />
      </div>
      {programmes.map(({ course, blurb }, i) => (
        <Link
          key={course.routeBase}
          to={course.routeBase}
          className="orbit-item"
          style={{ '--angle': `${i * (360 / programmes.length)}deg` }}
        >
          <h4>{course.COPY.courseShortName}</h4>
          <p>{blurb}</p>
          <div className="orbit-meta">
            <span>{course.COPY.heroStats[0].value}</span>
            <span>{course.COPY.heroStats[3].value}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SocDashboardSvg } from './HeroVisual.jsx';

// The per-course "Module Roadmap" — same orbit language as the landing page's programme layout,
// but with square-cornered cards placed clockwise starting from the left, and a continuously
// floating center visual specific to this course (its clean centre emblem, no icon ring).
export default function ModuleShowcase({ course }) {
  const { MODULES, COPY, routeBase } = course;
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const centerImageFile = COPY.heroImageFile
    ? COPY.heroImageFile.replace('-program-diagram.png', '-module-center.png')
    : null;

  const n = MODULES.length;
  const startAngle = 270; // left, then clockwise

  return (
    <div className={`module-orbit-wrap ${inView ? 'in-view' : ''}`} ref={wrapRef}>
      <div className="module-orbit-center">
        <div className="module-orbit-center-glow" />
        <div className="module-orbit-center-inner">
          {COPY.heroVisual === 'image' && centerImageFile ? (
            <img src={`/img/${centerImageFile}`} alt={COPY.heroImageAlt} width={300} height={300} loading="lazy" />
          ) : (
            <SocDashboardSvg />
          )}
        </div>
      </div>
      {MODULES.map((m, i) => {
        const angle = (startAngle + i * (360 / n)) % 360;
        return (
          <div className="module-orbit-item" key={m.slug} style={{ '--angle': `${angle}deg` }}>
            <Link className="module-orbit-card" to={`${routeBase}/${m.slug}`}>
              <span className="module-orbit-idx">{String(m.number).padStart(2, '0')}</span>
              <h4>{m.title}</h4>
              <span className="module-orbit-meta">
                <span className="module-orbit-hrs">{m.hours}</span>
                {m.duration}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

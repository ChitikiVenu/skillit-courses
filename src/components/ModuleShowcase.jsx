import { Link } from 'react-router-dom';
import { ImageHeroVisual, SocDashboardSvg } from './HeroVisual.jsx';

// The per-course "Module Roadmap" — a square grid of module cards with that course's own hero
// visual as a sticky, continuously-floating center piece, instead of the connected-line list used
// elsewhere. Only used on individual course pages (CourseHomePage), not the Our Programmes page.
export default function ModuleShowcase({ course }) {
  const { MODULES, COPY, routeBase } = course;

  return (
    <div className="module-showcase">
      <div className="module-center">
        <div className="module-center-glow" />
        <div className="module-center-inner">
          {COPY.heroVisual === 'image' ? (
            <ImageHeroVisual
              src={`/img/${COPY.heroImageFile}`}
              alt={COPY.heroImageAlt}
              width={COPY.heroImageWidth}
              height={COPY.heroImageHeight}
            />
          ) : (
            <SocDashboardSvg />
          )}
        </div>
      </div>
      <div className="module-grid">
        {MODULES.map((m) => (
          <Link className="module-square-card" to={`${routeBase}/${m.slug}`} key={m.slug}>
            <span className="module-square-idx">{String(m.number).padStart(2, '0')}</span>
            <h4>{m.title}</h4>
            <p>{m.learn.slice(0, 3).join(', ')}&hellip;</p>
            <div className="module-square-meta">
              <span className="module-square-hrs">{m.hours}</span>
              <span>{m.duration}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

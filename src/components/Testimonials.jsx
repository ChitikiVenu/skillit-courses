import { TESTIMONIALS } from '../data/testimonials.js';
import { usePrefersReducedMotion } from './flowPulse.jsx';

export default function Testimonials() {
  const reducedMotion = usePrefersReducedMotion();
  // Duplicated once so the CSS animation can scroll 0 to -50% and loop without a visible seam.
  const track = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="wrap testimonials-head">
        <h2>Hear From Our Alumni</h2>
        <p>Scroll through reflections from learners who turned structured practice into confident next steps.</p>
      </div>
      <div className={`testimonial-track ${reducedMotion ? 'is-static' : ''}`}>
        <ul className="testimonial-row">
          {track.map((t, i) => {
            const isCopy = i >= TESTIMONIALS.length;
            return (
              <li key={`${t.name}-${i}`} className="testimonial-card" aria-hidden={isCopy ? 'true' : undefined}>
                <img className="testimonial-photo" src={t.photo} alt={isCopy ? '' : `${t.name}, ${t.role}`} width="96" height="96" loading="lazy" decoding="async" />
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="testimonial-person">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                  <em>Placed at {t.placedAt}</em>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import { TESTIMONIALS } from '../data/testimonials.js';

const initials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Learner Testimonials</span>
          <h2>Every course. Real learner momentum.</h2>
          <p>Scroll through reflections from learners who turned structured practice into confident next steps.</p>
        </div>
        <ul className="testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <li key={t.name} className="testimonial-card">
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="testimonial-person">
                <span className="testimonial-avatar" aria-hidden="true">
                  {initials(t.name)}
                </span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                  <em>Placed at {t.placedAt}</em>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CERTIFICATION_BADGES } from '../data/certifications.js';
import { usePrefersReducedMotion } from './flowPulse.jsx';

// Four generic badge icons (shield, target, cloud, radar/chart) — plain shapes drawn for this site, never a
// certification body's own logo. See the design-rules memory for why the real logos are not used here.
const ICONS = {
  shield: (
    <path d="M12 2.5 4.5 5.5v6c0 5 3.2 8.6 7.5 10 4.3-1.4 7.5-5 7.5-10v-6L12 2.5Zm-1.1 12.4-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6Z" />
  ),
  target: (
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 16.5A6.5 6.5 0 1 1 18.5 12 6.5 6.5 0 0 1 12 18.5Zm0-9.5a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" />
  ),
  cloud: (
    <path d="M18.5 10.1a5.5 5.5 0 0 0-10.7-1.8A4.5 4.5 0 0 0 6 17h12a4 4 0 0 0 .5-7.9Z" />
  ),
  radar: (
    <path d="M12 2v3.2A6.8 6.8 0 0 1 18.8 12H22a10 10 0 0 0-10-10Zm0 6.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5ZM12 2A10 10 0 0 0 2 12h3.2A6.8 6.8 0 0 1 12 5.2Zm0 16.8A6.8 6.8 0 0 1 5.2 12H2a10 10 0 0 0 10 10Zm0 0A10 10 0 0 0 22 12h-3.2A6.8 6.8 0 0 1 12 18.8Z" />
  ),
  spark: (
    <path d="m11 21 1-7-5 1 8-11-1 7 5-1Z" />
  ),
  chart: (
    <path d="M4 20V10h3v10Zm6.5 0V4h3v16Zm6.5 0v-7h3v7Z" />
  ),
};

const TILT_MAX = 12; // degrees, at the very edge of the card
const LIFT = 'translateY(-8px) scale(1.045)';
const REST = 'translateY(0) scale(1)';

function Badge({ badge, tiltEnabled }) {
  // A badge with one linked programme goes straight there; one that spans several (e.g. Security+
  // appears in two courses) opens the first, since a single link can only go one place.
  const to = badge.courses[0].routeBase;
  const ref = useRef(null);

  // Real cursor-tracked 3D tilt: the card rotates toward the pointer and a light glare follows it, like a
  // glossy physical badge catching the light. Disabled under prefers-reduced-motion.
  const handleMove = (e) => {
    if (!tiltEnabled) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * TILT_MAX;
    const ry = (px - 0.5) * TILT_MAX;
    el.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
    el.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
    el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
    el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
    el.style.setProperty('--lift', LIFT);
  };
  const handleEnter = () => {
    ref.current?.style.setProperty('--lift', tiltEnabled ? LIFT : REST);
    ref.current?.classList.add('is-active');
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--lift', REST);
    el.classList.remove('is-active');
  };

  return (
    <Link
      className="cert-badge"
      to={to}
      ref={ref}
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <span className="cert-badge-sheen" aria-hidden="true" />
      <svg className="cert-badge-icon" viewBox="0 0 24 24" aria-hidden="true">
        {ICONS[badge.icon]}
      </svg>
      <span className="cert-badge-text">
        <strong>{badge.name}</strong>
        <em>{badge.issuer}</em>
      </span>
    </Link>
  );
}

// A left-to-right scrolling strip of certification badges, under the home intro. Each name is read
// straight from a programme's own CERTIFICATIONS list ("prepares you for"), never invented, and the
// icon is a generic shape, never a certification body's logo.
export default function CertStrip() {
  const reducedMotion = usePrefersReducedMotion();
  // Duplicated once so the CSS animation can scroll from 0 to -50% and loop with no visible seam.
  const track = [...CERTIFICATION_BADGES, ...CERTIFICATION_BADGES];

  return (
    <section className="cert-strip-section" aria-label="Certifications our curriculum prepares you for">
      <div className="wrap cert-strip-head">
        <h2>Our curriculum, aligned with industry certifications</h2>
        <p>Every programme is structured to prepare you for external certifications like these. You sit the exam independently, with the certifying body.</p>
      </div>
      <div className={`cert-strip-track ${reducedMotion ? 'is-static' : ''}`}>
        <div className="cert-strip-row">
          {track.map((badge, i) => (
            <Badge badge={badge} tiltEnabled={!reducedMotion} key={`${badge.name}-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

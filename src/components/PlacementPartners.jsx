import { PLACEMENT_PARTNERS } from '../data/placementPartners.js';
import { usePrefersReducedMotion } from './flowPulse.jsx';

export default function PlacementPartners() {
  const reducedMotion = usePrefersReducedMotion();
  // Duplicated once so the CSS animation can scroll 0 to -50% and loop without a visible seam.
  const track = [...PLACEMENT_PARTNERS, ...PLACEMENT_PARTNERS];

  return (
    <section id="placement-partners" className="partners-section" aria-label="Companies where our students got hired">
      <div className="wrap partners-head">
        <h2>Where Our Students Got Hired</h2>
      </div>
      <div className={`partners-track ${reducedMotion ? 'is-static' : ''}`}>
        <div className="partners-row">
          {track.map((p, i) => (
            <span className="partner-chip" key={`${p.name}-${i}`} aria-hidden={i >= PLACEMENT_PARTNERS.length ? 'true' : undefined}>
              <img src={p.logo} alt={i < PLACEMENT_PARTNERS.length ? `${p.name} logo` : ''} loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

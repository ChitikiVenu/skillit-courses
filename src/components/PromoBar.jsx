import { Link } from 'react-router-dom';

// A slim offer strip above the header on every page (ccbp.in/intensive pattern, owner-requested
// 2026-09-22) — it isn't sticky, so it scrolls away and the header (position:sticky) takes over the
// top of the viewport, same as the reference site. The message scrolls across the strip as a ticker
// (owner-requested 2026-09-25). Links to the home page's enquiry form; every page with its own
// #enquire section scrolls there directly (ScrollToTop.jsx handles the cross-page hash).
const REPEATS = 4;

function Group({ hidden }) {
  return (
    <div className="promo-group" aria-hidden={hidden ? 'true' : undefined}>
      {Array.from({ length: REPEATS }, (_, i) => (
        <span className="promo-item" key={i}>
          <span className="promo-bar-badge">Festival Session Offer</span>
          <span className="promo-bar-text">
            <strong>15% off</strong> on all our programmes — claim it before you enrol
          </span>
          <span className="promo-bar-arrow" aria-hidden="true">
            &rarr;
          </span>
        </span>
      ))}
    </div>
  );
}

export default function PromoBar() {
  return (
    <Link className="promo-bar" to="/#enquire" aria-label="Festival session offer: 15% off on all our programmes. Claim it before you enrol.">
      <div className="promo-track">
        <Group />
        <Group hidden />
      </div>
    </Link>
  );
}

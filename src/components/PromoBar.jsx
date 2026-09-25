import { Link } from 'react-router-dom';

// A slim offer strip above the header on every page (ccbp.in/intensive pattern, owner-requested
// 2026-09-22) — it isn't sticky, so it scrolls away and the header (position:sticky) takes over the
// top of the viewport, same as the reference site. The message scrolls slowly across the strip, one
// copy at a time: the next pass starts only after the previous one has left (owner-requested 2026-09-25). Links to the home page's enquiry form; every page with its own
// #enquire section scrolls there directly (ScrollToTop.jsx handles the cross-page hash).
export default function PromoBar() {
  return (
    <Link className="promo-bar" to="/#enquire" aria-label="Festival season offer: 15% off on all our programmes. Claim it before you enrol.">
      <div className="promo-track">
        <span className="promo-item">
          <span className="promo-bar-badge">Festival Season Offer</span>
          <span className="promo-bar-text">
            <strong>15% off</strong> on all our programmes — claim it before you enrol
          </span>
          <span className="promo-bar-arrow" aria-hidden="true">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}

import { Link } from 'react-router-dom';

// A slim offer strip above the header on every page (ccbp.in/intensive pattern, owner-requested
// 2026-09-22) — it isn't sticky, so it scrolls away and the header (position:sticky) takes over the
// top of the viewport, same as the reference site. Links to the home page's enquiry form; every page
// with its own #enquire section scrolls there directly (ScrollToTop.jsx handles the cross-page hash).
export default function PromoBar() {
  return (
    <Link className="promo-bar" to="/#enquire">
      <span className="promo-bar-badge">Limited-Time Offer</span>
      <span className="promo-bar-text">
        <strong>15% off</strong> on all our courses — claim it before you enrol
      </span>
      <span className="promo-bar-arrow" aria-hidden="true">
        &rarr;
      </span>
    </Link>
  );
}

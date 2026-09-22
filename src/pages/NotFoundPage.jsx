import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

// noindex, and deliberately left out of sitemap.xml (see scripts/generate-sitemap.mjs) — this route
// matches any unknown URL, so it must never look like real, indexable content. It's still served with
// an HTTP 200 by Vercel's SPA rewrite (vercel.json rewrites everything to /index.html, since a static
// host can't know client-side-routed paths in advance) — a known soft-404 limitation of a
// client-rendered SPA without a server. The noindex tag plus content that's unambiguously "page not
// found" is the mitigation: Google's own indexing systems detect and treat soft 404s like this
// correctly from the rendered content, even at a 200 status.
export default function NotFoundPage() {
  return (
    <main className="landing-shell">
      <Seo
        title="Page Not Found | Skill IT Education"
        description="The page you're looking for doesn't exist or may have moved."
        path="/404"
        noindex
      />
      <h1 className="placeholder-title">Page Not Found</h1>
      <p>The page you're looking for doesn't exist or may have moved.</p>
      <div className="hero-ctas" style={{ justifyContent: 'center' }}>
        <Link className="btn btn-primary" to="/">
          Back to Home
        </Link>
        <Link className="btn btn-outline" to="/#programmes">
          Our Programmes
        </Link>
        <Link className="btn btn-outline" to="/faqs">
          FAQs
        </Link>
      </div>
    </main>
  );
}

import { Helmet } from 'react-helmet-async';
import { BRAND } from '../constants.js';
import { absoluteUrl, SITE_LOGO } from '../config/site.js';

// The one place every page sets its title, description, canonical, robots directive, Open Graph,
// Twitter card and JSON-LD. `path` is always site-relative ("/cyber-security") — absoluteUrl() (the
// central config, src/config/site.js) turns it into a full URL against whichever domain
// VITE_SITE_URL currently points at, so nothing here (or in any page that calls Seo) ever hard-codes
// a domain.
//
// Indexable pages get an explicit "index, follow" robots tag (not just the absence of one) and a
// self-referencing canonical. `noindex` pages (About Us, Refund Policy — still PlaceholderPage; the
// 404) get "noindex, follow" and still get a canonical, so a crawler that reaches the page anyway has
// one consistent URL to record, matching Google's guidance that the canonical seen before and after
// JavaScript execution should never disagree.
export default function Seo({ title, description, path, ogImage, ogImageAlt, ogType = 'website', jsonLd, noindex }) {
  const canonicalUrl = absoluteUrl(path);
  const image = ogImage || SITE_LOGO;
  const imageAlt = ogImageAlt || `${BRAND} logo`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}

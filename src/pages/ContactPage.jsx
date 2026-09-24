import { Link } from 'react-router-dom';
import { DOMAIN, EMAIL, PHONE, WHATSAPP_URL, LEGAL_NAME, LEGAL_ADDRESS } from '../constants.js';
import Seo from '../components/Seo.jsx';
import LeadForm from '../components/LeadForm.jsx';
import BatchCountdown from '../components/BatchCountdown.jsx';

// Contact / location page: full name-address-phone details, a map, and an enquiry form. Only facts
// already published elsewhere on the site (address, phone, email) — no opening hours, coordinates or
// transport details, because none have been supplied.
const SITE_HOST = DOMAIN.replace(/^https?:\/\//, '');

const MAP_QUERY = 'Skill IT Education, LR Towers, 100 Feet Road, Ayyappa Society, Madhapur, Hyderabad 500081';
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['EducationalOrganization', 'LocalBusiness'],
        '@id': `${DOMAIN}/#organization`,
        name: 'Skill IT Education',
        legalName: LEGAL_NAME,
        url: DOMAIN,
        logo: `${DOMAIN}/img/skill-it-logo.png`,
        telephone: PHONE,
        email: EMAIL,
        hasMap: MAP_LINK,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'House No. 3-5-35, LR Towers, 3rd Floor, 100 Feet Road, Ayyappa Society, Madhapur',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500081',
          addressCountry: 'IN',
        },
        areaServed: 'Hyderabad',
      },
      { '@type': 'ContactPage', name: 'Contact Skill IT Education', url: `${DOMAIN}/contact`, about: { '@id': `${DOMAIN}/#organization` } },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${DOMAIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: `${DOMAIN}/contact` },
        ],
      },
    ],
  };

  return (
    <main className="contact-page">
      <Seo
        title="Contact Skill IT Education | Madhapur, Hyderabad"
        description="Visit or contact Skill IT Education in Madhapur, Hyderabad: address, phone, WhatsApp, email and map, plus a form to book a free counselling session."
        path="/contact"
        jsonLd={jsonLd}
      />

      <section id="contact-details" className="contact-one">
        <div className="contact-blobs" aria-hidden="true">
          <span className="cb cb-blue cb-1" />
        </div>
        <div className="wrap contact-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <div className="contact-layout">
            <div className="contact-intro">
              <figure className="contact-quote">
                <blockquote>&ldquo;The best way to find yourself is to lose yourself in the service of others.&rdquo;</blockquote>
                <figcaption>&mdash; Mahatma Gandhi</figcaption>
              </figure>
              <h1 className="contact-title">Contact Us</h1>
              <p className="contact-tagline">Talk to our admissions team about courses, batches and fees, or visit us in Madhapur.</p>
            </div>

            <div className="contact-stack">
              <span className="cs-blob cs-blob-right" aria-hidden="true" />
              <div className="home-hero-form">
                <BatchCountdown />
                <LeadForm bare formId="contact-form" heading="Get Free Career Guidance" />
              </div>
            </div>

            <div className="contact-panel">
              <address>{LEGAL_ADDRESS}</address>
              <div className="contact-line">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {PHONE}
                </a>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <a href={DOMAIN}>{SITE_HOST}</a>
              </div>
            </div>

            <div className="contact-map">
              <iframe title="Skill IT Education location map, Madhapur, Hyderabad" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

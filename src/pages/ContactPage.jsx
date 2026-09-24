import { Link } from 'react-router-dom';
import { DOMAIN, EMAIL, PHONE, WHATSAPP_URL, LEGAL_NAME, LEGAL_ADDRESS } from '../constants.js';
import Seo from '../components/Seo.jsx';
import LeadForm from '../components/LeadForm.jsx';
import BatchCountdown from '../components/BatchCountdown.jsx';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';

// Contact / location page: full name-address-phone details, a map, and an enquiry form. Only facts
// already published elsewhere on the site (address, phone, email) — no opening hours, coordinates or
// transport details, because none have been supplied.
const SITE_HOST = DOMAIN.replace(/^https?:\/\//, '');
const TEL = `tel:${PHONE.replace(/\s/g, '')}`;

const Icon = ({ children }) => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

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
        <svg className="contact-waves" viewBox="0 0 1440 700" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="cw-blue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2a5cff" />
              <stop offset="1" stopColor="#0a1e8c" />
            </linearGradient>
            <linearGradient id="cw-orange" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#ff9a3c" />
              <stop offset="1" stopColor="#f26a1b" />
            </linearGradient>
          </defs>
          <path fill="url(#cw-orange)" d="M0 70C220 10 430 150 700 100C980 48 1200 -10 1440 70L1440 175C1200 105 980 168 700 225C430 275 220 135 0 195Z" />
          <path fill="url(#cw-blue)" d="M0 195C220 135 430 275 700 225C980 168 1200 105 1440 175L1440 700L0 700Z" />
        </svg>
        <div className="wrap contact-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <div className="home-hero-grid contact-hero-grid">
            <div className="contact-hero-left">
              <figure className="contact-quote">
                <blockquote>&ldquo;The best way to find yourself is to lose yourself in the service of others.&rdquo;</blockquote>
                <figcaption>&mdash; Mahatma Gandhi</figcaption>
              </figure>
              <h1 className="contact-title">Contact Us</h1>
            </div>
            <div className="home-hero-form">
              <BatchCountdown />
              <LeadForm bare formId="contact-form" heading="Get Free Career Guidance" />
            </div>
          </div>
          <div className="contact-grid">
          <div className="contact-map">
            <iframe title="Skill IT Education location map, Madhapur, Hyderabad" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
          <div className="contact-panel">
            <img className="contact-logo" src="/img/skill-it-logo.png" alt="Skill IT Education" width="152" height="156" />
            <ul className="contact-rows">
              <li>
                <Icon>
                  <path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.6" />
                </Icon>
                <div>
                  <span className="contact-label">Address</span>
                  <address>{LEGAL_ADDRESS}</address>
                </div>
              </li>
              <li>
                <span className="contact-icon contact-icon-wa">
                  <WhatsAppIcon />
                </span>
                <div>
                  <span className="contact-label">WhatsApp</span>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    WhatsApp Us &middot; {PHONE}
                  </a>
                </div>
              </li>
              <li>
                <Icon>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </Icon>
                <div>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
              </li>
              <li>
                <Icon>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </Icon>
                <div>
                  <span className="contact-label">Website</span>
                  <a href={DOMAIN}>{SITE_HOST}</a>
                </div>
              </li>
            </ul>
            <div className="contact-actions">
              <a className="btn btn-primary" href={TEL}>
                Call Now
              </a>
              <a className="btn btn-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon fill="#fff" /> WhatsApp Us
              </a>
              <a className="btn btn-primary" href={MAP_LINK} target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}

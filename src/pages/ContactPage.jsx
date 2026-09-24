import { Link } from 'react-router-dom';
import { DOMAIN, EMAIL, PHONE, WHATSAPP_URL, LEGAL_NAME, LEGAL_ADDRESS } from '../constants.js';
import Seo from '../components/Seo.jsx';
import FitHeading from '../components/FitHeading.jsx';
import LeadForm from '../components/LeadForm.jsx';

// Contact / location page: full name-address-phone details, a map, and an enquiry form. Only facts
// already published elsewhere on the site (address, phone, email) — no opening hours, coordinates or
// transport details, because none have been supplied.
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
    <main>
      <Seo
        title="Contact Skill IT Education | Madhapur, Hyderabad"
        description="Visit or contact Skill IT Education in Madhapur, Hyderabad: address, phone, WhatsApp, email and map, plus a form to book a free counselling session."
        path="/contact"
        jsonLd={jsonLd}
      />

      <section className="hero about-hero">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <FitHeading maxLines={2} minPx={26}>
            Contact Skill IT Education in Madhapur, Hyderabad
          </FitHeading>
          <p className="hero-lede">Talk to our admissions team about courses, batches and fees, or visit us in Madhapur.</p>
        </div>
      </section>

      <section id="contact-details">
        <div className="wrap contact-grid">
          <div className="contact-card">
            <h2>Skill IT Education</h2>
            <address>
              {LEGAL_ADDRESS}
            </address>
            <ul className="contact-list">
              <li>
                <strong>Phone</strong> <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
              </li>
              <li>
                <strong>WhatsApp</strong>{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Chat with admissions
                </a>
              </li>
              <li>
                <strong>Email</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            </ul>
            <div className="hero-ctas">
              <a className="btn btn-primary" href={`tel:${PHONE.replace(/\s/g, '')}`}>
                Call Now
              </a>
              <a className="btn btn-primary" href={MAP_LINK} target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </div>
          </div>
          <div className="contact-map">
            <iframe title="Skill IT Education location map, Madhapur, Hyderabad" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>

      <section className="lead-form-section" id="enquire">
        <div className="wrap">
          <LeadForm formId="contact-form" heading="Book a Free Counselling Session" subheading="Share a few details and our admissions team will call you back." />
        </div>
      </section>
    </main>
  );
}

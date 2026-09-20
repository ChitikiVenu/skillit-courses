import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EMAIL, WHATSAPP_URL } from '../constants.js';
import { ROLE_GROUPS } from '../data/roleCourses/index.js';
import { DESKTOP_HEADER, useMediaQuery } from '../useMediaQuery.js';

// Under the logo: the site links, one by one. About Us, FAQs and Refund Policy are pages whose content is still to come.
const SITE_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Our Programmes', to: '/#programmes' },
  { label: 'Contact', to: '/#enquire' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Data Compliance Policy', to: '/data-compliance-policy' },
  { label: 'Refund Policy', to: '/refund-policy' },
];

// "Our Courses": the five programmes, each with the role courses under it, in a narrow centred column (about 30% of
// the footer on laptops and desktops) so the space either side can hold the brand and quick links. On phones each
// programme is a collapsible group so the footer stays short; on laptops and desktops every list is open.
export default function Footer() {
  const wide = useMediaQuery(DESKTOP_HEADER);
  const [open, setOpen] = useState(null);

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-head">
          <h2>Our Courses</h2>
          <p>Pick a programme, then the role you want to train for.</p>
        </div>

        <div className="footer-layout">
          <div className="footer-side footer-about">
            <Link to="/" className="footer-brand" aria-label="Skill IT Education, home">
              <img src="/img/skill-it-logo.png" alt="Skill IT Education" width="520" height="206" loading="lazy" />
            </Link>
            <ul className="footer-site-links">
              {SITE_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-courses">
            {ROLE_GROUPS.map((g) => {
              const isOpen = wide || open === g.key;
              return (
                <div className={`footer-col${isOpen ? ' is-open' : ''}`} key={g.key}>
                  {wide ? (
                    <Link className="footer-course" to={g.href}>
                      {g.label} Course
                    </Link>
                  ) : (
                    <button type="button" className="footer-course footer-course-btn" aria-expanded={isOpen} onClick={() => setOpen((k) => (k === g.key ? null : g.key))}>
                      <span>{g.label} Course</span>
                      <span className="footer-caret" aria-hidden="true">
                        &#9662;
                      </span>
                    </button>
                  )}
                  {isOpen && (
                    <ul className="footer-roles">
                      {!wide && (
                        <li>
                          <Link to={g.href} className="footer-all">
                            Full {g.label} programme
                          </Link>
                        </li>
                      )}
                      {g.roles.map((r) => (
                        <li key={r.href}>
                          <Link to={r.href}>{r.title} Course</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          <div className="footer-side footer-links">
            <h3>Quick links</h3>
            <ul>
              <li>
                <Link to="/blog">Career Insights</Link>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>Email us</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Skill IT Education. All rights reserved.</p>
      </div>
    </footer>
  );
}

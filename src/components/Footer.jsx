import { useState } from 'react';
import { Link } from 'react-router-dom';
// Lightweight, generated projection (title/href only) — see roleCoursesLite.js's own header comment
// for why this isn't the real src/data/roleCourses/index.js (RoleCoursePage.jsx imports that one).
import { ROLE_GROUPS_LITE } from '../data/roleCoursesLite.js';
import { DESKTOP_HEADER, useMediaQuery } from '../useMediaQuery.js';
import { WHATSAPP_URL } from '../constants.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';

// Under the logo: the site links, one by one. About Us and Refund Policy are pages whose content is still to come.
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

// The five programmes side by side across the footer, each with its role courses under it, and the logo and site links on
// the left. On phones each programme is a collapsible group so the footer stays short; on laptops and desktops every list is open.
export default function Footer({ onBook }) {
  const wide = useMediaQuery(DESKTOP_HEADER);
  const [open, setOpen] = useState(null);

  return (
    <footer className="site-footer">
      <div className="footer-wide">
        <div className="footer-brand-row">
          <Link to="/" className="footer-brand" aria-label="Skill IT Education, home">
            <img src="/img/skill-it-logo.png" alt="Skill IT Education" width="520" height="206" loading="lazy" />
          </Link>
          {/* Desktop only — phones already have these two as floating buttons (FloatingActions), so
              repeating them here would just be clutter. */}
          <div className="footer-actions">
            <a className="footer-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
              <WhatsAppIcon fill="#fff" />
            </a>
            <button type="button" className="btn btn-book footer-book-btn" onClick={onBook}>
              Book a free session
            </button>
          </div>
        </div>
        <div className="footer-layout">
          <div className="footer-side footer-about">
            <ul className="footer-site-links">
              {SITE_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-courses">
            {ROLE_GROUPS_LITE.map((g) => {
              const isOpen = wide || open === g.key;
              return (
                <div className={`footer-col${isOpen ? ' is-open' : ''}`} key={g.key}>
                  {wide ? (
                    <Link className="footer-course" to={g.href}>
                      {g.label} Courses
                    </Link>
                  ) : (
                    <button type="button" className="footer-course footer-course-btn" aria-expanded={isOpen} onClick={() => setOpen((k) => (k === g.key ? null : g.key))}>
                      <span>{g.label} Courses</span>
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
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Skill IT Education Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

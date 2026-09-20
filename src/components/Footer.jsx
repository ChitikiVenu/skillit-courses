import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ADDRESS, EMAIL } from '../constants.js';
import { ROLE_GROUPS } from '../data/roleCourses/index.js';
import { DESKTOP_HEADER, useMediaQuery } from '../useMediaQuery.js';

// "Our Courses": the five programmes, each with the role courses under it. On phones each programme is a
// collapsible group so the footer stays short; on laptops and desktops every list is open.
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

        <div className="footer-grid">
          {ROLE_GROUPS.map((g) => {
            const isOpen = wide || open === g.key;
            return (
              <div className={`footer-col${isOpen ? ' is-open' : ''}`} key={g.key}>
                {wide ? (
                  <Link className="footer-course" to={g.href}>
                    {g.label}
                  </Link>
                ) : (
                  <button type="button" className="footer-course footer-course-btn" aria-expanded={isOpen} onClick={() => setOpen((k) => (k === g.key ? null : g.key))}>
                    <span>{g.label}</span>
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
                        <Link to={r.href}>{r.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div className="footer-bottom">
          <Link to="/" className="footer-brand" aria-label="Skill IT Education, home">
            <img src="/img/skill-it-logo.png" alt="Skill IT Education" width="520" height="206" loading="lazy" />
          </Link>
          <div className="footer-info">
            <p>{ADDRESS}</p>
            <p>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <span aria-hidden="true"> &middot; </span>
              <Link to="/blog">Career Insights</Link>
            </p>
            <p className="footer-copy">&copy; {new Date().getFullYear()} Skill IT Education. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

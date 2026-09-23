import { Link } from 'react-router-dom';
import { DOMAIN } from '../constants.js';
import Seo from '../components/Seo.jsx';
import FitHeading from '../components/FitHeading.jsx';
import { CAREERS } from '../data/careers.js';

// Purely decorative balloon shapes for the hero — aria-hidden, never carries information. Colours
// come from the palette already used for the homepage fit-finder cards, so "festive" still reads as
// on-brand rather than a clashing one-off.
function Balloon({ cx, cy, r, color, delay }) {
  return (
    <g style={{ '--bob-delay': `${delay}s` }} className="career-balloon">
      <line x1={cx} y1={cy + r} x2={cx} y2={cy + r + 46} stroke="var(--border)" strokeWidth="1.5" />
      <ellipse cx={cx} cy={cy} rx={r * 0.82} ry={r} fill={color} />
      <ellipse cx={cx - r * 0.28} cy={cy - r * 0.4} rx={r * 0.22} ry={r * 0.32} fill="#fff" opacity="0.35" />
    </g>
  );
}

function Ribbon({ children }) {
  return (
    <span className="career-ribbon">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="m12 2 2.6 5.3 5.8.85-4.2 4.1 1 5.75L12 15.2l-5.2 2.8 1-5.75-4.2-4.1 5.8-.85Z"
          fill="currentColor"
        />
      </svg>
      {children}
    </span>
  );
}

export default function CareersPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${DOMAIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Careers', item: `${DOMAIN}/careers` },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Open roles at Skill IT Education',
        itemListElement: CAREERS.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.title,
          url: `${DOMAIN}/careers/${c.slug}`,
        })),
      },
    ],
  };

  return (
    <main>
      <Seo
        title="Careers at Skill IT Education | Join Our Team in Hyderabad"
        description="Open roles at Skill IT Education in Madhapur, Hyderabad — see current openings and how to apply."
        path="/careers"
        jsonLd={jsonLd}
      />

      <section className="career-hero">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">Careers</span>
          </nav>

          {/* A small corner accent, not a full banner — the listing itself should read like an
              actual job board, not a poster. */}
          <svg className="career-corner-balloons" viewBox="0 0 120 90" aria-hidden="true" focusable="false">
            <Balloon cx={30} cy={22} r={16} color="#2450d6" delay={0} />
            <Balloon cx={64} cy={14} r={12} color="#c2410c" delay={0.7} />
          </svg>

          <Ribbon>We&rsquo;re Hiring</Ribbon>
          <FitHeading className="career-hero-title" maxLines={1} minPx={22}>
            Careers at Skill IT Education
          </FitHeading>
          <p className="career-hero-sub">
            Help us build the training that turns classroom learning into real careers in Cyber Security, AI, and Data.
            Here&rsquo;s what&rsquo;s open right now.
          </p>
        </div>
      </section>

      <section className="career-list-section">
        <div className="wrap">
          <div className="career-list">
            {CAREERS.map((c, i) => (
              <article className="career-card" style={{ '--career-accent': ['#2450d6', '#7c3aed', '#0c9a83', '#c2410c', '#a16207'][i % 5] }} key={c.slug}>
                <div className="career-card-body">
                  <h2>{c.title}</h2>
                  <p className="career-card-summary">{c.summary}</p>
                  <div className="career-chips">
                    <span className="career-chip">
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                        <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.7" />
                      </svg>
                      {c.location}
                    </span>
                    <span className="career-chip">
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 8h16v11H4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                        <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.7" />
                      </svg>
                      {c.workMode}
                    </span>
                    <span className="career-chip">
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                      </svg>
                      {c.employmentType}
                    </span>
                    {c.openings > 1 && <span className="career-chip career-chip-openings">{c.openings} openings</span>}
                  </div>
                </div>
                <Link className="btn btn-primary career-apply-btn" to={`/careers/${c.slug}`}>
                  Apply Now
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

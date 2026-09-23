import { Link, useParams } from 'react-router-dom';
import { DOMAIN } from '../constants.js';
import { SITE_LOGO } from '../config/site.js';
import Seo from '../components/Seo.jsx';
import { CAREERS, getCareerBySlug } from '../data/careers.js';
import NotFoundPage from './NotFoundPage.jsx';

const EMPLOYMENT_TYPE_SCHEMA = { 'Full-time': 'FULL_TIME', 'Part-time': 'PART_TIME', Contract: 'CONTRACTOR', Internship: 'INTERN' };

export default function CareerDetailPage() {
  const { slug } = useParams();
  const career = getCareerBySlug(slug);
  if (!career) return <NotFoundPage />;

  const path = `/careers/${career.slug}`;
  const canonicalUrl = DOMAIN + path;
  const mailto = `mailto:${career.howToApply.email}?subject=${encodeURIComponent(career.howToApply.subject)}`;
  const telHref = 'tel:' + career.howToApply.phone.replace(/\s+/g, '');

  const description = [
    career.summary,
    ...career.about,
    "What You'll Own:",
    ...career.responsibilities.map((r) => `${r.title} — ${r.text}`),
    "What We're Looking For:",
    ...career.requirements,
    'Why Join Us:',
    career.whyJoin,
  ].join('\n\n');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${DOMAIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Careers', item: `${DOMAIN}/careers` },
          { '@type': 'ListItem', position: 3, name: career.title, item: canonicalUrl },
        ],
      },
      {
        '@type': 'JobPosting',
        title: career.title,
        description,
        datePosted: career.postedDate,
        employmentType: EMPLOYMENT_TYPE_SCHEMA[career.employmentType] ?? 'FULL_TIME',
        hiringOrganization: { '@type': 'Organization', name: career.company, sameAs: DOMAIN, logo: SITE_LOGO },
        jobLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            addressCountry: 'IN',
          },
        },
        directApply: false,
      },
    ],
  };

  return (
    <main>
      <Seo
        title={`${career.title} | Careers at Skill IT Education`}
        description={career.summary}
        path={path}
        ogType="article"
        jsonLd={jsonLd}
      />

      <header className="career-detail-hero">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/careers">Careers</Link>
            <span className="sep">/</span>
            <span aria-current="page">{career.title}</span>
          </nav>
          <span className="career-ribbon career-ribbon-small">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m12 2 2.6 5.3 5.8.85-4.2 4.1 1 5.75L12 15.2l-5.2 2.8 1-5.75-4.2-4.1 5.8-.85Z" fill="currentColor" />
            </svg>
            We&rsquo;re Hiring
          </span>
          <h1>{career.title}</h1>
          <div className="career-chips career-chips-hero">
            <span className="career-chip">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.7" />
              </svg>
              {career.location}
            </span>
            <span className="career-chip">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 8h16v11H4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.7" />
              </svg>
              {career.workMode}
            </span>
            <span className="career-chip">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              {career.employmentType}
            </span>
            <span className="career-chip">{career.company}</span>
          </div>
          <div className="hero-ctas">
            <a className="btn btn-primary" href={mailto}>
              Apply Now
            </a>
            <a className="btn btn-outline" href={telHref}>
              Call to Apply
            </a>
          </div>
        </div>
      </header>

      <article className="career-body">
        <div className="wrap career-body-wrap">
          <section>
            <h2>About the Role</h2>
            {career.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>

          <section>
            <h2>What You&rsquo;ll Own</h2>
            <div className="career-own-grid">
              {career.responsibilities.map((r) => (
                <div className="career-own-item" key={r.title}>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>What We&rsquo;re Looking For</h2>
            <ul className="check-list">
              {career.requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Why Join Us</h2>
            <p>{career.whyJoin}</p>
          </section>

          <section className="career-apply-section">
            <h2>How to Apply</h2>
            <p>
              Send your resume to{' '}
              <a href={mailto}>{career.howToApply.email}</a> with the subject line &ldquo;{career.howToApply.subject}&rdquo;, or call{' '}
              <a href={telHref}>{career.howToApply.phone}</a>.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href={mailto}>
                Apply Now
              </a>
            </div>
          </section>
        </div>
      </article>

      <footer className="career-letterhead">
        <div className="wrap career-letterhead-wrap">
          <p className="career-letterhead-contact">
            Skill IT Education &middot; <a href={mailto}>{career.howToApply.email}</a> &middot; Ramya TS, Head of Counselling:{' '}
            <a href={telHref}>{career.howToApply.phone}</a>
          </p>
          <div className="career-letterhead-card">
            <strong>SKILL IT Education Pvt Ltd</strong>
            <span>An Upskilling Academy for Future Technologies</span>
            <span>Phone: +91 91777 15978</span>
            <span>info@skilliteducation.com</span>
            <span>https://www.skilliteducation.com</span>
            <span>3rd Floor, A Section, LR Towers</span>
            <span>100 Feet Rd, Ayyappa Society, Madhapur</span>
            <span>Hyderabad, Telangana &ndash; 500081, India</span>
          </div>
        </div>
      </footer>

      {CAREERS.length > 1 && (
        <section className="career-more">
          <div className="wrap">
            <h2>Other Open Roles</h2>
            <div className="career-list">
              {CAREERS.filter((c) => c.slug !== career.slug).map((c) => (
                <Link className="career-more-link" to={`/careers/${c.slug}`} key={c.slug}>
                  {c.title} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

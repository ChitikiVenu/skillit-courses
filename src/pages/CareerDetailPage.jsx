import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DOMAIN } from '../constants.js';
import { SITE_LOGO } from '../config/site.js';
import Seo from '../components/Seo.jsx';
import FitHeading from '../components/FitHeading.jsx';
import { CAREERS, getCareerBySlug } from '../data/careers.js';
import NotFoundPage from './NotFoundPage.jsx';

const EMPLOYMENT_TYPE_SCHEMA = { 'Full-time': 'FULL_TIME', 'Part-time': 'PART_TIME', Contract: 'CONTRACTOR', Internship: 'INTERN' };

const POSTED_DATE_FORMAT = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

// `new Date('2026-09-23')` parses as UTC midnight, so formatting it in a timezone behind UTC (most
// of the Americas) rolls it back to the 22nd. Parsing the y/m/d parts and building a local-midnight
// Date instead sidesteps that entirely, so the posted date reads the same everywhere.
function formatPostedDate(isoDate) {
  const [y, m, d] = isoDate.split('-').map(Number);
  return POSTED_DATE_FORMAT.format(new Date(y, m - 1, d));
}

// Shared between the "send resume" apply button and the "share this posting" button below — same
// glyph, two different jobs.
function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.35A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.07-1.11l-.29-.17-3 .8.8-2.92-.19-.3A8 8 0 1 1 12 20Zm4.38-5.85c-.24-.12-1.43-.7-1.65-.78s-.38-.12-.55.12-.63.78-.78.94-.29.18-.53.06a6.6 6.6 0 0 1-1.94-1.2 7.3 7.3 0 0 1-1.34-1.67c-.14-.24 0-.37.1-.49s.24-.29.36-.43a1.6 1.6 0 0 0 .24-.4.44.44 0 0 0 0-.42c-.06-.12-.55-1.33-.76-1.82s-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.75 2.75 0 0 0-.86 2.05 4.8 4.8 0 0 0 1 2.53 10.9 10.9 0 0 0 4.19 3.71c.58.25 1.04.4 1.4.51a3.37 3.37 0 0 0 1.54.1 2.52 2.52 0 0 0 1.65-1.17 2 2 0 0 0 .14-1.17c-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

// Small "job portal" style share row — WhatsApp and LinkedIn open their own share dialog in a new
// tab, Copy Link uses the clipboard with a brief confirmation. No follower counts or share counts
// are shown, since we don't track any.
function ShareBar({ url, title }) {
  const [copied, setCopied] = useState(false);
  const shareText = `${title} — open role at Skill IT Education`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${url}`)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can be unavailable (older browsers, non-HTTPS); the link is still selectable text.
    }
  };

  return (
    <div className="career-share">
      <span className="career-share-label">Share:</span>
      <a className="career-share-btn career-share-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
        <WhatsAppGlyph />
        WhatsApp
      </a>
      <a className="career-share-btn career-share-linkedin" href={linkedinHref} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.11V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
        </svg>
        LinkedIn
      </a>
      <button type="button" className="career-share-btn career-share-copy" onClick={copyLink}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.7" />
        </svg>
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  );
}

export default function CareerDetailPage() {
  const { slug } = useParams();
  const career = getCareerBySlug(slug);
  if (!career) return <NotFoundPage />;

  const path = `/careers/${career.slug}`;
  const canonicalUrl = DOMAIN + path;
  const mailto = `mailto:${career.howToApply.email}?subject=${encodeURIComponent(career.howToApply.subject)}`;
  const applyWhatsappHref = `https://wa.me/${career.howToApply.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hi, I'd like to apply for the ${career.title} position at Skill IT Education. I'm attaching my resume.`,
  )}`;
  const postedLabel = formatPostedDate(career.postedDate);

  const hasResponsibilities = career.responsibilities?.length > 0;
  const hasRequirements = career.requirements?.length > 0;
  const description = [
    career.summary,
    ...career.about,
    ...(hasResponsibilities ? ["What You'll Own:", ...career.responsibilities.map((r) => (typeof r === 'string' ? r : `${r.title} — ${r.text}`))] : []),
    ...(hasRequirements ? ["What We're Looking For:", ...career.requirements] : []),
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

      <header className="career-post-header">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/careers">Careers</Link>
            <span className="sep">/</span>
            <span aria-current="page">{career.title}</span>
          </nav>

          <div className="career-post-card">
            <span className="career-ribbon career-ribbon-corner">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m12 2 2.6 5.3 5.8.85-4.2 4.1 1 5.75L12 15.2l-5.2 2.8 1-5.75-4.2-4.1 5.8-.85Z" fill="currentColor" />
              </svg>
              We&rsquo;re Hiring
            </span>
            <svg className="career-post-balloons" viewBox="0 0 120 90" aria-hidden="true" focusable="false">
              <g className="career-balloon" style={{ '--bob-delay': '0s' }}>
                <line x1="26" y1="30" x2="26" y2="58" stroke="var(--border)" strokeWidth="1.2" />
                <ellipse cx="26" cy="18" rx="13" ry="16" fill="#2450d6" />
              </g>
              <g className="career-balloon" style={{ '--bob-delay': '0.7s' }}>
                <line x1="58" y1="20" x2="58" y2="44" stroke="var(--border)" strokeWidth="1.2" />
                <ellipse cx="58" cy="10" rx="10" ry="12" fill="#c2410c" />
              </g>
            </svg>

            <div className="career-post-top">
              <img className="career-post-logo" src="/img/favicon-104.webp" alt="" width="52" height="52" loading="lazy" />
              <div className="career-post-titlewrap">
                <FitHeading className="career-post-title" maxLines={1} minPx={15}>
                  {career.title}
                </FitHeading>
                {career.tagline && <p className="career-post-tagline">{career.tagline}</p>}
                <p className="career-post-company">{career.company}</p>
              </div>
            </div>

            <div className="career-post-meta">
              <span>{career.location}</span>
              <span className="sep">&middot;</span>
              <span>{career.workMode}</span>
              <span className="sep">&middot;</span>
              <span>{career.employmentType}</span>
              {career.experience && (
                <>
                  <span className="sep">&middot;</span>
                  <span>Experience: {career.experience}</span>
                </>
              )}
              {career.openings > 1 && (
                <>
                  <span className="sep">&middot;</span>
                  <span>{career.openings} openings</span>
                </>
              )}
              <span className="sep">&middot;</span>
              <span>Posted {postedLabel}</span>
            </div>

            <div className="career-post-actions">
              <a className="btn btn-primary" href={mailto}>
                Apply Now
              </a>
              <a className="btn btn-whatsapp" href={applyWhatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppGlyph />
                Send Resume via WhatsApp
              </a>
            </div>
            <ShareBar url={canonicalUrl} title={career.title} />
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

          {hasResponsibilities && (
            <section>
              <h2>What You&rsquo;ll Own</h2>
              <ul className="check-list">
                {career.responsibilities.map((r) => (
                  <li key={typeof r === 'string' ? r : r.title}>
                    {typeof r === 'string' ? (
                      r
                    ) : (
                      <>
                        <strong>{r.title}</strong> &mdash; {r.text}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {hasRequirements && (
            <section>
              <h2>What We&rsquo;re Looking For</h2>
              <ul className="check-list">
                {career.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>
          )}

          {!hasResponsibilities && !hasRequirements && (
            <section className="career-jd-pending">
              <p>
                The full role and requirements for this position are available from our HR team — reach out below and
                we&rsquo;ll send over the complete job description.
              </p>
            </section>
          )}

          <section>
            <h2>Why Join Us</h2>
            <p>{career.whyJoin}</p>
          </section>

          {career.applyNote && (
            <section>
              <h2>How to Apply</h2>
              <p>{career.applyNote}</p>
            </section>
          )}
        </div>
      </article>

      <footer className="career-letterhead">
        <div className="wrap">
          <p className="career-letterhead-banner">
            <strong>SKILL IT Education Pvt Ltd</strong>
            <span className="sep">&middot;</span>
            <a href="tel:+919177715978">+91 91777 15978</a>
            <span className="sep">&middot;</span>
            <a href="mailto:info@skilliteducation.com">info@skilliteducation.com</a>
            <span className="sep">&middot;</span>
            <span>3rd Floor, A Section, LR Towers, 100 Feet Rd, Ayyappa Society, Madhapur, Hyderabad, Telangana &ndash; 500081, India</span>
          </p>
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

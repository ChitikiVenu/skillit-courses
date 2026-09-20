import { Link } from 'react-router-dom';
import { DOMAIN, PHONE } from '../constants.js';
import Seo from '../components/Seo.jsx';
import H1Wave from '../components/H1Wave.jsx';
import ToolCard from '../components/ToolCard.jsx';
import LeadForm from '../components/LeadForm.jsx';
import { ImageHeroVisual, SocDashboardSvg } from '../components/HeroVisual.jsx';
import ModuleFlow from '../components/ModuleFlow.jsx';
import FitHeading from '../components/FitHeading.jsx';
import { rolesForCourse } from '../data/roleCourses/index.js';

const COUNSEL_TEL = 'tel:' + PHONE.replace(/ /g, '');

function CounselButton({ href }) {
  return (
    <a className="btn btn-primary" href={href || COUNSEL_TEL}>
      Book Career Counselling
    </a>
  );
}

export default function CourseHomePage({ course }) {
  const { SITE, MODULES, CAREER_TRACKS, CERTIFICATIONS, WHY_COURSE, COPY, routeBase } = course;
  const canonicalUrl = DOMAIN + routeBase;
  const ogImage = COPY.ogImageFile ? DOMAIN + '/img/' + COPY.ogImageFile : undefined;

  const roleCourses = rolesForCourse(routeBase);

  const allTools = new Map();
  MODULES.forEach((m) => m.tools.forEach((t) => allTools.set(t.name, t)));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        name: 'Skill IT Education',
        url: DOMAIN,
        email: SITE.email,
        telephone: SITE.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.street,
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          addressCountry: SITE.country,
        },
        areaServed: SITE.city,
      },
      {
        '@type': 'Course',
        name: SITE.program,
        description: COPY.metaDesc,
        url: canonicalUrl,
        provider: { '@type': 'EducationalOrganization', name: 'Skill IT Education', sameAs: DOMAIN },
        hasPart: MODULES.map((m) => ({
          '@type': 'Course',
          name: `Module ${m.number} — ${m.title}`,
          url: DOMAIN + routeBase + '/' + m.slug,
        })),
      },
    ],
  };

  return (
    <main>
      <Seo title={COPY.metaTitle} description={COPY.metaDesc} path={routeBase} ogImage={ogImage} jsonLd={jsonLd} />

      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="duration-chip">{COPY.durationChip}</div>
              <FitHeading html={COPY.heroTitleHtml} />
              <H1Wave />
              <h2 className="hero-kicker">{COPY.heroKicker}</h2>
              <p className="hero-lede">{COPY.heroLede}</p>
              <div className="hero-stats-row">
                {COPY.heroStats.map((s, i) => (
                  <div className={`meta-card meta-card-${i + 1}`} key={s.label}>
                    <div className="label">{s.label}</div>
                    <div className="value">{s.value}</div>
                    {s.note && <div className="meta-note">{s.note}</div>}
                  </div>
                ))}
              </div>
              <div className="hero-ctas">
                <a className="btn btn-outline" href="#roadmap">
                  View Module Roadmap
                </a>
                <a className="btn btn-outline" href="#get-details-form">
                  Download Brochure
                </a>
                <CounselButton href="#get-details-form" />
              </div>
            </div>
            <div className="hero-meta">
              {COPY.heroVisual !== 'none' && (
                <div className="hero-visual">
                  <div className="hero-visual-glow" />
                  <div className="hero-mockup-card">
                    {COPY.heroVisual === 'image' ? (
                      <ImageHeroVisual
                        src={`/img/${COPY.heroImageFile}`}
                        alt={COPY.heroImageAlt}
                        width={COPY.heroImageWidth}
                        height={COPY.heroImageHeight}
                      />
                    ) : (
                      <SocDashboardSvg />
                    )}
                  </div>
                  <div className="floating-badge floating-badge-1">
                    <span className="dot" />
                    {COPY.heroBadges[0]}
                  </div>
                  <div className="floating-badge floating-badge-2">
                    <span className="dot" />
                    {COPY.heroBadges[1]}
                  </div>
                </div>
              )}
              <div className="hero-quote">
                <div className="hero-quote-mark">&ldquo;</div>
                <blockquote>{COPY.heroQuote.text}</blockquote>
                <cite>{COPY.heroQuote.cite}</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lead-form-section" id="get-details-form">
        <div className="wrap">
          <LeadForm
            formId="hero-form"
            heading={`Get the ${COPY.courseShortName} Course Fee Structure & Syllabus`}
            subheading="Share your details and our admissions team will call you back with the full syllabus, batch timings and fee breakdown."
            brochureFile={COPY.brochureFile}
            preselectedCourse={COPY.preselectedCourse}
          />
        </div>
      </section>

      <section id="roadmap" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{COPY.roadmapEyebrow}</span>
            <h2>{COPY.roadmapTitle}</h2>
            <p>{COPY.roadmapSubtitle}</p>
          </div>
          <ModuleFlow course={course} />
        </div>
      </section>

      <section id="why">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{COPY.whyEyebrow}</span>
            <h2>{COPY.whyTitle}</h2>
          </div>
          <div className="why-grid">
            {WHY_COURSE.map((w) => (
              <div className="why-item" key={w}>
                <span className="dot" />
                <p>{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{COPY.timelineEyebrow}</span>
            <h2>{COPY.timelineTitle}</h2>
            <p>{COPY.timelineSubtitle}</p>
          </div>
          <div className="journey">
            {MODULES.map((m) => (
              <div className="journey-item" key={m.slug}>
                <div className="journey-node">{String(m.number).padStart(2, '0')}</div>
                <div className="journey-body">
                  <h5>{m.title}</h5>
                  <span className="journey-dur">
                    {m.duration} &middot; {m.hours}
                  </span>
                </div>
              </div>
            ))}
            {COPY.timelinePhases.map((p) => (
              <div className="journey-item phase" key={p.node}>
                <div className="journey-node">{p.node}</div>
                <div className="journey-body">
                  <span className="journey-tag">{p.tag}</span>
                  <h5>{p.title}</h5>
                  <span className="journey-dur">{p.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{COPY.toolsEyebrow}</span>
            <h2>{COPY.toolsTitle}</h2>
            <p>{COPY.toolsSubtitle}</p>
          </div>
          <div className="tool-grid">
            {Array.from(allTools.values()).map((t) => (
              <ToolCard key={t.name} tool={t} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{COPY.projectsEyebrow}</span>
            <h2>{COPY.projectsTitle}</h2>
            <p>{COPY.projectsSubtitle}</p>
          </div>
          <div className="project-grid">
            {COPY.featuredProjects.map((p) => (
              <div className="project-card" key={p.title}>
                <span className="tag">{p.tag}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="outcomes">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{COPY.outcomesEyebrow}</span>
            <h2>{COPY.outcomesTitle}</h2>
          </div>
          <ul className="check-list grid-2">
            {COPY.outcomesList.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="careers" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{COPY.careersEyebrow}</span>
            <h2>{COPY.careersTitle}</h2>
          </div>
          <div className="track-grid">
            {CAREER_TRACKS.map((t) => (
              <div className="track-card" key={t.title}>
                <h4>{t.title}</h4>
                <ul>
                  {t.roles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {roleCourses.length > 0 && (
        <section id="role-courses">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Role courses</span>
              <h2>Train for a specific {COPY.courseShortName} role</h2>
              <p>
                The same programme, duration and fees, with the learning path arranged around one job role. Pick the role you want and see exactly what you will learn.
              </p>
            </div>
            <div className="role-siblings">
              {roleCourses.map((r) => (
                <Link className="role-sibling" to={r.href} key={r.href}>
                  <strong>{r.title}</strong>
                  <span>{r.skills.slice(0, 3).join(' · ')}</span>
                  <span className="role-sibling-more">View role course &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="salary">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{COPY.salaryEyebrow}</span>
            <h2>{COPY.salaryTitle}</h2>
            <p>{COPY.salarySubtitle}</p>
          </div>
          <div className="salary-grid">
            <div className="salary-card">
              <div className="region">India</div>
              <div className="range">{COPY.salaryIndia.range}</div>
              <p>{COPY.salaryIndia.desc}</p>
            </div>
            <div className="salary-card">
              <div className="region">Global</div>
              <div className="range">{COPY.salaryGlobal.range}</div>
              <p>{COPY.salaryGlobal.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{COPY.certEyebrow}</span>
            <h2>{COPY.certTitle}</h2>
            <p>{COPY.certSubtitle}</p>
          </div>
          <div className="cert-grid">
            {CERTIFICATIONS.map((c) => (
              <div className="cert-item" key={c}>
                {c}
              </div>
            ))}
          </div>
          <div className="cert-note">
            Registration, fees and eligibility for any external certification exam are managed directly by the respective
            certifying body and may change over time. Skill IT Education awards its own course-completion certificate upon
            successful completion of the program.
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="wrap">
          <div>
            <h3>{COPY.finalCtaTitle}</h3>
            <p>{COPY.finalCtaSubtitle}</p>
          </div>
          <div className="hero-ctas" style={{ margin: 0 }}>
            <Link className="btn btn-outline" to={`${routeBase}/${MODULES[0].slug}`}>
              Start with Module 1
            </Link>
            <a className="btn btn-outline" href="#roadmap">
              Full Roadmap
            </a>
            <CounselButton />
          </div>
        </div>
      </section>

      <section className="lead-form-section" id="enquire">
        <div className="wrap">
          <LeadForm
            formId="footer-form"
            heading={`Enquire About the ${COPY.courseShortName} Course`}
            subheading="Ready to get started? Fill in your details and our admissions team will get in touch with the full syllabus, fee structure and next batch dates."
            brochureFile={COPY.brochureFile}
            preselectedCourse={COPY.preselectedCourse}
          />
        </div>
      </section>
    </main>
  );
}

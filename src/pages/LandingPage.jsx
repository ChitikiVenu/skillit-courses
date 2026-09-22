import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DOMAIN, EMAIL, PHONE } from '../constants.js';
import Seo from '../components/Seo.jsx';
import LeadForm from '../components/LeadForm.jsx';
import AdvisorModal from '../components/AdvisorModal.jsx';
import ProgrammeFlow from '../components/ProgrammeFlow.jsx';
import FitHeading from '../components/FitHeading.jsx';
import CertStrip from '../components/CertStrip.jsx';
import { usePrefersReducedMotion } from '../components/flowPulse.jsx';
import { PROGRAMME_BLURBS } from '../data/programmeBlurbs.js';
import { rolesForCourse } from '../data/roleCourses/index.js';
import cyberSecurity from '../data/cyberSecurity.js';
import aiMl from '../data/aiMl.js';
import dataScience from '../data/dataScience.js';
import socAnalyst from '../data/socAnalyst.js';
import dataAnalyst from '../data/dataAnalyst.js';

// The roles under each card come from the role courses (src/data/roleCourses), so every chip links to its own page.
// Card copy kept here rather than in each course's own data file — this is the one place all
// five need to be compared side by side, so a short, distinct blurb per course belongs with the
// page that shows them together.
const PROGRAMMES = [
  {
    course: cyberSecurity,
    title: 'Cyber Security With AI',
    blurb: PROGRAMME_BLURBS[cyberSecurity.routeBase],
    roles: rolesForCourse(cyberSecurity.routeBase),
  },
  {
    course: aiMl,
    blurb: PROGRAMME_BLURBS[aiMl.routeBase],
    roles: rolesForCourse(aiMl.routeBase),
  },
  {
    course: dataScience,
    blurb: PROGRAMME_BLURBS[dataScience.routeBase],
    roles: rolesForCourse(dataScience.routeBase),
  },
  {
    course: socAnalyst,
    blurb: PROGRAMME_BLURBS[socAnalyst.routeBase],
    roles: rolesForCourse(socAnalyst.routeBase),
  },
  {
    course: dataAnalyst,
    blurb: PROGRAMME_BLURBS[dataAnalyst.routeBase],
    roles: rolesForCourse(dataAnalyst.routeBase),
  },
];

// Each card gets a student photo the owner supplied (public/img/fit-photos/<slug>.webp — background
// removed, cropped to the waist) and a matching tint for its chip and CTA colour. No name or claim is
// attached to any photo; they are decorative, like the rest of the card.
const FIT_FINDER = [
  { interest: 'You want to break into systems and defend them', course: cyberSecurity, image: 'cyber-security', w: 640, h: 691, tint: '#e9f0ff', tintText: '#2450d6' },
  { interest: 'You want to build and ship AI-powered products', course: aiMl, image: 'ai-ml', w: 640, h: 768, tint: '#f2edff', tintText: '#7c3aed' },
  { interest: 'You like statistics, Python and building predictive models', course: dataScience, image: 'data-science', w: 640, h: 691, tint: '#e8faf3', tintText: '#0c9a83' },
  { interest: 'You want to monitor live systems and respond to real attacks', course: socAnalyst, image: 'soc-analyst', w: 640, h: 778, tint: '#fff1e6', tintText: '#c2410c' },
  { interest: 'You like Excel, SQL and turning numbers into decisions', course: dataAnalyst, image: 'data-analyst', w: 640, h: 787, tint: '#fff8e1', tintText: '#a16207' },
];

// The home page's main heading section: the h1, the most advanced skills the programmes teach (each one
// linked to the programme whose own modules actually teach it — Agentic AI, Generative AI & LLMs and MLOps
// are AI & ML modules 5, 4 and 6; AI-Powered Cyber Defense is Cyber Security's module 6; SIEM & Threat
// Hunting is SOC Analyst's modules 4 and 5; Machine Learning is Data Science's module 7), and a short
// introduction that search engines also see as the organisation description.
const HERO_TITLE = 'Cutting-Edge Upskilling Programs to Connect Higher Education with Corporate Careers.';
const ADVANCED_SKILLS = [
  { label: 'Agentic AI', course: aiMl },
  { label: 'Generative AI & LLMs', course: aiMl },
  { label: 'MLOps', course: aiMl },
  { label: 'AI-Powered Cyber Defense', course: cyberSecurity },
  { label: 'SIEM & Threat Hunting', course: socAnalyst },
  { label: 'Machine Learning', course: dataScience },
];
const HERO_INTRO =
  'Skill IT Education, in Madhapur, Hyderabad, trains graduates, IT professionals and career switchers in Cyber Security, SOC Analyst, AI & ML, Data Science and Data Analytics. Every programme brings hands-on labs, real projects and a real-time internship, so classroom learning turns into skills employers look for.';

// Eligibility chips shown above the h1, and the next-batch line shown under it — owner-supplied
// (2026-09-22), update the date/course here when the next batch is confirmed.
const ELIGIBILITY_CHIPS = ['Eligibility: 2025, 2026 & 2027 graduates', 'Any Branch, Any Degree'];
const NEXT_BATCH = { course: socAnalyst, date: 'Sep 28' };

export default function LandingPage() {
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': `${DOMAIN}/#organization`,
        name: 'Skill IT Education',
        legalName: 'Skill IT Education Pvt Ltd',
        url: DOMAIN,
        logo: `${DOMAIN}/img/skill-it-logo.png`,
        description: HERO_INTRO,
        email: EMAIL,
        telephone: PHONE,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'House No. 3-5-35, LR Towers, 3rd Floor, 100 Feet Road, Ayyappa Society, Madhapur',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500081',
          addressCountry: 'IN',
        },
        areaServed: 'Hyderabad',
        knowsAbout: ['Cyber Security', 'SOC Analyst', 'AI and Machine Learning', 'Data Science', 'Data Analytics'],
      },
      { '@type': 'WebSite', '@id': `${DOMAIN}/#website`, name: 'Skill IT Education', url: DOMAIN, publisher: { '@id': `${DOMAIN}/#organization` } },
      {
        '@type': 'ItemList',
        name: 'Skill IT Education programmes',
        itemListElement: PROGRAMMES.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: p.course.SITE.program,
          url: DOMAIN + p.course.routeBase,
        })),
      },
    ],
  };

  return (
    <main>
      <Seo
        title="Cyber Security, AI & Data Courses in Hyderabad | Skill IT Education"
        description="Cutting-edge upskilling in Hyderabad: Cyber Security, SOC Analyst, AI & ML, Data Science and Data Analytics, with hands-on labs, projects and an internship."
        path="/"
        ogImage={`${DOMAIN}/img/our-programmes-diagram.png`}
        jsonLd={jsonLd}
      />

      <section id="programmes" className="programmes-hero">
        <a className="hero-promo-bar" href="#enquire">
          <span className="hero-promo-badge">Limited-Time Offer</span>
          <span className="hero-promo-text">
            <strong>15% off</strong> on all our courses — claim it before you enrol
          </span>
          <span className="hero-promo-arrow" aria-hidden="true">
            &rarr;
          </span>
        </a>
        <div className="wrap home-hero-grid">
          <div className="home-hero-left">
            <div className="hero-chips">
              {ELIGIBILITY_CHIPS.map((c, i) => (
                <span className={`hero-chip${i === 0 ? ' hero-chip-accent' : ''}`} key={c}>
                  {c}
                </span>
              ))}
            </div>
            <FitHeading className="home-tagline" maxLines={2} minPx={18}>
              {HERO_TITLE}
            </FitHeading>
            <Link className="hero-batch-badge" to={NEXT_BATCH.course.routeBase}>
              <span className="hero-batch-dot" aria-hidden="true" />
              Next batch: {NEXT_BATCH.course.COPY.courseShortName} starts {NEXT_BATCH.date}
            </Link>
            <div className="home-hero-rest">
              <p className="home-intro">{HERO_INTRO}</p>
              <div className="home-skills">
                <span className="home-skills-label">Most advanced skills we teach</span>
                <div className={`home-skills-track ${reducedMotion ? 'is-static' : ''}`}>
                  <ul className="home-skills-row">
                    {/* duplicated once so the marquee can scroll from 0 to -50% and loop with no visible seam */}
                    {[...ADVANCED_SKILLS, ...ADVANCED_SKILLS].map(({ label, course }, i) => (
                      <li key={`${label}-${i}`}>
                        <Link to={course.routeBase}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="hero-ctas">
              <button type="button" className="btn btn-primary" onClick={() => setAdvisorOpen(true)}>
                Talk to Counsellor
              </button>
              <a className="btn btn-outline" href="#our-programmes">
                Explore Our Programmes
              </a>
            </div>
          </div>
          <div className="home-hero-form">
            <LeadForm
              bare
              formId="hero-form"
              heading="Get Free Career Guidance"
              subheading="Share your details — we'll call you back with the syllabus, batch timings and fee breakdown."
            />
          </div>
        </div>
      </section>

      <section className="flow-section" id="our-programmes">
        <div className="flow-outer">
          <ProgrammeFlow programmes={PROGRAMMES} />
        </div>
      </section>

      <CertStrip />

      <section id="fit-finder">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Not Sure Which One?</span>
            <h2>Which programme fits you?</h2>
            <p>A quick way to match what you enjoy to the programme built around it.</p>
          </div>
          <div className="fit-grid">
            {FIT_FINDER.map(({ interest, course, image, w, h, tint, tintText }) => (
              <Link
                className="fit-card"
                to={course.routeBase}
                key={course.routeBase}
                style={{ '--fit-tint': tint, '--fit-tint-text': tintText }}
              >
                <span className="fit-card-visual">
                  <img src={`/img/fit-photos/${image}.webp`} alt="" width={w} height={h} loading="lazy" />
                </span>
                <span className="fit-card-body">
                  <span className="fit-card-programme">{course.COPY.courseShortName}</span>
                  <p className="fit-card-interest">{interest}</p>
                  <span className="fit-card-cta">
                    Explore {course.COPY.courseShortName}
                    <svg className="fit-card-arrow" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="lead-form-section" id="enquire">
        <div className="wrap">
          <div className="enquiry-box">
            <div className="enquiry-intro">
              <div>
                <h3>Still weighing your options?</h3>
                <p>Talk to an advisor — they'll help you match your background and goals to the right programme.</p>
              </div>
              <button type="button" className="btn btn-primary" onClick={() => setAdvisorOpen(true)}>
                Talk to an Advisor
              </button>
            </div>
            <LeadForm
              bare
              formId="programmes-form"
              heading="Get the Fee Structure & Syllabus"
              subheading="Share your details and our admissions team will call you back with the full syllabus, batch timings and fee breakdown."
            />
          </div>
        </div>
      </section>

      <AdvisorModal open={advisorOpen} onClose={() => setAdvisorOpen(false)} />
    </main>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DOMAIN, EMAIL, PHONE } from '../constants.js';
import Seo from '../components/Seo.jsx';
import LeadForm from '../components/LeadForm.jsx';
import BatchCountdown from '../components/BatchCountdown.jsx';
import AdvisorModal from '../components/AdvisorModal.jsx';
import ProgrammeFlow from '../components/ProgrammeFlow.jsx';
import FitHeading from '../components/FitHeading.jsx';
import CertStrip from '../components/CertStrip.jsx';
import Testimonials from '../components/Testimonials.jsx';
import PlacementPartners from '../components/PlacementPartners.jsx';
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
    title: 'Advanced Cyber Security',
    blurb: PROGRAMME_BLURBS[cyberSecurity.routeBase],
    roles: rolesForCourse(cyberSecurity.routeBase),
  },
  {
    course: aiMl,
    title: 'AI & Machine Learning',
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
    title: 'Data Analyst',
    blurb: PROGRAMME_BLURBS[dataAnalyst.routeBase],
    roles: rolesForCourse(dataAnalyst.routeBase),
  },
];

// Each card gets a student photo the owner supplied (public/img/fit-photos/<slug>.webp — background
// removed, cropped to the waist) and a matching tint for its chip and CTA colour. No name or claim is
// attached to any photo; they are decorative, like the rest of the card.
// Each interest line is now a full "if you like/want X, you should try our Y programme" recommendation
// (owner-requested 2026-09-22), not just a standalone description — it names the programme itself, the
// same one the card's own link and "Explore X" button already point to.
const FIT_FINDER = [
  { interest: 'If you want to break into systems and defend them, you should try our Cyber Security programme.', course: cyberSecurity, image: 'cyber-security', w: 640, h: 691, tint: '#e9f0ff', tintText: '#2450d6' },
  { interest: 'If you want to build and ship AI-powered products, you should try our AI & ML programme.', course: aiMl, image: 'ai-ml', w: 640, h: 768, tint: '#f2edff', tintText: '#7c3aed' },
  { interest: 'If you like statistics, Python and building predictive models, you should try our Data Science programme.', course: dataScience, image: 'data-science', w: 640, h: 691, tint: '#e8faf3', tintText: '#0c9a83' },
  { interest: 'If you want to monitor live systems and respond to real attacks, you should try our SOC Analyst programme.', course: socAnalyst, image: 'soc-analyst', w: 640, h: 778, tint: '#fff1e6', tintText: '#c2410c' },
  { interest: 'If you like Excel, SQL and turning numbers into decisions, you should try our Data Analytics programme.', course: dataAnalyst, image: 'data-analyst', w: 640, h: 787, tint: '#fff8e1', tintText: '#a16207' },
];

// The home page's main heading section: the h1, the most advanced skills the programmes teach (each one
// linked to the programme whose own modules actually teach it — Agentic AI, Generative AI & LLMs and MLOps
// are AI & ML modules 5, 4 and 6; AI-Powered Cyber Defense is Cyber Security's module 6; SIEM & Threat
// Hunting is SOC Analyst's modules 4 and 5; Machine Learning is Data Science's module 7), and a short
// introduction that search engines also see as the organisation description.
const HERO_TITLE = 'Technology Training Programs in Cyber Security, AI & ML, Data Science and Data Analytics';
const HERO_POSITIONING = 'Cutting-Edge Upskilling Programs Connecting Higher Education to Corporate Careers.';
const ADVANCED_SKILLS = [
  { label: 'Python Full Stack', course: aiMl },
  { label: 'Agentic AI', course: aiMl },
  { label: 'Generative AI & LLMs', course: aiMl },
  { label: 'MLOps', course: aiMl },
  { label: 'AI-Powered Cyber Defense', course: cyberSecurity },
  { label: 'SIEM & Threat Hunting', course: socAnalyst },
  { label: 'Machine Learning', course: dataScience },
];
const HERO_INTRO =
  'Skill IT Education provides career-focused training in Cyber Security, SOC Analysis, AI & Machine Learning, Data Science and Data Analytics for graduates, IT professionals and career switchers in Madhapur, Hyderabad. Every programme brings hands-on labs, real projects and a real-time internship, so classroom learning turns into skills employers look for.';

// One-line "who can join" note shown above the h1 — owner-supplied (2026-09-22).
const ELIGIBILITY_LABEL = 'Who can learn these programmes:';
const ELIGIBILITY_TEXT = '2025, 2026 & 2027 graduates, Any Branch or Degree — also working professionals and career switchers.';

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
        <div className="wrap home-hero-grid">
          <div className="home-hero-left">
            <a className="hero-mode-badge" href="#our-programmes">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
              Offline / Online &mdash; Hyderabad
            </a>
            <FitHeading className="home-tagline" maxLines={2} minPx={21}>
              {HERO_TITLE}
            </FitHeading>
            <p className="home-positioning">{HERO_POSITIONING}</p>
            <div className="hero-ctas">
              <button type="button" className="btn btn-primary" onClick={() => setAdvisorOpen(true)}>
                Talk to Counsellor
              </button>
              <a className="btn btn-primary" href="#our-programmes">
                Explore Our Programmes
              </a>
            </div>
            <div className="home-hero-rest">
              <div className="home-skills">
                <span className="home-skills-label">Key Skills You Can Learn</span>
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
              <p className="hero-eligibility-note">
                <strong>{ELIGIBILITY_LABEL}</strong> {ELIGIBILITY_TEXT}
              </p>
            </div>
          </div>
          <div className="home-hero-form">
            <BatchCountdown />
            <LeadForm bare formId="hero-form" heading="Get Free Career Guidance" />
          </div>
        </div>
      </section>

      <section className="flow-section" id="our-programmes">
        <div className="wrap">
          <h2 className="flow-section-title">Explore Our Technology Programs</h2>
        </div>
        <div className="flow-outer">
          <ProgrammeFlow programmes={PROGRAMMES} onContact={() => setAdvisorOpen(true)} />
        </div>
      </section>

      <CertStrip />

      <section id="how-you-learn">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How Training Works</span>
            <h2>Learn Through Practical Projects and Labs</h2>
            <p>Every programme is built around doing the work, not just watching it explained.</p>
          </div>
          <ul className="check-list grid-2">
            <li>Hands-on labs in every module, run in your own practice environment</li>
            <li>Real, portfolio-ready projects you can show in interviews</li>
            <li>Industry-standard tools and platforms used on the job, not simplified substitutes</li>
            <li>A knowledge quiz and a practical assessment at the end of every module</li>
            <li>A real-time internship phase after the core curriculum</li>
            <li>Placement assistance — resume support, mock interviews and interview opportunities with hiring partners</li>
          </ul>
        </div>
      </section>

      <section id="fit-finder">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Not Sure Which One?</span>
            <h2>Choose a Program Based on Your Career Goal</h2>
            <p>A quick way to match what you enjoy to the programme built around it.</p>
          </div>
          <div className="fit-panel">
            <div className={`fit-track ${reducedMotion ? 'is-static' : ''}`}>
              <div className="fit-row">
                {/* duplicated once so the marquee can scroll from 0 to -50% and loop with no visible seam */}
                {[...FIT_FINDER, ...FIT_FINDER].map(({ interest, course, image, w, h, tint, tintText }, i) => (
                  <Link
                    className="fit-card"
                    to={course.routeBase}
                    key={`${course.routeBase}-${i}`}
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
          </div>
        </div>
      </section>

      <PlacementPartners />

      <Testimonials />

      <section id="home-faqs">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Have Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p>Courses, eligibility, fees, internships, projects, certifications and placement support — answered in detail.</p>
          </div>
          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-outline" to="/faqs">
              View All FAQs
            </Link>
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

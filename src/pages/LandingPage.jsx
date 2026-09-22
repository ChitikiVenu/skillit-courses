import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DOMAIN, EMAIL, PHONE } from '../constants.js';
import Seo from '../components/Seo.jsx';
import LeadForm from '../components/LeadForm.jsx';
import AdvisorModal from '../components/AdvisorModal.jsx';
import ProgrammeFlow from '../components/ProgrammeFlow.jsx';
import CertStrip from '../components/CertStrip.jsx';
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

// Each card gets a small illustration (public/img/fit/<slug>.svg — a student at a laptop, drawn for this
// site) and a matching tint for its chip and CTA colour. These are illustrations, not photos: there are no
// real photographs of Skill IT students to use honestly, so a stylised drawing is what "attractive, with
// images" means here without implying a real student photo that doesn't exist.
const FIT_FINDER = [
  { interest: 'You want to break into systems and defend them', course: cyberSecurity, image: 'cyber-security', tint: '#e9f0ff', tintText: '#2450d6' },
  { interest: 'You want to build and ship AI-powered products', course: aiMl, image: 'ai-ml', tint: '#f2edff', tintText: '#7c3aed' },
  { interest: 'You like statistics, Python and building predictive models', course: dataScience, image: 'data-science', tint: '#e8faf3', tintText: '#0c9a83' },
  { interest: 'You want to monitor live systems and respond to real attacks', course: socAnalyst, image: 'soc-analyst', tint: '#fff1e6', tintText: '#c2410c' },
  { interest: 'You like Excel, SQL and turning numbers into decisions', course: dataAnalyst, image: 'data-analyst', tint: '#fff8e1', tintText: '#a16207' },
];

// The home page's main heading section: the h1, the most advanced skills the programmes teach (from each programme's own
// modules: Agentic AI, Generative AI and LLMs, MLOps, AI-powered security operations, SIEM and threat hunting, machine
// learning), and a short introduction that search engines also see as the organisation description.
const HERO_TITLE = 'Cutting-Edge Upskilling Programs to Connect Higher Education with Corporate Careers.';
const ADVANCED_SKILLS = ['Agentic AI', 'Generative AI & LLMs', 'MLOps', 'AI-Powered Cyber Defense', 'SIEM & Threat Hunting', 'Machine Learning'];
const HERO_INTRO =
  'Skill IT Education, in Madhapur, Hyderabad, trains graduates, IT professionals and career switchers in Cyber Security, SOC Analyst, AI & ML, Data Science and Data Analytics. Every programme brings hands-on labs, real projects and a real-time internship, so classroom learning turns into skills employers look for.';

export default function LandingPage() {
  const [advisorOpen, setAdvisorOpen] = useState(false);

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
        <h1 className="home-tagline">{HERO_TITLE}</h1>
        <div className="home-hero-rest">
          <div className="home-skills">
            <span className="home-skills-label">Most advanced skills we teach</span>
            <ul>
              {ADVANCED_SKILLS.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <p className="home-intro">{HERO_INTRO}</p>
        </div>
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
            {FIT_FINDER.map(({ interest, course, image, tint, tintText }) => (
              <Link
                className="fit-card"
                to={course.routeBase}
                key={course.routeBase}
                style={{ '--fit-tint': tint, '--fit-tint-text': tintText }}
              >
                <span className="fit-card-visual">
                  <img src={`/img/fit/${image}.svg`} alt="" width="320" height="260" loading="lazy" />
                </span>
                <span className="fit-card-body">
                  <span className="fit-card-programme">{course.COPY.courseShortName}</span>
                  <p className="fit-card-interest">{interest}</p>
                  <span className="fit-card-cta">
                    Explore the programme
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

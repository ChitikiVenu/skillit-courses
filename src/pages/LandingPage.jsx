import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DOMAIN } from '../constants.js';
import Seo from '../components/Seo.jsx';
import LeadForm from '../components/LeadForm.jsx';
import AdvisorModal from '../components/AdvisorModal.jsx';
import ProgrammeFlow from '../components/ProgrammeFlow.jsx';
import { PROGRAMME_BLURBS } from '../data/programmeBlurbs.js';
import cyberSecurity from '../data/cyberSecurity.js';
import aiMl from '../data/aiMl.js';
import dataScience from '../data/dataScience.js';
import socAnalyst from '../data/socAnalyst.js';
import dataAnalyst from '../data/dataAnalyst.js';

// Card copy kept here rather than in each course's own data file — this is the one place all
// five need to be compared side by side, so a short, distinct blurb per course belongs with the
// page that shows them together.
const PROGRAMMES = [
  {
    course: cyberSecurity,
    title: 'Cyber Security With AI',
    blurb: PROGRAMME_BLURBS[cyberSecurity.routeBase],
    roles: ['SOC Analyst', 'Penetration Tester', 'Security Analyst', 'Ethical Hacker', 'Incident Response Analyst', 'Cloud Security Engineer'],
  },
  {
    course: aiMl,
    blurb: PROGRAMME_BLURBS[aiMl.routeBase],
    roles: ['AI Engineer', 'Machine Learning Engineer', 'Generative AI Engineer', 'MLOps Engineer', 'AI Solutions Engineer', 'Backend Developer'],
  },
  {
    course: dataScience,
    blurb: PROGRAMME_BLURBS[dataScience.routeBase],
    roles: ['Data Scientist', 'ML Engineer', 'Data Analyst', 'BI Analyst', 'Data Engineer', 'Analytics Consultant'],
  },
  {
    course: socAnalyst,
    blurb: PROGRAMME_BLURBS[socAnalyst.routeBase],
    roles: ['SOC Analyst', 'Incident Response Analyst', 'Threat Hunter', 'SIEM Engineer', 'Security Monitoring Analyst', 'Threat Intelligence Analyst'],
  },
  {
    course: dataAnalyst,
    blurb: PROGRAMME_BLURBS[dataAnalyst.routeBase],
    roles: ['Data Analyst', 'BI Analyst', 'Business Analyst', 'Reporting Analyst', 'Analytics Consultant', 'Dashboard Developer'],
  },
];

const FIT_FINDER = [
  { interest: 'You want to break into systems and defend them', course: cyberSecurity },
  { interest: 'You want to build and ship AI-powered products', course: aiMl },
  { interest: 'You like statistics, Python and building predictive models', course: dataScience },
  { interest: 'You want to monitor live systems and respond to real attacks', course: socAnalyst },
  { interest: 'You like Excel, SQL and turning numbers into decisions', course: dataAnalyst },
];

export default function LandingPage() {
  const [advisorOpen, setAdvisorOpen] = useState(false);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: PROGRAMMES.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.course.SITE.program,
      url: DOMAIN + p.course.routeBase,
    })),
  };

  return (
    <main>
      <Seo
        title="Skill IT Education | Cyber Security, AI & ML, Data Science Training in Hyderabad"
        description="Job-ready technology training in Hyderabad — Cyber Security, AI & ML, Data Science, SOC Analyst and Data Analytics, with hands-on labs, real projects and a real-time internship."
        path="/"
        jsonLd={jsonLd}
      />

      <section id="programmes" className="programmes-hero">
        <h1 className="sr-only">Skill IT Education: job-ready tech training in Hyderabad</h1>
        <p className="home-tagline">Our programmes are designed to prepare you for the technology careers of tomorrow.</p>
        <div className="flow-outer">
          <ProgrammeFlow programmes={PROGRAMMES} />
        </div>
      </section>

      <section id="fit-finder">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Not Sure Which One?</span>
            <h2>Which programme fits you?</h2>
            <p>A quick way to match what you enjoy to the programme built around it.</p>
          </div>
          <div className="fit-grid">
            {FIT_FINDER.map(({ interest, course }) => (
              <div className="fit-item" key={course.routeBase}>
                <div className="fit-text">
                  <strong>{interest}</strong>
                </div>
                <Link className="fit-cta" to={course.routeBase}>
                  {course.COPY.courseShortName} &rarr;
                </Link>
              </div>
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

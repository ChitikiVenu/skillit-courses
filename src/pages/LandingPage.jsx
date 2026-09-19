import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DOMAIN } from '../constants.js';
import Seo from '../components/Seo.jsx';
import H1Wave from '../components/H1Wave.jsx';
import { ImageHeroVisual } from '../components/HeroVisual.jsx';
import AdvisorModal from '../components/AdvisorModal.jsx';
import ProgrammeFlow from '../components/ProgrammeFlow.jsx';
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
    blurb: 'Ethical hacking, penetration testing and SOC-ready defensive skills.',
    roles: ['SOC Analyst', 'Penetration Tester', 'Security Analyst', 'Ethical Hacker', 'Incident Response Analyst', 'Cloud Security Engineer'],
  },
  {
    course: aiMl,
    blurb: 'Python, machine learning, Generative AI and production AI systems.',
    roles: ['AI Engineer', 'Machine Learning Engineer', 'Generative AI Engineer', 'MLOps Engineer', 'AI Solutions Engineer', 'Backend Developer'],
  },
  {
    course: dataScience,
    blurb: 'Statistics, Python, machine learning and model deployment.',
    roles: ['Data Scientist', 'ML Engineer', 'Data Analyst', 'BI Analyst', 'Data Engineer', 'Analytics Consultant'],
  },
  {
    course: socAnalyst,
    blurb: 'SIEM monitoring, incident response and live threat detection.',
    roles: ['SOC Analyst', 'Incident Response Analyst', 'Threat Hunter', 'SIEM Engineer', 'Security Monitoring Analyst', 'Threat Intelligence Analyst'],
  },
  {
    course: dataAnalyst,
    blurb: 'Excel, SQL, BI dashboards and business reporting.',
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
        title="Our Programmes | Skill IT Education"
        description="Five career-ready technology programmes — Cyber Security, AI & ML, Data Science, SOC Analyst and Data Analytics. Compare modules, duration and fees to find the right one."
        path="/programmes"
        jsonLd={jsonLd}
      />

      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="duration-chip">5 programmes</div>
              <h1>Our Programmes</h1>
              <H1Wave />
              <p className="hero-lede">
                Each programme has hands-on modules, projects for your portfolio and a real-time internship.
                Compare them below, or use the finder to see which one suits you.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-outline" href="#programmes">
                  Compare Programmes
                </a>
                <a className="btn btn-outline" href="#fit-finder">
                  Not Sure Which One?
                </a>
                <button type="button" className="btn btn-primary" onClick={() => setAdvisorOpen(true)}>
                  Talk to an Advisor
                </button>
              </div>
            </div>
            <div className="hero-meta">
              <div className="hero-visual">
                <div className="hero-visual-glow" />
                <div className="hero-mockup-card">
                  <ImageHeroVisual
                    src="/img/our-programmes-diagram.png"
                    alt="Skill IT Education's five programmes — Cyber Security, AI & ML, Data Science, SOC Analyst and Data Analytics"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="floating-badge floating-badge-1">
                  <span className="dot" />5 Programmes
                </div>
                <div className="floating-badge floating-badge-2">
                  <span className="dot" />Internship Included
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="programmes"
        style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '32px 0' }}
      >
        <div className="wrap">
          <div className="section-head flow-section-head">
            <h2>Compare programmes</h2>
          </div>
        </div>
        <div className="flow-outer">
          <ProgrammeFlow programmes={PROGRAMMES} />
        </div>
      </section>

      <section id="fit-finder">
        <div className="wrap">
          <div className="section-head">
            <h2>Which one is right for you?</h2>
            <p>Find the line that sounds most like you.</p>
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

      <section className="cta-banner">
        <div className="wrap">
          <div>
            <h3>Not sure yet? An advisor can match a programme to your background and goals.</h3>
          </div>
          <div className="hero-ctas" style={{ margin: 0 }}>
            <button type="button" className="btn btn-primary" onClick={() => setAdvisorOpen(true)}>
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>

      <AdvisorModal open={advisorOpen} onClose={() => setAdvisorOpen(false)} />
    </main>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DOMAIN } from '../constants.js';
import Seo from '../components/Seo.jsx';
import H1Wave from '../components/H1Wave.jsx';
import { ImageHeroVisual } from '../components/HeroVisual.jsx';
import AdvisorModal from '../components/AdvisorModal.jsx';
import cyberSecurity from '../data/cyberSecurity.js';
import aiMl from '../data/aiMl.js';
import dataScience from '../data/dataScience.js';
import socAnalyst from '../data/socAnalyst.js';
import dataAnalyst from '../data/dataAnalyst.js';

// Card copy kept here rather than in each course's own data file — this is the one place all
// five need to be compared side by side, so a short, distinct blurb per course belongs with the
// page that shows them together.
const PROGRAMMES = [
  { course: cyberSecurity, mono: 'CS', blurb: 'Ethical hacking, penetration testing and SOC-ready defensive skills.' },
  { course: aiMl, mono: 'AI', blurb: 'Python, machine learning, Generative AI and production AI systems.' },
  { course: dataScience, mono: 'DS', blurb: 'Statistics, Python, machine learning and model deployment.' },
  { course: socAnalyst, mono: 'SOC', blurb: 'SIEM monitoring, incident response and live threat detection.' },
  { course: dataAnalyst, mono: 'DA', blurb: 'Excel, SQL, BI dashboards and business reporting.' },
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
        path="/"
        jsonLd={jsonLd}
      />

      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="duration-chip">5 CAREER-READY TECH PROGRAMMES</div>
              <h1>Our Programmes</h1>
              <H1Wave />
              <h2 className="hero-kicker">Find the right programme, not just a course</h2>
              <p className="hero-lede">
                Every programme here is built the same way: hands-on modules, real projects, a portfolio you can
                show, and a real-time industry internship. Compare them below and pick the one that matches where
                you want to end up.
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

      <section id="programmes" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Compare Programmes</span>
            <h2>Pick a programme, see the full curriculum</h2>
            <p>Every card links straight to that programme's modules, projects, career paths and fees.</p>
          </div>
          <div className="roadmap">
            {PROGRAMMES.map(({ course, mono, blurb }) => (
              <Link className="roadmap-item" to={course.routeBase} key={course.routeBase}>
                <div className="idx" style={mono.length > 2 ? { fontSize: 15 } : undefined}>
                  {mono}
                </div>
                <div>
                  <h4>{course.COPY.courseShortName}</h4>
                  <p className="topics">{blurb}</p>
                </div>
                <div className="duration">
                  <span className="hrs">{course.COPY.heroStats[0].value}</span>
                  {course.COPY.heroStats[3].value}
                </div>
              </Link>
            ))}
          </div>
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

      <section className="cta-banner">
        <div className="wrap">
          <div>
            <h3>Still weighing your options?</h3>
            <p>Talk to an advisor — they'll help you match your background and goals to the right programme.</p>
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

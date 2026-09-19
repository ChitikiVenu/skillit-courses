import { Link, useParams } from 'react-router-dom';
import { DOMAIN, PHONE } from '../constants.js';
import Seo from '../components/Seo.jsx';
import H1Wave from '../components/H1Wave.jsx';
import FitHeading from '../components/FitHeading.jsx';
import ToolCard from '../components/ToolCard.jsx';
import NotFoundPage from './NotFoundPage.jsx';

function truncate(s, limit) {
  const trimmed = s.trim();
  if (trimmed.length <= limit) return trimmed;
  const cut = trimmed.slice(0, limit);
  const lastSpace = cut.lastIndexOf(' ');
  const safe = lastSpace > 0 ? cut.slice(0, lastSpace) : cut;
  return safe.replace(/[,.;—-]+$/, '') + '…';
}

const COUNSEL_TEL = 'tel:' + PHONE.replace(/ /g, '');

function CounselButton() {
  return (
    <a className="btn btn-primary" href={COUNSEL_TEL}>
      Book Career Counselling
    </a>
  );
}

export default function CourseModulePage({ course }) {
  const { slug } = useParams();
  const { MODULES, SITE, COPY, routeBase } = course;
  const index = MODULES.findIndex((m) => m.slug === slug);
  if (index === -1) return <NotFoundPage />;

  const m = MODULES[index];
  const prevM = index > 0 ? MODULES[index - 1] : null;
  const nextM = index < MODULES.length - 1 ? MODULES[index + 1] : null;

  const title = `${m.title} | Skill IT Education`;
  const descPrefix = `Module ${m.number} (${m.duration}): `;
  const desc = descPrefix + truncate(m.hero, 155 - descPrefix.length);
  const path = `${routeBase}/${m.slug}`;
  const canonicalUrl = DOMAIN + path;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: COPY.breadcrumbProgramName, item: DOMAIN + routeBase },
          { '@type': 'ListItem', position: 2, name: `Module ${m.number} — ${m.title}`, item: canonicalUrl },
        ],
      },
      {
        '@type': 'Course',
        name: `Module ${m.number} — ${m.title}`,
        description: m.hero,
        url: canonicalUrl,
        provider: { '@type': 'Organization', name: 'Skill IT Education', sameAs: DOMAIN },
        isPartOf: { '@type': 'Course', name: SITE.program, url: DOMAIN + routeBase },
      },
    ],
  };

  return (
    <main>
      <Seo title={title} description={desc} path={path} jsonLd={jsonLd} />

      <section className="hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to={routeBase}>{COPY.breadcrumbProgramName}</Link>
            <span className="sep">/</span>
            <span>Module {m.number}</span>
          </div>
          <div className="hero-grid">
            <div>
              <div className="duration-chip" style={{ marginTop: 22 }}>
                MODULE {m.number} OF {MODULES.length} &nbsp;&middot;&nbsp; {m.hours} &nbsp;&middot;&nbsp; {m.duration}
              </div>
              <FitHeading>{m.title}</FitHeading>
              <H1Wave />
              <p className="hero-lede">{m.hero}</p>
            </div>
            <div className="hero-meta">
              <div className="meta-card">
                <div className="label">Who it is for</div>
                <div className="value">{m.who_for}</div>
              </div>
              <div className="meta-card">
                <div className="label">Why it matters</div>
                <div className="value">{m.relevance}</div>
              </div>
            </div>
          </div>
          <div className="hero-ctas">
            <Link className="btn btn-outline" to={routeBase}>
              Program Overview
            </Link>
            <a className="btn btn-outline" href="#labs">
              View Hands-On Labs
            </a>
            <CounselButton />
          </div>
        </div>
      </section>

      <div className="progress-strip">
        <div className="wrap">
          <div className="progress-dots">
            {MODULES.map((mod, i) => (
              <span key={mod.slug} className={i === index ? 'active' : ''} />
            ))}
          </div>
          <div className="progress-nav">
            {prevM ? <Link to={`${routeBase}/${prevM.slug}`}>&larr; Module {prevM.number}</Link> : <Link to={routeBase}>&larr; Program Overview</Link>}
            <span>
              Module {m.number} of {MODULES.length}
            </span>
            {nextM ? (
              <Link to={`${routeBase}/${nextM.slug}`}>Module {nextM.number} &rarr;</Link>
            ) : (
              <Link to={`${routeBase}#careers`}>Career Outcomes &rarr;</Link>
            )}
          </div>
        </div>
      </div>

      <section id="learn">
        <div className="wrap">
          <div className="section-head">
            <h2>What you will learn</h2>
          </div>
          <ul className="check-list grid-2">
            {m.learn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="tools" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Tools</h2>
          </div>
          <div className="tool-grid">
            {m.tools.map((t) => (
              <ToolCard key={t.name} tool={t} />
            ))}
          </div>
        </div>
      </section>

      <section id="labs">
        <div className="wrap">
          <div className="section-head">
            <h2>Labs</h2>
          </div>
          <div className="lab-list">
            {m.labs.map((l, i) => (
              <div className="lab-item" key={l}>
                <div className="lab-num">{String(i + 1).padStart(2, '0')}</div>
                <p>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="assessment" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Assessment</h2>
          </div>
          <div className="assessment-grid">
            <div className="assessment-card">
              <h4>Knowledge</h4>
              <p>{m.assessment.knowledge}</p>
            </div>
            <div className="assessment-card">
              <h4>Practical</h4>
              <p>{m.assessment.practical}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <div className="section-head">
            <h2>Projects</h2>
          </div>
          <div className="project-grid">
            {m.projects.map((p, i) => (
              <div className="project-card" key={p.title}>
                <span className="tag">Portfolio Project {String(i + 1).padStart(2, '0')}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="outcome" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Outcome</h2>
          </div>
          <div className="outcome-block">
            <p style={{ color: 'var(--text)', fontSize: 15.5 }}>{m.outcome}</p>
            <div
              className="label"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                color: 'var(--text-faint)',
                marginTop: 18,
              }}
            >
              Maps to job roles
            </div>
            <div className="role-chips">
              {m.roles.map((r) => (
                <span className="chip" key={r}>
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="wrap">
          <div>
            <h3>{nextM ? `Next: Module ${nextM.number}, ${nextM.title}` : 'That was the last module. See the job roles next.'}</h3>
          </div>
          <div className="hero-ctas" style={{ margin: 0 }}>
            {nextM ? (
              <Link className="btn btn-outline" to={`${routeBase}/${nextM.slug}`}>
                Go to Module {nextM.number}
              </Link>
            ) : (
              <Link className="btn btn-outline" to={`${routeBase}#careers`}>
                View Career Outcomes
              </Link>
            )}
            <Link className="btn btn-outline" to={`${routeBase}#roadmap`}>
              Full Roadmap
            </Link>
            <CounselButton />
          </div>
        </div>
      </section>
    </main>
  );
}

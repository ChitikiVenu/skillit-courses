import { Link, useParams } from 'react-router-dom';
import { DOMAIN } from '../constants.js';
import Seo from '../components/Seo.jsx';
import LeadForm from '../components/LeadForm.jsx';
import { BLOG_POSTS } from '../data/blogPosts.js';
import NotFoundPage from './NotFoundPage.jsx';

const STARTS_WITH_VOWEL = /^[aeiou]/i;

// Every post is assembled from its course's own COPY / CAREER_TRACKS data — the same data the
// course page itself is built from — so "how do I become X" always matches what the course
// actually teaches, with no separate content to keep in sync.
export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <NotFoundPage />;

  const { course, role } = post;
  const { COPY, CAREER_TRACKS, MODULES, routeBase } = course;
  const article = STARTS_WITH_VOWEL.test(role) ? 'an' : 'a';
  const title = `How Can I Become ${article} ${role}?`;
  const description = `A practical, step-by-step answer: what ${role.toLowerCase()} do, what skills you need, how long it takes and what it pays — based on the ${COPY.courseShortName} programme curriculum.`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: { '@type': 'Organization', name: 'Skill IT Education' },
    publisher: { '@type': 'Organization', name: 'Skill IT Education' },
    mainEntityOfPage: DOMAIN + '/blog/' + slug,
  };

  return (
    <main>
      <Seo title={`${title} | Skill IT Education Blog`} description={description} path={`/blog/${slug}`} jsonLd={jsonLd} />

      <section className="hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/blog">Blog</Link>
            <span className="sep">/</span>
            {title}
          </div>
          <h1>{title}</h1>
          <p className="hero-lede">{COPY.heroLede}</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Roles You Could Move Into</span>
            <h2>Where {STARTS_WITH_VOWEL.test(COPY.courseShortName) ? 'an' : 'a'} {COPY.courseShortName} path leads</h2>
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

      <section style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What You'd Need to Learn</span>
            <h2>{COPY.outcomesTitle}</h2>
          </div>
          <ul className="check-list grid-2">
            {COPY.outcomesList.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Salary Positioning</span>
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

      <section style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How Long It Takes</span>
            <h2>The {COPY.courseShortName} path, step by step</h2>
            <p>
              {MODULES.length} modules, {COPY.heroStats[0].value} total — {COPY.heroStats[1].value} of structured
              learning plus {COPY.heroStats[2].value} of real-time internship.
            </p>
          </div>
          <div className="blog-module-list">
            {MODULES.map((m) => (
              <Link className="blog-module-item" to={`${routeBase}/${m.slug}`} key={m.slug}>
                <span className="blog-module-idx">{String(m.number).padStart(2, '0')}</span>
                <span className="blog-module-title">{m.title}</span>
                <span className="blog-module-dur">
                  {m.hours} &middot; {m.duration}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="wrap">
          <div>
            <h3>Ready to actually become {article} {role}?</h3>
            <p>{COPY.finalCtaSubtitle}</p>
          </div>
          <div className="hero-ctas" style={{ margin: 0 }}>
            <Link className="btn btn-primary" to={routeBase}>
              Explore the {COPY.courseShortName} Curriculum
            </Link>
          </div>
        </div>
      </section>

      <section className="lead-form-section" id="enquire">
        <div className="wrap">
          <LeadForm
            formId="blog-form"
            heading={`Get the ${COPY.courseShortName} Course Fee Structure & Syllabus`}
            subheading="Share your details and our admissions team will call you back with the full syllabus, batch timings and fee breakdown."
            brochureFile={COPY.brochureFile}
            preselectedCourse={COPY.preselectedCourse}
          />
        </div>
      </section>
    </main>
  );
}

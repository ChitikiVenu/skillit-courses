import { Link, useParams } from 'react-router-dom';
import { DOMAIN } from '../constants.js';
import Seo from '../components/Seo.jsx';
import LeadForm from '../components/LeadForm.jsx';
import { BLOG_POSTS } from '../data/blogPosts.js';
import NotFoundPage from './NotFoundPage.jsx';

const STARTS_WITH_VOWEL = /^[aeiou]/i;
const article = (word) => (STARTS_WITH_VOWEL.test(word) ? 'an' : 'a');
const TEL_HREF = (phone) => 'tel:' + phone.replace(/[^\d+]/g, '');

// Every post is assembled from its course's own COPY / CAREER_TRACKS data — the same data the
// course page itself is built from — so "how do I become X" always matches what the course
// actually teaches, with no separate content to keep in sync.
export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <NotFoundPage />;

  const { course, role } = post;
  const { COPY, CAREER_TRACKS, MODULES, SITE, routeBase } = course;
  const title = `How Can I Become ${article(role)} ${role}?`;
  const description = `A practical, step-by-step answer: what ${article(role)} ${role} does, what skills you need, how long it takes and what it pays — based on the ${COPY.courseShortName} programme curriculum.`;
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

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

      <section className="about-skillit">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">About Skill IT Education</span>
            <h2>Job-ready in months, not years</h2>
          </div>
          <div className="about-skillit-body">
            <p>
              Skill IT Education is a hands-on technology training institute based in Madhapur, Hyderabad, built
              around one idea: you learn by doing, not by watching. Every programme we run — Cyber Security, AI
              &amp; ML, Data Science, SOC Analyst and Data Analytics — is built the same way: structured modules,
              real labs, real projects, and a real-time industry internship at the end, not just recorded lectures
              and a certificate.
            </p>
            <p>
              Here's the comparison most people never actually think through: a traditional college degree —
              B.Tech, B.Sc, an MCA — takes three to four years, and even then, most graduates finish without ever
              having built anything a company would actually pay them to build. Our {COPY.courseShortName} programme
              is {COPY.heroStats[0].value.toLowerCase()} from start to finish — {COPY.heroStats[1].value.toLowerCase()} of
              structured, hands-on learning plus {COPY.heroStats[2].value.toLowerCase()} of real-time internship. You
              don't spend years on unrelated subjects; every week is spent on the exact skills the industry is
              hiring for right now.
            </p>
            <p>
              That's the real promise: you can go from zero, or from a loosely related background, to being a
              working, job-ready {role} in months. Whether you're a student still in college, a fresher just out
              of one, or already working and looking to switch fields entirely, the programme is built to get you
              interview-ready and portfolio-ready in one structured run — not a four-year commitment before you
              even know if the field is right for you.
            </p>
            <p>
              We do this by cutting out everything that doesn't directly build your skills. Across{' '}
              {MODULES.length} modules, every single one closes with a lab exercise or a real project, not a quiz.
              The tools you use in class are the same tools you'll be expected to know in an actual job interview
              — not simplified, classroom-only versions of them.
            </p>
            <p>
              By the end, you're not just holding a certificate — you have a portfolio of real, working projects,
              hands-on experience with industry-standard tools, and real-time internship experience to talk about
              in interviews. That's the difference between "I studied this" and "I've actually done this."
            </p>
            <p>
              This path isn't only for career changers. Working professionals use it to move sideways into a
              higher-demand field without quitting their job for years to go back to school. College students use
              it to graduate with something that actually gets them hired, instead of a degree and no
              hands-on experience. Freshers use it as the fastest honest route into the field, without pretending a
              certificate alone will get them through a technical interview.
            </p>
            {otherPosts.length > 0 && (
              <p>
                If becoming {article(role)} {role} isn't quite the right fit for you, Skill IT Education runs{' '}
                {otherPosts.length} other career-focused programmes built the exact same way:{' '}
                {otherPosts.map((p, i) => (
                  <span key={p.slug}>
                    <Link to={`/blog/${p.slug}`}>{p.role}</Link>
                    {i < otherPosts.length - 2 ? ', ' : i === otherPosts.length - 2 ? ' and ' : ''}
                  </span>
                ))}
                .
              </p>
            )}
          </div>
          <div className="contact-card">
            <div className="contact-card-item">
              <span className="contact-card-label">Location</span>
              <span>{SITE.city}, {SITE.region}, {SITE.country}</span>
            </div>
            <div className="contact-card-item">
              <span className="contact-card-label">Address</span>
              <span>{SITE.address}</span>
            </div>
            <div className="contact-card-item">
              <span className="contact-card-label">Phone</span>
              <a href={TEL_HREF(SITE.phone)}>{SITE.phone}</a>
            </div>
            <div className="contact-card-item">
              <span className="contact-card-label">Email</span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Roles You Could Move Into</span>
            <h2>Where {article(COPY.courseShortName)} {COPY.courseShortName} path leads</h2>
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

      <section>
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

      <section style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
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

      <section>
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
            <h3>Ready to actually become {article(role)} {role}?</h3>
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

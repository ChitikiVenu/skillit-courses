import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DOMAIN } from '../constants.js';
import Seo from '../components/Seo.jsx';
import FitHeading from '../components/FitHeading.jsx';
import LeadForm from '../components/LeadForm.jsx';
import LeadFormModal from '../components/LeadFormModal.jsx';
import { ROLE_GROUPS, roleCourse } from '../data/roleCourses/index.js';
import { BLOG_POSTS } from '../data/blogPosts.js';
import NotFoundPage from './NotFoundPage.jsx';

const HERO_IMAGE = '/img/role-course-hero.svg';

// The text of one hands-on item: a lab is a sentence, a project has a title and a description.
function practiceOf(module, practice) {
  if (practice.type === 'lab') return { kind: 'Lab', title: module.labs[practice.index], desc: null };
  const project = module.projects[practice.index];
  return { kind: 'Project', title: project.title, desc: project.desc };
}

const sentenceCase = (q) => q.charAt(0).toUpperCase() + q.slice(1);

// A detailed page for one job role inside a main programme. Everything about the syllabus (module titles,
// hours, topics, tools, labs and projects) is read from the parent programme's own data; the role's data only
// chooses which modules matter, in what order, and how they apply to the role. Duration and fees are the
// parent programme's.
export default function RoleCoursePage() {
  const { parent: parentKey, role: roleSlug } = useParams();
  const role = roleCourse(parentKey, roleSlug);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  if (!role) return <NotFoundPage />;

  const group = ROLE_GROUPS.find((g) => g.key === role.parentKey);
  const { course } = role;
  const { SITE, MODULES, CERTIFICATIONS, COPY, routeBase } = course;
  const siblings = group.roles.filter((r) => r.slug !== role.slug);
  const blogPosts = role.blog.map((slug) => BLOG_POSTS.find((p) => p.slug === slug)).filter(Boolean);
  const url = DOMAIN + role.href;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: `${role.title} Course in Hyderabad`,
      description: role.metaDescription,
      url,
      provider: { '@type': 'EducationalOrganization', name: 'Skill IT Education', sameAs: DOMAIN },
      isPartOf: { '@type': 'Course', name: SITE.program, url: DOMAIN + routeBase },
      teaches: role.skills,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: role.faqs.map((f) => ({ '@type': 'Question', name: sentenceCase(f.q), acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN + '/' },
        { '@type': 'ListItem', position: 2, name: SITE.program, item: DOMAIN + routeBase },
        { '@type': 'ListItem', position: 3, name: `${role.title} Course`, item: url },
      ],
    },
  ];

  return (
    <main>
      {/* No ogImage here — falls back to the default logo (Seo.jsx). role-course-hero.svg is an SVG,
          and most link-preview crawlers (Facebook, LinkedIn included) don't render SVG for og:image. */}
      <Seo title={role.metaTitle} description={role.metaDescription} path={role.href} jsonLd={jsonLd} />

      <section className="hero role-hero">
        <div className="wrap">
          <nav className="role-crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">&rsaquo;</span>
            <Link to={routeBase}>{group.label}</Link>
            <span aria-hidden="true">&rsaquo;</span>
            <span aria-current="page">{role.title}</span>
          </nav>
          <div className="hero-grid">
            <div>
              <div className="duration-chip">{group.label} programme &middot; Role course</div>
              <FitHeading html={`${role.title}<br>Course in Hyderabad`} />
              <h2 className="hero-kicker">
                A role-focused path through the <Link to={routeBase}>{SITE.program.replace(/^Advanced /, '')}</Link>
              </h2>
              <p className="hero-lede">{role.lede}</p>
              <ul className="role-skills" aria-label="Skills you will build">
                {role.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="hero-stats-row">
                {COPY.heroStats.map((s, i) => (
                  <div className={`meta-card meta-card-${i + 1}`} key={s.label}>
                    <div className="label">{s.label}</div>
                    <div className="value">{s.value}</div>
                    {s.note && <div className="meta-note">{s.note}</div>}
                  </div>
                ))}
              </div>
              <p className="role-same-note">Same duration and fees as the {group.label} programme.</p>
              <div className="hero-ctas">
                <a className="btn btn-outline" href="#path">
                  View Learning Path
                </a>
                <button type="button" className="btn btn-outline" onClick={() => setLeadModalOpen(true)}>
                  Download Brochure
                </button>
                <button type="button" className="btn btn-primary" onClick={() => setLeadModalOpen(true)}>
                  Book Career Counselling
                </button>
              </div>
            </div>
            <div className="hero-meta">
              <div className="hero-visual">
                <div className="hero-visual-glow" />
                <div className="hero-mockup-card">
                  <img className="hero-diagram" src={HERO_IMAGE} alt={`Learning path for the ${role.title} role course`} width="900" height="880" loading="eager" />
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
            </div>
          </div>
        </div>
      </section>

      <section id="overview">
        <div className="wrap">
          <div className="role-two">
            <div>
              <div className="section-head">
                <span className="eyebrow">The role</span>
                <h2>What a {role.title} does</h2>
              </div>
              {role.overview.map((p) => (
                <p className="role-para" key={p}>
                  {p}
                </p>
              ))}
            </div>
            <aside className="role-panel">
              <h3>A typical week</h3>
              <ul className="check-list">
                {role.dayToDay.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section id="outcomes" className="role-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">After this course</span>
            <h2>What you will be able to do</h2>
          </div>
          <ul className="check-list role-outcomes">
            {role.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <h3 className="role-sub">Who this course is for</h3>
          <div className="role-whom">
            {role.whoFor.map((w) => (
              <div className="role-whom-card" key={w.who}>
                <h4>{w.who}</h4>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="path">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Learning path</span>
            <h2>What you will learn as a {role.title}</h2>
            <p>
              These are the {group.label} programme modules that matter most for this role, in the order that suits it. Every topic, tool and lab below is
              part of the programme syllabus.
            </p>
          </div>
          <ol className="role-steps">
            {role.path.map((step, i) => {
              const module = MODULES.find((m) => m.number === step.module);
              const practice = practiceOf(module, step.practice);
              return (
                <li className="role-step" key={step.module}>
                  <div className="role-step-num" aria-hidden="true">
                    {i + 1}
                  </div>
                  <div className="role-step-body">
                    <div className="role-step-head">
                      <h3>{module.title}</h3>
                      <span className="role-step-hours">
                        Module {module.number} &middot; {module.hours}
                      </span>
                    </div>
                    <p className="role-step-focus">{step.focus}</p>
                    <div className="role-step-cols">
                      <div>
                        <h4>What you study</h4>
                        <ul>
                          {step.topics.map((t) => (
                            <li key={t}>{module.learn[t]}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>Tools you use</h4>
                        <div className="role-chips">
                          {step.tools.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>
                        <h4>{practice.kind === 'Lab' ? 'Hands-on lab' : 'Hands-on project'}</h4>
                        <p className="role-practice">
                          {practice.desc ? <strong>{practice.title}. </strong> : null}
                          {practice.desc ?? practice.title}
                        </p>
                      </div>
                    </div>
                    <Link className="role-step-link" to={`${routeBase}/${module.slug}`}>
                      See the full module &rarr;
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>
          {role.honestNote && (
            <p className="role-note">
              <strong>What the programme covers for this role. </strong>
              {role.honestNote}
            </p>
          )}
        </div>
      </section>

      <section id="career" className="role-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Career path</span>
            <h2>Where a {role.title} course can take you</h2>
          </div>
          <ol className="role-career">
            {role.careerPath.map((c, i) => (
              <li key={c.title}>
                <span className="role-career-num" aria-hidden="true">
                  {i + 1}
                </span>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </li>
            ))}
          </ol>
          <h3 className="role-sub">Certifications the programme prepares you for</h3>
          <ul className="check-list role-outcomes">
            {role.certifications.map((i) => (
              <li key={i}>{CERTIFICATIONS[i]}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Questions</span>
            <h2>{role.title} course, quick answers</h2>
          </div>
          <div className="post-faq role-faq">
            {role.faqs.map((f) => (
              <div className="post-faq-item" key={f.q}>
                <h3>{sentenceCase(f.q)}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lead-form-section" id="get-details-form">
        <div className="wrap">
          <LeadForm
            formId="role-form"
            heading={`Get the ${role.title} Course Fee Structure & Syllabus`}
            subheading="Share your details and our admissions team will call you back with the full syllabus, batch timings and fee breakdown."
            brochureFile={COPY.brochureFile}
            preselectedCourse={COPY.preselectedCourse ?? COPY.courseShortName}
          />
        </div>
      </section>

      {blogPosts.length > 0 && (
        <section id="insights" className="role-alt">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Career insights</span>
              <h2>Read before you decide</h2>
            </div>
            <div className="role-blog">
              {blogPosts.map((p) => (
                <Link className="role-blog-card" to={`/blog/${p.slug}`} key={p.slug}>
                  <span className="role-blog-tag">{p.courseName}</span>
                  <strong>{p.question}</strong>
                  <span className="role-blog-more">Read the guide &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="more-roles">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">More role courses</span>
            <h2>Other roles in the {group.label} programme</h2>
          </div>
          <div className="role-siblings">
            {siblings.map((r) => (
              <Link className="role-sibling" to={r.href} key={r.href}>
                <strong>{r.title}</strong>
                <span>{r.skills.slice(0, 3).join(' · ')}</span>
                <span className="role-sibling-more">View course &rarr;</span>
              </Link>
            ))}
          </div>
          <div className="role-parent-cta">
            <div>
              <h3>Part of the {SITE.program}</h3>
              <p>
                Every role course follows the same {group.label} programme, with the same modules, labs, projects and internship. See the full syllabus and
                every module.
              </p>
            </div>
            <Link className="btn btn-primary" to={routeBase}>
              See the full programme
            </Link>
          </div>
        </div>
      </section>

      <LeadFormModal open={leadModalOpen} onClose={() => setLeadModalOpen(false)} course={course} />
    </main>
  );
}

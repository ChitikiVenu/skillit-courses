import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DOMAIN } from '../constants.js';
import Seo from '../components/Seo.jsx';
import LeadForm from '../components/LeadForm.jsx';
import ContactCard from '../components/ContactCard.jsx';
import { BLOG_COURSES, BLOG_POSTS } from '../data/blogPosts.js';

export default function BlogIndexPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeKey = searchParams.get('course');
  const activeCourse = BLOG_COURSES.find((c) => c.key === activeKey);
  const tableRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = tableRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // "All" is the mixed, programme-alternating order; a programme filter just narrows that same list.
  const visiblePosts = activeCourse ? BLOG_POSTS.filter((p) => p.courseKey === activeCourse.key) : BLOG_POSTS;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: BLOG_POSTS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.question,
      url: `${DOMAIN}/blog/${p.slug}`,
    })),
  };

  function selectCourse(key) {
    setSearchParams(key ? { course: key } : {}, { replace: true, preventScrollReset: true });
  }

  return (
    <main>
      <Seo
        title="Career Insights | Skill IT Education Blog"
        description="Straight answers to the questions students ask before choosing Cyber Security, AI & ML, Data Science, SOC Analyst or Data Analytics — skills, projects, interviews, salary and placement support."
        path="/blog"
        jsonLd={jsonLd}
      />

      <section className="hero">
        <div className="wrap">
          <h1>Career Insights</h1>
          <p className="hero-lede">
            {BLOG_POSTS.length} real student questions across {BLOG_COURSES.length} programmes, each answered in its own
            step-by-step guide.
          </p>
          <div className={`insights-table ${inView ? 'in-view' : ''}`} ref={tableRef}>
            <button
              type="button"
              className={`insights-cell ${!activeCourse ? 'active' : ''}`}
              style={{ transitionDelay: '0s' }}
              onClick={() => selectCourse(null)}
              aria-pressed={!activeCourse}
            >
              <span className="insights-cell-name">All Insights</span>
              <span className="insights-cell-label">{BLOG_POSTS.length} articles</span>
              <span className="insights-cell-arrow">&rarr;</span>
            </button>
            {BLOG_COURSES.map((c, i) => (
              <button
                type="button"
                className={`insights-cell ${activeCourse?.key === c.key ? 'active' : ''}`}
                key={c.key}
                style={{ transitionDelay: `${(i + 1) * 0.08}s` }}
                onClick={() => selectCourse(c.key)}
                aria-pressed={activeCourse?.key === c.key}
              >
                <span className="insights-cell-name">{c.name}</span>
                <span className="insights-cell-label">{c.count} articles</span>
                <span className="insights-cell-arrow">&rarr;</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="insight-section">
        <div className="wrap">
          <div className="insight-grid" aria-live="polite">
            {visiblePosts.map((p) => (
              <Link className="insight-card" data-course={p.courseKey} to={`/blog/${p.slug}`} key={p.slug}>
                <span className="insight-card-tag">{p.courseName}</span>
                <span className="insight-card-headline">{p.question}</span>
                <span className="insight-card-cta">Read the answer &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="lead-form-section" id="enquire">
        <div className="wrap">
          <LeadForm
            formId="blog-index-form"
            heading="Not sure which programme fits you? Talk to our admissions team"
            subheading="Share your details and we will call you back with the syllabus, batch timings and fee breakdown for the programme you are considering."
            brochureFile={activeCourse?.course.COPY.brochureFile}
            preselectedCourse={activeCourse && (activeCourse.course.COPY.preselectedCourse ?? activeCourse.name)}
            key={activeCourse?.key ?? 'all'}
          />
          <ContactCard />
        </div>
      </section>
    </main>
  );
}

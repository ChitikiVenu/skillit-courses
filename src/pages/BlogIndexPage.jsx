import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { BLOG_POSTS } from '../data/blogPosts.js';

function InsightAccordion({ post }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="insight-accordion">
      {post.insights.map((item, i) => {
        const open = openIdx === i;
        return (
          <div className={`insight-item ${open ? 'open' : ''}`} key={item.q}>
            <button type="button" className="insight-question" onClick={() => setOpenIdx(open ? null : i)} aria-expanded={open}>
              {item.q}
              <span className="insight-toggle" aria-hidden="true">{open ? '−' : '+'}</span>
            </button>
            {open && <p className="insight-answer">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

function ProgrammeInsights({ post }) {
  return (
    <div className="programme-insights" id={post.slug}>
      <div className="programme-insights-head">
        <span className="eyebrow">{post.course.COPY.courseShortName}</span>
        <h2>{post.course.COPY.courseShortName} Insights</h2>
        <p>{post.insights.length} questions students search before choosing {post.course.COPY.courseShortName}.</p>
      </div>
      <InsightAccordion post={post} />
      <Link className="programme-insights-link" to={`/blog/${post.slug}`}>
        Read the full {post.course.COPY.courseShortName} career guide &rarr;
      </Link>
    </div>
  );
}

export default function BlogIndexPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSlug = searchParams.get('course');
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

  const visiblePosts = activeSlug ? BLOG_POSTS.filter((p) => p.slug === activeSlug) : BLOG_POSTS;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: BLOG_POSTS.flatMap((p) =>
      p.insights.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    ),
  };

  function selectCourse(slug) {
    if (slug) setSearchParams({ course: slug });
    else setSearchParams({});
  }

  return (
    <main>
      <Seo
        title="Career Insights | Skill IT Education Blog"
        description="How do I become a Cyber Security Professional, AI/ML Engineer, Data Scientist, SOC Analyst or Data Analyst? Real student questions, answered — skills, salary, timeline and the best academy for training."
        path="/blog"
        jsonLd={jsonLd}
      />

      <section className="hero">
        <div className="wrap">
          <h1>Career Insights</h1>
          <p className="hero-lede">All 5 programmes, the questions students actually search before choosing one.</p>
          <div className={`insights-table ${inView ? 'in-view' : ''}`} ref={tableRef}>
            <button
              type="button"
              className={`insights-cell ${!activeSlug ? 'active' : ''}`}
              style={{ transitionDelay: '0s' }}
              onClick={() => selectCourse(null)}
            >
              <span className="insights-cell-name">All Insights</span>
              <span className="insights-cell-label">{BLOG_POSTS.length} Programmes</span>
              <span className="insights-cell-arrow">&rarr;</span>
            </button>
            {BLOG_POSTS.map((p, i) => (
              <button
                type="button"
                className={`insights-cell ${activeSlug === p.slug ? 'active' : ''}`}
                key={p.slug}
                style={{ transitionDelay: `${(i + 1) * 0.08}s` }}
                onClick={() => selectCourse(p.slug)}
              >
                <span className="insights-cell-name">{p.course.COPY.courseShortName}</span>
                <span className="insights-cell-label">Insights</span>
                <span className="insights-cell-arrow">&rarr;</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          {visiblePosts.map((p) => (
            <ProgrammeInsights post={p} key={p.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}

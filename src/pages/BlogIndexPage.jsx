import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { BLOG_POSTS } from '../data/blogPosts.js';

const STARTS_WITH_VOWEL = /^[aeiou]/i;
const postTitle = (p) => `How Can I Become ${STARTS_WITH_VOWEL.test(p.role) ? 'an' : 'a'} ${p.role}?`;

export default function BlogIndexPage() {
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: BLOG_POSTS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: postTitle(p),
      url: `/blog/${p.slug}`,
    })),
  };

  return (
    <main>
      <Seo
        title="Career Insights | Skill IT Education Blog"
        description="How do I become a Cyber Security Professional, AI/ML Engineer, Data Scientist, SOC Analyst or Data Analyst? Five practical career insights — skills, salary, timeline and next steps."
        path="/blog"
        jsonLd={jsonLd}
      />

      <section className="hero">
        <div className="wrap">
          <h1>Career Insights</h1>
          <p className="hero-lede">All 5 programmes, one straight answer each: how do I actually become one of these?</p>
          <div className={`insights-table ${inView ? 'in-view' : ''}`} ref={tableRef}>
            {BLOG_POSTS.map((p, i) => (
              <Link className="insights-cell" to={`/blog/${p.slug}`} key={p.slug} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="insights-cell-name">{p.course.COPY.courseShortName}</span>
                <span className="insights-cell-label">Insights</span>
                <span className="insights-cell-arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="blog-grid">
            {BLOG_POSTS.map((p) => (
              <Link className="blog-card" to={`/blog/${p.slug}`} key={p.slug}>
                <span className="eyebrow">{p.course.COPY.courseShortName}</span>
                <h3>{postTitle(p)}</h3>
                <p>{p.course.COPY.heroLede}</p>
                <span className="blog-card-cta">Read the guide &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

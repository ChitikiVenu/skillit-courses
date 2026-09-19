import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { BLOG_POSTS } from '../data/blogPosts.js';

const STARTS_WITH_VOWEL = /^[aeiou]/i;
const postTitle = (p) => `How Can I Become ${STARTS_WITH_VOWEL.test(p.role) ? 'an' : 'a'} ${p.role}?`;

export default function BlogIndexPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');

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
        title="Career Guides | Skill IT Education Blog"
        description="How do I become a Cyber Security Professional, AI/ML Engineer, Data Scientist, SOC Analyst or Data Analyst? Five practical career guides — skills, salary, timeline and next steps."
        path="/blog"
        jsonLd={jsonLd}
      />

      <section className="hero">
        <div className="wrap">
          <h1>Career Guides</h1>
          <p className="hero-lede">
            Five straight answers to "how do I actually become one of these?" — pick a role below.
          </p>
          <div className="blog-picker">
            <label htmlFor="blog-picker-select">Jump to a guide</label>
            <select
              id="blog-picker-select"
              value={selected}
              onChange={(e) => {
                const slug = e.target.value;
                setSelected(slug);
                if (slug) navigate(`/blog/${slug}`);
              }}
            >
              <option value="">Choose a career path&hellip;</option>
              {BLOG_POSTS.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {postTitle(p)}
                </option>
              ))}
            </select>
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

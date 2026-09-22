import { useMemo, useState } from 'react';
import Seo from '../components/Seo.jsx';
import LeadForm from '../components/LeadForm.jsx';
import ContactCard from '../components/ContactCard.jsx';
import { FAQ_CATEGORIES, FAQ_TOTAL } from '../data/faq.js';

const slug = (key, i) => `faq-${key}-${i}`;

function FaqItem({ item, id, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <h3 className="faq-q-wrap">
        <button type="button" className="faq-q" id={`${id}-q`} aria-expanded={isOpen} aria-controls={`${id}-a`} onClick={onToggle}>
          <span>{item.q}</span>
          <span className="faq-caret" aria-hidden="true">
            &#9662;
          </span>
        </button>
      </h3>
      <div className="faq-a-grid">
        <div className="faq-a-inner">
          <div className="faq-a" id={`${id}-a`} role="region" aria-labelledby={`${id}-q`}>
            <p>{item.a}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// A subject-wise FAQ page: a headline + quick category nav (same pattern as the Career Insights
// filter row), then every category as its own bordered box holding an accordion of questions. A
// simple client-side search narrows every box at once, matching Career Insights' "one mixed wall,
// filterable" feel but as expand/collapse Q&A instead of link cards.
export default function FaqPage() {
  const [query, setQuery] = useState('');
  const [openKeys, setOpenKeys] = useState(() => new Set());

  const toggle = (id) => {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const normalizedQuery = query.trim().toLowerCase();
  const visibleCategories = useMemo(() => {
    if (!normalizedQuery) return FAQ_CATEGORIES;
    return FAQ_CATEGORIES.map((c) => ({
      ...c,
      items: c.items.filter((item) => item.q.toLowerCase().includes(normalizedQuery) || item.a.toLowerCase().includes(normalizedQuery)),
    })).filter((c) => c.items.length > 0);
  }, [normalizedQuery]);

  const visibleCount = visibleCategories.reduce((n, c) => n + c.items.length, 0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_CATEGORIES.flatMap((c) =>
      c.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    ),
  };

  return (
    <main>
      <Seo
        title="FAQs — Courses, Fees, Internships & Placement | Skill IT Education"
        description={`${FAQ_TOTAL}+ answers on our Cyber Security, AI & ML, Data Science, SOC Analyst and Data Analytics programmes — curriculum, fees, batches, internships, placement assistance and certifications.`}
        path="/faqs"
        jsonLd={jsonLd}
      />

      <section className="hero faq-hero">
        <div className="wrap">
          <h1>Frequently Asked Questions</h1>
          <p className="hero-lede">
            {FAQ_TOTAL}+ straight answers across {FAQ_CATEGORIES.length} topics — courses and curriculum, fees, batches, internships,
            certifications and placement assistance. Including the one question every student asks first: no, we do not promise 100%
            placement, but every student who completes their programme gets up to 6 interview opportunities with our hiring partners.
          </p>

          <div className="faq-search">
            <svg className="faq-search-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              placeholder="Search all questions — e.g. fees, internship, refund, placement…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search FAQs"
            />
          </div>

          {!normalizedQuery && (
            <nav className="faq-nav" aria-label="Jump to a topic">
              {FAQ_CATEGORIES.map((c) => (
                <a className="faq-nav-item" href={`#${c.key}`} key={c.key} style={{ '--faq-accent': c.accent }}>
                  <span className="faq-nav-name">{c.label}</span>
                  <span className="faq-nav-count">{c.items.length} questions</span>
                </a>
              ))}
            </nav>
          )}
        </div>
      </section>

      <section className="faq-section">
        <div className="wrap">
          {normalizedQuery && (
            <p className="faq-results-count" aria-live="polite">
              {visibleCount} result{visibleCount === 1 ? '' : 's'} for &ldquo;{query.trim()}&rdquo;
            </p>
          )}

          {normalizedQuery && visibleCategories.length === 0 && (
            <div className="faq-empty">
              <p>No questions match that search. Try a different word, or ask us directly.</p>
              <a className="btn btn-primary" href="#enquire">
                Talk to an Advisor
              </a>
            </div>
          )}

          <div className="faq-categories">
            {visibleCategories.map((c) => (
              <div className="faq-box" id={c.key} key={c.key} style={{ '--faq-accent': c.accent }}>
                <div className="faq-box-head">
                  <div>
                    <h2>{c.label}</h2>
                    <p>{c.blurb}</p>
                  </div>
                  <span className="faq-box-count">{c.items.length} questions</span>
                </div>
                <div className="faq-list">
                  {c.items.map((item, i) => {
                    const id = slug(c.key, i);
                    return <FaqItem item={item} id={id} key={id} isOpen={openKeys.has(id)} onToggle={() => toggle(id)} />;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lead-form-section" id="enquire">
        <div className="wrap">
          <LeadForm
            formId="faq-form"
            heading="Still have a question?"
            subheading="Share your details and our admissions team will call you back with straight answers on syllabus, fees, batch timings and placement support."
          />
          <ContactCard />
        </div>
      </section>
    </main>
  );
}

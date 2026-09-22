import { Link, useParams } from 'react-router-dom';
import { DOMAIN } from '../constants.js';
import { SITE_LOGO } from '../config/site.js';
import Seo from '../components/Seo.jsx';
import LeadForm from '../components/LeadForm.jsx';
import ContactCard from '../components/ContactCard.jsx';
import { BLOG_POSTS } from '../data/blogPosts.js';
import { rolesForCourse } from '../data/roleCourses/index.js';
import NotFoundPage from './NotFoundPage.jsx';

const WORDS_PER_MINUTE = 200;
const META_DESCRIPTION_LIMIT = 158;

const sentenceCase = (q) => q.charAt(0).toUpperCase() + q.slice(1);

// About 60 of the 120 posts (the newer salary/search-question articles) don't have their own
// hand-written metaDescription, so the meta tag falls back to the post's lede — but a lede is an
// intro paragraph, often 250-500 characters, too long for a meta description. This truncates it at a
// word boundary instead of hand-writing 60 more descriptions (which risked drifting from the real
// content) or letting an oversized description ship as-is.
function truncate(s, limit) {
  const trimmed = s.trim();
  if (trimmed.length <= limit) return trimmed;
  const cut = trimmed.slice(0, limit);
  const lastSpace = cut.lastIndexOf(' ');
  const safe = lastSpace > 0 ? cut.slice(0, lastSpace) : cut;
  return safe.replace(/[,.;—-]+$/, '') + '…';
}

const anchorId = (heading) =>
  'sec-' +
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);

function wordCount(post) {
  const parts = [post.lede, post.closing.heading, post.closing.text];
  post.blocks.forEach((b) => {
    parts.push(b.heading, b.intro, ...(b.paras ?? []), ...(b.items ?? []));
    (b.steps ?? []).forEach((s) => parts.push(s.title, s.text));
    (b.people ?? []).forEach((s) => parts.push(s.who, s.text));
    (b.cards ?? []).forEach((s) => parts.push(s.title, s.text));
    (b.faqs ?? []).forEach((s) => parts.push(s.q, s.a));
  });
  return parts.filter(Boolean).join(' ').split(/\s+/).length;
}

function Block({ block }) {
  return (
    <>
      <h2>{block.heading}</h2>
      {block.intro && <p className="post-intro">{block.intro}</p>}
      {block.kind === 'text' && block.paras.map((para) => <p key={para}>{para}</p>)}
      {block.kind === 'steps' && (
        <ol className="post-steps">
          {block.steps.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      )}
      {block.kind === 'whom' && (
        <div className="post-whom">
          {block.people.map((p) => (
            <div className="post-whom-card" key={p.who}>
              <h3>{p.who}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      )}
      {block.kind === 'list' && (
        <ul className="check-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {block.kind === 'faq' && (
        <div className="post-faq">
          {block.faqs.map((f) => (
            <div className="post-faq-item" key={f.q}>
              <h3>{sentenceCase(f.q)}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      )}
      {block.kind === 'links' && (
        <div className="post-links">
          {block.buttons.map((b) => (
            <Link key={b.to} to={b.to} className={`btn ${b.primary ? 'btn-primary' : 'btn-outline'}`}>
              {b.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      )}
      {block.kind === 'cards' && (
        <div className="post-cards">
          {block.cards.map((c) => (
            <div className="post-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

// Each Career Insights post is a standalone article about one question. The way out is the back
// link to the Career Insights grid and, for posts that have one, a `links` block of backlink buttons
// (programme pages and related posts).
export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <NotFoundPage />;

  const { COPY } = post.course;
  const minutes = Math.max(1, Math.round(wordCount(post) / WORDS_PER_MINUTE));
  const toc = post.blocks.map((b) => ({ id: anchorId(b.heading), label: b.heading }));
  toc.push({ id: anchorId(post.closing.heading), label: post.closing.heading });

  // Posts can carry a `faq` block of short question-and-answer pairs. They are shown on the page and also
  // sent to search engines as FAQPage structured data, together with the article's own question.
  const roleCourses = rolesForCourse(post.course.routeBase);
  const faqs = post.blocks.filter((b) => b.kind === 'faq').flatMap((b) => b.faqs);
  const pageUrl = `${DOMAIN}/blog/${post.slug}`;
  const metaDescription = post.metaDescription ?? truncate(post.lede, META_DESCRIPTION_LIMIT);
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.question,
      description: metaDescription,
      author: { '@type': 'Organization', name: 'Skill IT Education' },
      publisher: { '@type': 'Organization', name: 'Skill IT Education', logo: { '@type': 'ImageObject', url: SITE_LOGO } },
      image: SITE_LOGO,
      mainEntityOfPage: pageUrl,
      ...(post.published ? { datePublished: post.published, dateModified: post.published } : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: post.question, acceptedAnswer: { '@type': 'Answer', text: post.lede } },
        ...faqs.map((f) => ({ '@type': 'Question', name: sentenceCase(f.q), acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN + '/' },
        { '@type': 'ListItem', position: 2, name: 'Career Insights', item: `${DOMAIN}/blog` },
        { '@type': 'ListItem', position: 3, name: post.question, item: pageUrl },
      ],
    },
  ];

  return (
    <main data-course={post.courseKey}>
      <Seo
        title={post.metaTitle ?? `${post.question} | Skill IT Education`}
        description={metaDescription}
        path={`/blog/${post.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />

      <section className="hero post-hero">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/blog">Career Insights</Link>
            <span className="sep">/</span>
            <span aria-current="page">{post.courseName}</span>
          </nav>
          <Link className="post-back" to="/blog">
            &larr; All Career Insights
          </Link>
          <span className="post-course-tag" data-course={post.courseKey}>
            {post.courseName}
          </span>
          <h1>{post.question}</h1>
          <p className="hero-lede">{post.lede}</p>
          <div className="post-meta">
            <span>Skill IT Education</span>
            <span aria-hidden="true">&middot;</span>
            <span>{minutes} min read</span>
          </div>
        </div>
      </section>

      <section className="post-body">
        <div className="wrap post-layout">
          <article className="post-article">
            {post.blocks.map((b) => (
              <section className={`post-block post-block-${b.kind}`} id={anchorId(b.heading)} key={b.heading}>
                <Block block={b} />
              </section>
            ))}
            <section className="post-block post-closing" id={anchorId(post.closing.heading)}>
              <h2>{post.closing.heading}</h2>
              <p>{post.closing.text}</p>
            </section>
          </article>
          <aside className="post-toc" aria-label="Contents">
            <span className="post-toc-label">In this guide</span>
            <ol>
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.label}</a>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      {roleCourses.length > 0 && (
        <section className="post-roles">
          <div className="wrap">
            <div className="post-roles-box">
              <div>
                <h2>Train for a {post.courseName} role</h2>
                <p>The same programme, duration and fees, with the learning path built around one job role.</p>
              </div>
              <div className="post-links">
                {roleCourses.map((r) => (
                  <Link key={r.href} to={r.href} className="btn btn-outline">
                    {r.title}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="lead-form-section" id="enquire">
        <div className="wrap">
          <LeadForm
            formId="blog-form"
            heading={post.formHeading}
            subheading={post.formSubheading}
            brochureFile={COPY.brochureFile}
            preselectedCourse={COPY.preselectedCourse ?? COPY.courseShortName}
          />
          <ContactCard />
        </div>
      </section>
    </main>
  );
}

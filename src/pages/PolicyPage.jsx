import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { DOMAIN, EMAIL, GRIEVANCE_OFFICER_NAME, LEGAL_ADDRESS, LEGAL_NAME, PHONE, POLICIES_UPDATED, WEBSITE } from '../constants.js';

const anchor = (i, heading) => `s${i + 1}-` + heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40);
const TEL = 'tel:' + PHONE.replace(/[^\d+]/g, '');

function ContactBlock() {
  return (
    <div className="policy-contact">
      <strong>{LEGAL_NAME}</strong>
      <dl>
        <dt>Grievance Officer</dt>
        <dd>{GRIEVANCE_OFFICER_NAME ? `${GRIEVANCE_OFFICER_NAME}, Grievance Officer` : 'Attn: Grievance Officer'}</dd>
        <dt>Address</dt>
        <dd>{LEGAL_ADDRESS}</dd>
        <dt>Phone</dt>
        <dd>
          <a href={TEL}>{PHONE}</a>
        </dd>
        <dt>Email</dt>
        <dd>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </dd>
        <dt>Website</dt>
        <dd>{WEBSITE}</dd>
      </dl>
    </div>
  );
}

function Block({ block }) {
  switch (block.t) {
    case 'p':
      return <p>{block.text}</p>;
    case 'h3':
      return <h3>{block.text}</h3>;
    case 'ul':
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'note':
      return <p className="policy-note">{block.text}</p>;
    case 'table':
      return (
        <div className="policy-table-wrap">
          <table className="policy-table">
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={i} data-label={block.head[i]}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'contact':
      return <ContactBlock />;
    default:
      return null;
  }
}

// A long-form legal page: title, last-updated date, the "in brief" points, the numbered sections and a contents list.
export default function PolicyPage({ policy, related }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: policy.title,
    url: `${DOMAIN}/${policy.slug}`,
    description: policy.metaDescription,
    publisher: { '@type': 'Organization', name: LEGAL_NAME },
  };

  return (
    <main>
      <Seo title={policy.metaTitle} description={policy.metaDescription} path={`/${policy.slug}`} jsonLd={jsonLd} />

      <section className="hero policy-hero">
        <div className="wrap">
          <h1>{policy.title}</h1>
          <p className="policy-updated">
            {LEGAL_NAME} &middot; Last updated: {POLICIES_UPDATED}
          </p>
          {policy.intro.map((text) => (
            <p className="hero-lede" key={text}>
              {text}
            </p>
          ))}
          <div className="policy-brief" aria-label="In brief">
            {policy.brief.map((b) => (
              <div className="policy-brief-card" key={b.title}>
                <strong>{b.title}</strong>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="post-body policy-body">
        <div className="wrap post-layout">
          <article className="post-article policy-article">
            {policy.sections.map((s, i) => (
              <section className="policy-section" id={anchor(i, s.heading)} key={s.heading}>
                <h2>
                  <span className="policy-num">{i + 1}.</span> {s.heading}
                </h2>
                {s.blocks.map((b, j) => (
                  <Block block={b} key={j} />
                ))}
              </section>
            ))}
            {related && (
              <p className="policy-related">
                Read next: <Link to={related.to}>{related.label}</Link>
              </p>
            )}
          </article>
          <aside className="post-toc" aria-label="Contents">
            <span className="post-toc-label">On this page</span>
            <ol>
              {policy.sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#${anchor(i, s.heading)}`}>{s.heading}</a>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>
    </main>
  );
}

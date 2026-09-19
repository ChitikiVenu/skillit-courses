import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPostForCourse } from '../data/blogPosts.js';

const ROW_HEIGHT = 118;
const MODULE_X1 = 34;
const MODULE_X2 = 95;
const LAPTOP_X = 12;

// Same left-to-right funnel language as the landing page's programme flow: a bigger laptop asks
// "How can I become a ___?", a "Get an Answer" button on its screen leads to that role's blog
// post, and a line runs out to every module in this course — one column, one name + hours +
// Explore Me per module.
export default function ModuleFlow({ course }) {
  const { MODULES, COPY, routeBase } = course;
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [size, setSize] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      if (w > 0) setSize(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const n = MODULES.length;
  const rowY = (i) => (n === 1 ? 50 : 10 + i * (80 / (n - 1)));
  const wrapHeight = Math.max(520, n * ROW_HEIGHT + 140);

  const post = blogPostForCourse(course);
  const answerHref = post ? `/blog/${post.slug}` : '/blog';

  return (
    <div className={`module-flow-wrap ${inView ? 'in-view' : ''}`} ref={wrapRef} style={{ height: `${wrapHeight}px` }}>
      {size > 0 && (
        <svg className="module-flow-lines" viewBox={`0 0 ${size} ${wrapHeight}`} preserveAspectRatio="none" aria-hidden="true">
          {MODULES.map((m, i) => {
            const y = (rowY(i) / 100) * wrapHeight;
            const x1 = ((LAPTOP_X + 9) / 100) * size;
            const x2 = (MODULE_X1 / 100) * size;
            return <line key={m.slug} x1={x1} y1={wrapHeight / 2} x2={x2} y2={y} vectorEffect="non-scaling-stroke" />;
          })}
        </svg>
      )}

      <div className="module-flow-laptop" style={{ left: `${LAPTOP_X}%` }}>
        <div className="module-flow-laptop-inner">
          <img src="/img/computer-illustration.png" alt="" width={320} height={193} loading="lazy" />
          <div className="module-flow-screen">
            <p className="module-flow-question">
              How can I become {post && /^[aeiou]/i.test(post.role) ? 'an' : 'a'} {post ? post.role : COPY.courseShortName}?
            </p>
            <Link to={answerHref} className="module-flow-answer-btn">
              Get an Answer
            </Link>
          </div>
        </div>
      </div>

      {MODULES.map((m, i) => (
        <Link
          key={m.slug}
          to={`${routeBase}/${m.slug}`}
          className="module-flow-card"
          style={{ left: `${MODULE_X1}%`, width: `${MODULE_X2 - MODULE_X1}%`, top: `${rowY(i)}%` }}
        >
          <span className="module-flow-idx">{String(m.number).padStart(2, '0')}</span>
          <h4>{m.title}</h4>
          <div className="module-flow-bottom">
            <span className="module-flow-hrs">
              {m.hours} &middot; {m.duration}
            </span>
            <span className="module-flow-explore-btn">{'{<Explore Me />}'}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

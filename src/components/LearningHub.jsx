import { useEffect, useRef, useState } from 'react';

// A hub-and-spoke "arena": the Skill IT logo in the centre and eight things every programme includes
// around it. When the section scrolls into view the eight tiles burst out from the centre to their
// places and the lines to them draw in; it replays every time the section comes back into view.
// Every item is a fact already stated on the site (labs, projects, mentors, internship, certification
// preparation, mock interviews, placement assistance, live batches).
const STROKE = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

const ITEMS = [
  {
    label: 'Hands-on Labs',
    desc: 'Practice in real lab environments',
    icon: (
      <>
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" {...STROKE} />
        <path d="M7.5 15h9" {...STROKE} />
      </>
    ),
  },
  {
    label: 'Real Projects',
    desc: 'Portfolio-ready work to show',
    icon: (
      <>
        <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" {...STROKE} />
        <path d="m9 13 2 2 4-4" {...STROKE} />
      </>
    ),
  },
  {
    label: 'Expert Mentors',
    desc: 'Instructor-led guidance',
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" {...STROKE} />
        <path d="M3 20a6 6 0 0 1 12 0" {...STROKE} />
        <path d="M16 6.5a3 3 0 0 1 0 5.5M18 20a6 6 0 0 0-3-5.2" {...STROKE} />
      </>
    ),
  },
  {
    label: 'Real-time Internship',
    desc: 'Work on live problems',
    icon: (
      <>
        <rect x="3" y="8" width="18" height="12" rx="2" {...STROKE} />
        <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" {...STROKE} />
      </>
    ),
  },
  {
    label: 'Certification Prep',
    desc: 'Aligned to industry exams',
    icon: (
      <>
        <circle cx="12" cy="9" r="5" {...STROKE} />
        <path d="m9 13.5-1.5 7 4.5-2.5 4.5 2.5-1.5-7" {...STROKE} />
      </>
    ),
  },
  {
    label: 'Mock Interviews',
    desc: 'Interview-ready practice',
    icon: (
      <>
        <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" {...STROKE} />
        <path d="M8 9.5h8M8 12.5h5" {...STROKE} />
      </>
    ),
  },
  {
    label: 'Placement Assistance',
    desc: 'Resume support & hiring partners',
    icon: (
      <>
        <circle cx="12" cy="12" r="8" {...STROKE} />
        <circle cx="12" cy="12" r="4" {...STROKE} />
        <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="currentColor" />
      </>
    ),
  },
  {
    label: 'Live Batches',
    desc: 'Online & offline in Hyderabad',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" {...STROKE} />
        <path d="M3 10h18M8 3v4M16 3v4" {...STROKE} />
        <path d="m9.5 15 2 2 3.5-3.5" {...STROKE} />
      </>
    ),
  },
];

// Positions on an ellipse around the centre, starting at the top and going clockwise (percent of the stage).
const nodes = ITEMS.map((item, i) => {
  const angle = (-90 + i * 45) * (Math.PI / 180);
  return { ...item, x: 50 + 38 * Math.cos(angle), y: 50 + 39 * Math.sin(angle), delay: i * 0.07 };
});

export default function LearningHub() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="learning-arena" className="hub-section">
      <div className="wrap">
        <div className="hub-head">
          <span className="eyebrow">What You Get</span>
          <h2>Your Complete Learning Arena</h2>
          <p>Everything around your programme, in one place.</p>
        </div>
        <div className={`hub-stage${inView ? ' is-in' : ''}`} ref={ref}>
          <svg className="hub-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {nodes.map((n) => (
              <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} pathLength="1" style={{ '--d': `${n.delay + 0.35}s` }} />
            ))}
          </svg>
          <div className="hub-core" aria-hidden="true">
            <span className="hub-core-ring" />
            <span className="hub-core-ring hub-core-ring-2" />
            <span className="hub-core-disc">
              <img src="/img/skill-it-logo.png" alt="" width="152" height="156" />
            </span>
          </div>
          <ul className="hub-nodes">
            {nodes.map((n) => (
              <li key={n.label} className="hub-node" style={{ left: `${n.x}%`, top: `${n.y}%`, '--dx': `${50 - n.x}cqw`, '--dy': `${50 - n.y}cqw`, '--delay': `${n.delay}s` }}>
                <span className="hub-tile">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {n.icon}
                  </svg>
                </span>
                <strong>{n.label}</strong>
                <span className="hub-desc">{n.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

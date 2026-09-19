import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMMES } from '../constants.js';
import { BLOG_COURSES } from '../data/blogPosts.js';

function NavMenu({ label, to, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div className="programmes-menu" ref={ref}>
      <div className="programmes-menu-trigger">
        <Link to={to} className="programmes-menu-label" onClick={() => setOpen(false)}>
          {label}
        </Link>
        <button
          type="button"
          className="programmes-menu-caret-btn"
          aria-haspopup="true"
          aria-expanded={open}
          aria-label={`Toggle ${label} menu`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`programmes-menu-caret ${open ? 'open' : ''}`} aria-hidden="true">
            &#9662;
          </span>
        </button>
      </div>
      {open && (
        <div className="programmes-menu-panel" role="menu">
          {items.map((item) => (
            <Link key={item.path} to={item.path} className="programmes-menu-item" role="menuitem" onClick={() => setOpen(false)}>
              {item.label}
              {item.soon && <span className="programmes-menu-soon">Coming soon</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// Deliberately minimal — the header carries Home, "Our Programmes" and "Career Insights",
// nothing else (no logo, no other nav links, no CTAs).
export default function Header() {
  const programmeItems = PROGRAMMES.map((p) => ({ path: p.path, label: p.label, soon: !p.available }));
  const insightItems = BLOG_COURSES.map((c) => ({ path: `/blog?course=${c.key}`, label: `${c.name} Insights` }));

  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <Link to="/" className="header-home-link">
          Home
        </Link>
        <NavMenu label="Our Programmes" to="/programmes" items={programmeItems} />
        <NavMenu label="Career Insights" to="/blog" items={insightItems} />
      </div>
    </header>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PHONE, PROGRAMMES } from '../constants.js';
import { BLOG_COURSES } from '../data/blogPosts.js';

const TEL_HREF = 'tel:' + PHONE.replace(/[^\d+]/g, '');

function NavMenu({ label, to, items, active }) {
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
    <div className={`programmes-menu${active ? ' is-active' : ''}`} ref={ref}>
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

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.34 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.36 1.85.58 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// The logo is the Home link. Wide screens show the two menus (with the current section
// underlined) and a click-to-call button; phones swap them for a menu button that opens a
// full-width sheet with every link in it.
export default function Header() {
  const { pathname, search } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const programmeItems = PROGRAMMES.map((p) => ({ path: p.path, label: p.label, soon: !p.available }));
  const insightItems = BLOG_COURSES.map((c) => ({ path: `/blog?course=${c.key}`, label: `${c.name} Insights` }));
  const programmesActive = pathname === '/programmes' || PROGRAMMES.some((p) => pathname.startsWith(p.path));
  const insightsActive = pathname.startsWith('/blog');

  const isCurrent = (path) => {
    const [p, q] = path.split('?');
    if (q) return pathname === p && search === `?${q}`;
    return p === '/' ? pathname === '/' : pathname.startsWith(p);
  };

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 961px)');
    const onChange = (e) => e.matches && setMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap site-header-inner">
        <Link to="/" className="header-logo" aria-label="Skill IT Education, home" onClick={close}>
          <img src="/img/skill-it-logo.png" alt="Skill IT Education" width="520" height="206" />
        </Link>

        <nav className="header-nav" aria-label="Main">
          <NavMenu label="Our Programmes" to="/programmes" items={programmeItems} active={programmesActive} />
          <NavMenu label="Career Insights" to="/blog" items={insightItems} active={insightsActive} />
        </nav>

        <a className="header-call" href={TEL_HREF}>
          <PhoneIcon />
          <span>{PHONE}</span>
        </a>

        <button
          type="button"
          className={`header-burger${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="header-burger-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="header-burger-label">{menuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <Link to="/" className="mobile-menu-home" aria-current={isCurrent('/') ? 'page' : undefined} onClick={close}>
            Home
          </Link>
          <div className="mobile-menu-group">
            <Link to="/programmes" className="mobile-menu-head" aria-current={pathname === '/programmes' ? 'page' : undefined} onClick={close}>
              Our Programmes
            </Link>
            {programmeItems.map((item) => (
              <Link key={item.path} to={item.path} className="mobile-menu-link" aria-current={isCurrent(item.path) ? 'page' : undefined} onClick={close}>
                <span>{item.label}</span>
                {item.soon ? <span className="programmes-menu-soon">Coming soon</span> : <span className="mobile-menu-chevron" aria-hidden="true">&rsaquo;</span>}
              </Link>
            ))}
          </div>
          <div className="mobile-menu-group">
            <Link to="/blog" className="mobile-menu-head" aria-current={pathname === '/blog' && !search ? 'page' : undefined} onClick={close}>
              Career Insights
            </Link>
            {insightItems.map((item) => (
              <Link key={item.path} to={item.path} className="mobile-menu-link" aria-current={isCurrent(item.path) ? 'page' : undefined} onClick={close}>
                <span>{item.label}</span>
                <span className="mobile-menu-chevron" aria-hidden="true">&rsaquo;</span>
              </Link>
            ))}
          </div>
          <a className="mobile-menu-call" href={TEL_HREF}>
            <PhoneIcon />
            <span>Call {PHONE}</span>
          </a>
        </div>
      )}
    </header>
  );
}

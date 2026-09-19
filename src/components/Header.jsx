import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PROGRAMMES, WHATSAPP_URL } from '../constants.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { BLOG_COURSES } from '../data/blogPosts.js';

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

// The logo is the Home link. Wide screens show the two menus, a WhatsApp chat button and the
// orange "Book a free session" button. Phones show only the logo and a Menu button, which opens a
// compact dropdown (Home and two collapsible groups), not a full-screen sheet; the booking and WhatsApp
// buttons float on screen instead (FloatingActions).
export default function Header({ onBook }) {
  const { pathname, search } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [group, setGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const programmeItems = PROGRAMMES.map((p) => ({ path: p.path, label: p.label, soon: !p.available }));
  const insightItems = BLOG_COURSES.map((c) => ({ path: `/blog?course=${c.key}`, label: `${c.name} Insights` }));
  const programmesActive = pathname === '/programmes' || PROGRAMMES.some((p) => pathname.startsWith(p.path));
  const insightsActive = pathname.startsWith('/blog');

  const isCurrent = (path) => {
    const [p, q] = path.split('?');
    if (q) return pathname === p && search === `?${q}`;
    return p === '/' ? pathname === '/' : pathname.startsWith(p);
  };

  // Close the menu whenever the page changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 961px)');
    const onChange = (e) => e.matches && setMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape or a tap outside the header closes the dropdown.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    const onOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onOutside);
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const renderGroup = ({ id, label, allTo, allLabel, items }) => (
    <div className="mobile-menu-group">
      <button
        type="button"
        className="mobile-menu-row"
        aria-expanded={group === id}
        onClick={() => setGroup((g) => (g === id ? null : id))}
      >
        <span>{label}</span>
        <span className={`mobile-menu-caret${group === id ? ' open' : ''}`} aria-hidden="true">
          &#9662;
        </span>
      </button>
      {group === id && (
        <div className="mobile-menu-sub">
          <Link to={allTo} className="mobile-menu-link" aria-current={pathname === allTo && !search ? 'page' : undefined} onClick={close}>
            {allLabel}
          </Link>
          {items.map((item) => (
            <Link key={item.path} to={item.path} className="mobile-menu-link" aria-current={isCurrent(item.path) ? 'page' : undefined} onClick={close}>
              <span>{item.label}</span>
              {item.soon && <span className="programmes-menu-soon">Coming soon</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`} ref={headerRef}>
      <div className="wrap site-header-inner">
        <Link to="/" className="header-logo" aria-label="Skill IT Education, home" onClick={close}>
          <img src="/img/skill-it-logo.png" alt="Skill IT Education" width="520" height="206" />
        </Link>

        <nav className="header-nav" aria-label="Main">
          <NavMenu label="Our Programmes" to="/programmes" items={programmeItems} active={programmesActive} />
          <NavMenu label="Career Insights" to="/blog" items={insightItems} active={insightsActive} />
        </nav>

        <div className="header-actions">
          <a className="header-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
          <button type="button" className="btn btn-book" onClick={onBook}>
            Book a free session
          </button>
        </div>

        <button
          type="button"
          className={`header-burger${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => {
            setGroup(null);
            setMenuOpen((v) => !v);
          }}
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
          <Link to="/" className="mobile-menu-row" aria-current={pathname === '/' ? 'page' : undefined} onClick={close}>
            Home
          </Link>
          {renderGroup({ id: 'programmes', label: 'Our Programmes', allTo: '/programmes', allLabel: 'All programmes', items: programmeItems })}
          {renderGroup({ id: 'insights', label: 'Career Insights', allTo: '/blog', allLabel: 'All insights', items: insightItems })}
        </div>
      )}
    </header>
  );
}

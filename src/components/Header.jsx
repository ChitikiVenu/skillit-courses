import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PROGRAMMES } from '../constants.js';
import { BLOG_COURSES } from '../data/blogPosts.js';
import { DESKTOP_HEADER } from '../useMediaQuery.js';
import { INSIGHT_BLURBS, PROGRAMME_BLURBS } from '../data/programmeBlurbs.js';

// Time the menu stays open after the cursor leaves it, so a student can cross the small gap and
// pick an item without it vanishing.
const CLOSE_DELAY = 320;

// A header menu that opens when a mouse cursor reaches it (or on click / tap / keyboard) and stays
// open while the cursor is over the trigger or the panel. Only one menu is open at a time; the
// open state and the close timer live in Header.
function NavMenu({ id, label, to, items, active, open, wide, onEnter, onLeave, onToggle, onOpen, onNavigate }) {
  const pointer = useRef('');

  // A click with a mouse keeps a menu that hover already opened; touch and keyboard toggle it.
  const handleClick = () => {
    if (pointer.current === 'mouse') onOpen(id);
    else onToggle(id);
    pointer.current = '';
  };

  return (
    <div
      className={`programmes-menu${active ? ' is-active' : ''}${open ? ' is-open' : ''}`}
      onPointerDown={(e) => {
        pointer.current = e.pointerType;
      }}
      onPointerEnter={(e) => e.pointerType === 'mouse' && onEnter(id)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && onLeave()}
    >
      <div className="programmes-menu-trigger">
        {to ? (
          <Link to={to} className="programmes-menu-label" onClick={onNavigate}>
            {label}
          </Link>
        ) : (
          <button type="button" className="programmes-menu-label" aria-haspopup="true" aria-expanded={open} onClick={handleClick}>
            {label}
          </button>
        )}
        <button type="button" className="programmes-menu-caret-btn" aria-haspopup="true" aria-expanded={open} aria-label={`Toggle ${label} menu`} onClick={handleClick}>
          <span className={`programmes-menu-caret ${open ? 'open' : ''}`} aria-hidden="true">
            &#9662;
          </span>
        </button>
      </div>
      {open && (
        <div className={`programmes-menu-panel${wide ? ' is-wide' : ''}`} role="menu">
          {items.map((item) => (
            <Link key={item.path} to={item.path} className={`programmes-menu-item${item.blurb ? ' has-desc' : ''}${item.divider ? ' has-divider' : ''}`} role="menuitem" aria-current={item.current ? 'page' : undefined} onClick={onNavigate}>
              <span className="pm-main">
                <span className="pm-name">{item.label}</span>
                {item.blurb && <span className="pm-desc">{item.blurb}</span>}
              </span>
              {item.soon ? <span className="programmes-menu-soon">Coming soon</span> : item.meta && <span className="pm-meta">{item.meta}</span>}
              {item.arrow && <span className="pm-arrow" aria-hidden="true">&rarr;</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// The logo is the Home link. Wide screens show the two menus and the orange "Book a free session"
// button (WhatsApp was removed from the desktop header, 2026-09-22 — it's still reachable on phones
// via the floating WhatsApp button, FloatingActions). Phones show only the logo and a Menu button,
// which opens a compact dropdown (Home and two collapsible groups), not a full-screen sheet; the
// booking and WhatsApp buttons float on screen instead (FloatingActions).
export default function Header({ onBook }) {
  const { pathname, search } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [group, setGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  const clearCloseTimer = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const openNow = (id) => {
    clearCloseTimer();
    setOpenMenu(id);
  };
  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY);
  };
  const toggleMenu = (id) => {
    clearCloseTimer();
    setOpenMenu((v) => (v === id ? null : id));
  };
  const closeMenus = () => {
    clearCloseTimer();
    setOpenMenu(null);
  };

  const programmeItems = PROGRAMMES.map((p) => ({ path: p.path, label: p.label, soon: !p.available }));
  const insightItems = BLOG_COURSES.map((c) => ({ path: `/blog?course=${c.key}`, label: `${c.name} Insights` }));
  const programmeMenuItems = PROGRAMMES.map((p) => {
    const course = BLOG_COURSES.find((c) => `/${c.key}` === p.path)?.course;
    return { path: p.path, label: p.label, soon: !p.available, blurb: PROGRAMME_BLURBS[p.path], meta: course?.COPY.heroStats[0].value, current: pathname.startsWith(p.path) };
  });
  const insightMenuItems = [
    { path: '/blog', label: 'All career insights', blurb: INSIGHT_BLURBS.all, arrow: true, divider: true, current: pathname === '/blog' && !search },
    ...BLOG_COURSES.map((c) => ({ path: `/blog?course=${c.key}`, label: `${c.name} Insights`, blurb: INSIGHT_BLURBS[c.key], arrow: true, current: pathname === '/blog' && search === `?course=${c.key}` })),
  ];
  const programmesActive = PROGRAMMES.some((p) => pathname.startsWith(p.path));
  const insightsActive = pathname.startsWith('/blog');

  const isCurrent = (path) => {
    const [p, q] = path.split('?');
    if (q) return pathname === p && search === `?${q}`;
    return p === '/' ? pathname === '/' : pathname.startsWith(p);
  };

  // Close the menu whenever the page changes.
  useEffect(() => {
    setMenuOpen(false);
    closeMenus();
  }, [pathname, search]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Escape or a click outside the header menus closes them.
  useEffect(() => {
    if (!openMenu) return undefined;
    const onKey = (e) => e.key === 'Escape' && closeMenus();
    const onOutside = (e) => {
      if (!e.target.closest?.('.header-nav')) closeMenus();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onOutside);
    };
  }, [openMenu]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_HEADER);
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
          {allTo && (
            <Link to={allTo} className="mobile-menu-link" aria-current={pathname === allTo && !search ? 'page' : undefined} onClick={close}>
              {allLabel}
            </Link>
          )}
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
          <NavMenu id="programmes" label="Our Programmes" items={programmeMenuItems} active={programmesActive} open={openMenu === 'programmes'} wide onEnter={openNow} onLeave={scheduleClose} onToggle={toggleMenu} onOpen={openNow} onNavigate={closeMenus} />
          <NavMenu id="insights" label="Career Insights" to="/blog" items={insightMenuItems} active={insightsActive} open={openMenu === 'insights'} wide onEnter={openNow} onLeave={scheduleClose} onToggle={toggleMenu} onOpen={openNow} onNavigate={closeMenus} />
        </nav>

        <div className="header-actions">
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
          {renderGroup({ id: 'programmes', label: 'Our Programmes', items: programmeItems })}
          {renderGroup({ id: 'insights', label: 'Career Insights', allTo: '/blog', allLabel: 'All insights', items: insightItems })}
        </div>
      )}
    </header>
  );
}

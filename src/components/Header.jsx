import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PROGRAMMES } from '../constants.js';
// Lightweight metadata only — see blogCourses.js for why this isn't imported from blogPosts.js
// (that file pulls in every full article body, ~1.4MB, just to compute the same counts).
import { BLOG_COURSES } from '../data/blogCourses.js';
import { DESKTOP_HEADER } from '../useMediaQuery.js';
import { INSIGHT_BLURBS, PROGRAMME_BLURBS } from '../data/programmeBlurbs.js';
import { ROLE_GROUPS_LITE } from '../data/roleCoursesLite.js';

// Time the menu stays open after the cursor leaves it, so a student can cross the small gap and
// pick an item without it vanishing.
const CLOSE_DELAY = 320;

// A header menu that opens when a mouse cursor reaches it (or on click / tap / keyboard) and stays
// open while the cursor is over the trigger or the panel. Only one menu is open at a time; the
// open state and the close timer live in Header.
function NavMenu({ id, label, to, items, active, open, wide, onEnter, onLeave, onToggle, onOpen, onNavigate }) {
  const pointer = useRef('');
  // Which programme's role courses are showing under it: opens on mouse hover, or on the caret (touch / keyboard).
  const [expanded, setExpanded] = useState(null);
  // The course list opens to the right of its programme; where the panel sits too close to the right
  // edge of the window it opens to the left instead.
  const [flipLeft, setFlipLeft] = useState(false);
  const subRef = useRef(null);
  const showSub = (path) => {
    setFlipLeft(false);
    setExpanded(path);
  };
  // After the list renders on the right, move it to the left only if it would run past the window edge.
  useLayoutEffect(() => {
    if (expanded && subRef.current && subRef.current.getBoundingClientRect().right > window.innerWidth - 8) setFlipLeft(true);
  }, [expanded]);
  useEffect(() => {
    if (!open) setExpanded(null);
  }, [open]);

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
          {items.map((item) => {
            const hasSub = item.subItems?.length > 0;
            const isExpanded = hasSub && expanded === item.path;
            const link = (
              <Link key={item.path} to={item.path} className={`programmes-menu-item${item.blurb ? ' has-desc' : ''}${item.divider ? ' has-divider' : ''}`} role="menuitem" aria-current={item.current ? 'page' : undefined} onClick={onNavigate}>
                <span className="pm-main">
                  <span className="pm-name">{item.label}</span>
                  {item.blurb && <span className="pm-desc">{item.blurb}</span>}
                </span>
                {item.soon ? <span className="programmes-menu-soon">Coming soon</span> : item.meta && <span className="pm-meta">{item.meta}</span>}
                {item.arrow && <span className="pm-arrow" aria-hidden="true">&rarr;</span>}
              </Link>
            );
            if (!hasSub) return link;
            return (
              <div key={item.path} className={`pm-group${isExpanded ? ' is-expanded' : ''}`} onPointerEnter={(e) => e.pointerType === 'mouse' && showSub(item.path)}>
                <div className="pm-group-row">
                  {link}
                  <button type="button" className="pm-expand" aria-expanded={isExpanded} aria-label={`${isExpanded ? 'Hide' : 'Show'} ${item.label} courses`} onClick={() => (expanded === item.path ? setExpanded(null) : showSub(item.path))}>
                    <span className="pm-expand-caret" aria-hidden="true">&#9662;</span>
                  </button>
                </div>
                {isExpanded && (
                  <div ref={subRef} className={`pm-sub${flipLeft ? ' is-left' : ''}`} role="group" aria-label={`${item.label} courses`}>
                    {item.subItems.map((sub) => (
                      <Link key={sub.path} to={sub.path} className="pm-sub-item" role="menuitem" onClick={onNavigate}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// The logo is the Home link, and the two menus sit beside it — the header is deliberately minimal now
// (2026-09-22): WhatsApp and "Book a free session" were both removed from it (they'd doubled up with
// the same actions elsewhere — the footer's top row on desktop, FloatingActions on phones). Phones
// show only the logo and a Menu button, which opens a compact dropdown (Home and two collapsible
// groups), not a full-screen sheet.
export default function Header() {
  const { pathname, search } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [group, setGroup] = useState(null);
  const [subGroup, setSubGroup] = useState(null);
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

  const programmeItems = PROGRAMMES.map((p) => ({
    path: p.path,
    label: p.label,
    soon: !p.available,
    subItems: (ROLE_GROUPS_LITE.find((g) => g.href === p.path)?.roles ?? []).map((r) => ({ path: r.href, label: `${r.title} Course` })),
  }));
  const insightItems = BLOG_COURSES.map((c) => ({ path: `/blog?course=${c.key}`, label: `${c.name} Insights` }));
  const programmeMenuItems = PROGRAMMES.map((p) => {
    const lite = BLOG_COURSES.find((c) => `/${c.key}` === p.path);
    const roles = ROLE_GROUPS_LITE.find((g) => g.href === p.path)?.roles ?? [];
    return { path: p.path, label: p.label, soon: !p.available, blurb: PROGRAMME_BLURBS[p.path], meta: lite?.duration, current: pathname.startsWith(p.path), subItems: roles.map((r) => ({ path: r.href, label: `${r.title} Course` })) };
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
          {items.map((item) =>
            item.subItems?.length ? (
              <div key={item.path} className="mobile-menu-subgroup">
                <div className="mobile-menu-subrow">
                  <Link to={item.path} className="mobile-menu-link" aria-current={isCurrent(item.path) ? 'page' : undefined} onClick={close}>
                    <span>{item.label}</span>
                  </Link>
                  <button type="button" className="mobile-menu-subcaret" aria-expanded={subGroup === item.path} aria-label={`${subGroup === item.path ? 'Hide' : 'Show'} ${item.label} courses`} onClick={() => setSubGroup((g) => (g === item.path ? null : item.path))}>
                    <span className={`mobile-menu-caret${subGroup === item.path ? ' open' : ''}`} aria-hidden="true">
                      &#9662;
                    </span>
                  </button>
                </div>
                {subGroup === item.path && (
                  <div className="mobile-menu-roles">
                    {item.subItems.map((sub) => (
                      <Link key={sub.path} to={sub.path} className="mobile-menu-link mobile-menu-role" onClick={close}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.path} to={item.path} className="mobile-menu-link" aria-current={isCurrent(item.path) ? 'page' : undefined} onClick={close}>
                <span>{item.label}</span>
                {item.soon && <span className="programmes-menu-soon">Coming soon</span>}
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  );

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`} ref={headerRef}>
      <div className="wrap site-header-inner">
        <Link to="/" className="header-logo" aria-label="Skill IT Education, home" onClick={close}>
          <img src="/img/skill-it-logo.webp" alt="Skill IT Education" width="520" height="206" />
        </Link>

        <nav className="header-nav" aria-label="Main">
          <Link to="/" className={`header-home-link${pathname === '/' ? ' is-active' : ''}`} aria-current={pathname === '/' ? 'page' : undefined} onClick={closeMenus}>
            Home
          </Link>
          <NavMenu id="programmes" label="Our Programmes" items={programmeMenuItems} active={programmesActive} open={openMenu === 'programmes'} wide onEnter={openNow} onLeave={scheduleClose} onToggle={toggleMenu} onOpen={openNow} onNavigate={closeMenus} />
          <NavMenu id="insights" label="Career Insights" to="/blog" items={insightMenuItems} active={insightsActive} open={openMenu === 'insights'} wide onEnter={openNow} onLeave={scheduleClose} onToggle={toggleMenu} onOpen={openNow} onNavigate={closeMenus} />
        </nav>

        <button
          type="button"
          className={`header-burger${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => {
            setGroup(null);
            setSubGroup(null);
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

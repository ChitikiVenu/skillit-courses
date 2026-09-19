import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMMES } from '../constants.js';

// Deliberately minimal — the header carries just Home and the "Our Programmes" menu, nothing
// else (no logo, no other nav links, no CTAs).
export default function Header() {
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
    <header className="site-header">
      <div className="wrap site-header-inner">
        <Link to="/" className="header-home-link">
          Home
        </Link>
        <div className="programmes-menu" ref={ref}>
          <div className="programmes-menu-trigger">
            <Link to="/programmes" className="programmes-menu-label" onClick={() => setOpen(false)}>
              Our Programmes
            </Link>
            <button
              type="button"
              className="programmes-menu-caret-btn"
              aria-haspopup="true"
              aria-expanded={open}
              aria-label="Toggle programmes menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className={`programmes-menu-caret ${open ? 'open' : ''}`} aria-hidden="true">
                &#9662;
              </span>
            </button>
          </div>
          {open && (
            <div className="programmes-menu-panel" role="menu">
              {PROGRAMMES.map((p) => (
                <Link key={p.path} to={p.path} className="programmes-menu-item" role="menuitem" onClick={() => setOpen(false)}>
                  {p.label}
                  {!p.available && <span className="programmes-menu-soon">Coming soon</span>}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMMES } from '../constants.js';

// Deliberately minimal — the header carries only the "Our Programmes" menu, nothing else
// (no logo, no other nav links, no CTAs).
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
        <div className="programmes-menu" ref={ref}>
          <button
            type="button"
            className="programmes-menu-trigger"
            aria-haspopup="true"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            Our Programmes
            <span className={`programmes-menu-caret ${open ? 'open' : ''}`} aria-hidden="true">
              &#9662;
            </span>
          </button>
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

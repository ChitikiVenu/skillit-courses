// Flat cartoon artwork for the About Us page — all inline SVG, no image files.

const SKIN = '#f3c9a5';
const HAIR = '#2b2233';
const BLUE = '#2563eb';
const CORAL = '#ff7a59';
const INK = '#2b2233';

// The boy stands on the left and holds the rope out to his right. The rope hangs from his fist at (60, 52).
export function Boy() {
  return (
    <svg className="cartoon cartoon-boy" viewBox="0 0 66 112" width="66" height="112" aria-hidden="true" focusable="false">
      <ellipse cx="28" cy="107" rx="22" ry="3.5" fill="rgba(0,0,0,.12)" />
      <g className="boy-legs">
        <rect x="15" y="66" width="10" height="34" rx="5" fill="#2b3a55" />
        <rect x="29" y="66" width="10" height="34" rx="5" fill="#2b3a55" />
        <ellipse cx="18" cy="101" rx="9" ry="4.5" fill="#fff" stroke={INK} strokeWidth="1.6" />
        <ellipse cx="34" cy="101" rx="9" ry="4.5" fill="#fff" stroke={INK} strokeWidth="1.6" />
      </g>
      <rect x="13" y="36" width="28" height="34" rx="10" fill={BLUE} />
      <path d="M22 36 Q27 44 32 36" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M17 42 L9 56 L17 63" fill="none" stroke={BLUE} strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="63" r="3.6" fill={SKIN} />
      <g className="boy-arm">
        <line x1="36" y1="42" x2="47" y2="47" stroke={BLUE} strokeWidth="8" strokeLinecap="round" />
        <line x1="46" y1="46" x2="59" y2="52" stroke={SKIN} strokeWidth="6" strokeLinecap="round" />
        <circle cx="61" cy="52" r="4.4" fill={SKIN} />
      </g>
      <circle cx="27" cy="22" r="14" fill={SKIN} />
      <path d="M12.5 21 Q12 5 27.5 5.5 Q42 6 41 21 Q35 12.5 26 13.5 Q17 14 12.5 21Z" fill={HAIR} />
      <circle cx="33" cy="23" r="1.8" fill={INK} />
      <circle cx="23" cy="23" r="1.8" fill={INK} />
      <path d="M25 29.5 Q30 33.5 35 29" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="37" cy="27.5" r="2.6" fill="#ff9d8f" opacity=".65" />
    </svg>
  );
}

// The girl hangs from the rope with both hands, so the rope enters the top of the SVG at x = 32.
export function Girl() {
  return (
    <svg className="cartoon cartoon-girl" viewBox="0 0 64 112" width="64" height="112" aria-hidden="true" focusable="false">
      <g className="girl-arms">
        <line x1="17" y1="44" x2="28" y2="9" stroke={SKIN} strokeWidth="6" strokeLinecap="round" />
        <line x1="47" y1="44" x2="36" y2="9" stroke={SKIN} strokeWidth="6" strokeLinecap="round" />
        <circle cx="28" cy="8" r="4.2" fill={SKIN} />
        <circle cx="36" cy="8" r="4.2" fill={SKIN} />
      </g>
      <g className="girl-leg girl-leg-l">
        <rect x="21" y="72" width="8" height="28" rx="4" fill={SKIN} />
        <ellipse cx="24" cy="101" rx="8" ry="4.2" fill="#fff" stroke={INK} strokeWidth="1.6" />
      </g>
      <g className="girl-leg girl-leg-r">
        <rect x="35" y="72" width="8" height="28" rx="4" fill={SKIN} />
        <ellipse cx="40" cy="101" rx="8" ry="4.2" fill="#fff" stroke={INK} strokeWidth="1.6" />
      </g>
      <path d="M22 42 H42 L50 76 H14 Z" fill={CORAL} />
      <path d="M14 76 H50" stroke="#fff" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="12" cy="30" r="6" fill={HAIR} />
      <circle cx="52" cy="30" r="6" fill={HAIR} />
      <circle cx="12" cy="25" r="2.6" fill={BLUE} />
      <circle cx="52" cy="25" r="2.6" fill={BLUE} />
      <circle cx="32" cy="30" r="14" fill={SKIN} />
      <path d="M17.5 29 Q17 12.5 32 12.5 Q47 12.5 46.5 29 Q40 20 32 21 Q24 20 17.5 29Z" fill={HAIR} />
      <circle cx="26.5" cy="31" r="1.8" fill={INK} />
      <circle cx="37.5" cy="31" r="1.8" fill={INK} />
      <path d="M28 36.5 Q32 40.5 36 36.5" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="22.5" cy="35" r="2.6" fill="#ff9d8f" opacity=".65" />
      <circle cx="41.5" cy="35" r="2.6" fill="#ff9d8f" opacity=".65" />
    </svg>
  );
}

const BALLOON_COLOURS = ['#2563eb', '#ff7a59', '#ffc93c', '#3ddc97', '#a78bfa'];

export function Balloon({ colour = 0, className = '', style }) {
  const c = BALLOON_COLOURS[colour % BALLOON_COLOURS.length];
  return (
    <svg className={`balloon ${className}`} style={style} viewBox="0 0 40 96" width="40" height="96" aria-hidden="true" focusable="false">
      <path d="M20 4 C 33 4 37 16 34 27 C 31 38 24 44 20 46 C 16 44 9 38 6 27 C 3 16 7 4 20 4Z" fill={c} />
      <path d="M13 12 Q9 18 10 25" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".55" />
      <path d="M20 46 L16.5 52 H23.5 Z" fill={c} />
      <path d="M20 52 Q14 62 21 70 Q27 78 19 92" fill="none" stroke="#7a7f8c" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// A row of flags hanging in a curve, for the top of the page.
export function Bunting() {
  const colours = ['#2563eb', '#ff7a59', '#ffc93c', '#3ddc97', '#a78bfa'];
  const flags = [];
  const count = 30;
  for (let i = 0; i < count; i += 1) {
    const x = 20 + i * 40;
    const y = 8 + 14 * Math.sin((i / (count - 1)) * Math.PI);
    flags.push(<path key={i} d={`M${x - 12} ${y} L${x + 12} ${y} L${x} ${y + 26}Z`} fill={colours[i % colours.length]} />);
  }
  return (
    <svg className="bunting" viewBox="0 0 1200 60" preserveAspectRatio="xMidYMin slice" aria-hidden="true" focusable="false">
      <path d="M0 8 Q600 36 1200 8" fill="none" stroke="#7a7f8c" strokeWidth="1.4" />
      {flags}
    </svg>
  );
}

const CONFETTI = ['#2563eb', '#ff7a59', '#ffc93c', '#3ddc97', '#a78bfa'];

export function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 18 }, (_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 37) % 100}%`,
            background: CONFETTI[i % CONFETTI.length],
            animationDelay: `${(i % 6) * 0.25}s`,
            animationDuration: `${2.4 + (i % 4) * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}

// Flat cartoon artwork for the About Us page — all inline SVG, no image files.

const SKIN = '#f3c9a5';
const HAIR = '#2b2233';
const INK = '#2b2233';

// Two software employees. The boy stands on the left and holds the rope out to his right; the rope hangs
// from his fist at (60, 52). The girl hangs from the rope with both hands (it enters her SVG at x = 32).
const SUIT = '#243049';
const TROUSER = '#323a4d';
const SHOE = '#17181c';

export function Boy() {
  return (
    <svg className="cartoon cartoon-boy" viewBox="0 0 66 112" width="66" height="112" aria-hidden="true" focusable="false">
      <ellipse cx="28" cy="107" rx="22" ry="3.5" fill="rgba(0,0,0,.12)" />
      <g className="boy-legs">
        <rect x="15" y="64" width="11" height="37" rx="4" fill={TROUSER} />
        <rect x="28" y="64" width="11" height="37" rx="4" fill={TROUSER} />
        <path d="M13 100 H27 Q29 106 22 106 H14 Z" fill={SHOE} />
        <path d="M27 100 H41 Q43 106 36 106 H28 Z" fill={SHOE} />
      </g>
      <path d="M13 40 Q13 34 20 34 H34 Q41 34 41 40 V70 H13 Z" fill={SUIT} />
      <path d="M22 34 L27 52 L32 34 Z" fill="#fff" />
      <path d="M27 38 L24.8 54 L27 58 L29.2 54 Z" fill="#2563eb" />
      <path d="M22 34 L27 52 M32 34 L27 52" stroke="#111827" strokeWidth="1.2" fill="none" />
      <circle cx="27" cy="60" r=".9" fill="#9ca3af" />
      <path d="M17 42 L9 56 L17 63" fill="none" stroke={SUIT} strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="63" r="3.6" fill={SKIN} />
      <g className="boy-arm">
        <line x1="36" y1="42" x2="48" y2="47" stroke={SUIT} strokeWidth="8" strokeLinecap="round" />
        <line x1="47" y1="46" x2="59" y2="52" stroke="#fff" strokeWidth="6.4" strokeLinecap="round" />
        <circle cx="61" cy="52" r="4.4" fill={SKIN} />
      </g>
      <rect x="23" y="29" width="8" height="7" rx="2" fill={SKIN} />
      <circle cx="27" cy="22" r="14" fill={SKIN} />
      <path d="M12.5 21 Q12 5 27.5 5.5 Q42 6 41 21 Q35 12.5 26 13.5 Q17 14 12.5 21Z" fill={HAIR} />
      <circle cx="33" cy="23" r="1.8" fill={INK} />
      <circle cx="23" cy="23" r="1.8" fill={INK} />
      <path d="M25 29 Q30 32.5 35 29" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Girl() {
  return (
    <svg className="cartoon cartoon-girl" viewBox="0 0 64 112" width="64" height="112" aria-hidden="true" focusable="false">
      <g className="girl-arms">
        <line x1="17" y1="46" x2="22.5" y2="30" stroke={SUIT} strokeWidth="7" strokeLinecap="round" />
        <line x1="47" y1="46" x2="41.5" y2="30" stroke={SUIT} strokeWidth="7" strokeLinecap="round" />
        <line x1="22.5" y1="31" x2="28" y2="9" stroke={SKIN} strokeWidth="5.4" strokeLinecap="round" />
        <line x1="41.5" y1="31" x2="36" y2="9" stroke={SKIN} strokeWidth="5.4" strokeLinecap="round" />
        <circle cx="28" cy="8" r="4.2" fill={SKIN} />
        <circle cx="36" cy="8" r="4.2" fill={SKIN} />
      </g>
      <g className="girl-leg girl-leg-l">
        <rect x="21" y="74" width="10" height="26" rx="4" fill={TROUSER} />
        <path d="M19 99 H32 Q34 105 27 105 H20 Z" fill={SHOE} />
      </g>
      <g className="girl-leg girl-leg-r">
        <rect x="33" y="74" width="10" height="26" rx="4" fill={TROUSER} />
        <path d="M32 99 H45 Q47 105 40 105 H33 Z" fill={SHOE} />
      </g>
      <path d="M20 44 Q20 40 25 40 H39 Q44 40 44 44 L46 80 H18 Z" fill={SUIT} />
      <path d="M26 40 L32 58 L38 40 Z" fill="#fff" />
      <path d="M26 40 L32 58 M38 40 L32 58" stroke="#111827" strokeWidth="1.2" fill="none" />
      <path d="M52 30 Q60 38 54 52" fill="none" stroke={HAIR} strokeWidth="6" strokeLinecap="round" />
      <rect x="28" y="34" width="8" height="7" rx="2" fill={SKIN} />
      <circle cx="32" cy="27" r="13" fill={SKIN} />
      <path d="M18 27 Q17 11.5 32 11.5 Q47 11.5 46 27 Q40 18.5 32 19.5 Q24 18.5 18 27Z" fill={HAIR} />
      <circle cx="26.5" cy="28.5" r="1.8" fill={INK} />
      <circle cx="37.5" cy="28.5" r="1.8" fill={INK} />
      <path d="M28 34 Q32 37.5 36 34" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="22.5" cy="33" r="2.4" fill="#ff9d8f" opacity=".55" />
      <circle cx="41.5" cy="33" r="2.4" fill="#ff9d8f" opacity=".55" />
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

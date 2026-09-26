// Two software employees for the About Us rope story. The girl stands at the top holding the rope out to her
// right (her fist is at (61, 52)); the boy hangs from it with one hand (his hand is at (36, 8)), lets go at the
// footer, and finishes standing with his hands on his hips.

const SKIN = '#f3c9a5';
const HAIR = '#2b2233';
const INK = '#2b2233';
const SUIT = '#243049';
const TROUSER = '#323a4d';
const SHOE = '#17181c';

export function Girl() {
  return (
    <svg className="cartoon cartoon-girl" viewBox="0 0 66 112" width="66" height="112" aria-hidden="true" focusable="false">
      <ellipse cx="28" cy="107" rx="22" ry="3.5" fill="rgba(0,0,0,.12)" />
      <g>
        <rect x="15" y="66" width="11" height="35" rx="4" fill={TROUSER} />
        <rect x="28" y="66" width="11" height="35" rx="4" fill={TROUSER} />
        <path d="M13 100 H27 Q29 106 22 106 H14 Z" fill={SHOE} />
        <path d="M27 100 H41 Q43 106 36 106 H28 Z" fill={SHOE} />
      </g>
      <path d="M13 40 Q13 34 20 34 H34 Q41 34 41 40 V72 H13 Z" fill={SUIT} />
      <path d="M22 34 L27 54 L32 34 Z" fill="#fff" />
      <path d="M22 34 L27 54 M32 34 L27 54" stroke="#111827" strokeWidth="1.2" fill="none" />
      <path d="M17 42 L9 56 L17 63" fill="none" stroke={SUIT} strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="63" r="3.6" fill={SKIN} />
      <g className="girl-arm">
        <line x1="36" y1="42" x2="48" y2="47" stroke={SUIT} strokeWidth="8" strokeLinecap="round" />
        <line x1="47" y1="46" x2="59" y2="52" stroke="#fff" strokeWidth="6.4" strokeLinecap="round" />
        <circle cx="61" cy="52" r="4.4" fill={SKIN} />
      </g>
      <path d="M14 20 Q4 30 10 44" fill="none" stroke={HAIR} strokeWidth="6.5" strokeLinecap="round" />
      <rect x="23" y="29" width="8" height="7" rx="2" fill={SKIN} />
      <circle cx="27" cy="22" r="14" fill={SKIN} />
      <path d="M12.5 22 Q11 5 27 5.5 Q43 6 41.5 22 Q35 12.5 26 13.5 Q17 14 12.5 22Z" fill={HAIR} />
      <circle cx="33" cy="23" r="1.8" fill={INK} />
      <circle cx="23" cy="23" r="1.8" fill={INK} />
      <path d="M25 29 Q30 32.5 35 29" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="37" cy="27.5" r="2.4" fill="#ff9d8f" opacity=".55" />
    </svg>
  );
}

// pose: 'hang' (one hand on the rope), 'walk', 'jump', or 'stand' (hands on hips, smiling at the viewer).
export function Boy({ pose = 'hang' }) {
  const hang = pose === 'hang';
  const stand = pose === 'stand';
  return (
    <svg className={`cartoon cartoon-boy pose-${pose}`} viewBox="0 0 64 112" width="64" height="112" aria-hidden="true" focusable="false">
      <ellipse cx="32" cy="108" rx="20" ry="3" fill="rgba(0,0,0,.12)" />
      <g className="boy-leg boy-leg-l">
        <rect x="21" y="72" width="10" height="28" rx="4" fill={TROUSER} />
        <path d="M19 99 H32 Q34 105 27 105 H20 Z" fill={SHOE} />
      </g>
      <g className="boy-leg boy-leg-r">
        <rect x="33" y="72" width="10" height="28" rx="4" fill={TROUSER} />
        <path d="M32 99 H45 Q47 105 40 105 H33 Z" fill={SHOE} />
      </g>
      {/* arms behind the jacket edge */}
      {hang && (
        <>
          <g className="boy-arm-hang">
            <line x1="44" y1="46" x2="40.5" y2="28" stroke={SUIT} strokeWidth="7" strokeLinecap="round" />
            <line x1="40" y1="29" x2="36.5" y2="11" stroke="#fff" strokeWidth="5.2" strokeLinecap="round" />
            <circle cx="36" cy="8" r="4.3" fill={SKIN} />
          </g>
          <g className="boy-arm-free">
            <line x1="20" y1="46" x2="15" y2="66" stroke={SUIT} strokeWidth="7" strokeLinecap="round" />
            <circle cx="14.5" cy="68" r="3.6" fill={SKIN} />
          </g>
        </>
      )}
      {!hang && !stand && (
        <>
          <g className="boy-arm-swing boy-arm-swing-l">
            <line x1="20" y1="46" x2="15" y2="66" stroke={SUIT} strokeWidth="7" strokeLinecap="round" />
            <circle cx="14.5" cy="68" r="3.6" fill={SKIN} />
          </g>
          <g className="boy-arm-swing boy-arm-swing-r">
            <line x1="44" y1="46" x2="49" y2="66" stroke={SUIT} strokeWidth="7" strokeLinecap="round" />
            <circle cx="49.5" cy="68" r="3.6" fill={SKIN} />
          </g>
        </>
      )}
      {stand && (
        <>
          <path d="M20 45 L9 57 L22 67" fill="none" stroke={SUIT} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M44 45 L55 57 L42 67" fill="none" stroke={SUIT} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="22.5" cy="67.5" r="3.6" fill={SKIN} />
          <circle cx="41.5" cy="67.5" r="3.6" fill={SKIN} />
        </>
      )}
      <path d="M20 44 Q20 39 25 39 H39 Q44 39 44 44 V80 H20 Z" fill={SUIT} />
      <path d="M26 39 L32 58 L38 39 Z" fill="#fff" />
      <path d="M32 42 L29.5 58 L32 62 L34.5 58 Z" fill="#2563eb" />
      <path d="M26 39 L32 58 M38 39 L32 58" stroke="#111827" strokeWidth="1.2" fill="none" />
      <rect x="28" y="33" width="8" height="7" rx="2" fill={SKIN} />
      <circle cx="32" cy="26" r="13.5" fill={SKIN} />
      <path d="M18 24 Q17 8 32 8 Q47 8 46 24 Q40 15 32 16 Q24 15 18 24Z" fill={HAIR} />
      <circle cx="26.5" cy="27" r="1.9" fill={INK} />
      <circle cx="37.5" cy="27" r="1.9" fill={INK} />
      {stand ? (
        <>
          <path d="M25.5 32 Q32 40.5 38.5 32 Z" fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="22" cy="32" r="2.6" fill="#ff9d8f" opacity=".6" />
          <circle cx="42" cy="32" r="2.6" fill="#ff9d8f" opacity=".6" />
        </>
      ) : (
        <path d="M27.5 33 Q32 37 36.5 33" fill="none" stroke={INK} strokeWidth="1.9" strokeLinecap="round" />
      )}
    </svg>
  );
}

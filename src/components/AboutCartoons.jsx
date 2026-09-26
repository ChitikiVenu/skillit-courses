// Two software employees for the About Us rope story.
// The girl stands at the top holding the rope; her fist is at (79, 52) in her 84-wide SVG.
// The boy (Sia) rides a small plate on the rope: one hand up on the rope, the other waving. At the footer he
// jumps off, walks, jumps again and ends with his hands on his hips.

const SKIN = '#f3c9a5';
const HAIR = '#2b2233';
const INK = '#2b2233';
const SUIT = '#243049';
const TROUSER = '#323a4d';
const SHOE = '#17181c';

const reducedMotion = () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

// Long loose hair blowing back in slow waves (SMIL path morph).
const HAIR_A = 'M17 15 C-1 23 1 38 7 49 C12 57 1 63 5 74 C11 72 17 77 22 68 C27 58 24 42 31 25 Z';
const HAIR_B = 'M17 15 C-3 25 8 36 3 49 C0 58 11 61 6 74 C12 78 17 70 24 71 C29 60 21 44 31 25 Z';
const HAIR_C = 'M17 15 C3 21 -2 35 6 45 C13 53 0 58 9 72 C14 66 20 71 22 63 C25 53 25 38 31 25 Z';
const FRONT_A = 'M38 20 C46 28 44 38 40 46 C37 52 43 57 40 64 C37 60 34 58 34 50 C34 42 37 32 38 20Z';
const FRONT_B = 'M38 20 C48 30 41 38 43 47 C45 54 38 56 41 65 C36 63 33 58 33 51 C32 41 37 32 38 20Z';
const FRONT_C = 'M38 20 C45 26 46 37 39 45 C34 51 42 58 38 64 C35 62 33 57 34 50 C35 42 36 31 38 20Z';

export function Girl() {
  const still = reducedMotion();
  const wave = (begin) =>
    still ? null : <animate attributeName="d" dur="3.4s" begin={begin} repeatCount="indefinite" values={`${HAIR_A};${HAIR_B};${HAIR_C};${HAIR_A}`} keyTimes="0;0.35;0.7;1" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1" />;
  return (
    <svg className="cartoon cartoon-girl" viewBox="0 0 84 112" width="84" height="112" aria-hidden="true" focusable="false">
      <ellipse cx="28" cy="107" rx="22" ry="3.5" fill="rgba(0,0,0,.12)" />
      {/* long loose hair, behind everything */}
      <path d={HAIR_A} fill="#4a3550">{wave('-1.2s')}</path>
      <path d={HAIR_A} fill={HAIR} transform="translate(3 -1)">{wave('0s')}</path>
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
      <path d={FRONT_A} fill={HAIR}>
        {still ? null : <animate attributeName="d" dur="3.4s" begin="-0.6s" repeatCount="indefinite" values={`${FRONT_A};${FRONT_B};${FRONT_C};${FRONT_A}`} keyTimes="0;0.35;0.7;1" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1" />}
      </path>
      <g className="girl-arm">
        <line x1="36" y1="42" x2="50" y2="46" stroke={SUIT} strokeWidth="8" strokeLinecap="round" />
        <line x1="49" y1="46" x2="76" y2="52" stroke="#fff" strokeWidth="6.4" strokeLinecap="round" />
        <circle cx="79" cy="52" r="4.4" fill={SKIN} />
      </g>
      <rect x="23" y="29" width="8" height="7" rx="2" fill={SKIN} />
      <circle cx="27" cy="22" r="14" fill={SKIN} />
      {/* hair cap and a soft side fringe */}
      <path d="M12.5 22 Q11 5 27 5.5 Q43 6 41.5 22 Q36 13 27 14 Q19 14 12.5 22Z" fill={HAIR} />
      <path d="M13 21 Q15 10 27 8" fill="none" stroke="#4a3550" strokeWidth="1.4" strokeLinecap="round" />
      {/* face */}
      <path d="M29.5 19.3 Q33 17.3 36.5 19" fill="none" stroke="#5a4660" strokeWidth="1" strokeLinecap="round" />
      <path d="M19.5 19.3 Q23 17.3 26.5 19" fill="none" stroke="#5a4660" strokeWidth="1" strokeLinecap="round" />
      <ellipse cx="33" cy="24" rx="2.3" ry="2.6" fill={INK} />
      <ellipse cx="23" cy="24" rx="2.3" ry="2.6" fill={INK} />
      <circle cx="33.8" cy="23" r=".9" fill="#fff" />
      <circle cx="23.8" cy="23" r=".9" fill="#fff" />
      <path d="M35.2 22.6 l1.6 -1 M25.2 22.6 l1.4 -1" stroke={INK} strokeWidth=".9" strokeLinecap="round" />
      <path d="M24 29.6 Q29 35.4 34 29.6 Z" fill="#fff" stroke="#c0405a" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="37.5" cy="27.8" r="2.6" fill="#ff9d8f" opacity=".5" />
      <circle cx="19.5" cy="27.8" r="2.4" fill="#ff9d8f" opacity=".4" />
    </svg>
  );
}

// pose: 'ride' (on the plate, one hand on the rope, waving), 'walk', 'jump', or 'stand' (hands on hips, smiling).
export function Boy({ pose = 'ride' }) {
  const ride = pose === 'ride';
  const stand = pose === 'stand';
  return (
    <svg className={`cartoon cartoon-boy pose-${pose}`} viewBox="0 0 64 112" width="64" height="112" aria-hidden="true" focusable="false">
      <g className="boy-leg boy-leg-l">
        <rect x="21" y="72" width="10" height="28" rx="4" fill={TROUSER} />
        <path d="M19 99 H32 Q34 105 27 105 H20 Z" fill={SHOE} />
      </g>
      <g className="boy-leg boy-leg-r">
        <rect x="33" y="72" width="10" height="28" rx="4" fill={TROUSER} />
        <path d="M32 99 H45 Q47 105 40 105 H33 Z" fill={SHOE} />
      </g>
      {ride && (
        <>
          {/* left hand up on the rope, right hand waving */}
          <line x1="20" y1="46" x2="12.5" y2="36" stroke={SUIT} strokeWidth="7" strokeLinecap="round" />
          <line x1="13.5" y1="37.5" x2="7.5" y2="27" stroke="#fff" strokeWidth="5.2" strokeLinecap="round" />
          <circle cx="6.5" cy="24.5" r="4.2" fill={SKIN} />
          <g className="boy-wave">
            <line x1="44" y1="46" x2="53.5" y2="40" stroke={SUIT} strokeWidth="7" strokeLinecap="round" />
            <line x1="52.5" y1="40.5" x2="57.5" y2="27" stroke="#fff" strokeWidth="5.2" strokeLinecap="round" />
            <circle cx="58.5" cy="24.5" r="4.4" fill={SKIN} />
          </g>
        </>
      )}
      {!ride && !stand && (
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
      <path d="M26 39 L32 58 M38 39 L32 58" stroke="#111827" strokeWidth="1.2" fill="none" />
      {/* red tie, flapping in the air */}
      <g className="boy-tie">
        <path d="M29.6 41.5 L34.4 41.5 L33.4 46 L30.6 46 Z" fill="#c81e4a" />
        <path d="M30.6 46 L33.4 46 L36.4 62 L32 66.5 L27.6 62 Z" fill="#e11d48" />
        <path d="M32 47 L32 63" stroke="#fb7185" strokeWidth="1" strokeLinecap="round" opacity=".7" />
      </g>
      <rect x="28" y="33" width="8" height="7" rx="2" fill={SKIN} />
      <circle cx="32" cy="26" r="13.5" fill={SKIN} />
      <path d="M18 24 Q17 8 32 8 Q47 8 46 24 Q40 15 32 16 Q24 15 18 24Z" fill={HAIR} />
      <path d="M23 12 Q30 8.5 40 12" fill="none" stroke="#4a3550" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M22.5 22.6 Q26 20.8 29.5 22.2 M34.5 22.2 Q38 20.8 41.5 22.6" fill="none" stroke={INK} strokeWidth="1.3" strokeLinecap="round" />
      <ellipse cx="26.5" cy="27" rx="1.9" ry="2.1" fill={INK} />
      <ellipse cx="37.5" cy="27" rx="1.9" ry="2.1" fill={INK} />
      <circle cx="27.1" cy="26.3" r=".7" fill="#fff" />
      <circle cx="38.1" cy="26.3" r=".7" fill="#fff" />
      {stand || ride ? (
        <>
          <path d="M25.5 32 Q32 40.5 38.5 32 Z" fill="#fff" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="22" cy="32" r="2.6" fill="#ff9d8f" opacity=".55" />
          <circle cx="42" cy="32" r="2.6" fill="#ff9d8f" opacity=".55" />
        </>
      ) : (
        <path d="M27.5 33 Q32 37 36.5 33" fill="none" stroke={INK} strokeWidth="1.9" strokeLinecap="round" />
      )}
    </svg>
  );
}

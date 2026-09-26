// Small line icons for the About Us cards (24x24, stroke only).
const PATHS = {
  flask: 'M9 3h6M10 3v6l-5.5 9.5A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9V3M7.5 15h9',
  code: 'M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14',
  tools: 'M14.5 6.5a4 4 0 0 0-5 5L3 18l3 3 6.5-6.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5z',
  quiz: 'M9 12l2 2 4-4M12 3l2.4 1.7 2.9-.1.9 2.8 2.3 1.7-.9 2.8.9 2.8-2.3 1.7-.9 2.8-2.9-.1L12 21l-2.4-1.7-2.9.1-.9-2.8L3.5 14.9l.9-2.8-.9-2.8 2.3-1.7.9-2.8 2.9.1z',
  briefcase: 'M4 8h16v11H4zM9 8V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V8M4 13h16',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z',
  cap: 'M2 9l10-5 10 5-10 5zM6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 9v6',
  swap: 'M4 8h13l-3-3M20 16H7l3 3',
  laptop: 'M5 6h14v9H5zM2.5 19h19M9 19l.5-4h5l.5 4',
  hand: 'M12 5v7M9 8v5M15 8v5M6 11v4a6 6 0 0 0 12 0v-4',
  pin: 'M12 21s7-6 7-11.5A7 7 0 0 0 5 9.5C5 15 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4',
  file: 'M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5',
  mic: 'M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zM6 11a6 6 0 0 0 12 0M12 17v4',
  users: 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 6.5M18 14a6 6 0 0 1 3.5 6',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
};

export default function Icon({ name, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={PATHS[name]} />
    </svg>
  );
}

// Hero artwork, cartoon style: a smiling padlock-shield, a waving AI robot and a student coding on a laptop.
const INK = '#2b2233';
export function HeroScene() {
  const o = { stroke: INK, strokeWidth: 3, strokeLinejoin: 'round', strokeLinecap: 'round' };
  return (
    <svg className="ab-scene" viewBox="0 0 380 330" role="img" aria-label="Cartoon of a smiling security shield, a waving AI robot and a student coding on a laptop">
      <path d="M40 170 C20 90 90 30 170 40 C250 20 350 60 355 150 C365 230 300 300 200 300 C110 310 50 270 40 170Z" fill="#dbe8ff" />
      {/* sparkles */}
      <g className="ab-spark" fill="#ffd84d" {...o} strokeWidth="2">
        <path d="M340 44l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" />
        <path d="M30 60l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" />
      </g>
      <text x="300" y="118" fontSize="16" fontWeight="800" fill="#2563eb" fontFamily="ui-monospace,Menlo,monospace" className="ab-bits">01</text>
      <text x="40" y="150" fontSize="16" fontWeight="800" fill="#ff7a59" fontFamily="ui-monospace,Menlo,monospace" className="ab-bits">10</text>

      {/* shield with a smiling padlock */}
      <g className="ab-bob">
        <path d="M120 44 L188 68 V132 C188 176 160 204 120 218 C80 204 52 176 52 132 V68 Z" fill="#2563eb" {...o} />
        <path d="M120 58 L176 78 V130 C176 166 153 191 120 204 C87 191 64 166 64 130 V78 Z" fill="#5b8cf5" stroke="#fff" strokeWidth="2.5" strokeOpacity=".7" />
        <path d="M104 104 V92 a16 16 0 0 1 32 0 V104" fill="none" {...o} strokeWidth="5" />
        <rect x="92" y="102" width="56" height="46" rx="10" fill="#ffd84d" {...o} />
        <circle cx="110" cy="122" r="4.2" fill={INK} />
        <circle cx="130" cy="122" r="4.2" fill={INK} />
        <path d="M110 133 Q120 142 130 133" fill="none" {...o} strokeWidth="2.6" />
        <circle cx="103" cy="131" r="3.6" fill="#ff9d8f" opacity=".8" />
        <circle cx="137" cy="131" r="3.6" fill="#ff9d8f" opacity=".8" />
      </g>

      {/* waving AI robot */}
      <g className="ab-bob ab-bob-2">
        <line x1="270" y1="70" x2="270" y2="52" {...o} />
        <circle cx="270" cy="47" r="7" fill="#ff7a59" {...o} />
        <rect x="236" y="70" width="68" height="54" rx="16" fill="#fff" {...o} />
        <rect x="226" y="86" width="10" height="20" rx="4" fill="#a5c4ff" {...o} />
        <rect x="304" y="86" width="10" height="20" rx="4" fill="#a5c4ff" {...o} />
        <circle cx="256" cy="94" r="8" fill="#fff" {...o} strokeWidth="2.6" />
        <circle cx="284" cy="94" r="8" fill="#fff" {...o} strokeWidth="2.6" />
        <circle cx="258" cy="95" r="3.6" fill={INK} />
        <circle cx="286" cy="95" r="3.6" fill={INK} />
        <path d="M258 110 Q270 120 282 110" fill="none" {...o} strokeWidth="2.6" />
        <rect x="244" y="128" width="52" height="46" rx="12" fill="#a5c4ff" {...o} />
        <text x="270" y="158" textAnchor="middle" fontSize="18" fontWeight="900" fill={INK} fontFamily="system-ui,sans-serif">AI</text>
        <path d="M244 142 L226 158" fill="none" {...o} strokeWidth="6" />
        <g className="ab-wave"><path d="M296 140 L316 118" fill="none" {...o} strokeWidth="6" /><circle cx="318" cy="115" r="6" fill="#fff" {...o} strokeWidth="2.6" /></g>
        <rect x="252" y="176" width="10" height="20" rx="4" fill="#a5c4ff" {...o} strokeWidth="2.6" />
        <rect x="278" y="176" width="10" height="20" rx="4" fill="#a5c4ff" {...o} strokeWidth="2.6" />
      </g>

      {/* student on a laptop */}
      <g>
        <ellipse cx="190" cy="304" rx="120" ry="9" fill="rgba(43,34,51,.12)" />
        <circle cx="136" cy="238" r="27" fill="#f3c9a5" {...o} />
        <path d="M108 236 Q106 206 138 208 Q168 208 164 236 Q152 222 136 224 Q120 224 108 236Z" fill={INK} {...o} strokeWidth="2.4" />
        <circle cx="108" cy="228" r="9" fill={INK} /><circle cx="164" cy="228" r="9" fill={INK} />
        <circle cx="127" cy="242" r="3.2" fill={INK} /><circle cx="147" cy="242" r="3.2" fill={INK} />
        <path d="M128 252 Q137 260 146 252" fill="none" {...o} strokeWidth="2.6" />
        <circle cx="120" cy="252" r="4" fill="#ff9d8f" opacity=".8" /><circle cx="154" cy="252" r="4" fill="#ff9d8f" opacity=".8" />
        <path d="M84 284 Q88 262 136 262 Q184 262 188 284 Z" fill="#ff7a59" {...o} />
        <rect x="176" y="222" width="132" height="82" rx="10" fill={INK} {...o} />
        <rect x="184" y="230" width="116" height="66" rx="6" fill="#0f172a" />
        <g fontFamily="ui-monospace,Menlo,monospace" fontSize="12" fontWeight="800">
          <text x="192" y="250" fill="#38bdf8">{'</>'}</text>
          <text x="192" y="268" fill="#86efac">secure()</text>
          <text x="192" y="284" fill="#ffd84d">train(AI)</text>
        </g>
        <path d="M164 304 H320 L328 312 H156 Z" fill="#a5c4ff" {...o} />
      </g>
    </svg>
  );
}

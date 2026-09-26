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


export default function H1Wave() {
  return (
    <svg className="h1-wave" viewBox="0 0 92 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" />
          <stop offset="1" />
        </linearGradient>
      </defs>
      <path d="M2 8 C 8 2, 16 2, 22 8 C 28 14, 36 14, 42 8 C 48 2, 56 2, 62 8 C 68 14, 76 14, 82 8" />
    </svg>
  );
}

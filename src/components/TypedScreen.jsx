import CodeStrip from './CodeStrip.jsx';

// The home page tablet screen (owner-requested 2026-09-22: drop the typed "5 Advanced Certification
// Programmes" marketing copy entirely and let the code editor fill the whole screen instead). Kept as
// its own component — same name, same props — so ProgrammeFlow.jsx and Tablet.jsx don't need to
// change; it's now just the window chrome (the three dots) plus a full-height CodeStrip.
export default function TypedScreen({ active, animate = true }) {
  return (
    <div className="typed-screen" aria-hidden="true">
      <div className="typed-bar">
        <span className="typed-dots">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className="code-strip-full">
        <CodeStrip active={active} animate={animate} />
      </div>
    </div>
  );
}

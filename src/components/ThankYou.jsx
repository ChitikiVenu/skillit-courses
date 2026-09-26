import { useEffect, useRef } from 'react';

// "Skill-IT-Education-Cyber-Security-Brochure.pdf" -> "Cyber Security Brochure"
const brochureLabel = (file) =>
  file
    .replace(/\.pdf$/i, '')
    .replace(/^Skill-IT-Education-/i, '')
    .replace(/-/g, ' ')
    .replace(/\bAI ML\b/, 'AI/ML');

// Shown after a form is submitted: a thank-you plus a download button named after the brochure.
// Once the button is clicked the download starts and, a moment later, the visitor is taken back to the
// (empty) form. With no brochure to offer, it goes back to the form by itself after a few seconds.
export default function ThankYou({ brochureFile, onDone }) {
  const timer = useRef();
  useEffect(() => {
    if (!brochureFile) timer.current = setTimeout(onDone, 6000);
    return () => clearTimeout(timer.current);
  }, [brochureFile, onDone]);

  return (
    <div className="form-success" role="status">
      <p className="form-success-title">Thanks for the enquiry!</p>
      {brochureFile && (
        <a
          className="btn btn-primary form-success-btn"
          href={`/downloads/${brochureFile}`}
          download
          onClick={() => {
            timer.current = setTimeout(onDone, 1200);
          }}
        >
          Download {brochureLabel(brochureFile)}
        </a>
      )}
    </div>
  );
}

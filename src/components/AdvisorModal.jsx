import { useEffect, useState } from 'react';
import { COURSE_BROCHURES } from '../data/courseBrochures.js';

const COURSE_OPTIONS = ['Cyber Security', 'AI & ML', 'Data Science', 'SOC (Security Operations Center)', 'Data Analyst'];

export default function AdvisorModal({ open, onClose, title = 'Talk to an Advisor' }) {
  const [submitted, setSubmitted] = useState(false);
  const [brochureFile, setBrochureFile] = useState(undefined);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleClose = () => {
    setSubmitted(false);
    setBrochureFile(undefined);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBrochureFile(COURSE_BROCHURES[e.target.elements.course?.value]);
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={title}>
        <button type="button" className="modal-close" onClick={handleClose} aria-label="Close">
          &times;
        </button>

        {!submitted ? (
          <>
            <h3>{title}</h3>
            <p>Share a few details and our admissions team will call you back within 90 minutes.</p>
            <form className="modal-form" onSubmit={handleSubmit} noValidate>
              <div className="modal-field">
                <label htmlFor="advisor-name">Full Name</label>
                <input type="text" id="advisor-name" name="full_name" placeholder="Your full name" required />
              </div>
              <div className="modal-field">
                <label htmlFor="advisor-email">Email</label>
                <input type="email" id="advisor-email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="modal-field">
                <label htmlFor="advisor-phone">Phone Number</label>
                <input type="tel" id="advisor-phone" name="phone" placeholder="10-digit number" pattern="[0-9]{10}" required />
              </div>
              <div className="modal-field">
                <label htmlFor="advisor-course">Course</label>
                <select id="advisor-course" name="course" defaultValue="" required>
                  <option value="" disabled>
                    Select a course
                  </option>
                  {COURSE_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="modal-field">
                <label htmlFor="advisor-message">Message</label>
                <textarea id="advisor-message" name="message" rows={4} placeholder="Tell us a bit about your background and goals (optional)" />
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Send Message
              </button>
            </form>
          </>
        ) : (
          <div className="form-success">
            Thanks — we&rsquo;ve received your details. Our admissions team will call you back shortly.{' '}
            {brochureFile && (
              <a href={`/downloads/${brochureFile}`} download>
                Download the brochure now &rarr;
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

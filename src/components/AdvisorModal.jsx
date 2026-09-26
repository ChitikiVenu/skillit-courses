import { useEffect, useState } from 'react';
import { COURSE_BROCHURES } from '../data/courseBrochures.js';
import { track } from '../utils/analytics.js';
import { focusFirstError, validateForm } from '../utils/validate.js';

const FIELDS = ['full_name', 'email', 'phone', 'course', 'message'];
const COURSE_OPTIONS = ['Cyber Security', 'AI & ML', 'Data Science', 'SOC (Security Operations Center)', 'Data Analyst'];

export default function AdvisorModal({ open, onClose, title = 'Talk to an Advisor' }) {
  const [submitted, setSubmitted] = useState(false);
  const [brochureFile, setBrochureFile] = useState(undefined);
  const [errors, setErrors] = useState({});
  const clearError = (name) => errors[name] && setErrors((prev) => ({ ...prev, [name]: '' }));

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
    setErrors({});
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validateForm(e.target, FIELDS);
    setErrors(found);
    if (Object.keys(found).length) {
      focusFirstError(e.target, found, FIELDS);
      return;
    }
    setBrochureFile(COURSE_BROCHURES[e.target.elements.course?.value]);
    track('form_submit', { form_id: 'advisor-modal', course: e.target.elements.course?.value });
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
                <input type="text" id="advisor-name" name="full_name" placeholder="Your full name" required autoComplete="name" aria-invalid={!!errors.full_name} onChange={() => clearError('full_name')} />
                {errors.full_name && <span className="field-error" role="alert">{errors.full_name}</span>}
              </div>
              <div className="modal-field">
                <label htmlFor="advisor-email">Email</label>
                <input type="email" id="advisor-email" name="email" placeholder="you@example.com" required autoComplete="email" aria-invalid={!!errors.email} onChange={() => clearError('email')} />
                {errors.email && <span className="field-error" role="alert">{errors.email}</span>}
              </div>
              <div className="modal-field">
                <label htmlFor="advisor-phone">Phone Number</label>
                <input type="tel" id="advisor-phone" name="phone" placeholder="10-digit number" inputMode="numeric" maxLength={10} required autoComplete="tel-national" aria-invalid={!!errors.phone} onChange={() => clearError('phone')} />
                {errors.phone && <span className="field-error" role="alert">{errors.phone}</span>}
              </div>
              <div className="modal-field">
                <label htmlFor="advisor-course">Course</label>
                <select id="advisor-course" name="course" defaultValue="" required aria-invalid={!!errors.course} onChange={() => clearError('course')}>
                  <option value="" disabled>
                    Select a course
                  </option>
                  {COURSE_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.course && <span className="field-error" role="alert">{errors.course}</span>}
              </div>
              <div className="modal-field">
                <label htmlFor="advisor-message">Message</label>
                <textarea id="advisor-message" name="message" rows={4} placeholder="Tell us a bit about your background and goals" required aria-invalid={!!errors.message} onChange={() => clearError('message')} />
                {errors.message && <span className="field-error" role="alert">{errors.message}</span>}
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

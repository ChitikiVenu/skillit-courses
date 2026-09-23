import { useEffect } from 'react';
import LeadForm from './LeadForm.jsx';

// A popup version of the same course-specific lead form used inline elsewhere on a course page
// (heading, fields, brochure-on-submit) — for "Book Career Counselling" and "Download Brochure"
// buttons on pages that don't have (or shouldn't need) their own embedded form section, e.g.
// module pages. Same open/onClose/Escape/scroll-lock behaviour as AdvisorModal.jsx.
export default function LeadFormModal({ open, onClose, course, formId = 'modal-lead-form' }) {
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

  const { COPY } = course;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card lead-form-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Get the ${COPY.courseShortName} course fee structure and syllabus`}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <LeadForm
          bare
          formId={formId}
          heading={`Get the ${COPY.courseShortName} Course Fee Structure & Syllabus`}
          subheading="Share your details and our admissions team will call you back with the full syllabus, batch timings and fee breakdown."
          brochureFile={COPY.brochureFile}
          preselectedCourse={COPY.preselectedCourse ?? COPY.courseShortName}
        />
      </div>
    </div>
  );
}

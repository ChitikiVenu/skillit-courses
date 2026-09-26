import { useState } from 'react';
import { COURSE_BROCHURES } from '../data/courseBrochures.js';
import { track } from '../utils/analytics.js';
import { focusFirstError, validateForm } from '../utils/validate.js';

const FIELDS = ['full_name', 'mobile', 'profession', 'course'];
const COURSE_OPTIONS = ['Cyber Security', 'SOC (Security Operations Center)', 'AI/ML', 'Data Science', 'Data Analyst'];

// `bare` drops the card's own border, background and padding so the form can sit inside another box.
export default function LeadForm({ formId, heading, subheading, brochureFile, preselectedCourse, bare = false }) {
  const [submitted, setSubmitted] = useState(false);
  // Some forms already know which course they're for (a course page, a role page, a blog post) and
  // pass `brochureFile` directly. Forms that don't — the homepage's general enquiry forms, the FAQ
  // page — fall back to whichever course the visitor actually picked in the dropdown, so every
  // submission still ends with a real, relevant brochure link, not just the ones with a preset course.
  const [resolvedBrochure, setResolvedBrochure] = useState(brochureFile);
  const [errors, setErrors] = useState({});
  const clearError = (name) => errors[name] && setErrors((prev) => ({ ...prev, [name]: '' }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validateForm(e.target, FIELDS);
    setErrors(found);
    if (Object.keys(found).length) {
      focusFirstError(e.target, found, FIELDS);
      return;
    }
    if (!brochureFile) {
      const selectedCourse = e.target.elements.course?.value;
      setResolvedBrochure(COURSE_BROCHURES[selectedCourse]);
    }
    track('form_submit', { form_id: formId, course: e.target.elements.course?.value, profession: e.target.elements.profession?.value });
    setSubmitted(true);
  };

  return (
    <div className={`lead-form-card${bare ? ' is-bare' : ''}`}>
      <div className="lead-form-head">
        <h3>{heading}</h3>
        {subheading && <p>{subheading}</p>}
      </div>
      <form className="lead-form" onSubmit={handleSubmit} noValidate>
        {!submitted && (
          <>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor={`${formId}-name`}>Full Name</label>
                <input type="text" id={`${formId}-name`} name="full_name" placeholder="Your full name" required autoComplete="name" aria-invalid={!!errors.full_name} onChange={() => clearError('full_name')} />
                {errors.full_name && <span className="field-error" role="alert">{errors.full_name}</span>}
              </div>
              <div className="form-field">
                <label htmlFor={`${formId}-phone`}>Mobile Number</label>
                <input type="tel" id={`${formId}-phone`} name="mobile" placeholder="10-digit number" inputMode="numeric" maxLength={10} required autoComplete="tel-national" aria-invalid={!!errors.mobile} onChange={() => clearError('mobile')} />
                {errors.mobile && <span className="field-error" role="alert">{errors.mobile}</span>}
              </div>
              <div className="form-field">
                <label htmlFor={`${formId}-profession`}>Profession</label>
                <select id={`${formId}-profession`} name="profession" defaultValue="" required aria-invalid={!!errors.profession} onChange={() => clearError('profession')}>
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="Student">Student</option>
                  <option value="Working Professional">Working Professional</option>
                </select>
                {errors.profession && <span className="field-error" role="alert">{errors.profession}</span>}
              </div>
              <div className="form-field">
                <label htmlFor={`${formId}-course`}>Course</label>
                <select id={`${formId}-course`} name="course" defaultValue={preselectedCourse ?? ''} required aria-invalid={!!errors.course} onChange={() => clearError('course')}>
                  {!preselectedCourse && (
                    <option value="" disabled>
                      Select a course
                    </option>
                  )}
                  {COURSE_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.course && <span className="field-error" role="alert">{errors.course}</span>}
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Submit
              </button>
            </div>
            <div className="form-note">Our admissions team will call you back within 90 minutes.</div>
          </>
        )}
        {submitted && (
          <div className="form-success">
            Thanks — we&rsquo;ve received your details. Our admissions team will call you back shortly.{' '}
            {resolvedBrochure && (
              <a href={`/downloads/${resolvedBrochure}`} download>
                Download the brochure now &rarr;
              </a>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

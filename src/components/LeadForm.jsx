import { useState } from 'react';

const COURSE_OPTIONS = ['Cyber Security', 'SOC (Security Operations Center)', 'AI/ML', 'Data Science', 'Data Analyst'];

// `bare` drops the card's own border, background and padding so the form can sit inside another box.
export default function LeadForm({ formId, heading, subheading, brochureFile, preselectedCourse, bare = false }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
                <input type="text" id={`${formId}-name`} name="full_name" placeholder="Your full name" required />
              </div>
              <div className="form-field">
                <label htmlFor={`${formId}-phone`}>Mobile Number</label>
                <input type="tel" id={`${formId}-phone`} name="mobile" placeholder="10-digit number" pattern="[0-9]{10}" required />
              </div>
              <div className="form-field">
                <label htmlFor={`${formId}-profession`}>Profession</label>
                <select id={`${formId}-profession`} name="profession" defaultValue="" required>
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="Student">Student</option>
                  <option value="Working Professional">Working Professional</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor={`${formId}-course`}>Course</label>
                <select id={`${formId}-course`} name="course" defaultValue={preselectedCourse ?? ''} required>
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
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Request a Callback
              </button>
            </div>
            <div className="form-note">Our admissions team will call you back within 90 minutes.</div>
          </>
        )}
        {submitted && (
          <div className="form-success">
            Thanks — we&rsquo;ve received your details. Our admissions team will call you back shortly.{' '}
            {brochureFile && (
              <a href={`/downloads/${brochureFile}`} download>
                Download the brochure now &rarr;
              </a>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

// Maps every course-dropdown label used by LeadForm.jsx and AdvisorModal.jsx (the two components'
// option lists use slightly different wording — "AI/ML" vs "AI & ML" — so both are covered here) to
// that course's real brochure file, already wired into each course's own COPY.brochureFile.
//
// Used only as a fallback: a form that already knows which course it's for (a course page, a role
// page, a blog post) is passed an explicit `brochureFile` prop and never consults this. This is for
// forms that don't know in advance — the homepage's general enquiry forms, the FAQ page's form, and
// the "Talk to an Advisor" modal — where the visitor's own Course selection at submit time is the
// only signal available, so the right brochure can still be offered afterwards.
export const COURSE_BROCHURES = {
  'Cyber Security': 'Skill-IT-Education-Cyber-Security-Brochure.pdf',
  'AI/ML': 'Skill-IT-Education-AI-ML-Engineering-Brochure.pdf',
  'AI & ML': 'Skill-IT-Education-AI-ML-Engineering-Brochure.pdf',
  'Data Science': 'Skill-IT-Education-Data-Science-Brochure.pdf',
  'SOC (Security Operations Center)': 'Skill-IT-Education-SOC-Analyst-Brochure.pdf',
  'Data Analyst': 'Skill-IT-Education-Data-Analytics-Brochure.pdf',
};

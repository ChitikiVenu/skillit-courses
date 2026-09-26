// Field rules shared by the site's forms (LeadForm, AdvisorModal). Every field is mandatory: a form
// only submits, and only offers the brochure download, once every rule below passes.
export const RULES = {
  full_name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your full name.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address.'),
  mobile: (v) => (/^[6-9]\d{9}$/.test(v.replace(/[\s-]/g, '')) ? '' : 'Please enter a valid 10-digit mobile number.'),
  phone: (v) => (/^[6-9]\d{9}$/.test(v.replace(/[\s-]/g, '')) ? '' : 'Please enter a valid 10-digit phone number.'),
  profession: (v) => (v ? '' : 'Please select one.'),
  message: (v) => (v.trim().length >= 5 ? '' : 'Please tell us a little about your background and goals.'),
  course: (v) => (v ? '' : 'Please select a course.'),
};

// Validates the named fields of a form element; returns { fieldName: message } for the ones that fail.
export function validateForm(form, names) {
  const errors = {};
  names.forEach((name) => {
    const el = form.elements[name];
    const message = RULES[name]?.(el ? el.value : '') ?? '';
    if (message) errors[name] = message;
  });
  return errors;
}

export function focusFirstError(form, errors, names) {
  const first = names.find((n) => errors[n]);
  if (first) form.elements[first]?.focus();
}

export const DOMAIN = 'https://skilliteducation.com';
export const BRAND = 'SKILL IT EDUCATION';
export const PHONE = '+91 9177715978';

// The five entries under the "Our Programmes" menu. cyberSecurity / aiMl / socAnalyst point at
// real course data (src/data/*.js); dataScience / dataAnalyst have no content yet, so they route
// to the shared "coming soon" placeholder instead of a course page.
export const PROGRAMMES = [
  { label: 'Cyber Security', path: '/cyber-security', available: true },
  { label: 'AI & ML', path: '/ai-ml', available: true },
  { label: 'Data Science', path: '/data-science', available: false },
  { label: 'SOC', path: '/soc-analyst', available: true },
  { label: 'Data Analyst', path: '/data-analyst', available: false },
];

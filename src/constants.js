export const DOMAIN = 'https://skilliteducation.com';
export const BRAND = 'SKILL IT EDUCATION';
export const PHONE = '+91 9177715978';

// The five entries under the "Our Programmes" menu — all five now point at real course data
// (src/data/*.js).
export const PROGRAMMES = [
  { label: 'Cyber Security', path: '/cyber-security', available: true },
  { label: 'AI & ML', path: '/ai-ml', available: true },
  { label: 'Data Science', path: '/data-science', available: true },
  { label: 'SOC', path: '/soc-analyst', available: true },
  { label: 'Data Analyst', path: '/data-analyst', available: true },
];

export const EMAIL = 'info@skilliteducation.com';
export const ADDRESS =
  'LR Towers, No. 3-535, 3rd Floor A Section, 100 Feet Road, Ayappa Society, Madhapur, Hyderabad, Telangana, India';

// WhatsApp chat link for the same number as the phone above (wa.me wants digits only, with the country code).
export const WHATSAPP_URL =
  'https://wa.me/' + PHONE.replace(/\D/g, '') + '?text=' + encodeURIComponent('Hi Skill IT Education, I would like to know more about your courses.');

// Legal details used by the policy pages. The address is as it appears in the company's privacy policy document.
export const LEGAL_NAME = 'Skill IT Education Pvt Ltd';
export const LEGAL_ADDRESS = 'House No. 3-5-35, LR Towers, 3rd Floor, 100 Feet Road, Ayyappa Society, Madhapur, Hyderabad, Telangana 500081';
export const WEBSITE = 'www.skilliteducation.com';
// The Grievance Officer's name has to be published (SPDI Rules 2011, rule 5(9)). Fill it in here and it appears on both
// policy pages; until then the pages show the role, address and email only.
export const GRIEVANCE_OFFICER_NAME = '';
export const POLICIES_UPDATED = 'September 20, 2026';

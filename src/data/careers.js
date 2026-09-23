// Open roles at Skill IT Education. Each entry is real, owner-supplied job-posting content —
// nothing here is invented. `postedDate` is the date the listing actually went live (used for
// JobPosting structured data), not a placeholder.
export const CAREERS = [
  {
    slug: 'head-of-channel-partnerships',
    title: 'Head of Channel Partnerships (Higher Education & IT)',
    location: 'Madhapur, Hyderabad',
    workMode: 'Onsite',
    employmentType: 'Full-time',
    company: 'Skill IT Education Pvt Ltd',
    postedDate: '2026-09-23',
    summary:
      "Build and lead our partner ecosystem across higher education institutions and SaaS, software and IT companies — growing enrolments, strengthening placements and extending our reach.",
    about: [
      "Skill IT Education is hiring a Head of Channel Partnerships to build and lead our partner ecosystem across two fronts: higher education institutions and SaaS, software, and IT companies.",
      "You'll find, negotiate, and scale partnerships that grow enrolments, strengthen placements, and extend our reach across our programs in Cyber Security, SOC, AI Engineering, Data Science, and Data Analytics.",
      "This is a high-ownership role. You'll set partnership strategy and structure deals, and you'll also open doors, close agreements, and manage relationships end to end.",
    ],
    responsibilities: [
      {
        title: 'Higher Education Partnerships',
        text: 'Build tie-ups with colleges, universities, and training institutes for co-branded programs, curriculum integration, campus outreach, and placement pipelines.',
      },
      {
        title: 'SaaS, Software & IT Partnerships',
        text: 'Develop relationships with software companies and IT platforms for hiring pipelines, technology tie-ups, certification partnerships, and co-marketing.',
      },
      {
        title: 'Partnership Models',
        text: 'Design and refine referral, reseller, franchise, and co-branded models that can scale across regions.',
      },
      {
        title: 'Deal Lifecycle',
        text: 'Lead every stage, from prospecting and pitching to negotiation, contracting, and onboarding.',
      },
      {
        title: 'Cross-functional Alignment',
        text: 'Work with Marketing, Sales, and Academics so every partnership turns into enrolments and learner outcomes.',
      },
      {
        title: 'Performance Reporting',
        text: 'Track pipeline, conversions, and ROI, and report results to leadership.',
      },
    ],
    requirements: [
      '2+ years in channel partnerships, business development, or alliances, ideally in Higher Ed/EdTech or Software/IT/SaaS.',
      "A proven record of sourcing and closing new B2B partnerships, not just managing existing ones.",
      'A strong network in higher education or the software/IT industry. Both is a plus.',
      'Sharp negotiation, communication, and relationship-management skills.',
      'Comfort working independently in a fast-moving, target-driven environment.',
    ],
    whyJoin:
      'Skill IT Education is growing quickly across Cyber Security, AI, and Data programs. In this role, you’ll directly shape how we reach new learners and hiring partners, with real ownership over both strategy and execution.',
    howToApply: {
      email: 'info@skilliteducation.com',
      subject: 'Head of Channel Partnerships',
      phone: '+91 91777 15978',
    },
  },
  // The next three roles were requested with a title/openings/department only — no responsibilities
  // or requirements list was supplied, so none are invented here. CareerDetailPage.jsx shows a
  // "full job description on request" callout in place of those two sections until real content
  // comes in; `about` below is kept to what's actually known (role, department, location).
  {
    slug: 'sales-executive-higher-education',
    title: 'Sales Executive – Higher Education',
    location: 'Madhapur, Hyderabad',
    workMode: 'Onsite',
    employmentType: 'Full-time',
    company: 'Skill IT Education Pvt Ltd',
    postedDate: '2026-09-23',
    summary:
      'Higher-education sales role — building relationships with colleges and institutions to grow enrolments across our technology programmes.',
    about: [
      'Skill IT Education is hiring a Sales Executive for our Higher Education sales team, based at our Madhapur, Hyderabad campus.',
      'This role is focused on higher-education sales — building relationships with colleges, universities and institutions to grow enrolments across our Cyber Security, SOC, AI & ML, Data Science and Data Analytics programmes.',
    ],
    responsibilities: [],
    requirements: [],
    whyJoin:
      'Skill IT Education is growing quickly across Cyber Security, AI, and Data programmes — join a small, fast-moving team building training that turns into real careers.',
    howToApply: {
      email: 'info@skilliteducation.com',
      subject: 'Sales Executive – Higher Education',
      phone: '+91 91777 15978',
    },
  },
  {
    slug: 'sales-intern',
    title: 'Sales Intern',
    location: 'Madhapur, Hyderabad',
    workMode: 'Onsite',
    employmentType: 'Internship',
    openings: 4,
    company: 'Skill IT Education Pvt Ltd',
    postedDate: '2026-09-23',
    summary: '4 openings — supporting the sales team at our Madhapur, Hyderabad campus.',
    about: [
      'Skill IT Education is hiring Sales Interns to support our sales team at our Madhapur, Hyderabad campus.',
      '4 openings are available for this internship.',
    ],
    responsibilities: [],
    requirements: [],
    whyJoin:
      'Skill IT Education is growing quickly across Cyber Security, AI, and Data programmes — join a small, fast-moving team building training that turns into real careers.',
    howToApply: {
      email: 'info@skilliteducation.com',
      subject: 'Sales Intern',
      phone: '+91 91777 15978',
    },
  },
  {
    slug: 'digital-marketing-manager',
    title: 'Digital Marketing Manager',
    location: 'Madhapur, Hyderabad',
    workMode: 'Onsite',
    employmentType: 'Full-time',
    company: 'Skill IT Education Pvt Ltd',
    postedDate: '2026-09-23',
    summary: 'Lead digital marketing for Skill IT Education across our Cyber Security, AI & ML, Data Science and Data Analytics programmes.',
    about: [
      'Skill IT Education is hiring a Digital Marketing Manager, based at our Madhapur, Hyderabad campus.',
      'This role leads digital marketing across our Cyber Security, SOC, AI & ML, Data Science and Data Analytics programmes.',
    ],
    responsibilities: [],
    requirements: [],
    whyJoin:
      'Skill IT Education is growing quickly across Cyber Security, AI, and Data programmes — join a small, fast-moving team building training that turns into real careers.',
    howToApply: {
      email: 'info@skilliteducation.com',
      subject: 'Digital Marketing Manager',
      phone: '+91 91777 15978',
    },
  },
];

export const getCareerBySlug = (slug) => CAREERS.find((c) => c.slug === slug);

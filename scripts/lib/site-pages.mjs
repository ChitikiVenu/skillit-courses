// The single source of truth for "every real page on the site and what its <Seo> call renders" —
// used by both scripts/seo-audit.mjs (duplicate/missing checks) and scripts/prerender-meta.mjs
// (static per-route <head> tags for crawlers that don't run JavaScript, e.g. WhatsApp/LinkedIn link
// previews). Kept as one module so the two scripts can never drift apart on what a page's real
// title/description/image actually is — each formula here mirrors the matching page component
// exactly (CourseModulePage.jsx, BlogPostPage.jsx, etc.).
//
// ogImage is a site-relative path (or undefined, meaning "use the default logo" — see
// src/config/site.js's SITE_LOGO, applied by the caller). ogType mirrors the `ogType` prop each page
// passes to <Seo> (default 'website'; 'article' for blog posts and job postings).

// Mirrors BlogPostPage.jsx's / CourseModulePage.jsx's own truncate() exactly.
function truncate(s, limit) {
  const trimmed = s.trim();
  if (trimmed.length <= limit) return trimmed;
  const cut = trimmed.slice(0, limit);
  const lastSpace = cut.lastIndexOf(' ');
  const safe = lastSpace > 0 ? cut.slice(0, lastSpace) : cut;
  return safe.replace(/[,.;—-]+$/, '') + '…';
}

export async function getSitePages() {
  const cyberSecurity = (await import('../../src/data/cyberSecurity.js')).default;
  const aiMl = (await import('../../src/data/aiMl.js')).default;
  const dataScience = (await import('../../src/data/dataScience.js')).default;
  const socAnalyst = (await import('../../src/data/socAnalyst.js')).default;
  const dataAnalyst = (await import('../../src/data/dataAnalyst.js')).default;
  const { ROLE_COURSES } = await import('../../src/data/roleCourses/index.js');
  const { BLOG_POSTS } = await import('../../src/data/blogPosts.js');
  const { PRIVACY_POLICY, DATA_COMPLIANCE_POLICY, REFUND_POLICY } = await import('../../src/data/policies.js');
  const { CAREERS } = await import('../../src/data/careers.js');

  const COURSES = [cyberSecurity, aiMl, dataScience, socAnalyst, dataAnalyst];

  return [
    {
      path: '/',
      title: 'Cyber Security, AI & Data Science Courses in Hyderabad | Skill IT Education',
      description:
        'Build job-ready technology skills with practical Cyber Security, SOC, AI Engineering, Data Science and analytics training at Skill IT Education in Hyderabad.',
      ogImage: '/img/our-programmes-diagram.png',
    },
    {
      path: '/blog',
      title: 'Career Insights | Skill IT Education Blog',
      description: 'Career Insights from Skill IT Education — real answers on Cyber Security, AI & ML, Data Science, SOC and Data Analytics careers.',
    },
    {
      path: '/faqs',
      title: 'FAQs — Courses, Fees, Internships & Placement | Skill IT Education',
      description: 'Answers on courses, eligibility, fees, internships, projects, certifications and placement support at Skill IT Education.',
    },
    {
      path: '/careers',
      title: 'Careers at Skill IT Education | Join Our Team in Hyderabad',
      description: 'Open roles at Skill IT Education in Madhapur, Hyderabad — see current openings and how to apply.',
    },
    ...CAREERS.map((c) => ({
      path: `/careers/${c.slug}`,
      title: `${c.title} | Careers at Skill IT Education`,
      description: c.summary,
      ogType: 'article',
    })),
    { path: '/privacy-policy', title: PRIVACY_POLICY.metaTitle, description: PRIVACY_POLICY.metaDescription },
    { path: '/data-compliance-policy', title: DATA_COMPLIANCE_POLICY.metaTitle, description: DATA_COMPLIANCE_POLICY.metaDescription },
    {
      path: '/about-us',
      title: 'About Skill IT | AI & Cyber Security Training, Hyderabad',
      description:
        'Learn Cyber Security, AI & ML, Data Science and SOC in Madhapur, Hyderabad: live classes, hands-on labs, real projects, internship and placement assistance.',
    },
    {
      path: '/contact',
      title: 'Contact Skill IT Education | Madhapur, Hyderabad',
      description: 'Visit or contact Skill IT Education in Madhapur, Hyderabad: address, phone, WhatsApp, email and map, plus a form to book a free counselling session.',
    },
    { path: '/refund-policy', title: REFUND_POLICY.metaTitle, description: REFUND_POLICY.metaDescription },
    ...COURSES.map((c) => ({
      path: c.routeBase,
      title: c.COPY.metaTitle,
      description: c.COPY.metaDesc,
      ogImage: c.COPY.ogImageFile ? `/img/${c.COPY.ogImageFile}` : undefined,
    })),
    ...COURSES.flatMap((c) =>
      c.MODULES.map((m) => {
        const descPrefix = `Module ${m.number} — ${c.COPY.courseShortName} (${m.duration}): `;
        return {
          path: `${c.routeBase}/${m.slug}`,
          title: `${m.title} — ${c.COPY.courseShortName} | Skill IT Education`,
          description: descPrefix + truncate(m.hero, 160 - descPrefix.length),
        };
      }),
    ),
    ...ROLE_COURSES.map((r) => ({ path: r.href, title: r.metaTitle, description: r.metaDescription })),
    ...BLOG_POSTS.map((p) => ({
      path: `/blog/${p.slug}`,
      title: p.metaTitle ?? `${p.question} | Skill IT Education`,
      description: p.metaDescription ?? truncate(p.lede, 158),
      ogType: 'article',
    })),
  ];
}

// FAQ content for /faqs, grouped into subject-wise categories (boxes), each rendered as its own
// accordion. Every fact here is grounded in the real course data (src/data/*.js — fees, durations,
// module counts, salary ranges, certifications) or in constants.js (address/phone/email), so the
// page never states a number that isn't already shown elsewhere on the site.
//
// Placement honesty (owner instruction, 2026-09-22): Skill IT Education does NOT promise 100%
// placement. What is committed is real placement assistance — resume support, mock interviews and up
// to 6 interview opportunities with hiring partners per student. Every placement-related answer below
// says this plainly; never rephrase it into a guarantee.
//
// Refund questions point to the real /refund-policy page (2026-09-23: 7-working-days eligibility
// window) rather than restating its terms here, so there's one place they can drift out of sync.
//
// `accent` cycles a short palette already used elsewhere on the site (the fit-finder card tints), so
// each box reads as its own subject without inventing new colours.
const ACCENTS = ['#2450d6', '#7c3aed', '#0c9a83', '#c2410c', '#a16207'];

const RAW_CATEGORIES = [
  {
    key: 'about',
    label: 'About Skill IT Education',
    blurb: 'Who we are, where we train and how to reach us.',
    items: [
      {
        q: 'What is Skill IT Education?',
        a: 'Skill IT Education is a Hyderabad-based upskilling academy in Madhapur that trains graduates, IT professionals and career switchers in Cyber Security, AI & ML, Data Science, SOC Analyst and Data Analytics, with hands-on labs, real projects and a real-time internship built into every programme.',
      },
      {
        q: 'Where is Skill IT Education located?',
        a: 'Our campus is at LR Towers, 100 Feet Road, Ayyappa Society, Madhapur, Hyderabad, Telangana. Offline classes run from this campus; online batches are open to students anywhere.',
      },
      {
        q: 'How long has Skill IT Education been training students?',
        a: 'We have 15+ years of training experience, with 650+ learners trained so far and a network of 345+ hiring partners across our programmes.',
      },
      {
        q: 'Which programmes does Skill IT Education offer?',
        a: 'Five: Cyber Security (with AI), AI & ML, Data Science, SOC Analyst and Data Analytics. Each has its own curriculum, duration, fee structure and career track — see Our Programmes on the home page.',
      },
      {
        q: 'Is Skill IT Education only for freshers, or can working professionals join too?',
        a: "Both. Every programme is built for graduates, IT support staff and career switchers as well as working professionals upskilling alongside a job — batch timings are set with both groups in mind.",
      },
      {
        q: 'Does Skill IT Education only train in cybersecurity, or other fields too?',
        a: 'We started in cybersecurity and have since expanded to AI & ML, Data Science, SOC Analyst and Data Analytics — all five programmes share the same hands-on, project-based teaching model.',
      },
      {
        q: 'How do I contact Skill IT Education?',
        a: 'Call or WhatsApp +91 9177715978, email info@skilliteducation.com, or visit the Madhapur campus. You can also share your details through any "Request a Callback" form on the site and our admissions team will call you back.',
      },
      {
        q: 'Does Skill IT Education have a placement or hiring-partner network?',
        a: 'Yes — 345+ hiring partners across the industries our programmes train for, used for resume circulation, referrals and the interview opportunities arranged during placement assistance.',
      },
      {
        q: 'Can I visit the campus before enrolling?',
        a: 'Yes, campus visits are welcome. Call ahead or share your details through the site and our admissions team will arrange a time.',
      },
      {
        q: "Is Skill IT Education's training self-paced or instructor-led?",
        a: "Instructor-led. Every programme runs on a fixed batch schedule with live sessions, hands-on labs and direct access to faculty — it isn't a pre-recorded, self-paced course.",
      },
    ],
  },
  {
    key: 'programmes',
    label: 'Programmes & Curriculum',
    blurb: 'What each of the five programmes covers, module by module.',
    items: [
      {
        q: 'What is the Cyber Security programme about?',
        a: 'A structured, hands-on Cyber Security (with AI) programme across six modules — networking and ethical-hacking foundations, reconnaissance and scanning, system hacking and social engineering, penetration testing and web exploitation, advanced exploitation/cryptography/mobile security, and AI-powered security operations — taking you from fundamentals to full SOC/VAPT capability.',
      },
      {
        q: 'What is the AI & ML programme about?',
        a: 'A seven-module programme covering Python, machine learning, deep learning, Generative AI & LLMs, MLOps and production AI systems — built to take you from programming fundamentals to shipping real AI-powered products.',
      },
      {
        q: 'What is the Data Science programme about?',
        a: 'An eight-module programme spanning statistics, Python, SQL, exploratory data analysis, visualization, machine learning, model tuning and deployment, ending in an end-to-end capstone project.',
      },
      {
        q: 'What is the SOC Analyst programme about?',
        a: 'A five-module programme focused on SIEM monitoring (including IBM QRadar and Splunk), incident response, threat hunting and live SOC workflows — built specifically for Security Operations Center roles.',
      },
      {
        q: 'What is the Data Analytics programme about?',
        a: 'A nine-module programme covering Excel, SQL, exploratory analysis, visualization, Power BI/Tableau dashboards and business reporting — built for Data Analyst, BI Analyst and reporting roles.',
      },
      {
        q: 'How many modules does each programme have?',
        a: 'Cyber Security has 6, AI & ML has 7, Data Science has 8, SOC Analyst has 5, and Data Analytics has 9. Each module page lists exactly what it covers, the tools used and the project attached to it.',
      },
      {
        q: 'How long does each programme take, start to finish?',
        a: "It varies by programme — most run about 5 to 7 months end-to-end, including the real-time internship (and, for Cyber Security, an additional project phase). Every programme page has a 'Course Duration & Learning Path' section with the exact breakdown for that programme.",
      },
      {
        q: 'Are the programmes purely theoretical, or hands-on?',
        a: 'Hands-on by design — every module closes with a lab exercise or a real project, not just slides. Each programme includes a minimum of five portfolio projects.',
      },
      {
        q: 'Do I get a portfolio of projects by the end of the programme?',
        a: 'Yes. Every programme includes a minimum of five hands-on projects across its modules, plus a capstone project, all meant to go straight into your resume and portfolio.',
      },
      {
        q: 'What tools and software will I learn to use?',
        a: 'It depends on the programme — for example Cyber Security covers Kali Linux, Burp Suite, Nmap and Wireshark; Data Science and Data Analytics cover Python/SQL, Power BI and Tableau; SOC Analyst covers IBM QRadar and Splunk. Each course page lists its full tool set.',
      },
      {
        q: 'Can I switch programmes after I have started?',
        a: 'Talk to our admissions team as early as possible if you are reconsidering — switches are handled case by case depending on how far into the batch you are, and are not automatic.',
      },
      {
        q: 'Which programme should I choose if I am not sure?',
        a: "It depends on what you enjoy: Cyber Security if you want to break into and defend systems, AI & ML if you want to build AI-powered products, Data Science if you like statistics and predictive models, SOC Analyst if you want to monitor live systems and respond to attacks, and Data Analytics if you like Excel, SQL and turning numbers into decisions. The \"Which programme fits you?\" section on the home page, and our advisors, can help you decide.",
      },
      {
        q: 'Do the programmes include real projects, or only practice exercises?',
        a: 'Both — module-level labs build the individual skill, and the projects (five minimum per programme, plus a capstone) apply it to a realistic, portfolio-ready scenario.',
      },
      {
        q: 'Is there a demo class before I enroll?',
        a: 'Contact our admissions team to ask about an upcoming demo session or orientation for the programme you are interested in.',
      },
      {
        q: 'Do you teach the latest tools, like Generative AI and LLMs?',
        a: "Yes — the AI & ML programme includes a dedicated Generative AI & LLMs module, and AI-assisted techniques are also built into the Cyber Security programme's security-operations module.",
      },
      {
        q: 'Can I study more than one programme?',
        a: 'Yes, students can enroll in more than one programme, one after another. Talk to admissions about combined-programme fees and scheduling.',
      },
    ],
  },
  {
    key: 'admissions',
    label: 'Admissions & Eligibility',
    blurb: 'Who can join, and how to enroll.',
    items: [
      {
        q: 'What are the eligibility requirements to join?',
        a: "There is no strict degree requirement — programmes are open to graduates, final-year students, IT professionals and career switchers. Specific prerequisites, where they exist, are listed on that programme's page.",
      },
      {
        q: 'Do I need a technical background to join AI & ML or Data Science?',
        a: 'No prior AI/ML or data experience is required — both programmes start from programming and statistics fundamentals and build up from there.',
      },
      {
        q: 'Do I need a cybersecurity background for the Cyber Security or SOC Analyst programme?',
        a: 'No — Module 1 of the Cyber Security programme starts from networking and operating-system basics, and the SOC Analyst programme is built to be accessible to career changers and networking graduates as well as IT support staff.',
      },
      {
        q: 'How do I enroll?',
        a: 'Share your details through any "Request a Callback" form on the site, or call/WhatsApp +91 9177715978. Our admissions team will walk you through the syllabus, fee structure and batch options.',
      },
      {
        q: 'Is there an entrance test or interview to get in?',
        a: 'No formal entrance exam. Admissions is a conversation with our team about your background and goals, to help you pick the right programme and batch.',
      },
      {
        q: 'Can final-year students or freshers with no work experience join?',
        a: 'Yes — final-year students and freshers are welcome in every programme.',
      },
      {
        q: 'Is there an age limit to join?',
        a: 'No age limit — we train students, freshers and working professionals across a wide range of ages and backgrounds.',
      },
      {
        q: 'How soon can I start after enrolling?',
        a: "That depends on the next batch's start date for your chosen programme — ask our admissions team for the nearest upcoming batch.",
      },
      {
        q: 'Can I enroll from outside Hyderabad?',
        a: 'Yes — our online batches are open to students anywhere; only the offline, in-person batches are specific to the Madhapur campus.',
      },
      {
        q: 'What documents do I need to enroll?',
        a: 'Basic ID and educational documents are typically requested at enrollment; our admissions team will confirm the exact list for your programme.',
      },
    ],
  },
  {
    key: 'fees',
    label: 'Fees & Payments',
    blurb: 'What each programme costs, and how payment works.',
    items: [
      {
        q: 'What are the fees for each programme?',
        a: 'Cyber Security is ₹45,000 online / ₹55,000 offline, AI & ML is ₹55,000 online / ₹65,000 offline, Data Science is ₹50,000 online / ₹55,000 offline, SOC Analyst is ₹50,000 online / ₹55,000 offline, and Data Analytics is ₹45,000 online / ₹50,000 offline. Fees are also shown on each programme’s own page.',
      },
      {
        q: 'Why is the offline fee higher than the online fee?',
        a: "Offline batches run from our Madhapur campus and include in-person classroom and lab facility costs that the online, live instructor-led format doesn't carry.",
      },
      {
        q: 'Can I pay the fee in installments?',
        a: 'Ask our admissions team about installment options when you enroll — payment plans are handled case by case.',
      },
      {
        q: 'What does the course fee include?',
        a: 'The full programme — every module, its labs and projects, the real-time internship, and placement assistance. External certification exam fees are separate (see the Certifications FAQs).',
      },
      {
        q: 'Are there any hidden costs beyond the course fee?',
        a: 'No hidden course fees. The one cost that is genuinely separate is any external certification exam you choose to sit — that is paid directly to the certifying body, not to us.',
      },
      {
        q: 'Do you offer scholarships or discounts?',
        a: 'Ask our admissions team directly — any scholarship, referral or early-enrollment offer running at the time will be explained when you enroll.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'Our admissions team will share the accepted payment methods (bank transfer, UPI, card, etc.) when you enroll.',
      },
      {
        q: 'Is the course fee refundable if I drop out?',
        a: 'Yes, if you request it at least 7 working days before your course start date — see our Refund Policy page for the full terms. Requests made closer to or after the start date are not eligible.',
      },
      {
        q: 'Do I pay the full fee before the batch starts?',
        a: 'Ask admissions about the exact payment schedule for your programme and batch — this varies by programme and by any installment plan you agree.',
      },
      {
        q: 'Is GST or any tax included in the fee shown?',
        a: 'Confirm this with our admissions team when you enroll, so the amount you are quoted is the amount you actually pay.',
      },
      {
        q: 'Do returning students get a discount on a second programme?',
        a: 'Ask our admissions team — any multi-programme pricing is confirmed at the time of enrollment.',
      },
      {
        q: 'Will the fee change after I enroll?',
        a: 'No — the fee you agree to at enrollment is locked in for your batch.',
      },
    ],
  },
  {
    key: 'batches',
    label: 'Batches, Timings & Mode of Learning',
    blurb: 'Online vs offline, schedules and what you need at home.',
    items: [
      {
        q: 'Is training online, offline, or both?',
        a: 'Both. Every programme is available online (live, instructor-led) and offline (in-person at our Madhapur campus) — you choose the mode when you enroll.',
      },
      {
        q: 'What are the batch timings?',
        a: 'We run batches on both weekday and weekend schedules to suit students and working professionals — ask admissions for the current timetable for your chosen programme.',
      },
      {
        q: 'How many hours a week does a programme require?',
        a: "This varies by programme and module — each programme's \"Course Duration & Learning Path\" section shows its total hours (for example Cyber Security runs 180+ hours of core curriculum).",
      },
      {
        q: 'Are online classes live, or pre-recorded?',
        a: 'Live and instructor-led, with direct access to faculty for questions — not a self-paced, pre-recorded course.',
      },
      {
        q: 'Are sessions recorded, so I can revisit them later?',
        a: 'Ask your batch coordinator once you enroll — recording availability is confirmed per batch.',
      },
      {
        q: 'What do I need at home for the online batches — a laptop, specific software?',
        a: 'A laptop capable of running the programme’s tools (for example a virtual-machine lab for Cyber Security, or Python/SQL tooling for Data Science) and a stable internet connection. Specific system requirements are shared at enrollment.',
      },
      {
        q: 'Can I switch from offline to online (or back) mid-programme?',
        a: "Talk to your batch coordinator — this is handled case by case depending on seat availability in the other mode's batch.",
      },
      {
        q: 'What happens if I miss a class?',
        a: 'Speak to your faculty or batch coordinator about catching up — options depend on the batch and whether sessions are recorded.',
      },
      {
        q: 'How many students are in a batch?',
        a: 'Batch sizes are kept manageable so faculty can give hands-on, individual attention — ask admissions for the current batch size for your programme.',
      },
      {
        q: 'When does the next batch start?',
        a: 'Batch start dates roll regularly — ask our admissions team for the nearest upcoming batch in your chosen programme and mode.',
      },
    ],
  },
  {
    key: 'internship',
    label: 'Real-Time Internship',
    blurb: 'What the internship phase actually involves.',
    items: [
      {
        q: 'Does every programme include an internship?',
        a: 'Yes — every one of our five programmes ends with a real-time internship, run as a distinct two-month phase.',
      },
      {
        q: 'Is the internship online or in-person?',
        a: 'Ask admissions for the current internship format for your programme — this can vary by batch.',
      },
      {
        q: 'Is the internship paid?',
        a: 'The internship is a real-time, hands-on learning phase attached to your programme, not a paid job placement — confirm the specific terms with admissions for your batch.',
      },
      {
        q: 'What do I actually do during the internship?',
        a: "Real-time, applied work in your programme's domain — for example live SOC/VAPT-style tasks in Cyber Security, or applied analytics/ML work in Data Science and AI & ML — building directly on what the modules taught.",
      },
      {
        q: 'Do I get a certificate for completing the internship?',
        a: 'Yes — Skill IT Education awards its own course-completion certificate covering the full programme, including the internship phase, once you finish successfully.',
      },
      {
        q: 'Is the internship guaranteed to lead to a job offer?',
        a: 'No — the internship is a structured, real-time learning phase, not a guaranteed job offer. It builds the practical experience and reference points that strengthen your candidacy during the placement-assistance phase that follows.',
      },
      {
        q: 'How long is the internship?',
        a: 'Two months for every programme, run as the final phase after the core curriculum (and, for programmes that have one, the project phase).',
      },
      {
        q: 'Can I do the internship at a company of my choice?',
        a: "The internship is organised through Skill IT Education's own structure and hiring-partner network rather than an independently arranged placement — ask admissions for the specifics of your programme.",
      },
      {
        q: "What if I can't complete the internship on schedule?",
        a: 'Talk to your batch coordinator as early as possible — options are handled case by case.',
      },
      {
        q: 'Does the internship count toward my total programme duration?',
        a: "Yes — the internship is the final phase of the programme timeline shown on each course page (for example the extra 2 months in Data Science's 7-months-total figure).",
      },
    ],
  },
  {
    key: 'placement',
    label: 'Placement Assistance & Interviews',
    blurb: 'What we commit to — and what we do not promise.',
    items: [
      {
        q: 'Does Skill IT Education guarantee a job after the programme?',
        a: "No. We do not promise or guarantee 100% placement — no genuine training programme can guarantee a job offer, and we'd rather be upfront about that than overclaim. What we do commit to is real placement assistance: resume support, mock interviews, and up to 6 interview opportunities with our hiring partners for every student who completes their programme.",
      },
      {
        q: 'What does "placement assistance" actually include?',
        a: 'Resume and LinkedIn profile reviews, mock interviews, interview preparation, and up to 6 interview opportunities arranged with our 345+ hiring partners for each student — a defined, structured process, not just a promise.',
      },
      {
        q: 'How many interview opportunities do I get?',
        a: 'Up to 6 interview opportunities with our hiring partners, arranged as part of your placement assistance after you complete your programme (and internship, where applicable).',
      },
      {
        q: "What happens if I don't clear any of the 6 interviews?",
        a: "Talk to your placement coordinator — they'll review your interview feedback with you, work on the gaps, and help you prepare for future opportunities as they come up through our hiring-partner network.",
      },
      {
        q: 'Is placement assistance available for every programme?',
        a: 'Yes — resume support, mock interviews and hiring-partner interview opportunities are part of every one of our five programmes.',
      },
      {
        q: 'Who are your hiring partners?',
        a: 'We work with a network of 345+ hiring partners across the industries our programmes train for; specific company names are shared with students during the placement-assistance phase.',
      },
      {
        q: 'When does placement assistance start — during the course or after?',
        a: 'Placement assistance (resume support and interview preparation) typically ramps up as you approach the end of your programme and internship, with the interview opportunities following completion.',
      },
      {
        q: 'Do you help freshers with no work experience get interviews too?',
        a: 'Yes — placement assistance, including the up-to-6 interview opportunities, is available to freshers and career switchers as well as working professionals.',
      },
      {
        q: 'Is there a fee for placement assistance?',
        a: 'No separate fee — placement assistance is part of the programme you enroll in.',
      },
      {
        q: 'What salary can I expect after completing a programme?',
        a: 'It varies significantly by role, company, location and experience. As broad, indicative entry-to-mid ranges in India: Cyber Security ₹3.5L–9L, AI & ML ₹4L–12L, Data Science ₹4L–10L, SOC Analyst ₹3L–9L and Data Analytics ₹3.5L–8L per year — these are ranges, not a guarantee of outcome.',
      },
      {
        q: 'How do you prepare students for interviews?',
        a: "Mock interviews, resume reviews and role-specific interview prep — and every module's curriculum is built with real interview questions in mind, so the skills you're tested on in interviews are the same ones you practised in labs and projects.",
      },
      {
        q: 'What roles can I apply for after each programme?',
        a: "Each programme maps to several specific roles — for example Cyber Security opens up SOC Analyst, Penetration Tester and Security Analyst roles, while Data Analytics opens up Data Analyst, BI Analyst and Reporting Analyst roles. See each programme's \"Career Paths\" section for its full list.",
      },
      {
        q: "If I don't get hired through one of my 6 interviews, do I get another chance?",
        a: 'The up-to-6 interview opportunities are spread across your placement-assistance window with our hiring partners — talk to your placement coordinator about how your remaining opportunities will be used.',
      },
      {
        q: "Does completing the programme guarantee I'll pass a company's technical interview?",
        a: 'No — we prepare you thoroughly through the curriculum, projects and mock interviews, and give you real interview opportunities, but the outcome of any individual interview depends on the hiring company’s own process and your performance in it.',
      },
    ],
  },
  {
    key: 'certifications',
    label: 'Certifications',
    blurb: 'External certifications the curriculum is aligned to.',
    items: [
      {
        q: 'Does Skill IT Education give me an industry certification?',
        a: 'We award our own Skill IT Education course-completion certificate for every programme. Our curriculum is also structured to help prepare you for external, third-party certifications relevant to your programme (see below).',
      },
      {
        q: 'Which external certifications does the Cyber Security programme prepare me for?',
        a: 'CEH, CompTIA Security+, CompTIA PenTest+, OSCP, ISC2 Certified in Cybersecurity (CC), AWS Certified Security – Specialty and Microsoft Security Operations Analyst.',
      },
      {
        q: 'Which external certifications does the AI & ML programme prepare me for?',
        a: 'Microsoft Azure AI Engineer, AWS ML Engineer/Cloud Practitioner, Google Cloud Professional ML Engineer, NVIDIA Generative AI & LLMs, Databricks ML/GenAI Engineer, Oracle Cloud Infrastructure AI, IBM AI/Generative AI Engineering, and TensorFlow & Hugging Face credentials.',
      },
      {
        q: 'Which external certifications does the Data Science programme prepare me for?',
        a: 'Google Data Analytics Professional Certificate, IBM Data Science Professional Certificate, Microsoft Power BI Data Analyst Associate, Tableau Desktop Specialist, AWS Certified Data Analytics – Specialty and Microsoft Azure Data Scientist Associate.',
      },
      {
        q: 'Which external certifications does the SOC Analyst programme prepare me for?',
        a: 'EC-Council Certified SOC Analyst (CSA), CompTIA CySA+, IBM QRadar SIEM Certification and GIAC Certified Incident Handler (GCIH).',
      },
      {
        q: 'Which external certifications does the Data Analytics programme prepare me for?',
        a: 'Microsoft Excel Expert Certification and the IBM Data Analyst Professional Certificate.',
      },
      {
        q: 'Do you pay for my certification exam, or provide a free voucher?',
        a: 'No — registration, fees and eligibility for any external certification exam are managed directly by the certifying body (EC-Council, CompTIA, Microsoft, AWS and so on), separately from your Skill IT Education course fee.',
      },
      {
        q: 'Am I guaranteed to pass the external certification exam?',
        a: 'No — our curriculum is structured to prepare you for these exams, but registration, eligibility and the exam result itself are entirely between you and the certifying body.',
      },
      {
        q: 'Is the Skill IT Education certificate recognised by employers?',
        a: "It's our own course-completion certificate confirming you finished the programme, its projects and its internship — it sits alongside your project portfolio and any external certification, both of which employers weigh directly.",
      },
    ],
  },
  {
    key: 'support',
    label: 'Faculty, Support & Learning Experience',
    blurb: 'Doubt-clearing, study material and day-to-day support.',
    items: [
      {
        q: 'Can I ask doubts during or after class?',
        a: 'Yes — every programme includes direct access to faculty for doubt-clearing, alongside the structured labs and project reviews.',
      },
      {
        q: 'What if I fall behind the rest of the batch?',
        a: 'Speak to your faculty or batch coordinator — catching-up options (extra sessions, recorded material where available) are handled per batch.',
      },
      {
        q: 'Do you provide study material?',
        a: 'Yes — module-wise learning material, tool guides and project briefs are provided as part of every programme.',
      },
      {
        q: 'Will I get feedback on my projects?',
        a: 'Yes — every project and module assessment is reviewed, with practical and knowledge components scored so you know exactly where you stand.',
      },
      {
        q: 'Is there a WhatsApp or community group for students?',
        a: 'Ask your batch coordinator at enrollment — batch communication channels are set up per batch.',
      },
      {
        q: 'Can I get a letter of recommendation after completing the programme?',
        a: 'Ask your faculty or placement coordinator once you have completed the programme and internship.',
      },
      {
        q: 'What happens if I want to pause and resume later?',
        a: 'Talk to your batch coordinator as early as possible — pausing and resuming is handled case by case depending on your programme and batch.',
      },
      {
        q: "Do you help with resume building even if I'm not looking for placement through you?",
        a: "Resume support is part of every programme's placement assistance regardless of how you eventually find your role.",
      },
      {
        q: 'Is there an orientation session before the programme starts?',
        a: "Ask admissions about an orientation or demo session ahead of your batch's start date.",
      },
    ],
  },
  {
    key: 'policies',
    label: 'Refunds, Policies & Logistics',
    blurb: 'Refunds, privacy, grievances and general logistics.',
    items: [
      {
        q: 'Where can I read your Refund Policy?',
        a: 'On our Refund Policy page — in short, request a refund at least 7 working days before your course start date and you’re eligible for the fee you paid.',
      },
      {
        q: 'Where can I read your Privacy Policy?',
        a: 'See our Privacy Policy page, which also links to our Data Compliance Policy.',
      },
      {
        q: 'How is my personal data used when I submit an enquiry form?',
        a: 'As set out in our Privacy Policy — in short, to contact you about the programme you enquired into and, where you have consented, to share your details with hiring partners during placement assistance.',
      },
      {
        q: 'Who do I contact for a complaint or grievance?',
        a: 'See the Grievance Officer contact details on our Privacy Policy and Data Compliance Policy pages, or reach our admissions team directly.',
      },
      {
        q: 'Is my payment information secure?',
        a: 'Payment handling follows standard secure practices; ask our admissions team about the specific payment channel used for your enrollment.',
      },
      {
        q: 'Can I get an invoice or receipt for the fee I pay?',
        a: 'Yes — ask our admissions team for an invoice or receipt at the time of payment.',
      },
      {
        q: 'What happens to my internship or project work after I leave?',
        a: 'Your project work is yours — it is built for your own portfolio and resume.',
      },
      {
        q: 'Do you share my details with hiring partners without asking?',
        a: 'Details are shared with hiring partners as part of placement assistance in line with our Privacy Policy — see that page for the specifics.',
      },
      {
        q: 'How do I unsubscribe from calls or emails?',
        a: 'Contact our admissions team directly at info@skilliteducation.com or +91 9177715978 and ask to be removed from further contact.',
      },
      {
        q: "I have a question that isn't answered here — who do I ask?",
        a: 'Call or WhatsApp +91 9177715978, email info@skilliteducation.com, or share your details through any enquiry form on the site and our team will get back to you.',
      },
    ],
  },
];

export const FAQ_CATEGORIES = RAW_CATEGORIES.map((c, i) => ({
  ...c,
  accent: ACCENTS[i % ACCENTS.length],
}));

export const FAQ_TOTAL = FAQ_CATEGORIES.reduce((n, c) => n + c.items.length, 0);

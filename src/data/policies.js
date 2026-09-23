// The Privacy Policy and the Data Compliance Policy, as data for src/pages/PolicyPage.jsx.
// Block types: { t: 'p', text }, { t: 'h3', text }, { t: 'ul', items }, { t: 'table', head, rows }, { t: 'note', text }.
// The privacy policy keeps the twelve topics of the owner's original document (September 2026) and expands them.

const p = (text) => ({ t: 'p', text });
const h3 = (text) => ({ t: 'h3', text });
const ul = (...items) => ({ t: 'ul', items });
const note = (text) => ({ t: 'note', text });
const table = (head, rows) => ({ t: 'table', head, rows });

export const PRIVACY_POLICY = {
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  metaTitle: 'Privacy Policy | Skill IT Education',
  metaDescription:
    'How Skill IT Education Pvt Ltd collects, uses, stores, shares and protects your personal information under Indian law, and how to exercise your rights.',
  intro: [
    `Skill IT Education Pvt Ltd ("Skill IT", "we", "us" or "our") operates skilliteducation.com and provides IT upskilling programmes in Cyber Security, SOC Analyst, AI Engineering, Data Science and Data Analytics. This Privacy Policy explains how we collect, use, store, share and protect your personal information when you visit our website, contact us, book a session, enrol in our programmes or otherwise interact with us.`,
    `We treat the personal information you trust us with as a serious responsibility. We collect only what we need, we tell you why, we keep it safe, and we never sell it. Where the law asks for your consent we ask for it clearly and separately, and you can withdraw it at any time.`,
    `By using our website or services you acknowledge the practices described in this Policy. Our Data Compliance Policy explains in more detail the Indian laws we follow and how we store, maintain and share data.`,
  ],
  brief: [
    { title: 'We never sell your data', text: 'Your personal information is not sold or rented to anyone, ever.' },
    { title: 'Only what we need', text: 'We collect the minimum required and tell you why before we collect it.' },
    { title: 'Your consent, your choice', text: 'You can withdraw consent as easily as you gave it, and opt out of marketing at any time.' },
    { title: 'Protected and limited', text: 'Security safeguards protect your data, and only people who need it can see it.' },
    { title: 'You stay in control', text: 'Ask to see, correct or delete your data, or complain to our Grievance Officer.' },
    { title: 'Told if something goes wrong', text: 'If a data breach affects you, we tell you and the authorities as the law requires.' },
  ],
  sections: [
    {
      heading: 'Who we are and what this Policy covers',
      blocks: [
        p(`Skill IT Education Pvt Ltd is the "Data Fiduciary" under the Digital Personal Data Protection Act, 2023 (the "DPDP Act"): the organisation that decides why and how your personal data is processed. We are also a "body corporate" under the Information Technology Act, 2000.`),
        p(`This Policy applies to personal data of:`),
        ul(
          'visitors to our website and social media pages',
          'people who make an enquiry, book a demo or free session, or ask for career counselling',
          'students and learners, and their parents or guardians where relevant',
          'representatives of our hiring, academic and internship partners',
        ),
        p(`It does not cover third-party websites that we link to (see Section 13).`),
      ],
    },
    {
      heading: 'Information we collect',
      blocks: [
        h3('a) Information you provide directly'),
        ul(
          'Name, email address, phone number and location, when you fill out an enquiry, contact, demo-booking or enrolment form',
          'Educational background, work experience and career goals, when relevant to programme counselling',
          'Payment and billing details, when you enrol in a paid programme (processed by our payment partners; we do not store full card details)',
          'Any other information you choose to share with our counsellors through chat, email or phone',
        ),
        h3('b) Information collected automatically'),
        ul(
          'IP address, browser type, device information and operating system',
          'Pages visited, time spent on the site, referring and exit pages, and click patterns',
          'Cookies and similar technologies (see Section 7)',
        ),
        h3('c) Information from third parties'),
        ul(
          'Information from advertising and analytics partners (for example Google and Meta) when you interact with our ads or landing pages',
          'Information from partners or referral sources, where you have consented to be contacted',
        ),
        h3('d) What we do not collect'),
        p(`We do not ask for passwords, card numbers, CVV codes or UPI PINs. We do not collect sensitive information such as health, biometric, religion, caste or political details. We do not ask for your Aadhaar number for enrolment. If a specific law or certification body ever requires an identity document, we tell you before we collect it, ask for only what is needed, and ask you to mask any numbers that are not required. If you send us something we did not ask for, we delete what we do not need.`),
        p(`If we record a session or take photographs or videos at our centre or at an event, we tell you in advance, and we use images that identify you for publicity only with your consent.`),
      ],
    },
    {
      heading: 'How we use your information',
      blocks: [
        p(`We use the information we collect to:`),
        ul(
          'Respond to enquiries and provide information about our courses',
          'Process enrolments, registrations and payments',
          'Deliver course content, certificates and academic support',
          'Send updates, offers, newsletters and marketing communications (you may opt out at any time)',
          'Improve our website, programmes and student experience',
          'Comply with legal, regulatory and accounting requirements',
          'Detect and prevent fraud, abuse or security incidents',
        ),
        h3('What we do not do'),
        ul(
          'We do not sell or rent your personal information.',
          'We do not use your data for a purpose that is unrelated to what we told you, without asking you again.',
          'We do not make decisions that significantly affect you (such as admission or certification) using only automated tools.',
          'We do not use hidden or pre-ticked boxes to obtain your consent.',
        ),
      ],
    },
    {
      heading: 'Legal basis and your consent',
      blocks: [
        p(`Under the DPDP Act we process your personal data on the basis of your consent, or for a "legitimate use" that the Act permits. In practice this means:`),
        ul(
          'Your consent, for example when you submit a form or agree to receive marketing messages. Our notice tells you what we collect and why, and your consent is free, specific, informed and given by a clear action.',
          'A legitimate use permitted by law, for example when you voluntarily give us your details to enquire about or enrol in a programme and have not told us you do not agree to their use for that purpose.',
          'Compliance with a legal obligation, or with an order of a court or authority, for example tax, accounting and audit requirements.',
        ),
        p(`For "sensitive personal data or information" under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (the "SPDI Rules"), such as financial information, we ask for your consent in writing, including by electronic means, before we collect it.`),
        p(`You can withdraw your consent at any time by writing to us (see Section 14). Withdrawing consent does not affect processing that already took place, and we will explain any consequence, for example that we may no longer be able to provide a service that needs the data.`),
      ],
    },
    {
      heading: 'Sharing of information',
      blocks: [
        p(`We do not sell your personal information. We share it only where it is needed, with only the data that is needed, and under written commitments to protect it. We may share it with:`),
        ul(
          'Service providers who help us operate our business, such as payment gateways, email, SMS and WhatsApp providers, CRM and learning-platform tools and hosting providers, bound by confidentiality and data-protection obligations',
          'Instructors and academic partners, as needed to deliver training and certification',
          'Certification and examination bodies, when you register for an external certification through us',
          'Hiring and internship partners, only with your consent and only the profile details you approve',
          'Professional advisers such as auditors and lawyers, under duties of confidentiality',
          'Legal authorities, where required by law, a court order or a lawful request, or to protect our rights, safety or property',
          'A successor organisation, if Skill IT is involved in a merger, acquisition or sale of assets, on the same protections',
        ),
      ],
    },
    {
      heading: 'Where and how we store your information',
      blocks: [
        p(`Your information is stored in secured systems that we control or that trusted hosting and cloud providers operate for us. We keep access limited to people who need it for their work, protect data in transit with encryption, keep backups, and follow the retention periods in Section 8.`),
        p(`Where practicable we keep data in India. If a provider processes data outside India, we do so only where the law permits, under a written contract, and never to a country that the Central Government has restricted. Payment system data is stored in India as the Reserve Bank of India requires.`),
      ],
    },
    {
      heading: 'Cookies and tracking technologies',
      blocks: [
        p(`Our website uses cookies and similar technologies to:`),
        ul('Remember your preferences', 'Analyse site traffic and usage patterns', 'Serve relevant advertisements'),
        p(`Essential cookies keep the site working. Analytics and advertising cookies are used only to understand and improve our site and campaigns, and we ask for your consent for them where the law requires it. You can control or delete cookies through your browser settings, and you can opt out of interest-based advertising through the controls offered by Google and Meta. Disabling cookies may affect some website functionality.`),
      ],
    },
    {
      heading: 'Data retention',
      blocks: [
        p(`We retain personal information for as long as necessary to fulfil the purposes described in this Policy, including maintaining academic records, meeting legal and tax obligations and resolving disputes. Marketing data is retained until you opt out or withdraw consent. Our usual periods are:`),
        table(
          ['Information', 'How long we keep it'],
          [
            ['Enquiry and counselling details (you have not enrolled)', 'Up to 24 months after your last interaction, or until you withdraw consent or ask us to delete it'],
            ['Marketing preferences', 'Until you opt out; we then keep only a minimal record so that we do not contact you again'],
            ['Student and academic records (enrolment, attendance, assessments, projects)', 'For the programme and afterwards for as long as needed to answer academic queries'],
            ['Certificate records (name, programme, dates, certificate number)', 'For as long as needed so that we can verify a certificate you were issued'],
            ['Payment, invoice and tax records', 'As tax and company law require, generally between six and eight years'],
            ['Website and security logs', 'At least 180 days, then deleted or anonymised'],
            ['Grievance and rights-request records', 'Three years after the matter is closed'],
            ['Photographs and recordings that identify you', 'Until the purpose is served or you withdraw consent'],
          ],
        ),
        p(`When a period ends we delete or irreversibly anonymise the data securely, unless a law requires us to keep it longer.`),
      ],
    },
    {
      heading: 'Data security',
      blocks: [
        p(`We implement reasonable technical and organisational measures, including access controls, encryption in transit and restricted internal access, to protect your information against unauthorised access, alteration, disclosure or destruction. Our people are bound by confidentiality and trained to handle personal data properly, and we review our providers' safeguards. Our Data Compliance Policy describes these controls in more detail.`),
        p(`No method of transmission or storage is 100% secure, and we cannot guarantee absolute security. If a personal data breach occurs that affects you, we will notify you and the authorities as the law requires (see the Data Compliance Policy).`),
      ],
    },
    {
      heading: 'Your rights',
      blocks: [
        p(`Subject to applicable law, including the DPDP Act, you have the right to:`),
        ul(
          'Access a summary of the personal information we hold about you, how we process it, and who we have shared it with',
          'Request correction of inaccurate or misleading information, completion of incomplete information, and updating',
          'Request erasure of your personal information, subject to legal retention requirements',
          'Withdraw your consent, including for marketing communications, at any time',
          'Have your grievance about how we handle your data addressed by us (see Section 14)',
          'Nominate another person to exercise your rights if you die or cannot exercise them',
          'Complain to the Data Protection Board of India, as the Act provides',
        ),
        p(`To exercise these rights, write to us using the details in Section 14. We may ask you to confirm your identity so that no one else can obtain your data. We acknowledge requests within 48 hours and aim to resolve them within 30 days, and in any case within the time the law prescribes. There is no charge for reasonable requests. If we cannot fully act on a request, for example because a law requires us to keep a record, we explain why.`),
        p(`As the DPDP Act also asks of every person, please give us accurate information, do not impersonate anyone, and do not make false or frivolous complaints.`),
      ],
    },
    {
      heading: `Children's privacy`,
      blocks: [
        p(`Our services are intended for individuals who are at least 18 years old, or who enrol with the consent of a parent or guardian where applicable. Under the DPDP Act, we process the personal data of a person under 18 only with the verifiable consent of a parent or lawful guardian. We do not track or monitor the behaviour of children, and we do not show them targeted advertising. If we learn that we collected a child's data without appropriate consent, we delete it.`),
      ],
    },
    {
      heading: 'Marketing communications, calls and messages',
      blocks: [
        p(`We send you offers, updates and newsletters by email, SMS, WhatsApp or phone only if you have agreed to receive them. You can opt out at any time using the unsubscribe link, by replying STOP, or by writing to us. We respect the National Customer Preference Register and the rules of the Telecom Regulatory Authority of India on commercial communications. Messages that are essential to a service you have taken, such as fee receipts or class schedules, may still be sent.`),
      ],
    },
    {
      heading: 'Third-party links',
      blocks: [
        p(`Our website may contain links to third-party websites (for example social media and partner platforms). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies separately.`),
      ],
    },
    {
      heading: 'Contact us and our Grievance Officer',
      id: 'contact',
      blocks: [
        p(`If you have questions, concerns or requests about this Privacy Policy, or wish to exercise any of the rights described in Section 10, please reach out to us through any of the channels on this page. We aim to acknowledge all privacy-related requests within 48 hours and resolve them within 30 days.`),
        { t: 'contact' },
        p(`In accordance with the Digital Personal Data Protection Act, 2023 and other applicable Indian data protection regulations, any grievance or complaint about the processing of your personal data may be addressed to our Grievance Officer at the email and postal address above, marked "Attn: Grievance Officer". If we do not resolve your grievance, you may approach the Data Protection Board of India as the Act provides. For consumer matters you may also approach the consumer forums under the Consumer Protection Act, 2019.`),
      ],
    },
    {
      heading: 'Governing law',
      blocks: [
        p(`This Policy is governed by the laws of India. Subject to any rights you have under law, the courts at Hyderabad, Telangana have jurisdiction over disputes arising from it.`),
      ],
    },
    {
      heading: 'Changes to this Policy',
      blocks: [
        p(`We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The updated version is posted on this page with a revised "Last updated" date. If a change is significant, or the law requires it, we tell you directly and ask for your consent again where needed. We encourage you to review this Policy periodically.`),
      ],
    },
  ],
};

export const DATA_COMPLIANCE_POLICY = {
  slug: 'data-compliance-policy',
  title: 'Data Compliance Policy',
  metaTitle: 'Data Compliance Policy | Skill IT Education',
  metaDescription:
    'The Indian data protection laws Skill IT Education follows, and how we store, maintain, share, secure and delete personal data ethically.',
  intro: [
    `This Data Compliance Policy explains how Skill IT Education Pvt Ltd ("Skill IT", "we", "us" or "our") stores, maintains, shares and protects personal data, and the Indian laws and regulations we follow. It works together with our Privacy Policy, which explains what we collect and why.`,
    `Our students trust us with their careers, and we hold their data to the same standard: lawful, fair, secure and respectful. This Policy applies to everyone who handles personal data for us, including employees, instructors, contractors and vendors.`,
  ],
  brief: [
    { title: 'Ethical by design', text: 'Fairness, transparency and respect for students guide every decision about data.' },
    { title: 'Aligned with Indian law', text: 'We follow the DPDP Act, the IT Act and its rules, CERT-In directions and related laws.' },
    { title: 'Stored and protected', text: 'Encrypted, access-controlled, backed up, and kept only as long as needed.' },
    { title: 'Shared only when needed', text: 'With contracts, minimum data and, for hiring partners, your consent.' },
    { title: 'Accountable', text: 'A named Grievance Officer, clear timelines and a way to escalate.' },
  ],
  sections: [
    {
      heading: 'Purpose, scope and status',
      blocks: [
        p(`This Policy sets the rules Skill IT follows when it collects, stores, uses, shares, maintains and deletes personal data. It covers the personal data of prospective students, students, parents and guardians, website visitors and the contacts of our partners, in any form: electronic, paper or spoken.`),
        p(`It explains our practices and commitments. It is not legal advice. If any part of it conflicts with the law, the law prevails.`),
      ],
    },
    {
      heading: 'Our ethical data principles',
      blocks: [
        p(`Beyond what the law requires, we hold ourselves to these principles:`),
        ul(
          'Lawful, fair and transparent: we tell you clearly what we do with your data, in plain language.',
          'Purpose limitation: we use data only for the purposes we told you, and ask again before using it for anything new.',
          'Data minimisation: we do not collect data "just in case".',
          'Consent that means something: free, specific, informed, never bundled or pre-ticked, and as easy to withdraw as to give.',
          'Accuracy: we keep data correct and fix errors when you tell us.',
          'Storage limitation: we do not keep data longer than needed.',
          'Security: we protect data with safeguards that match its sensitivity.',
          'Respect for students: we never sell data, never use it to pressure or mislead, and never publish a student\'s name, results or photograph without consent.',
          'No dark patterns: sign-up, opt-out and deletion are simple and honest.',
          'Accountability: we can show how we comply, we review our practices, and we answer to you.',
        ),
      ],
    },
    {
      heading: 'Indian laws and regulations we follow',
      blocks: [
        table(
          ['Law or regulation', 'What it covers', 'How we apply it'],
          [
            [
              'Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025 (as they come into force)',
              'Consent and notice; duties of a Data Fiduciary; rights of Data Principals; children\'s data; breach intimation; the Data Protection Board of India',
              'Notice and consent at every form; purpose limitation; erasure when the purpose is served; rights process; grievance mechanism; verifiable parental consent for under-18s; breach notification',
            ],
            [
              'Information Technology Act, 2000 (including sections 43, 43A and 72A)',
              'Liability for failing to protect sensitive personal data; penalties for unauthorised access and for disclosing information in breach of contract',
              'Reasonable security practices; access control; confidentiality undertakings; no unauthorised disclosure',
            ],
            [
              'IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011',
              'A published privacy policy; written consent for sensitive data; limits on disclosure; a Grievance Officer; reasonable security standards',
              'Published Privacy Policy; consent before collecting financial information; named Grievance Officer with a one-month redress window; documented security programme',
            ],
            [
              'CERT-In Directions of 28 April 2022 (section 70B(6) of the IT Act)',
              'Reporting of cyber incidents to CERT-In within six hours; keeping ICT logs for 180 days within India',
              'Incident response plan with a six-hour reporting step; logs kept for at least 180 days',
            ],
            [
              'Consumer Protection Act, 2019 and Consumer Protection (E-Commerce) Rules, 2020',
              'Fair dealing and disclosure to consumers; a grievance officer; acknowledgement in 48 hours and redress within one month',
              'Clear programme information and fees; grievance handling within those timelines',
            ],
            [
              'TRAI Telecom Commercial Communications Customer Preference Regulations, 2018',
              'Consent and preferences for commercial calls and messages; the Do Not Disturb register',
              'Consent before promotional messages; DND respected; easy opt-out',
            ],
            [
              'Payment and Settlement Systems Act, 2007 and RBI directions on storage of payment system data and card tokenisation',
              'Payment data stored in India; merchants may not store card numbers',
              'Payments handled by RBI-authorised gateways; we do not store card numbers, CVV codes or UPI PINs',
            ],
            [
              'Aadhaar Act, 2016 and UIDAI guidelines',
              'Limits on collecting, using and storing Aadhaar numbers',
              'We do not ask for Aadhaar for enrolment; any copy received is masked or deleted',
            ],
            [
              'Companies Act, 2013; CGST Act, 2017; income-tax law',
              'Keeping books of account, invoices and tax records for prescribed periods',
              'Financial records kept for the period the law requires, generally six to eight years',
            ],
            [
              'Right to privacy, Article 21 of the Constitution (K.S. Puttaswamy v. Union of India, 2017)',
              'Privacy as a fundamental right, subject to lawful limits',
              'The foundation of the principles above',
            ],
          ],
        ),
        note(`Laws and rules change, and some provisions of the DPDP Act and Rules come into force in stages. We follow the provisions that are in force, prepare for those that are coming, and update this Policy when the position changes.`),
      ],
    },
    {
      heading: 'Governance and accountability',
      blocks: [
        ul(
          'Our management is responsible for data protection and reviews this Policy at least once a year and after any significant incident or change in the law.',
          'Our Grievance Officer receives and resolves privacy complaints and rights requests, and their contact details are published in our Privacy Policy.',
          'We keep a record of the personal data we process, why, where it is stored and who can access it, and we review it regularly.',
          'We assess privacy and security before we adopt a new tool, provider or way of using data.',
          'Everyone who handles personal data signs a confidentiality undertaking and is trained on this Policy when they join and at least once a year.',
        ),
      ],
    },
    {
      heading: 'How we collect data: notice and consent',
      blocks: [
        ul(
          'Every form tells you what we collect, why, how to withdraw consent and how to reach our Grievance Officer.',
          'Marketing consent is separate from the consent to answer your enquiry or provide a service.',
          'We keep a record of consent: what you agreed to, when and which version of the notice you saw.',
          'Withdrawing consent is as easy as giving it, and we act on it promptly.',
          'For anyone under 18 we obtain verifiable parental or guardian consent first.',
        ),
      ],
    },
    {
      heading: 'How we store data',
      blocks: [
        ul(
          'Personal data is stored in access-controlled systems, and data in transit is protected with encryption.',
          'Access is on a need-to-know basis, by role, with strong authentication for systems that hold personal data.',
          'Backups are kept and protected in the same way as live data.',
          'Where practicable, data is kept in India. Payment system data is stored in India.',
          'Paper records, such as forms and any documents you hand in, are kept in locked storage and shredded when no longer needed.',
          'Personal data is not kept in open chat groups, personal accounts or unmanaged devices, and devices used for work are protected.',
        ),
      ],
    },
    {
      heading: 'How we maintain data',
      blocks: [
        ul(
          'We check that data is accurate and complete when we collect it and when we use it, and correct it when you tell us it is wrong.',
          'We review stored data regularly, remove duplicates and delete data that has passed its retention period.',
          'We record who accessed sensitive records, and review the records for anything unusual.',
          'When a student leaves, changes their details or withdraws consent, we update our systems and the partners who hold that data for us.',
        ),
      ],
    },
    {
      heading: 'How we share data',
      blocks: [
        p(`We never sell personal data. We share it only where there is a clear reason, with only the data needed, and under safeguards:`),
        table(
          ['Who', 'Why', 'Safeguards'],
          [
            ['Payment gateways', 'To take fees and issue receipts', 'RBI-authorised providers; we do not store card details'],
            ['Email, SMS and WhatsApp providers', 'To send confirmations, schedules and (with consent) updates', 'Written contract; use only on our instructions; opt-out honoured'],
            ['Hosting, CRM and learning-platform providers', 'To run our website, records and classes', 'Written contract; security assessment; no use for their own purposes'],
            ['Instructors and academic partners', 'To deliver and certify training', 'Need-to-know access; confidentiality undertakings'],
            ['Certification bodies', 'To register you for an external exam you choose', 'Only with your request; only the details required'],
            ['Hiring and internship partners', 'To introduce you to opportunities', 'Only with your consent and only the profile details you approve'],
            ['Auditors and legal advisers', 'To meet audit and legal duties', 'Professional confidentiality'],
            ['Courts and authorities', 'Where the law or a lawful order requires it', 'Only what is required; we record the request'],
          ],
        ),
        p(`Any organisation that handles personal data for us must protect it at least as well as we do, use it only for the purpose we set, tell us promptly of any incident, and delete or return it when the work ends.`),
      ],
    },
    {
      heading: 'Transfers outside India',
      blocks: [
        p(`The DPDP Act permits transfers of personal data outside India except to countries the Central Government restricts. We use providers outside India only where necessary, never to a restricted country, under a written contract with equivalent protections, and subject to any stricter sectoral rule, such as the RBI's rules for payment data. We tell you in our Privacy Policy when this happens.`),
      ],
    },
    {
      heading: 'Security controls',
      blocks: [
        h3('Technical'),
        ul(
          'Encryption of data in transit, and of data at rest where the system supports it',
          'Role-based access, least privilege and multi-factor authentication for administrative access',
          'Logging of access to systems that hold personal data, kept for at least 180 days',
          'Regular software updates, malware protection and vulnerability checks',
          'Secure, tested backups',
        ),
        h3('Organisational'),
        ul(
          'Confidentiality undertakings and regular training for everyone who handles personal data',
          'Prompt removal of access when someone changes role or leaves',
          'Due diligence on vendors and written data-protection terms',
          'Physical security for our centre, records and devices',
          'A written incident response plan, tested from time to time',
        ),
      ],
    },
    {
      heading: 'Incident and breach response',
      blocks: [
        p(`If we suspect a personal data breach or a cyber incident, we:`),
        ul(
          'contain it and protect the affected systems and data;',
          'assess what happened, which data and which people are affected, and the risk to them;',
          'report notifiable cyber incidents to CERT-In within six hours of noticing them, as the CERT-In Directions require;',
          'inform the Data Protection Board of India and each affected person, in the manner and within the time the DPDP Act and Rules prescribe, telling them what happened and what they can do;',
          'fix the cause, and record the incident and what we learned.',
        ),
      ],
    },
    {
      heading: 'Retention and secure deletion',
      blocks: [
        p(`We keep personal data only as long as it is needed for the purpose or as the law requires. Our usual periods are set out in Section 8 of the Privacy Policy. When the time comes, we delete or irreversibly anonymise the data, remove it from backups on their normal cycle, shred paper records, and ask our providers to do the same. If you withdraw consent or ask for erasure and no law requires us to keep the data, we erase it and confirm to you.`),
      ],
    },
    {
      heading: 'Handling your rights requests',
      blocks: [
        ul(
          'You can write to our Grievance Officer to access, correct, update or erase your data, withdraw consent, or nominate someone to act for you.',
          'We confirm your identity, acknowledge the request within 48 hours, and aim to complete it within 30 days, and in any case within the period the law prescribes.',
          'We do not charge for reasonable requests.',
          'If we cannot act fully, we explain why and what you can do next.',
        ),
      ],
    },
    {
      heading: 'Children and minors',
      blocks: [
        p(`We process the personal data of a person under 18 only with the verifiable consent of a parent or lawful guardian, do not track or monitor the behaviour of children, and do not direct targeted advertising at them. Where an enrolment involves a minor, we speak to the parent or guardian.`),
      ],
    },
    {
      heading: 'Marketing, calls and messages',
      blocks: [
        p(`We send promotional communications only with consent, honour opt-outs immediately, respect the National Customer Preference Register and TRAI rules, and keep a suppression list so that people who opt out are not contacted again. Service messages that are essential to a programme you have joined are kept separate from marketing.`),
      ],
    },
    {
      heading: 'Payments',
      blocks: [
        p(`Fees are collected through RBI-authorised payment gateways and banking channels. We do not store card numbers, CVV codes, card expiry dates or UPI PINs. We keep only the transaction details we need for receipts, reconciliation, refunds and tax records.`),
      ],
    },
    {
      heading: 'Student records, certificates and publicity',
      blocks: [
        ul(
          'Academic records and certificate records are kept accurately and only as long as needed to verify and support your achievement.',
          'We share a certificate, result or attendance record with a third party only when you ask us to or the law requires it.',
          'We use a student\'s name, photograph, testimonial or result in our marketing only with the student\'s clear consent, which can be withdrawn.',
        ),
      ],
    },
    {
      heading: 'Vendors and partners',
      blocks: [
        p(`Before we work with a provider that will handle personal data, we check its security and privacy practices, agree written data-protection terms, and limit the data it can see. We review important providers regularly and make sure data is deleted or returned when the relationship ends.`),
      ],
    },
    {
      heading: 'Training, monitoring and audits',
      blocks: [
        p(`We train our people, check that these rules are followed, and review our systems and providers from time to time. We correct any gap we find and keep a record of what we changed.`),
      ],
    },
    {
      heading: 'Complaints and escalation',
      id: 'contact',
      blocks: [
        p(`If you think we have not followed this Policy or the law, please tell us first. Our Grievance Officer acknowledges complaints within 48 hours and aims to resolve them within 30 days.`),
        { t: 'contact' },
        p(`If we do not resolve your complaint, you may approach the Data Protection Board of India as the DPDP Act provides. For consumer matters you may also approach the consumer forums under the Consumer Protection Act, 2019.`),
      ],
    },
    {
      heading: 'Review of this Policy',
      blocks: [
        p(`We review this Policy at least once a year and whenever the law or our practices change. The current version is always on this page with its "Last updated" date.`),
      ],
    },
  ],
};

// Refund terms: owner-specified rule (2026-09-23) is the 7-working-days eligibility window — nothing
// beyond that (refund amount, processing timeline, deductions) has been given, so this deliberately
// doesn't invent a percentage, a deduction, or a number of days to actually receive the money back.
// It states the refund is of the fee paid (the plain, unqualified reading of "refund" with nothing
// said about a deduction), and leaves timeline/method to be confirmed when admissions processes a
// request. The batch-cancelled-by-us clause and the certification-fees-are-separate note are already
// true elsewhere on the site (faq.js) and are safe, standard, pro-student inclusions.
export const REFUND_POLICY = {
  slug: 'refund-policy',
  title: 'Refund Policy',
  metaTitle: 'Refund Policy | Skill IT Education',
  metaDescription:
    'Skill IT Education’s refund policy: request a refund at least 7 working days before your course start date. How to request one, what’s covered, and what happens if we cancel your batch.',
  intro: [
    `This Refund Policy explains when you can get a refund of the course fee you paid Skill IT Education Pvt Ltd ("Skill IT", "we", "us" or "our") for one of our training programmes, and how to request one. It applies to fees paid directly to us for enrolment in a Skill IT programme, online or offline.`,
    `It does not apply to fees for external certification exams, which are paid directly to the certifying body and never form part of what you pay us.`,
  ],
  brief: [
    { title: '7 working days’ notice', text: 'Request your refund at least 7 working days before your course’s start date.' },
    { title: 'Refund of the fee paid', text: 'An eligible request is refunded the course fee you paid for that programme.' },
    { title: 'After the window closes', text: 'Requests made less than 7 working days before your start date, or after the course has started, are not eligible.' },
    { title: 'If we cancel your batch', text: 'If Skill IT Education cancels or indefinitely postpones your batch before it starts, you get a full refund.' },
    { title: 'Certification fees are separate', text: 'External certification exam fees go straight to the certifying body — they are not part of this policy.' },
  ],
  sections: [
    {
      heading: 'Scope of this Policy',
      blocks: [
        p(`This Policy covers the course fee you pay Skill IT Education for enrolment in one of our programmes, whichever mode you study in. It does not cover fees for external certification exams (for example CEH, CompTIA Security+ or similar) — those are paid directly to the certifying body, not to us, and are governed by that body’s own terms.`),
      ],
    },
    {
      heading: 'Refund Eligibility Window',
      blocks: [
        p(`To be eligible for a refund, you must submit your request at least 7 working days before your course’s scheduled start date.`),
        ul(
          'Requests received 7 or more working days before your start date are eligible for a refund.',
          'Requests received less than 7 working days before your start date, or on or after the date your course has started, are not eligible for a refund.',
        ),
        p(`"Working days" excludes Sundays and public holidays.`),
      ],
    },
    {
      heading: 'How to Request a Refund',
      blocks: [
        p(`Send your refund request in writing to us, by email or phone, stating your full name, the programme you enrolled in, and your batch’s start date:`),
        { t: 'contact' },
        p(`We’ll confirm we’ve received your request and let you know its status.`),
      ],
    },
    {
      heading: 'Refund Amount, Method and Timeline',
      blocks: [
        p(`An eligible request is refunded the course fee you paid for that programme, back to your original payment method. Our admissions team will confirm the exact timeline when they process your request.`),
      ],
    },
    {
      heading: 'If We Cancel or Postpone Your Batch',
      blocks: [
        p(`If Skill IT Education cancels a batch, or postpones it indefinitely, before it starts, you are entitled to a full refund of the fees you paid for that batch — this eligibility window does not apply in that case.`),
      ],
    },
    {
      heading: 'Contact Us',
      id: 'contact',
      blocks: [
        p(`Questions about a refund, or about this Policy, can go to the same team:`),
        { t: 'contact' },
      ],
    },
    {
      heading: 'Changes to this Policy',
      blocks: [
        p(`We may update this Refund Policy from time to time. The current version is always on this page with its "Last updated" date.`),
      ],
    },
  ],
};

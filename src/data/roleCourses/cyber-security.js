// Role courses for the Cyber Security programme (parent: src/data/cyberSecurity.js).
// Every module number, topic index, tool name, practice index and certification index below
// points into the parent data file. Duration and fees are shown by the page from the parent.

export default [
  {
    slug: 'penetration-tester',
    title: 'Penetration Tester',
    metaTitle: `Penetration Tester Course in Hyderabad | Skill IT Education`,
    metaDescription: `Penetration tester course in Hyderabad: learn scanning, web and network testing, Active Directory attacks and report writing through labs and projects.`,
    lede: `This role course arranges the Cyber Security programme around the work of a penetration tester. You start with a safe lab and the rules of testing, then move through reconnaissance, web, network, wireless and Active Directory attacks, and finish by learning to write the report a client can act on.`,
    skills: [
      'Nmap scanning',
      'Burp Suite testing',
      'SQL injection',
      'OWASP Top 10',
      'Active Directory attacks',
      'Wireless assessment',
      'Password cracking',
      'Pentest reporting',
    ],
    overview: [
      `A penetration tester is paid to attack a company's systems before a real attacker does, with written permission and clear limits. You take a scope such as a web application or an internal network, find the weak points, prove they can be used, and explain how to fix each one. The value lies in the proof. A scanner can say that a version is old, but a tester shows what an attacker could actually reach with it.`,
      `A typical engagement runs for a week or two. The first days go on reconnaissance and scanning, then you test the most promising entry points by hand, mixing tool output with your own judgement. Notes are kept as you go, because every finding needs steps that someone else can repeat. The last days are for the report, a call with the client's developers, and later a retest to confirm the fixes worked.`,
      `Penetration testers work in security consulting firms, in the internal security teams of banks, software companies and online businesses, and as independent testers. The role matters because breaches often start with a flaw that a careful test could have found. Companies also need test reports for audits and customer reviews, so the work is steady, and the reports you write become part of how a business shows it takes security seriously.`,
    ],
    dayToDay: [
      `Read the scope and rules of engagement before touching any system on the target list.`,
      `Scan hosts and services with Nmap, then check open ports against known vulnerabilities.`,
      `Intercept and modify web requests in Burp Suite to test logins, sessions and inputs.`,
      `Try SQL injection and cross-site scripting on forms, and record each working payload.`,
      `Test password strength on captured hashes and on login pages, within the agreed limits.`,
      `Follow an Active Directory attack path from a first foothold to higher privileges.`,
      `Write each finding with steps to reproduce, a CVSS score and a practical fix.`,
      `Present the report to developers and retest the fixes once they are done.`,
    ],
    outcomes: [
      `Plan a penetration test with a clear scope, rules of engagement and a step-by-step method.`,
      `Scan a network with Nmap and turn the results into a map of what is exposed.`,
      `Find and exploit SQL injection and cross-site scripting flaws in a web application lab.`,
      `Assess wireless networks and Active Directory environments and explain the attack path you found.`,
      `Crack weak password hashes and explain which controls would have stopped the attack.`,
      `Score each finding with CVSS and rank them so the client fixes the worst first.`,
      `Write a professional penetration test report with reproduction steps and remediation guidance.`,
    ],
    whoFor: [
      {
        who: 'Final-year engineering or science student',
        text: `You know some networking and enjoy working out how things break. The first module gives you the lab and the method, so the offensive tools that follow make sense from the very start.`,
      },
      {
        who: 'IT support or network engineer',
        text: `You already fix networks and servers, which is a real head start. This course turns that knowledge around so you learn how the same systems get attacked, and how to report it properly.`,
      },
      {
        who: 'Non-IT graduate switching careers',
        text: `You do not need a computer science degree, but you do need patience with the command line and steady practice. The course starts from how networks work, and every module has labs to repeat until they feel natural.`,
      },
      {
        who: 'Software developer or tester',
        text: `You already write or test code, so web flaws will feel familiar. Here you learn to attack an application from the outside and to describe the risk in a way a client can act on.`,
      },
    ],
    path: [
      {
        module: 1,
        focus: `Set up your own attack lab and learn the rules first. A tester who ignores scope and permission is a liability, so concentrate on the methodology, the rules of engagement and the phases of a test from recon to reporting.`,
        topics: [4, 6, 8, 9, 11, 12],
        tools: ['Kali Linux', 'VirtualBox', 'Linux/Windows CLI'],
        practice: { type: 'lab', index: 0 },
      },
      {
        module: 2,
        focus: `Every test starts with knowing what is exposed. Spend most of your time on scanning, service fingerprinting and enumeration, and on scoring what you find with CVE and CVSS so your report has evidence behind it.`,
        topics: [3, 4, 5, 6, 8, 9, 11],
        tools: ['Nmap', 'OpenVAS', 'Netcat', 'Maltego'],
        practice: { type: 'lab', index: 1 },
      },
      {
        module: 4,
        focus: `This is the heart of the role and the longest module. Practise SQL injection, XSS and the OWASP Top 10 until you can do them by hand, then work through Active Directory, wireless testing and the full report.`,
        topics: [4, 5, 6, 7, 8, 9, 12],
        tools: ['Burp Suite', 'OWASP ZAP', 'SQLmap', 'Nikto', 'Hydra'],
        practice: { type: 'lab', index: 4 },
      },
      {
        module: 3,
        focus: `Once you have a foothold you need to know what to do with it. Concentrate on privilege escalation, credential attacks and server misconfigurations, and use packet analysis to see what your own tools leave behind on the network.`,
        topics: [0, 1, 4, 5, 7, 8],
        tools: ['Kali Linux', 'Wireshark', 'Netcat', 'Parrot Security'],
        practice: { type: 'lab', index: 0 },
      },
      {
        module: 5,
        focus: `Password cracking, weak cryptography and mobile testing turn up in many real scopes and are easy for juniors to miss. Learn how hashes are attacked and how an Android app is reviewed, so your tests reach past the web layer.`,
        topics: [1, 4, 5, 6, 8],
        tools: ['John the Ripper', 'Hashcat', 'Aircrack-ng', 'Angry IP Scanner'],
        practice: { type: 'lab', index: 2 },
      },
    ],
    careerPath: [
      {
        title: 'Junior Penetration Tester or Vulnerability Assessor',
        text: `Most people start by running scans, checking findings and writing sections of reports under a senior tester. These titles appear in the reconnaissance module, and your lab reports from this course are the first work you can show.`,
      },
      {
        title: 'Penetration Tester or VAPT Engineer',
        text: `With experience you plan and lead web, network and Active Directory tests yourself. You own the scope conversation with the client, write the final report and help newer testers get their methods right.`,
      },
      {
        title: 'Specialist paths',
        text: `Testing can branch into Web Application Security Analyst, Mobile Security Analyst or IoT Security Analyst work, depending on where you enjoy going deep. Each builds on the methods you practise in the web and mobile modules.`,
      },
      {
        title: 'Red team and consulting',
        text: `Over time, some testers join a red team as an associate, running longer and more realistic attack exercises, or move into Security Consultant roles that mix testing, advice and client work.`,
      },
    ],
    certifications: [2, 0, 3],
    faqs: [
      {
        q: 'Do I need coding to become a penetration tester?',
        a: `You do not need to be a developer to start. The course begins with the Linux and Windows command line and works up from there. Reading simple scripts and web code helps later, and you pick up much of it by testing lab applications, but the real entry point is networking knowledge and curiosity.`,
      },
      {
        q: 'What is the difference between a penetration tester and an ethical hacker?',
        a: `In everyday use the two overlap heavily. A penetration tester usually works to a defined scope, follows a fixed method and delivers a formal report. Ethical hacker is the wider term and can include phishing tests, password checks and device reviews. This course covers both, arranged differently on each role page.`,
      },
      {
        q: 'What does a penetration test report contain?',
        a: `A good report has a summary for managers, the scope and method, and a list of findings. Each finding gets a description, evidence, steps to reproduce, a CVSS score and a fix. The web and network module teaches professional reporting standards, and the final lab has you deliver one.`,
      },
      {
        q: 'Which certifications should a penetration tester aim for?',
        a: `CEH, CompTIA PenTest+ and OSCP are the ones this programme lists. The curriculum is structured to help prepare you for them. OSCP is a hands-on exam and needs extra practice beyond any single course, so many people take PenTest+ or CEH first.`,
      },
      {
        q: 'Will I get to test real systems during the course?',
        a: `You test systems you own and intentionally vulnerable targets in your own lab, never anyone else's network without permission. The real-time internship then adds exposure to penetration testing work. The rules of engagement you learn in the first module apply to everything you do.`,
      },
    ],
    blog: [
      'what-is-penetration-testing-and-how-to-become-a-pentester',
      'cyber-security-portfolio-projects-to-build',
      'cyber-security-certifications-ceh-security-plus-oscp',
      'what-is-ethical-hacking-and-how-to-learn-it',
      'cyber-security-career-without-coding-background',
      'soc-analyst-vs-penetration-tester-which-career-to-choose',
    ],
  },

  {
    slug: 'security-analyst',
    title: 'Security Analyst',
    metaTitle: `Security Analyst Course in Hyderabad | Skill IT Education`,
    metaDescription: `Security analyst course in Hyderabad: learn networks, vulnerability scanning, SIEM alert triage, phishing defence and reporting through hands-on labs.`,
    lede: `This role course arranges the Cyber Security programme around the work of a security analyst. It focuses on understanding networks and endpoints, finding and prioritising vulnerabilities, reading alerts and logs, and reporting clearly, with enough attack knowledge to know what you are defending against.`,
    skills: [
      'Network fundamentals',
      'OpenVAS scanning',
      'CVSS prioritisation',
      'SIEM alert triage',
      'Wireshark analysis',
      'Phishing detection',
      'Endpoint hardening',
      'Security reporting',
    ],
    overview: [
      `A security analyst protects an organisation's systems from day to day rather than attacking them. You watch for warning signs, check which weaknesses matter most, keep systems configured safely, and make sure the business follows its own security rules. The job sits between the technical teams who run the systems and the managers who need to understand the risk, so clear explanation counts as much as technical skill.`,
      `A normal week mixes routine and surprises. Some days you run a vulnerability scan, sort the results by severity, chase the teams who own the affected servers and update a tracker. Other days a suspicious email or an odd alert takes over, and you check logs and packets to decide whether it is a real problem. Reports and policy reviews fill the gaps between.`,
      `Security analysts are needed almost anywhere that runs its own IT, including banks, hospitals, software and services companies, telecom and retail businesses, and the consulting firms that support them. Data protection rules and customer audits mean most organisations need someone who can show that weaknesses are found and fixed on time. That makes the role a common first step into security and a solid base for specialist work later.`,
    ],
    dayToDay: [
      `Run scheduled vulnerability scans and sort the results by CVSS score and business impact.`,
      `Review SIEM alerts and decide which ones are real problems and which are noise.`,
      `Inspect suspicious emails and links and report confirmed phishing attempts to the wider team.`,
      `Capture and read network traffic in Wireshark when an alert looks unusual.`,
      `Check that servers and laptops follow the hardening baseline and fix any gaps.`,
      `Track open vulnerabilities with the teams that own the affected systems until they close.`,
      `Update security policies and map them to the compliance rules the company follows.`,
      `Prepare a short weekly summary of risks and progress for managers.`,
    ],
    outcomes: [
      `Explain how networks and protocols work, and spot traffic that does not belong.`,
      `Run OpenVAS and Nessus scans and prioritise the results using CVSS and business impact.`,
      `Triage alerts in a SIEM environment and decide what needs escalation.`,
      `Recognise phishing and social engineering attempts and describe the controls that reduce them.`,
      `Harden Windows and Linux endpoints and clean up a host after a malware infection.`,
      `Draft a security policy mapped to a named compliance framework.`,
      `Build a vulnerability prioritisation dashboard and present a remediation plan.`,
      `Write an executive summary that a non-technical manager can read in minutes.`,
    ],
    whoFor: [
      {
        who: 'Recent graduate wanting an entry role',
        text: `You want a clear first job title in security. This route builds the everyday skills of the analyst, which are networks, scanning, alerts and reports, so your first interviews are about things you have practised.`,
      },
      {
        who: 'IT support or helpdesk engineer',
        text: `You already handle user accounts, patches and troubleshooting, which is much of the ground an analyst covers. The course adds scanning, log analysis and the security thinking that turns those tasks into security work.`,
      },
      {
        who: 'Network or system administrator',
        text: `You know your firewalls, servers and permissions well. Here you add vulnerability management, alert handling and policy work, so you can move from keeping systems running to keeping them safe.`,
      },
      {
        who: 'Non-IT graduate or career switcher',
        text: `Start with networks and the command line in the first module and build up steadily. The analyst path leans on reading, checking and explaining, which suits people who are careful and methodical.`,
      },
    ],
    path: [
      {
        module: 1,
        focus: `Networking, operating systems and policy are the daily language of an analyst. Concentrate on the OSI model, the TCP/IP stack, the Linux and Windows command lines, the CIA triad and compliance, since you will use all of them every week.`,
        topics: [2, 4, 5, 6, 7, 10],
        tools: ['Linux/Windows CLI', 'Kali Linux', 'VirtualBox'],
        practice: { type: 'lab', index: 3 },
      },
      {
        module: 2,
        focus: `Vulnerability management is a core analyst duty. Learn to run scans, read CVE, CVSS and CWE records, use the NVD database, and document findings in a format that other teams can act on.`,
        topics: [4, 8, 9, 10, 11, 12],
        tools: ['OpenVAS', 'Nmap', 'Kali Linux'],
        practice: { type: 'lab', index: 2 },
      },
      {
        module: 6,
        focus: `The module closest to daily analyst work. Spend time on SIEM basics, alert triage, phishing detection, CVSS-based prioritisation and threat intelligence, and on writing the report that closes each piece of work.`,
        topics: [2, 4, 9, 10, 12, 14],
        tools: ['SIEM & Log Platforms', 'Nessus', 'OpenVAS', 'Wireshark'],
        practice: { type: 'lab', index: 0 },
      },
      {
        module: 3,
        focus: `Knowing how machines get compromised makes you a better defender. Focus on malware types, packet analysis, anti-malware controls, endpoint hardening and remediation, and how to document an incident properly.`,
        topics: [2, 4, 6, 7, 8, 10, 11],
        tools: ['Wireshark', 'OpenVAS', 'Kali Linux'],
        practice: { type: 'lab', index: 4 },
      },
      {
        module: 4,
        focus: `You do not need to be a full penetration tester, but you should understand the attacks you defend against. Focus on firewalls, the OWASP Top 10, web and session attacks, and how professional reports are structured.`,
        topics: [1, 2, 3, 7, 11, 12],
        tools: ['Wireshark', 'OWASP ZAP', 'Nikto', 'Burp Suite'],
        practice: { type: 'project', index: 0 },
      },
    ],
    careerPath: [
      {
        title: 'Junior Security Analyst or IT Security Analyst',
        text: `These are the usual entry titles. You handle scans, alerts, policy checks and reports while a senior colleague reviews your work, and you build a record of finished tasks you can talk about in interviews.`,
      },
      {
        title: 'Security Analyst',
        text: `With experience you own vulnerability management for a set of systems, decide priorities, work directly with system owners, and take part in incident handling and audits.`,
      },
      {
        title: 'Threat intelligence, vulnerability or compliance roles',
        text: `Analysts often specialise as a Threat Intelligence Analyst, a Vulnerability Assessor or a Security Compliance Analyst, depending on whether they prefer research, technical assessment or policy and audit work.`,
      },
      {
        title: 'Longer term',
        text: `Over the years the path can lead to Security Consultant or Network Security Engineer roles, and towards AI-driven work such as Threat Detection Engineer for those who enjoy building detections.`,
      },
    ],
    certifications: [1, 4, 6],
    faqs: [
      {
        q: 'Is a security analyst the same as a cyber security analyst?',
        a: `The two names are used loosely, and job adverts often treat them as one role covering monitoring, vulnerability management, policy and reporting. Scope varies by company, so read the listed duties rather than the title before you apply or prepare.`,
      },
      {
        q: 'Do I need to code to be a security analyst?',
        a: `Not to get started. The syllabus works through the Linux and Windows command lines and security tools rather than programming. Simple scripting helps you automate repeated checks later, but it is not a barrier to a first analyst role.`,
      },
      {
        q: 'What is the difference between vulnerability scanning and penetration testing?',
        a: `A scan runs automatically and lists known weaknesses. A penetration test goes further and tries to use them to show real impact. Analysts usually run the scans and rank the results with CVSS, while testers prove the worst ones can be exploited.`,
      },
      {
        q: 'Which is better for a fresher, security analyst or penetration tester?',
        a: `It depends on what you enjoy. Analysts spend more time on monitoring, scanning and reporting, testers on hands-on attacks. The early modules of the programme are shared, so you can try both sides before you choose where to focus.`,
      },
      {
        q: 'Which certifications help a security analyst?',
        a: `CompTIA Security+, ISC2 Certified in Cybersecurity and Microsoft Security Operations Analyst are on the programme's list. The curriculum is structured to help prepare you for them, and Security+ or ISC2 CC are common starting points.`,
      },
    ],
    blog: [
      'difference-between-soc-analyst-and-cybersecurity-analyst',
      'how-to-become-a-cyber-security-professional',
      'what-is-a-siem-and-which-siem-tools-to-learn',
      'cyber-security-job-after-graduation',
      'cyber-security-certifications-ceh-security-plus-oscp',
      'is-cyber-security-a-good-career-for-freshers-in-india',
    ],
  },

  {
    slug: 'ethical-hacker',
    title: 'Ethical Hacker',
    metaTitle: `Ethical Hacker Course in Hyderabad | Skill IT Education`,
    metaDescription: `Ethical hacker course in Hyderabad covering attacker methods, scanning, malware, social engineering, passwords and wireless testing in a safe lab.`,
    lede: `This role course arranges the Cyber Security programme around the work of an ethical hacker. You learn how attackers think and work, then practise their techniques on systems you own, including malware, social engineering, passwords and wireless networks, always inside a lab with clear rules.`,
    skills: [
      'Attacker mindset',
      'OSINT reconnaissance',
      'Privilege escalation',
      'Malware behaviour',
      'Social engineering',
      'Password cracking',
      'Wireless testing',
      'Kali Linux toolkit',
    ],
    overview: [
      `An ethical hacker uses the same techniques as a criminal attacker, but with permission and with the aim of making a system safer. The title covers a wide range of work: testing networks and applications, trying phishing on staff, checking passwords and wireless networks, and looking at devices and mobile apps. What holds it together is a habit of asking how something could be abused, and a strict respect for the limits you are given.`,
      `Week to week the work changes with the client. One week you might scan a small office network and check which services are exposed. The next you might design a phishing test, review how strong the company's passwords are, or examine an Android app. Each task ends the same way, with notes on what worked, what it proves and a plain recommendation. Reading about new attack methods is part of the routine.`,
      `Ethical hackers work in security consulting companies, in internal security teams, and in product companies that want their software checked before launch. Any organisation with customers, staff logins or connected devices can be a target, which is why the work is needed across banking, retail, healthcare and government. Many people begin here and later specialise in web testing, mobile security or red team work as their interests become clear.`,
    ],
    dayToDay: [
      `Confirm what is in scope and what is off limits before any testing starts.`,
      `Gather public information on a target domain, its staff and its email addresses.`,
      `Escalate privileges on a vulnerable Windows machine and note every step you took.`,
      `Study how a piece of malware behaves inside an isolated sandbox.`,
      `Design a phishing simulation for a fictional company and write awareness advice for staff.`,
      `Recover passwords from hashes and judge how well the storage method held up.`,
      `Test a wireless network's encryption and record what an attacker could learn.`,
      `Write up each finding in plain language so a non-technical manager can follow it.`,
    ],
    outcomes: [
      `Explain how attackers think using the Cyber Kill Chain and different threat actor profiles.`,
      `Build and run a safe, isolated hacking lab with Kali Linux and vulnerable targets.`,
      `Perform reconnaissance and OSINT gathering, then scan and enumerate a lab network.`,
      `Demonstrate privilege escalation on Windows and describe how to defend against it.`,
      `Design a lab-safe social engineering test and recommend staff awareness steps.`,
      `Crack password hashes with dictionary and brute-force methods and explain the weakness behind them.`,
      `Test wireless networks and an Android app for common security weaknesses.`,
      `Document findings and rules of engagement in a report that a client can act on.`,
    ],
    whoFor: [
      {
        who: 'Curious final-year student',
        text: `You have tried capture the flag puzzles or watched hacking videos and want proper structure. The course gives you the lab, the legal framework and the method behind what you have seen online.`,
      },
      {
        who: 'Working system administrator',
        text: `You know how servers and users are set up, so you know where shortcuts tend to hide. Here you learn to test those systems from the attacker's side and to report what you find without causing damage.`,
      },
      {
        who: 'Non-IT graduate',
        text: `A degree in another subject is fine. Begin with the foundations module, spend time on the command line, and repeat each lab until you can explain every step to someone else.`,
      },
      {
        who: 'Career switcher with a security interest',
        text: `Perhaps you work in support, testing or networking and want to move into security. The mix of attack and defence topics lets you find out which side suits you before you specialise.`,
      },
    ],
    path: [
      {
        module: 1,
        focus: `Start with how attackers are classified, how an attack unfolds and what the law allows. Build the lab carefully because every later exercise runs in it, and learn the rules of engagement before you learn any exploit.`,
        topics: [1, 2, 3, 8, 9, 10, 11],
        tools: ['Kali Linux', 'Parrot Security', 'VirtualBox'],
        practice: { type: 'lab', index: 1 },
      },
      {
        module: 3,
        focus: `The most hands-on module for this role. Practise privilege escalation, study malware in a sandbox and run a social engineering simulation, because real attackers go after both machines and the people who use them.`,
        topics: [0, 1, 2, 3, 7, 8, 9],
        tools: ['Kali Linux', 'Wireshark', 'Netcat', 'Parrot Security'],
        practice: { type: 'lab', index: 3 },
      },
      {
        module: 2,
        focus: `Before any attack, learn the target. Focus on OSINT, passive and active reconnaissance and enumeration, then practise building an attack surface map from what you have gathered.`,
        topics: [1, 2, 3, 4, 6, 11],
        tools: ['Maltego', 'Nmap', 'Netcat', 'Kali Linux'],
        practice: { type: 'lab', index: 0 },
      },
      {
        module: 5,
        focus: `Extend your skills beyond the network. Work on password cracking, steganography, Android apps and IoT devices, the areas where a wider hacking skill set gets noticed.`,
        topics: [1, 2, 4, 5, 8, 10],
        tools: ['John the Ripper', 'Hashcat', 'Aircrack-ng', 'Kali Linux'],
        practice: { type: 'lab', index: 1 },
      },
      {
        module: 4,
        focus: `Bring everything together in the long final module. Concentrate on session hijacking, evading firewalls and intrusion detection, wireless attacks and Active Directory, then finish with a full test and report.`,
        topics: [2, 3, 4, 8, 9, 11, 12],
        tools: ['Burp Suite', 'Hydra', 'Wireshark', 'Cain & Abel'],
        practice: { type: 'lab', index: 2 },
      },
    ],
    careerPath: [
      {
        title: 'Junior Security Analyst or Vulnerability Assessor',
        text: `A common first step is a junior role where you scan systems, verify findings and learn how a security team works. The lab work and reports from this course help you show what you can already do.`,
      },
      {
        title: 'Ethical Hacker or Junior Penetration Tester',
        text: `As your testing skills grow you take on scoped assessments of networks, systems and people, and start writing full reports for clients. This is where the hacker mindset becomes a paid, permitted job.`,
      },
      {
        title: 'Red Team Associate or Mobile Security Analyst',
        text: `Some ethical hackers move towards longer, more realistic attack exercises as a Red Team Associate. Others focus on Android apps and devices as a Mobile Security Analyst or IoT Security Analyst.`,
      },
      {
        title: 'Security Consultant',
        text: `With years of experience, ethical hackers often become consultants who advise several clients on reducing risk, or move into lead roles that plan and review other people's tests.`,
      },
    ],
    certifications: [0, 2, 3],
    faqs: [
      {
        q: 'Is ethical hacking legal in India?',
        a: `It is legal when you have the written permission of the system owner and stay inside the agreed scope. Testing anything without permission is not. The first module covers cyber laws and rules of engagement, and every exercise in the course runs on lab systems you control.`,
      },
      {
        q: 'Can I become an ethical hacker without a computer science degree?',
        a: `Yes. The foundations module starts from how networks work and the command line, so you do not need prior security knowledge. What you can show matters most: lab work, written reports and portfolio projects that prove you can find and explain a weakness.`,
      },
      {
        q: 'What tools does an ethical hacker use?',
        a: `In this course you work with Kali Linux, Nmap, Maltego, Wireshark, Burp Suite, Hydra, John the Ripper, Hashcat and Aircrack-ng, among others. Tools change over time, so the course puts as much weight on the method behind them.`,
      },
      {
        q: 'Is CEH enough to get an ethical hacking job?',
        a: `A certificate shows that you have studied the topics, but most interviews also test practical skill. Pair CEH preparation with labs, projects and written reports so you can talk through work you have actually done.`,
      },
      {
        q: 'Do ethical hackers only attack websites?',
        a: `No. The work also covers networks, Windows machines, wireless networks, passwords, phishing and social engineering, mobile apps and IoT devices. This course touches each of those areas, so you can see which one you want to specialise in.`,
      },
    ],
    blog: [
      'what-is-ethical-hacking-and-how-to-learn-it',
      'what-is-penetration-testing-and-how-to-become-a-pentester',
      'cyber-security-career-without-coding-background',
      'cyber-security-certifications-ceh-security-plus-oscp',
      'how-to-become-a-cyber-security-professional',
      'cyber-security-portfolio-projects-to-build',
    ],
  },

  {
    slug: 'incident-response-analyst',
    title: 'Incident Response Analyst',
    metaTitle: `Incident Response Analyst Course Hyderabad | Skill IT Education`,
    metaDescription: `Incident response analyst course in Hyderabad: learn attacker techniques, malware behaviour, containment, playbooks and incident reporting in hands-on labs.`,
    lede: `This role course arranges the Cyber Security programme around incident response. You learn how systems are broken into and how malware behaves, then use that knowledge to contain an attack, clean up the affected machines, write the incident record and improve the defences afterwards.`,
    skills: [
      'Incident response process',
      'Response playbooks',
      'Malware behaviour',
      'Packet analysis',
      'Windows privilege escalation',
      'Endpoint remediation',
      'Threat intelligence basics',
      'Incident reporting',
    ],
    overview: [
      `An incident response analyst is called in when something has already gone wrong: a laptop infected with ransomware, an account used by a stranger, or a server sending out data it should not. The job is to work out what happened, stop it spreading, return the systems to a safe state and record everything. Speed matters, but calm and careful notes matter just as much.`,
      `In this course the role is built from the attacker's side first. You learn how privilege escalation, malware and social engineering work in a lab, so that when you read evidence you recognise the technique behind it. A typical case moves from an alert to packet and host checks, then to containment steps from a playbook, cleanup, and a written report with lessons for next time.`,
      `Incident response analysts work in security teams inside larger companies, in managed security and consulting firms that handle clients' incidents, and in risk and compliance teams that need clean incident records. The role matters because most organisations will face an incident at some point, and how well they respond decides how much damage follows. Analysts who understand attacks well often grow into malware analysis, threat intelligence and senior response work.`,
    ],
    dayToDay: [
      `Read an alert or a user report and decide whether it points to a real incident.`,
      `Isolate an infected machine from the network without losing useful evidence.`,
      `Capture traffic and read it in Wireshark to see what the attacker did.`,
      `Trace how an attacker moved from one account or host to the next.`,
      `Follow the response playbook step by step, from containment through to recovery.`,
      `Remove malware, harden the endpoint and confirm the machine is clean.`,
      `Write the incident report with a timeline, the cause and the fixes.`,
      `Share attacker details with the team so the same technique is caught next time.`,
    ],
    outcomes: [
      `Describe the incident response process from detection to containment, eradication and recovery.`,
      `Build and run an incident response playbook against a simulated breach.`,
      `Recognise privilege escalation and credential attacks and explain how they leave traces in evidence.`,
      `Analyse controlled malware behaviour in a sandbox and classify what you see.`,
      `Capture and analyse network traffic to identify a live attack pattern.`,
      `Remove malware from a compromised host and apply endpoint hardening.`,
      `Map an incident to the Cyber Kill Chain and explain each stage.`,
      `Write a formal incident report and an executive summary for managers.`,
    ],
    whoFor: [
      {
        who: 'Final-year student who likes investigating',
        text: `You enjoy working out what happened and why. The course gives you the attack knowledge and a response process, so you can approach an incident with a plan instead of guesswork.`,
      },
      {
        who: 'Desktop support or system administrator',
        text: `You have already cleaned infected machines and reset compromised accounts. This path adds structure: a proper response process, a way to read network evidence and a way to write the case up.`,
      },
      {
        who: 'Network engineer',
        text: `You know how traffic should look, which helps you spot traffic that does not belong. The course adds attacker techniques, malware behaviour and the response playbook around what you already understand.`,
      },
      {
        who: 'Career switcher from audit, operations or quality',
        text: `Careful records, clear steps and calm under pressure carry over well from those jobs. You will need to learn the technical side, which the course builds from networking basics upwards.`,
      },
    ],
    path: [
      {
        module: 1,
        focus: `Response starts with knowing what normal looks like. Concentrate on networking, the Windows and Linux command lines, the Cyber Kill Chain and threat actor profiles, and how policy and compliance rules shape what you must report.`,
        topics: [1, 3, 4, 5, 6, 7, 10],
        tools: ['Linux/Windows CLI', 'Kali Linux', 'VirtualBox'],
        practice: { type: 'project', index: 2 },
      },
      {
        module: 3,
        focus: `The core module for this role. Work on privilege escalation, malware types, sandbox and packet analysis, malware remediation and incident documentation, because these are the cases you will actually be investigating.`,
        topics: [0, 1, 2, 4, 10, 11],
        tools: ['Wireshark', 'Kali Linux', 'Parrot Security', 'Netcat'],
        practice: { type: 'lab', index: 1 },
      },
      {
        module: 6,
        focus: `Here the response process comes together. Learn detection, containment, eradication and recovery, build and run playbooks, read SIEM alerts, use threat intelligence, and finish with an executive-level report.`,
        topics: [2, 6, 7, 8, 10, 12],
        tools: ['SIEM & Log Platforms', 'AI Threat-Detection Platforms', 'Wireshark', 'Netcat'],
        practice: { type: 'lab', index: 2 },
      },
      {
        module: 4,
        focus: `Responders investigate attacks they did not carry out. Work through session hijacking, evasion of firewalls and IDS, web attack methods and Active Directory attacks so you know the tricks an attacker uses to stay hidden.`,
        topics: [2, 3, 4, 5, 6, 8],
        tools: ['Wireshark', 'Burp Suite', 'Cain & Abel', 'Nikto'],
        practice: { type: 'lab', index: 3 },
      },
      {
        module: 2,
        focus: `Finish by learning how a weakness is scored and tracked. Concentrate on CVE, CVSS and CWE records, scanning and attack surface mapping, so you can tell which gap was used and which others are still open.`,
        topics: [3, 4, 8, 9, 10, 11],
        tools: ['OpenVAS', 'Nmap', 'Netcat'],
        practice: { type: 'lab', index: 2 },
      },
    ],
    careerPath: [
      {
        title: 'Incident Response Analyst (Junior)',
        text: `Entry titles include Incident Response Analyst (Junior), Junior Security Analyst and IT Security Analyst. You work cases with a senior colleague, follow playbooks and write the first drafts of incident reports.`,
      },
      {
        title: 'Incident Response Analyst',
        text: `With experience you lead cases from first alert to final report, improve the playbooks the team uses, and explain incidents to managers who need plain answers about what happened and what changes next.`,
      },
      {
        title: 'Malware, threat intelligence or detection roles',
        text: `Responders often specialise as a Malware Analyst, a Threat Intelligence Analyst or a Threat Detection Engineer, using what they learn from incidents to spot the next one earlier.`,
      },
      {
        title: 'Longer term',
        text: `Over time the path can lead to Security Consultant roles or to Security Automation Engineer work, where repeatable response steps are turned into automated workflows.`,
      },
    ],
    certifications: [1, 4, 6],
    faqs: [
      {
        q: 'What are the stages of incident response?',
        a: `The programme teaches four core stages: detection, containment, eradication and recovery. Around them sit documentation and a review of what to improve. You practise the full flow by building a playbook and running it against a simulated breach.`,
      },
      {
        q: 'Do I need to know malware analysis to work in incident response?',
        a: `You need to recognise malware types such as viruses, worms, trojans, ransomware and rootkits, watch how they behave in a sandbox, and clean an infected host. The syllabus covers that at a practical level and does not go into deep reverse engineering.`,
      },
      {
        q: 'What is an incident response playbook?',
        a: `A playbook is a written set of steps for one type of incident, such as phishing or ransomware. It says who does what, in which order, and what to record. You build one and run it against a simulated breach in the course.`,
      },
      {
        q: 'Can a fresher start in incident response?',
        a: `Junior titles exist, and Incident Response Analyst (Junior) is one of the roles the programme lists. Hiring varies by company, so build your evidence with the playbook, incident report and lab projects, and use the placement assistance for resume and interview practice.`,
      },
      {
        q: 'How is incident response different from penetration testing?',
        a: `A penetration test attacks a system in a planned, permitted way to find weaknesses before an attacker does. Incident response begins after something has happened and focuses on containment, cleanup and records. Both need attack knowledge, and this programme teaches both sides.`,
      },
    ],
    blog: [
      'what-is-incident-response-and-how-it-is-done',
      'what-is-a-siem-and-which-siem-tools-to-learn',
      'cyber-security-portfolio-projects-to-build',
      'how-to-become-a-cyber-security-professional',
      'how-to-get-placed-after-a-cyber-security-course',
    ],
    honestNote: `The programme covers the incident response process, playbooks, malware behaviour, packet analysis and incident reporting in a lab. It has no dedicated digital forensics or memory analysis module, so deeper evidence-handling skills are something to build after the course.`,
  },

  {
    slug: 'cloud-security-engineer',
    title: 'Cloud Security Engineer',
    metaTitle: `Cloud Security Engineer Course in Hyderabad | Skill IT Education`,
    metaDescription: `Cloud security engineer foundations in Hyderabad: networking, cloud service models, web testing, encryption, vulnerability scanning and monitoring in labs.`,
    lede: `This role course is clear about its limits. The Cyber Security programme gives you the security foundations a cloud security engineer builds on: networking, Linux, vulnerability assessment, web testing, cryptography and monitoring, plus an introduction to cloud concepts and the IaaS, PaaS and SaaS service models.`,
    skills: [
      'Cloud service models',
      'Network fundamentals',
      'Linux command line',
      'Firewall configuration',
      'OWASP Top 10',
      'Vulnerability scanning',
      'Cryptography basics',
      'Key management basics',
    ],
    overview: [
      `A cloud security engineer keeps systems that run on rented cloud infrastructure safe. Instead of guarding a server room, you look after accounts, networks, storage, applications and data that live with a cloud provider and are shared with many teams. You decide who can reach what, check that settings are safe, and make sure data is protected while it is stored and while it moves.`,
      `Week to week the work is a mix of reviewing configurations, scanning for weaknesses, checking who has access to what, and helping developers release changes safely. A cloud provider handles part of the security and your organisation handles the rest, so much of the skill lies in knowing which part is yours. Reports, alerts and policy reviews fill the remaining time.`,
      `Cloud security engineers work in companies that run their products on cloud platforms, in cloud and IT services firms, and in consulting teams that review other companies' setups. More systems now run in the cloud, so organisations need people who can secure them. Many people reach the role after some years in networking, systems or general security work, so a strong foundation matters more than any single tool.`,
    ],
    dayToDay: [
      `Work out which security duties belong to you and which to the provider for each service model.`,
      `Review firewall rules and network settings to make sure only the needed traffic is allowed.`,
      `Run vulnerability scans with OpenVAS or Nessus and rank the results by CVSS score.`,
      `Test web applications against the OWASP Top 10 before they go live.`,
      `Check that sensitive data is encrypted properly and that encryption keys are handled safely.`,
      `Read logs and alerts in a SIEM to spot activity that does not look right.`,
      `Keep security policies in line with the compliance rules the organisation follows.`,
      `Write findings and fixes in a report that engineers and managers can both use.`,
    ],
    outcomes: [
      `Explain cloud security concepts and the differences between IaaS, PaaS and SaaS.`,
      `Use Linux and networking fundamentals to reason about how traffic moves between systems.`,
      `Configure and review firewall rules and explain common wireless encryption standards.`,
      `Test a web application against the OWASP Top 10 and write remediation advice.`,
      `Run automated vulnerability scans and prioritise the findings using CVSS.`,
      `Explain symmetric, asymmetric and hashing methods and the basics of encryption key management.`,
      `Triage alerts in a SIEM environment and follow an incident response playbook.`,
      `Draft a security policy mapped to a named compliance framework.`,
    ],
    whoFor: [
      {
        who: 'Network or system administrator',
        text: `You know servers, networks and permissions, which is the ground cloud security builds on. Use this course to add security testing, scanning and monitoring skills before you study a cloud platform in depth.`,
      },
      {
        who: 'Software developer',
        text: `You already build applications. The web testing and OWASP Top 10 material shows how your code gets attacked, and the cloud concepts topic gives you the vocabulary to talk with cloud teams.`,
      },
      {
        who: 'Final-year student aiming at cloud security',
        text: `Cloud security is usually reached after some experience rather than as a first job. Use this course to build the security base, then plan a cloud platform course and certification as your next step.`,
      },
      {
        who: 'IT support engineer',
        text: `You handle accounts and troubleshooting every day. This path adds networking depth, scanning, encryption and monitoring, giving you a route towards cloud security while you learn a platform on the side.`,
      },
    ],
    path: [
      {
        module: 1,
        focus: `Cloud systems still run on networks, Linux servers and policy. Concentrate on the OSI model, TCP/IP, the Linux and Windows command lines, the CIA triad and compliance basics, since every later cloud skill depends on them.`,
        topics: [2, 4, 5, 6, 7, 10],
        tools: ['Linux/Windows CLI', 'VirtualBox', 'Kali Linux'],
        practice: { type: 'project', index: 1 },
      },
      {
        module: 4,
        focus: `This module holds the only cloud topic in the syllabus: cloud security concepts and the IaaS, PaaS and SaaS service models. Learn that first, then firewall configuration, the OWASP Top 10 and the testing method around it.`,
        topics: [1, 4, 7, 8, 10, 11, 12],
        tools: ['Burp Suite', 'OWASP ZAP', 'Nikto', 'Wireshark'],
        practice: { type: 'project', index: 0 },
      },
      {
        module: 5,
        focus: `Protecting data depends on sound encryption. Study symmetric, asymmetric and hashing methods, key management basics and common cryptographic weaknesses, and see how weak password storage is broken in the lab.`,
        topics: [1, 5, 6, 7, 8],
        tools: ['John the Ripper', 'Hashcat', 'Kali Linux'],
        practice: { type: 'project', index: 0 },
      },
      {
        module: 2,
        focus: `Finding weaknesses before someone else does is central to the role. Learn automated vulnerability assessment, CVE, CVSS and CWE scoring and attack surface mapping, so you can measure how exposed a system is.`,
        topics: [4, 5, 8, 9, 10, 11],
        tools: ['OpenVAS', 'Nmap', 'Kali Linux'],
        practice: { type: 'lab', index: 4 },
      },
      {
        module: 6,
        focus: `Monitoring and response close the loop. Concentrate on SIEM fundamentals, alert triage, incident response playbooks and CVSS-based prioritisation, then build the vulnerability prioritisation dashboard to present a ranked remediation plan.`,
        topics: [2, 6, 8, 9, 12, 14],
        tools: ['SIEM & Log Platforms', 'Nessus', 'OpenVAS', 'Wireshark'],
        practice: { type: 'project', index: 2 },
      },
    ],
    careerPath: [
      {
        title: 'First steps in security',
        text: `Most people begin as a Junior Security Analyst, an IT Security Analyst or through the Network Support to Security track, building experience in scanning, monitoring and policy while they study a cloud platform.`,
      },
      {
        title: 'Network Security Engineer',
        text: `Firewalls, traffic analysis and network design are the base of cloud security too. A network security role lets you deepen those skills and take on more responsibility for how systems are protected.`,
      },
      {
        title: 'Cloud Security Engineer',
        text: `Once you have experience and a cloud platform qualification behind this foundation, you can move into cloud security work, reviewing configurations, access and data protection for teams running services in the cloud.`,
      },
      {
        title: 'Security Consultant or Compliance Analyst',
        text: `Longer term, some engineers move into Security Consultant or Security Compliance Analyst roles, advising organisations on risk, policy and the rules they need to follow.`,
      },
    ],
    certifications: [1, 4, 5],
    faqs: [
      {
        q: 'Is this course enough to become a cloud security engineer?',
        a: `Not on its own. It builds the security foundations the role depends on, and it introduces cloud concepts and service models. To work as a cloud security engineer you will also need to study a cloud platform in depth and gain some experience.`,
      },
      {
        q: 'Which cloud platforms does this course teach?',
        a: `The course does not teach hands-on work with any specific cloud platform. It covers cloud security concepts and the IaaS, PaaS and SaaS service models as one topic, so you can start a platform course afterwards with the right security background.`,
      },
      {
        q: 'What should I learn after this course to move into cloud security?',
        a: `Take a cloud platform fundamentals course next, then work towards a platform security certification. The programme's list includes a cloud security specialty certification, which is best attempted after platform experience rather than straight after this course.`,
      },
      {
        q: 'Do I need networking knowledge for cloud security?',
        a: `Yes. Cloud services still depend on networks, firewalls, ports and protocols. The first module teaches the OSI model, the TCP/IP stack, handshakes and Linux basics, and later modules use them in firewall, scanning and monitoring work.`,
      },
      {
        q: 'Can a fresher get a cloud security engineer job directly?',
        a: `Cloud security engineer roles often ask for some experience in networking, systems or general security. A fresher usually starts in a junior security or IT role and grows towards cloud work. Placement help covers your resume, interviews and hiring-partner network, but nothing is promised.`,
      },
    ],
    blog: [
      'how-to-become-a-cyber-security-professional',
      'cyber-security-job-after-graduation',
      'cyber-security-certifications-ceh-security-plus-oscp',
      'cyber-security-portfolio-projects-to-build',
      'is-cyber-security-a-good-career-for-freshers-in-india',
      'cyber-security-career-without-coding-background',
    ],
    honestNote: `The syllabus covers cloud security concepts and the IaaS, PaaS and SaaS models as one topic, alongside the networking, testing, encryption and monitoring skills the role builds on. It does not teach hands-on work on a specific cloud platform, cloud-native security services or infrastructure automation, so plan a platform course as your next step.`,
  },
];

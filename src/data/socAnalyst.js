// Auto-generated from data.py via react-data-export/gen_data_js_unified.py — content sourced
// from the original course brochure PDF. Edit here, not by hand-transcribing the PDF again.

const SITE = {
  "brand": "SKILL IT EDUCATION",
  "program": "SOC Analyst Program",
  "base_path": "/courses/SOC-Analyst",
  "phone": "+91 9177715978",
  "email": "info@skilliteducation.com",
  "address": "LR Towers, No. 3-535, 3rd Floor A Section, 100 Feet Road, Ayappa Society, Madhapur, Hyderabad, Telangana, India",
  "street": "LR Towers, No. 3-535, 3rd Floor A Section, 100 Feet Road, Ayappa Society, Madhapur",
  "city": "Hyderabad",
  "region": "Telangana",
  "country": "IN",
  "website": "www.skilliteducation.com"
};

const MODULES = [
  {
    "slug": "module-1-foundations-it-networking-operating-systems",
    "number": 1,
    "title": "Foundations: IT, Networking & Operating Systems",
    "duration": "3 Weeks",
    "hours": "30 Hrs",
    "hero": "Every SOC analyst starts with the same foundation: how networks actually work, how IP addressing and subnetting hold an enterprise together, and real administration fluency across Windows and Linux. This module builds that base before any security concept is introduced.",
    "who_for": "Career changers, IT support staff, networking graduates and anyone starting a structured path into Security Operations Center roles.",
    "relevance": "Every SOC analyst relies on the same core: networking fluency, comfort administering both Windows and Linux, and the CLI skills to move fast during an investigation. This module builds all three before any monitoring or detection concept is introduced.",
    "learn": [
      "IT infrastructure & software fundamentals",
      "Networking essentials: LAN, MAN, WAN & Internet",
      "Network topologies, devices & the OSI/TCP-IP models",
      "IP addressing, classifications & subnetting",
      "Routers, switches, firewalls & IDS/IPS placement",
      "Windows & Linux installation and administration",
      "Linux terminal / CLI & command-line practice",
      "Reputation checks for suspicious IPs & URLs"
    ],
    "tools": [
      {
        "name": "Windows Server",
        "desc": "Enterprise server operating system used to build and administer the lab's Windows infrastructure."
      },
      {
        "name": "Linux / Ubuntu",
        "desc": "Open-source operating system used for administration, log analysis and security tooling across the lab."
      },
      {
        "name": "CLI",
        "desc": "Command-line fluency across Windows and Linux, used for configuration, investigation and automation tasks."
      },
      {
        "name": "Wireshark",
        "desc": "Network protocol analyzer used to capture and inspect live traffic at the packet level."
      },
      {
        "name": "Nmap",
        "desc": "Network mapping and port-scanning engine used to discover hosts, services and open ports."
      },
      {
        "name": "VirtualBox",
        "desc": "Virtualization platform used to build and isolate the SOC lab environment."
      }
    ],
    "labs": [
      "Configure IP addressing, subnetting and a virtual lab with Windows and Linux systems.",
      "Install and administer Windows Server and Linux (Ubuntu) environments.",
      "Capture and analyse network traffic using Wireshark.",
      "Scan a lab network for open ports and services using Nmap.",
      "Practise Linux CLI navigation, file operations and reputation checks on suspicious IPs and URLs."
    ],
    "assessment": {
      "knowledge": "Quiz covering networking fundamentals, the OSI/TCP-IP models, subnetting and Windows/Linux administration.",
      "practical": "Students must configure a working virtual lab with correctly subnetted IP addressing and both Windows and Linux hosts."
    },
    "projects": [
      {
        "title": "Network & Lab Environment Setup",
        "desc": "Configure IP addressing, subnetting and a virtual lab with Windows and Linux systems."
      }
    ],
    "outcome": "Students build a strong technical foundation for security work by configuring networks, working across Windows and Linux, and understanding how IT infrastructure actually operates.",
    "roles": [
      "IT Support Engineer (Trainee)",
      "Network Administrator (Junior)",
      "Systems Administrator (Junior)",
      "SOC Analyst — foundation track"
    ]
  },
  {
    "slug": "module-2-the-cyber-threat-landscape",
    "number": 2,
    "title": "The Cyber Threat Landscape",
    "duration": "3 Weeks",
    "hours": "30 Hrs",
    "hero": "Before you can defend against an attack, you need to think like the person launching it. This module builds the attacker's-eye view every SOC analyst needs — how threats, vulnerabilities and risk connect, and the mechanics behind the attacks analysts see every day.",
    "who_for": "Students who have completed the foundations module and are ready to study attacker techniques and defensive controls.",
    "relevance": "Recognising and classifying an attack correctly is the first job of every SOC analyst — this module builds the vocabulary and pattern recognition that the rest of the program's detection and response work depends on.",
    "learn": [
      "Threat, vulnerability & risk — how they connect",
      "CIA Triad and AAA security models",
      "Ethical hacking vs. hacking, and types of hackers",
      "The five phases of hacking: recon to clearing tracks",
      "Malware types: viruses, worms, trojans & ransomware",
      "Phishing, spear-phishing & business email compromise",
      "Password attacks, MITM, DoS & DDoS attacks",
      "Web application attacks: injection, XSS & more"
    ],
    "tools": [
      {
        "name": "Wireshark",
        "desc": "Network protocol analyzer used to capture and inspect live traffic at the packet level."
      },
      {
        "name": "Nmap",
        "desc": "Network mapping and port-scanning engine used to discover hosts, services and open ports."
      },
      {
        "name": "CLI",
        "desc": "Command-line fluency across Windows and Linux, used for configuration, investigation and automation tasks."
      }
    ],
    "labs": [
      "Classify real-world attack scenarios by threat, vulnerability and risk.",
      "Walk through the five phases of hacking against a simulated target.",
      "Analyse simulated phishing emails and identify social engineering red flags.",
      "Investigate a simulated malware sample and identify its attack type.",
      "Map common web application attacks — injection and XSS — to their defensive controls."
    ],
    "assessment": {
      "knowledge": "Quiz covering attack types, the CIA Triad, the five phases of hacking and common web application attacks.",
      "practical": "Students must classify and document a set of simulated attack scenarios by type, with the appropriate defensive control for each."
    },
    "projects": [
      {
        "title": "Threat Detection Exercise",
        "desc": "Analyze malware, phishing emails and malicious IP activity using live SIEM offense data."
      }
    ],
    "outcome": "Students learn to recognise, classify and understand the mechanics of common cyber attacks, building the attacker's-eye view every SOC analyst needs.",
    "roles": [
      "Junior Security Analyst",
      "Vulnerability Analyst (Trainee)",
      "IT Security Support",
      "SOC Analyst — foundation track"
    ]
  },
  {
    "slug": "module-3-inside-a-security-operations-center",
    "number": 3,
    "title": "Inside a Security Operations Center",
    "duration": "3 Weeks",
    "hours": "30 Hrs",
    "hero": "This module steps inside a real Security Operations Center — how it's structured and staffed, what each tier actually does, and how people, process and technology come together to run detection around the clock.",
    "who_for": "Students who have completed the threat-landscape module and are ready to understand how a real SOC team operates day to day.",
    "relevance": "Every SOC analyst job starts with understanding where you sit in the team — the tier structure, escalation paths and delivery model behind the role are exactly what interviewers probe for first.",
    "learn": [
      "What a SOC does, and why it matters",
      "Key SOC functions: triage, investigation & hunting",
      "How a SOC is structured and staffed",
      "Key SOC roles and responsibilities",
      "Modern-day SOCs: people, process & technology",
      "SOC as a Service (SOCaaS) and delivery models",
      "NOC vs. SOC — how the two teams differ",
      "Cyber security monitoring essentials"
    ],
    "tools": [
      {
        "name": "SIEM",
        "desc": "Security Information & Event Management platform used to collect, correlate and analyse security events centrally."
      },
      {
        "name": "NIDS / NIPS",
        "desc": "Network intrusion detection and prevention systems used to spot and block malicious network activity."
      },
      {
        "name": "SOAR",
        "desc": "Security orchestration, automation and response tooling used to speed up triage and incident handling."
      },
      {
        "name": "EDR / XDR",
        "desc": "Endpoint and extended detection & response platforms used to monitor and contain threats on hosts."
      },
      {
        "name": "DLP",
        "desc": "Data Loss Prevention tooling used to detect and stop unauthorised movement of sensitive data."
      },
      {
        "name": "IAM",
        "desc": "Identity and Access Management systems used to control who can access what across the environment."
      },
      {
        "name": "Firewalls",
        "desc": "Network security devices used to enforce traffic rules and segment the environment."
      },
      {
        "name": "Vuln. Mgmt",
        "desc": "Vulnerability management tooling used to discover, prioritise and track security weaknesses."
      }
    ],
    "labs": [
      "Map the structure, tiers and staffing model of a modern SOC.",
      "Compare SOC-as-a-Service delivery models against an in-house SOC.",
      "Distinguish NOC responsibilities from SOC responsibilities in a shared scenario.",
      "Walk a sample alert through the Tier 1 to Tier 2 to Tier 3 escalation path.",
      "Document the people, process and technology behind a SOC monitoring workflow."
    ],
    "assessment": {
      "knowledge": "Quiz covering SOC structure, roles, the tier system and SOC vs. NOC responsibilities.",
      "practical": "Students must produce a SOC operating-model brief covering tiers, roles and escalation paths for a sample organisation."
    },
    "projects": [
      {
        "title": "SOC Operating Model Brief",
        "desc": "Document how a live SOC is staffed, tiered and structured, using a real-world case study."
      }
    ],
    "outcome": "Students understand how a SOC is structured and staffed, and can explain the tools, roles and workflows that keep a security team running around the clock.",
    "roles": [
      "SOC Analyst (L1)",
      "Security Monitoring Analyst",
      "Alert Triage Specialist",
      "IT Security Trainee"
    ]
  },
  {
    "slug": "module-4-siem-platforms-security-monitoring",
    "number": 4,
    "title": "SIEM Platforms & Security Monitoring",
    "duration": "5 Weeks",
    "hours": "50 Hrs",
    "hero": "This is where SOC work becomes hands-on. Students operate a real SIEM platform end to end — onboarding log sources, building dashboards, tuning correlation rules and investigating live offenses, the same workflow analysts run every shift.",
    "who_for": "Students who have completed the SOC-fundamentals module and are ready to operate a real SIEM platform.",
    "relevance": "SIEM fluency — especially on IBM QRadar and Splunk — is the single most tested hands-on skill in SOC Analyst interviews, because it's the platform analysts live in every day.",
    "learn": [
      "SIEM architecture, event & flow collectors",
      "IBM QRadar: dashboards & offense analysis",
      "Malicious IP communication & phishing analysis",
      "Windows, Linux & security device log types",
      "Correlation rules, false positives & alert triaging",
      "Reference sets, use-case creation & rule tuning",
      "Log source integration across the enterprise",
      "Generating governance & security reports"
    ],
    "tools": [
      {
        "name": "IBM QRadar",
        "desc": "Enterprise SIEM platform used to build dashboards, correlate events and investigate security offenses."
      },
      {
        "name": "Splunk",
        "desc": "Log analysis and SIEM platform used to search, monitor and visualise machine data at scale."
      },
      {
        "name": "Win Collect",
        "desc": "Log collection agent used to forward Windows event logs into a SIEM platform."
      },
      {
        "name": "Firewall Logs",
        "desc": "Perimeter device logs used to detect blocked and suspicious network traffic patterns."
      },
      {
        "name": "IPS / WAF",
        "desc": "Intrusion prevention and web application firewall logs used to spot and block application-layer attacks."
      },
      {
        "name": "Proxy Logs",
        "desc": "Web proxy logs used to trace user and malware web activity across the network."
      }
    ],
    "labs": [
      "Onboard log sources into IBM QRadar and configure event and flow collectors.",
      "Build real-time SIEM dashboards and investigate offenses in QRadar.",
      "Analyse malicious IP communication and phishing activity using live SIEM offense data.",
      "Tune correlation rules and reference sets to reduce false positives.",
      "Integrate log sources across the enterprise and generate governance and security reports."
    ],
    "assessment": {
      "knowledge": "Quiz covering SIEM architecture, correlation rules, log source types and alert triaging.",
      "practical": "Students must build and tune a working SIEM dashboard with correlation rules, and investigate at least one offense end to end."
    },
    "projects": [
      {
        "title": "SIEM Monitoring Lab",
        "desc": "Onboard log sources into IBM QRadar, create reference sets and build real-time dashboards."
      }
    ],
    "outcome": "Students learn to operate a SIEM platform end to end — building dashboards, investigating offenses, tuning rules and producing real security reports.",
    "roles": [
      "SOC Analyst (L1/L2)",
      "SIEM / Security Engineer (Trainee)",
      "Security Monitoring Analyst",
      "Log Analysis Engineer"
    ]
  },
  {
    "slug": "module-5-incident-response-threat-hunting",
    "number": 5,
    "title": "Incident Response & Threat Hunting",
    "duration": "5 Weeks",
    "hours": "50 Hrs",
    "hero": "The program closes by turning detection into action — running a structured incident response lifecycle end to end, and hunting proactively for threats that alerts alone never surface, using the same frameworks real SOC teams rely on.",
    "who_for": "Students consolidating SIEM and monitoring skills into full incident response and proactive threat-hunting capability.",
    "relevance": "The ability to run an incident from identification through recovery — and to hunt proactively using MITRE ATT&CK — is exactly what separates a SOC Analyst who reacts to alerts from one who's ready for Incident Response and Threat Intelligence roles.",
    "learn": [
      "Incident handling process & response lifecycle",
      "Preparation, containment, eradication & recovery",
      "Security incident playbooks vs. runbooks",
      "The Cyber Kill Chain and MITRE ATT&CK framework",
      "Cyber Threat Intelligence (CTI) and its lifecycle",
      "Indicators of Compromise (IOC) vs. Indicators of Attack",
      "Threat hunting methods & investigation tools",
      "Email header analysis & malware analysis basics"
    ],
    "tools": [
      {
        "name": "MITRE ATT&CK",
        "desc": "Industry-standard framework of adversary tactics and techniques used to structure detection and hunting."
      },
      {
        "name": "Kill Chain",
        "desc": "The Cyber Kill Chain model used to map an attack's stages from reconnaissance to actions on objectives."
      },
      {
        "name": "CyberChef",
        "desc": "Browser-based data analysis tool used to decode, decrypt and analyse suspicious data during investigations."
      },
      {
        "name": "Sysinternals",
        "desc": "Windows diagnostic and forensic utility suite used to investigate processes, autoruns and system activity."
      },
      {
        "name": "Google Dorks",
        "desc": "Advanced search techniques used for open-source reconnaissance and exposure discovery."
      },
      {
        "name": "IOC / IOA",
        "desc": "Indicators of Compromise and Indicators of Attack used to detect and hunt for malicious activity."
      }
    ],
    "labs": [
      "Run a full incident response lifecycle from identification through recovery.",
      "Build an incident playbook for a specific attack scenario.",
      "Map a simulated attack to the Cyber Kill Chain and the MITRE ATT&CK framework.",
      "Hunt for hidden threats using MITRE ATT&CK and threat intelligence feeds.",
      "Analyse email headers and perform basic malware analysis using CyberChef and Sysinternals."
    ],
    "assessment": {
      "knowledge": "Quiz covering the incident response lifecycle, the Cyber Kill Chain, MITRE ATT&CK and IOC vs. IOA.",
      "practical": "Students must respond to and document a simulated multi-stage incident end to end, including a proactive threat-hunting exercise."
    },
    "projects": [
      {
        "title": "Incident Response Simulation",
        "desc": "Run through a full incident lifecycle — from identification to containment and recovery."
      },
      {
        "title": "Threat Hunting Project",
        "desc": "Use MITRE ATT&CK and threat intelligence feeds to proactively hunt for hidden threats."
      }
    ],
    "outcome": "Students learn to respond to real incidents using a structured lifecycle, and to hunt proactively using threat intelligence and industry-standard frameworks.",
    "roles": [
      "Incident Response Analyst (Trainee)",
      "Threat Intelligence Analyst (Junior)",
      "Junior Threat Hunter",
      "SOC Analyst (L2)"
    ]
  }
];

const CAREER_TRACKS = [
  {
    "title": "SOC Operations",
    "roles": [
      "SOC Analyst (L1)",
      "SOC Analyst (L2)",
      "Security Analyst"
    ]
  },
  {
    "title": "Incident & Threat Response",
    "roles": [
      "Incident Response Analyst",
      "Threat Intelligence Analyst",
      "Junior Threat Hunter"
    ]
  },
  {
    "title": "Security Engineering",
    "roles": [
      "SIEM / Security Engineer",
      "Vulnerability Analyst",
      "Network Security Engineer"
    ]
  },
  {
    "title": "Monitoring & Detection",
    "roles": [
      "Security Monitoring Analyst",
      "Alert Triage Specialist",
      "Log Analysis Engineer"
    ]
  },
  {
    "title": "Compliance & Risk",
    "roles": [
      "Cyber Risk Analyst",
      "IT Security Auditor",
      "Compliance Analyst"
    ]
  },
  {
    "title": "Advanced Career Paths",
    "roles": [
      "SOC Team Lead",
      "Security Architect",
      "CISO (long-term path)"
    ]
  }
];

const CERTIFICATIONS = [
  "EC-Council Certified SOC Analyst (CSA)",
  "CompTIA Security+",
  "CompTIA CySA+",
  "ISC2 Certified in Cybersecurity (CC)",
  "Microsoft Security Operations Analyst (SC-200)",
  "IBM QRadar SIEM Certification",
  "GIAC Certified Incident Handler (GCIH)"
];

const STATS = [
  {
    "value": "15+",
    "label": "Years of Training Excellence"
  },
  {
    "value": "650+",
    "label": "Learners Trained"
  },
  {
    "value": "345+",
    "label": "Hiring Partners"
  },
  {
    "value": "190 Hrs",
    "label": "Hands-On Curriculum"
  }
];

const WHY_COURSE = [
  "Industry-aligned curriculum built around the same SIEM platforms and workflows real SOC teams use today",
  "100% hands-on delivery — every module closes with a lab exercise or a real project, not slides",
  "Direct, hands-on time on IBM QRadar and Splunk — the platforms analysts are tested on in interviews",
  "Structured path from networking fundamentals through SOC operations, SIEM monitoring and incident response",
  "Curriculum mapped toward globally recognised certification pathways (CompTIA Security+, CySA+, EC-Council CSA and more)",
  "A minimum of five portfolio projects across the program, documented to professional reporting standards",
  "Real-time internship exposure across live SOC monitoring, triage and incident response",
  "Dedicated placement support — resume reviews, mock interviews and a hiring-partner network"
];

const TOOL_LIBRARY = {
  "Windows Server": "Enterprise server operating system used to build and administer the lab's Windows infrastructure.",
  "Linux / Ubuntu": "Open-source operating system used for administration, log analysis and security tooling across the lab.",
  "CLI": "Command-line fluency across Windows and Linux, used for configuration, investigation and automation tasks.",
  "Wireshark": "Network protocol analyzer used to capture and inspect live traffic at the packet level.",
  "Nmap": "Network mapping and port-scanning engine used to discover hosts, services and open ports.",
  "VirtualBox": "Virtualization platform used to build and isolate the SOC lab environment.",
  "SIEM": "Security Information & Event Management platform used to collect, correlate and analyse security events centrally.",
  "NIDS / NIPS": "Network intrusion detection and prevention systems used to spot and block malicious network activity.",
  "SOAR": "Security orchestration, automation and response tooling used to speed up triage and incident handling.",
  "EDR / XDR": "Endpoint and extended detection & response platforms used to monitor and contain threats on hosts.",
  "DLP": "Data Loss Prevention tooling used to detect and stop unauthorised movement of sensitive data.",
  "IAM": "Identity and Access Management systems used to control who can access what across the environment.",
  "Firewalls": "Network security devices used to enforce traffic rules and segment the environment.",
  "Vuln. Mgmt": "Vulnerability management tooling used to discover, prioritise and track security weaknesses.",
  "IBM QRadar": "Enterprise SIEM platform used to build dashboards, correlate events and investigate security offenses.",
  "Splunk": "Log analysis and SIEM platform used to search, monitor and visualise machine data at scale.",
  "Win Collect": "Log collection agent used to forward Windows event logs into a SIEM platform.",
  "Firewall Logs": "Perimeter device logs used to detect blocked and suspicious network traffic patterns.",
  "IPS / WAF": "Intrusion prevention and web application firewall logs used to spot and block application-layer attacks.",
  "Proxy Logs": "Web proxy logs used to trace user and malware web activity across the network.",
  "MITRE ATT&CK": "Industry-standard framework of adversary tactics and techniques used to structure detection and hunting.",
  "Kill Chain": "The Cyber Kill Chain model used to map an attack's stages from reconnaissance to actions on objectives.",
  "CyberChef": "Browser-based data analysis tool used to decode, decrypt and analyse suspicious data during investigations.",
  "Sysinternals": "Windows diagnostic and forensic utility suite used to investigate processes, autoruns and system activity.",
  "Google Dorks": "Advanced search techniques used for open-source reconnaissance and exposure discovery.",
  "IOC / IOA": "Indicators of Compromise and Indicators of Attack used to detect and hunt for malicious activity."
};

// Page-level copy that differs per course (headings, hero text, salary bands, etc.) — kept
// separate from the structural MODULES/CAREER_TRACKS data so CourseHomePage/CourseModulePage stay
// identical across every course.
const COPY = {
  "metaTitle": "Best SOC Analyst Training Institute in Hyderabad | Skill IT Education",
  "metaDesc": "The Best SOC Analyst Training Institute in Hyderabad — a 7-month SOC Analyst Program: networking, SOC operations, IBM QRadar/Splunk SIEM and incident response.",
  "breadcrumbProgramName": "SOC Analyst Program",
  "courseShortName": "SOC Analyst",
  "ogImageFile": "soc-analyst-og-card.png",
  "heroVisual": "svg",
  "brochureFile": "Skill-IT-Education-SOC-Analyst-Brochure.pdf",
  "preselectedCourse": "SOC (Security Operations Center)",
  "durationChip": "INDUSTRY-ALIGNED SOC ANALYST TRAINING",
  "heroTitleHtml": "SOC Analyst<br>Program",
  "heroKicker": "The Best SOC Analyst Training Institute in Hyderabad",
  "heroLede": "A 7-month SOC Analyst Program that takes you step by step from IT and networking foundations to real Security Operations Center work — monitoring networks, operating SIEM platforms, investigating incidents and hunting threats in live, hands-on environments. Five structured modules and a two-month real-time industry internship — built to make you a SOC analyst, not just a certificate holder.",
  "heroStats": [
    {
      "label": "Total Duration",
      "value": "7 Months"
    },
    {
      "label": "Structured Learning",
      "value": "5 Months"
    },
    {
      "label": "Industry Internship",
      "value": "2 Months"
    },
    {
      "label": "Course Fees",
      "value": "₹50K / ₹55K",
      "note": "Online / Offline"
    }
  ],
  "heroBadges": [
    "Industry-Aligned",
    "Live SIEM Labs"
  ],
  "heroQuote": {
    "text": "Amateurs hack systems, professionals hack people — and SOC teams are the ones who catch both.",
    "cite": "— Bruce Schneier, Security Technologist"
  },
  "roadmapEyebrow": "SOC Analyst Course Curriculum",
  "roadmapTitle": "Five Modules. One Complete SOC Analyst Skillset.",
  "roadmapSubtitle": "Every module builds directly on the last — from networking foundations to full incident response and threat hunting.",
  "whyEyebrow": "Why This SOC Analyst Course",
  "whyTitle": "A SOC Analyst Course Built to Make You Job-Ready, Not Just Certified",
  "timelineEyebrow": "Course Duration & Learning Path",
  "timelineTitle": "Your SOC Analyst Training Timeline, From Networking to Threat Hunting",
  "timelineSubtitle": "190 hours of core curriculum across five modules, followed by a two-month real-time industry internship.",
  "timelinePhases": [
    {
      "node": "C",
      "tag": "Capstone",
      "title": "End-to-End SOC Simulation",
      "duration": "Final Module Project"
    },
    {
      "node": "I",
      "tag": "Final Phase",
      "title": "Real-Time Industry Internship",
      "duration": "2 Months"
    }
  ],
  "toolsEyebrow": "SOC Tools",
  "toolsTitle": "IBM QRadar, Splunk & the Tools You'll Master",
  "toolsSubtitle": "The complete toolset used across the program — from networking and SIEM monitoring to incident response and threat hunting.",
  "moduleToolsSubtitle": "Hands-on time with the same tools used in real Security Operations Centers today.",
  "moduleLabsSubtitle": "Production-style SOC lab scenarios, built using the same stack real security teams monitor with.",
  "moduleCtaHeading": "Continue building your SOC analyst portfolio",
  "projectsEyebrow": "SOC Analyst Projects",
  "projectsTitle": "Real SOC Analyst Projects for Your Security Portfolio",
  "projectsSubtitle": "Every module is reinforced with hands-on work — a minimum of five projects across the program, each added to your portfolio and resume.",
  "featuredProjects": [
    {
      "tag": "Capstone",
      "title": "End-to-End SOC Simulation",
      "desc": "Monitor, investigate and respond to a simulated multi-stage attack from detection to resolution."
    },
    {
      "tag": "Included",
      "title": "SIEM Monitoring Lab",
      "desc": "Onboard log sources into IBM QRadar, create reference sets and build real-time dashboards."
    },
    {
      "tag": "Included",
      "title": "Threat Hunting Project",
      "desc": "Use MITRE ATT&CK and threat intelligence feeds to proactively hunt for hidden threats."
    }
  ],
  "outcomesEyebrow": "What You'll Learn",
  "outcomesTitle": "What You'll Be Able to Do After This SOC Analyst Program",
  "outcomesList": [
    "Configure and troubleshoot enterprise networks",
    "Administer Windows Server and Linux environments",
    "Monitor, triage and escalate security alerts",
    "Operate SIEM platforms such as IBM QRadar & Splunk",
    "Apply the Cyber Kill Chain and MITRE ATT&CK",
    "Read and correlate security device logs",
    "Follow a structured incident response lifecycle",
    "Recognize and classify common cyber attacks",
    "Use threat intelligence to strengthen detection",
    "Conduct proactive threat hunting",
    "Perform basic malware & email analysis",
    "Communicate findings through reports & playbooks"
  ],
  "careersEyebrow": "SOC Analyst Career Paths",
  "careersTitle": "SOC Analyst Jobs: L1/L2 Analyst, Threat Hunter & More",
  "salaryEyebrow": "Salary Positioning",
  "salaryTitle": "SOC Analyst Salary in India & Globally — What to Expect",
  "salarySubtitle": "Figures are broad, indicative ranges for entry-to-mid-level roles and vary significantly by company, location, specialization and experience. They are not a guarantee of outcome.",
  "salaryIndia": {
    "range": "₹3L – ₹9L / year",
    "desc": "Typical entry-to-mid range for SOC Analyst (L1/L2), Security Monitoring Analyst and Junior Threat Hunter roles, rising with certifications and shift experience."
  },
  "salaryGlobal": {
    "range": "$50K – $95K / year",
    "desc": "Typical entry-to-mid range for equivalent SOC Analyst and Incident Response roles in mature international markets."
  },
  "certEyebrow": "Certification Readiness",
  "certTitle": "Certifications This SOC Analyst Course Prepares You For",
  "certSubtitle": "The curriculum is structured to help prepare learners for the following external certifications, including CompTIA Security+ and EC-Council Certified SOC Analyst.",
  "finalCtaTitle": "Start your SOC analyst career with a structured, hands-on program",
  "finalCtaSubtitle": "7 months total — 5 months of structured learning across five modules, plus 2 months of real-time industry internship."
};

// routeBase is this course's mount point inside the unified app's router (e.g. "/cyber-security"),
// distinct from the old standalone repos' own base_path used only for their own SEO canonical URLs.
const routeBase = "/soc-analyst";

export default {
  routeBase,
  SITE,
  MODULES,
  CAREER_TRACKS,
  CERTIFICATIONS,
  STATS,
  WHY_COURSE,
  TOOL_LIBRARY,
  COPY,
};

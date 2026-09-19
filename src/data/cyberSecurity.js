// Auto-generated from data.py via react-data-export/gen_data_js_unified.py — content sourced
// from the original course brochure PDF. Edit here, not by hand-transcribing the PDF again.

const SITE = {
  "brand": "SKILL IT EDUCATION",
  "program": "Advanced Cyber Security Certification Program",
  "base_path": "/courses/Cybersecurity",
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
    "slug": "module-1-cybersecurity-foundations",
    "number": 1,
    "title": "Cybersecurity & Ethical Hacking Foundations",
    "duration": "2 Weeks",
    "hours": "20 Hrs",
    "hero": "Every security career starts with the same foundation: how networks actually work, how attackers think, and how to build a lab safe enough to break things on purpose. This module gets you there — from OSI fundamentals to a fully operational penetration-testing environment.",
    "who_for": "Career changers, IT support staff, networking graduates and anyone starting a structured path into offensive or defensive security roles.",
    "relevance": "Every SOC analyst, pentester and security engineer in the industry relies on the same core: networking fluency, a working lab, and a repeatable ethical-hacking methodology. This module builds all three before any offensive technique is introduced.",
    "learn": [
      "Cybersecurity vs Information Security — scope, terminology and where each discipline sits inside an organisation",
      "Types of hackers and threat actor profiles: white hat, grey hat, black hat, nation-state and insider threats",
      "The CIA Triad and the core principles that every security control is designed to protect",
      "Cyber Kill Chain concept and the stages of a typical attack lifecycle",
      "Networking fundamentals — the OSI model, the TCP/IP stack, ports and protocols",
      "3-way and 2-way TCP handshakes, and the role of core networking devices",
      "Linux command-line essentials for security practitioners",
      "Windows command-line essentials and baseline system administration",
      "Building a lab environment using VirtualBox, Kali Linux and Parrot Security",
      "Installing and configuring vulnerable targets for safe, legal practice",
      "Cyber laws, compliance obligations and organisational security policy basics",
      "Ethical hacking methodology, scope definition and rules of engagement",
      "Introduction to the penetration testing lifecycle: recon, scanning, exploitation, reporting"
    ],
    "tools": [
      {
        "name": "Kali Linux",
        "desc": "Debian-based penetration testing distribution preloaded with the industry-standard offensive security toolset."
      },
      {
        "name": "Parrot Security",
        "desc": "Security-focused Linux distribution used for penetration testing, forensics and privacy-preserving lab work."
      },
      {
        "name": "VirtualBox",
        "desc": "Virtualization platform used to build and isolate the penetration-testing lab environment."
      },
      {
        "name": "Linux/Windows CLI",
        "desc": "Command-line fluency on both operating systems for reconnaissance, administration and exploitation tasks."
      }
    ],
    "labs": [
      "Build a fully functional, isolated penetration-testing lab using VirtualBox, Kali Linux and Parrot Security.",
      "Deploy an intentionally vulnerable Windows target for safe, contained practice.",
      "Run core Linux and Windows command-line operations used in day-to-day security work.",
      "Capture a live TCP handshake and map observed traffic back to the OSI model.",
      "Draft a baseline organisational security policy aligned to a named compliance framework."
    ],
    "assessment": {
      "knowledge": "Written assessment covering the OSI/TCP-IP model, the Cyber Kill Chain, threat actor classification and core security principles.",
      "practical": "Students must stand up a working lab — Kali Linux and Parrot Security both reachable, a vulnerable target installed and network connectivity verified — and walk an assessor through it."
    },
    "projects": [
      {
        "title": "Penetration Testing Lab Build & Network Baseline Report",
        "desc": "Build the lab end-to-end and document network topology, IP allocation and baseline configuration."
      },
      {
        "title": "Organisational Security Policy & Compliance Mapping",
        "desc": "Draft a security policy for a fictional organisation, mapped explicitly to a named compliance framework."
      },
      {
        "title": "Threat Actor Profiling Brief",
        "desc": "Profile a threat actor archetype relevant to a chosen industry vertical and its likely attack objectives."
      }
    ],
    "outcome": "Students leave with a solid grounding in networking, operating systems and ethical-hacking methodology, plus a fully functional penetration-testing lab they will use for the rest of the program.",
    "roles": [
      "SOC Analyst (Trainee)",
      "IT Security Analyst",
      "Junior Security Analyst",
      "Network Support → Security track"
    ]
  },
  {
    "slug": "module-2-reconnaissance-scanning-enumeration",
    "number": 2,
    "title": "Reconnaissance, Scanning & Enumeration",
    "duration": "3 Weeks",
    "hours": "30 Hrs",
    "hero": "Before any system is exploited, it has to be understood. This module builds the reconnaissance and enumeration discipline that separates a structured assessment from guesswork — profiling targets, mapping attack surfaces and scoring what's actually exploitable.",
    "who_for": "Students who have completed the foundations module and are ready to run structured, tool-driven assessments against lab infrastructure.",
    "relevance": "Reconnaissance and vulnerability scoring are the first deliverables on almost every real penetration test and vulnerability-assessment engagement — and the skill most directly tested in SOC and VAPT interviews.",
    "learn": [
      "Introduction to reconnaissance and intelligence-gathering methodology",
      "Open-source intelligence (OSINT) techniques and tradecraft",
      "WHOIS lookups, domain registration analysis and DNS enumeration",
      "Passive vs active reconnaissance — when and how to use each",
      "Port scanning fundamentals and advanced scanning techniques (SYN, stealth, UDP)",
      "Technology stack identification and service/version fingerprinting",
      "FTP, SMTP and SMB enumeration techniques",
      "Email discovery and verification techniques",
      "Vulnerability assessment using automated scanning tools",
      "Reading and scoring vulnerability records with CVE, CVSS and CWE",
      "Using the NIST and NVD vulnerability databases inside an assessment",
      "Building an attack-surface map from reconnaissance data",
      "Documenting reconnaissance findings in a client-ready format"
    ],
    "tools": [
      {
        "name": "Nmap",
        "desc": "Network mapping and port-scanning engine used to discover hosts, services and open ports."
      },
      {
        "name": "OpenVAS",
        "desc": "Open-source vulnerability scanner used to identify and score security weaknesses across a target estate."
      },
      {
        "name": "Maltego",
        "desc": "OSINT and link-analysis platform used to map relationships between people, domains and infrastructure."
      },
      {
        "name": "Netcat",
        "desc": "Networking utility used for port testing, banner grabbing and building lightweight listeners during engagements."
      },
      {
        "name": "Kali Linux",
        "desc": "Debian-based penetration testing distribution preloaded with the industry-standard offensive security toolset."
      }
    ],
    "labs": [
      "Run an OSINT investigation against a lab-provided target domain.",
      "Perform a full port scan and service fingerprint of a segmented lab network using Nmap.",
      "Run an automated vulnerability scan with OpenVAS and triage results by CVSS score.",
      "Enumerate SMB and FTP services against a vulnerable lab server.",
      "Build an attack-surface map and deliver a written reconnaissance findings report."
    ],
    "assessment": {
      "knowledge": "Quiz covering OSINT methodology, scanning technique selection and CVE/CVSS/CWE scoring.",
      "practical": "Students must produce a scan report identifying the open services and vulnerabilities on an assigned lab target, each correctly scored against CVSS."
    },
    "projects": [
      {
        "title": "Reconnaissance & Vulnerability Assessment Report",
        "desc": "OSINT, scanning and enumeration against a lab target, documented and mapped to CVE/CVSS/CWE standards."
      },
      {
        "title": "Attack Surface Mapping Dashboard",
        "desc": "A structured, visual record of a target's exposed assets, services and entry points."
      },
      {
        "title": "Email & Domain Intelligence Brief",
        "desc": "An OSINT-based reconnaissance dossier on a lab-safe target organisation."
      }
    ],
    "outcome": "Students learn to profile targets, map attack surfaces and identify exploitable vulnerabilities using industry-standard scanning methodology.",
    "roles": [
      "SOC Analyst",
      "Vulnerability Assessor",
      "Junior Penetration Tester",
      "Threat Intelligence Analyst"
    ]
  },
  {
    "slug": "module-3-system-hacking-malware-social-engineering",
    "number": 3,
    "title": "System Hacking, Malware & Social Engineering",
    "duration": "3 Weeks",
    "hours": "30 Hrs",
    "hero": "Systems are compromised, malware behaves in the wild, and people remain the softest target in any organisation. This module builds the offensive and defensive skill to handle all three — inside a fully controlled, isolated lab.",
    "who_for": "Students moving from assessment work into active exploitation, malware analysis and human-layer security testing.",
    "relevance": "Privilege escalation, malware triage and social-engineering awareness are core SOC and incident-response competencies — and the most common gap between certified and job-ready candidates.",
    "learn": [
      "Windows system hacking and privilege escalation techniques",
      "Windows login bypass and credential attack techniques",
      "Malware concepts, classification and types — virus, worm, trojan, ransomware, rootkit",
      "Malware creation fundamentals using Kali tools, strictly inside a controlled lab",
      "Packet analysis and network traffic inspection",
      "Server hacking fundamentals and common misconfigurations",
      "Anti-malware software, detection techniques and defensive controls",
      "Social engineering concepts and the attack lifecycle",
      "Types of social engineering — phishing, pretexting, baiting and tailgating",
      "Social media reconnaissance and social-engineering-driven attacks",
      "Endpoint hardening and malware remediation basics",
      "Incident documentation for system-compromise scenarios"
    ],
    "tools": [
      {
        "name": "Kali Linux",
        "desc": "Debian-based penetration testing distribution preloaded with the industry-standard offensive security toolset."
      },
      {
        "name": "Wireshark",
        "desc": "Network protocol analyzer used to capture and inspect live traffic at the packet level."
      },
      {
        "name": "OpenVAS",
        "desc": "Open-source vulnerability scanner used to identify and score security weaknesses across a target estate."
      },
      {
        "name": "Parrot Security",
        "desc": "Security-focused Linux distribution used for penetration testing, forensics and privacy-preserving lab work."
      },
      {
        "name": "Netcat",
        "desc": "Networking utility used for port testing, banner grabbing and building lightweight listeners during engagements."
      }
    ],
    "labs": [
      "Run a privilege-escalation exercise against a vulnerable Windows lab target.",
      "Analyse controlled malware behaviour inside an isolated sandbox.",
      "Capture and analyse traffic to identify a live attack pattern.",
      "Design and run a lab-safe social-engineering/phishing simulation.",
      "Deploy and test anti-malware defensive controls on a compromised host."
    ],
    "assessment": {
      "knowledge": "Quiz covering malware classification, kill-chain stage mapping and social-engineering attack types.",
      "practical": "Students must demonstrate privilege escalation on an assigned target and submit a written incident and defence report."
    },
    "projects": [
      {
        "title": "System & Malware Defence Exercise",
        "desc": "Simulate system hacking and malware behaviour in an isolated lab, then build and test the defences against it."
      },
      {
        "title": "Social Engineering Risk Assessment",
        "desc": "Design and report on a lab-safe phishing simulation, with staff-awareness recommendations."
      },
      {
        "title": "SOC Incident Analysis Simulation",
        "desc": "Analyse a simulated compromise end-to-end and produce a formal incident report."
      }
    ],
    "outcome": "Students learn to compromise, analyse and defend systems against malware and social-engineering attacks, and understand the human layer of cybersecurity.",
    "roles": [
      "SOC Analyst",
      "Incident Response Analyst (Junior)",
      "Security Analyst",
      "Malware Analyst (Junior)"
    ]
  },
  {
    "slug": "module-4-penetration-testing-web-exploitation",
    "number": 4,
    "title": "Penetration Testing & Web Exploitation",
    "duration": "6 Weeks",
    "hours": "60 Hrs",
    "hero": "This is the core of the program. Six weeks of structured, end-to-end penetration testing across networks, web applications, wireless environments and Active Directory — the exact scope of a professional VAPT engagement.",
    "who_for": "Students ready to run full-scope, methodology-driven penetration tests and deliver professional findings reports.",
    "relevance": "Web application and network penetration testing is the single most in-demand offensive security skill in the market, and the core deliverable behind every VAPT and red-team engagement.",
    "learn": [
      "DoS/DDoS concepts and attack techniques",
      "Firewall configuration and wireless encryption standards",
      "Session hijacking concepts and cookie-based attacks",
      "IDS, IPS, firewall and honeypot evasion techniques",
      "Web server and web application attack methodology",
      "SQL Injection — concepts, types and injection tooling",
      "Cross-Site Scripting (XSS) — reflected, stored and DOM-based",
      "The OWASP Top 10 web application vulnerabilities",
      "Active Directory concepts and common AD attack techniques",
      "Wireless network security assessment and WiFi attack techniques",
      "Cloud security concepts and cloud service models (IaaS, PaaS, SaaS)",
      "End-to-end penetration testing methodology and rules of engagement",
      "Professional penetration test reporting standards"
    ],
    "tools": [
      {
        "name": "Burp Suite",
        "desc": "Web application testing proxy used to intercept, manipulate and fuzz HTTP/S traffic during assessments."
      },
      {
        "name": "OWASP ZAP",
        "desc": "Open-source web application scanner used to identify OWASP Top 10 vulnerabilities in target applications."
      },
      {
        "name": "SQLmap",
        "desc": "Automated SQL injection detection and exploitation tool used against database-backed applications."
      },
      {
        "name": "Nikto",
        "desc": "Web server scanner used to identify outdated software, dangerous files and common misconfigurations."
      },
      {
        "name": "Wireshark",
        "desc": "Network protocol analyzer used to capture and inspect live traffic at the packet level."
      },
      {
        "name": "Cain & Abel",
        "desc": "Windows password recovery and network analysis tool used for credential attacks and traffic sniffing."
      },
      {
        "name": "Hydra",
        "desc": "Parallelized login-cracking tool used to test authentication strength across network services."
      }
    ],
    "labs": [
      "Execute a SQL injection attack chain against a vulnerable web application.",
      "Identify and exploit XSS vulnerabilities across an OWASP Top 10 lab set.",
      "Run a wireless network security assessment and document WiFi attack findings.",
      "Simulate an Active Directory attack path inside a lab domain environment.",
      "Run a full network and web application penetration test and deliver a professional report."
    ],
    "assessment": {
      "knowledge": "Quiz covering the OWASP Top 10, Active Directory attack concepts and wireless security fundamentals.",
      "practical": "A full penetration-testing engagement on an assigned lab environment, scored against professional reporting standards."
    },
    "projects": [
      {
        "title": "Web Application Security Audit (OWASP Top 10)",
        "desc": "A full application-layer assessment mapped against the OWASP Top 10, with remediation guidance."
      },
      {
        "title": "Internal Network Penetration Test Report",
        "desc": "An end-to-end internal network pentest, scoped, executed and reported to professional standard."
      },
      {
        "title": "Active Directory Attack Path & Wireless Security Assessment",
        "desc": "A combined AD attack-path analysis and wireless security review with findings and fixes."
      }
    ],
    "outcome": "Students learn to plan and execute end-to-end penetration tests across networks, web applications, wireless networks and Active Directory environments.",
    "roles": [
      "Penetration Tester",
      "VAPT Engineer",
      "Red Team Associate",
      "Web Application Security Analyst"
    ]
  },
  {
    "slug": "module-5-advanced-exploitation-cryptography-mobile-security",
    "number": 5,
    "title": "Advanced Exploitation, Cryptography & Mobile Security",
    "duration": "2 Weeks",
    "hours": "20 Hrs",
    "hero": "Attack surfaces don't stop at the network edge. This module extends offensive testing into IoT, mobile and cryptographic systems — the emerging areas most assessments now have to cover.",
    "who_for": "Students who have completed core penetration testing and are ready to assess IoT, mobile and cryptographic implementations.",
    "relevance": "IoT and mobile assessments are a fast-growing line item in enterprise VAPT scopes, and cryptographic weaknesses remain one of the most commonly missed findings in junior-level testing.",
    "learn": [
      "IoT concepts and IoT-specific attack vectors",
      "Cryptography and encryption fundamentals — symmetric, asymmetric and hashing",
      "Steganography and data-hiding techniques across image, audio and text",
      "Mobile security fundamentals and the mobile threat landscape",
      "Android application security and Android hacking techniques",
      "Password cracking and recovery techniques — dictionary, brute-force and rule-based",
      "Network discovery and host scanning at scale",
      "Encryption key management basics",
      "Common cryptographic attack patterns and weak-implementation risks",
      "Mobile device hardening and secure configuration",
      "IoT device discovery and exposure assessment"
    ],
    "tools": [
      {
        "name": "Angry IP Scanner",
        "desc": "Lightweight IP and port scanner used for rapid host discovery across a network range."
      },
      {
        "name": "John the Ripper",
        "desc": "Password-cracking tool used to test hash strength via dictionary, brute-force and rule-based attacks."
      },
      {
        "name": "Aircrack-ng",
        "desc": "Wireless auditing suite used to assess WiFi encryption strength and test wireless network defences."
      },
      {
        "name": "Hashcat",
        "desc": "GPU-accelerated password recovery tool used for large-scale hash-cracking exercises."
      },
      {
        "name": "Kali Linux",
        "desc": "Debian-based penetration testing distribution preloaded with the industry-standard offensive security toolset."
      }
    ],
    "labs": [
      "Crack a set of password hashes using dictionary and brute-force techniques.",
      "Extract a hidden payload using steganographic analysis.",
      "Assess an Android application for common mobile security weaknesses.",
      "Discover and fingerprint live hosts and IoT devices on a lab network.",
      "Evaluate a wireless network's encryption implementation for cryptographic weaknesses."
    ],
    "assessment": {
      "knowledge": "Quiz covering cryptography fundamentals, the mobile threat landscape and IoT attack surfaces.",
      "practical": "Students must recover credentials from an assigned hash set and document one mobile or IoT vulnerability finding."
    },
    "projects": [
      {
        "title": "Password Security & Cryptographic Weakness Assessment",
        "desc": "Recover and analyse a password set, then report on the cryptographic weaknesses that allowed it."
      },
      {
        "title": "Mobile Application Security Report (Android)",
        "desc": "A structured security review of an Android application with findings and remediation guidance."
      },
      {
        "title": "IoT Device Exposure & Attack Surface Assessment",
        "desc": "Discovery and exposure analysis of IoT devices on a lab network."
      }
    ],
    "outcome": "Students extend their offensive skillset to IoT, mobile, wireless and cryptographic systems, identifying vulnerabilities across emerging attack surfaces.",
    "roles": [
      "Mobile Security Analyst",
      "VAPT Engineer",
      "IoT Security Analyst",
      "Security Consultant"
    ]
  },
  {
    "slug": "module-6-security-operations-cyber-defense",
    "number": 6,
    "title": "AI-Powered Security Operations & Cyber Defense",
    "duration": "2 Weeks",
    "hours": "20 Hrs",
    "hero": "The program closes on the Blue Team side of the discipline — how a modern Security Operations Center runs when AI and machine learning are part of the detection stack. Alert triage, AI-assisted threat detection and executive reporting, built on the same findings you've spent the program learning to produce.",
    "who_for": "Students consolidating offensive skills into defensive and operational capability ahead of SOC-track, threat-detection and AI-security analyst roles.",
    "relevance": "Most cybersecurity hiring in India and globally still flows through Security Operations Centers, and SOC teams increasingly rely on AI/ML-driven monitoring — this module builds the operational and AI-assisted-detection fluency that SOC and incident-response interviews test directly.",
    "learn": [
      "AI and machine learning fundamentals for security use cases",
      "Security Operations Center (SOC) structure, roles and workflows",
      "SIEM fundamentals — log collection, correlation and alerting",
      "AI-powered threat and anomaly detection techniques",
      "Phishing detection and email security using AI-assisted controls",
      "Malware analysis workflows using AI/ML-based techniques",
      "Incident response process — detection, containment, eradication, recovery",
      "Automated incident response and SOC workflow orchestration",
      "Building and executing incident response playbooks",
      "Vulnerability classification and CVSS-based prioritisation",
      "Threat intelligence fundamentals and intelligence-led defence",
      "Adversarial attacks against AI models and securing AI systems",
      "Professional security reporting and executive documentation",
      "Blue Team vs Red Team operational concepts",
      "Building and maintaining a vulnerability prioritisation dashboard"
    ],
    "tools": [
      {
        "name": "AI Threat-Detection Platforms",
        "desc": "Machine-learning-driven monitoring tools used to flag anomalous behaviour, phishing and malware patterns across SOC telemetry."
      },
      {
        "name": "SIEM & Log Platforms",
        "desc": "Centralized log collection and correlation tooling used to detect and triage security events."
      },
      {
        "name": "Wireshark",
        "desc": "Network protocol analyzer used to capture and inspect live traffic at the packet level."
      },
      {
        "name": "OpenVAS",
        "desc": "Open-source vulnerability scanner used to identify and score security weaknesses across a target estate."
      },
      {
        "name": "Nessus",
        "desc": "Enterprise vulnerability scanner used for in-depth assessment and compliance-driven scanning."
      },
      {
        "name": "Netcat",
        "desc": "Networking utility used for port testing, banner grabbing and building lightweight listeners during engagements."
      }
    ],
    "labs": [
      "Triage and investigate alerts inside a simulated SOC/SIEM environment.",
      "Build and test an AI/ML-based workflow that flags phishing emails or anomalous network activity.",
      "Build and execute an incident response playbook against a simulated breach.",
      "Classify and prioritise a batch of vulnerabilities using CVSS scoring.",
      "Configure and tune AI-assisted detection rules to reduce false-positive alert volume.",
      "Produce an executive-level security assessment report from raw findings."
    ],
    "assessment": {
      "knowledge": "Quiz covering SOC workflows, AI-assisted threat detection concepts and CVSS-based prioritisation.",
      "practical": "A full incident-response simulation — including one AI-assisted detection task — from initial alert through to a delivered executive report."
    },
    "projects": [
      {
        "title": "SOC Incident Analysis Simulation",
        "desc": "Investigate a simulated breach end-to-end and produce a formal SOC incident report."
      },
      {
        "title": "AI-Assisted Threat Detection Mini-Project",
        "desc": "Build a mini AI/ML-based workflow that flags phishing emails or anomalous network activity."
      },
      {
        "title": "Vulnerability Prioritisation Dashboard Report",
        "desc": "Classify a vulnerability backlog by CVSS and business impact, and present a remediation roadmap."
      }
    ],
    "outcome": "Students learn to apply structured security-operations practice — including AI-assisted threat detection — to detect, respond to and report on threats within a SOC environment.",
    "roles": [
      "SOC Analyst",
      "AI Security Analyst",
      "Threat Detection Engineer",
      "Incident Response Analyst"
    ]
  }
];

const CAREER_TRACKS = [
  {
    "title": "Security Operations",
    "roles": [
      "SOC Analyst",
      "Security Analyst",
      "Incident Response Analyst",
      "Threat Intelligence Analyst"
    ]
  },
  {
    "title": "Offensive Security",
    "roles": [
      "Penetration Tester",
      "Ethical Hacker",
      "Vulnerability Assessor",
      "Red Team Associate"
    ]
  },
  {
    "title": "Network & Cloud Security",
    "roles": [
      "Network Security Engineer",
      "Cloud Security Engineer",
      "Security Consultant",
      "Security Compliance Analyst"
    ]
  },
  {
    "title": "VAPT & Application Security",
    "roles": [
      "VAPT Engineer",
      "Web Application Security Analyst",
      "Mobile Security Analyst",
      "IoT Security Analyst"
    ]
  },
  {
    "title": "AI-Driven Security",
    "roles": [
      "AI Security Analyst",
      "Threat Detection Engineer",
      "Security Automation Engineer",
      "SOC Automation Specialist"
    ]
  }
];

const CERTIFICATIONS = [
  "CEH — Certified Ethical Hacker",
  "CompTIA Security+",
  "CompTIA PenTest+",
  "OSCP",
  "ISC2 Certified in Cybersecurity (CC)",
  "AWS Certified Security – Specialty",
  "Microsoft Security Operations Analyst"
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
    "value": "180 Hrs",
    "label": "Hands-On Curriculum"
  }
];

const WHY_COURSE = [
  "Industry-aligned curriculum built around real tools, workflows and standards used by security teams today",
  "100% hands-on delivery — every module closes with a lab exercise or a real project, not slides",
  "A fully operational penetration-testing lab, built in Module 1 and used for the rest of the program",
  "Structured path from networking fundamentals through advanced exploitation, cryptography and security operations",
  "Curriculum mapped toward globally recognised certification pathways (CEH, Security+, PenTest+, OSCP and more)",
  "A minimum of five portfolio projects across the program, documented to professional reporting standards",
  "Real-time internship exposure across penetration testing, SOC operations and cloud security",
  "Dedicated placement support — resume reviews, mock interviews and a hiring-partner network"
];

const TOOL_LIBRARY = {
  "Kali Linux": "Debian-based penetration testing distribution preloaded with the industry-standard offensive security toolset.",
  "Parrot Security": "Security-focused Linux distribution used for penetration testing, forensics and privacy-preserving lab work.",
  "VirtualBox": "Virtualization platform used to build and isolate the penetration-testing lab environment.",
  "Linux/Windows CLI": "Command-line fluency on both operating systems for reconnaissance, administration and exploitation tasks.",
  "Nmap": "Network mapping and port-scanning engine used to discover hosts, services and open ports.",
  "OpenVAS": "Open-source vulnerability scanner used to identify and score security weaknesses across a target estate.",
  "Nessus": "Enterprise vulnerability scanner used for in-depth assessment and compliance-driven scanning.",
  "Maltego": "OSINT and link-analysis platform used to map relationships between people, domains and infrastructure.",
  "Netcat": "Networking utility used for port testing, banner grabbing and building lightweight listeners during engagements.",
  "Wireshark": "Network protocol analyzer used to capture and inspect live traffic at the packet level.",
  "Burp Suite": "Web application testing proxy used to intercept, manipulate and fuzz HTTP/S traffic during assessments.",
  "OWASP ZAP": "Open-source web application scanner used to identify OWASP Top 10 vulnerabilities in target applications.",
  "SQLmap": "Automated SQL injection detection and exploitation tool used against database-backed applications.",
  "Nikto": "Web server scanner used to identify outdated software, dangerous files and common misconfigurations.",
  "Cain & Abel": "Windows password recovery and network analysis tool used for credential attacks and traffic sniffing.",
  "Hydra": "Parallelized login-cracking tool used to test authentication strength across network services.",
  "John the Ripper": "Password-cracking tool used to test hash strength via dictionary, brute-force and rule-based attacks.",
  "Hashcat": "GPU-accelerated password recovery tool used for large-scale hash-cracking exercises.",
  "Aircrack-ng": "Wireless auditing suite used to assess WiFi encryption strength and test wireless network defences.",
  "Angry IP Scanner": "Lightweight IP and port scanner used for rapid host discovery across a network range.",
  "SIEM & Log Platforms": "Centralized log collection and correlation tooling used to detect and triage security events.",
  "AI Threat-Detection Platforms": "Machine-learning-driven monitoring tools used to flag anomalous behaviour, phishing and malware patterns across SOC telemetry."
};

// Page-level copy that differs per course (headings, hero text, salary bands, etc.) — kept
// separate from the structural MODULES/CAREER_TRACKS data so CourseHomePage/CourseModulePage stay
// identical across every course.
const COPY = {
  "metaTitle": "Best Cyber Security Academy in Hyderabad | Skill IT Education",
  "metaDesc": "The Best Cyber Security Academy in Hyderabad — a 5-month Cyber Security Certification Program: ethical hacking, penetration testing, SOC training and internship.",
  "breadcrumbProgramName": "Cybersecurity Program",
  "courseShortName": "Cyber Security",
  "ogImageFile": "cybersecurity-program-diagram.png",
  "heroVisual": "image",
  "heroImageFile": "cybersecurity-program-diagram.png",
  "heroImageAlt": "Advanced Cyber Security Certification Program skill map — ethical hacking, penetration testing, vulnerability assessment, cloud security, digital forensics, Python for security, Linux administration, firewalls and SIEM, network security",
  "heroImageWidth": 900,
  "heroImageHeight": 877,
  "brochureFile": "Skill-IT-Education-Cyber-Security-Brochure.pdf",
  "preselectedCourse": null,
  "durationChip": "INDUSTRY-ALIGNED CYBERSECURITY TRAINING",
  "heroTitleHtml": "Advanced Cyber Security<br>Certification Program",
  "heroKicker": "Cyber Security Training in Hyderabad",
  "heroLede": "A five-month program that takes you from networking and ethical hacking basics to penetration testing, cryptography and security operations. It has six hands-on modules, a three-month project phase and a two-month real-time internship, and it is aimed at SOC, VAPT and offensive security roles.",
  "heroStats": [
    {
      "label": "Course Duration",
      "value": "5 Months"
    },
    {
      "label": "Project-Based Learning",
      "value": "3 Months"
    },
    {
      "label": "Real-Time Internship",
      "value": "2 Months"
    },
    {
      "label": "Course Fees",
      "value": "₹45K / ₹55K",
      "note": "Online / Offline"
    }
  ],
  "heroBadges": [
    "Industry-Aligned",
    "180+ Hrs Hands-On"
  ],
  "heroQuote": {
    "text": "Security is a process, not a product.",
    "cite": "— Bruce Schneier, Security Technologist"
  },
  "roadmapEyebrow": "Cyber Security Course Curriculum",
  "roadmapTitle": "Six Modules. One Complete Ethical Hacking & SOC Skillset.",
  "roadmapSubtitle": "Every module builds directly on the last — from networking fundamentals to full security-operations capability.",
  "whyEyebrow": "Why This Cyber Security Course",
  "whyTitle": "A Cyber Security Certification Course Built for Real SOC & VAPT Jobs",
  "timelineEyebrow": "Course Duration & Learning Path",
  "timelineTitle": "Your Cyber Security Training Timeline, Module by Module",
  "timelineSubtitle": "180 hours of core curriculum, followed by a 3-month project phase and a 2-month real-time internship.",
  "timelinePhases": [
    {
      "node": "P",
      "tag": "Project Phase",
      "title": "Project-Based Learning",
      "duration": "3 Months"
    },
    {
      "node": "I",
      "tag": "Final Phase",
      "title": "Real-Time Internship",
      "duration": "2 Months"
    }
  ],
  "toolsEyebrow": "Ethical Hacking Tools",
  "toolsTitle": "Kali Linux, Burp Suite, Nmap & the Tools You'll Master",
  "toolsSubtitle": "The complete toolset used across the program — from foundational networking to advanced exploitation and security operations.",
  "moduleToolsSubtitle": "Hands-on time with the same tools used in professional security operations and penetration-testing engagements.",
  "moduleLabsSubtitle": "Enterprise and SOC-style lab scenarios, run inside your isolated penetration-testing environment.",
  "moduleCtaHeading": "Continue building your cybersecurity portfolio",
  "projectsEyebrow": "Penetration Testing Projects",
  "projectsTitle": "Real Penetration Testing Projects for Your Cyber Security Portfolio",
  "projectsSubtitle": "Every module is reinforced with hands-on work — a minimum of five projects across the program, each added to your portfolio and resume.",
  "featuredProjects": [
    {
      "tag": "Capstone",
      "title": "End-to-End Security Assessment",
      "desc": "Plan, execute and report a complete penetration test — covering reconnaissance, exploitation, proof-of-concept documentation, remediation guidance and retesting."
    },
    {
      "tag": "Included",
      "title": "Reconnaissance & Vulnerability Assessment Report",
      "desc": "OSINT, scanning and enumeration against a lab target, mapped to CVE/CVSS/CWE standards."
    },
    {
      "tag": "Included",
      "title": "Internal Network Penetration Test Report",
      "desc": "A full-scope internal network pentest, executed and reported to professional standard."
    }
  ],
  "outcomesEyebrow": "What You'll Learn",
  "outcomesTitle": "What You'll Be Able to Do After This Cyber Security Certification",
  "outcomesList": [
    "Understand networking, operating systems and ethical-hacking methodology",
    "Perform reconnaissance, scanning and OSINT-based intelligence gathering",
    "Identify and classify vulnerabilities using CVE, CVSS, CWE and NIST standards",
    "Execute system hacking and analyse real-world malware behaviour",
    "Recognise and defend against social-engineering attacks",
    "Plan and run full-scope penetration tests on networks and web applications",
    "Exploit and secure wireless networks and Active Directory environments",
    "Assess cloud security posture and common cloud attack vectors",
    "Apply cryptography, steganography and data-hiding techniques",
    "Test mobile and IoT systems for security weaknesses",
    "Support structured incident response and SOC workflows",
    "Write professional, client-ready security assessment reports"
  ],
  "careersEyebrow": "Cyber Security Career Paths",
  "careersTitle": "Cyber Security Jobs: SOC Analyst, Penetration Tester & More",
  "salaryEyebrow": "Salary Positioning",
  "salaryTitle": "Cyber Security Salary in India & Globally — What to Expect",
  "salarySubtitle": "Figures are broad, indicative ranges for entry-to-mid-level roles and vary significantly by company, location, specialization and experience. They are not a guarantee of outcome.",
  "salaryIndia": {
    "range": "₹3.5L – ₹9L / year",
    "desc": "Typical entry-to-mid range for SOC Analyst, Security Analyst and Junior Penetration Tester roles, rising with certifications and project experience."
  },
  "salaryGlobal": {
    "range": "$55K – $95K / year",
    "desc": "Typical entry-to-mid range for equivalent security-analyst and penetration-testing roles in mature international markets."
  },
  "certEyebrow": "Certification Readiness",
  "certTitle": "Cyber Security Certifications This Course Prepares You For",
  "certSubtitle": "The curriculum is structured to help prepare learners for the following external certifications, including CEH, CompTIA Security+ and OSCP.",
  "finalCtaTitle": "Start your cybersecurity career with a structured, hands-on program",
  "finalCtaSubtitle": "5 months of training, 3 months of projects and a 2-month internship."
};

// routeBase is this course's mount point inside the unified app's router (e.g. "/cyber-security"),
// distinct from the old standalone repos' own base_path used only for their own SEO canonical URLs.
const routeBase = "/cyber-security";

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

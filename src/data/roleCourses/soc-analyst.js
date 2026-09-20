// Role courses for the SOC Analyst programme (parent data: src/data/socAnalyst.js).
// Every topic, tool, practice item and certification is referenced by index or exact name from the parent.

export default [
  // ---------------------------------------------------------------------------
  // 1. SOC Analyst
  // ---------------------------------------------------------------------------
  {
    slug: 'soc-analyst',
    title: 'SOC Analyst',
    metaTitle: `SOC Analyst Course in Hyderabad | Skill IT Education`,
    metaDescription: `SOC analyst course in Hyderabad: learn alert triage, SIEM monitoring on QRadar and Splunk, and escalation, with hands-on labs, projects and an internship.`,
    lede: `This role course arranges the SOC Analyst programme around one working shift in the queue: reading the alert list, checking what is real, writing it up and passing it on. You start with how a SOC is organised, then work the SIEM, classify attacks, escalate incidents and revisit the network basics behind every ticket.`,
    skills: [
      'Alert triage',
      'IBM QRadar offenses',
      'Splunk searches',
      'Log reading',
      'Reputation checks',
      'Escalation to L2',
      'Phishing analysis',
      'Incident write-ups',
    ],
    overview: [
      `A SOC analyst is the person who works through the alerts a company's security tools raise and decides which ones matter. At L1 you triage the queue: read the alert, check the logs, look up the IP address or URL, and either close it with a note or pass it up. At L2 you take the harder cases, join several alerts together and decide whether an incident has started. It is careful, repeatable work, and it rewards people who stay calm and write clearly.`,
      `Week to week, the work follows the shift. You take over from the previous team, read the handover notes, then spend most of the hours in the SIEM working through offenses and dashboards. Some alerts turn out to be false positives, and you record why so the rule can be tuned later. Others are phishing mails, odd logins or malware on a laptop, and those get an investigation, a ticket and a clear escalation. Before you leave, you write your own handover for the next shift.`,
      `SOC analysts work wherever a company runs systems it cannot afford to lose: IT services firms, banks, hospitals, e-commerce companies and managed security providers that watch many clients at once. Many SOCs run around the clock, so the role often involves rotating shifts. It matters because the analyst is frequently the first person to notice an attack, and the speed and quality of that first decision shapes everything that follows.`,
    ],
    dayToDay: [
      `Take over the queue from the previous shift and read the handover notes carefully.`,
      `Open QRadar or Splunk and work through new offenses in order of severity.`,
      `Check suspicious IP addresses and URLs against reputation sources before deciding what they are.`,
      `Read Windows, firewall and proxy logs to follow what a user or machine actually did.`,
      `Tell false positives from real alerts, and note why so the rule can be tuned.`,
      `Analyse reported phishing emails and decide whether to block, warn users or escalate.`,
      `Escalate confirmed incidents to L2 or L3 with a clear ticket and the evidence attached.`,
      `Write the end-of-shift handover so the next team knows what is still open.`,
    ],
    outcomes: [
      `Explain how a SOC is tiered and where an L1 or L2 analyst sits in the escalation path.`,
      `Triage a live alert queue in IBM QRadar, separating false positives from real offenses.`,
      `Read Windows, Linux and security device logs and correlate them into one timeline.`,
      `Classify phishing, malware, password attacks and web attacks from the evidence in an alert.`,
      `Tune correlation rules and reference sets to cut repeat false positives.`,
      `Write a clear escalation ticket that an L2 analyst can act on without asking questions.`,
      `Follow an incident from identification to recovery using a playbook.`,
      `Use the command line, Wireshark and reputation checks to answer quick questions about a host.`,
    ],
    whoFor: [
      {
        who: 'Final-year student',
        text: `You are still studying and have some networking or programming basics. This path starts with how a SOC works and moves straight into SIEM work, so you leave with triage exercises and incident write-ups to show.`,
      },
      {
        who: 'IT support engineer',
        text: `You already handle tickets, user accounts and Windows or Linux problems. Working a queue is familiar to you, and you add SIEM skills, attack knowledge and structured escalation on top of that habit.`,
      },
      {
        who: 'Non-IT graduate',
        text: `You have no technical background yet. The programme begins with networking, operating systems and the command line at a steady pace before any alert work, so plan extra hours on those basics.`,
      },
      {
        who: 'Working professional',
        text: `You work in support, banking operations or testing and want to move into security. Following a process and writing things down is what the queue rewards, so you learn the tools and the attacker vocabulary.`,
      },
    ],
    path: [
      {
        module: 3,
        focus: `Start with where you sit in the team. This module covers what L1 and L2 own, how alerts move up the tiers, and how NOC and SOC work differ. Concentrate on triage, escalation paths and the monitoring essentials you use from day one.`,
        topics: [1, 2, 3, 6, 7],
        tools: ['SIEM', 'SOAR', 'EDR / XDR', 'Firewalls'],
        practice: { type: 'lab', index: 3 },
      },
      {
        module: 4,
        focus: `This is the queue itself. Learn to open a QRadar offense, read the events behind it, judge whether it is real and tune the rule when it is not. Spend most of your practice time on triage and log types.`,
        topics: [1, 2, 3, 4, 5],
        tools: ['IBM QRadar', 'Splunk', 'Firewall Logs', 'Proxy Logs'],
        practice: { type: 'lab', index: 2 },
      },
      {
        module: 2,
        focus: `Alerts come with names: phishing, malware, brute force, injection. This module teaches you to recognise each from the evidence and to say which defence applies. Focus on phishing and malware first, since they are common in real queues.`,
        topics: [0, 4, 5, 6, 7],
        tools: ['Wireshark', 'CLI'],
        practice: { type: 'lab', index: 2 },
      },
      {
        module: 5,
        focus: `When an alert becomes an incident, L2 takes over the response. Learn the handling lifecycle, the difference between playbooks and runbooks and how to map an attack to ATT&CK. Concentrate on containment decisions and clean documentation.`,
        topics: [0, 1, 2, 3, 5],
        tools: ['MITRE ATT&CK', 'Kill Chain', 'IOC / IOA', 'CyberChef'],
        practice: { type: 'project', index: 0 },
      },
      {
        module: 1,
        focus: `The programme teaches this module first, and it sits last here because it is the toolkit you lean on in every shift. Keep coming back to OSI layers, firewall and IDS placement, Windows and Linux basics, the command line and reputation checks.`,
        topics: [2, 4, 5, 6, 7],
        tools: ['Wireshark', 'CLI', 'Linux / Ubuntu', 'Windows Server'],
        practice: { type: 'lab', index: 4 },
      },
    ],
    careerPath: [
      {
        title: 'SOC Analyst (L1)',
        text: `Most people start here, working the queue in a shift pattern. Related entry titles in the programme include Alert Triage Specialist, Security Monitoring Analyst and IT Security Trainee, all built on the same triage skills.`,
      },
      {
        title: 'SOC Analyst (L2)',
        text: `After time on the queue you take the harder cases, run investigations and join alerts into incidents. The SIEM, log analysis and incident response skills from the later modules are what this step relies on.`,
      },
      {
        title: 'Specialise from L2',
        text: `From L2, many analysts move toward Incident Response Analyst, Junior Threat Hunter, Threat Intelligence Analyst or SIEM / Security Engineer, depending on which part of the work they enjoy most.`,
      },
      {
        title: 'SOC Team Lead and beyond',
        text: `Longer term, the programme's career tracks point to SOC Team Lead, Security Architect and, much later, CISO. These steps need years of experience and further study beyond this course.`,
      },
    ],
    certifications: [0, 1, 2, 5],
    faqs: [
      {
        q: 'Do I need coding to become a SOC analyst?',
        a: `No. The programme's labs use SIEM platforms, logs and the command line rather than programming. You will spend most of your time reading alerts carefully, understanding networks and writing clear notes. Curiosity and patience matter more than code when you start.`,
      },
      {
        q: 'What is the difference between an L1 and an L2 SOC analyst?',
        a: `An L1 analyst watches the queue, triages alerts and escalates real ones. An L2 analyst takes those escalations, investigates across logs and systems and decides whether an incident has started. The SOC module walks a sample alert from Tier 1 to Tier 2 to Tier 3.`,
      },
      {
        q: 'Will I work on real SIEM tools during the course?',
        a: `Yes. The SIEM module has you work in IBM QRadar and Splunk: onboarding log sources, building dashboards, investigating offenses and tuning rules. The labs use live SIEM offense data, and the programme also includes a real-time industry internship.`,
      },
      {
        q: 'Can I become a SOC analyst with no IT background?',
        a: `It is possible, but plan for extra effort. The programme opens with networking, Windows, Linux and command-line basics before any security work, so you are not expected to arrive knowing them. Steady practice on the labs matters more than your degree subject.`,
      },
      {
        q: 'Do SOC analysts have to work night shifts?',
        a: `Often, yes. Many SOCs monitor around the clock, so shifts including nights and weekends are common, especially at L1. The SOC module explains how teams are structured and staffed, so you know what to ask about shift patterns before you accept an offer.`,
      },
    ],
    blog: [
      'what-a-soc-analyst-does-during-a-shift',
      'soc-analyst-l1-l2-l3-levels-and-career-growth',
      'what-does-a-soc-analyst-do-on-a-daily-basis',
      'difference-between-soc-l1-l2-and-l3',
      'how-to-prepare-for-a-soc-analyst-interview',
      'how-to-get-your-first-soc-analyst-job-as-a-fresher',
    ],
    honestNote: `The programme covers the L1 queue work and the start of L2 investigation. Deep L3 work, such as malware reverse engineering, is outside this syllabus and comes with experience on the job.`,
  },

  // ---------------------------------------------------------------------------
  // 2. Incident Response Analyst (SOC angle)
  // ---------------------------------------------------------------------------
  {
    slug: 'incident-response-analyst',
    title: 'Incident Response Analyst',
    metaTitle: `SOC Incident Response Course in Hyderabad | Skill IT Education`,
    metaDescription: `Incident response analyst course in Hyderabad, from a SOC angle: learn escalation, containment, playbooks and SIEM evidence through hands-on labs.`,
    lede: `This role course arranges the SOC Analyst programme around the analyst who takes over when an alert becomes an incident. You start with the response lifecycle and playbooks, then pull evidence from the SIEM, learn how the attacks work, and finish with how a SOC hands work between tiers.`,
    skills: [
      'Response lifecycle',
      'Playbooks and runbooks',
      'Containment steps',
      'Kill Chain mapping',
      'MITRE ATT&CK',
      'Email header analysis',
      'Sysinternals checks',
      'Incident documentation',
    ],
    overview: [
      `In a SOC, an incident response analyst picks up where the alert queue ends. An L1 analyst has decided something is real, and now you work out what happened, how far it has spread and what to do about it. You follow a defined process: identify, contain, remove the cause and recover, while keeping notes that another person could read later. The job is less about spotting every alert and more about making sound decisions under time pressure.`,
      `Week to week, you work escalated cases handed up from the monitoring team. You pull the related events from the SIEM, check hosts with tools such as Sysinternals, decode suspicious data in CyberChef and read email headers to trace a phishing message. You follow the team's playbooks, choose containment steps with the system owner and record a timeline. Quieter days go on improving playbooks and reviewing how the last incident was handled.`,
      `Incident response analysts sit inside SOC teams at IT services companies, banks, hospitals, retailers and managed security providers. Some are part of the L2 or L3 group, and some are called in when an incident is declared. The role matters because how quickly and cleanly an incident is contained decides how much damage a company suffers, and the written record you leave helps the whole team respond better next time.`,
    ],
    dayToDay: [
      `Receive an escalated alert and confirm it really is an incident before declaring one.`,
      `Pull related events from the SIEM to build a timeline of what happened.`,
      `Follow the team's playbook, and note where the real case differs from the plan.`,
      `Recommend containment steps such as isolating a host or disabling an account.`,
      `Check a suspect Windows machine with Sysinternals for odd processes and autoruns.`,
      `Trace a phishing message by reading its email headers and decoding data in CyberChef.`,
      `Map the attack to the Kill Chain and MITRE ATT&CK so others see the pattern.`,
      `Write the incident report and suggest one change that would help next time.`,
    ],
    outcomes: [
      `Run an incident from identification through containment, eradication and recovery using a structured lifecycle.`,
      `Write and follow a playbook for a specific attack, and explain how it differs from a runbook.`,
      `Map a simulated attack to the Cyber Kill Chain and MITRE ATT&CK stage by stage.`,
      `Separate indicators of compromise from indicators of attack and use each in an investigation.`,
      `Analyse email headers and run basic malware checks with CyberChef and Sysinternals.`,
      `Investigate escalated offenses in a SIEM and gather the evidence an incident needs.`,
      `Explain the handoffs from L1 to L3 and what each tier expects to see in a ticket.`,
      `Document an incident clearly enough for another analyst to pick it up mid-shift.`,
    ],
    whoFor: [
      {
        who: 'Final-year student',
        text: `You want a response-focused start. Expect to learn the SIEM and attack basics first, then the lifecycle, and finish with the incident simulation as a portfolio piece that shows how you work through a case.`,
      },
      {
        who: 'IT support engineer',
        text: `You already restore services and calm upset users. Incident response uses the same instincts, with added evidence handling, containment choices and documentation, and the SIEM work fills the gap between support tickets and security incidents.`,
      },
      {
        who: 'Working L1 analyst',
        text: `You triage alerts already and want to own what happens after escalation. The lifecycle, playbook and ATT&CK topics give structure to what you have seen, and the labs let you run a full case from start to finish.`,
      },
      {
        who: 'Non-IT graduate',
        text: `The programme still opens with networking, Windows and Linux basics, which this path leans on even though it does not list that module. Give those weeks real effort, because containment decisions depend on knowing how hosts and networks behave.`,
      },
    ],
    path: [
      {
        module: 5,
        focus: `This is the heart of the role. Learn the handling lifecycle, containment, eradication and recovery, and how playbooks differ from runbooks. Spend time on Kill Chain and ATT&CK mapping, and practise email header and malware checks by hand.`,
        topics: [0, 1, 2, 3, 5, 7],
        tools: ['MITRE ATT&CK', 'Kill Chain', 'CyberChef', 'Sysinternals', 'IOC / IOA'],
        practice: { type: 'lab', index: 0 },
      },
      {
        module: 4,
        focus: `Incidents are proved with logs. This module shows how to pull events from a SIEM, read Windows, Linux and device logs and follow malicious IP traffic. Concentrate on log types and the offense investigation steps you will use as evidence.`,
        topics: [1, 2, 3, 4, 6],
        tools: ['IBM QRadar', 'Splunk', 'Win Collect', 'Firewall Logs', 'Proxy Logs'],
        practice: { type: 'lab', index: 2 },
      },
      {
        module: 2,
        focus: `To contain an attack you must understand how it works. Study the five phases of hacking, malware types, phishing and password attacks so that each alert points to a likely next step by the attacker.`,
        topics: [3, 4, 5, 6, 7],
        tools: ['Wireshark', 'Nmap', 'CLI'],
        practice: { type: 'lab', index: 1 },
      },
      {
        module: 3,
        focus: `Incident work crosses teams. This module covers roles, tiers and the escalation path, so you know who hands you a case and who approves your actions. Focus on SOC functions, structure and the tools around the SIEM, such as SOAR and EDR.`,
        topics: [1, 2, 3, 4, 7],
        tools: ['SOAR', 'EDR / XDR', 'SIEM', 'Firewalls'],
        practice: { type: 'lab', index: 3 },
      },
    ],
    careerPath: [
      {
        title: 'SOC Analyst (L1) or trainee',
        text: `Most people reach incident response through the queue first. Entry titles such as SOC Analyst (L1) or Incident Response Analyst (Trainee), as listed for the final module, give you early cases and the habit of good notes.`,
      },
      {
        title: 'SOC Analyst (L2)',
        text: `As an L2 analyst you take escalations and run investigations, which is the closest step to full incident handling. It builds the judgement on containment and evidence that the response role depends on.`,
      },
      {
        title: 'Incident Response Analyst',
        text: `In the programme's Incident & Threat Response track, this role owns declared incidents, playbooks and post-incident reviews, and works closely with threat intelligence and hunting colleagues.`,
      },
      {
        title: 'Longer-term paths',
        text: `With experience, paths include SOC Team Lead and Security Architect. Incident experience is also a strong base for moving toward Threat Intelligence Analyst or threat hunting work.`,
      },
    ],
    certifications: [6, 2, 0],
    faqs: [
      {
        q: 'What does an incident response analyst do in a SOC?',
        a: `They take over when an alert is confirmed as a real incident. They work out what happened, decide on containment, guide removal and recovery, and document the whole case. In a SOC this usually means working escalations from the L1 team alongside the SIEM data.`,
      },
      {
        q: 'Is incident response the same as SOC analyst work?',
        a: `They overlap but are not the same. A SOC analyst spends most time on alert triage and monitoring, while an incident response analyst focuses on confirmed incidents and the response process. Many people start as SOC analysts and move toward response as they gain experience.`,
      },
      {
        q: 'Do I need to work as an L1 analyst before incident response?',
        a: `Most people do, because response work depends on knowing what normal alerts and logs look like. The programme teaches both sides, and its final module lists Incident Response Analyst (Trainee) as a target role, but early experience on the queue helps a great deal.`,
      },
      {
        q: 'Which tools will I use for incident response in this course?',
        a: `You work with IBM QRadar and Splunk for evidence, plus MITRE ATT&CK, the Kill Chain, CyberChef and Sysinternals during the response module. Wireshark and the command line support the investigation, and SOAR and EDR are covered as part of the SOC tool set.`,
      },
      {
        q: 'Can a fresher become an incident response analyst?',
        a: `Trainee roles exist, and the programme prepares you for them through a full incident simulation and playbook lab. Realistically, many freshers begin on monitoring or L1 work first. Treat the trainee route as possible and the queue route as the safer starting point.`,
      },
    ],
    blog: [
      'what-is-incident-response-and-how-it-is-done',
      'what-a-soc-analyst-does-during-a-shift',
      'soc-analyst-l1-l2-l3-levels-and-career-growth',
      'tools-and-technologies-used-by-soc-analysts',
      'how-to-prepare-for-a-soc-analyst-interview',
    ],
    honestNote: `The programme teaches the response lifecycle, playbooks, basic email and malware analysis and a full incident simulation. Deep forensics, memory analysis and legal evidence handling are outside its syllabus and are learned on the job.`,
  },

  // ---------------------------------------------------------------------------
  // 3. Threat Hunter
  // ---------------------------------------------------------------------------
  {
    slug: 'threat-hunter',
    title: 'Threat Hunter',
    metaTitle: `Threat Hunter Course in Hyderabad | Skill IT Education`,
    metaDescription: `Threat hunter course in Hyderabad: learn hunting methods, MITRE ATT&CK, SIEM log searching and IOC vs IOA, with hands-on labs and a hunting project.`,
    lede: `This role course arranges the SOC Analyst programme around proactive hunting, the search for attackers that alerts have not caught. You begin with hunting methods and ATT&CK, then learn to search SIEM logs, study how attackers behave, and build the Windows, Linux and network knowledge that every hunt depends on.`,
    skills: [
      'Threat hunting methods',
      'MITRE ATT&CK',
      'IOC and IOA',
      'Splunk searching',
      'Log analysis',
      'Threat intel feeds',
      'Windows investigation',
      'Wireshark packet checks',
    ],
    overview: [
      `A threat hunter looks for attackers who got past the alerts. Instead of waiting for a tool to fire, you start from a question, such as whether a known attacker technique could be happening in this network, and search the logs for signs of it. At entry level you work from an existing plan: a technique from MITRE ATT&CK, a set of indicators, a data source to search. What you find either answers the question or shows where detection is weak.`,
      `Week to week, you choose a technique or a fresh piece of threat intelligence, decide which logs could show it, and run searches in the SIEM. Most hunts find nothing dangerous, and that result is still recorded. When a hunt does turn up something odd, you check the host, the user and the network traffic, then hand it to incident response. Good hunters also turn what they learn into a suggestion for a new alert rule.`,
      `Threat hunters work in SOCs at larger IT services firms, banks, healthcare organisations and managed security providers, usually as part of an L2 or L3 group, and entry titles include Junior Threat Hunter. The work matters because attackers who blend in can stay unnoticed for a long time, and a hunt is often how a company finds out. Many people reach it after some time on the SOC queue.`,
    ],
    dayToDay: [
      `Pick an ATT&CK technique or a threat report and write down what to look for.`,
      `Decide which logs would show that technique and check they are in the SIEM.`,
      `Run searches in Splunk or QRadar and narrow thousands of events to a handful.`,
      `Compare indicators of compromise with indicators of attack to widen or focus a hunt.`,
      `Inspect a suspicious Windows host for odd processes and start-up entries.`,
      `Check unusual traffic in a Wireshark capture against what the network normally does.`,
      `Record every hunt, including those that found nothing, so the team can repeat it.`,
      `Suggest a new alert rule when a hunt shows a gap in detection.`,
    ],
    outcomes: [
      `Explain the difference between reactive alert handling and proactive threat hunting.`,
      `Plan a hunt around a MITRE ATT&CK technique and a matching data source.`,
      `Search SIEM logs for signs of an attack technique and narrow the results.`,
      `Use threat intelligence feeds and indicators to direct a hunt.`,
      `Separate indicators of compromise from indicators of attack when reading evidence.`,
      `Investigate a suspicious Windows host with Sysinternals and decode odd data in CyberChef.`,
      `Document a hunt with its question, method, findings and follow-up actions.`,
      `Hand a confirmed finding to incident response with the evidence attached.`,
    ],
    whoFor: [
      {
        who: 'Final-year student',
        text: `You like puzzles and reading data. Hunting is rarely a first job, so plan to build SOC queue skills through the early modules and treat the hunting project as your portfolio piece.`,
      },
      {
        who: 'IT support engineer',
        text: `You know how healthy Windows machines, users and networks behave, which is what a hunter compares against. Add SIEM searching and attacker techniques, and you can start spotting what looks wrong.`,
      },
      {
        who: 'Non-IT graduate',
        text: `The foundation module comes first for everyone, and hunting leans on it because you must know what normal looks like. Expect a longer road, and use a habit of careful, patient reading to your advantage.`,
      },
      {
        who: 'Working SOC analyst',
        text: `You already see alerts and wonder what they miss. This path gives you a method, ATT&CK to organise it and a hunting project that shows you can go beyond the queue.`,
      },
    ],
    path: [
      {
        module: 5,
        focus: `Hunting lives here. Learn hunting methods, the Kill Chain and ATT&CK and the CTI lifecycle, then practise separating IOCs from IOAs. Put most of your effort into the hunting project, since it is the closest match to the daily work.`,
        topics: [3, 4, 5, 6, 7],
        tools: ['MITRE ATT&CK', 'IOC / IOA', 'Kill Chain', 'Sysinternals', 'CyberChef'],
        practice: { type: 'project', index: 1 },
      },
      {
        module: 4,
        focus: `You can only hunt in data you can search. Learn what each log type contains, how sources reach the SIEM and how to read events in Splunk and QRadar. Focus on log types, log source integration and reference sets.`,
        topics: [0, 2, 3, 5, 6],
        tools: ['Splunk', 'IBM QRadar', 'Win Collect', 'Firewall Logs', 'Proxy Logs'],
        practice: { type: 'lab', index: 2 },
      },
      {
        module: 2,
        focus: `Hunting questions come from knowing how attackers work. Study the five phases of hacking, malware behaviour, phishing and password attacks so you can predict what traces each step would leave in the logs.`,
        topics: [3, 4, 5, 6, 7],
        tools: ['Wireshark', 'Nmap', 'CLI'],
        practice: { type: 'lab', index: 1 },
      },
      {
        module: 1,
        focus: `Knowing what is normal makes odd things stand out. Revisit networking, Windows and Linux administration and the command line so you can judge whether a process, connection or login is expected. Reputation checks help you follow up leads quickly.`,
        topics: [2, 3, 4, 5, 6, 7],
        tools: ['Wireshark', 'Windows Server', 'Linux / Ubuntu', 'CLI'],
        practice: { type: 'lab', index: 2 },
      },
    ],
    careerPath: [
      {
        title: 'SOC Analyst (L1)',
        text: `Hunting is normally not a first job. Start on the queue as a SOC Analyst (L1) or Security Monitoring Analyst, where you see what real alerts and false alarms look like.`,
      },
      {
        title: 'SOC Analyst (L2)',
        text: `At L2 you investigate across logs and hosts, the same skills a hunt uses. Take part in any hunting exercises your team runs, and keep a record of the ones you do.`,
      },
      {
        title: 'Junior Threat Hunter',
        text: `The programme's final module lists Junior Threat Hunter as a role it prepares you for, within the Incident & Threat Response track. Expect to work from plans set by more senior hunters at first.`,
      },
      {
        title: 'Senior paths',
        text: `Longer term, hunters can move toward Threat Intelligence Analyst, Incident Response Analyst or SOC Team Lead roles, depending on whether they prefer research, response or managing people.`,
      },
    ],
    certifications: [2, 4, 6],
    faqs: [
      {
        q: 'Can a fresher become a threat hunter?',
        a: `Junior roles exist and the programme prepares you for one, but most people first spend time on the SOC queue. Hunting needs a sense of what normal looks like, and that comes from watching real alerts and logs. Use the hunting project to show your method.`,
      },
      {
        q: 'How is threat hunting different from normal SOC monitoring?',
        a: `Monitoring reacts to alerts that tools raise. Hunting starts with a question and goes looking for attackers the alerts missed. The SOC module lists hunting as one of its key functions, and the final module teaches methods, ATT&CK and a hunting project.`,
      },
      {
        q: 'Does the course teach MITRE ATT&CK for hunting?',
        a: `Yes. The incident response and hunting module covers the Cyber Kill Chain and MITRE ATT&CK, IOC versus IOA and hunting methods. The hunting project uses ATT&CK and threat intelligence feeds to search for hidden threats, so you practise applying it rather than only reading about it.`,
      },
      {
        q: 'Do threat hunters need to write code?',
        a: `Not at the level this course teaches. The hunting work here uses SIEM searches, ATT&CK and threat intelligence, and programming is not part of the syllabus. Scripting can be useful later, so you may choose to learn it separately as you progress.`,
      },
      {
        q: 'What tools does a junior threat hunter use?',
        a: `In this programme you use Splunk and IBM QRadar to search logs, MITRE ATT&CK and the Kill Chain to plan hunts, and Sysinternals, CyberChef and Wireshark to inspect hosts, data and traffic. Google Dorks are covered for open-source research on exposed information.`,
      },
    ],
    blog: [
      'how-to-become-a-soc-analyst',
      'tools-and-technologies-used-by-soc-analysts',
      'what-is-a-siem-and-which-siem-tools-to-learn',
      'skills-required-to-become-a-soc-analyst',
      'soc-analyst-l1-l2-l3-levels-and-career-growth',
      'career-opportunities-after-a-soc-analyst-course',
    ],
    honestNote: `The programme teaches hunting methods, ATT&CK, IOC and IOA and a hunting project at a junior level. Deep malware reverse engineering and writing your own detection code are outside its syllabus.`,
  },

  // ---------------------------------------------------------------------------
  // 4. SIEM Engineer
  // ---------------------------------------------------------------------------
  {
    slug: 'siem-engineer',
    title: 'SIEM Engineer',
    metaTitle: `SIEM Engineer Course in Hyderabad | Skill IT Education`,
    metaDescription: `SIEM engineer course in Hyderabad: learn IBM QRadar and Splunk, log source onboarding, correlation rules, tuning and reporting through hands-on labs.`,
    lede: `This role course arranges the SOC Analyst programme around building and looking after the SIEM. You start with QRadar and Splunk, then learn the systems and network devices that send logs, how a SOC uses its tools, and how attack frameworks turn into detection rules.`,
    skills: [
      'IBM QRadar',
      'Splunk searching',
      'Log source onboarding',
      'Event and flow collectors',
      'Correlation rules',
      'Rule tuning',
      'Reference sets',
      'Security reporting',
    ],
    overview: [
      `A SIEM engineer looks after the platform that SOC analysts work in. You connect log sources such as Windows servers, Linux hosts, firewalls and proxies, check that events arrive in a usable form, and build the dashboards, rules and reports that turn raw logs into alerts. At trainee level the role is hands-on and practical: onboard a source, test a rule, fix the noise. Analysts depend on your work every shift.`,
      `Week to week, requests come from two directions. The SOC asks for a new use case or complains that a rule is too noisy, and managers ask for a report on log coverage or security events. You add a source, configure collectors, write or tune a correlation rule, adjust reference sets and confirm with the analysts that the change helped. Between requests you check that sources are still reporting, since a silent source is a blind spot.`,
      `SIEM engineers work in security teams at IT services companies, banks, insurers, retailers and managed security providers, and in central engineering groups that support several SOC teams. The role matters because a SIEM is only as good as the logs and rules behind it. A well-tuned platform lets analysts spend their time on real threats, and it gives auditors and managers the reports they ask for.`,
    ],
    dayToDay: [
      `Onboard a new Windows, Linux or firewall log source and confirm events arrive correctly.`,
      `Configure event and flow collectors and check that they keep receiving data.`,
      `Write or adjust a correlation rule for a new use case requested by analysts.`,
      `Tune a noisy rule using reference sets so false positives fall without hiding real threats.`,
      `Build a QRadar dashboard that shows analysts what needs attention first.`,
      `Generate governance and security reports for managers and auditors from SIEM data.`,
      `Check for log sources that have gone silent and chase the owners to fix them.`,
      `Test a rule against a simulated attack scenario before it goes live.`,
    ],
    outcomes: [
      `Explain SIEM architecture, including event and flow collectors and how data moves through them.`,
      `Onboard log sources into IBM QRadar and confirm the events arrive in a usable form.`,
      `Identify the log types produced by Windows, Linux and common security devices.`,
      `Create a correlation rule for a use case and tune it to reduce false positives.`,
      `Build real-time dashboards and reports that analysts and managers can act on.`,
      `Use reference sets to manage lists of addresses, users or indicators inside rules.`,
      `Run searches and monitoring tasks in Splunk as well as in QRadar.`,
      `Explain how IPS, WAF, firewall and proxy logs support different detection use cases.`,
    ],
    whoFor: [
      {
        who: 'Final-year student',
        text: `You are comfortable with networking or operating systems and enjoy configuring things more than watching queues. This path puts the SIEM first, so the SIEM Monitoring Lab becomes your main portfolio piece.`,
      },
      {
        who: 'IT support engineer',
        text: `You have installed servers, chased logs and fixed user problems. That is close to a SIEM engineer's day, and you add correlation, tuning and detection thinking on top of it.`,
      },
      {
        who: 'System or network administrator',
        text: `You already run servers or networks. Sending your own infrastructure's logs into a SIEM is a natural next step, and this path teaches the rules, tuning and reporting that follow.`,
      },
      {
        who: 'Non-IT graduate',
        text: `Logs come from Windows, Linux and network devices, so the foundation module is essential for you. Take your time with it, since every SIEM task rests on knowing where events come from.`,
      },
    ],
    path: [
      {
        module: 4,
        focus: `This is the core of the role. Cover architecture and collectors, log types, correlation rules, reference sets and log source integration. Spend most of your time on onboarding, tuning and reporting, because that is what a SIEM engineer is asked to do.`,
        topics: [0, 3, 4, 5, 6, 7],
        tools: ['IBM QRadar', 'Splunk', 'Win Collect', 'Firewall Logs', 'IPS / WAF'],
        practice: { type: 'project', index: 0 },
      },
      {
        module: 1,
        focus: `Log sources are real machines and devices. Learn how networks, IP addressing and subnets fit together, where firewalls and IDS/IPS sit, and how to administer Windows and Linux, so you know what each source can tell the SIEM.`,
        topics: [2, 3, 4, 5, 6],
        tools: ['Windows Server', 'Linux / Ubuntu', 'Wireshark', 'VirtualBox', 'CLI'],
        practice: { type: 'lab', index: 0 },
      },
      {
        module: 3,
        focus: `A SIEM sits among other tools. See how SOAR, EDR, NIDS, DLP and IAM relate to it, and how SOC teams work day to day, so your platform serves the analysts who use it. Focus on monitoring essentials and the modern SOC model.`,
        topics: [1, 3, 4, 5, 7],
        tools: ['SIEM', 'SOAR', 'EDR / XDR', 'NIDS / NIPS', 'DLP'],
        practice: { type: 'lab', index: 4 },
      },
      {
        module: 5,
        focus: `Good rules start from attacker behaviour. Use the Kill Chain and ATT&CK to decide what to detect, and learn IOC and IOA so that reference sets and rules track the right things. Playbooks show what analysts do once a rule fires.`,
        topics: [2, 3, 4, 5],
        tools: ['MITRE ATT&CK', 'Kill Chain', 'IOC / IOA'],
        practice: { type: 'lab', index: 2 },
      },
    ],
    careerPath: [
      {
        title: 'Log Analysis Engineer or trainee',
        text: `The SIEM module lists SIEM / Security Engineer (Trainee) and Log Analysis Engineer as target roles. These are hands-on positions where you onboard sources, maintain dashboards and learn how a live platform behaves.`,
      },
      {
        title: 'SOC Analyst (L1/L2)',
        text: `Many engineers spend time as analysts first, which teaches you what the SOC really needs from the platform. The Monitoring & Detection track also lists Security Monitoring Analyst as a related starting point.`,
      },
      {
        title: 'SIEM / Security Engineer',
        text: `In the Security Engineering track, the role owns the platform, its rules and its coverage. Related titles in the same track include Vulnerability Analyst and Network Security Engineer.`,
      },
      {
        title: 'Security Architect',
        text: `Long term, engineers with wide experience can move toward Security Architect roles, which design how tools, logs and controls fit together. That step needs years of experience and further study beyond this course.`,
      },
    ],
    certifications: [5, 4, 2],
    faqs: [
      {
        q: 'What does a SIEM engineer do?',
        a: `A SIEM engineer builds and maintains the platform that SOC analysts use. That means onboarding log sources, configuring collectors, writing and tuning correlation rules, building dashboards and producing reports, so that the alerts analysts see are accurate and useful.`,
      },
      {
        q: 'Which SIEM tools does this course teach?',
        a: `The SIEM module focuses on IBM QRadar and Splunk. You work with event and flow collectors, dashboards, offenses, reference sets and rule tuning, and you read logs from Windows, Linux, firewalls, IPS, WAF and proxies as the data sources.`,
      },
      {
        q: 'Is a SIEM engineer different from a SOC analyst?',
        a: `Yes. A SOC analyst uses the SIEM to investigate alerts. A SIEM engineer maintains the SIEM itself, including its log sources and rules. The two work together, and the programme teaches both sides, which is why analysts often move toward engineering later.`,
      },
      {
        q: 'Do I need programming to work as a SIEM engineer?',
        a: `Not to start. The programme's SIEM work uses platform interfaces, rules, reference sets and logs rather than programming. Scripting can help with larger environments later, but it is not part of this syllabus, so treat it as something to learn on the job.`,
      },
      {
        q: 'Can freshers become SIEM engineers?',
        a: `Trainee roles exist and the programme lists SIEM / Security Engineer (Trainee) as a target. Employers often want some log or systems experience, so the SIEM Monitoring Lab and any internship work are useful evidence of what you can already do.`,
      },
    ],
    blog: [
      'what-is-a-siem-and-which-siem-tools-to-learn',
      'what-is-siem-and-why-is-it-important-for-soc-analysts',
      'tools-and-technologies-used-by-soc-analysts',
      'skills-required-to-become-a-soc-analyst',
      'career-opportunities-after-a-soc-analyst-course',
    ],
    honestNote: `The programme prepares you for the trainee end of this role: onboarding sources, tuning rules, dashboards and reports on QRadar and Splunk. Large-scale deployment design, custom parser writing and platform upgrades are outside the syllabus and come with experience.`,
  },

  // ---------------------------------------------------------------------------
  // 5. Security Monitoring Analyst
  // ---------------------------------------------------------------------------
  {
    slug: 'security-monitoring-analyst',
    title: 'Security Monitoring Analyst',
    metaTitle: `Security Monitoring Course in Hyderabad | Skill IT Education`,
    metaDescription: `Security monitoring analyst course in Hyderabad: learn dashboards, log review, firewall and proxy logs, NIDS alerts and triage through hands-on labs.`,
    lede: `This role course arranges the SOC Analyst programme around continuous monitoring: watching dashboards and log streams, deciding what deserves attention and reporting what you see. You start with the SIEM and the team model, then the network behind the logs and the attacks behind the alerts.`,
    skills: [
      'Continuous monitoring',
      'SIEM dashboards',
      'Firewall log review',
      'Proxy log review',
      'IPS and WAF alerts',
      'Alert triage',
      'Wireshark basics',
      'Network basics',
    ],
    overview: [
      `A security monitoring analyst keeps watch. You follow dashboards, alert streams and device logs across the company's network and endpoints, and you decide what needs a closer look. The role sits at the front of the SOC: you see the first signs of something wrong, gather enough context to describe it and pass it to the right person. It suits people who stay focused for long stretches and notice small changes.`,
      `Week to week, you work in a shift rhythm. You check the health of the monitoring tools, scan dashboards for changes in firewall, proxy and intrusion prevention activity, and work through the alerts that appear. Each alert gets a quick check of the IP address or URL, a note and either a closure or an escalation. You also produce simple reports on what was seen, and flag when a data source stops sending logs.`,
      `Monitoring analysts work in SOCs and NOCs at IT services companies, banks, telecom and retail firms, and at managed security providers that watch many clients through one console. The role matters because attacks often show up first as small changes in traffic or logs. A monitoring team that notices early, and describes clearly what it saw, gives the rest of the security team a head start.`,
    ],
    dayToDay: [
      `Check that monitoring tools and log sources are healthy at the start of a shift.`,
      `Watch SIEM dashboards for unusual spikes in blocked traffic, logins or web activity.`,
      `Review firewall, proxy and IPS or WAF logs when an alert points at them.`,
      `Look up suspicious IP addresses and URLs and record what the reputation checks show.`,
      `Decide whether an alert is a false positive and log the reason clearly.`,
      `Escalate real alerts to L2 with the evidence and a short, plain summary.`,
      `Tell NOC issues from SOC issues, and route each to the correct team.`,
      `Produce simple monitoring reports for team leads at the end of a shift.`,
    ],
    outcomes: [
      `Describe the essentials of security monitoring and how a SOC differs from a NOC.`,
      `Build and read real-time SIEM dashboards that show where attention is needed.`,
      `Read firewall, proxy, IPS and WAF logs and spot patterns of blocked or odd traffic.`,
      `Triage alerts by separating false positives from real offenses, with a recorded reason.`,
      `Run reputation checks on suspicious IP addresses and URLs and record the result.`,
      `Explain where firewalls, IDS and IPS sit in a network and what each can see.`,
      `Capture and inspect traffic in Wireshark to confirm what an alert describes.`,
      `Recognise common attack types such as phishing, malware and password attacks in alert data.`,
    ],
    whoFor: [
      {
        who: 'Final-year student',
        text: `Monitoring is a sensible first step, and it rewards careful attention more than experience. This path gives you the SIEM and log skills to be useful in your first weeks on a shift.`,
      },
      {
        who: 'IT support engineer',
        text: `You already watch ticket queues and know what a healthy server looks like. Monitoring adds security logs, alert triage and reporting, and your habit of clear notes will help.`,
      },
      {
        who: 'Non-IT graduate',
        text: `Start with the programme's networking and operating system basics, since you cannot read a firewall log without them. The path then moves steadily from tools to dashboards to attacks.`,
      },
      {
        who: 'Working NOC engineer',
        text: `You watch network health today. The SOC module explains how the security side differs, and the SIEM module lets you carry your monitoring habits over to security alerts.`,
      },
    ],
    path: [
      {
        module: 4,
        focus: `Monitoring means living in the SIEM. Learn how events and flows are collected, how dashboards are built and how firewall, proxy, IPS and WAF logs look. Concentrate on dashboards, log types and telling false positives from real alerts.`,
        topics: [0, 1, 3, 4, 7],
        tools: ['IBM QRadar', 'Firewall Logs', 'Proxy Logs', 'IPS / WAF', 'Splunk'],
        practice: { type: 'lab', index: 1 },
      },
      {
        module: 3,
        focus: `See where monitoring sits in the SOC. This module covers monitoring essentials, the split between NOC and SOC, and the tools that feed the console, such as NIDS, EDR and firewalls. Focus on the essentials and the tier structure.`,
        topics: [1, 2, 3, 6, 7],
        tools: ['SIEM', 'NIDS / NIPS', 'EDR / XDR', 'Firewalls', 'SOAR'],
        practice: { type: 'lab', index: 2 },
      },
      {
        module: 1,
        focus: `Logs describe network traffic, so you need to read the network. Learn addressing, subnetting, where firewalls and IDS/IPS sit and how to check a suspicious IP or URL. Use Wireshark to see what an alert describes at packet level.`,
        topics: [1, 2, 3, 4, 7],
        tools: ['Wireshark', 'CLI', 'Nmap'],
        practice: { type: 'lab', index: 2 },
      },
      {
        module: 2,
        focus: `Recognising the pattern behind an alert speeds every decision. Focus on phishing, malware, password attacks, MITM and DoS, and what each looks like in traffic and logs, so your notes name the likely attack.`,
        topics: [0, 4, 5, 6, 7],
        tools: ['Wireshark', 'Nmap', 'CLI'],
        practice: { type: 'project', index: 0 },
      },
    ],
    careerPath: [
      {
        title: 'Security Monitoring Analyst',
        text: `The SIEM and SOC modules list Security Monitoring Analyst and Alert Triage Specialist as target roles. In the Monitoring & Detection track, these are the front line of the SOC.`,
      },
      {
        title: 'SOC Analyst (L1) and (L2)',
        text: `Monitoring experience leads naturally to SOC Analyst (L1) and then (L2), where you investigate alerts rather than only flag them. The programme's SOC Operations track lists both, along with Security Analyst.`,
      },
      {
        title: 'Log Analysis or SIEM engineering',
        text: `If you enjoy the tooling more than the queue, the same track leads to Log Analysis Engineer, and the Security Engineering track to SIEM / Security Engineer, where you look after the platform itself.`,
      },
      {
        title: 'SOC Team Lead',
        text: `With years of experience, the Advanced Career Paths track points to SOC Team Lead, which adds scheduling, coaching and reporting to the monitoring skills you built earlier.`,
      },
    ],
    certifications: [3, 1, 0],
    faqs: [
      {
        q: 'What is the difference between a security monitoring analyst and a SOC analyst?',
        a: `A monitoring analyst focuses on watching dashboards and alert streams, doing first checks and escalating. A SOC analyst, especially at L2, goes deeper into investigation and incident handling. The titles overlap at entry level, and the programme prepares you for both.`,
      },
      {
        q: 'Is security monitoring a suitable first job for freshers?',
        a: `Yes, it is a common entry point, and the programme lists Security Monitoring Analyst as a target role in its SOC and SIEM modules. The work is structured, so you learn from real alerts, and it builds the base for L2 and specialist roles.`,
      },
      {
        q: 'What is the difference between a NOC and a SOC?',
        a: `A NOC keeps networks and services running, watching for outages and performance problems. A SOC watches for security threats. The SOC module covers how the two teams differ, and a monitoring analyst needs to know which issues to route to which team.`,
      },
      {
        q: 'Which logs does a security monitoring analyst read?',
        a: `In this programme you read Windows and Linux logs plus firewall, proxy and IPS or WAF logs, as they arrive in QRadar and Splunk. You learn what each log type shows, and how correlation rules turn several events into one alert.`,
      },
      {
        q: 'Do I need certifications to work as a security monitoring analyst?',
        a: `Employers vary, and many care about hands-on skills too. The programme is structured to help you prepare for certifications such as ISC2 CC, CompTIA Security+ and EC-Council CSA, which are useful additions to your resume but not a substitute for practical labs.`,
      },
    ],
    blog: [
      'what-a-soc-analyst-does-during-a-shift',
      'what-does-a-soc-analyst-do-on-a-daily-basis',
      'difference-between-soc-analyst-and-cybersecurity-analyst',
      'what-is-siem-and-why-is-it-important-for-soc-analysts',
      'is-soc-analyst-a-good-career-for-freshers',
    ],
    honestNote: `The programme teaches security monitoring through SIEM, log and alert work. Network performance monitoring tools used in a NOC are outside its syllabus.`,
  },

  // ---------------------------------------------------------------------------
  // 6. Threat Intelligence Analyst
  // ---------------------------------------------------------------------------
  {
    slug: 'threat-intelligence-analyst',
    title: 'Threat Intelligence Analyst',
    metaTitle: `Threat Intelligence Course in Hyderabad | Skill IT Education`,
    metaDescription: `Threat intelligence analyst course in Hyderabad: learn the CTI lifecycle, IOC vs IOA, Kill Chain and MITRE ATT&CK, with labs and a threat hunting project.`,
    lede: `This role course arranges the SOC Analyst programme around threat intelligence, the work of turning information about attackers into something a SOC can use. You start with how attacks work, then the CTI lifecycle and frameworks, the indicators that feed detection, and how the SOC acts on intelligence.`,
    skills: [
      'CTI lifecycle',
      'IOC and IOA',
      'MITRE ATT&CK',
      'Cyber Kill Chain',
      'Open-source research',
      'Phishing analysis',
      'Malicious IP checks',
      'Email header analysis',
    ],
    overview: [
      `A threat intelligence analyst collects, checks and explains information about the people and techniques that attack organisations. In a SOC, the output is practical: a list of indicators to watch for, a note on how an attacker group works, a warning about a phishing campaign. You answer the question of who might attack us, how, and what to look for, and then make sure the monitoring team can act on the answer.`,
      `Week to week, you read threat reports and feeds, pick out what applies to your organisation, and turn it into indicators and short briefings. You check suspicious IP addresses, domains and email headers, map behaviour to MITRE ATT&CK and the Kill Chain, and pass useful indicators to the SIEM team. Follow-up matters too: you learn from incidents and hunts which intelligence was useful, and adjust what you collect.`,
      `Threat intelligence analysts work in SOCs and security teams at banks, IT services companies, healthcare and retail organisations, and at managed security providers. Some teams have a dedicated intelligence group, while at smaller ones an experienced analyst does it alongside other work. It matters because attackers often reuse techniques, and knowing them in advance lets a SOC detect and contain an attack sooner.`,
    ],
    dayToDay: [
      `Read new threat reports and pick out what applies to your organisation.`,
      `Extract indicators of compromise from a report and check them for accuracy.`,
      `Look up suspicious IP addresses, domains and URLs and record what you find.`,
      `Map an attacker's behaviour to MITRE ATT&CK techniques and Kill Chain stages.`,
      `Read email headers and phishing content to see how a campaign is run.`,
      `Send useful indicators to the SIEM team so they can go into reference sets.`,
      `Use open-source search techniques to find exposed information about your own company.`,
      `Write a short briefing that a SOC analyst can act on in minutes.`,
    ],
    outcomes: [
      `Explain the stages of the cyber threat intelligence lifecycle and what each one produces.`,
      `Tell indicators of compromise from indicators of attack and explain when each is useful.`,
      `Map an attack to the Cyber Kill Chain and MITRE ATT&CK with evidence for each stage.`,
      `Use open-source search techniques, including Google Dorks, to find exposed information.`,
      `Analyse phishing emails and headers to trace where a message really came from.`,
      `Analyse malicious IP communication in a SIEM and record what it suggests about the attacker.`,
      `Feed indicators into SIEM reference sets so that detection improves.`,
      `Write a clear intelligence note that helps hunters and analysts act.`,
    ],
    whoFor: [
      {
        who: 'Final-year student',
        text: `You like reading, researching and connecting facts, which suits intelligence work. Expect to build SOC basics first: this path starts with how attacks work before it turns to intelligence itself.`,
      },
      {
        who: 'IT support engineer',
        text: `You already research odd problems and explain them to non-technical users. Add attacker knowledge, indicator handling and MITRE ATT&CK, and you can turn that habit into useful intelligence notes.`,
      },
      {
        who: 'Non-IT graduate',
        text: `Writers, researchers and analysts from other fields bring useful habits. The programme still opens with networking and operating system basics for everyone, and you need them to read indicators sensibly.`,
      },
      {
        who: 'Working SOC analyst',
        text: `You see the same indicators in alerts again and again. This path shows how to look upstream, work out where indicators come from and turn what you see into shared intelligence.`,
      },
    ],
    path: [
      {
        module: 2,
        focus: `Intelligence starts with knowing how attacks work. Study threats, vulnerabilities and risk, the five phases of hacking, malware, phishing and password attacks, so a report about a campaign makes sense and you can judge which parts matter.`,
        topics: [0, 3, 4, 5, 6],
        tools: ['Wireshark', 'Nmap'],
        practice: { type: 'lab', index: 2 },
      },
      {
        module: 5,
        focus: `This is the centre of the role. Work through the CTI lifecycle, IOC versus IOA, the Kill Chain and ATT&CK, and practise open-source research and email header analysis. Use the hunting project to see how intelligence directs a search.`,
        topics: [3, 4, 5, 6, 7],
        tools: ['MITRE ATT&CK', 'IOC / IOA', 'Kill Chain', 'Google Dorks', 'CyberChef'],
        practice: { type: 'project', index: 1 },
      },
      {
        module: 4,
        focus: `Intelligence has value only when the SIEM can use it. Learn reference sets and use-case creation, malicious IP and phishing analysis and log source integration, so indicators you find become detections that analysts see.`,
        topics: [0, 2, 3, 5, 6],
        tools: ['IBM QRadar', 'Splunk', 'Firewall Logs', 'Proxy Logs'],
        practice: { type: 'lab', index: 2 },
      },
      {
        module: 3,
        focus: `Understand who uses your work. This module shows SOC functions, roles and the tools around the SIEM, so you can write intelligence for L1 analysts, hunters and responders in the form each of them needs.`,
        topics: [0, 1, 3, 4, 7],
        tools: ['SIEM', 'SOAR', 'EDR / XDR'],
        practice: { type: 'lab', index: 3 },
      },
    ],
    careerPath: [
      {
        title: 'SOC Analyst (L1) or Junior Security Analyst',
        text: `Intelligence roles usually build on time in the SOC. Starting as SOC Analyst (L1) or Junior Security Analyst lets you see how alerts, indicators and real attacks connect before you specialise.`,
      },
      {
        title: 'SOC Analyst (L2)',
        text: `At L2 you investigate and enrich alerts with outside information, which is close to intelligence work. It is also where many analysts discover whether they prefer research or response.`,
      },
      {
        title: 'Threat Intelligence Analyst (Junior)',
        text: `The final module lists this title as a target role, within the Incident & Threat Response track. You collect and check intelligence, and pass it to the SOC as indicators and short notes.`,
      },
      {
        title: 'Longer-term paths',
        text: `Over time, intelligence analysts can move toward Junior Threat Hunter or Incident Response Analyst work, or to SOC Team Lead and Security Architect. Those steps depend on experience and further study.`,
      },
    ],
    certifications: [2, 0, 1],
    faqs: [
      {
        q: 'What does a threat intelligence analyst do?',
        a: `They gather and check information about attackers, their techniques and their tools, and turn it into something the SOC can use, such as indicators to watch for or a note on a phishing campaign. The aim is to help the team detect and contain attacks sooner.`,
      },
      {
        q: 'Can a fresher become a threat intelligence analyst?',
        a: `Junior roles exist, and the programme lists Threat Intelligence Analyst (Junior) as a target. Most people first spend time on the SOC queue, where they see real indicators. Your project work on hunting and phishing analysis helps show what you can do.`,
      },
      {
        q: 'What is the difference between IOC and IOA?',
        a: `An indicator of compromise is evidence that something bad has already happened, such as a known malicious address. An indicator of attack points to attacker behaviour in progress. The response and hunting module covers both, and you practise using each to guide investigations.`,
      },
      {
        q: 'How is threat intelligence different from threat hunting?',
        a: `Intelligence produces knowledge about attackers, such as their techniques and indicators. Hunting uses that knowledge to search the network for signs of them. The two work closely together, and this programme teaches both in the same module, with a hunting project as practice.`,
      },
      {
        q: 'Which tools does a threat intelligence analyst use in this course?',
        a: `You work with MITRE ATT&CK, the Kill Chain and IOC and IOA concepts, plus CyberChef for decoding data and Google Dorks for open-source research. In the SIEM module, QRadar and Splunk show how indicators become reference sets and detections.`,
      },
    ],
    blog: [
      'what-is-incident-response-and-how-it-is-done',
      'career-opportunities-after-a-soc-analyst-course',
      'skills-required-to-become-a-soc-analyst',
      'how-to-become-a-soc-analyst-in-india',
      'soc-analyst-l1-l2-l3-levels-and-career-growth',
    ],
    honestNote: `The programme teaches the intelligence lifecycle, indicators, ATT&CK and open-source research at a junior level. Commercial intelligence platforms and dark web research are outside its syllabus.`,
  },
];

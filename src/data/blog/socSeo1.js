export default [
  // ---------------------------------------------------------------------------
  // POST 1
  // ---------------------------------------------------------------------------
  {
    slug: `what-is-a-soc-analyst-and-what-does-a-soc-analyst-do`,
    question: `What is a SOC Analyst and what does a SOC Analyst do?`,
    metaTitle: `What Is a SOC Analyst? Role and Duties | Skill IT Education`,
    metaDescription: `A SOC analyst watches a company's systems for cyber attacks, triages alerts and escalates real threats. See the full role, duties and who can do it.`,
    published: `2026-09-20`,
    lede: `A SOC analyst is a cyber security professional who works in a Security Operations Center, the team that watches a company's systems around the clock. The analyst monitors security alerts, decides which are real threats and which are false alarms, investigates the real ones using logs and a SIEM, then escalates or contains them and records what happened.`,
    blocks: [
      {
        kind: `text`,
        heading: `What a SOC analyst is, in plain words`,
        paras: [
          `A SOC analyst is a security professional who works inside a Security Operations Center, usually shortened to SOC. The SOC is the team, the room and the set of tools that keep watching a company's computers, networks, user accounts and cloud services, day and night. The analyst is the person who looks at what those tools flag and decides whether something is really wrong.`,
          `So what does a SOC analyst do? Four things come up again and again. They monitor alerts from tools such as a SIEM. They triage, which means sorting real problems from false alarms. They investigate the real ones by reading logs, checking IP addresses and following what a user or machine did. And they escalate or respond, then write down what happened.`,
          `The honest limits are worth knowing early. A SOC analyst does not usually break into systems, write malware or design a company's whole security strategy. Entry-level work is careful, repetitive and often shift based. Titles also vary, so SOC Analyst L1, Security Monitoring Analyst and Alert Triage Specialist can describe very similar jobs.`,
        ],
      },
      {
        kind: `steps`,
        heading: `The core duties of a SOC analyst, in the order the work flows`,
        intro: `A SOC exists because prevention never catches everything. A stolen password or a convincing phishing email will sometimes get past a firewall, and the SOC's job is to shorten the gap between something going wrong and someone acting on it.`,
        steps: [
          {
            title: `Learn what the company cannot afford to lose`,
            text: `A strange event on the payroll server deserves more attention than the same event on a spare test machine, so knowing which systems and accounts matter is part of the job.`,
          },
          {
            title: `Watch the alert queue and the live dashboards`,
            text: `Security tools send alerts into a queue, and dashboards show unusual spikes, such as many failed logins or blocked connections.`,
          },
          {
            title: `Sort each alert into real threat or false alarm`,
            text: `Most alerts are harmless, for example a scheduled backup that looks like a data transfer. The analyst checks the source, user, machine and evidence, then closes it or moves it forward.`,
          },
          {
            title: `Investigate what actually happened`,
            text: `For a real threat, the analyst searches logs across several systems, builds a short timeline and answers what was touched, by whom, and whether it is still going on.`,
          },
          {
            title: `Escalate or contain, following the playbook`,
            text: `Written playbooks say who to call and which actions are allowed. Front-line analysts usually escalate with evidence, while senior staff make bigger calls such as isolating a machine.`,
          },
          {
            title: `Write the record and help improve the rules`,
            text: `Every decision goes into a ticket, and noisy detection rules are flagged for tuning so tomorrow's queue is cleaner than today's.`,
          },
        ],
      },
      {
        kind: `cards`,
        heading: `Who else sits in a Security Operations Center`,
        intro: `The analyst is one member of a team that combines people, process and technology. These are the people.`,
        cards: [
          {
            title: `The front-line analyst who watches the queue`,
            text: `Often called Level 1. Monitors alerts, closes false alarms and escalates the rest with notes. Most freshers start here.`,
          },
          {
            title: `The investigator who takes escalated cases`,
            text: `Often Level 2. Digs deeper into suspicious activity, correlates several log sources and starts containment.`,
          },
          {
            title: `The hunter who looks for what alerts missed`,
            text: `Often Level 3 or a threat hunter. Forms a theory about attacker behaviour, searches for it and turns findings into better detections.`,
          },
          {
            title: `The SOC manager who runs people and process`,
            text: `Plans shifts, keeps playbooks current and reports to the business.`,
          },
          {
            title: `The engineers and intelligence staff behind the scenes`,
            text: `SIEM engineers keep tools and log sources healthy, and threat intelligence staff explain which attackers matter to this company.`,
          },
        ],
      },
      {
        kind: `whom`,
        heading: `Who ends up working as a SOC analyst`,
        intro: `Nobody arrives with the same background. These are the starting points we meet most.`,
        people: [
          {
            who: `Final-year graduate who likes solving puzzles`,
            text: `You have time to build networking, Linux and SIEM skills before hiring season, and entry SOC roles are designed for people still learning.`,
          },
          {
            who: `Helpdesk engineer tired of resetting passwords`,
            text: `You already know how users, laptops and tickets behave. Security logs and a SIEM move you from fixing problems to investigating them.`,
          },
          {
            who: `Science or commerce graduate with a taste for detective work`,
            text: `The first month is slower because networks and operating systems come first. Curiosity and patience count for more than your degree.`,
          },
          {
            who: `System administrator or developer who wants a security role`,
            text: `You understand servers and code. The new part is thinking like an attacker and writing clear notes for other people.`,
          },
        ],
      },
      {
        kind: `list`,
        heading: `What you need to know to do the SOC analyst job`,
        intro: `You do not need everything on day one, but this is the ground the role covers.`,
        items: [
          `How networks carry data, including IP addresses, ports, DNS and what firewalls and routers do`,
          `Windows and Linux basics, especially where each keeps its logs, and the command line`,
          `How phishing, malware, password attacks and web application attacks work`,
          `How to read logs from Windows, Linux, firewalls and proxies, and what normal looks like`,
          `How to use a SIEM such as IBM QRadar or Splunk to search and investigate an alert`,
          `The incident response lifecycle, the Cyber Kill Chain and MITRE ATT&CK as shared vocabulary`,
          `How to write a ticket note another analyst can act on at three in the morning`,
          `Patience for shift work and a habit of checking facts before deciding`,
        ],
      },
      {
        kind: `list`,
        heading: `What a SOC analyst is not`,
        intro: `Many people confuse the role with its neighbours.`,
        items: [
          `Not a penetration tester. A penetration tester attacks systems with permission to find weaknesses. A SOC analyst defends and watches for real attackers.`,
          `Not a network operations engineer. A network operations centre keeps services running, while a SOC keeps them safe.`,
          `Not only an incident responder. Responders lead the handling of confirmed major incidents, while analysts find and triage the events that reveal them.`,
          `Not a security engineer. Engineers build and maintain tools such as the SIEM, and analysts use them on the front line.`,
          `Not the same as every cyber security analyst title. Some employers use that title for policy, audit or risk work, so compare listings by duties.`,
        ],
      },
      {
        kind: `text`,
        heading: `Where SOC analysts work and what the job pays`,
        paras: [
          `SOC analysts work in the in-house security teams of banks, hospitals, e-commerce firms and product companies, in managed security service providers that watch many clients from one centre, in IT services companies, and in the India centres of global businesses. Providers often cover clients in other time zones, so ask about the shift pattern before you accept an offer.`,
          `On pay, Skill IT publishes two indicative figures only. For India, the typical entry-to-mid range for SOC Analyst (L1/L2), Security Monitoring Analyst and Junior Threat Hunter roles is roughly ₹3L to ₹9L a year, rising with certifications and shift experience. Globally, equivalent SOC Analyst and Incident Response roles in mature international markets sit roughly at $50K to $95K a year. These are broad ranges that vary by company, city, specialisation, shifts and experience, and they are not a promise. We do not publish figures for a fresher, a level or a city, so check recent job listings, talk to people in the role and compare the full cost to company on any offer, including shift allowance.`,
        ],
      },
      {
        kind: `cards`,
        heading: `How Skill IT Education prepares you for the SOC analyst role`,
        intro: `The SOC Analyst programme at our Madhapur centre in Hyderabad runs for five months and follows the duties above. It offers preparation and support, and hiring decisions stay with the employer.`,
        cards: [
          {
            title: `Five modules that follow the SOC analyst's work`,
            text: `Three months of structured learning with 190 hours of core curriculum move from IT, networking and operating systems to the threat landscape, life inside a SOC, SIEM monitoring, and incident response with threat hunting.`,
          },
          {
            title: `Live SIEM labs on IBM QRadar and Splunk`,
            text: `You onboard log sources, build dashboards and investigate offenses on platforms analysts actually use.`,
          },
          {
            title: `Documented SOC projects for your portfolio`,
            text: `At least five projects, including the SOC Operating Model Brief, the SIEM Monitoring Lab and the Incident Response Simulation, are written up to reporting standards.`,
          },
          {
            title: `A two-month internship near live SOC monitoring`,
            text: `The real-time industry internship gives exposure to live monitoring, triage and incident response.`,
          },
          {
            title: `Profile building and placement assistance for SOC roles`,
            text: `Resume, GitHub and LinkedIn help, mock interviews on triage scenarios and access to our hiring-partner network. We assist with the search, and offers remain the employer's decision.`,
          },
        ],
      },
      {
        kind: `faq`,
        heading: `Quick answers about the SOC analyst role`,
        intro: `Short answers to what people search most about this job.`,
        faqs: [
          {
            q: `What does SOC stand for in cyber security?`,
            a: `SOC stands for Security Operations Center, sometimes written Security Operations Centre. It is the team, process and technology that monitor an organisation's systems for security threats around the clock, investigate suspicious activity and coordinate the response.`,
          },
          {
            q: `Does a SOC analyst hack into systems?`,
            a: `No. A SOC analyst defends. They study how attackers behave so they can spot the signs in logs and alerts, but they do not attack company systems. Breaking in with permission to test defences is the work of penetration testers, a different career path.`,
          },
          {
            q: `Is a SOC analyst job technical?`,
            a: `Yes, but not in the way many people fear. You need working knowledge of networks, operating systems and logs, and you must be able to use a SIEM. Heavy programming is not the entry requirement, while careful reading and clear writing matter a great deal.`,
          },
          {
            q: `Is SOC analyst work stressful?`,
            a: `It can be. Queues build up, night shifts are common and a missed real alert carries weight. Good handovers, playbooks and teammates ease the load. Ask about shift patterns and workload during interviews so you choose with open eyes.`,
          },
          {
            q: `What kinds of companies hire SOC analysts?`,
            a: `Banks, hospitals, IT services firms, e-commerce and product companies run their own SOCs. Managed security service providers monitor many clients from one centre, and the India centres of global companies hire too. Read each listing for shift pattern and tools.`,
          },
        ],
      },
      {
        kind: `links`,
        heading: `Where to read next about the SOC analyst role`,
        intro: `Start with the programme page for the syllabus behind this role. The related guides follow a shift hour by hour, compare neighbouring jobs and list the skills in detail.`,
        buttons: [
          { label: `See the SOC Analyst programme`, to: `/soc-analyst`, primary: true },
          { label: `Read: a SOC analyst's day, hour by hour`, to: `/blog/what-does-a-soc-analyst-do-on-a-daily-basis` },
          { label: `Read: what a SOC analyst does in a shift`, to: `/blog/what-a-soc-analyst-does-during-a-shift` },
          { label: `Read: SOC vs cybersecurity analyst`, to: `/blog/difference-between-soc-analyst-and-cybersecurity-analyst` },
          { label: `Read: skills a SOC analyst needs`, to: `/blog/skills-required-to-become-a-soc-analyst` },
          { label: `Browse all Career Insights`, to: `/blog` },
        ],
      },
    ],
    closing: {
      heading: `Decide whether SOC work suits you`,
      text: `Knowing what a SOC analyst does is a good first step, and trying it is a better one. Tell us what you study or do today, and the admissions team will help you see where you would start.`,
    },
    formHeading: `Ask about becoming a SOC analyst`,
    formSubheading: `Share your background and goals, and our admissions team will call you back with an honest view of the SOC Analyst programme and where you would begin.`,
  },

  // ---------------------------------------------------------------------------
  // POST 9
  // ---------------------------------------------------------------------------
  {
    slug: `what-does-a-soc-analyst-do-on-a-daily-basis`,
    question: `What does a SOC Analyst do on a daily basis?`,
    metaTitle: `SOC Analyst Daily Routine, Hour by Hour | Skill IT Education`,
    metaDescription: `What does a SOC analyst do on a daily basis? Follow one shift from handover to handover, with a worked alert. See a real-style day, hour by hour.`,
    published: `2026-09-20`,
    lede: `On a daily basis, a SOC analyst reads the previous shift's handover, checks that logs are still arriving, works the alert queue from highest severity down, investigates anything that looks real, escalates confirmed threats with evidence and writes every decision into a ticket. The shift ends with a handover to the next team. Most alerts are false alarms, and the skill is proving that quickly.`,
    blocks: [
      {
        kind: `text`,
        heading: `A SOC analyst's day in short, before the clock starts`,
        paras: [
          `Day to day, a SOC analyst is the person watching a company's systems from a Security Operations Center, and the day follows a fixed rhythm. Hand over, check, work the queue, investigate, escalate, document, hand over again. The details change with the company, but the loop does not, because a SOC runs around the clock and no single person owns an incident from start to finish.`,
          `What does a SOC analyst do on a daily basis when nothing dramatic happens? Mostly small, careful decisions. Is this alert real or noise? Who owns this machine? Has this address been seen before? Is this worth a phone call? Each call has to be right, and none of them looks like a film scene.`,
          `This guide follows one made-up day shift so you can see the order of the work. For the wider definition of the role, our separate guide on what a SOC analyst is covers that. Here the focus is the clock.`,
        ],
      },
      {
        kind: `steps`,
        heading: `A day shift from 7 am to 3 pm, one stage at a time`,
        intro: `Picture a Thursday at a mid-sized company with its own SOC. The analyst is at Level 1 and the shift runs eight hours.`,
        steps: [
          {
            title: `7 am, read the handover before touching the queue`,
            text: `The night team's notes list open tickets, rules that misbehaved and planned changes, such as a patch window that will make some alerts expected. Reading first stops you closing an alert a colleague was halfway through.`,
          },
          {
            title: `7.30 am, check that the logs are still arriving`,
            text: `A SIEM only sees what it receives. The analyst checks that key sources such as firewalls, domain controllers and the web proxy have reported in. A silent source is a blind spot and goes to the engineering team straight away.`,
          },
          {
            title: `8 am, work the queue from highest severity down`,
            text: `Alerts are opened in priority order. Repeats, such as several detections from the company's own vulnerability scanner, are grouped and closed once with a proper reason.`,
          },
          {
            title: `10.20 am, one high severity alert changes the morning`,
            text: `An endpoint alert arrives that fits no known routine. The next section follows it from the first look to the closed ticket.`,
          },
          {
            title: `12.30 pm, reported phishing emails and smaller tasks`,
            text: `Staff forward suspicious emails to a mailbox the SOC watches. The analyst checks sender, headers, links and attachments safely and replies to the employee. Breaks are staggered so the queue is never unwatched.`,
          },
          {
            title: `2 pm, tuning and learning time when the queue is calm`,
            text: `Noisy rules go on the tuning list, a playbook gets a correction, or the analyst reads about a new technique. It is how tomorrow's queue gets smaller.`,
          },
          {
            title: `2.30 pm, finish tickets and write the handover`,
            text: `Every open item gets an owner and a next step, written for a tired colleague who saw none of your morning.`,
          },
        ],
      },
      {
        kind: `text`,
        heading: `One alert followed from the first look to the closed ticket`,
        paras: [
          `This example is invented but realistic. At 10.20 am the EDR tool sends a high severity alert: on a laptop in the accounts team, Microsoft Word has started PowerShell with a long encoded command. The analyst reads the whole alert first: parent process WINWORD.EXE, child powershell.exe, user Anita from accounts, time 10.14 am. Ordinary documents do not need to run scripts, and the pattern matches MITRE ATT&CK technique T1059.001, PowerShell, which attackers often use after a malicious attachment is opened.`,
          `Next comes context. The ticket history shows no earlier alert on this laptop, and the finance team lead says accounts does not use macros. The encoded string goes into CyberChef, is decoded from Base64 and read as UTF-16, and the command downloads a file from an address never seen in this company's logs. Reputation checks on that address look suspicious, so the alert now looks like a true positive.`,
          `Then the SIEM. A proxy log search shows the laptop contacting that address at 10.15 am, and a mail gateway search finds the likely start: an email with a macro-enabled invoice reached Anita at 10.02 am, and the same message reached five other people in accounts. The problem may be six laptops, not one.`,
          `The analyst does not isolate anything alone, because this SOC's playbook says containment on a finance machine needs a Level 2 decision. The analyst phones the L2 on shift and sends the ticket with the timeline, decoded command, address, email details and the six recipients. L2 isolates the laptop in the EDR console, blocks the address at the proxy and has the email removed from the other mailboxes. The analyst goes back to checking whether the other five opened the attachment. First look to escalation took about twenty minutes.`,
        ],
      },
      {
        kind: `text`,
        heading: `What a good ticket note and a good handover contain`,
        paras: [
          `A useful ticket note answers five questions in plain sentences: what fired, what was checked, what was found, what was done and what happens next. For the alert above: high severity EDR alert at 10.14, Word started PowerShell with an encoded command on the accounts laptop. Decoded command downloads a file from an unseen address, flagged suspicious. Email with macro attachment reached six accounts staff at 10.02. Escalated to L2 at 10.41. L2 isolated host and blocked address. Checking the other five recipients. Open.`,
          `Handover notes work the same way for the whole team: every open ticket with an owner and a next step, noisy rules and planned changes. A note that only says still investigating is how context gets lost.`,
        ],
      },
      {
        kind: `whom`,
        heading: `Who copes well with this daily rhythm`,
        intro: `The routine suits some starting points more than others.`,
        people: [
          {
            who: `Final-year student picturing a film-style hacker room`,
            text: `The real day is quieter and more careful. If reading, checking and writing sound satisfying, you will do well.`,
          },
          {
            who: `Network or support engineer already used to rotas`,
            text: `Tickets, handovers and shifts will feel familiar. Your new work is reading authentication and endpoint logs.`,
          },
          {
            who: `Career switcher who needs a fixed nine to six routine`,
            text: `Many SOCs run rotating or night shifts, especially providers serving clients in other time zones. Ask about the pattern in the interview.`,
          },
        ],
      },
      {
        kind: `list`,
        heading: `Habits and skills that make a shift easier`,
        intro: `None of these is glamorous, and all of them show up in the example above.`,
        items: [
          `Reading an alert in full before acting, including rule name, source, destination, user and time`,
          `Basic SIEM searching, to move from an alert to the proxy, firewall and mail logs around it`,
          `Checking addresses and files on public reputation services, treating the answer as a clue and not a verdict`,
          `Decoding suspicious data with CyberChef and reading email headers`,
          `Knowing normal Windows behaviour, such as which programs usually start which others`,
          `Following a playbook while knowing when to stop and ask a senior colleague`,
        ],
      },
      {
        kind: `cards`,
        heading: `Quiet days, busy days and night shifts compared`,
        intro: `Not every day looks like the example. These are the patterns you will meet.`,
        cards: [
          {
            title: `A quiet day when the queue stays short`,
            text: `Time goes to tuning rules, checking log source health and learning. Quiet can mean the detections are working.`,
          },
          {
            title: `A busy day after a phishing wave`,
            text: `One campaign can produce dozens of reports and linked alerts. Analysts group related work and agree who owns what, so effort is not duplicated.`,
          },
          {
            title: `A night shift with a smaller team`,
            text: `Fewer people are awake to ask whether unusual activity is expected, so playbooks, on-call contacts and handovers matter more. Sleep and routine are real issues.`,
          },
          {
            title: `Weekend and holiday cover`,
            text: `A rota keeps the SOC staffed when offices are closed, and some attackers pick moments when they expect fewer people watching.`,
          },
        ],
      },
      {
        kind: `cards`,
        heading: `How Skill IT Education lets you practise the SOC day`,
        intro: `Our Madhapur centre in Hyderabad builds the SOC Analyst programme so the routine above feels familiar before your first real queue. It is preparation and support, not a promise of a job.`,
        cards: [
          {
            title: `Labs that repeat the queue routine`,
            text: `Fifty hours in the SIEM module cover offenses, dashboards, log sources, correlation rules and false positives on IBM QRadar and Splunk.`,
          },
          {
            title: `An escalation walk from Tier 1 to Tier 3`,
            text: `In the module on life inside a Security Operations Center you follow a sample alert up the tiers.`,
          },
          {
            title: `Phishing and malware exercises close to real alerts`,
            text: `You analyse simulated phishing emails, then learn email header and basic malware analysis with CyberChef and Sysinternals.`,
          },
          {
            title: `Internship days spent near a live queue`,
            text: `The two-month real-time internship gives exposure to live monitoring, triage and incident response.`,
          },
          {
            title: `Mock interviews built on shift scenarios and profile help`,
            text: `Rehearse "walk me through an alert" answers in mock interviews. Profile building covers your resume, GitHub and LinkedIn, and the hiring-partner network supports the job search. Employers make the decisions.`,
          },
        ],
      },
      {
        kind: `faq`,
        heading: `Quick answers about a SOC analyst's day`,
        intro: `Short answers to questions people often ask before choosing this job.`,
        faqs: [
          {
            q: `Do SOC analysts work night shifts?`,
            a: `Often, yes. A SOC watches systems around the clock, so most teams run rotating or fixed shifts that include nights, especially providers serving clients abroad. Ask about the pattern, allowance and rest days before you accept an offer.`,
          },
          {
            q: `How many alerts does a SOC analyst handle in a day?`,
            a: `There is no fixed number. It depends on the company, how well its rules are tuned and what is happening that day. Good teams look at the quality of decisions, not only the count. One serious alert can take hours, while many false alarms close quickly.`,
          },
          {
            q: `What is a shift handover in a SOC?`,
            a: `A handover is the written and spoken update one shift gives the next. It lists open tickets, owners, next steps, noisy rules and planned changes. Because a SOC never closes, a clear handover keeps context from being lost between analysts.`,
          },
          {
            q: `What does a SOC analyst do when there are no alerts?`,
            a: `Quiet time goes to work that improves the next shift. Analysts check log source health, tune noisy rules, update playbooks, review past tickets and study new attacker techniques. Some also hunt for threats no alert has flagged.`,
          },
          {
            q: `Is a SOC analyst's job boring?`,
            a: `Parts of it are repetitive, because harmless alerts still need proper checks. Others are absorbing, such as tracing a suspicious email through several log sources. People who like puzzles and careful work tend to enjoy it.`,
          },
        ],
      },
      {
        kind: `links`,
        heading: `Where to read next about a SOC analyst's day`,
        intro: `Start with the programme page to see the labs behind this routine. The related guides give the wider definition of the role and the tools you will meet during a shift.`,
        buttons: [
          { label: `See the SOC Analyst programme`, to: `/soc-analyst`, primary: true },
          { label: `Read: what a SOC analyst does in a shift`, to: `/blog/what-a-soc-analyst-does-during-a-shift` },
          { label: `Read: what is a SOC analyst`, to: `/blog/what-is-a-soc-analyst-and-what-does-a-soc-analyst-do` },
          { label: `Read: tools a SOC analyst uses`, to: `/blog/tools-and-technologies-used-by-soc-analysts` },
          { label: `Browse all Career Insights`, to: `/blog` },
        ],
      },
    ],
    closing: {
      heading: `Try one shift's worth of alerts before you decide`,
      text: `The clearest way to know whether this rhythm suits you is to practise it. Tell us where you are today, and the admissions team will explain how the labs and internship let you rehearse a real shift.`,
    },
    formHeading: `Ask about SOC shift training in Hyderabad`,
    formSubheading: `Share a few details and our admissions team in Madhapur will call you back to explain how the programme prepares you for real monitoring work.`,
  },

  // ---------------------------------------------------------------------------
  // POST 10
  // ---------------------------------------------------------------------------
  {
    slug: `tools-and-technologies-used-by-soc-analysts`,
    question: `What tools and technologies does a SOC Analyst use?`,
    metaTitle: `Tools Used by SOC Analysts, by Job | Skill IT Education`,
    metaDescription: `SOC analysts use a SIEM, EDR or XDR, firewalls, NIDS or NIPS, SOAR and analysis tools. See which tool does which job and how to learn them in order.`,
    published: `2026-09-20`,
    lede: `A SOC analyst uses a stack of tools, each built for a different job. A SIEM collects and searches logs, EDR or XDR watches endpoints, firewalls and NIDS or NIPS show network traffic, SOAR automates routine steps, and DLP, IAM and vulnerability management add context. Analysis tools such as MITRE ATT&CK, CyberChef, Sysinternals and Wireshark help investigate.`,
    blocks: [
      {
        kind: `text`,
        heading: `The SOC analyst tool stack, explained as jobs and not as brand names`,
        paras: [
          `The tools and technologies a SOC analyst uses make more sense when you sort them by the job they do. Something has to gather the evidence. Something has to watch the laptops and servers. Something has to show what crosses the network. Something has to remove the boring repetition, and something has to help you understand and explain what you found. Each job has its own kind of tool, and vendors sell many versions of each.`,
          `No analyst uses everything on the same day. A Level 1 analyst lives mostly in the SIEM, an endpoint console and a ticketing system, and reaches for the other tools when an alert needs more context. The tools also feed each other: an alert in one place is checked against evidence in three others.`,
          `The honest limit is that each company picks its own products, so the one you learn first may not be the one you use in your first job. That is fine, because the concepts carry across. Learn what a category does, what data it produces and what it cannot see.`,
        ],
      },
      {
        kind: `cards`,
        heading: `Which SOC tool does which job`,
        intro: `Seven jobs, the tool types that do them and the real products you may meet. Product names are examples and not a syllabus.`,
        cards: [
          {
            title: `To see everything in one place, a SIEM`,
            text: `Collects logs from servers, firewalls, proxies and applications, correlates them and raises alerts. It is the analyst's main workspace. Examples: IBM QRadar, Splunk, Microsoft Sentinel.`,
          },
          {
            title: `To watch the laptop and the server, EDR and XDR`,
            text: `Endpoint detection and response records what programs and users do on a device and can isolate it. XDR extends the view across email, network and cloud. Examples: Microsoft Defender for Endpoint, CrowdStrike Falcon.`,
          },
          {
            title: `To see traffic on the network, firewalls and NIDS or NIPS`,
            text: `Firewalls enforce which traffic is allowed and log what was blocked. A network intrusion detection system raises alerts, and a prevention system also blocks. Examples: Palo Alto Networks and Fortinet firewalls, open-source Snort and Suricata.`,
          },
          {
            title: `To automate the routine steps, SOAR`,
            text: `Security orchestration, automation and response tools run playbooks: look up an address, pull user history, open a ticket, even block something after approval. Ticketing tools such as ServiceNow and Jira often sit beside them.`,
          },
          {
            title: `To protect data and identities, DLP and IAM`,
            text: `Data loss prevention flags sensitive data leaving by email, USB or cloud. Identity and access management, such as Active Directory and Microsoft Entra ID, controls who signs in and to what. Both produce logs analysts review.`,
          },
          {
            title: `To find weak spots early, vulnerability management`,
            text: `Scanners such as Nessus, Qualys and OpenVAS find missing patches and risky settings and help teams prioritise. An analyst uses the results to judge whether a targeted machine was actually exposed.`,
          },
          {
            title: `To investigate and explain, analysis tools and frameworks`,
            text: `MITRE ATT&CK names attacker techniques so findings are described the same way everywhere. CyberChef decodes data, Sysinternals inspects Windows processes, Wireshark reads packets, and public reputation services such as VirusTotal give clues about addresses and files.`,
          },
        ],
      },
      {
        kind: `text`,
        heading: `How the tools work together on one incident at 2 am`,
        paras: [
          `Here is a made-up chain to show the hand-offs. At 2 am the identity system logs a successful sign-in for a sales manager's account from a country the company has no office in. Two minutes later the mail system logs a new inbox rule forwarding mail to an outside address. Neither event is alarming alone. A SIEM correlation rule joins them and raises an alert.`,
          `Before the analyst opens it, a SOAR playbook has looked up the sign-in address on reputation services, pulled the account's recent activity and attached it all to a ticket. The analyst checks the endpoint console for anything odd on the manager's laptop and searches proxy logs for the account. It looks like a stolen password, not a hijacked laptop.`,
          `The analyst escalates with the evidence, and someone with the authority disables the sessions and resets the password. Several tools contributed and no single one solved it. Knowing what each can and cannot see let the analyst connect them.`,
        ],
      },
      {
        kind: `steps`,
        heading: `How to learn the SOC tool stack in a sensible order`,
        intro: `Trying to learn everything at once leaves you knowing a little about ten screens. This order builds each tool on the last.`,
        steps: [
          {
            title: `Start with Wireshark, Nmap and the command line`,
            text: `Capture some traffic, scan a lab machine you own or have permission to test, and practise on Windows and Linux terminals. These skills explain what every later tool is measuring.`,
          },
          {
            title: `Learn one SIEM properly before the rest`,
            text: `Onboard a log source, build a dashboard and investigate an alert in one platform, such as IBM QRadar or Splunk. You will spend the most time here, so give it the most hours.`,
          },
          {
            title: `Read real endpoint alerts and process trees`,
            text: `Learn which process started which, and why a document launching a script is suspicious. Free trials and labs are the safest place to practise.`,
          },
          {
            title: `Understand what firewall and IDS logs really say`,
            text: `Read allowed and denied connections, ports and rule names until you can tell a scanner from a normal application.`,
          },
          {
            title: `Practise the decoding and lookup tools on samples`,
            text: `Use CyberChef, Sysinternals and reputation lookups on lab samples and map findings to MITRE ATT&CK. Never upload confidential company files to public lookup sites.`,
          },
          {
            title: `Add SOAR playbooks and vulnerability reports last`,
            text: `Automation makes sense once you know the manual steps it replaces.`,
          },
        ],
      },
      {
        kind: `whom`,
        heading: `Which tools to go deep on, by starting point`,
        intro: `Your background changes where to spend the first weeks.`,
        people: [
          {
            who: `Final-year student without a lab at home`,
            text: `Begin with free tools that run on a laptop: Wireshark, Nmap, CyberChef, Sysinternals and VirtualBox. Use structured labs for the enterprise platforms that are hard to practise alone.`,
          },
          {
            who: `Network engineer who already reads firewall rules`,
            text: `You have a head start on firewalls and NIDS or NIPS. Put your hours into the SIEM and endpoint alerts.`,
          },
          {
            who: `Windows administrator who knows Active Directory`,
            text: `Identity logs and Windows process behaviour will feel familiar and are central to detection. Add SIEM searching.`,
          },
          {
            who: `Developer who scripts everything`,
            text: `SOAR playbooks and log parsing will suit you. Learn the manual triage steps first so your automation solves the right problems.`,
          },
        ],
      },
      {
        kind: `list`,
        heading: `What to know about a tool beyond its name`,
        intro: `Employers test understanding more than product familiarity. For any tool on your resume, be able to answer these.`,
        items: [
          `Which data or logs the tool produces, and where they are sent`,
          `What the tool can detect, and what it cannot see at all`,
          `How its alerts look and which fields decide whether an alert is real`,
          `Which actions you may take yourself and which need approval`,
          `How to check the tool is healthy, since a broken collector looks exactly like a quiet day`,
          `How to translate a finding into MITRE ATT&CK tactics and techniques`,
          `How to confirm one tool's alert against a second source before deciding`,
        ],
      },
      {
        kind: `cards`,
        heading: `How Skill IT Education teaches the SOC tool stack`,
        intro: `Across its five modules, the programme at our Madhapur centre in Hyderabad spreads these tools out, with the deepest hands-on time on the SIEM. We say so plainly.`,
        cards: [
          {
            title: `The foundation toolkit of module one`,
            text: `Windows Server, Linux and Ubuntu, the command line, Wireshark, Nmap and VirtualBox are used to build a lab, capture traffic and scan for open ports.`,
          },
          {
            title: `A guided tour of the whole stack inside a SOC`,
            text: `The module on life in a Security Operations Center introduces SIEM, NIDS and NIPS, SOAR, EDR and XDR, DLP, IAM, firewalls and vulnerability management, and where each fits.`,
          },
          {
            title: `Fifty hours of SIEM and log source labs`,
            text: `IBM QRadar, Splunk, Windows log collection, firewall, IPS and WAF logs and proxy logs, which is where most hands-on tool practice is concentrated.`,
          },
          {
            title: `Investigation tools in the incident response module`,
            text: `MITRE ATT&CK, the Cyber Kill Chain, CyberChef, Sysinternals and indicators of compromise and attack feed the Incident Response Simulation and Threat Hunting Project.`,
          },
          {
            title: `Projects, internship and support that name tools truthfully`,
            text: `Each project you write up names the tools you actually used. With the internship, mock interviews and hiring-partner support, your resume says only what you can demonstrate.`,
          },
        ],
      },
      {
        kind: `faq`,
        heading: `Quick answers about SOC analyst tools`,
        intro: `Short answers to what people search most about the tool stack.`,
        faqs: [
          {
            q: `Which tool is the most important for a SOC analyst?`,
            a: `The SIEM, for most analysts, because it is where alerts arrive and logs are searched. Endpoint tools such as EDR are a close second in many teams. Importance depends on the employer, so learn one SIEM deeply first and then get comfortable reading endpoint and firewall alerts.`,
          },
          {
            q: `What is the difference between SIEM, EDR and SOAR?`,
            a: `A SIEM collects and correlates logs from many sources and raises alerts. EDR watches individual endpoints in detail and can isolate a device. SOAR automates response steps through playbooks, such as enrichment and ticketing. They overlap a little, but each solves a different problem.`,
          },
          {
            q: `Is Wireshark used in a SOC?`,
            a: `Yes, but less often than a SIEM. Analysts use it to inspect packets when logs do not explain a network event, and to analyse captured traffic during an investigation. It is also one of the best tools for learning how protocols really behave.`,
          },
          {
            q: `Do SOC analysts use Python?`,
            a: `Sometimes. Python helps with parsing logs, calling APIs and building automation, and it grows in value at higher levels. It is not usually a requirement for entry-level monitoring work, where SIEM searching, log reading and clear notes come first.`,
          },
          {
            q: `Can I practise SOC analyst tools for free at home?`,
            a: `Partly. Wireshark, Nmap, CyberChef, Sysinternals, VirtualBox and MITRE ATT&CK are free, and some vendors offer trials. Enterprise platforms are licensed, which is why structured labs help. Only scan or capture on systems and networks you own or have permission to test.`,
          },
        ],
      },
      {
        kind: `links`,
        heading: `Where to read next about SOC analyst tools`,
        intro: `Start with the programme page for the modules behind these tools. The related guides go deeper on the SIEM, which is the centre of the stack, and on the skills around it.`,
        buttons: [
          { label: `See the SOC Analyst programme`, to: `/soc-analyst`, primary: true },
          { label: `Read: what SIEM is and why it matters`, to: `/blog/what-is-siem-and-why-is-it-important-for-soc-analysts` },
          { label: `Read: which SIEM tools to learn`, to: `/blog/what-is-a-siem-and-which-siem-tools-to-learn` },
          { label: `Read: skills a SOC analyst needs`, to: `/blog/skills-required-to-become-a-soc-analyst` },
          { label: `Browse all Career Insights`, to: `/blog` },
        ],
      },
    ],
    closing: {
      heading: `Pick one tool and open it this week`,
      text: `You do not have to learn the whole stack before you start. Choose one tool from the list above, use it on a real sample and write down what it told you. Tell us your background and the admissions team will suggest where to begin.`,
    },
    formHeading: `Ask about SOC tools training`,
    formSubheading: `Share your background and goals, and our admissions team will call you back to explain which tools the programme covers and how much hands-on time each gets.`,
  },

  // ---------------------------------------------------------------------------
  // POST 11
  // ---------------------------------------------------------------------------
  {
    slug: `what-is-siem-and-why-is-it-important-for-soc-analysts`,
    question: `What is SIEM and why is it important for SOC Analysts?`,
    metaTitle: `What Is SIEM? Why SOC Analysts Need It | Skill IT Education`,
    metaDescription: `SIEM collects logs from across a company, correlates them and raises alerts. See what SIEM is, why SOC analysts depend on it and a worked example.`,
    published: `2026-09-20`,
    lede: `SIEM, short for Security Information and Event Management, is a platform that collects logs from across a company, converts them into a common format, correlates them and raises alerts when patterns look malicious. It is important for SOC analysts because no person can read millions of log entries, and the SIEM is where alerts, searches, dashboards and evidence come together.`,
    blocks: [
      {
        kind: `text`,
        heading: `SIEM in plain words, and why a SOC leans on it`,
        paras: [
          `SIEM stands for Security Information and Event Management. Think of the screen in an air traffic control room, which merges signals from many radars into one picture. A SIEM does that for security. Servers, laptops, firewalls, proxies and applications all write logs, and the SIEM gathers them into one searchable place, lines them up by time and checks them against rules that describe suspicious behaviour.`,
          `Why is a SIEM important for SOC analysts? Because a SOC without one is blind and slow. A large company produces far more log entries than any team could read, and the evidence of an attack is spread across several systems. The SIEM joins the pieces, so the analyst starts each investigation with an alert and a timeline instead of a blank page.`,
          `A fair warning about limits. A SIEM does not stop attacks by itself. It sees only the logs it is given, and its rules need constant tuning, or it either floods the analyst with false alarms or misses the real thing. It is a tool for people, not a replacement for them.`,
        ],
      },
      {
        kind: `steps`,
        heading: `How a SIEM turns raw logs into an alert you can act on`,
        intro: `Every SIEM works in roughly this order, whether it is IBM QRadar, Splunk or another platform.`,
        steps: [
          {
            title: `Logs are collected from every source`,
            text: `Agents, forwarders and collectors pull in events from Windows and Linux machines, firewalls, proxies, IPS and WAF devices and applications. Network flow data can be collected too.`,
          },
          {
            title: `Each log is parsed into common fields`,
            text: `A Windows event, a firewall line and a proxy entry all look different. The SIEM splits each into shared fields such as time, source address, username and event name. This is called normalisation.`,
          },
          {
            title: `Context is added to the event`,
            text: `An address can be tagged with its country or marked as known bad, and a username as privileged. Reference sets, which are maintained lists, do much of this work.`,
          },
          {
            title: `Correlation rules join separate events`,
            text: `A rule describes a suspicious pattern across events, sources or time, and fires when the pattern appears.`,
          },
          {
            title: `An alert or offense is raised and prioritised`,
            text: `Related events are grouped into one alert, called an offense in QRadar, and scored so the analyst knows what to open first.`,
          },
          {
            title: `The analyst searches, investigates and decides`,
            text: `Using search and dashboards, the analyst pivots to related logs, builds a timeline and decides whether the alert is real.`,
          },
          {
            title: `Data is retained and turned into reports`,
            text: `Logs are stored for the period the company's policies and regulations require, and reports show managers and auditors what was monitored.`,
          },
        ],
      },
      {
        kind: `text`,
        heading: `A small worked example with three log lines and one offense`,
        paras: [
          `Suppose a domain controller writes Windows event 4720, meaning a user account was created, at 11.42 pm. At 11.46 pm it writes event 4732, meaning the same account was added to a privileged administrators group. At 11.51 pm the VPN gateway logs that account signing in from an address outside India. In raw form these are three lines in three formats on three devices, and each is harmless alone, because administrators create accounts and staff use VPN.`,
          `The SIEM collects all three, normalises them into shared fields and enriches the VPN address with its country. A correlation rule written for this pattern says: if a new account is added to a privileged group and then signs in through VPN within an hour, raise a high severity alert. The rule fires, and the analyst sees one alert with the three events in order.`,
          `The analyst checks whether an approved change request exists for that account. None does, so the alert goes up the chain with the timeline attached. Without a SIEM, someone would have needed to notice three lines in three places at the right moment. Notice also what the SIEM did not do: it did not decide the account was malicious. A person made that call.`,
        ],
      },
      {
        kind: `cards`,
        heading: `Six reasons a SOC cannot work without a SIEM`,
        intro: `These are the practical reasons, in the order analysts tend to feel them.`,
        cards: [
          {
            title: `One place to search instead of fifty`,
            text: `Without a SIEM, an investigation means logging into each device. With one, a single search covers servers, firewalls and proxies at once.`,
          },
          {
            title: `Correlation no human could do by hand`,
            text: `Patterns that span several systems and minutes, such as the account example above, are almost impossible to spot by reading logs one at a time.`,
          },
          {
            title: `Faster triage because context arrives with the alert`,
            text: `Enriched fields and related events are already attached, so the first decision takes minutes and not an hour of lookups.`,
          },
          {
            title: `A dependable record of what happened and when`,
            text: `Retained logs let a team reconstruct an incident later, even after the affected machine has been reset.`,
          },
          {
            title: `Dashboards that show the health of the whole estate`,
            text: `Live views of failed logins, blocked traffic and log source status show unusual spikes, and show when a source has gone silent.`,
          },
          {
            title: `Reports for managers, auditors and compliance`,
            text: `Many organisations must show that they monitor systems and keep logs for a set period, which depends on the rules the company follows.`,
          },
        ],
      },
      {
        kind: `whom`,
        heading: `Who needs SIEM skills the most`,
        intro: `SIEM knowledge is central to SOC work and helps in neighbouring roles too.`,
        people: [
          {
            who: `Fresher aiming at a first SOC job`,
            text: `SIEM fluency is what interviewers test hardest, since it is the platform you open every shift. Spend the largest share of practice time here.`,
          },
          {
            who: `Network or systems administrator who already reads logs`,
            text: `You know where logs come from. Learning correlation and alert triage turns that into a security skill.`,
          },
          {
            who: `Developer or data-minded learner who enjoys queries`,
            text: `Search languages and log analysis will feel natural, and writing detection logic is worth building toward.`,
          },
          {
            who: `Someone who wants a compliance or audit path`,
            text: `SIEM reports, retention and log coverage sit at the heart of compliance work.`,
          },
        ],
      },
      {
        kind: `list`,
        heading: `What to learn about SIEM if you want to use it well`,
        intro: `Learn these on one platform first. They carry across every product.`,
        items: [
          `SIEM architecture, including event collectors, flow collectors, processors and the console`,
          `The log types you will see, from Windows and Linux to firewall, proxy and IPS or WAF logs`,
          `How parsing and normalisation work, and what goes wrong when a log is parsed badly`,
          `Correlation rules and use cases, and how to explain what a rule is trying to catch`,
          `Reference sets and watchlists, and how they enrich events`,
          `The platform's search language, such as AQL in QRadar or SPL in Splunk`,
          `Dashboards and reports that answer one clear question`,
          `Tuning rules to cut false positives, and checking log source health regularly`,
        ],
      },
      {
        kind: `text`,
        heading: `What a SIEM does not do and where it goes wrong`,
        paras: [
          `A SIEM is not prevention. Firewalls, endpoint protection and email filters block things, while a SIEM notices and correlates. It is also more than plain log management, which stores and searches logs, because a SIEM adds security-specific correlation, alerting and context.`,
          `The common failures are practical. Logs from a key system were never onboarded, so the SIEM is blind there. A collector stopped, and the dashboard looked calm because nothing was arriving. Rules were never tuned, so analysts drown in false positives and start to ignore the queue. Volume also costs money, since many products are licensed by how much data or how many events per second they process.`,
          `This is why SOC teams treat SIEM upkeep as part of the job. A SIEM that is not looked after slowly stops being trustworthy.`,
        ],
      },
      {
        kind: `cards`,
        heading: `How Skill IT Education teaches SIEM with live labs`,
        intro: `In our five-month SOC Analyst programme in Madhapur, Hyderabad, SIEM gets the largest block of time. That is preparation and support, and nothing here promises an outcome.`,
        cards: [
          {
            title: `A fifty-hour module on SIEM platforms and security monitoring`,
            text: `Architecture, event and flow collectors, IBM QRadar dashboards and offense analysis, plus Splunk for searching machine data at scale.`,
          },
          {
            title: `Log source labs across the enterprise`,
            text: `You onboard log sources, work with Windows, Linux and security device logs, and analyse malicious IP and phishing activity using live SIEM offense data.`,
          },
          {
            title: `Rule tuning and false positive practice`,
            text: `Correlation rules, reference sets and use cases are tuned to cut noise, and you produce governance and security reports.`,
          },
          {
            title: `The SIEM Monitoring Lab as a portfolio project`,
            text: `You onboard log sources into IBM QRadar, create reference sets and build real-time dashboards, written up for a hiring manager.`,
          },
          {
            title: `Internship, certification preparation and interview support`,
            text: `The internship puts you near live monitoring, the curriculum is structured to help you prepare for certifications such as EC-Council Certified SOC Analyst, and mock interviews and hiring-partner support assist the job search.`,
          },
        ],
      },
      {
        kind: `faq`,
        heading: `Quick answers about SIEM`,
        intro: `Short answers to what people search most about SIEM.`,
        faqs: [
          {
            q: `What does SIEM stand for?`,
            a: `SIEM stands for Security Information and Event Management. The name joins two older ideas: security information management, which stored and reported on logs, and security event management, which watched events in real time and raised alerts. Modern platforms do both in one product.`,
          },
          {
            q: `What is the difference between a SIEM and log management?`,
            a: `Log management collects, stores and searches logs. A SIEM does that and adds security-focused correlation, alerting, enrichment and reporting. Put simply, log management answers what happened, while a SIEM also tries to say which events look like an attack and why.`,
          },
          {
            q: `Is a SIEM the same as a firewall or antivirus?`,
            a: `No. Firewalls and antivirus prevent or block threats at a specific point. A SIEM does not block anything by itself. It collects their logs and many others, correlates them and alerts analysts to suspicious patterns, so people can investigate and respond.`,
          },
          {
            q: `What is a correlation rule in a SIEM?`,
            a: `A correlation rule is a saved condition that looks for a pattern across events, sources or time and raises an alert when it appears. For example, a new administrator account followed by a VPN login within an hour. Well-written rules catch real threats while limiting false alarms.`,
          },
          {
            q: `Why does a SIEM produce so many false positives?`,
            a: `Rules are often written broadly or left untuned, so normal activity such as scanners or backups matches them. Analysts reduce this by tuning rules, using reference sets for known-good systems and reporting noisy alerts. It is an ongoing maintenance job.`,
          },
        ],
      },
      {
        kind: `links`,
        heading: `Where to read next about SIEM`,
        intro: `Start with the programme page to see how the SIEM module runs. The related guides cover the wider tool stack, which SIEM tools to learn first and how a shift uses the SIEM.`,
        buttons: [
          { label: `See the SOC Analyst programme`, to: `/soc-analyst`, primary: true },
          { label: `Read: tools a SOC analyst uses`, to: `/blog/tools-and-technologies-used-by-soc-analysts` },
          { label: `Read: which SIEM tools to learn`, to: `/blog/what-is-a-siem-and-which-siem-tools-to-learn` },
          { label: `Read: a SOC analyst's day, hour by hour`, to: `/blog/what-does-a-soc-analyst-do-on-a-daily-basis` },
          { label: `Browse all Career Insights`, to: `/blog` },
        ],
      },
    ],
    closing: {
      heading: `Open a SIEM and follow one log through it`,
      text: `The idea of a SIEM sticks once you have watched a single log travel from a device to an alert. Tell us where you are today, and the admissions team will explain how the SIEM labs are run and where you would start.`,
    },
    formHeading: `Ask about SIEM training in Hyderabad`,
    formSubheading: `Share your details and our admissions team will call you back to explain how the SIEM module and labs are structured and what background helps.`,
  },

  // ---------------------------------------------------------------------------
  // POST 8
  // ---------------------------------------------------------------------------
  {
    slug: `difference-between-soc-l1-l2-and-l3`,
    question: `What is the difference between SOC L1, L2, and L3?`,
    metaTitle: `Difference Between SOC L1, L2 and L3 | Skill IT Education`,
    metaDescription: `The difference between SOC L1, L2 and L3: L1 triages alerts, L2 investigates incidents, L3 hunts and improves detection. Compare the levels side by side.`,
    published: `2026-09-20`,
    lede: `The difference between SOC L1, L2 and L3 is depth. L1 analysts monitor and triage incoming alerts, L2 analysts investigate escalated incidents and begin containment, and L3 analysts handle the most complex incidents, hunt for threats and improve detections. The levels differ in the decisions they are trusted to make, the tools they use and where they send a case next.`,
    blocks: [
      {
        kind: `text`,
        heading: `SOC L1, L2 and L3 explained as three filters`,
        paras: [
          `SOC L1, L2 and L3 are the three tiers of analyst in a Security Operations Center, and each tier handles what the tier before could not settle. L1 is the first look: monitoring and triaging alerts. L2 is the investigation: confirming real incidents and starting to contain them. L3 is the expert layer: complex incidents, threat hunting and better detections. Picture three filters in a row, each catching what the last let through, so the most experienced people spend their time on the hardest problems.`,
          `The levels differ in what each is responsible for, which decisions each is trusted to make, how deeply each uses the tools, and where each sends a case next. This guide puts those side by side, follows one alert through all three levels and lists the questions interviewers ask at each. For the career path between the levels, our separate guide on SOC levels and growth covers that.`,
          `One limit to keep in mind: level names are not universal. Some companies add a Tier 0 for automation or a fourth level for management, and small SOCs blend levels. A title also does not always match the duties, so compare roles by what they actually ask you to do.`,
        ],
      },
      {
        kind: `cards`,
        heading: `SOC L1, L2 and L3 side by side on five points`,
        intro: `Read these as tendencies and not as fixed rules.`,
        cards: [
          {
            title: `What each level is responsible for`,
            text: `L1 watches the alert queue, checks each alert against context, closes false positives and escalates the suspicious ones with notes. L2 takes escalated cases, correlates several log sources, confirms whether an incident is real and starts containment. L3 leads complex incidents, hunts for threats no alert caught and improves detection rules.`,
          },
          {
            title: `Which decisions each level is trusted to make`,
            text: `L1 decides whether an alert is a false positive or needs escalating, usually by following written steps. L2 decides whether an incident is confirmed, how severe it is and which containment step fits the playbook. L3 decides whether a rule or playbook must change. Taking a critical system offline usually needs approval higher still.`,
          },
          {
            title: `How deep each level goes in the tools`,
            text: `L1 uses the SIEM to view alerts, run prepared searches and write tickets. L2 writes its own searches across firewall, proxy, endpoint and mail logs, and uses CyberChef and Sysinternals for basic analysis. L3 tunes correlation rules, builds detections, hunts with MITRE ATT&CK and may script automation.`,
          },
          {
            title: `Where each level sends a case next`,
            text: `L1 escalates to L2 with a timeline and evidence, or closes the alert with a reason. L2 resolves the case, brings in service owners and IT teams, or passes the hardest cases up. L3 works with engineering to fix detection gaps and advises on major incidents.`,
          },
          {
            title: `How much of the shift is live alert work`,
            text: `L1 spends most of the shift on live alerts and tickets. L2 splits time between escalations and deeper investigation. L3 spends more time hunting, tuning and reviewing incidents, but is pulled in whenever something serious lands.`,
          },
        ],
      },
      {
        kind: `text`,
        heading: `One strange DNS pattern handled at L1, then L2, then L3`,
        paras: [
          `This example is invented. The SIEM raises an offense: a finance application server has sent an unusually high number of DNS queries to one long, random-looking domain. At L1, the analyst confirms the server belongs to finance, checks it is not a backup or monitoring agent, sees the domain is new, writes a short timeline and escalates.`,
          `At L2, the investigator pulls DNS, firewall and endpoint data and sees the queries repeat at regular intervals, which resembles automated beaconing. The endpoint console shows which process is making them. Following the playbook, and with the service owner's approval, L2 isolates the server, preserves evidence and blocks the domain.`,
          `At L3, the questions widen. How did this get on the server, and is it anywhere else? The hunter searches all hosts for the same domain and pattern, maps the behaviour to a MITRE ATT&CK technique for DNS-based command and control, and writes a detection rule so the next case is caught sooner. Each level answered a different question about one alert.`,
        ],
      },
      {
        kind: `list`,
        heading: `Interview questions to be ready for at each level`,
        intro: `These are typical, not a fixed script. Practise answering aloud.`,
        items: [
          `L1: Walk me through how you would triage a large number of failed logins on one account.`,
          `L1: How do you decide an alert is a false positive, and what do you write in the ticket?`,
          `L1: What is the difference between an event, an alert and an incident?`,
          `L2: An alert shows a workstation contacting an unknown domain. Which sources do you check, and in what order?`,
          `L2: How do you decide between containing a machine at once and gathering more evidence first?`,
          `L2: Explain how you would analyse a suspicious email header and attachment.`,
          `L3: How would you hunt for attacker persistence on Windows machines, using MITRE ATT&CK?`,
          `L3: A rule produces many false positives. How do you tune it without creating a blind spot?`,
          `L3: What goes into a post-incident review, and how do you turn it into better detection?`,
        ],
      },
      {
        kind: `steps`,
        heading: `How to tell which level a SOC job listing really is`,
        intro: `Titles can mislead. These six checks tell you what the job is.`,
        steps: [
          {
            title: `Read the verbs and not the title`,
            text: `Monitor and triage point to L1. Investigate, correlate and contain point to L2. Hunt, tune, build detections and lead incidents point to L3.`,
          },
          {
            title: `Check whether the role owns the queue or receives escalations`,
            text: `An analyst who opens alerts first is working at L1, whatever the title says. One who receives cases from others is at L2 or above.`,
          },
          {
            title: `Look at how deeply the listing uses the tools`,
            text: `Viewing dashboards is different from writing searches and rules.`,
          },
          {
            title: `Ask who is allowed to contain a machine`,
            text: `The answer shows how much decision-making the role carries.`,
          },
          {
            title: `Ask about shifts, on-call and rotation`,
            text: `Higher levels may be on call for serious incidents, and providers may rotate people between levels.`,
          },
          {
            title: `Ask who tunes the rules and how analysts give feedback`,
            text: `A SOC where analysts can flag noisy rules and see them fixed is a better place to learn.`,
          },
        ],
      },
      {
        kind: `whom`,
        heading: `Where each starting point usually lands`,
        intro: `You do not have to want L3 on day one.`,
        people: [
          {
            who: `Fresher with lab and SIEM practice`,
            text: `Aim at L1 roles such as SOC Analyst L1 and Security Monitoring Analyst. Show you can triage, document and escalate cleanly.`,
          },
          {
            who: `Network or systems administrator with a few years behind them`,
            text: `You may interview for L1 with a faster route to L2. Prove the security side with a SIEM project.`,
          },
          {
            who: `Current L1 analyst ready for more`,
            text: `Write your own searches, learn the incident response lifecycle and ask L2 for feedback on your escalations.`,
          },
          {
            who: `Analyst drawn to hunting and building detections`,
            text: `L3 roles usually expect experience, so study MITRE ATT&CK, threat intelligence and rule tuning while you work at L1 or L2.`,
          },
        ],
      },
      {
        kind: `text`,
        heading: `Why we do not print a pay figure for each level`,
        paras: [
          `The only pay figures Skill IT publishes are two indicative ranges. For India it is about ₹3L to ₹9L a year, a typical entry-to-mid range for SOC Analyst (L1/L2), Security Monitoring Analyst and Junior Threat Hunter roles that rises with certifications and shift experience. For equivalent SOC Analyst and Incident Response roles in mature international markets it is about $50K to $95K a year. Both are broad, indicative ranges that vary by company, city, specialisation, shifts and experience, and neither is a promise.`,
          `We do not publish separate figures for L1, L2 or L3, and any single number you see for one level deserves care. To check current numbers, read recent job listings for each level in your city, talk to people in the role and compare the full cost to company on any offer, including shift allowance.`,
        ],
      },
      {
        kind: `cards`,
        heading: `How Skill IT Education prepares you for each SOC level`,
        intro: `Our five-month SOC Analyst programme in Madhapur, Hyderabad, touches all three levels, though most freshers begin at L1. It is preparation and support, not a promise.`,
        cards: [
          {
            title: `A module that maps the tiers and the escalation path`,
            text: `In the module on life inside a Security Operations Center you study SOC structure and roles, walk a sample alert from Tier 1 to Tier 3 and write a SOC Operating Model Brief.`,
          },
          {
            title: `Fifty hours of SIEM practice for L1 work`,
            text: `IBM QRadar and Splunk labs cover dashboards, offense analysis, correlation rules, false positives and alert triaging.`,
          },
          {
            title: `Incident response skills that point toward L2`,
            text: `The response lifecycle, playbooks and runbooks, email header analysis and basic malware analysis are practised in an Incident Response Simulation.`,
          },
          {
            title: `A first taste of L3 thinking through threat hunting`,
            text: `MITRE ATT&CK, the Cyber Kill Chain and threat intelligence are used in a Threat Hunting Project.`,
          },
          {
            title: `Internship, profile building and level-specific mock interviews`,
            text: `Mock interviews rehearse the level questions above. The internship adds live exposure, resume, GitHub and LinkedIn work shapes your profile and hiring-partner support assists your search. Employers decide.`,
          },
        ],
      },
      {
        kind: `faq`,
        heading: `Quick answers about SOC levels`,
        intro: `Short answers to what people search most about SOC L1, L2 and L3.`,
        faqs: [
          {
            q: `Is SOC L3 higher than L2 and L1?`,
            a: `Yes. L3 is the most senior analyst tier, above L2, which sits above L1. Cases move upward as they get harder, and above L3 there is usually a SOC lead or manager. Higher does not mean better in every way, because each level has a different job.`,
          },
          {
            q: `Can a fresher join a SOC directly at L2?`,
            a: `It is uncommon. Most freshers start at L1, where they learn the alerts and tools. Someone with related experience, such as systems administration or incident handling, and strong SIEM projects might be considered for L2, depending on the employer.`,
          },
          {
            q: `Do L1 analysts do incident response?`,
            a: `They take part, but do not usually lead it. L1 analysts detect and triage, gather first evidence, follow playbook steps they are cleared for and escalate. L2 and L3 analysts lead containment, eradication and recovery.`,
          },
          {
            q: `Who decides to isolate a machine in a SOC?`,
            a: `It depends on the playbook. Often L2 or an on-call lead decides, sometimes after checking with the system owner. Some SOCs let L1 isolate a device in pre-approved high severity cases, while business-critical servers usually need more approval than a laptop.`,
          },
          {
            q: `Are SOC tiers the same in every company?`,
            a: `No. Some use Tier 1 to Tier 3, others add a Tier 0 for automation or a Tier 4 for management, and small teams blend levels. Compare listings by duties and tools, not just the label.`,
          },
        ],
      },
      {
        kind: `links`,
        heading: `Where to read next about SOC levels`,
        intro: `Start with the programme page for the modules behind each level. The related guides cover the career path, pay for L1 and L2, and interview preparation.`,
        buttons: [
          { label: `See the SOC Analyst programme`, to: `/soc-analyst`, primary: true },
          { label: `Read: SOC levels and career growth`, to: `/blog/soc-analyst-l1-l2-l3-levels-and-career-growth` },
          { label: `Read: SOC L1 analyst salary in India`, to: `/blog/soc-l1-analyst-salary-in-india` },
          { label: `Read: SOC L2 analyst salary in India`, to: `/blog/soc-l2-analyst-salary-in-india` },
          { label: `Read: preparing for a SOC interview`, to: `/blog/how-to-prepare-for-a-soc-analyst-interview` },
          { label: `Browse all Career Insights`, to: `/blog` },
        ],
      },
    ],
    closing: {
      heading: `Start by mastering the level in front of you`,
      text: `You do not need to choose your L3 destination today. Get good at the tier you are aiming for and practise one level above it. Tell us your background, and the admissions team will help you plan where to start.`,
    },
    formHeading: `Ask about starting at SOC L1 or L2`,
    formSubheading: `Share your background and goals, and our admissions team will call you back with an honest view of where you would begin and how the programme prepares you.`,
  },
];

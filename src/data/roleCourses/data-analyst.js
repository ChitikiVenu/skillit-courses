// Role courses for the Data Analytics programme (parentKey: data-analyst).
// Every module number, topic index, tool name, practice index and certification index
// refers to src/data/dataAnalyst.js.

export default [
  {
    slug: 'data-analyst',
    title: 'Data Analyst',
    metaTitle: `Data Analyst Course in Hyderabad | Skill IT Education`,
    metaDescription: `Data analyst course in Hyderabad: learn Excel, SQL, data exploration and Power BI or Tableau dashboards, with hands-on labs and portfolio projects.`,
    lede: `This role course arranges the Data Analytics programme around the everyday work of a data analyst who answers business questions with Excel, SQL and dashboards. You start with spreadsheets, move to databases and exploration, then build BI views and finish with a full capstone on business data.`,
    skills: [
      'Excel pivot tables',
      'Lookup formulas',
      'SQL joins',
      'Window functions',
      'Data profiling',
      'Power BI dashboards',
      'Tableau views',
      'Business problem framing',
    ],
    overview: [
      `A data analyst in a business team takes questions such as why orders dropped in one city last month, or which product lines are slowing, and answers them with data. The work sits between the people who run the business and the systems that store its numbers. You pull records, clean them, summarise them and explain what they mean in plain language, usually through a spreadsheet, a query result or a dashboard.`,
      `Most weeks follow a rhythm. Early in the week you refresh recurring reports and check that the numbers still tie back to the source. Midweek, a manager sends a fresh question, and you write a SQL query, build a pivot table and look for the pattern. By Friday you share a short summary with a chart or a dashboard page and note what you would check next.`,
      `Data analysts work in almost every kind of team: retail and e-commerce, banking and finance, healthcare, logistics, marketing agencies and IT services companies in Hyderabad and beyond. They matter because leaders rarely have time to read raw tables. A good analyst turns them into one clear answer, and that answer often decides where budget, stock or staff time goes. Analysts who explain their numbers plainly tend to be trusted with bigger questions.`,
    ],
    dayToDay: [
      `Pull last quarter's orders from a database with a SQL query and check the row counts.`,
      `Clean a messy export in Excel by fixing dates, removing duplicates and validating entries.`,
      `Build a pivot table that compares sales by region and month for a manager.`,
      `Look for outliers or missing values before trusting a number that looks too good.`,
      `Refresh a Power BI or Tableau dashboard and confirm the figures match the source.`,
      `Write a short note explaining what changed, why it changed and what to check next.`,
      `Answer follow-up questions from sales, finance or operations teams without starting from scratch.`,
    ],
    outcomes: [
      `Clean and reshape a raw business dataset in Excel using formulas, lookups and Power Query.`,
      `Write SQL queries with joins, grouping, subqueries and window functions to answer business questions.`,
      `Profile a new dataset and spot missing values, outliers and early patterns before reporting.`,
      `Build an interactive dashboard in Power BI or Tableau with filters and drill-down.`,
      `Explain findings to a non-technical manager in a short, structured summary.`,
      `Run a small analytics project from problem statement to recommendation and keep it in your portfolio.`,
      `Prepare for data analyst interview rounds that test Excel, SQL and a live dashboard exercise.`,
    ],
    whoFor: [
      {
        who: 'Final-year student',
        text: `You are finishing a degree and want a skill set employers can test. The path starts with Excel and SQL, so you build real projects before graduation and can show them in interviews.`,
      },
      {
        who: 'IT support engineer',
        text: `You already handle tickets, logs and user questions, so you are used to checking facts. Here you learn to query databases and present findings, which opens a route from support toward an analyst desk.`,
      },
      {
        who: 'Non-IT graduate',
        text: `Commerce, science and arts graduates often understand a business area well. Excel comes first and needs no coding, so you can attach data skills to the domain knowledge you already have.`,
      },
      {
        who: 'Working professional',
        text: `You work in sales, operations or finance and build reports by hand each month. This path shows you how to replace copy and paste with queries, pivot tables and a dashboard that refreshes.`,
      },
    ],
    path: [
      {
        module: 2,
        focus: `Excel is where most analysts spend their first year, so this module comes first. Concentrate on pivot tables, lookups and cleaning, because those skills are tested directly and reused in every later module.`,
        topics: [0, 1, 2, 3, 4, 6],
        tools: ['Excel', 'Power Query', 'Google Sheets'],
        practice: { type: 'lab', index: 1 },
      },
      {
        module: 3,
        focus: `SQL is how you reach data that does not fit in a spreadsheet. Spend the most time on joins, grouping and window functions, and practise writing queries for real business questions rather than textbook tables.`,
        topics: [1, 2, 3, 4, 5],
        tools: ['SQL', 'MySQL / PostgreSQL', 'pgAdmin'],
        practice: { type: 'lab', index: 1 },
      },
      {
        module: 4,
        focus: `Before you trust a number, you look at the dataset behind it. Focus on profiling, missing values and outliers, and on writing early findings so a reader can follow what you checked.`,
        topics: [1, 2, 4, 5, 7],
        tools: ['Pandas', 'Jupyter Notebook', 'Pandas Profiling'],
        practice: { type: 'lab', index: 4 },
      },
      {
        module: 6,
        focus: `This is where analysis becomes something a manager can open and use. Build one Power BI and one Tableau dashboard, and concentrate on filters, drill-down and KPI views that answer a stated question.`,
        topics: [1, 2, 3, 4, 5, 7],
        tools: ['Power BI', 'Tableau', 'Excel'],
        practice: { type: 'project', index: 0 },
      },
      {
        module: 9,
        focus: `The capstone brings Excel, SQL and BI together in one project. Choose a domain, frame the question, build the dashboard and rehearse presenting it, since the finished case study is what you show recruiters.`,
        topics: [0, 1, 2, 3, 5, 7],
        tools: ['Excel', 'SQL', 'Power BI'],
        practice: { type: 'project', index: 0 },
      },
    ],
    careerPath: [
      {
        title: 'First job',
        text: `Most learners aim for Data Analyst (Trainee), Junior Data Analyst, SQL Analyst or Excel Analyst roles. These teams need someone who can pull, clean and summarise data while learning the business.`,
      },
      {
        title: 'After a year or two',
        text: `With experience you can grow into Insights Analyst, Business Intelligence Analyst or Product Analyst roles, or specialise in a function through Marketing Analyst, Sales Analyst or Operations Analyst work.`,
      },
      {
        title: 'Longer term',
        text: `The advanced track in the programme points toward Senior Data Analyst, then Analytics Manager, and Head of BI over the long run. Each step adds more stakeholder work and team ownership.`,
      },
    ],
    certifications: [0, 4, 3, 1],
    faqs: [
      {
        q: 'Do I need coding to become a data analyst?',
        a: `Not to start. Excel needs no code, and SQL is a query language you learn in small steps. The exploration module also uses Pandas in Jupyter Notebook, taught from the basics, so you never need a programming background on day one.`,
      },
      {
        q: 'Is Excel or SQL more important for a data analyst?',
        a: `Both matter, for different jobs. Excel is where quick analysis, pivot tables and small dashboards happen, and SQL is how you pull data from databases. This course teaches Excel first and SQL second, so each skill supports the other.`,
      },
      {
        q: 'Should a data analyst learn Power BI or Tableau?',
        a: `Learn one well and know the other exists. The BI module teaches both, with DAX basics in Power BI and calculated fields in Tableau. Pick the one your target job posts ask for, and use the second to compare approaches.`,
      },
      {
        q: 'Can a non-IT graduate become a data analyst?',
        a: `Yes. The path starts from the fundamentals, and business knowledge from your degree or job is an advantage when reading data. Expect to practise every week, since Excel, SQL and dashboards are learned by building, not by watching.`,
      },
      {
        q: 'What projects will I have to show in a data analyst interview?',
        a: `The programme includes a minimum of five portfolio projects, such as an Excel Dashboard Build, SQL Business Reporting Queries, an EDA and Visualization Project, a BI Dashboard Build and a capstone that runs from raw data to a recommendation.`,
      },
    ],
    blog: [
      'what-a-data-analyst-does-on-a-typical-working-day',
      'skills-required-to-become-a-data-analyst',
      'is-excel-enough-to-become-a-data-analyst',
      'is-sql-required-for-a-data-analyst-job',
      'data-analyst-projects-that-impress-recruiters',
      'how-to-become-a-data-analyst-in-india',
    ],
    honestNote: `This programme covers Excel, SQL, exploration with Pandas, visualization, BI tools and reporting. Advanced statistics, machine learning and heavy Python programming are outside its syllabus.`,
  },

  {
    slug: 'bi-analyst',
    title: 'BI Analyst',
    metaTitle: `BI Analyst Course in Hyderabad | Skill IT Education`,
    metaDescription: `BI analyst course in Hyderabad: learn SQL reporting queries, Power BI, Tableau, DAX basics and KPI scorecards through hands-on labs and projects.`,
    lede: `This role course arranges the Data Analytics programme around the work of a BI analyst who keeps dashboards trusted and useful. You start with the SQL that feeds reports, then learn Power BI and Tableau, KPI design and recurring reporting, before practising chart choices for busy readers.`,
    skills: [
      'SQL reporting queries',
      'Power BI reports',
      'DAX measures',
      'Tableau dashboards',
      'KPI scorecards',
      'Drill-down analysis',
      'Dashboard design',
      'Report scheduling',
    ],
    overview: [
      `A BI analyst looks after the dashboards a company uses to run itself. Where a general analyst answers one-off questions, a BI analyst builds views that are refreshed and read every day: sales by branch, stock against target, support tickets by team. The job is part query writing, part design and part listening, because a dashboard only works when the people using it agree on what each number means.`,
      `Week to week, you tune the queries behind existing reports, add a filter or a drill-down that a manager asked for, and check that a total on the dashboard still matches the source system. You meet a department head to agree a new KPI, sketch the layout on paper, build it in Power BI or Tableau and collect feedback after the first week of use.`,
      `BI analysts sit in reporting or analytics teams inside retail, banking, healthcare, telecom, manufacturing and IT services firms across Hyderabad. Their work matters because dashboards replace long email chains and monthly slide decks. When the numbers are consistent and easy to filter, teams argue less about whose figure is right and spend more time on the decision. That is why companies keep investing in people who can maintain them well.`,
    ],
    dayToDay: [
      `Tune a slow SQL query so a dashboard refreshes in seconds instead of minutes.`,
      `Write a DAX measure for year-to-date sales and test it against a manual total.`,
      `Add a drill-down from region to store so a manager can find the weak spot.`,
      `Meet a department head to agree what a KPI means and how it is calculated.`,
      `Check a dashboard against the source system after a data refresh and log any gap.`,
      `Publish a report to a shared workspace and set the right people up to view it.`,
      `Collect feedback after launch and remove charts that nobody actually uses.`,
    ],
    outcomes: [
      `Write SQL joins, CTEs and window functions that feed reports with exactly the numbers needed.`,
      `Connect several data sources in Power BI and shape them into one report.`,
      `Create DAX measures and Tableau calculated fields for ratios, totals and time comparisons.`,
      `Design KPI scorecards with targets, benchmarks and a clear owner for each metric.`,
      `Build drill-down dashboards that let a manager move from summary to detail in a few clicks.`,
      `Choose the right chart for a question and defend that choice to a stakeholder.`,
      `Schedule a recurring report and run accuracy checks before it reaches leadership.`,
    ],
    whoFor: [
      {
        who: 'Final-year student',
        text: `You like charts and tidy tables and want a role with a clear tool stack. The path gives you SQL, Power BI and Tableau in a sensible order, plus dashboards you can show in interviews.`,
      },
      {
        who: 'IT support engineer',
        text: `You know how systems behave and how users complain. That helps in BI work, where you learn to connect sources, keep refreshes stable and explain why a number changed on a screen.`,
      },
      {
        who: 'Non-IT graduate',
        text: `You may know a business area such as retail or finance but not databases. SQL is taught from the basics, and the design rules and KPIs you practise can come from your own domain.`,
      },
      {
        who: 'Working professional',
        text: `If you are an MIS or reporting executive, you likely maintain sheets by hand. This path moves you toward shared dashboards, DAX measures and scheduled reports that others can explore themselves.`,
      },
    ],
    path: [
      {
        module: 3,
        focus: `Every dashboard is only as good as the query behind it. Focus on joins, CTEs, window functions and query tuning, so that your reports load quickly and return the numbers stakeholders expect.`,
        topics: [2, 3, 4, 5, 6, 7],
        tools: ['SQL', 'MySQL / PostgreSQL', 'pgAdmin'],
        practice: { type: 'lab', index: 4 },
      },
      {
        module: 6,
        focus: `This is the core of the role. Learn dashboard design principles first, then build in both Power BI and Tableau, paying most attention to DAX basics, calculated fields, drill-down and sharing.`,
        topics: [0, 1, 2, 3, 4, 5, 6],
        tools: ['Power BI', 'Tableau', 'Excel'],
        practice: { type: 'lab', index: 1 },
      },
      {
        module: 8,
        focus: `Choosing the right metric is half of BI work. Practise defining KPIs, setting targets and benchmarks, and naming an owner for each, then build a scorecard that a leader can read in a minute.`,
        topics: [0, 1, 2, 4, 5, 6],
        tools: ['Power BI', 'Tableau', 'Excel'],
        practice: { type: 'project', index: 0 },
      },
      {
        module: 5,
        focus: `The chart rules learned here in Python apply equally in Power BI and Tableau. Concentrate on choosing the right chart, faceted views and telling a story across a set of visuals.`,
        topics: [0, 4, 5, 6, 7],
        tools: ['Matplotlib', 'Seaborn', 'Plotly'],
        practice: { type: 'lab', index: 3 },
      },
      {
        module: 7,
        focus: `Reports have to arrive on time and stay correct. Focus on automation and scheduling, designing views for different audiences, and QA checks that catch broken totals before leadership sees them.`,
        topics: [1, 2, 4, 6, 7],
        tools: ['Power BI', 'Excel', 'Google Data Studio'],
        practice: { type: 'lab', index: 1 },
      },
    ],
    careerPath: [
      {
        title: 'Entry roles',
        text: `Business Intelligence Analyst (Junior), BI Developer (Entry), Dashboard Developer and Data Analyst are common starting points. These roles usually focus on maintaining reports, building views and answering questions from one department.`,
      },
      {
        title: 'Next steps',
        text: `With a year or two of experience, you can move into BI Analyst, Performance Analyst or Insights Analyst work, owning a set of dashboards and KPIs for a function or a business unit.`,
      },
      {
        title: 'Longer term',
        text: `Senior Data Analyst, Analytics Manager and Head of BI (long-term) sit at the end of the advanced track, with more ownership of metric definitions, data quality and the direction of a team.`,
      },
    ],
    certifications: [1, 2, 0],
    faqs: [
      {
        q: 'What is the difference between a BI analyst and a data analyst?',
        a: `A data analyst often answers one-off questions with exploration and a report. A BI analyst maintains dashboards and KPIs that people use every day. The skills overlap, but BI work leans more on tools, refresh reliability and metric definitions.`,
      },
      {
        q: 'Should a BI analyst learn Power BI or Tableau first?',
        a: `Either works, and the concepts carry over. The BI module teaches both, so you can compare them. Start with the tool that most job posts in your target area mention, then rebuild the same dashboard in the other to see the differences.`,
      },
      {
        q: 'Do BI analysts really need SQL?',
        a: `In most teams, yes. Dashboards pull from databases, and SQL lets you shape the data before it reaches the report. The course covers joins, CTEs, window functions and basic query tuning, which are the parts BI work uses most.`,
      },
      {
        q: 'What is DAX and how much of it do I need?',
        a: `DAX is the formula language in Power BI for measures such as totals, ratios and year-to-date figures. This course teaches DAX basics, enough to build useful reports. Advanced data modelling is a next step you can take on the job.`,
      },
      {
        q: 'What should a BI analyst portfolio contain?',
        a: `Show a BI Dashboard Build, a KPI Scorecard Build and a Business Reporting Lab, each with a short note on the question, the metrics and the design choices. Recruiters like to see why a chart was chosen, not only the chart.`,
      },
    ],
    blog: [
      'tools-and-technologies-used-by-data-analysts',
      'tools-a-data-analyst-should-learn-excel-sql-power-bi-python',
      'how-to-learn-sql-for-data-analysis-step-by-step',
      'data-analyst-projects-that-impress-recruiters',
      'career-opportunities-after-a-data-analytics-course',
    ],
    honestNote: `The programme teaches Power BI and Tableau dashboarding, DAX basics and KPI work. Data warehouse design, ETL engineering and advanced DAX modelling are outside its syllabus.`,
  },

  {
    slug: 'business-analyst',
    title: 'Business Analyst',
    metaTitle: `Business Analyst Course in Hyderabad | Skill IT Education`,
    metaDescription: `Business analyst course in Hyderabad: learn problem framing, KPIs, Excel, SQL and stakeholder presentations through hands-on labs and a domain capstone.`,
    lede: `This role course arranges the Data Analytics programme around a business analyst who turns vague business needs into clear questions and measurable answers. You begin with problem framing and KPIs, add Excel and SQL to test ideas, and finish with a domain capstone that involves stakeholders.`,
    skills: [
      'Problem framing',
      'KPI definition',
      'Stakeholder requirements',
      'Excel what-if analysis',
      'Lookup formulas',
      'SQL joins',
      'Executive summaries',
      'Domain case studies',
    ],
    overview: [
      `A business analyst sits between the people who have a business problem and the people who can supply data or build a solution. A sales head may say revenue feels flat. Your job is to ask what flat means, which region, which period, compared with what, and then work out which numbers and checks will show the answer. Good questions at the start save a great deal of effort later.`,
      `In a typical week you speak with two or three stakeholders, write down what they need in a short requirement note, and pull figures from Excel or SQL to test an early idea. You compare a few options using what-if scenarios, draft a summary with a recommendation, present it, and update it after questions and feedback. Between meetings you keep a running list of open questions so that nothing agreed in a hallway gets lost.`,
      `Business analysts work in banks, insurers, retail chains, hospitals, logistics firms, product companies and IT services teams. They matter because projects fail when nobody agrees on the real problem. A clear brief and a well-chosen metric save weeks of rework, and they give technical teams and managers a shared language. Many business analysts also become the person colleagues ask first when a number looks strange.`,
    ],
    dayToDay: [
      `Ask a manager follow-up questions until a vague request becomes a clear analytics problem.`,
      `Write a one-page requirement note that lists the question, data sources and success measure.`,
      `Pull a quick sales or cost figure with SQL to test a stakeholder's assumption.`,
      `Compare two options in Excel using what-if scenarios and explain the trade-off.`,
      `Choose the KPI that reflects a business goal and agree who owns it.`,
      `Draft an executive summary that states the finding, the risk and the next step.`,
      `Present a recommendation to non-technical stakeholders and note down their objections.`,
    ],
    outcomes: [
      `Reframe a vague business request as a structured problem statement with clear data needs.`,
      `Define KPIs that match a business goal and spot weak metrics in a case study.`,
      `Use Excel lookups, pivot tables and what-if tools to test business ideas quickly.`,
      `Write SQL queries that join and aggregate tables to check facts against source data.`,
      `Gather requirements and work with stakeholders while completing a capstone project.`,
      `Write an executive summary and present findings to a non-technical audience.`,
      `Build a portfolio case study in a domain such as retail, finance, healthcare or marketing.`,
    ],
    whoFor: [
      {
        who: 'Final-year student',
        text: `You enjoy talking to people as much as working with numbers. The path builds problem framing plus basic Excel and SQL, so you can join a team as a junior business analyst with real project work to show.`,
      },
      {
        who: 'IT support engineer',
        text: `You already hear what users need and where processes break. You will add KPI thinking, requirement notes and data checks that help you move from fixing issues toward shaping what gets built.`,
      },
      {
        who: 'Non-IT graduate',
        text: `Commerce, management and science graduates often bring domain knowledge that technical candidates lack. Here you add structured analysis, Excel and SQL to that knowledge and practise presenting it.`,
      },
      {
        who: 'Working professional',
        text: `If you work in operations, sales or finance and are the person who explains the numbers, this path formalises it: framing questions, defining metrics and presenting clear recommendations to leaders.`,
      },
    ],
    path: [
      {
        module: 1,
        focus: `This module gives you the vocabulary and the habit of turning a fuzzy request into a clear problem. Concentrate on the analytics types, the lifecycle and how to structure a problem statement.`,
        topics: [0, 1, 2, 3, 7],
        tools: ['Excel', 'Google Sheets', 'Power BI'],
        practice: { type: 'lab', index: 3 },
      },
      {
        module: 8,
        focus: `A business analyst is often asked which numbers matter. Focus on defining KPIs, aligning them with goals, avoiding common metric mistakes and communicating performance in plain language.`,
        topics: [0, 1, 3, 4, 6, 7],
        tools: ['Excel', 'Power BI', 'Tableau'],
        practice: { type: 'lab', index: 3 },
      },
      {
        module: 2,
        focus: `Excel is the fastest way to test an idea before anyone builds a report. Concentrate on lookups, pivot tables, data validation and what-if scenarios, which let you compare options with real figures.`,
        topics: [1, 2, 3, 4, 5],
        tools: ['Excel', 'Power Query', 'Google Sheets'],
        practice: { type: 'lab', index: 3 },
      },
      {
        module: 3,
        focus: `You do not need to be a database expert, but you should check facts at the source. Learn the SQL basics, joins, aggregates and subqueries, and write queries for business reporting questions.`,
        topics: [0, 1, 2, 3, 5],
        tools: ['SQL', 'MySQL / PostgreSQL', 'pgAdmin'],
        practice: { type: 'lab', index: 1 },
      },
      {
        module: 9,
        focus: `The capstone is where the role comes together. Frame a real problem, work with stakeholders and requirements, run the analysis in a domain like retail or finance, and present to a non-technical audience.`,
        topics: [0, 1, 2, 4, 5, 6],
        tools: ['Excel', 'SQL', 'Power BI'],
        practice: { type: 'lab', index: 0 },
      },
    ],
    careerPath: [
      {
        title: 'Entry roles',
        text: `Junior Business Analyst, Research Analyst (Junior), Operations Analyst (Junior) and Reporting Analyst are the usual starting titles. You spend time gathering requirements, checking numbers and writing summaries for managers.`,
      },
      {
        title: 'Next steps',
        text: `After some experience, you can move to Business Analyst, Insights Analyst, Product Analyst or Process Analyst roles, taking on larger problems and working with several teams at once.`,
      },
      {
        title: 'Longer term',
        text: `Senior Data Analyst and Analytics Manager are the advanced steps in the programme's career tracks. Analysts with strong domain depth can also move toward Analytics Consultant roles that advise on larger problems.`,
      },
    ],
    certifications: [0, 4, 3],
    faqs: [
      {
        q: 'Is coding required to become a business analyst?',
        a: `Not deeply. You should be comfortable with Excel and basic SQL so you can check facts yourself, and both are taught from the start. Heavy programming is not part of this path.`,
      },
      {
        q: 'What is the difference between a business analyst and a data analyst?',
        a: `A business analyst focuses on the problem, the requirements and the recommendation, and uses data to test ideas. A data analyst focuses more on preparing, querying and visualising the data. The roles overlap, and this course prepares you for both.`,
      },
      {
        q: 'Can a non-IT graduate become a business analyst?',
        a: `Yes. Many business analysts come from commerce, management or science backgrounds. The programme starts with fundamentals, and your domain knowledge helps you frame problems better than someone who knows only tools.`,
      },
      {
        q: 'Which domain should I choose for my capstone project?',
        a: `The capstone offers domain case studies in retail, finance, healthcare or marketing. Choose the one closest to the jobs you want, or a sector you already know, since domain knowledge shows in the questions you ask.`,
      },
      {
        q: 'Does this course teach requirement documents and Agile?',
        a: `Not as separate topics. You practise gathering requirements and working with stakeholders inside the capstone, and you write problem statements and summaries. Formal documentation formats and Agile practices are learned on the job or through short add-on study.`,
      },
    ],
    blog: [
      'what-is-data-analytics-and-what-does-a-data-analyst-do',
      'how-to-switch-from-a-non-it-job-to-data-analytics',
      'can-i-become-a-data-analyst-without-a-technical-degree',
      'eligibility-requirements-for-a-data-analytics-course',
      'is-data-analytics-a-good-career-for-freshers',
      'career-opportunities-after-a-data-analytics-course',
    ],
    honestNote: `This programme is data-focused: it covers problem framing, KPIs, Excel, SQL and stakeholder communication. Formal requirement templates, process modelling notations and Agile delivery tools are outside its syllabus.`,
  },

  {
    slug: 'reporting-analyst',
    title: 'Reporting Analyst',
    metaTitle: `Reporting Analyst Course in Hyderabad | Skill IT Education`,
    metaDescription: `Reporting analyst course in Hyderabad: learn Excel, SQL, report automation, QA checks and Power BI reporting through hands-on labs and projects.`,
    lede: `This role course arranges the Data Analytics programme around a reporting analyst who delivers the same accurate reports on time, every cycle. You begin with report structure and automation, sharpen Excel and SQL for data pulls, add profiling and quality checks, then present in Power BI.`,
    skills: [
      'Report structuring',
      'Report automation',
      'Excel formulas',
      'Power Query',
      'SQL data pulls',
      'Report QA checks',
      'Executive summaries',
      'Power BI reports',
    ],
    overview: [
      `A reporting analyst produces the regular numbers a business runs on: the daily sales flash, the weekly operations pack, the month-end performance summary. The core skill is reliability. The same report must arrive on time, use the same definitions every cycle and match the source. Speed matters, but a wrong number in a leadership pack costs more trust than a late one.`,
      `Your week is shaped by a calendar. Early days go to refreshing data, running the pulls and comparing totals with the last period. Midweek you fix mismatches, answer questions from report readers and add a column someone asked for. Later you finalise the pack with an executive summary, check it once more, send it, and note lessons for the next cycle.`,
      `Reporting analysts work in finance, sales operations, HR, supply chain, customer service and MIS teams in almost every industry. Their reports feed budgeting meetings, review calls and performance conversations. When reporting is tidy and repeatable, managers stop rebuilding numbers by hand and spend that time acting on them. It is quiet work, but reporting analysts are often the people whose consistency the rest of the business relies on.`,
    ],
    dayToDay: [
      `Refresh the weekly sales pack and compare each total with the previous period.`,
      `Trace a mismatch between two reports back to a filter or a join.`,
      `Schedule a recurring report so it runs without manual copy and paste.`,
      `Write a two-line executive summary above a table of monthly figures.`,
      `Keep versions of a recurring report so changes and reasons stay traceable.`,
      `Combine data from a database and a spreadsheet into one clean report.`,
      `Run a final accuracy check before the pack goes to leadership.`,
    ],
    outcomes: [
      `Structure a business report so both technical and non-technical readers can follow it.`,
      `Automate and schedule a recurring report using Power BI or Excel.`,
      `Clean and validate a raw extract with Excel formulas, Power Query and data validation.`,
      `Write SQL reporting queries that aggregate data by period, team and product.`,
      `Combine several data sources into one coherent report that ties back to the source.`,
      `Run profiling and accuracy checks that catch missing values and odd totals early.`,
      `Present a report to leadership and answer questions on how each number was built.`,
    ],
    whoFor: [
      {
        who: 'Final-year student',
        text: `You want a first job with a clear routine and a defined tool set. Reporting roles reward accuracy and Excel skill, and this path lets you practise both on real datasets before you graduate.`,
      },
      {
        who: 'IT support engineer',
        text: `You are used to checking whether a system did what it should. That habit transfers to report checks, where you compare totals, trace mismatches and document what changed each cycle.`,
      },
      {
        who: 'Non-IT graduate',
        text: `If you studied commerce or science, the Excel and SQL modules give you a practical base, and the reporting module shows how to structure a pack that managers can read quickly.`,
      },
      {
        who: 'Working professional',
        text: `You may already compile the monthly MIS by hand. This path helps you automate it, add data checks, and move the work into a scheduled Power BI or Excel report.`,
      },
    ],
    path: [
      {
        module: 7,
        focus: `This is the heart of the role, so it comes first. Learn how to structure a report, automate and schedule it, write an executive summary, and run QA checks before anything reaches leadership.`,
        topics: [0, 1, 2, 3, 5, 6, 7],
        tools: ['Power BI', 'Excel', 'Google Data Studio'],
        practice: { type: 'project', index: 0 },
      },
      {
        module: 2,
        focus: `Most reporting packs still live in Excel. Concentrate on formulas, lookups, pivot tables and Power Query, which let you refresh a report instead of rebuilding it by hand every cycle.`,
        topics: [0, 1, 2, 3, 4, 7],
        tools: ['Excel', 'Power Query', 'Google Sheets'],
        practice: { type: 'lab', index: 0 },
      },
      {
        module: 3,
        focus: `Reports are only as fresh as the data pulled into them. Focus on filtering, joins, aggregates and writing queries for business reporting, and learn basic query tuning so pulls run reliably.`,
        topics: [1, 2, 3, 5, 7],
        tools: ['SQL', 'MySQL / PostgreSQL', 'pgAdmin'],
        practice: { type: 'lab', index: 4 },
      },
      {
        module: 4,
        focus: `Profiling is your safety net. Learn summary statistics, data profiling and how to handle missing or skewed data, so you catch odd values before they appear in a report.`,
        topics: [0, 1, 4, 5],
        tools: ['Pandas', 'Pandas Profiling', 'Jupyter Notebook'],
        practice: { type: 'lab', index: 0 },
      },
      {
        module: 6,
        focus: `Once the reporting basics are steady, move them into Power BI. Focus on connecting sources, interactive reports, KPI tracking and publishing, so readers can explore for themselves instead of asking for new extracts.`,
        topics: [0, 1, 2, 5, 6],
        tools: ['Power BI', 'Excel'],
        practice: { type: 'lab', index: 4 },
      },
    ],
    careerPath: [
      {
        title: 'Entry roles',
        text: `Reporting Analyst, Excel Analyst, SQL Analyst and Data Analyst (Trainee) roles are common starting points, with Operations Analyst (Junior) positions in teams that report on daily process numbers.`,
      },
      {
        title: 'Next steps',
        text: `With experience you can move into Business Intelligence Analyst, Dashboard Developer or Performance Analyst roles, where you build and own dashboards rather than only running recurring packs.`,
      },
      {
        title: 'Longer term',
        text: `Long-term options include Senior Data Analyst, Analytics Manager and Head of BI (long-term), as you take on report governance, metric ownership and a wider team of analysts.`,
      },
    ],
    certifications: [3, 1, 0],
    faqs: [
      {
        q: 'What does a reporting analyst do?',
        a: `A reporting analyst prepares recurring reports such as daily sales, weekly operations and monthly performance packs. You pull data, check it, apply the agreed definitions, add a short summary and send it on time, then answer questions from readers.`,
      },
      {
        q: 'Is Excel enough for a reporting analyst role?',
        a: `Excel is the base, but many teams also expect SQL for data pulls and a BI tool such as Power BI for dashboards. This course covers all three, along with Power Query for cleaning and refreshing data.`,
      },
      {
        q: 'How can I automate reports without advanced coding?',
        a: `The course teaches scheduling and refresh in Power BI or Excel, Power Query for repeatable cleaning, and basic macros. These cover most routine packs without writing programs, and you learn where automation is worth the effort.`,
      },
      {
        q: 'How do reporting analysts make sure the numbers are right?',
        a: `By building checks into the routine: compare totals with the source and with the last period, profile the data for missing or odd values, review joins and filters, and keep versions of the report. The course has a QA lab for this.`,
      },
      {
        q: 'Is reporting analyst a good first job for a fresher?',
        a: `It is a common entry point because the tasks are clear and the tools are Excel, SQL and a BI tool. Careful work in a reporting role also builds the habits needed for later analyst and BI roles.`,
      },
    ],
    blog: [
      'is-excel-enough-to-become-a-data-analyst',
      'how-to-learn-sql-for-data-analysis-step-by-step',
      'tools-and-technologies-used-by-data-analysts',
      'what-a-data-analyst-does-on-a-typical-working-day',
      'career-opportunities-after-a-data-analytics-course',
    ],
    honestNote: `The programme covers Excel, SQL, report structure, automation and BI tools. Domain-specific reporting such as statutory or regulatory returns is outside its syllabus and is learned on the job.`,
  },

  {
    slug: 'analytics-consultant',
    title: 'Analytics Consultant',
    metaTitle: `Analytics Consultant Course in Hyderabad | Skill IT Education`,
    metaDescription: `Analytics consultant course in Hyderabad: learn problem framing, data exploration, KPIs and storytelling with dashboards through labs and a capstone.`,
    lede: `This role course arranges the Data Analytics programme around an analytics consultant who frames a client's problem, explores the data and tells a clear story. You start with problem framing and exploration, then add visuals, KPIs and dashboards, and end with a domain project presented to stakeholders.`,
    skills: [
      'Analytics lifecycle',
      'Hypothesis-driven analysis',
      'Data profiling',
      'Correlation analysis',
      'Storytelling with data',
      'KPI benchmarks',
      'Insight presentations',
      'Capstone case study',
    ],
    overview: [
      `An analytics consultant is a problem solver who is brought in when a team knows something is wrong but cannot say what. It may be a fall in repeat customers or a cost that keeps rising. You define the question, decide which data can answer it, test a few ideas and return with a recommendation that the team can act on.`,
      `Work comes in projects rather than daily routines. You spend the first days framing the problem and gathering data, then explore it for patterns, test hypotheses and build a few visuals. The final stretch goes into shaping the story, presenting to stakeholders and handling their challenges. Then a new problem starts, often in a different domain, so you keep learning how each industry measures itself.`,
      `Analytics consultants work in consulting firms, IT services and analytics companies, and in the strategy or insights teams of larger businesses across retail, banking, healthcare and telecom. The role matters because good analysis is wasted if it does not change a decision, and consultants are trusted to connect the numbers to the choices leadership faces. Clear, honest presentation of what the data can and cannot say is a large part of that trust.`,
    ],
    dayToDay: [
      `Turn a client's loose worry into a testable question with a clear scope.`,
      `Profile an unfamiliar dataset to see what it covers and what it misses.`,
      `Test a hypothesis, such as whether discounts really lift repeat purchases.`,
      `Choose three charts that make a finding obvious to a busy executive.`,
      `Compare metrics against benchmarks and targets to show where performance drifts.`,
      `Rehearse a short presentation and prepare answers to tough stakeholder questions.`,
      `Write up findings in a brief that a client can circulate without you.`,
    ],
    outcomes: [
      `Frame a business problem as an analytics project with scope, data needs and outputs.`,
      `Explore a dataset with univariate, bivariate and multivariate analysis to test hypotheses.`,
      `Find and explain correlations, outliers and anomalies without overstating what they prove.`,
      `Build a chart set and a small dashboard that tells one coherent story.`,
      `Set KPI benchmarks and targets that link to a client's stated goal.`,
      `Present findings and recommendations to a non-technical audience with confidence.`,
      `Complete an end-to-end capstone from raw data to a business recommendation.`,
    ],
    whoFor: [
      {
        who: 'Final-year student',
        text: `You like solving open problems and explaining your thinking. This path teaches you to frame a question, explore data and present a recommendation, which suits trainee consulting and analytics roles.`,
      },
      {
        who: 'IT support engineer',
        text: `You already diagnose problems for users. Here you learn to diagnose business problems with data: profiling, hypotheses, KPIs and a clear presentation that a manager can act on.`,
      },
      {
        who: 'Non-IT graduate',
        text: `Management, commerce and science graduates can use their domain knowledge here. You practise the analytics lifecycle from scratch, with no prior coding, and finish with a case study in a chosen sector.`,
      },
      {
        who: 'Working professional',
        text: `If colleagues already ask you what the numbers mean, this path adds structure: hypothesis-driven analysis, KPI benchmarks, storytelling and a full capstone you can present as proof of method.`,
      },
    ],
    path: [
      {
        module: 1,
        focus: `Consulting starts with the question, not the tool. Concentrate on analytics types, the lifecycle, data-driven decision making and turning a vague request into a structured problem statement.`,
        topics: [1, 2, 3, 5, 7],
        tools: ['Excel', 'Power BI', 'Tableau'],
        practice: { type: 'project', index: 0 },
      },
      {
        module: 4,
        focus: `Consultants have to understand unfamiliar data quickly. Focus on data profiling, patterns and anomalies, correlation and hypothesis-driven exploration, and practise writing early insights clearly for a client.`,
        topics: [1, 2, 3, 4, 6, 7],
        tools: ['Pandas', 'Jupyter Notebook', 'Pandas Profiling'],
        practice: { type: 'lab', index: 3 },
      },
      {
        module: 5,
        focus: `Insight only lands when people can see it. Focus on chart selection, storytelling with data and building a small set of visuals that lead the reader from question to answer.`,
        topics: [0, 3, 5, 6, 7],
        tools: ['Matplotlib', 'Seaborn', 'Plotly'],
        practice: { type: 'lab', index: 4 },
      },
      {
        module: 8,
        focus: `Clients judge success through metrics. Concentrate on defining KPIs against business goals, setting benchmarks and targets, spotting design pitfalls and communicating performance, so your recommendations point to numbers a client already cares about.`,
        topics: [0, 1, 4, 6, 7],
        tools: ['Power BI', 'Tableau', 'Excel'],
        practice: { type: 'lab', index: 4 },
      },
      {
        module: 6,
        focus: `Dashboards are often the deliverable a client keeps. Focus on dashboard design principles, KPI tracking, drill-down analysis and presenting insights to stakeholders in Power BI or Tableau.`,
        topics: [0, 2, 5, 6, 7],
        tools: ['Power BI', 'Tableau'],
        practice: { type: 'lab', index: 3 },
      },
      {
        module: 9,
        focus: `The capstone is a rehearsal for a real engagement. Frame the problem, work with stakeholders and requirements, present to a non-technical audience and build a case study you can walk through.`,
        topics: [1, 2, 4, 5, 6, 7],
        tools: ['Excel', 'SQL', 'Power BI'],
        practice: { type: 'lab', index: 3 },
      },
    ],
    careerPath: [
      {
        title: 'Entry roles',
        text: `Analytics Consultant (Trainee), Insights Analyst, Business Analyst and Junior Data Analyst are typical starting titles, often in analytics teams that support several clients or business units.`,
      },
      {
        title: 'Next steps',
        text: `With experience you can move into Analytics Consultant, Product Analyst or Performance Analyst roles, where you lead small pieces of a project and present findings to stakeholders yourself.`,
      },
      {
        title: 'Longer term',
        text: `Senior Data Analyst, Analytics Manager and Head of BI (long-term) are the advanced steps in the programme's career tracks, adding team leadership and ownership of how a business measures itself.`,
      },
    ],
    certifications: [4, 0, 1],
    faqs: [
      {
        q: 'What does an analytics consultant do?',
        a: `An analytics consultant helps a team understand a problem using data. You frame the question, explore the data, test ideas, and present a recommendation with charts and KPIs. Much of the work is communication and judgment, not only calculation.`,
      },
      {
        q: 'Do I need machine learning to become an analytics consultant?',
        a: `Not at the trainee and junior end of the role. This course focuses on exploration, KPIs, dashboards and storytelling. Predictive modelling is outside the syllabus, though it may be useful later as your projects grow.`,
      },
      {
        q: 'How is an analytics consultant different from a data analyst?',
        a: `A data analyst usually works inside one team on recurring questions. A consultant tends to handle open-ended problems in projects, often for several teams or clients, and spends more time framing, presenting and persuading. The core skills are shared.`,
      },
      {
        q: 'How do I practise presenting to stakeholders during the course?',
        a: `Several labs are built around it: presenting exploratory findings, presenting metric performance to a simulated stakeholder audience, and presenting the capstone to a non-technical group. You get repeated practice instead of a single final talk.`,
      },
      {
        q: 'Which industries can I build my consulting case study in?',
        a: `The capstone lab names retail, finance, healthcare and marketing as sample domains. Pick the one that matches the roles you want, and describe the business problem, data, method and recommendation in a portfolio-ready write-up.`,
      },
    ],
    blog: [
      'career-opportunities-after-a-data-analytics-course',
      'difference-between-a-data-analyst-and-a-data-scientist',
      'what-is-data-analytics-and-what-does-a-data-analyst-do',
      'data-analyst-projects-that-impress-recruiters',
      'skills-required-to-become-a-data-analyst',
    ],
    honestNote: `The programme prepares you for the trainee and junior end of analytics consulting. Client management, advisory experience and predictive modelling are outside its syllabus and grow through work on real engagements.`,
  },

  {
    slug: 'dashboard-developer',
    title: 'Dashboard Developer',
    metaTitle: `Dashboard Developer Course in Hyderabad | Skill IT Education`,
    metaDescription: `Dashboard developer course in Hyderabad: learn Power BI, Tableau, DAX basics, chart design and SQL data sources through hands-on labs and projects.`,
    lede: `This role course arranges the Data Analytics programme around a dashboard developer who builds clear, fast and usable dashboards. You start with Power BI and Tableau, learn chart design, connect the SQL and Excel sources behind them, and finish with reporting layouts for different audiences.`,
    skills: [
      'Power BI dashboards',
      'Tableau dashboards',
      'DAX basics',
      'Calculated fields',
      'Chart selection',
      'Plotly charts',
      'Excel slicers',
      'SQL data sources',
    ],
    overview: [
      `A dashboard developer builds the screens people open every morning to see how the business is doing. The job blends layout, data preparation and a little logic, much like designing a control panel. You decide what goes at the top, how filters behave, which colours mean good or bad, and how the numbers underneath are calculated, so that a reader gets the answer within seconds.`,
      `Most weeks you take a request, such as a returns dashboard for the warehouse team, agree the questions it must answer, then connect the data and build it. You test filters, check load speed, fix a confusing chart after a user complains, and publish an updated version with a short guide on how to read it. Small fixes made quickly keep users coming back to the same dashboard.`,
      `Dashboard developers work in BI and analytics teams in retail, banking, telecom, healthcare, logistics and IT services firms, and many people start as Dashboard Developer or BI Developer (Entry) trainees. Their work matters because a dashboard that people find confusing gets ignored, and the effort behind it is wasted. A tidy, quick and honest dashboard, on the other hand, becomes part of how a team works every day.`,
    ],
    dayToDay: [
      `Sketch a dashboard layout with the requester before opening any BI tool.`,
      `Connect a database table and an Excel sheet as sources for one report.`,
      `Add slicers and filters so users can slice data without breaking the view.`,
      `Replace a crowded chart with a simpler one that shows the trend.`,
      `Fix a slow dashboard by trimming columns and simplifying a query.`,
      `Create Power BI measures or Tableau calculated fields for ratios and growth.`,
      `Publish a dashboard, share the link and write a short how-to-read note.`,
    ],
    outcomes: [
      `Build interactive Power BI dashboards with filters, DAX measures and drill-down.`,
      `Create Tableau dashboards with calculated fields and clear drill-down paths.`,
      `Choose chart types that suit the data and remove clutter that slows reading.`,
      `Write SQL queries that supply a dashboard with clean, fast, well-shaped data.`,
      `Build an Excel dashboard using pivot tables, slicers and Power Query.`,
      `Tailor one set of numbers for different audiences, from analyst to leadership.`,
      `Publish, share and QA a dashboard so users can trust what they see.`,
    ],
    whoFor: [
      {
        who: 'Final-year student',
        text: `You enjoy design and data equally and want a role where you can show your work. Dashboards make strong portfolio pieces, and this path has you build several across Excel, Power BI and Tableau.`,
      },
      {
        who: 'IT support engineer',
        text: `You are comfortable with tools, connections and troubleshooting. That helps when a dashboard shows a wrong number and you must trace it back through the query, the source and the refresh.`,
      },
      {
        who: 'Non-IT graduate',
        text: `You do not need coding to begin. Excel comes first, then SQL and BI tools step by step, and your eye for layout and clarity is an advantage in dashboard work.`,
      },
      {
        who: 'Working professional',
        text: `If you already build spreadsheets for your team, this path takes that work to shareable, filterable dashboards with proper design and refresh, so others can use them without asking you.`,
      },
    ],
    path: [
      {
        module: 6,
        focus: `This module is the core of the role. Concentrate on dashboard design principles, interactive reports, DAX basics, Tableau calculated fields and drill-down, and publishing and sharing the finished result.`,
        topics: [0, 2, 3, 4, 5, 6],
        tools: ['Power BI', 'Tableau', 'Excel'],
        practice: { type: 'project', index: 0 },
      },
      {
        module: 5,
        focus: `Good dashboards follow good chart rules. Focus on picking the right chart, multi-panel layouts and interactive charts with Plotly, and practise removing anything that does not help the reader.`,
        topics: [0, 4, 6, 7],
        tools: ['Plotly', 'Seaborn', 'Matplotlib'],
        practice: { type: 'lab', index: 4 },
      },
      {
        module: 3,
        focus: `A dashboard is only as quick as its source. Learn joins, aggregates, CTEs and query optimisation basics, so you can shape the data before it reaches the report.`,
        topics: [1, 2, 3, 5, 7],
        tools: ['SQL', 'MySQL / PostgreSQL', 'pgAdmin'],
        practice: { type: 'lab', index: 4 },
      },
      {
        module: 2,
        focus: `Many stakeholders still ask for a dashboard in Excel. Focus on pivot tables, conditional formatting and Power Query, which shape data before it reaches a dashboard, and build one interactive Excel view.`,
        topics: [1, 2, 3, 4, 6],
        tools: ['Excel', 'Power Query'],
        practice: { type: 'lab', index: 4 },
      },
      {
        module: 7,
        focus: `Different audiences need different dashboards. Concentrate on designing for each audience, combining multiple sources, scheduling refreshes and checking accuracy, so what you publish is dependable for users.`,
        topics: [1, 2, 4, 6, 7],
        tools: ['Power BI', 'Google Data Studio', 'Excel'],
        practice: { type: 'lab', index: 3 },
      },
    ],
    careerPath: [
      {
        title: 'Entry roles',
        text: `Dashboard Developer, BI Developer (Entry), Data Visualization Analyst and Business Intelligence Analyst (Junior) are typical starting titles, mostly in BI and reporting teams that need dashboards built and maintained.`,
      },
      {
        title: 'Next steps',
        text: `With experience you can move into BI Analyst, Data Analyst or Insights Analyst roles, owning dashboards end to end, from requirements and data preparation to launch and user support.`,
      },
      {
        title: 'Longer term',
        text: `Later steps in the career tracks include Senior Data Analyst, Analytics Manager and Head of BI (long-term), where you set dashboard standards and guide a team rather than build every view yourself.`,
      },
    ],
    certifications: [1, 2, 3],
    faqs: [
      {
        q: 'What does a dashboard developer do?',
        a: `A dashboard developer designs and builds interactive reports for business users. You agree the questions, connect the data, create the measures and layout, test filters and speed, publish the dashboard and adjust it based on how people use it.`,
      },
      {
        q: 'Should I learn Power BI or Tableau to become a dashboard developer?',
        a: `Learn one deeply first, then the other. This course gives you both in the BI module, with DAX basics for Power BI and calculated fields for Tableau. The design ideas, such as clear layouts and useful filters, apply to both.`,
      },
      {
        q: 'Do dashboard developers need SQL?',
        a: `It helps a great deal. Many dashboards read from database tables, and a clean, well-shaped query keeps them fast. The SQL module covers joins, aggregates, CTEs and query optimisation basics, which is the part dashboard work uses most.`,
      },
      {
        q: 'How is a dashboard developer different from a BI analyst?',
        a: `The two overlap. A dashboard developer focuses on building and polishing the views, while a BI analyst leans more on metric definitions and stakeholder needs. Small teams often ask one person to do both.`,
      },
      {
        q: 'What makes a dashboard good enough for a portfolio?',
        a: `It answers a clear question, uses the right charts, has useful filters and loads quickly. Add a short note on the audience and the choices you made. The BI Dashboard Build and Excel Dashboard Build projects are good starting points.`,
      },
    ],
    blog: [
      'tools-and-technologies-used-by-data-analysts',
      'tools-a-data-analyst-should-learn-excel-sql-power-bi-python',
      'data-analyst-projects-that-impress-recruiters',
      'programming-languages-required-for-data-analytics',
      'best-data-analytics-course-for-beginners',
    ],
    honestNote: `The programme covers dashboard building in Power BI, Tableau and Excel, with SQL and reporting design. Web development, embedded dashboards and advanced data modelling are outside its syllabus.`,
  },
];

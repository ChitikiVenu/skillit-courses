export default [
  // ---------------------------------------------------------------- 1
  {
    slug: 'how-to-become-a-data-scientist',
    question: 'How can I become a Data Scientist?',
    lede: `You become a data scientist by building skills in a fixed order: statistics and probability, Python, SQL and data cleaning, exploratory analysis, visualisation, machine learning and finally deployment. Then you prove those skills with projects a hiring manager can open and inspect. It is a learnable path, and a structured, hands-on programme can shorten it considerably.`,
    blocks: [
      {
        kind: 'text',
        heading: `What a data scientist actually does all day`,
        paras: [
          `Ask ten working data scientists what they did yesterday and most will not say "trained a neural network". They will say they pulled data with SQL, fixed a column full of missing values, argued about which metric matters, or explained a chart to someone in sales. The glamorous modelling step is a small slice of a much larger job.`,
          `In plain terms, a data scientist takes a business question, finds or builds the data needed to answer it, uses statistics and machine learning to look for the answer, and then communicates it clearly enough that someone can act on it. Sometimes the answer is a dashboard. Sometimes it is a prediction model running behind an app.`,
        ],
      },
      {
        kind: 'text',
        heading: `Why so many Hyderabad graduates are aiming at data science`,
        paras: [
          `Almost every company now collects data, from a small retailer's billing system to a large product firm's app logs. Somebody has to turn that raw material into decisions, and that is why roles such as Data Analyst, Junior Data Scientist and BI Analyst keep appearing on job boards in Madhapur and across India.`,
          `The field also rewards people from many backgrounds. Engineering, science, commerce and even non-technical graduates move into it, because the entry ticket is demonstrable skill rather than one specific degree. That is encouraging, but it also means you are competing on proof, not on paper.`,
        ],
      },
      {
        kind: 'steps',
        heading: `The road to becoming a data scientist in seven steps`,
        intro: `Follow the sequence below. Skipping ahead to machine learning before the earlier steps are solid is the most common reason beginners get stuck.`,
        steps: [
          { title: `Build the mathematical footing`, text: `Learn descriptive statistics, probability, distributions, hypothesis testing and a little linear algebra and calculus. You do not need to become a mathematician, but you should understand what a confidence interval or a gradient means.` },
          { title: `Learn Python properly`, text: `Get comfortable with data structures, functions, file handling and then NumPy and Pandas. Work inside Jupyter Notebook and VS Code so the tools feel familiar before you face real datasets.` },
          { title: `Get fluent in SQL and data cleaning`, text: `Practise SELECT, JOIN, GROUP BY and subqueries, then deal with missing values, duplicates and outliers. Most real projects spend more time here than anywhere else.` },
          { title: `Explore and visualise data`, text: `Learn to profile a dataset, spot patterns and anomalies, and present findings with Matplotlib, Seaborn and Plotly. Add Power BI or Tableau so you can also build dashboards for business audiences.` },
          { title: `Learn core machine learning`, text: `Study regression, classification, clustering, evaluation metrics, cross-validation and overfitting using Scikit-learn. Focus on choosing the right metric and explaining why, not only on getting a high score.` },
          { title: `Deploy at least one model`, text: `Wrap a trained model in a Flask or FastAPI service, or a Streamlit app, and learn the basics of Docker and cloud hosting. A deployed model shows you understand the full lifecycle.` },
          { title: `Package your proof and start applying`, text: `Turn your projects into a resume, a tidy GitHub profile and a clear LinkedIn page, practise interviews, and apply for entry roles such as Data Analyst or Junior Data Scientist.` },
        ],
      },
      {
        kind: 'whom',
        heading: `Who can start the data scientist journey, and who should pause`,
        intro: `Data science suits curious, patient people who enjoy working things out. It is less suited to anyone hoping for a shortcut.`,
        people: [
          { who: `A final-year student curious about data science`, text: `You have time to build a portfolio before graduation, which is a real advantage. Start with maths and Python now and you can show projects by the time placement season arrives.` },
          { who: `A working professional in support, testing or operations`, text: `You already know how businesses run, and that context is valuable in analytics. Expect to study in evenings and weekends, and be realistic that a switch takes months of steady effort.` },
          { who: `A graduate from a non-technical background`, text: `Data science is reachable, but plan for a longer ramp on mathematics and programming. A guided path with labs helps a lot because you get feedback instead of guessing.` },
          { who: `Someone who dislikes working with numbers or long debugging sessions`, text: `Think twice. Cleaning data and fixing broken code is a daily reality, and if that sounds miserable, a different route in tech may suit you better.` },
        ],
      },
      {
        kind: 'list',
        heading: `What the Skill IT data science path teaches, module by module`,
        intro: `The Advanced Data Science Certification Program is built as eight modules across 180 hours of hands-on curriculum.`,
        items: [
          `Mathematics for Data Science: statistics, probability, hypothesis testing and calculus for ML, using NumPy and SciPy`,
          `Python Programming: data structures, OOP basics, NumPy and Pandas`,
          `Data Wrangling with SQL and cleaning: joins, subqueries, outliers, feature engineering basics, MySQL or PostgreSQL and OpenRefine`,
          `Exploratory Data Analysis: univariate, bivariate and multivariate analysis, profiling and communicating early insights`,
          `Data Visualization with Matplotlib and Seaborn, plus interactive charts in Plotly`,
          `Business Intelligence Tools: dashboards in Power BI with DAX basics and in Tableau`,
          `Machine Learning Fundamentals: regression, KNN, Decision Trees, Random Forest, K-Means and model evaluation`,
          `Model Deployment: Pickle or Joblib, Flask, FastAPI, Streamlit, Docker and AWS or Azure basics`,
        ],
      },
      {
        kind: 'list',
        heading: `What you can realistically reach once the skills are in place`,
        intro: `Outcomes depend on effort, portfolio quality and the market, so treat these as possibilities rather than promises.`,
        items: [
          `Entry roles such as Data Analyst, Junior Data Scientist, BI Analyst, Data Science Associate and Reporting Analyst`,
          `Deployment-leaning roles such as Applied Data Scientist or entry-level ML and MLOps Engineer`,
          `Indicative entry-to-mid salaries in India of roughly ₹4L to ₹10L per year for Data Analyst, Junior Data Scientist and BI Analyst roles, varying widely by company, city and skills`,
          `A minimum of five documented portfolio projects, including an end-to-end capstone`,
          `Readiness to prepare for certifications such as the IBM Data Science Professional Certificate or the Google Data Analytics Professional Certificate`,
        ],
      },
      {
        kind: 'cards',
        heading: `How Skill IT Education walks you from mathematics to a deployed model`,
        intro: `Learning alone is possible, but a structured route saves months of guessing what to study next.`,
        cards: [
          { title: `Sequenced, hands-on modules`, text: `Each module builds on the last and closes with a lab or a real project, so you write code and analyse data instead of watching slides.` },
          { title: `Live labs on messy data`, text: `Labs use real, untidy datasets, which is closer to what a data team hands you on day one.` },
          { title: `Projects and a profile that show your analysis work`, text: `Your projects are documented to professional standards, and we help you turn them into a resume, GitHub profile and LinkedIn page.` },
          { title: `Two months working on realistic data problems`, text: `After five months of structured learning, the internship gives you exposure to data analysis, dashboarding and model deployment work.` },
          { title: `Resume reviews and hiring-partner introductions`, text: `You get resume reviews, mock interviews and access to a hiring-partner network, all aimed at helping you prepare rather than promising a particular result.` },
        ],
      },
    ],
    closing: {
      heading: `Your first small step toward the data scientist role`,
      text: `Nobody becomes a data scientist in a weekend, but nobody needs to already be one to begin. Pick the first module, open a notebook this week, and let each finished project make the next one easier.`,
    },
    formHeading: `Get a roadmap for your data science journey`,
    formSubheading: `Share your details and our admissions team in Madhapur will call you back to map out a study plan that fits your background.`,
  },

  // ---------------------------------------------------------------- 2
  {
    slug: 'data-scientist-vs-data-analyst-vs-ml-engineer',
    question: 'Data Scientist, Data Analyst or ML Engineer: which career should I choose?',
    lede: `The three roles overlap but are not the same. A data analyst answers questions with reports and dashboards, a data scientist builds statistical and predictive models to find deeper answers, and an ML engineer makes models run reliably as software. Your choice depends on what kind of work you enjoy, and the good news is that one foundation supports all three.`,
    blocks: [
      {
        kind: 'text',
        heading: `Three job titles with three different daily routines`,
        paras: [
          `Students often treat these titles as ranks, as if analyst comes first, scientist second and ML engineer last. They are better understood as three different kinds of work that share a common base of statistics, Python and SQL.`,
          `An analyst spends most of the day with data already collected: querying it, cleaning it, building dashboards and telling managers what changed and why. A data scientist goes further, forming hypotheses, running experiments and training models to predict or classify. An ML engineer takes a working model and turns it into something a product can call, with APIs, containers, monitoring and versioning.`,
        ],
      },
      {
        kind: 'list',
        heading: `How analyst, scientist and ML engineer roles differ in output`,
        intro: `Think about what each person hands over at the end of a week.`,
        items: [
          `Data Analyst: a dashboard in Power BI or Tableau, a SQL-backed report, or a clear summary of what the numbers show`,
          `Data Scientist: an analysis and a trained model, along with the reasoning for the metrics chosen and the limits of the result`,
          `ML Engineer: a deployed service, often built with Flask or FastAPI and packaged with Docker, that other systems can use`,
          `Shared core: all three write SQL, use Python with Pandas and NumPy, and must explain their work to people who are not technical`,
          `Typical entry titles in the programme's career tracks include Data Analyst, BI Analyst, Junior Data Scientist, Data Science Associate and ML Engineer (Entry-Level)`,
        ],
      },
      {
        kind: 'whom',
        heading: `Which of the three careers suits which kind of person`,
        intro: `Match the role to how you like to work, not to which title sounds most impressive.`,
        people: [
          { who: `Someone who loves tidy answers and business context`, text: `Data analysis and BI will probably feel natural. You get quick feedback, visible impact through dashboards, and a lot of contact with business teams.` },
          { who: `Someone who enjoys maths and open-ended questions`, text: `The data scientist route rewards curiosity about why a model behaves the way it does. Expect to spend time on statistics, feature engineering and evaluation.` },
          { who: `A developer or B.Tech graduate who likes building systems`, text: `ML engineering fits people who enjoy APIs, containers and reliability. You need solid modelling basics, but the emphasis is on shipping.` },
          { who: `Someone who is unsure and wants to keep options open`, text: `That is perfectly sensible at the start. Learn the common foundation and let real project work show you which part you enjoy most.` },
        ],
      },
      {
        kind: 'steps',
        heading: `A practical way to decide between the three careers`,
        intro: `Instead of guessing from job descriptions, test your preferences with small, real tasks.`,
        steps: [
          { title: `Try a dashboard task`, text: `Take a small dataset and build a dashboard in Power BI or Tableau. If you enjoy choosing KPIs and layouts, the analyst and BI direction deserves a serious look.` },
          { title: `Try an exploratory analysis`, text: `Profile a dataset in a Jupyter notebook, check distributions and correlations, and write up what you found. Enjoying the detective work points toward data science.` },
          { title: `Try training a simple model`, text: `Fit a logistic regression or Random Forest with Scikit-learn and evaluate it with precision and recall. Notice whether you enjoy tuning and interpreting results.` },
          { title: `Try serving a model`, text: `Wrap the model in a small Flask or Streamlit app. If this felt more satisfying than the modelling itself, ML engineering may be your lane.` },
          { title: `Reflect and shortlist`, text: `Write down which task made you lose track of time. That honest signal is worth more than any salary chart.` },
          { title: `Choose a first role, not a final one`, text: `Pick the entry role that fits best today. Careers in this field move sideways and upward, and many people change lanes after their first year or two.` },
        ],
      },
      {
        kind: 'text',
        heading: `Why you do not have to pick permanently on day one`,
        paras: [
          `The Skill IT programme groups jobs into career tracks such as Data Analysis and BI, Data Science and ML, Data Engineering, Analytics and Insights, and Deployment and MLOps. Because the modules run in one sequence, a learner who finishes them has touched every track at least once.`,
          `Later paths such as Senior Data Scientist or Data Science Team Lead usually come after experience, and they draw on all these skills at once. Starting as an analyst and drifting toward modelling is a very common and perfectly respectable route.`,
        ],
      },
      {
        kind: 'text',
        heading: `Reading salary numbers for these roles without being misled`,
        paras: [
          `For Data Analyst, Junior Data Scientist and BI Analyst roles in India, the typical entry-to-mid range quoted for this programme is roughly ₹4L to ₹10L per year, with equivalent roles in mature international markets at about $55K to $100K per year. These are broad, indicative ranges, and they move with company, city, specialisation and experience.`,
          `Use them to compare directions loosely, not to promise yourself a number. Your portfolio, communication and interview performance will influence where you land far more than the job title alone.`,
        ],
      },
      {
        kind: 'cards',
        heading: `How Skill IT Education keeps all three career doors open`,
        intro: `The programme does not force an early choice. It lets you experience each kind of work before you commit.`,
        cards: [
          { title: `One curriculum, three tracks`, text: `Dashboards, machine learning labs and a deployment module sit in the same 180-hour programme, so you sample analyst, scientist and engineer tasks.` },
          { title: `Projects that reveal your strengths`, text: `The BI Dashboard Build, the Machine Learning Model Lab and the Deployment Project each match one of the three roles, which helps you see where you shine.` },
          { title: `Internship exposure to real data workflows`, text: `The two-month real-time internship touches data analysis, dashboarding and model deployment, giving you a practical feel for daily work.` },
          { title: `Mock interviews by role`, text: `Interview preparation and mock interviews help you rehearse for the specific entry role you decide to target.` },
        ],
      },
    ],
    closing: {
      heading: `Choose the work you enjoy, then let experience refine it`,
      text: `The right answer today is the role whose daily tasks you would happily repeat for years. Build the shared foundation, try each kind of task, and give yourself permission to adjust as you learn.`,
    },
    formHeading: `Talk through analyst, scientist or ML engineer with a counsellor`,
    formSubheading: `Tell us about your background and goals, and the admissions team will call you back to discuss which direction may suit you.`,
  },

  // ---------------------------------------------------------------- 3
  {
    slug: 'skills-a-data-scientist-needs-to-get-hired',
    question: 'What skills does a data scientist need to get hired?',
    lede: `Hiring teams look for a specific mix: statistics and probability, Python with Pandas and NumPy, SQL, structured exploratory analysis, clear visualisation, core machine learning with correct evaluation, and some deployment awareness. Just as important are communication and the ability to show real projects. Tools change, but this combination of skills stays remarkably consistent across job descriptions.`,
    blocks: [
      {
        kind: 'text',
        heading: `Reading a data scientist job description like a recruiter`,
        paras: [
          `Open five data scientist listings and you will see the same handful of phrases repeated: Python, SQL, statistics, machine learning, visualisation, communication. The long list of tools at the bottom is usually less important than these fundamentals.`,
          `Most hiring managers are asking one question underneath: can this person take a messy problem, work with real data, and give us an answer we can trust? Every skill below is really evidence for that one question.`,
        ],
      },
      {
        kind: 'list',
        heading: `The technical skills a data scientist needs, tied to real tools`,
        intro: `These are the hard skills that appear again and again, along with the tools where you practise them.`,
        items: [
          `Statistics and probability: distributions, hypothesis testing, confidence intervals, correlation and regression, practised with NumPy and SciPy`,
          `Python: data structures, functions, OOP basics, file and exception handling, with Pandas for data manipulation`,
          `SQL: SELECT, JOIN, GROUP BY and subqueries on MySQL or PostgreSQL, one of the most consistently tested skills in interviews`,
          `Data cleaning: missing values, duplicates, outliers, standardisation and feature engineering basics`,
          `Exploratory data analysis and visualisation with Pandas Profiling, Matplotlib, Seaborn and Plotly`,
          `Machine learning with Scikit-learn: regression, KNN, Decision Trees, Random Forest, K-Means, cross-validation and metrics like precision, recall and F1`,
          `Business intelligence in Power BI and Tableau, since many analyst-leaning interviews include a live dashboard exercise`,
          `Deployment basics: Flask, FastAPI, Streamlit, Docker and an introduction to cloud platforms`,
        ],
      },
      {
        kind: 'text',
        heading: `The quieter data scientist skills that decide who is shortlisted`,
        paras: [
          `Two candidates can have identical technical lists and very different outcomes. The difference is often communication. Can you explain why you chose recall over accuracy? Can you tell a non-technical manager what a chart means without jargon? Storytelling with data is a skill, and it can be practised like any other.`,
          `Judgement matters too. Knowing when a simple regression is better than a complex model, when a result looks suspiciously good, or when the data is too poor to answer the question is exactly what separates someone who understands models from someone who only calls library functions.`,
        ],
      },
      {
        kind: 'whom',
        heading: `Which data science skill gaps matter most for each candidate`,
        intro: `Where you start decides where to invest your first effort.`,
        people: [
          { who: `A B.Tech graduate strong in coding`, text: `Your likely gap is statistics and communication. Spend time on hypothesis testing, evaluation metrics and explaining results in plain language.` },
          { who: `A commerce or science graduate`, text: `Your likely gap is programming. Focus on Python and SQL first, then build up to machine learning once you can clean and analyse data comfortably.` },
          { who: `A working analyst using Excel`, text: `You may already have business sense and reporting skill. The step up is Python, machine learning and deployment, which turn you from reporting to predicting.` },
          { who: `Someone who has only watched tutorials`, text: `Your gap is proof. Move from following along to building projects from scratch, where you have to make your own decisions.` },
        ],
      },
      {
        kind: 'steps',
        heading: `Closing your data science skill gaps in a sensible order`,
        intro: `A staged approach beats studying everything at once.`,
        steps: [
          { title: `Audit yourself honestly`, text: `Rate yourself on statistics, Python, SQL, visualisation, machine learning and communication. Be blunt, because your weakest area is usually the interview question that trips you up.` },
          { title: `Fix the foundation first`, text: `Prioritise statistics, Python and SQL before anything fancy. These three are assumed in almost every data role.` },
          { title: `Practise on messy data`, text: `Use real datasets with missing values and inconsistencies rather than clean textbook examples. Cleaning is where practical skill is built.` },
          { title: `Add modelling with correct evaluation`, text: `Train a model, use a proper train-test split and cross-validation, and choose a metric you can defend. Guard against overfitting.` },
          { title: `Learn to present`, text: `Build a dashboard or a short written brief for each project. Practise explaining it aloud to a friend who does not know data science.` },
          { title: `Ship something`, text: `Deploy one model as an API or Streamlit app. Even a small working demo shows you can finish what you start.` },
        ],
      },
      {
        kind: 'list',
        heading: `Proof of data science skill that hiring teams can actually check`,
        intro: `Claims on a resume are easy. Evidence is harder to fake and easier to trust.`,
        items: [
          `A statistical analysis brief showing hypothesis testing and correlation on a real dataset`,
          `A cleaning notebook that documents how you handled missing values, duplicates and outliers`,
          `An EDA report that surfaces patterns and anomalies, not only charts`,
          `A dashboard built in Power BI or Tableau for a realistic business use case`,
          `A machine learning notebook with a justified metric choice`,
          `A deployed model, however small, running behind an API or web app`,
        ],
      },
      {
        kind: 'cards',
        heading: `How Skill IT Education turns a skill list into visible ability`,
        intro: `The programme is designed so that each skill on the list has a lab and a deliverable attached to it.`,
        cards: [
          { title: `Skills taught in a working order`, text: `From mathematics through Python, SQL, EDA, visualisation, BI, machine learning and deployment, every module assumes the previous one.` },
          { title: `Live labs with real data`, text: `Labs mirror production-style scenarios with messy datasets, so the skills you practise are the ones interviewers test.` },
          { title: `A minimum of five portfolio projects`, text: `Projects are documented to professional reporting standards and added to your portfolio and resume as proof of each skill.` },
          { title: `Interview and placement preparation`, text: `Mock interviews and resume reviews help you present these skills clearly, supported by a hiring-partner network.` },
        ],
      },
    ],
    closing: {
      heading: `Skills become hireable once they are visible`,
      text: `Nobody expects a fresher to master everything. What convinces a hiring team is a solid core, a few honest projects and the ability to explain your choices calmly. Start with the weakest area on your list and keep going.`,
    },
    formHeading: `Find out which data science skills to build first`,
    formSubheading: `Share your current skills and goals, and the admissions team will call you back with a suggested learning order.`,
  },

  // ---------------------------------------------------------------- 4
  {
    slug: 'learn-statistics-and-python-for-data-science-step-by-step',
    question: 'How do I learn statistics and Python for data science step by step?',
    lede: `Start with descriptive statistics and basic probability using a spreadsheet, then learn Python syntax and data structures, then move to NumPy and Pandas, and finally combine the two by running hypothesis tests and regressions on real data. Learning them side by side, with small datasets and frequent practice, works far better than finishing one completely before touching the other.`,
    blocks: [
      {
        kind: 'text',
        heading: `Start with a spreadsheet, not a neural network`,
        paras: [
          `Many beginners open a machine learning course on day one and feel lost by day three. The reason is usually not intelligence, it is missing foundations. Machine learning is statistics and linear algebra wearing a programming costume, so it helps to understand the ideas underneath first.`,
          `A spreadsheet in Excel or Google Sheets is a friendly place to begin. Calculate a mean, a median and a standard deviation by hand, draw a histogram, and see how one extreme value drags the average. That small experience makes later Python code meaningful rather than magical.`,
        ],
      },
      {
        kind: 'text',
        heading: `Why statistics and Python should be learned together`,
        paras: [
          `Statistics without code stays theoretical, and Python without statistics produces answers you cannot interpret. If you run a regression but cannot explain a p-value or a confidence interval, an interviewer will notice quickly.`,
          `A good rhythm is to learn one statistical idea, then immediately compute it in Python on real data. Learn correlation on Monday, calculate it with Pandas on Tuesday, and plot it on Wednesday. The concept sticks because you have used it.`,
        ],
      },
      {
        kind: 'steps',
        heading: `A step-by-step plan for learning statistics and Python`,
        intro: `Treat this as a sequence of small, finishable stages rather than one huge subject.`,
        steps: [
          { title: `Learn descriptive statistics by hand`, text: `Cover mean, median, mode, variance, standard deviation and common distributions. Do the calculations in Excel or Google Sheets first so you can see every step.` },
          { title: `Learn basic probability and combinatorics`, text: `Understand events, conditional probability and counting methods with everyday examples. These ideas appear again in classification and in interview questions.` },
          { title: `Learn Python fundamentals`, text: `Practise syntax, data types, loops, functions, lists, dictionaries, tuples and sets. Write small programs in VS Code and set up a virtual environment so your projects stay organised.` },
          { title: `Move to NumPy and Pandas`, text: `Use NumPy arrays for numerical work and Pandas DataFrames to load, filter, group and summarise data. Try a real CSV file, not a toy example.` },
          { title: `Combine them with inference`, text: `Use SciPy to run a hypothesis test, calculate a confidence interval and check correlation on a real dataset. Interpret the output in a written sentence.` },
          { title: `Fit a simple regression`, text: `Fit a straight line between two variables, check how well it explains the data and understand what the coefficients mean. This bridges statistics into machine learning.` },
          { title: `Touch calculus and gradients lightly`, text: `Learn what a derivative is and how a gradient guides a model toward a better fit. You only need intuition, not exam-level algebra.` },
        ],
      },
      {
        kind: 'list',
        heading: `The statistics ideas worth understanding before machine learning`,
        intro: `If you can explain each of these in your own words, you are in good shape.`,
        items: [
          `Descriptive statistics and what different distributions look like`,
          `Sampling and why a sample can represent a population`,
          `Hypothesis testing and what a p-value does and does not tell you`,
          `Confidence intervals and how to read them`,
          `Correlation versus causation, and why they are different`,
          `Regression basics, including how to read a fitted line`,
          `Vectors and matrices, since datasets are stored as matrices`,
          `Derivatives and gradients as the engine behind model training`,
        ],
      },
      {
        kind: 'text',
        heading: `Python habits that make statistics work easier`,
        paras: [
          `You do not need all of Python for data science. You need the parts you use every day: reading files, handling exceptions, writing small functions, and manipulating tables in Pandas. Add clean, reusable code as a habit early, because notebooks become messy quickly.`,
          `Work in Jupyter Notebook for exploration and VS Code for scripts. Keep each experiment small, comment your reasoning, and rerun everything from top to bottom before you call it finished. That discipline saves hours later.`,
        ],
      },
      {
        kind: 'whom',
        heading: `Who will find statistics and Python easy to start, and who needs patience`,
        intro: `Everyone can learn this, but the starting line differs.`,
        people: [
          { who: `A student who remembers school and college maths`, text: `You will pick up descriptive statistics and probability quickly. Put more time into Python and coding practice.` },
          { who: `A programmer from another stack`, text: `Python syntax will be easy. The harder part is statistical thinking, so give hypothesis testing and evaluation extra attention.` },
          { who: `A working professional returning to maths after years`, text: `Be kind to yourself and go slowly. Revise fundamentals with small daily sessions and use real workplace data to stay motivated.` },
          { who: `Someone hoping to skip the mathematics entirely`, text: `Think twice. You can call library functions without it, but you will struggle to justify results in interviews and on the job.` },
        ],
      },
      {
        kind: 'list',
        heading: `Common mistakes when learning statistics and Python alone`,
        intro: `Self-study works for many people, but these traps are worth avoiding.`,
        items: [
          `Watching video after video without writing code`,
          `Memorising formulas without checking them on real data`,
          `Using only clean, tutorial-style datasets and never meeting missing values`,
          `Skipping probability because it feels abstract`,
          `Copying notebook code without understanding each line`,
          `Not documenting what you did, so nothing ends up in a portfolio`,
        ],
      },
      {
        kind: 'cards',
        heading: `How Skill IT Education guides statistics and Python learning`,
        intro: `The first two modules of the programme are built exactly for this foundation stage.`,
        cards: [
          { title: `Mathematics for Data Science, 2 weeks`, text: `Twenty hours covering linear algebra, probability, hypothesis testing, regression basics and calculus for ML, with NumPy, SciPy and spreadsheets.` },
          { title: `Python Programming, 3 weeks`, text: `Thirty hours on core Python, NumPy and Pandas, ending with a Python Data Processing Script that loads, cleans and summarises a real dataset.` },
          { title: `Labs after every concept`, text: `You compute descriptive statistics, run a hypothesis test and clean tables in Pandas during lab sessions, so theory and code stay connected.` },
          { title: `Feedback and assessment`, text: `Each module ends with a quiz and a practical task, so you find gaps early rather than in an interview.` },
        ],
      },
    ],
    closing: {
      heading: `Small daily practice beats a big weekend cram`,
      text: `Statistics and Python feel heavy only when studied in one giant chunk. Give them an hour a day, alternate concept and code, and within a couple of months the foundation will feel like your own.`,
    },
    formHeading: `Plan your statistics and Python learning path`,
    formSubheading: `Tell us your current level and the admissions team will call you back to suggest where to begin.`,
  },

  // ---------------------------------------------------------------- 5
  {
    slug: 'data-science-project-lifecycle-from-start-to-finish',
    question: 'What does a real data science project look like from start to finish?',
    lede: `A real project moves through clear stages: framing a business question, collecting data, cleaning it, exploring it, visualising findings, building and evaluating a model, deploying it, and monitoring the result. Modelling is only one stage. Most of the effort goes into understanding the problem and preparing data, and the project is finished only when someone can actually use the answer.`,
    blocks: [
      {
        kind: 'text',
        heading: `A project starts with a business question, not a dataset`,
        paras: [
          `Imagine a subscription service worried about customers cancelling. A weak project begins with "let's train a model". A strong project begins with "which customers are likely to cancel next month, and what could we do about it?" The question decides what data you need and how you will judge success.`,
          `Spend time here. Ask who will use the answer, what decision it will change, and what a useful result looks like. A model with high accuracy that nobody can act on is a failed project, however clever it is.`,
        ],
      },
      {
        kind: 'steps',
        heading: `The stages of a data science project, from question to live app`,
        intro: `Real projects loop back and forth, but this is the general order in which work happens.`,
        steps: [
          { title: `Frame the problem`, text: `Turn the business worry into a specific, measurable question and agree on how success will be measured. Decide early whether this is a prediction, a classification or an analysis task.` },
          { title: `Collect and extract data`, text: `Pull data from relational databases with SQL and, where needed, from public APIs or scraped sources. Expect it to live in several places and formats.` },
          { title: `Clean and prepare the data`, text: `Handle missing values, duplicates and outliers, standardise columns, and merge or reshape tables into one analysis-ready dataset using Pandas and tools like OpenRefine.` },
          { title: `Explore before modelling`, text: `Run univariate, bivariate and multivariate analysis, look at correlations, and hunt for anomalies. EDA shapes which features and models make sense.` },
          { title: `Visualise and share early insights`, text: `Use Matplotlib, Seaborn or a Power BI dashboard to show what you found. Stakeholders often give useful corrections at this point.` },
          { title: `Build and evaluate models`, text: `Engineer features, split the data, train models in Scikit-learn and compare them with cross-validation. Pick a metric such as precision, recall or F1 that suits the problem, and check for overfitting.` },
          { title: `Deploy and monitor`, text: `Serialise the model with Pickle or Joblib, serve it through Flask or FastAPI, package it with Docker and host it. Keep watching its behaviour and version your work.` },
        ],
      },
      {
        kind: 'list',
        heading: `Where each project stage sits in the Skill IT modules`,
        intro: `The programme's eight modules follow the same order as a real project, which is deliberate.`,
        items: [
          `Framing and inference: Mathematics for Data Science, with statistical inference for data decisions`,
          `Data extraction and cleaning: Data Wrangling with SQL, Pandas and OpenRefine, culminating in the Data Cleaning Lab`,
          `Exploration: Exploratory Data Analysis, with the EDA and Visualization Project`,
          `Communication: Data Visualization and Business Intelligence Tools, ending with a BI Dashboard Build`,
          `Modelling: Machine Learning Fundamentals, with the Machine Learning Model Lab`,
          `Deployment: Model Deployment with Flask, FastAPI, Streamlit, Docker and AWS or Azure basics, supported by a Deployment Project`,
          `Bringing it all together: the End-to-End Data Science Project, which takes a business problem from raw data to a deployed, interactive prediction application`,
        ],
      },
      {
        kind: 'text',
        heading: `Where data science projects quietly go wrong`,
        paras: [
          `The commonest failure is jumping straight to modelling with unclean data. Results look impressive until someone notices duplicate rows or a column that leaks the answer. Careful cleaning and exploration protect you from this.`,
          `The second is evaluating badly: testing on the same data you trained on, choosing accuracy for an imbalanced problem, or ignoring overfitting. The third is stopping at the notebook. A model that lives only in a notebook cannot help a business, which is why deployment matters.`,
        ],
      },
      {
        kind: 'whom',
        heading: `Who gains most from working through a full project`,
        intro: `Completing one project end to end teaches more than reading about ten.`,
        people: [
          { who: `A student who has finished tutorials but built nothing`, text: `A full project forces you to make decisions on your own, which is exactly the experience interviewers ask about.` },
          { who: `A working analyst wanting to move into modelling`, text: `Extending your reporting skill into training and deploying a model shows you can own the whole lifecycle.` },
          { who: `A developer curious about machine learning`, text: `You will already like the deployment stage. The new learning is in cleaning, exploration and evaluation.` },
          { who: `Someone looking for a quick certificate only`, text: `Think twice. Real projects take patience and repeated debugging, and there is no shortcut around that.` },
        ],
      },
      {
        kind: 'list',
        heading: `What a finished project should leave in your portfolio`,
        intro: `Use this as a checklist before you call any project done.`,
        items: [
          `A clear problem statement and a success metric`,
          `A documented data source and cleaning steps`,
          `An EDA section with visuals and written insights`,
          `Model comparison with a justified evaluation metric`,
          `A working API or interactive app, not only a notebook`,
          `A short write-up explaining limits and what you would improve next`,
        ],
      },
      {
        kind: 'cards',
        heading: `How Skill IT Education helps you complete real projects`,
        intro: `Projects are the heart of the programme rather than an add-on.`,
        cards: [
          { title: `Every module ends with a project or lab`, text: `A minimum of five projects across the programme are documented to professional reporting standards and added to your portfolio.` },
          { title: `A capstone from raw data to deployment`, text: `The final End-to-End Data Science Project makes you run the entire lifecycle rather than isolated pieces.` },
          { title: `Real-time internship exposure`, text: `The two-month internship lets you see how data analysis, dashboarding and deployment work in a live setting.` },
          { title: `Review and feedback`, text: `Practical assessments in each module give you feedback on your approach, and resume reviews help you describe projects well.` },
        ],
      },
    ],
    closing: {
      heading: `A project is finished when someone can use it`,
      text: `Take one small question, follow it through every stage, and deploy the result, even in a modest form. That single complete cycle will teach you more than any number of half-finished notebooks.`,
    },
    formHeading: `Start a hands-on data science project with expert guidance`,
    formSubheading: `Share your details and the admissions team will call you back to explain how the projects and capstone are structured.`,
  },

  // ---------------------------------------------------------------- 6
  {
    slug: 'can-a-fresher-become-a-data-scientist',
    question: 'Can a fresher become a data scientist without work experience?',
    lede: `Yes, a fresher can enter the field, though the first job is often a Data Analyst, Data Science Associate or Junior Data Scientist role rather than a senior one. Employers hiring freshers cannot check your experience, so they check proof: a solid foundation, a portfolio of real projects and clear communication. Experience can be replaced by evidence, but not by wishful thinking.`,
    blocks: [
      {
        kind: 'text',
        heading: `What "no experience" really means in data science hiring`,
        paras: [
          `When a job post says "experience required", it usually means "show me you can do the work". For a fresher, that evidence comes from projects, internships, certifications and the way you explain your thinking. It rarely means you must have held a data science title before.`,
          `Companies hiring at entry level know they will train you. They are looking for a person with the right base, who learns fast and can work with real, messy data. That is a much lower bar than years of experience, though it still asks for genuine preparation.`,
        ],
      },
      {
        kind: 'text',
        heading: `Why fresher data science hiring rewards proof over years`,
        paras: [
          `Data science is a skills field. Two graduates from the same college can look identical on paper, yet one has cleaned a real dataset, built a dashboard and deployed a model, while the other has only completed course videos. The first is far easier to hire, because the interviewer can open the work and ask questions about it.`,
          `That is good news for freshers in Hyderabad and elsewhere. You cannot invent five years of experience, but you can invent, or rather build, five good projects in a few months.`,
        ],
      },
      {
        kind: 'whom',
        heading: `Freshers, switchers and the honest cases where extra time is needed`,
        intro: `The route is open, but not everyone starts from the same place.`,
        people: [
          { who: `A final-year engineering or science student`, text: `You are in a strong position. Begin the foundation now and graduate with projects instead of graduating and starting from zero.` },
          { who: `A recent graduate who has been searching for months`, text: `A focused, structured path with visible projects can change how you present yourself. Expect effort and patience, not overnight change.` },
          { who: `A non-IT graduate, such as commerce or arts`, text: `It is possible, especially toward analyst and BI roles. Plan extra time for programming and mathematics before modelling.` },
          { who: `A working professional with two or three years elsewhere`, text: `Your domain knowledge can be an asset. You are a career switcher rather than a pure fresher, and analytics roles connected to your field may be the natural first move.` },
          { who: `Someone expecting a data scientist title and a top salary immediately`, text: `Think twice. Most people begin in analyst or associate roles and grow from there.` },
        ],
      },
      {
        kind: 'steps',
        heading: `A seven-step plan for a fresher with zero experience`,
        intro: `Follow this sequence and you will have something real to show within months, not years.`,
        steps: [
          { title: `Choose a starting target`, text: `Aim for entry roles such as Data Analyst, BI Analyst, Data Science Associate or Junior Data Scientist. Naming a target keeps your learning focused.` },
          { title: `Build the foundation properly`, text: `Learn statistics and probability, then Python with NumPy and Pandas, then SQL and data cleaning. These are assumed in almost every fresher interview.` },
          { title: `Clean up untidy datasets on purpose`, text: `Use real datasets with gaps and inconsistencies. This is the closest thing to workplace experience you can create by yourself.` },
          { title: `Add visualisation and dashboards`, text: `Learn Matplotlib, Seaborn, Power BI and Tableau. Dashboards are visible, easy to show and often tested in live exercises.` },
          { title: `Learn machine learning and deploy one model`, text: `Train models in Scikit-learn, evaluate them correctly, and put one behind a Flask, FastAPI or Streamlit app.` },
          { title: `Get real-world exposure`, text: `Take an internship or work on live-style tasks. Even a couple of months of guided exposure changes how confidently you speak in interviews.` },
          { title: `Package and apply`, text: `Turn projects into a resume, GitHub profile and LinkedIn page, do mock interviews, and apply steadily rather than waiting until you feel perfect.` },
        ],
      },
      {
        kind: 'list',
        heading: `Entry roles a data science fresher can realistically aim for`,
        intro: `These roles appear in the programme's career tracks and are common starting points.`,
        items: [
          `Data Analyst, Data Analyst (Trainee) or Junior Data Analyst`,
          `Junior Business Analyst or Reporting Analyst`,
          `Business Intelligence Analyst or Insights Analyst`,
          `Data Science Associate or Junior Data Scientist`,
          `Junior Data Engineer, ETL Analyst (Trainee) or Data Wrangling Specialist`,
          `ML Engineer (Entry-Level) for those strong in deployment`,
          `Indicative entry-to-mid salaries in India of roughly ₹4L to ₹10L per year for Data Analyst, Junior Data Scientist and BI Analyst roles, depending on company, location and skills`,
        ],
      },
      {
        kind: 'text',
        heading: `Honest timelines and expectations for a data science fresher`,
        paras: [
          `Realistically, moving from zero to job-ready takes several months of steady work, not a few weeks. The Skill IT programme runs seven months in total: five months of structured learning and two months of internship. That pace reflects how long it genuinely takes to absorb the skills and apply them.`,
          `Do not measure yourself against people who post one-week success stories. Your first offer may not be at a famous company, and that is fine. A first role builds the experience that opens the second one.`,
        ],
      },
      {
        kind: 'cards',
        heading: `How Skill IT Education helps a fresher build experience from scratch`,
        intro: `The programme is designed for people who have not worked on data before.`,
        cards: [
          { title: `Start from mathematics, no assumptions`, text: `The first module builds statistics and probability foundations before any coding, so career changers and graduates begin on equal ground.` },
          { title: `Projects as your work history`, text: `A minimum of five portfolio projects, including a capstone, give you something concrete to discuss where a job history would normally sit.` },
          { title: `Two months of internship as your first experience line`, text: `The internship exposes you to data analysis, dashboarding and model deployment work, which is valuable experience for your resume.` },
          { title: `Placement help aimed at first-time applicants`, text: `Resume reviews, mock interviews and a hiring-partner network help you present your preparation confidently to employers.` },
        ],
      },
    ],
    closing: {
      heading: `Being new is a starting point, not a verdict`,
      text: `Every working data scientist was once a fresher who had to prove themselves with something other than a job title. Build honestly, document clearly, and let your work speak while you gather your first experience.`,
    },
    formHeading: `Ask how a fresher can begin a data science career`,
    formSubheading: `Leave your details and the admissions team will call you back to discuss a starting plan that suits a fresher's background.`,
  },

  // ---------------------------------------------------------------- 7
  {
    slug: 'data-science-resume-github-and-linkedin-profile',
    question: 'How do I build a data science resume, GitHub and LinkedIn profile?',
    lede: `Treat the three as one story told in three places. Your resume gives a quick, evidence-led summary, your GitHub shows the actual work in tidy repositories, and your LinkedIn page adds context and makes you discoverable to recruiters. Each should lead with projects and results rather than a list of courses, and each should point to the same handful of strong pieces of work.`,
    blocks: [
      {
        kind: 'text',
        heading: `What recruiters look for across your three data science profiles`,
        paras: [
          `A recruiter typically skims. They want to know quickly whether you can handle data, whether you have built anything real, and whether you can communicate. If those answers are easy to find, you move forward. If they are buried, you may not.`,
          `The three profiles have different jobs. The resume is a focused summary, usually one page for a fresher. GitHub is your proof: code, notebooks and write-ups a technical person can inspect. LinkedIn is your public identity, where recruiters search by skills and read a slightly warmer version of your story.`,
        ],
      },
      {
        kind: 'steps',
        heading: `Building your resume, GitHub and LinkedIn in seven steps`,
        intro: `Do them in this order, because each one feeds the next.`,
        steps: [
          { title: `Finish and document two or three projects first`, text: `Choose your strongest work, for example a data cleaning project, a dashboard and a deployed model. Profiles built on real projects are far easier to write.` },
          { title: `Write a project-first resume`, text: `Put a short summary, skills and projects near the top, then education and internship experience. Each project line should state the problem, the tools and what you found or built.` },
          { title: `Organise your GitHub repositories`, text: `Give each project its own repository with a clear name, a written README, the notebook or code, and instructions to run it. Remove half-finished experiments that distract from your best work.` },
          { title: `Pin your best work`, text: `Pin three or four strongest repositories on your GitHub profile and add a short profile introduction. Make sure the first thing a visitor sees is your best project.` },
          { title: `Craft the LinkedIn headline and About section`, text: `Use a headline that states your target role and core skills, then write an About section in first person describing what you build and what you are looking for.` },
          { title: `Add featured projects and skills to LinkedIn`, text: `Use the Featured section for your projects and dashboards, list skills like Python, SQL, Power BI and machine learning, and mention your internship.` },
          { title: `Keep all three consistent and updated`, text: `Use the same project names and dates everywhere. Refresh them after every new project so the profiles never look abandoned.` },
        ],
      },
      {
        kind: 'list',
        heading: `What belongs on a data science resume, and what does not`,
        intro: `Keep it to one clean page as a fresher, and make every line earn its space.`,
        items: [
          `A two or three line summary naming your target role and strongest skills`,
          `A skills section grouped by area, such as Python, SQL, visualisation, machine learning and deployment tools`,
          `Projects with the problem solved, tools used and a specific outcome`,
          `Internship or hands-on experience described by tasks and results`,
          `Certifications or certification preparation, named accurately`,
          `Education kept brief, with no long list of school details`,
          `Leave out vague claims such as "expert in AI" or unexplained skill bars`,
        ],
      },
      {
        kind: 'text',
        heading: `Writing a LinkedIn headline and About section for data roles`,
        paras: [
          `A headline such as "Aspiring Data Analyst | Python, SQL, Power BI | Hyderabad" tells a recruiter exactly what to search for. Avoid vague words like "passionate" or "dreamer" alone. Say what you can do.`,
          `In the About section, write four or five short sentences: who you are, the tools you use, one or two projects with what they showed, and the kind of role you want. Speak plainly. Recruiters read many profiles, and clarity stands out.`,
        ],
      },
      {
        kind: 'list',
        heading: `A GitHub repository checklist for every data science project`,
        intro: `A tidy repository suggests a tidy thinker.`,
        items: [
          `A descriptive repository name and a one-line summary`,
          `A README explaining the business question, the data, the approach and the results`,
          `Notebooks that run from top to bottom without errors`,
          `A requirements file or environment notes so others can reproduce the work`,
          `Clear folders for data samples, notebooks and scripts`,
          `A screenshot or short description of the dashboard or app, if there is one`,
        ],
      },
      {
        kind: 'whom',
        heading: `Who should prioritise which profile first`,
        intro: `Your starting position changes where the effort should go.`,
        people: [
          { who: `A final-year student with only academic projects`, text: `Build the resume and GitHub first, using real datasets in place of textbook ones. LinkedIn can follow once the work is visible.` },
          { who: `A working professional switching into data`, text: `Lead with LinkedIn and your resume, and reframe your existing experience through a data lens, such as reporting, process improvement or metrics.` },
          { who: `A candidate with strong projects but no online presence`, text: `You mainly need presentation. Add READMEs, pin repositories and write a clear LinkedIn story.` },
          { who: `Someone who has not built any projects yet`, text: `Think twice before polishing profiles. Empty polish is easy to spot, so build the work first.` },
        ],
      },
      {
        kind: 'cards',
        heading: `How Skill IT Education supports your resume, GitHub and LinkedIn`,
        intro: `Profile building is part of the programme, not something left to the last week.`,
        cards: [
          { title: `Projects made to be shown`, text: `Your work is documented to professional reporting standards, which makes README files, resume lines and LinkedIn descriptions much easier to write.` },
          { title: `Resume reviews`, text: `Placement support includes resume reviews, so an experienced person checks how your projects and skills read.` },
          { title: `GitHub and LinkedIn guidance`, text: `We help you organise repositories and shape a LinkedIn page that reflects your real skills.` },
          { title: `Internship content to feature`, text: `The two-month real-time internship gives you genuine experience in analysis, dashboarding or deployment to place on all three profiles.` },
        ],
      },
    ],
    closing: {
      heading: `Let your profiles say what your work already proves`,
      text: `Good profiles are not decoration. They are a clear window into work you have actually done. Build the projects, describe them plainly, and keep all three profiles tidy and current.`,
    },
    formHeading: `Get help with your data science resume and profiles`,
    formSubheading: `Share your details and the admissions team will call you back to explain how profile building is supported in the programme.`,
  },

  // ---------------------------------------------------------------- 8
  {
    slug: 'how-to-prepare-for-a-data-science-interview',
    question: 'How do I prepare for a data science interview?',
    lede: `Prepare across five areas: statistics and probability, SQL, Python with Pandas, machine learning concepts with correct evaluation, and the story behind your own projects. Practise out loud, solve a few take-home style exercises, and rehearse explaining your choices simply. Interviewers care less about memorised answers than about how clearly you reason through unfamiliar problems.`,
    blocks: [
      {
        kind: 'text',
        heading: `What data science interviews usually test, round by round`,
        paras: [
          `Formats vary, but most processes include some mix of a screening call, a technical round on statistics, SQL and Python, a machine learning discussion, and often a take-home assignment or live exercise. For analyst-leaning roles the exercise may be a Power BI or Tableau dashboard.`,
          `Underneath every round is the same test: can you think clearly with data? A candidate who explains why they picked recall over accuracy, or how they would handle missing values, usually impresses more than one who recites definitions.`,
        ],
      },
      {
        kind: 'steps',
        heading: `A six-week plan for data science interview preparation`,
        intro: `Adjust the pace to your schedule, but keep the order, since later topics rely on earlier ones.`,
        steps: [
          { title: `Week one: revise statistics and probability`, text: `Go through distributions, hypothesis testing, confidence intervals, correlation, regression and basic probability. Practise explaining each in two plain sentences.` },
          { title: `Week two: sharpen SQL`, text: `Write queries with SELECT, JOIN, GROUP BY and subqueries daily on practice datasets. SQL is one of the most consistently tested skills, so build speed and accuracy.` },
          { title: `Week three: Python and Pandas fluency`, text: `Practise loading, cleaning, grouping and summarising data without looking things up. Time yourself on small exercises.` },
          { title: `Week four: machine learning concepts`, text: `Review supervised versus unsupervised learning, regression, KNN, Decision Trees, Random Forest, K-Means, cross-validation, overfitting and metrics such as precision, recall and F1.` },
          { title: `Week five: a full take-home rehearsal`, text: `Take a fresh dataset and produce a short EDA, a model and a written summary in a fixed time. Then review what you would do differently.` },
          { title: `Week six: mock interviews and project stories`, text: `Do at least two mock interviews with someone who will challenge you, and rehearse a two-minute story for each portfolio project.` },
        ],
      },
      {
        kind: 'list',
        heading: `Statistics and machine learning questions worth rehearsing aloud`,
        intro: `Practise answering these without notes, in simple language.`,
        items: [
          `What is a p-value, and what does it not tell you?`,
          `What is the difference between correlation and causation?`,
          `How do you handle missing values and outliers, and why?`,
          `What is overfitting, and how do a train-test split and cross-validation help?`,
          `When would you use precision over recall, or F1 over accuracy?`,
          `How does a Random Forest differ from a single Decision Tree?`,
          `How would you explain K-Means clustering to a non-technical manager?`,
          `Walk me through how you would deploy a model as an API`,
        ],
      },
      {
        kind: 'text',
        heading: `Practising SQL, Python and take-home exercises the right way`,
        paras: [
          `For SQL, avoid only reading solutions. Write queries from a blank editor, run them against real tables and check the output. For Python, get comfortable with Pandas operations such as merging, grouping and pivoting, because these come up in live coding.`,
          `For take-home exercises, structure matters as much as the model. Start with a problem statement, show brief EDA, explain data cleaning choices, compare a couple of models, justify your metric and finish with limitations and next steps. A neat, readable notebook often beats a clever but confusing one.`,
        ],
      },
      {
        kind: 'whom',
        heading: `Which candidates need which kind of interview preparation`,
        intro: `Your background decides where the weak spots probably are.`,
        people: [
          { who: `A fresher with strong projects but little interview practice`, text: `Do mock interviews early. Speaking your thoughts aloud is a separate skill from knowing them.` },
          { who: `A coder who avoided the mathematics`, text: `Give extra time to statistics and probability. These are commonly probed, and shaky answers there are easy to spot.` },
          { who: `A working analyst moving to data science`, text: `Your SQL and business sense are probably solid. Focus on machine learning concepts, evaluation and explaining modelling choices.` },
          { who: `Someone hoping to memorise answers`, text: `Think twice. Interviewers follow up with "why", and memorised lines fall apart quickly.` },
        ],
      },
      {
        kind: 'text',
        heading: `How to explain your own projects in a data science interview`,
        paras: [
          `Your projects are the part of the interview you control. Prepare a short structure: the problem, the data, what you did to clean and explore it, the model you chose and why, how you evaluated it, and what you would improve. Keep it under two minutes, then be ready to go deeper anywhere.`,
          `Be honest about limits. If your model overfit at first, say so and explain how you fixed it. Interviewers usually trust candidates who describe mistakes and learning more than those who claim everything went perfectly.`,
        ],
      },
      {
        kind: 'list',
        heading: `A last-week checklist before your data science interview`,
        intro: `Small habits reduce stress on the day.`,
        items: [
          `Reread the job description and note the tools it names`,
          `Reopen each project on your resume and check you can explain every line`,
          `Rerun your notebooks to be sure they work`,
          `Prepare two or three thoughtful questions to ask the interviewer`,
          `Practise one short introduction about yourself and your target role`,
          `Sleep well and test your internet and setup for online rounds`,
        ],
      },
      {
        kind: 'cards',
        heading: `How Skill IT Education prepares you for data science interviews`,
        intro: `Interview preparation is built around the same modules you study, not added at the end.`,
        cards: [
          { title: `Module assessments`, text: `Each module ends with a knowledge quiz and a practical task, which mirrors the statistics, SQL, Python and machine learning questions you will meet.` },
          { title: `Mock interviews`, text: `Placement support includes mock interviews, so you rehearse under realistic conditions and receive feedback before the real thing.` },
          { title: `Dashboard and project practice`, text: `Building dashboards in Power BI and Tableau and documenting projects gives you ready material for live exercises and project discussions.` },
          { title: `Resume reviews and hiring-partner network`, text: `Resume reviews help your profile reach interviews, and a hiring-partner network supports your job search, without promising any specific result.` },
        ],
      },
    ],
    closing: {
      heading: `Calm, clear reasoning beats memorised answers every time`,
      text: `Nobody knows everything in a data science interview, and interviewers know it. Prepare steadily, practise speaking your reasoning aloud, and walk in ready to think with them rather than perform for them.`,
    },
    formHeading: `Prepare for your data science interview with mentors`,
    formSubheading: `Tell us where you are in your preparation and the admissions team will call you back to explain mock interview and placement support.`,
  },
];

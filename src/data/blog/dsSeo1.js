export default [
  // ---------------------------------------------------------------------------
  // POST 1
  // ---------------------------------------------------------------------------
  {
    slug: `what-is-data-science-and-what-does-a-data-scientist-do`,
    question: `What is Data Science and what does a Data Scientist do?`,
    metaTitle: `What Is Data Science? Data Scientist Role | Skill IT Education`,
    metaDescription: `Data science means using data, statistics and code to answer business questions. See what a data scientist does day to day and where to start in Hyderabad.`,
    published: `2026-09-20`,
    lede: `Data science is the practice of using data, statistics and programming to answer questions and help people make better decisions. A data scientist collects and cleans data, explores it for patterns, builds a model where a prediction is useful, and explains the result in plain language. At entry level, much of that work looks like data analysis.`,
    blocks: [
      {
        kind: `text`,
        heading: `Data science explained without the jargon`,
        paras: [
          `Data science is the practice of getting useful answers out of data. A shop owner asks which products to stock before a festival. A hospital asks why some patients miss appointments. Each question can be answered from data that already exists, and doing that with statistics, code and good judgement is data science.`,
          `A data scientist is the person who does this work from start to finish: finds the data, cleans it, explores it, chooses a method, checks the answer can be trusted and explains it to the people who decide. Sometimes the method is a careful comparison of two averages, sometimes a machine learning model. The skill lies in matching the tool to the question, not in reaching for the fanciest one.`,
          `Two honest limits. The title is used loosely, so one company's data scientist builds dashboards all week while another's deploys models, and the job description tells you more than the title. Entry roles are also often analyst flavoured: most beginners start as a Data Analyst, BI Analyst or Junior Data Scientist and move towards modelling with experience. Another guide on this blog compares the three neighbouring data jobs.`,
        ],
      },
      {
        kind: `steps`,
        heading: `What a data scientist does, shown through a pharmacy stock problem`,
        intro: `Picture a pharmacy chain with outlets across Hyderabad. Some outlets run out of common medicines while others throw away stock that expired on the shelf. The owner asks the data team to fix it.`,
        steps: [
          {
            title: `Turn the worry into a question data can answer`,
            text: `"Our stock is a mess" cannot be analysed. "How many strips of each medicine will each outlet sell next week?" can. The data scientist agrees the question with the owner and how success will be judged.`,
          },
          {
            title: `Find the data and pull it with SQL`,
            text: `Sales bills, purchase orders and expiry dates sit in different tables. SQL queries using JOIN and GROUP BY bring them into one table with a row for each medicine, outlet and week.`,
          },
          {
            title: `Clean what is untidy`,
            text: `Real tables hold duplicate bills, missing expiry dates and one medicine spelled three ways. Pandas and careful checks fix these, because a model fed messy data gives confident answers that are wrong.`,
          },
          {
            title: `Explore before modelling`,
            text: `Charts show that cough syrup sells more in the rainy months and that an outlet beside a hospital behaves differently. This exploratory data analysis shapes every later choice.`,
          },
          {
            title: `Try a model where a prediction adds value`,
            text: `A scikit-learn forecasting model estimates next week's demand. It is tested on weeks it has never seen and compared with a baseline such as "same as last week". If it cannot beat the baseline, the baseline wins.`,
          },
          {
            title: `Explain the result so someone can act`,
            text: `A Power BI or Tableau dashboard, or a short brief, tells the purchase manager what to order and how far to trust the estimate. A model nobody understands changes nothing.`,
          },
          {
            title: `Put it to work and keep checking`,
            text: `If the forecast runs every week, it is packaged behind an API or small app and its errors are watched. Buying habits change, and a model right in winter can be wrong by summer.`,
          },
        ],
      },
      {
        kind: `text`,
        heading: `One ordinary Wednesday in a data team`,
        paras: [
          `Half past nine, and the first job is not modelling. A manager says last week's sales dashboard shows a dip in one city. The data scientist queries the raw orders in SQL, finds that one outlet's feed stopped for two days, and reports that the dip is a data problem, not a business problem.`,
          `Late morning goes to a notebook. A colleague suspects that customers who get a reminder message reorder sooner. The data scientist compares the two groups and runs a hypothesis test in SciPy. The result is promising but small, so the write-up says exactly that.`,
          `After lunch come a stand-up meeting and time spent explaining why a high accuracy score can mislead when very few customers actually leave. Notice what fills the day: checking data, asking careful questions and explaining. Building models is real work, but rarely the biggest part.`,
        ],
      },
      {
        kind: `list`,
        heading: `The parts that make up data science`,
        intro: `Data science is a handful of skills used together, and each of these appeared in the pharmacy example.`,
        items: [
          `Statistics and probability, for judging whether a difference is real or chance and how far an estimate can be trusted`,
          `Python with NumPy and pandas for tables of data, and Jupyter Notebook for working step by step`,
          `SQL, for pulling the right rows from relational databases such as MySQL or PostgreSQL`,
          `Data cleaning and feature engineering, meaning fixing errors and turning raw columns into inputs a model can learn from`,
          `Exploratory analysis and visualisation with Matplotlib, Seaborn or Plotly`,
          `Machine learning, meaning algorithms such as regression, decision trees and clustering that learn patterns from examples, usually through scikit-learn`,
          `Dashboards in Power BI or Tableau for people who never open a notebook`,
          `Communication and business sense, because a finding only counts once someone acts on it`,
        ],
      },
      {
        kind: `whom`,
        heading: `Where different people start with data science`,
        intro: `You do not need a particular degree, but your starting point changes what to practise first.`,
        people: [
          {
            who: `Final-year student who likes puzzles and numbers`,
            text: `Start with statistics and Python now and build two or three small projects, so you reach placement season with something real to show.`,
          },
          {
            who: `Support engineer who reads logs all day`,
            text: `You already spot patterns in messy records. Add SQL, pandas and basic statistics, and turn a problem from your own workplace into a first project.`,
          },
          {
            who: `Commerce or arts graduate with a head for business`,
            text: `Business sense is useful. Expect a longer ramp on programming and mathematics, and aim first at analyst roles while your modelling grows.`,
          },
          {
            who: `Developer curious about the data side of software`,
            text: `You can move quickly on Python and SQL. Put your effort into statistics and explaining results, since those gaps show in interviews.`,
          },
        ],
      },
      {
        kind: `text`,
        heading: `Where data scientists work and what the roles are called`,
        paras: [
          `Data scientists work in IT services firms, product companies, banks, hospitals, retailers and startups, because nearly every business collects data it could use better. Around the same core skills you will see Data Analyst, BI Analyst, Reporting Analyst, Junior Data Scientist, Data Science Associate and Applied Data Scientist. Senior Data Scientist and Team Lead roles come later with experience, not straight from a course.`,
          `On pay, Skill IT publishes one indicative range for India: roughly ₹4L to ₹10L a year, the typical entry-to-mid range for Data Analyst, Junior Data Scientist and BI Analyst roles, rising with certifications and project experience. For equivalent roles in mature international markets it is roughly $55K to $100K a year. Both are broad ranges that vary by company, city, specialisation and experience, and neither is a promise. They include analyst and BI titles, so they are not the pay of an experienced or senior data scientist. To check current numbers, read recent job listings, talk to people in the role and compare the full cost to company on any offer.`,
        ],
      },
      {
        kind: `cards`,
        heading: `How Skill IT Education teaches the work of a data scientist`,
        intro: `The Data Science programme at our Madhapur centre follows the same order as the pharmacy example. This is support with learning and job search, not a promise of any outcome.`,
        cards: [
          {
            title: `Eight modules laid out like a real project`,
            text: `The 180 hours of core curriculum run from mathematics, Python and SQL through exploration, dashboards and machine learning to model deployment.`,
          },
          {
            title: `Projects from a statistics brief to a deployed app`,
            text: `You build a Statistical Analysis Brief, a Data Cleaning Lab, a BI Dashboard Build, a Machine Learning Model Lab and a Deployment Project, then an end-to-end capstone. At least five projects are documented for your portfolio.`,
          },
          {
            title: `Two months inside real data work before you apply`,
            text: `After five months of structured learning, the real-time industry internship gives exposure to data analysis, dashboarding and model deployment.`,
          },
          {
            title: `A profile that shows what you can do`,
            text: `We help turn projects into a resume, GitHub profile and LinkedIn page. The curriculum also prepares you for external certifications such as the IBM Data Science Professional Certificate and Google Data Analytics Professional Certificate.`,
          },
          {
            title: `Interview practice and placement assistance`,
            text: `Mock interviews rehearse the SQL, statistics and project questions data roles ask, and placement support runs through our hiring-partner network. Offers remain the employer's decision.`,
          },
        ],
      },
      {
        kind: `faq`,
        heading: `Quick answers about data science and data scientists`,
        intro: `Straight answers to the questions beginners ask first.`,
        faqs: [
          {
            q: `Is data science the same as data analysis?`,
            a: `No, though they overlap. Data analysis mostly describes what happened and why, using SQL, spreadsheets and dashboards. Data science includes that and goes further, building statistical or machine learning models to predict or classify. Many people start in analysis and move towards data science.`,
          },
          {
            q: `Does a data scientist need to know coding?`,
            a: `Yes. Data scientists write Python for cleaning, analysis and models and SQL for pulling data from databases every week. You need not be a software engineer, but you must be able to write, read and debug scripts without copying blindly.`,
          },
          {
            q: `Is data science only for people with a maths degree?`,
            a: `No. You need working comfort with statistics, probability and basic algebra, which steady practice can build from scratch. Graduates from engineering, science, commerce and other streams move into data roles. Employers look for skill you can show, not the name of your degree.`,
          },
          {
            q: `What does a data scientist do in a typical week?`,
            a: `Most of the week goes on pulling and cleaning data, exploring it, testing ideas and explaining findings to colleagues. Model building takes a smaller share, alongside code reviews and checking live models for errors that creep in over time.`,
          },
          {
            q: `Do data scientists work with big data all the time?`,
            a: `No. Many projects use tables that fit on a laptop. Where data is truly large, data engineers usually build the pipelines that store and move it, while data scientists spend most time on questions, cleaning and analysis.`,
          },
        ],
      },
      {
        kind: `links`,
        heading: `Where to read next about data science and its careers`,
        intro: `The programme page lists the modules behind this role. The guides below cover the neighbouring jobs, the path in India and the skills employers check.`,
        buttons: [
          { label: `See the Data Science programme`, to: `/data-science`, primary: true },
          { label: `Read: Data Scientist vs Analyst vs Engineer`, to: `/blog/difference-between-data-scientist-data-analyst-and-data-engineer` },
          { label: `Read: how to become a Data Scientist in India`, to: `/blog/how-to-become-a-data-scientist-in-india` },
          { label: `Read: skills a Data Scientist needs`, to: `/blog/skills-required-to-become-a-data-scientist` },
          { label: `Read: Data Science, ML and AI compared`, to: `/blog/difference-between-data-science-machine-learning-and-ai` },
          { label: `Browse all Career Insights`, to: `/blog` },
        ],
      },
    ],
    closing: {
      heading: `Open a notebook and ask one small question`,
      text: `Pick a table of data you care about, such as cricket scores or your own monthly spending, and ask it one question this week. Cleaning it, charting it and writing down what you found is data science in miniature. If you would like a guided route, our admissions team can show you how the eight modules fit together.`,
    },
    formHeading: `Ask about starting in data science`,
    formSubheading: `Tell us about your background and our admissions team in Madhapur will call you back with a suggested first step.`,
  },

  // ---------------------------------------------------------------------------
  // POST 7
  // ---------------------------------------------------------------------------
  {
    slug: `difference-between-data-scientist-data-analyst-and-data-engineer`,
    question: `What is the difference between Data Scientist, Data Analyst, and Data Engineer?`,
    metaTitle: `Data Scientist vs Analyst vs Engineer | Skill IT Education`,
    metaDescription: `Data scientist, data analyst and data engineer explained through pipelines, dashboards and models. See how one business question passes through all three.`,
    published: `2026-09-20`,
    lede: `The difference between a data scientist, a data analyst and a data engineer is the stage of the data journey each one owns. A data engineer builds the pipelines and warehouses that deliver clean data, a data analyst uses that data to explain what happened, and a data scientist builds models and experiments to predict or test what could happen next.`,
    blocks: [
      {
        kind: `text`,
        heading: `Three data jobs in plain words`,
        paras: [
          `A data engineer is a software-minded specialist who builds and looks after the systems that move data from where it is created to where it can be used. That means pipelines, databases, warehouses and the ETL or ELT jobs (extract, transform, load) that copy raw records from apps and payment systems into tidy tables. If the data does not arrive, or arrives wrong, nobody else on the team can work.`,
          `A data analyst turns those tables into answers about the past and present: what sold, what changed, which customer group is shrinking. The tools are SQL, Excel, Power BI or Tableau and often Python. A data scientist goes a step further, using statistics, experiments and machine learning to test why something happened or to predict what comes next.`,
          `Two honest limits. The lines blur in small companies, where one person may do all three jobs, and titles are used loosely in large ones. And nobody stays on one desk for ever: analysts become scientists, and scientists often learn to build their own pipelines. A separate guide compares the machine learning engineer role too.`,
        ],
      },
      {
        kind: `steps`,
        heading: `Following one business question across the three desks`,
        intro: `An online supermarket in Hyderabad notices that fewer new customers place a second order. The manager asks, "Why are new customers not coming back, and what can we do?" Watch it move from desk to desk.`,
        steps: [
          {
            title: `The manager asks and the team agrees the meaning`,
            text: `The team decides what "coming back" means, for example a second order within thirty days, and who will use the answer.`,
          },
          {
            title: `The data engineer makes the data available`,
            text: `Orders live in the app database, payments in a gateway, delivery times in a logistics system. The engineer builds a pipeline that copies them nightly into a warehouse such as Snowflake, BigQuery or Amazon Redshift, checks for missing rows, and schedules it with Apache Airflow.`,
          },
          {
            title: `The data analyst finds out what changed`,
            text: `Using SQL on the warehouse, the analyst compares new customers by area, first basket and delivery delay. A Power BI dashboard shows that customers whose first delivery was late rarely order again. That finding is already useful.`,
          },
          {
            title: `The data scientist tests and predicts`,
            text: `The scientist trains a scikit-learn model on inputs such as first-order delay and basket size to flag customers likely to leave, tests it on customers it has never seen, and designs an experiment to see whether an apology coupon really changes behaviour.`,
          },
          {
            title: `Analyst and scientist share one clear result`,
            text: `One page says late first deliveries hurt, the model flags at-risk customers with its errors stated, and the coupon test shows where to act first. The manager decides.`,
          },
          {
            title: `The data engineer keeps it running`,
            text: `If the model will score customers every morning, the engineer schedules and monitors that job and watches for broken feeds. Without this step the work is a one-off report, not a lasting system.`,
          },
        ],
      },
      {
        kind: `cards`,
        heading: `The three desks side by side`,
        intro: `Look at what each person hands over at the end of a working week.`,
        cards: [
          {
            title: `The data engineer builds the road the data travels on`,
            text: `Hands over reliable tables and pipelines. Works in SQL and Python, with tools such as Apache Spark for very large data, Kafka for live streams and Airflow for scheduling. Success is data that arrives on time and correct.`,
          },
          {
            title: `The data analyst explains what the numbers say`,
            text: `Hands over reports, dashboards and clear explanations. Works in SQL, Excel, Power BI or Tableau and often Python with pandas. Success is a manager who knows what changed and where to look next.`,
          },
          {
            title: `The data scientist tests ideas and predicts outcomes`,
            text: `Hands over analyses, experiments and models. Works in Python, SQL and statistics, with pandas and scikit-learn. Success is a better-informed decision, with the uncertainty stated honestly.`,
          },
        ],
      },
      {
        kind: `list`,
        heading: `How much SQL, Python and statistics each role needs`,
        intro: `All three write SQL and use Python, but the depth and direction differ.`,
        items: [
          `SQL for a data engineer goes deep: designing tables and indexes, joining large sources, tuning slow queries and writing transformations that run every night`,
          `SQL for a data analyst is daily and practical: joins, GROUP BY, subqueries and window functions to answer business questions quickly and correctly`,
          `SQL for a data scientist is the way in: enough to pull and shape data for a model`,
          `Python for a data engineer means pipelines, error handling, tests and working with APIs and files`,
          `Python for a data analyst means pandas, charts and the occasional script that automates a weekly report`,
          `Python for a data scientist means pandas, NumPy, scikit-learn and notebooks, plus enough habits to hand code to others`,
          `Statistics matters most to the scientist, moderately to the analyst and least to the engineer, whose accuracy questions are about whether data is complete and fresh`,
        ],
      },
      {
        kind: `whom`,
        heading: `Which desk suits which starting point`,
        intro: `Match the role to how you like to work, not to the grandest title.`,
        people: [
          {
            who: `Final-year engineering student who likes building systems`,
            text: `Data engineering may appeal. Strong SQL, Python and database basics are a good first target for a junior data engineer or ETL analyst role.`,
          },
          {
            who: `Commerce or science graduate who finds answers in numbers`,
            text: `Data analysis is a natural first desk. Excel, SQL and a BI tool are learnable quickly, and analyst roles are a common way into the field.`,
          },
          {
            who: `Support or testing engineer who knows how production breaks`,
            text: `Your habit of tracing faults suits data engineering, and your grasp of business processes suits analysis. Try both before choosing.`,
          },
          {
            who: `Maths or statistics graduate who enjoys experiments`,
            text: `Data science fits your training. Strengthen Python, SQL and communication, and expect to begin in analyst-flavoured roles.`,
          },
        ],
      },
      {
        kind: `text`,
        heading: `How to read the titles on a real job listing`,
        paras: [
          `Ignore the title for the first minute and read the verbs. "Build and maintain pipelines" and "own the warehouse" point to data engineering. "Build dashboards", "write SQL queries" and "present insights to stakeholders" point to analysis. "Develop predictive models" and "design experiments" point to data science. Many listings mix all three, especially at startups.`,
          `A note on pay and on our own scope. Skill IT publishes one indicative India range, ₹4L to ₹10L a year, the typical entry-to-mid range for Data Analyst, Junior Data Scientist and BI Analyst roles, rising with certifications and project experience. It varies by company, city, specialisation and experience, is not a promise, and does not describe a senior data scientist. We publish no range for data engineers, so check recent job listings and ask people who do the job.`,
        ],
      },
      {
        kind: `list`,
        heading: `Three small tasks to find your desk before you decide`,
        intro: `A weekend spent on each role teaches you more than a week of reading job titles.`,
        items: [
          `Engineer task: load a messy CSV file into a PostgreSQL or MySQL table with a short Python script, then query it for duplicates and missing values. Was making the data reliable satisfying?`,
          `Analyst task: answer three business questions about a sales file with SQL, then show the answers in a Power BI or Tableau dashboard. Was explaining the numbers satisfying?`,
          `Scientist task: predict a yes-or-no outcome with scikit-learn, then write a paragraph on how you know the model is not fooling you. Was testing an idea and stating its limits satisfying?`,
          `After each task write down what you enjoyed and what felt like a chore. That note is a better guide than any title.`,
        ],
      },
      {
        kind: `cards`,
        heading: `How Skill IT Education fits across the three roles`,
        intro: `The Data Science programme leans towards analysis and modelling, and is honest about where data engineering stops. This is support, not a promise of a particular role.`,
        cards: [
          {
            title: `A shared base, then analyst and scientist depth`,
            text: `Mathematics, Python and SQL with data cleaning come first for everyone. Exploratory analysis, visualisation, Power BI and Tableau dashboards and machine learning fundamentals then cover the daily work of analysts and junior data scientists.`,
          },
          {
            title: `Data engineering foundations, and where they stop`,
            text: `The career tracks include Data Engineering, with entry titles such as Junior Data Engineer, Data Wrangling Specialist and ETL Analyst, and the SQL and cleaning modules build the base those roles ask for. The eight modules do not teach Spark or Airflow, so expect to learn those later.`,
          },
          {
            title: `An internship that lets you test your fit`,
            text: `The two-month real-time internship gives exposure to data analysis, dashboarding and model deployment work, which shows you which kind of task you enjoy most.`,
          },
          {
            title: `Profile help, mock interviews and placement assistance`,
            text: `We help with your resume, GitHub and LinkedIn, run mock interviews for the role you pick, and support your search through our hiring-partner network. Offers remain the employer's decision.`,
          },
        ],
      },
      {
        kind: `faq`,
        heading: `Quick answers about these three data roles`,
        intro: `Straight answers to what people ask about the three jobs.`,
        faqs: [
          {
            q: `Which is harder, data engineer or data scientist?`,
            a: `They are hard in different ways. Data engineering demands software habits, databases and systems thinking. Data science demands statistics, experiment thinking and modelling judgement. Neither is simply harder, so pick by the problems you enjoy.`,
          },
          {
            q: `Can a data analyst become a data engineer?`,
            a: `Yes, and analysts make this move often. An analyst who already writes good SQL can add Python for pipelines, learn a scheduler such as Airflow and study how warehouses are designed, picking up testing and version control too.`,
          },
          {
            q: `Do data engineers need to know machine learning?`,
            a: `Not deeply. Data engineers mainly need SQL, Python, databases, pipelines and cloud basics. Knowing what a model needs as input helps them build better data feeds, but machine learning is not an entry requirement.`,
          },
          {
            q: `Which data role is easiest to start with as a fresher?`,
            a: `Analyst roles are the most common first step, because Excel, SQL and a BI tool can be learnt sooner than pipelines or models. Easiest still depends on you, since a strong coder may find entry data engineering more natural.`,
          },
          {
            q: `Is a data engineer a software engineer?`,
            a: `Closely related. A data engineer writes production code and cares about testing and reliability just like a software engineer, but the product is a data system of pipelines, warehouses and clean tables rather than an app screen.`,
          },
        ],
      },
      {
        kind: `links`,
        heading: `Where to read next about data roles`,
        intro: `The programme page shows how the modules map to these jobs, and the guides below explain each role in more depth.`,
        buttons: [
          { label: `See the Data Science programme`, to: `/data-science`, primary: true },
          { label: `Read: what a Data Scientist does`, to: `/blog/what-is-data-science-and-what-does-a-data-scientist-do` },
          { label: `Read: Scientist vs Analyst vs ML Engineer`, to: `/blog/data-scientist-vs-data-analyst-vs-ml-engineer` },
          { label: `Read: how to become a Data Analyst`, to: `/blog/how-to-become-a-data-analyst` },
          { label: `See the Data Analyst programme`, to: `/data-analyst` },
          { label: `Browse all Career Insights`, to: `/blog` },
        ],
      },
    ],
    closing: {
      heading: `Try each desk for one weekend`,
      text: `Spend a weekend on each of the three small tasks above and note what you enjoyed. That gives you a real reason for choosing a direction. If you would like help mapping the result to a learning plan, the admissions team can talk it through with you.`,
    },
    formHeading: `Ask which data role might suit you`,
    formSubheading: `Share your background and our admissions team will call you back to talk through the three roles and a sensible first target.`,
  },

  // ---------------------------------------------------------------------------
  // POST 8
  // ---------------------------------------------------------------------------
  {
    slug: `programming-languages-required-for-data-science`,
    question: `What programming languages are required for Data Science?`,
    metaTitle: `Programming Languages for Data Science | Skill IT Education`,
    metaDescription: `Python and SQL are the programming languages required for data science. R, Scala and DAX matter only for some roles. See what to learn first and why.`,
    published: `2026-09-20`,
    lede: `The programming languages required for data science are Python and SQL. Python does the cleaning, analysis and modelling, and SQL pulls the data out of databases. R is a strong optional choice for statistics work, and Scala, Java, DAX and others matter only for particular jobs. Start with Python and SQL, and add a third language only when a role asks for it.`,
    blocks: [
      {
        kind: `text`,
        heading: `The two languages you cannot skip and the rest you can add later`,
        paras: [
          `Python is a general-purpose programming language, and it is the one data science runs on. Its libraries do the heavy lifting: pandas for tables, NumPy for fast calculations, SciPy for statistics, Matplotlib and Seaborn for charts and scikit-learn for machine learning. SQL is a different kind of language. It is a query language for relational databases, where you describe the rows and columns you want and the database works out how to fetch them.`,
          `You need both because data lives in databases and gets analysed in code. SQL is among the most consistently tested skills in analyst and data scientist interviews, and Python with pandas and NumPy is assumed in almost every job description for these roles. Skipping either usually shows in a technical round.`,
          `The honest limit is that listings differ. Some teams work in R or Scala, and some roles are mostly Power BI with a little scripting. Treat languages as tools for thinking about data. The harder part is knowing which question to ask and whether the answer can be trusted, and that carries over between languages.`,
        ],
      },
      {
        kind: `list`,
        heading: `One question asked in SQL, Python and R`,
        intro: `Suppose a table called orders has a city column and an amount column, and you want total sales for each city, biggest first. The same question looks like this in three languages.`,
        items: [
          `SQL: SELECT city, SUM(amount) AS total_sales FROM orders GROUP BY city ORDER BY total_sales DESC;`,
          `Python with pandas: orders.groupby("city")["amount"].sum().sort_values(ascending=False)`,
          `R with dplyr: orders |> group_by(city) |> summarise(total_sales = sum(amount)) |> arrange(desc(total_sales))`,
          `What to notice: all three group the rows by city, add up the amounts and sort. SQL runs inside the database, so it suits data too large to copy out. pandas holds the table in your computer's memory and lets you carry straight on into charts and models. R does the same job with a different grammar.`,
          `The idea is identical in all three, which is why a second language is far quicker to learn than the first.`,
        ],
      },
      {
        kind: `cards`,
        heading: `Which language answers which kind of data question`,
        intro: `Choose the language by the job in front of you.`,
        cards: [
          {
            title: `Python for cleaning, analysis and models`,
            text: `The everyday choice. Load a file, fix missing values, explore, chart, train a scikit-learn model and wrap it in a Flask or FastAPI service, all in one language.`,
          },
          {
            title: `SQL for getting the right rows out of a database`,
            text: `Used to filter, join and summarise tables in MySQL or PostgreSQL. Analysts and most data scientists write it weekly, because company data sits in databases, not files on your laptop.`,
          },
          {
            title: `R for statistics heavy and research style work`,
            text: `R was built by statisticians and has rich packages for modelling and plotting, such as dplyr and ggplot2. It is common in academic and research settings and worth adding if a target employer uses it.`,
          },
          {
            title: `Scala and Java for large scale data engineering`,
            text: `Apache Spark is written in Scala, and some data engineering teams write Java or Scala. Most data scientists meet Spark through Python, as PySpark, or through SQL, so this is a later career step.`,
          },
          {
            title: `DAX, Power Query M and calculated fields inside BI tools`,
            text: `Power BI has its own formula language, DAX, and a data-shaping language called Power Query M. Tableau has calculated fields. These small languages matter a great deal in BI Analyst roles.`,
          },
        ],
      },
      {
        kind: `list`,
        heading: `What to practise inside Python and SQL first`,
        intro: `Depth in a few features beats a shallow tour of many. These are the parts that turn up again and again.`,
        items: [
          `Python basics: lists, dictionaries, loops, functions and reading errors, so you can write a small script without copying it`,
          `pandas: reading a CSV, filtering rows, merging tables, grouping, handling missing values and reshaping a table`,
          `NumPy: arrays and vectorised calculation, meaning you work on a whole column at once instead of row by row`,
          `Matplotlib and Seaborn: line, bar, scatter and histogram plots, and choosing the right chart for the question`,
          `scikit-learn: train and test splits, fitting a model, predicting, and judging it with cross-validation and a suitable metric`,
          `SQL basics: SELECT, WHERE, JOIN, GROUP BY and subqueries, written against a real database and not only a quiz site`,
          `SQL beyond the basics: window functions, CASE WHEN and common table expressions, which answer harder questions in one query`,
          `Working habits: virtual environments, Git and short readable functions, because someone else will read your code`,
        ],
      },
      {
        kind: `steps`,
        heading: `A sensible order for learning the languages`,
        intro: `You do not need every language at once. This order builds on itself and keeps early frustration low.`,
        steps: [
          {
            title: `Learn Python basics by writing small programs`,
            text: `Write a script that reads a file, counts something and prints a result. Comfort with loops, functions and errors matters more than memorising syntax.`,
          },
          {
            title: `Meet pandas early on a file you care about`,
            text: `Pick a CSV on a topic you like, such as cricket results, then clean and summarise it.`,
          },
          {
            title: `Learn SQL on an actual database`,
            text: `Install PostgreSQL or MySQL, load the same CSV into a table and rewrite your pandas summary as a query. Seeing one answer in two languages fixes both in your head.`,
          },
          {
            title: `Make Python and SQL work together`,
            text: `Run a query from Python and read the result straight into a pandas table. Many real projects begin this way.`,
          },
          {
            title: `Add plotting and one machine learning project`,
            text: `Chart your findings with Matplotlib or Seaborn, then train one scikit-learn model and check it on unseen data.`,
          },
          {
            title: `Pick a third language only when a listing asks for it`,
            text: `If your target roles mention R, DAX or Scala, learn that one on top of a solid base. Chasing every language early is the surest way to stay a beginner in all of them.`,
          },
        ],
      },
      {
        kind: `whom`,
        heading: `Extra languages worth adding from each starting point`,
        intro: `What you already know decides what to learn next.`,
        people: [
          {
            who: `Java developer who already thinks in classes`,
            text: `Learn Python quickly, since your logic transfers, and spend extra time on pandas and statistics. Java stays useful for data engineering later.`,
          },
          {
            who: `Statistics graduate who learned R at college`,
            text: `Keep R for analysis you enjoy and add Python and SQL, because many hiring teams expect them. Your statistics is the real advantage.`,
          },
          {
            who: `Excel power user who has never coded`,
            text: `Start with SQL, since it feels close to filters and pivot tables, then move to Python and pandas. Your feel for business data is worth a lot.`,
          },
          {
            who: `Commerce graduate starting from zero`,
            text: `Begin with Python basics and take it slowly. A guided path with labs helps, because you get feedback instead of guessing why code failed.`,
          },
        ],
      },
      {
        kind: `text`,
        heading: `When R, Scala or Julia become worth your time`,
        paras: [
          `R earns its place in research groups, university statistics departments and some analytics teams. If your first target is a Data Analyst, BI Analyst or Junior Data Scientist role at an IT services firm or product company, Python and SQL are what the listings usually ask for, and R can wait unless your degree used it.`,
          `Scala and Java matter once you work on very large data with Spark in a data engineering role. Julia is used in some scientific computing, and C and C++ sit underneath many Python libraries, though you use those libraries without writing that code. None is required for a first data role.`,
        ],
      },
      {
        kind: `cards`,
        heading: `How the Skill IT data science modules teach Python and SQL`,
        intro: `The Data Science programme at our Madhapur centre builds the languages in the order above. This is support with learning, not a promise of any result.`,
        cards: [
          {
            title: `Python from the second module onward`,
            text: `A 30-hour Python Programming module covers syntax, data structures, functions, OOP basics, NumPy, pandas and virtual environments, and Python runs through every later module.`,
          },
          {
            title: `SQL joined with cleaning in module three`,
            text: `The Data Wrangling module covers SELECT, JOIN, GROUP BY and subqueries on MySQL or PostgreSQL, next to missing values, outliers and feature engineering basics.`,
          },
          {
            title: `Small languages inside the dashboard tools`,
            text: `The Business Intelligence module includes DAX basics in Power BI and calculated fields in Tableau, so the formula languages BI roles use are practised, not skipped.`,
          },
          {
            title: `Projects that prove your code`,
            text: `A Python Data Processing Script and a Data Cleaning Lab are part of at least five documented portfolio projects, which we help you present on GitHub.`,
          },
          {
            title: `Mock interviews on the languages you claim`,
            text: `Interview practice covers the SQL and Python questions data roles ask, and placement support runs through our hiring-partner network. Offers remain the employer's decision.`,
          },
        ],
      },
      {
        kind: `faq`,
        heading: `Quick answers about languages for data science`,
        intro: `Straight answers on which languages to learn and how much.`,
        faqs: [
          {
            q: `Is Python enough for data science?`,
            a: `For most entry roles Python is the main language, but on its own it is not quite enough. You also need SQL to get data from databases, plus statistics to interpret results. Add a BI tool such as Power BI if you are aiming at analyst roles.`,
          },
          {
            q: `Do I need R to become a data scientist?`,
            a: `No. Most entry roles ask for Python and SQL, and many teams never use R. R helps if your degree used it or your target employer works in it, and knowing Python first makes R quick to pick up later.`,
          },
          {
            q: `Is SQL a programming language?`,
            a: `SQL is a language, but a specialised one. It is a declarative query language for relational databases, so you describe the data you want and the database finds it. It is not general purpose like Python, but writing it is real technical work.`,
          },
          {
            q: `Can I do data science without coding?`,
            a: `Partly. Excel, Power BI and Tableau allow useful analysis without code, which is enough for some analyst roles. Data scientist roles expect Python and SQL, because cleaning, statistics and models are hard to do well by clicking alone.`,
          },
          {
            q: `How much Python is needed for a data science job?`,
            a: `Enough to load a file, clean it with pandas, explore and chart it, train and check a scikit-learn model, and explain your code without copying blindly. Advanced software engineering skills are not needed for a first data role.`,
          },
        ],
      },
      {
        kind: `links`,
        heading: `Where to read next about data science languages and tools`,
        intro: `Languages are half the picture and tools are the other half. These guides cover tools, learning order and the neighbouring SQL and AI paths.`,
        buttons: [
          { label: `See the Data Science programme`, to: `/data-science`, primary: true },
          { label: `Read: tools used by Data Scientists`, to: `/blog/tools-and-technologies-used-by-data-scientists` },
          { label: `Read: statistics and Python step by step`, to: `/blog/learn-statistics-and-python-for-data-science-step-by-step` },
          { label: `Read: how to learn SQL for data analysis`, to: `/blog/how-to-learn-sql-for-data-analysis-step-by-step` },
          { label: `Read: programming languages for AI/ML`, to: `/blog/programming-languages-required-for-ai-ml` },
          { label: `Browse all Career Insights`, to: `/blog` },
        ],
      },
    ],
    closing: {
      heading: `Write the same small summary in SQL and Python`,
      text: `Take one CSV file, total something by category with a SQL query, then repeat it with pandas and compare the answers. Doing this once teaches more than reading about languages. If you would like guidance on the order, our admissions team can talk it through.`,
    },
    formHeading: `Ask about learning Python and SQL for data science`,
    formSubheading: `Tell us what you already know and our admissions team will call you back with a suggested order for learning the languages.`,
  },

  // ---------------------------------------------------------------------------
  // POST 9
  // ---------------------------------------------------------------------------
  {
    slug: `tools-and-technologies-used-by-data-scientists`,
    question: `What tools and technologies are used by Data Scientists?`,
    metaTitle: `Data Scientist Tools and Technologies | Skill IT Education`,
    metaDescription: `Data scientists use Python, SQL, Jupyter, pandas, Power BI or Tableau, scikit-learn and Git. See what each tool does and where a beginner should start.`,
    published: `2026-09-20`,
    lede: `Data scientists use Python with pandas, NumPy and scikit-learn for analysis and models, SQL databases such as MySQL and PostgreSQL for data, Jupyter Notebook and VS Code to work in, Matplotlib, Seaborn, Power BI and Tableau to show results, and Git, Docker and cloud basics to share and ship. Each tool suits one stage of a project.`,
    blocks: [
      {
        kind: `text`,
        heading: `Why data scientists use so many tools and how to see them as a ladder`,
        paras: [
          `No single tool does data science. Each one covers a moment in the work: glancing at a small file, exploring in a notebook, pulling from a company database, drawing a chart for a manager, or letting an app use a model. A helpful picture is a ladder, where you climb a rung only when the job outgrows the one below.`,
          `The list of names looks long, but the core is short. Python, SQL, Jupyter Notebook, pandas and one BI tool cover most entry roles, and the rest can be added when a project needs it. Tools change faster than ideas, so learn what each is for and the next one gets easier.`,
        ],
      },
      {
        kind: `cards`,
        heading: `The tool ladder from spreadsheet to deployed app`,
        intro: `Each rung solves a problem the one below cannot.`,
        cards: [
          {
            title: `Rung one, the spreadsheet`,
            text: `Excel and Google Sheets suit a quick look, pivot tables and small data. The limit: a worksheet holds a little over a million rows, slows down well before that, and keeps no record of your clicks.`,
          },
          {
            title: `Rung two, the notebook`,
            text: `Jupyter Notebook with Python, pandas and NumPy records every step, so an analysis can be rerun and shared. The limit: notebooks get untidy and are not how a model runs for other people.`,
          },
          {
            title: `Rung three, the database`,
            text: `SQL on MySQL or PostgreSQL is where shared company data lives. Use it when data is too large or too important to keep in files. OpenRefine helps clean messy text columns before loading.`,
          },
          {
            title: `Rung four, the chart and the dashboard`,
            text: `Matplotlib, Seaborn and Plotly draw charts from code, while Power BI and Tableau build interactive dashboards for people who do not use notebooks. Choose by audience.`,
          },
          {
            title: `Rung five, the deployed model`,
            text: `Flask, FastAPI and Streamlit turn a trained model into an app or API, Docker packages it so it runs the same everywhere, and AWS or Azure host it. Git and GitHub sit beside every rung.`,
          },
        ],
      },
      {
        kind: `list`,
        heading: `Setting up a data science laptop in one evening`,
        intro: `You can have a working setup in a single sitting, and most of it is free.`,
        items: [
          `Python 3 in a virtual environment, or the Anaconda distribution if you prefer one installer that bundles many libraries`,
          `VS Code as your editor, with its Python and Jupyter extensions, so scripts and notebooks live in one place`,
          `pandas, NumPy, SciPy, Matplotlib, Seaborn and scikit-learn installed with pip inside that environment`,
          `PostgreSQL or MySQL on your laptop, with a client such as pgAdmin, DBeaver or MySQL Workbench, and one CSV file loaded into a table`,
          `Git and a GitHub account, with your first repository pushed on day one`,
          `Power BI Desktop, free to download but Windows only, so Mac users often practise with Tableau Public or use a Windows machine for Power BI`,
          `Google Colab as a free cloud notebook for a slow laptop, and Docker Desktop later, at deployment time`,
        ],
      },
      {
        kind: `steps`,
        heading: `One dataset taken up every rung of the ladder`,
        intro: `The fastest way to learn tools is to push one small project through all of them. Choose a public CSV on something you like, such as cricket results or road accident records.`,
        steps: [
          {
            title: `Open it in a spreadsheet and note what looks wrong`,
            text: `Sort, filter and build one pivot table. Write down every odd value, such as blank cells or a city spelled two ways. This list becomes your cleaning plan.`,
          },
          {
            title: `Load it into a notebook and clean it with pandas`,
            text: `Read the file, fix the problems on your list and summarise the columns. Keep the notebook tidy so it runs from top to bottom.`,
          },
          {
            title: `Move the clean table into a database and query it`,
            text: `Create a table in PostgreSQL or MySQL, load the data and rewrite three pandas summaries as SQL queries. Notice which feels easier for which question.`,
          },
          {
            title: `Show the findings as charts and a dashboard`,
            text: `Draw two or three Seaborn or Plotly charts, then build a one-page dashboard in Power BI or Tableau for a reader who will never open a notebook.`,
          },
          {
            title: `Train one scikit-learn model and check it honestly`,
            text: `Predict something simple, hold back test data and report a metric that suits the problem. Note where the model fails as well as where it works.`,
          },
          {
            title: `Wrap it in a small app and publish everything`,
            text: `Use Streamlit or FastAPI to let someone try the model, then push the code, a README and screenshots to GitHub.`,
          },
        ],
      },
      {
        kind: `list`,
        heading: `Six either-or choices and how to settle them`,
        intro: `Beginners lose weeks choosing between tools. These rules of thumb keep you moving.`,
        items: [
          `Power BI or Tableau: pick the one in the job descriptions you are targeting, since the skills carry over. Power BI is common where organisations already use Microsoft products.`,
          `Jupyter Notebook or VS Code: use both. Notebooks suit exploration and explanation, VS Code suits longer scripts and reusable code, and it can open notebooks too.`,
          `Matplotlib or Plotly: Matplotlib and Seaborn give full control for static charts, while Plotly makes charts you can hover over and zoom. Learn one properly and borrow the other when needed.`,
          `MySQL or PostgreSQL: the SQL you learn is nearly identical, so choose either and move on. Small differences appear in advanced features.`,
          `pandas or SQL for reshaping data: use SQL when the data is large or stays in the database, and pandas for custom logic or before modelling.`,
          `Excel or Python for a quick job: Excel for a one-off look at a small file, Python when the task will repeat or the file is large.`,
        ],
      },
      {
        kind: `whom`,
        heading: `Where each kind of learner should begin with the tools`,
        intro: `Your past tools decide your shortest route.`,
        people: [
          {
            who: `Accountant or commerce graduate at home in Excel`,
            text: `Your pivot tables and lookups already teach the logic. Move to SQL, then Python and pandas, with Power BI as a bridge.`,
          },
          {
            who: `Programmer used to an editor and not notebooks`,
            text: `Try Jupyter inside VS Code so it feels familiar, and spend your effort on pandas, statistics and charting.`,
          },
          {
            who: `Fresher who has never installed developer software`,
            text: `Follow the one-evening setup above, then push one small project up the ladder. A working first notebook and GitHub repository matter more than choosing perfectly.`,
          },
          {
            who: `Analyst who reports in a BI tool already`,
            text: `You have the dashboard rung. Add SQL depth, then Python with pandas and scikit-learn, to go beyond describing the past.`,
          },
        ],
      },
      {
        kind: `text`,
        heading: `What interviewers really check about your tools`,
        paras: [
          `Interviewers rarely ask you to recite features. They give you a problem and watch the tool: write a join in SQL, clean a messy file in pandas, or build a chart and explain it. Many Data Analyst and BI Analyst interviews include a live dashboard exercise, and take-home exploratory analysis tasks are common.`,
          `Two habits help. Keep evidence of each tool in a project someone can open, because a GitHub repository with a clear README says more than a skills list. And be honest about tools you have only touched. Saying "I have used Spark once and would need to refresh" builds more trust than pretending.`,
        ],
      },
      {
        kind: `cards`,
        heading: `How the eight Skill IT modules put these tools in your hands`,
        intro: `Each module of the Data Science programme in Madhapur has its own toolset. This is support with learning, not a promise of an outcome.`,
        cards: [
          {
            title: `A toolset for every module`,
            text: `NumPy, SciPy and Excel in mathematics. Python, Jupyter, pandas and VS Code in programming. SQL, MySQL or PostgreSQL and OpenRefine in wrangling. Pandas Profiling in exploration. Matplotlib, Seaborn and Plotly in visualisation.`,
          },
          {
            title: `Dashboard tools with real hands-on time`,
            text: `The Business Intelligence module has you connect data, build interactive Power BI reports with DAX, create Tableau dashboards with calculated fields and present the results to stakeholders.`,
          },
          {
            title: `Deployment tools for the last mile`,
            text: `In the Model Deployment module you use Pickle or Joblib, Flask, FastAPI, Streamlit, Docker and AWS or Azure basics to move a trained model out of the notebook and into a working app.`,
          },
          {
            title: `Certification preparation for tool skills`,
            text: `The curriculum prepares you for external certifications such as the Google Data Analytics Professional Certificate, IBM Data Science Professional Certificate and Microsoft Power BI Data Analyst Associate. It does not include the exams.`,
          },
          {
            title: `Tool skills you can show on GitHub and in mock interviews`,
            text: `We help you present projects on GitHub, LinkedIn and your resume, and run mock interviews around the tools you list. Placement support runs through our hiring-partner network, as assistance only.`,
          },
        ],
      },
      {
        kind: `faq`,
        heading: `Quick answers about data science tools`,
        intro: `Straight answers on which tools to start with and which can wait.`,
        faqs: [
          {
            q: `Which tool should a beginner learn first for data science?`,
            a: `Start with Python in a Jupyter notebook and learn pandas on a real file, then add SQL. Excel is a handy warm-up if you know it already. A BI tool such as Power BI comes next, once you can clean and explore data.`,
          },
          {
            q: `Is Excel still used by data scientists?`,
            a: `Yes, for quick looks at small files, simple checks and sharing results with colleagues who live in spreadsheets. Large or repeatable analysis moves to Python and SQL, but knowing Excel well still helps you work with business teams.`,
          },
          {
            q: `Should I learn Power BI or Tableau first?`,
            a: `Learn the one that appears in the job listings you are targeting. Both build interactive dashboards, and the ideas transfer between them. Power BI is free to start on Windows, while Tableau Public is a free way to practise on any computer.`,
          },
          {
            q: `Do data scientists need to know cloud platforms?`,
            a: `The basics help. Entry roles rarely require deep cloud skills, but knowing how to store data, run a notebook and host a model on AWS or Azure makes you more useful. Learn the concepts first, then one platform.`,
          },
          {
            q: `Are Hadoop and Spark required for data science?`,
            a: `Not for most entry roles. Spark is used when data is too large for one machine, and it appears more often in data engineering jobs. Learn it later if a role needs it. Our eight modules do not include Hadoop or Spark.`,
          },
        ],
      },
      {
        kind: `links`,
        heading: `Where to read next about data science tools`,
        intro: `Tools make more sense once you know what to build with them. These guides cover the languages, a full project and the analyst side of the toolbox.`,
        buttons: [
          { label: `See the Data Science programme`, to: `/data-science`, primary: true },
          { label: `Read: languages required for Data Science`, to: `/blog/programming-languages-required-for-data-science` },
          { label: `Read: a data science project, start to finish`, to: `/blog/data-science-project-lifecycle-from-start-to-finish` },
          { label: `Read: Excel, SQL, Power BI and Python`, to: `/blog/tools-a-data-analyst-should-learn-excel-sql-power-bi-python` },
          { label: `Read: tools used by AI engineers`, to: `/blog/tools-and-technologies-used-by-ai-engineers` },
          { label: `Browse all Career Insights`, to: `/blog` },
        ],
      },
    ],
    closing: {
      heading: `Push one dataset up the whole ladder`,
      text: `Choose a small public dataset this week and take it from a spreadsheet to a notebook, a database, a dashboard and a tiny app. Each rung will teach you why the next tool exists. If you would like a guided order, the admissions team can explain how the modules sequence these tools.`,
    },
    formHeading: `Ask about the data science toolchain`,
    formSubheading: `Tell us which tools you have already used and our admissions team will call you back with a suggested order for the rest.`,
  },

  // ---------------------------------------------------------------------------
  // POST 10
  // ---------------------------------------------------------------------------
  {
    slug: `difference-between-data-science-machine-learning-and-ai`,
    question: `What is the difference between Data Science, Machine Learning, and AI?`,
    metaTitle: `Data Science vs Machine Learning vs AI | Skill IT Education`,
    metaDescription: `Data science is the wider practice of getting decisions from data, machine learning is one toolset in it, and AI is the broader goal. See how they overlap.`,
    published: `2026-09-20`,
    lede: `The difference between data science, machine learning and AI is one of scope. Data science is the wider practice of getting decisions out of data, machine learning is one toolset that learns patterns from examples, and artificial intelligence is the broader goal of machines doing tasks that need intelligence. They overlap, but none is simply a smaller box inside another.`,
    blocks: [
      {
        kind: `text`,
        heading: `Data science, machine learning and AI in one honest picture`,
        paras: [
          `Data science is the practice of getting useful decisions out of data, from a first question through cleaning, analysis and communication. Machine learning is a set of methods that let a computer learn patterns from examples instead of following hand-written rules. Artificial intelligence is the wider goal of building systems that do things we would normally say need intelligence, such as understanding speech, planning a route or holding a conversation.`,
          `The tidy picture of three nested circles is too simple. Machine learning sits inside both of the others: data scientists use it as one tool among many, and it is currently the most common route to building AI. But data science includes plenty of work with no learning at all, such as a well-drawn chart or a test of whether two groups differ. And AI includes things that need no data science project, such as a search algorithm that plans a delivery route.`,
          `One more honest limit: these words are used loosely. An advert for an AI team may describe dashboard work, and a data science title may mean model building. Judge a role by the tasks it lists.`,
        ],
      },
      {
        kind: `cards`,
        heading: `Three ideas side by side`,
        intro: `Each idea has a different aim, a different typical output and a different set of tools.`,
        cards: [
          {
            title: `Data science, the wider practice of getting decisions from data`,
            text: `Aim: answer a business question. Output: an analysis, a dashboard, an experiment result or sometimes a model. Tools: SQL, Python, pandas, statistics, Matplotlib, Seaborn, Power BI and Tableau.`,
          },
          {
            title: `Machine learning, one toolset that learns from examples`,
            text: `Aim: find patterns that predict or group things. Output: a trained model, such as one that scores loan risk or clusters customers. Tools: scikit-learn, evaluation metrics, cross-validation and feature engineering.`,
          },
          {
            title: `Artificial intelligence, the broader goal of intelligent behaviour`,
            text: `Aim: get machines to do tasks that need judgement. Output: a working system, such as an assistant or a vision tool. Tools: machine learning and deep learning, but also search, planning and hand-written rules.`,
          },
        ],
      },
      {
        kind: `text`,
        heading: `One hospital problem seen through all three lenses`,
        paras: [
          `Suppose a hospital chain in Hyderabad wants fewer missed appointments. As a data science problem, an analyst or data scientist pulls booking records with SQL, cleans them and draws charts. Perhaps bookings made far ahead are missed more often. A hypothesis test checks that the gap is not chance, and a dashboard goes to the front desk. No machine learning has been used, and the work is already useful.`,
          `Next comes machine learning. The team trains a classification model in scikit-learn that gives each new booking a chance of being missed, learning from past bookings whose outcome is known. It is tested on bookings it has never seen, using precision and recall. Here machine learning is doing one job inside the data science project.`,
          `Finally, the hospital adds an assistant that messages patients likely to miss, understands replies such as "can I come tomorrow?", rebooks them and hands difficult cases to staff. That is AI: a system acting intelligently. The prediction model is one part of it, alongside language understanding and business rules. Other AI parts, such as planning an ambulance route, need no data science project at all.`,
        ],
      },
      {
        kind: `steps`,
        heading: `A learning order that touches all three`,
        intro: `You do not have to pick one of the three. A sensible order moves from the wide base towards the narrower layers.`,
        steps: [
          {
            title: `Start with questions and statistics`,
            text: `Learn descriptive statistics, probability and hypothesis testing. These decide whether a result means anything, and every later step depends on them.`,
          },
          {
            title: `Write Python and SQL until data feels ordinary`,
            text: `Work with pandas and NumPy for tables and SQL for databases until loading and reshaping data feels ordinary.`,
          },
          {
            title: `Explore and chart until you can tell the story`,
            text: `Practise exploratory analysis and visualisation with Matplotlib and Seaborn, then a dashboard tool. This is the heart of data science and needs no model.`,
          },
          {
            title: `Train classical machine learning models and judge them fairly`,
            text: `Try regression, decision trees, random forests and clustering in scikit-learn. Learn train-test splits, cross-validation and how overfitting fools you.`,
          },
          {
            title: `Deploy one model so other people can use it`,
            text: `Wrap a trained model in a Flask, FastAPI or Streamlit app. A model in use teaches what a notebook cannot.`,
          },
          {
            title: `Then look at deep learning, language models and agents`,
            text: `These are the AI layer built on machine learning. They are far easier to understand once the earlier steps are solid.`,
          },
        ],
      },
      {
        kind: `list`,
        heading: `Half-true things you will hear about these terms`,
        intro: `Each of these statements has some truth in it, and each misleads if taken whole.`,
        items: [
          `"Data science is a part of AI." Half true: the two overlap and share machine learning, but much data science uses no learning, and much AI uses no data science process.`,
          `"Machine learning and AI mean the same thing." Not quite: machine learning is one way to build AI, and AI also includes rule-based systems, search and planning.`,
          `"You need machine learning to be a data scientist." Not for every role: many analyst-flavoured entry roles are mostly SQL, statistics and dashboards.`,
          `"AI does not need data." Learning-based AI does, in large amounts, but a rule-based system or a route-planning algorithm works without training data.`,
          `"Deep learning is a separate field." It is a branch of machine learning that uses many-layered neural networks, and it powers many language and image models.`,
          `"Generative AI tools will replace the data scientist." They can speed up code and first drafts, but somebody still has to frame the question, check the data and judge whether the answer is right.`,
        ],
      },
      {
        kind: `whom`,
        heading: `Where to begin if you are drawn to data, models or intelligent products`,
        intro: `Your pull towards one of the three points to a first step, though not to the only step.`,
        people: [
          {
            who: `Student who enjoys tables and questions`,
            text: `Start with data science. Statistics, SQL, Python and charts give you employable skills early and make machine learning far easier later.`,
          },
          {
            who: `Programmer who wants to build predictive features`,
            text: `Focus on machine learning, but do the data cleaning and evaluation groundwork first. Most model failures come from data problems, not from the algorithm.`,
          },
          {
            who: `Developer excited by chatbots and assistants`,
            text: `The AI layer is your target. Build on Python, machine learning basics and APIs first, since assistants are built on those foundations.`,
          },
          {
            who: `Manager or founder who only needs the vocabulary`,
            text: `Remember the one-line versions: data science answers questions with data, machine learning learns patterns, AI aims at intelligent behaviour. Ask which of the three a project really needs.`,
          },
        ],
      },
      {
        kind: `list`,
        heading: `Which skills and tools belong to which idea`,
        intro: `Use this map to see where each thing you study fits.`,
        items: [
          `Data science skills: statistics, SQL, pandas, exploratory analysis, Matplotlib and Seaborn, Power BI or Tableau dashboards and clear written explanations`,
          `Machine learning skills: scikit-learn, supervised and unsupervised learning, feature engineering, evaluation metrics such as precision and recall, and avoiding overfitting`,
          `AI skills beyond classical machine learning: neural networks with PyTorch or TensorFlow, language model APIs, retrieval, agents and safe deployment`,
          `Shared by all three: Python, Git, careful reading of data and the ability to say how sure you are`,
          `Where deployment fits: Flask, FastAPI, Streamlit and Docker apply to any trained model, whichever label you give the project`,
        ],
      },
      {
        kind: `cards`,
        heading: `How the Skill IT data science programme covers these ideas`,
        intro: `The Data Science programme at our Madhapur centre is centred on the first two ideas, and it is honest about the third. Everything here is support, not a promise.`,
        cards: [
          {
            title: `Data science covered from mathematics to deployment`,
            text: `Eight modules and 180 hours of core curriculum take you through statistics, Python, SQL and cleaning, exploration, visualisation, dashboards, machine learning and deployment.`,
          },
          {
            title: `Machine learning in a module of its own`,
            text: `A 30-hour Machine Learning Fundamentals module covers regression, KNN, decision trees, random forests, K-Means, evaluation metrics, cross-validation and overfitting, using scikit-learn.`,
          },
          {
            title: `Where deeper AI topics sit`,
            text: `The eight modules teach data science and classical machine learning. To go deeper into language models, agents and AI systems, the separate AI and ML programme is the natural next step.`,
          },
          {
            title: `A capstone that ties it together`,
            text: `An end-to-end data science project takes a business problem from raw data to a deployed prediction app, and at least five documented projects build your portfolio.`,
          },
          {
            title: `Internship, profile work and mock interviews`,
            text: `A two-month real-time internship, help with resume, GitHub and LinkedIn, mock interviews and placement support through our hiring-partner network. Offers remain the employer's decision.`,
          },
        ],
      },
      {
        kind: `faq`,
        heading: `Quick answers about data science, machine learning and AI`,
        intro: `Straight answers on how the three terms relate.`,
        faqs: [
          {
            q: `Is data science a part of AI?`,
            a: `Not exactly. They overlap, and machine learning links them, but data science also covers analysis, statistics and dashboards that need no learning. AI likewise includes systems built without a data science project. Think of two overlapping fields, not one inside the other.`,
          },
          {
            q: `Is machine learning a part of data science?`,
            a: `Yes, as one toolset among several. Data scientists use machine learning when a prediction or grouping adds value, but they also use statistics, SQL, visualisation and experiments. Many data science tasks never reach a model.`,
          },
          {
            q: `Should I learn data science before machine learning?`,
            a: `Yes, at least the foundations. Statistics, Python, SQL and data cleaning make machine learning much easier to learn and to trust. Learners who jump straight to algorithms often struggle to explain results or find why a model fails.`,
          },
          {
            q: `Does a data scientist need to know AI?`,
            a: `A working data scientist should understand machine learning well. Deep learning and language models are a bonus that depends on the role. Entry roles usually focus on data handling, statistics and classical models rather than on building AI systems.`,
          },
          {
            q: `Can you do data science without machine learning?`,
            a: `Yes. Cleaning data, exploring it, drawing charts, testing differences between groups and building dashboards are all data science, and many useful business answers come from them. Machine learning is added only when prediction or automatic grouping is needed.`,
          },
        ],
      },
      {
        kind: `links`,
        heading: `Where to read next about AI and data science`,
        intro: `To see how AI, machine learning, deep learning and generative AI nest, or how AI jobs compare with data jobs, these guides go further.`,
        buttons: [
          { label: `See the Data Science programme`, to: `/data-science`, primary: true },
          { label: `Read: AI, ML, deep learning and GenAI`, to: `/blog/difference-between-ai-machine-learning-deep-learning-and-generative-ai` },
          { label: `Read: what a Data Scientist does`, to: `/blog/what-is-data-science-and-what-does-a-data-scientist-do` },
          { label: `Read: AI Engineer vs Data Scientist`, to: `/blog/ai-engineer-vs-ai-ml-engineer-vs-data-scientist` },
          { label: `See the AI and ML programme`, to: `/ai-ml` },
          { label: `Browse all Career Insights`, to: `/blog` },
        ],
      },
    ],
    closing: {
      heading: `Sort your next project into the three ideas`,
      text: `Take any small project you have seen and ask three questions. Did it answer a question with data? Did it learn a pattern from examples? Did it act on its own? The answers place it in the picture. If you would like a guided route through all three, our admissions team can explain what the programme covers and what it leaves to later study.`,
    },
    formHeading: `Ask where to start in data science`,
    formSubheading: `Tell us what draws you to data, models or AI and our admissions team will call you back with a suggested first step.`,
  },
];

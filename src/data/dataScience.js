// Auto-generated from data.py via react-data-export/gen_data_js_unified.py — content sourced
// from the original course brochure PDF. Edit here, not by hand-transcribing the PDF again.

const SITE = {
  "brand": "SKILL IT EDUCATION",
  "program": "Advanced Data Science Certification Program",
  "base_path": "/courses/Data-Science",
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
    "slug": "module-1-mathematics-for-data-science",
    "number": 1,
    "title": "Mathematics for Data Science",
    "duration": "2 Weeks",
    "hours": "20 Hrs",
    "hero": "Every data scientist needs the same foundation: the statistics, probability and calculus intuition that every machine learning technique is built on. This module builds that mathematical fluency before any coding or modelling begins.",
    "who_for": "Career changers, graduates and anyone starting a structured path into data science and analytics roles.",
    "relevance": "Every data science interview probes statistics and probability fundamentals — this module builds the mathematical intuition that separates a data scientist who understands their models from one who only calls library functions.",
    "learn": [
      "Linear algebra: vectors & matrices",
      "Probability & statistics fundamentals",
      "Descriptive statistics & distributions",
      "Hypothesis testing & confidence intervals",
      "Correlation & regression basics",
      "Calculus for ML: derivatives & gradients",
      "Combinatorics & probability theory",
      "Statistical inference for data decisions"
    ],
    "tools": [
      {
        "name": "NumPy",
        "desc": "Numerical computing library used for array operations and mathematical computation in data science."
      },
      {
        "name": "SciPy",
        "desc": "Scientific computing library used for statistics, optimization and advanced mathematical functions."
      },
      {
        "name": "Excel",
        "desc": "Spreadsheet tool used for quick data analysis, calculations and lightweight reporting."
      },
      {
        "name": "Google Sheets",
        "desc": "Cloud-based spreadsheet tool used for collaborative data analysis and quick calculations."
      }
    ],
    "labs": [
      "Compute descriptive statistics and visualise distributions for a real dataset.",
      "Run a hypothesis test and interpret a confidence interval on sample data.",
      "Calculate correlation and fit a basic regression line between two variables.",
      "Work through gradient and derivative calculations behind a simple ML update step.",
      "Apply combinatorics and probability theory to a real decision-making scenario."
    ],
    "assessment": {
      "knowledge": "Quiz covering probability, statistical inference, correlation/regression basics and calculus for ML.",
      "practical": "Students must compute and interpret descriptive statistics, a hypothesis test and a regression fit for an assigned dataset."
    },
    "projects": [
      {
        "title": "Statistical Analysis Brief",
        "desc": "Apply descriptive statistics, hypothesis testing and correlation analysis to a real dataset and document the findings."
      }
    ],
    "outcome": "Students build the mathematical and statistical intuition that underpins every data science and machine learning technique used later in the program.",
    "roles": [
      "Data Analyst (Trainee)",
      "Junior Business Analyst",
      "Data Science Associate — foundation track",
      "Research Analyst (Junior)"
    ]
  },
  {
    "slug": "module-2-python-programming",
    "number": 2,
    "title": "Python Programming",
    "duration": "3 Weeks",
    "hours": "30 Hrs",
    "hero": "Python is the language every data science workflow runs on. This module builds real programming fluency — syntax, data structures and the NumPy/Pandas libraries — before any statistical modelling is introduced.",
    "who_for": "Students who have completed the mathematics module and are ready to build real, working Python code.",
    "relevance": "Pandas and NumPy fluency is assumed in almost every data analyst and data scientist job description — this module is the coding foundation the rest of the program is built on.",
    "learn": [
      "Python syntax, data types & control flow",
      "Functions, modules & OOP basics",
      "Lists, dictionaries, tuples & sets",
      "File handling & exception handling",
      "NumPy for numerical computing",
      "Pandas for data manipulation",
      "Working with virtual environments",
      "Writing clean, reusable Python code"
    ],
    "tools": [
      {
        "name": "Python",
        "desc": "Core programming language used across every module, from statistics to machine learning."
      },
      {
        "name": "Jupyter Notebook",
        "desc": "Interactive notebook environment used for data exploration, analysis and model prototyping."
      },
      {
        "name": "NumPy",
        "desc": "Numerical computing library used for array operations and mathematical computation in data science."
      },
      {
        "name": "Pandas",
        "desc": "Data manipulation library used to clean, transform and analyse structured datasets."
      },
      {
        "name": "VS Code",
        "desc": "Primary code editor used for writing, debugging and testing Python and data science code."
      }
    ],
    "labs": [
      "Write Python programs using core data structures, functions and control flow.",
      "Manipulate and clean tabular data using Pandas DataFrames.",
      "Perform numerical computations on arrays using NumPy.",
      "Handle files and exceptions in a small Python data-processing script.",
      "Set up an isolated virtual environment for a data science project."
    ],
    "assessment": {
      "knowledge": "Quiz covering Python fundamentals, OOP basics and core NumPy/Pandas operations.",
      "practical": "Students must write a Python script that loads, cleans and summarises a real dataset using Pandas and NumPy."
    },
    "projects": [
      {
        "title": "Python Data Processing Script",
        "desc": "Build a Python script that loads, cleans and summarises a real-world dataset using NumPy and Pandas."
      }
    ],
    "outcome": "Students gain solid programming fluency in Python, the core language used throughout data science and machine learning.",
    "roles": [
      "Python Developer (Trainee)",
      "Data Analyst (Junior)",
      "Junior Data Engineer",
      "Data Science Associate — foundation track"
    ]
  },
  {
    "slug": "module-3-data-wrangling-sql-cleaning",
    "number": 3,
    "title": "Data Wrangling (SQL + Cleaning)",
    "duration": "2 Weeks",
    "hours": "20 Hrs",
    "hero": "Real data is messy. This module builds the SQL fluency and data-cleaning discipline to extract, join and prepare raw data into a reliable, analysis-ready form — the unglamorous work every data science project depends on.",
    "who_for": "Students who have completed the Python module and are ready to work with real, messy datasets.",
    "relevance": "SQL is one of the most consistently tested skills in data analyst and data scientist interviews, and clean, analysis-ready data is the foundation every downstream model depends on.",
    "learn": [
      "Relational databases & SQL fundamentals",
      "SELECT, JOIN, GROUP BY & subqueries",
      "Handling missing values & duplicates",
      "Outlier detection & data standardization",
      "Merging, reshaping & pivoting datasets",
      "Feature engineering basics",
      "Working with APIs & scraped data",
      "Building clean, analysis-ready datasets"
    ],
    "tools": [
      {
        "name": "SQL",
        "desc": "Query language used to extract, filter and aggregate data from relational databases."
      },
      {
        "name": "MySQL / PostgreSQL",
        "desc": "Relational database systems used to store and query structured data."
      },
      {
        "name": "Pandas",
        "desc": "Data manipulation library used to clean, transform and analyse structured datasets."
      },
      {
        "name": "OpenRefine",
        "desc": "Data-cleaning tool used to explore, standardise and transform messy datasets."
      }
    ],
    "labs": [
      "Write SQL queries using SELECT, JOIN, GROUP BY and subqueries against a real database.",
      "Clean a messy dataset — handling missing values, duplicates and outliers.",
      "Merge, reshape and pivot multiple datasets into a single analysis-ready table.",
      "Pull data from a public API and merge it with an existing dataset.",
      "Engineer basic features from raw columns for downstream analysis."
    ],
    "assessment": {
      "knowledge": "Quiz covering SQL joins, subqueries and data-cleaning techniques.",
      "practical": "Students must extract, clean and merge data from multiple sources into one analysis-ready dataset."
    },
    "projects": [
      {
        "title": "Data Cleaning Lab",
        "desc": "Clean and prepare a messy real-world dataset using SQL and Pandas."
      }
    ],
    "outcome": "Students learn to extract, clean and prepare raw data into a reliable, analysis-ready form — the foundation of every downstream data science task.",
    "roles": [
      "Data Analyst",
      "Junior Data Engineer",
      "Data Wrangling Specialist",
      "ETL Analyst (Trainee)"
    ]
  },
  {
    "slug": "module-4-exploratory-data-analysis",
    "number": 4,
    "title": "Exploratory Data Analysis (EDA)",
    "duration": "2 Weeks",
    "hours": "20 Hrs",
    "hero": "Before any model is built, a dataset has to be understood. This module builds the systematic exploration discipline that uncovers patterns, relationships and anomalies — the insight-generating step every modelling decision depends on.",
    "who_for": "Students who have completed the data wrangling module and are ready to explore real datasets systematically.",
    "relevance": "Structured EDA is the step that separates a data scientist who understands their data from one who jumps straight to modelling — and it's one of the most commonly assessed skills in take-home interview exercises.",
    "learn": [
      "Univariate, bivariate & multivariate analysis",
      "Summary statistics & data profiling",
      "Identifying patterns, trends & anomalies",
      "Correlation analysis between variables",
      "Outlier detection techniques",
      "Handling skewed distributions",
      "Hypothesis-driven data exploration",
      "Communicating early insights clearly"
    ],
    "tools": [
      {
        "name": "Pandas",
        "desc": "Data manipulation library used to clean, transform and analyse structured datasets."
      },
      {
        "name": "NumPy",
        "desc": "Numerical computing library used for array operations and mathematical computation in data science."
      },
      {
        "name": "Jupyter Notebook",
        "desc": "Interactive notebook environment used for data exploration, analysis and model prototyping."
      },
      {
        "name": "Pandas Profiling",
        "desc": "Automated data-profiling tool used to generate quick exploratory data analysis reports."
      }
    ],
    "labs": [
      "Profile a real dataset and summarise its structure, quality and key statistics.",
      "Run univariate, bivariate and multivariate analysis on a real dataset.",
      "Detect and handle outliers and skewed distributions in sample data.",
      "Analyse correlations between variables and surface early patterns.",
      "Document and present exploratory findings in a clear, structured brief."
    ],
    "assessment": {
      "knowledge": "Quiz covering univariate/bivariate analysis, correlation and outlier-detection techniques.",
      "practical": "Students must produce a full exploratory data analysis report on an assigned dataset, including key patterns and anomalies found."
    },
    "projects": [
      {
        "title": "EDA & Visualization Project",
        "desc": "Explore a dataset end-to-end and present findings through Matplotlib and Seaborn visuals."
      }
    ],
    "outcome": "Students learn to systematically explore datasets to uncover patterns and generate the insights that guide every modeling decision that follows.",
    "roles": [
      "Data Analyst",
      "Insights Analyst",
      "Junior Data Scientist — foundation track",
      "Reporting Analyst"
    ]
  },
  {
    "slug": "module-5-data-visualization",
    "number": 5,
    "title": "Data Visualization (Matplotlib / Seaborn)",
    "duration": "2 Weeks",
    "hours": "20 Hrs",
    "hero": "Analysis only creates value once it's understood by someone else. This module builds the skill to turn raw findings into clear, compelling visuals — from chart fundamentals through multi-panel dashboards.",
    "who_for": "Students who have completed the EDA module and are ready to communicate findings visually.",
    "relevance": "The ability to choose the right chart and present it clearly is what turns a data scientist's analysis into a decision — a skill tested directly in portfolio reviews and take-home assessments.",
    "learn": [
      "Principles of effective data visualization",
      "Line, bar, scatter & histogram plots",
      "Matplotlib figure & axes customization",
      "Seaborn statistical plots & heatmaps",
      "Multi-panel & faceted visualizations",
      "Storytelling with data",
      "Choosing the right chart for the data",
      "Building simple visualization dashboards"
    ],
    "tools": [
      {
        "name": "Matplotlib",
        "desc": "Core Python plotting library used to build line, bar, scatter and histogram visualizations."
      },
      {
        "name": "Seaborn",
        "desc": "Statistical visualization library built on Matplotlib, used for heatmaps and distribution plots."
      },
      {
        "name": "Plotly",
        "desc": "Interactive charting library used to build explorable, presentation-ready visualizations."
      }
    ],
    "labs": [
      "Build line, bar, scatter and histogram plots for a real dataset using Matplotlib.",
      "Create statistical plots and heatmaps using Seaborn.",
      "Design a multi-panel, faceted visualization comparing multiple variables.",
      "Choose and justify the right chart type for a given analytical question.",
      "Assemble a small visualization dashboard that tells a coherent data story."
    ],
    "assessment": {
      "knowledge": "Quiz covering chart-type selection, Matplotlib/Seaborn syntax and visualization best practices.",
      "practical": "Students must build a set of publication-quality visualizations that tell a clear, coherent story from a real dataset."
    },
    "projects": [
      {
        "title": "Data Visualization Portfolio",
        "desc": "Build a set of publication-quality Matplotlib and Seaborn visuals that tell a clear story from a real dataset."
      }
    ],
    "outcome": "Students learn to turn raw analysis into clear, compelling visuals that communicate findings to technical and non-technical audiences alike.",
    "roles": [
      "Data Visualization Analyst",
      "Data Analyst",
      "Reporting Analyst",
      "Insights Analyst"
    ]
  },
  {
    "slug": "module-6-business-intelligence-tools",
    "number": 6,
    "title": "Business Intelligence Tools (Power BI / Tableau)",
    "duration": "2 Weeks",
    "hours": "20 Hrs",
    "hero": "Most organisations make decisions through dashboards, not notebooks. This module builds real fluency in Power BI and Tableau — connecting data, building interactive dashboards and presenting insights to stakeholders.",
    "who_for": "Students who have completed the visualization module and are ready to build dashboards for real business stakeholders.",
    "relevance": "Power BI and Tableau fluency is one of the most in-demand, directly-testable skills in Data Analyst and BI Analyst hiring — many interviews include a live dashboard-building exercise.",
    "learn": [
      "BI concepts & dashboard design principles",
      "Connecting & importing data sources",
      "Building interactive dashboards & reports",
      "DAX basics in Power BI",
      "Calculated fields & filters in Tableau",
      "KPI tracking & drill-down analysis",
      "Publishing & sharing dashboards",
      "Presenting insights to stakeholders"
    ],
    "tools": [
      {
        "name": "Power BI",
        "desc": "Microsoft's business intelligence platform used to build interactive dashboards and reports."
      },
      {
        "name": "Tableau",
        "desc": "Business intelligence platform used to build interactive, drill-down data visualizations."
      },
      {
        "name": "Excel",
        "desc": "Spreadsheet tool used for quick data analysis, calculations and lightweight reporting."
      }
    ],
    "labs": [
      "Connect and import multiple data sources into a Power BI dashboard.",
      "Build an interactive Power BI report using DAX measures and filters.",
      "Build a Tableau dashboard with calculated fields and drill-down analysis.",
      "Design KPI tracking views for a sample business scenario.",
      "Publish a dashboard and present its insights to a stakeholder audience."
    ],
    "assessment": {
      "knowledge": "Quiz covering BI dashboard design principles, DAX basics and KPI tracking.",
      "practical": "Students must build and present an interactive Power BI or Tableau dashboard for a real business use case."
    },
    "projects": [
      {
        "title": "BI Dashboard Build",
        "desc": "Design an interactive Power BI or Tableau dashboard for a real business use case."
      }
    ],
    "outcome": "Students learn to build and present interactive business dashboards that turn data into decisions for real organizations.",
    "roles": [
      "Business Intelligence Analyst",
      "Data Analyst",
      "Reporting Analyst",
      "Analytics Consultant (Trainee)"
    ]
  },
  {
    "slug": "module-7-machine-learning-fundamentals",
    "number": 7,
    "title": "Machine Learning Fundamentals",
    "duration": "3 Weeks",
    "hours": "30 Hrs",
    "hero": "This is where data science becomes predictive. Students learn to build, train and evaluate core machine learning models — from regression through clustering — using the same algorithms working data scientists rely on daily.",
    "who_for": "Students who have completed the BI module and are ready to build and evaluate real machine learning models.",
    "relevance": "Machine Learning Engineer and Data Scientist roles both assume core ML fluency — the ability to choose, train and correctly evaluate a model is one of the most heavily tested skills in data science interviews.",
    "learn": [
      "Supervised vs. unsupervised learning",
      "Regression: linear & logistic",
      "Classification: KNN, Decision Trees, Random Forest",
      "Clustering: K-Means & hierarchical clustering",
      "Model evaluation: accuracy, precision, recall, F1",
      "Train-test split, cross-validation & overfitting",
      "Feature scaling & feature selection",
      "Introduction to ensemble methods"
    ],
    "tools": [
      {
        "name": "Scikit-learn",
        "desc": "Machine learning library used to build, train and evaluate classical ML models."
      },
      {
        "name": "Pandas",
        "desc": "Data manipulation library used to clean, transform and analyse structured datasets."
      },
      {
        "name": "NumPy",
        "desc": "Numerical computing library used for array operations and mathematical computation in data science."
      },
      {
        "name": "Jupyter Notebook",
        "desc": "Interactive notebook environment used for data exploration, analysis and model prototyping."
      }
    ],
    "labs": [
      "Train and evaluate linear and logistic regression models on real datasets.",
      "Build classification models using KNN, Decision Trees and Random Forest.",
      "Apply K-Means and hierarchical clustering to segment unlabeled data.",
      "Evaluate model performance using accuracy, precision, recall and F1 score.",
      "Apply cross-validation and feature selection to reduce overfitting."
    ],
    "assessment": {
      "knowledge": "Quiz covering supervised/unsupervised learning, model evaluation metrics and overfitting.",
      "practical": "Students must train, tune and evaluate a classification or regression model on an assigned dataset, and justify their evaluation metric choice."
    },
    "projects": [
      {
        "title": "Machine Learning Model Lab",
        "desc": "Train, tune and evaluate classification and regression models on real datasets."
      }
    ],
    "outcome": "Students learn to build, train and evaluate core machine learning models to solve real prediction and classification problems.",
    "roles": [
      "Junior Data Scientist",
      "ML Engineer (Entry-Level)",
      "Data Science Associate",
      "Data Analyst (ML-focused)"
    ]
  },
  {
    "slug": "module-8-model-deployment",
    "number": 8,
    "title": "Model Deployment",
    "duration": "2 Weeks",
    "hours": "20 Hrs",
    "hero": "The program closes by taking a trained model out of the notebook and into a working application — packaging, serving and deploying it the way real data science teams ship to production.",
    "who_for": "Students consolidating ML skills into deployment capability ahead of applied data scientist and MLOps-adjacent roles.",
    "relevance": "The ability to deploy a model as a working application — not just train it in a notebook — is exactly what separates an applied data scientist from someone who can only prototype.",
    "learn": [
      "Model serialization with Pickle / Joblib",
      "Building REST APIs for ML models",
      "Deploying models with Flask / FastAPI",
      "Containerizing applications with Docker",
      "Deploying models to cloud platforms",
      "Model monitoring & versioning basics",
      "Handling real-time predictions",
      "Building end-to-end ML pipelines"
    ],
    "tools": [
      {
        "name": "Flask",
        "desc": "Lightweight Python web framework used to build and deploy REST APIs for ML models."
      },
      {
        "name": "FastAPI",
        "desc": "Modern Python web framework used to build production-grade APIs for serving ML models."
      },
      {
        "name": "Docker",
        "desc": "Containerization platform used to package and deploy data science applications consistently."
      },
      {
        "name": "Streamlit",
        "desc": "Python framework used to build interactive web apps around data science and ML models."
      },
      {
        "name": "AWS / Azure Basics",
        "desc": "Cloud platform fundamentals used to deploy and host data science applications in production."
      }
    ],
    "labs": [
      "Serialize a trained model using Pickle or Joblib.",
      "Build a REST API that serves predictions from a trained model using Flask or FastAPI.",
      "Containerize a model-serving application using Docker.",
      "Deploy a model-backed application to a cloud platform.",
      "Build a simple interactive app around a trained model using Streamlit."
    ],
    "assessment": {
      "knowledge": "Quiz covering model serialization, REST API design and containerization basics.",
      "practical": "Students must package a trained model into a working API or app, deployed with Flask, FastAPI or Streamlit."
    },
    "projects": [
      {
        "title": "Deployment Project",
        "desc": "Package a trained model into a working API or app deployed with Flask or Streamlit."
      }
    ],
    "outcome": "Students learn to take a trained model out of the notebook and into a working, accessible application — completing the full data science lifecycle.",
    "roles": [
      "Applied Data Scientist",
      "ML / MLOps Engineer (Entry)",
      "Data Scientist (Deployment-focused)",
      "Backend Developer (ML-focused)"
    ]
  }
];

const CAREER_TRACKS = [
  {
    "title": "Data Analysis & BI",
    "roles": [
      "Data Analyst",
      "Business Intelligence Analyst",
      "Reporting Analyst"
    ]
  },
  {
    "title": "Data Science & ML",
    "roles": [
      "Junior Data Scientist",
      "ML Engineer (Entry-Level)",
      "Data Science Associate"
    ]
  },
  {
    "title": "Data Engineering",
    "roles": [
      "Junior Data Engineer",
      "Data Wrangling Specialist",
      "ETL Analyst"
    ]
  },
  {
    "title": "Analytics & Insights",
    "roles": [
      "Analytics Consultant",
      "Insights Analyst",
      "Product Analyst"
    ]
  },
  {
    "title": "Deployment & MLOps",
    "roles": [
      "ML / MLOps Engineer (Entry)",
      "Applied Data Scientist"
    ]
  },
  {
    "title": "Advanced Career Paths",
    "roles": [
      "Senior Data Scientist",
      "Data Science Team Lead",
      "Chief Data Officer (long-term)"
    ]
  }
];

const CERTIFICATIONS = [
  "Google Data Analytics Professional Certificate",
  "IBM Data Science Professional Certificate",
  "Microsoft Certified: Power BI Data Analyst Associate",
  "Tableau Desktop Specialist",
  "AWS Certified Data Analytics – Specialty",
  "Microsoft Certified: Azure Data Scientist Associate"
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
  "Industry-aligned curriculum built around the same tools and workflows used by data teams today",
  "100% hands-on delivery — every module closes with a lab exercise or a real project, not slides",
  "Direct, hands-on time on Power BI and Tableau — the dashboard tools analysts are tested on in interviews",
  "Structured path from mathematical foundations through Python, SQL, machine learning and deployment",
  "Curriculum mapped toward globally recognised certification pathways (Google Data Analytics, IBM Data Science, Power BI and more)",
  "A minimum of five portfolio projects across the program, documented to professional reporting standards",
  "Real-time internship exposure across data analysis, dashboarding and model deployment",
  "Dedicated placement support — resume reviews, mock interviews and a hiring-partner network"
];

const TOOL_LIBRARY = {};

// Page-level copy that differs per course (headings, hero text, salary bands, etc.) — kept
// separate from the structural MODULES/CAREER_TRACKS data so CourseHomePage/CourseModulePage stay
// identical across every course.
const COPY = {
  "metaTitle": "Data Science Course in Hyderabad | Python, SQL & ML | Skill IT Education",
  "metaDesc": "Data Science course in Hyderabad: Python, SQL, machine learning, Power BI and Tableau dashboards and model deployment, with real projects and an internship.",
  "breadcrumbProgramName": "Data Science Program",
  "courseShortName": "Data Science",
  "ogImageFile": "data-science-program-diagram.png",
  "heroVisual": "image",
  "heroImageFile": "data-science-program-diagram.png",
  "heroImageAlt": "Advanced Data Science Certification Program skill map — Python, SQL, Jupyter, Data Visualization, Machine Learning, Deep Learning, AWS Cloud, MLOps, Excel, Tableau, Power BI, Big Data",
  "heroImageWidth": 1000,
  "heroImageHeight": 1000,
  "heroBadges": [
    "Industry-Aligned",
    "180+ Hrs Hands-On"
  ],
  "brochureFile": "Skill-IT-Education-Data-Science-Brochure.pdf",
  "preselectedCourse": "Data Science",
  "durationChip": "INDUSTRY-ALIGNED DATA SCIENCE TRAINING",
  "heroTitleHtml": "Advanced Data Science<br>Certification Program",
  "heroKicker": "Data Science Training in Hyderabad",
  "heroLede": "A 6-month Advanced Data Science Certification Program that takes you from mathematics, statistics and Python programming through machine learning, business intelligence and model deployment. Eight hands-on modules and a two-month real-time internship — built to get you job-ready as a data scientist, not just someone who can run a notebook.",
  "heroStats": [
    {
      "label": "Course Duration",
      "value": "6 Months"
    },
    {
      "label": "Structured Learning",
      "value": "4 Months"
    },
    {
      "label": "Industry Internship",
      "value": "2 Months"
    },
    {
      "label": "Course Fees",
      "value": "₹55,000 / ₹60,000",
      "note": "Online / Offline"
    }
  ],
  "heroQuote": {
    "text": "In God we trust; all others must bring data.",
    "cite": "— W. Edwards Deming, Statistician"
  },
  "roadmapEyebrow": "Data Science Course Curriculum",
  "roadmapTitle": "Eight Modules. One Complete Data Science Skillset.",
  "roadmapSubtitle": "Every module builds directly on the last — from mathematical foundations to full model deployment.",
  "whyEyebrow": "Why This Data Science Course",
  "whyTitle": "A Data Science Course Built to Make You Job-Ready, Not Just Certified",
  "timelineEyebrow": "Course Duration & Learning Path",
  "timelineTitle": "Your Data Science Training Timeline, From Math to Deployment",
  "timelineSubtitle": "180 hours of core curriculum across eight modules, followed by a two-month real-time industry internship.",
  "timelinePhases": [
    {
      "node": "C",
      "tag": "Capstone",
      "title": "End-to-End Data Science Project",
      "duration": "Final Module Project"
    },
    {
      "node": "I",
      "tag": "Final Phase",
      "title": "Real-Time Industry Internship",
      "duration": "2 Months"
    }
  ],
  "toolsEyebrow": "Data Science Tools",
  "toolsTitle": "Python, SQL, Power BI & the Tools You'll Master",
  "toolsSubtitle": "The complete toolset used across the program — from mathematical foundations to machine learning, BI dashboards and deployment.",
  "moduleToolsSubtitle": "Hands-on time with the same tools used by working data analysts and data scientists today.",
  "moduleLabsSubtitle": "Production-style data science lab scenarios, built using real, messy datasets.",
  "moduleCtaHeading": "Continue building your data science portfolio",
  "projectsEyebrow": "Data Science Projects",
  "projectsTitle": "Real Data Science Projects for Your Portfolio",
  "projectsSubtitle": "Every module is reinforced with hands-on work — a minimum of five projects across the program, each added to your portfolio and resume.",
  "featuredProjects": [
    {
      "tag": "Capstone",
      "title": "End-to-End Data Science Project",
      "desc": "Take a business problem from raw data to a deployed, interactive prediction application."
    },
    {
      "tag": "Included",
      "title": "BI Dashboard Build",
      "desc": "Design an interactive Power BI or Tableau dashboard for a real business use case."
    },
    {
      "tag": "Included",
      "title": "Machine Learning Model Lab",
      "desc": "Train, tune and evaluate classification and regression models on real datasets."
    }
  ],
  "outcomesEyebrow": "What You'll Learn",
  "outcomesTitle": "What You'll Be Able to Do After This Data Science Certification",
  "outcomesList": [
    "Apply statistics and probability to real data problems",
    "Write efficient Python code for data analysis",
    "Query and clean data using SQL and Pandas",
    "Perform structured exploratory data analysis",
    "Create clear, effective data visualizations",
    "Build interactive dashboards in Power BI and Tableau",
    "Build and evaluate machine learning models",
    "Apply feature engineering and model tuning techniques",
    "Deploy machine learning models as working applications",
    "Use Docker and cloud basics for deployment",
    "Communicate data-driven insights to stakeholders",
    "Manage an end-to-end data science project lifecycle"
  ],
  "careersEyebrow": "Data Science Career Paths",
  "careersTitle": "Data Science Jobs: Data Analyst, Data Scientist & More",
  "salaryEyebrow": "Salary Positioning",
  "salaryTitle": "Data Science Salary in India & Globally — What to Expect",
  "salarySubtitle": "Figures are broad, indicative ranges for entry-to-mid-level roles and vary significantly by company, location, specialization and experience. They are not a guarantee of outcome.",
  "salaryIndia": {
    "range": "₹4L – ₹10L / year",
    "desc": "Typical entry-to-mid range for Data Analyst, Junior Data Scientist and BI Analyst roles, rising with certifications and project experience."
  },
  "salaryGlobal": {
    "range": "$55K – $100K / year",
    "desc": "Typical entry-to-mid range for equivalent data analyst and data scientist roles in mature international markets."
  },
  "certEyebrow": "Certification Readiness",
  "certTitle": "Certifications This Data Science Course Prepares You For",
  "certSubtitle": "The curriculum is structured to help prepare learners for the following external certifications, including Google Data Analytics and IBM Data Science.",
  "finalCtaTitle": "Start your data science career with a structured, hands-on program",
  "finalCtaSubtitle": "6 months total — 4 months of structured learning across eight modules, plus 2 months of real-time industry internship."
};

// routeBase is this course's mount point inside the unified app's router (e.g. "/cyber-security"),
// distinct from the old standalone repos' own base_path used only for their own SEO canonical URLs.
const routeBase = "/data-science";

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

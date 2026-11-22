const CV_BASE = import.meta.env.BASE_URL;

export const CV_URL = `${CV_BASE}Parvathy_Krishnan_EU_CV.pdf`;
export const CV_DOCX_URL = `${CV_BASE}Parvathy_Krishnan_EU_CV.docx`;

export const CV_FORMATS = [
  {
    code: "eu",
    label: "EU CV",
    lang: "English",
    note: "EU-format, 2 pages",
    pdf: CV_URL,
    docx: CV_DOCX_URL,
  },
  {
    code: "de",
    label: "Lebenslauf",
    lang: "Deutsch",
    note: "Tabellarischer Lebenslauf",
    pdf: `${CV_BASE}Parvathy_Krishnan_Lebenslauf_DE.pdf`,
    docx: `${CV_BASE}Parvathy_Krishnan_Lebenslauf_DE.docx`,
  },
  {
    code: "fr",
    label: "CV Français",
    lang: "Français",
    note: "Format UE, 2 pages",
    pdf: `${CV_BASE}Parvathy_Krishnan_EU_CV_FR.pdf`,
    docx: `${CV_BASE}Parvathy_Krishnan_EU_CV_FR.docx`,
  },
  {
    code: "europass",
    label: "Europass",
    lang: "English",
    note: "Europass standard",
    pdf: `${CV_BASE}Parvathy_Krishnan_Europass_CV.pdf`,
    docx: `${CV_BASE}Parvathy_Krishnan_Europass_CV.docx`,
  },
];

export const availability = {
  base: "Chennai, India",
  relocation: "Open to relocation to the job location",
};

export const profile = {
  name: "Parvathy Krishnan",
  firstName: "Parvathy",
  lastName: "Krishnan",
  role: "Lead Software Development Engineer in Test",
  roleLong:
    "Lead SDET | Test Automation | Quality Engineering across web, mobile, API and performance",
  credentials: "B.E., M.B.A.",
  certification: "ISTQB® Foundation Level (CTFL)",
  location: "Chennai, India",
  website: "https://parvathy-krishnan.github.io/parvathy-krishnan-portfolio/",
  websiteDisplay: "parvathy-krishnan.github.io/parvathy-krishnan-portfolio",
  github: "https://github.com/Parvathy-Krishnan",
  linkedin: "https://www.linkedin.com/in/parvathykrish",
  email: "Parvathy.ece2013@gmail.com",
  phone: "+919791075101",
  phoneDisplay: "+91 97910 75101",
};

export const about =
  "I build the quality layer that lets product teams ship with confidence — automation, performance, security and accessibility wired into delivery, not bolted on at the end.";

export const navLinks = [
  { id: "impact", label: "Impact" },
  { id: "profile", label: "Profile" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "awards", label: "Recognition" },
  { id: "ats", label: "ATS check" },
  { id: "contact", label: "Contact" },
];

export const metrics = [
  {
    value: 13,
    suffix: "+",
    label: "Years in quality engineering",
    note: "Continuous software testing and quality engineering experience since 2013.",
  },
  {
    value: 7,
    suffix: "+",
    label: "Years at Comcast",
    note: "Lead SDET on video platform, player SDK and commerce products since Sep 2019.",
  },
  {
    value: 5,
    suffix: "",
    label: "Product domains",
    note: "Video platform, commerce and payments, CRM, healthcare and knowledge management.",
  },
  {
    value: 2,
    suffix: "",
    label: "Olympic broadcasts",
    note: "Quality engineering for Tokyo 2021 and Beijing 2022 broadcasting.",
  },
];

export const domains = [
  "Video platform",
  "Commerce & payments",
  "CRM",
  "Healthcare",
  "Knowledge management",
];

export const atAGlance = [
  ["Tenure", "13+ years in quality engineering"],
  ["At Comcast", "Since Sep 2019"],
  ["Current role", "Lead SDET"],
  ["Certification", "ISTQB® Foundation Level (CTFL)"],
  ["Coverage", "Web · mobile · API · performance"],
  ["Client work", "Singapore"],
  ["Relocation", "Willing to move to the job location"],
];

export const mandate = [
  ["Current role", "Lead SDET, Comcast India Engineering Center"],
  ["Practice", "Test automation · quality engineering"],
  ["Coverage", "Web, mobile, API, performance, security, accessibility"],
  ["Products", "Video platform · player SDK · commerce"],
  ["Client work", "On-site client delivery in Singapore"],
  ["Education", "B.E. · MBA, Technology Management"],
  ["Based", `${availability.base} · open to relocation`],
  ["Languages", "English C1 · Tamil (native) · German A1 in progress"],
];

export const experience = [
  {
    title: "Lead Software Development Engineer in Test",
    company: "Comcast India Engineering Center",
    dates: "Sep 2019 – Present",
    duration: "7+ years",
    status: "Current",
    location: "Chennai, India",
    products: ["Video platform", "Player Development Kit", "Commerce — payment gateway"],
    intro:
      "Lead quality engineering for products covering content broadcasting, streaming, advertising and payments.",
    bullets: [
      "Lead test engineering across a video platform for content broadcasting, streaming and advertisement, the Player Development Kit and a commerce payment gateway.",
      "Own web and mobile automation using TestCafe, Appium and Selenium, with JUnit, TestNG and Jest for test structure and Percy for visual and AI-assisted testing.",
      "Cover functional, security, performance and accessibility testing, and support code deployment through the release pipeline.",
      "Run performance testing with JMeter and BlazeMeter, API testing with Postman, Swagger and GraphQL Playground, and security testing with ZAProxy and manual audit.",
      "Operate CI/CD and cloud test environments with Jenkins, Concourse, TeamCity, Rundeck, Docker, Kubernetes and AWS.",
      "Use BrowserStack, virtual machines, AWS Device Farm and real devices for cross-browser and mobile coverage.",
      "Investigate production behaviour with Charles Proxy, Splunk, Datadog, Grafana, Adobe SiteCatalyst and Google Analytics.",
      "Work in Agile teams with JIRA, GitHub and GitLab, contributing to debugging, metrics, reporting, code review and documentation.",
      "Support Tokyo 2021 and Beijing 2022 Olympic broadcasting through quality engineering.",
    ],
  },
  {
    title: "Senior Quality Engineer",
    company: "Sysvine Technologies",
    dates: "Mar 2017 – Aug 2019",
    duration: "2 yrs 6 mos",
    status: "",
    location: "Chennai, India",
    products: [
      "Knowledge Management System for chemical research",
      "Course Study Tracker",
      "Operator Qualification Management",
    ],
    intro:
      "Senior quality role across knowledge-management and qualification products, including client delivery in Singapore.",
    bullets: [
      "Worked at the client location in Singapore, testing knowledge management, course tracking and operator qualification systems.",
      "Designed and executed functional, regression and integration test cases against Java-based web applications.",
      "Built and maintained automated checks with Selenium, TestNG and JUnit, and validated data with SQL.",
      "Tested APIs and integrations, tracked defects in JIRA and managed test artefacts through GitHub and GitLab.",
      "Worked in Agile ceremonies, reviewed code and reported quality metrics to project stakeholders.",
    ],
  },
  {
    title: "Software Test Engineer",
    company: "Teamwork Info Solutions",
    dates: "Aug 2013 – Mar 2017",
    duration: "3 yrs 7 mos",
    status: "",
    location: "Chennai, India",
    products: [
      "Customer Relationship Management (CRM) for multiple SMEs",
      "Healthcare Management System",
    ],
    intro:
      "Foundation years in software testing across CRM and healthcare products for small and mid-sized enterprises.",
    bullets: [
      "Tested a customer relationship management product used by multiple SMEs, and a healthcare management system.",
      "Wrote and executed functional, regression and cross-browser test cases against web applications.",
      "Logged, triaged and retested defects using BugNet, Redmine and VSTS.",
      "Validated data and reporting with SQL, and documented test cases and results for each release.",
      "Worked within Agile delivery teams and contributed to code review and release readiness.",
    ],
  },
];

export const earlierNote =
  "Quality engineering since 2013 — three organisations, one continuous through-line: making releases trustworthy.";

export const skillGroups = [
  {
    icon: "workflow",
    title: "Automation & frameworks",
    copy: "Web and mobile test automation built to survive product change.",
    tags: [
      "TestCafe",
      "Appium",
      "Selenium",
      "JUnit",
      "TestNG",
      "Jest",
      "Percy AI testing",
    ],
  },
  {
    icon: "code",
    title: "Languages & data",
    copy: "Enough code to build the checks, and enough SQL to interrogate the data behind them.",
    tags: ["Java", "JavaScript", "SQL", "Visual Studio Code", "Eclipse"],
  },
  {
    icon: "cloud",
    title: "CI/CD, cloud & release",
    copy: "Automation wired into delivery, running where the product runs.",
    tags: [
      "Jenkins",
      "Concourse",
      "TeamCity",
      "Rundeck",
      "Docker",
      "Kubernetes",
      "AWS",
      "Code deployment",
    ],
  },
  {
    icon: "gauge",
    title: "Specialised testing",
    copy: "Beyond functional checks: performance, API, security, accessibility and visual quality.",
    tags: [
      "JMeter",
      "BlazeMeter",
      "Postman",
      "Swagger",
      "GraphQL Playground",
      "ZAProxy",
      "Accessibility",
      "Manual security audit",
    ],
  },
  {
    icon: "devices",
    title: "Browsers & devices",
    copy: "Confidence across the matrix — browsers, virtual machines, cloud device farms and real hardware.",
    tags: [
      "BrowserStack",
      "AWS Device Farm",
      "EC2",
      "Virtual machines",
      "Real devices",
      "Mobile testing",
    ],
  },
  {
    icon: "chart",
    title: "Observability & analytics",
    copy: "Read the logs, trace the request, and measure behaviour in production.",
    tags: [
      "Charles Proxy",
      "Splunk",
      "Datadog",
      "Grafana",
      "Adobe SiteCatalyst",
      "Google Analytics",
    ],
  },
];

export const waysOfWorking = {
  label: "Ways of working",
  items: [
    "Agile methodologies",
    "Debugging",
    "Quality metrics",
    "Reporting",
    "Code review",
    "Documentation",
    "Leading projects",
  ],
  note:
    "A quality practice is only useful when it is legible: clear metrics, reviewed code and documentation that lets the next person move faster.",
};

export const principles = [
  {
    number: "01",
    title: "Automate the repeatable",
    copy:
      "Regression, cross-browser and device coverage should not depend on someone remembering to run it. Automation is how a small team keeps a large surface honest.",
  },
  {
    number: "02",
    title: "Test the whole experience",
    copy:
      "Functional correctness is the baseline. Performance, security, accessibility and visual quality are part of whether a product is actually releasable.",
  },
  {
    number: "03",
    title: "Stay close to the release",
    copy:
      "Quality engineering works best inside delivery — in code review, in the pipeline and in the production signals — rather than as a gate at the end.",
  },
];

export const awards = [
  {
    label: "Olympic broadcasting",
    year: "2021",
    title: "Tokyo Olympics",
    copy: "Quality engineering for Tokyo 2021 broadcasting.",
  },
  {
    label: "Olympic broadcasting",
    year: "2022",
    title: "Beijing Olympics",
    copy: "Quality engineering for Beijing 2022 broadcasting.",
  },
  {
    label: "Innovation",
    year: "",
    title: "Ideator of the Year",
    copy: "Awarded for creating the in-house app “Zowned”.",
  },
  {
    label: "Recognition",
    year: "",
    title: "Gem of the Year",
    copy: "Company-wide recognition for sustained contribution.",
  },
  {
    label: "Recognition",
    year: "",
    title: "Champ Award",
    copy: "Awarded for delivery impact and ownership.",
  },
  {
    label: "Recognition",
    year: "",
    title: "Award of Appreciation",
    copy: "Recognition for contribution to the team and its delivery.",
  },
  {
    label: "Recognition",
    year: "",
    title: "Extra Mile Recognition",
    copy: "Repeated recognition for going beyond the brief.",
  },
];

export const education = {
  institution: "Anna University",
  degrees: [
    {
      degree: "MBA, Technology Management",
      meta: "2017 · Distance Education",
    },
    {
      degree: "B.E., Electronics and Communication Engineering",
      meta: "2013",
    },
  ],
};

export const languages = [
  { name: "English", level: "C1", note: "Full professional proficiency" },
  { name: "Tamil", level: "Native", note: "Mother tongue" },
  { name: "German", level: "A1", note: "Basic; certification in progress" },
];

export const qualityLoop = [
  {
    number: "01",
    title: "Understand",
    copy: "Read the product and the risk: what breaks, who it hurts, and what the release actually changes.",
  },
  {
    number: "02",
    title: "Automate",
    copy: "Build the checks that should run every time — functional, API, cross-browser and device coverage.",
  },
  {
    number: "03",
    title: "Push deeper",
    copy: "Add performance, security, accessibility and visual validation where the risk justifies it.",
  },
  {
    number: "04",
    title: "Feed it back",
    copy: "Report clearly, review the code, document the result, and make the next release easier than the last.",
  },
];

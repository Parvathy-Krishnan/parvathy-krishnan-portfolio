import {
  about,
  awards,
  domains,
  education,
  experience,
  languages as profileLanguages,
  metrics,
  principles,
  profile,
  qualityLoop,
  skillGroups,
  waysOfWorking,
} from "./data";

const CANDIDATE_YEARS = 13;
const CANDIDATE_SENIORITY = 4;
const CANDIDATE_LANGUAGES = {
  english: 5,
  tamil: 6,
  german: 1,
};
const CANDIDATE_DOMAINS = new Set([
  "video",
  "commerce",
  "crm",
  "healthcare",
  "knowledge",
  "broadcast",
  "cloud",
  "mobile",
]);

const LANGUAGE_LABELS = {
  english: "English",
  german: "German",
  tamil: "Tamil",
  french: "French",
  dutch: "Dutch",
  spanish: "Spanish",
  italian: "Italian",
  polish: "Polish",
  portuguese: "Portuguese",
  hindi: "Hindi",
};

const LEVEL_VALUES = {
  a1: 1,
  a2: 2,
  b1: 3,
  b2: 4,
  c1: 5,
  c2: 6,
  native: 6,
};

const SENIORITY_LABELS = {
  1: "Intern / entry level",
  2: "Junior / graduate",
  3: "Mid-level engineer",
  4: "Senior or lead individual contributor",
  5: "Lead / manager",
  6: "Director / head of",
  7: "VP / C-level",
};

const SKILLS = [
  {
    label: "Test automation",
    aliases: ["test automation", "automated testing", "qa automation", "automation testing"],
    weight: 4,
  },
  { label: "Selenium", aliases: ["selenium", "selenium webdriver"], weight: 4 },
  { label: "TestCafe", aliases: ["testcafe"], weight: 3 },
  { label: "Appium", aliases: ["appium"], weight: 3 },
  {
    label: "Web testing",
    aliases: ["web testing", "web application testing", "browser testing"],
    weight: 2,
  },
  {
    label: "Mobile testing",
    aliases: ["mobile testing", "mobile app testing", "mobile automation"],
    weight: 3,
  },
  {
    label: "API testing",
    aliases: ["api testing", "api test", "rest api testing", "graphql testing"],
    weight: 3,
  },
  {
    label: "Performance testing",
    aliases: ["performance testing", "load testing", "stress testing", "performance engineering"],
    weight: 3,
  },
  {
    label: "Security testing",
    aliases: ["security testing", "penetration testing", "pen testing", "vulnerability testing"],
    weight: 2,
  },
  {
    label: "Accessibility testing",
    aliases: ["accessibility testing", "accessibility", "wcag", "a11y"],
    weight: 3,
  },
  {
    label: "Cross-browser testing",
    aliases: ["cross-browser", "cross browser", "cross-browser testing"],
    weight: 2,
  },
  {
    label: "Visual regression",
    aliases: ["visual regression", "visual testing", "percy", "screenshot testing"],
    weight: 2,
  },
  {
    label: "Functional testing",
    aliases: ["functional testing", "functional test", "regression testing"],
    weight: 2,
  },
  { label: "Test cases", aliases: ["test cases", "test case", "test scenarios"], weight: 1 },
  {
    label: "Test planning",
    aliases: ["test planning", "test strategy", "test plan", "quality strategy"],
    weight: 2,
  },
  {
    label: "Defect management",
    aliases: ["defect management", "bug tracking", "defect tracking", "bug reporting"],
    weight: 2,
  },
  { label: "Java", aliases: ["java"], weight: 3 },
  { label: "JavaScript", aliases: ["javascript", "js"], weight: 3 },
  { label: "SQL", aliases: ["sql", "database testing", "data validation"], weight: 2 },
  { label: "JUnit", aliases: ["junit"], weight: 2 },
  { label: "TestNG", aliases: ["testng"], weight: 2 },
  { label: "Jest", aliases: ["jest"], weight: 1 },
  {
    label: "CI/CD",
    aliases: ["ci/cd", "cicd", "continuous integration", "continuous delivery", "continuous deployment"],
    weight: 3,
  },
  { label: "Jenkins", aliases: ["jenkins"], weight: 2 },
  { label: "Concourse", aliases: ["concourse"], weight: 1 },
  { label: "TeamCity", aliases: ["teamcity", "team city"], weight: 1 },
  { label: "Docker", aliases: ["docker", "containerisation", "containerization"], weight: 2 },
  { label: "Kubernetes", aliases: ["kubernetes", "k8s"], weight: 2 },
  { label: "AWS", aliases: ["aws", "amazon web services", "ec2"], weight: 3 },
  {
    label: "Cloud platforms",
    aliases: ["cloud", "azure", "gcp", "google cloud"],
    weight: 2,
  },
  { label: "Git", aliases: ["git", "github", "gitlab"], weight: 2 },
  { label: "Jira", aliases: ["jira"], weight: 2 },
  {
    label: "Confluence",
    aliases: ["confluence", "sharepoint"],
    weight: 1,
  },
  { label: "Postman", aliases: ["postman"], weight: 2 },
  { label: "Swagger", aliases: ["swagger", "openapi"], weight: 2 },
  { label: "GraphQL", aliases: ["graphql", "graph ql"], weight: 2 },
  { label: "JMeter", aliases: ["jmeter", "apache jmeter"], weight: 2 },
  { label: "BlazeMeter", aliases: ["blazemeter", "blaze meter"], weight: 1 },
  {
    label: "Security tooling",
    aliases: ["zaproxy", "zap proxy", "owasp zap", "burp suite"],
    weight: 1,
  },
  {
    label: "Device farms",
    aliases: ["browserstack", "device farm", "aws device farm", "real devices"],
    weight: 2,
  },
  {
    label: "Observability",
    aliases: ["splunk", "datadog", "grafana", "charles proxy", "observability"],
    weight: 2,
  },
  {
    label: "Analytics",
    aliases: ["adobe analytics", "sitecatalyst", "google analytics", "web analytics"],
    weight: 1,
  },
  {
    label: "Agile / Scrum",
    aliases: ["agile", "scrum", "kanban", "safe framework"],
    weight: 2,
  },
  {
    label: "Software development lifecycle",
    aliases: ["sdlc", "software development life cycle", "software testing life cycle"],
    weight: 2,
  },
  {
    label: "Code review",
    aliases: ["code review", "peer review"],
    weight: 1,
  },
  {
    label: "Quality metrics",
    aliases: ["quality metrics", "test metrics", "reporting", "quality reporting"],
    weight: 2,
  },
  {
    label: "Documentation",
    aliases: ["documentation", "test documentation"],
    weight: 1,
  },
  {
    label: "Release management",
    aliases: ["release management", "release readiness", "code deployment", "deployment"],
    weight: 2,
  },
  {
    label: "Debugging",
    aliases: ["debugging", "root cause analysis", "troubleshooting"],
    weight: 2,
  },
];

const LEADERSHIP = [
  {
    label: "Test leadership",
    aliases: ["test lead", "qa lead", "lead sdet", "test manager", "quality lead", "leading testing"],
    weight: 4,
  },
  {
    label: "Quality strategy",
    aliases: ["quality strategy", "test strategy", "quality assurance strategy", "qa strategy"],
    weight: 3,
  },
  {
    label: "Team leadership",
    aliases: [
      "team leadership",
      "people management",
      "line management",
      "team management",
      "leading teams",
      "managed teams",
    ],
    weight: 3,
  },
  {
    label: "Mentoring and coaching",
    aliases: ["mentoring", "coaching", "talent development", "developing engineers"],
    weight: 2,
  },
  {
    label: "Stakeholder management",
    aliases: ["stakeholder management", "stakeholder engagement", "senior stakeholders"],
    weight: 2,
  },
  {
    label: "Project leadership",
    aliases: ["project leadership", "leading projects", "project management", "delivery management"],
    weight: 2,
  },
  {
    label: "Cross-functional collaboration",
    aliases: ["cross-functional", "cross functional", "matrix organisation", "matrix organization"],
    weight: 2,
  },
  {
    label: "Client-facing delivery",
    aliases: ["client-facing", "client facing", "client location", "customer-facing"],
    weight: 2,
  },
  {
    label: "Agile delivery",
    aliases: ["agile delivery", "agile methodologies", "scrum team"],
    weight: 2,
  },
  {
    label: "Release governance",
    aliases: ["release governance", "release management", "quality gate", "release readiness"],
    weight: 2,
  },
  {
    label: "Test environment management",
    aliases: ["test environment", "environment management", "test data"],
    weight: 2,
  },
  {
    label: "Hiring and interview panels",
    aliases: ["hiring", "recruitment", "interview panels", "interviewing", "candidate selection"],
    weight: 1,
  },
  {
    label: "Vendor and partner management",
    aliases: ["vendor management", "partner management", "supplier management"],
    weight: 1,
  },
  {
    label: "Change management",
    aliases: ["change management", "organisational change", "organizational change"],
    weight: 1,
  },
];

const EDUCATION_AND_CERTS = [
  {
    label: "Bachelor's degree",
    aliases: [
      "bachelor",
      "bachelors",
      "bachelor's",
      "b.tech",
      "btech",
      "b.e.",
      "engineering degree",
      "degree in engineering",
    ],
    weight: 3,
  },
  {
    label: "Master's degree or MBA",
    aliases: ["master", "masters", "master's", "mba", "m.tech", "msc"],
    weight: 3,
  },
  {
    label: "ISTQB",
    aliases: ["istqb", "istqb certified", "certified tester"],
    weight: 3,
  },
  {
    label: "Agile certification",
    aliases: ["csm", "scrum master certification", "safe certification", "agile certification"],
    weight: 2,
  },
  {
    label: "AWS certification",
    aliases: ["aws certified", "aws certification", "aws solutions architect"],
    weight: 2,
  },
  {
    label: "Security certification",
    aliases: ["ceh", "oscp", "comptia security", "security certification"],
    weight: 2,
  },
  { label: "ITIL", aliases: ["itil"], weight: 1 },
  {
    label: "Azure certification",
    aliases: ["azure certified", "azure certification"],
    weight: 2,
  },
  {
    label: "Performance certification",
    aliases: ["performance testing certification", "jmeter certification"],
    weight: 1,
  },
];

const DOMAINS = [
  {
    key: "video",
    label: "Video and streaming",
    aliases: ["video platform", "streaming", "ott", "broadcast", "media"],
  },
  {
    key: "commerce",
    label: "Commerce and payments",
    aliases: ["commerce", "payment gateway", "payments", "e-commerce", "ecommerce"],
  },
  {
    key: "crm",
    label: "CRM",
    aliases: ["crm", "customer relationship management"],
  },
  {
    key: "healthcare",
    label: "Healthcare",
    aliases: ["healthcare", "health care", "clinical", "patient"],
  },
  {
    key: "knowledge",
    label: "Knowledge management",
    aliases: ["knowledge management", "learning management", "lms"],
  },
  {
    key: "broadcast",
    label: "Broadcast",
    aliases: ["broadcast", "olympics", "olympic", "live streaming"],
  },
  {
    key: "cloud",
    label: "Cloud",
    aliases: ["cloud", "aws", "azure", "gcp"],
  },
  {
    key: "mobile",
    label: "Mobile",
    aliases: ["mobile", "ios", "android", "app testing"],
  },
];

const STOP_WORDS = new Set(
  (
    "a an and are as at be been being by for from has have had he her his i if in into is it its " +
    "may me more most my we will with you your this that these those they them their there their " +
    "or of on to can could should would do does did not no yes about across after all also any " +
    "because before between both but during each few further here how other over same so some such " +
    "than then under until up very what when where which while who why work working role job " +
    "position candidate candidates team teams company companies business new within using use " +
    "used strong good excellent ability able experience experienced years year plus etc via per " +
    "including include includes required requirement requirements responsibilities responsibility " +
    "skills skill knowledge understanding environment environments ideal successful apply application"
  ).split(/\s+/)
);

const candidateCorpus = normalize(
  [
    profile.name,
    profile.role,
    profile.roleLong,
    about,
    ...metrics.flatMap((metric) => [metric.label, metric.note]),
    ...experience.flatMap((role) => [
      role.title,
      role.company,
      role.dates,
      role.location,
      role.intro,
      ...role.products,
      ...role.bullets,
    ]),
    ...education.degrees.flatMap((item) => [item.degree, item.meta]),
    education.institution,
    ...profileLanguages.map((language) => `${language.name} ${language.level} ${language.note}`),
    ...skillGroups.flatMap((group) => [group.title, group.copy, ...group.tags]),
    ...waysOfWorking.items,
    waysOfWorking.note,
    ...principles.flatMap((item) => [item.title, item.copy]),
    ...awards.flatMap((award) => [award.title, award.copy]),
    ...qualityLoop.flatMap((step) => [step.title, step.copy]),
    ...domains,
    "test automation selenium testcafe appium java javascript sql junit testng jest percy",
    "jenkins concourse teamcity rundeck docker kubernetes aws git github gitlab jira confluence",
    "postman swagger graphql jmeter blazemeter zaproxy browserstack device farm ec2",
    "splunk datadog grafana charles proxy adobe analytics google analytics",
    "functional regression performance security accessibility cross-browser mobile api testing",
    "test planning test cases defect management code review quality metrics documentation release",
    "agile scrum sdlc debugging reporting leading projects client location singapore",
    "english c1 tamil native german a1",
  ].join(" ")
);

export function normalize(text) {
  return String(text ?? "")
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function hasTerm(text, term) {
  const normalizedTerm = normalize(term);
  if (!normalizedTerm) return false;
  if (/^[a-z0-9+#./&' -]+$/.test(normalizedTerm)) {
    const escaped = normalizedTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, "i").test(text);
  }
  return text.includes(normalizedTerm);
}

function scoreTerms(terms, jobText) {
  const required = terms.filter((term) =>
    term.aliases.some((alias) => hasTerm(jobText, alias))
  );
  const matched = required.filter((term) =>
    term.aliases.some((alias) => hasTerm(candidateCorpus, alias))
  );
  const missing = required.filter((term) => !matched.includes(term));
  const requiredWeight = required.reduce((total, term) => total + term.weight, 0);
  const matchedWeight = matched.reduce((total, term) => total + term.weight, 0);
  return {
    required,
    matched,
    missing,
    percentage: requiredWeight ? matchedWeight / requiredWeight : null,
  };
}

function extractYears(jobText) {
  const matches = [];
  const rangePattern = /(\d{1,2})\s*(?:-|to)\s*(\d{1,2})\s*(?:\+)?\s*(?:years|yrs)/gi;
  let rangeMatch;
  while ((rangeMatch = rangePattern.exec(jobText))) {
    matches.push(Number(rangeMatch[2]));
  }
  const singlePattern = /(\d{1,2})\s*(?:\+|plus)?\s*(?:years|yrs)/gi;
  let singleMatch;
  while ((singleMatch = singlePattern.exec(jobText))) {
    matches.push(Number(singleMatch[1]));
  }
  const plausible = matches.filter((value) => value > 0 && value <= 40);
  return plausible.length ? Math.max(...plausible) : null;
}

function detectSeniority(jobText) {
  const checks = [
    [7, /\b(chief|c-level|c level|cto|cio|vice president|vp)\b/],
    [6, /\b(director|head of|group head|head of quality|head of engineering)\b/],
    [
      5,
      /\b(senior manager|test manager|qa manager|quality manager|engineering manager|delivery manager)\b/,
    ],
    [4, /\b(lead sdet|test lead|qa lead|lead engineer|senior sdet|senior quality|senior test)\b/],
    [3, /\b(senior|lead)\b/],
    [2, /\b(mid-level|mid level|engineer|sdet|specialist|analyst)\b/],
    [1, /\b(junior|graduate|entry level|entry-level|intern|internship|trainee)\b/],
  ];
  for (const [level, pattern] of checks) {
    if (pattern.test(jobText)) return level;
  }
  return null;
}

function detectLanguageLevel(jobText, language) {
  const patterns = [
    new RegExp(`${language}[^.\\n;]{0,70}\\b(a1|a2|b1|b2|c1|c2)\\b`, "i"),
    new RegExp(`\\b(a1|a2|b1|b2|c1|c2)\\b[^.\\n;]{0,70}${language}`, "i"),
  ];
  for (const pattern of patterns) {
    const match = jobText.match(pattern);
    if (match) return { value: LEVEL_VALUES[match[1].toLowerCase()], label: match[1].toUpperCase() };
  }

  const windowPattern = new RegExp(`(?:.{0,70})${language}(?:.{0,70})`, "i");
  const windowMatch = jobText.match(windowPattern);
  const context = windowMatch ? windowMatch[0] : "";
  const descriptors = [
    [6, /\b(native|mother tongue)\b/],
    [5, /\b(fluent|full professional|business fluent)\b/],
    [4, /\b(professional working|professional proficiency)\b/],
    [3, /\b(conversational|intermediate)\b/],
    [1, /\b(basic|beginner|elementary)\b/],
  ];
  for (const [value, pattern] of descriptors) {
    if (pattern.test(context)) {
      return {
        value,
        label:
          value === 6
            ? "Native"
            : value === 5
              ? "Fluent"
              : value === 4
                ? "Professional"
                : value === 3
                  ? "Conversational"
                  : "Basic",
      };
    }
  }
  return null;
}

function analyzeExperience(jobText) {
  const requiredYears = extractYears(jobText);
  const requiredSeniority = detectSeniority(jobText);
  const mentionedDomains = DOMAINS.filter((domain) =>
    domain.aliases.some((alias) => hasTerm(jobText, alias))
  );
  const matchedDomains = mentionedDomains.filter((domain) =>
    CANDIDATE_DOMAINS.has(domain.key)
  );

  const parts = [];
  let earned = 0;
  let possible = 0;

  if (requiredYears) {
    possible += 8;
    earned += 8 * Math.min(1, CANDIDATE_YEARS / requiredYears);
    parts.push(
      CANDIDATE_YEARS >= requiredYears
        ? `13 years of quality engineering experience meets the ${requiredYears}+ years requested.`
        : `The role asks for ${requiredYears}+ years; the profile states 13.`
    );
  }

  if (requiredSeniority) {
    possible += 5;
    let ratio = 0;
    if (CANDIDATE_SENIORITY >= requiredSeniority) {
      ratio = 1;
    } else {
      ratio = Math.max(0, 1 - (requiredSeniority - CANDIDATE_SENIORITY) / 3);
    }
    earned += 5 * ratio;
    parts.push(
      CANDIDATE_SENIORITY >= requiredSeniority
        ? `Seniority language (${SENIORITY_LABELS[requiredSeniority]}) is covered by the current profile.`
        : `The role reads as ${SENIORITY_LABELS[requiredSeniority]}; the profile is positioned at lead / senior individual contributor level.`
    );
  }

  if (mentionedDomains.length) {
    possible += 3;
    earned += 3 * (matchedDomains.length / mentionedDomains.length);
    parts.push(
      matchedDomains.length
        ? `Domain overlap: ${matchedDomains.map((domain) => domain.label).join(", ")}.`
        : "No clear domain overlap detected between the job text and the profile."
    );
  }

  return {
    percentage: possible ? earned / possible : null,
    requiredYears,
    requiredSeniority,
    mentionedDomains,
    matchedDomains,
    details: parts,
  };
}

function analyzeLanguages(jobText) {
  const required = [];
  const matched = [];
  const missing = [];

  Object.entries(LANGUAGE_LABELS).forEach(([key, label]) => {
    if (!hasTerm(jobText, label)) return;
    const requirement = detectLanguageLevel(jobText, label.toLowerCase());
    const candidateLevel = CANDIDATE_LANGUAGES[key] ?? 0;
    const requiredLevel = requirement?.value ?? 1;
    const ratio = candidateLevel
      ? Math.min(1, candidateLevel / Math.max(1, requiredLevel))
      : 0;
    const item = {
      label,
      requiredLevel: requirement?.label ?? "mentioned",
      candidateLevel: candidateLevel || null,
      ratio,
    };
    required.push(item);
    if (ratio >= 1) {
      matched.push(item);
    } else {
      missing.push(item);
    }
  });

  const possible = required.reduce(
    (total, item) => total + (item.candidateLevel ? 2 : 3),
    0
  );
  const earned = required.reduce(
    (total, item) => total + (item.candidateLevel ? 2 * item.ratio : 0),
    0
  );

  const details = required.map((item) => {
    if (!item.candidateLevel) {
      return `${item.label} is requested; it is not listed on the profile.`;
    }
    if (item.ratio >= 1) {
      return `${item.label}: profile level covers the role requirement${
        item.requiredLevel !== "mentioned" ? ` (${item.requiredLevel})` : ""
      }.`;
    }
    return `${item.label}: profile level is below the ${item.requiredLevel} requested.`;
  });

  return {
    percentage: possible ? earned / possible : null,
    required,
    matched,
    missing,
    details,
  };
}

function buildJustification({ skills, leadership, experience, educationCerts, languages }) {
  const items = [];
  if (skills.percentage !== null) {
    items.push(
      `${skills.matched.length} of ${skills.required.length} technical requirements detected in the job text are evidenced in the profile.`
    );
  }
  if (leadership.percentage !== null) {
    items.push(
      `${leadership.matched.length} of ${leadership.required.length} leadership and delivery requirements are evidenced.`
    );
  }
  items.push(...experience.details);
  if (educationCerts.percentage !== null) {
    items.push(
      `${educationCerts.matched.length} of ${educationCerts.required.length} education or certification requirements are met.`
    );
  } else {
    items.push("No specific degree or certification requirement was detected.");
  }
  items.push(...languages.details);
  return items;
}

function buildRecommendations({
  score,
  skills,
  leadership,
  experience,
  educationCerts,
  languages,
}) {
  const recommendations = [];
  const missing = [...skills.missing, ...leadership.missing, ...educationCerts.missing]
    .filter((term) => term.weight >= 2)
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 5);

  missing.forEach((term) => {
    recommendations.push(
      `Add evidence of "${term.label}" if it is genuinely part of your experience - a project, tool or result. If it is not, treat it as a potential screen-out.`
    );
  });

  languages.missing.forEach((language) => {
    if (language.label === "German") {
      recommendations.push(
        `The role asks for German${
          language.requiredLevel !== "mentioned" ? ` at ${language.requiredLevel}` : ""
        }; your profile states A1 with certification in progress. Be transparent and give a realistic target date.`
      );
    } else {
      recommendations.push(
        `The role asks for ${language.label}${
          language.requiredLevel !== "mentioned" ? ` at ${language.requiredLevel}` : ""
        }; add it only if you can evidence the level.`
      );
    }
  });

  if (experience.requiredYears && experience.requiredYears > CANDIDATE_YEARS) {
    recommendations.push(
      `The role asks for ${experience.requiredYears}+ years; the profile states 13. Lead with scope, product complexity and quality outcomes rather than tenure alone.`
    );
  }

  if (score >= 85) {
    recommendations.push(
      "Strong alignment. Mirror the job title where it is accurate and lead with the two or three quality outcomes that map most directly to the role."
    );
  } else if (score >= 70) {
    recommendations.push(
      "Good alignment. Tailor the summary and EU CV to the role's top five requirements before applying."
    );
  } else {
    recommendations.push(
      "Stretch alignment. Tailor the summary and EU CV carefully, and do not add skills you cannot evidence in an interview."
    );
  }

  return [...new Set(recommendations)].slice(0, 6);
}

function scoreLabel(score) {
  if (score >= 85) {
    return {
      label: "Strong alignment",
      tone: "strong",
      summary:
        "The role's core requirements are largely visible in the published profile.",
    };
  }
  if (score >= 70) {
    return {
      label: "Good alignment",
      tone: "good",
      summary:
        "Most requirements are covered, with a few gaps worth addressing before applying.",
    };
  }
  if (score >= 55) {
    return {
      label: "Moderate alignment",
      tone: "moderate",
      summary:
        "Part of the role is covered, but several named requirements are not visible.",
    };
  }
  return {
    label: "Stretch alignment",
    tone: "low",
    summary:
      "The role names requirements that are not strongly evidenced in the published profile.",
  };
}

function analyseGenericKeywords(jobText) {
  const tokens = jobText
    .replace(/[^a-z0-9+#./ -]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length >= 4 && !STOP_WORDS.has(token));
  const frequency = new Map();
  tokens.forEach((token) => {
    frequency.set(token, (frequency.get(token) ?? 0) + 1);
  });
  const top = [...frequency.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 18)
    .map(([token]) => token);
  const matched = top.filter((token) => hasTerm(candidateCorpus, token));
  return {
    top,
    matched,
    missing: top.filter((token) => !matched.includes(token)),
    percentage: top.length ? matched.length / top.length : null,
  };
}

export function analyzeJob(jobDescription) {
  const jobText = normalize(jobDescription);
  const wordCount = jobText ? jobText.split(/\s+/).length : 0;

  const skills = scoreTerms(SKILLS, jobText);
  const leadership = scoreTerms(LEADERSHIP, jobText);
  const educationCerts = scoreTerms(EDUCATION_AND_CERTS, jobText);
  const experience = analyzeExperience(jobText);
  const languages = analyzeLanguages(jobText);

  const fallback =
    skills.required.length === 0 &&
    leadership.required.length === 0 &&
    educationCerts.required.length === 0 &&
    !experience.requiredYears &&
    !experience.requiredSeniority &&
    languages.required.length === 0
      ? analyseGenericKeywords(jobText)
      : null;

  const categories = [
    {
      key: "skills",
      label: "Technical & domain skills",
      weight: 40,
      percentage: fallback ? fallback.percentage : skills.percentage,
      required: skills.required.length,
      matched: fallback ? fallback.matched.length : skills.matched.length,
    },
    {
      key: "leadership",
      label: "Leadership & delivery",
      weight: 15,
      percentage: leadership.percentage,
      required: leadership.required.length,
      matched: leadership.matched.length,
    },
    {
      key: "experience",
      label: "Experience & seniority",
      weight: 15,
      percentage: experience.percentage,
    },
    {
      key: "education",
      label: "Education & certifications",
      weight: 10,
      percentage: educationCerts.percentage,
      required: educationCerts.required.length,
      matched: educationCerts.matched.length,
    },
    {
      key: "languages",
      label: "Languages",
      weight: 20,
      percentage: languages.percentage,
      required: languages.required.length,
      matched: languages.matched.length,
    },
  ];

  const active = categories.filter((category) => category.percentage !== null);
  const totalWeight = active.reduce(
    (total, category) => total + category.weight,
    0
  );
  const score = totalWeight
    ? Math.round(
        (active.reduce(
          (total, category) => total + category.percentage * category.weight,
          0
        ) /
          totalWeight) *
          100
      )
    : 0;

  const band = scoreLabel(score);

  const matchedKeywords = [
    ...skills.matched,
    ...leadership.matched,
    ...educationCerts.matched,
  ]
    .sort((a, b) => b.weight - a.weight)
    .map((term) => term.label);

  const missingKeywords = [
    ...skills.missing,
    ...leadership.missing,
    ...educationCerts.missing,
  ]
    .sort((a, b) => b.weight - a.weight)
    .map((term) => term.label);

  if (languages.matched.length) {
    languages.matched.forEach((language) =>
      matchedKeywords.push(`${language.label} (${language.requiredLevel})`)
    );
  }
  if (languages.missing.length) {
    languages.missing.forEach((language) =>
      missingKeywords.push(`${language.label} (${language.requiredLevel})`)
    );
  }

  if (fallback) {
    fallback.missing.forEach((keyword) => missingKeywords.push(keyword));
  }

  return {
    score,
    ...band,
    wordCount,
    categories,
    matchedKeywords: [...new Set(matchedKeywords)].slice(0, 18),
    missingKeywords: [...new Set(missingKeywords)].slice(0, 12),
    justification: fallback
      ? [
          "No structured role requirements were detected, so the score falls back to general keyword overlap.",
          `${fallback.matched.length} of the ${fallback.top.length} most frequent job-description terms appear in the published profile.`,
        ]
      : buildJustification({
          skills,
          leadership,
          experience,
          educationCerts,
          languages,
        }),
    recommendations: buildRecommendations({
      score,
      skills,
      leadership,
      experience,
      educationCerts,
      languages,
    }),
    detected: {
      skills: skills.required.length,
      leadership: leadership.required.length,
      certifications: educationCerts.required.length,
    },
  };
}

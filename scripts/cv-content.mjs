// Content for the downloadable CVs (English, German, French).
// Keep the PDF and DOCX generators in sync by editing this file only.

export const cv = {
  code: "en",
  fileBase: "Parvathy_Krishnan_EU_CV",
  docTitle: "Parvathy Krishnan - EU CV",
  docDescription:
    "EU-format curriculum vitae for Parvathy Krishnan, Lead Software Development Engineer in Test.",
  labels: {
    summary: "Professional summary",
    achievements: "Key achievements",
    experience: "Work experience",
    education: "Education and training",
    languages: "Language skills",
    digital: "Digital skills",
    awards: "Awards and recognition",
    additional: "Additional information",
    footer: "Parvathy Krishnan - EU CV",
    page: "Page",
    of: "of",
  },
  name: "PARVATHY KRISHNAN",
  role: "Lead Software Development Engineer in Test | Test Automation | Quality Engineering",
  contact: [
    ["Chennai, Tamil Nadu, India", "Parvathy.ece2013@gmail.com", "+91 97910 75101"],
    [
      "linkedin.com/in/parvathykrish",
      "github.com/Parvathy-Krishnan",
      "parvathy-krishnan.github.io/parvathy-krishnan-portfolio",
    ],
  ],
  summary:
    "Lead Software Development Engineer in Test with over 13 years of quality engineering experience across video platforms, commerce and payments, CRM, healthcare and knowledge management. Currently leads test engineering at Comcast India Engineering Center for a video platform covering content broadcasting, streaming and advertising, the Player Development Kit and a commerce payment gateway. Builds and maintains web and mobile automation with TestCafe, Appium and Selenium, and extends coverage into API, performance, security and accessibility testing. Works inside delivery with Jenkins, Concourse, TeamCity, Docker, Kubernetes and AWS, and has delivered on client location in Singapore. Holds a B.E. and an MBA in Technology Management from Anna University. Open to relocation to the job location.",
  achievements: [
    "13+ years in software quality engineering across three organisations and five product domains.",
    "Lead SDET for a video platform, the Player Development Kit and a commerce payment gateway at Comcast since Sep 2019.",
    "Quality engineering contribution to Tokyo 2021 and Beijing 2022 Olympic broadcasting.",
    "Created the in-house app \"Zowned\", recognised with the Ideator of the Year award.",
    "Recipient of Gem of the Year, Champ Award, Award of Appreciation and repeated Extra Mile Recognition.",
    "Client delivery on location in Singapore.",
  ],
  experience: [
    {
      title: "Lead Software Development Engineer in Test",
      org: "Comcast India Engineering Center",
      location: "Chennai, India",
      dates: "Sep 2019 - Present",
      intro:
        "Products: video platform (content broadcasting, streaming and advertising), Player Development Kit, commerce payment gateway.",
      bullets: [
        "Lead test engineering across a video platform for content broadcasting, streaming and advertisement, the Player Development Kit and a commerce payment gateway.",
        "Own web and mobile automation with TestCafe, Appium and Selenium, structured with JUnit, TestNG and Jest and extended with Percy AI-assisted visual testing.",
        "Cover functional, security, performance and accessibility testing, and support code deployment through the release pipeline.",
        "Run performance testing with JMeter and BlazeMeter, API testing with Postman, Swagger and GraphQL Playground, and security testing with ZAProxy and manual audit.",
        "Operate CI/CD and cloud test environments with Jenkins, Concourse, TeamCity, Rundeck, Docker, Kubernetes and AWS.",
        "Use BrowserStack, virtual machines, AWS Device Farm and real devices for cross-browser and mobile coverage.",
        "Investigate production behaviour with Charles Proxy, Splunk, Datadog, Grafana, Adobe SiteCatalyst and Google Analytics.",
        "Work in Agile teams with JIRA, GitHub and GitLab, contributing to debugging, quality metrics, reporting, code review and documentation.",
        "Support Olympic broadcasting quality for Tokyo 2021 and Beijing 2022.",
      ],
    },
    {
      title: "Senior Quality Engineer",
      org: "Sysvine Technologies",
      location: "Chennai, India",
      dates: "Mar 2017 - Aug 2019",
      intro:
        "Projects: Knowledge Management System for chemical research, Course Study Tracker, Operator Qualification Management.",
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
      org: "Teamwork Info Solutions",
      location: "Chennai, India",
      dates: "Aug 2013 - Mar 2017",
      intro:
        "Products: Customer Relationship Management (CRM) for multiple SMEs, Healthcare Management System.",
      bullets: [
        "Tested a customer relationship management product used by multiple SMEs, and a healthcare management system.",
        "Wrote and executed functional, regression and cross-browser test cases against web applications.",
        "Logged, triaged and retested defects using BugNet, Redmine and VSTS.",
        "Validated data and reporting with SQL, and documented test cases and results for each release.",
        "Worked within Agile delivery teams and contributed to code review and release readiness.",
      ],
    },
  ],
  education: [
    {
      degree: "MBA in Technology Management",
      institution: "Anna University, Chennai, India",
      dates: "2017",
      note: "Distance education",
    },
    {
      degree: "Bachelor of Engineering (B.E.) in Electronics and Communication Engineering",
      institution: "Anna University, Chennai, India",
      dates: "2013",
    },
  ],
  languages: [
    { name: "English", level: "C1", note: "Full professional proficiency" },
    { name: "Tamil", level: "Native", note: "Mother tongue" },
    {
      name: "German",
      level: "A1",
      note: "Basic; certification in progress",
    },
  ],
  digitalSkills: [
    {
      label: "Automation & frameworks",
      value: "TestCafe, Appium, Selenium, JUnit, TestNG, Jest, Percy AI testing",
    },
    {
      label: "Languages & data",
      value: "Java, JavaScript, SQL",
    },
    {
      label: "CI/CD, cloud & release",
      value:
        "Jenkins, Concourse, TeamCity, Rundeck, Docker, Kubernetes, AWS, code deployment",
    },
    {
      label: "Specialised testing",
      value:
        "JMeter, BlazeMeter, Postman, Swagger, GraphQL Playground, ZAProxy, manual security audit, accessibility testing",
    },
    {
      label: "Browsers, devices & observability",
      value:
        "BrowserStack, AWS Device Farm, EC2, virtual machines, real devices, mobile testing, Charles Proxy, Splunk, Datadog, Grafana, Adobe SiteCatalyst, Google Analytics",
    },
    {
      label: "Tools & working practice",
      value:
        "JIRA, BugNet, Redmine, VSTS, Confluence, SharePoint, GitHub, GitLab, JFrog, Atlas, Visual Studio Code, Eclipse, Agile methodologies, debugging, quality metrics, reporting, code review, documentation",
    },
  ],
  awards: [
    {
      title: "Olympic broadcasting",
      note: "Quality engineering for Tokyo 2021 and Beijing 2022 broadcasting.",
    },
    {
      title: "Ideator of the Year",
      note: "Awarded for creating the in-house app \"Zowned\".",
    },
    {
      title: "Gem of the Year · Champ Award",
      note: "Company-wide recognition for sustained contribution and delivery impact.",
    },
    {
      title: "Award of Appreciation · Extra Mile Recognition",
      note: "Repeated recognition for contribution to the team and its delivery.",
    },
  ],
  additional: [
    "Portfolio: parvathy-krishnan.github.io/parvathy-krishnan-portfolio",
    "Open to Lead SDET, test automation and quality engineering roles across product teams.",
    "Willing to relocate to the job location.",
  ],
};

export const cvDe = {
  code: "de",
  fileBase: "Parvathy_Krishnan_Lebenslauf_DE",
  docTitle: "Parvathy Krishnan - Tabellarischer Lebenslauf",
  docDescription:
    "Tabellarischer Lebenslauf von Parvathy Krishnan, Lead Software Development Engineer in Test.",
  labels: {
    summary: "Berufliches Profil",
    achievements: "Wichtigste Erfolge",
    experience: "Berufserfahrung",
    education: "Ausbildung",
    languages: "Sprachkenntnisse",
    digital: "Digitale Kompetenzen",
    awards: "Auszeichnungen",
    additional: "Zusätzliche Informationen",
    footer: "Parvathy Krishnan - Lebenslauf",
    page: "Seite",
    of: "von",
  },
  name: "PARVATHY KRISHNAN",
  role: "Lead Software Development Engineer in Test | Testautomatisierung | Qualitätsengineering",
  contact: [
    ["Chennai, Tamil Nadu, Indien", "Parvathy.ece2013@gmail.com", "+91 97910 75101"],
    [
      "linkedin.com/in/parvathykrish",
      "github.com/Parvathy-Krishnan",
      "parvathy-krishnan.github.io/parvathy-krishnan-portfolio",
    ],
  ],
  summary:
    "Lead Software Development Engineer in Test mit über 13 Jahren Erfahrung im Qualitätsmanagement für Videoplattformen, Commerce, CRM und Healthcare. Leitet das Test-Engineering bei Comcast für eine Videoplattform, das Player Development Kit und ein Commerce-Payment-Gateway. Schwerpunkte: Web- und Mobile-Automatisierung mit TestCafe, Appium und Selenium, API-, Performance-, Security- und Accessibility-Tests sowie CI/CD mit Jenkins, Docker, Kubernetes und AWS. B.E. und MBA, Anna University. Bereit, an den Arbeitsort umzuziehen.",
  achievements: [
    "13+ Jahre Erfahrung im Software-Qualitätsmanagement in drei Unternehmen und fünf Produktdomänen; Lead SDET für Videoplattform, Player Development Kit und Commerce-Payment-Gateway bei Comcast seit September 2019.",
    "Qualitätssicherung für die Olympia-Berichterstattung Tokio 2021 und Peking 2022.",
    "Ausgezeichnet mit Ideator of the Year, Gem of the Year, Champ Award, Award of Appreciation und Extra Mile Recognition.",
  ],
  experience: [
    {
      title: "Lead Software Development Engineer in Test",
      org: "Comcast India Engineering Center",
      location: "Chennai, Indien",
      dates: "Sep 2019 - heute",
      intro:
        "Produkte: Videoplattform (Content-Broadcasting, Streaming und Werbung), Player Development Kit, Commerce-Payment-Gateway.",
      bullets: [
        "Leitung des Test-Engineerings für eine Videoplattform mit Content-Broadcasting, Streaming und Werbung, das Player Development Kit und ein Commerce-Payment-Gateway.",
        "Verantwortung für Web- und Mobile-Automatisierung mit TestCafe, Appium und Selenium, strukturiert mit JUnit, TestNG und Jest und ergänzt durch Percy AI-gestütztes visuelles Testen.",
        "Abdeckung von funktionalen, Security-, Performance- und Accessibility-Tests; API-Tests mit Postman, Swagger und GraphQL Playground, Performance-Tests mit JMeter und BlazeMeter, Security-Tests mit ZAProxy und manuellem Audit.",
        "Betrieb von CI/CD- und Cloud-Testumgebungen mit Jenkins, Concourse, TeamCity, Rundeck, Docker, Kubernetes und AWS; Nutzung von BrowserStack, virtuellen Maschinen, AWS Device Farm und echten Geräten für Cross-Browser- und Mobile-Abdeckung.",
        "Analyse des Produktionsverhaltens mit Charles Proxy, Splunk, Datadog, Grafana, Adobe SiteCatalyst und Google Analytics.",
        "Arbeit in Agile-Teams mit JIRA, GitHub und GitLab, einschließlich Debugging, Qualitätskennzahlen, Reporting, Code-Review und Dokumentation; Qualitätssicherung für die Olympia-Berichterstattung Tokio 2021 und Peking 2022.",
      ],
    },
    {
      title: "Senior Quality Engineer",
      org: "Sysvine Technologies",
      location: "Chennai, Indien",
      dates: "März 2017 - Aug 2019",
      intro:
        "Projekte: Wissensmanagementsystem für die chemische Forschung, Course Study Tracker, Operator Qualification Management.",
      bullets: [
        "Einsatz beim Kunden vor Ort in Singapur mit Tests für Wissensmanagement-, Kursverfolgungs- und Operator-Qualifikationssysteme.",
        "Entwurf und Durchführung funktionaler, Regressions- und Integrationstests für Java-basierte Webanwendungen; Aufbau automatisierter Prüfungen mit Selenium, TestNG und JUnit sowie Validierung von Daten mit SQL.",
        "Test von APIs und Integrationen, Fehlerverfolgung in JIRA und Verwaltung von Testartefakten über GitHub und GitLab.",
        "Mitarbeit in Agile-Zeremonien, Code-Review und Reporting von Qualitätskennzahlen an Projektstakeholder.",
      ],
    },
    {
      title: "Software Test Engineer",
      org: "Teamwork Info Solutions",
      location: "Chennai, Indien",
      dates: "Aug 2013 - März 2017",
      intro:
        "Produkte: Customer-Relationship-Management (CRM) für mehrere KMU, Healthcare-Management-System.",
      bullets: [
        "Test eines Customer-Relationship-Management-Produkts für mehrere KMU sowie eines Healthcare-Management-Systems.",
        "Erstellung und Durchführung funktionaler, Regressions- und Cross-Browser-Tests für Webanwendungen.",
        "Erfassung, Priorisierung und erneute Prüfung von Fehlern mit BugNet, Redmine und VSTS; Validierung von Daten und Reports mit SQL.",
        "Dokumentation von Testfällen und Ergebnissen für jedes Release; Mitarbeit in Agile-Delivery-Teams sowie Unterstützung von Code-Review und Release-Readiness.",
      ],
    },
  ],
  education: [
    {
      degree: "MBA in Technology Management",
      institution: "Anna University, Chennai, Indien",
      dates: "2017",
      note: "Fernstudium",
    },
    {
      degree: "Bachelor of Engineering (B.E.) in Elektronik- und Kommunikationstechnik",
      institution: "Anna University, Chennai, Indien",
      dates: "2013",
    },
  ],
  languages: [
    {
      name: "Englisch",
      level: "C1",
      note: "Verhandlungssichere Berufssprache",
    },
    { name: "Tamil", level: "Muttersprache", note: "Muttersprache" },
    {
      name: "Deutsch",
      level: "A1",
      note: "Grundkenntnisse; Zertifizierung in Vorbereitung",
    },
  ],
  digitalSkills: [
    {
      label: "Automatisierung & Frameworks",
      value:
        "TestCafe, Appium, Selenium, JUnit, TestNG, Jest, Percy AI-Testing; Java, JavaScript, SQL",
    },
    {
      label: "CI/CD, Cloud & Release",
      value:
        "Jenkins, Concourse, TeamCity, Rundeck, Docker, Kubernetes, AWS",
    },
    {
      label: "Spezialisierte Tests",
      value:
        "JMeter, BlazeMeter, Postman, Swagger, GraphQL Playground, ZAProxy, manuelles Security-Audit, Accessibility-Tests",
    },
    {
      label: "Monitoring, Tools & Arbeitsweise",
      value:
        "BrowserStack, AWS Device Farm, Charles Proxy, Splunk, Datadog, Grafana, Adobe SiteCatalyst, Google Analytics, JIRA, GitHub, GitLab, Confluence, Visual Studio Code, Eclipse, Agile Methoden, Debugging, Qualitätskennzahlen, Reporting, Code-Review, Dokumentation",
    },
  ],
  awards: [
    {
      title: "Olympia-Berichterstattung",
      note: "Qualitätssicherung für Tokio 2021 und Peking 2022.",
    },
    {
      title: "Ideator of the Year, Gem of the Year, Champ Award, Award of Appreciation, Extra Mile Recognition",
      note: "Mehrfache unternehmensweite Anerkennung für Beitrag und Delivery.",
    },
  ],
  additional: [
    "Portfolio: parvathy-krishnan.github.io/parvathy-krishnan-portfolio",
    "Offen für Rollen als Lead SDET, in der Testautomatisierung und im Qualitätsengineering in Produktteams.",
    "Bereit, an den Arbeitsort umzuziehen.",
  ],
};

export const cvFr = {
  code: "fr",
  fileBase: "Parvathy_Krishnan_EU_CV_FR",
  docTitle: "Parvathy Krishnan - CV UE",
  docDescription:
    "Curriculum vitae au format UE de Parvathy Krishnan, ingénieure principale en développement logiciel de test.",
  labels: {
    summary: "Profil professionnel",
    achievements: "Réalisations clés",
    experience: "Expérience professionnelle",
    education: "Formation",
    languages: "Compétences linguistiques",
    digital: "Compétences numériques",
    awards: "Distinctions",
    additional: "Informations complémentaires",
    footer: "Parvathy Krishnan - CV UE",
    page: "Page",
    of: "sur",
  },
  name: "PARVATHY KRISHNAN",
  role: "Ingénieure principale en développement logiciel de test | Automatisation des tests | Ingénierie qualité",
  contact: [
    ["Chennai, Tamil Nadu, Inde", "Parvathy.ece2013@gmail.com", "+91 97910 75101"],
    [
      "linkedin.com/in/parvathykrish",
      "github.com/Parvathy-Krishnan",
      "parvathy-krishnan.github.io/parvathy-krishnan-portfolio",
    ],
  ],
  summary:
    "Ingénieure principale en développement logiciel de test avec plus de 13 ans d'expérience en ingénierie qualité dans les plateformes vidéo, le commerce et les paiements, le CRM, la santé et la gestion des connaissances. Dirige actuellement l'ingénierie de test chez Comcast India Engineering Center pour une plateforme vidéo couvrant la diffusion de contenu, le streaming et la publicité, le Player Development Kit et une passerelle de paiement commerce. Développe et maintient l'automatisation web et mobile avec TestCafe, Appium et Selenium, et étend la couverture aux tests API, performance, sécurité et accessibilité. Travaille au sein de la delivery avec Jenkins, Concourse, TeamCity, Docker, Kubernetes et AWS, et a réalisé une mission chez le client à Singapour. Titulaire d'un B.E. et d'un MBA en Technology Management de l'Anna University. Disposée à déménager près du lieu de travail.",
  achievements: [
    "13+ ans en ingénierie qualité logicielle dans trois organisations et cinq domaines produits.",
    "Lead SDET pour une plateforme vidéo, le Player Development Kit et une passerelle de paiement commerce chez Comcast depuis septembre 2019.",
    "Contribution à l'ingénierie qualité pour la diffusion des Jeux olympiques de Tokyo 2021 et Pékin 2022.",
    "Création de l'application interne \"Zowned\", récompensée par le prix Ideator of the Year.",
    "Lauréate des prix Gem of the Year, Champ Award, Award of Appreciation et de plusieurs Extra Mile Recognition.",
    "Mission chez le client à Singapour.",
  ],
  experience: [
    {
      title: "Ingénieure principale en développement logiciel de test (Lead SDET)",
      org: "Comcast India Engineering Center",
      location: "Chennai, Inde",
      dates: "Sep 2019 - aujourd'hui",
      intro:
        "Produits : plateforme vidéo (diffusion de contenu, streaming et publicité), Player Development Kit, passerelle de paiement commerce.",
      bullets: [
        "Diriger l'ingénierie de test d'une plateforme vidéo pour la diffusion de contenu, le streaming et la publicité, du Player Development Kit et d'une passerelle de paiement commerce.",
        "Piloter l'automatisation web et mobile avec TestCafe, Appium et Selenium, structurée avec JUnit, TestNG et Jest et complétée par les tests visuels assistés par IA de Percy.",
        "Couvrir les tests fonctionnels, de sécurité, de performance et d'accessibilité, et accompagner le déploiement du code dans la pipeline de release.",
        "Exécuter les tests de performance avec JMeter et BlazeMeter, les tests API avec Postman, Swagger et GraphQL Playground, et les tests de sécurité avec ZAProxy et un audit manuel.",
        "Exploiter les environnements de test CI/CD et cloud avec Jenkins, Concourse, TeamCity, Rundeck, Docker, Kubernetes et AWS.",
        "Utiliser BrowserStack, des machines virtuelles, AWS Device Farm et des appareils réels pour la couverture cross-browser et mobile.",
        "Analyser le comportement en production avec Charles Proxy, Splunk, Datadog, Grafana, Adobe SiteCatalyst et Google Analytics.",
        "Travailler dans des équipes Agile avec JIRA, GitHub et GitLab, en contribuant au debugging, aux indicateurs qualité, au reporting, à la revue de code et à la documentation.",
        "Assurer la qualité de la diffusion des Jeux olympiques de Tokyo 2021 et Pékin 2022.",
      ],
    },
    {
      title: "Ingénieure qualité senior",
      org: "Sysvine Technologies",
      location: "Chennai, Inde",
      dates: "Mars 2017 - Août 2019",
      intro:
        "Projets : système de gestion des connaissances pour la recherche chimique, Course Study Tracker, Operator Qualification Management.",
      bullets: [
        "Mission chez le client à Singapour, avec des tests sur des systèmes de gestion des connaissances, de suivi de cours et de qualification des opérateurs.",
        "Conception et exécution de tests fonctionnels, de régression et d'intégration sur des applications web Java.",
        "Création et maintenance de contrôles automatisés avec Selenium, TestNG et JUnit, et validation des données avec SQL.",
        "Test des API et des intégrations, suivi des défauts dans JIRA et gestion des artefacts de test via GitHub et GitLab.",
        "Participation aux cérémonies Agile, à la revue de code et au reporting des indicateurs qualité aux parties prenantes.",
      ],
    },
    {
      title: "Ingénieure de test logiciel",
      org: "Teamwork Info Solutions",
      location: "Chennai, Inde",
      dates: "Août 2013 - Mars 2017",
      intro:
        "Produits : gestion de la relation client (CRM) pour plusieurs PME, système de gestion de santé.",
      bullets: [
        "Test d'un produit de gestion de la relation client utilisé par plusieurs PME et d'un système de gestion de santé.",
        "Rédaction et exécution de tests fonctionnels, de régression et cross-browser sur des applications web.",
        "Enregistrement, priorisation et retest des défauts avec BugNet, Redmine et VSTS.",
        "Validation des données et des rapports avec SQL, et documentation des cas de test et des résultats pour chaque release.",
        "Travail au sein d'équipes de delivery Agile et contribution à la revue de code et à la préparation des releases.",
      ],
    },
  ],
  education: [
    {
      degree: "MBA en Technology Management",
      institution: "Anna University, Chennai, Inde",
      dates: "2017",
      note: "Enseignement à distance",
    },
    {
      degree: "Bachelor of Engineering (B.E.) en électronique et communications",
      institution: "Anna University, Chennai, Inde",
      dates: "2013",
    },
  ],
  languages: [
    { name: "Anglais", level: "C1", note: "Courant professionnel" },
    { name: "Tamoul", level: "Langue maternelle", note: "Langue maternelle" },
    {
      name: "Allemand",
      level: "A1",
      note: "Notions de base ; certification en cours",
    },
  ],
  digitalSkills: [
    {
      label: "Automatisation & frameworks",
      value: "TestCafe, Appium, Selenium, JUnit, TestNG, Jest, tests IA Percy",
    },
    {
      label: "Langages & données",
      value: "Java, JavaScript, SQL",
    },
    {
      label: "CI/CD, cloud & release",
      value:
        "Jenkins, Concourse, TeamCity, Rundeck, Docker, Kubernetes, AWS, déploiement de code",
    },
    {
      label: "Tests spécialisés",
      value:
        "JMeter, BlazeMeter, Postman, Swagger, GraphQL Playground, ZAProxy, audit de sécurité manuel, tests d'accessibilité",
    },
    {
      label: "Navigateurs, appareils & observabilité",
      value:
        "BrowserStack, AWS Device Farm, EC2, machines virtuelles, appareils réels, tests mobiles, Charles Proxy, Splunk, Datadog, Grafana, Adobe SiteCatalyst, Google Analytics",
    },
    {
      label: "Outils & méthodes de travail",
      value:
        "JIRA, BugNet, Redmine, VSTS, Confluence, SharePoint, GitHub, GitLab, JFrog, Atlas, Visual Studio Code, Eclipse, méthodes Agile, debugging, indicateurs qualité, reporting, revue de code, documentation",
    },
  ],
  awards: [
    {
      title: "Diffusion olympique",
      note: "Ingénierie qualité pour la diffusion des Jeux de Tokyo 2021 et de Pékin 2022.",
    },
    {
      title: "Ideator of the Year",
      note: "Décerné pour la création de l'application interne \"Zowned\".",
    },
    {
      title: "Gem of the Year · Champ Award",
      note: "Reconnaissance à l'échelle de l'entreprise pour une contribution durable et un impact sur la delivery.",
    },
    {
      title: "Award of Appreciation · Extra Mile Recognition",
      note: "Reconnaissance répétée pour la contribution à l'équipe et à sa delivery.",
    },
  ],
  additional: [
    "Portfolio : parvathy-krishnan.github.io/parvathy-krishnan-portfolio",
    "Ouverte aux postes de Lead SDET, d'automatisation des tests et d'ingénierie qualité au sein d'équipes produit.",
    "Disposée à déménager près du lieu de travail.",
  ],
};

export const cvLocales = {
  en: cv,
  fr: cvFr,
};

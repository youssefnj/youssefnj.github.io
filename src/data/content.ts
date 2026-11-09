export const profile = {
  name: "Youssef Najari",
  monogram: "YN",
  location: "Fez, Morocco",
  phone: "+212 608 632 710",
  phoneHref: "tel:+212608632710",
  email: "najariyoussef8@gmail.com",
  github: "https://github.com/youssefnj",
  githubLabel: "github.com/youssefnj",
  linkedin: "https://www.linkedin.com/in/youssef-najari",
  cv: "/CV.pdf",
};

export const copy = {
  skip: "Skip to content",
  nav: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],
  cv: "Download CV",
  availability: "Open to internships, apprenticeships, and first roles",
  role: "Full Stack Engineer",
  specialty: "Web & mobile development",
  headline:
    "I design modern applications, REST APIs, and clean architectures — from Flutter mobile apps to Django and Spring backends.",
  ctaPrimary: "View projects",
  ctaSecondary: "Get in touch",
  aboutTitle: "About",
  aboutLead:
    "Computer engineering student at ISGA, focused on web and mobile development.",
  aboutBody: [
    "I care about modern application design, REST APIs, and software architecture. I aim for readable code, polished interfaces, and reliable delivery.",
    "I work independently and want to contribute to real products — with attention to quality and user impact.",
  ],
  facts: [
    { label: "Location", value: "Fez, Morocco" },
    { label: "Education", value: "Engineering cycle · ISGA" },
    { label: "Focus", value: "Web, mobile, APIs" },
    { label: "Languages", value: "Arabic · French · English" },
  ],
  skillsTitle: "Skills",
  skillsIntro:
    "A full-stack toolkit to ship a product end to end: interface, API, data, and delivery.",
  skillGroups: [
    {
      title: "Languages",
      items: [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "Dart",
        "C#",
        "PHP",
        "C / C++",
        "HTML / CSS",
      ],
    },
    {
      title: "Frontend & mobile",
      items: ["Flutter", "Angular", "React.js", "Next.js"],
    },
    {
      title: "Backend",
      items: [
        "Django",
        "Django REST Framework",
        "Spring Boot",
        "Node.js",
        "ASP.NET",
      ],
    },
    {
      title: "Data",
      items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
    },
    {
      title: "DevOps & tools",
      items: [
        "Git / GitHub",
        "Docker",
        "CI/CD",
        "SonarCloud",
        "Swagger / OpenAPI",
        "Postman",
        "Maven",
      ],
    },
    {
      title: "Architecture",
      items: ["UML", "REST API", "JWT", "MVC", "Agile / Scrum"],
    },
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Fluent" },
    { name: "English", level: "Technical" },
  ],
  experienceTitle: "Experience",
  experience: [
    {
      role: "Web Developer",
      org: "E-commerce platform",
      year: "2025",
      points: [
        "Built an e-commerce platform with PHP and MySQL.",
        "Managed products, users, orders, and payments.",
      ],
    },
    {
      role: "WordPress Developer",
      org: "Websites & e-commerce",
      year: "2024",
      points: [
        "Created and customized WordPress websites and online stores.",
        "Adapted themes, content, and the checkout experience.",
      ],
    },
  ],
  projectsTitle: "Projects",
  projectsIntro:
    "Real products across mobile, web, and desktop — with attention to APIs, security, and quality.",
  featuredLabel: "Flagship project",
  projects: [
    {
      featured: true,
      title: "Dresser AI",
      year: "2026",
      kind: "Intelligent mobile app",
      summary:
        "Wardrobe management and personalized outfit recommendations, with a secured REST API and a quality pipeline.",
      stack: [
        "Flutter",
        "Dart",
        "Django",
        "DRF",
        "JWT",
        "Swagger",
        "Docker",
        "CI/CD",
      ],
      points: [
        "Modern, responsive Flutter interface.",
        "Django REST API for users, clothes, outfits, sessions, and recommendations.",
        "JWT authentication, OpenAPI documentation, and Postman collections.",
        "Quality and delivery with SonarCloud, GitHub, Docker, and CI/CD.",
      ],
    },
    {
      featured: false,
      title: "My Fit App",
      year: "2025",
      kind: "Android app",
      summary:
        "Nutrition tracker with metabolism calculation, goals, and user data.",
      stack: ["Android", "Mobile"],
      points: [],
    },
    {
      featured: false,
      title: "FootApp",
      year: "2025",
      kind: "Desktop app",
      summary:
        "Sports tracking app with built-in messaging and prediction features.",
      stack: ["Desktop", "Messaging"],
      points: [],
    },
    {
      featured: false,
      title: "Library Management",
      year: "2024",
      kind: "Web app",
      summary:
        "Library management system built with Jakarta EE / JEE and Angular.",
      stack: ["Jakarta EE", "Angular"],
      points: [],
    },
  ],
  educationTitle: "Education",
  education: [
    {
      title: "Engineering Cycle — Computer Engineering",
      place: "ISGA — Institut Supérieur d’Ingénierie et des Affaires",
      detail: "Web & mobile development",
      years: "2023 — 2026",
    },
    {
      title: "Integrated Preparatory Classes",
      place: "ISGA — Institut Supérieur d’Ingénierie et des Affaires",
      detail: "",
      years: "2021 — 2023",
    },
    {
      title: "International Scientific Baccalaureate",
      place: "Lycée Polyvalent Fez",
      detail: "",
      years: "2020 — 2021",
    },
  ],
  contactTitle: "Let’s work together",
  contactLead:
    "Hiring a full-stack web or mobile engineer? Write to me — I reply quickly.",
  contactCta: "Send an email",
  footer: "Designed and built by Youssef Najari. Available for work.",
} as const;

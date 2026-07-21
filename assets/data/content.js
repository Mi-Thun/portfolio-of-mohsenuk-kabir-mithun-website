/**
 * All editable page content lives here.
 * Add/remove array entries to add/remove cards, projects, resume entries, etc.
 * Fields ending up as innerHTML (marked below) may contain inline tags like <strong>/<em>/<code>.
 */
window.SITE_CONTENT = {

  meta: {
    title: "Mohsenul Kabir Mithun — Software Engineer",
    description: "Portfolio of Mohsenul Kabir Mithun — Software Engineer specializing in backend development, Python, Django, and scalable systems.",
    keywords: "Mohsenul Kabir Mithun, Software Engineer, Backend Developer, Python, Django, React, Portfolio",
    author: "Mohsenul Kabir Mithun",
    ogTitle: "Mohsenul Kabir Mithun — Software Engineer",
    ogDescription: "Backend developer building reliable and scalable solutions with Python, Django, React & more."
  },

  nav: {
    logoHtml: 'MK<span>.</span>', // innerHTML
    links: [
      { label: "Home", href: "#hero", active: true },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Roles", href: "#developer-roles" },
      { label: "Work", href: "#work" },
      { label: "Resume", href: "#resume" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" }
    ],
    ctaLabel: "Let's Talk",
    ctaHref: "#contact"
  },

  hero: {
    number: "01 — intro",
    status: "Available for opportunities",
    titleLine1: "Mohsenul",
    titleLine2Html: 'Kabir <em>Mith<span class="perch-u">u</span>n.</em>', // innerHTML — keep .perch-u, critters.js hooks onto it
    role: "$ Sr. Software Engineer / Researcher / AI Enthusiast",
    descHtml: "Building complete products, from architecture to interface —<br>engineered to work, and to keep working.", // innerHTML
    ctaLabel: "Get In Touch",
    ctaHref: "#contact",
    socials: [
      { label: "GitHub", href: "https://github.com/mi-thun" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mohsenul_kabir_mithun" },
      { label: "Fiverr", href: "https://www.fiverr.com/mkmithun08" }
    ],
    gameTitle: "$ ./bot_vs_bot --game=tictactoe",
    gameStatusInitial: "booting…",
    gameScoreInitial: "X 0 · O 0 · = 0",
    scrollLabel: "scroll"
  },

  about: {
    image: {
      src: "assets/image/Monkey_D.Luffy",
      alt: "Mohsenul Kabir Mithun",
      tagIcon: "☠",
      tagText: "Luffy energy. Engineer mindset."
    },
    roleBadge: "Sr. Software Engineer",
    name: "Mohsenul Kabir Mithun",
    leadHtml: "I build software end to end — from the data model to the user interface — with the care it takes to run reliably in production.", // innerHTML
    bodyHtml: "I'm a Senior Software Engineer who works across the entire product — backend, frontend, cloud infrastructure, and data. I care about the things that make software last: clean architecture, thoughtful APIs, interfaces people enjoy using, and systems that behave well long after launch. I'm equally at home designing a database, reviewing a pull request, or debugging production at odd hours. Beyond engineering, I'm drawn to research and applied AI, and I'm pursuing an M.Sc. in CSE at BRAC University with a 3.95 CGPA on merit scholarship.", // innerHTML
    details: [
      { icon: "bi-geo-alt", text: "Mirpur, Dhaka, Bangladesh" },
      { icon: "bi-mortarboard", text: "M.Sc. in Computer Science and Engineering" },
      { icon: "bi-envelope", text: "mohsenulkabirmi8486@gmail.com" }
    ],
    freelance: {
      icon: "bi-check-circle",
      textHtml: 'Freelance — <strong>Available on Fiverr</strong>', // innerHTML
      href: "https://www.fiverr.com/mkmithun08"
    },
    stats: [
      { id: "expYears", label: "Years Experience", value: "3+", auto: true },
      { label: "Client Platforms", value: "7" },
      { label: "M.Sc. CGPA", value: "3.95" },
      { label: "Production Systems", value: "15+" }
    ]
  },

  skills: {
    subtitle: "SDLC · Database Design · Design Patterns · Data Structures · Algorithms",
    marqueeCore: ["Python", "Django", "Flask", "JavaScript", "React", "PostgreSQL", "MongoDB", "Docker", "AWS", "Linux", "Java", "Supabase"],
    marqueeAccent: ["TensorFlow", "Pandas", "NumPy", "Scikit-learn", "Keras", "Hadoop", "PySpark", "Airflow", "DBT", "Scrapy", "Selenium", "Postman", "Flutter"],
    categories: [
      { num: "01", title: "Core Development", items: "Python · Java · JavaScript · Django · Flask · React · PostgreSQL · MongoDB · ORM" },
      { num: "02", title: "Data & Intelligence", items: "NumPy · Pandas · Scikit-learn · TensorFlow · Keras · Matplotlib · Hadoop · PySpark · Airflow · DBT" },
      { num: "03", title: "Infrastructure", items: "AWS · Docker · Linux · CI/CD · Selenium · JMeter · Postman · Scrapy · Flutter · Supabase" }
    ]
  },

  roles: {
    noteIcon: "⚔",
    noteText: "Survey Corps inspiration — if you know, you know.",
    dividerLabel: "in real life means",
    bottomNoteHtml: 'These aren\'t three different people — <strong>this is one developer, me</strong>, playing every role the project demands.', // innerHTML
    cards: [
      {
        ghostLetter: "E", icon: "bi-lightning-charge-fill", num: "01",
        character: "Eren", characterTitle: "Attack Specialist",
        title: "Full Stack Developer",
        desc: "I attack every layer of the stack. Backend logic, frontend UI, deployment pipelines — I charge in, solve the problem, and ship it.",
        tags: ["Backend", "Frontend", "DevOps"]
      },
      {
        ghostLetter: "M", icon: "bi-shield-fill", num: "02",
        character: "Mikasa", characterTitle: "Defense Specialist",
        title: "UX & Interface Guardian",
        desc: "I guard the user's experience with precision. Clean interfaces, smooth interactions, mobile-first — users deserve protection from bad UX.",
        tags: ["React", "UI/UX", "Mobile"]
      },
      {
        ghostLetter: "A", icon: "bi-lightbulb-fill", num: "03",
        character: "Armin", characterTitle: "Strategic Coordinator",
        title: "Systems Architect",
        desc: "I think before I build. Scalable databases, clean APIs, systems designed not to fall apart under pressure — strategy over brute force.",
        tags: ["Python", "Databases", "APIs"]
      }
    ]
  },

  work: {
    quipCode: "$ git log --production",
    quipTextHtml: '— 7 client platforms · 4 industries · 0 "works on my machine"', // innerHTML
    hintIcon: "bi-arrow-down-right-circle",
    hintText: "Click any project to read the full case study",
    minorLabel: "Also built — academic & off the clock",
    moreNoteHtml: '↗ marks projects with public code — full archive at <a href="https://github.com/mi-thun" target="_blank" rel="noopener">github.com/mi-thun</a>', // innerHTML

    items: [
      {
        title: "Enterprise Banking Workflow Platform",
        client: "Dhaka Bank PLC · 2023 — Present · Full-stack Engineer",
        hook: "9+ systems, one engine",
        openByDefault: true,
        dek: "Instead of building nine banking products from scratch, I built one reusable workflow engine — and extended it into nine-plus production systems.",
        columns: [
          { heading: "The Problem", type: "paragraph", content: "The bank needed to digitize paper-and-spreadsheet processes — bank guarantees, e-lending, card operations, credit limits, tax returns, term deposits — each with its own approval hierarchy, branch/role permissions, and live core-banking dependency." },
          { heading: "What I Built", type: "list", content: [
            "Bank Guarantee &amp; Electronic Lending platforms — the two largest systems in the suite — with configurable role/branch routing and compliance PDF generation",
            "Full card-lifecycle system with bulk Excel activation and a batch engine with failed-job retry",
            "A corporate credit-appraisal engine modeling 40+ financial risk domains into multi-stage sanction chains, plus a parallel SME loan-origination flow",
            "Shared platform: Oracle core-banking integration, LDAP/AD auth, Celery/Redis async, Prometheus/Loki observability, JMeter load coverage"
          ] }
        ],
        outcomeHtml: "9+ mission-critical workflows in production on one shared platform — consistent RBAC, audit trail, and core-banking behavior everywhere. Yes, a bank trusts my code. No, I can't approve your loan.",
        tags: ["Django", "DRF", "React", "PostgreSQL", "Oracle / SOAP", "Celery + Redis", "Docker", "Prometheus / Loki"]
      },
      {
        title: "GDS Integration &amp; Vendor Certification",
        client: "Travelport / SGC Soft OTA · 2025 — Present · Backend Engineer",
        hook: "passed formal certification",
        dek: "Replaced a third-party flight aggregator with a direct Travelport GDS integration — and passed Travelport's multi-round vendor certification to prove it.",
        columns: [
          { heading: "The Problem", type: "paragraph", content: "The agency resold flights through an aggregator sitting in front of Travelport. The goal: a direct integration swappable with a one-line config change — zero client-side changes — while passing the formal MyTravelport certification before production credentials are issued." },
          { heading: "What I Built", type: "list", content: [
            "Layered Flask middleware: a hand-built SOAP client for the full booking lifecycle (search → price → book → ticket → void → cancel), behind a facade reproducing the legacy OTA's exact wire contract",
            "Carried the integration through multi-round certification review, with an automated test-runner covering every mandated scenario",
            "Same booking engine packaged as Ubuntu &amp; Windows desktop apps, a dual-protocol CLI, and supplier modules for a commercial PHP travel CMS"
          ] }
        ],
        outcomeHtml: "a production middleware service with documented reviewer sign-off — one booking engine powering a web API, two desktop clients, a CLI, and a CMS integration.",
        tags: ["Python", "Flask", "SOAP / XML", "Travelport uAPI v52", "JSON API v11", "pywebview", "PyInstaller"]
      },
      {
        title: "Multi-Tenant PE Due-Diligence SaaS",
        client: "InteliqX · 2024 — Present · Platform Engineer",
        hook: "security remediation at scale",
        dekHtml: '"Revenue Intelligence for Private Equity Due Diligence" — six microservices, taken through a formal security and infrastructure remediation program while still shipping product.',
        columns: [
          { heading: "The Problem", type: "paragraph", content: "The platform grew fast on hand-provisioned EC2 with no IaC. A security audit surfaced hundreds of findings — including credentials hardcoded for over a year and no structured multi-tenant isolation model." },
          { heading: "What I Built", type: "list", content: [
            "Eliminated hardcoded Auth0 and Stripe secrets across three services, closing critical audit findings directly",
            "Authored the migration plan to organization-based tenancy backed by PostgreSQL Row-Level Security",
            "Owned AWS CodeBuild CI/CD for backend (Docker → ECR) and frontend (S3/CloudFront); built analyst-facing Plotly visualizations (heatmap, treemap, sunburst, waterfall)"
          ] }
        ],
        outcomeHtml: "hardcoded-secret elimination and CI/CD stabilization delivered, with a documented path to full multi-tenant isolation and infrastructure-as-code.",
        tags: ["Django", "django-tenants", "React", "TypeScript", "Auth0", "Stripe", "Terraform", "AWS"]
      },
      {
        title: "GCC Manpower &amp; Visa Processing SaaS",
        client: "Wafidflow · 2026 · Full-stack Engineer",
        hook: "real-time serverless OCR",
        dek: "A multi-tenant platform for recruitment agencies running the Gulf pre-employment pipeline end to end — visa, medical fitness, embassy, flights.",
        columns: [
          { heading: "The Problem", type: "paragraph", content: "Agencies were manually re-typing applicant data from scanned passports and flight tickets — the slowest, most error-prone step at the front of a multi-stage compliance pipeline." },
          { heading: "What I Built", type: "list", content: [
            "Serverless OCR pipeline: a passport photo upload triggers an AWS Lambda running docTR, extracting structured fields with confidence scores, streamed live to the browser over WebSockets (Django Channels + Redis)",
            "Full applicant lifecycle — intake, embassy batching, flight booking with ticket-OCR auto-fill, contract PDF generation",
            "JWT + Google SSO auth, analytics dashboard, and a from-scratch reusable data table (sort/filter/search/pagination/drag-and-drop)"
          ] }
        ],
        outcomeHtml: "the slowest manual step in the pipeline, automated — on an architecture cleanly separating stateful backend, static frontend, and serverless OCR compute.",
        tags: ["Django", "Channels", "React 19", "TypeScript", "AWS Lambda", "docTR", "Redis", "Docker"]
      },
      {
        title: "Clinical Practice Digital Ecosystem",
        client: "Children's Gastroliver Center · 2025 — Present · Solo Full-stack Developer",
        hook: "a whole EHR, built solo",
        dek: "A real e-prescription app, a schema-driven admin panel, and patient-facing tools for a pediatric clinic — built solo on a lean, serverless foundation.",
        columns: [
          { heading: "The Problem", type: "paragraph", content: "A specialist clinic needed to move from paper prescriptions and ad hoc scheduling to a proper digital practice — without the budget or overhead of a commercial EHR suite." },
          { heading: "What I Built", type: "list", content: [
            "E-prescription/EHR app with a structured visit workflow, searchable medicine database, dose-combination picker, and a real two-column prescription print layout — packaged as an Android app",
            "Schema-driven admin panel that introspects Postgres to auto-generate CRUD for every clinical table — no hand-built screens",
            "AI-assisted meal planning: deterministic allergy/nutrient filtering first, then an LLM composes a 7-day pediatric plan from the curated shortlist — grounded, not hallucinating menus",
            "WHO child-growth data converted into an interactive growth-chart PWA, plus scrapers feeding the drug database"
          ] }
        ],
        outcomeHtml: "a specialist clinic running on a purpose-built digital practice stack — delivered by one developer instead of an EHR vendor's invoice.",
        tags: ["Supabase", "Postgres", "React", "Ionic / Capacitor", "Python", "Groq · Llama 3.3", "AWS S3 / CloudFront"]
      },
      {
        title: "Data Warehouse Platform",
        client: "Frankie4 · 2024 — Present · Data / Backend Engineer",
        hook: "ETL → observable lakehouse",
        dek: "From a custom ETL system to a modern, observable lakehouse-style architecture — with zero downtime to business reporting.",
        columns: [
          { heading: "The Problem", type: "paragraph", content: "Business Central, dual-region Shopify stores, and SFTP report feeds each spoke a different format on a different schedule. The business needed one reliable, monitored pipeline instead of ad hoc exports." },
          { heading: "What I Built", type: "list", content: [
            "Gen 1: custom Python importer/transformer/scheduler microservices with a Flask monitoring dashboard and Auth0 role management",
            "Gen 2: re-architected onto Airflow DAGs, MinIO landing zone, Spark incremental transforms, and dbt staging → intermediate → marts with a data-quality layer",
            "Grafana/Prometheus observability over pipeline performance, storage, and governance"
          ] }
        ],
        outcomeHtml: "a production data platform that evolved from working custom ETL into a dbt-tested, observable architecture — reporting never skipped a beat.",
        tags: ["Python", "Airflow", "MinIO", "Spark", "dbt", "PostgreSQL", "Grafana / Prometheus"]
      },
      {
        title: "Exam-Prep Learning Management System",
        client: "3PCL · 2023 — Present · Full-stack Engineer",
        hook: "1,368 queries → ~0",
        dek: "A mature, multi-year LMS product — and a measured performance-optimization story, not just a feature list.",
        columns: [
          { heading: "What I Built", type: "paragraph", content: "Course, lesson, and question-bank management with Excel bulk import/export, a practice-exam engine with repetition-avoidance logic, and a flashcard study mode. Migrated production onto AWS Graviton (ARM), resolving the packaging issues that came with it." },
          { heading: "The Performance Fix", type: "paragraph", contentHtml: 'Diagnosed an N+1 query pattern in the practice-exam engine and resolved it with <code>select_related</code> plus 35 new indexes — cutting per-request database queries from roughly <strong>1,368 to near-zero</strong>, an ~9.5x speedup, documented in a dedicated performance report.' }
        ],
        outcomeHtml: "600+ backend commits, and concrete proof I'd rather fix the bottleneck than buy a bigger server.",
        tags: ["Django", "DRF", "PostgreSQL", "Celery", "React", "Redux", "AWS Graviton"]
      }
    ],

    minorItems: [
      { title: "Shajkotha", repoUrl: "https://github.com/Mi-Thun/shajkotha-backend", desc: "Jewelry e-commerce MVP with cart/checkout, wishlists, promo codes, and local payment-gateway integration (bKash, Nagad, Rocket).", tags: ["Django REST", "React", "Vite", "SSLCommerz"] },
      { title: "Lung Cancer Diagnose App", repoUrl: "https://github.com/Mi-Thun/diagnose-lung-cancer-flask-server-flutter-app", desc: "Mobile app predicting lung cancer type from CT-scan images — the applied side of my published research.", tags: ["Flutter", "Flask", "CNN"] },
      { title: "Web Scraping — Daraz & DataCamp", repoUrl: "https://github.com/Mi-Thun/python-scrapy-scraper", desc: "Scraping tools extracting structured e-commerce and course-catalog data into a database.", tags: ["Python", "Scrapy", "BeautifulSoup", "MongoDB"] },
      { title: "Python Authentication Hub", repoUrl: "https://github.com/Mi-Thun/python-authentication-hub", desc: "A collection of working auth integrations — popular providers implemented in one place.", tags: ["Python", "Auth0", "OAuth2", "JWT"] },
      { title: "Stripe Recurring Payments", repoUrl: "https://github.com/Mi-Thun/stripe-recurring-python", desc: "Lightweight module for managing subscriptions and recurring billing with webhook support.", tags: ["Python", "Stripe API", "Webhooks"] },
      { title: "Neural Style Transfer Web App", repoUrl: "https://github.com/Mi-Thun/web-application-of-neural-style-transfer", desc: "Web app repainting photos in the style of famous artworks using deep learning.", tags: ["Python", "CNN", "TensorFlow"] },
      { title: "Quizzler App", repoUrl: "https://github.com/Mi-Thun/quizzler-app", desc: "Quiz-based mobile app with separate admin and user interfaces backed by a remote server.", tags: ["Flutter", "Dart", "Android", "Java", "PHP", "MySQL"] },
      { title: "'Lok Lagbe' Platform", repoUrl: "https://github.com/Mi-Thun/web-application-online-lok-lagbe-management-system", desc: "Web platform connecting local workers and day laborers with service seekers.", tags: ["Python", "Flask", "MongoDB"] },
      { title: "Café Shop Management", repoUrl: "https://github.com/Mi-Thun/web-application-online-cafe-shop-management-system", desc: "Full-stack café site with in-store and online ordering — menus, order processing, admin control.", tags: ["PHP", "MySQL", "JavaScript", "XAMPP"] },
      { title: "Grocery Shop Management", repoUrl: "https://github.com/Mi-Thun/grocery-shop-management-system-java-swing", desc: "Desktop app for inventory and sales management with a responsive interface.", tags: ["Java", "Swing"] },
      { title: "Event Management App", repoUrl: "https://github.com/Mi-Thun/event-management-system", desc: "Event scheduling and management app supporting admin and user roles.", tags: ["Java", "SQLite", "PHP", "Android"] },
      { title: "FIFA World Cup 2022 Portal", repoUrl: "https://github.com/Mi-Thun/fifa-world-cup-2022-database-management-project", desc: "Informative portal displaying team stats, fixtures, and results.", tags: ["SQL", "Oracle Apex", "HTML/CSS"] }
    ]
  },

  resume: {
    education: [
      {
        date: "Jan 2024 — Present",
        degree: "M.Sc. in Computer Science and Engineering",
        org: "BRAC University",
        grade: "CGPA: 3.95 / 4.00",
        desc: "Graduate study deepening my grounding in machine learning, advanced algorithms, and research methodology, with a concentration in deep learning for medical imaging — pursued alongside full-time engineering work.",
        achievements: ["75% Merit Scholarship — CGPA 3.95+", "50% Merit Scholarship — CGPA 3.90+", "40% Tuition Fee Waiver — Outstanding undergrad performance"]
      },
      {
        date: "Sep 2019 — Sep 2023",
        degree: "B.Sc. in Computer Science and Engineering",
        org: "East West University",
        grade: "CGPA: 3.76 / 4.00",
        desc: "Built my core foundation across algorithms, data structures, databases, operating systems, and software engineering, with a growing pull toward machine learning and research by the final year.",
        achievements: ["Cum Laude — 3.75+ GPA across 12 consecutive semesters", "Dean's List Scholarship — GPA 3.75+ for 3 semesters", "Medha Lalon Scholarship — GPA 3.50+ for 3 semesters"]
      }
    ],

    publications: [
      {
        dateLabel: "In Progress · M.Sc. Thesis Research",
        statusTag: "Targeting MICCAI / Q1 Journal",
        title: "Trustworthy Missing-Modality Brain MRI Synthesis: Pathology-Faithful Diffusion with Calibrated Uncertainty",
        authorsHtml: '<strong>Mohsenul Kabir Mithun</strong> · BRAC University',
        descHtml: 'A diffusion model for synthesizing missing MRI sequences that stays faithful in the tumor region, paired with the first <strong>calibrated, conformal per-pixel uncertainty map</strong> for cross-modality MRI synthesis — a statistical signal for when a synthesized scan should not be trusted. Targeting <em>MICCAI</em> and a Q1 medical-imaging journal.',
        doiLabel: "DOI: xx.xxxx/xxxxxxxxxxxxx-xx (pending)",
        doiHref: "#"
      },
      {
        dateLabel: "Published 2026 · Book Chapter · 1st Edition",
        statusTag: null,
        title: "Computer-Aided Strategy to Diagnose Lung Cancer from CT-Scan Images Using Inception Architecture",
        authorsHtml: '<strong>Mohsenul Kabir Mithun</strong>, M. Islam, S. N. Zaman, M. T. H. Sagar, O. Numan, S. S. Jennifer, M. H. Shamim, A. W. Reza &amp; N. Siddique',
        descHtml: 'An Inception v3 (CNN) model detecting malignant lung tumors from CT-scan images — achieving <strong>92.36% test accuracy</strong> on preprocessed scans. Chapter in <em>Machine Learning for Healthcare Informatics</em>, published by <strong>Chapman and Hall/CRC, Taylor &amp; Francis Group</strong>.',
        doiLabel: "DOI: 10.1201/9781032650715-12 ↗",
        doiHref: "https://doi.org/10.1201/9781032650715-12"
      }
    ],

    experience: [
      {
        date: "Jan 2026 — Present",
        role: "Sr. Software Engineer",
        org: "Software Global Consultancy (SGC)",
        bullets: [
          "Lead system architecture and technical decision-making — translating business requirements into scalable designs, evaluating trade-offs, and defining API contracts and data models",
          "Own the full delivery lifecycle: sprint planning, estimation, implementation, code review, testing strategy, deployment, and post-release monitoring",
          "Ensure production reliability through observability, on-call incident response, root-cause analysis, and preventive hardening of performance and security",
          "Mentor junior engineers, conduct technical interviews, and set team standards for code quality, documentation, and secure deployment practices",
          "Communicate directly with clients and stakeholders — scoping features, negotiating timelines, and reporting progress across concurrent projects"
        ]
      },
      {
        date: "Jun 2023 — Dec 2025",
        role: "Associate Software Engineer",
        org: "Software Global Consultancy (SGC)",
        bullets: [
          "Designed, built, and maintained production REST APIs, database schemas, and background job pipelines following clean-architecture and design-pattern principles",
          "Integrated third-party services and legacy systems — payment gateways, SOAP/XML APIs, enterprise directories, and OAuth providers — passing a formal vendor certification in the process",
          "Wrote unit and integration tests, participated in code reviews, and maintained technical documentation to keep multi-developer codebases stable",
          "Debugged and resolved production issues end to end — from log analysis to query optimization — including a measured ~9.5x speedup on a live system",
          "Worked in Agile sprints with frontend engineers, QA, and product managers — refining requirements, demoing features, and shipping on schedule"
        ]
      },
      {
        date: "Jun 2023 — Sep 2023",
        role: "Undergraduate Teaching Assistant",
        org: "East West University — Dept. of Computer Science &amp; Engineering",
        bullets: [
          "Ran weekly lab sessions for undergraduate CSE courses — guiding students through programming exercises and debugging their code live",
          "Broke down complex topics into approachable one-on-one tutoring sessions",
          "Reviewed and graded assignments and lab work, giving individual written feedback on code quality and problem-solving approach",
          "Acted as first point of contact between students and faculty — fielding questions, clarifying requirements, and flagging struggling students early"
        ]
      }
    ]
  },

  services: {
    cards: [
      { icon: "bi-server", num: "01", title: "Backend Development", desc: "RESTful API development, database design, server architecture, and backend optimization using Python, Django, and modern frameworks.", key: "backend" },
      { icon: "bi-terminal-fill", num: "02", title: "Python & Automation", desc: "Build, debug, and automate Python projects. Web scraping scripts to custom operational programs tailored for your business needs.", key: "python" },
      { icon: "bi-gear-fill", num: "03", title: "DevOps", desc: "CI/CD pipeline setup, containerization with Docker, cloud deployment strategies, infrastructure automation, and monitoring.", key: "devops" },
      { icon: "bi-window-dock", num: "04", title: "Frontend with React", desc: "Modern, interactive React applications with clean state management, scalable component architecture, and responsive design.", key: "frontend" }
    ],

    // key here MUST match a card's `key` above — content-render.js wires card "Read details" links to the panel with the same key
    panels: {
      backend: {
        navIcon: "bi-server", navLabel: "Backend Development",
        title: "Backend Web Development",
        intro: "I build robust, scalable backend systems that power modern applications. Specializing in REST API design, database architecture, and server-side optimization with Python and Django.",
        highlights: [
          { icon: "bi-database", title: "Database Design", desc: "PostgreSQL, MySQL, schema optimization" },
          { icon: "bi-diagram-3", title: "API Architecture", desc: "RESTful, GraphQL, OAuth2" },
          { icon: "bi-lightning-fill", title: "Performance", desc: "Caching, indexing, monitoring" },
          { icon: "bi-shield-check", title: "Security", desc: "Authentication, authorization, encryption" }
        ],
        deliverables: [
          "Scalable REST APIs with Django &amp; DRF",
          "Database schema design &amp; optimization",
          "Authentication &amp; authorization systems",
          "Caching strategies &amp; performance tuning",
          "Unit &amp; integration testing",
          "API documentation &amp; deployment"
        ]
      },
      python: {
        navIcon: "bi-terminal-fill", navLabel: "Python & Automation",
        title: "Python Projects &amp; Automation",
        intro: "Leverage Python's versatility for custom projects, data processing, automation workflows, and scripting. From web scraping to batch processing and system automation.",
        highlights: [
          { icon: "bi-gear", title: "Automation", desc: "Workflow, task scheduling, scripts" },
          { icon: "bi-graph-up", title: "Data Processing", desc: "ETL, analysis, visualization" },
          { icon: "bi-box-seam", title: "Web Scraping", desc: "BeautifulSoup, Selenium, Scrapy" },
          { icon: "bi-tools", title: "Custom Tools", desc: "Utilities, libraries, integrations" }
        ],
        deliverables: [
          "Automation scripts for complex workflows",
          "Data extraction &amp; processing pipelines",
          "Web scraping &amp; parsing solutions",
          "Batch processing &amp; scheduled jobs",
          "Python libraries &amp; reusable modules",
          "System integration &amp; deployment"
        ]
      },
      devops: {
        navIcon: "bi-gear-fill", navLabel: "DevOps",
        title: "DevOps Service",
        intro: "Build reliable, scalable infrastructure with modern DevOps practices. CI/CD pipelines, containerization, cloud deployment, and infrastructure automation for seamless delivery.",
        highlights: [
          { icon: "bi-git", title: "CI/CD Pipelines", desc: "GitHub Actions, GitLab, automation" },
          { icon: "bi-box-seam", title: "Containerization", desc: "Docker, Docker Compose, images" },
          { icon: "bi-cloud", title: "Cloud Deployment", desc: "AWS, Google Cloud, DigitalOcean" },
          { icon: "bi-eye", title: "Monitoring", desc: "Logging, analytics, alerting" }
        ],
        deliverables: [
          "Complete CI/CD pipeline setup &amp; configuration",
          "Docker containerization &amp; optimization",
          "Infrastructure as Code (IaC)",
          "Cloud deployment &amp; scaling strategies",
          "Monitoring, logging &amp; alerting setup",
          "Security hardening &amp; best practices"
        ]
      },
      frontend: {
        navIcon: "bi-window-dock", navLabel: "Frontend (React)",
        title: "Frontend Service using React",
        intro: "Create modern, interactive user interfaces with React. I build scalable component architectures, manage complex state, and ensure responsive design across all devices.",
        highlights: [
          { icon: "bi-palette", title: "UI/UX Design", desc: "Modern interfaces, accessibility" },
          { icon: "bi-puzzle", title: "Components", desc: "Reusable, modular architecture" },
          { icon: "bi-phone", title: "Responsive", desc: "Mobile-first design, all screens" },
          { icon: "bi-speedometer", title: "Performance", desc: "Optimization, lazy loading, bundling" }
        ],
        deliverables: [
          "Reusable React component system",
          "State management (Redux, Context API)",
          "Responsive &amp; mobile-friendly design",
          "API integration &amp; data fetching",
          "Performance optimization &amp; bundling",
          "Testing &amp; code documentation"
        ]
      }
    },

    overlaySidebar: {
      ctaTitle: "Let's Work Together",
      email: "mohsenulkabirmi8486@gmail.com",
      fiverrHref: "https://www.fiverr.com/mkmithun08",
      fiverrLabel: "Hire me on Fiverr",
      contactLinkLabel: "or send a message ↓"
    }
  },

  contact: {
    desc: "Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you soon.",
    info: [
      { icon: "bi-geo-alt", text: "Mirpur, Dhaka, Bangladesh" },
      { icon: "bi-envelope", text: "mohsenulkabirmi8486@gmail.com" }
    ],
    form: {
      namePlaceholder: "Your Name", nameError: "Please enter your name.",
      emailPlaceholder: "Your Email", emailError: "Valid email required.",
      subjectPlaceholder: "Subject", subjectError: "Please enter a subject.",
      messagePlaceholder: "Your Message", messageError: "Please write your message.",
      sendingLabel: "Sending...",
      successMessage: "Message sent. Thank you!",
      submitLabel: "Send Message →"
    }
  },

  footer: {
    name: "Mohsenul Kabir Mithun",
    tagline: "Building scalable solutions, one commit at a time.",
    socials: [
      { label: "GitHub", href: "https://github.com/mi-thun" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mohsenul_kabir_mithun" },
      { label: "Facebook", href: "https://www.facebook.com/mohsenulkabir.mithun.9" }
    ],
    copyName: "Mohsenul Kabir Mithun"
  },

  // Used by the auto-calculated "Years Experience" stat (about.stats entry with auto:true)
  experienceSince: "2023-06-01"
};

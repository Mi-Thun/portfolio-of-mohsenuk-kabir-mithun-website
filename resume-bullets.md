# Resume Content — Work Experience

> Draft pulled together from your project history. Check/adjust: exact job titles, employment dates, and whether every client engagement below should appear (trim to the strongest 3–4 if space is tight). Name used below is "Mohsenul Kabir Mithun" based on commit authorship — replace if that's not the name you want on the resume.

---

## SGC Soft (Software Global Consultancy) — Software Engineer
*Boutique software/QA outsourcing consultancy, est. 2016. [Confirm your dates, e.g. 2021 – Present]*

Delivered production software across banking, fintech, travel, healthcare, and data-platform clients, working full-stack (Django/DRF, React, Flask) with regular ownership of infrastructure, security remediation, and DevOps.

### Dhaka Bank — Enterprise Banking Workflow Platform (2021 – Present)
- Built and maintained a reusable Django/DRF + React **workflow-engine platform** that powers 9+ production systems for Dhaka Bank: Bank Guarantee issuance, Electronic Lending, Card Payment, Card Services, Credit Limit management (GoLimit), Limit Documentation, Tax Return processing, Term Deposit/Rebate (TDTR), and RM (Relationship Manager) Tagging — each with role- and branch-based access control tied into LDAP/Active Directory.
- Integrated directly with the bank's core banking system (CBS) via Oracle views and SOAP/XML, enabling real-time account, limit, and transaction data across every workflow.
- Delivered a corporate credit-risk appraisal and loan-approval system modeling 40+ financial risk domains (liquidity, leverage, profitability, ICRR) with multi-stage sanction/approval chains, plus a parallel SME loan-origination system with automated executive-summary PDF generation and duplicate-application detection.
- Instrumented production deployments (Docker Compose) with Prometheus, Loki, and Fluentd/Promtail for observability; authored JMeter load tests covering login, workflow CRUD, and account-lookup flows.

### InteliqX — Multi-Tenant PE Due-Diligence SaaS (2024 – Present)
- Contributed across a 6-microservice platform (Django/DRF backend, React/TypeScript dashboard, Flask admin panel, Stripe billing, Auth0 auth service) built for private-equity due-diligence analysis, plus its Terraform IaC.
- Drove hands-on remediation from a formal security/infrastructure audit: eliminated hardcoded Auth0 and Stripe secrets in favor of environment-based secrets management across three services, and hardened AWS credential and TLS handling.
- Authored gap-analysis and migration documentation for moving the platform from user-based to organization-based multi-tenancy backed by PostgreSQL Row-Level Security.
- Maintained CI/CD (AWS CodeBuild) pipelines for backend (Docker/ECR) and frontend (S3/CloudFront) deployments, and built early analyst-dashboard visualizations (heatmap, treemap, sunburst, waterfall charts) with Plotly.

### Travelport — GDS Integration & Vendor API Certification (2025 – Present)
- Designed and built a Flask middleware service that reimplements Travelport's SOAP Universal API (v52) and newer JSON API behind a compatibility facade matching an existing OTA's legacy wire protocol — enabling a drop-in migration off a third-party aggregator with no client-side changes.
- Took the integration through Travelport's formal multi-round **MyTravelport certification** process, resolving reviewer-flagged issues (TraceID continuity, fare/passenger consistency, booking-traveler ordering) across submissions, and built an automated certification test-runner covering all mandated scenarios.
- Built and packaged cross-platform desktop booking clients (Ubuntu via pywebview, Windows via PyInstaller) and a dual-protocol interactive CLI (JSON v11 + SOAP uAPI v52), all sharing one booking engine.
- Delivered Travelport flight and hotel supplier modules for a commercial multi-supplier PHP travel CMS, alongside integrations for Amadeus, Sabre, Duffel, and HotelBeds.

### Wafidflow — GCC Manpower & Visa-Processing SaaS (2026)
- Built a multi-tenant SaaS platform (Django/DRF + React/TypeScript) for recruitment agencies managing GCC pre-employment medical (Wafid), visa, embassy, and flight-booking workflows for expatriate workers.
- Designed a serverless OCR pipeline (AWS Lambda + docTR) that auto-fills applicant forms from passport and flight-ticket photos, streaming results back over WebSockets (Django Channels + Redis) in real time.
- Shipped the full applicant lifecycle — profile intake, embassy batch grouping, flight booking, contract/report PDF generation, and an analytics dashboard — deployed across EC2, S3/CloudFront, and Lambda.

### Gastroliver — Healthcare Practice Digital Ecosystem (2025 – Present)
- Independently designed and built a full digital ecosystem for a pediatric gastroenterology clinic: a real e-prescription/EHR application with a structured visit workflow (history, examination, diagnosis, investigation, medication) and print-ready prescriptions, a schema-driven admin panel with Doctor/Nurse role-based access, and a public appointment-booking site protected by hCaptcha.
- Built a hybrid rule-based + LLM (Groq Llama 3.3 70B) pediatric meal-planning engine that deterministically filters foods by allergy and nutrition constraints before generating a 7-day plan.
- Built data pipelines converting WHO child-growth reference tables and scraped pharmaceutical data into the clinical database, powering an interactive growth-chart tool and the prescription drug database.

### Data Warehouse Platform — Frankie4 (2024 – Present)
- Built a multi-source ETL platform (custom Python importer/transformer/scheduler microservices) integrating Business Central (ERP), dual-region Shopify storefronts, and SFTP feeds into a governed PostgreSQL warehouse, with a monitoring dashboard for import history and transformation mappings.
- Re-architected the platform onto a modern data stack (Airflow, MinIO, Spark, dbt, Grafana/Prometheus), adding incremental watermark-based loads, dbt data-quality tests, and a documented governance layer (PII cataloging, audit logs).

### 3PCL — Exam-Prep LMS Platform (2021 – Present)
- Built and maintained an LMS (Django/DRF + React/Redux) covering course/lesson management, an Excel-importable question bank, practice exams, and a flashcard study feature.
- Diagnosed and fixed an N+1 query problem in the practice-exam engine — cutting per-request database queries by ~99% and adding 35 indexes for roughly a 9.5x speedup — and migrated the production backend onto AWS Graviton (ARM) instances.

---

## Independent / Freelance Projects
- **Shajkotha** — Scaffolded a full-stack jewelry e-commerce MVP (Django REST + React/Vite) for a Bangladeshi jewelry brand, including bKash/Nagad/Rocket/SSLCommerz payment gateway integration, wishlists, reviews, and promo codes.
- **SGC Soft company website** — Built and maintain the firm's corporate marketing site.
- **backup-cron** — Built a Python automation tool performing monthly full and daily incremental backups of project directories to Google Drive via OAuth, with automatic packaging and cleanup.
- Built freelance static websites (portfolio and gallery sites) for independent clients.

---

## Suggested Skills Section (derived from the above)
**Backend:** Python, Django, Django REST Framework, Flask, FastAPI, Celery, Node.js
**Frontend:** React, TypeScript, Redux, Vite, TailwindCSS, Ionic/Capacitor
**Data:** PostgreSQL, Oracle, Airflow, Spark, dbt, MinIO, Supabase
**Cloud/DevOps:** AWS (EC2, Lambda, S3, CloudFront, CodeBuild/ECR), Docker, Terraform, Prometheus/Grafana/Loki
**Integrations:** SOAP/XML, REST, Auth0, Stripe, LDAP/Active Directory, GDS (Travelport) APIs
**Other:** Load testing (JMeter), OCR (docTR), LLM integration (Groq/Llama)

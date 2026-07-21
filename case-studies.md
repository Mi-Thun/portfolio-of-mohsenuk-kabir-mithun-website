# Portfolio Case Studies

> Source content for your personal website's portfolio/case-study section. Each case study follows: Overview → Problem → My Role → Tech Stack → What I Built → Outcome. Trim quotes/specifics as needed — client names are included per your confirmation that they can be used publicly. Do not publish any of the credential/env notes referenced during research; only the descriptions below are safe to reuse.

---

## 1. Dhaka Bank — Enterprise Banking Workflow Platform

**Client:** Dhaka Bank PLC
**Role:** Full-stack Engineer
**Timeframe:** 2021 – Present
**Stack:** Django, Django REST Framework, React, PostgreSQL, Oracle (CBS integration via SOAP/XML), LDAP/Active Directory, Celery + Redis, Docker Compose, Prometheus, Loki/Fluentd/Promtail, JMeter

### Overview
A suite of internal banking systems built on a single, reusable workflow-engine platform — rather than building each banking product from scratch, one core Django/DRF + React engine (workflows, workflow definitions, work histories, core-banking bridge, attachment handling, static configs) was extended and configured for nine-plus distinct banking products.

### Problem
Dhaka Bank needed to digitize a series of manual, paper-and-spreadsheet-driven internal processes — bank guarantee issuance, electronic lending approvals, card operations, credit limit management, tax return processing, term deposit servicing, and relationship-manager governance — each with its own approval hierarchy, branch/role permissions, and dependency on live core-banking data.

### What I Built
- **Bank Guarantee (BG) & Electronic Lending platforms** — issuance, amendment, closure, and lifecycle workflows for bank guarantees and e-lending, with configurable role/branch-based routing and PDF generation for compliance documents. These are the largest systems in the suite by iteration count, reflecting continuous business-rule refinement in production.
- **Card Services & Card Payment** — full card lifecycle (issuance, activation, block, replacement, PIN change), bulk Excel-based card activation/issuance, and a batch-workflow engine with failed-job retry handling.
- **Corporate credit appraisal system (MCC)** — a distinct, purpose-built Django application modeling 40+ financial risk domains (liquidity, leverage, profitability, earnings quality, collateral) feeding a multi-stage proposal/sanction/approval chain — effectively an Internal Credit Risk Rating (ICRR) engine for corporate lending decisions.
- **SME loan origination system** — parallel credit-appraisal workflow for SME borrowers, with automated executive-summary PDF generation, duplicate-application detection, and Excel-based bulk ICRR upload.
- **Limit management, documentation, tax return, and TD/TR (term deposit & rebate) systems** — including a dedicated Islamic banking term-deposit product workflow alongside the conventional one, and RM (Relationship Manager) code-to-branch/customer tagging governance.
- **Shared platform investments**: Oracle-view-based core-banking integration used consistently across systems, LDAP/AD authentication, Celery/Redis for async processing, and — on the newer systems — a full observability stack (Prometheus, Loki, Fluentd/Promtail) plus JMeter load-test coverage of the core workflow APIs.

### Outcome
Nine-plus mission-critical banking workflows running in production on a shared, actively maintained platform — reducing duplicate engineering effort across products and giving the bank consistent RBAC, audit trail, and core-banking integration behavior everywhere.

---

## 2. InteliqX — Multi-Tenant Due-Diligence SaaS for Private Equity

**Client:** InteliqX ("Revenue Intelligence for Private Equity Due Diligence")
**Role:** Full-stack / Platform Engineer
**Timeframe:** 2024 – Present
**Stack:** Django, Django REST Framework, django-tenants, React, TypeScript, Redux, Plotly, Flask, Auth0, Stripe, Terraform, AWS (ECS, Lambda, API Gateway, CodeBuild)

### Overview
InteliqX is a B2B SaaS platform sold to private equity firms: analysts upload target-company financial data, run automated analysis against it, and generate due-diligence reports per deal. The platform is multi-tenant — each PE firm gets its own subdomain, dashboard, users, and credit-based usage plan tied to Stripe billing — and is composed of six microservices plus Terraform-managed infrastructure.

### Problem
The platform had grown quickly on individually hand-provisioned ("ClickOps") EC2 infrastructure with no formal IaC, and a subsequent security/infrastructure audit surfaced hundreds of findings — including hardcoded credentials active for over a year, an internet-exposed database, and no structured multi-tenant isolation model. The engineering task was to work through a phased remediation plan while continuing to ship product.

### My Role & What I Built
- **Security remediation**: removed hardcoded Auth0 client secrets and Stripe keys from source in favor of environment-based configuration across the auth, billing, and admin-panel services — directly closing out critical findings from the audit.
- **Multi-tenancy migration planning**: authored gap-analysis and migration documentation charting the move from ad hoc, user-owned-record tenancy to a proper organization-based model backed by PostgreSQL Row-Level Security (`set_tenant_context`-style isolation).
- **CI/CD ownership**: maintained AWS CodeBuild pipelines for both the Django backend (Docker build → ECR → deploy) and the React dashboard (build → S3/CloudFront sync), iterating the pipeline configuration as the deployment target evolved.
- **Dashboard features**: built early data-visualization work for the analyst-facing dashboard — heatmap, treemap, sunburst, and waterfall charts via Plotly — to help analysts explore deal financials visually.

### Outcome
A production SaaS platform mid-way through a structured security and architecture remediation program, with hardcoded-secret elimination and CI/CD stabilization delivered directly, and a documented path to full multi-tenant isolation and infrastructure-as-code.

---

## 3. Travelport — GDS Integration & Vendor API Certification

**Client:** SGC Soft (internal OTA product) / Travelport (GDS vendor certification)
**Role:** Backend Engineer
**Timeframe:** 2025 – Present
**Stack:** Python, Flask, SQLAlchemy, SOAP/XML (Travelport Universal API v52), Travelport JSON API v11, pywebview, PyInstaller, PHP (PHPTravels)

### Overview
An online travel agency was reselling flights through a third-party aggregator sitting in front of Travelport's GDS. The goal: build a direct Travelport integration that could be swapped in with a one-line configuration change — no changes to the existing site — while positioning the new service as a future B2B API product for other agencies.

### Problem
Direct GDS integration means speaking Travelport's SOAP Universal API (and its newer JSON API) correctly enough to pass a formal, multi-round vendor certification (MyTravelport) before receiving production credentials — while also exactly replicating the wire contract the legacy site already depended on.

### What I Built
- **Anti-corruption middleware**: a layered Flask service — a hand-built SOAP client for the full booking lifecycle (search → price → fare rules → book → ticket → void → retrieve → cancel), behind a booking-engine abstraction, behind a compatibility facade that reproduces the legacy OTA's exact field-level API contract (verified against real captured traffic).
- **Vendor certification**: carried the integration through Travelport's formal multi-round review process, resolving specific reviewer feedback across submissions — TraceID continuity across a whole booking flow, passenger-age consistency between search/price/book, correct booking-traveler ordering, infant SSR formatting — and built an automated certification test-runner that executes all mandated scenarios (adult/child/infant, round-trip, connecting flights, public/private fares) and produces submission-ready logs.
- **Cross-platform desktop clients**: packaged the same booking engine as native-feeling desktop apps for Ubuntu (via pywebview) and Windows (via PyInstaller), sharing one codebase.
- **CLI tool**: a dual-protocol interactive terminal booking tool supporting both the legacy SOAP API and the newer JSON API, used for fast manual testing and diagnostics.
- **Commercial CMS integration**: delivered Travelport flight and hotel supplier modules for a multi-supplier PHP travel booking CMS already integrating Amadeus, Sabre, Duffel, and HotelBeds.

### Outcome
A verifiable, end-to-end GDS integration story: a production middleware service, a passed multi-round vendor certification with documented reviewer sign-off, two packaged desktop clients, a CLI tool, and a commercial CMS integration — all sharing one booking engine.

---

## 4. Wafidflow — GCC Manpower & Visa Processing SaaS

**Client:** Wafidflow
**Role:** Full-stack Engineer
**Timeframe:** 2026
**Stack:** Django, Django REST Framework, Django Channels, Celery, React 19, TypeScript, Vite, TailwindCSS, AWS Lambda, docTR (OCR), PostgreSQL, Redis, Docker

### Overview
A multi-tenant SaaS platform for recruitment/manpower agencies managing the Gulf pre-employment process for expatriate workers — visa, Wafid medical fitness screening, embassy attestation, and flight coordination — end to end.

### Problem
Agencies were manually re-typing applicant data from scanned passports and flight tickets into forms, a slow and error-prone step at the front of a multi-stage compliance pipeline (embassy batching, medical clearance, flight booking, contract generation).

### What I Built
- **Serverless OCR pipeline**: a passport (and flight-ticket) photo upload triggers an event-invoked AWS Lambda running docTR, which extracts structured fields (names, passport number, DOB, dates, place of birth) with per-field confidence scores after a sharpness/quality gate — then streams the result back to the browser over a WebSocket (Django Channels + Redis) so the multi-step application form hydrates in real time instead of the user waiting on a polling loop.
- **Applicant lifecycle**: profile intake, embassy batch grouping for submission, flight booking (with its own ticket-OCR auto-fill), and PDF generation for employment contracts and financial reports (WeasyPrint/ReportLab/pyHanko).
- **Enterprise auth**: JWT plus Google SSO (django-allauth), with a sandboxed architecture to isolate tenant data.
- **Analytics dashboard**: reports, activity feed, and financial-analysis charts (Recharts), built alongside a reusable, from-scratch data table component (sort/filter/search/pagination/drag-and-drop) on top of shadcn/ui.
- **Deployment architecture**: a genuine microservices/polyrepo layout — Django backend on EC2 behind nginx, React frontend on S3/CloudFront, the OCR engine as a containerized Lambda, and Postgres as its own Dockerized service.

### Outcome
An automated, real-time OCR-driven intake flow that removes the slowest manual step in the pipeline, on an architecture that cleanly separates a stateful backend, a static frontend, and a serverless compute-heavy OCR worker.

---

## 5. Gastroliver — Digital Ecosystem for a Pediatric Gastroenterology Clinic

**Client:** Children's Gastroliver Center
**Role:** Solo Full-stack Developer
**Timeframe:** 2025 – Present
**Stack:** Supabase (Postgres, Auth, Edge Functions), React, Ionic/Capacitor, Python (Selenium, pdfplumber), Groq (Llama 3.3 70B), AWS S3/CloudFront

### Overview
A full digital ecosystem, built solo, covering the entire patient journey for a pediatric gastroenterology practice: marketing and discovery, appointment booking, clinical documentation and prescribing, administrative oversight, and patient-facing self-service tools.

### Problem
A specialist clinic needed to move from paper prescriptions and ad hoc scheduling to a proper digital practice — without the overhead of adopting (or budget for) a full commercial EHR suite.

### What I Built
- **E-prescription / EHR application** (the flagship module): a structured clinical visit workflow — History, Complaint, Examination, Diagnosis, Investigation, Medication, Advice — each backed by its own database table, with a searchable medicine database, a dose-combination picker that recalls common dosage/duration presets, and a print service that renders a real, two-column prescription-pad layout. Packaged as an installable Android app via Capacitor.
- **Schema-driven admin panel**: a role-based (Doctor/Nurse) dashboard that introspects the Postgres schema to auto-generate CRUD interfaces for every clinical table — patients, visits, prescriptions, medicines, diagnoses — rather than hand-building a screen per table.
- **Public booking micro-site**: a lightweight, hCaptcha-protected appointment widget calling a Supabase Edge Function, kept separate from the admin/clinical tools for easy embedding.
- **AI-assisted meal planning**: a hybrid engine that first deterministically filters foods by allergy exclusions and nutrient targets (and mandatory staple foods), then hands the curated shortlist to an LLM (Groq's Llama 3.3 70B, JSON mode) to compose a full 7-day pediatric meal plan within a calorie range — keeping the model grounded rather than freely hallucinating menus.
- **Clinical data pipelines**: scrapers (Selenium/BeautifulSoup) against pharmaceutical manufacturer sites feeding the prescription drug database; a WHO child-growth reference dataset converted into SQL and surfaced as an interactive growth-chart tool in a patient-facing PWA of medical calculators (BMI, TDEE, fluid, fiber).
- **Marketing site & blog**: an SEO-optimized static site with an automated blog pipeline (image optimization, S3 upload, Supabase-backed post storage).

### Outcome
A specialist clinic running on a real, purpose-built digital practice stack — a working point-of-care e-prescription tool, a self-service admin panel, and patient-facing tools — delivered solo on a lean, serverless (Supabase) foundation instead of a costly off-the-shelf EHR.

---

## 6. Data Warehouse Platform — Frankie4

**Client:** Frankie4
**Role:** Data/Backend Engineer
**Timeframe:** 2024 – Present
**Stack:** Python, Flask, PostgreSQL, Auth0; later: Apache Airflow, MinIO, Apache Spark, dbt, Grafana, Prometheus, Docker

### Overview
A data warehouse consolidating a retail brand's data from its ERP (Business Central), its e-commerce storefronts (Shopify, across two regions), and SFTP report feeds into a single governed warehouse for reporting and analysis.

### Problem
Business Central, dual-region Shopify stores, and SFTP-delivered reports each spoke a different format on a different schedule; the business needed one reliable, monitored pipeline rather than ad hoc exports.

### What I Built
- **First-generation platform**: a set of custom Python microservices — an importer (API/SFTP extraction), a transformer (business-logic transforms), a scheduler (job dispatch), and a Flask front end providing a monitoring dashboard (import history, transformer mapping views) with Auth0-based role management.
- **Second-generation rebuild**: re-architected the same ingestion problem onto a standard, layered data-platform stack — Airflow DAGs for source-specific extraction, MinIO as an S3-compatible raw landing zone, Spark for transformation (incremental watermark-based loads for ERP data, full refresh for the rest), and dbt modeling the warehouse through staging → intermediate → marts layers (sales, finance, inventory, customer, plus a dedicated data-quality/governance layer with dbt tests).
- **Observability**: Grafana dashboards covering pipeline performance, storage, transformation governance, and system resources, backed by Prometheus — turning the pipeline from a black box into something operationally visible.

### Outcome
A production data platform that evolved from a working custom ETL system into a modern, dbt-tested, observable lakehouse-style architecture — without downtime to the business's reporting during the transition.

---

## 7. 3PCL — Exam-Prep Learning Management System

**Client:** 3PCL
**Role:** Full-stack Engineer
**Timeframe:** 2021 – Present
**Stack:** Django, Django REST Framework, PostgreSQL, Celery, React, Redux, Ant Design, AWS Graviton

### Overview
An LMS built for exam preparation: courses, lessons, a large question bank, practice exams, and a flashcard-based study feature.

### What I Built
- Course, lesson, and question-bank management with Excel-based bulk import/export for content authors.
- Practice-exam engine with repetition-avoidance logic and a flashcard study mode.
- **Performance fix**: diagnosed an N+1 query pattern in the practice-exam engine and resolved it with `select_related` usage and removal of redundant per-question lookups, backed by 35 new database indexes — cutting per-request database queries from roughly 1,368 to near-zero and delivering an approximate 9.5x speedup, documented in a dedicated performance report.
- Migrated the production backend to run on AWS Graviton (ARM) instances, resolving the ARM-specific package/build issues that came with the move.

### Outcome
A mature, multi-year LMS product (600+ combined backend commits) with a concrete, measured performance-optimization story — a strong example of diagnosing and fixing a real production bottleneck rather than just building features.

---

## Smaller / Freelance Projects

**Shajkotha** — A full-stack jewelry e-commerce MVP (Django REST + React/Vite) for a Bangladeshi jewelry brand: product catalog, cart/checkout, order tracking, wishlists, reviews, promo codes, and integration with local payment gateways (bKash, Nagad, Rocket, SSLCommerz).

**SGC Soft company website** — Built and maintained the corporate marketing site for SGC Soft, a boutique software/QA consultancy.

**backup-cron** — A Python automation tool (OAuth-authenticated against Google Drive) performing monthly full backups and daily incremental backups of project directories, with automatic zip packaging, upload, and cleanup.

**Freelance static sites** — Built small static websites (portfolio/gallery, contact forms) for independent clients outside of core consultancy work.

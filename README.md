# Sekhar Reddy — Software Engineer Portfolio

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22_LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![AWS Certified](https://img.shields.io/badge/AWS-Cloud_Practitioner-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)

<p align="center">
  <strong>Building secure, production-oriented full-stack systems across real-time communication, financial workflows, SaaS, payments, and databases.</strong>
</p>

<p align="center">
  <a href="https://github.com/Sekhar01807">GitHub</a> •
  <a href="https://www.linkedin.com/in/sekhar-reddy-408560281">LinkedIn</a> •
  <a href="mailto:sekharsekhar1919@gmail.com">Email</a> •
  <a href="https://wa.me/917995511936">WhatsApp</a>
</p>

</div>

---

## About Me

I am a **Full-Stack Software Engineer** focused on architecting secure, resilient, and high-performance web applications, distributed real-time systems, and transactional financial workflows.

My engineering work centers around the complex layers beneath the user interface:
- **Custom WebRTC P2P mesh engines** and low-latency **Socket.IO signaling layers**.
- **ACID database transactions** and financial ledger integrity using integer math precision.
- **PostgreSQL Row-Level Security (RLS)** for multi-tenant data isolation at the engine level.
- **Idempotent payment gateway integrations** (Stripe & Razorpay) with cryptographic webhook signature verification.
- **Zero-trust authentication pipelines** (HttpOnly cookies, HS512/HS256 stateless JWTs with instant `tokenVersion` revocation, and CSRF origin guards).

---

## Featured Engineering Projects

### 1. [NovaCall](https://novacall-two.vercel.app/) — Real-Time Video Conferencing & WebRTC Platform
> **Live Demo:** [novacall-two.vercel.app](https://novacall-two.vercel.app/) &nbsp;|&nbsp; **Source Code:** [GitHub](https://github.com/Sekhar01807/Novacall)

An open-source real-time video conferencing platform built around a custom full-mesh WebRTC engine and a modular Socket.IO signaling layer without relying on third-party commercial video SDKs.

- **WebRTC Full-Mesh Engine**: Custom peer-to-peer audio/video streaming pipeline with dynamic ICE candidate negotiation and adaptive STUN/TURN NAT traversal.
- **Room Moderation & Signaling**: Server-authoritative room state management, dynamic host succession, kick/mute capabilities, and sliding-window rate-limited room chat.
- **Meeting Scheduling & Workflow**: Meeting invitations with ICS-compatible email cards, short room codes, persistent meeting histories, and screen sharing.
- **Security & Reliability**: Zero-trust HttpOnly cookie authentication, stateless JWTs with instant revocation (`tokenVersion`), CSRF origin defense, and comprehensive Playwright E2E test suites.
- **Tech Stack**: React 19, Express 5, Node.js, WebRTC, Socket.IO, Material UI, Playwright, Nodemailer.

---

### 2. [PulseTrade](https://pulsetrade-ten.vercel.app) — Real-Time Paper-Trading & Financial Platform
> **Live Demo:** [pulsetrade-ten.vercel.app](https://pulsetrade-ten.vercel.app) &nbsp;|&nbsp; **Source Code:** [GitHub](https://github.com/Sekhar01807/Trading-platform)

A full-stack paper-trading simulator and portfolio management engine supporting real-time equity market data streaming and virtual equity execution.

- **ACID Financial Transactions**: Multi-document ACID MongoDB transactions for simultaneous order execution and wallet balance reconciliation.
- **Financial Precision**: Implemented integer-based arithmetic (cents/paise) to eliminate floating-point rounding errors across portfolio balances and transaction logs.
- **Real-Time Market Feeds**: Low-latency Socket.IO streaming engine providing continuous live ticker and price updates to the React trading terminal.
- **Sandboxed Payments**: Integrated Razorpay Sandbox payment gateway with HMAC-SHA256 signature verification and idempotent credit processing.
- **Tech Stack**: React 19, Express 5, MongoDB Atlas, Mongoose ODM, Socket.IO, Razorpay SDK, Jest, Supertest.

---

### 3. [SchoolSync](https://schoolsync-chi.vercel.app/) — Enterprise Academic Operations & Timetable AI
> **Live Demo:** [schoolsync-chi.vercel.app](https://schoolsync-chi.vercel.app/) &nbsp;|&nbsp; **Source Code:** [GitHub](https://github.com/Sekhar01807/School-Management)

An enterprise-grade academic operations platform featuring AI-assisted conflict-free timetable scheduling, multi-tier grading matrices, and automated attendance tracking.

- **AI Timetable Scheduling**: Asynchronous conflict-free weekly timetable generation powered by Google Gemini 1.5 Flash executed via Inngest background workers.
- **3-Tier Grading Engine**: Weighted cumulative CGPA (10.0 scale) and GPA (4.0 scale) calculation engines across Unit (25), Mid-Term (50), and Quarterly (100) exams.
- **Automated Alerts**: Automated 24-hour cron jobs detecting low attendance (< 75%) and sending instantaneous email notices to students and guardians.
- **Multi-Role RBAC**: Strict role-based access control (Admin, Teacher, Student) with HS512 JWT cookie authentication, NoSQL query sanitization, and multi-tenant IDOR protection across 93 automated test suites (207 tests).
- **Tech Stack**: React 19, Express 5, MongoDB Atlas, Google Gemini 1.5 Flash, Inngest, Tailwind CSS.

---

### 4. [WanderLust](https://wanderlust-hs70.onrender.com/) — Vacation Rental & Hospitality Marketplace
> **Live Demo:** [wanderlust-hs70.onrender.com](https://wanderlust-hs70.onrender.com/) &nbsp;|&nbsp; **Source Code:** [GitHub](https://github.com/Sekhar01807/WanderLust)

A full-stack vacation-rental and hospitality platform designed around the complete journey of discovering, listing, booking, and managing stays.

- **Two-Tier Reservation Engine**: Temporary 30-minute reservation holds with automated collision detection and instant Stripe refund reconciliation upon checkout expiration.
- **Geospatial Discovery**: Integrated Mapbox forward geocoding and interactive map search for property exploration by geographical coordinates and radius.
- **MVC Architecture**: Robust Express 5 MVC structure with Cloudinary multi-image upload pipelines and dynamic review aggregate calculations.
- **Defense-in-Depth Security**: Cryptographic dual-token CSRF protection, strict Content Security Policy (CSP), and automated integration test suites.
- **Tech Stack**: Express 5 MVC, Node.js, MongoDB Atlas, Mapbox SDK, Stripe Checkout, Cloudinary, EJS.

---

### 5. [GolfForGood](https://golf-for-good-six.vercel.app/) — Charity SaaS & Stableford Golf Scoring Platform
> **Live Demo:** [golf-for-good-six.vercel.app](https://golf-for-good-six.vercel.app/) &nbsp;|&nbsp; **Source Code:** [GitHub](https://github.com/Sekhar01807/Golf-Platform)

A full-stack SaaS platform connecting 18-hole Stableford golf performance tracking with verified charitable giving and monthly skill-based prize draws.

- **Engine-Level Data Isolation**: Multi-tenant database architecture on Supabase (PostgreSQL) secured by custom Row-Level Security (RLS) policies.
- **Atomic Concurrency Control**: Stored procedures (Database RPC) with TTL lock claims preventing race conditions during prize-draw ticket reservations.
- **Stripe Billing**: Recurring monthly and annual membership subscriptions with idempotent webhook event fulfillment and verified scoring aggregates.
- **Tech Stack**: Next.js 16 App Router, React 19, TypeScript, Supabase, PostgreSQL RLS, Stripe Billing, Vitest.

---

## Technical Skills & Architecture

| Category | Technologies & Tools |
|---|---|
| **Languages** | JavaScript (ESNext), TypeScript, Java, C/C++, SQL, HTML5, CSS3 |
| **Frontend & Client** | React 19, Next.js (App Router), WebRTC API, Socket.IO Client, Tailwind CSS, Material UI, Vite |
| **Backend & APIs** | Node.js (22 LTS), Express 5, Inngest Background Workers, RESTful APIs, WebSockets, MVC Architecture |
| **Databases & Storage** | MongoDB Atlas (Mongoose ODM, ACID Transactions), PostgreSQL, Supabase (RLS, Database RPC/Functions) |
| **Payments & Integrations** | Stripe Billing & Checkout (Webhooks, Idempotency), Razorpay SDK (HMAC-SHA256), Google Gemini 1.5 Flash AI, Mapbox SDK, Cloudinary |
| **Security & Auth** | Zero-Trust Auth, HttpOnly Cookies, HS512/HS256 JWTs with `tokenVersion` Revocation, RBAC Guards, CSRF Defense, Zod Validation |
| **DevOps & Testing** | Playwright E2E, Vitest, Jest, Supertest, Docker, AWS (EC2/S3/IAM), Git & GitHub, Vercel, Render |

---

## Education & Certifications

- **B.Tech in Computer Science & Engineering (CSE)**
  *Amrita Vishwa Vidyapeetham, Amaravati* (2023 – 2027)
  - Core coursework: Data Structures & Algorithms, Distributed Systems, Database Management Systems (DBMS), Operating Systems, Computer Networks.

- **AWS Certified Cloud Practitioner** — *Amazon Web Services (AWS)*
  - Cloud architecture fundamentals, AWS core services, IAM, security principles, and deployment models.

- **Data Structures & Algorithms with Java** — *Apna College*
  - Comprehensive problem solving in Java covering arrays, linked lists, trees, graphs, dynamic programming, and recursion.

- **Full Stack Web Development (MERN)** — *Apna College*
  - End-to-end full-stack web engineering with MongoDB, Express.js, React, and Node.js.

---

## Portfolio Architecture & Features

This portfolio repository is built with:
- **Next.js 16 (App Router)** & **React 19** for blazing-fast server-rendered performance and static generation.
- **Once UI Design System** with tokenized styles, fluid layouts, dark/light theme switching, and accessible components.
- **MDX Case Studies**: Rich markdown documentation with custom components, embedded video previews, interactive galleries, and project metadata.
- **Interactive Project Media**: Custom video preview players, modal image viewing, and responsive layout grids.
- **Comprehensive SEO**: Dynamic OpenGraph image generation, structured schema markup, and meta tags.

---

## Local Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) v18.17 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### 1. Clone the repository
```bash
git clone https://github.com/Sekhar01807/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Build for production
```bash
npm run build
npm start
```

---

## Contact & Connect

- **Email:** [sekharsekhar1919@gmail.com](mailto:sekharsekhar1919@gmail.com)
- **LinkedIn:** [linkedin.com/in/sekhar-reddy-408560281](https://www.linkedin.com/in/sekhar-reddy-408560281)
- **GitHub:** [github.com/Sekhar01807](https://github.com/Sekhar01807)
- **WhatsApp:** [+91 7995511936](https://wa.me/917995511936)
- **Instagram:** [@sekhar_redde_](https://www.instagram.com/sekhar_redde_/)

---

<div align="center">
  <sub>Designed & Developed by <strong>Sekhar Reddy</strong>. Built with Next.js & Once UI.</sub>
</div>

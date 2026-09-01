import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sekhar",
  lastName: "Reddy",
  name: `Sekhar Reddy`,
  role: "Software Engineer",
  avatar: "/images/avatar-sekhar.jpg",
  email: "sekharsekhar1919@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Telugu"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Get in Touch</>,
  description: <>Interested in discussing full-stack development, distributed backend systems, or engineering collaboration? Reach out directly via email or connect on LinkedIn.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Sekhar01807",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sekhar-reddy-408560281",
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/917995511936",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/sekhar_redde_/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Software Engineer`,
  description: `Software engineer building secure, production-oriented full-stack systems across real-time communication, financial workflows, SaaS, payments, and databases.`,
  headline: <>Building secure, production-oriented full-stack systems</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">NovaCall</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/novacall",
  },
  subline: (
    <>
      Software engineer building secure, production-oriented full-stack systems across real-time communication, financial workflows, SaaS, payments, databases, and product experiences.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} specializing in real-time systems, financial platforms, and secure SaaS architectures.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <Text marginBottom="16">
          I am a Full-Stack Software Engineer focused on architecting secure, resilient, and high-performance web applications, distributed real-time systems, and transactional financial workflows.
        </Text>
        <Text marginBottom="16">
          My engineering work centers around the complex layers beneath the user interface: custom WebRTC P2P mesh engines, low-latency Socket.IO signaling, ACID database transactions, PostgreSQL Row-Level Security (RLS), idempotent payment gateway webhooks (Stripe & Razorpay), and zero-trust authentication pipelines.
        </Text>
        <Text>
          I have engineered and shipped production-grade software platforms across video conferencing, paper-trading simulations, multi-role school management portals, non-profit charitable SaaS, and vacation rental marketplaces. I emphasize end-to-end reliability, clean system boundaries, and rigorous automated testing across Vitest, Jest, and Playwright.
        </Text>
      </>
    ),
  },
  work: {
    display: false,
    title: "Engineering Experience",
    experiences: [
      {
        company: "NovaCall",
        timeframe: "2025 – Present",
        role: "Lead Full-Stack & WebRTC Systems Engineer",
        achievements: [
          "Architected a multi-party WebRTC video conferencing engine with a custom Socket.IO signaling layer and adaptive STUN/TURN NAT traversal, eliminating third-party SDK dependencies.",
          "Engineered server-authoritative room moderation protocols, dynamic host succession, and low-latency group chat with sliding-window rate limiting.",
          "Implemented zero-trust security with HttpOnly cookie auth, stateless JWTs with instant revocation (tokenVersion), CSRF origin defense, and Playwright E2E suites.",
        ],
      },
      {
        company: "PulseTrade",
        timeframe: "2025",
        role: "Full-Stack Financial Platform Engineer",
        achievements: [
          "Developed an educational paper-trading simulator and portfolio management engine supporting real-time market data streaming and virtual equity execution.",
          "Implemented multi-document ACID MongoDB transactions for simultaneous order execution and wallet balance reconciliation, utilizing integer math to eliminate floating-point errors.",
          "Integrated Razorpay Sandbox payment gateway with HMAC-SHA256 signature verification and idempotent credit processing.",
        ],
      },
      {
        company: "SchoolSync",
        timeframe: "2025",
        role: "Full-Stack & Systems Engineer",
        achievements: [
          "Built an enterprise academic operations platform with 3-tier assessment matrix (Unit: 25, Mid-Term: 50, Quarterly: 100) and weighted cumulative CGPA (10.0) / GPA (4.0) engines.",
          "Engineered an AI-assisted conflict-free weekly timetable builder with Google Gemini 1.5 Flash via Inngest workers and automated 24h low attendance (< 75%) email cron jobs.",
          "Architected zero-trust HS512 JWT cookie auth, NoSQL sanitization, multi-tenant IDOR protection, and 93 automated Node.js test suites (207 tests).",
        ],
      },
      {
        company: "WanderLust",
        timeframe: "2025",
        role: "Full-Stack Web Developer",
        achievements: [
          "Engineered a full-stack vacation rental marketplace utilizing MVC architecture with Express 5, MongoDB Atlas, and Mapbox geospatial search.",
          "Designed a two-tier reservation workflow with 30-minute temporary holds, automated collision detection, and Stripe refund reconciliation.",
          "Implemented defense-in-depth security with dual-token CSRF protection, Content Security Policy, and native Node.js automated test suites.",
        ],
      },
      {
        company: "GolfForGood",
        timeframe: "2025",
        role: "Full-Stack SaaS & Database Engineer",
        achievements: [
          "Architected a multi-tenant charity SaaS platform on Supabase (PostgreSQL) with Row-Level Security (RLS) policies enforcing data isolation at the database engine.",
          "Authored atomic PostgreSQL stored procedures with TTL lock claims to eliminate race conditions during prize-draw ticket reservations.",
          "Integrated Stripe Billing for recurring monthly/annual memberships with idempotent webhook event fulfillment and verified scoring aggregates.",
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Amrita Vishwa Vidyapeetham, Amaravati",
        degree: "B.Tech in Computer Science & Engineering (CSE)",
        timeframe: "2023 – 2027",
        description: (
          <>
            Core focus on Data Structures & Algorithms, Distributed Systems, Database Management Systems (DBMS), Operating Systems, Computer Networks, and Full-Stack Engineering.
          </>
        ),
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications",
    items: [
      {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services (AWS)",
        description: (
          <>
            Demonstrates foundational cloud architecture expertise, core AWS services, cloud security standards, and infrastructure deployment models.
          </>
        ),
        tags: [
          { name: "AWS Cloud", icon: "aws" },
          { name: "Cloud Architecture", icon: "rocket" },
          { name: "Security & IAM", icon: "rocket" },
        ],
      },
      {
        title: "Data Structures & Algorithms with Java",
        issuer: "Apna College",
        description: (
          <>
            Comprehensive training in Java covering arrays, linked lists, trees, graphs, dynamic programming, recursion, and algorithmic complexity.
          </>
        ),
        tags: [
          { name: "Java", icon: "document" },
          { name: "DSA", icon: "rocket" },
          { name: "Problem Solving", icon: "document" },
        ],
      },
      {
        title: "Full Stack Web Development (MERN)",
        issuer: "Apna College",
        description: (
          <>
            End-to-end full-stack web engineering spanning MongoDB persistence, Express.js middleware, React component architectures, and Node.js REST APIs.
          </>
        ),
        tags: [
          { name: "MongoDB", icon: "javascript" },
          { name: "Express.js", icon: "javascript" },
          { name: "React", icon: "javascript" },
          { name: "Node.js", icon: "javascript" },
        ],
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills & Architecture",
    skills: [
      {
        title: "Frontend & Real-Time Client Engineering",
        description: (
          <>Architecting responsive, high-performance web applications with React 19, Next.js App Router, TypeScript, and modern styling systems. Experienced in WebRTC media streaming, client-side state management, and accessible UI workflows.</>
        ),
        tags: [
          { name: "React 19", icon: "javascript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "javascript" },
          { name: "WebRTC API", icon: "rocket" },
          { name: "Tailwind CSS", icon: "javascript" },
          { name: "Material UI", icon: "javascript" },
          { name: "Vite", icon: "javascript" },
        ],
      },
      {
        title: "Backend, Microservices & Real-Time Signaling",
        description: (
          <>Developing scalable RESTful APIs and real-time WebSocket signaling engines using Node.js 22 LTS, Express 5, and Socket.IO. Experienced in asynchronous event pipelines with Inngest, transactional SMTP notifications, and Docker containerization.</>
        ),
        tags: [
          { name: "Node.js", icon: "javascript" },
          { name: "Express.js", icon: "javascript" },
          { name: "Socket.IO", icon: "rocket" },
          { name: "Inngest Workers", icon: "rocket" },
          { name: "RESTful APIs", icon: "document" },
          { name: "Docker", icon: "rocket" },
        ],
      },
      {
        title: "Database Engineering, ACID Transactions & Payment Pipelines",
        description: (
          <>Engineering reliable persistence layers using MongoDB Atlas multi-document transactions and PostgreSQL Row-Level Security (RLS) on Supabase. Implementing integer-based currency pipelines and webhook signature verification with Stripe and Razorpay.</>
        ),
        tags: [
          { name: "PostgreSQL", icon: "supabase" },
          { name: "MongoDB Atlas", icon: "javascript" },
          { name: "Supabase", icon: "supabase" },
          { name: "Stripe Billing", icon: "rocket" },
          { name: "Razorpay SDK", icon: "rocket" },
          { name: "Mongoose ODM", icon: "javascript" },
        ],
      },
      {
        title: "Security Hardening, Zero-Trust Auth & Quality Assurance",
        description: (
          <>Implementing enterprise security patterns: HttpOnly cookies, token revocation (tokenVersion), cryptographic CSRF validation, and strict Zod runtime schema guards. Validated with comprehensive Vitest, Jest, and Playwright E2E suites.</>
        ),
        tags: [
          { name: "Playwright E2E", icon: "rocket" },
          { name: "Vitest", icon: "rocket" },
          { name: "Jest", icon: "rocket" },
          { name: "Zod Validation", icon: "document" },
          { name: "JWT (HS512/HS256)", icon: "rocket" },
          { name: "RBAC Guards", icon: "rocket" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Engineering Notes – ${person.name}`,
  description: `Technical deep-dives and architecture notes by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Production-oriented full-stack software engineering projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

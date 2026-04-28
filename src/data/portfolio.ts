import {
  BadgeCheck,
  Bot,
  Boxes,
  Brain,
  BriefcaseBusiness,
  Building2,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Layers3,
  LineChart,
  LucideIcon,
  Network,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

export type ProjectCategory = "AI Products" | "Operational Platforms" | "Product Leadership Systems" | "Full-Stack Foundations" | "Teaching & Mentorship" | "Early Work";

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  category: ProjectCategory;
  summary: string;
  role: string;
  period: string;
  status: string;
  liveUrl?: string;
  links?: { label: string; url: string }[];
  visual?: "pipeline" | "ecosystem" | "operations" | "public";
  organization?: string;
  stack: string[];
  highlights: string[];
  impact: string[];
  context: string[];
  ownership: { title: string; items: string[] }[];
  modules: { title: string; detail: string; tags: string[] }[];
  hardProblems: { problem: string; response: string }[];
  leadership: string[];
  lessons: string[];
  deepDive: { label: string; detail: string }[];
  decisions: string[];
};

export const profile = {
  name: "Sai Nitish Bimari",
  title: "AI Product Engineer",
  linkedin: "https://www.linkedin.com/in/sai-nitish",
  email: "bimarisainitish@gmail.com",
  location: "Oklahoma, United States",
  intro:
    "I build AI products, operational platforms, and full-stack systems with product ownership and technology leadership experience.",
  thesis:
    "My path moved from frontend work to full-stack systems, then project management, Lead of Technology / CTO responsibility, operational software, and now applied AI through my MS in Artificial Intelligence. I care about turning ambiguous product needs into robust systems people can actually use.",
  positioning:
    "Frontend Developer -> Full-Stack Developer -> Project Manager -> Lead of Technology / CTO -> MS AI Student -> AI Product Engineer",
};

export const stats = [
  { value: "6 yrs", label: "product engineering growth" },
  { value: "10+", label: "people led and trained" },
  { value: "4+", label: "major integrations shipped" },
  { value: "65K+", label: "inventory units managed" },
  { value: "INR 3L+", label: "sales tracked in production" },
  { value: "~90%", label: "API performance improvement" },
];

export const builderArc = [
  {
    period: "2019",
    title: "Started with shipped product surfaces",
    role: "Web Developer Intern",
    body:
      "I began with real web and mobile product work at Arawinz/ESAY, learning how UI, backend data, and industry-specific workflows meet in shipped software.",
    icon: Building2,
  },
  {
    period: "2021",
    title: "Built interfaces and grew into systems",
    role: "Frontend Developer",
    body:
      "At Envisionard, I started with product interfaces and quickly moved toward APIs, dashboards, integrations, and ownership beyond the screen.",
    icon: Code2,
  },
  {
    period: "2022",
    title: "Owned full-stack product execution",
    role: "Full-Stack Developer",
    body:
      "I worked across React, React Native, Node.js, MongoDB, Firebase, AWS, payments, POS, and dashboards, learning how product quality depends on the whole system.",
    icon: Server,
  },
  {
    period: "2022-2024",
    title: "Led planning, people, and releases",
    role: "Project Manager",
    body:
      "I planned features, trained interns, introduced better tools, supported weekly issue releases and monthly feature releases, and helped the team grow.",
    icon: Users,
  },
  {
    period: "2024",
    title: "Carried technology leadership responsibility",
    role: "Lead of Technology / CTO, Amealio",
    body:
      "I led and built across Amealio's product ecosystem: customer app, merchant/admin dashboards, POS, ONDC, payments, settlements, personalization, and cloud/startup-credit conversations.",
    icon: Rocket,
  },
  {
    period: "2025",
    title: "Built a live operating platform from scratch",
    role: "Full-stack owner, family distribution business",
    body:
      "I designed, built, deployed, and still maintain a sales and inventory management platform that tracks real sales, stock movement, retailers, routes, collections, and reports.",
    icon: Boxes,
  },
  {
    period: "Now",
    title: "Building applied AI products",
    role: "MS AI + AI Product Engineer",
    body:
      "I am now combining my full-stack and leadership foundation with AI engineering, building products like YouTube Autopilot that use agents, workflows, jobs, security, and real product UX.",
    icon: Brain,
  },
];

export const proofCategories = [
  {
    title: "AI Products",
    subtitle: "Current direction",
    description:
      "I am building deployed AI products that combine agents, workflows, interfaces, background jobs, credential security, and user-facing controls.",
    projectSlugs: ["youtube-autopilot"],
    accent: "teal",
  },
  {
    title: "Operational Platforms",
    subtitle: "End-to-end business software",
    description:
      "I build live internal systems where data integrity, workflows, roles, reporting, and production stewardship matter as much as the interface.",
    projectSlugs: ["sales-inventory-management"],
    accent: "emerald",
  },
  {
    title: "Product Leadership Systems",
    subtitle: "Lead of Technology / CTO ownership",
    description:
      "I have led product execution under real constraints: team growth, release planning, integrations, performance, cloud credits, and business-critical dashboards.",
    projectSlugs: ["amealio"],
    accent: "amber",
  },
  {
    title: "Full-Stack Foundations",
    subtitle: "Systems before AI",
    description:
      "Before focusing on AI, I built across web, mobile, APIs, databases, payments, maps, notifications, POS, dashboards, and operational tools.",
    projectSlugs: ["esay"],
    accent: "sky",
  },
  {
    title: "Early Work",
    subtitle: "Range and momentum",
    description:
      "Internships and freelance work shaped my speed, ownership, and ability to understand unfamiliar domains quickly.",
    projectSlugs: [],
    accent: "stone",
  },
  {
    title: "Teaching & Mentorship",
    subtitle: "Technical communication",
    description:
      "While pursuing my MS in AI, I tutor computer science and AI/ML topics, translating difficult concepts into practical debugging, exam preparation, and code reasoning support.",
    projectSlugs: [],
    accent: "violet",
  },
];

export const ownershipAreas: { title: string; description: string; icon: LucideIcon; proof: string }[] = [
  {
    title: "I build the product surface",
    description:
      "Dashboards, customer flows, admin tools, settings, analytics, onboarding, and mobile experiences that make complex systems usable.",
    proof: "Next.js, React, React Native, Flutter, Tailwind, Material UI",
    icon: Layers3,
  },
  {
    title: "I wire the system behind it",
    description:
      "APIs, databases, background jobs, auth, encrypted keys, integrations, webhooks, cloud storage, and performance improvements.",
    proof: "Node.js, FastAPI, MongoDB, Postgres, Redis, Firebase, AWS",
    icon: Network,
  },
  {
    title: "I handle messy integrations",
    description:
      "POS data, payments, settlements, OAuth, ONDC, YouTube APIs, maps, notifications, and third-party services with real operational edge cases.",
    proof: "Petpooja, Razorpay, ONDC, YouTube API, OAuth, Firebase",
    icon: GitBranch,
  },
  {
    title: "I lead people and delivery",
    description:
      "I train interns, set goals, improve engineering practices, support releases, grow teams, and represent technical plans in business conversations.",
    proof: "10+ people led/trained, weekly fixes, monthly features, AWS/MongoDB credits",
    icon: Users,
  },
];

export const projects: Project[] = [
  {
    slug: "youtube-autopilot",
    title: "YouTube Autopilot",
    eyebrow: "Flagship AI Product",
    category: "AI Products",
    summary:
      "I built a deployed AI workflow automation platform that turns a video niche into a planned, generated, edited, optimized, and upload-ready YouTube video.",
    role: "AI Product Builder",
    period: "2025 - Present",
    status: "Deployed live",
    liveUrl: "https://nextjs-frontend-one-phi.vercel.app/",
    links: [{ label: "Live product", url: "https://nextjs-frontend-one-phi.vercel.app/" }],
    visual: "pipeline",
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "CrewAI",
      "Postgres",
      "Redis/ARQ",
      "Cloudflare R2",
      "YouTube API",
      "OpenAI",
    ],
    highlights: [
      "I designed a multi-agent video pipeline for research, script, visuals, TTS, editing, SEO, and upload.",
      "I built a SaaS control surface with auth, settings, job creation, live status, analytics, and cost tracking.",
      "I implemented production-shaped backend patterns: encrypted user keys, async workers, artifact storage, and per-job isolation.",
    ],
    impact: [
      "Live deployed product",
      "End-to-end AI workflow",
      "Async job orchestration",
      "Secure credential handling",
    ],
    context: [
      "Video creation is not one task. It is a chain of decisions: topic research, scripting, visual planning, voiceover, editing, metadata, publishing, and cost control.",
      "I wanted this project to prove more than prompt writing. I wanted it to show that I can build a product-grade AI system with users, jobs, settings, credentials, status, and deployment concerns.",
    ],
    ownership: [
      {
        title: "Product and UX",
        items: [
          "Designed the app as a control center for AI video jobs rather than a one-command script.",
          "Built job creation, dashboard, settings, analytics, and live progress surfaces.",
          "Made cost and pipeline progress visible so the user is not waiting on a black box.",
        ],
      },
      {
        title: "AI workflow",
        items: [
          "Modeled the pipeline as specialized responsibilities: planning, script refinement, visuals, TTS, editing, SEO, and upload.",
          "Used a CEO-style orchestration pattern to turn a vague niche into a structured production plan.",
          "Separated planning, generation, media assembly, and publishing concerns.",
        ],
      },
      {
        title: "Backend and deployment shape",
        items: [
          "Built around FastAPI, job records, Redis/ARQ background tasks, Postgres models, and artifact storage.",
          "Handled user credentials through encrypted storage and OAuth flows.",
          "Designed per-job output isolation so generated files and statuses can be tracked cleanly.",
        ],
      },
    ],
    modules: [
      {
        title: "AI agent pipeline",
        detail:
          "The pipeline moves from research and planning into script, visuals, voiceover, editing, SEO, and upload. The important part is not only generation; it is coordination and observability.",
        tags: ["CrewAI", "Planning", "Sora/TTS flow", "SEO"],
      },
      {
        title: "SaaS dashboard",
        detail:
          "The frontend gives users a product surface for sign-in, API key setup, YouTube connection, job launch, progress, history, analytics, and settings.",
        tags: ["Next.js", "TypeScript", "Dashboard", "Settings"],
      },
      {
        title: "Async worker system",
        detail:
          "Long-running generation work is handled outside normal web requests, with records and state updates that make the pipeline trackable and safer to operate.",
        tags: ["FastAPI", "Redis/ARQ", "Jobs", "Artifacts"],
      },
      {
        title: "Credential and publishing flow",
        detail:
          "The product stores user API keys and YouTube tokens carefully, then uses those credentials to run generation and upload workflows without exposing secrets in the UI.",
        tags: ["Encryption", "OAuth", "YouTube API", "Security"],
      },
    ],
    hardProblems: [
      {
        problem: "AI media work is slow and unpredictable.",
        response:
          "I separated the request/response app from the worker pipeline and exposed live job state so the product stays usable while generation runs.",
      },
      {
        problem: "A user needs trust before letting automation publish content.",
        response:
          "I treated dashboard visibility, cost tracking, settings, OAuth, and status feedback as core product features rather than extras.",
      },
      {
        problem: "A demo can look impressive while still being fragile.",
        response:
          "I shaped the project as a SaaS-style system with auth, settings, jobs, persistence, artifacts, and deployment instead of stopping at a local script.",
      },
    ],
    leadership: [
      "This is my current proof that I can combine AI engineering with the product and full-stack instincts I built before my MS program.",
      "I used this project to practice the kind of AI product work I want to do professionally: not only model calls, but complete workflows with user-facing control.",
    ],
    lessons: [
      "AI products need product surfaces, not just prompts.",
      "Long-running AI workflows need observability, state, and failure-aware architecture.",
      "My full-stack background is what lets me turn AI ideas into deployed systems.",
    ],
    deepDive: [
      {
        label: "Product surface",
        detail:
          "I created a control center for AI video jobs: onboarding/auth, API key settings, YouTube connection, new job creation, live pipeline status, history, analytics, and cost views.",
      },
      {
        label: "Agent orchestration",
        detail:
          "I modeled the pipeline as a sequence of specialized AI responsibilities: CEO planning, script refinement, visual generation, voiceover, editing, SEO, and upload.",
      },
      {
        label: "Backend reliability",
        detail:
          "I separated web requests from long-running media generation with async background workers, job records, status updates, isolated outputs, and artifact storage.",
      },
      {
        label: "Security posture",
        detail:
          "I handled sensitive user credentials through encrypted storage and OAuth connection flows instead of exposing secrets inside the UI or worker pipeline.",
      },
    ],
    decisions: [
      "I used a SaaS-shaped architecture instead of a one-off script so the project demonstrates product thinking, user state, security, and repeatable workflows.",
      "I kept generation jobs asynchronous because AI media work can take minutes and needs resilient status tracking.",
      "I exposed cost and agent progress in the UI so users understand what the system is doing instead of waiting on a black box.",
      "I designed the case study as an AI workflow automation platform rather than a narrow YouTube tool, making the engineering transferable to other AI products.",
    ],
  },
  {
    slug: "sales-inventory-management",
    title: "Sales & Inventory Management",
    eyebrow: "Operational Platform / Full-Stack Ownership",
    category: "Operational Platforms",
    summary:
      "I built and deployed an end-to-end operating system for my family distribution business, connecting products, stock movement, retailers, sales, collections, returns, reports, roles, and production maintenance.",
    role: "End-to-End Full-Stack Owner",
    period: "2025",
    status: "Live production system",
    liveUrl: "https://distribution.bimari.org",
    links: [
      { label: "Live system", url: "https://distribution.bimari.org" },
      { label: "Frontend repo", url: "https://github.com/sainitish505/bimari-distribution-fe" },
      { label: "Backend repo", url: "https://github.com/sainitish505/bimari-distribution-be" },
    ],
    visual: "operations",
    organization: "Family distribution business",
    stack: [
      "React 19",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "Chart.js",
      "Axios",
      "Express 5",
      "MySQL",
      "TiDB-style SQL",
      "JWT",
      "bcrypt",
      "Zod",
    ],
    highlights: [
      "I designed, built, deployed, and still maintain the full platform from scratch.",
      "I connected inventory, inward stock, retailer sales, payment collection, returns, route management, reports, and role-based access into one operating workflow.",
      "I turned a family-business operational problem into production software that tracks INR 3L+ in sales and 65,000+ inventory units.",
    ],
    impact: [
      "3 months from scratch to live",
      "INR 3L+ sales tracked",
      "65K+ inventory units managed",
      "Live users in daily operations",
    ],
    context: [
      "The business needed more than a spreadsheet. Sales, stock, retailers, collections, returns, warehouses, and reports had to connect in one dependable operational platform.",
      "Because this system serves real users inside a family distribution business, I had to think like the engineer, product owner, operator, and production maintainer at the same time.",
    ],
    ownership: [
      {
        title: "Product and workflow design",
        items: [
          "Mapped the business flow from product catalog and inward stock to sales, collection, returns, and reporting.",
          "Designed the application around real operational tasks instead of generic CRUD screens.",
          "Built a role-aware dashboard experience for users who need fast entries and clear visibility.",
        ],
      },
      {
        title: "Full-stack engineering",
        items: [
          "Built the React frontend, routing, protected screens, forms, tables, charts, alerts, and operational UI components.",
          "Built the Express backend with authentication, JWT protection, role checks, controllers, services, validation, and SQL access.",
          "Designed and implemented the SQL data model for products, suppliers, warehouses, inventory balances, batches, stock ledger, inward receipts, sales, returns, reports, users, roles, routes, retailers, and refrigerators/assets.",
        ],
      },
      {
        title: "Deployment and stewardship",
        items: [
          "Deployed the system live at distribution.bimari.org and continue to maintain it.",
          "Handled production setup, database setup, security-sensitive authentication flows, and ongoing improvements.",
          "Use live operational feedback to refine workflows, reports, and data quality.",
        ],
      },
    ],
    modules: [
      {
        title: "Product catalog and inventory core",
        detail:
          "I built product management, warehouse-aware inventory balances, inward receipts, batch handling, stock ledger movement, and update flows so stock data can remain coherent as the business operates.",
        tags: ["Products", "Warehouses", "Inventory balances", "Stock ledger"],
      },
      {
        title: "Inward stock workflow",
        detail:
          "The inward flow captures supplier, warehouse, invoice, item, quantity, and damage-related data so incoming inventory becomes traceable instead of disappearing into manual notes.",
        tags: ["Suppliers", "Inward receipts", "Batches", "Data integrity"],
      },
      {
        title: "Sales and collections",
        detail:
          "I built sale creation, stock lookup, retailer information, payment split/collection, sale history, sale details, payment updates, and return handling around real distribution workflows.",
        tags: ["Sales", "Payments", "Collections", "Returns"],
      },
      {
        title: "Retailers, routes, and assets",
        detail:
          "The platform includes retailer search/creation, route assignment, profile operations, and refrigerator/asset tracking, which gives the system operational depth beyond product and sale screens.",
        tags: ["Retailers", "Routes", "Assets", "Operations"],
      },
      {
        title: "Reports and trends",
        detail:
          "I implemented sales reports, monthly overview, trend views, and chart-driven summaries so the business can see performance instead of only recording transactions.",
        tags: ["Reports", "Trends", "Chart.js", "Monthly overview"],
      },
      {
        title: "Auth, roles, and production control",
        detail:
          "I built login/register, JWT-protected routes, bcrypt password handling, role-based checks, and protected frontend routes to make the platform usable as a real internal system.",
        tags: ["JWT", "bcrypt", "Roles", "Protected routes"],
      },
    ],
    hardProblems: [
      {
        problem: "Operational software has to match the business, not the other way around.",
        response:
          "I modeled the system around product movement, retailer sales, collections, returns, routes, and reports so the platform follows the actual distribution workflow.",
      },
      {
        problem: "Inventory accuracy depends on every transaction path.",
        response:
          "I connected inward receipts, stock balances, sale creation, returns, batches, and ledger-style movement so inventory can be reasoned about from multiple angles.",
      },
      {
        problem: "A live internal tool needs production stewardship after launch.",
        response:
          "I deployed the system, maintain it in production, and keep improving workflows based on real operational usage.",
      },
    ],
    leadership: [
      "This project shows ownership without a large team: I carried product thinking, architecture, engineering, deployment, and maintenance end to end.",
      "I translated business operations into software architecture, which is a different kind of leadership than managing engineers but just as important for product judgment.",
      "Because the system is live in my family business, I am accountable for reliability, usability, and production continuity.",
    ],
    lessons: [
      "The best internal tools are not small apps; they are operational systems with data integrity, role design, reporting, and maintenance responsibilities.",
      "Building for family-business operations sharpened my ability to move from real-world ambiguity into structured software.",
      "This project broadens my portfolio beyond Amealio by proving independent end-to-end execution in a live production environment.",
    ],
    deepDive: [
      {
        label: "Operating-system mindset",
        detail:
          "I designed the platform as a practical operating layer for distribution work: catalog, stock, warehouses, suppliers, sales, collections, returns, retailers, routes, assets, and reports.",
      },
      {
        label: "Data integrity",
        detail:
          "The SQL model includes inventory balances, batches, inward receipts, stock ledger, sales, sale items, reports, users, roles, and related operational tables.",
      },
      {
        label: "Production responsibility",
        detail:
          "I deployed the application live, maintain it, and use real usage feedback to continue improving the system.",
      },
      {
        label: "Career signal",
        detail:
          "This project proves I can build beyond portfolio demos: live business software, real users, real stock, real sales, and real maintenance.",
      },
    ],
    decisions: [
      "I built a custom system instead of forcing the business into generic spreadsheet workflows.",
      "I separated frontend application flow from backend controllers, services, validation, auth, and SQL persistence so the system can grow module by module.",
      "I included reporting and trend views because operational visibility matters as much as transaction entry.",
      "I present this project as an operational platform because the strongest proof is end-to-end business workflow ownership.",
    ],
  },
  {
    slug: "amealio",
    title: "Amealio",
    eyebrow: "Lead of Technology / CTO Product Leadership",
    category: "Product Leadership Systems",
    summary:
      "I grew inside Envisionard from frontend developer to Lead of Technology / CTO responsibility, building and leading Amealio across customer app, merchant/admin dashboards, AI personalization, POS, payments, settlements, ONDC, and cloud/business operations.",
    role: "Lead of Technology / CTO",
    period: "Aug 2024 - Dec 2024",
    status: "Production product",
    liveUrl: "https://www.amealio.com/",
    links: [{ label: "Live product", url: "https://www.amealio.com/" }],
    visual: "ecosystem",
    organization: "Envisionard",
    stack: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "AWS",
      "Razorpay",
      "Petpooja",
      "ONDC",
    ],
    highlights: [
      "I grew through frontend developer, full-stack developer, project manager, and technology leadership responsibilities.",
      "I built and led across the end-to-end ecosystem: customer app, merchant/admin dashboards, analytics, integrations, payments, and personalization.",
      "I helped extend access to $1M AWS startup credits and MongoDB startup credits through technical/product discussions.",
    ],
    impact: [
      "10+ people led/trained",
      "4+ major integrations",
      "~90% API speed improvement",
      "$1M AWS credits extended",
    ],
    context: [
      "Amealio was an early MVP when I joined Envisionard. Over time, my work moved from building interfaces into owning complex product systems and eventually Lead of Technology / CTO responsibility.",
      "The product was not just a food app. It had customer discovery, restaurant operations, merchant management, admin workflows, AI personalization, POS/menu data, payments, settlements, ONDC, OAuth, analytics, and internal tools.",
    ],
    ownership: [
      {
        title: "I built critical systems",
        items: [
          "Petpooja POS integration for menus, items, categories, prices, and availability.",
          "Item/menu management for merchant customization and personalization.",
          "Razorpay payment and settlement flows across checkout, events, ordering, wallet, refunds, coupons, commissions, reconciliation, and reporting.",
          "Merchant, admin, and analytics dashboards with real-time behavior and multi-role access patterns.",
        ],
      },
      {
        title: "I led product direction",
        items: [
          "AI personalization and chatbot direction using user preference data and custom recommendation logic.",
          "Experiences/events direction and customer app features around item customization and performance/UI improvements.",
          "ONDC buyer-app integration support, including F&B menu dump workflows, APIs, data mapping, dashboards, background jobs, and testing tools.",
        ],
      },
      {
        title: "I improved engineering operations",
        items: [
          "Improved API performance by about 90% through MongoDB indexes, query changes, and loop reduction.",
          "Introduced or expanded tools and practices including Swagger, Jira, AWS load balancers, release planning, and package/dependency cleanup.",
          "Trained interns, set learning goals, referred team members, and helped the product team grow in skill and confidence.",
        ],
      },
    ],
    modules: [
      {
        title: "POS and menu systems",
        detail:
          "I built Petpooja sync for menu, item, category, price, and availability data using API pull, scheduled sync, and webhook-based flows. The hard work was handling schema mismatches, duplicate items, validation, and multi-location restaurants.",
        tags: ["Petpooja", "MongoDB", "Menu sync", "Data validation"],
      },
      {
        title: "Payments and settlements",
        detail:
          "I owned Razorpay payment and settlement workflows across customer checkout, event booking, restaurant ordering, wallet flows, refunds, coupons, merchant payouts, commissions, reconciliation, payment status sync, and reports.",
        tags: ["Razorpay", "Reconciliation", "Wallet", "Reports"],
      },
      {
        title: "Dashboards and permissions",
        detail:
          "I built merchant, admin, and analytics dashboards for operations, platform management, payments, settlements, and engagement, with real-time behavior and multi-role access.",
        tags: ["Admin", "Merchant", "Analytics", "Access control"],
      },
      {
        title: "AI personalization",
        detail:
          "I led personalization and chatbot initiatives for restaurants, dishes, menus, offers, events, search results, and social dining experiences using preference data and custom recommendation logic.",
        tags: ["Personalization", "Chatbot", "Search", "Recommendations"],
      },
      {
        title: "ONDC buyer flow",
        detail:
          "I contributed to ONDC buyer-app integration, including F&B menu dump workflows, API/data mapping, dashboard support, background jobs, and testing tools for production rollout.",
        tags: ["ONDC", "Buyer app", "Menu dump", "Background jobs"],
      },
      {
        title: "Cloud and business leverage",
        detail:
          "I represented the product in cloud/startup-credit conversations, helping extend access to $1M AWS startup credits and MongoDB startup credits through product, rollout, and planning discussions.",
        tags: ["AWS", "MongoDB credits", "Planning", "Leadership"],
      },
    ],
    hardProblems: [
      {
        problem: "Menu data was messy across POS, restaurants, customization, and personalization.",
        response:
          "I built sync and validation flows that handled mismatched schemas, duplicates, multi-location restaurants, availability, prices, and merchant preferences.",
      },
      {
        problem: "Settlement reconciliation is where payment systems become operationally serious.",
        response:
          "I owned dashboard, backend, reporting, payment status, refund tracking, commission calculation, and merchant payout visibility around Razorpay flows.",
      },
      {
        problem: "Dashboards had to serve different users without mixing permissions.",
        response:
          "I built real-time merchant/admin/analytics dashboards with multi-role access patterns for admins, merchants, staff, and internal users.",
      },
      {
        problem: "The product needed both code velocity and team growth.",
        response:
          "I trained interns, set learning plans, introduced tools, cleaned dependencies, supported release cadence, and helped the team grow while continuing to build critical modules.",
      },
    ],
    leadership: [
      "I led and trained 10+ people while staying hands-on with critical implementation.",
      "I supported weekly bug, issue, and enhancement releases and monthly feature releases.",
      "I helped expand the team's technical culture through Swagger, Jira, AWS load balancers, package upgrades, and clearer planning.",
      "I helped extend AWS and MongoDB startup credits by explaining the product, rollout plans, and technical roadmap in external meetings.",
    ],
    lessons: [
      "Leadership is not separate from engineering; the best technical decisions often come from understanding product, team, and business pressure together.",
      "Integrations are product work, not only API work, because data quality, operations, support, and dashboards all depend on them.",
      "My technology leadership experience is the bridge between my full-stack foundation and my current AI product direction.",
    ],
    deepDive: [
      {
        label: "POS and menu systems",
        detail:
          "I built Petpooja integration for menus, items, categories, prices, and availability using API pull, scheduled sync, and webhook-based flows. I solved schema mismatches, duplicates, validation, and multi-location restaurant handling.",
      },
      {
        label: "Payments and settlements",
        detail:
          "I owned Razorpay checkout, event booking, ordering payments, wallet flows, refunds, coupons, merchant payouts, commissions, reconciliation, payment status sync, and reporting across frontend, backend, and dashboards.",
      },
      {
        label: "Dashboards and access",
        detail:
          "I built merchant, admin, and analytics dashboards for operations, platform management, payments, settlements, and engagement, including real-time behavior and multi-role access patterns.",
      },
      {
        label: "AI personalization",
        detail:
          "I led personalization and chatbot direction using user preference data and custom recommendation logic across restaurants, dishes, menus, offers, events, search results, and social dining experiences.",
      },
      {
        label: "Team and operations",
        detail:
          "I trained interns, set learning plans, referred team members, introduced tools such as Swagger/Jira/load balancers, supported release cadence, and represented the product in AWS and MongoDB startup credit conversations.",
      },
    ],
    decisions: [
      "I treated Amealio as an ecosystem rather than a single app: customer app, merchant dashboard, admin operations, POS, payments, ONDC, analytics, and personalization all needed to work together.",
      "I prioritized menu data quality because personalization, ordering, merchant control, and discovery all depend on accurate item/category/price/availability data.",
      "I improved API performance through MongoDB indexes, query changes, and loop reduction instead of only adding infrastructure.",
      "I built leadership leverage by training interns and formalizing tools/processes while still owning critical implementation paths.",
    ],
  },
  {
    slug: "esay",
    title: "ESAY",
    eyebrow: "Arawinz / Early Product Foundation",
    category: "Full-Stack Foundations",
    summary:
      "I contributed to Engineering Sources Around You, a construction-industry platform for service providers, suppliers, engineers, workforce contacts, engineering information, trends, conversions, and careers.",
    role: "Web Developer Intern",
    period: "May 2019 - Jul 2019",
    status: "Public mobile app",
    liveUrl: "https://esay.in/",
    links: [{ label: "Live website", url: "https://esay.in/" }],
    visual: "public",
    organization: "Arawinz",
    stack: ["Dart", "Flutter", "HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "PHP CodeIgniter", "MySQL"],
    highlights: [
      "I contributed to the ESAY product during an early internship at Arawinz.",
      "I worked on responsive web UI, dynamic features, backend/data handling, and mobile app involvement using Dart/Flutter.",
      "I got early exposure to a public, domain-specific product instead of only classroom-style work.",
    ],
    impact: [
      "Public iOS/Android app",
      "Construction industry platform",
      "Early full-stack foundation",
      "Mobile app exposure",
    ],
    context: [
      "ESAY serves the construction and engineering sector, where users need fast access to services, suppliers, engineers, workforce contacts, information, tools, and career resources.",
      "This project matters in my story because it gave me early exposure to shipped software, domain-specific workflows, and the difference between making a page and contributing to a product.",
    ],
    ownership: [
      {
        title: "Web and backend contribution",
        items: [
          "Worked on responsive interfaces using HTML, CSS, and Bootstrap.",
          "Built interactive behavior using JavaScript and jQuery.",
          "Worked with PHP CodeIgniter and MySQL around backend/data handling.",
        ],
      },
      {
        title: "Mobile product exposure",
        items: [
          "Contributed to the ESAY mobile app context using Dart/Flutter.",
          "Learned how app features connect to industry-specific user needs.",
          "Built early comfort working beyond a single web page or isolated assignment.",
        ],
      },
    ],
    modules: [
      {
        title: "Construction-industry product context",
        detail:
          "ESAY gave users a practical way to find construction and engineering resources, contacts, information, trends, conversions, and career-related material.",
        tags: ["Construction", "Engineering", "Directory", "Resources"],
      },
      {
        title: "Responsive web interface",
        detail:
          "I worked on UI implementation using HTML, CSS, Bootstrap, JavaScript, and jQuery, learning how product screens need structure, responsiveness, and clarity.",
        tags: ["HTML", "CSS", "Bootstrap", "jQuery"],
      },
      {
        title: "Backend and data handling",
        detail:
          "I worked with PHP CodeIgniter and MySQL, which helped me understand how frontend behavior depends on backend structure and data quality.",
        tags: ["PHP", "CodeIgniter", "MySQL"],
      },
      {
        title: "Flutter exposure",
        detail:
          "My involvement with the Dart/Flutter mobile app became an early bridge into cross-platform product thinking.",
        tags: ["Dart", "Flutter", "Mobile app"],
      },
    ],
    hardProblems: [
      {
        problem: "I was early in my career and had to learn inside a real product environment.",
        response:
          "I focused on implementation discipline: responsive UI, interactive behavior, backend/data handling, and understanding the construction-industry context.",
      },
      {
        problem: "The product served a niche industry, not a generic consumer app.",
        response:
          "I learned to pay attention to domain workflows, terminology, and practical utility rather than just visual presentation.",
      },
    ],
    leadership: [
      "ESAY is not a leadership case study; it is an honest foundation case study. It shows where I started and how early shipped-product exposure shaped my later product ownership.",
    ],
    lessons: [
      "Real products teach faster than isolated exercises.",
      "Good engineering starts with understanding the domain and the user.",
      "My later full-stack and AI work stands on this early foundation.",
    ],
    deepDive: [
      {
        label: "Industry context",
        detail:
          "ESAY targets construction and engineering users who need fast access to service providers, suppliers, engineers, workforce contacts, technical information, conversions, and career resources.",
      },
      {
        label: "Web foundation",
        detail:
          "I worked on responsive UI and dynamic application behavior with HTML, CSS, Bootstrap, JavaScript, jQuery, PHP CodeIgniter, and MySQL.",
      },
      {
        label: "Mobile exposure",
        detail:
          "I contributed to the ESAY mobile app context using Dart/Flutter, giving me early exposure to cross-platform product delivery beyond web pages.",
      },
      {
        label: "Career signal",
        detail:
          "ESAY belongs early in my portfolio as proof that I started with real shipped product surfaces, not only classroom or isolated demo work.",
      },
    ],
    decisions: [
      "I present ESAY as an early foundation project rather than overstating ownership, because the strongest verified claim is contribution during internship.",
      "I use ESAY to show breadth: web UI, backend/data handling, mobile app exposure, and industry-specific product thinking.",
      "I connect the project to the later Amealio and YouTube Autopilot story: shipped products first, then leadership, then AI product systems.",
    ],
  },
];

export const experience = [
  {
    period: "Jan 2026 - Jul 2026",
    title: "Tutor",
    company: "Oklahoma Christian University",
    detail:
      "I support computer science and AI/ML learning through debugging help, exam preparation, code explanation, and problem-solving mentorship.",
    icon: GraduationCap,
  },
  {
    period: "Dec 2024 - Present",
    title: "MS Artificial Intelligence",
    company: "Oklahoma Christian University",
    detail: "I am studying AI in the United States while building applied AI products.",
    icon: GraduationCap,
  },
  {
    period: "Aug 2024 - Dec 2024",
    title: "Lead of Technology / CTO",
    company: "Amealio / Envisionard",
    detail: "I led and built across product architecture, integrations, dashboards, AI personalization, payments, and team growth.",
    icon: Rocket,
  },
  {
    period: "2025",
    title: "End-to-End Full-Stack Owner",
    company: "Sales & Inventory Management",
    detail:
      "I built, deployed, and maintain a live family-business operations platform tracking INR 3L+ sales and 65,000+ inventory units.",
    icon: Boxes,
  },
  {
    period: "Sep 2022 - Jul 2024",
    title: "Project Manager",
    company: "Envisionard",
    detail: "I planned features, coordinated delivery, trained interns, and supported weekly and monthly release rhythms.",
    icon: BriefcaseBusiness,
  },
  {
    period: "Jan 2022 - Aug 2022",
    title: "Full Stack Developer",
    company: "Envisionard",
    detail: "I built MERN/React Native product surfaces, APIs, dashboards, integrations, and performance improvements.",
    icon: Server,
  },
  {
    period: "Jan 2021 - Dec 2021",
    title: "Frontend Developer",
    company: "Envisionard",
    detail: "I built product interfaces and grew into broader full-stack ownership.",
    icon: Code2,
  },
  {
    period: "2019 - 2020",
    title: "Early Product Work",
    company: "Arawinz, ESAY, freelance projects",
    detail: "I worked on ESAY, Arawinz internship work, Mother Theressa Engineering College website, and Focus King Photography.",
    icon: Building2,
  },
];

export const teaching = {
  role: "Tutor",
  organization: "Oklahoma Christian University",
  period: "Jan 2026 - Jul 2026",
  url: "https://www.oc.edu/academics/student-success/tutoring",
  summary:
    "While pursuing my MS in Artificial Intelligence, I support computer science and AI/ML learners through technical explanation, debugging, exam preparation, and problem-solving mentorship.",
  impact: "Supported 50+ student learning interactions across programming, AI/ML, debugging, and exam preparation.",
  topics: ["C", "C++", "Python", "JavaScript", "AI", "Machine Learning", "Data structures", "Debugging", "Exam preparation", "Code explanation"],
};

export const skills = [
  {
    title: "AI + Product",
    icon: Bot,
    items: ["AI workflows", "Chatbots", "Recommendation logic", "Agent pipelines", "Prompted systems"],
  },
  {
    title: "Operational Systems",
    icon: Boxes,
    items: ["Inventory workflows", "Sales tracking", "Reports", "Role-based access", "Production maintenance"],
  },
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Feathers.js", "FastAPI", "PHP", "CodeIgniter", "Flask"],
  },
  {
    title: "Data + Infra",
    icon: Database,
    items: ["MongoDB", "MySQL", "Postgres", "Redis", "AWS", "Firebase", "Cloudflare R2"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Dart", "Flutter", "Push notifications", "Maps/location"],
  },
  {
    title: "Delivery",
    icon: ShieldCheck,
    items: ["JWT/OAuth", "Swagger", "Jira", "Git", "Load balancers", "Release planning"],
  },
];

export const certifications = [
  {
    title: "Google Cloud Fundamentals: Core Infrastructure",
    provider: "Coursera",
    url: "https://coursera.org/share/0f69dbd40f0e325e8263abeed3654f7f",
  },
  {
    title: "AWS Cloud Technical Essentials",
    provider: "Coursera",
    url: "https://coursera.org/share/cbbeeb2927d5e1fab869e489d8c49ff1",
  },
  {
    title: "Front-End Web UI Frameworks and Tools: Bootstrap 4, with honors",
    provider: "Coursera",
    url: "https://coursera.org/share/721b4b3bd8e7cc824507f034f7aa6478",
  },
  {
    title: "Getting Started With Application Development",
    provider: "Coursera",
    url: "https://coursera.org/share/9aa7795d086f35fd5d17a5185ebe2d48",
  },
  {
    title: "Modern JavaScript: ES6 Basics",
    provider: "Coursera",
    url: "https://coursera.org/share/3459503ac5ea64174132064ef14c5c65",
  },
  {
    title: "The Complete Front-End Web Development Course",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-579fdac7-1ce2-43c0-94cb-cc4bc25724ea",
  },
  {
    title: "Arawinz Soft Solutions Internship Certificate",
    provider: "Google Drive",
    url: "https://drive.google.com/file/d/1oy8TMS_OagWua5ywlsANlQofUb_RWaJi/",
  },
  {
    title: "Arawinz Soft Solutions Internship Certificate",
    provider: "Google Drive",
    url: "https://drive.google.com/file/d/13VNAg-znGuFWco5vkTEzY7paRgUWZWse/",
  },
];

export const olderProjects = [
  "Local Fox",
  "Hey Go - Goods & Passenger Transport",
  "Mother Theressa Engineering College Website",
  "Focus King Photography",
];

export const pipeline = [
  { label: "Research", icon: Brain },
  { label: "Script", icon: Code2 },
  { label: "Visuals", icon: Sparkles },
  { label: "TTS", icon: Workflow },
  { label: "Edit", icon: Layers3 },
  { label: "SEO", icon: LineChart },
  { label: "Upload", icon: Rocket },
];

export const systemNodes = [
  { label: "Product UX", icon: Layers3 },
  { label: "AI workflows", icon: Brain },
  { label: "APIs", icon: Server },
  { label: "Data", icon: Database },
  { label: "Integrations", icon: Network },
  { label: "Security", icon: ShieldCheck },
  { label: "Teams", icon: Users },
  { label: "Delivery", icon: BadgeCheck },
];

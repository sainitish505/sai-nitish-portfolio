import {
  Bot,
  Brain,
  BriefcaseBusiness,
  Building2,
  Code2,
  Database,
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

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  role: string;
  period: string;
  status: string;
  liveUrl?: string;
  organization?: string;
  stack: string[];
  highlights: string[];
  impact: string[];
  sections: { title: string; body: string[] }[];
  deepDive: { label: string; detail: string }[];
  decisions: string[];
};

export const profile = {
  name: "Sai Nitish",
  title: "AI Product Engineer",
  linkedin: "https://www.linkedin.com/in/sai-nitish",
  email: "bimarisainitish@gmail.com",
  location: "Oklahoma, United States",
  intro:
    "MS Artificial Intelligence student building deployed AI products with a full-stack engineering foundation and CTO-level product leadership experience.",
  thesis:
    "I build practical AI products from idea to interface to deployment: workflows, dashboards, APIs, integrations, mobile experiences, and the teams/processes needed to ship them.",
};

export const stats = [
  { value: "6 yrs", label: "Product engineering growth" },
  { value: "10+", label: "People led and trained" },
  { value: "4+", label: "Major integrations shipped" },
  { value: "90%", label: "API performance improvement" },
];

export const focusAreas: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "AI Product Systems",
    description:
      "AI workflows, chatbots, recommendation logic, agent pipelines, and production-shaped automation.",
    icon: Brain,
  },
  {
    title: "Full-Stack SaaS",
    description:
      "Next.js/React surfaces, Node/Python APIs, databases, auth, dashboards, background jobs, and analytics.",
    icon: Layers3,
  },
  {
    title: "Integrations",
    description:
      "POS, ONDC, payments, OAuth, YouTube APIs, Firebase, maps, notifications, and third-party services.",
    icon: Network,
  },
  {
    title: "Product Leadership",
    description:
      "Feature planning, team training, release cadence, cloud credits, technical direction, and delivery ownership.",
    icon: Users,
  },
];

export const projects: Project[] = [
  {
    slug: "youtube-autopilot",
    title: "YouTube Autopilot",
    eyebrow: "Flagship AI Product",
    summary:
      "A deployed AI workflow automation platform that turns a niche idea into a planned, generated, edited, optimized, and upload-ready YouTube video.",
    role: "AI Product Builder",
    period: "2025 - Present",
    status: "Deployed live",
    liveUrl: "https://nextjs-frontend-one-phi.vercel.app/",
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
      "Designed a multi-agent video pipeline for research, script, visuals, TTS, editing, SEO, and upload.",
      "Built a SaaS control surface with auth, settings, job creation, live status, analytics, and cost tracking.",
      "Implemented production-shaped backend patterns: encrypted user keys, async workers, artifact storage, and per-job isolation.",
    ],
    impact: [
      "Live deployed product",
      "End-to-end AI workflow",
      "Async job orchestration",
      "Secure credential handling",
    ],
    sections: [
      {
        title: "Problem",
        body: [
          "Video creation is a chain of slow handoffs: topic research, scripting, visuals, voiceover, editing, metadata, and publishing. The project explores how those steps can become a coordinated AI workflow without losing visibility or control.",
        ],
      },
      {
        title: "System",
        body: [
          "The system uses a Next.js frontend, FastAPI backend, Postgres data model, Redis/ARQ background jobs, and Cloudflare R2 artifact storage. A CrewAI-based pipeline coordinates planning and generation work while the app tracks job state, cost, assets, and settings.",
        ],
      },
      {
        title: "Engineering Decisions",
        body: [
          "The product separates user-facing job creation from long-running generation work. User API keys and YouTube tokens are stored encrypted, each job receives isolated output directories, and dashboard views poll job and agent status so users can understand where the pipeline is.",
        ],
      },
    ],
    deepDive: [
      {
        label: "Product surface",
        detail:
          "Created a control center for AI video jobs: onboarding/auth, API key settings, YouTube connection, new job creation, live pipeline status, history, analytics, and cost views.",
      },
      {
        label: "Agent orchestration",
        detail:
          "Modeled the pipeline as a sequence of specialized AI responsibilities: CEO planning, script refinement, visual generation, voiceover, editing, SEO, and upload.",
      },
      {
        label: "Backend reliability",
        detail:
          "Separated web requests from long-running media generation with async background workers, job records, status updates, isolated outputs, and artifact storage.",
      },
      {
        label: "Security posture",
        detail:
          "Handled sensitive user credentials through encrypted storage and OAuth connection flows instead of exposing secrets inside the UI or worker pipeline.",
      },
    ],
    decisions: [
      "Use a SaaS-shaped architecture instead of a one-off script so the project demonstrates product thinking, user state, security, and repeatable workflows.",
      "Keep generation jobs asynchronous because AI media work can take minutes and needs resilient status tracking.",
      "Expose cost and agent progress in the UI so users understand what the system is doing instead of waiting on a black box.",
      "Design the case study as an AI workflow automation platform rather than a narrow YouTube tool, making the engineering transferable to other AI products.",
    ],
  },
  {
    slug: "amealio",
    title: "Amealio",
    eyebrow: "CTO / Product Leadership",
    summary:
      "A social food discovery and restaurant engagement product built inside Envisionard, spanning customer app, merchant/admin dashboards, AI personalization, POS, payments, settlements, and ONDC workflows.",
    role: "CTO",
    period: "Aug 2024 - Dec 2024",
    status: "Production product",
    liveUrl: "https://www.amealio.com/",
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
      "Grew through frontend developer, full-stack developer, project manager, and CTO responsibilities.",
      "Built and led across the end-to-end ecosystem: customer app, merchant/admin dashboards, analytics, integrations, payments, and personalization.",
      "Helped extend access to $1M AWS startup credits and MongoDB startup credits through technical/product discussions.",
    ],
    impact: [
      "10+ people led/trained",
      "4+ major integrations",
      "~90% API speed improvement",
      "$1M AWS credits extended",
    ],
    sections: [
      {
        title: "Scope",
        body: [
          "Amealio was an early MVP when Sai joined. Over time, the work expanded into customer-facing mobile experiences, merchant tools, admin operations, analytics, AI personalization, POS/menu systems, payments, settlements, ONDC, OAuth, and internal tooling.",
        ],
      },
      {
        title: "Built And Led",
        body: [
          "Sai built Petpooja POS integration for menu, item, category, price, and availability sync through API pull, scheduled jobs, and webhooks. He also built item/menu management workflows for merchant preferences, multi-location restaurants, duplicate items, schema mismatches, and data validation.",
          "He built Razorpay payment and settlement workflows across checkout, event booking, ordering, wallet flows, refunds, coupons, merchant payout tracking, commission calculation, reconciliation, payment status sync, and reporting.",
          "He led AI personalization and chatbot direction using user preference data and custom recommendation logic across restaurants, dishes, menus, offers, events, search results, and social dining experiences.",
        ],
      },
      {
        title: "Leadership",
        body: [
          "Alongside building, Sai trained interns, set learning goals, referred team members, supported team growth, introduced tools such as Swagger, Jira, and AWS load balancers, and helped maintain weekly bug/enhancement releases with monthly feature releases.",
        ],
      },
    ],
    deepDive: [
      {
        label: "POS and menu systems",
        detail:
          "Built Petpooja integration for menus, items, categories, prices, and availability using API pull, scheduled sync, and webhook-based flows. Solved schema mismatches, duplicates, validation, and multi-location restaurant handling.",
      },
      {
        label: "Payments and settlements",
        detail:
          "Owned Razorpay checkout, event booking, ordering payments, wallet flows, refunds, coupons, merchant payouts, commissions, reconciliation, payment status sync, and reporting across frontend, backend, and dashboards.",
      },
      {
        label: "Dashboards and access",
        detail:
          "Built merchant, admin, and analytics dashboards for operations, platform management, payments, settlements, and engagement, including real-time behavior and multi-role access patterns.",
      },
      {
        label: "AI personalization",
        detail:
          "Led personalization and chatbot direction using user preference data and custom recommendation logic across restaurants, dishes, menus, offers, events, search results, and social dining experiences.",
      },
      {
        label: "Team and operations",
        detail:
          "Trained interns, set learning plans, referred team members, introduced tools such as Swagger/Jira/load balancers, supported release cadence, and represented the product in AWS and MongoDB startup credit conversations.",
      },
    ],
    decisions: [
      "Treat Amealio as an ecosystem rather than a single app: customer app, merchant dashboard, admin operations, POS, payments, ONDC, analytics, and personalization all needed to work together.",
      "Prioritize menu data quality because personalization, ordering, merchant control, and discovery all depend on accurate item/category/price/availability data.",
      "Improve API performance through MongoDB indexes, query changes, and loop reduction instead of only adding infrastructure.",
      "Build leadership leverage by training interns and formalizing tools/processes while still owning critical implementation paths.",
    ],
  },
  {
    slug: "esay",
    title: "ESAY",
    eyebrow: "Arawinz / Early Product Foundation",
    summary:
      "Engineering Sources Around You, a construction-industry platform connecting users with service providers, suppliers, engineers, workforce contacts, engineering information, trends, conversions, and careers.",
    role: "Web Developer Intern",
    period: "May 2019 - Jul 2019",
    status: "Public mobile app",
    liveUrl: "https://esay.in/",
    organization: "Arawinz",
    stack: ["Dart", "Flutter", "HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "PHP CodeIgniter", "MySQL"],
    highlights: [
      "Contributed to the ESAY product during an early internship at Arawinz.",
      "Worked on responsive web UI, dynamic features, backend/data handling, and mobile app involvement using Dart/Flutter.",
      "Public app listings show ESAY as a shipped construction/engineering industry platform.",
    ],
    impact: [
      "Public iOS/Android app",
      "Construction industry platform",
      "Early full-stack foundation",
      "Mobile app exposure",
    ],
    sections: [
      {
        title: "Product",
        body: [
          "ESAY serves the construction and engineering sector by collecting useful contacts and resources across service providers, suppliers, engineers, skilled workforce, engineering information, trends, conversion tools, and careers.",
        ],
      },
      {
        title: "Contribution",
        body: [
          "Sai's work included responsive interfaces with HTML, CSS, and Bootstrap, interactive features using JavaScript/jQuery, backend work with PHP CodeIgniter, MySQL query/schema work, and involvement in the ESAY mobile app using Dart/Flutter.",
        ],
      },
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
          "Worked on responsive UI and dynamic application behavior with HTML, CSS, Bootstrap, JavaScript, jQuery, PHP CodeIgniter, and MySQL.",
      },
      {
        label: "Mobile exposure",
        detail:
          "Contributed to the ESAY mobile app context using Dart/Flutter, giving Sai early exposure to cross-platform product delivery beyond web pages.",
      },
      {
        label: "Career signal",
        detail:
          "ESAY belongs early in the portfolio as proof that Sai started with real shipped product surfaces, not only classroom or isolated demo work.",
      },
    ],
    decisions: [
      "Present ESAY as an early foundation project rather than overstating ownership, because the strongest verified claim is contribution during internship.",
      "Use ESAY to show breadth: web UI, backend/data handling, mobile app exposure, and industry-specific product thinking.",
      "Connect the project to the later Amealio and YouTube Autopilot story: shipped products first, then leadership, then AI product systems.",
    ],
  },
];

export const experience = [
  {
    period: "Dec 2024 - Present",
    title: "MS Artificial Intelligence",
    company: "Oklahoma Christian University",
    detail: "Studying AI in the United States while building applied AI products.",
    icon: GraduationCap,
  },
  {
    period: "Aug 2024 - Dec 2024",
    title: "CTO",
    company: "Amealio / Envisionard",
    detail: "Led and built across product architecture, integrations, dashboards, AI personalization, payments, and team growth.",
    icon: Rocket,
  },
  {
    period: "Sep 2022 - Jul 2024",
    title: "Project Manager",
    company: "Envisionard",
    detail: "Planned features, coordinated delivery, trained interns, and supported weekly and monthly release rhythms.",
    icon: BriefcaseBusiness,
  },
  {
    period: "Jan 2022 - Aug 2022",
    title: "Full Stack Developer",
    company: "Envisionard",
    detail: "Built MERN/React Native product surfaces, APIs, dashboards, integrations, and performance improvements.",
    icon: Server,
  },
  {
    period: "Jan 2021 - Dec 2021",
    title: "Frontend Developer",
    company: "Envisionard",
    detail: "Built product interfaces and grew into broader full-stack ownership.",
    icon: Code2,
  },
  {
    period: "2019 - 2020",
    title: "Early Product Work",
    company: "Arawinz, ESAY, freelance projects",
    detail: "Worked on ESAY, Arawinz internship work, Mother Theressa Engineering College website, and Focus King Photography.",
    icon: Building2,
  },
];

export const skills = [
  {
    title: "AI + Product",
    icon: Bot,
    items: ["AI workflows", "Chatbots", "Recommendation logic", "Agent pipelines", "Prompted systems"],
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

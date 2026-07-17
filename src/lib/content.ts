/**
 * Single source of truth for portfolio content.
 * Metrics here are real — keep them accurate. Descriptions of external
 * products are drawn from the live sites; role framing is Isaac's own.
 */

export const profile = {
  name: "Isaac Obidi",
  fullName: "Isaac Obidi Wonah",
  role: "Senior Frontend Engineer",
  focus: "Fintech · Identity · Payments",
  location: "Lagos, Nigeria",
  availability: "Open to senior frontend roles",
  email: "obidi.isaacw@gmail.com",
  linkedin: "https://www.linkedin.com/in/obidi-isaac",
  linkedinLabel: "linkedin.com/in/obidi-isaac",
  portrait: "/isaac-wonah.png",
  portraitAlt: "Portrait of Isaac Obidi Wonah",
  // Points at the printable résumé route; swap to a static PDF path if you host one.
  resumeUrl: "/resume",
  // Short, editorial one-liner used near the hero.
  intro: "Frontend engineer, Lagos.",
  // The credibility line under the hero — one sentence, no metric wall.
  standfirst:
    "I build fast, accessible interfaces for products that move money and verify identity — currently leading frontend at Dojah, where the work reaches millions of people across Africa."
} as const;

export type Project = {
  id: string;
  name: string;
  org?: string;
  url: string;
  urlLabel: string;
  region: "Nigeria" | "US · Remote";
  years: string;
  role: string;
  /** One-line category shown as an eyebrow, e.g. "Identity & KYC platform". */
  kind: string;
  summary: string;
  /** Short, honest highlights. Only include quantified claims where real. */
  highlights: string[];
  stack: string[];
  image: string;
  imageAlt: string;
};

/** Curated, impact-first. Region is shown as metadata on each entry. */
export const projects: Project[] = [
  {
    id: "dojah",
    name: "Dojah",
    org: "Dojah",
    url: "https://dojah.io",
    urlLabel: "dojah.io",
    region: "Nigeria",
    years: "2021 — Present",
    role: "Lead Frontend Engineer",
    kind: "Identity & KYC / anti-fraud platform",
    summary:
      "Anti-fraud and identity infrastructure for the internet — KYC/KYB, document analysis, and biometric verification. I lead frontend across the embeddable verification widget, the merchant dashboard, and the shared design-token system, serving users in Nigeria, Kenya, Ghana, and South Africa.",
    highlights: [
      "Rebuilt the verification widget SDK to a 56KB gzipped bundle and 0.33s LCP, unblocking low-bandwidth Android.",
      "Led a rendering & caching overhaul that cut median dashboard API round-trips by >50% (~$270K/yr infra saved).",
      "Mentored a team of six; 70% moved from junior to mid."
    ],
    stack: ["React", "TypeScript", "Next.js", "React Query", "Design tokens"],
    image: "/projects/dojah.png",
    imageAlt: "Dojah homepage — anti-fraud infrastructure for the internet"
  },
  {
    id: "northface",
    name: "The North Face — XPLR Pass",
    org: "VF Corporation (via Turing)",
    url: "https://www.thenorthface.com/en-us/xplr-pass",
    urlLabel: "thenorthface.com/xplr-pass",
    region: "US · Remote",
    years: "2023 — 2024",
    role: "Frontend Engineer",
    kind: "Retail loyalty & analytics",
    summary:
      "XPLR Pass is The North Face's loyalty programme (a VF Corporation brand) — points on every purchase, member rewards, and exclusive access. On a Turing engagement I built loyalty and analytics surfaces for a global retail audience, translating dense reporting data into usable member-facing experiences.",
    highlights: [
      "Shipped loyalty and analytics UI for a global VF Corporation retail brand.",
      "Worked across a distributed, remote-first team and codebase."
    ],
    stack: ["React", "Next.js", "TypeScript", "Analytics"],
    image: "/projects/northface.png",
    imageAlt: "The North Face XPLR Pass loyalty programme landing page"
  },
  {
    id: "seerbit",
    name: "SeerBit",
    org: "SeerBit · Centric Gateway",
    url: "https://www.seerbit.com",
    urlLabel: "seerbit.com",
    region: "Nigeria",
    years: "2020 — 2021",
    role: "Frontend Engineer",
    kind: "Pan-African payment gateway",
    summary:
      "A payment gateway enabling checkout, payment links, recurring billing, POS, and virtual accounts across 12+ African countries. I built merchant-facing payment interfaces where latency, correctness, and clear error states map directly to revenue.",
    highlights: [
      "Delivered checkout and merchant dashboard flows for a PCI-DSS certified processor.",
      "Supported a gateway processing $1M+/month in transaction volume."
    ],
    stack: ["React", "Redux", "TypeScript"],
    image: "/projects/seerbit.png",
    imageAlt: "SeerBit — enabling payments without boundaries"
  },
  {
    id: "anchor",
    name: "Anchor USD",
    org: "Anchor",
    url: "https://tryanchor.com",
    urlLabel: "tryanchor.com",
    region: "US · Remote",
    years: "2021 — 2022",
    role: "Frontend Engineer",
    kind: "Crypto trading app",
    summary:
      "A consumer crypto app to buy, sell, stake, and manage digital assets across iOS and Android. I built high-converting acquisition surfaces and ran A/B experiments to lift conversion around the launch.",
    highlights: [
      "Built marketing and landing surfaces for the iOS/Android launch.",
      "Ran A/B experiments to improve acquisition conversion."
    ],
    stack: ["React", "Next.js", "A/B testing"],
    image: "/projects/anchor.png",
    imageAlt: "Anchor USD — your gateway to crypto trading"
  },
  {
    id: "suregifts",
    name: "SureGifts",
    org: "SureGifts",
    url: "https://www.suregifts.com.ng",
    urlLabel: "suregifts.com.ng",
    region: "Nigeria",
    years: "2019 — 2020",
    role: "Frontend Engineer",
    kind: "Gifting & rewards commerce",
    summary:
      "A gifting and rewards platform — eGift cards, bills & airtime, and business reward programmes across Nigeria. I built catalogue-heavy storefront experiences for both personal and business customers.",
    highlights: [
      "Built personal and business gifting storefronts with a large product catalogue.",
      "Focused on browse-and-checkout flows for a rewards marketplace."
    ],
    stack: ["React", "JavaScript", "REST APIs"],
    image: "/projects/suregifts.png",
    imageAlt: "SureGifts — the perfect gift for any occasion"
  },
  {
    id: "luzoma",
    name: "Luzoma Microsystems",
    org: "Luzoma Microsystems",
    url: "https://www.luzoma.com",
    urlLabel: "luzoma.com",
    region: "Nigeria",
    years: "Early career",
    role: "Web Developer",
    kind: "Software & web agency",
    summary:
      "An enterprise software and web agency in Port Harcourt. Early-career work building marketing sites and business-software interfaces for clients across Nigeria — where I learned to ship end-to-end and own delivery.",
    highlights: [
      "Delivered client websites and business-software UIs end-to-end.",
      "Foundation for close to a decade of product frontend work."
    ],
    stack: ["JavaScript", "HTML / CSS", "jQuery"],
    image: "/projects/luzoma.png",
    imageAlt: "Luzoma Microsystems — enterprise software solutions"
  }
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Node.js", "SQL"] },
  {
    label: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Redux Saga",
      "React Query",
      "SWR"
    ]
  },
  { label: "Styling", items: ["Tailwind CSS", "Styled Components"] },
  { label: "Testing", items: ["Jest", "React Testing Library", "Cypress"] },
  { label: "Delivery", items: ["AWS", "Docker", "CI/CD", "Micro-frontends"] }
];

export type Principle = {
  title: string;
  body: string;
};

/** Displayed in the scroll-driven horizontal section — the engineering ethos. */
export const principles: Principle[] = [
  {
    title: "Performance is a feature.",
    body: "A 0.33s LCP in a 56KB bundle — because a verification that doesn't load doesn't count, especially on a low-bandwidth Android in Lagos.",
  },
  {
    title: "Mask the PII. Every time.",
    body: "BVN: *1234. In fintech, compliance isn't a review step you remember — it's enforced in the rules the tooling runs under.",
  },
  {
    title: "Ship small, atomic diffs.",
    body: "Reviewable changes, tests written first, conventional commits. Velocity is a by-product of discipline, not a trade against it.",
  },
  {
    title: "Own it end to end.",
    body: "Architecture, implementation, design tokens, deploy pipeline. Fewer hand-offs means fewer gaps for bugs to hide in.",
  },
  {
    title: "Lift the people around you.",
    body: "70% of the engineers I've led moved from junior to mid. The team is the real multiplier on any codebase.",
  },
];

/**
 * The "How I work with AI" section — the differentiator. A governed,
 * staff-level agent workflow on a real fintech codebase, not raw prompting.
 */
export const aiWorkflow = {
  narrative:
    "This site was built in Cursor, and the session was recorded as the demo below. My edge isn't prompting — it's governance. I run agents against a fintech codebase under enforced rules, the same way I'd review a senior teammate's work.",
  // Set to a real video URL (Vercel Blob / hosted / a /public path) before submitting.
  videoSrc: "",
  videoPoster: "",
  points: [
    {
      title: "Rules that enforce fintech safety",
      body: "Project .cursor/rules make the non-negotiables automatic: PII is masked in logs (BVN: *1234), secrets stay in a manager, inputs are allow-listed, and API responses follow a strict { entity, error, status } contract."
    },
    {
      title: "Atomic diffs, written test-first",
      body: "Every change is small, reviewable, and covered — conventional commits, branch off development, under 400 lines, no direct commits to protected branches."
    },
    {
      title: "Subagents & MCP servers",
      body: "Scoped work — exploration, security review, CI investigation — runs as dedicated subagents, and MCP servers extend the agent into real tooling. A phased roadmap keeps large migrations governed, not ad-hoc."
    }
  ]
} as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#principles", label: "Principles" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
] as const;

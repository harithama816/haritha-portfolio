// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// text across the site — no need to touch the components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Haritha M A",
  role: "Management Professional — Business Analytics & Process Improvement",
  tagline:
    "I turn business data into decisions — mapping processes, building decision-support tools, and applying predictive analytics where it adds an edge.",
  location: "Gurgaon, India",
  batch: "PGDM Batch, 2025–2027",
  email: "haritha.pgdm27g@greatlakes.edu.in",
  linkedin: "https://www.linkedin.com/in/harithama",
  github: "https://github.com/your-handle", // TODO, optional
  resumeFile: "/Haritha_M_A_Resume.pdf", // place your PDF in /public with this name
  notionPortfolio:
    "https://pastoral-attack-e4c.notion.site/Haritha-M-A-3d2e7c18e200800c83cfea1164a752e8",
};

export const heroStats = [
  { value: "24", label: "KPIs built for a retail decision-support system" },
  { value: "3", label: "core business processes mapped end-to-end" },
  { value: "0.765", label: "ROC-AUC on a Bajaj Finance recovery model" },
];

export const about = {
  summary:
    "A PGDM student who works across business analysis, business process analysis and decision support — and brings predictive analytics in as one more tool, not the whole toolkit. I've mapped ERP workflows, built KPI-driven decision-support systems, and used machine learning where the problem called for it.",
  facts: [
    { label: "Currently", value: "PGDM, Great Lakes Institute of Management, Gurgaon" },
    { label: "Focus", value: "Business Analysis · Process Improvement · Decision Support" },
    { label: "Also applies", value: "Predictive Analytics · Data Visualisation · Python" },
    { label: "Languages", value: "English, Hindi, Malayalam" },
  ],
};

export const internship = {
  role: "Data Science Intern",
  company: "Bajaj Finance",
  period: "Apr – Jun 2026",
  summary:
    "Bajaj Finance needed a way to prioritise which deactivated Smart Soundbox devices were worth recovering. I built a recovery-prediction framework using 45 merchant and operational variables, and turned the model's output into a prioritised action list for field recovery teams.",
  bullets: [
    "Developed an ML framework to predict recovery probability for deactivated Smart Soundbox devices using 45 merchant and operational variables.",
    "Built a representative synthetic dataset of ~2.5 lakh merchant records to support model development and validation.",
    "Evaluated four ML models and selected XGBoost for recovery prediction, reaching a 0.765 ROC-AUC.",
    "Designed a recovery prioritisation framework where the top 30% of merchants accounted for ~57% of recoverable devices.",
  ],
  stats: [
    { value: "45", label: "variables modeled" },
    { value: "4", label: "ML models evaluated" },
    { value: "0.765", label: "ROC-AUC (XGBoost)" },
  ],
};

export const projects = [
  {
    title: "ERP Consulting & Industry 4.0 – AutoCare Spare Parts",
    year: "2026",
    summary:
      "Analysed business processes and designed an Odoo ERP solution covering Order-to-Cash, Procure-to-Pay and Warranty Management, integrating Sales, Purchase, Inventory and Accounting. Mapped cross-functional workflows and tested GST-compliant transactions end-to-end to improve process visibility and control.",
    tags: ["ERP", "Business Process Analysis", "Operations", "Odoo"],
    metric: "3 processes mapped",
  },
  {
    title: "Marketing & Retail Analytics – Nykaa Insight Decision Support System",
    year: "2026",
    summary:
      "Developed a team-based decision-support system integrating sales, customer, marketing and inventory data across 500 SKUs, 5,000 customers and 100 campaigns. Built 24 KPIs and what-if analysis to evaluate pricing, inventory and marketing scenarios.",
    tags: ["Business Analytics", "Decision Support", "KPIs", "Retail Analytics"],
    metric: "24 KPIs",
  },
  {
    title: "Fintech Unsecured Lending Platform",
    year: "2026",
    summary:
      "A functional prototype simulating the end-to-end unsecured lending journey — from borrower onboarding and credit assessment through to the lending decision — mapped as a business process and customer journey.",
    tags: ["FinTech", "Business Process", "Customer Journey", "Credit/Lending"],
    metric: "End-to-end prototype",
  },
  {
    title: "Six Sigma Operations Improvement",
    year: "2025",
    summary:
      "Applied Six Sigma and process analysis to investigate order-to-delivery delays, identifying kitchen layout and workstation movement as key bottlenecks. Recommended process redesign and workstation alignment to reduce operational delays, improve workflow and strengthen operational efficiency.",
    tags: ["Six Sigma", "Process Analysis", "Process Improvement", "Operations"],
    metric: "Root cause found",
  },
  {
    title: "Demand & Sales Optimization Analysis",
    year: "2025",
    summary:
      "Analysed demand patterns and pricing sensitivity to identify commercial levers. In scenario testing, the recommended pricing and demand-planning moves projected a 20% increase in sales and a 45% profit margin.",
    tags: ["Pricing", "Demand Planning", "Analytics"],
    metric: "Scenario result: +20% sales",
  },
];

// Secondary projects — shown in a lighter-weight "Additional Projects" list
// rather than the primary showcase grid.
export const additionalProjects = [
  {
    title: "BharatPe Business & FinTech Analysis",
    year: "2026",
    summary:
      "Secondary research into BharatPe's business model, product portfolio and competitive landscape, synthesised into an interactive platform for growth-strategy evaluation.",
    tags: ["Market Research", "Strategy"],
  },
];

export const skillGroups = [
  {
    category: "Business Analysis",
    items: ["Business Process Analysis", "Decision Support", "Process Improvement"],
  },
  {
    category: "Data & Analytics",
    items: ["Data Analysis", "Data Visualisation", "Analytical Problem Solving"],
  },
  {
    category: "Predictive Analytics",
    items: ["Python", "Machine Learning", "Model Evaluation"],
  },
];

export const certificates = [
  {
    name: "Six Sigma Yellow Belt",
    issuer: "Kennesaw State University",
    period: "2026 · 4 weeks",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    period: "2024 · 4 weeks",
  },
];

export const awards = [
  { name: "Winner — Unstop Intra-College Case Competition", period: "2025" },
  {
    name: "District Level Qualifier — Young Innovators Program",
    period: "Government of Kerala, 2023",
  },
];

export const positions = [
  {
    role: "Secretary — Prayaas E-Cell",
    period: "2026",
    detail:
      "Manage club operations, organise entrepreneurship events and oversee the planning and execution of Unstop competitions.",
  },
  {
    role: "Team SPOC — CREST",
    period: "2025 · E-Cell",
    detail: "Coordinated team registrations, logistics and communications for the event.",
  },
];

export const education = [
  {
    degree: "PGDM",
    institute: "Great Lakes Institute of Management, Gurgaon",
    score: "2.9 / 4 CGPA",
    year: "2027",
  },
  {
    degree: "B.Com",
    institute: "Mahatma Gandhi University, Kerala",
    score: "73.9%",
    year: "2024",
  },
  {
    degree: "12th",
    institute: "K P M V H S S, Kerala",
    score: "95.4%",
    year: "2020",
  },
  {
    degree: "10th",
    institute: "K P M V H S S, Kerala",
    score: "92.4%",
    year: "2018",
  },
];

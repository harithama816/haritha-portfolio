# Haritha M A — Portfolio

A modern, recruiter-facing portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Built from the resume of Haritha M A (P2514025, Great Lakes Institute of Management).

## Tech stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom design tokens, dark/light mode via CSS variables)
- **Animation**: Framer Motion (single orchestrated hero entrance — no scattered scroll effects)
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (display) + Inter (body) + JetBrains Mono (data labels), via `next/font`
- **Deployment**: Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing your content

Everything you'll want to change lives in **one file**: `app/lib/data.ts`. Update your name, tagline, internship bullets, projects, skills, education, and contact details there — the components read from it, so you don't need to touch any component code.

Before you deploy, fill in the placeholders in `app/lib/data.ts`:

- `email`
- `phone`
- `linkedin`
- `github` (optional)

These weren't on the source resume, so they're placeholders — swap them for your real details.

## Adding your resume PDF

Drop your resume PDF into `/public` and name it to match `resumeFile` in `app/lib/data.ts` (defaults to `Haritha_M_A_Resume.pdf`). The "Resume" button in the nav bar downloads this file directly.

## Project structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx        # Nav + theme toggle + mobile menu
│   │   ├── Hero.tsx          # Intro with headline + live stats
│   │   ├── About.tsx         # Summary + quick facts
│   │   ├── Internship.tsx    # Bajaj Finance case study
│   │   ├── Projects.tsx      # Academic project cards
│   │   ├── Skills.tsx        # Skills chart + certificates
│   │   ├── Journey.tsx       # Education timeline + awards + leadership
│   │   ├── Contact.tsx       # Email / phone / LinkedIn
│   │   └── Footer.tsx
│   ├── context/
│   │   └── ThemeContext.tsx  # Dark/light mode, persisted in localStorage
│   ├── lib/
│   │   └── data.ts           # ← All editable content lives here
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/                   # Static assets — add your resume PDF here
├── tailwind.config.ts
└── package.json
```

## Design notes

- One accent color (teal) used consistently for data points and links — everything else is neutral ink/paper tones, so the accent stays meaningful.
- The subtle graph-paper background in the hero nods to the data-analytics subject matter without being literal.
- The education list is the only numbered sequence on the page, because it's the only content that's genuinely chronological.
- Dark mode and light mode share the same tokens (`app/globals.css`), so any color you add there works in both.

## Deployment

See [DEPLOY.md](./DEPLOY.md) for step-by-step Vercel deployment instructions.

# 🧠 Ziff Portfolio — Product Requirements Doc (PRD)

## 🎯 Goal
Create a personal portfolio site to showcase 4 types of work:
- Research Projects (formerly Service Design)
- Futures Projects
- AI Projects (formerly Creative Tech)
- Facilitation Experience

Site must:
- Feel custom, lightweight, fast
- Render project cards from a structured format
- Use minimal dynamic logic
- Be easily editable later (no CMS for now)

---

## 🧱 Core Pages

### 1. Landing Page (`/`)
- Hero intro
- 4 x `<ServiceCard />` (one for each type of service)
- Each card has:
  - Title (e.g. Research Projects)
  - RoleLine (e.g. "Designer")
  - Tagline (e.g. "Systems meet stories")
  - Summary
  - Questions we explore
  - Things we might do
  - Ideal for
  - 2 CTA links ("View Work", "Enquire")

### 2–5. Project Pages (`/service/[slug]`)
- Slugs: `research-projects`, `futures-projects`, `ai-projects`, `facilitation-experience`
- One page per service
- Short intro block (role + image)
- Horizontal rows of Project Cards
- Each row is a single project composed of 3–5 `<ProjectCard variant="..." />`
- Variants: `ProjectCover`, `1-1ContentCol`, `3-5ContentCol`, `3-5ImageContent`, `DesignQuestion`

---

## 🧩 Component System

### `<ServiceCard />`
- Hardcoded props per card
- Used only on landing page
- Built using shadcn/ui primitives

### `<ProjectCard variant=... />`
- Dynamically rendered from local JSON (`projects.json`)
- Supports 5 layout variants
- Each project is composed of multiple cards (same project_number)
- Cards appear in variant_index order
- Component decides layout based on `variant`

---

## 🗃️ Project Data Source

### `/src/data/projects.json`
- One array of all project card entries
- Each entry has:
  - id
  - project_number (e.g. 1, 2... used in overline)
  - variant (e.g. "ProjectCover")
  - variant_index (1–5)
  - service_type
  - client
  - content (used across cards)
  - cover_image_url (optional)
  - project_image_url (optional)
  - hmw_line (optional)

Pages will group by `service_type`, then by `project_number`, and render each project as a swipeable card row.

---

## 🔌 Stack
- Next.js (App Router)
- Tailwind CSS
- shadcn/ui
- Local JSON for project data
- No Supabase
- Vercel hosting

---

## 🔐 Optional Future Features
- Password-protected projects (via local logic or lightweight auth)
- Re-integrate CMS (e.g. Supabase or Notion API) later if needed


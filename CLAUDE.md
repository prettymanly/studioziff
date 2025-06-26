# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
ZiffBook Portfolio is a personal portfolio website showcasing 4 core work types: Service Design, Futures, Creative Tech, and Facilitation. Built with Next.js 15, Tailwind CSS, and shadcn/ui components with precise Figma specifications.

## Technology Stack
- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS + shadcn/ui
- **Data**: Local JSON files (no CMS initially)
- **Deployment**: Vercel (planned)

## Development Commands
```bash
# Project setup (CRITICAL: Never use Turbopack)
npx create-next-app@latest ziffbook-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack

# Development server (verify no Turbopack references)
npm run dev

# Build and test
npm run build
npm run start

# shadcn/ui setup
npx shadcn@latest init
```

## CRITICAL DEVELOPMENT RULES

### 🚨 TURBOPACK PROHIBITION
**NEVER use Turbopack under ANY circumstances.** This causes severe caching issues where file changes are ignored.

- ❌ Forbidden: `next dev --turbopack`
- ❌ Forbidden: Any Turbopack flags in package.json
- ✅ Always use: `next dev`

### Emergency Procedures
If file changes not detected:
1. Kill server: `pkill -f "next dev"`
2. Clear cache: `rm -rf .next`
3. Restart: `npm run dev`
4. Test file change detection

## Architecture

### Project Structure
```
ziffbook-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles + shadcn variables
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Homepage
│   │   └── service/[slug]/      # Service pages
│   ├── components/
│   │   ├── ServiceCard/         # Service showcase (902×552px)
│   │   ├── ProjectCard/         # Project showcase (902×552px)
│   │   └── ui/                  # shadcn/ui components
│   ├── lib/
│   │   ├── utils.ts             # shadcn utilities
│   │   └── data.ts              # Local data management
│   └── data/
│       ├── services.json        # Service definitions
│       └── projects.json        # Project portfolio
├── docs/
│   ├── figma-component-specs.md # Design system specifications
│   └── figma-layout-specs.md    # Layout specifications
└── components.json              # shadcn/ui config
```

### Design System Specifications
- **Colors**: Dark theme (#0f172a background, #E5EDDF text)
- **Components**: Exact 902×552px card dimensions
- **Layout**: 902px max-width content, responsive design
- **Reference**: [Figma Design File](https://www.figma.com/design/aE71e5dkp8QbzxSWNPaa5R/Ziff-Website?node-id=12-206)

### Component Architecture

#### ServiceCard Component (902×552px)
```typescript
interface ServiceCardProps {
  title: string;           // "Service Design + Research"
  tagline: string;         // Quote/tagline text
  description: string;     // Main content description
  idealFor: string[];      // Target audience array
  serviceNumber: string;   // "_01", "_02", etc.
  links: {
    viewWork: string;      // Link to service page
    enquire: string;       // Contact/enquiry link
  };
}
```

#### ProjectCard Component (902×552px)
```typescript
interface ProjectCardProps {
  project_number: number;     // 1, 2, 3, etc.
  client: string;            // Client name
  variant: 'ProjectCover' | '1-1ContentCol' | '3-5ContentCol' | '3-5ImageContent' | 'DesignQuestion';
  content?: string;          // Project description
  cover_image_url?: string;  // Cover image
  project_image_url?: string; // Content images
  hmw_line?: string;         // "How might we..." statement
}
```

### Page Structure
- **Landing Page**: Hero (436px) + About (893px) + Services (3066px)
- **Service Pages**: Header + Project card rows (swipeable)
- **All Pages**: 902px width, consistent header (129px height)

## Data Management
- **Local JSON**: projects.json contains all project data
- **Structure**: Group by service_type, then project_number
- **Variants**: Each project has multiple cards with different layouts
- **Future**: Ready for CMS migration (Sanity/Contentful)

## Development Workflow
1. **Always verify** localhost updates on file save
2. **Reference Figma** for exact measurements and positioning
3. **Test responsive** design maintaining 902px desktop width
4. **Implement pixel-perfect** components matching Figma specs
5. **Use real content** from collected JSON files

## Performance Requirements
- **Static Generation**: Pre-render all content
- **Image Optimization**: Next.js Image component
- **Bundle Size**: Minimal dependencies, tree-shaking enabled
- **Core Web Vitals**: Maintain good performance scores

## Content Strategy
- **Service Cards**: Hardcoded props initially
- **Project Cards**: Dynamic from projects.json
- **Structure**: Service pages group projects by service_type
- **Variants**: Multiple card layouts tell complete project stories

## Quality Standards
- **TypeScript**: Strict mode, no `any` types
- **Pixel Perfect**: Match Figma specifications exactly
- **Responsive**: Mobile-first with 902px desktop
- **Accessibility**: Proper headings, alt text, keyboard navigation
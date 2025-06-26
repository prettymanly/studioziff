# ZiffBook Portfolio - Architecture

## Project Overview
A modern portfolio website showcasing 4 core work types: Research Projects, Futures Projects, AI Projects, and Facilitation Experience. Built with Next.js 15, Tailwind CSS, and shadcn/ui components.

## Technology Stack
- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS + shadcn/ui
- **Data**: Local JSON files
- **Deployment**: Vercel (planned)

## Project Structure
```
ziffbook-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles + shadcn variables
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Homepage
│   │   ├── research-projects/   # Research service page
│   │   ├── futures-projects/    # Futures service page  
│   │   ├── ai-projects/         # AI service page
│   │   └── facilitation-experience/ # Facilitation service page
│   ├── components/
│   │   ├── ServiceCard/         # Service showcase components
│   │   │   ├── ServiceCard.tsx  # Main service card (902×552px)
│   │   │   └── index.ts         # Export barrel
│   │   ├── ProjectCard/         # Project showcase components
│   │   │   ├── ProjectCard.tsx  # Main project card (902×552px)
│   │   │   ├── ContentColumn.tsx
│   │   │   ├── ImageContent.tsx
│   │   │   └── index.ts
│   │   └── ui/                  # shadcn/ui components
│   ├── lib/
│   │   ├── utils.ts             # shadcn utilities
│   │   └── data.ts              # Local data management
│   └── data/
│       ├── services.json        # Service definitions
│       └── projects.json        # Project portfolio
├── docs/
│   ├── figma-component-specs.md # Design system specs
│   └── figma-layout-specs.md    # Layout specifications
├── components.json              # shadcn/ui config
└── package.json                 # NO TURBOPACK EVER
```

## Design System
- **Colors**: Dark theme with #0f172a background, #E5EDDF text
- **Typography**: System fonts, precise Figma specifications
- **Components**: 902×552px cards, consistent spacing
- **Layout**: 902px max-width content, responsive design

## Component Architecture

### ServiceCard Component
```typescript
interface ServiceCardProps {
  title: string;           // "Research Projects"
  tagline: string;         // "Most people skip straight to ideas..."
  description: string;     // Detailed explanation
  idealFor: string[];      // Target audience
  serviceNumber: string;   // "01", "02", etc.
  links: {
    viewWork: string;
    enquire: string;
  };
  questions?: string[];    // Key questions explored
  activities?: string[];   // Activities performed
}
```

### ProjectCard Component
```typescript
interface ProjectCardProps {
  overline: string;        // "01 | CLIENT: NATIONAL CONGLOMERATE"
  title: string;           // Project title
  description: string;     // Project description
  image?: string;          // Optional project image
  tags?: string[];         // Technology/method tags
  link?: string;           // Project detail link
}
```

## Data Management
- **Local JSON**: Simple, fast, no external dependencies
- **Type Safety**: TypeScript interfaces for all data structures
- **Scalable**: Easy to migrate to CMS later if needed

## Development Workflow
1. **Setup**: Fresh Next.js project without Turbopack
2. **Design System**: Implement Figma specifications exactly
3. **Components**: Build reusable, typed components
4. **Content**: Populate with real portfolio data
5. **Testing**: Continuous localhost preview
6. **Deploy**: Vercel deployment

## Performance Considerations
- **Static Generation**: Pre-render all content
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js App Router
- **Bundle Size**: Minimal dependencies, tree-shaking

## Security & Best Practices
- **No Turbopack**: Prevents cache issues
- **Type Safety**: Full TypeScript coverage
- **Linting**: ESLint + Prettier
- **Git Hooks**: Pre-commit validation
- **Environment**: Secure API patterns ready

## Future Enhancements
- **CMS Integration**: Sanity or Contentful
- **Analytics**: Vercel Analytics
- **SEO**: Next.js metadata API
- **Animations**: Framer Motion
- **Testing**: Jest + Testing Library
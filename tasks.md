# ZiffBook Portfolio - Development Tasks

## 🚀 PHASE 1: PROJECT SETUP & LOCALHOST PREVIEW

### Task 1.1: Fresh Project Creation
- [ ] Create new Next.js project: `npx create-next-app@latest ziffbook-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack`
- [ ] **CRITICAL**: Verify package.json has NO Turbopack references
- [ ] Navigate to project directory
- [ ] Install dependencies: `npm install`

### Task 1.2: Immediate Localhost Setup
- [ ] Start development server: `npm run dev`
- [ ] **Verify**: Server starts without Turbopack (should show "Next.js 15.x" not "Next.js 15.x (Turbopack)")
- [ ] Open http://localhost:3000
- [ ] **Confirm**: Default Next.js welcome page loads
- [ ] **Test file change detection**: Edit src/app/page.tsx with simple change
- [ ] **Verify**: Browser updates automatically on save

### Task 1.3: Basic File Change Test
- [ ] Replace src/app/page.tsx content with:
```tsx
export default function Home() {
  return <h1>✅ Portfolio Setup Working! {Date.now()}</h1>;
}
```
- [ ] **Verify**: Browser shows updated content immediately
- [ ] **If not working**: Follow SECURITY_RULES.md emergency procedures

## 🎨 PHASE 2: FIGMA-DRIVEN DESIGN SYSTEM SETUP

### Task 2.1: Figma Reference Integration
- [ ] **REFERENCE FIGMA URL**: https://www.figma.com/design/aE71e5dkp8QbzxSWNPaa5R/Ziff-Website?node-id=12-206&m=dev&t=6gdv8xKRZlRx6UbK-1
- [ ] Extract layout specifications from Figma dev mode:
  - Landing page node (12-206): 902px width structure
  - Header: 129px height
  - Hero: 436px height  
  - Services section: 3066px height
- [ ] **Document**: Create quick reference of exact measurements

### Task 2.2: shadcn/ui Installation
- [ ] Initialize shadcn/ui: `npx shadcn@latest init`
- [ ] Choose: Default style, Slate color, CSS variables
- [ ] **Verify**: components.json created
- [ ] **Verify**: src/lib/utils.ts created
- [ ] **Test localhost**: Ensure setup didn't break development server

### Task 2.3: Base Page Structure from Figma
- [ ] Update src/app/page.tsx to match Figma layout structure:
  - 902px max-width container
  - Header section (129px)
  - Hero section (436px)
  - Services section (placeholder for cards)
- [ ] Implement Figma color scheme:
  - Background: #0f172a (slate-900)
  - Text: #E5EDDF (light green)
- [ ] **Test localhost**: Verify base layout matches Figma proportions
- [ ] **Visual check**: Compare browser layout with Figma design

### Task 2.4: Typography & Spacing from Figma
- [ ] Extract exact typography specifications from Figma:
  - Font sizes, line heights, letter spacing
  - Heading hierarchy and weights
- [ ] Implement precise spacing (49px, 24px, etc.)
- [ ] **Visual test**: Create test components with exact Figma specs
- [ ] **Test localhost**: Verify typography matches Figma exactly

## 📝 PHASE 3: CONTENT COLLECTION & PLANNING

### Task 3.1: Landing Page Content Collection
- [ ] **ASK USER**: Please provide ALL content for the landing page including:
  - Header/navigation text and links
  - Hero section: headline, subheadline, description
  - Introduction/about section text
  - Call-to-action text and button labels
  - Footer content and links
- [ ] **Document**: Save all landing page content in src/data/landing-content.json
- [ ] **Verify**: All text content is complete and ready for implementation

### Task 3.2: Service Pages Content Collection
- [ ] **ASK USER**: Please provide ALL content for each service page:
  - **Research Projects page**: Full description, process, examples, case studies
  - **Futures Projects page**: Complete content, methodology, deliverables
  - **AI Projects page**: All descriptions, capabilities, project examples
  - **Facilitation Experience page**: Full service details, approach, outcomes
- [ ] **Document**: Save each service content in separate JSON files:
  - src/data/research-projects-content.json
  - src/data/futures-projects-content.json
  - src/data/ai-projects-content.json
  - src/data/facilitation-experience-content.json
- [ ] **Verify**: All service page content is complete

### Task 3.3: Project/Portfolio Content Collection
- [ ] **ASK USER**: Please provide ALL project content including:
  - Project titles and descriptions
  - Client names (or anonymized versions)
  - Project categories and tags
  - Case study details and outcomes
  - Image descriptions and alt text
  - Project URLs or portfolio links
- [ ] **Document**: Save all project content in src/data/projects-content.json
- [ ] **Verify**: All project information is complete and organized

### Task 3.4: Additional Pages Content Collection
- [ ] **ASK USER**: Please provide content for any additional pages:
  - About page: Personal bio, background, philosophy
  - Contact page: Contact information, contact form labels
  - Blog/insights pages (if applicable)
  - Any other pages you want to include
- [ ] **Document**: Save additional page content in appropriate JSON files
- [ ] **Create**: Content inventory checklist for implementation phase

## 🧩 PHASE 4: COMPONENT DEVELOPMENT

### Task 4.1: ServiceCard Component from Figma
- [ ] **Reference**: Figma ServiceCard node specifications
- [ ] Create src/components/ServiceCard/ServiceCard.tsx
- [ ] Implement exact Figma specifications:
  - 902×552px dimensions
  - Dark background (#0f172a)
  - Light text (#E5EDDF)
  - Precise positioning: service number at top-left (49px, 49px)
  - Content positioning and typography matching Figma
- [ ] **Test localhost**: View ServiceCard in isolation
- [ ] **Visual verification**: Side-by-side comparison with Figma design

### Task 4.2: ServiceCard Content Integration
- [ ] **Use collected content**: Integrate real content from Task 3.2 into ServiceCard
- [ ] Implement dynamic content loading from JSON files
- [ ] Update homepage to display ServiceCard with user-provided content
- [ ] **Test localhost**: Verify full ServiceCard renders with real content
- [ ] **Pixel-perfect check**: Ensure 902×552px dimensions and positioning

### Task 4.3: Multiple Service Cards Layout
- [ ] Reference Figma services section layout
- [ ] Create all 4 service cards using collected content:
  - 01 | Research Projects (user-provided content)
  - 02 | Futures Projects (user-provided content)
  - 03 | AI Projects (user-provided content)
  - 04 | Facilitation Experience (user-provided content)
- [ ] Implement proper spacing between cards (from Figma)
- [ ] **Test localhost**: View all 4 service cards with real content
- [ ] **Layout verification**: Match Figma services section exactly

## 📱 PHASE 5: PROJECT CARDS FROM FIGMA

### Task 5.1: ProjectCard Architecture
- [ ] **Reference**: Figma ProjectCard specifications (all 5 variants)
- [ ] Create src/components/ProjectCard/ProjectCard.tsx
- [ ] Implement 5 layout variants from Figma specs:
  - Extract exact dimensions and positioning for each variant
- [ ] Add TypeScript interfaces matching collected project content
- [ ] **Test localhost**: Create sample ProjectCard

### Task 5.2: ProjectCard Content Integration
- [ ] **Use collected content**: Integrate real project content from Task 3.3
- [ ] Implement all 5 Figma variants with user-provided content:
  - Project Cover (using real client names from user)
  - 1-1 Content Column (with actual project descriptions)
  - Design Question (using real project questions)
  - Image Content (with user-provided image descriptions)
  - One-One Column (with actual project details)
- [ ] **Visual testing**: Compare each variant with Figma side-by-side
- [ ] **Test localhost**: Cycle through all variants with real content
- [ ] **Precision check**: Verify all measurements match Figma

## 🎯 PHASE 6: FULL CONTENT IMPLEMENTATION

### Task 6.1: Landing Page Content Implementation
- [ ] **Use collected content**: Implement all landing page content from Task 3.1
- [ ] Update src/app/page.tsx with user-provided:
  - Hero section text and headlines
  - Introduction/about section
  - Navigation and footer content
- [ ] **Test localhost**: Verify all landing page content displays correctly
- [ ] **Content audit**: Ensure all user-provided content is represented accurately

### Task 6.2: Service Pages Content Implementation
- [ ] **Use collected content**: Create individual service pages with user-provided content
- [ ] Create route pages:
  - src/app/research-projects/page.tsx
  - src/app/futures-projects/page.tsx
  - src/app/ai-projects/page.tsx
  - src/app/facilitation-experience/page.tsx
- [ ] Implement all user-provided service descriptions and details
- [ ] **Test localhost**: Navigate to each service page and verify content
- [ ] **Content verification**: Ensure all service information matches user input

### Task 6.3: Additional Pages Implementation
- [ ] **Use collected content**: Implement all additional pages from Task 3.4
- [ ] Create pages for:
  - About page (with user bio and background)
  - Contact page (with user contact information)
  - Any other pages specified by user
- [ ] **Test localhost**: Verify all additional pages work correctly
- [ ] **Navigation setup**: Ensure all pages are properly linked

## 🔧 PHASE 7: POLISH & OPTIMIZATION

### Task 7.1: Responsive Design
- [ ] Reference Figma responsive specifications if available
- [ ] Test on mobile devices with all user content
- [ ] Implement responsive breakpoints maintaining 902px desktop
- [ ] **Test localhost**: Verify mobile experience with real content

### Task 7.2: Final Content & Figma Alignment
- [ ] Complete pixel-perfect audit against Figma with all real content
- [ ] Verify all colors match exactly
- [ ] Check all spacing and typography with user-provided text
- [ ] **Final localhost review**: Side-by-side Figma comparison with complete content
- [ ] **Content final check**: Ensure all user-provided content is implemented correctly

## 📋 CONTINUOUS VERIFICATION

### After Each Task:
- [ ] **Localhost check**: Ensure changes appear immediately
- [ ] **No Turbopack**: Verify server shows "Next.js 15.x" (not Turbopack)
- [ ] **File change test**: Make small edit and confirm auto-refresh
- [ ] **Figma comparison**: Check against design specifications
- [ ] **Content accuracy**: Ensure user-provided content displays correctly
- [ ] **Visual accuracy**: Ensure pixel-perfect implementation

### Daily Checklist:
- [ ] Development server responsive to changes
- [ ] No console errors in browser
- [ ] Components match Figma exactly
- [ ] All user-provided content displays correctly
- [ ] TypeScript compilation clean
- [ ] All measurements precise (902×552px, etc.)

### Emergency Protocols:
If localhost stops updating:
1. Check SECURITY_RULES.md emergency procedures
2. Kill server: `pkill -f "next dev"`
3. Clear cache: `rm -rf .next`
4. Restart: `npm run dev`
5. Test file change detection
6. If still failing: Create fresh project in new directory

---

**Key Success Metrics:**
- ✅ Localhost updates immediately on file save
- ✅ Components match Figma specifications pixel-perfectly
- ✅ No Turbopack references anywhere
- ✅ Dark theme with accurate Figma colors (#0f172a, #E5EDDF)
- ✅ Exact 902×552px component dimensions
- ✅ ALL user-provided content implemented accurately across all pages
- ✅ Base page structure matches Figma layout proportions
- ✅ Complete portfolio content from user displays correctly


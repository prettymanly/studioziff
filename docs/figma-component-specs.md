# Figma Component Specifications

Extracted from Ziff Website Figma file: [aE71e5dkp8QbzxSWNPaa5R](https://www.figma.com/design/aE71e5dkp8QbzxSWNPaa5R/Ziff-Website)

## 🎯 ServiceCard Component

**Dimensions:** 902×552px  
**Type:** COMPONENT  
**Source:** Landing page Services Container

### Component Structure:
```
ServiceCard_Component (COMPONENT) [902×552px]
├── Service Design Background (RECTANGLE)
├── Service Design Subtitle (TEXT)
├── Quote Text (TEXT)
├── Content_Container (FRAME)
│   ├── Description (TEXT)
│   └── Notes_Container (FRAME)
├── Ideal_Container (FRAME)
│   ├── Ideal_title (TEXT)
│   └── Ideal_for (TEXT)
└── Service Number (TEXT)
```

### Content Specifications:

#### Service Title
- **Text:** "Service Design + Research"
- **Element:** Service Design Subtitle

#### Quote/Tagline
- **Text:** "Most people skip straight to ideas. I help you slow down and see where the story really begins."
- **Element:** Quote Text

#### Description
- **Text:** "Making Sense, Together. Whether you're launching a new product or trying to fix what's not working, real insight beats guesswork. I help lean teams understand what matters most to their users. We'll unpack what's motivating them, where they're stuck, and what they'll actually pay for, so you can move faster, smarter. Think of it as... Strategic research without the fluff. We get close to your customers, make sense of their world, and translate that into sharp, usable direction for product, service, or messaging."
- **Element:** Description (in Content_Container)

#### Ideal For Section
- **Title:** "Ideal for:"
- **Content:** "Startup founders, SME teams, product owners, L&D teams, innovation leads"
- **Element:** Ideal_Container

#### Service Number
- **Text:** "_01"
- **Element:** Service Number

### ServiceCard Props Interface:
```typescript
interface ServiceCardProps {
  title: string;           // "Service Design + Research"
  tagline: string;         // Quote text
  description: string;     // Main content description
  idealFor: string[];      // Array of target audiences
  serviceNumber: string;   // "_01", "_02", etc.
  links: {
    viewWork: string;      // Link to service page
    enquire: string;       // Contact/enquiry link
  };
}
```

## 🎯 ProjectCard Component

**Dimensions:** 902×552px  
**Type:** INSTANCE (of Project_Component)  
**Source:** Service Design page project rows

### Component Structure:
```
Project_Component (INSTANCE) [902×552px]
├── Background (RECTANGLE)
├── Quote Text (TEXT)
└── Project Card (FRAME)
    ├── Left Container (FRAME)
    │   ├── Frame 21 (FRAME)
    │   │   ├── Overline (TEXT)
    │   │   └── Content Container (FRAME)
    │   └── CTA (TEXT)
    └── Image (RECTANGLE)
```

### Content Specifications:

#### Project Overline
- **Text:** "01 | CLIENT: NATIONAL CONGLOMERATE, PHILIPPINES"
- **Format:** {project_number} | CLIENT: {client_name}
- **Element:** Overline

#### Call to Action
- **Text:** "Swipe to read the case →"
- **Element:** CTA

#### Layout Structure:
- **Left Container:** Text content and details
- **Image:** Project visual/cover image (902×552px area)

### ProjectCard Props Interface:
```typescript
interface ProjectCardProps {
  project_number: number;     // 1, 2, 3, etc.
  client: string;            // "NATIONAL CONGLOMERATE, PHILIPPINES"
  variant: 'ProjectCover' | '1-1ContentCol' | '3-5ContentCol' | '3-5ImageContent' | 'DesignQuestion';
  content?: string;          // Project description
  cover_image_url?: string;  // Cover image
  project_image_url?: string; // Content images
  hmw_line?: string;         // "How might we..." statement
}
```

## 🎨 Design Specifications

### Dimensions & Layout:
- **Standard Width:** 902px (consistent across all components)
- **Standard Height:** 552px (both ServiceCard and ProjectCard)
- **Component Ratio:** ~1.63:1 (landscape orientation)

### Component Variants Identified:

#### ServiceCard (Single variant):
- Service title + tagline
- Description content
- Ideal for section
- Service number
- Background styling

#### ProjectCard (Multiple variants):
1. **ProjectCover:** Main project introduction with image and overline
2. **ContentCol:** Text-heavy content sections
3. **ImageContent:** Image + content combinations
4. **DesignQuestion:** "How might we..." sections

### Layout Patterns:
- **Left-Right Split:** Content on left, image on right
- **Swipeable Rows:** Multiple cards in horizontal scroll
- **Consistent Spacing:** Maintained across all card types

## 🔄 Component Relationships

### ServiceCard Usage:
- 4 instances on landing page (Services Container)
- Each represents a different service offering
- Links to corresponding service page

### ProjectCard Usage:
- Multiple instances per service page
- Grouped in swipeable rows (Frame 17, 18, 19)
- Different variants tell complete project story

## 📋 Implementation Notes

### Responsive Considerations:
- Desktop: 902px width as designed
- Mobile: Scale down maintaining aspect ratio
- Tablet: Intermediate sizing

### Content Management:
- ServiceCard: Hardcoded props initially
- ProjectCard: Driven by projects.json data
- Future: CMS integration possible

### Accessibility:
- Ensure proper heading hierarchy
- Alt text for images
- Keyboard navigation for swipeable rows
- Screen reader friendly content structure

---

**Generated:** 2025-06-18  
**Source:** Figma API extraction from live design file 
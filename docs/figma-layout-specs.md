# Figma Layout Specifications

Extracted from Ziff Website Figma file: [aE71e5dkp8QbzxSWNPaa5R](https://www.figma.com/design/aE71e5dkp8QbzxSWNPaa5R/Ziff-Website)

## 📄 Landing Page Layout (node-id: 12-206)

**Frame:** "Frame 16" (FRAME)
**URL:** https://www.figma.com/design/aE71e5dkp8QbzxSWNPaa5R/Ziff-Website?node-id=12-206

### Structure Hierarchy:
```
Frame 16 (FRAME)
└── Main Container (FRAME)
    ├── Header (FRAME) [902×129px]
    └── Content Container (FRAME) [902×4515px]
        ├── Intro Section (FRAME) [902×436px]
        ├── About Section (FRAME) [902×893px]
        └── Services Container (FRAME) [902×3066px]
```

### Layout Specifications:
- **Total Canvas Width:** 902px
- **Header Height:** 129px
- **Content Sections:**
  - Intro Section: 436px height (Hero area)
  - About Section: 893px height
  - Services Container: 3,066px height (Main service cards area)

## 📄 Service Design Page Layout (node-id: 12-211)

**Frame:** "SERVICE DESIGN PORTFOLIO" (FRAME)
**URL:** https://www.figma.com/design/aE71e5dkp8QbzxSWNPaa5R/Ziff-Website?node-id=12-211

### Structure Hierarchy:
```
SERVICE DESIGN PORTFOLIO (FRAME)
├── Header (FRAME)
└── Content Container (FRAME)
```

### Layout Specifications:
- **Consistent Width:** 902px (matches landing page)
- **Header:** Standard header component (reused from landing)
- **Content Container:** Project cards and portfolio content

## 🎯 Key Design Patterns Identified

### 1. **Consistent Layout Width**
- All pages use 902px width
- Consistent header height of 129px
- Modular section-based layout

### 2. **Landing Page Structure**
- **Hero Section** (Intro): 436px height
- **About Section**: 893px height  
- **Services Section**: 3,066px height (likely 4 service cards)

### 3. **Service Page Structure**
- **Header**: Consistent with landing page
- **Content Container**: Project card showcase area

## 🧩 Component Architecture

Based on the extracted structure, the component hierarchy should be:

### Landing Page Components:
1. **Header Component** (129px height)
2. **Intro/Hero Section** (436px height)
3. **About Section** (893px height)
4. **Services Container** (3,066px height)
   - Contains 4 ServiceCard components
   - Each service card: ~766px height (3,066 ÷ 4)

### Service Page Components:
1. **Header Component** (reused)
2. **Content Container**
   - Project cards in swipeable rows
   - Multiple ProjectCard variants

## 📱 Responsive Considerations

- **Desktop Width:** 902px (as designed)
- **Mobile:** Will need responsive breakpoints
- **Tablet:** Intermediate sizing

## 🎨 Next Steps

1. Extract ServiceCard component specifications
2. Extract ProjectCard variant specifications  
3. Identify typography and color tokens
4. Document spacing and layout rules

---

**Generated:** 2025-06-18
**Source:** Figma API extraction from live design file 
# CLAUDE.md - Precisian Landing Page

This file provides guidance to Claude Code when working with this repository.

## Project Overview

**Precisian** is a marketing/landing page for an AI-powered GA4 data integrity platform by Nação Digital (FCamara group). The site showcases the DVQ (Data Value Quotient) framework and operating modules.

**Domain**: https://precisian.io

## Commands

```bash
npm run dev       # Start dev server on http://localhost:8080
npm run build     # Production build to dist/
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

## Architecture

### Routing
All routes defined in [src/App.tsx](src/App.tsx) using React Router:

| Route | Page | Description |
|-------|------|-------------|
| `/` | Index | Homepage with all sections |
| `/precisian-events` | PrecisianEvents | Events tracking product |
| `/precisian-sku` | PrecisianSKU | Catalog intelligence |
| `/precisian-core` | PrecisianCore | Data reconciliation |
| `/precisian-attribution` | PrecisianAttribution | MMM & Attribution |
| `/ga4-optimization` | GA4Optimization | GA4 services |
| `/gtm-setup` | GTMSetup | GTM implementation |
| `/intelligence-partner` | IntelligencePartner | Partnership model |
| `/sobre-nos` | SobreNos | About us |
| `/tech-demo` | TechDemo | Tech UI components demo |

### Component Structure
```
src/
├── components/
│   ├── home/           # Homepage sections (Hero, Methodology, Services)
│   ├── layout/         # Navbar, Footer, Layout wrapper
│   ├── tech/           # Cyberpunk/tech UI components
│   │   ├── GlowCard.tsx        # Glowing card component
│   │   ├── TerminalHero.tsx    # Terminal-style hero
│   │   ├── NeonText.tsx        # Neon text effects
│   │   └── StatusBadge.tsx     # Status indicators
│   ├── interactive/    # Interactive components
│   │   ├── ROICalculator.tsx   # ROI calculator
│   │   ├── DVQStepper.tsx      # DVQ framework stepper
│   │   └── CaseStudiesGrid.tsx # Case studies
│   ├── forms/          # Form components
│   │   ├── ContactForm.tsx
│   │   └── LeadQualificationForm.tsx
│   ├── services/       # Service page components
│   └── ui/             # shadcn/ui primitives
├── pages/              # Route page components
├── hooks/
│   └── tech/           # Tech-specific hooks (typing effect, motion)
├── services/           # API services
│   ├── analytics.ts    # Analytics tracking
│   ├── crm.ts          # CRM integration
│   └── email.ts        # Email service
├── store/              # Zustand stores
│   ├── leadStore.ts    # Lead management
│   ├── calculatorStore.ts
│   └── uiStore.ts
├── styles/             # Global CSS
│   ├── animations.css  # Custom animations
│   └── cyberpunk.css   # Tech theme styles
├── types/              # TypeScript types
└── utils/              # Helpers, constants, validation
```

### Layout Pattern
Pages use `Layout` component which wraps content with `Navbar` and `Footer`:
```tsx
import Layout from "@/components/layout/Layout";

const Page = () => (
  <Layout>
    <YourContent />
  </Layout>
);
```

## Tech Stack

| Tech | Purpose |
|------|---------|
| **Vite + SWC** | Build tool (fast HMR) |
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | Radix-based components |
| **Zustand** | State management |
| **React Hook Form + Zod** | Forms & validation |
| **Lucide React** | Icons |

## Key Concepts

### DVQ Framework (Data Value Quotient)
Proprietary 5-pillar framework:
1. Full Journey Mapping
2. Data Integration & Centralization
3. Data Governance & Availability
4. Smart Attribution Modeling
5. Real-time & Predictive Insights

### GEO (Generative Engine Optimization)
Site optimized for LLM visibility with JSON-LD schemas in [index.html](index.html):
- Organization Schema (Precisian → Nação Digital → FCamara)
- SoftwareApplication Schema
- FAQPage Schema (5 key questions)
- HowTo Schema (5-step DVQ implementation)
- WebSite Schema

## Styling

### Theme Colors
Defined in [src/index.css](src/index.css):
- Primary: Pink/Magenta (#fd68b3)
- Background: Near-black (#030303)
- Text: White with opacity variations

### Custom Animations
In [tailwind.config.ts](tailwind.config.ts):
- `float` - Floating effect
- `pulse-glow` - Glowing pulse
- `scroll-up` - Scroll reveal

### Tech/Cyberpunk Theme
CSS in [src/styles/cyberpunk.css](src/styles/cyberpunk.css):
- Grid patterns
- Glow effects
- Terminal aesthetics

## Path Aliases

Uses `@/*` alias pointing to `src/*`:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

## Adding Components

### shadcn/ui
```bash
npx shadcn@latest add <component-name>
```

### Custom Tech Components
Add to `src/components/tech/` and export from `src/components/tech/index.ts`

## Deployment

### Production (VPS)
```bash
npm run build
rsync -avz --delete dist/ user@vps:/var/www/precisian.io/
```

### Nginx Config
Critical: SPA routing requires `try_files $uri $uri/ /index.html;`

## Related Projects

| Project | Purpose |
|---------|---------|
| **nd-trusty** | AuditOS - GA4 Audit SaaS Platform |
| **precisian-insight-forge** | This repo - Landing page |

## Important Notes

1. **No backend** - Pure static site
2. **Forms** - Currently simulated (integrate with CRM/email service)
3. **Analytics** - Ready for GA4 integration in `src/services/analytics.ts`
4. **SEO/GEO** - All schemas in index.html, update URLs after deployment

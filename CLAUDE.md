# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Precisian Insight Forge is a marketing website for Precisian, a data analytics company. Built with Vite, React, TypeScript, and shadcn/ui, it showcases services like GA4 optimization, GTM setup, data visualization, and proprietary products (Precisian Events, SKU, Core, Attribution).

## Commands

```bash
npm run dev       # Start dev server on http://localhost:8080
npm run build     # Production build to dist/
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

## Architecture

### Routing
All routes defined in [App.tsx](src/App.tsx) using React Router. Each page maps to a file in `src/pages/`:

| Route | Page |
|-------|------|
| `/` | Index (Home) |
| `/precisian-events` | PrecisianEvents |
| `/precisian-sku` | PrecisianSKU |
| `/precisian-core` | PrecisianCore |
| `/precisian-attribution` | PrecisianAttribution |
| `/ga4-optimization` | GA4Optimization |
| `/ga360` | GA360 |
| `/gtm-setup` | GTMSetup |
| `/google-meridian` | GoogleMeridian |
| `/data-visualization` | DataVisualization |
| `/ai-insights` | AIInsights |
| `/adtechs` | AdTechs |
| `/intelligence-partner` | IntelligencePartner |
| `/sobre-nos` | SobreNos |

### Component Structure
```
src/
├── components/
│   ├── home/          # Homepage sections (Hero, Services, Partners, etc.)
│   ├── layout/        # Navbar, Footer, Layout wrapper
│   ├── services/      # Service page components (flowcharts, case studies)
│   └── ui/            # shadcn/ui primitives
├── hooks/             # Custom hooks (use-mobile, use-toast)
├── lib/               # Utilities (cn function for classnames)
└── pages/             # Route page components
```

### Layout Pattern
Pages use `Layout` component from [src/components/layout/Layout.tsx](src/components/layout/Layout.tsx) which wraps content with `Navbar` and `Footer`.

## Tech Stack

- **Build**: Vite with SWC (fast React refresh)
- **UI**: shadcn/ui components with Radix primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Fonts**: Inter (body), Sora (display)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **State**: TanStack Query (available but minimally used)

## Key Files

- [TEXTOS-SITE.md](TEXTOS-SITE.md) - All website copy organized by page/section (Portuguese)
- [components.json](components.json) - shadcn/ui configuration
- [tailwind.config.ts](tailwind.config.ts) - Custom animations (`float`, `pulse-glow`, `scroll-up`)

## Path Aliases

Uses `@/*` alias pointing to `src/*`:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

## Adding shadcn Components

```bash
npx shadcn@latest add <component-name>
```

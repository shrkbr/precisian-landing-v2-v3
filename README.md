# Precisian - AI-Powered GA4 Audit Platform

> **DVQ Framework** - Data Value Quotient for Decision Integrity

Precisian is an AI-powered data integrity platform by [Nação Digital](https://nacaodigital.com) (FCamara group) that audits, validates, and orchestrates GA4 analytics data.

## Live Site

- **Production**: https://precisian.io
- **Preview**: https://precisian-insight-forge.lovable.app

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Vite** | Build tool with SWC |
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **shadcn/ui** | Component library |
| **Zustand** | State management |
| **React Hook Form + Zod** | Forms & validation |

## Project Structure

```
src/
├── components/
│   ├── home/           # Homepage sections
│   ├── layout/         # Navbar, Footer, Layout
│   ├── tech/           # Tech/cyberpunk UI components
│   ├── interactive/    # ROI Calculator, DVQ Stepper
│   ├── forms/          # Contact, Lead qualification
│   └── ui/             # shadcn/ui primitives
├── pages/              # Route pages
├── hooks/              # Custom hooks
├── services/           # API services (CRM, email, analytics)
├── store/              # Zustand stores
├── styles/             # Global CSS (animations, cyberpunk)
├── types/              # TypeScript types
└── utils/              # Helpers, constants, validation
```

## Key Features

### DVQ Framework (Data Value Quotient)
Proprietary decision integrity framework with 5 pillars:
1. **Full Journey Mapping** - Micro-events from first touch to post-purchase
2. **Data Integration** - Single source of truth across GA4, ERP, CRM
3. **Data Governance** - GDPR-compliant with encryption by design
4. **Smart Attribution** - Beyond last-click with Marketing Mix Modeling
5. **Real-time Insights** - AI analyst available 24/7

### Operating Modules
- **Precisian Journey** - End-to-end customer journey mapping
- **Precisian Catalog** - Universal feed management (Google, Meta, TikTok)
- **Precisian Core** - GA4-ERP reconciliation layer
- **Precisian Attribution & MMM** - Marketing Mix Modeling
- **Precisian Clarity** - 24/7 AI-powered insights

### GEO Optimization (Generative Engine Optimization)
Site optimized for LLM visibility with:
- JSON-LD schemas (Organization, FAQ, HowTo, WebSite)
- Entity-rich meta descriptions
- Semantic HTML5 structure
- Quotable content blocks

## Deployment

### VPS Deployment

```bash
# 1. Build locally
npm run build

# 2. Upload to VPS
rsync -avz --delete dist/ user@vps:/var/www/precisian.io/

# 3. Nginx config (SPA routing required!)
server {
    listen 80;
    server_name precisian.io www.precisian.io;
    root /var/www/precisian.io;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}

# 4. SSL with Certbot
sudo certbot --nginx -d precisian.io -d www.precisian.io
```

### Vercel/Netlify
Connect GitHub repo for automatic deployments.

## Environment Variables

No environment variables required for the landing page.

## Related Projects

| Project | Description | Repo |
|---------|-------------|------|
| **AuditOS** | GA4 Audit SaaS Platform | [nd-trusty](https://github.com/shrkbr/nd-trusty) |
| **Precisian** | Landing Page (this repo) | precisian-insight-forge |

## Development with Lovable

This project was bootstrapped with [Lovable](https://lovable.dev).

- **Lovable Project**: https://lovable.dev/projects/ca098d43-286a-4ca2-b3ec-8af987188389
- Changes via Lovable auto-commit to this repo
- Local changes push back to Lovable

## License

Proprietary - Nação Digital Solutions S.A.

---

**A product by [Nação Digital](https://nacaodigital.com)** | Part of FCamara Group

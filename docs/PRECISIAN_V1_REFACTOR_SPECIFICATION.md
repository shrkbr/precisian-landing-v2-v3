# Precisian V1 Refactor - Especificação Técnica

**Data:** 29/12/2024
**Versão:** 1.0.0
**Status:** Aguardando Aprovação

---

## 1. Pesquisa & Benchmark

### 1.1 Panorama do Mercado

Análise do mercado de data analytics e marketing attribution revela oportunidade significativa para diferenciação visual e experiencial:

**Concorrentes Mapeados:**
- **Funnelytics**: Visualização de funis, UX tradicional
- **Triple Whale**: E-commerce analytics, interface clean
- **Northbeam**: MMM attribution, corporate standard
- **Rockerbox**: Enterprise attribution, sem diferenciação visual

### 1.2 Concorrentes Analisados

| Concorrente | Pontos Fortes | Pontos Fracos | Oportunidade |
|-------------|---------------|---------------|--------------|
| Funnelytics | Visualização clara | Interface genérica | Visual differentiation |
| Triple Whale | UX polida | Limitado ao e-commerce | Mercado brasileiro |
| Northbeam | Enterprise ready | Sem metodologia própria | DVQ framework |
| Rockerbox | Dados robustos | Experiência fria | Diagnostic experience |

### 1.3 Gaps Exploráveis

1. **Visual Differentiation**: Todos usam interfaces "clean" corporativas - tech aesthetic é diferencial único
2. **Proprietary Framework**: Concorrentes usam frameworks genéricos - DVQ como metodologia registrada
3. **Interactive Diagnostic**: Nenhum oferece experiência imersiva de diagnóstico em tempo real
4. **Brazilian Focus**: Cases locais + entendimento de compliance brasileiro
5. **Pricing Transparency**: Maioria esconde pricing - diagnostic gratuito como lead magnet

**Benchmarks Visuais para DVQ:**
- AWS Architecture Center (flow diagrams)
- Figma System Design (connection patterns)
- Linear Product Flow (minimal expressiveness)

---

## 2. PRD - Documento de Produto

### 2.1 Problema

Empresas brasileiras tomam decisões de marketing baseadas em dados fragmentados, enviesados e incompletos. Discrepâncias de 47%+ entre plataformas resultam em desperdício de budget e ROI sub-otimal.

### 2.2 Objetivos V1

**Primários:**
1. **Lead Generation**: Capturar 100+ leads qualificados/mês via diagnostic
2. **Brand Positioning**: Estabelecer DVQ™ como metodologia proprietária reconhecível
3. **Market Differentiation**: Posicionar como tech-first vs. consultoria tradicional
4. **Sales Funnel**: Direcionar prospects para service pages específicas baseado em dor

**Secundários:**
1. **Thought Leadership**: Conteúdo educativo sobre data integrity
2. **Partnership Validation**: Showcase de certificações Google/Meta
3. **Case Study Leverage**: Demonstrar ROI com clientes existentes

### 2.3 Público-Alvo

**Primário:**
- **CMOs/VPs Marketing**: Empresas 50M+ faturamento
- **Heads de Performance**: E-commerce/D2C companies
- **Analytics Managers**: Empresas data-driven

**Secundário:**
- **C-Level**: Decision makers para investimento tech
- **Consultores/Agências**: Parceiros potenciais

### 2.4 User Stories

| ID | Como... | Quero... | Para... | Critérios de Aceite |
|----|---------|----------|---------|---------------------|
| US-01 | CMO | Entender gaps dos meus dados | Tomar decisão sobre investimento | Modal diagnostic completo em <10s + resultado preliminar |
| US-02 | Head Performance | Ver cases similares ao meu setor | Validar ROI do approach | Service pages com cases detalhados + métricas |
| US-03 | C-Level | Entender metodologia DVQ | Avaliar fornecedor tecnológico | DVQ diagram compreensível em <5s sem hover |
| US-04 | Analytics Manager | Agendar diagnóstico completo | Resolver problema técnico específico | CTA claro + form otimizado + follow-up automatizado |
| US-05 | Prospect | Navegar entre problemas | Encontrar solução específica | Problem library com navegação intuitiva |

### 2.5 MVP vs Full Scope

**MVP (Janeiro 2025):**
- [x] Home page V1 com nova estrutura sequencial
- [x] DVQ diagram interativo (SVG responsivo)
- [x] 3 service pages principais (Journey, Catalog, Core)
- [x] Diagnostic modal 3-step experience
- [x] Lead capture + basic analytics tracking
- [x] Video manifesto integration

**Full Scope (Q2 2025):**
- [ ] Additional service pages (Attribution, Insights)
- [ ] Advanced diagnostic with real-time platform integration
- [ ] CRM integration + lead scoring
- [ ] A/B testing framework
- [ ] Multi-language support

### 2.6 KPIs de Sucesso

**Conversão:**
- Diagnostic completion rate: >60%
- Email capture rate: >40%
- Service page CTR: >8%

**Engajamento:**
- DVQ section time: >15s
- Video completion rate: >70%
- Page scroll depth: >80%

**Qualidade:**
- Bounce rate: <30%
- Corporate email %: >85%
- Lead-to-meeting rate: >15%

---

## 3. UX - Fluxos & Wireframes

### 3.1 Jornada Principal

```
Landing → Video Manifesto → DVQ Understanding → Problem Identification → Service Deep Dive → Diagnostic CTA → Lead Captured → Sales Contact
```

**Fluxos Alternativos:**
- Direct CTA → Diagnostic → Service Page Selection
- Problem Library → Service Page → Diagnostic
- External Traffic → Service Page → Home → Diagnostic

### 3.2 Wireframes Textuais

#### Home Page V1 (Ordem Fixa):
```
┌─────────────────────────────────────┐
│ Navbar (minimal, tech aesthetic)    │
├─────────────────────────────────────┤
│ HERO SECTION                        │
│ "Seus dados de marketing            │
│  estão mentindo para você"          │
│ "47% de discrepância é comum"       │
│ [Run Diagnostic] (primary CTA)      │
├─────────────────────────────────────┤
│ MANIFESTO VIDEO SECTION             │
│ Video player (poster + lazy load)   │
│ "Por que dados não são neutros"     │
├─────────────────────────────────────┤
│ DVQ METHODOLOGY SECTION             │
│ "Data Value Quotient™"              │
│ "Proprietary framework by ND"       │
│ [Interactive SVG Diagram]           │
│ 6 layers showing flow               │
├─────────────────────────────────────┤
│ CLIENT LOGOS SECTION                │
│ "Quem já descobriu seu DVQ"         │
│ Logo grid with status indicators    │
├─────────────────────────────────────┤
│ PROBLEM LIBRARY SECTION             │
│ "Identify Your Biggest Gap"         │
│ [Card: Journey Blind Spots] →       │
│ [Card: Catalog Chaos] →             │
│ [Card: Attribution Gaps] →          │
├─────────────────────────────────────┤
│ PARTNERS SECTION                    │
│ "Certified & Integrated"            │
│ Google • Meta • Microsoft logos     │
├─────────────────────────────────────┤
│ FINAL CTA SECTION                   │
│ "Ready to discover your DVQ?"       │
│ [Run Diagnostic] (secondary CTA)    │
└─────────────────────────────────────┘
```

#### Service Page Template:
```
┌─────────────────────────────────────┐
│ HERO: PROBLEM HEADLINE              │
│ "You can't see which channel        │
│  brought 40% of your revenue"       │
│ Brief problem description           │
├─────────────────────────────────────┤
│ BENEFIT SECTION                     │
│ "What changes when you solve this"  │
│ 3 key benefits with metrics        │
├─────────────────────────────────────┤
│ SOLUTION: HOW WE SOLVE              │
│ Technical approach:                 │
│ • Implementation step 1             │
│ • Implementation step 2             │
│ • Implementation step 3             │
├─────────────────────────────────────┤
│ SYSTEM DIAGRAM                      │
│ Mini technical flow (SVG)          │
│ Show data flow + integrations       │
├─────────────────────────────────────┤
│ CASE STUDY SECTION                  │
│ Client logo + sector               │
│ Challenge → Solution → Results      │
│ Metrics with before/after          │
├─────────────────────────────────────┤
│ CTA SECTION                         │
│ "Get your diagnostic"               │
│ [Run Diagnostic] (primary)          │
└─────────────────────────────────────┘
```

#### Diagnostic Modal (3 Steps):
```
Step 1: Data Collection
┌─────────────────────────────────────┐
│ "DVQ Diagnostic - Step 1/3"         │
│ "Basic Information"                 │
│                                     │
│ Website URL:                        │
│ [https://_______________]           │
│                                     │
│ Primary Platform:                   │
│ [▼ Google Ads ▼]                   │
│                                     │
│ Corporate Email:                    │
│ [@company.com required]             │
│                                     │
│ [Start Scan] [Cancel]               │
└─────────────────────────────────────┘

Step 2: Terminal Scan (6-10s)
┌─────────────────────────────────────┐
│ $ precisian scan --url example.com  │
│ ⏳ Initializing diagnostic...       │
│ ✓ Checking GA4 configuration...     │
│ ✓ Analyzing conversion tracking...   │
│ ⚠ Attribution gaps detected...      │
│ ✓ Platform integrations found...    │
│ ❌ Cross-device tracking missing... │
│ ⚠ Offline data not connected...    │
│ ⏳ Calculating DVQ score...         │
│ ✓ Diagnostic complete              │
└─────────────────────────────────────┘

Step 3: Preliminary Result
┌─────────────────────────────────────┐
│ "Preliminary DVQ Risk Assessment"   │
│                                     │
│ ⚠ RISK LEVEL: HIGH                 │
│                                     │
│ Top 3 Failure Modes Detected:      │
│ 1. Attribution gaps (47% loss)      │
│ 2. Cross-platform discrepancy       │
│ 3. Offline data missing             │
│                                     │
│ Potential Revenue Impact:           │
│ ~R$ 175k/month invisible            │
│                                     │
│ [Get Full Report] [Schedule Call]   │
│ [Close]                             │
└─────────────────────────────────────┘
```

### 3.3 Estados de UI

**Loading States:**
- Video: Poster image + play button overlay
- SVG diagram: Progressive render with skeleton
- Modal scan: Real-time log output
- Form submission: Button spinner + disabled state

**Error States:**
- Video load error: Static image fallback
- SVG error: Static PNG fallback
- Form validation: Inline field errors
- API error: Retry option + support contact

**Empty States:**
- No diagnostic history: "Run your first diagnostic"
- No video support: Static image + description

**Success States:**
- Form submitted: Confirmation message + next steps
- Diagnostic completed: Clear result presentation
- CTA clicked: Visual feedback + loading state

---

## 4. Arquitetura Técnica

### 4.1 Stack (Mantendo Existente)

**Frontend:**
- React 18 + TypeScript + Vite (SWC)
- UI: shadcn/ui + Tailwind CSS
- Animations: Framer Motion
- Routing: React Router DOM
- State: Zustand
- Forms: React Hook Form + Zod
- Icons: Lucide React

**Build & Deploy:**
- Vite build → Static files
- VPS deployment via rsync
- Nginx SPA routing config

### 4.2 Modelo de Dados

#### DiagnosticSubmission
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| id | string (UUID) | ✓ | Unique identifier |
| url | string | ✓ | Website URL (validated) |
| platform | enum | ✓ | 'google-ads', 'meta', 'tiktok', 'other' |
| email | string | ✓ | Corporate email (.com domain) |
| risk_level | enum |   | 'low', 'medium', 'high' |
| failure_modes | array |   | Detected issues list |
| revenue_impact | string |   | Estimated monthly loss |
| created_at | timestamp | ✓ | ISO string |
| utm_source | string |   | Attribution tracking |
| page_source | string |   | Originating page |

#### AnalyticsEvent
| Campo | Tipo | Descrição |
|-------|------|-----------|
| event | string | Event name (diagnostic_opened, etc.) |
| properties | object | Event-specific data |
| user_id | string | Anonymous user identifier |
| session_id | string | Session identifier |
| timestamp | number | Unix timestamp |
| page_url | string | Current page URL |

#### ProblemCard
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | string | Unique identifier |
| title | string | Problem title |
| description | string | Brief description |
| severity | enum | 'low', 'medium', 'high', 'critical' |
| service_link | string | Link to service page |
| icon | string | Lucide icon name |

### 4.3 Endpoints

#### [POST] /api/diagnostic
- **Descrição:** Submit diagnostic data and trigger lead capture
- **Auth:** None (public endpoint)
- **Rate Limit:** 5 requests/minute per IP
- **Payload:**
```json
{
  "url": "https://example.com",
  "platform": "google-ads|meta|tiktok|other",
  "email": "user@company.com",
  "utm_source": "homepage|service-page|problem-card",
  "page_source": "/|/services/journey|/services/catalog|/services/core"
}
```
- **Response Success (200):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "success",
  "risk_level": "high",
  "failure_modes": [
    "Attribution gaps detected",
    "Cross-platform discrepancy",
    "Offline data missing"
  ],
  "revenue_impact": "~R$ 175k/month invisible",
  "created_at": "2024-12-29T10:00:00Z"
}
```
- **Response Error (400):**
```json
{
  "error": "validation_error",
  "message": "Invalid email format",
  "field": "email"
}
```

#### [POST] /api/analytics
- **Descrição:** Track user analytics events
- **Auth:** None (public endpoint)
- **Payload:**
```json
{
  "event": "diagnostic_opened",
  "properties": {
    "source": "hero_cta",
    "page": "/"
  },
  "user_id": "anonymous_id",
  "session_id": "session_id"
}
```

### 4.4 Integrações

**Obrigatórias:**
- Google Analytics 4: Event tracking
- DataLayer: Standard e-commerce events
- Email Service: Lead notification (stub for MVP)

**Futuras:**
- CRM Integration (HubSpot/Salesforce)
- Platform APIs (Google Ads, Meta)
- Calendar Integration (Calendly)

---

## 5. Riscos & Mitigações

### 5.1 Riscos Técnicos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| SVG diagram não responsivo mobile | Média | Alto | 2 versões: desktop complex + mobile simplified |
| Video loading impacta Core Web Vitals | Alta | Médio | Poster image + lazy loading + preload hints |
| Modal accessibility issues | Média | Médio | Focus trap + ESC handler + aria-labels + screen reader testing |
| Bundle size increase | Baixa | Baixo | Code splitting nas service pages + dynamic imports |
| SVG não carrega (JS disabled) | Baixa | Alto | Static PNG fallback + progressive enhancement |
| Analytics tracking failures | Baixa | Médio | Error handling + offline queue + retry logic |

### 5.2 Riscos de Produto

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| DVQ diagram confuso/complexo | Média | Alto | A/B test: architectural flow vs ecosystem mandala |
| Diagnostic simulation muito longo | Baixa | Médio | Hard limit 10s + progress indicator + skip option |
| Message house inconsistente | Baixa | Alto | Review completo de todas as copies + style guide |
| Lead quality baixa (gmail/hotmail) | Média | Alto | Corporate email validation + domain whitelist |
| Video content não engaja | Média | Médio | A/B test duration + thumbnail + auto-play mute |
| Service pages muito técnicas | Baixa | Médio | Business benefit focus + technical details collapsible |

### 5.3 Riscos de Negócio

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| DVQ™ trademark issues | Baixa | Alto | Legal clearance + backup naming options |
| Competitors copying approach | Média | Médio | Speed to market + continuous innovation |
| Sales team unprepared | Média | Alto | Training session + lead qualification process |

### 5.4 Decisões Pendentes

- [ ] **DVQ Diagram Type**: Architecture flow vs. Ecosystem mandala vs. Hybrid
- [ ] **Video Specs**: Duration (30s vs 60s), format (MP4 vs WebM), quality (1080p vs 4K)
- [ ] **Diagnostic Depth**: Surface level vs. Medium depth vs. Deep technical
- [ ] **API Integration**: Mock responses vs. Real-time platform checks
- [ ] **Pricing Display**: Hide completely vs. "Starting from" vs. "Contact for pricing"

### 5.5 Ambiguidades Identificadas

- [ ] **Legal**: "Data Value Quotient™" trademark registration status
- [ ] **Content**: Who provides manifesto video content + script?
- [ ] **Technical**: Real platform API integration timeline vs. simulation
- [ ] **Business**: Lead routing - direct to sales vs. qualification step?
- [ ] **Design**: Brand consistency between tech aesthetic + corporate trust

---

## 6. Blueprint Técnico para Claude Code

### 6.1 Estrutura de Pastas

```
src/
├── pages/
│   ├── Index.tsx                     # Refactor completo V1
│   └── services/
│       ├── Journey.tsx               # Novo - Journey mapping problems
│       ├── Catalog.tsx               # Novo - Catalog/SKU management
│       └── Core.tsx                  # Novo - Data reconciliation
├── components/
│   ├── home/
│   │   ├── HeroSection.tsx           # Update - novo copy + CTA
│   │   ├── ManifestoVideo.tsx        # Novo - video player component
│   │   ├── DVQSection.tsx            # Novo - methodology + diagram
│   │   ├── ClientLogos.tsx           # Novo - logo grid + status
│   │   ├── ProblemLibrary.tsx        # Novo - problem cards
│   │   └── PartnersSection.tsx       # Update - Google/Meta logos
│   ├── diagnostic/
│   │   ├── DiagnosticModal.tsx       # Novo - modal wrapper
│   │   ├── StepOne.tsx               # Novo - data collection
│   │   ├── TerminalScan.tsx          # Novo - animated scan
│   │   └── ResultPreview.tsx         # Novo - preliminary result
│   ├── services/
│   │   ├── ServiceLayout.tsx         # Novo - template layout
│   │   ├── ProblemSection.tsx        # Novo - problem headline
│   │   ├── BenefitSection.tsx        # Novo - benefit overview
│   │   ├── SolutionSection.tsx       # Novo - how we solve
│   │   ├── SystemDiagram.tsx         # Novo - mini technical flow
│   │   ├── CaseStudySection.tsx      # Novo - client case
│   │   └── CTASection.tsx            # Novo - diagnostic CTA
│   └── ui/                           # Existing - shadcn/ui components
├── hooks/
│   ├── useDiagnostic.ts              # Novo - diagnostic logic
│   ├── useAnalytics.ts               # Update - new events
│   └── useModal.ts                   # Novo - modal management
├── services/
│   ├── diagnostic.ts                 # Novo - API integration
│   ├── analytics.ts                  # Update - dataLayer events
│   └── validation.ts                 # Novo - form validation
├── types/
│   ├── diagnostic.ts                 # Novo - diagnostic interfaces
│   ├── analytics.ts                  # Update - event interfaces
│   └── service.ts                    # Novo - service page types
├── assets/
│   └── videos/                       # Novo - manifesto video
├── public/
│   ├── dvq-diagram.svg               # Novo - interactive diagram
│   ├── dvq-diagram-mobile.svg        # Novo - mobile version
│   ├── manifesto-poster.jpg          # Novo - video poster
│   └── client-logos/                 # Update - logo assets
└── utils/
    ├── constants.ts                  # Update - new constants
    └── helpers.ts                    # Update - utility functions
```

### 6.2 Arquivos a Criar/Modificar

| Arquivo | Responsabilidade | Tipo |
|---------|------------------|------|
| `src/pages/Index.tsx` | Home page V1 structure | Refactor |
| `src/pages/services/*.tsx` | Service landing pages | Novo |
| `src/components/home/ManifestoVideo.tsx` | Video player + lazy loading | Novo |
| `src/components/home/DVQSection.tsx` | DVQ methodology + diagram | Novo |
| `src/components/diagnostic/*.tsx` | 3-step diagnostic modal | Novo |
| `src/hooks/useDiagnostic.ts` | Diagnostic state management | Novo |
| `src/services/diagnostic.ts` | API integration | Novo |
| `public/dvq-diagram.svg` | Interactive SVG diagram | Novo |
| `src/types/diagnostic.ts` | TypeScript interfaces | Novo |

### 6.3 Ordem de Implementação

1. **[Setup Foundation]**
   - [ ] Create types & interfaces (`diagnostic.ts`, `analytics.ts`)
   - [ ] Setup diagnostic service (`services/diagnostic.ts`)
   - [ ] Create base hooks (`useDiagnostic.ts`, `useModal.ts`)

2. **[Home Page V1]**
   - [ ] Refactor `Index.tsx` with new section order
   - [ ] Update `HeroSection.tsx` with new copy + CTA
   - [ ] Create `ManifestoVideo.tsx` with lazy loading
   - [ ] Create `DVQSection.tsx` with placeholder diagram
   - [ ] Create `ClientLogos.tsx` with status indicators
   - [ ] Create `ProblemLibrary.tsx` with problem cards

3. **[DVQ Diagram]**
   - [ ] Design & create `dvq-diagram.svg` (desktop)
   - [ ] Create `dvq-diagram-mobile.svg` (simplified)
   - [ ] Implement interactive behaviors (optional hover)
   - [ ] Add fallback static PNG for accessibility

4. **[Service Pages]**
   - [ ] Create `ServiceLayout.tsx` template
   - [ ] Create reusable section components
   - [ ] Implement `/services/journey` page
   - [ ] Implement `/services/catalog` page
   - [ ] Implement `/services/core` page
   - [ ] Add service page routing

5. **[Diagnostic Modal]**
   - [ ] Create `DiagnosticModal.tsx` wrapper with accessibility
   - [ ] Implement `StepOne.tsx` (data collection + validation)
   - [ ] Implement `TerminalScan.tsx` (animated simulation)
   - [ ] Implement `ResultPreview.tsx` (preliminary result)
   - [ ] Connect to diagnostic service & analytics

6. **[API Integration]**
   - [ ] Implement `/api/diagnostic` endpoint (stub)
   - [ ] Add error handling & validation
   - [ ] Test end-to-end flow
   - [ ] Add rate limiting

7. **[Analytics & Tracking]**
   - [ ] Update `analytics.ts` with new events
   - [ ] Implement dataLayer events
   - [ ] Test event tracking
   - [ ] Add conversion tracking

8. **[Testing & Optimization]**
   - [ ] Cross-browser testing
   - [ ] Mobile responsiveness
   - [ ] Accessibility audit (WAVE, axe)
   - [ ] Performance optimization (Lighthouse)
   - [ ] Error boundary testing

### 6.4 Padrões a Seguir

**Components:**
- Always use TypeScript interfaces
- Implement loading/error/success states
- Include accessibility attributes (aria-labels, roles)
- Use Framer Motion for animations (consistent with tech theme)
- Lazy load heavy assets (video, SVG)

**API Calls:**
- Use React Hook Form + Zod for validation
- Implement proper error handling with user feedback
- Add loading states with visual indicators
- Use abort controllers for cleanup

**Analytics:**
- Track all major user interactions
- Use consistent event naming (snake_case)
- Include relevant context properties
- Handle analytics failures gracefully

**Styling:**
- Maintain dark theme + magenta accent (#fd68b3)
- Use existing tech aesthetic classes
- Ensure mobile-first responsive design
- Include focus states for keyboard navigation

### 6.5 Checklist de Implementação

**Foundation:**
- [ ] Types & interfaces defined
- [ ] Services setup with error handling
- [ ] Hooks created with proper state management

**Home Page:**
- [ ] All sections implemented in correct order
- [ ] Video loads with poster + lazy loading
- [ ] DVQ diagram is responsive (desktop + mobile)
- [ ] Problem library links to correct service pages
- [ ] All CTAs trigger diagnostic modal

**Service Pages:**
- [ ] Template works for all 3 services
- [ ] Each page has unique problem/solution/case content
- [ ] System diagrams are clear and technical
- [ ] CTAs are prominent and functional

**Diagnostic Modal:**
- [ ] Accessible (focus trap, ESC close, aria-labels)
- [ ] Form validation works with corporate email
- [ ] Terminal scan animation is smooth (6-10s)
- [ ] Result preview shows relevant failure modes
- [ ] Success state triggers analytics + API call

**API & Analytics:**
- [ ] `/api/diagnostic` endpoint responds correctly
- [ ] All analytics events fire properly
- [ ] Error states are handled gracefully
- [ ] Rate limiting prevents abuse

**Performance & Accessibility:**
- [ ] Lighthouse score >90 (Performance, Accessibility)
- [ ] Works with keyboard navigation
- [ ] Works with screen readers
- [ ] Loads fast on mobile connections

### 6.6 Testes Necessários

**Unit Tests:**
- Form validation logic
- Diagnostic calculation logic
- Analytics event tracking
- Utility functions

**Integration Tests:**
- API endpoint integration
- Modal flow (open → fill → submit → close)
- Service page navigation
- Analytics tracking end-to-end

**E2E Tests:**
- Complete diagnostic flow from home CTA
- Service page → diagnostic conversion
- Mobile responsiveness
- Error scenarios (network failure, invalid input)

**Accessibility Tests:**
- Keyboard navigation through entire flow
- Screen reader compatibility
- Focus management in modal
- Color contrast validation

**Performance Tests:**
- Video loading optimization
- SVG rendering performance
- Bundle size impact
- Mobile network simulation

---

## 7. Aprovação

### 7.1 Critérios de Aprovação

- [ ] **Product Owner** aprovou PRD e user stories
- [ ] **Design Lead** aprovou wireframes e fluxos
- [ ] **Tech Lead** aprovou arquitetura e stack choices
- [ ] **Marketing Team** aprovou messaging e copy direction
- [ ] **Legal** aprovou uso de "DVQ™" e claims
- [ ] **Sales Team** aprovou lead qualification flow

### 7.2 Definition of Done

- [ ] Home page V1 implementada com nova estrutura
- [ ] DVQ diagram funcional e responsivo
- [ ] 3 service pages criadas com template reutilizável
- [ ] Diagnostic modal completo com 3 steps
- [ ] API endpoint `/diagnostic` funcionando
- [ ] Analytics tracking em todas as interações principais
- [ ] Acessibilidade validada (keyboard + screen reader)
- [ ] Performance otimizada (Lighthouse >90)
- [ ] Cross-browser testing completo
- [ ] Documentação de deploy atualizada

### 7.3 Rollback Plan

Se problemas críticos forem detectados pós-deploy:

1. **Immediate**: Revert to previous version via git
2. **DNS**: Point traffic back to stable version
3. **Analytics**: Monitor error rates + user feedback
4. **Communication**: Notify stakeholders of issue + timeline
5. **Fix**: Address issues in development environment
6. **Retest**: Full QA cycle before re-deployment

---

**Após aprovação, execute:**
```bash
/impl-feature docs/PRECISIAN_V1_REFACTOR_SPECIFICATION.md
```

---

**Gerado por:** Claude Code - Agente Master Orquestrador
**Data:** 29/12/2024
**Próximo passo:** Aguardar aprovação completa e executar implementação
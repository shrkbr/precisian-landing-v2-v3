/**
 * ND Precisian - Content EN
 * Structure: Problem → System → Result
 */

export const content = {
  nav: {
    items: [
      { label: 'Protocol', href: '#protocol' },
      { label: 'Modules', href: '#modules' },
      { label: 'Proof', href: '#proof' },
    ],
    cta: 'Run Diagnostic',
  },

  hero: {
    badge: '// SYSTEM OPERATIONAL',
    h1: 'Trust your data.',
    h1b: 'Or your decisions are compromised.',
    sub: 'AI-Powered real-time data integration, analysis and insights so you make the best investment decision every time.',
    cta1: 'Run Diagnostic',
    cta2: 'Explore Protocol',
    terminal: {
      logs: [
        '> init_sequence --target=ga4_stream',
        '> Detecting attribution bias...',
        '> Reconciliating GA4 vs ERP vs Media...',
        '> DVQ score computed.',
        '> Awaiting command input_',
      ],
    },
  },

  problem: {
    eyebrow: '// THE PROBLEM',
    h2: 'Performance data is biased by default.',
    text: 'Whoever delivers the performance data is intrinsically biased. Platforms optimize for their incentives — not for truth.',
    quote: 'Whoever delivers the data is intrinsically biased.',
  },

  dvq: {
    eyebrow: '// DATA VALUE QUOTIENT',
    h2: 'This is not a dashboard problem.',
    h2b: "It's a decision integrity problem.",
    text: 'DVQ is the reliability score of your decision system. The higher the DVQ, the more you can trust your data-driven decisions.',
    trademark: 'DVQ™ is a proprietary decision integrity framework developed by ND Precisian.',
    pillars: [
      {
        id: '01',
        title: 'Full Journey Mapping',
        subtitle: 'micro-events',
        description: 'Complete mapping of all critical user interactions from first touch to post-purchase.',
      },
      {
        id: '02',
        title: 'Data Integration & Centralization',
        subtitle: 'unified view',
        description: 'Connect all data sources into a single source of truth.',
      },
      {
        id: '03',
        title: 'Data Governance & Availability',
        subtitle: 'always-on',
        description: 'Data always accessible and ready for analysis with compliance built-in.',
      },
      {
        id: '04',
        title: 'Smart Attribution Modeling',
        subtitle: 'beyond last-click',
        description: 'Precise attribution of value to each marketing channel.',
      },
      {
        id: '05',
        title: 'Real-time & Predictive Insights',
        subtitle: 'AI-powered',
        description: 'Intuitive dashboards that transform data into decisions.',
      },
    ],
  },

  dvqArchitecture: {
    eyebrow: '// DVQ ARCHITECTURE',
    h2: 'The architecture behind decision integrity.',
    sub: "DVQ is not a metric. It's a system where each layer validates and reinforces the next.",
  },

  modules: [
    {
      id: 'journey',
      code: 'MOD_01',
      title: 'Precisian Journey',
      dvqLayers: ['Journey Mapping'],
      problem: {
        headline: "You have events, but you don't have a journey.",
        bullets: [
          'Micro-events missing',
          'Offline & post-analytics invisible',
          'Cross-device attribution decay',
        ],
      },
      system: {
        headline: 'End-to-end journey mapping',
        bullets: [
          'Micro-event mapping end-to-end',
          'Post-analytics events (CRM/ops)',
          'Server-side tracking for reliability',
        ],
      },
      caseStudy: {
        client: 'BCMed',
        challenge: 'Revenue attribution fragmented across touchpoints',
        results: [
          '$250K+ revenue correctly attributed',
          '100% complete funnel visibility',
        ],
      },
    },
    {
      id: 'catalog',
      code: 'MOD_02',
      title: 'Precisian Catalog',
      dvqLayers: ['Integration', 'Governance'],
      problem: {
        headline: "Media depends on catalog data you don't control.",
        bullets: [
          'Disapprovals, suspensions',
          'Price/stock drift',
          'Hard to segment 1P vs 3P',
        ],
      },
      system: {
        headline: 'Catalog Intelligence System',
        bullets: [
          'Universal integration (Merchant/Meta/TikTok)',
          'Compliance guaranteed',
          'Real-time sync (price/stock/shipping)',
          'Advanced rules & custom labels',
        ],
      },
      caseStudy: {
        client: 'Pague Menos',
        challenge: 'Real-time catalogs + 1P/3P + thousands of daily changes',
        results: [
          'Approval rate significantly increased',
          'CPC reduced, Quality Score improved',
        ],
      },
    },
    {
      id: 'core',
      code: 'MOD_03',
      title: 'Precisian Core',
      dvqLayers: ['Integration', 'Governance', 'Attribution'],
      problem: {
        headline: 'GA4 says one thing. ERP says another.',
        bullets: [
          'ROAS using captured vs invoiced revenue',
          'Missing visibility on real returns',
          'Discrepancies > 50% between systems',
        ],
      },
      system: {
        headline: 'Reconciliation Layer',
        bullets: [
          'Multi-platform integration + unique IDs',
          'Attribution reconciliation',
          'GDPR & encryption by design',
          'Real-time sync',
        ],
      },
      caseStudy: {
        client: 'Nuvio Foods',
        challenge: '> 50% discrepancy between VTEX and GA4',
        results: [
          '100% data consistency',
          'Complete sales funnel visibility',
        ],
      },
    },
    {
      id: 'attribution',
      code: 'MOD_04',
      title: 'Precisian Attribution & MMM',
      dvqLayers: ['Attribution', 'Insights'],
      problem: {
        headline: 'Last click is not strategy.',
        bullets: [
          'Proportional impact invisible',
          'Incrementality unknown',
          'Inaccurate budget projections',
          'Promotional impact unmeasured',
        ],
      },
      system: {
        headline: 'AI-Powered Marketing Mix Modeling',
        bullets: [
          'Single source of truth online + offline',
          'Incrementality measurement',
          'Budget optimization simulator',
          'Evidence-based decisions',
        ],
      },
      caseStudy: null,
    },
    {
      id: 'clarity',
      code: 'MOD_05',
      title: 'Precisian Clarity',
      dvqLayers: ['Insights'],
      problem: {
        headline: 'Seeing is not deciding.',
        bullets: [
          'Dashboards without context',
          'Generic alerts ignored',
          'Time-consuming manual analyses',
        ],
      },
      system: {
        headline: 'AI Data Analyst 24/7',
        bullets: [
          'Real-time data access',
          'AI analyst answering any question',
          'Smart alerts by severity',
          'Multi-level depth analysis',
        ],
      },
      caseStudy: null,
    },
  ],

  partner: {
    eyebrow: '// CONTINUOUS OPERATION',
    h2: 'Data Intelligence Partner',
    text: 'Continuous operation. Always-on governance. Continuous releases. Your data infrastructure evolves with your business.',
    features: [
      {
        title: 'Integrated Infrastructure',
        description: 'Multiple assets working together',
      },
      {
        title: 'Continuous Releases',
        description: 'New capabilities deployed regularly',
      },
      {
        title: 'Always-on Governance',
        description: 'Uptime and compliance guaranteed',
      },
    ],
  },

  proof: {
    eyebrow: '// PROVEN RESULTS',
    h2: 'Impact measured. Not claimed.',
    disclaimer: 'All results independently reconciled across GA4, media platforms and operational systems.',
    metrics: [
      { value: '$250K+', label: 'Revenue correctly attributed' },
      { value: '100%', label: 'Funnel visibility' },
      { value: '50%+', label: 'Discrepancy eliminated' },
      { value: '24/7', label: 'AI monitoring active' },
    ],
    cases: [
      {
        client: 'BCMed',
        challenge: 'Fragmented revenue attribution',
        solution: 'Precisian Journey implementation',
        result: '$250K+ correctly attributed',
      },
      {
        client: 'Pague Menos',
        challenge: 'Real-time catalog management',
        solution: 'Precisian Catalog Intelligence',
        result: 'Improved approval rate & reduced CPC',
      },
      {
        client: 'Nuvio Foods',
        challenge: '50%+ data discrepancy',
        solution: 'Precisian Core reconciliation',
        result: '100% data consistency',
      },
    ],
  },

  cta: {
    h2: 'Initialize your diagnostic sequence.',
    sub: 'Connect your stack. Receive your integrity report.',
    form: {
      fields: {
        url: 'Website URL',
        name: 'Name',
        email: 'Corporate Email',
        segment: 'Segment',
        stack: 'Current Stack',
      },
      segments: ['E-commerce', 'SaaS', 'Marketplace', 'Lead Gen', 'Other'],
      stacks: ['GA4', 'GTM', 'Shopify', 'VTEX', 'BigQuery', 'Looker Studio', 'Other'],
      button: 'Start Diagnostic',
      loading: 'Running checks...',
      success: "Diagnostic request received. We'll contact you.",
    },
  },

  diagnosticConsole: {
    title: 'Diagnostic Console',
    subtitle: 'init_sequence --target=your_stack',
    steps: {
      input: {
        title: 'Initialize Scan',
        fields: {
          url: 'Website URL',
          platform: 'Platform',
          email: 'Corporate Email',
        },
        platforms: ['Shopify', 'VTEX', 'Magento', 'WooCommerce', 'Custom'],
      },
      scan: {
        title: 'Running Diagnostic',
        logs: [
          '> Detecting GA4 configuration...',
          '> Checking attribution integrity...',
          '> Reconciling GA4 vs Media vs Ops...',
          '> Analyzing journey completeness...',
          '> Estimating DVQ score...',
        ],
      },
      result: {
        title: 'Preliminary Analysis',
        dvqLabel: 'Preliminary DVQ',
        riskLevels: {
          high: 'High Risk',
          medium: 'Medium Risk',
          low: 'Low Risk',
        },
        failureModes: [
          'Attribution decay detected',
          'Revenue mismatch likely',
          'Missing micro-events',
        ],
      },
      final: {
        cta1: 'Receive full diagnostic report',
        cta2: 'Schedule diagnostic session',
      },
    },
  },

  auditOS: {
    badge: 'Powered by AuditOS™',
    tagline: 'Our diagnostic protocol runs on the AuditOS reliability engine.',
  },

  footer: {
    copyright: '© 2024 ND Precisian. All rights reserved.',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
};

export type Content = typeof content;

/**
 * ND Precisian - Content V0 (DVQ-first)
 * Fonte única de todos os textos do site
 * REGRA: Usar apenas "Data Value Quotient (DVQ)" / DVQ™
 * NUNCA usar: "coaching", "DVC", "Data Value Coaching"
 */

export const v0Content = {
  // ============================================
  // NAVIGATION
  // ============================================
  nav: {
    logo: 'ND Precisian',
    items: [
      { label: 'DVQ Framework', href: '#dvq' },
      { label: 'Soluções', href: '#solutions' },
      { label: 'Plataformas', href: '#platforms' },
      { label: 'AuditOS', href: '#auditos' },
    ],
    cta: 'Descubra seu DVQ',
  },

  // ============================================
  // HERO
  // ============================================
  hero: {
    badge: 'Proprietary Framework',
    h1: 'Nós trazemos clareza e certeza para todos os dados.',
    subtitle:
      'Um time de Web Analytics apaixonados por dados, focados em soluções de data analytics para alavancar projetos de Marketing Digital. Conte com nossa inteligência para trazer integrações, análise e insights em tempo real alimentados por IA.',
    cta1: 'Descubra seu DVQ',
    cta2: 'Explorar DVQ',
  },

  // ============================================
  // VIDEO MANIFESTO
  // ============================================
  video: {
    title: 'O que é Decision Integrity?',
    subtitle: 'Entenda como o DVQ transforma dados brutos em vantagem competitiva.',
    placeholder: 'Vídeo em breve',
  },

  // ============================================
  // DVQ SECTION
  // ============================================
  dvq: {
    badge: 'DVQ™',
    title: 'Data Value Quotient (DVQ)',
    trademark: 'Proprietary framework developed by ND Precisian.',
    definition:
      'DVQ é o score de confiabilidade do seu sistema de decisão. Quanto maior o DVQ, mais você pode confiar nas suas decisões baseadas em dados. Não é uma metodologia de coaching — é um sistema operacional que valida cada camada de dados.',
    pillars: [
      {
        id: 'journey',
        title: 'Full Journey Mapping',
        subtitle: 'micro-events',
        shortDesc: 'Mapeamento completo da jornada do usuário',
        problem: 'Você tem eventos, mas não tem jornada completa.',
        bullets: [
          'Mapeamento de micro-eventos end-to-end',
          'Eventos pós-analytics (CRM/operacional)',
          'Server-side tracking para confiabilidade',
        ],
        solutionLink: '/solutions/journey',
      },
      {
        id: 'integration',
        title: 'Data Integration & Centralization',
        subtitle: 'unified view',
        shortDesc: 'Integração e centralização de todas as fontes',
        problem: 'Seus dados estão fragmentados em silos.',
        bullets: [
          'Integração multi-plataforma com IDs únicos',
          'Single source of truth',
          'Reconciliação GA4 vs ERP vs Mídia',
        ],
        solutionLink: '/solutions/core',
      },
      {
        id: 'governance',
        title: 'Data Governance & Availability',
        subtitle: 'always-on',
        shortDesc: 'Governança e disponibilidade garantidas',
        problem: 'Dados indisponíveis ou não-compliance.',
        bullets: [
          'LGPD/GDPR compliant by design',
          'Uptime e disponibilidade garantidos',
          'Alertas automáticos de anomalias',
        ],
        solutionLink: '/solutions/core',
      },
      {
        id: 'attribution',
        title: 'Smart Attribution Modeling',
        subtitle: 'beyond last-click',
        shortDesc: 'Atribuição inteligente além do last-click',
        problem: 'Last-click não é estratégia.',
        bullets: [
          'Marketing Mix Modeling (MMM)',
          'Incrementalidade medida',
          'Simulador de budget',
        ],
        solutionLink: '/solutions/attribution',
      },
      {
        id: 'insights',
        title: 'Real-time & Predictive Insights',
        subtitle: 'AI-powered',
        shortDesc: 'Insights preditivos em tempo real',
        problem: 'Dashboards sem contexto, análises manuais.',
        bullets: [
          'AI Analyst respondendo qualquer pergunta',
          'Alertas smart por severidade',
          'Análise multi-nível em profundidade',
        ],
        solutionLink: '/solutions/clarity',
      },
    ],
  },

  // ============================================
  // CLIENT LOGOS
  // ============================================
  clients: {
    title: 'Empresas que confiam no DVQ',
    logos: [
      { name: 'BCMed', logo: '/logos/bcmed.svg' },
      { name: 'Pague Menos', logo: '/logos/paguemenos.svg' },
      { name: 'Nuvio Foods', logo: '/logos/nuvio.svg' },
      { name: 'Drogaria Venancio', logo: '/logos/venancio.svg' },
    ],
  },

  // ============================================
  // PROBLEM LIBRARY (DORES)
  // ============================================
  problems: {
    title: 'Soluções Completas em Data Analytics',
    cards: [
      {
        id: 'journey',
        icon: 'map',
        title: 'Precisian Journey',
        description: 'Um fim ao black-box/caixa preta dos dados com Full Journey Digital.',
        href: '/solutions/journey',
      },
      {
        id: 'catalog',
        icon: 'database',
        title: 'Catalog',
        description: 'Conecte seus catálogos ao Google Merchant Center e muito mais!',
        href: '/solutions/catalog',
      },
      {
        id: 'core',
        icon: 'layers',
        title: 'Core',
        description: 'Dados que não batem? Integração com dados internos para visibilidade completa.',
        href: '/solutions/core',
      },
      {
        id: 'ga4',
        icon: 'chart',
        title: 'GA4 Optimization',
        description: 'Deixamos sua conta para coletas de dados mais inteligentes e estratégicas.',
        href: '/solutions/journey',
      },
      {
        id: 'gtm',
        icon: 'code',
        title: 'GTM Setup',
        description: 'Consiste em atividades, CTR único em ambientes externos Web/Mobile.',
        href: '/solutions/journey',
      },
      {
        id: 'adtechs',
        icon: 'target',
        title: 'AdTechs',
        description: 'Precisa integrações? Atendemos em tempo real até integrar!',
        href: '/solutions/attribution',
      },
    ],
  },

  // ============================================
  // CHANNELS
  // ============================================
  channels: {
    title: 'Soluções para Todos os Canais',
    items: [
      { id: 'ecommerce', icon: 'shopping-cart', label: 'E-commerce B2C' },
      { id: 'b2b', icon: 'briefcase', label: 'B2B' },
      { id: 'blogs', icon: 'file-text', label: 'Blogs' },
      { id: 'landing', icon: 'layout', label: 'Landing Pages' },
      { id: 'mobile', icon: 'smartphone', label: 'Mobile Apps' },
    ],
  },

  // ============================================
  // PLATFORMS & PARTNERS
  // ============================================
  platforms: {
    title: 'Tecnologias que Dominamos',
    logos: [
      { name: 'Google Analytics', logo: '/platforms/ga.svg' },
      { name: 'Tag Manager', logo: '/platforms/gtm.svg' },
      { name: 'Looker', logo: '/platforms/looker.svg' },
      { name: 'Adjust', logo: '/platforms/adjust.svg' },
      { name: 'Segment', logo: '/platforms/segment.svg' },
      { name: 'Appsflyer', logo: '/platforms/appsflyer.svg' },
      { name: 'Google', logo: '/platforms/google.svg' },
      { name: 'Elevar', logo: '/platforms/elevar.svg' },
      { name: 'WordPress', logo: '/platforms/wordpress.svg' },
      { name: 'AWS', logo: '/platforms/aws.svg' },
    ],
  },

  // ============================================
  // AUDITOS TEASER
  // ============================================
  auditos: {
    badge: 'AuditOS',
    title: 'Conheça o AuditOS',
    subtitle: 'Conexão features e saídas de certeza do AuditOS.',
    features: [
      {
        id: 'conexao',
        icon: 'plug',
        title: 'Conexão Automática',
        description: 'Conexão automática',
      },
      {
        id: 'auditoria',
        icon: 'clipboard-check',
        title: 'Auditoria Completa',
        description: 'Auditoria contínua',
      },
      {
        id: 'score',
        icon: 'gauge',
        title: 'Score de Qualidade',
        description: 'Análise e scorecard',
      },
      {
        id: 'ai',
        icon: 'brain',
        title: 'AI Insights',
        description: 'Faz uma análise quando operar',
      },
    ],
    cta: 'Faça uma análise gratuita agora',
  },

  // ============================================
  // FINAL CTA
  // ============================================
  finalCta: {
    title: 'Initialize your DVQ audit sequence.',
    subtitle: 'Descubra quanto você está perdendo por não ter visibilidade completa dos seus dados.',
    cta: 'Descubra seu DVQ',
  },

  // ============================================
  // DVQ MODAL
  // ============================================
  modal: {
    title: 'Descubra seu DVQ',
    subtitle: 'Diagnóstico preliminar gratuito',

    // Step 1: Inputs
    step1: {
      title: 'Iniciar Diagnóstico',
      fields: {
        url: {
          label: 'Website URL',
          placeholder: 'https://seusite.com.br',
        },
        platform: {
          label: 'Plataforma',
          options: ['Shopify', 'VTEX', 'WooCommerce', 'Custom'],
        },
        email: {
          label: 'Email corporativo',
          placeholder: 'voce@empresa.com.br',
        },
      },
      button: 'INICIAR SCAN',
    },

    // Step 2: Scan logs (ordem fixa)
    step2: {
      title: 'Executando Diagnóstico',
      logs: [
        '> init_sequence --target=ga4_stream',
        '> Detecting attribution bias...',
        '> Checking GA4 event taxonomy...',
        '> Validating consent mode signals...',
        '> Reconciling GA4 vs Media vs Ops...',
        '> Sampling purchase attribution paths...',
        '> Estimating DVQ baseline...',
        '> DVQ score computed.',
        '> Awaiting command input_',
      ],
    },

    // Step 3: Result teaser
    step3: {
      title: 'Análise Preliminar',
      riskLabel: 'DVQ Risk Preliminar',
      riskLevels: {
        low: 'Low Risk',
        medium: 'Medium Risk',
        high: 'High Risk',
      },
      failuresLabel: 'Top 3 prováveis falhas detectadas:',
      failures: [
        'Attribution decay across devices',
        'Revenue mismatch GA4 vs Backend',
        'Missing micro-events in funnel',
        'Consent mode misconfiguration',
        'Server-side tracking gaps',
        'Cross-domain tracking issues',
      ],
      button: 'RECEBER RELATÓRIO COMPLETO',
    },

    // Step 4: Submit
    step4: {
      success: 'Solicitação recebida. Vamos te contatar em até 24h.',
      error: 'Não foi possível enviar agora. Tente novamente.',
    },
  },

  // ============================================
  // SOLUTION PAGES
  // ============================================
  solutions: {
    journey: {
      id: 'journey',
      title: 'Precisian Journey',
      tagline: 'Full Journey Mapping para visibilidade completa',
      hero: {
        problem: 'Você tem eventos, mas não tem jornada.',
        benefit: 'Mapeamento end-to-end de cada interação do usuário.',
      },
      deploy: [
        'Mapeamento de micro-eventos do discovery ao advocacy',
        'Eventos pós-analytics (CRM, operacional, suporte)',
        'Server-side tracking para 100% de confiabilidade',
        'Resolução de identidade cross-device',
        'Import e reconciliação de conversões offline',
      ],
      spec:
        'Implementação via GTM Server-Side com first-party cookies, integração com CRM/ERP via webhooks, IDs únicos por sessão e usuário, compatível com Consent Mode v2.',
      caseStudy: {
        client: 'BCMed',
        challenge: 'Receita fragmentada entre touchpoints, marketing sem ROI comprovado.',
        solution: 'Precisian Journey com server-side tracking completo.',
        result: 'R$ 250K+ receita corretamente atribuída, 100% visibilidade do funil.',
      },
    },
    catalog: {
      id: 'catalog',
      title: 'Precisian Catalog',
      tagline: 'Catalog Intelligence para máxima performance em mídia',
      hero: {
        problem: 'Mídia depende de dados de catálogo que você não controla.',
        benefit: 'Governança completa dos seus feeds de produto.',
      },
      deploy: [
        'Integração universal (Google Merchant, Meta, TikTok)',
        'Compliance garantido com fixes automáticos',
        'Sync em tempo real (preço, estoque, frete)',
        'Regras avançadas e custom labels automáticos',
        'Segmentação 1P/3P com categorização inteligente',
      ],
      spec:
        'Feed management via API com transformações em tempo real, validação contra schemas das plataformas, alertas de disapproval, rollback automático.',
      caseStudy: {
        client: 'Pague Menos',
        challenge: 'Catálogos 1P e 3P com milhares de mudanças diárias, disapprovals frequentes.',
        solution: 'Precisian Catalog com governança automatizada.',
        result: 'Taxa de aprovação significativamente aumentada, CPC reduzido.',
      },
    },
    core: {
      id: 'core',
      title: 'Precisian Core',
      tagline: 'A camada de reconciliação que faz todos os dados falarem a mesma língua',
      hero: {
        problem: 'GA4 diz uma coisa. ERP diz outra.',
        benefit: 'Single source of truth para receita e atribuição.',
      },
      deploy: [
        'Integração multi-plataforma com IDs únicos',
        'Reconciliação de receita em tempo real',
        'Encriptação e compliance LGPD/GDPR by design',
        'Detecção automática de discrepâncias',
        'Dashboard unificado de discrepancy report',
      ],
      spec:
        'Pipeline de dados via BigQuery com transformações SQL, match de transaction_id entre GA4 e backend, alertas via Slack/Email quando discrepância > threshold.',
      caseStudy: {
        client: 'Nuvio Foods',
        challenge: 'Mais de 50% de discrepância entre VTEX e GA4.',
        solution: 'Precisian Core com reconciliação automática.',
        result: '100% consistência de dados, visibilidade completa do funil de vendas.',
      },
    },
    attribution: {
      id: 'attribution',
      title: 'Precisian Attribution & MMM',
      tagline: 'Atribuição inteligente e Marketing Mix Modeling',
      hero: {
        problem: 'Last-click não é estratégia.',
        benefit: 'Entenda o impacto real de cada canal.',
      },
      deploy: [
        'Marketing Mix Modeling (MMM) customizado',
        'Medição de incrementalidade por canal',
        'Simulador de otimização de budget',
        'Attribution multi-touch data-driven',
        'Integração online + offline',
      ],
      spec:
        'Modelos bayesianos treinados com dados históricos, granularidade por canal/campanha, refresh semanal, API para integração com ferramentas de planejamento.',
      caseStudy: null,
    },
    clarity: {
      id: 'clarity',
      title: 'Precisian Clarity',
      tagline: 'AI Data Analyst 24/7',
      hero: {
        problem: 'Dashboards sem contexto, análises manuais.',
        benefit: 'Um analista de dados AI disponível a qualquer momento.',
      },
      deploy: [
        'Acesso a dados em tempo real via linguagem natural',
        'AI analyst respondendo qualquer pergunta',
        'Alertas smart por severidade',
        'Análise multi-nível em profundidade',
        'Reports automáticos semanais',
      ],
      spec:
        'LLM fine-tuned para analytics, conexão direta com BigQuery/GA4, context window com histórico de análises, outputs em texto e visualizações.',
      caseStudy: null,
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    copyright: '© 2024 ND Precisian. Todos os direitos reservados.',
    tagline: 'Uma empresa Nação Digital do grupo FCamara.',
    links: [
      { label: 'Privacidade', href: '/privacy' },
      { label: 'Termos', href: '/terms' },
    ],
  },
};

export type V0Content = typeof v0Content;
export type DVQPillar = (typeof v0Content.dvq.pillars)[number];
export type Solution = (typeof v0Content.solutions)[keyof typeof v0Content.solutions];

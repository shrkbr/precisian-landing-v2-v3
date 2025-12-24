// Application Constants

// Company sizes with labels
export const COMPANY_SIZES = {
  'MICRO': { value: '1-10', label: 'Micro (1-10 funcionários)' },
  'SMALL': { value: '11-50', label: 'Pequena (11-50 funcionários)' },
  'MEDIUM': { value: '51-200', label: 'Média (51-200 funcionários)' },
  'LARGE': { value: '201-500', label: 'Grande (201-500 funcionários)' },
  'ENTERPRISE': { value: '500+', label: 'Enterprise (500+ funcionários)' }
} as const;

// Interest areas / Products
export const PRODUCTS = {
  'precisian-journey': {
    name: 'Precisian Journey',
    description: 'Gestão completa de eventos para analytics',
    category: 'tracking'
  },
  'precisian-catalog': {
    name: 'Precisian Catalog',
    description: 'Gestão inteligente de catálogo de produtos',
    category: 'data-management'
  },
  'precisian-core': {
    name: 'Precisian Core',
    description: 'Envio de dados entre plataformas',
    category: 'integration'
  },
  'precisian-attribution': {
    name: 'Precisian Attribution',
    description: 'Modelo de atribuição inteligente',
    category: 'attribution'
  },
  'precisian-mmm': {
    name: 'Precisian MMM',
    description: 'Marketing Mix Modeling',
    category: 'attribution'
  },
  'precisian-clarity': {
    name: 'Precisian Clarity',
    description: 'Visualizações e dashboards customizados',
    category: 'visualization'
  },
  'ga4-optimization': {
    name: 'GA4 Optimization',
    description: 'Otimização completa do Google Analytics 4',
    category: 'optimization'
  },
  'gtm-setup': {
    name: 'GTM Setup',
    description: 'Configuração profissional do Google Tag Manager',
    category: 'implementation'
  },
  'intelligence-partner': {
    name: 'Intelligence Partner',
    description: 'Parceria estratégica em analytics',
    category: 'consulting'
  }
} as const;

// Industries
export const INDUSTRIES = [
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'retail', label: 'Varejo' },
  { value: 'saas', label: 'SaaS/Software' },
  { value: 'fintech', label: 'Fintech' },
  { value: 'healthcare', label: 'Saúde' },
  { value: 'education', label: 'Educação' },
  { value: 'automotive', label: 'Automotivo' },
  { value: 'real-estate', label: 'Imobiliário' },
  { value: 'travel', label: 'Turismo/Viagem' },
  { value: 'media', label: 'Mídia/Entretenimento' },
  { value: 'other', label: 'Outro' }
] as const;

// Current analytics tools
export const ANALYTICS_TOOLS = [
  { value: 'no-analytics', label: 'Sem analytics implementado' },
  { value: 'google-analytics', label: 'Google Analytics (Universal)' },
  { value: 'ga4', label: 'Google Analytics 4' },
  { value: 'adobe-analytics', label: 'Adobe Analytics' },
  { value: 'mixpanel', label: 'Mixpanel' },
  { value: 'segment', label: 'Segment' },
  { value: 'hotjar', label: 'Hotjar' },
  { value: 'amplitude', label: 'Amplitude' },
  { value: 'custom-solution', label: 'Solução customizada' },
  { value: 'other', label: 'Outro' }
] as const;

// Priority areas for improvement
export const PRIORITY_AREAS = [
  { value: 'data-quality', label: 'Qualidade dos dados' },
  { value: 'attribution', label: 'Modelo de atribuição' },
  { value: 'user-journey', label: 'Jornada do usuário' },
  { value: 'conversion-tracking', label: 'Tracking de conversões' },
  { value: 'roi-measurement', label: 'Mensuração de ROI' },
  { value: 'real-time-insights', label: 'Insights em tempo real' },
  { value: 'data-integration', label: 'Integração de dados' },
  { value: 'automation', label: 'Automação de processos' },
  { value: 'team-training', label: 'Treinamento da equipe' },
  { value: 'compliance', label: 'Compliance (LGPD/GDPR)' }
] as const;

// Contact preferences
export const CONTACT_PREFERENCES = [
  { value: 'email', label: 'Email', icon: '📧' },
  { value: 'phone', label: 'Telefone', icon: '📞' },
  { value: 'whatsapp', label: 'WhatsApp', icon: '💬' }
] as const;

// Demo time preferences
export const DEMO_TIME_PREFERENCES = [
  { value: 'morning', label: 'Manhã (9h-12h)', icon: '🌅' },
  { value: 'afternoon', label: 'Tarde (14h-17h)', icon: '☀️' },
  { value: 'evening', label: 'Noite (18h-20h)', icon: '🌙' }
] as const;

// Newsletter frequencies
export const NEWSLETTER_FREQUENCIES = [
  { value: 'weekly', label: 'Semanal' },
  { value: 'monthly', label: 'Mensal' }
] as const;

// Form subjects for contact form
export const CONTACT_SUBJECTS = [
  'Consultoria em Analytics',
  'Demonstração de produtos',
  'Suporte técnico',
  'Parceria comercial',
  'Orçamento personalizado',
  'Dúvidas sobre LGPD',
  'Migração GA4',
  'Treinamento equipe',
  'Outro assunto'
] as const;

// DVQ Methodology steps
export const DVQ_STEPS = [
  {
    id: 1,
    title: 'Comportamento do usuário e Mapeamento de eventos',
    description: 'Mapeamento completo de todas as interações críticas do usuário',
    products: ['precisian-journey', 'precisian-core', 'gtm-setup'],
    icon: '👥'
  },
  {
    id: 2,
    title: 'Integração e Centralização dos dados',
    description: 'Conexão de todas as fontes de dados em uma visão unificada',
    products: ['precisian-journey', 'precisian-catalog'],
    icon: '🔗'
  },
  {
    id: 3,
    title: 'Governança e Disponibilidade dos dados',
    description: 'Dados sempre acessíveis e prontos para análise',
    products: ['ga4-optimization', 'gtm-setup'],
    icon: '🏛️'
  },
  {
    id: 4,
    title: 'Modelo de atribuição inteligente',
    description: 'Atribuição precisa do valor de cada canal de marketing',
    products: ['precisian-mmm', 'ga4-optimization'],
    icon: '🎯'
  },
  {
    id: 5,
    title: 'Insights visuais em tempo real e preditivos',
    description: 'Dashboards intuitivos que transformam dados em decisões',
    products: ['precisian-clarity', 'intelligence-partner'],
    icon: '📊'
  }
] as const;

// API endpoints
export const API_ENDPOINTS = {
  LEADS: '/api/leads',
  ROI_CALCULATION: '/api/roi-calculation',
  CONTACT: '/api/contact',
  DEMO_REQUEST: '/api/demo-request',
  NEWSLETTER: '/api/newsletter'
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  CALCULATOR_DATA: 'precisian_calculator_data',
  USER_PREFERENCES: 'precisian_user_preferences',
  ANALYTICS_CONSENT: 'precisian_analytics_consent'
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

// Animation durations
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500
} as const;
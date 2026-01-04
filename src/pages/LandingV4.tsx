/**
 * LandingV4 - Precisian Landing Page
 * Based on V3 with new DVQ circuit connector section
 *
 * Sections:
 * 1. Hero - "Seus dados estão mentindo para você"
 * 2. DVQ Framework - Circuit connector cards (NEW)
 * 3. Clientes - Social proof
 * 4. DVQ Intro - Metodologia
 * 5. DVQ Modules - 6 full-width sections with Problem/System/Case
 * 6. Data Intelligence Partner
 * 7. AuditOS - Audit tool
 * 8. Partners - Tech logos
 * 9. CTA Final - Form
 * 10. Footer
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  Link2,
  Shield,
  Target,
  BarChart3,
  Package,
  Zap,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

// ============================================
// DESIGN SYSTEM
// ============================================

const colors = {
  primary: '#FD68B3',      // Rosa Precisian
  secondary: '#00D4FF',    // Cyan Neon
  background: '#030303',   // Preto profundo (igual precisian.io)
  surface: '#0a0a0a',      // Cards
  surfaceLight: '#151515', // Hover
  textPrimary: '#FFFFFF',
  textMuted: '#a0a0a0',
};

const styles = `
  .landing-v4 {
    background-color: ${colors.background};
    color: ${colors.textPrimary};
    font-family: 'Inter', sans-serif;
  }

  .landing-v4 .font-display {
    font-family: 'Space Grotesk', sans-serif;
  }

  .landing-v4 .font-mono {
    font-family: 'JetBrains Mono', monospace;
  }

  /* Grid Background */
  .landing-v4 .bg-grid {
    background-image:
      linear-gradient(rgba(253, 104, 179, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(253, 104, 179, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
  }

  /* Glow Effects */
  .landing-v4 .glow-primary {
    box-shadow: 0 0 30px rgba(253, 104, 179, 0.3);
  }

  .landing-v4 .glow-primary-subtle {
    box-shadow: 0 0 15px rgba(253, 104, 179, 0.2);
  }

  .landing-v4 .text-glow {
    text-shadow: 0 0 10px rgba(253, 104, 179, 0.5);
  }

  /* Glassmorphism */
  .landing-v4 .glass {
    background: rgba(10, 10, 10, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(253, 104, 179, 0.2);
  }

  /* Button Primary - Precisian Style */
  .landing-v4 .btn-primary {
    position: relative;
    background: #FD68B3;
    color: black;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    overflow: hidden;
    transition: all 0.3s ease;
    border-radius: 4px;
  }

  .landing-v4 .btn-primary::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
  }

  .landing-v4 .btn-primary:hover::before {
    transform: translateY(-100%);
  }

  .landing-v4 .btn-primary:hover {
    background: #ff8dc7;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(253, 104, 179, 0.4);
  }

  /* Button Outline - Precisian Style */
  .landing-v4 .btn-outline {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.3s ease;
    border-radius: 4px;
  }

  .landing-v4 .btn-outline:hover {
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
  }

  /* Custom scrollbar */
  .landing-v4::-webkit-scrollbar {
    width: 8px;
  }
  .landing-v4::-webkit-scrollbar-track {
    background: ${colors.background};
  }
  .landing-v4::-webkit-scrollbar-thumb {
    background: ${colors.surfaceLight};
  }
  .landing-v4::-webkit-scrollbar-thumb:hover {
    background: ${colors.primary};
  }

  /* Noise overlay */
  .landing-v4 .noise-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0.02;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    z-index: 9999;
  }

  /* Animations */
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(255, 45, 120, 0.5); }
    50% { box-shadow: 0 0 40px rgba(255, 45, 120, 0.8); }
  }

  .landing-v4 .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .landing-v4 .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
`;

// ============================================
// DATA
// ============================================

const clients = [
  'BCMed', 'Pague Menos', 'Nuvio Foods', 'Venancio', 'Drogasil'
];

// DVQ Modules with expanded structure (Problem/System/Case)
const dvqModules = [
  {
    id: '01',
    code: 'MOD_01 - Behavior Mapping',
    tag: 'CAPTURE',
    // Provocação do V2
    title: 'Você sabe o que está medindo?',
    provocation: 'Seu GA4 diz que teve 500 conversões. Mas quantas eram duplicadas? Quantas eram bots? Quantas aconteceram de verdade? Se você não mapeia micro-eventos reais, você está medindo ruído.',
    // Solução
    solution: 'DVQ - Precisian Journey',
    dvqLayers: ['Journey Mapping'],
    // Problem section
    problem: {
      headline: 'Você tem eventos, mas não tem jornada.',
      bullets: [
        'Micro-eventos faltando',
        'Offline e pós-analytics invisíveis',
        'Decaimento de atribuição cross-device',
      ],
    },
    // System section
    system: {
      headline: 'Mapeamento end-to-end da jornada',
      bullets: [
        'Mapeamento de micro-eventos end-to-end',
        'Eventos pós-analytics (CRM/operações)',
        'Server-side tracking para confiabilidade',
      ],
    },
    // Case study
    caseStudy: {
      client: 'BCMed',
      challenge: 'Atribuição de receita fragmentada entre touchpoints',
      results: [
        'R$1M+ em receita corretamente atribuída',
        '100% de visibilidade completa do funil',
      ],
    },
    icon: MapPin,
  },
  {
    id: '02',
    code: 'MOD_02 - Data Integration',
    tag: 'CONNECT',
    title: 'Seus dados conversam entre si?',
    provocation: 'Google Ads diz 200 conversões. Meta diz 180. GA4 diz 150. Vtex diz 120 pedidos. Financeiro diz que faturou 95. Quem está certo? Todos. E nenhum. Se cada plataforma conta uma história diferente, você não tem dados. Tem opiniões.',
    solution: 'DVQ - Precisian Core',
    dvqLayers: ['Integration', 'Governance', 'Attribution'],
    problem: {
      headline: 'GA4 diz uma coisa. ERP diz outra.',
      bullets: [
        'ROAS usando receita capturada vs faturada',
        'Sem visibilidade de devoluções reais',
        'Discrepâncias > 50% entre sistemas',
      ],
    },
    system: {
      headline: 'Camada de Reconciliação',
      bullets: [
        'Integração multi-plataforma + IDs únicos',
        'Reconciliação de atribuição',
        'LGPD e criptografia by design',
        'Sincronização em tempo real',
      ],
    },
    caseStudy: {
      client: 'Nuvio Foods',
      challenge: '> 50% de discrepância entre VTEX e GA4',
      results: [
        '100% de consistência de dados',
        'Visibilidade completa do funil de vendas',
      ],
    },
    icon: Link2,
  },
  {
    id: '03',
    code: 'MOD_03 - Governance',
    tag: 'GOVERN',
    title: 'Alguém cuida disso ou só reza?',
    provocation: 'Tag de conversão parou de disparar há 2 semanas. Ninguém viu. Desenvolvedor subiu código novo e quebrou o dataLayer. Ninguém testou. Você descobre quando o ROAS despenca. Sem governança, seus dados têm prazo de validade.',
    solution: 'DVQ - Precisian AuditOS + Intelligence Partner',
    dvqLayers: ['Governance'],
    problem: {
      headline: 'Seus dados quebram sem você saber.',
      bullets: [
        'Tags param de disparar silenciosamente',
        'Deploy quebra dataLayer sem teste',
        'Problemas descobertos quando ROAS despenca',
      ],
    },
    system: {
      headline: 'Auditoria contínua + Especialista dedicado',
      bullets: [
        'Monitoramento 24/7 de tags e eventos',
        'Alertas proativos de quebras',
        'Especialista dedicado que garante integridade',
        'Testes automatizados pré-deploy',
      ],
    },
    caseStudy: {
      client: 'Estatística',
      challenge: 'Problemas críticos não detectados por semanas',
      results: [
        'Média de 23 problemas críticos na primeira auditoria',
        'Zero downtime não detectado',
      ],
    },
    icon: Shield,
  },
  {
    id: '04',
    code: 'MOD_04 - Smart Attribution',
    tag: 'ATTRIBUTE',
    title: 'Você sabe quem realmente vendeu?',
    provocation: 'Google Ads mostra ROAS de 8. Meta mostra ROAS de 6. Os dois reivindicando a mesma conversão. Last click diz que foi branded search. Mas o cara só pesquisou sua marca porque viu 3 anúncios no Instagram. Se você só olha last click, você está premiando quem chegou por último.',
    solution: 'DVQ - Precisian MMM (Marketing Mix Modeling)',
    dvqLayers: ['Attribution', 'Insights'],
    problem: {
      headline: 'Last click não é estratégia.',
      bullets: [
        'Impacto proporcional invisível',
        'Incrementalidade desconhecida',
        'Projeções de budget imprecisas',
        'Impacto promocional não medido',
      ],
    },
    system: {
      headline: 'Marketing Mix Modeling com IA',
      bullets: [
        'Fonte única de verdade online + offline',
        'Medição de incrementalidade',
        'Simulador de otimização de budget',
        'Decisões baseadas em evidência',
      ],
    },
    caseStudy: {
      client: 'Resultado',
      challenge: 'Debate eterno entre canais sobre quem converteu',
      results: [
        'Fim do debate. Uma fonte de verdade',
        'Decisão de budget vira ciência',
      ],
    },
    icon: Target,
  },
  {
    id: '05',
    code: 'MOD_05 - Predictive Insights',
    tag: 'DECIDE',
    title: 'Quem na sua empresa consegue usar esses dados?',
    provocation: 'Dashboard com 47 gráficos. Ninguém sabe o que olhar primeiro. Analista apresenta. Diretor pergunta "o que eu faço com isso?". Silêncio. Dados que não viram decisão são só custo de armazenamento.',
    solution: 'DVQ - Precisian Clarity',
    dvqLayers: ['Insights'],
    problem: {
      headline: 'Ver não é decidir.',
      bullets: [
        'Dashboards sem contexto',
        'Alertas genéricos ignorados',
        'Análises manuais demoradas',
      ],
    },
    system: {
      headline: 'AI Data Analyst 24/7',
      bullets: [
        'Acesso a dados em tempo real',
        'Analista IA que responde qualquer pergunta',
        'Alertas inteligentes por severidade',
        'Análise em múltiplos níveis de profundidade',
      ],
    },
    caseStudy: {
      client: 'Resultado',
      challenge: 'Decisões travadas esperando análise manual',
      results: [
        'Decisão acontece. Rápido. Com dado',
        'Sem depender do analista estar online',
      ],
    },
    icon: BarChart3,
  },
  {
    id: '06',
    code: 'PLUS MOD_06 - Catalog Intelligence',
    tag: 'CATALOG',
    title: 'Seus produtos estão prontos para vender?',
    provocation: '50.000 SKUs. Google reprova 30%. Meta rejeita 20%. TikTok nem sincroniza. Produto em ruptura? Ad continua rodando. Preço mudou? Feed mostra o antigo. Você está pagando para perder dinheiro.',
    solution: 'DVQ - Precisian Catalog',
    dvqLayers: ['Integration', 'Governance'],
    problem: {
      headline: 'Mídia depende de dados de catálogo que você não controla.',
      bullets: [
        'Reprovações e suspensões',
        'Drift de preço e estoque',
        'Difícil segmentar 1P vs 3P',
      ],
    },
    system: {
      headline: 'Sistema de Inteligência de Catálogo',
      bullets: [
        'Integração universal (Merchant/Meta/TikTok)',
        'Compliance garantido',
        'Sincronização em tempo real (preço/estoque/frete)',
        'Regras avançadas e custom labels',
      ],
    },
    caseStudy: {
      client: 'Pague Menos',
      challenge: 'Catálogos em tempo real + 1P/3P + milhares de mudanças diárias',
      results: [
        'Taxa de aprovação aumentou significativamente',
        'CPC reduziu, Quality Score melhorou',
      ],
    },
    icon: Package,
  },
];

const auditosFeatures = [
  { icon: Zap, title: 'Conexão Automática', desc: 'Conecte sua conta Google e selecione a propriedade.' },
  { icon: Shield, title: 'Auditoria Completa', desc: 'Baseada em regras reais de implementação.' },
  { icon: BarChart3, title: 'Score de Qualidade', desc: 'Um número claro que diz o estado real dos seus dados.' },
  { icon: Sparkles, title: 'Insights com IA', desc: 'Não só mostra o problema: explica o impacto e sugere correção.' },
];

const technologies = [
  // Row 1 - Google & Ads
  ['Google Analytics', 'Google Tag Manager', 'Google Cloud Platform', 'Looker Studio', 'Google Ads', 'Facebook Ads'],
  // Row 2 - Data & Cloud
  ['Google Merchant', 'Google Meridian', 'BigQuery', 'Microsoft Fabric', 'Azure', 'PowerBI', 'N8N', 'Supabase'],
  // Row 3 - E-commerce & CRM
  ['VTEX', 'Magento', 'Shopify', 'Salesforce', 'Appsflyer'],
];

const painOptions = [
  'Não confio nos números do GA4',
  'Cada plataforma mostra um resultado diferente',
  'Não sei qual canal realmente converte',
  'Meus dashboards não ajudam a decidir',
  'Outro',
];

// ============================================
// COMPONENTS
// ============================================

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/precisian_logo_black.png" alt="Precisian" className="h-8 md:h-10" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['DVQ', 'Soluções', 'AuditOS', 'Cases', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#cta"
          className="hidden md:flex items-center gap-2 px-8 py-3 btn-primary text-sm"
        >
          Run Diagnostic
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/10"
        >
          <nav className="flex flex-col p-6 gap-4">
            {['DVQ', 'Soluções', 'AuditOS', 'Cases', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg text-[#9CA3AF] hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#cta"
              className="flex items-center justify-center gap-2 px-8 py-4 btn-primary text-sm mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Run Diagnostic
              <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-grid relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: colors.primary }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]" style={{ backgroundColor: colors.secondary }} />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 grid lg:grid-cols-[60%_40%] gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            Seus dados estão{' '}
            <span className="text-glow" style={{ color: colors.primary }}>
              mentindo
            </span>{' '}
            para você.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-xl font-light">
            Quem vende a mídia não deveria auditar o resultado. Google e Meta são otimizados para o faturamento deles, não para o seu lucro. A Precisian é a camada de integridade que elimina esse conflito de interesse, para que você decida com a verdade.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#cta"
              className="group relative flex items-center justify-center gap-2 px-8 py-4 btn-primary text-sm"
            >
              <span className="relative z-10">Run Diagnostic</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
            </a>
            <a
              href="#dvq"
              className="flex items-center justify-center px-8 py-4 btn-outline text-sm"
            >
              Explore Protocol
            </a>
          </div>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video rounded-xl overflow-hidden glass"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls
            preload="metadata"
          >
            <source src="/manifesto.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video label */}
          <div className="absolute bottom-4 left-4 font-mono text-xs pointer-events-none" style={{ color: colors.primary }}>
            VIDEO_MANIFESTO.mp4
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-[#9CA3AF]">SCROLL</span>
        <ChevronDown className="w-5 h-5 text-[#9CA3AF] animate-bounce" />
      </motion.div>
    </section>
  );
}

// DVQ Steps data with descriptions
const dvqSteps = [
  {
    id: 1,
    title: 'Behavior Mapping',
    shortTitle: 'Behavior\nMapping',
    icon: '01',
    description: 'Mapeamento completo de micro-eventos e jornadas reais do usuário.',
    details: 'Capturamos cada interação significativa: cliques, scrolls, tempo de permanência, eventos de e-commerce. Identificamos padrões de comportamento que revelam a verdadeira jornada do cliente.',
  },
  {
    id: 2,
    title: 'Data Integration',
    shortTitle: 'Data\nIntegration',
    icon: '02',
    description: 'Integração de dados de múltiplas fontes em uma visão unificada.',
    details: 'Conectamos GA4, CRM, ERP, plataformas de mídia e dados offline. Eliminamos silos e criamos uma fonte única de verdade para suas decisões.',
  },
  {
    id: 3,
    title: 'Governance',
    shortTitle: 'Governance',
    icon: '03',
    description: 'Governança de dados com consistência e compliance.',
    details: 'Estabelecemos políticas de qualidade, nomenclatura padronizada e processos de validação. Garantimos que seus dados sejam confiáveis e auditáveis.',
  },
  {
    id: 4,
    title: 'Smart Attribution',
    shortTitle: 'Smart\nAttribution',
    icon: '04',
    description: 'Atribuição inteligente que revela o papel real de cada canal.',
    details: 'Utilizamos modelos de atribuição avançados (MMM, MTA) para entender o verdadeiro impacto de cada touchpoint na conversão. Fim dos créditos duplicados.',
  },
  {
    id: 5,
    title: 'Predictive Insights',
    shortTitle: 'Predictive\nInsights',
    icon: '05',
    description: 'Insights preditivos que antecipam resultados e guiam ações.',
    details: 'Transformamos dados históricos em previsões acionáveis. Identifique oportunidades antes da concorrência e otimize investimentos com base em cenários futuros.',
  },
];

// Circuit connector between hexagons
function CircuitConnector({ isAnimated = true }: { isAnimated?: boolean }) {
  return (
    <div className="flex items-center h-full mx-1">
      {/* Left solder dot */}
      <div
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{
          backgroundColor: colors.primary,
          boxShadow: `0 0 8px ${colors.primary}`,
        }}
      />
      {/* Connecting line */}
      <div className="relative w-8 md:w-12 h-0.5 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${colors.primary}40` }}
        />
        {isAnimated && (
          <motion.div
            className="absolute top-0 left-0 h-full w-4"
            style={{
              background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
            }}
            animate={{ x: ['-100%', '200%'] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )}
      </div>
      {/* Right solder dot */}
      <div
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{
          backgroundColor: colors.primary,
          boxShadow: `0 0 8px ${colors.primary}`,
        }}
      />
    </div>
  );
}

// Hexagon module component using CSS clip-path
function HexagonModule({
  step,
  delay = 0,
  isInView,
  isActive,
  onHover,
}: {
  step: typeof dvqSteps[0];
  delay?: number;
  isInView: boolean;
  isActive: boolean;
  onHover: (active: boolean) => void;
}) {
  // Flat-top hexagon clip-path for perfect symmetry
  const hexClipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="relative cursor-pointer group"
    >
      {/* Hexagon container - square for symmetry */}
      <div
        className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] lg:w-[140px] lg:h-[140px] relative transition-all duration-300"
        style={{
          clipPath: hexClipPath,
          backgroundColor: isActive ? colors.primary : colors.surface,
          filter: isActive
            ? `drop-shadow(0 0 20px ${colors.primary}80)`
            : `drop-shadow(0 0 8px ${colors.primary}40)`,
        }}
      >
        {/* Inner content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 transition-all duration-300">
          {/* Step number */}
          <span
            className="font-mono text-[10px] md:text-xs mb-1 transition-colors"
            style={{ color: isActive ? colors.surface : colors.primary }}
          >
            {step.icon}
          </span>
          {/* Title */}
          <span
            className={`text-[10px] md:text-xs font-bold text-center leading-tight whitespace-pre-line transition-colors ${
              isActive ? 'text-black' : 'text-white'
            }`}
          >
            {step.shortTitle}
          </span>
        </div>
      </div>

      {/* Border effect */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon
          points="50,0 100,25 100,75 50,100 0,75 0,25"
          fill="none"
          stroke={colors.primary}
          strokeWidth="2"
          className="transition-all duration-300"
          style={{
            filter: isActive ? `drop-shadow(0 0 4px ${colors.primary})` : 'none',
          }}
        />
      </svg>
    </motion.div>
  );
}

function DVQFrameworkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const activeStepData = activeStep !== null ? dvqSteps.find(s => s.id === activeStep) : null;

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(${colors.primary}20 1px, transparent 1px),
            linear-gradient(90deg, ${colors.primary}20 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ZONE 1: Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <span
            className="inline-block font-mono text-xs uppercase tracking-widest px-4 py-2 rounded mb-6"
            style={{ border: `1px solid ${colors.primary}`, color: colors.primary }}
          >
            Framework Proprietário
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Data Value Quotient (DVQ)
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Um framework para transformar dados confusos em decisões claras.
          </p>
        </motion.div>

        {/* ZONE 2: Hexagon Diagram - Horizontal Row (Desktop) */}
        <div className="hidden md:flex justify-center items-center mb-12">
          {dvqSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <HexagonModule
                step={step}
                delay={index * 0.15}
                isInView={isInView}
                isActive={activeStep === step.id}
                onHover={(active) => setActiveStep(active ? step.id : null)}
              />
              {/* Circuit connector between hexagons */}
              {index < dvqSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <CircuitConnector isAnimated={isInView} />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* ZONE 2: Hexagon Diagram - Vertical Stack (Mobile) */}
        <div className="md:hidden flex flex-col items-center gap-2 mb-8">
          {dvqSteps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <HexagonModule
                step={step}
                delay={index * 0.1}
                isInView={isInView}
                isActive={activeStep === step.id}
                onHover={(active) => setActiveStep(active ? step.id : null)}
              />
              {/* Vertical connector */}
              {index < dvqSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="flex flex-col items-center py-1"
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: colors.primary,
                      boxShadow: `0 0 8px ${colors.primary}`,
                    }}
                  />
                  <div
                    className="w-0.5 h-6 relative overflow-hidden"
                    style={{ backgroundColor: `${colors.primary}40` }}
                  >
                    <motion.div
                      className="absolute left-0 w-full h-3"
                      style={{
                        background: `linear-gradient(180deg, transparent, ${colors.primary}, transparent)`,
                      }}
                      animate={{ y: ['-100%', '200%'] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </div>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: colors.primary,
                      boxShadow: `0 0 8px ${colors.primary}`,
                    }}
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* ZONE 3: System Readout Box (Below Hexagons) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="relative p-6 md:p-8 rounded-lg border transition-all duration-300"
            style={{
              backgroundColor: '#0F0F0F',
              borderColor: activeStepData ? colors.primary : '#1a1a1a',
              boxShadow: activeStepData ? `0 0 30px ${colors.primary}30` : 'none',
            }}
          >
            {/* Terminal header */}
            <div
              className="flex items-center gap-3 pb-4 mb-4 border-b"
              style={{ borderColor: '#1a1a1a' }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span
                className="font-mono text-xs uppercase tracking-wider"
                style={{ color: colors.primary }}
              >
                {activeStepData ? `STEP ${activeStepData.icon}` : 'SYSTEM READOUT'}
              </span>
            </div>

            {/* Content */}
            <div className="min-h-[120px] flex flex-col justify-center">
              {activeStepData ? (
                <motion.div
                  key={activeStepData.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4
                    className="text-xl md:text-2xl font-bold mb-3"
                    style={{ color: colors.primary }}
                  >
                    {activeStepData.title}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-3">
                    {activeStepData.description}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {activeStepData.details}
                  </p>
                </motion.div>
              ) : (
                <div className="text-center">
                  <p className="text-gray-500 text-sm font-mono mb-2">
                    [ AWAITING INPUT ]
                  </p>
                  <p className="text-gray-600 text-sm">
                    Passe o mouse sobre um módulo para ver detalhes
                  </p>
                </div>
              )}
            </div>

            {/* Progress indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {dvqSteps.map((step) => (
                <div
                  key={step.id}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: activeStep === step.id ? colors.primary : '#2a2a2a',
                    boxShadow: activeStep === step.id ? `0 0 10px ${colors.primary}` : 'none',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* DVQ Score Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-16 border-t border-[#262626]"
        >
          {/* Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
              Qual é o seu DVQ Score?
            </h3>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              <span className="text-white font-semibold block mb-2">
                Quanto você paga por confiar no dado errado?
              </span>
              O gap entre "ter dados" e "decidir com segurança" é onde o lucro se perde. Essa falha não é humana, é sistêmica. O DVQ mapeia os cinco pontos cegos da sua operação para mostrar não apenas o que aconteceu, mas se você pode confiar no que está vendo.
            </p>
          </div>

          {/* Score Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Cego */}
            <div className="bg-[#0F0F0F] border border-[#262626] p-8 rounded-sm text-center group hover:border-gray-600 transition-all duration-300 opacity-60 hover:opacity-100">
              <div className="font-mono text-3xl font-bold text-gray-500 mb-2">0-20%</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-red-500 mb-4">Cego</div>
              <p className="text-gray-500 text-xs">Você toma decisões no escuro.</p>
            </div>

            {/* Fragmentado */}
            <div className="bg-[#0F0F0F] border border-[#262626] p-8 rounded-sm text-center group hover:border-gray-600 transition-all duration-300 opacity-80 hover:opacity-100">
              <div className="font-mono text-3xl font-bold text-gray-400 mb-2">21-50%</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-yellow-600 mb-4">Fragmentado</div>
              <p className="text-gray-500 text-xs">Dados existem, mas não servem para decisão.</p>
            </div>

            {/* Funcional */}
            <div className="bg-[#0F0F0F] border border-[#262626] p-8 rounded-sm text-center group hover:border-white transition-all duration-300">
              <div className="font-mono text-3xl font-bold text-white mb-2">51-80%</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-4">Funcional</div>
              <p className="text-gray-400 text-xs">Opera bem, mas perde oportunidades de escala.</p>
            </div>

            {/* Precisian - Destaque */}
            <div
              className="bg-[#0F0F0F] border border-[#E94E9A] p-8 rounded-sm text-center relative transform lg:-translate-y-2 transition-all duration-300"
              style={{ boxShadow: '0 0 20px rgba(233, 78, 154, 0.15)' }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E94E9A] text-white text-[10px] font-mono px-2 py-1 rounded-sm">
                TARGET
              </div>
              <div
                className="font-mono text-3xl font-bold mb-2"
                style={{ color: '#E94E9A', textShadow: '0 0 5px rgba(233, 78, 154, 0.8)' }}
              >
                81-100%
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-white mb-4">Precisian</div>
              <p className="text-gray-300 text-xs">Dados viram vantagem competitiva injusta.</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="#cta"
              className="group relative bg-[#E94E9A] hover:bg-[#D63385] text-white font-bold py-4 px-10 uppercase tracking-widest text-sm transition-all rounded-sm"
              style={{
                boxShadow: '0 0 20px rgba(233, 78, 154, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(233, 78, 154, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(233, 78, 154, 0.3)';
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Discover My Score
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Duplicate clients array for seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section ref={ref} className="py-20 border-y overflow-hidden" style={{ borderColor: colors.surfaceLight, backgroundColor: colors.surface }}>
      {/* Marquee animation keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">
            Empresas que pararam de adivinhar
          </h2>
          <p className="text-gray-400 text-lg">
            +200 projetos de dados implementados. +R$500M em receita corretamente atribuída.
          </p>
        </motion.div>
      </div>

      {/* Marquee container with fade edges */}
      <div className="relative">
        {/* Left fade gradient */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to right, ${colors.surface}, transparent)`,
          }}
        />

        {/* Right fade gradient */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to left, ${colors.surface}, transparent)`,
          }}
        />

        {/* Scrolling content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex whitespace-nowrap"
          style={{
            animation: isInView ? 'marquee 30s linear infinite' : 'none',
          }}
        >
          {duplicatedClients.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="text-2xl md:text-3xl font-bold text-white/40 mx-8 md:mx-12 inline-block"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// DVQ Module Section - Full-width layout for each module
function DVQModuleSection({ module, index }: { module: typeof dvqModules[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      id={`soluções`}
      className="py-20 md:py-28"
      style={{ backgroundColor: isEven ? colors.background : colors.surface }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className={isEven ? 'order-1' : 'order-1 lg:order-2'}
          >
            {/* Module Badge */}
            <span className="font-mono text-xs uppercase tracking-widest mb-4 block" style={{ color: colors.primary }}>
              {module.code}
            </span>

            {/* Title - Provocação */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">{module.title}</h3>

            {/* Provocation text */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              {module.provocation}
            </p>

            {/* Solution name + DVQ Layer Tag */}
            <div className="mb-8">
              <span className="text-lg font-semibold text-white">{module.solution}</span>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  DVQ {module.dvqLayers.length > 1 ? 'Layers' : 'Layer'}:
                </span>
                <span className="text-xs font-mono" style={{ color: colors.primary }}>
                  {module.dvqLayers.join(' • ')}
                </span>
              </div>
            </div>

            {/* Problem */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-red-400 font-mono text-xs uppercase tracking-wider">
                  Problem
                </span>
              </div>
              <p className="text-white font-medium mb-4">{module.problem.headline}</p>
              <ul className="space-y-2">
                {module.problem.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="text-red-500 mt-0.5">×</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* System */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-green-400 font-mono text-xs uppercase tracking-wider">
                  System
                </span>
              </div>
              <p className="text-white font-medium mb-4">{module.system.headline}</p>
              <ul className="space-y-2">
                {module.system.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Case Study */}
            {module.caseStudy && (
              <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6">
                <span className="font-mono text-xs uppercase tracking-wider mb-2 block" style={{ color: colors.primary }}>
                  CASE: {module.caseStudy.client}
                </span>
                <p className="text-gray-400 text-sm mb-4">{module.caseStudy.challenge}</p>
                <div className="space-y-2">
                  {module.caseStudy.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm" style={{ color: colors.primary }}>
                      <span>→</span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Number Card Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={isEven ? 'order-2' : 'order-2 lg:order-1'}
          >
            <div className="relative aspect-square w-full max-w-[320px] lg:max-w-[380px] mx-auto bg-[#0a0a0a] border border-white/10">
              {/* Corner markers */}
              <div className="absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2" style={{ borderColor: colors.primary }} />
              <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2" style={{ borderColor: colors.primary }} />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2" style={{ borderColor: colors.primary }} />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2" style={{ borderColor: colors.primary }} />

              {/* Big Number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl md:text-9xl font-light text-gray-700/40 select-none">
                  {module.id}
                </span>
              </div>

              {/* Horizontal line */}
              <div className="absolute bottom-16 left-8 right-8 h-px bg-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DataIntelligencePartnerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      num: '01',
      title: 'Integrated Infrastructure',
      desc: 'Multiple assets working together',
    },
    {
      num: '02',
      title: 'Continuous Releases',
      desc: 'New capabilities deployed regularly',
    },
    {
      num: '03',
      title: 'Always-on Governance',
      desc: 'Uptime and compliance guaranteed',
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32" style={{ backgroundColor: colors.surface }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <span
              className="inline-block font-mono text-xs uppercase tracking-widest mb-6"
              style={{ color: colors.primary }}
            >
              // Continuous Operation
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Data Intelligence Partner
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              Continuous operation. Always-on governance. Continuous releases. Your data infrastructure evolves with your business.
            </p>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center font-mono font-bold text-sm shrink-0"
                  style={{ backgroundColor: colors.primary, color: colors.background }}
                >
                  {feature.num}
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                  <p className="text-sm" style={{ color: colors.primary }}>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AuditOSSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="auditos" ref={ref} className="py-24 md:py-32 bg-grid" style={{ backgroundColor: colors.background }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <span
              className="inline-block font-mono text-xs uppercase tracking-widest mb-6"
              style={{ color: colors.primary }}
            >
              // Sistema Proprietário
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              AuditOS
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-6 font-light">
              O sistema operacional lógico da Precisian para auditoria do GA4.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Ele não substitui o GA4. Ele opera acima dele. Antes de um dado virar insight, ele passa pelo AuditOS. Antes de você confiar num número, o AuditOS já validou.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {auditosFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${colors.primary}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: colors.primary }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-[#9CA3AF]">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-8 py-4 btn-primary text-sm"
            >
              Run Free Audit
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-6">Como funciona</h3>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Conecte seu e-mail', desc: 'Autenticação segura via Google' },
                { step: '02', title: 'Selecione a propriedade GA4', desc: 'Escolha qual conta auditar' },
                { step: '03', title: 'Receba o diagnóstico', desc: 'Relatório completo em até 48h' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold shrink-0"
                    style={{ backgroundColor: colors.primary, color: colors.background }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-[#9CA3AF]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 md:py-32" style={{ backgroundColor: colors.surface }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span
            className="inline-block font-mono text-xs uppercase tracking-widest mb-4"
            style={{ color: colors.primary }}
          >
            Parceiros e Ferramentas
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Tecnologias que Dominamos
          </h2>
        </motion.div>

        <div className="flex flex-col items-center gap-4">
          {technologies.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: rowIndex * 0.1 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {row.map((tech) => (
                <div
                  key={tech}
                  className="px-5 py-2.5 text-sm text-[#9CA3AF] border border-[#2a2a2a] rounded-full hover:border-[#3a3a3a] hover:text-white transition-all cursor-default"
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    site: '',
    pain: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="cta" ref={ref} className="py-24 md:py-32 bg-grid relative">
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[150px]" style={{ backgroundColor: colors.primary }} />

      <div className="max-w-[800px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Quanto seus dados estão<br />custando para você?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            Em 48 horas, você vai saber exatamente onde está o vazamento. Diagnóstico gratuito. Sem compromisso. Sem enrolação.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass rounded-xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#FF2D78] focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">E-mail corporativo</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#FF2D78] focus:outline-none transition-colors"
                placeholder="voce@empresa.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Site da empresa</label>
            <input
              type="url"
              value={formData.site}
              onChange={(e) => setFormData({ ...formData, site: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#FF2D78] focus:outline-none transition-colors"
              placeholder="https://suaempresa.com.br"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium mb-2">Qual sua maior dor com dados hoje?</label>
            <select
              value={formData.pain}
              onChange={(e) => setFormData({ ...formData, pain: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#FF2D78] focus:outline-none transition-colors appearance-none"
            >
              <option value="">Selecione...</option>
              {painOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-8 py-4 btn-primary text-sm"
          >
            Request Diagnostic
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.form>

        {/* What you'll receive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-[#9CA3AF] mb-4">Você vai receber:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Score DVQ da sua operação',
              'Mapa dos principais problemas',
              'Recomendações prioritárias',
              'Estimativa de impacto financeiro',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4" style={{ color: colors.primary }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 border-t" style={{ borderColor: colors.surfaceLight, backgroundColor: colors.surface }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="mb-4">
              <img src="/precisian_logo_black.png" alt="Precisian" className="h-8" />
            </div>
            <p className="text-sm text-[#9CA3AF] mb-4">
              Trust Your Data. A Precisian é a vertical de Data Analytics da Nação Digital, parte do ecossistema FCamara.
            </p>
            <p className="text-xs text-[#9CA3AF]">
              +200 projetos implementados | +R$500M em receita atribuída corretamente
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              {['Precisian Journey', 'Precisian Core', 'Precisian Catalog', 'Precisian MMM', 'Precisian Clarity', 'Intelligence Partner', 'AuditOS'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              {['Blog', 'Cases', 'Metodologia DVQ', 'Diagnóstico Gratuito'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              <li>contato@precisian.io</li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        {/* Closing quote */}
        <div className="text-center py-8 border-t border-b mb-8" style={{ borderColor: colors.surfaceLight }}>
          <p className="text-lg italic text-[#9CA3AF]">
            "Você não precisa de mais dados. Precisa confiar nos que tem."
          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9CA3AF]">
          <p>© 2025 Precisian | Nação Digital | Grupo FCamara</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN PAGE
// ============================================

export default function LandingV4() {
  return (
    <>
      <style>{styles}</style>
      <div className="landing-v4 min-h-screen">
        {/* Noise overlay */}
        <div className="noise-overlay" />

        <Header />
        <HeroSection />
        <DVQFrameworkSection />
        <ClientsSection />

        {/* DVQ Modules - Full-width sections */}
        {dvqModules.map((module, index) => (
          <DVQModuleSection key={module.id} module={module} index={index} />
        ))}

        <DataIntelligencePartnerSection />
        <AuditOSSection />
        <PartnersSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}

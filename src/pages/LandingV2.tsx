/**
 * LandingV2 - Precisian Landing Page
 * Based on detailed briefing - Cyberpunk/Tech aesthetic
 *
 * Sections:
 * 1. Hero - "Seus dados estão mentindo para você"
 * 2. Clientes - Social proof
 * 3. DVQ - 6 provocations
 * 4. AuditOS - Audit tool
 * 5. Partners - Tech logos
 * 6. CTA Final - Form
 * 7. Footer
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Play,
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
  .landing-v2 {
    background-color: ${colors.background};
    color: ${colors.textPrimary};
    font-family: 'Inter', sans-serif;
  }

  .landing-v2 .font-display {
    font-family: 'Space Grotesk', sans-serif;
  }

  .landing-v2 .font-mono {
    font-family: 'JetBrains Mono', monospace;
  }

  /* Grid Background */
  .landing-v2 .bg-grid {
    background-image:
      linear-gradient(rgba(253, 104, 179, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(253, 104, 179, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
  }

  /* Glow Effects */
  .landing-v2 .glow-primary {
    box-shadow: 0 0 30px rgba(253, 104, 179, 0.3);
  }

  .landing-v2 .glow-primary-subtle {
    box-shadow: 0 0 15px rgba(253, 104, 179, 0.2);
  }

  .landing-v2 .text-glow {
    text-shadow: 0 0 10px rgba(253, 104, 179, 0.5);
  }

  /* Glassmorphism */
  .landing-v2 .glass {
    background: rgba(10, 10, 10, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(253, 104, 179, 0.2);
  }

  /* Button Primary - Precisian Style */
  .landing-v2 .btn-primary {
    position: relative;
    background: #FD68B3;
    color: black;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .landing-v2 .btn-primary::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
  }

  .landing-v2 .btn-primary:hover::before {
    transform: translateY(-100%);
  }

  .landing-v2 .btn-primary:hover {
    background: #ff8dc7;
    transform: translateY(-2px);
  }

  /* Button Outline - Precisian Style */
  .landing-v2 .btn-outline {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.3s ease;
  }

  .landing-v2 .btn-outline:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }

  /* Custom scrollbar */
  .landing-v2::-webkit-scrollbar {
    width: 8px;
  }
  .landing-v2::-webkit-scrollbar-track {
    background: ${colors.background};
  }
  .landing-v2::-webkit-scrollbar-thumb {
    background: ${colors.surfaceLight};
  }
  .landing-v2::-webkit-scrollbar-thumb:hover {
    background: ${colors.primary};
  }

  /* Noise overlay */
  .landing-v2 .noise-overlay {
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

  .landing-v2 .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .landing-v2 .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
`;

// ============================================
// DATA
// ============================================

const clients = [
  'BCMed', 'Pague Menos', 'Nuvio Foods', 'Venancio', 'Drogasil'
];

const dvqProvocations = [
  {
    id: '01',
    tag: 'CAPTURE',
    title: 'Você sabe o que está medindo?',
    provocation: 'Seu GA4 diz que teve 500 conversões. Mas quantas eram duplicadas? Quantas eram bots? Quantas aconteceram de verdade? Se você não mapeia micro-eventos reais, você está medindo ruído.',
    solution: 'Precisian Journey',
    solutionDesc: 'Mapeamento cirúrgico de cada micro-evento que importa na jornada real do usuário.',
    caseTitle: 'BCMed',
    caseResult: 'R$1M+ em receita que existia mas não aparecia. Agora aparece.',
    icon: MapPin,
  },
  {
    id: '02',
    tag: 'CONNECT',
    title: 'Seus dados conversam entre si?',
    provocation: 'Google Ads diz 200 conversões. Meta diz 180. GA4 diz 150. Vtex diz 120 pedidos. Financeiro diz que faturou 95. Quem está certo? Todos. E nenhum. Se cada plataforma conta uma história diferente, você não tem dados. Tem opiniões.',
    solution: 'Precisian Core',
    solutionDesc: 'Conciliação cross-platform que conecta receita real aos canais que realmente converteram.',
    caseTitle: 'Nuvio Foods',
    caseResult: '50% de discrepância eliminada. 100% de consistência.',
    icon: Link2,
  },
  {
    id: '03',
    tag: 'GOVERN',
    title: 'Alguém cuida disso ou só reza?',
    provocation: 'Tag de conversão parou de disparar há 2 semanas. Ninguém viu. Desenvolvedor subiu código novo e quebrou o dataLayer. Ninguém testou. Você descobre quando o ROAS despenca. Sem governança, seus dados têm prazo de validade.',
    solution: 'Precisian AuditOS + Intelligence Partner',
    solutionDesc: 'Auditoria contínua + especialista dedicado que garante que nada quebre sem você saber.',
    caseTitle: 'Estatística',
    caseResult: 'Média de 23 problemas críticos descobertos na primeira auditoria.',
    icon: Shield,
  },
  {
    id: '04',
    tag: 'ATTRIBUTE',
    title: 'Você sabe quem realmente vendeu?',
    provocation: 'Google Ads mostra ROAS de 8. Meta mostra ROAS de 6. Os dois reivindicando a mesma conversão. Last click diz que foi branded search. Mas o cara só pesquisou sua marca porque viu 3 anúncios no Instagram. Se você só olha last click, você está premiando quem chegou por último.',
    solution: 'Precisian MMM (Marketing Mix Modeling)',
    solutionDesc: 'Modelagem estatística que revela a contribuição real de cada canal.',
    caseTitle: 'Resultado',
    caseResult: 'Fim do debate. Uma fonte de verdade. Decisão de budget vira ciência.',
    icon: Target,
  },
  {
    id: '05',
    tag: 'DECIDE',
    title: 'Quem na sua empresa consegue usar esses dados?',
    provocation: 'Dashboard com 47 gráficos. Ninguém sabe o que olhar primeiro. Analista apresenta. Diretor pergunta "o que eu faço com isso?". Silêncio. Dados que não viram decisão são só custo de armazenamento.',
    solution: 'Precisian Clarity',
    solutionDesc: 'Dashboards que respondem perguntas + AI Analyst que fala português.',
    caseTitle: 'Resultado',
    caseResult: 'Decisão acontece. Rápido. Com dado. Sem depender do analista estar online.',
    icon: BarChart3,
  },
  {
    id: '06',
    tag: 'CATALOG',
    title: 'Seus produtos estão prontos para vender?',
    provocation: '50.000 SKUs. Google reprova 30%. Meta rejeita 20%. TikTok nem sincroniza. Produto em ruptura? Ad continua rodando. Preço mudou? Feed mostra o antigo. Você está pagando para perder dinheiro.',
    solution: 'Precisian Catalog',
    solutionDesc: 'Feed inteligente que garante produtos corretos em qualquer plataforma.',
    caseTitle: 'Pague Menos',
    caseResult: 'Taxa de aprovação subiu. CPC caiu. ROAS subiu.',
    icon: Package,
  },
];

const dvqScores = [
  { range: '0-20%', status: 'CEGO', desc: 'Você toma decisões no escuro', color: '#666666' },
  { range: '21-50%', status: 'FRAGMENTADO', desc: 'Dados existem, mas não servem', color: '#888888' },
  { range: '51-80%', status: 'FUNCIONAL', desc: 'Opera, mas perde oportunidades', color: '#aaaaaa' },
  { range: '81-100%', status: 'PRECISIAN', desc: 'Dados viram vantagem competitiva', color: '#FD68B3' },
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
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Seus dados estão{' '}
            <span className="text-glow" style={{ color: colors.primary }}>
              mentindo
            </span>{' '}
            para você.
          </h1>

          <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed mb-8 max-w-xl">
            Quem entrega os dados está intrinsecamente enviesado. Google quer que você invista mais no Google. Meta quer que você invista mais na Meta. A Precisian quer que você saiba a verdade. E tome a melhor decisão.
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
          className="relative aspect-video rounded-xl overflow-hidden glass group cursor-pointer"
        >
          {/* Thumbnail placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center transition-all group-hover:scale-110 animate-pulse-glow"
              style={{ backgroundColor: `${colors.primary}33`, border: `2px solid ${colors.primary}` }}
            >
              <Play className="w-8 h-8 ml-1" style={{ color: colors.primary }} fill={colors.primary} />
            </div>
          </div>

          {/* Video label */}
          <div className="absolute bottom-4 left-4 font-mono text-xs" style={{ color: colors.primary }}>
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

function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 border-y" style={{ borderColor: colors.surfaceLight, backgroundColor: colors.surface }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            Empresas que pararam de adivinhar
          </h2>
          <p className="text-[#9CA3AF]">
            +200 projetos de dados implementados. +R$500M em receita corretamente atribuída.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-2xl font-bold text-white/30 hover:text-white transition-colors cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DVQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section id="dvq" ref={ref} className="py-24 md:py-32 bg-grid relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span
            className="inline-block font-mono text-xs uppercase tracking-widest px-4 py-2 rounded mb-6"
            style={{ border: `1px solid ${colors.primary}`, color: colors.primary }}
          >
            Metodologia Proprietária
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            DVQ: Data Value Quotient
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            O índice que revela quanto você está perdendo por confiar nos dados errados.
          </p>
        </motion.div>

        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-[#9CA3AF] max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          A maioria das empresas coleta dados. Poucas confiam neles. O gap entre "ter dados" e "decidir com dados" é enorme. E ele não está na ferramenta, no dashboard ou no analista. Está em cinco pontos críticos que raramente são tratados como sistema. O DVQ mapeia cada um e mostra onde o valor está vazando.
        </motion.p>

        {/* Provocations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {dvqProvocations.map((item, i) => {
            const Icon = item.icon;
            const isExpanded = expandedCard === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                className={`glass rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  isExpanded ? 'ring-2' : 'hover:border-[#FF2D78]'
                }`}
                style={{ borderColor: isExpanded ? colors.primary : undefined }}
                onClick={() => setExpandedCard(isExpanded ? null : item.id)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: colors.primary }} />
                  </div>
                  <span className="font-mono text-xs" style={{ color: colors.primary }}>
                    {item.id} // {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                {/* Provocation */}
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4">
                  {item.provocation}
                </p>

                {/* Expanded Content */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="border-t pt-4 mt-4"
                    style={{ borderColor: colors.surfaceLight }}
                  >
                    <div className="mb-4">
                      <span className="font-mono text-xs uppercase text-[#9CA3AF]">
                        Solução
                      </span>
                      <h4 className="font-semibold mt-1" style={{ color: colors.primary }}>
                        {item.solution}
                      </h4>
                      <p className="text-sm text-[#9CA3AF] mt-2">
                        {item.solutionDesc}
                      </p>
                    </div>
                    <div className="bg-[#0A0A0A] rounded-lg p-4">
                      <span className="font-mono text-xs text-[#9CA3AF]">{item.caseTitle}</span>
                      <p className="text-sm font-medium mt-1 text-white">
                        {item.caseResult}
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="flex items-center gap-2 mt-4 text-sm" style={{ color: colors.primary }}>
                  <span>{isExpanded ? 'Fechar' : 'Ver solução'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DVQ Score Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="glass rounded-xl p-8"
        >
          <h3 className="font-display text-2xl font-semibold text-center mb-8">
            Qual é o seu DVQ Score?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dvqScores.map((score, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-lg"
                style={{ backgroundColor: `${score.color}10`, border: `1px solid ${score.color}30` }}
              >
                <div className="text-2xl font-bold mb-1" style={{ color: score.color }}>
                  {score.range}
                </div>
                <div className="font-mono text-sm font-semibold mb-2" style={{ color: score.color }}>
                  {score.status}
                </div>
                <p className="text-xs text-[#9CA3AF]">{score.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-8 py-4 btn-primary text-sm"
            >
              Discover My Score
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
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
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Data Intelligence Partner
            </h2>
            <p className="text-lg text-[#a0a0a0] leading-relaxed">
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              AuditOS
            </h2>
            <p className="text-lg text-[#9CA3AF] mb-6">
              O sistema operacional lógico da Precisian para auditoria do GA4.
            </p>
            <p className="text-[#9CA3AF] mb-8 leading-relaxed">
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
          <h2 className="font-display text-3xl md:text-4xl font-bold">
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
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Quanto seus dados estão<br />custando para você?
          </h2>
          <p className="text-[#9CA3AF]">
            Em 48 horas, você vai saber exatamente onde está o vazamento.<br /> Diagnóstico gratuito. Sem compromisso. Sem enrolação.
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

export default function LandingV2() {
  return (
    <>
      <style>{styles}</style>
      <div className="landing-v2 min-h-screen">
        {/* Noise overlay */}
        <div className="noise-overlay" />

        <Header />
        <HeroSection />
        <ClientsSection />
        <DVQSection />
        <DataIntelligencePartnerSection />
        <AuditOSSection />
        <PartnersSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}

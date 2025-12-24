import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ChevronRight, Check, ArrowRight, Sparkles, Target, Database, Shield, BarChart3, Eye, Terminal, Zap } from 'lucide-react';
import { GlowCard } from './GlowCard';
import { NeonText, NeonHeading } from './NeonText';
import { TechButton, ActionButton, GhostButton } from './TechButton';
import { StatusBadge } from './StatusBadge';
import { ProgressIndicator } from './ProgressIndicator';
import { GridPattern } from './GridPattern';
import { useAnimationConfig } from '@/hooks/tech';

// 5 pilares DVQ com cores tech
const DVQ_PILLARS = [
  {
    id: 1,
    title: 'Mapeamento Completo da Jornada',
    subtitle: 'Full Customer Behavior Mapping',
    icon: Target,
    color: 'primary' as const,
    techColor: 'text-tech-primary',
    bgColor: 'bg-tech-primary/10',
    borderColor: 'border-tech-primary/30',
    description: 'Mapeamento de cada micro-evento na jornada. De clique em anúncio até adição ao carrinho ou agendamento de reunião.',
    details: [
      'Mapeamento de eventos pós-analytics',
      'Eventos online e offline rastreados',
      'Server-side tracking avançado',
      'Acompanhamento cross-device'
    ],
    problem: 'Quem entrega os dados está intrinsicamente enviesado. Sem mapeamento completo, você não sabe o que realmente está acontecendo.',
    products: [
      { name: 'Precisian Journey', path: '/precisian-events' },
      { name: 'GTM Setup', path: '/gtm-setup' }
    ],
    casePreview: {
      company: 'BCMed',
      result: 'R$ 1M+ em receita corretamente atribuída'
    },
    terminalCmd: 'precisian scan --journey'
  },
  {
    id: 2,
    title: 'Integração e Centralização',
    subtitle: 'Data Integration & Centralization',
    icon: Database,
    color: 'secondary' as const,
    techColor: 'text-tech-secondary',
    bgColor: 'bg-tech-secondary/10',
    borderColor: 'border-tech-secondary/30',
    description: 'Catálogo integrado com todas as plataformas. Configurar campanhas específicas para grupos de produtos.',
    details: [
      'Integração Google, TikTok, WhatsApp, Instagram',
      'Preços e estoque em tempo real',
      'Alto volume de SKUs automatizados',
      'Rótulos personalizados avançados'
    ],
    problem: 'Anunciar produtos fora de estoque ou com preço errado destrói seu ROAS e Quality Score.',
    products: [
      { name: 'Precisian Catalog', path: '/precisian-sku' },
      { name: 'Precisian Core', path: '/precisian-core' }
    ],
    casePreview: {
      company: 'Pague Menos',
      result: '+85% taxa de aprovação, -40% CPC'
    },
    terminalCmd: 'precisian sync --catalog'
  },
  {
    id: 3,
    title: 'Governança e Disponibilidade',
    subtitle: 'Data Governance & Availability',
    icon: Shield,
    color: 'success' as const,
    techColor: 'text-tech-success',
    bgColor: 'bg-tech-success/10',
    borderColor: 'border-tech-success/30',
    description: 'Conciliação de informações cross-platform. GA diz uma coisa, e-commerce diz outra - qual é a verdade?',
    details: [
      'Receita Captada vs Faturada reconciliada',
      'Visibilidade real por canal',
      'Discrepâncias eliminadas',
      'LGPD compliant'
    ],
    problem: 'Discrepância de mais de 50% entre faturamento do e-commerce e do GA4 é comum.',
    products: [
      { name: 'Precisian Core', path: '/precisian-core' },
      { name: 'GA4 Optimization', path: '/ga4-optimization' }
    ],
    casePreview: {
      company: 'Nuvio Foods',
      result: '100% consistência cross-platform'
    },
    terminalCmd: 'precisian validate --governance'
  },
  {
    id: 4,
    title: 'Modelo de Atribuição Inteligente',
    subtitle: 'Smart Attribution Modeling',
    icon: BarChart3,
    color: 'warning' as const,
    techColor: 'text-tech-warning',
    bgColor: 'bg-tech-warning/10',
    borderColor: 'border-tech-warning/30',
    description: 'Descobrir o impacto real que cada canal de mídia teve proporcionalmente no processo de compra.',
    details: [
      'Além do último clique isolado',
      '100% das ações mensuradas',
      'Projeções baseadas em budget',
      'ROI online e offline'
    ],
    problem: 'Olhar só o último clique é como dar o crédito do gol só pro atacante.',
    products: [
      { name: 'Precisian MMM', path: '/google-meridian' },
      { name: 'Precisian Attribution', path: '/precisian-attribution' }
    ],
    casePreview: {
      company: 'Marketing Mix Modeling',
      result: 'Fonte de verdade para todos os canais'
    },
    terminalCmd: 'precisian model --attribution'
  },
  {
    id: 5,
    title: 'Insights Visuais em Tempo Real',
    subtitle: 'Real-time Predictive Insights',
    icon: Eye,
    color: 'primary' as const,
    techColor: 'text-neon-cyan',
    bgColor: 'bg-neon-cyan/10',
    borderColor: 'border-neon-cyan/30',
    description: 'Visão dos dados em tempo real. Um analista de dados 24/7 a seu dispor com IA.',
    details: [
      'Dashboards customizados',
      'AI Data Analyst 24/7',
      'Alertas de anomalias',
      'Profundidade multinível'
    ],
    problem: 'Relatórios manuais consomem dias e sempre chegam atrasados.',
    products: [
      { name: 'Precisian Clarity', path: '/data-visualization' },
      { name: 'AI Insights', path: '/ai-insights' }
    ],
    casePreview: {
      company: 'Intelligence Partner',
      result: 'Decisões data-driven em tempo real'
    },
    terminalCmd: 'precisian insight --realtime'
  }
];

interface DVQStepperTechProps {
  onStepClick?: (stepId: number) => void;
  className?: string;
  compact?: boolean;
}

const DVQStepperTech = ({ onStepClick, className, compact = false }: DVQStepperTechProps) => {
  const { shouldAnimate, getMotionProps } = useAnimationConfig();
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleStepClick = (stepId: number) => {
    setActiveStep(activeStep === stepId ? null : stepId);
    onStepClick?.(stepId);
  };

  const handleMarkComplete = (stepId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedSteps(prev =>
      prev.includes(stepId)
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const dvqScore = Math.round((completedSteps.length / DVQ_PILLARS.length) * 100);

  return (
    <section className={cn("w-full relative", className)}>
      {/* Background Pattern */}
      <GridPattern
        variant="circuit"
        intensity="subtle"
        color="primary"
        className="absolute inset-0 opacity-30"
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tech-primary/10 border border-tech-primary/30 mb-6"
          >
            <Terminal className="h-4 w-4 text-tech-primary" />
            <span className="text-sm font-mono text-tech-primary uppercase tracking-wider">
              Metodologia Proprietária
            </span>
          </motion.div>

          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <NeonText variant="primary" glow="medium">
                Data Value Quotient (DVQ)
              </NeonText>
            </h2>
          </motion.div>

          <motion.p
            initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4"
          >
            Para ter o melhor resultado possível em toda a sua estratégia de investimento em marketing,
            você precisa saber exatamente o que cada canal trouxe de resultado.
          </motion.p>

          <motion.p
            initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base font-mono"
          >
            <NeonText variant="primary" glow="subtle" size="md">
              O valor de ter os dados 100% corretos dessa jornada = DVQ
            </NeonText>
          </motion.p>
        </div>

        {/* Problem Statement Alert */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : {}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <GlowCard
            glowColor="error"
            glowIntensity="low"
            className="mb-10 p-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-tech-error/20 rounded-lg">
                <Zap className="h-6 w-6 text-tech-error" />
              </div>
              <div>
                <p className="font-mono text-sm text-tech-error uppercase tracking-wider mb-1">
                  ⚠️ Problema Crítico Detectado
                </p>
                <p className="text-muted-foreground">
                  Quem entrega os dados está intrinsicamente enviesado. Suas decisões estão baseadas em informações incompletas.
                </p>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        {/* Pillars */}
        <div className="space-y-4">
          {DVQ_PILLARS.map((pillar, index) => {
            const isActive = activeStep === pillar.id;
            const isCompleted = completedSteps.includes(pillar.id);
            const IconComponent = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                initial={shouldAnimate ? { opacity: 0, x: -30 } : {}}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <GlowCard
                  glowIntensity={isActive ? 'high' : 'low'}
                  glowColor={isCompleted ? 'success' : pillar.color}
                  cornerBorders={isActive}
                  scanningLine={isActive && shouldAnimate}
                  onClick={() => handleStepClick(pillar.id)}
                  className={cn(
                    "cursor-pointer transition-all duration-300",
                    isActive && "scale-[1.01]"
                  )}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div
                        className={cn(
                          "flex items-center justify-center w-14 h-14 rounded-lg transition-all duration-300 border",
                          isCompleted
                            ? "bg-tech-success/20 border-tech-success text-tech-success"
                            : isActive
                            ? `${pillar.bgColor} ${pillar.borderColor} ${pillar.techColor}`
                            : "bg-tech-surface border-tech-primary/20 text-muted-foreground"
                        )}
                      >
                        {isCompleted ? (
                          <Check className="h-7 w-7" />
                        ) : (
                          <IconComponent className="h-7 w-7" />
                        )}
                      </div>

                      {/* Title */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className={cn(
                            "text-sm font-mono font-bold",
                            pillar.techColor
                          )}>
                            [{String(pillar.id).padStart(2, '0')}]
                          </span>
                          <h3 className="text-lg font-bold">{pillar.title}</h3>
                          {isCompleted && (
                            <StatusBadge status="success" size="sm" variant="outline">
                              Verified
                            </StatusBadge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground font-mono mt-1">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Expand Icon */}
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "p-2 rounded-lg transition-colors",
                        isActive ? "bg-tech-primary/20" : "bg-tech-surface"
                      )}
                    >
                      <ChevronRight className={cn(
                        "h-5 w-5 transition-colors",
                        isActive ? "text-tech-primary" : "text-muted-foreground"
                      )} />
                    </motion.div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-6 space-y-6">
                          {/* Terminal Command */}
                          <div className="bg-black/80 rounded-lg p-3 font-mono text-sm border border-tech-primary/20">
                            <span className="text-tech-success">$</span>
                            <span className="text-tech-primary ml-2">{pillar.terminalCmd}</span>
                            <span className="text-tech-primary animate-tech-blink ml-1">▋</span>
                          </div>

                          {/* Problem Alert */}
                          <div className="bg-tech-error/10 border border-tech-error/30 rounded-lg p-4">
                            <p className="text-sm text-tech-error font-medium flex items-start gap-2">
                              <span className="mt-0.5">⚠️</span>
                              <span>{pillar.problem}</span>
                            </p>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground">
                            {pillar.description}
                          </p>

                          {/* Details Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {pillar.details.map((detail, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <Check className={cn("h-4 w-4 flex-shrink-0", pillar.techColor)} />
                                <span>{detail}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Case Preview */}
                          <GlowCard
                            glowColor="success"
                            glowIntensity="low"
                            className="p-4"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-tech-success/20 rounded-lg">
                                <Sparkles className="h-4 w-4 text-tech-success" />
                              </div>
                              <div>
                                <p className="text-xs font-mono text-tech-success uppercase tracking-wider">
                                  Case de Sucesso
                                </p>
                                <p className="font-semibold">{pillar.casePreview.company}</p>
                                <p className="text-sm text-tech-success">{pillar.casePreview.result}</p>
                              </div>
                            </div>
                          </GlowCard>

                          {/* Products */}
                          <div className="space-y-3">
                            <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                              Soluções Disponíveis:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {pillar.products.map(product => (
                                <Link
                                  key={product.path}
                                  to={product.path}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <TechButton
                                    techVariant="hologram"
                                    size="sm"
                                    glowIntensity="subtle"
                                  >
                                    {product.name}
                                    <ArrowRight className="h-3 w-3 ml-1" />
                                  </TechButton>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-3 pt-4 border-t border-tech-primary/20">
                            <TechButton
                              techVariant={isCompleted ? "hologram" : "neon"}
                              variant={isCompleted ? "secondary" : "primary"}
                              size="sm"
                              onClick={(e) => handleMarkComplete(pillar.id, e)}
                            >
                              {isCompleted ? (
                                <>Desmarcar</>
                              ) : (
                                <>
                                  <Check className="h-4 w-4 mr-1" />
                                  Entendi este pilar
                                </>
                              )}
                            </TechButton>
                            <GhostButton size="sm" asChild>
                              <Link to="/contact" onClick={(e) => e.stopPropagation()}>
                                Falar com especialista
                              </Link>
                            </GhostButton>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Summary */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 30 } : {}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10"
        >
          <GlowCard
            glowColor="primary"
            glowIntensity="medium"
            cornerBorders
            className="p-6"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-1 w-full lg:w-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold font-mono text-tech-primary">
                    {dvqScore}%
                  </div>
                  <div>
                    <p className="font-semibold text-lg">
                      Seu DVQ Score Atual
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {completedSteps.length}/{DVQ_PILLARS.length} pilares compreendidos
                    </p>
                  </div>
                </div>

                <ProgressIndicator
                  value={dvqScore}
                  variant="terminal"
                  color="primary"
                  showValue={false}
                />
              </div>

              <div className="text-center lg:text-right">
                <p className="text-muted-foreground mb-4">
                  {completedSteps.length === 0
                    ? "Explore cada pilar para descobrir o tamanho do problema"
                    : completedSteps.length === DVQ_PILLARS.length
                    ? "Você entendeu todos os pilares! Pronto para o diagnóstico real?"
                    : "Continue explorando para maximizar seu DVQ Score"}
                </p>
                <Link to="/contact">
                  <ActionButton>
                    Descobrir meu DVQ Score Real
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </ActionButton>
                </Link>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
};

export default DVQStepperTech;
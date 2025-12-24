import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight, Check, ArrowRight, Sparkles, Target, Database, Shield, BarChart3, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

// 5 pilares exatos do DVQ conforme apresentação Precisian
const DVQ_PILLARS = [
  {
    id: 1,
    title: 'Mapeamento Completo da Jornada',
    subtitle: 'Full Customer Behavior Mapping with micro events',
    icon: Target,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    description: 'Mapeamento de cada micro-evento na jornada. De clique em anúncio até adição ao carrinho ou agendamento de reunião.',
    details: [
      'Mapeamento de eventos pós-analytics como etapas do processo comercial',
      'Eventos que acontecem online ou offline',
      'Server-side tracking para melhorar atribuição',
      'Acompanhamento de eventos cross-device'
    ],
    problem: 'Quem entrega os dados está intrinsicamente enviesado. Sem mapeamento completo, você não sabe o que realmente está acontecendo.',
    products: [
      { name: 'Precisian Journey', path: '/precisian-events' },
      { name: 'GTM Setup', path: '/gtm-setup' }
    ],
    casePreview: {
      company: 'BCMed',
      result: 'R$ 1M+ em receita corretamente atribuída'
    }
  },
  {
    id: 2,
    title: 'Integração e Centralização',
    subtitle: 'Data integration and centralization',
    icon: Database,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    description: 'Configurar campanhas específicas para grupos de produtos ou serviços. Catálogo integrado com todas as plataformas.',
    details: [
      'Catálogo integrado com Google, TikTok, WhatsApp, Instagram',
      'Atualização de preços e estoque em tempo real',
      'Altíssimo volume de SKUs gerenciados automaticamente',
      'Rótulos personalizados e regras avançadas'
    ],
    problem: 'Anunciar produtos fora de estoque ou com preço errado destrói seu ROAS e Quality Score.',
    products: [
      { name: 'Precisian Catalog', path: '/precisian-sku' },
      { name: 'Precisian Core', path: '/precisian-core' }
    ],
    casePreview: {
      company: 'Pague Menos',
      result: '+85% taxa de aprovação, -40% CPC'
    }
  },
  {
    id: 3,
    title: 'Governança e Disponibilidade',
    subtitle: 'Data governance & availability',
    icon: Shield,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    description: 'Conciliação de informações cross-platform. GA diz uma coisa, e-commerce diz outra - qual é a verdade?',
    details: [
      'Mídia conta Receita Captada, deveria contar Receita Faturada',
      'Visibilidade de quais canais estão de fato trazendo retorno',
      'Eliminar discrepâncias entre plataformas',
      'Dados seguros, LGPD compliant'
    ],
    problem: 'Discrepância de mais de 50% entre faturamento do e-commerce e do GA4 é comum. Você está investindo no escuro.',
    products: [
      { name: 'Precisian Core', path: '/precisian-core' },
      { name: 'GA4 Optimization', path: '/ga4-optimization' }
    ],
    casePreview: {
      company: 'Nuvio Foods',
      result: '100% consistência de dados cross-platform'
    }
  },
  {
    id: 4,
    title: 'Modelo de Atribuição Inteligente',
    subtitle: 'Smart attribution modeling',
    icon: BarChart3,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    description: 'Descobrir o impacto real que cada canal de mídia teve proporcionalmente no processo de compra.',
    details: [
      'Ir além do último clique isolado',
      'Impacto e incrementalidade de 100% das ações',
      'Projetar impactos baseado em mudanças de budget',
      'ROI de mídia online e offline mensurado'
    ],
    problem: 'Olhar só o último clique é como dar o crédito do gol só pro atacante. O time todo contribuiu.',
    products: [
      { name: 'Precisian MMM', path: '/google-meridian' },
      { name: 'Precisian Attribution', path: '/precisian-attribution' }
    ],
    casePreview: {
      company: 'Marketing Mix Modeling',
      result: 'Sua fonte de verdade para todos os canais'
    }
  },
  {
    id: 5,
    title: 'Insights Visuais em Tempo Real',
    subtitle: 'Visual Real-time and Predictive insights',
    icon: Eye,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    description: 'Visão dos dados em tempo real. Um analista de dados 24/7 a seu dispor com IA.',
    details: [
      'Dashboards customizados com KPIs específicos',
      'AI Data Analyst que responde qualquer pergunta',
      'Alertas sobre anomalias que afetam operação',
      'Profundidade para todos os níveis da empresa'
    ],
    problem: 'Relatórios manuais consomem dias e sempre chegam atrasados. Você está reagindo ao passado.',
    products: [
      { name: 'Precisian Clarity', path: '/data-visualization' },
      { name: 'AI Insights', path: '/ai-insights' }
    ],
    casePreview: {
      company: 'Intelligence Partner',
      result: 'Decisões data-driven em tempo real'
    }
  }
];

interface DVQStepperProps {
  onStepClick?: (stepId: number) => void;
  className?: string;
  compact?: boolean;
}

const DVQStepper = ({ onStepClick, className, compact = false }: DVQStepperProps) => {
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

  return (
    <div className={cn("w-full", className)}>
      {/* Header */}
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4">
          <Sparkles className="h-3 w-3 mr-1" />
          Nossa Metodologia
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Data Value Quotient (DVQ)
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
          Para ter o melhor resultado possível em toda a sua estratégia de investimento em marketing,
          você precisa saber exatamente o que cada canal trouxe de resultado.
        </p>
        <p className="text-base text-primary font-medium">
          O valor de ter os dados 100% corretos dessa jornada completa nós chamamos de DVQ.
        </p>
      </div>

      {/* Problem Statement */}
      <Card className="mb-8 border-destructive/30 bg-destructive/5">
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            <span className="font-semibold text-destructive">Problema geral dos dados de performance:</span>{' '}
            quem entrega os dados está intrinsicamente enviesado.
          </p>
        </CardContent>
      </Card>

      {/* Steps */}
      <div className="space-y-4">
        {DVQ_PILLARS.map((pillar, index) => {
          const isActive = activeStep === pillar.id;
          const isCompleted = completedSteps.includes(pillar.id);
          const IconComponent = pillar.icon;

          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden",
                  isActive && "ring-2 ring-primary shadow-lg",
                  isCompleted && "bg-green-50/50 dark:bg-green-950/20"
                )}
                onClick={() => handleStepClick(pillar.id)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Step Number / Icon */}
                      <div
                        className={cn(
                          "flex items-center justify-center w-14 h-14 rounded-xl transition-colors",
                          isCompleted
                            ? "bg-green-500 text-white"
                            : isActive
                            ? "bg-primary text-primary-foreground"
                            : pillar.bgColor
                        )}
                      >
                        {isCompleted ? (
                          <Check className="h-7 w-7" />
                        ) : (
                          <IconComponent className={cn("h-7 w-7", isActive ? "" : pillar.color)} />
                        )}
                      </div>

                      {/* Title */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-bold text-primary">
                            {pillar.id}.
                          </span>
                          <CardTitle className="text-lg">{pillar.title}</CardTitle>
                          {isCompleted && (
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                              Concluído
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{pillar.subtitle}</p>
                      </div>
                    </div>

                    {/* Expand Icon */}
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </div>
                </CardHeader>

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
                      <CardContent className="pt-2 pb-6">
                        {/* Problem highlight */}
                        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
                          <p className="text-sm text-destructive font-medium">
                            {pillar.problem}
                          </p>
                        </div>

                        {/* Description */}
                        <CardDescription className="mb-4 text-base">
                          {pillar.description}
                        </CardDescription>

                        {/* Details list */}
                        <ul className="space-y-2 mb-6">
                          {pillar.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className={cn("h-4 w-4 mt-0.5 flex-shrink-0", pillar.color)} />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Case Preview */}
                        <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4 mb-6">
                          <p className="text-xs text-green-600 font-medium mb-1">Case de Sucesso</p>
                          <p className="text-sm font-semibold">{pillar.casePreview.company}</p>
                          <p className="text-sm text-green-700 dark:text-green-400">{pillar.casePreview.result}</p>
                        </div>

                        {/* Related Products */}
                        <div className="space-y-3">
                          <p className="text-sm font-medium">Soluções que resolvem isso:</p>
                          <div className="flex flex-wrap gap-2">
                            {pillar.products.map(product => (
                              <Link
                                key={product.path}
                                to={product.path}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Badge
                                  variant="outline"
                                  className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer py-2 px-3"
                                >
                                  {product.name}
                                  <ArrowRight className="h-3 w-3 ml-1" />
                                </Badge>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 mt-6 pt-4 border-t">
                          <Button
                            variant={isCompleted ? "outline" : "default"}
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
                          </Button>
                          <Button variant="ghost" size="sm" asChild>
                            <Link to="/intelligence-partner" onClick={(e) => e.stopPropagation()}>
                              Falar com especialista
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Progress Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10"
      >
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-6 pb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-lg">
                  Seu entendimento DVQ: {completedSteps.length}/{DVQ_PILLARS.length} pilares
                </p>
                <p className="text-muted-foreground">
                  {completedSteps.length === 0
                    ? "Clique em cada pilar para entender o tamanho do problema"
                    : completedSteps.length === DVQ_PILLARS.length
                    ? "Você entendeu todos os pilares! Pronto para o diagnóstico?"
                    : `Continue explorando para entender o valor dos seus dados`}
                </p>
              </div>
              <Button size="lg" className="whitespace-nowrap">
                Descobrir meu DVQ Score
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default DVQStepper;
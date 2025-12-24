import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Users, ArrowRight, Filter, Building2, Terminal, Zap, ChevronDown } from 'lucide-react';
import { GlowCard, StatsCard } from './GlowCard';
import { NeonText } from './NeonText';
import { TechButton, ActionButton, GhostButton } from './TechButton';
import { StatusBadge } from './StatusBadge';
import { GridPattern } from './GridPattern';
import { ProgressIndicator } from './ProgressIndicator';
import { useAnimationConfig } from '@/hooks/tech';
import { Input } from '@/components/ui/input';

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  companyDescription: string;
  industry: string;
  challenge: string;
  solution: string[];
  results: {
    metric: string;
    value: string;
    description?: string;
  }[];
  products: string[];
  productPath: string;
  terminalOutput?: string;
}

// Cases reais com terminal commands
const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'bcmed',
    title: 'Visão Unificada do Funil de Vendas',
    company: 'BCMed',
    companyDescription: 'Top distribuidor de produtos de saúde do Brasil',
    industry: 'healthcare',
    challenge: 'Múltiplas plataformas independentes que não se comunicavam. Impossível visualizar o funil real de compra.',
    solution: [
      'Mapeamento inteligente de todas as plataformas',
      'Plano de mensuração visual completo',
      'API que integra todas as plataformas',
      'Dados centralizados em tempo real'
    ],
    results: [
      { metric: 'Receita Atribuída', value: 'R$ 1M+', description: 'às campanhas de marketing' },
      { metric: 'Visibilidade', value: '100%', description: 'do funil completo' },
      { metric: 'Decisões', value: 'Data-driven', description: 'baseadas em dados reais' }
    ],
    products: ['precisian-journey'],
    productPath: '/precisian-events',
    terminalOutput: '✅ revenue_attributed: R$ 1.2M | visibility: 100% | status: OPERATIONAL'
  },
  {
    id: 'paguemenos',
    title: 'Catálogo Integrado em Tempo Real',
    company: 'Pague Menos',
    companyDescription: 'Top 3 do varejo farma no Brasil',
    industry: 'retail',
    challenge: 'Milhares de mudanças diárias de preço afetando campanhas. Catálogos desatualizados destruindo ROAS.',
    solution: [
      'Integração com Google, Meta, TikTok, Pinterest',
      'Conformidade garantida em todas as plataformas',
      'Sincronização de preços e estoque em tempo real',
      'Regras avançadas e rótulos personalizados'
    ],
    results: [
      { metric: 'Taxa de Aprovação', value: '+85%', description: 'nas plataformas de mídia' },
      { metric: 'CPC', value: '-40%', description: 'redução significativa' },
      { metric: 'Quality Score', value: '+60%', description: 'melhora impactando ROAS' }
    ],
    products: ['precisian-catalog'],
    productPath: '/precisian-sku',
    terminalOutput: '✅ approval_rate: +85% | cpc_reduction: -40% | quality_score: +60%'
  },
  {
    id: 'nuvio',
    title: 'Conciliação Cross-Platform',
    company: 'Nuvio Foods',
    companyDescription: 'Clube de assinatura de alimentos saudáveis',
    industry: 'ecommerce',
    challenge: 'Discrepância de mais de 50% entre faturamento da Vtex e do GA4. Vendas de assinatura invisíveis.',
    solution: [
      'Integração e-commerce com GA4 bidirecional',
      'Conciliação automática de atribuição',
      'Transmissão criptografada LGPD compliant',
      'Sincronização contínua em tempo real'
    ],
    results: [
      { metric: 'Consistência', value: '100%', description: 'dos pedidos em todas as plataformas' },
      { metric: 'Visibilidade', value: 'Total', description: 'da efetividade da mídia' },
      { metric: 'Vendas Offline', value: 'Atribuídas', description: 'às campanhas digitais' }
    ],
    products: ['precisian-core'],
    productPath: '/precisian-core',
    terminalOutput: '✅ consistency: 100% | visibility: FULL | offline_attribution: ENABLED'
  }
];

const INDUSTRIES = [
  { value: 'all', label: 'Todos', icon: '◉' },
  { value: 'healthcare', label: 'Saúde', icon: '🏥' },
  { value: 'retail', label: 'Varejo', icon: '🛒' },
  { value: 'ecommerce', label: 'E-commerce', icon: '📦' }
];

const PRODUCT_NAMES: Record<string, string> = {
  'precisian-journey': 'Precisian Journey',
  'precisian-catalog': 'Precisian Catalog',
  'precisian-core': 'Precisian Core',
  'precisian-mmm': 'Precisian MMM',
  'precisian-clarity': 'Precisian Clarity'
};

interface CaseStudiesGridTechProps {
  className?: string;
  limit?: number;
  showFilters?: boolean;
}

const CaseStudiesGridTech = ({ className, limit, showFilters = true }: CaseStudiesGridTechProps) => {
  const { shouldAnimate } = useAnimationConfig();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const filteredCases = useMemo(() => {
    let filtered = CASE_STUDIES;

    if (selectedIndustry !== 'all') {
      filtered = filtered.filter(c => c.industry === selectedIndustry);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(c =>
        c.title.toLowerCase().includes(query) ||
        c.company.toLowerCase().includes(query) ||
        c.challenge.toLowerCase().includes(query)
      );
    }

    if (limit) {
      filtered = filtered.slice(0, limit);
    }

    return filtered;
  }, [searchQuery, selectedIndustry, limit]);

  return (
    <section className={cn("w-full relative", className)}>
      {/* Background */}
      <GridPattern
        variant="dots"
        intensity="subtle"
        color="primary"
        className="absolute inset-0 opacity-20"
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tech-success/10 border border-tech-success/30 mb-6"
          >
            <TrendingUp className="h-4 w-4 text-tech-success" />
            <span className="text-sm font-mono text-tech-success uppercase tracking-wider">
              Cases de Sucesso Verificados
            </span>
          </motion.div>

          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <NeonText variant="primary" glow="medium">
                Resultados Comprovados
              </NeonText>
            </h2>
          </motion.div>

          <motion.p
            initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Não é apresentação comercial. É um guia de descoberta baseado em dados reais
            de empresas que tinham o mesmo problema que você.
          </motion.p>
        </div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4 mb-8"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-tech-primary" />
              <Input
                placeholder="Buscar cases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-tech-surface/50 border-tech-primary/30 font-mono focus:border-tech-primary"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {INDUSTRIES.map(industry => (
                <TechButton
                  key={industry.value}
                  techVariant={selectedIndustry === industry.value ? "neon" : "hologram"}
                  size="sm"
                  glowIntensity={selectedIndustry === industry.value ? "medium" : "none"}
                  onClick={() => setSelectedIndustry(industry.value)}
                >
                  <span className="mr-1">{industry.icon}</span>
                  {industry.label}
                </TechButton>
              ))}
            </div>
          </motion.div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                layout
                initial={shouldAnimate ? { opacity: 0, y: 30 } : {}}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="h-full"
              >
                <GlowCard
                  glowIntensity={expandedCase === caseStudy.id ? 'high' : 'medium'}
                  glowColor="success"
                  cornerBorders={expandedCase === caseStudy.id}
                  scanningLine={expandedCase === caseStudy.id && shouldAnimate}
                  onClick={() => setExpandedCase(
                    expandedCase === caseStudy.id ? null : caseStudy.id
                  )}
                  className="h-full cursor-pointer"
                >
                  {/* Header */}
                  <div className="p-4 pb-2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-tech-primary/20 rounded-lg border border-tech-primary/30">
                        <Building2 className="h-5 w-5 text-tech-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{caseStudy.company}</h3>
                        <p className="text-xs text-muted-foreground font-mono">
                          {caseStudy.companyDescription}
                        </p>
                      </div>
                    </div>

                    <StatusBadge
                      status="success"
                      variant="outline"
                      size="sm"
                      className="mb-3"
                    >
                      {INDUSTRIES.find(i => i.value === caseStudy.industry)?.label}
                    </StatusBadge>

                    <h4 className="text-lg font-semibold mb-3 leading-tight">
                      {caseStudy.title}
                    </h4>
                  </div>

                  {/* Results Preview */}
                  <div className="px-4 space-y-2 mb-4">
                    {caseStudy.results.map((result, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 bg-tech-success/10 border border-tech-success/20 rounded"
                      >
                        <span className="text-xs text-muted-foreground font-mono uppercase">
                          {result.metric}
                        </span>
                        <span className="font-bold text-tech-success font-mono">
                          {result.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Terminal Output Preview */}
                  <div className="mx-4 mb-4 p-2 bg-black/80 rounded border border-tech-primary/20 font-mono text-xs">
                    <span className="text-tech-success">$</span>
                    <span className="text-tech-primary ml-1">precisian status</span>
                    <div className="text-tech-success mt-1 truncate">
                      {caseStudy.terminalOutput}
                    </div>
                  </div>

                  {/* Product Badge */}
                  <div className="px-4 pb-4 flex gap-2">
                    {caseStudy.products.map(product => (
                      <StatusBadge
                        key={product}
                        status="processing"
                        variant="minimal"
                        size="sm"
                        showDot={false}
                      >
                        {PRODUCT_NAMES[product]}
                      </StatusBadge>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedCase === caseStudy.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-6 space-y-6 border-t border-tech-primary/20 pt-4">
                          {/* Challenge */}
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="h-4 w-4 text-tech-error" />
                              <span className="text-sm font-mono text-tech-error uppercase tracking-wider">
                                Problema Detectado
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground bg-tech-error/10 border border-tech-error/20 rounded p-3">
                              {caseStudy.challenge}
                            </p>
                          </div>

                          {/* Solution */}
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Terminal className="h-4 w-4 text-tech-primary" />
                              <span className="text-sm font-mono text-tech-primary uppercase tracking-wider">
                                Solução Implementada
                              </span>
                            </div>
                            <ul className="space-y-2">
                              {caseStudy.solution.map((item, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="text-sm text-muted-foreground flex items-start gap-2"
                                >
                                  <span className="text-tech-primary mt-1">→</span>
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA */}
                          <div className="flex gap-3">
                            <Link to={caseStudy.productPath} className="flex-1">
                              <ActionButton className="w-full">
                                Conhecer {PRODUCT_NAMES[caseStudy.products[0]]}
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </ActionButton>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Click hint */}
                  {expandedCase !== caseStudy.id && (
                    <div className="px-4 pb-4">
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <ChevronDown className="h-3 w-3 animate-bounce" />
                        <span className="font-mono">Expandir detalhes</span>
                      </div>
                    </div>
                  )}
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredCases.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <GlowCard glowColor="warning" glowIntensity="low" className="max-w-md mx-auto p-8">
              <Users className="h-12 w-12 mx-auto text-tech-warning mb-4" />
              <h3 className="text-lg font-bold mb-2">
                <NeonText variant="warning">Nenhum case encontrado</NeonText>
              </h3>
              <p className="text-muted-foreground mb-4 font-mono text-sm">
                Ajuste seus filtros de busca
              </p>
              <TechButton
                techVariant="hologram"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedIndustry('all');
                }}
              >
                Limpar filtros
              </TechButton>
            </GlowCard>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 30 } : {}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <GlowCard
            glowColor="primary"
            glowIntensity="medium"
            cornerBorders
            className="p-8"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  <NeonText variant="primary" glow="subtle">
                    Sua empresa tem o mesmo problema?
                  </NeonText>
                </h3>
                <p className="text-muted-foreground max-w-xl">
                  Descubra o tamanho da oportunidade de melhoria.
                  Diagnóstico gratuito baseado em dados reais.
                </p>
              </div>
              <Link to="/contact">
                <ActionButton>
                  Descobrir meu DVQ Score
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ActionButton>
              </Link>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesGridTech;
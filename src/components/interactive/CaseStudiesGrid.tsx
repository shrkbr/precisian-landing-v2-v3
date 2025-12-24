import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search, TrendingUp, Users, ArrowRight, Filter, Quote, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

// Cases reais da apresentação Precisian
const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'bcmed',
    title: 'Visão Unificada do Funil de Vendas',
    company: 'BCMed',
    companyDescription: 'Um dos maiores distribuidores de produtos de saúde do Brasil',
    industry: 'healthcare',
    challenge: 'A BCMed utiliza múltiplas plataformas independentes para o seu processo comercial (WhatsApp, sistema de pedidos, mídia paga digital), que não se comunicavam entre si. Isso tornava impossível visualizar todo o funil real de compra dos clientes e o resultado real das campanhas de marketing.',
    solution: [
      'Mapeamento inteligente: Análise detalhada de todas as plataformas envolvidas e cada micro-evento no processo comercial',
      'Plano de mensuração: Documentação visual completa com telas, eventos, parâmetros e destinos de cada dado coletado',
      'Implementação técnica: Configuração de API que integra todas as plataformas e cria visão unificada da jornada do lead',
      'Integração avançada: Unificação dos dados em um banco centralizado'
    ],
    results: [
      { metric: 'Receita Atribuída', value: 'R$ 1M+', description: 'Corretamente atribuída às campanhas de marketing' },
      { metric: 'Visibilidade', value: '100%', description: 'Do funil de todos os canais de venda' },
      { metric: 'Decisões', value: 'Data-driven', description: 'Investimento assertivo baseado em dados reais' }
    ],
    products: ['precisian-journey'],
    productPath: '/precisian-events'
  },
  {
    id: 'paguemenos',
    title: 'Catálogo Integrado em Tempo Real',
    company: 'Pague Menos',
    companyDescription: 'Top 3 do varejo farma no Brasil',
    industry: 'retail',
    challenge: 'A Pague Menos tinha diversos desafios com seu catálogo: gerar automaticamente catálogos integrados em tempo real, separados entre 1P e 3P para campanhas com objetivos diferentes. Em um mercado extremamente sensível a preço, a empresa aplica milhares de mudanças diárias que afetam campanhas como Google Shopping.',
    solution: [
      'Integração Universal: Conectamos com Google Merchant, Meta Commerce Manager, TikTok, Pinterest e qualquer plataforma via API',
      'Conformidade Garantida: Feed atende todos os requisitos técnicos de cada plataforma, evitando reprovações',
      'Atualização em Tempo Real: Sincronização de preços, estoque, frete automaticamente',
      'Rótulos Personalizados: Criação de rótulos que não são enviados por integrações nativas',
      'Regras Avançadas: Não anunciar produtos com <20% de margem, campos calculados'
    ],
    results: [
      { metric: 'Taxa de Aprovação', value: '+85%', description: 'Dos produtos nas plataformas de mídia' },
      { metric: 'CPC', value: '-40%', description: 'Através da remoção de ads para produtos fora de estoque' },
      { metric: 'Quality Score', value: '+60%', description: 'Melhora significativa, impactando ROAS' }
    ],
    products: ['precisian-catalog'],
    productPath: '/precisian-sku'
  },
  {
    id: 'nuvio',
    title: 'Conciliação Cross-Platform',
    company: 'Nuvio Foods',
    companyDescription: 'Clube de assinatura de alimentos saudáveis',
    industry: 'ecommerce',
    challenge: 'A Nuvio não conseguia ter visibilidade da recorrência dos clientes que assinavam o clube. As vendas eram registradas, a Vtex contabilizava a assinatura mensal, mas isso causava uma discrepância de mais de 50% entre o faturamento da Vtex e o faturamento do GA4.',
    solution: [
      'Integração Multi-Plataforma: Conectamos e-commerce com GA4 com sistema que se retro-alimenta via IDs únicos',
      'Conciliação de Atribuição: Cruzamento automático de dados de vendas com conversões reportadas',
      'Dados Seguros: Transmissão criptografada e anonimização seguindo LGPD',
      'Sincronização em Tempo Real: Dados de vendas enviados continuamente para otimização'
    ],
    results: [
      { metric: 'Consistência', value: '100%', description: 'Dos pedidos em todas as plataformas' },
      { metric: 'Visibilidade', value: 'Total', description: 'Da efetividade da mídia paga' },
      { metric: 'Vendas Offline', value: 'Atribuídas', description: 'Corretamente às campanhas digitais' }
    ],
    products: ['precisian-core'],
    productPath: '/precisian-core'
  }
];

const INDUSTRIES = [
  { value: 'all', label: 'Todos os Setores' },
  { value: 'healthcare', label: 'Saúde' },
  { value: 'retail', label: 'Varejo' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'fintech', label: 'Fintech' }
];

const PRODUCT_NAMES: Record<string, string> = {
  'precisian-journey': 'Precisian Journey',
  'precisian-catalog': 'Precisian Catalog',
  'precisian-core': 'Precisian Core',
  'precisian-mmm': 'Precisian MMM',
  'precisian-clarity': 'Precisian Clarity'
};

interface CaseStudiesGridProps {
  className?: string;
  limit?: number;
  showFilters?: boolean;
}

const CaseStudiesGrid = ({ className, limit, showFilters = true }: CaseStudiesGridProps) => {
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
    <div className={cn("w-full", className)}>
      {/* Header */}
      <div className="text-center mb-10">
        <Badge variant="outline" className="mb-4">
          Cases de Sucesso
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Como já mudamos a vida de empresas com o mesmo problema
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Essa não é uma apresentação comercial. É um guia de descoberta do tamanho do problema
          e da oportunidade de melhoria dos seus resultados, baseado em dados reais.
        </p>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {INDUSTRIES.map(industry => (
              <Button
                key={industry.value}
                variant={selectedIndustry === industry.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedIndustry(industry.value)}
              >
                {selectedIndustry === industry.value && (
                  <Filter className="h-3 w-3 mr-1" />
                )}
                {industry.label}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card
                className={cn(
                  "h-full cursor-pointer transition-all duration-300 hover:shadow-xl border-2",
                  expandedCase === caseStudy.id ? "ring-2 ring-primary border-primary" : "hover:border-primary/50"
                )}
                onClick={() => setExpandedCase(
                  expandedCase === caseStudy.id ? null : caseStudy.id
                )}
              >
                <CardHeader className="pb-4">
                  {/* Company Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{caseStudy.company}</p>
                      <p className="text-xs text-muted-foreground">{caseStudy.companyDescription}</p>
                    </div>
                  </div>

                  <Badge variant="secondary" className="w-fit mb-2">
                    {INDUSTRIES.find(i => i.value === caseStudy.industry)?.label}
                  </Badge>

                  <CardTitle className="text-xl leading-tight">{caseStudy.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  {/* Results Preview - Always visible */}
                  <div className="space-y-3 mb-4">
                    {caseStudy.results.map((result, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-transparent dark:from-green-950/30 rounded-lg">
                        <span className="text-sm text-muted-foreground">{result.metric}</span>
                        <span className="font-bold text-green-600 dark:text-green-400">{result.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Product Badge */}
                  <div className="flex gap-2 mb-4">
                    {caseStudy.products.map(product => (
                      <Badge key={product} variant="outline" className="text-xs">
                        {PRODUCT_NAMES[product]}
                      </Badge>
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
                        <div className="pt-4 border-t space-y-6">
                          {/* Challenge */}
                          <div>
                            <p className="text-sm font-semibold text-destructive mb-2">O Desafio:</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {caseStudy.challenge}
                            </p>
                          </div>

                          {/* Solution */}
                          <div>
                            <p className="text-sm font-semibold text-primary mb-2">A Solução:</p>
                            <ul className="space-y-2">
                              {caseStudy.solution.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Results Detail */}
                          <div>
                            <p className="text-sm font-semibold text-green-600 mb-2">Os Resultados:</p>
                            <div className="grid grid-cols-1 gap-2">
                              {caseStudy.results.map((result, i) => (
                                <div key={i} className="text-sm">
                                  <span className="font-medium">{result.metric}: </span>
                                  <span className="text-green-600 font-bold">{result.value}</span>
                                  {result.description && (
                                    <span className="text-muted-foreground"> - {result.description}</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="flex gap-3 pt-2">
                            <Button asChild className="flex-1">
                              <Link to={caseStudy.productPath}>
                                Conhecer {PRODUCT_NAMES[caseStudy.products[0]]}
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Click hint */}
                  {expandedCase !== caseStudy.id && (
                    <p className="text-xs text-center text-muted-foreground mt-2">
                      Clique para ver detalhes
                    </p>
                  )}
                </CardContent>
              </Card>
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
          <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">Nenhum case encontrado</h3>
          <p className="text-muted-foreground mb-4">
            Tente ajustar seus filtros de busca
          </p>
          <Button variant="outline" onClick={() => {
            setSearchQuery('');
            setSelectedIndustry('all');
          }}>
            Limpar filtros
          </Button>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
          <CardContent className="pt-8 pb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">
                  Sua empresa tem o mesmo problema?
                </h3>
                <p className="text-muted-foreground max-w-xl">
                  Descubra o tamanho da oportunidade de melhoria dos seus resultados.
                  Não é uma proposta comercial - é um diagnóstico gratuito baseado em dados.
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

export default CaseStudiesGrid;
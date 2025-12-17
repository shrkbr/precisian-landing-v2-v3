import { Building2, Target, TrendingUp, CheckCircle2, Layers, BarChart3, Smartphone } from "lucide-react";

interface CaseStudy {
  client: string;
  industry: string;
  challenges: string[];
  solution: string;
  results: string[];
  highlight?: string;
}

const caseStudies: CaseStudy[] = [
  {
    client: "ADCOS",
    industry: "Cosméticos | Multi-marca",
    challenges: [
      "Três marcas diferentes para gerenciar simultaneamente",
      "Campanhas com objetivos, contas e investimentos distintos por marca",
      "Múltiplas ferramentas: mídia paga, CRM, afiliados, etc.",
    ],
    solution: "Criamos visões unificadas detalhando informações de cada ferramenta, segmentadas por marca. Desenvolvemos o Painel de Investimento com acesso em tempo real ao investimento por ferramenta, retorno de vendas e correspondência com metas.",
    results: [
      "Identificação e ajuste de investimentos ao longo do dia",
      "Ajustes de rota a tempo de melhorar a receita",
      "Visão consolidada de todas as frentes de dados",
    ],
    highlight: "Painel de Investimento em Real Time",
  },
  {
    client: "RICCA",
    industry: "E-commerce | Moda",
    challenges: [
      "Necessidade de visão completa da Jornada do Usuário",
      "Análise de conversões assistidas entre diferentes frentes de anúncios",
      "GA4 não mostrava o real impacto de campanhas de branding na conversão",
    ],
    solution: "Conectamos todos os dados no BigQuery para desenhar o funil de conversão completo e as principais jornadas. Mapeamos o peso das campanhas de topo de funil na conversão final e criamos Fast Reports com modelos prontos para cada stakeholder.",
    results: [
      "Visão completa das jornadas de conversão",
      "Identificação do impacto real de cada origem por etapa",
      "Fast Reports personalizados: selecionar data, exportar e enviar",
    ],
    highlight: "Jornadas de Conversão + Fast Reports",
  },
  {
    client: "PAGUE MENOS",
    industry: "Varejo | Farmácia",
    challenges: [
      "Unificação de dados da frente de Marketing Digital",
      "Padronização do formato de dados dos times",
      "Múltiplas fontes: GA4, VTEX, App, funil, atribuição",
    ],
    solution: "Realizamos a padronização completa do formato dos dados e criamos uma visão que unifica todas as fontes em um único relatório, incluindo atribuição de e-commerce e aplicativo.",
    results: [
      "Atribuição de e-commerce e app no mesmo relatório",
      "Dados de CEPs com alta procura vs. baixo estoque",
      "Funis personalizados por categoria e tipo de produto",
      "Jornadas de conversão por objetivo do usuário",
    ],
    highlight: "Visão Unificada E-commerce + App",
  },
];

const ClarityCaseStudies = () => {
  return (
    <div className="space-y-8">
      {caseStudies.map((caseStudy, index) => (
        <div
          key={index}
          className="group relative card-gradient rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-500"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 border-b border-border/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {caseStudy.client}
                  </h3>
                  <p className="text-muted-foreground text-sm">{caseStudy.industry}</p>
                </div>
              </div>
              {caseStudy.highlight && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{caseStudy.highlight}</span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Challenges */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Target className="h-5 w-5 text-orange-400" />
                  <span className="font-semibold text-foreground">Desafios</span>
                </div>
                <ul className="space-y-2">
                  {caseStudy.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Layers className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Solução</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>

              {/* Results */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <BarChart3 className="h-5 w-5 text-green-400" />
                  <span className="font-semibold text-foreground">Resultados</span>
                </div>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClarityCaseStudies;

import { Building2, TrendingUp, Target, CheckCircle2 } from "lucide-react";

interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  highlight?: { value: string; label: string };
}

const caseStudies: CaseStudy[] = [
  {
    client: "A. DIAS",
    industry: "Plataforma B2B de Vendas",
    challenge: "O cliente possuía uma plataforma interna para vendedores criarem orçamentos, mas não tinha visibilidade da jornada dos vendedores dentro do site—apenas dados finais de quantidade e receita de orçamentos.",
    solution: "Mapeamos todos os pontos de ação importantes da plataforma, desenhamos uma Data Layer completa com o time técnico e configuramos o envio de eventos para o Google Analytics e RD Station.",
    results: [
      "Identificação de marcas com alto interesse mas baixa conversão",
      "Descoberta de marcas com baixo abandono de carrinho para priorizar nos banners",
      "Segmentações e fluxos personalizados no RD Station baseados em comportamento",
      "CRM com experiência completamente personalizada por vendedor"
    ]
  },
  {
    client: "BCMED",
    industry: "Healthcare & E-commerce",
    challenge: "Múltiplas plataformas independentes (WhatsApp, sistema de pedidos, mídia paga) sem comunicação entre si, impossibilitando visualização de funil e rastreamento real do resultado das campanhas.",
    solution: "Criamos uma API que integra todas as plataformas e cria uma visão unificada da jornada do lead—desde a primeira mensagem até o fechamento do pedido com o vendedor.",
    results: [
      "Rastreamento completo da jornada do lead entre plataformas",
      "Visibilidade real do funil de vendas integrado",
      "Atribuição correta de receita às campanhas de mídia"
    ],
    highlight: {
      value: "R$ 500K → R$ 1.2M",
      label: "Receita real das campanhas descoberta"
    }
  },
  {
    client: "J&J México",
    industry: "E-commerce | Magento",
    challenge: "Nova operação de e-commerce no México desenvolvida em Magento, precisando de implementação completa de tracking desde o início do projeto.",
    solution: "Participamos desde o início auxiliando o time de desenvolvimento na implementação da Data Layer. Montamos o plano de mensuração e configuramos todos os eventos via GTM para GA4 e plataformas de mídia paga.",
    results: [
      "Dashboard completa com funil de conversão e comportamento de compra",
      "Dados de conversões assistidas para análise de atribuição",
      "Públicos personalizados nas plataformas de mídia paga baseados em eventos",
      "Conversões e públicos de exclusão configurados para otimização de campanhas"
    ]
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="mt-16 pt-16 border-t border-border">
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-center">
        Cases de <span className="gradient-text">Sucesso</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Veja como transformamos dados em resultados concretos para nossos clientes.
      </p>

      <div className="grid gap-8">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={caseStudy.client}
            className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
          >
            {/* Header */}
            <div className="bg-secondary/30 px-6 py-4 border-b border-border">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {caseStudy.client}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {caseStudy.industry}
                    </span>
                  </div>
                </div>
                {caseStudy.highlight && (
                  <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="text-lg font-bold text-primary">
                      {caseStudy.highlight.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {caseStudy.highlight.label}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Challenge */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-orange-500" />
                    <h4 className="font-semibold text-foreground">O Desafio</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Nossa Solução</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Resultados
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {caseStudy.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;

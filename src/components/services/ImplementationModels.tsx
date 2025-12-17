import { Zap, Layers, Database, Settings, BarChart3, ArrowRight, Check, Clock, Puzzle, Sparkles } from "lucide-react";

const ImplementationModels = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Plug and Play */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
          <div className="relative card-gradient border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="text-xs font-medium text-primary uppercase tracking-wider">Rápido & Prático</span>
                <h3 className="text-2xl font-display font-bold text-foreground">Plug and Play</h3>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Conectamos suas principais fontes de dados diretamente em uma plataforma de visualização, 
              entregando relatórios dinâmicos e comparativos com os KPIs essenciais do seu negócio.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Implementação ágil em semanas</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Unificação de todas as frentes de dados</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Relatórios padronizados e intuitivos</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Ideal para decisões rápidas</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Tempo médio: 2-4 semanas</span>
            </div>
          </div>
        </div>

        {/* Clarity Enterprise */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl" />
          <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/50 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative card-gradient border border-primary/30 rounded-2xl p-8 h-full">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                Recomendado
              </span>
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="text-xs font-medium text-primary uppercase tracking-wider">Completo & Personalizado</span>
                <h3 className="text-2xl font-display font-bold text-foreground">Clarity Enterprise</h3>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Arquitetura robusta com banco de dados centralizado, permitindo cruzamentos avançados, 
              análises complexas e personalização total dos seus relatórios.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Mapeamento completo de fontes e ferramentas</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Banco de dados centralizado para cruzamentos</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Tratamento e governança dos dados</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Análises avançadas e relatórios ilimitados</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Tempo médio: 6-12 semanas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Diagram for Enterprise */}
      <div className="card-gradient border border-border rounded-2xl p-8">
        <div className="text-center mb-8">
          <h4 className="text-xl font-display font-semibold text-foreground mb-2">
            Arquitetura Clarity Enterprise
          </h4>
          <p className="text-muted-foreground text-sm">
            Fluxo completo de dados: da coleta à visualização
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Layer 1: Data Sources */}
          <div className="relative">
            <div className="bg-background/50 border border-border rounded-xl p-5 h-full">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <Puzzle className="h-5 w-5 text-blue-500" />
              </div>
              <h5 className="font-semibold text-foreground mb-2 text-sm">1. Fontes de Dados</h5>
              <div className="space-y-1.5">
                <span className="inline-block px-2 py-0.5 text-xs bg-muted rounded text-muted-foreground mr-1 mb-1">Google Ads</span>
                <span className="inline-block px-2 py-0.5 text-xs bg-muted rounded text-muted-foreground mr-1 mb-1">Meta Ads</span>
                <span className="inline-block px-2 py-0.5 text-xs bg-muted rounded text-muted-foreground mr-1 mb-1">GA4</span>
                <span className="inline-block px-2 py-0.5 text-xs bg-muted rounded text-muted-foreground mr-1 mb-1">CRM</span>
                <span className="inline-block px-2 py-0.5 text-xs bg-muted rounded text-muted-foreground mr-1 mb-1">E-commerce</span>
                <span className="inline-block px-2 py-0.5 text-xs bg-muted rounded text-muted-foreground mr-1 mb-1">ERP</span>
              </div>
            </div>
            <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
              <ArrowRight className="h-4 w-4 text-primary" />
            </div>
          </div>

          {/* Layer 2: Storage & Treatment */}
          <div className="relative">
            <div className="bg-background/50 border border-border rounded-xl p-5 h-full">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                <Database className="h-5 w-5 text-green-500" />
              </div>
              <h5 className="font-semibold text-foreground mb-2 text-sm">2. Armazenamento</h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Data Warehouse centralizado com tratamento, limpeza e padronização dos dados brutos.
              </p>
            </div>
            <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
              <ArrowRight className="h-4 w-4 text-primary" />
            </div>
          </div>

          {/* Layer 3: Customization */}
          <div className="relative">
            <div className="bg-background/50 border border-border rounded-xl p-5 h-full">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                <Settings className="h-5 w-5 text-orange-500" />
              </div>
              <h5 className="font-semibold text-foreground mb-2 text-sm">3. Personalização</h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Modelagem de dados, criação de métricas customizadas e regras de negócio específicas.
              </p>
            </div>
            <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
              <ArrowRight className="h-4 w-4 text-primary" />
            </div>
          </div>

          {/* Layer 4: Visualization */}
          <div className="relative">
            <div className="bg-background/50 border border-primary/30 rounded-xl p-5 h-full">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <h5 className="font-semibold text-foreground mb-2 text-sm">4. Visualização</h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Dashboards interativos em Looker Studio, Power BI ou Tableau com insights acionáveis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationModels;

import { Users, Map, FileText, Code, CheckCircle, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Kickoff Estratégico",
    description: "Reunião com todos os stakeholders para entender objetivos de negócio e mapear requisitos técnicos.",
  },
  {
    number: "02",
    icon: Map,
    title: "Mapeamento Inteligente",
    description: "Análise detalhada de todas as plataformas e identificação de cada ponto de mensuração.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Plano de Mensuração",
    description: "Documentação visual completa: telas, eventos, parâmetros e destinos de cada dado coletado.",
  },
  {
    number: "04",
    icon: Code,
    title: "Implementação Técnica",
    description: "Configuração e deploy de todos os eventos seguindo as melhores práticas do mercado.",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Entrega & Validação",
    description: "Apresentação em ambiente de homologação, validação com sua equipe e deploy em produção.",
  },
];

const bonusStep = {
  icon: Zap,
  title: "Bônus: Integração Avançada",
  description: "Para projetos complexos, criamos integrações multi-plataforma e unificamos dados em banco centralizado.",
};

const EventsFlowchart = () => {
  return (
    <div className="space-y-8">
      {/* Main Flow */}
      <div className="relative">
        {/* Connection Line - Desktop */}
        <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative group">
                {/* Mobile/Tablet connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-full h-6 w-0.5 bg-gradient-to-b from-primary to-primary/30" />
                )}
                
                <div className="card-gradient p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                  {/* Step Number Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30 group-hover:border-primary transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="font-display font-semibold text-foreground mb-2 text-sm lg:text-base">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow indicator - Desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-16 transform -translate-y-1/2 z-10">
                    <div className="w-4 h-4 rotate-45 border-t-2 border-r-2 border-primary/50" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bonus Step */}
      <div className="mt-8 pt-8 border-t border-border/50">
        <div className="max-w-2xl mx-auto">
          <div className="relative card-gradient p-6 rounded-xl border-2 border-dashed border-primary/40 hover:border-primary transition-all duration-300 bg-primary/5">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                EXTRA
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <bonusStep.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">
                  {bonusStep.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {bonusStep.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsFlowchart;

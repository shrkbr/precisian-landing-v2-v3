import { Users, FileText, Code, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Kickoff Estratégico",
    description: "Alinhamento com stakeholders para definir objetivos de negócio, KPIs prioritários e requisitos técnicos da infraestrutura atual.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Arquitetura & Planejamento",
    description: "Desenho completo da solução: infraestrutura, ferramentas, fontes de dados e modelagem visual personalizada.",
  },
  {
    number: "03",
    icon: Code,
    title: "Desenvolvimento & Integração",
    description: "Construção dos dashboards, conexão com todas as fontes de dados e implementação das visualizações planejadas.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Entrega & Aprovação",
    description: "Apresentação completa para stakeholders, ajustes finais e capacitação da equipe para uso autônomo.",
  },
];

const ClarityFlowchart = () => {
  return (
    <div className="space-y-8">
      {/* Main Flow */}
      <div className="relative">
        {/* Connection Line - Desktop */}
        <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
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
    </div>
  );
};

export default ClarityFlowchart;

import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Behavior Mapping + Events",
    description: "Mapeamento completo de todas as interações críticas do usuário",
  },
  {
    number: "02",
    title: "Integration",
    description: "Conexão de todas as fontes de dados em uma visão unificada",
  },
  {
    number: "03",
    title: "Availability",
    description: "Dados sempre acessíveis e prontos para análise",
  },
  {
    number: "04",
    title: "Attribution",
    description: "Atribuição precisa do valor de cada canal de marketing",
  },
  {
    number: "05",
    title: "Visual Insights",
    description: "Dashboards intuitivos que transformam dados em decisões",
  },
];

const MethodologySection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Nossa Metodologia
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">
            Data Efficiency Quotient{" "}
            <span className="gradient-text">(DEQ)</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um framework completo para transformar dados brutos em vantagem competitiva
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
              >
                <div className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display text-3xl font-bold gradient-text">
                      {step.number}
                    </span>
                    {index < steps.length - 1 && (
                      <ArrowRight className="h-5 w-5 text-primary hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;

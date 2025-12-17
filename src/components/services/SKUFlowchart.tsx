import { Database, Settings, Send, Plug, RefreshCw, Shield, Tag } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "PLATAFORMA",
    description: "Com o acesso à plataforma de e-commerce, criamos uma API que puxa todos os produtos cadastrados com todas as suas informações.",
  },
  {
    number: "02",
    icon: Settings,
    title: "GESTÃO",
    description: "Manipulamos as informações dos produtos conforme a necessidade do projeto: campos personalizados, formatação, enriquecimento de dados.",
  },
  {
    number: "03",
    icon: Send,
    title: "ENVIO",
    description: "Adequamos as informações de cada produto conforme a documentação oficial das plataformas de destino, como Google Merchant e Catálogo da Meta.",
  },
];

const advantages = [
  {
    icon: Plug,
    title: "Integração Universal",
    description: "Conectamos diretamente com o Google Merchant Center, Meta Commerce Manager, TikTok, Pinterest, e qualquer plataforma via API ou arquivo feed.",
  },
  {
    icon: RefreshCw,
    title: "Atualização em Tempo Real",
    description: "Sincronizamos preços, estoque, frete, e todas as características do produto automaticamente—eliminando anúncios de produtos indisponíveis.",
  },
  {
    icon: Shield,
    title: "Conformidade Garantida",
    description: "Asseguramos que seu feed atende todos os requisitos técnicos de cada plataforma, evitando reprovações e suspensões.",
  },
  {
    icon: Tag,
    title: "Rótulos Personalizados",
    description: "Damos a liberdade da criação de rótulos que normalmente não são enviados por XML ou integrações nativas de plataforma, como nome do seller.",
  },
];

const SKUFlowchart = () => {
  return (
    <div className="space-y-12">
      {/* Main Flowchart */}
      <div className="relative">
        {/* Connection Line - Desktop */}
        <div className="hidden md:block absolute top-20 left-[15%] right-[15%] h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative group">
                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 top-full h-8 w-1 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
                )}
                
                <div className="card-gradient p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 h-full text-center">
                  {/* Icon with number */}
                  <div className="relative inline-flex mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg shadow-primary/30">
                      {step.number}
                    </span>
                  </div>
                  
                  <h4 className="font-display font-bold text-foreground mb-3 text-lg tracking-wide">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow - Desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-20 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rotate-45 border-t-2 border-r-2 border-primary rounded-tr-sm" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Advantages Section */}
      <div className="pt-8 border-t border-border/50">
        <h4 className="font-display font-semibold text-foreground text-xl mb-6 text-center">
          Vantagens do Precisian SKU
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">
                    {advantage.title}
                  </h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SKUFlowchart;

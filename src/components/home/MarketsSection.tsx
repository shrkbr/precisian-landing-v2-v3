import { ShoppingCart, Building2, FileText, Globe, Smartphone } from "lucide-react";

const markets = [
  {
    icon: ShoppingCart,
    title: "E-commerce B2C",
    description: "Lojas virtuais focadas no consumidor final, com rastreamento completo do funil de compra, carrinho e checkout.",
  },
  {
    icon: Building2,
    title: "E-commerce B2B",
    description: "Plataformas de vendas corporativas com ciclos de compra complexos, múltiplos decisores e integrações com ERPs.",
  },
  {
    icon: FileText,
    title: "Blogs & Conteúdo",
    description: "Portais de conteúdo com mensuração de engajamento, scroll depth, tempo de leitura e conversões de leads.",
  },
  {
    icon: Globe,
    title: "Sites Institucionais & Landing Pages",
    description: "Páginas focadas em conversão com tracking de formulários, CTAs e jornadas de navegação otimizadas.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps iOS e Android com implementação de Firebase, AppsFlyer, eventos in-app e atribuição cross-device.",
  },
];

const MarketsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">Onde Atuamos</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Soluções para <span className="gradient-text">Todos os Canais</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nossa expertise abrange todos os tipos de presença digital, garantindo mensuração precisa 
            independente da plataforma ou modelo de negócio.
          </p>
        </div>

        {/* Timeline-style list */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
            
            <div className="space-y-6">
              {markets.map((market, index) => (
                <div
                  key={index}
                  className="group relative flex items-start gap-6 md:gap-8 pl-2"
                >
                  {/* Icon circle */}
                  <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <market.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-6 pt-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                      <h3 className="font-display text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {market.title}
                      </h3>
                      <div className="hidden md:block h-px flex-1 bg-border group-hover:bg-primary/30 transition-colors" />
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {market.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-medium">
              +50 projetos implementados em diferentes segmentos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketsSection;

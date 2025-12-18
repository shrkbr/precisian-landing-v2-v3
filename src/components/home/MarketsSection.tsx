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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <div
              key={index}
              className="group card-gradient p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <market.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {market.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {market.description}
              </p>
            </div>
          ))}
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

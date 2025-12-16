import { Eye, ShieldCheck, Search, Bell } from "lucide-react";

const tools = [
  {
    icon: Eye,
    name: "Heimdall",
    description: "Agente de IA onde você conversa com seus dados, plugado a um calendário e metas personalizadas para insights em tempo real.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: ShieldCheck,
    name: "Trusty",
    description: "Auditor automático da qualidade de configurações do GA4, identificando erros e oportunidades de melhoria.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Search,
    name: "ARGOS",
    description: "Comparador inteligente de preços, frequência e conteúdo de redes sociais dos seus principais concorrentes.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Bell,
    name: "Vulcano",
    description: "Sistema de alertas sobre configurações e quedas das principais Tags de conversão das plataformas de mídia.",
    color: "from-rose-500 to-red-600",
  },
];

const SalesBoostSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Ferramentas Exclusivas
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">
            Sales <span className="gradient-text">Boost</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ferramentas desenvolvidas pelo nosso time para analisar e gerar insights poderosos para os seus projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="h-7 w-7 text-white" />
                </div>

                {/* Name */}
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${tool.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesBoostSection;
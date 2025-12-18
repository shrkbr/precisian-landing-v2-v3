import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Package, BarChart3, Settings, Brain, PieChart, Sparkles, Database, Megaphone } from "lucide-react";

const featuredServices = [
  {
    icon: Calendar,
    title: "Precisian Journey",
    description: "Gestão completa de eventos para analytics com rastreamento avançado da jornada do cliente.",
    path: "/precisian-events",
  },
  {
    icon: Package,
    title: "Precisian Catalog",
    description: "Gestão inteligente de catálogo de produtos com dados sempre atualizados em todas as plataformas.",
    path: "/precisian-sku",
  },
  {
    icon: Database,
    title: "Precisian Core",
    description: "Envio de dados de vendas entre plataformas e conciliação com canais de mídia.",
    path: "/precisian-core",
  },
  {
    icon: Brain,
    title: "Precisian MMM",
    description: "Marketing Mix Modeling de próxima geração com IA para entender a contribuição real.",
    path: "/google-meridian",
  },
  {
    icon: PieChart,
    title: "Precisian Clarity",
    description: "Transforme dados em decisões com visualizações poderosas e dashboards customizados.",
    path: "/data-visualization",
  },
];

const otherServices = [
  {
    icon: BarChart3,
    title: "GA4 Optimization",
    description: "Maximize o potencial do Google Analytics 4 com implementação e configuração avançada.",
    path: "/ga4-optimization",
  },
  {
    icon: Settings,
    title: "GTM Setup",
    description: "Gerenciamento ágil de tags sem dependência de desenvolvedores.",
    path: "/gtm-setup",
  },
  {
    icon: Megaphone,
    title: "AdTechs",
    description: "Configuração completa das ferramentas de mídia paga incluindo Server-Side para eventos.",
    path: "/adtechs",
  },
  {
    icon: Sparkles,
    title: "AI Insights",
    description: "Inteligência artificial para analytics preditivos e insights automatizados.",
    path: "/ai-insights",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Nossas Soluções
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">
            Soluções Completas em{" "}
            <span className="gradient-text">Data Analytics</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Do rastreamento de eventos à inteligência artificial, oferecemos tudo que você precisa para decisões data-driven.
          </p>
        </div>

        {/* Featured Precisian Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {featuredServices.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="group"
            >
              <div className="relative p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background hover:border-primary/60 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-base flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-semibold mt-5 group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Outras Soluções */}
        <div className="text-center mb-8">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
            Outras Soluções
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {otherServices.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="group"
            >
              <div className="card-gradient p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center text-primary text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="ml-2 h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

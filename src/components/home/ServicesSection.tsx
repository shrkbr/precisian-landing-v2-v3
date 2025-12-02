import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Package, GitBranch, BarChart3, LineChart, Settings, Brain, PieChart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Precisian Events",
    description: "Gestão completa de eventos para analytics com rastreamento avançado da jornada do cliente.",
    path: "/precisian-events",
  },
  {
    icon: Package,
    title: "Precisian SKU",
    description: "Gestão inteligente de catálogo de produtos com dados sempre atualizados em todas as plataformas.",
    path: "/precisian-sku",
  },
  {
    icon: GitBranch,
    title: "Precisian Attribution",
    description: "Atribuição avançada além do last click. Descubra o verdadeiro valor de cada canal.",
    path: "/precisian-attribution",
  },
  {
    icon: BarChart3,
    title: "GA4 Optimization",
    description: "Maximize o potencial do Google Analytics 4 com implementação e configuração avançada.",
    path: "/ga4-optimization",
  },
  {
    icon: LineChart,
    title: "GA360",
    description: "Analytics de nível enterprise para negócios de alto volume com dados não amostrados.",
    path: "/ga360",
  },
  {
    icon: Settings,
    title: "GTM Setup",
    description: "Gerenciamento ágil de tags sem dependência de desenvolvedores.",
    path: "/gtm-setup",
  },
  {
    icon: Brain,
    title: "Google Meridian MMM",
    description: "Marketing Mix Modeling de próxima geração com IA para entender a contribuição real.",
    path: "/google-meridian",
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    description: "Transforme dados em decisões com visualizações poderosas e dashboards customizados.",
    path: "/data-visualization",
  },
  {
    icon: Sparkles,
    title: "AI Insights",
    description: "Inteligência artificial para analytics preditivos e insights automatizados.",
    path: "/ai-insights",
    wide: true,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className={`group ${service.wide ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
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

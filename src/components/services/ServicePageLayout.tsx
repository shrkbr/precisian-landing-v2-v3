import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServicePageLayoutProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  children: ReactNode;
  cases?: string[];
}

const ServicePageLayout = ({
  icon: Icon,
  title,
  subtitle,
  description,
  children,
  cases,
}: ServicePageLayoutProps) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6 animate-fade-up">
              <Icon className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">{title}</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              {subtitle}
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-3xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {description}
            </p>

            <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg">
                Comece agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>

      {/* Cases Section */}
      {cases && cases.length > 0 && (
        <section className="py-16 bg-card border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl font-bold mb-8 text-center">
              Cases de <span className="gradient-text">Sucesso</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {cases.map((caseName) => (
                <div
                  key={caseName}
                  className="px-6 py-3 rounded-lg bg-secondary/50 border border-border"
                >
                  <span className="text-foreground font-medium">{caseName}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Pronto para transformar seus dados?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar seu negócio.
          </p>
          <Button variant="hero" size="xl">
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;

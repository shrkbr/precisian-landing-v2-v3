import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Database, Zap } from "lucide-react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>
            Nós trazemos{" "}
            <span className="gradient-text">clareza e certeza</span> para todos os dados
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{
          animationDelay: "0.2s"
        }}>
            Conte com nosso time de <span className="text-primary font-semibold">Intelligence Partners</span> para trazer integração, análise e insights de dados em tempo real alimentados por IA, para que você tome a melhor decisão de investimento toda vez.
          </p>

          

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Database className="h-6 w-6 text-primary mr-2" />
                <span className="font-display text-3xl font-bold text-foreground">100+</span>
              </div>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="h-6 w-6 text-primary mr-2" />
                <span className="font-display text-3xl font-bold text-foreground">200M+</span>
              </div>
              <p className="text-sm text-muted-foreground">Events Tracked</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-primary mr-2" />
                <span className="font-display text-3xl font-bold text-foreground">99.9%</span>
              </div>
              <p className="text-sm text-muted-foreground">Data Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
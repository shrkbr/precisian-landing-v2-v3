const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center">
          {/* Left Side - Title */}
          <div className="animate-fade-up">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Nós trazemos{" "}
              <span className="gradient-text">clareza e certeza</span> para todos os dados.
            </h1>
          </div>

          {/* Right Side - Description */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Um time de Web analistas apaixonados por dados, focados em soluções de data analytics para alavancar projetos de Marketing Digital. Conte com nossa inteligência para trazer integrações, análise e insights em tempo real alimentados por IA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
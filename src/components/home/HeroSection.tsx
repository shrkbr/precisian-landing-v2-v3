const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 flex items-center bg-background overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Data Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1.5 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="20%" x2="40%" y2="60%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
          <line x1="60%" y1="10%" x2="90%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <line x1="20%" y1="80%" x2="70%" y2="30%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <line x1="80%" y1="70%" x2="50%" y2="90%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
          <line x1="5%" y1="50%" x2="35%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '2s' }} />
          <line x1="45%" y1="85%" x2="85%" y2="25%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
          <line x1="15%" y1="40%" x2="55%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '3s' }} />
          <line x1="70%" y1="5%" x2="30%" y2="55%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '3.5s' }} />
        </svg>
        
        {/* Binary/Data Stream Effect */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden opacity-[0.03]">
          <div className="animate-scroll-up font-mono text-xs text-primary leading-relaxed whitespace-pre">
            {Array(50).fill('01001010 11010010 00101101 10110100\n').join('')}
          </div>
        </div>
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

          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Um time de <span className="text-primary font-semibold">Web Analytics</span> apaixonados por dados, focados em soluções de data analytics para alavancar projetos de Marketing Digital. Conte com nossa inteligência para trazer integrações, análise e insights em tempo real alimentados por IA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { TerminalCard } from './TerminalCard';

interface TechHeroProps {
  onDiagnosticClick?: () => void;
}

export function TechHero({ onDiagnosticClick }: TechHeroProps) {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-[#030303] overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#030303] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 w-full z-10 grid lg:grid-cols-12 gap-12 items-center py-12">
        {/* Left: Content */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 border border-[#FD68B3]/20 bg-[#FD68B3]/5 px-3 py-1 w-fit rounded-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FD68B3] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FD68B3]" />
            </span>
            <span className="text-[#FD68B3] font-mono text-xs uppercase tracking-widest">
              System Operational
            </span>
          </div>

          {/* Headlines */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[0.95]">
            Trust your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
              data. Or your
            </span>
            <span className="text-[#FD68B3] block mt-2">decisions fail.</span>
          </h1>

          <h2 className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl border-l border-white/10 pl-6">
            AI-Powered real-time data integration, analysis and insights so you make the best investment decision every time.
          </h2>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 mt-4">
            <button
              onClick={onDiagnosticClick}
              className="group relative flex items-center justify-center px-8 py-4 bg-[#FD68B3] text-black text-sm font-bold uppercase tracking-widest overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Run Diagnostic
              </span>
            </button>
            <button
              onClick={() => scrollToSection('#protocol')}
              className="group flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:border-white/50 transition-colors"
            >
              Explore Protocol
            </button>
          </div>
        </div>

        {/* Right: Terminal */}
        <div className="lg:col-span-5 relative h-[500px] w-full hidden lg:block">
          <TerminalCard className="h-full" />

          {/* Data Integrity Widget */}
          <div className="absolute -bottom-6 -left-6 w-48 bg-[#0a0a0a] border border-white/10 p-4 shadow-2xl backdrop-blur-md">
            <div className="flex justify-between text-[10px] text-gray-500 uppercase font-mono mb-2">
              <span>Data Integrity</span>
              <span className="text-[#FD68B3]">Low</span>
            </div>
            <div className="flex items-end gap-1 h-12">
              <div className="w-1/5 bg-gray-800 h-full" />
              <div className="w-1/5 bg-gray-800 h-[80%]" />
              <div className="w-1/5 bg-red-500 h-[40%] animate-pulse" />
              <div className="w-1/5 bg-gray-800 h-[60%]" />
              <div className="w-1/5 bg-gray-800 h-[90%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

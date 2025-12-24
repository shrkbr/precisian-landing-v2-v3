import { useState, useEffect } from 'react';

interface TechNavProps {
  onDiagnosticClick?: () => void;
}

export function TechNav({ onDiagnosticClick }: TechNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030303]/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span
            className="text-xl font-bold tracking-tight text-white"
            style={{ fontFamily: '"Eurostile", "Orbitron", sans-serif' }}
          >
            PRECIS<span className="text-[#FD68B3]">IA</span>N
          </span>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
          <button
            onClick={() => scrollToSection('#protocol')}
            className="text-gray-400 hover:text-[#FD68B3] transition-colors"
          >
            Protocol
          </button>
          <button
            onClick={() => scrollToSection('#modules')}
            className="text-gray-400 hover:text-[#FD68B3] transition-colors"
          >
            Modules
          </button>
          <button
            onClick={() => scrollToSection('#proof')}
            className="text-gray-400 hover:text-[#FD68B3] transition-colors"
          >
            Proof
          </button>
        </nav>

        {/* CTA - Opens Diagnostic Console */}
        <button
          onClick={onDiagnosticClick}
          className="flex items-center justify-center border border-[#FD68B3]/50 bg-[#FD68B3]/10 hover:bg-[#FD68B3] text-[#FD68B3] hover:text-black transition-all px-6 py-2 text-xs font-bold font-mono uppercase tracking-wider"
        >
          Run Diagnostic
        </button>
      </div>
    </header>
  );
}

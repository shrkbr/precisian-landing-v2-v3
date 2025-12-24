import { content } from '@/content/pt';
import { TerminalCard } from './TerminalCard';

export function TechHero() {
  const { hero } = content;

  const scrollToCTA = () => {
    const element = document.querySelector('#cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProtocol = () => {
    const element = document.querySelector('#protocol');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 bg-gradient-to-b from-black via-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="font-mono text-sm text-cyan-400">{hero.badge}</span>
            </div>

            {/* Headlines */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {hero.h1}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 mb-6">{hero.h1b}</p>
            <p className="text-lg text-gray-500 mb-8 max-w-lg">{hero.sub}</p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToCTA}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                {hero.cta1}
              </button>
              <button
                onClick={scrollToProtocol}
                className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all border border-gray-700"
              >
                {hero.cta2}
              </button>
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="hidden lg:block">
            <TerminalCard logs={hero.terminal.logs} className="shadow-2xl shadow-cyan-500/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { content } from '@/content/pt';
import logoNacaoDigital from '@/assets/logo-nacao-digital.png';

export function TechFooter() {
  const { footer } = content;

  return (
    <footer className="bg-[#030303] border-t border-white/5 py-16 px-6" role="contentinfo">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center mb-4">
              <span
                className="text-xl font-bold tracking-tight text-white"
                style={{ fontFamily: '"Eurostile", "Orbitron", sans-serif' }}
              >
                PRECIS<span className="text-[#FD68B3]">IA</span>N
              </span>
            </a>
            <p className="text-gray-500 text-sm">
              AI-Powered data integrity platform for GA4 analytics.
            </p>
          </div>

          {/* Protocol */}
          <nav aria-label="Protocol links">
            <h3 className="text-white font-semibold mb-4 font-mono text-xs uppercase tracking-wider">Protocol</h3>
            <ul className="space-y-2">
              <li>
                <a href="#protocol" className="text-gray-500 hover:text-[#FD68B3] transition-colors text-sm">
                  DVQ Framework
                </a>
              </li>
              <li>
                <a href="#modules" className="text-gray-500 hover:text-[#FD68B3] transition-colors text-sm">
                  Operating Modules
                </a>
              </li>
              <li>
                <a href="#proof" className="text-gray-500 hover:text-[#FD68B3] transition-colors text-sm">
                  Proven Results
                </a>
              </li>
            </ul>
          </nav>

          {/* Modules */}
          <nav aria-label="Modules links">
            <h3 className="text-white font-semibold mb-4 font-mono text-xs uppercase tracking-wider">Modules</h3>
            <ul className="space-y-2">
              <li>
                <a href="#journey" className="text-gray-500 hover:text-[#FD68B3] transition-colors text-sm">
                  Precisian Journey
                </a>
              </li>
              <li>
                <a href="#catalog" className="text-gray-500 hover:text-[#FD68B3] transition-colors text-sm">
                  Precisian Catalog
                </a>
              </li>
              <li>
                <a href="#core" className="text-gray-500 hover:text-[#FD68B3] transition-colors text-sm">
                  Precisian Core
                </a>
              </li>
              <li>
                <a href="#attribution" className="text-gray-500 hover:text-[#FD68B3] transition-colors text-sm">
                  Attribution & MMM
                </a>
              </li>
              <li>
                <a href="#clarity" className="text-gray-500 hover:text-[#FD68B3] transition-colors text-sm">
                  Precisian Clarity
                </a>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <h3 className="text-white font-semibold mb-4 font-mono text-xs uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://nacao.digital" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#FD68B3] transition-colors text-sm">
                  Nação Digital
                </a>
              </li>
              <li>
                <a href="https://fcamara.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#FD68B3] transition-colors text-sm">
                  FCamara Group
                </a>
              </li>
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-500 hover:text-[#FD68B3] transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600 font-mono">
            <p>{footer.copyright}</p>
            <div className="flex items-center gap-3">
              <span>Product by</span>
              <a
                href="https://nacao.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={logoNacaoDigital}
                  alt="Nação Digital"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

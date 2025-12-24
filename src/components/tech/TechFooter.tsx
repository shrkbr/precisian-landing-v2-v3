import { content } from '@/content/pt';

export function TechFooter() {
  const { footer } = content;

  return (
    <footer className="bg-black border-t border-gray-800 py-16 px-4" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="inline-block mb-4">
              <span
                className="text-2xl font-bold tracking-tight text-white"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                PRECIS<span className="text-pink-500">IA</span>N
              </span>
            </a>
            <p className="text-gray-500 text-sm">
              AI-Powered data integrity platform for GA4 analytics.
            </p>
          </div>

          {/* Protocol */}
          <nav aria-label="Protocol links">
            <h3 className="text-white font-semibold mb-4">Protocol</h3>
            <ul className="space-y-2">
              <li>
                <a href="#protocol" className="text-gray-400 hover:text-white transition-colors text-sm">
                  DVQ Framework
                </a>
              </li>
              <li>
                <a href="#modules" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Operating Modules
                </a>
              </li>
              <li>
                <a href="#proof" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Proven Results
                </a>
              </li>
            </ul>
          </nav>

          {/* Modules */}
          <nav aria-label="Modules links">
            <h3 className="text-white font-semibold mb-4">Modules</h3>
            <ul className="space-y-2">
              <li>
                <a href="#journey" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Precisian Journey
                </a>
              </li>
              <li>
                <a href="#catalog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Precisian Catalog
                </a>
              </li>
              <li>
                <a href="#core" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Precisian Core
                </a>
              </li>
              <li>
                <a href="#attribution" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Attribution & MMM
                </a>
              </li>
              <li>
                <a href="#clarity" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Precisian Clarity
                </a>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://nacaodigital.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Nação Digital
                </a>
              </li>
              <li>
                <a href="https://fcamara.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FCamara Group
                </a>
              </li>
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">{footer.copyright}</p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Um produto da</span>
              <a
                href="https://nacaodigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 transition-colors font-medium"
              >
                Nação Digital
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

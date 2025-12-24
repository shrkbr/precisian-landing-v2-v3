import { content } from '@/content/pt';

const architectureLayers = [
  {
    id: '00',
    title: 'Data Sources',
    description: 'Raw signals from GA4, media platforms, CRM, ERP, and operational systems',
    highlighted: true,
    alwaysShowDescription: true,
    isFirst: true,
  },
  {
    id: '01',
    title: 'Journey Mapping',
    description: 'Complete mapping of all critical user interactions from first touch to post-purchase',
    indented: true,
  },
  {
    id: '02',
    title: 'Integration & Centralization',
    description: 'Connect all data sources into a single source of truth',
    indented: true,
  },
  {
    id: '03',
    title: 'Governance & Reliability',
    description: 'Data always accessible and ready for analysis with compliance built-in',
    indented: true,
  },
  {
    id: '04',
    title: 'Attribution & Incrementality',
    description: 'Precise attribution of value to each marketing channel',
    indented: true,
  },
  {
    id: '05',
    title: 'Predictive & AI Insights',
    description: 'Intuitive dashboards that transform data into decisions',
    indented: true,
  },
  {
    id: 'DVQ',
    title: 'Decision Integrity',
    description: 'The final output: trusted decisions based on validated data',
    isDVQ: true,
  },
];

export function DVQArchitecture() {
  const { dvqArchitecture, auditOS } = content;

  return (
    <section id="protocol" className="py-24 px-6 bg-[#030303]">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          {/* AuditOS Badge */}
          <div className="inline-flex items-center gap-2 border border-[#FD68B3]/20 bg-[#FD68B3]/5 px-3 py-1.5 rounded-sm mb-6">
            <svg className="w-4 h-4 text-[#FD68B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-[#FD68B3] font-mono text-xs uppercase tracking-wider">
              {auditOS.badge}
            </span>
          </div>

          <span className="font-mono text-sm text-[#FD68B3] tracking-wider mb-6 block">
            {dvqArchitecture.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 leading-tight">
            {dvqArchitecture.h2}
          </h2>
          <p className="text-lg text-gray-500 mb-2">{dvqArchitecture.sub}</p>
          <p className="text-sm text-gray-600 font-mono">{auditOS.tagline}</p>
        </div>

        {/* Architecture Stack */}
        <div className="space-y-3">
          {architectureLayers.map((layer) => (
            <div
              key={layer.id}
              className={`
                group flex items-center gap-4 rounded-lg p-4 border transition-all duration-300 cursor-pointer
                ${layer.indented ? 'ml-6' : ''}
                ${
                  layer.highlighted
                    ? 'bg-gradient-to-r from-[#FD68B3]/20 to-transparent border-[#FD68B3]/40 shadow-lg shadow-[#FD68B3]/10'
                    : layer.isDVQ
                    ? 'bg-[#0a0a0a] border-white/10 hover:border-[#FD68B3]/30 hover:shadow-lg hover:shadow-[#FD68B3]/5'
                    : 'bg-[#0a0a0a]/50 border-white/5 hover:border-[#FD68B3]/40 hover:bg-[#0a0a0a] hover:shadow-lg hover:shadow-[#FD68B3]/10'
                }
              `}
            >
              {/* Badge */}
              <span
                className={`
                  inline-flex items-center justify-center w-12 h-12 text-sm font-bold rounded shrink-0 transition-all duration-300
                  ${
                    layer.highlighted
                      ? 'bg-[#FD68B3] text-black'
                      : layer.isDVQ
                      ? 'bg-gray-700 text-gray-300 group-hover:bg-gray-600'
                      : 'bg-[#FD68B3]/20 text-[#FD68B3] border border-[#FD68B3]/30 group-hover:bg-[#FD68B3]/30 group-hover:border-[#FD68B3]/50'
                  }
                `}
              >
                {layer.id}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium group-hover:text-[#FD68B3] transition-colors duration-300">
                  {layer.title}
                </h3>
                {layer.description && (
                  <p
                    className={`text-gray-500 text-sm transition-all duration-300 overflow-hidden ${
                      layer.alwaysShowDescription
                        ? 'max-h-20 opacity-100 mt-1'
                        : 'max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-1'
                    }`}
                  >
                    {layer.description}
                  </p>
                )}
              </div>

              {/* Pink dot indicator */}
              <span className="w-2.5 h-2.5 rounded-full bg-[#FD68B3] shrink-0 group-hover:scale-125 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

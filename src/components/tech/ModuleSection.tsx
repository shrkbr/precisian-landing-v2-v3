import { content } from '@/content/pt';

export function ModuleSection() {
  const { modules } = content;

  return (
    <section id="modules" className="py-24 px-6 bg-[#030303]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="font-mono text-sm text-[#FD68B3] tracking-wider mb-6 block uppercase">
            // OPERATING MODULES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4">
            Five systems. One truth.
          </h2>
          <p className="text-lg text-gray-500 font-mono">
            Load modules below. Each resolves one failure mode.
          </p>
        </div>

        {/* Modules */}
        <div className="space-y-24 lg:space-y-32">
          {modules.map((module, index) => {
            const isOdd = index % 2 === 0; // 0, 2, 4 = Content Left, Card Right
            const moduleNumber = String(index + 1).padStart(2, '0');

            return (
              <article
                key={module.id}
                id={module.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Content Side */}
                <div className={isOdd ? 'order-1' : 'order-1 lg:order-2'}>
                  {/* Module Badge */}
                  <span className="font-mono text-sm text-[#FD68B3] tracking-wider mb-4 block">
                    {module.code}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl font-medium text-white mb-2">{module.title}</h3>

                  {/* DVQ Layer Tag */}
                  <div className="flex items-center gap-2 mb-8">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                      DVQ {module.dvqLayers.length > 1 ? 'Layers' : 'Layer'}:
                    </span>
                    <span className="text-xs font-mono text-[#FD68B3]">
                      {module.dvqLayers.join(' • ')}
                    </span>
                  </div>

                  {/* Problem */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-red-400 font-mono text-xs uppercase tracking-wider">
                        Problem
                      </span>
                    </div>
                    <p className="text-white font-medium mb-4">{module.problem.headline}</p>
                    <ul className="space-y-2">
                      {module.problem.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                          <span className="text-red-500 mt-0.5">×</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* System */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-green-400 font-mono text-xs uppercase tracking-wider">
                        System
                      </span>
                    </div>
                    <p className="text-white font-medium mb-4">{module.system.headline}</p>
                    <ul className="space-y-2">
                      {module.system.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                          <span className="text-green-500 mt-0.5">✓</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case Study */}
                  {module.caseStudy && (
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6">
                      <span className="font-mono text-xs text-[#FD68B3] uppercase tracking-wider mb-2 block">
                        CASE: {module.caseStudy.client}
                      </span>
                      <p className="text-gray-400 text-sm mb-4">{module.caseStudy.challenge}</p>
                      <div className="space-y-2">
                        {module.caseStudy.results.map((result, i) => (
                          <div key={i} className="flex items-center gap-2 text-green-400 text-sm">
                            <span>→</span>
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Number Card Side */}
                <div className={isOdd ? 'order-2' : 'order-2 lg:order-1'}>
                  <div className="relative aspect-square w-full max-w-[320px] lg:max-w-[380px] mx-auto bg-[#0a0a0a] border border-white/10">
                    {/* Corner markers */}
                    <div className="absolute top-3 left-3 w-2 h-2 border-l border-t border-[#FD68B3]/60" />
                    <div className="absolute top-3 right-3 w-2 h-2 border-r border-t border-[#FD68B3]/60" />
                    <div className="absolute bottom-3 left-3 w-2 h-2 border-l border-b border-[#FD68B3]/60" />
                    <div className="absolute bottom-3 right-3 w-2 h-2 border-r border-b border-[#FD68B3]/60" />

                    {/* Big Number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl md:text-8xl lg:text-9xl font-light text-gray-700/40 select-none">
                        {moduleNumber}
                      </span>
                    </div>

                    {/* Horizontal line */}
                    <div className="absolute bottom-12 left-6 right-6 h-px bg-white/10" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { content } from '@/content/pt';

const moduleColors: Record<string, string> = {
  journey: 'from-cyan-500 to-cyan-600',
  catalog: 'from-blue-500 to-blue-600',
  core: 'from-indigo-500 to-indigo-600',
  attribution: 'from-purple-500 to-purple-600',
  clarity: 'from-pink-500 to-pink-600',
};

export function ModuleSection() {
  const { modules } = content;

  return (
    <section id="modules" className="py-24 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <span className="font-mono text-sm text-cyan-400 tracking-wider mb-4 block">
            // OPERATING MODULES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Five modules. One mission.
          </h2>
          <p className="text-lg text-gray-400">
            Each module addresses a specific data integrity challenge.
          </p>
        </header>

        {/* Modules Grid */}
        <div className="space-y-16">
          {modules.map((module, index) => (
            <article
              key={module.id}
              id={module.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            >
              {/* Problem/System Card */}
              <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="bg-gray-950/50 border border-gray-800 rounded-2xl p-8 h-full">
                  {/* Module Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${moduleColors[module.id]} text-white text-sm font-mono`}
                    >
                      {module.code}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{module.title}</h3>
                  </div>

                  {/* DVQ Layers */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {module.dvqLayers.map((layer) => (
                      <span
                        key={layer}
                        className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400 font-mono"
                      >
                        DVQ: {layer}
                      </span>
                    ))}
                  </div>

                  {/* Problem */}
                  <div className="mb-6">
                    <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      Problem
                    </h4>
                    <p className="text-white font-medium mb-3">{module.problem.headline}</p>
                    <ul className="space-y-2">
                      {module.problem.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-red-500 mt-1">×</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* System */}
                  <div>
                    <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      System
                    </h4>
                    <p className="text-white font-medium mb-3">{module.system.headline}</p>
                    <ul className="space-y-2">
                      {module.system.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-green-500 mt-1">✓</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Case Study Card */}
              <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {module.caseStudy ? (
                  <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-700 rounded-2xl p-8 h-full">
                    <span className="font-mono text-xs text-cyan-400 mb-4 block">
                      // CASE STUDY
                    </span>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {module.caseStudy.client}
                    </h4>
                    <p className="text-gray-400 mb-6">{module.caseStudy.challenge}</p>
                    <div className="space-y-3">
                      {module.caseStudy.results.map((result, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 bg-gray-800/50 rounded-lg px-4 py-3"
                        >
                          <span className="text-cyan-400 text-xl">→</span>
                          <span className="text-white font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-950/30 border border-dashed border-gray-700 rounded-2xl p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <span className="font-mono text-sm text-gray-600 block mb-2">
                        // COMING SOON
                      </span>
                      <p className="text-gray-500">Case study in progress</p>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

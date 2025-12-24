import { content } from '@/content/pt';

export function ImpactGrid() {
  const { proof } = content;

  return (
    <section id="proof" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <span className="font-mono text-sm text-cyan-400 tracking-wider mb-4 block">
            {proof.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {proof.h2}
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">{proof.disclaimer}</p>
        </header>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {proof.metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-6 text-center group hover:border-cyan-500/50 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {metric.value}
              </div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proof.cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                  {caseStudy.client.charAt(0)}
                </div>
                <span className="text-white font-semibold">{caseStudy.client}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{caseStudy.challenge}</p>
              <div className="text-xs text-gray-500 mb-2">{caseStudy.solution}</div>
              <div className="bg-cyan-500/10 rounded-lg px-3 py-2">
                <span className="text-cyan-400 font-medium text-sm">{caseStudy.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

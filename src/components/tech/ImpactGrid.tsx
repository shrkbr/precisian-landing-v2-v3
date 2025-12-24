import { content } from '@/content/pt';

export function ImpactGrid() {
  const { proof } = content;

  return (
    <section id="proof" className="py-24 px-6 bg-[#030303]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-sm text-[#FD68B3] tracking-wider mb-6 block uppercase">
            {proof.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white">
            {proof.h2}
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {proof.metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6 hover:border-[#FD68B3]/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-medium text-[#FD68B3] mb-2">
                {metric.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {proof.cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors"
            >
              {/* Client badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-[#FD68B3] text-black text-xs font-bold rounded">
                  {caseStudy.client.charAt(0)}
                </span>
                <span className="text-white font-medium">{caseStudy.client}</span>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <span className="text-[10px] text-gray-600 uppercase tracking-wider block mb-1">
                  Challenge
                </span>
                <p className="text-gray-400 text-sm">{caseStudy.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <span className="text-[10px] text-gray-600 uppercase tracking-wider block mb-1">
                  Solution
                </span>
                <p className="text-gray-400 text-sm">{caseStudy.solution}</p>
              </div>

              {/* Result */}
              <div>
                <span className="text-[10px] text-[#FD68B3] uppercase tracking-wider block mb-1">
                  Result
                </span>
                <p className="text-green-400 font-medium text-sm">{caseStudy.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

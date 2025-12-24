import { content } from '@/content/pt';

const layerColors = [
  'from-cyan-500 to-cyan-600',
  'from-blue-500 to-blue-600',
  'from-indigo-500 to-indigo-600',
  'from-purple-500 to-purple-600',
  'from-pink-500 to-pink-600',
];

export function DVQArchitecture() {
  const { dvq } = content;

  return (
    <section id="protocol" className="py-24 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <span className="font-mono text-sm text-cyan-400 tracking-wider mb-4 block">
            {dvq.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {dvq.h2}
          </h2>
          <p className="text-xl text-gray-400 mb-2">{dvq.h2b}</p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">{dvq.text}</p>
        </header>

        {/* DVQ Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {dvq.pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="group relative bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              {/* Layer indicator */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${layerColors[index]} rounded-t-xl`}
              />

              {/* ID Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm text-gray-500">{pillar.id}</span>
                <span className="text-xs text-gray-600 font-mono">{pillar.subtitle}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400">{pillar.description}</p>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${layerColors[index]} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}
              />
            </div>
          ))}
        </div>

        {/* Trademark */}
        <p className="text-center text-sm text-gray-600 mt-12 font-mono">{dvq.trademark}</p>
      </div>
    </section>
  );
}

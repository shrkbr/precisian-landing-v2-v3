import { content } from '@/content/pt';

export function PartnerSection() {
  const { partner } = content;

  return (
    <section className="py-24 px-6 bg-[#030303]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Header */}
          <div>
            <span className="font-mono text-sm text-[#FD68B3] tracking-wider mb-6 block uppercase">
              {partner.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
              {partner.h2}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">{partner.text}</p>
          </div>

          {/* Right: Features */}
          <div className="space-y-4">
            {partner.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-[#0a0a0a]/50 border border-white/5 rounded-lg p-4"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 bg-[#FD68B3]/20 text-[#FD68B3] text-sm font-bold rounded shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

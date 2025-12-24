import { useState } from 'react';
import { content } from '@/content/pt';

export function CTAForm() {
  const { cta } = content;
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);

  const handleStackToggle = (stack: string) => {
    setSelectedStacks((prev) =>
      prev.includes(stack)
        ? prev.filter((s) => s !== stack)
        : [...prev, stack]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSuccess(true);
  };

  return (
    <section id="cta" className="py-32 px-6 bg-[#030303] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FD68B3]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[600px] mx-auto text-center relative z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
          {cta.h2}
        </h2>
        <p className="text-lg text-gray-400 mb-12">{cta.sub}</p>

        {isSuccess ? (
          <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl text-green-400">{cta.form.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-left space-y-6">
            {/* Website URL */}
            <div>
              <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                {cta.form.fields.url}
              </label>
              <input
                type="url"
                required
                className="w-full h-12 bg-[#0a0a0a] border border-white/10 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FD68B3]/50 rounded font-mono text-sm"
                placeholder="https://yoursite.com"
              />
            </div>

            {/* Name and Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                  {cta.form.fields.name}
                </label>
                <input
                  type="text"
                  required
                  className="w-full h-12 bg-[#0a0a0a] border border-white/10 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FD68B3]/50 rounded font-mono text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                  {cta.form.fields.email}
                </label>
                <input
                  type="email"
                  required
                  className="w-full h-12 bg-[#0a0a0a] border border-white/10 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FD68B3]/50 rounded font-mono text-sm"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            {/* Segment */}
            <div>
              <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                {cta.form.fields.segment}
              </label>
              <select
                required
                className="w-full h-12 bg-[#0a0a0a] border border-white/10 px-4 text-white focus:outline-none focus:border-[#FD68B3]/50 rounded font-mono text-sm appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled className="text-gray-600">
                  Select segment
                </option>
                {cta.form.segments.map((segment) => (
                  <option key={segment} value={segment} className="bg-[#0a0a0a]">
                    {segment}
                  </option>
                ))}
              </select>
            </div>

            {/* Current Stack */}
            <div>
              <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                {cta.form.fields.stack}
              </label>
              <div className="flex flex-wrap gap-2">
                {cta.form.stacks.map((stack) => (
                  <button
                    key={stack}
                    type="button"
                    onClick={() => handleStackToggle(stack)}
                    className={`px-4 py-2 rounded text-sm font-mono transition-all ${
                      selectedStacks.includes(stack)
                        ? 'bg-[#FD68B3]/20 border-[#FD68B3]/50 text-[#FD68B3]'
                        : 'bg-[#0a0a0a] border-white/10 text-gray-400 hover:border-white/20'
                    } border`}
                  >
                    {stack}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-gradient-to-r from-[#FD68B3] to-[#9333ea] text-white font-bold text-sm uppercase tracking-widest rounded hover:opacity-90 transition-opacity disabled:opacity-50 mt-8"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {cta.form.loading}
                </span>
              ) : (
                cta.form.button
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

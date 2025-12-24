import { useState } from 'react';
import { content } from '@/content/pt';

export function CTAForm() {
  const { cta } = content;
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSuccess(true);

    // Redirect to trial welcome
    setTimeout(() => {
      window.location.href = '/trial/welcome';
    }, 1000);
  };

  return (
    <section id="cta" className="py-24 px-4 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {cta.h2}
          </h2>
          <p className="text-lg text-gray-400">{cta.sub}</p>
        </header>

        {/* Form Card */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl text-green-400">{cta.form.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {cta.form.fields.url}
                  </label>
                  <input
                    type="url"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="https://yoursite.com"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {cta.form.fields.name}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {cta.form.fields.email}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                {/* Segment */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {cta.form.fields.segment}
                  </label>
                  <select
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  >
                    <option value="">Select...</option>
                    {cta.form.segments.map((segment) => (
                      <option key={segment} value={segment}>
                        {segment}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Stack */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  {cta.form.fields.stack}
                </label>
                <div className="flex flex-wrap gap-2">
                  {cta.form.stacks.map((stack) => (
                    <label key={stack} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-cyan-500 focus:ring-cyan-500" />
                      <span className="text-sm text-gray-300">{stack}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
      </div>
    </section>
  );
}

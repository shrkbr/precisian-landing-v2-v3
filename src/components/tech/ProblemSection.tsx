import { content } from '@/content/pt';

export function ProblemSection() {
  const { problem } = content;

  return (
    <section className="py-24 px-6 bg-[#030303]">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <span className="font-mono text-sm text-[#FD68B3] tracking-wider mb-6 block uppercase">
            {problem.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
            {problem.h2}
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">{problem.text}</p>
          <blockquote className="border-l-2 border-[#FD68B3]/50 pl-6 py-2">
            <p className="text-lg text-gray-500 italic">"{problem.quote}"</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

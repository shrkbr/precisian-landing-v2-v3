import { content } from '@/content/pt';

export function ProblemSection() {
  const { problem } = content;

  return (
    <section className="py-24 px-4 bg-gray-950 border-y border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-mono text-sm text-red-400 tracking-wider mb-4 block">
          {problem.eyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {problem.h2}
        </h2>
        <p className="text-xl text-gray-400 mb-8">{problem.text}</p>
        <blockquote className="border-l-4 border-red-500 pl-6 py-4 bg-red-500/5 rounded-r-lg">
          <p className="text-lg text-red-300 italic font-medium">"{problem.quote}"</p>
        </blockquote>
      </div>
    </section>
  );
}

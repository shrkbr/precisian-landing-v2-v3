interface CaseCardProps {
  client: string;
  challenge: string;
  results: string[];
  className?: string;
}

export function CaseCard({ client, challenge, results, className = '' }: CaseCardProps) {
  return (
    <div
      className={`bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-700 rounded-2xl p-8 ${className}`}
    >
      <span className="font-mono text-xs text-cyan-400 mb-4 block">// CASE STUDY</span>
      <h4 className="text-2xl font-bold text-white mb-4">{client}</h4>
      <p className="text-gray-400 mb-6">{challenge}</p>
      <div className="space-y-3">
        {results.map((result, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-gray-800/50 rounded-lg px-4 py-3"
          >
            <span className="text-cyan-400 text-xl">→</span>
            <span className="text-white font-medium">{result}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

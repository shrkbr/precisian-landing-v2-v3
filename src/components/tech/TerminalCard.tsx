import { useState, useEffect } from 'react';

interface TerminalCardProps {
  logs?: string[];
  className?: string;
  showProgress?: boolean;
}

const defaultLogs = [
  '> init_sequence --target=ga4_stream',
  '> Connecting to Precisian Kernel...',
  '> Access granted. Level 1 Diagnostics.',
  '> Detecting attribution bias...',
  '> Reconciling GA4 vs Media vs Ops...',
  '> DVQ score computed.',
];

export function TerminalCard({ logs = defaultLogs, className = '', showProgress = true }: TerminalCardProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (visibleLines >= logs.length) return;

    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
      setProgress(Math.round(((visibleLines + 1) / logs.length) * 100));
    }, 800);

    return () => clearTimeout(timer);
  }, [visibleLines, logs.length]);

  return (
    <div className={`relative border border-white/10 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-sm p-1 ${className}`}>
      {/* Corner borders */}
      <div className="corner-border corner-tl" />
      <div className="corner-border corner-tr" />
      <div className="corner-border corner-bl" />
      <div className="corner-border corner-br" />

      <div className="h-full w-full bg-black/40 border border-white/5 relative overflow-hidden flex flex-col font-mono text-xs">
        {/* Terminal Header */}
        <div className="h-8 border-b border-white/10 flex items-center justify-between px-4 bg-white/5">
          <span className="text-gray-500">TERMINAL: DVQ_CORE</span>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <div className="w-2 h-2 rounded-full bg-green-500/60" />
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 flex-1 overflow-hidden relative min-h-[280px]">
          {/* Scan line */}
          <div className="scan-line" />

          <div className="space-y-2 text-gray-400">
            {logs.slice(0, visibleLines).map((line, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-gray-600 select-none">{String(index + 1).padStart(3, '0')}</span>
                <span className={line.includes('CRITICAL') ? 'text-red-500' : line.includes('Connecting') || line.includes('computed') ? 'text-[#FD68B3]' : ''}>
                  {line}
                </span>
              </div>
            ))}

            {/* Progress indicator */}
            {showProgress && visibleLines > 0 && visibleLines < logs.length && (
              <div className="my-4 border-l-2 border-[#FD68B3]/20 pl-4 py-2 bg-[#FD68B3]/5">
                <div className="flex justify-between mb-1">
                  <span>Scanning Events</span>
                  <span className="text-[#FD68B3]">{progress}%</span>
                </div>
                <div className="w-full bg-gray-800 h-1">
                  <div
                    className="bg-[#FD68B3] h-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Awaiting command */}
            {visibleLines >= logs.length && (
              <div className="flex gap-4 mt-4 animate-pulse">
                <span className="text-gray-600">_</span>
                <span className="text-[#FD68B3]">Awaiting command input</span>
              </div>
            )}
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="h-12 border-t border-white/10 grid grid-cols-3 divide-x divide-white/10">
          <div className="flex flex-col justify-center px-4">
            <span className="text-[10px] text-gray-600 uppercase">Latency</span>
            <span className="text-[#FD68B3]">12ms</span>
          </div>
          <div className="flex flex-col justify-center px-4">
            <span className="text-[10px] text-gray-600 uppercase">Uptime</span>
            <span className="text-white">99.99%</span>
          </div>
          <div className="flex flex-col justify-center px-4 bg-red-500/10">
            <span className="text-[10px] text-red-400 uppercase">DVQ Risk</span>
            <span className="text-red-500">High</span>
          </div>
        </div>
      </div>
    </div>
  );
}

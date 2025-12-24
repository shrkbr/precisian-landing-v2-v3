import { useState, useEffect } from 'react';

interface TerminalCardProps {
  logs: string[];
  className?: string;
}

export function TerminalCard({ logs, className = '' }: TerminalCardProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (visibleLines >= logs.length) {
      setIsTyping(false);
      return;
    }

    const line = logs[visibleLines];
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex < line.length) {
        setCurrentText(line.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeChar, 30 + Math.random() * 20);
      } else {
        setTimeout(() => {
          setVisibleLines((prev) => prev + 1);
          setCurrentText('');
        }, 500);
      }
    };

    const timer = setTimeout(typeChar, 300);
    return () => clearTimeout(timer);
  }, [visibleLines, logs]);

  return (
    <div className={`bg-gray-900/80 border border-gray-700 rounded-lg overflow-hidden ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-gray-500 font-mono">precisian_terminal</span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm min-h-[200px]">
        {logs.slice(0, visibleLines).map((line, index) => (
          <div key={index} className="text-green-400 mb-1">
            {line}
          </div>
        ))}
        {visibleLines < logs.length && (
          <div className="text-green-400 mb-1">
            {currentText}
            <span className="animate-pulse">▊</span>
          </div>
        )}
        {!isTyping && (
          <div className="text-cyan-400 animate-pulse">
            {'>'} <span className="animate-pulse">▊</span>
          </div>
        )}
      </div>
    </div>
  );
}

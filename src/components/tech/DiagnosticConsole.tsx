import { useState, useEffect, useCallback } from 'react';
import { content } from '@/content/pt';

type Step = 'input' | 'scan' | 'result' | 'final';

interface DiagnosticConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DiagnosticConsole({ isOpen, onClose }: DiagnosticConsoleProps) {
  const { diagnosticConsole } = content;
  const [step, setStep] = useState<Step>('input');
  const [logs, setLogs] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    url: '',
    platform: '',
    email: '',
  });

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('input');
      setLogs([]);
      setFormData({ url: '', platform: '', email: '' });
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Simulate scan with animated logs
  const runScan = useCallback(async () => {
    setStep('scan');
    setLogs([]);

    for (const log of diagnosticConsole.steps.scan.logs) {
      await new Promise((r) => setTimeout(r, 800 + Math.random() * 400));
      setLogs((prev) => [...prev, log]);
    }

    await new Promise((r) => setTimeout(r, 1000));
    setStep('result');
  }, [diagnosticConsole.steps.scan.logs]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runScan();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 bg-[#0a0a0a] border border-[#FD68B3]/30 rounded-lg overflow-hidden shadow-2xl shadow-[#FD68B3]/10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#030303]">
          <div>
            <h2 className="text-xl font-bold text-white font-mono">
              {diagnosticConsole.title}
            </h2>
            <p className="text-sm text-[#FD68B3] font-mono">
              {diagnosticConsole.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step 1: Input Form */}
          {step === 'input' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {/* URL */}
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    {diagnosticConsole.steps.input.fields.url}
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    className="w-full h-12 bg-black border border-white/10 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FD68B3]/50 rounded font-mono text-sm"
                    placeholder="https://yoursite.com"
                  />
                </div>

                {/* Platform */}
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    {diagnosticConsole.steps.input.fields.platform}
                  </label>
                  <select
                    required
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full h-12 bg-black border border-white/10 px-4 text-white focus:outline-none focus:border-[#FD68B3]/50 rounded font-mono text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select platform</option>
                    {diagnosticConsole.steps.input.platforms.map((platform) => (
                      <option key={platform} value={platform} className="bg-black">
                        {platform}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    {diagnosticConsole.steps.input.fields.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 bg-black border border-white/10 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FD68B3]/50 rounded font-mono text-sm"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-14 bg-[#FD68B3] text-black font-bold text-sm uppercase tracking-widest rounded hover:bg-white transition-colors"
              >
                Initialize Scan
              </button>
            </form>
          )}

          {/* Step 2: Scan Animation */}
          {step === 'scan' && (
            <div className="space-y-4">
              <div className="bg-black rounded-lg p-4 font-mono text-sm min-h-[200px]">
                {logs.map((log, i) => (
                  <div
                    key={i}
                    className="text-green-400 mb-2 animate-fade-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {log}
                  </div>
                ))}
                {logs.length < diagnosticConsole.steps.scan.logs.length && (
                  <span className="inline-block w-2 h-4 bg-[#FD68B3] animate-pulse" />
                )}
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span className="font-mono text-sm">Processing...</span>
              </div>
            </div>
          )}

          {/* Step 3: Result Teaser */}
          {step === 'result' && (
            <div className="space-y-6">
              {/* DVQ Risk */}
              <div className="text-center py-6">
                <p className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-2">
                  {diagnosticConsole.steps.result.dvqLabel}
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-2xl font-bold text-red-400">
                    {diagnosticConsole.steps.result.riskLevels.high}
                  </span>
                </div>
              </div>

              {/* Failure Modes */}
              <div className="bg-black rounded-lg p-4">
                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                  Likely failure modes detected:
                </p>
                <ul className="space-y-2">
                  {diagnosticConsole.steps.result.failureModes.map((mode, i) => (
                    <li key={i} className="flex items-center gap-3 text-yellow-400 font-mono text-sm">
                      <span className="text-yellow-500">⚠</span>
                      {mode}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setStep('final')}
                className="w-full h-14 bg-[#FD68B3] text-black font-bold text-sm uppercase tracking-widest rounded hover:bg-white transition-colors"
              >
                View Recommendations
              </button>
            </div>
          )}

          {/* Step 4: Final CTA */}
          {step === 'final' && (
            <div className="space-y-6 text-center py-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#FD68B3]/20 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#FD68B3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Analysis Complete
                </h3>
                <p className="text-gray-400">
                  We've identified optimization opportunities for your stack.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <button
                  onClick={onClose}
                  className="w-full h-14 bg-[#FD68B3] text-black font-bold text-sm uppercase tracking-widest rounded hover:bg-white transition-colors"
                >
                  {diagnosticConsole.steps.final.cta1}
                </button>
                <button
                  onClick={onClose}
                  className="w-full h-14 bg-transparent border border-[#FD68B3]/50 text-[#FD68B3] font-bold text-sm uppercase tracking-widest rounded hover:bg-[#FD68B3]/10 transition-colors"
                >
                  {diagnosticConsole.steps.final.cta2}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer - AuditOS Badge */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#030303]">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <span className="font-mono">{content.auditOS.badge}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

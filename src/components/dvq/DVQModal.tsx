/**
 * DVQModal - "Descubra seu DVQ" diagnostic modal
 * Full-screen overlay with 4 steps:
 * 1. Inputs (URL, platform, email)
 * 2. Scan logs (fixed sequence)
 * 3. Result teaser (risk + failures)
 * 4. Submit confirmation
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { v0Content } from '@/content/v0';
import {
  trackDVQModalOpened,
  trackDVQModalStarted,
  trackDVQScanCompleted,
  trackDVQModalSubmitted,
  trackDVQModalSuccess,
  trackDVQModalError,
  getDeterministicRiskLevel,
  getRandomFailures,
  type RiskLevel,
} from '@/lib/track';

type Step = 'input' | 'scan' | 'result' | 'submit';

interface DVQModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourceCta?: string;
  sourceLocation?: string;
}

const modal = v0Content.modal;

export function DVQModal({
  isOpen,
  onClose,
  sourceCta = 'unknown',
  sourceLocation = 'unknown',
}: DVQModalProps) {
  const [step, setStep] = useState<Step>('input');
  const [logs, setLogs] = useState<string[]>([]);
  const [riskLevel, setRiskLevel] = useState<RiskLevel>('medium');
  const [failures, setFailures] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<'success' | 'error' | null>(null);
  const [formData, setFormData] = useState({
    url: '',
    platform: '',
    email: '',
  });

  const previousActiveElement = useRef<Element | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      setStep('input');
      setLogs([]);
      setSubmitResult(null);
      setFormData({ url: '', platform: '', email: '' });

      // Track modal opened
      trackDVQModalOpened(sourceCta, sourceLocation);

      // Focus first input
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
  }, [isOpen, sourceCta, sourceLocation]);

  // Handle escape key and body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';

      // Return focus
      if (previousActiveElement.current instanceof HTMLElement) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
    );
    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl?.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl?.focus();
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen, step]);

  // Run scan animation
  const runScan = useCallback(async () => {
    setStep('scan');
    setLogs([]);

    // Extract domain for tracking
    const domain = formData.url.replace(/^https?:\/\//, '').split('/')[0];
    trackDVQModalStarted(domain, formData.platform);

    // Calculate deterministic risk
    const risk = getDeterministicRiskLevel(formData.url);
    setRiskLevel(risk);

    // Get random failures
    const topFailures = getRandomFailures(3);
    setFailures(topFailures);

    // Animate logs
    for (const log of modal.step2.logs) {
      await new Promise((r) => setTimeout(r, 600 + Math.random() * 400));
      setLogs((prev) => [...prev, log]);
    }

    // Track scan completed
    trackDVQScanCompleted(risk, topFailures);

    // Brief pause then show results
    await new Promise((r) => setTimeout(r, 800));
    setStep('result');
  }, [formData]);

  // Submit form
  const handleSubmit = async () => {
    setIsSubmitting(true);

    const domain = formData.url.replace(/^https?:\/\//, '').split('/')[0];
    trackDVQModalSubmitted(domain, formData.platform);

    try {
      const response = await fetch('/api/dvq-diagnostic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          riskLevel,
          failures,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        trackDVQModalSuccess(data.request_id || 'unknown');
        setSubmitResult('success');
      } else {
        throw new Error('Submit failed');
      }
    } catch {
      // Fallback: simulate success for demo
      const fakeRequestId = `req_${Date.now()}`;
      trackDVQModalSuccess(fakeRequestId);
      setSubmitResult('success');
    }

    setIsSubmitting(false);
    setStep('submit');
  };

  // Handle form submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runScan();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-lg mx-4 bg-[#0a0a0a] border border-[#FD68B3]/30 rounded-lg overflow-hidden shadow-2xl shadow-[#FD68B3]/10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#030303]">
          <div>
            <h2 id="modal-title" className="text-xl font-bold text-white font-mono">
              {modal.title}
            </h2>
            <p className="text-sm text-[#FD68B3] font-mono">{modal.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {/* Step 1: Inputs */}
            {step === 'input' && (
              <motion.form
                key="input"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleFormSubmit}
                className="space-y-5"
              >
                {/* URL */}
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    {modal.step1.fields.url.label} *
                  </label>
                  <input
                    ref={firstInputRef}
                    type="url"
                    required
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    placeholder={modal.step1.fields.url.placeholder}
                    className="w-full h-12 bg-black border border-white/10 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FD68B3]/50 rounded font-mono text-sm"
                  />
                </div>

                {/* Platform */}
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    {modal.step1.fields.platform.label} *
                  </label>
                  <select
                    required
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full h-12 bg-black border border-white/10 px-4 text-white focus:outline-none focus:border-[#FD68B3]/50 rounded font-mono text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Selecione...</option>
                    {modal.step1.fields.platform.options.map((opt) => (
                      <option key={opt} value={opt} className="bg-black">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    {modal.step1.fields.email.label} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={modal.step1.fields.email.placeholder}
                    className="w-full h-12 bg-black border border-white/10 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FD68B3]/50 rounded font-mono text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 bg-[#FD68B3] text-black font-bold text-sm uppercase tracking-widest rounded hover:bg-white transition-colors"
                >
                  {modal.step1.button}
                </button>
              </motion.form>
            )}

            {/* Step 2: Scan */}
            {step === 'scan' && (
              <motion.div
                key="scan"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-[#FD68B3] mb-4">
                  <Terminal className="w-5 h-5" />
                  <span className="font-mono text-sm">{modal.step2.title}</span>
                </div>

                <div className="bg-black rounded-lg p-4 font-mono text-sm min-h-[250px] max-h-[300px] overflow-y-auto">
                  {logs.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-400 mb-2"
                    >
                      {log}
                    </motion.div>
                  ))}
                  {logs.length < modal.step2.logs.length && (
                    <span className="inline-block w-2 h-4 bg-[#FD68B3] animate-pulse" />
                  )}
                </div>

                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="font-mono text-sm">Processando...</span>
                </div>
              </motion.div>
            )}

            {/* Step 3: Result */}
            {step === 'result' && (
              <motion.div
                key="result"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {/* Risk badge */}
                <div className="text-center py-4">
                  <p className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-3">
                    {modal.step3.riskLabel}
                  </p>
                  <div className={`
                    inline-flex items-center gap-2 px-6 py-3 rounded-lg border
                    ${riskLevel === 'high' ? 'bg-red-500/20 border-red-500/50' : ''}
                    ${riskLevel === 'medium' ? 'bg-yellow-500/20 border-yellow-500/50' : ''}
                    ${riskLevel === 'low' ? 'bg-green-500/20 border-green-500/50' : ''}
                  `}>
                    <span className={`
                      w-3 h-3 rounded-full animate-pulse
                      ${riskLevel === 'high' ? 'bg-red-500' : ''}
                      ${riskLevel === 'medium' ? 'bg-yellow-500' : ''}
                      ${riskLevel === 'low' ? 'bg-green-500' : ''}
                    `} />
                    <span className={`
                      text-2xl font-bold
                      ${riskLevel === 'high' ? 'text-red-400' : ''}
                      ${riskLevel === 'medium' ? 'text-yellow-400' : ''}
                      ${riskLevel === 'low' ? 'text-green-400' : ''}
                    `}>
                      {modal.step3.riskLevels[riskLevel]}
                    </span>
                  </div>
                </div>

                {/* Failures */}
                <div className="bg-black rounded-lg p-4">
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                    {modal.step3.failuresLabel}
                  </p>
                  <ul className="space-y-2">
                    {failures.map((failure, i) => (
                      <li key={i} className="flex items-center gap-3 text-yellow-400 font-mono text-sm">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0" />
                        {failure}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full h-14 bg-[#FD68B3] text-black font-bold text-sm uppercase tracking-widest rounded hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  {modal.step3.button}
                </button>
              </motion.div>
            )}

            {/* Step 4: Submit result */}
            {step === 'submit' && (
              <motion.div
                key="submit"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6"
              >
                <div className={`
                  w-20 h-20 mx-auto rounded-full flex items-center justify-center
                  ${submitResult === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'}
                `}>
                  {submitResult === 'success' ? (
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  ) : (
                    <AlertTriangle className="w-10 h-10 text-red-400" />
                  )}
                </div>

                <p className={`font-mono text-lg ${submitResult === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {submitResult === 'success' ? modal.step4.success : modal.step4.error}
                </p>

                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-white/10 text-white font-mono text-sm uppercase tracking-wider rounded hover:bg-white/20 transition-colors"
                >
                  Fechar
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#030303]">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <span className="font-mono">Powered by DVQ™</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

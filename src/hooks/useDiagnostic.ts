/**
 * useDiagnostic Hook
 * Manages diagnostic console state and API integration
 */

import { useState, useCallback, useEffect } from 'react';
import type {
  DiagnosticInput,
  DiagnosticResult,
  DiagnosticStep,
  ScanLogEntry,
} from '@/types/diagnostic';
import { submitDiagnostic, getScanLogs } from '@/services/diagnostic';
import {
  trackDiagnosticStart,
  trackDiagnosticComplete,
  trackDiagnosticLeadCapture,
} from '@/services/analytics';

interface UseDiagnosticOptions {
  onComplete?: (result: DiagnosticResult) => void;
  onError?: (error: Error) => void;
  source?: 'hero' | 'nav' | 'cta';
}

interface UseDiagnosticReturn {
  // State
  step: DiagnosticStep;
  isLoading: boolean;
  error: Error | null;
  result: DiagnosticResult | null;
  logs: ScanLogEntry[];
  formData: DiagnosticInput;

  // Actions
  setFormData: (data: Partial<DiagnosticInput>) => void;
  startDiagnostic: () => Promise<void>;
  reset: () => void;
  goToStep: (step: DiagnosticStep) => void;
}

const initialFormData: DiagnosticInput = {
  url: '',
  platform: 'Shopify',
  email: '',
  company: '',
};

export function useDiagnostic(options: UseDiagnosticOptions = {}): UseDiagnosticReturn {
  const { onComplete, onError, source = 'hero' } = options;

  const [step, setStep] = useState<DiagnosticStep>('input');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [logs, setLogs] = useState<ScanLogEntry[]>([]);
  const [formData, setFormDataState] = useState<DiagnosticInput>(initialFormData);

  // Track when modal opens
  useEffect(() => {
    if (step === 'input') {
      trackDiagnosticStart(source);
    }
  }, [source, step]);

  const setFormData = useCallback((data: Partial<DiagnosticInput>) => {
    setFormDataState((prev) => ({ ...prev, ...data }));
  }, []);

  const runScanAnimation = useCallback(async (): Promise<void> => {
    const scanLogs = getScanLogs();
    setLogs([]);

    for (let i = 0; i < scanLogs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 600 + Math.random() * 400));

      setLogs((prev) => [
        ...prev,
        {
          message: scanLogs[i],
          status: i === scanLogs.length - 1 ? 'success' : 'running',
          timestamp: Date.now(),
        },
      ]);
    }

    // Brief pause before showing results
    await new Promise((resolve) => setTimeout(resolve, 800));
  }, []);

  const startDiagnostic = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setStep('scan');

    try {
      // Track lead capture
      trackDiagnosticLeadCapture(formData.email, formData.platform);

      // Run scan animation in parallel with API call
      const [, response] = await Promise.all([
        runScanAnimation(),
        submitDiagnostic(formData),
      ]);

      if (response.success && response.data) {
        setResult(response.data);
        setStep('result');

        // Track completion
        trackDiagnosticComplete(
          response.data.dvqScore,
          response.data.riskLevel,
          response.data.failureModes.length
        );

        onComplete?.(response.data);
      } else {
        throw new Error(response.error?.message || 'Diagnostic failed');
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      onError?.(error);

      // Still show results step with error state
      setStep('result');
    } finally {
      setIsLoading(false);
    }
  }, [formData, onComplete, onError, runScanAnimation]);

  const reset = useCallback(() => {
    setStep('input');
    setIsLoading(false);
    setError(null);
    setResult(null);
    setLogs([]);
    setFormDataState(initialFormData);
  }, []);

  const goToStep = useCallback((newStep: DiagnosticStep) => {
    setStep(newStep);
  }, []);

  return {
    step,
    isLoading,
    error,
    result,
    logs,
    formData,
    setFormData,
    startDiagnostic,
    reset,
    goToStep,
  };
}

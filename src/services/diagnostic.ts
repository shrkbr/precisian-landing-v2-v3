/**
 * Diagnostic Service
 * Handles diagnostic API calls and data processing
 */

import type {
  DiagnosticInput,
  DiagnosticResult,
  DiagnosticAPIResponse,
  FailureMode,
} from '@/types/diagnostic';

// API endpoint (to be configured)
const API_ENDPOINT = '/api/diagnostic';

// Generate a unique session ID
function generateSessionId(): string {
  return `diag_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

// Simulated failure modes based on platform
function getSimulatedFailureModes(platform: string): FailureMode[] {
  const commonFailures: FailureMode[] = [
    {
      id: 'fm_attribution',
      title: 'Attribution decay detected',
      severity: 'critical',
      description: 'Cross-device and cross-channel attribution showing significant data loss',
      relatedModule: 'journey',
    },
    {
      id: 'fm_revenue',
      title: 'Revenue mismatch likely',
      severity: 'warning',
      description: 'Discrepancy between GA4 revenue and backend systems detected',
      relatedModule: 'core',
    },
    {
      id: 'fm_events',
      title: 'Missing micro-events',
      severity: 'warning',
      description: 'Critical user journey events not being captured',
      relatedModule: 'journey',
    },
  ];

  // Add platform-specific failures
  if (platform === 'Shopify' || platform === 'VTEX') {
    commonFailures.push({
      id: 'fm_catalog',
      title: 'Catalog sync issues',
      severity: 'warning',
      description: 'Product feed may have sync delays or missing attributes',
      relatedModule: 'catalog',
    });
  }

  return commonFailures;
}

// Submit diagnostic request
export async function submitDiagnostic(
  input: DiagnosticInput
): Promise<DiagnosticAPIResponse> {
  const sessionId = generateSessionId();

  try {
    // Try to call the real API endpoint
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...input,
        sessionId,
        timestamp: new Date().toISOString(),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        data: data as DiagnosticResult,
      };
    }

    // If API returns error, fall back to simulation
    throw new Error('API not available');
  } catch {
    // Fallback: Return simulated result for demo purposes
    console.info('[Diagnostic] Using simulated response (API not configured)');

    const failureModes = getSimulatedFailureModes(input.platform);
    const dvqScore = Math.floor(Math.random() * 30) + 20; // 20-50 range (low score)

    const result: DiagnosticResult = {
      dvqScore,
      riskLevel: dvqScore < 40 ? 'high' : dvqScore < 60 ? 'medium' : 'low',
      failureModes,
      recommendations: [
        {
          id: 'rec_journey',
          title: 'Implement full journey mapping',
          priority: 'high',
          description: 'Map all user touchpoints from first interaction to conversion',
          module: 'journey',
          estimatedImpact: '+25% attribution accuracy',
        },
        {
          id: 'rec_core',
          title: 'Enable data reconciliation',
          priority: 'high',
          description: 'Connect GA4 with backend systems for verified revenue',
          module: 'core',
          estimatedImpact: '+40% revenue visibility',
        },
        {
          id: 'rec_catalog',
          title: 'Optimize catalog feed',
          priority: 'medium',
          description: 'Implement real-time sync and custom labels',
          module: 'catalog',
          estimatedImpact: '+15% approval rate',
        },
      ],
      timestamp: new Date().toISOString(),
      sessionId,
    };

    return {
      success: true,
      data: result,
    };
  }
}

// Get scan logs for animation
export function getScanLogs(): string[] {
  return [
    '> Initializing diagnostic sequence...',
    '> Detecting GA4 configuration...',
    '> Checking attribution integrity...',
    '> Reconciling GA4 vs Media vs Ops...',
    '> Analyzing journey completeness...',
    '> Evaluating data governance...',
    '> Computing DVQ score...',
    '> Generating recommendations...',
    '> Analysis complete.',
  ];
}

// Get risk level color
export function getRiskLevelColor(level: 'high' | 'medium' | 'low'): string {
  switch (level) {
    case 'high':
      return 'text-red-400';
    case 'medium':
      return 'text-yellow-400';
    case 'low':
      return 'text-green-400';
  }
}

// Get risk level background
export function getRiskLevelBg(level: 'high' | 'medium' | 'low'): string {
  switch (level) {
    case 'high':
      return 'bg-red-500/20 border-red-500/50';
    case 'medium':
      return 'bg-yellow-500/20 border-yellow-500/50';
    case 'low':
      return 'bg-green-500/20 border-green-500/50';
  }
}

/**
 * Diagnostic Types
 * Types for the diagnostic console and API integration
 */

// Form input for diagnostic
export interface DiagnosticInput {
  url: string;
  platform: 'Shopify' | 'VTEX' | 'Magento' | 'WooCommerce' | 'Custom';
  email: string;
  company?: string;
}

// Diagnostic result from API
export interface DiagnosticResult {
  dvqScore: number;
  riskLevel: 'high' | 'medium' | 'low';
  failureModes: FailureMode[];
  recommendations: Recommendation[];
  timestamp: string;
  sessionId: string;
}

export interface FailureMode {
  id: string;
  title: string;
  severity: 'critical' | 'warning' | 'info';
  description: string;
  relatedModule?: 'journey' | 'catalog' | 'core' | 'attribution' | 'clarity';
}

export interface Recommendation {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  description: string;
  module: 'journey' | 'catalog' | 'core' | 'attribution' | 'clarity';
  estimatedImpact: string;
}

// API Response
export interface DiagnosticAPIResponse {
  success: boolean;
  data?: DiagnosticResult;
  error?: {
    code: string;
    message: string;
  };
}

// Diagnostic step for modal state
export type DiagnosticStep = 'input' | 'scan' | 'result' | 'final';

// Scan log entry
export interface ScanLogEntry {
  message: string;
  status: 'pending' | 'running' | 'success' | 'error';
  timestamp: number;
}

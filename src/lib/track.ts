/**
 * Tracking Utility - dataLayer integration
 * Pushes events to window.dataLayer for GA4
 */

// Pillar IDs
export type PillarId = 'journey' | 'integration' | 'governance' | 'attribution' | 'insights';

// Solution IDs
export type SolutionId = 'journey' | 'catalog' | 'core' | 'attribution' | 'clarity';

// Risk levels
export type RiskLevel = 'low' | 'medium' | 'high';

// Event payload types
interface BasePayload {
  timestamp?: number;
}

interface PageViewPayload extends BasePayload {
  path: string;
  title: string;
}

interface CTAClickPayload extends BasePayload {
  cta_id: string;
  location: string;
  target?: string;
}

interface DVQViewPayload extends BasePayload {
  location: string;
}

interface DVQPillarSelectPayload extends BasePayload {
  pillar_id: PillarId;
  pillar_name: string;
  location: string;
}

interface DVQModalOpenedPayload extends BasePayload {
  source_cta: string;
  location: string;
}

interface DVQModalStartedPayload extends BasePayload {
  website_domain: string;
  platform: string;
}

interface DVQScanCompletedPayload extends BasePayload {
  risk_level: RiskLevel;
  top_failures: string[];
}

interface DVQModalSubmittedPayload extends BasePayload {
  website_domain: string;
  platform: string;
}

interface DVQModalSuccessPayload extends BasePayload {
  request_id: string;
}

interface DVQModalErrorPayload extends BasePayload {
  error_code: string;
}

interface SolutionViewPayload extends BasePayload {
  solution_id: SolutionId;
}

interface SolutionCTAClickPayload extends BasePayload {
  solution_id: SolutionId;
  cta_id: string;
}

// Event names
type EventName =
  | 'page_view'
  | 'cta_click'
  | 'dvq_view'
  | 'dvq_pillar_select'
  | 'dvq_modal_opened'
  | 'dvq_modal_started'
  | 'dvq_scan_completed'
  | 'dvq_modal_submitted'
  | 'dvq_modal_success'
  | 'dvq_modal_error'
  | 'solution_view'
  | 'solution_cta_click';

// Event payload map
type EventPayloadMap = {
  page_view: PageViewPayload;
  cta_click: CTAClickPayload;
  dvq_view: DVQViewPayload;
  dvq_pillar_select: DVQPillarSelectPayload;
  dvq_modal_opened: DVQModalOpenedPayload;
  dvq_modal_started: DVQModalStartedPayload;
  dvq_scan_completed: DVQScanCompletedPayload;
  dvq_modal_submitted: DVQModalSubmittedPayload;
  dvq_modal_success: DVQModalSuccessPayload;
  dvq_modal_error: DVQModalErrorPayload;
  solution_view: SolutionViewPayload;
  solution_cta_click: SolutionCTAClickPayload;
};

// Extend Window interface
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Push event to dataLayer
 */
export function track<E extends EventName>(
  event: E,
  payload: EventPayloadMap[E]
): void {
  const eventData = {
    event,
    ...payload,
    timestamp: Date.now(),
  };

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
  } else if (typeof window !== 'undefined') {
    // Dev mode - log to console
    console.debug('[track]', eventData);
  }
}

// ============================================
// Convenience functions
// ============================================

export function trackPageView(path: string, title: string): void {
  track('page_view', { path, title });
}

export function trackCTAClick(cta_id: string, location: string, target?: string): void {
  track('cta_click', { cta_id, location, target });
}

export function trackDVQView(location: string): void {
  track('dvq_view', { location });
}

export function trackDVQPillarSelect(
  pillar_id: PillarId,
  pillar_name: string,
  location: string
): void {
  track('dvq_pillar_select', { pillar_id, pillar_name, location });
}

export function trackDVQModalOpened(source_cta: string, location: string): void {
  track('dvq_modal_opened', { source_cta, location });
}

export function trackDVQModalStarted(website_domain: string, platform: string): void {
  track('dvq_modal_started', { website_domain, platform });
}

export function trackDVQScanCompleted(risk_level: RiskLevel, top_failures: string[]): void {
  track('dvq_scan_completed', { risk_level, top_failures });
}

export function trackDVQModalSubmitted(website_domain: string, platform: string): void {
  track('dvq_modal_submitted', { website_domain, platform });
}

export function trackDVQModalSuccess(request_id: string): void {
  track('dvq_modal_success', { request_id });
}

export function trackDVQModalError(error_code: string): void {
  track('dvq_modal_error', { error_code });
}

export function trackSolutionView(solution_id: SolutionId): void {
  track('solution_view', { solution_id });
}

export function trackSolutionCTAClick(solution_id: SolutionId, cta_id: string): void {
  track('solution_cta_click', { solution_id, cta_id });
}

// ============================================
// Utility: Get deterministic risk level from URL
// ============================================
export function getDeterministicRiskLevel(url: string): RiskLevel {
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    const char = url.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  // Deterministic risk based on hash
  const absHash = Math.abs(hash);
  if (absHash % 3 === 0) return 'high';
  if (absHash % 3 === 1) return 'medium';
  return 'low';
}

// ============================================
// Utility: Get random failures from list
// ============================================
export function getRandomFailures(count: number = 3): string[] {
  const allFailures = [
    'Attribution decay across devices',
    'Revenue mismatch GA4 vs Backend',
    'Missing micro-events in funnel',
    'Consent mode misconfiguration',
    'Server-side tracking gaps',
    'Cross-domain tracking issues',
  ];

  // Shuffle and take first N
  const shuffled = [...allFailures].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

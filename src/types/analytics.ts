/**
 * Analytics Types
 * Types for dataLayer events and tracking
 */

// Base event interface
export interface BaseAnalyticsEvent {
  event: string;
  timestamp: number;
  sessionId?: string;
}

// Diagnostic events
export interface DiagnosticStartEvent extends BaseAnalyticsEvent {
  event: 'diagnostic_start';
  platform: string;
  source: 'hero' | 'nav' | 'cta';
}

export interface DiagnosticCompleteEvent extends BaseAnalyticsEvent {
  event: 'diagnostic_complete';
  dvqScore: number;
  riskLevel: 'high' | 'medium' | 'low';
  failureModesCount: number;
}

export interface DiagnosticLeadCaptureEvent extends BaseAnalyticsEvent {
  event: 'diagnostic_lead_capture';
  email: string;
  platform: string;
  dvqScore?: number;
}

// Navigation events
export interface NavigationEvent extends BaseAnalyticsEvent {
  event: 'navigation_click';
  destination: string;
  source: string;
}

// Video events
export interface VideoEvent extends BaseAnalyticsEvent {
  event: 'video_play' | 'video_pause' | 'video_complete';
  videoId: string;
  videoTitle: string;
  percentWatched?: number;
}

// CTA events
export interface CTAClickEvent extends BaseAnalyticsEvent {
  event: 'cta_click';
  ctaId: string;
  ctaText: string;
  location: string;
}

// Section view events
export interface SectionViewEvent extends BaseAnalyticsEvent {
  event: 'section_view';
  sectionId: string;
  sectionName: string;
  viewDuration?: number;
}

// Module interaction events
export interface ModuleInteractionEvent extends BaseAnalyticsEvent {
  event: 'module_click' | 'module_expand';
  moduleId: 'journey' | 'catalog' | 'core' | 'attribution' | 'clarity';
  moduleName: string;
}

// DVQ diagram interaction
export interface DVQDiagramEvent extends BaseAnalyticsEvent {
  event: 'dvq_layer_click' | 'dvq_layer_hover';
  layerId: string;
  layerName: string;
}

// Union type for all analytics events
export type AnalyticsEvent =
  | DiagnosticStartEvent
  | DiagnosticCompleteEvent
  | DiagnosticLeadCaptureEvent
  | NavigationEvent
  | VideoEvent
  | CTAClickEvent
  | SectionViewEvent
  | ModuleInteractionEvent
  | DVQDiagramEvent;

// DataLayer type extension for window
declare global {
  interface Window {
    dataLayer: AnalyticsEvent[];
  }
}

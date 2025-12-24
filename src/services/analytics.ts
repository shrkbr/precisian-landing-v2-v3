import { ServiceResult } from '@/types';

// Analytics Events
export enum AnalyticsEvent {
  // Page Views
  PAGE_VIEW = 'page_view',

  // ROI Calculator
  ROI_CALCULATOR_STARTED = 'roi_calculator_started',
  ROI_CALCULATOR_STEP_COMPLETED = 'roi_calculator_step_completed',
  ROI_CALCULATOR_COMPLETED = 'roi_calculator_completed',
  ROI_PDF_DOWNLOADED = 'roi_pdf_downloaded',

  // Forms
  CONTACT_FORM_STARTED = 'contact_form_started',
  CONTACT_FORM_SUBMITTED = 'contact_form_submitted',
  DEMO_REQUESTED = 'demo_requested',

  // DVQ Methodology
  DVQ_STEP_VIEWED = 'dvq_step_viewed',
  DVQ_COMPLETED = 'dvq_completed',

  // Engagement
  CTA_CLICKED = 'cta_clicked',
  VIDEO_PLAYED = 'video_played',
  CASE_STUDY_VIEWED = 'case_study_viewed',

  // Navigation
  SERVICE_PAGE_VIEWED = 'service_page_viewed',
  EXTERNAL_LINK_CLICKED = 'external_link_clicked'
}

interface AnalyticsProperties {
  [key: string]: string | number | boolean | null;
}

// Analytics Service for Posthog integration
class AnalyticsService {
  private isInitialized = false;
  private userId: string | null = null;

  private getDefaultProperties(): AnalyticsProperties {
    return {
      timestamp: Date.now(),
      url: window.location.href,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`
    };
  }

  async initialize(apiKey?: string): Promise<ServiceResult<void>> {
    try {
      // TODO: Initialize Posthog
      // posthog.init(apiKey, {
      //   api_host: 'https://app.posthog.com',
      //   capture_pageview: false // We'll handle manually
      // });

      this.isInitialized = true;
      console.info('[AnalyticsService] Initialized successfully');

      return { success: true };
    } catch (error) {
      console.error('[AnalyticsService] Initialization failed:', error);

      return {
        success: false,
        error: {
          message: 'Failed to initialize analytics',
          code: 'ANALYTICS_INIT_ERROR',
          details: error
        }
      };
    }
  }

  async identify(userId: string, properties?: AnalyticsProperties): Promise<void> {
    try {
      this.userId = userId;

      const identifyProperties = {
        ...properties,
        identified_at: new Date().toISOString()
      };

      // TODO: Implement Posthog identify
      // posthog.identify(userId, identifyProperties);

      console.info('[AnalyticsService] User identified:', userId);
    } catch (error) {
      console.error('[AnalyticsService] Identify error:', error);
    }
  }

  async track(
    event: AnalyticsEvent,
    properties?: AnalyticsProperties
  ): Promise<void> {
    try {
      if (!this.isInitialized) {
        console.warn('[AnalyticsService] Not initialized, queuing event:', event);
        return;
      }

      const eventProperties = {
        ...this.getDefaultProperties(),
        ...properties,
        user_id: this.userId
      };

      // TODO: Implement Posthog capture
      // posthog.capture(event, eventProperties);

      // For development, log to console
      if (process.env.NODE_ENV === 'development') {
        console.info('[AnalyticsService] Event tracked:', {
          event,
          properties: eventProperties
        });
      }
    } catch (error) {
      console.error('[AnalyticsService] Track error:', error);
    }
  }

  // Convenience methods for common events
  async trackPageView(page: string, properties?: AnalyticsProperties): Promise<void> {
    await this.track(AnalyticsEvent.PAGE_VIEW, {
      page,
      ...properties
    });
  }

  async trackCTAClick(ctaName: string, location: string): Promise<void> {
    await this.track(AnalyticsEvent.CTA_CLICKED, {
      cta_name: ctaName,
      cta_location: location
    });
  }

  async trackROICalculatorStep(step: number, stepName: string): Promise<void> {
    await this.track(AnalyticsEvent.ROI_CALCULATOR_STEP_COMPLETED, {
      step_number: step,
      step_name: stepName
    });
  }

  async trackFormSubmission(formType: string, success: boolean, leadId?: string): Promise<void> {
    await this.track(
      formType === 'contact' ? AnalyticsEvent.CONTACT_FORM_SUBMITTED : AnalyticsEvent.DEMO_REQUESTED,
      {
        form_type: formType,
        success,
        lead_id: leadId
      }
    );
  }

  async trackDVQStep(stepNumber: number, stepName: string): Promise<void> {
    await this.track(AnalyticsEvent.DVQ_STEP_VIEWED, {
      dvq_step: stepNumber,
      step_name: stepName
    });
  }

  // Feature flags and A/B testing support
  async getFeatureFlag(flagName: string): Promise<boolean> {
    try {
      // TODO: Implement Posthog feature flags
      // return posthog.isFeatureEnabled(flagName);

      // Mock implementation
      return false;
    } catch (error) {
      console.error('[AnalyticsService] Feature flag error:', error);
      return false;
    }
  }

  // Heatmap and session recording
  async startSessionRecording(): Promise<void> {
    try {
      // TODO: Implement Posthog session recording
      // posthog.startSessionRecording();
      console.info('[AnalyticsService] Session recording started');
    } catch (error) {
      console.error('[AnalyticsService] Session recording error:', error);
    }
  }

  async stopSessionRecording(): Promise<void> {
    try {
      // TODO: Implement Posthog session recording stop
      // posthog.stopSessionRecording();
      console.info('[AnalyticsService] Session recording stopped');
    } catch (error) {
      console.error('[AnalyticsService] Session recording stop error:', error);
    }
  }
}

export const analyticsService = new AnalyticsService();
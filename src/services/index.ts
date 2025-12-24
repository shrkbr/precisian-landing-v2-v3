// Central export for all services
export { calculatorService } from './calculator';
export { crmService } from './crm';
export { analyticsService, AnalyticsEvent } from './analytics';
export { emailService } from './email';

// Re-export commonly used types
export type { default as CalculatorService } from './calculator';
export type { default as CRMService } from './crm';
export type { default as AnalyticsService } from './analytics';
export type { default as EmailService } from './email';
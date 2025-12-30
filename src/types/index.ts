// Central export for all types
export * from './lead';
export * from './calculator';
export * from './api';
export * from './diagnostic';
export * from './analytics';

// Re-export commonly used types
export type {
  Lead,
  CreateLeadRequest,
  CreateLeadResponse,
  CompanySize,
  LeadStatus
} from './lead';

export type {
  ROICalculationInputs,
  ROICalculationResults,
  ROICalculatorFormData,
  CalculatorStep
} from './calculator';

export type {
  ApiResponse,
  ApiError,
  ServiceResult,
  SubmissionStatus,
  SubmissionState
} from './api';
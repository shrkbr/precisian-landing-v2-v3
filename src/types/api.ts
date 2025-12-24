// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ApiError {
  message: string;
  code: string;
  details?: unknown;
}

// Common API patterns
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Service response pattern
export interface ServiceResult<T> {
  data?: T;
  error?: ApiError;
  success: boolean;
}

// Form submission states
export enum SubmissionStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface SubmissionState {
  status: SubmissionStatus;
  message?: string;
  data?: unknown;
}
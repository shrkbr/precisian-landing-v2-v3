import { CompanySize } from './lead';

// ROI Calculator Types
export interface ROICalculationInputs {
  company_size: CompanySize;
  current_revenue: number;
  growth_target: number;
  current_tools: string[];
  team_size: number;
}

export interface ROICalculationResults {
  roi_percentage: number;
  cost_savings: number;
  revenue_impact: number;
  payback_months: number;
  pdf_url?: string;
}

export interface ROICalculation {
  id: string;
  lead_id?: string;
  inputs: ROICalculationInputs;
  results: ROICalculationResults;
  pdf_generated: boolean;
  created_at: string;
}

export interface ROICalculatorFormData {
  // Step 1: Company Info
  company_size: CompanySize;
  industry: string;
  current_revenue: number;

  // Step 2: Current State
  current_tools: string[];
  team_size: number;
  monthly_analytics_cost: number;

  // Step 3: Goals
  growth_target: number;
  priority_areas: string[];
  timeline_months: number;
}

export interface ROICalculatorStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export enum CalculatorStep {
  COMPANY_INFO = 1,
  CURRENT_STATE = 2,
  GOALS = 3,
  RESULTS = 4
}
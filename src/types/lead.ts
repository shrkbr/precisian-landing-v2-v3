// Lead Types
export enum CompanySize {
  MICRO = "1-10",
  SMALL = "11-50",
  MEDIUM = "51-200",
  LARGE = "201-500",
  ENTERPRISE = "500+"
}

export enum AnnualRevenue {
  STARTUP = "0-1M",
  SMALL = "1M-10M",
  MEDIUM = "10M-50M",
  LARGE = "50M-200M",
  ENTERPRISE = "200M+"
}

export enum LeadStatus {
  NEW = "new",
  CONTACTED = "contacted",
  QUALIFIED = "qualified",
  CONVERTED = "converted"
}

export interface Lead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string;
  role: string;
  company_size: CompanySize;
  annual_revenue?: AnnualRevenue;
  interest_area: string[];
  utm_source?: string;
  utm_campaign?: string;
  lead_score?: number;
  status: LeadStatus;
}

export interface CreateLeadRequest {
  name: string;
  email: string;
  company: string;
  role: string;
  company_size: CompanySize;
  interest_area: string[];
  utm_source?: string;
  utm_campaign?: string;
}

export interface CreateLeadResponse {
  id: string;
  created_at: string;
  lead_score: number;
}
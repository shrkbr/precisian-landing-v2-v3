import {
  CreateLeadRequest,
  CreateLeadResponse,
  Lead,
  ServiceResult,
  CompanySize,
  LeadStatus
} from '@/types';

// CRM Service for HubSpot integration
class CRMService {
  private readonly HUBSPOT_API_BASE = 'https://api.hubapi.com';
  private readonly WEBHOOK_BACKUP_URL = 'https://webhook.site/your-backup-webhook'; // TODO: Configure

  private getLeadScore(leadData: CreateLeadRequest): number {
    let score = 50; // Base score

    // Company size scoring
    const companySizeScores = {
      [CompanySize.MICRO]: 20,
      [CompanySize.SMALL]: 40,
      [CompanySize.MEDIUM]: 60,
      [CompanySize.LARGE]: 80,
      [CompanySize.ENTERPRISE]: 100
    };
    score += companySizeScores[leadData.company_size] || 50;

    // Interest area scoring (multiple interests = higher engagement)
    score += Math.min(leadData.interest_area.length * 10, 30);

    // Email domain scoring (corporate emails score higher)
    const emailDomain = leadData.email.split('@')[1];
    const isGenericEmail = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com']
      .includes(emailDomain.toLowerCase());
    if (!isGenericEmail) score += 20;

    // UTM source scoring
    if (leadData.utm_source) {
      const organicSources = ['google', 'linkedin', 'direct'];
      if (organicSources.some(source => leadData.utm_source?.includes(source))) {
        score += 15;
      }
    }

    return Math.min(Math.max(score, 0), 100); // Clamp between 0-100
  }

  private async sendToHubSpot(leadData: CreateLeadRequest): Promise<CreateLeadResponse> {
    // TODO: Implement actual HubSpot API call
    // This is a mock implementation

    const hubspotContact = {
      properties: {
        email: leadData.email,
        firstname: leadData.name.split(' ')[0],
        lastname: leadData.name.split(' ').slice(1).join(' ') || '',
        company: leadData.company,
        jobtitle: leadData.role,
        hs_lead_status: 'NEW',
        company_size: leadData.company_size,
        interest_areas: leadData.interest_area.join(', '),
        utm_source: leadData.utm_source || '',
        utm_campaign: leadData.utm_campaign || ''
      }
    };

    // Mock API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Mock successful response
    return {
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      lead_score: this.getLeadScore(leadData)
    };
  }

  private async sendToWebhookBackup(leadData: CreateLeadRequest): Promise<CreateLeadResponse> {
    const payload = {
      ...leadData,
      source: 'precisian-website',
      timestamp: new Date().toISOString(),
      lead_score: this.getLeadScore(leadData)
    };

    // TODO: Implement actual webhook call
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      lead_score: payload.lead_score
    };
  }

  async createLead(leadData: CreateLeadRequest): Promise<ServiceResult<CreateLeadResponse>> {
    try {
      // Try HubSpot first
      try {
        const hubspotResponse = await this.sendToHubSpot(leadData);

        // Log success
        console.info('[CRMService] Lead sent to HubSpot successfully:', hubspotResponse.id);

        return {
          success: true,
          data: hubspotResponse
        };
      } catch (hubspotError) {
        console.warn('[CRMService] HubSpot failed, using webhook backup:', hubspotError);

        // Fallback to webhook
        const webhookResponse = await this.sendToWebhookBackup(leadData);

        return {
          success: true,
          data: webhookResponse
        };
      }
    } catch (error) {
      console.error('[CRMService] All CRM methods failed:', error);

      return {
        success: false,
        error: {
          message: 'Erro ao processar lead. Nossa equipe foi notificada.',
          code: 'CRM_ERROR',
          details: error
        }
      };
    }
  }

  async updateLeadStatus(leadId: string, status: LeadStatus): Promise<ServiceResult<void>> {
    try {
      // TODO: Implement HubSpot status update
      await new Promise(resolve => setTimeout(resolve, 500));

      console.info(`[CRMService] Lead ${leadId} status updated to ${status}`);

      return { success: true };
    } catch (error) {
      console.error('[CRMService] Update lead status error:', error);

      return {
        success: false,
        error: {
          message: 'Erro ao atualizar status do lead.',
          code: 'UPDATE_ERROR',
          details: error
        }
      };
    }
  }

  async getLead(leadId: string): Promise<ServiceResult<Lead>> {
    try {
      // TODO: Implement HubSpot lead retrieval
      await new Promise(resolve => setTimeout(resolve, 300));

      // Mock lead data
      const mockLead: Lead = {
        id: leadId,
        created_at: new Date().toISOString(),
        name: 'Mock Lead',
        email: 'mock@company.com',
        company: 'Mock Company',
        role: 'Marketing Manager',
        company_size: CompanySize.MEDIUM,
        interest_area: ['precisian-core', 'ga4-optimization'],
        status: LeadStatus.NEW,
        lead_score: 75
      };

      return {
        success: true,
        data: mockLead
      };
    } catch (error) {
      console.error('[CRMService] Get lead error:', error);

      return {
        success: false,
        error: {
          message: 'Erro ao buscar dados do lead.',
          code: 'GET_LEAD_ERROR',
          details: error
        }
      };
    }
  }
}

export const crmService = new CRMService();
import { ServiceResult } from '@/types';

interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

interface SendEmailRequest {
  to: string;
  template: 'welcome' | 'roi-report' | 'demo-confirmation' | 'newsletter';
  data?: Record<string, unknown>;
}

// Email Service for Resend integration
class EmailService {
  private readonly RESEND_API_BASE = 'https://api.resend.com';
  private readonly FROM_EMAIL = 'noreply@precisian.com';

  private getEmailTemplate(template: string, data: Record<string, unknown> = {}): EmailTemplate {
    const templates = {
      welcome: {
        subject: 'Bem-vindo à Precisian! 🎯',
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #1a1a1a;">Obrigado pelo seu interesse, ${data.name}!</h1>
            <p>Em breve nossa equipe entrará em contato para agendar uma demonstração personalizada dos nossos produtos.</p>
            <p>Enquanto isso, que tal conhecer mais sobre nossa metodologia DVQ?</p>
            <a href="https://precisian.com" style="background: #0066cc; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Explorar Soluções</a>
          </div>
        `,
        text: `Obrigado pelo seu interesse, ${data.name}! Em breve nossa equipe entrará em contato.`
      },

      'roi-report': {
        subject: 'Seu Relatório de ROI Personalizado 📊',
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #1a1a1a;">Seu Relatório de ROI está pronto!</h1>
            <p>Com base nas informações fornecidas, calculamos um ROI de <strong>${data.roi}%</strong> para sua empresa.</p>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Principais Benefícios:</h3>
              <ul>
                <li>Economia anual: <strong>R$ ${data.cost_savings?.toLocaleString('pt-BR')}</strong></li>
                <li>Impacto na receita: <strong>R$ ${data.revenue_impact?.toLocaleString('pt-BR')}</strong></li>
                <li>Payback: <strong>${data.payback_months} meses</strong></li>
              </ul>
            </div>
            <a href="${data.pdf_url}" style="background: #0066cc; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">Download Relatório Completo</a>
          </div>
        `,
        text: `Seu relatório de ROI está pronto! ROI: ${data.roi}%, Economia: R$ ${data.cost_savings}, Impacto: R$ ${data.revenue_impact}`
      },

      'demo-confirmation': {
        subject: 'Demo Agendada - Precisian 🗓️',
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #1a1a1a;">Demo confirmada!</h1>
            <p>Sua demonstração foi agendada com sucesso:</p>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Data:</strong> ${data.demo_date}</p>
              <p><strong>Horário:</strong> ${data.demo_time}</p>
              <p><strong>Duração:</strong> 30 minutos</p>
            </div>
            <p>Você receberá o link da reunião 24h antes do agendamento.</p>
          </div>
        `,
        text: `Demo confirmada para ${data.demo_date} às ${data.demo_time}.`
      },

      newsletter: {
        subject: 'Newsletter Precisian - Insights em Data Analytics',
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #1a1a1a;">Insights da Semana</h1>
            <p>Acompanhe as últimas tendências em Data Analytics e Marketing Digital.</p>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              ${data.content || 'Conteúdo da newsletter...'}
            </div>
          </div>
        `,
        text: 'Newsletter Precisian - Confira os insights da semana.'
      }
    };

    return templates[template as keyof typeof templates] || templates.welcome;
  }

  async sendEmail(request: SendEmailRequest): Promise<ServiceResult<{ id: string }>> {
    try {
      const template = this.getEmailTemplate(request.template, request.data || {});

      // TODO: Implement actual Resend API call
      const emailPayload = {
        from: this.FROM_EMAIL,
        to: request.to,
        subject: template.subject,
        html: template.html,
        text: template.text
      };

      // Mock API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockEmailId = `email_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      console.info('[EmailService] Email sent successfully:', {
        id: mockEmailId,
        to: request.to,
        template: request.template
      });

      return {
        success: true,
        data: { id: mockEmailId }
      };
    } catch (error) {
      console.error('[EmailService] Send email error:', error);

      return {
        success: false,
        error: {
          message: 'Erro ao enviar email. Tente novamente.',
          code: 'EMAIL_SEND_ERROR',
          details: error
        }
      };
    }
  }

  async sendWelcomeEmail(email: string, name: string): Promise<ServiceResult<{ id: string }>> {
    return this.sendEmail({
      to: email,
      template: 'welcome',
      data: { name }
    });
  }

  async sendROIReport(
    email: string,
    roiData: {
      roi: number;
      cost_savings: number;
      revenue_impact: number;
      payback_months: number;
      pdf_url?: string;
    }
  ): Promise<ServiceResult<{ id: string }>> {
    return this.sendEmail({
      to: email,
      template: 'roi-report',
      data: roiData
    });
  }

  async sendDemoConfirmation(
    email: string,
    demoDetails: { demo_date: string; demo_time: string }
  ): Promise<ServiceResult<{ id: string }>> {
    return this.sendEmail({
      to: email,
      template: 'demo-confirmation',
      data: demoDetails
    });
  }

  async subscribeToNewsletter(email: string): Promise<ServiceResult<{ id: string }>> {
    try {
      // TODO: Add to Resend audience/list
      await new Promise(resolve => setTimeout(resolve, 500));

      console.info('[EmailService] Newsletter subscription:', email);

      return {
        success: true,
        data: { id: `sub_${Date.now()}` }
      };
    } catch (error) {
      console.error('[EmailService] Newsletter subscription error:', error);

      return {
        success: false,
        error: {
          message: 'Erro ao se inscrever na newsletter.',
          code: 'NEWSLETTER_ERROR',
          details: error
        }
      };
    }
  }
}

export const emailService = new EmailService();
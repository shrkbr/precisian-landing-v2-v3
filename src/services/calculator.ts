import {
  ROICalculationInputs,
  ROICalculationResults,
  CompanySize,
  ServiceResult
} from '@/types';

// ROI Calculator Service
class CalculatorService {
  private readonly BASE_ROI = 250; // 250% base ROI
  private readonly BASE_IMPLEMENTATION_COST = 50000; // R$ 50k base cost

  private getCompanySizeMultipliers() {
    return {
      [CompanySize.MICRO]: { roi: 1.0, cost: 0.5, impact: 0.8 },
      [CompanySize.SMALL]: { roi: 1.2, cost: 0.8, impact: 1.0 },
      [CompanySize.MEDIUM]: { roi: 1.5, cost: 1.0, impact: 1.3 },
      [CompanySize.LARGE]: { roi: 2.0, cost: 1.5, impact: 1.8 },
      [CompanySize.ENTERPRISE]: { roi: 2.5, cost: 2.0, impact: 2.5 }
    };
  }

  private getToolComplexityFactor(currentTools: string[]): number {
    const complexityMap = {
      'google-analytics': 1.0,
      'adobe-analytics': 1.5,
      'mixpanel': 1.2,
      'segment': 1.3,
      'custom-solution': 2.0,
      'no-analytics': 0.5
    };

    if (currentTools.length === 0) return 0.5;

    const avgComplexity = currentTools.reduce((acc, tool) => {
      return acc + (complexityMap[tool as keyof typeof complexityMap] || 1.0);
    }, 0) / currentTools.length;

    return avgComplexity;
  }

  async calculateROI(inputs: ROICalculationInputs): Promise<ServiceResult<ROICalculationResults>> {
    try {
      const {
        company_size,
        current_revenue,
        growth_target,
        current_tools,
        team_size
      } = inputs;

      const multipliers = this.getCompanySizeMultipliers()[company_size];
      const toolComplexity = this.getToolComplexityFactor(current_tools);

      // Calculate cost savings (reduction in manual work, tool consolidation)
      const monthlySavings = Math.round(
        (team_size * 40 * 100) + // Hours saved * hourly rate
        (toolComplexity * 5000) // Tool cost reduction
      );
      const annualCostSavings = monthlySavings * 12;

      // Calculate revenue impact (improved decision making, faster insights)
      const revenueImpactPercentage = Math.min(
        (growth_target / 100) * multipliers.impact,
        0.25 // Cap at 25% revenue impact
      );
      const annualRevenueImpact = Math.round(current_revenue * revenueImpactPercentage);

      // Calculate total ROI
      const totalAnnualBenefit = annualCostSavings + annualRevenueImpact;
      const implementationCost = this.BASE_IMPLEMENTATION_COST * multipliers.cost;
      const roiPercentage = Math.round((totalAnnualBenefit / implementationCost) * 100);

      // Calculate payback period
      const monthlyBenefit = totalAnnualBenefit / 12;
      const paybackMonths = Math.round(implementationCost / monthlyBenefit);

      const results: ROICalculationResults = {
        roi_percentage: roiPercentage,
        cost_savings: annualCostSavings,
        revenue_impact: annualRevenueImpact,
        payback_months: Math.max(1, paybackMonths)
      };

      return {
        success: true,
        data: results
      };
    } catch (error) {
      console.error('[CalculatorService] Calculate ROI error:', error);
      return {
        success: false,
        error: {
          message: 'Erro ao calcular ROI. Tente novamente.',
          code: 'CALCULATION_ERROR',
          details: error
        }
      };
    }
  }

  async generatePDFReport(
    inputs: ROICalculationInputs,
    results: ROICalculationResults
  ): Promise<ServiceResult<{ pdf_url: string }>> {
    try {
      // TODO: Implement PDF generation
      // For now, return mock URL
      const mockPdfUrl = `https://api.precisian.com/reports/roi-${Date.now()}.pdf`;

      await new Promise(resolve => setTimeout(resolve, 1500)); // Mock generation delay

      return {
        success: true,
        data: { pdf_url: mockPdfUrl }
      };
    } catch (error) {
      console.error('[CalculatorService] Generate PDF error:', error);
      return {
        success: false,
        error: {
          message: 'Erro ao gerar relatório PDF. Tente novamente.',
          code: 'PDF_GENERATION_ERROR',
          details: error
        }
      };
    }
  }
}

export const calculatorService = new CalculatorService();
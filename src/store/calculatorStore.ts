import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import {
  ROICalculatorFormData,
  ROICalculationResults,
  CalculatorStep,
  CompanySize,
  SubmissionState,
  SubmissionStatus
} from '@/types';

interface CalculatorStore {
  // State
  currentStep: CalculatorStep;
  formData: Partial<ROICalculatorFormData>;
  results: ROICalculationResults | null;
  submissionState: SubmissionState;
  isCalculating: boolean;

  // Actions
  setCurrentStep: (step: CalculatorStep) => void;
  updateFormData: (data: Partial<ROICalculatorFormData>) => void;
  setResults: (results: ROICalculationResults | null) => void;
  calculateROI: () => Promise<void>;
  resetCalculator: () => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const initialFormData: Partial<ROICalculatorFormData> = {
  company_size: CompanySize.MEDIUM,
  current_tools: [],
  priority_areas: []
};

export const useCalculatorStore = create<CalculatorStore>()(
  devtools(
    (set, get) => ({
      // Initial state
      currentStep: CalculatorStep.COMPANY_INFO,
      formData: initialFormData,
      results: null,
      submissionState: {
        status: SubmissionStatus.IDLE
      },
      isCalculating: false,

      // Actions
      setCurrentStep: (step) =>
        set({ currentStep: step }, false, 'setCurrentStep'),

      updateFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data }
        }), false, 'updateFormData'),

      setResults: (results) =>
        set({ results }, false, 'setResults'),

      calculateROI: async () => {
        const { formData } = get();

        set({
          isCalculating: true,
          submissionState: { status: SubmissionStatus.LOADING }
        }, false, 'calculateROI/start');

        try {
          // TODO: Implement API call when service is ready
          await new Promise(resolve => setTimeout(resolve, 2000)); // Mock calculation delay

          // Mock calculation logic
          const baseROI = 250; // 250% ROI base
          const companySizeMultiplier = {
            [CompanySize.MICRO]: 1.0,
            [CompanySize.SMALL]: 1.2,
            [CompanySize.MEDIUM]: 1.5,
            [CompanySize.LARGE]: 2.0,
            [CompanySize.ENTERPRISE]: 2.5
          };

          const revenue = formData.current_revenue || 1000000;
          const growthTarget = formData.growth_target || 20;
          const multiplier = companySizeMultiplier[formData.company_size || CompanySize.MEDIUM];

          const mockResults: ROICalculationResults = {
            roi_percentage: Math.round(baseROI * multiplier),
            cost_savings: Math.round(revenue * 0.15 * multiplier),
            revenue_impact: Math.round(revenue * (growthTarget / 100) * multiplier),
            payback_months: Math.max(3, Math.round(12 / multiplier))
          };

          set({
            results: mockResults,
            currentStep: CalculatorStep.RESULTS,
            isCalculating: false,
            submissionState: {
              status: SubmissionStatus.SUCCESS,
              message: 'ROI calculado com sucesso!'
            }
          }, false, 'calculateROI/success');
        } catch (error) {
          set({
            isCalculating: false,
            submissionState: {
              status: SubmissionStatus.ERROR,
              message: error instanceof Error ? error.message : 'Erro ao calcular ROI'
            }
          }, false, 'calculateROI/error');
        }
      },

      resetCalculator: () =>
        set({
          currentStep: CalculatorStep.COMPANY_INFO,
          formData: initialFormData,
          results: null,
          submissionState: { status: SubmissionStatus.IDLE },
          isCalculating: false
        }, false, 'resetCalculator'),

      goToNextStep: () => {
        const { currentStep } = get();
        if (currentStep < CalculatorStep.RESULTS) {
          set({ currentStep: currentStep + 1 }, false, 'goToNextStep');
        }
      },

      goToPreviousStep: () => {
        const { currentStep } = get();
        if (currentStep > CalculatorStep.COMPANY_INFO) {
          set({ currentStep: currentStep - 1 }, false, 'goToPreviousStep');
        }
      }
    }),
    { name: 'calculator-store' }
  )
);
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Lead, CreateLeadRequest, SubmissionState, SubmissionStatus } from '@/types';

interface LeadStore {
  // State
  currentLead: Lead | null;
  submissionState: SubmissionState;

  // Actions
  setCurrentLead: (lead: Lead | null) => void;
  setSubmissionState: (state: SubmissionState) => void;
  submitLead: (leadData: CreateLeadRequest) => Promise<void>;
  resetSubmission: () => void;
}

export const useLeadStore = create<LeadStore>()(
  devtools(
    (set, get) => ({
      // Initial state
      currentLead: null,
      submissionState: {
        status: SubmissionStatus.IDLE,
      },

      // Actions
      setCurrentLead: (lead) =>
        set({ currentLead: lead }, false, 'setCurrentLead'),

      setSubmissionState: (state) =>
        set({ submissionState: state }, false, 'setSubmissionState'),

      submitLead: async (leadData) => {
        set({
          submissionState: {
            status: SubmissionStatus.LOADING
          }
        }, false, 'submitLead/start');

        try {
          // TODO: Implement API call when service is ready
          await new Promise(resolve => setTimeout(resolve, 1000)); // Mock delay

          const mockLead: Lead = {
            id: crypto.randomUUID(),
            created_at: new Date().toISOString(),
            ...leadData,
            status: 'new' as const,
            lead_score: 75
          };

          set({
            currentLead: mockLead,
            submissionState: {
              status: SubmissionStatus.SUCCESS,
              message: 'Lead enviado com sucesso!',
              data: mockLead
            }
          }, false, 'submitLead/success');
        } catch (error) {
          set({
            submissionState: {
              status: SubmissionStatus.ERROR,
              message: error instanceof Error ? error.message : 'Erro ao enviar lead'
            }
          }, false, 'submitLead/error');
        }
      },

      resetSubmission: () =>
        set({
          submissionState: { status: SubmissionStatus.IDLE }
        }, false, 'resetSubmission'),
    }),
    { name: 'lead-store' }
  )
);
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UIStore {
  // Modal states
  isContactModalOpen: boolean;
  isROICalculatorModalOpen: boolean;
  isDemoRequestModalOpen: boolean;

  // Loading states
  isPageLoading: boolean;

  // Mobile menu
  isMobileMenuOpen: boolean;

  // Notifications
  notifications: Notification[];

  // Actions
  setContactModalOpen: (open: boolean) => void;
  setROICalculatorModalOpen: (open: boolean) => void;
  setDemoRequestModalOpen: (open: boolean) => void;
  setPageLoading: (loading: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

export const useUIStore = create<UIStore>()(
  devtools(
    (set, get) => ({
      // Initial state
      isContactModalOpen: false,
      isROICalculatorModalOpen: false,
      isDemoRequestModalOpen: false,
      isPageLoading: false,
      isMobileMenuOpen: false,
      notifications: [],

      // Actions
      setContactModalOpen: (open) =>
        set({ isContactModalOpen: open }, false, 'setContactModalOpen'),

      setROICalculatorModalOpen: (open) =>
        set({ isROICalculatorModalOpen: open }, false, 'setROICalculatorModalOpen'),

      setDemoRequestModalOpen: (open) =>
        set({ isDemoRequestModalOpen: open }, false, 'setDemoRequestModalOpen'),

      setPageLoading: (loading) =>
        set({ isPageLoading: loading }, false, 'setPageLoading'),

      setMobileMenuOpen: (open) =>
        set({ isMobileMenuOpen: open }, false, 'setMobileMenuOpen'),

      addNotification: (notification) => {
        const id = crypto.randomUUID();
        const newNotification = { ...notification, id };

        set((state) => ({
          notifications: [...state.notifications, newNotification]
        }), false, 'addNotification');

        // Auto remove notification after duration
        const duration = notification.duration || 5000;
        setTimeout(() => {
          get().removeNotification(id);
        }, duration);
      },

      removeNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter(n => n.id !== id)
        }), false, 'removeNotification'),

      clearNotifications: () =>
        set({ notifications: [] }, false, 'clearNotifications')
    }),
    { name: 'ui-store' }
  )
);
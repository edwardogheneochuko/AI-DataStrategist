
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSettingsStore = create(
    persist(
      (set) => ({
        name: '',
        emailAlerts: true,
        weeklySummary: false,
        updateName: (name) => set({ name }),
        toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
        toggleEmailAlerts: () =>
          set((state) => ({ emailAlerts: !state.emailAlerts })),
        toggleWeeklySummary: () =>
          set((state) => ({ weeklySummary: !state.weeklySummary })),
      }),
      {
        name: 'user-settings', // saves in localStorage
      }
    )
  );
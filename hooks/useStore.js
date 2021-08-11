import create from 'zustand';

export const useStore = create((set) => ({
  steps: [],
  increaseSteps: (step) => set((state) => ({ steps: [...state.steps, step] })),
  setListModified: (listModified) => set(() => ({ steps: listModified })),
  removeAllSteps: () => set([]),
}));

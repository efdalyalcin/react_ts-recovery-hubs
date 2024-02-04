import { create } from 'zustand';

type AssignablePlasticsStoreT = {
  isAssignablePlasticPresentChecked: boolean;
  toggleIsAssignablePlasticPresent: () => void;
};

const useAssignablePlasticsStore = create<AssignablePlasticsStoreT>()(
  (set) => ({
    // assignable plastics part
    isAssignablePlasticPresentChecked: false,
    toggleIsAssignablePlasticPresent: () =>
      set((state) => ({
        isAssignablePlasticPresentChecked:
          !state.isAssignablePlasticPresentChecked,
      })),
  })
);

export default useAssignablePlasticsStore;

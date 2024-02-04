import { create } from 'zustand';

type HubSelectionStoreT = {
  isSelectClicked: boolean;
  toggleIsSelectClicked: () => void;
  selectedHubs: string[];
  selectHub: (hubId: string) => void;
  clearSelectedHubs: () => void;
  isSelectionDone: boolean;
  setIsSelectionDoneToFalse: () => void;
  setIsSelectionDoneToTrue: () => void;
};

const useHubSelectionStore = create<HubSelectionStoreT>()((set) => ({
  isSelectClicked: false,
  toggleIsSelectClicked: () =>
    set((state) => ({
      ...state,
      isSelectClicked: !state.isSelectClicked,
    })),
  selectedHubs: [],
  selectHub: (hubId) =>
    set((state) => ({
      ...state,
      selectedHubs: [...state.selectedHubs, hubId],
    })),
  clearSelectedHubs: () =>
    set((state) => ({
      ...state,
      selectedHubs: [],
      isSelectionDone: false,
    })),
  isSelectionDone: false,
  setIsSelectionDoneToFalse: () =>
    set((state) => ({
      ...state,
      isSelectionDone: false,
    })),
  setIsSelectionDoneToTrue: () =>
    set((state) => ({
      ...state,
      isSelectionDone: true,
    })),
}));

export default useHubSelectionStore;

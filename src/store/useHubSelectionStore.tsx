import { create } from 'zustand';

type HubSelectionStoreT = {
  isSelectClicked: boolean;
  toggleIsSelectClicked: () => void;
  selectedHubs: string[];
  selectHubs: (hubId: string) => void;
  clearSelectedHubs: () => void;
  isSelectionDone: boolean;
  toggleIsSelectionDone: () => void;
};

const useHubSelectionStore = create<HubSelectionStoreT>()((set) => ({
  isSelectClicked: false,
  toggleIsSelectClicked: () =>
    set((state) => ({
      ...state,
      isSelectClicked: !state.isSelectClicked,
    })),
  selectedHubs: [],
  selectHubs: (hubId) =>
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
  toggleIsSelectionDone: () =>
    set((state) => ({
      ...state,
      isSelectionDone: !state.isSelectionDone,
    })),
}));

export default useHubSelectionStore;

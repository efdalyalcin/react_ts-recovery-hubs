import { create } from 'zustand';

export type GroupByFilterT = 'none' | 'state' | 'stage';

type AssignablePlasticsAndGroupStoreT = {
  isAssignablePlasticPresentChecked: boolean;
  toggleIsAssignablePlasticPresent: () => void;
  groupByFilterSelected: GroupByFilterT;
  setGroupByFilterSelected: (select: GroupByFilterT) => void;
};

const useAssignablePlasticsAndGroupStore =
  create<AssignablePlasticsAndGroupStoreT>()((set) => ({
    isAssignablePlasticPresentChecked: false,
    groupByFilterSelected: 'none',
    toggleIsAssignablePlasticPresent: () =>
      set((state) => ({
        ...state,
        isAssignablePlasticPresentChecked:
          !state.isAssignablePlasticPresentChecked,
      })),
    setGroupByFilterSelected: (select: GroupByFilterT) =>
      set((state) => ({
        ...state,
        groupByFilterSelected: select,
      })),
  }));

export default useAssignablePlasticsAndGroupStore;

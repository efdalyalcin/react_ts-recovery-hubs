import { create } from 'zustand';

type SearchQueryT = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearSearchQuery: () => void;
};

const useSearchQueryStore = create<SearchQueryT>()((set) => ({
  searchQuery: '',
  setSearchQuery: (query) =>
    set(() => ({
      searchQuery: query,
    })),
  clearSearchQuery: () => set(() => ({ searchQuery: '' })),
}));

export default useSearchQueryStore;

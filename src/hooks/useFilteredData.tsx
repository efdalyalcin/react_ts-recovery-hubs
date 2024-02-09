import { getHubs } from '@/services/getHubs';
import useAssignablePlasticsAndGroupStore from '@/store/useAssignablePlasticsAndGroupStore';
import useHubSelectionStore from '@/store/useHubSelectionStore';
import useSearchQueryStore from '@/store/useSearchQueryStore';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

export default function useFilteredData() {
  const { searchQuery } = useSearchQueryStore();
  const { isAssignablePlasticPresentChecked, groupByFilterSelected } =
    useAssignablePlasticsAndGroupStore();
  const { isSelectionDone, selectedHubs } = useHubSelectionStore();

  // this query could have been in a custom hook,
  // however for this project, it will be used for only one time so it won't make sense
  const query = useQuery({
    queryKey: ['hubs'],
    queryFn: getHubs,
    refetchInterval: 60000, // 10 mins
  });

  // this is a heavy operation so useMemo will be useful here
  // additionally if I were to call API with the query Debouncing would be important
  // but since the data is already fetched I didn't use debounce for search query
  const filteredData = useMemo(() => {
    const queryFilteredData = query.data?.filter((hub) =>
      hub.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // if checkmark checked this filters otherwise returns same data
    const isAssignablePlasticsFilteredData = isAssignablePlasticPresentChecked
      ? queryFilteredData?.filter((hub) => hub.unassignedQuantityTotal)
      : queryFilteredData;

    // if hubs are selected and the selection is done this part filters, otherwise returns same array
    const selectedHubsFilteredData =
      isSelectionDone && selectedHubs.length > 0
        ? isAssignablePlasticsFilteredData?.filter((hub) =>
            selectedHubs.includes(hub.uuid)
          )
        : isAssignablePlasticsFilteredData;

    return selectedHubsFilteredData;
  }, [
    query.data,
    searchQuery,
    isAssignablePlasticPresentChecked,
    isSelectionDone,
    selectedHubs,
  ]);

  const groupedData = useMemo(() => {
    if (groupByFilterSelected === 'state') {
      const groupedData: any = {};
      filteredData?.forEach((hub) => {
        groupedData[`${hub.state}`] = [
          ...(groupedData[`${hub.state}`] || []),
          hub,
        ];
      });

      console.log('grouped', groupedData);
      return groupedData;
    }

    if (groupByFilterSelected === 'stage') {
      const groupedData: any = {};
      filteredData?.forEach((hub) => {
        groupedData[`${hub.stage}`] = [
          ...(groupedData[`${hub.stage}`] || []),
          hub,
        ];
      });

      console.log('grouped', groupedData);
      return groupedData;
    }
  }, [filteredData, groupByFilterSelected]);

  return {
    query,
    filteredData,
    groupedData,
    groupByFilterSelected,
  };
}

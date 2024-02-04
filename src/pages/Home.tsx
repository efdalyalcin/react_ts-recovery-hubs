import ErrorPage from '@/components/ErrorCover';
import Footer from '@/components/Footer';
import HubItem from '@/components/HubItem';
import Loading from '@/components/LoadingCover';
import Header from '@/components/Header';
import { getHubs } from '@/services/getHubs';
import useAssignablePlasticsStore from '@/store/useAssignablePlasticsStore';
import useHubSelectionStore from '@/store/useHubSelectionStore';
import useSearchQueryStore from '@/store/useSearchQueryStore';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

export default function Home() {
  const { searchQuery } = useSearchQueryStore();
  const { isAssignablePlasticPresentChecked } = useAssignablePlasticsStore();
  const { isSelectionDone, selectedHubs } = useHubSelectionStore();

  // this query could have been in a custom hook,
  // however for this project, it will be used for only one time so it won't make sense
  const { isError, isLoading, data, error } = useQuery({
    queryKey: ['hubs'],
    queryFn: getHubs,
  });

  // this is a heavy operation so useMemo will be useful here
  // additionally if I were to call API with the query Debouncing would be important
  // but since the data is already fetched I didn't use debounce for search query
  const filteredData = useMemo(() => {
    const queryFilteredData = data?.filter((hub) =>
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
    data,
    searchQuery,
    isAssignablePlasticPresentChecked,
    isSelectionDone,
    selectedHubs,
  ]);

  if (isError) return <ErrorPage error={error} />;
  if (isLoading) return <Loading />;

  return (
    <main className="mx-auto p-4 pb-0 max-w-7xl min-w-80 min-h-screen flex flex-col justify-between">
      <Header />
      <section className="flex flex-col gap-2 mb-8">
        {filteredData
          ? filteredData?.map((hubData) => (
              <HubItem hubData={hubData} key={hubData.uuid} />
            ))
          : null}
      </section>
      <Footer />
    </main>
  );
}

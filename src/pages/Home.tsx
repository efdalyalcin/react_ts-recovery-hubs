import ErrorPage from '@/components/ErrorCover';
import Footer from '@/components/Footer';
import HubItem from '@/components/HubItem';
import Loading from '@/components/LoadingCover';
import Header from '@/components/Header';
import useFilteredData from '@/hooks/useFilteredData';
import { HubT } from '@/types/hubs.type';
import { Fragment } from 'react';

export default function Home() {
  const { query, filteredData, groupedData, groupByFilterSelected } =
    useFilteredData();

  if (query.isError) return <ErrorPage error={query.error} />;
  if (query.isLoading) return <Loading />;

  const usefulGroupData = groupedData ? Object.keys(groupedData) : [];

  return (
    <main className="mx-auto p-4 pb-0 max-w-7xl min-w-80 min-h-screen flex flex-col justify-between">
      <Header />
      <section className="flex flex-col gap-2 mb-8">
        {groupByFilterSelected === 'none'
          ? filteredData?.map((hubData) => (
              <HubItem hubData={hubData} key={hubData.uuid} />
            ))
          : usefulGroupData?.map((filterType) => (
              <Fragment key={filterType}>
                <p>Filter Type: {`${filterType}`}</p>
                {groupedData[filterType].map((hubData: HubT) => (
                  <HubItem hubData={hubData} key={hubData.uuid} />
                ))}
              </Fragment>
            ))}
      </section>
      <Footer />
    </main>
  );
}

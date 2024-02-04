import ErrorPage from '@/components/ErrorCover';
import Loading from '@/components/LoadingCover';

import { getHubs } from '@/services/getHubs';
import { useQuery } from 'react-query';

export default function Home() {
  // this query could have been in a custom hook,
  // however for this project, it will be used for only one time so it won't make sense
  const { isError, isLoading, data, error } = useQuery({
    queryKey: ['hubs'],
    queryFn: getHubs,
  });

  if (isError) return <ErrorPage error={error} />;
  if (isLoading) return <Loading />;

  return (
    <main className="mx-auto p-4 max-w-7xl min-w-80">
      <SearchBar />
    </main>
  );
}

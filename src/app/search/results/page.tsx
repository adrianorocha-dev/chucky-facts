import SearchInput from "../_components/search-input";

type Props = {
  searchParams: {
    q: string;
  };
};

export default async function SearchResultsPage({ searchParams }: Props) {
  const queryStart = new Date().getTime();
  const searchResult = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${searchParams.q}`,
    { cache: "no-cache" }
  ).then((res) => res.json());
  const queryEnd = new Date().getTime();
  const queryDuration = queryEnd - queryStart;

  const formattedDuration =
    queryDuration > 1000
      ? `${(queryDuration / 1000).toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })} seconds`
      : `${queryDuration} milliseconds`;

  return (
    <div className="flex flex-1 flex-col gap-6 px-8 py-4">
      <h1>Search Results</h1>

      <form className="flex w-full gap-4" action="/search/results" method="GET">
        <SearchInput defaultValue={searchParams.q} />

        <button className="border border-slate-400 py-2 px-4 bg-white rounded-full">
          Search
        </button>
      </form>

      <div className="">
        <p className="text-sm">
          Found {searchResult.total} results in {formattedDuration}.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        {searchResult.result.length === 0 && (
          <p className="text-center text-lg">No results found</p>
        )}

        {searchResult.result.map((joke: any) => (
          <div key={joke.id} className="flex flex-col gap-2">
            <p className="text-lg">{joke.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

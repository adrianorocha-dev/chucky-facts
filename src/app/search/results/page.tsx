import { notFound } from "next/navigation";

import data from "@/server/data";
import SearchInput from "../_components/search-input";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function SearchResultsPage({ searchParams }: Props) {
  if (!searchParams.q) {
    return notFound();
  }

  const queryStart = new Date().getTime();
  const searchResult = await data.jokes.search(searchParams.q);
  const queryEnd = new Date().getTime();

  const formattedDuration = formatDuration(queryEnd - queryStart);

  return (
    <div className="flex flex-1 flex-col gap-6 px-8 py-4">
      <h1>Search Results</h1>

      <form className="flex w-full gap-4" action="/search/results" method="GET">
        <SearchInput defaultValue={searchParams.q} />

        <button className="rounded-full border border-slate-400 bg-white px-4 py-2">
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

        {searchResult.result.map((joke) => (
          <div key={joke.id} className="flex flex-col gap-2">
            <p className="text-lg">{joke.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatDuration(duration: number) {
  if (duration > 1000) {
    return `${(duration / 1000).toLocaleString(undefined, {
      maximumFractionDigits: 2,
    })} seconds`;
  }

  return `${duration} milliseconds`;
}

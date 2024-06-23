import { SearchIcon } from "lucide-react";

import SearchInput from "./_components/search-input";
import { feelingLuckyAction } from "./actions";

export default function SearchPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-12 px-8 py-12">
      <h1>Chuck Norris Jokes Search</h1>

      <form
        className="flex w-full max-w-sm flex-col gap-6"
        action="/search/results"
        method="GET"
      >
        <SearchInput />

        <div className="flex gap-2">
          <button className="w-full flex-1 rounded-lg border border-slate-400 bg-white p-2 transition-colors hover:border-slate-600 hover:bg-slate-100">
            Joke Search
          </button>

          <button
            formAction={feelingLuckyAction}
            className="w-full flex-1 rounded-lg border border-slate-400 bg-white p-2 transition-colors hover:border-slate-600 hover:bg-slate-100"
          >
            I&apos;m feeling lucky
          </button>
        </div>
      </form>
    </div>
  );
}

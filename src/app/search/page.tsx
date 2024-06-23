import { SearchIcon } from "lucide-react";
import SearchInput from "./_components/search-input";

import { feelingLuckyAction } from "./actions";

export default function SearchPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-12 py-12 px-8">
      <h1>Chuck Norris Jokes Search</h1>

      <form
        className="flex w-full max-w-sm flex-col gap-6"
        action="/search/results"
        method="GET"
      >
        <SearchInput />

        <div className="flex gap-2">
          <button className="flex-1 border hover:bg-slate-100 hover:border-slate-600 transition-colors border-slate-400 p-2 bg-white rounded-lg w-full">
            Joke Search
          </button>

          <button
            formAction={feelingLuckyAction}
            className="flex-1 border hover:bg-slate-100 hover:border-slate-600 transition-colors border-slate-400 p-2 bg-white rounded-lg w-full"
          >
            I&apos;m feeling lucky
          </button>
        </div>
      </form>
    </div>
  );
}

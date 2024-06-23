import { SearchIcon } from "lucide-react";

export default function SearchPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-12 p-24">
      <h1>Chuck Norris Jokes Search</h1>

      <form className="flex w-full max-w-sm flex-col gap-6">
        <div className="focus-within:border-slate-600 focus-within:outline-1 focus-within:outline transition-all flex items-center gap-2 justify-between border border-slate-400 py-2 px-4 bg-white rounded-full w-full">
          <SearchIcon className="h-4 w-4" />
          <input type="text" className="flex-1 outline-none" />
        </div>

        <div className="flex gap-2">
          <button className="flex-1 border border-slate-400 p-2 bg-white rounded-lg w-full">
            Joke Search
          </button>

          <button className="flex-1 border border-slate-400 p-2 bg-white rounded-lg w-full">
            I&apos;m feeling lucky
          </button>
        </div>
      </form>
    </div>
  );
}

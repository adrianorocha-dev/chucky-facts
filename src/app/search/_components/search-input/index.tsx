"use client";

import { SearchIcon } from "lucide-react";
import DictationInput from "./dictation";

type Props = {
  defaultValue?: string;
};

export default function SearchInput({ defaultValue }: Props) {
  return (
    <div className="focus-within:border-slate-600 focus-within:outline-1 focus-within:outline transition-all flex items-center gap-2 justify-between border border-slate-400 py-2 px-4 bg-white rounded-full w-full">
      <SearchIcon className="h-4 w-4" />

      <input
        className="flex-1 outline-none"
        type="text"
        name="q"
        required
        defaultValue={defaultValue}
      />

      <DictationInput onDictation={(text) => console.log(text)} />
    </div>
  );
}

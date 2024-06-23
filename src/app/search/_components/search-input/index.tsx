"use client";

import { SearchIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense, useCallback, useState } from "react";

const DictationInput = dynamic(() => import("./dictation"), {
  ssr: false,
});

type Props = {
  defaultValue?: string;
};

export default function SearchInput({ defaultValue }: Props) {
  const [value, setValue] = useState(defaultValue ?? "");

  const handleDictationResult = useCallback((text: string) => {
    setValue(text);
  }, []);

  return (
    <div className="focus-within:border-slate-600 focus-within:outline-1 focus-within:outline transition-all flex items-center gap-2 justify-between border border-slate-400 py-2 px-4 bg-white rounded-full w-full">
      <SearchIcon className="h-4 w-4" />

      <input
        className="flex-1 outline-none"
        type="text"
        name="q"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Suspense>
        <DictationInput onDictation={handleDictationResult} />
      </Suspense>
    </div>
  );
}

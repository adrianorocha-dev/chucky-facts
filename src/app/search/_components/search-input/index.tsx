"use client";

import { Suspense, useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { SearchIcon } from "lucide-react";

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
    <div className="flex w-full items-center justify-between gap-2 rounded-full border border-slate-400 bg-white px-4 py-2 transition-all focus-within:border-slate-600 focus-within:outline focus-within:outline-1">
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
        <DictationInput onDictationResult={handleDictationResult} />
      </Suspense>
    </div>
  );
}

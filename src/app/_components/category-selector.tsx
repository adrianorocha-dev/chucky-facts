"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type Props = {
  categories: string[];
};

export default function CategorySelector({ categories }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selected = searchParams.get("category") ?? undefined;

  const handleChange = useCallback(
    (category: string) => {
      const newSearchParams = new URLSearchParams(searchParams);

      if (category === "all") {
        newSearchParams.delete("category");
      } else {
        newSearchParams.set("category", category);
      }

      router.push(`${pathname}?${newSearchParams.toString()}`);
    },
    [pathname, router, searchParams]
  );

  return (
    <Select value={selected} onValueChange={handleChange}>
      <SelectTrigger className="capitalize">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all" className="capitalize">
          All
        </SelectItem>

        {categories.map((category) => (
          <SelectItem key={category} value={category} className="capitalize">
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

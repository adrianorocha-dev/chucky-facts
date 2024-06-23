import { Suspense } from "react";

import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import data from "@/server/data";
import CategorySelector from "./_components/category-selector";
import RevealButton from "./_components/reveal-button";

type PageProps = {
  searchParams: {
    category?: string;
  };
};

export default function Home({ searchParams }: PageProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 py-12">
      <div className="flex w-full max-w-sm flex-col items-center gap-6">
        <h1>Select a category for your joke and click reveal</h1>

        <Suspense
          key={`selector-${searchParams.category}`}
          fallback={<CategoriesSkeleton selected={searchParams.category} />}
        >
          <Categories />
        </Suspense>

        <Suspense
          key={`reveal-${searchParams.category}`}
          fallback={<RevealButton>loading...</RevealButton>}
        >
          <JokeButton category={searchParams.category} />
        </Suspense>
      </div>
    </div>
  );
}

async function Categories() {
  const categories = await data.categories.list();
  return <CategorySelector categories={categories} />;
}

function CategoriesSkeleton(props: { selected?: string }) {
  return (
    <Select>
      <SelectTrigger className="capitalize">
        <SelectValue placeholder={props.selected ?? "..."} />
      </SelectTrigger>
    </Select>
  );
}

async function JokeButton(props: { category?: string }) {
  const joke = await data.jokes.getRandom(props.category);

  return <RevealButton>{joke.value}</RevealButton>;
}

import getCategories from "@/server/data/get-categories";
import getRandomJoke from "@/server/data/get-random-joke";
import CategorySelector from "./_components/category-selector";
import RevealButton from "./_components/reveal-button";

type PageProps = {
  searchParams: {
    category: string;
  };
};

export default async function Home({ searchParams }: PageProps) {
  const categories = await getCategories();
  const joke = await getRandomJoke(searchParams.category);

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 py-12">
      <div className="flex w-full max-w-sm flex-col items-center gap-6">
        <h1>Select a category for your joke and click reveal</h1>

        <CategorySelector categories={categories} />

        <RevealButton>{joke.value}</RevealButton>
      </div>
    </div>
  );
}

import CategorySelector from "./_components/category-selector";
import RevealButton from "./_components/reveal-button";

type PageProps = {
  searchParams: {
    category: string;
  };
};

export default async function Home({ searchParams }: PageProps) {
  const url = new URL("https://api.chucknorris.io/jokes/random");
  if (searchParams.category) {
    url.searchParams.set("category", searchParams.category);
  }

  console.log(url.toString());
  const joke = await fetch(url, {
    cache: "no-cache",
  }).then((res) => res.json());

  const categories: string[] = await fetch(
    "https://api.chucknorris.io/jokes/categories",
    {
      cache: "no-cache",
    }
  ).then((res) => res.json());

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 py-12">
      <div className="flex w-full max-w-sm items-center flex-col gap-6">
        <h1>Select a category for your joke and click reveal</h1>

        <CategorySelector categories={categories} />

        <RevealButton>{joke.value}</RevealButton>
      </div>
    </div>
  );
}

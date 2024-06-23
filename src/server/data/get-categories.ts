import "server-only";

export default async function getCategories() {
  const categories: string[] = await fetch(
    "https://api.chucknorris.io/jokes/categories",
    {
      cache: "no-cache",
    },
  ).then((res) => res.json());

  return categories;
}

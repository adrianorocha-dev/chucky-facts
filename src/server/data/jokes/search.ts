import { Joke } from "@/server/types/joke";

import "server-only";

type JokeSearchResult = {
  total: number;
  result: Joke[];
};

export default async function searchJokes(query: string) {
  const searchResult: JokeSearchResult = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${query}`,
    { cache: "no-cache" },
  ).then((res) => res.json());

  return searchResult;
}

import "server-only";

import { Joke } from "../types/joke";

type JokeSearchResult = {
  total: number;
  result: Joke[];
};

export const searchJokes = async (query: string) => {
  const searchResult: JokeSearchResult = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${query}`,
    { cache: "no-cache" },
  ).then((res) => res.json());

  return searchResult;
};

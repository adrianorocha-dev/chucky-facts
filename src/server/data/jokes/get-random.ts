import { Joke } from "@/server/types/joke";

import "server-only";

export default async function getRandomJoke(category?: string) {
  const url = new URL("https://api.chucknorris.io/jokes/random");
  if (category) {
    url.searchParams.set("category", category);
  }

  const joke: Joke = await fetch(url, {
    cache: "no-cache",
  }).then((res) => res.json());

  return joke;
}

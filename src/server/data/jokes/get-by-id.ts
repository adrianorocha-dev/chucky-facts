import { Joke } from "@/server/types/joke";

import "server-only";

export default async function getJokeById(id: string) {
  const joke: Joke = await fetch(`https://api.chucknorris.io/jokes/${id}`, {
    cache: "force-cache",
  }).then((res) => res.json());

  return joke;
}

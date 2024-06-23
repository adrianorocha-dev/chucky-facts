import "server-only";

import { Joke } from "../types/joke";

export default async function getJokeById(id: string) {
  const joke: Joke = await fetch(`https://api.chucknorris.io/jokes/${id}`, {
    cache: "no-cache",
  }).then((res) => res.json());

  return joke;
}

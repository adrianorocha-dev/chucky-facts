import { gql } from "@/__generated__";
import { getClient } from "@/server/apollo-client";

import "server-only";

const GET_RANDOM_JOKE_QUERY = gql(`
  query GetRandomJoke($category: String) {
    randomJoke(category: $category) {
      id
      value
    }
  }
`);

export default async function getRandomJoke(category?: string) {
  const result = await getClient().query({
    query: GET_RANDOM_JOKE_QUERY,
    variables: {
      category,
    },
    context: {
      fetchOptions: {
        cache: "no-cache",
      },
    },
  });

  const joke = result.data.randomJoke;

  return joke;
}

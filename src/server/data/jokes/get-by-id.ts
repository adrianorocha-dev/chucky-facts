import { gql } from "@/__generated__";
import { getClient } from "@/server/apollo-client";

import "server-only";

const GET_JOKE_BY_ID_QUERY = gql(`
  query GetJokeById($id: String!) {
    joke(id: $id) {
      id
      value
    }
  }
`);

export default async function getJokeById(id: string) {
  const result = await getClient().query({
    query: GET_JOKE_BY_ID_QUERY,
    variables: {
      id,
    },
    context: {
      fetchOptions: {
        cache: "force-cache",
      },
    },
  });

  const joke = result.data.joke;

  return joke;
}

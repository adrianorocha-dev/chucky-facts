import { gql } from "@/__generated__";
import { getClient } from "@/server/apollo-client";

import "server-only";

const SEARCH_JOKES_QUERY = gql(`
  query SearchJokes($query: String!) {
    searchJokes(query: $query) {
      total
      result {
        id
        value
      }
    }
  }
`);

export default async function searchJokes(query: string) {
  const result = await getClient().query({
    query: SEARCH_JOKES_QUERY,
    variables: {
      query,
    },
    context: {
      fetchOptions: {
        cache: "force-cache",
      },
    },
  });

  const searchResult = result.data.searchJokes;

  return searchResult;
}

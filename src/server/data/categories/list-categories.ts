import { gql } from "@/__generated__";
import { getClient } from "@/server/apollo-client";

import "server-only";

const LIST_CATEGORIES_QUERY = gql(`
  query ListCategories {
    categories
  }
`);

export default async function listCategories() {
  const result = await getClient().query({
    query: LIST_CATEGORIES_QUERY,
    context: {
      fetchOptions: {
        cache: "force-cache",
      },
    },
  });

  const categories = result.data.categories?.filter(Boolean) ?? [];

  return categories;
}

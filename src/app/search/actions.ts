"use server";

import { notFound, redirect } from "next/navigation";

import { searchJokes } from "@/server/data/search-jokes";

export const feelingLuckyAction = async (formData: FormData) => {
  const query = formData.get("q") as string;

  const searchResult = await searchJokes(query);

  if (searchResult.result.length === 0) {
    return notFound();
  }

  const joke = searchResult.result[0];

  return redirect(`/search/joke/${joke.id}`);
};

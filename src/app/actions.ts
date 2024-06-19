"use server";

import { revalidatePath } from "next/cache";

export const showDifferentJoke = async () => {
  revalidatePath("/");
};

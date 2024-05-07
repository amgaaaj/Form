"use server";

import { insertAnkets } from "@/lib/mongo/ankets";

export async function addAnket(values: any) {
  await insertAnkets(values);
}

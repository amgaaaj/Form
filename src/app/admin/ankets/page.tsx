import Ankets from "@/components/Ankets";
import { getAnkets } from "@/lib/mongo/ankets";
import React from "react";

export default async function AnketsPage({ params: {}, searchParams }: any) {
  const { search } = searchParams;

  const { ankets }: { ankets: any[] } = await getAnkets(search);

  return <Ankets ankets={ankets} />;
}

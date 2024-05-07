import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";

export default function Cards() {
  return (
    <Card className="flex w-full justify-center gap-8 border-none">
      {cardsList.map((card: any, index: number) => {
        return (
          <Link key={index} href={`/login?role=${card.role}`} className="w-1/5">
            <Card className="p-8 bg-slate-800 rounded-xl">
              <div className="items-center">
                <div style={{ justifyContent: "center" }} className="flex mb-4">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src={card.imageUrl}
                    alt="icon"
                    width={70}
                    height={37}
                  />
                </div>
                <Button
                  style={{ backgroundColor: "#fff" }}
                  className="justify-center flex w-full font-semibold text-black hover:underline"
                >
                  {card.text}
                </Button>
              </div>
            </Card>
          </Link>
        );
      })}
    </Card>
  );
}

const cardsList = [
  {
    text: "Хэрэглэгчээр нэвтрэх",
    imageUrl: "/user.png",
    role: "user",
  },
  {
    text: "Админаар нэвтрэх",
    imageUrl: "/key.png",
    role: "admin",
  },
];

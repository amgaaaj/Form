"use client";

import Link from "next/link";

export default function TopNav() {
  return (
    <div className="h-[60px] fixed top-0 left-0 right-0 bg-red-100 p-2 flex items-center gap-2">
      {NAV_LIST.map((nav: any, index: number) => {
        return (
          <Link key={index} href={nav.href}>
            {nav.text}
          </Link>
        );
      })}
    </div>
  );
}

const NAV_LIST = [
  { text: "Анкет", href: "/admin/ankets" },
  { text: "Хэрэглэгчид", href: "/admin/users" },
];

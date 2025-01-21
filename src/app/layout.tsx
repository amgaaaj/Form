import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Form",
  description: "Next form app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-[#7646D1] gap-8">
          <Link
            className="text-white hover:underline decoration-2 font-bold transition duration-200"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white hover:underline decoration-2 font-bold transition duration-200"
            href="/new"
          >
            New
          </Link>
          <Link
            className="text-white hover:underline decoration-2 font-bold transition duration-200"
            href="/test"
          >
            Test
          </Link>
          <Link
            className="text-white hover:underline decoration-2 font-bold transition duration-200"
            href="/todo"
          >
            Todo
          </Link>
          <Link
            className="text-white hover:underline decoration-2 font-bold transition duration-200"
            href="/voucher"
          >
            Voucher
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}

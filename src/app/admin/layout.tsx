import type { Metadata } from "next";
import TopNav from "@/components/TopNav";

export const metadata: Metadata = {
  title: "Admin Page",
  description: "Next form app",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopNav />
      <div className="pt-[60px]">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

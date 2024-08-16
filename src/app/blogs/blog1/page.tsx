import type { Metadata } from "next";
import BlogDetail from "@/components/blog1";
export const metadata: Metadata = {
  title: "Blog Details - Duomo Holiday Homes LLC",
  description: "Duomo Holiday Homes LLC",
};
export default function Blog1() {
  return (
    <>
      <BlogDetail />
    </>
  );
}

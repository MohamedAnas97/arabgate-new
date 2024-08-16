import type { Metadata } from "next";
import BlogPage from "@/components/blogs";
export const metadata: Metadata = {
  title: "Blogs - Duomo Holiday Homes LLC",
  description: "Duomo Holiday Homes LLC",
};
export default function Blogs() {
  return (
    <>
      <BlogPage />
    </>
  );
}

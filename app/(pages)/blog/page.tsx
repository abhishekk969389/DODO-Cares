import type { Metadata } from "next";
import SubBanner from "@/app/components/ui/subbanner";
import BlogSec from "@/app/components/layout/blogs/blogsec";

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen">
      <SubBanner pageKey="blog" />
      <BlogSec />
    </main>
  );
}

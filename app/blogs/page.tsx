import BlogMain from "@/components/website/Blogs/BlogMain";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="bg-secondary-50 z-[20] relative">
      <BlogMain />
    </main>
  );
}

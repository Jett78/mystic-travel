import BlogDetailMain from "@/components/website/BlogDetail/BlogDetailMain";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="bg-secondary-50 relative z-[20]">
      <BlogDetailMain />
    </div>
  );
}

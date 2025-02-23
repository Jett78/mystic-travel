import Image from "next/image";
import React from "react";

type Props = {};

export default function BlogHero({}: Props) {
  return (
    <div className="w-full h-[50vh] bg-zinc-200 relative  flex justify-center items-center">
      <Image
        width={1000}
        height={1000}
        src="https://images.unsplash.com/photo-1620734631260-5a3915458976?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="expedition-image"
        className="absolute top-0 left-0 w-full h-[50vh] object-cover object-center"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5]"></div>
      <h1 className="text-6xl relative tracking-wide mt-10 title font-bold text-secondary-50">
        Blogs
      </h1>
    </div>
  );
}

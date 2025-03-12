import travelBlogs from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogList = () => {
  return (
    <div className="grid grid-cols-3 gap-6 w-10/12 mx-auto my-14">
      {travelBlogs.map((item, index) => (
        <Link href={`/blogs/${item.slug}`} key={index} className="border rounded-md p-6">
          <h2 className="font-semibold text-[1.3vw] leading-[1.2]">
            {item.title}
          </h2>
          <p className="my-4 text-sm line-clamp-3 font-medium">
            {item.description}
          </p>
          <p className="text-zinc-400 font-medium text-sm my-4">{item.date}</p>
          <figure className="overflow-hidden rounded-md">
            <Image
              src={item.img}
              alt="blog-image"
              height={1000}
              width={1000}
              className="h-[30vh] object-cover group-hover:brightness-75 group-hover:scale-110 duration-200 ease-in-out"
            />
          </figure>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;

"use client";
import travelBlogs from "@/data/blogs";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import React from "react";

const BlogDetails = () => {
  const { slug } = useParams();

  const blogItem = travelBlogs.find((blog) => blog.slug === slug);

  if (!blogItem) {
    return notFound();
  }

  const { title, description, importance, conclusion, date, img, author } =
    blogItem;

  return (
    <div className=" w-10/12 mx-auto md:py-24 py-20">
      <h1 className="font-semibold lg:text-[3vw] text-2xl text-center font-palker tracking-wide mb-4">
        {title}
      </h1>
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="blog-image"
            width={1000}
            height={1000}
            className="w-10 h-10 rounded-full object-cover "
          />
          <p className="font-semibold text-zinc-800 text-sm">{author}</p>
        </div>
        <p className="font-semibold text-zinc-800 text-sm flex items-center">
          <Icon icon="stash:data-date-light" width="24" height="24" />
          {date}
        </p>
      </div>
      <figure className="my-8">
        <Image
          src={img}
          alt="blog-image"
          width={1000}
          height={1000}
          className="w-full rounded-md lg:h-[70vh] h-[40vh] object-cover"
        />
      </figure>

      <div className="md:space-y-8 space-y-4 font-medium md:text-md text-sm text-zinc-800">
        <p>{description}</p>
        <p>{importance}</p>
        <p>{conclusion}</p>
      </div>
    </div>
  );
};

export default BlogDetails;

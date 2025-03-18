import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `${process.env.NEXT_PUBLIC_SITE_NAME} - Top Blogs`,
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  },
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og/blogs.png`,
        width: 1200,
        height: 630,
        alt: "blogs",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${process.env.NEXT_PUBLIC_SITE_NAME} - Top Blogs`,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og/blogs.png`],
  },
};
const page = () => {
  return <div>page</div>;
};

export default page;

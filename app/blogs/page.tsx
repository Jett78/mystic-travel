import Banner from "@/components/ui/banner";
import BlogList from "./blog-list";
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
type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <Banner
        title="Top Blogs"
        className="md:text-[5vw] text-4xl"
        img="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <BlogList />
    </main>
  );
}

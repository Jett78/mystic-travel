import Banner from "@/components/ui/banner";
import React from "react";
import TrekkingInfo from "./trekking-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `${process.env.NEXT_PUBLIC_SITE_NAME} - Trekking Information`,
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  },
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og/trekinfo.png`,
        width: 1200,
        height: 630,
        alt: "Trekking Information",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${process.env.NEXT_PUBLIC_SITE_NAME} - Trekking Information`,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og/trekinfo.png`],
  },
};

const page = () => {
  return (
    <div>
      <Banner
        title="Trekking Info"
        className="md:text-[5vw] text-4xl"
        img="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <TrekkingInfo />
    </div>
  );
};

export default page;

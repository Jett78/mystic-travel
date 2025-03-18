import Banner from "@/components/ui/banner";
import React from "react";
import GeneralList from "./general-info-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `${process.env.NEXT_PUBLIC_SITE_NAME} - General Info`,
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  },
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og/generalinfo.png`,
        width: 1200,
        height: 630,
        alt: "General Info",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${process.env.NEXT_PUBLIC_SITE_NAME} - General Info`,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og/generalinfo.png`],
  },
};
const GeneralInfo = () => {
  return (
    <div>
      <Banner
        title="General Info"
        className="md:text-[5vw] text-4xl"
        img="https://images.unsplash.com/photo-1599597435338-adbf0f27b5b0?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <GeneralList />
    </div>
  );
};

export default GeneralInfo;

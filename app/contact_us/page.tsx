import ContactUs from "@/components/website/ContactUs/ContactUs";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `${process.env.NEXT_PUBLIC_SITE_NAME} - Contact Us`,
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  },
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og/contact.png`,
        width: 1200,
        height: 630,
        alt: "Contact",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${process.env.NEXT_PUBLIC_SITE_NAME} - Contact Us`,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og/contact.png`],
  },
};

type Props = {};

function Page({}: Props) {
  return (
    <main className="bg-white z-[20] relative">
      <ContactUs />
    </main>
  );
}

export default Page;

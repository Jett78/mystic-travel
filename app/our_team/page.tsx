import OurTeamMain from "@/components/website/OurTeam/OurTeamMain";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: `${process.env.NEXT_PUBLIC_SITE_NAME} - Our Experienced Teams`,
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  },
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og/team.png`,
        width: 1200,
        height: 630,
        alt: "Home",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${process.env.NEXT_PUBLIC_SITE_NAME} - Our Experienced Teams`,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og/team.png`],
  },
};
function page() {
  return (
    <main className="bg-white z-[20] relative">
      <OurTeamMain />
    </main>
  );
}

export default page;

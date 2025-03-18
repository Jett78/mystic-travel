import AboutUsMain from "@/components/website/AboutUs/AboutUsMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: `${process.env.NEXT_PUBLIC_SITE_NAME} - About Mystic Adventure`,
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  },
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og/about.png`,
        width: 1200,
        height: 630,
        alt: "About Us",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${process.env.NEXT_PUBLIC_SITE_NAME} - About Mystic Adventure`,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og/about.png`],
  },
};

export default function Home() {
  return (
    <>
      <main className="bg-white z-[20] relative">
        <AboutUsMain />
      </main>
    </>
  );
}

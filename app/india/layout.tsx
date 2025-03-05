"use client";
import Banner from "@/components/ui/banner";
import { indiapackages } from "@/data/india-packages";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function IndiaPackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const activeSlug = pathname.split("/")[2];
  const activePackage = indiapackages.find((item) => item.slug === activeSlug);

  return (
    <div>
      <Banner
        img={
          "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        title={`India / ${activePackage?.title || "India"}`}
      />
      <div className="w-10/12 mx-auto ">
        <div className="flex z-[2] gap-6 sticky h-fit top-16 bg-white border-b py-6">
          {indiapackages.map((item) => (
            <Link key={item.slug} href={`/india/${item.slug}`}>
              <button
                className={`px-4 py-3 rounded-md border transition font-medium text-sm ${
                  activeSlug === item.slug
                    ? "bg-primary-600 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {item.title}
              </button>
            </Link>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}

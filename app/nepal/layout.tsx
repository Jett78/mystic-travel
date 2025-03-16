"use client";
import Banner from "@/components/ui/banner";
import { nepalpackages } from "@/data/nepal-packages";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NepalPackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const activeSlug = pathname.split("/")[2];
  const activePackage = nepalpackages.find((item) => item.slug === activeSlug);

  return (
    <div>
      <Banner
        img={
          "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        title={`Nepal / ${activePackage?.title || "Nepal"}`}
      />
      <div className="md:w-10/12 w-11/12 mx-auto ">
        <div className="flex z-[2] overflow-x-auto gap-6 sticky h-fit top-16 bg-white border-b py-6">
          {nepalpackages.map((item) => (
            <Link key={item.slug} href={`/nepal/${item.slug}`}>
              <button
                className={`px-4 py-3 rounded-md border transition font-medium md:text-sm text-xs whitespace-nowrap ${
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

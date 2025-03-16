"use client";
import Banner from "@/components/ui/banner";
import { bhutanpackages } from "@/data/bhutan-packages";
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
  const activePackage = bhutanpackages.find((item) => item.slug === activeSlug);

  return (
    <div>
      <Banner
        img={
          "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        title={`Bhutan / ${activePackage?.title || "Bhutan"}`}
      />
      <div className="md:w-10/12 w-11/12 mx-auto ">
        <div className="flex z-[2] gap-6 sticky overflow-x-auto h-fit top-16 bg-white border-b py-6">
          {bhutanpackages.map((item) => (
            <Link key={item.slug} href={`/bhutan/${item.slug}`}>
              <button
                className={`px-4 py-3 rounded-md border transition font-medium md:text-sm text-xs ${
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

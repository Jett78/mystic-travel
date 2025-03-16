"use client";
import Card from "@/components/shared/card";
import { tibetpackages } from "@/data/tibet-packages";
import { useParams } from "next/navigation";
import React from "react";

const NepalPackages = () => {
  const { slug } = useParams();

  const packageItem = tibetpackages.find((packages) => packages.slug === slug);

  if (!packageItem) {
    return (
      <div className="pt-52 pb-16 container mx-auto">
        <h2 className="text-2xl font-semibold">Package not found</h2>
      </div>
    );
  }
  const { title } = packageItem;
  return (
    <main className="my-10">
      <div className="w-full pb-[5rem] px-1 flex flex-col gap-3">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {packageItem.package?.map((item: any, index: number) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default NepalPackages;

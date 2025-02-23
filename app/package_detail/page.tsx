"use client";
import PackageDetailMain from "@/components/website/PackageDetail/PackageDetailMain";
import React, { useEffect } from "react";

type Props = {};

function Page({}: Props) {
  useEffect(() => {
    scrollTo(0, 0);
  },[]);
  return (
    <main className="bg-secondary-50 z-[20] relative">
      <PackageDetailMain />
    </main>
  );
}

export default Page;

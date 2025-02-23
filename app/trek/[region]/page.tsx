"use client";
import AllTrekMain from "@/components/website/AllTrek/AllTrekMain";
import React, { useEffect } from "react";

type Props = {};

function Page({ params }: any) {
  const { region } = params;
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <main className="bg-secondary-50 z-[20] relative">
      <AllTrekMain region={region} />
    </main>
  );
}

export default Page;

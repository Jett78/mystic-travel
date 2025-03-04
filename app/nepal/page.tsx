import Banner from "@/components/ui/banner";
import RelatedPackages from "@/components/website/PackageDetail/related-packages";
import React from "react";

const NepalPage = () => {
  return (
    <main className="">
      <Banner
        img="https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Nepal"
      />
      <RelatedPackages />
    </main>
  );
};

export default NepalPage;

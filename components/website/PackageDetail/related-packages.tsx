import Card from "@/components/shared/card";
import React from "react";
import TrekData from "@/data/TrekData";

const RelatedPackages = () => {
  return (
    <main className="md:w-11/12 w-11/12 mx-auto">
      <h1 className="font-palker uppercase lg:text-[3vw] text-2xl text-center">
        Related Packages
      </h1>
      <div className="space-y-4 my-10">
        {TrekData.map((trek, index) => (
          <div key={index} className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8">
            {trek.package?.slice(0, 3).map((item: any, index: number) => (
              <Card key={index} item={item} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default RelatedPackages;

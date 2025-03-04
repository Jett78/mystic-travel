import Card from "@/components/shared/card";
import TrekData from "@/data/TrekData";
import React from "react";

const RelatedPackages = () => {
  return (
    <main className="w-10/12 mx-auto">
      <h1 className="font-palker uppercase text-[3vw]">Related Packages</h1>
      <div className="space-y-4 my-10">
        {TrekData.map((trek, index) => (
          <div key={index} className="grid grid-cols-4 gap-x-8">
            {trek.package?.map((item: any, index: number) => (
              <Card key={index} item={item} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default RelatedPackages;

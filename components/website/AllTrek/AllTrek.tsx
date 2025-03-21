import React from "react";
import Link from "next/link";
import TrekData from "@/data/TrekData";
import Card from "@/components/shared/card";

function AllTrek({ region }: any) {
  if (!region) {
    // Handle case where activity data is not found
    return <div>Package not found</div>;
  }

  const data: any = TrekData.find((obj) => obj.route === region);

  if (!data) {
    return <div>Data not found</div>;
  }

  const { name, intro, package: packages, route } = data;

  return (
    <div className="w-full  md:py-[2rem] py-4">
      {/* tab  */}
      <div className="w-full z-[10] bg-white border-b sticky top-[4.5rem] mb-9 py-4 flex justify-start overflow-x-scroll md:overflow-x-visible  items-center md:gap-10 gap-6">
        {/* exp tab  */}
        {TrekData.map((item, index) => (
          <Link
            href={`/trek/${item.route}`}
            key={index}
            className={`${
              item.route === region ? "bg-primary-600" : ""
            } px-6 py-3 rounded-md  border hover:scale-105 duration-300 cursor-pointer`}
          >
            <h1
              className={`font-medium md:text-sm text-xs relative whitespace-nowrap    ${
                item.route === region
                  ? "text-secondary-50"
                  : "text-secondary-500"
              }`}
            >
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
      {/* TITLE  */}
      <h2 className="text-2xl relative tracking-wide title font-semibold  text-secondary-500 mb-4">
        {name}
      </h2>
      {/* desc  */}
      <p className="text-[17px] md:pb-[5rem] pb-8 text-secondary-400 font-medium md:text-base text-sm">
        {intro}
      </p>

      {/* available treks */}
      <div className="w-full md:pb-[5rem] pb-8 flex px-1 flex-col gap-3">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5">
          {packages.map((item: any, index: number) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllTrek;

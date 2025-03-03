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
    <div className="w-full  py-[5rem]">
      {/* tab  */}
      <div className="sticky z-[2] top-[4.4rem] h-fit w-full mb-9  flex bg-white py-3 justify-start   items-center gap-10">
        {/* exp tab  */}
        {TrekData.map((item, index) => (
          <Link
            href={`/trek/${item.route}`}
            key={index}
            className={`${
              item.route === region ? "bg-primary-600" : "bg-secondary-50"
            }  px-10 py-2 whitespace-nowrap   shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 duration-300 cursor-pointer`}
          >
            <h1
              className={`text-lg relative tracking-wide title font-medium    ${
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
      <h2 className="text-2xl relative tracking-wide title font-semibold italic text-secondary-500">
        {name}
      </h2>
      {/* desc  */}
      <p className="text-[17px] pb-[5rem] text-secondary-400 font-medium">
        {intro}
      </p>

      {/* available treks */}
      <div className="w-full pb-[5rem] flex px-1 flex-col gap-3">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-5">
          {packages.map((item: any, index: number) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllTrek;

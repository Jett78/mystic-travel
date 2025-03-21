import React from "react";
import Link from "next/link";
import ExpData from "@/data/ExpeditionData";
import Card from "@/components/shared/card";

function AllExp({ distance }: any) {
  if (!distance) {
    // Handle case where activity data is not found
    return <div>Activity not found</div>;
  }

  const data: any = ExpData.find((obj) => obj.route === distance);

  if (!data) {
    return <div>Data not found</div>;
  }

  const { intro, name, route, package: packages } = data;

  return (
    <div className="w-full md:py-[2rem] py-4">
      {/* tab  */}
      <div className="w-full z-[10] bg-white border-b sticky top-[4.5rem] mb-9 py-4 flex justify-start overflow-x-scroll md:overflow-x-visible  items-center md:gap-10 gap-6">
        {/* exp tab  */}
        {ExpData.map((item, index) => (
          <Link
            href={`/expedition/${item.route}`}
            key={index}
            className={`${
              item.route === route ? "bg-primary-600" : ""
            } px-6 py-3 rounded-md  border hover:scale-105 duration-300 cursor-pointer`}
          >
            <h1
              className={`font-medium md:text-sm text-xs relative tracking-wide   ${
                item.route === route
                  ? "text-secondary-50"
                  : "text-secondary-500"
              }`}
            >
              {item.route}
            </h1>
          </Link>
        ))}
      </div>

      {/* desc  */}
      <p className="text-[17px] md:pb-[5rem] pb-8 text-secondary-400 font-medium md:text-base text-sm">
        {intro}
      </p>

      {/* available treks */}
      <div className="w-full md:pb-[5rem] pb-8 px-1 flex flex-col gap-3">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((item: any, index: number) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllExp;

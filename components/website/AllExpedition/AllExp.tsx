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
    <div className="w-full py-[5rem]">
      {/* tab  */}
      <div className="w-full z-[10] bg-white sticky top-[4.5rem] mb-9 py-4 flex justify-start overflow-x-scroll md:overflow-x-visible  items-center md:gap-10 gap-6">
        {/* exp tab  */}
        {ExpData.map((item, index) => (
          <Link
            href={`/expedition/${item.route}`}
            key={index}
            className={`${
              item.route === route ? "bg-primary-600" : "bg-secondary-50"
            } md:px-10 px-4 py-2 rounded-md  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 duration-300 cursor-pointer`}
          >
            <h1
              className={`md:text-lg text-sm whitespace-nowrap relative tracking-wide title font-medium    ${
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

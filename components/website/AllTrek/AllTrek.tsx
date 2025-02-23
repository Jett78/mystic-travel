import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import TrekData from "@/data/TrekData";

type Props = {};

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
    <div className="w-full overflow-hidden py-[5rem]">
      {/* tab  */}
      <div className="w-full mb-9 py-1 flex overflow-x-scroll md:overflow-x-visible justify-start  items-center gap-10">
        {/* exp tab  */}
        {TrekData.map((item, index) => (
          <Link
            href={`/trek/${item.route}`}
            key={index}
            className={`${
              item.route === region ? "bg-primary-600" : "bg-secondary-50"
            } px-10 py-2 whitespace-nowrap   shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 duration-300 cursor-pointer`}
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
            <div
              key={index}
              className="w-full p-2 flex flex-col justify-start items-start gap-3 shadow-[rgba(50,50,105,0.15)_0px_2px_5px_0px,rgba(0,0,0,0.05)_0px_1px_1px_0px]"
            >
              {/* img */}
              <Image
                width={1000}
                height={1000}
                src={item.packageImg}
                alt="banner-image"
                className="w-full h-full object-cover object-bottom"
              />

              {/* desc */}
              <div className="flex w-full flex-col gap-2">
                {/* title */}
                <span className="text-md title font-semibold tracking-wider">
                  {item.packageName}
                </span>
                {/* short intro */}
                <p className="text-sm hidden md:block font-medium text-secondary-400">
                  {item.packageDesc.slice(0, 100)}...
                </p>
                {/* short intro */}
                <p className="text-sm md:hidden block font-medium text-secondary-400">
                  {item.packageDesc.slice(0, 50)}...
                </p>

                <div className="flex gap-3 text-sm font-medium">
                  <div className="flex gap-1 items-center">
                    <Icon
                      icon="iconoir:trekking"
                      className="text-primary-600"
                    />
                    <span>Trek</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Icon
                      icon="simple-line-icons:calender"
                      className="text-primary-600"
                    />
                    <span>{item.packageDay}</span>
                  </div>
                </div>
              </div>

              {/* price */}
              <div className="flex flex-col w-full gap-2">
                <span className="font-bold text-xl text-secondary-500">
                  $100
                </span>

                <div className="flex flex-col w-full whitespace-nowrap text-[12px] font-semibold text-sm gap-1">
                  <span className="font-bold">Price for:</span>
                  <span>1 person</span>
                  <span>{item.packageDay}</span>
                </div>

                <Link href="/package_detail">
                  <button className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-sm font-medium text-secondary-100">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllTrek;

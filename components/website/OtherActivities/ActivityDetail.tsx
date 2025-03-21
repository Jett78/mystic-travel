import Image from "next/image";
import React from "react";
import OtherActivitiesData from "@/data/OtherActivitiesData";
import Link from "next/link";
type Props = {};

function AcitvityDetail({ activity }: any) {
  if (!activity) {
    // Handle case where activity data is not found
    return <div>Activity not found</div>;
  }
  const data: any = OtherActivitiesData.find((obj) => obj.route == activity);
  const { gallery, desc, name, route } = data;
  return (
    <div className="w-11/12 md:w-10/12 mx-auto md:py-[3rem] py-4 text-zinc-50 ">
      {/* tab  */}
      <div className=" sticky top-16 z-[50] bg-white pt-6">
        <div className="w-full py-1 overflow-x-scroll md:overflow-x-visible mb-9 flex justify-start  items-center md:gap-10 gap-4">
          {/* exp tab  */}
          {OtherActivitiesData.map((item, index) => (
            <Link
              href={`/other_activities/${item.route}`}
              key={index}
              className={`${
                item.route === route ? "bg-primary-600" : ""
              } px-6 py-3 rounded-md border   whitespace-nowrap  hover:scale-105 duration-300 cursor-pointer`}
            >
              <h1
                className={`font-medium md:text-sm text-xs relative tracking-wide    ${
                  item.route === route
                    ? "text-secondary-50"
                    : "text-secondary-500"
                }`}
              >
                {item.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
      {/* title  */}
      <div className="w-full flex flex-col gap-2">
        {/* TITLE  */}
        <h1 className="text-2xl relative tracking-wide title font-semibold  text-secondary-500">
          {name}
        </h1>
        {/* DESC  */}
        <p className="md:text-base text-sm font-medium  text-secondary-400">
          {desc}
        </p>
      </div>

      {/* gallery  */}
      <div className=" w-full py-10">
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 auto-rows-[20rem] gap-5">
          {gallery.map((image: any, i: number) => (
            <div
              key={i}
              className={`works  w-full  overflow-hidden group flex flex-col gap-[1rem] justify-start items-center relative cursor-pointer ${
                i === 0 || i === 4 || i === 5 || i === 6 ? "md:col-span-2" : ""
              } ${i === 2 ? "md:row-span-2" : ""}`}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.3] group-hover:opacity-[0] duration-300"></div>
              {/* img  */}
              <div className="w-full h-full  overflow-hidden flex justify-center items-center">
                <Image
                  width={1000}
                  height={1000}
                  className="object-cover object-center hover:scale-[10rem] w-full h-full"
                  src={image}
                  alt="project"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link href="/booking" className="flex justify-end items-center w-full">
        <div
          className={`cursor-pointer  text-nowrap md:w-[20%] w-full mx-auto text-secondary-50 bg-primary-600 rounded-md   duration-200 flex justify-center items-center  px-5  h-[3rem] text-sm`}
        >
          Book now
        </div>
      </Link>
    </div>
  );
}

export default AcitvityDetail;

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
    <div className="w-11/12 md:w-10/12 mx-auto py-[5rem] text-zinc-50 overflow-hidden">
      {/* tab  */}
      <div className="w-full py-1 overflow-x-scroll md:overflow-x-visible mb-9 flex justify-start  items-center gap-10">
        {/* exp tab  */}
        {OtherActivitiesData.map((item, index) => (
          <Link
            href={`/other_activities/${item.route}`}
            key={index}
            className={`${
              item.route === route ? "bg-primary-600" : "bg-secondary-50"
            } px-10 py-2  whitespace-nowrap shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 duration-300 cursor-pointer`}
          >
            <h1
              className={`text-lg relative tracking-wide title font-medium    ${
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
      {/* title  */}
      <div className="w-full flex flex-col gap-2">
        {/* TITLE  */}
        <h1 className="text-2xl relative tracking-wide title font-semibold italic text-secondary-500">
          {name}
        </h1>
        {/* DESC  */}
        <p className="text-lg  text-secondary-400">{desc}</p>
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
          className={`cursor-pointer  text-nowrap md:w-[20%] w-full mx-auto text-secondary-50 bg-gradient-to-r from-primary-600 to-primary-500   duration-200 flex justify-center items-center  px-5  h-[3rem] text-sm`}
        >
          Book now
        </div>
      </Link>
    </div>
  );
}

export default AcitvityDetail;

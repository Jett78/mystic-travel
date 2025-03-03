import ExpData from "@/data/ExpeditionData";
import Image from "next/image";
import React from "react";
import HeroBg from "@/public/mountain.png";
type Props = {};

export default function AllExpHero({ distance }: any) {
  if (!distance) {
    // Handle case where activity data is not found
    return <div>Activity not found</div>;
  }
  const data: any = ExpData.find((obj) => obj.route == distance);
  console.log(data);
  const { name, route } = data;
  return (
    <>
      <div className="w-full h-[60vh] bg-zinc-200 relative  flex justify-center items-end">
        <Image
          width={1000}
          height={1000}
          src={HeroBg}
          alt="expedition-image"
          className=" w-full  bg-secondary-50 h-full object-cover object-top pt-[2rem]"
        />
        <Image
          width={1000}
          height={1000}
          src="/pattern.png"
          alt="expedition-image"
          className=" absolute bottom-0 w-full h-20"
        />
        <div className="absolute inset-0 w-full h-80 bg-gradient-to-b from-black via-black/50 to-transparent" />
        <h1 className="text-3xl md:text-6xl absolute left-1/2 -translate-x-1/2 top-1/2 -translae-y-1/2  tracking-wide  title font-bold text-white z-10">
          Expedition - {route}
        </h1>
      </div>
    </>
  );
}

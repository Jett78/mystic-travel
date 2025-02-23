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
      <div className="w-full h-[50vh] bg-zinc-200 relative  flex justify-center items-end">
        <Image
          width={1000}
          height={1000}
          src={HeroBg}  
          alt="expedition-image"
          className="absolute top-0 left-0 w-full  bg-secondary-50  h-[50vh] object-cover object-top pt-[2rem]"
        />
        <div className="mask1 absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-secondary-50  to-transparent z-10"></div>
        <h1 className="text-3xl md:text-6xl relative tracking-wide mt-10 title font-bold text-secondary-400 z-10">
          Expedition - {route}
        </h1>
      </div>
    </>
  );
}

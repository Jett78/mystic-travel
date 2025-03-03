import Image from "next/image";
import React from "react";
import TrekData from "@/data/TrekData";
import Leaf from "./leaf";
type Props = {};

export default function AllTrekHero({ region }: any) {
  if (!region) {
    // Handle case where activity data is not found
    return <div>Activity not found</div>;
  }
  const data: any = TrekData.find((obj) => obj.route == region);
  console.log(data);
  const { name } = data;
  return (
    <>
      <div className="w-full h-[60vh] bg-zinc-200  overflow-hidden relative  flex justify-center items-center">
        <Leaf />
        <Image
          width={1000}
          height={1000}
          src="https://images.unsplash.com/photo-1611154046036-cd91e50978be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="expedition-image"
          className="h-full w-full object-cover object-center"
        />
        <Image
          width={1000}
          height={1000}
          src="/pattern.png"
          alt="expedition-image"
          className=" absolute bottom-0 w-full h-20"
        />
        <div className="absolute inset-0 w-full h-80 bg-gradient-to-b from-black via-black/50 to-transparent" />

        <h1 className="text-3xl md:text-6xl absolute left-1/2 -translate-x-1/2 top-1/2 -translae-y-1/2 tracking-wide title font-bold text-secondary-50">
          {name}
        </h1>
      </div>
    </>
  );
}

import PrimaryButton from "@/components/shared/primary-button";
import Image from "next/image";
import React from "react";

const PackageBanner = () => {
  return (
    <div className="relative ">
      <Image
        width={1000}
        height={1000}
        src="https://images.unsplash.com/photo-1486525546686-3cd5484691f4?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="expedition-image"
        className="w-full md:max-h-[80vh] h-[60vh] object-cover brightness-50"
      />

      <Image
        width={1000}
        height={1000}
        src="/pattern.png"
        alt="expedition-image"
        className=" absolute bottom-0 w-full h-20 z-[5]"
      />

      {/* bg overlay */}
      <div className="absolute inset-0 z-[4] bg-gradient-to-b from-black via-black/50 to-transparent opacity-80" />
      <div className="absolute w-full text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[6]">
        <h1 className="text-white font-bold lg:text-5xl md:text-3xl text-lg uppercase">
          Everest Base Camp Trekking
        </h1>

        <div className="flex gap-2 items-center justify-center mt-4">
          <PrimaryButton
            path="#fixed-dates"
            title="Book Now"
            className="bg-transparent md:px-4  bg-primary-600  text-white duration-200 "
          />
          <PrimaryButton
            path="#fixed-dates"
            title="Explore Dates"
            className="bg-transparent md:px-4 border border-primary-600 hover:bg-primary-600 text-white duration-200 "
          />
        </div>
      </div>
      {/* dot overlay */}
      <div className="absolute top-0  h-[110vh] w-full bg-[radial-gradient(#ffffff23_1px,#f3f3f311_1px)] bg-[size:4px_4px] z-[2]" />
    </div>
  );
};

export default PackageBanner;

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
        className="w-full max-h-[60vh] object-cover brightness-50"
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

      {/* dot overlay */}
      <div className="absolute top-0  h-[110vh] w-full bg-[radial-gradient(#ffffff23_1px,#f3f3f311_1px)] bg-[size:4px_4px] z-[2]" />
    </div>
  );
};

export default PackageBanner;

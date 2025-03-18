import PrimaryButton from "@/components/shared/primary-button";
import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen fixed inset-0 z-[50]">
      <Image
        src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="404"
        width={1000}
        height={1000}
        className="h-screen w-full bg-cover"
      />
      <div className="absolute bg-gradient-to-t from-black via-black/40 to-transparent inset-0" />

      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center text-white">
        <h2 className="lg:text-[17vw] text-9xl font-bold leading-[1] ">404</h2>
        <h3 className="lg:text-[1.5vw] whitespace-nowrap text-sm  font-medium mb-6">
          Well you're lost. Atleast the view is nice?
        </h3>
        <PrimaryButton title="Go Back" path="/" />
      </div>
    </div>
  );
};

export default NotFound;

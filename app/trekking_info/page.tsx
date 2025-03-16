import Banner from "@/components/ui/banner";
import React from "react";
import TrekkingInfo from "./trekking-info";

const page = () => {
  return (
    <div>
      <Banner
        title="Trekking Info"
        className="md:text-[5vw] text-4xl"
        img="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <TrekkingInfo />
    </div>
  );
};

export default page;

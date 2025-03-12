import Banner from "@/components/ui/banner";
import React from "react";
import TravelInfoList from "./travel-info-list";

const TravelInfo = () => {
  return (
    <div>
      <Banner
        title="Travel Info"
        className="text-[5vw]"
        img="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <TravelInfoList />
    </div>
  );
};

export default TravelInfo;

import Banner from "@/components/ui/banner";
import React from "react";
import GeneralList from "./general-info-list";

const GeneralInfo = () => {
  return (
    <div>
      <Banner
        title="General Info"
        className="text-[5vw]"
        img="https://images.unsplash.com/photo-1599597435338-adbf0f27b5b0?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <GeneralList />
    </div>
  );
};

export default GeneralInfo;

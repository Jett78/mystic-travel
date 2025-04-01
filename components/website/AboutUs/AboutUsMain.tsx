import React from "react";
import AboutUs from "./AboutUs";
import Banner from "@/components/ui/banner";

type Props = {};

function AboutUsMain({}: Props) {
  return (
    <div>
      <Banner
        title="About "
        className="md:text-[4vw] text-4xl"
        img="https://images.unsplash.com/photo-1517934274943-d1749ff2d7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="w-11/12 md:w-11/12 mx-auto">
        <AboutUs />
      </div>
    </div>
  );
}

export default AboutUsMain;

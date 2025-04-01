import React from "react";
import OurTeam from "./OurTeam";
import Banner from "@/components/ui/banner";

type Props = {};

export default function OurTeamMain({}: Props) {
  return (
    <div>
      <Banner
        title="Our Experienced Team"
        className="md:text-[4vw] text-3xl"
        img="https://images.unsplash.com/photo-1504807959081-3dafd3871909?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="w-11/12 md:w-11/12 mx-auto">
        <OurTeam />
      </div>
    </div>
  );
}

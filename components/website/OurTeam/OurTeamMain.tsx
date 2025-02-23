import React from "react";
import OurTeamHero from "./OurTeamHero";
import OurTeam from "./OurTeam";

type Props = {};

export default function OurTeamMain({}: Props) {
  return (
    <div>
      <OurTeamHero />
      <div className="w-11/12 md:w-10/12 mx-auto">
        <OurTeam />
      </div>
    </div>
  );
}

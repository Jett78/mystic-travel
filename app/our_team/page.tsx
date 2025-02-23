import OurTeamMain from "@/components/website/OurTeam/OurTeamMain";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <main className="bg-secondary-50 z-[20] relative">
      <OurTeamMain />
    </main>
  );
}

export default page;

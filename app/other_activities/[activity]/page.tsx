"use client";
import OtherActivitiesMain from "@/components/website/OtherActivities/OtherActivitiesMain";
import React from "react";

type Props = {};

function page({ params }: any) {
  const { activity } = params;
  return (
    <main className="bg-secondary-50 z-[20] relative">
      <OtherActivitiesMain activity={activity} />
    </main>
  );
}

export default page;

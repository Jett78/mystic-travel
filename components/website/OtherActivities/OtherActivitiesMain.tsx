"use client";
import React from "react";
import AcitvityDetail from "./ActivityDetail";
import OtherActivitiesHero from "./OtherActivitiesHero";
import RelatedActivities from "./RelatedActivities";

type Props = {};

function OtherActivitiesMain({ activity }: any) {
  return (
    <div>
      <OtherActivitiesHero activity={activity} />
      <AcitvityDetail activity={activity} />
      <RelatedActivities />
    </div>
  );
}

export default OtherActivitiesMain;

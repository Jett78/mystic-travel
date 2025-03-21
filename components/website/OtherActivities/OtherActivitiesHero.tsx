import Image from "next/image";
import React from "react";
import OtherActivitiesData from "@/data/OtherActivitiesData";
import Banner from "@/components/ui/banner";

type Props = {};

export default function OtherActivitiesHero({ activity }: any) {
  // console.log(OtherActivitiesData[0].HeroImg);
  if (!activity) {
    // Handle case where activity data is not found
    return <div>Activity not found</div>;
  }
  const data: any = OtherActivitiesData.find((obj) => obj.route == activity);
  console.log(data);
  const { HeroImg, name } = data;

  return (
    <>
      <Banner
        title={name}
        className="md:text-[4vw] text-4xl"
        img={HeroImg.src}
      />
    </>
  );
}

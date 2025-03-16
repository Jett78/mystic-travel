import Image from "next/image";
import React from "react";

const GearList = () => {
  return (
    <div className="my-8">
      <Image src="/trekgears.jpg" alt="gear" width={1000} height={1000} className="rounded-md" />
    </div>
  );
};

export default GearList;

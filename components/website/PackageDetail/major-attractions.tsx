import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const MajorAttractions = () => {
  return (
    <div className=" rounded-lg ">
      <h2 className="font-palker tracking-wider">Essential Information</h2>

      <div className="grid grid-cols-2 gap-8 my-6">
        {information.map((item, index) => (
          <div key={index} className="p-2 flex flex-col items-center bg-zinc-50 rounded-md">
            <p className="text-5xl text-primary-600">{item.icon}</p>
            <h2 className="font-medium md:text-md text-sm  text-black mt-2">
              {item.title}
            </h2>
            <p className="font-medium text-xs text-center">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MajorAttractions;

const information = [
  {
    title: "Country",
    value: "Nepal",
    icon: <Icon icon="prime:globe" />,
  },
  {
    title: "Duration",
    value: "2 days",

    icon: <Icon icon="carbon:time" />,
  },
  {
    title: "Max Altitude",
    value: "8848 m",

    icon: <Icon icon="mdi:mountain-outline" />,
  },
  {
    title: "Seasons",
    value: "Spring & Summer",

    icon: <Icon icon="lets-icons:winter-light" />,
  },
  {
    title: "Difficulty",
    value: "Moderate",

    icon: <Icon icon="carbon:meter" />,
  },
  {
    title: "Accomodations",
    value: "Lodge",

    icon: <Icon icon="lucide:home" />,
  },
];

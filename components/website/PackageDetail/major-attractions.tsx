import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const MajorAttractions = () => {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="font-palker tracking-wider">Essential Information</h2>

      <div className="grid grid-cols-2 gap-4 my-6">
        {information.map((item, index) => (
          <div key={index} className="">
            <p className="text-3xl text-primary-600">{item.icon}</p>
            <h2 className="font-semibold text-xs text-primary-600">
              {item.title}
            </h2>
            <p className="font-medium text-xs">{item.value}</p>
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

import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const VisaInfoList = () => {
  return (
    <div className="space-y-12 md:w-11/12 w-11/12 mx-auto md:my-16 my-4">
      {visainfo.map((item, index) => (
        <div key={index}>
          <h1 className="font-bold lg:text-[1.5vw] text-xl mb-2">
            {" "}
            <span>{index + 1} .</span>
            {item.title}
          </h1>
          <p className="font-medium md:text-base text-sm text-zinc-800">{item.desc}</p>

          <div className="my-4 space-y-2">
            {item.locations.map((location, index) => (
              <div key={index} className="flex md:items-center gap-2">
                <Icon
                  icon="material-symbols-light:arrow-circle-right-rounded"
                  width="24"
                  height="24"
                  className="text-primary-600"
                />
                <h2 className="font-medium md:text-base text-sm text-zinc-800">
                  {location.border} , <span>{location.region}</span>
                </h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisaInfoList;

const visainfo = [
  {
    title: "Visa Arrangements",
    desc: "All travelers arriving in Nepal other than Indian nationals are required by immigrations to possess passports with six months remaining validity until expiration. Two passport photos and cash payment are required to obtain a tourist visa upon arrival.",
    locations: [
      { border: "Kakarvitta, Jhapa", region: "Eastern Nepal" },
      { border: "Birganj, Parsa", region: "Central Nepal" },
      { border: "Kodari, Sindhupalchowk", region: "Northern Border" },
      { border: "Belahia, Bhairahawa", region: "Rupandehi, Western Nepal" },
      { border: "Jamunaha, Nepalgunj", region: "Banke, Mid Western Nepal" },
      { border: "Mohana, Dhangadhi", region: "Kailali, Far Western Nepal" },
      {
        border: "Gadda Chauki, Mahendranagar",
        region: "Kanchanpur, Far Western Nepal",
      },
    ],
  },
  {
    title: "Nepal visa fees (Multiple Entry)",
    desc: "Tourists visiting Nepal can obtain a multiple-entry visa based on their intended length of stay. The visa fees vary depending on the duration, with options available for 15, 30, and 90 days.",
    locations: [
      { border: "15 Days", region: "USD $25" },
      { border: "30 Days", region: "USD $40" },
      { border: "90 Days", region: "USD $100" },
    ],
  },
];

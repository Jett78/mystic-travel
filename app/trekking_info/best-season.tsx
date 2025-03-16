import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const BestSeason = () => {
  return (
    <main className="my-8 space-y-8">
      <div>
        <h2 className="font-semibold text-[2vw]">
          Spring Season (March, April, and May)
        </h2>
        <p className="font-medium text-zinc-600  mt-2">
          Spring Season is best for trekking in Nepal. This season is most
          suitable for trekking and climbing. Spring offers a variety of wild
          flora blossoming above 3000 m which makes higher-altitude trekking
          more comfortable and exciting. The temperature is mildly warm at lower
          elevations and quite moderate at higher altitudes over 4000m, which
          provides spectacular and excellent mountain views. March, April, and
          May are considered the best for trekking in Nepal.
        </p>

        <div className="space-y-2 mt-8">
          <p className="font-semibold  text-md">
            {" "}
            Recommended Trekking for Spring Season in Nepal
          </p>
          {spring.map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-2">
                <Icon
                  icon="tabler:arrow-right"
                  width="20"
                  height="20"
                  className="text-primary-600"
                />
                <h3 className="font-medium text-primary-600">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-[2vw]">
          Autumn Season (September, October, and November)
        </h2>
        <p className="font-medium text-zinc-600  mt-2">
          During the autumn season, treks in Nepal offer excellent weather and
          exciting mountain views. Green Valley Nepal Treks offers treks,
          expeditions, and peak climbing to any region of Nepal during this
          season. The temperature is moderate, making it an ideal time for any
          trekking and expedition in Nepal. The sky is generally clear with
          outstanding views. Occasionally short storms may dump considerable
          snow at high altitudes.
        </p>

        <div className="space-y-2 mt-8">
          <p className="font-semibold  text-md">
            {" "}
            Recommended Trekking for Autumn Season in Nepal
          </p>
          {autumn.map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-2">
                <Icon
                  icon="tabler:arrow-right"
                  width="20"
                  height="20"
                  className="text-primary-600"
                />
                <h3 className="font-medium text-primary-600">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-[2vw]">
          Winter Season (December, January, and February)
        </h2>
        <p className="font-medium text-zinc-600  mt-2">
          December, January, and February are the winter months in Nepal. These
          months are pretty cold in mountains with foggy and cloudy mornings and
          evenings but clear afternoons. Snowfall is common at higher elevations
          with risks of strong winds and colder temperatures. Winter, however,
          is ideal for trekking in lower elevations if you are looking for
          suitable and incredible scenery.
        </p>

        <div className="space-y-2 mt-8">
          <p className="font-semibold  text-md">
            {" "}
            Recommended Trekking for Winter Season in Nepal
          </p>
          {winter.map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-2">
                <Icon
                  icon="tabler:arrow-right"
                  width="20"
                  height="20"
                  className="text-primary-600"
                />
                <h3 className="font-medium text-primary-600">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BestSeason;

const spring = [
  {
    title: "Everest Base Camp Trekking",
  },
  {
    title: "Manaslu Circuit Trek",
  },
  {
    title: "Annapurna Base Camp Trekking",
  },
  {
    title: "Annapurna Circuit Trek",
  },
  {
    title: "Everest Base Camp Trekking",
  },
];
const autumn = [
  {
    title: "Everest Base Camp Trekking",
  },
  {
    title: "Manaslu Circuit Trek",
  },
  {
    title: "Annapurna Base Camp Trekking",
  },
  {
    title: "Langtang Region Trekking",
  },
];
const winter = [
  {
    title: "Mardi Himal Trek",
  },
  {
    title: "Ghoreapni Poon Hill Trek",
  },
  {
    title: "Khopra Ridge Danda Trek",
  },
  {
    title: "Pikey Peak Trek",
  },
];

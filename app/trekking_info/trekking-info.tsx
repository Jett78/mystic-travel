"use client";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import TrekkingFaq from "./trekking-faq";
import TrekGuide from "./trek-guide";
import TimeToVist from "./time-to-visit";
import BestSeason from "./best-season";
import GearList from "./gear-list";

const Header = ({ title }: { title: string }) => {
  return <h1 className="text-[2vw] font-palker tracking-wide">{title}</h1>;
};
const Description = ({ desc }: { desc: string }) => {
  return <h1 className="text-[1vw] font-medium text-zinc-600 mt-2">{desc}</h1>;
};
const TrekkingInfo = () => {
  const [offset, setOffset] = useState(-40);

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth < 768) {
        setOffset(-150);
      } else {
        setOffset(-80);
      }
    };
    updateOffset();
  }, []);

  return (
    <main className="grid grid-cols-10 w-10/12 mx-auto ">
      <div className="col-span-2">
        <div className="h-fit sticky top-32">
          {trekkinginfodata.map((item, index) => (
            <ScrollLink
              key={index}
              activeClass="activemountaintrek"
              to={item.title.replace(/\s+/g, "-").toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              offset={offset}
              className={`cursor-pointer w-full flex items-center gap-2 text-nowrap  text-secondary-500 hover:scale-105 duration-300  ]`}
            >
              <h2
                className={`w-full   px-6 py-5  text-left pl-2 hover:bg-zinc-100 ease-in-out duration-200 md:text-sm text-xs font-medium  `}
              >
                {" "}
                {item.title}
              </h2>{" "}
            </ScrollLink>
          ))}
        </div>
      </div>
      <div className="col-span-8 space-y-10">
        <Element
          id="trek-guide"
          name="trek-guide"
          className=" p-4 border rounded-xl"
        >
          <Header title="Trek Guides" />
          <Description desc="Trekking guides in Nepal are experienced professionals who lead trekkers through the Himalayas, ensuring safety, navigation, and cultural insights. They are crucial for a successful and enjoyable trekking experience." />
          <TrekGuide />
        </Element>

        <Element
          id="best-season"
          name="best-season"
          className=" p-4 border rounded-xl"
        >
          <Header title="Best Season" />
          <Description desc="Autumn and Spring seasons are the best time to go trekking in Nepal. In Nepal, trekking is generally suitable during the two seasons - spring and autumn. The best trekking season is considered to be in autumn (September to November) and spring (March to May). " />

          <BestSeason />
        </Element>

        <Element
          id="gear-list"
          name="gear-list"
          className=" p-4 border rounded-xl"
        >
          <Header title="Gear List" />
          <GearList />
        </Element>

        <Element id="faq" name="faq" className=" p-4 border rounded-xl">
          <Header title="FAQ" />
          <TrekkingFaq />
        </Element>
      </div>
    </main>
  );
};

export default TrekkingInfo;
const trekkinginfodata = [
  {
    title: "Trek Guide",
  },

  {
    title: "Best Season",
  },
  {
    title: "Gear List",
  },
  {
    title: "FAQ",
  },
];

"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

const TrekkingFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="gap-6 desc space-y-4 md:my-8 my-6">
      {FaqData.map((item, index) => (
        <div
          key={index}
          className="border-2 border-primarybg/50 shadow-sm rounded-lg transition-all ease-in-out duration-300"
          style={{
            maxHeight: activeIndex === index ? "500px" : "70px", // Define max height based on active state
            overflow: "hidden",
          }}
        >
          <div
            className="flex justify-between md:p-6 p-2 items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="font-medium md:text-[16px] text-sm cursor-pointer">
              {item.question}
            </h2>
            <div className="text-3xl">
              {activeIndex === index ? (
                <Icon
                  icon="iconamoon:arrow-up-2-duotone"
                  style={{ color: "#0385fe" }}
                />
              ) : (
                <Icon
                  icon="iconamoon:arrow-down-2"
                  style={{ color: "#0385fe" }}
                />
              )}
            </div>
          </div>

          <div
            className={`transition-all ease-in-out duration-500 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              maxHeight: activeIndex === index ? "500px" : "0px", // Dynamically set height
              overflow: "hidden",
            }}
          >
            <p className="md:p-6 p-2 border-t border-primarybg text-black font-regular md:text-base text-[12px] ">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrekkingFaq;

const FaqData = [
  {
    id: "1",
    question: "What are the best times of year for trekking in Nepal?",
    answer:
      "The best times for trekking in Nepal are during the pre-monsoon (March to May) and post-monsoon (September to November) seasons. During these times, the weather is generally clear and stable, offering the best views and conditions for trekking.",
  },
  {
    id: "2",
    question: "What should I pack for a trekking expedition?",
    answer:
      "You should pack essentials like sturdy hiking boots, comfortable clothing, a warm jacket, rain gear, a good backpack, a first aid kit, water purification tablets, and personal items such as sunscreen, a hat, and sunglasses.",
  },
  {
    id: "3",
    question: "Do I need a permit for trekking in Nepal?",
    answer:
      "Yes, most trekking areas in Nepal require a trekking permit. The types of permits vary depending on the region. Popular permits include the TIMS (Trekkers' Information Management System) card and specific area permits like the Annapurna Conservation Area Permit (ACAP) and the Sagarmatha National Park Permit.",
  },
  {
    id: "4",
    question: "Is it safe to trek alone in Nepal?",
    answer:
      "While many people trek alone in Nepal without issues, it's generally safer to trek with a guide or in a group. Guides can help navigate trails, provide information about the area, and assist in emergencies. Trekking with others also enhances the overall experience.",
  },
  {
    id: "5",
    question: "What other activities can I do in Nepal besides trekking?",
    answer:
      "Besides trekking, Nepal offers a range of activities including white-water rafting, jungle safaris, paragliding, cultural tours, and mountaineering expeditions. The diverse landscapes and rich culture provide endless opportunities for adventure and exploration.",
  },
];

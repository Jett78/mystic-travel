import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useScroll } from "framer-motion";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
type Props = {};

export default function Faq({}: Props) {
  const { contextSafe } = useGSAP();
  const [openAns, setOpenAns] = useState(false);
  const handleOpenAns = contextSafe((index: number) => {
    if (!openAns) {
      gsap.to(`.ans-${index}`, {
        height: "auto",
        duration: 0.2,
        ease: "sine.inOut",
      });
      setOpenAns(true);
    }
    if (openAns) {
      gsap.to(`.ans-${index}`, {
        height: 0,
        duration: 0.2,
        ease: "sine.inOut",
      });
      setOpenAns(false);
    }
  });
  return (
    <div className="w-full  py-[5rem]">
      {/* top title  */}
      <div className="flex w-full justify-center items-center text-center flex-col gap-3">
        <h1 className="text-3xl md:text-6xl relative tracking-wide title font-bold text-secondary-500">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="w-full md:w-[50%] text-secondary-400">
          {`Got a question? We're here to help! If you don't see your question
          below, drop us a line on our`}{" "}
          <span className="underline font-semibold text-secondary-500 italic cursor-pointer">
            <Link href="contact_us">Contact Page</Link>
          </span>
          .
        </p>
      </div>

      {/* faqs  */}

      <div className="w-11/12 md:w-9/12 mt-[3%] mx-auto columns-1 md:columns-2 flex-col space-y-5  justify-start items-start">
        {FaqData.map((item, index) => (
          <div
            onClick={() => handleOpenAns(index)}
            key={index}
            className="w-full cursor-pointer break-inside-avoid px-5 pt-5 pb-2 flex flex-col gap-1 justify-between shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
          >
            {/* title  */}
            {/* <span className="text-sm text-primary-400">{item.title}</span> */}
            {/* question  */}
            <div className="w-ful pb-3 gap-2 text-secondary-500 font-semibold flex justify-between items-center">
              <span className="w-[95%]">{item.question}</span>
              <span className="cursor-pointer overflow-hidden w-[1.5rem] h-[1.5rem]">
                <Icon
                  icon="mdi:arrow-down-drop"
                  className="w-full h-full object-cover text-primary-500 object-center"
                />
              </span>
            </div>
            {/* ans  */}
            <p
              className={`h-0 overflow-hidden w-full text-sm text-secondary-400 text-start ans-${index}`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

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

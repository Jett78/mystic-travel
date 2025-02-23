import Image from "next/image";
import React, { useRef } from "react";

import Service1 from "@/public/ServiceImage/service1.png";
import Service2 from "@/public/ServiceImage/service2.png";
import Service3 from "@/public/ServiceImage/service3.png";
import Service4 from "@/public/ServiceImage/service4.png";
import Service5 from "@/public/ServiceImage/service5.png";
import Service6 from "@/public/ServiceImage/service6.png";

import Adventure from "@/public/ServiceImage/ImageMain/adventure.avif";
import Camp from "@/public/ServiceImage/ImageMain/camp.avif";
import Guide from "@/public/ServiceImage/ImageMain/guide.avif";
import Culture from "@/public/ServiceImage/ImageMain/culture.avif";
import Trek from "@/public/ServiceImage/ImageMain/trek.avif";
import Wildlife from "@/public/ServiceImage/ImageMain/wildlife.avif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

type Props = {};

function Services({}: Props) {
  const serviceContainerRef = useRef(null);
  const serviceCardContainerRef = useRef(null);
  const serviceCardRef = useRef(null);
  const serviceTitleRef = useRef<any>(null);

  useGSAP(() => {
    const splitServiceTitle = new SplitType(serviceTitleRef.current);
    const tl1 = gsap.timeline({
      scrollTrigger: {
        // ,
        trigger: serviceTitleRef.current,
        start: "top bottom",
        end: "50% 50%",
        scrub: 3,
      },
    });
    tl1.from(splitServiceTitle.chars, {
      opacity: 0,
      translateX: "-50px",
      duration: 1,
      stagger: 0.03,
      ease: "power4.inOut",
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        // trigger: serviceCardContainerRef.current,
        trigger: ".serviceCardRef",
        start: "top bottom",
        end: "50% 50%",
        scrub: 3,
      },
    });
    tl2.from(".serviceCardRef", { 
      opacity: 0,
      // translateX: "-50px",
      transformOrigin: "top",
      duration: 1,
      stagger: 0.05,
      ease: "power4.inOut",
    });
  });
  return (
    <div ref={serviceContainerRef} className="w-full py-[5rem]">
      {/* title  */}
      <h1
        ref={serviceTitleRef}
        className="title text-center mb-20 text-5xl text-secondary-500 font-semibold tracking-wide"
      >
        What we are offering ?
      </h1>
      <div
        ref={serviceCardContainerRef}
        className="w-full md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-20  h-full"
      >
        {/* map services  */}
        {ServicesData.map((item) => (
          <div
            key={item.id}
            className="w-full serviceCardRef group flex justify-start cursor-pointer items-start p-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex-col gap-3   text-start"
          >
            {/* IMG */}
            {/* <div className="relative w-full h-[25vh] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.2] z-10"></div>
              <Image
                className="w-full h-full group-hover:scale-105 duration-300 object-cover"
                src={item.img}
                alt={item.name}
                width={500}
                height={300}
              />
            </div> */}

            <div className="w-full flex px-3 flex-col relative gap-1">
              {/* ICON  */}
              <div className="w-full absolute top-[-5%]  left-0 translate-y-[-50%] flex justify-center items-center">
                <div className="w-[4rem] h-[4rem] p-3 bg-secondary-100   rounded-full flex justify-center items-center">
                  <Image
                    src={item.icon}
                    alt="service-icon"
                    className="w-full h-full object-center object-cover"
                  ></Image>
                </div>
              </div>
              {/* NAME */}
              <span className="title group-hover:text-primary-600 duration-300 mt-[3rem] text-xl text-secondary-500 tracking-wide">
                {item.name}
              </span>
              {/* DESC */}
              <span className="text-sm text-secondary-400">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

const ServicesData = [
  {
    id: 1,
    img: Trek,
    icon: Service1,
    name: "Mountain Trekking",
    desc: "Experience the thrill of mountain trekking with our expert guides and customized routes.",
  },
  {
    id: 2,
    icon: Service2,
    img: Camp,
    name: "Camping",
    desc: "Enjoy an unforgettable camping experience under the stars with all amenities provided.",
  },
  {
    id: 3,
    icon: Service3,
    img: Guide,
    name: "Guided Tours",
    desc: "Join our guided tours to explore the most breathtaking locations with local experts.",
  },
  {
    id: 4,
    icon: Service4,
    img: Wildlife,

    name: "Wildlife Safaris",
    desc: "Witness the beauty of wildlife in their natural habitat with our thrilling safari adventures.",
  },
  {
    id: 5,
    icon: Service5,
    img: Culture,
    name: "Cultural Tours",
    desc: "Immerse yourself in the local culture and traditions with our curated cultural tours.",
  },
  {
    id: 6,
    icon: Service6,
    img: Adventure,
    name: "Adventure Sports",
    desc: "Get your adrenaline pumping with our range of adventure sports activities.",
  },
];

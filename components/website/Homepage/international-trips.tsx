"use client";
import PrimaryButton from "@/components/shared/primary-button";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
const InternationalTrips = () => {
  const internationaltoursRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const headertext = new SplitType(".internationaltrips");
    const headerdesc = new SplitType(".internationaltripsdesc");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: internationaltoursRef.current,
        start: "top 85%",
        end: "40% 60%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(headertext.chars, {
      duration: 1,
      x: 20,
      opacity: 0,
      stagger: 0.2,
    });
    // tl.from(headerdesc.chars, {
    //   duration: 0.5,
    //   opacity: 0.2,
    //   stagger: 0.5,
    // });
  });
  return (
    <div className="md:my-20 my-10" ref={internationaltoursRef}>
      {" "}
      <h1 className="text-3xl text-center title-exp  md:text-6xl mb-6 relative tracking-wide title font-bold  text-black internationaltrips">
        International Tours
      </h1>
      <p className="md:w-[80%] text-sm md:text-base text-zinc-600 mx-auto text-center internationaltripsdesc">
        Embark on unforgettable journeys across borders, exploring diverse
        cultures, iconic landmarks, and breathtaking landscapes. Whether you're
        seeking adventure, relaxation, or cultural enrichment, our curated
        international tour packages promise unique experiences and lifelong
        memories
      </p>
      <div className="group flex max-md:flex-col justify-center gap-2 w-11/12 mx-auto my-10">
        {items.map((item, i: number) => {
          return (
            <article
              key={item.id}
              className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300"
            >
              <div className="absolute left-1/2 -translate-x-1/2 bottom-4 text-white z-10  p-3 flex flex-col gap-2 justify-end">
                <h1 className="text-center md:text-[3vw] text-lg leading-[1.1] tracking-wider font-palker   md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                  {item?.title}
                </h1>
                <span className=" font-medium  md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
                  <PrimaryButton
                    title="View Trips"
                    path={item.path}
                    className="w-fit"
                  />
                </span>
              </div>
              <Image
                className="object-cover h-40 md:h-[420px]  w-full"
                src={item?.url}
                width="960"
                height="480"
                alt="Image 01"
              />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default InternationalTrips;

const items = [
  {
    id: "1",
    path: "/nepal/nepal_tours",
    url: "https://mysticnepaladventure.com/wp-content/uploads/2024/06/trekkinginnepal.jpg",
    title: "Nepal",
    description: "COO & Co-Founder",
    tags: ["Floral", "Highlands", "Wildflowers", "Colorful", "Resilience"],
  },

  {
    id: "2",
    path: "/india/city_tours",

    url: "https://mysticnepaladventure.com/wp-content/uploads/2024/06/india.jpg",
    title: "India",
    description: "Founder & CEO",
    tags: ["Twilight", "Peaks", "Silhouette", "Evening Sky", "Peaceful"],
  },
  {
    id: "3",
    path: "/bhutan/city_tours",

    url: "https://mysticnepaladventure.com/wp-content/uploads/2024/06/bhutan.jpg",
    title: "Bhutan",
    description: "CTO & Co-Founder",
    tags: ["Rocky", "Ridges", "Contrast", "Adventure", "Clouds"],
  },
];

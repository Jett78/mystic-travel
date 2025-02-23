"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import SplitType from "split-type";

type Props = {};

export default function AboutUsHero({}: Props) {
  useGSAP(() => {
    const splitHeroTitle = new SplitType(".about-title");
    gsap.from(splitHeroTitle.chars, {
      opacity: 0,
      duration: 1.5,
      stagger: 0.03,
      ease: "power4.inOut",
    });
  });
  return (
    <>
      <div className="w-full h-[50vh] bg-zinc-200 relative  flex justify-center items-center">
        <Image
          width={1000}
          height={1000}
          src="https://images.unsplash.com/photo-1517934274943-d1749ff2d7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="expedition-image"
          className="absolute top-0 left-0 w-full h-[50vh] object-cover object-top"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5]"></div>
        <h1 className="text-3xl about-title md:text-6xl relative tracking-wide mt-10 title font-bold text-secondary-50">
          ABOUT US
        </h1>
      </div>
    </>
  );
}

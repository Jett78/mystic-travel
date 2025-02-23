"use client";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import OurVisionImg from "@/public/AboutUs/OurVision.png";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
type Props = {};

gsap.registerPlugin(ScrollTrigger);
function AboutUs({}: Props) {
  useGSAP(() => {
    const splitAboutTitle = new SplitType(".about-subtitle");
    gsap.from(splitAboutTitle.chars, {
      opacity: 0,
      duration: 1.5,
      stagger: 0.03,
      ease: "power4.inOut",
      scrollTrigger: {
        
        start: "top 90%",
        end: "50% 50%",
        trigger: ".about-subtitle",
        scrub: 3,
      },
    });
    gsap.from(".about-desc1", {
      opacity: 0,
      duration: 1,
      ease: "power4.inOut",
    });

    gsap.from(".about-desc2", {
      opacity: 0,
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        
        start: "top 90%",
        end: "50% 50%",
        trigger: ".about-desc2",
        scrub: 3,
      },
    });
  });
  return (
    <>
      <div className="w-full py-[5rem]   flex flex-col md:flex-row justify-center items-center gap-10">
        {/* about us  */}
        <div className="w-full md:w-[40%] about-desc1  flex flex-col gap-2 items-start justify-center h-[70%]">
          <span className="text-secondary-500 text-lg font-medium">
            Our Story
          </span>
          <p className="text-secondary-400">
            {`At Trivision, our passion for adventure and the great outdoors drives
            everything we do. Founded by a team of outdoor enthusiasts, we set
            out to create a platform that would inspire and empower fellow
            adventurers worldwide. Whether you're seeking serene hikes amidst
            nature's beauty or challenging treks to conquer majestic peaks,
            Trivision is here to guide you.`}
          </p>
          <Link href="/contact_us">
            <button className="w-full py-3 bg-gradient-to-r  px-16 from-primary-600 to-primary-500 text-sm font-medium text-secondary-100">
              Get in touch
            </button>
          </Link>
        </div>
        {/* image  */}
        <Image
          className="w-full md:w-[40%] object-cover about-desc1 object-center h-[70vh]"
          width={1000}
          height={1000}
          alt="about-us-img"
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Image>
      </div>

      {/* middle  */}
      <div className="w-full flex flex-col gap-2 pb-[5rem]">
        <h1 className="text-4xl md:text-8xl w-full md:w-[50%] about-subtitle tracking-wide title font-bold text-secondary-500">
          LET&apos;S GET TO <br /> KNOW EACH OTHER
        </h1>
        <div className="w-full flex justify-end">
          <p className="w-full md:w-[60%] about-desc2 text-secondary-400">
            {`From the side of Trivision, let's embark on a journey of connection
            and discovery together. We're passionate about understanding your
            interests, sharing insights, and exploring ideas with you. Whether
            it's discussing the latest outdoor adventures, delving into trail
            experiences, or simply connecting over our love for nature, we're
            eager to engage in conversations that enrich both our perspectives.
            Let's build a community founded on mutual respect, curiosity, and a
            shared passion for exploring the great outdoors.`}
          </p>
        </div>
      </div>

      <div className="w-full md:w-[70%] mx-auto grid grid-cols-3 gap-2  md:gap-10 pb-[5rem]">
        <div className="flex flex-col gap-3">
          {/* image  */}
          <div className="w-full h-[70vh] p-3 bg-zinc-200   group cursor-pointer overflow-hidden hover:-rotate-[2deg] duration-500   relative  flex justify-center items-center">
            <Image
              width={1000}
              height={1000}
              src="https://images.unsplash.com/photo-1517934274943-d1749ff2d7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="expedition-image"
              className="absolute top-0 left-0 group-hover:rotate-[2deg] group-hover:scale-110 duration-500  w-full h-full object-cover object-center"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5]"></div>
            {/* text  */}
            <div className="relative h-full flex flex-col justify-end">
              <Icon
                icon="mdi:target-variant"
                className="w-[2.5rem] h-[2.5rem] object-cover object-center absolute top-[2%] right-[2%] rotate-45 text-secondary-50"
              />
              <span className="title text-3xl text-secondary-50 italic">
                Our mission
              </span>
              <p className="text-secondary-50 text-sm">
                {`Our mission at Trivision is to inspire and empower outdoor
                enthusiasts worldwide by providing comprehensive resources for
                exploration and adventure. We aim to curate a platform where
                individuals can discover, plan, and share their outdoor journeys
                with ease.`}
              </p>
            </div>
          </div>
        </div>
        <h1 className="w-full h-full flex justify-center items-center title italic title font-bold text-secondary-500 text-5xl">
          WHAT WE DO?
        </h1>
        {/* image  */}
        <div className="flex flex-col gap-3">
          {/* image  */}
          <div className="w-full h-[70vh] group cursor-pointer overflow-hidden hover:rotate-[2deg] duration-500 p-3 bg-zinc-200 relative  flex justify-center items-center">
            <Image
              width={1000}
              height={1000}
              src={OurVisionImg}
              alt="expedition-image"
              className="absolute top-0 left-0 group-hover:-rotate-[2deg] group-hover:scale-110 duration-500 w-full h-full object-cover object-center"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5]"></div>
            {/* text  */}
            <div className="relative h-full   flex flex-col justify-end">
              <Icon
                icon="tabler:device-vision-pro"
                className="w-[2.5rem] h-[2.5rem] object-cover object-center absolute top-[2%] right-[2%] rotate-45 text-secondary-50"
              />
              <span className="title text-3xl text-secondary-50 italic">
                Our vision
              </span>
              <p className="text-secondary-50 text-sm">
                {` Our vision is to foster a global community united by a passion
                for the great outdoors, where every trail leads to new
                discoveries and meaningful experiences.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;

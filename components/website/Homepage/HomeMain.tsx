"use client";
import React, { useRef } from "react";

import Banner from "./Banner";
import PopularExpedition from "./PopularExpedition";
import PopularTrekking from "./PopularTrekking";
import Reviews from "./Reviews";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Faq from "./Faq";
import NewHero from "./new-hero";
import WhyChoose from "./why-choose";
import InternationalTrips from "./international-trips";
import Cta from "./cta";
type Props = {};

gsap.registerPlugin(ScrollTrigger);
function HomeMain({}: any) {
  useGSAP(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        start: "top top",
        end: "top top",
        trigger: ".hero-container",
        scrub: 1,
      },
    });
    tl1.from(".content-main", {
      // translateY: "50vh",
      duration: 2,
      ease: "linear",
    });

    const herotl = gsap.timeline({
      scrollTrigger: {
        start: "top top",
        // end: "top -100%",
        // markers: true,
        trigger: ".hero-container",
        scrub: 0.5,
      },
    });

    // herotl.to(".content-main", {
    //   top: "-100vh",
    // });
  });

  const navContainerRef = useRef<any>(null);
  return (
    <>
      <div className=" w-full overflow-hidden">
        <NewHero />
        <div className="w-full relative  content-main  bg-white   mt-[100vh]">
          <div className="md:w-10/12 w-11/12 mx-auto">
            <WhyChoose />
          </div>
          {/* <div className="md:w-10/12 w-11/12 mx-auto">
            <Services />
          </div> */}
          <div className="w-full mx-auto">
            <PopularExpedition />
          </div>
          <InternationalTrips />
          <div className="w-full mx-auto">
            <PopularTrekking />
          </div>
          <div className="md:w-10/12 w-11/12 mx-auto">
            <Faq />
          </div>
          {/* <div className="w-full mx-auto">
            <Banner />
          </div> */}
          <Cta />
          <div className="md:w-10/12 w-11/12 mx-auto">
            <Reviews />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMain;

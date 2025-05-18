"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import ExpData from "@/data/ExpeditionData";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
function PopularExpedition() {
  const popularexpeditionsRef = useRef<HTMLDivElement>(null);
  const expeditioncardRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const headertext = new SplitType(".expedition");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: popularexpeditionsRef.current,
        start: "top 85%",
        end: "40% 60%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(headertext.chars, {
      duration: 0.5,
      x: 10,
      opacity: 0,
      stagger: 0.1,
    });

    // Animate the review cards
    // if (expeditioncardRef.current) {
    //   const cards = expeditioncardRef.current.querySelectorAll(".review-card"); // Target cards by class
    //   tl.fromTo(
    //     cards,
    //     {
    //       opacity: 0,
    //       y: 20,
    //     },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       duration: 2,
    //       stagger: 1,
    //     },
    //     "-=0.5" // Overlap with the header animation slightly
    //   );
    // }
  });

  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    // Responsive breakpoints
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center relative bg-parallex1 bg-fixed bg-cover "
      ref={popularexpeditionsRef}
    >
    <div className="bg-black bg-opacity-40 absolute h-full w-full inset-0"/>
      <div className="w-11/12 md:w-11/12  mx-auto   flex flex-col gap-5  justify-center relative items-center">
        <h1 className="text-3xl  md:text-6xl mb-6 relative tracking-wide title font-bold text-white   expedition">
          TRENDING EXPEDITION
        </h1>

        <div className="w-full" ref={expeditioncardRef}>
          <Slider {...settings} ref={sliderRef}>
            {ExpData.map((item, index) => (
              <Link key={index} href="/package_detail">
                <div className="review-card border rounded-md bg-white flex flex-col gap-3 h-auto p-3 mx-2">
                  <div className="relative">
                    {/* MASK */}
                    <Image
                      width={1000}
                      height={1000}
                      src={item.img}
                      alt="expedition-image"
                      className="w-full h-[30vh] object-cover object-center rounded-lg"
                    />
                  </div>
                  <div className="w-full flex relative flex-col gap-2">
                    {/* distance days */}
                    <div className="w-full absolute top-[-10%] left-0 translate-y-[-50%] flex justify-center items-center">
                      <div className="w-[70%] h-[2rem] rounded-md text-sm font-medium px-[10%] text-secondary-400 bg-secondary-100 flex justify-between items-center">
                        <span className="flex items-center gap-1">
                          <Icon icon="carbon:time" /> <span>5 days</span>
                        </span>
                        <span>|</span>
                        <span>259km</span>
                      </div>
                    </div>
                    <span className="font-semibold text-lg pt-[1.5rem] text-secondary-500 tracking-wide">
                      {item.name}
                    </span>
                    <p className="text-sm text-secondary-400  line-clamp-2">
                      {item.desc}
                    </p>

                    <div className="grid grid-cols-2 w-full gap-2">
                      <Link
                        href="/package_detail"
                        className="px-6 py-2 border rounded-md flex justify-center items-center text-sm font-medium hover:bg-black hover:text-white ease-in-out duration-200  text-black "
                      >
                        view more
                      </Link>

                      <Link href="/booking">
                        <button className="w-full rounded-md py-3 bg-primary-600 hover:bg-blue-500 ease-in-out duration-200 text-sm font-medium text-secondary-100">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>

        <div className="flex  items-center">
          <div
            onClick={handlePrev}
            className="w-[2rem]  md:w-[3rem] h-[2rem] md:h-[3rem] hover:scale-110 duration-300 cursor-pointer overflow-hidden  "
          >
            <Icon
              icon="ei:arrow-left"
              className="w-full h-full object-cover object-center text-white"
            />
          </div>
          <div
            onClick={handleNext}
            className="w-[2rem]  md:w-[3rem] h-[2rem] md:h-[3rem] hover:scale-110 duration-300 cursor-pointer overflow-hidden  "
          >
            <Icon
              icon="ei:arrow-right"
              className="w-full h-full object-cover object-center text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularExpedition;

"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

const NewHero = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
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

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <main className="md:h-screen h-[100dvh] fixed w-full">
      <Slider {...settings} ref={sliderRef}>
        {cards.map((item, index) => (
          <div key={index} className="">
            <figure>
              <Image
                src={item.img}
                alt="card"
                width={1000}
                height={1000}
                className="h-screen bg-cover object-cover w-full brightness-75"
              />
              <div className="absolute top-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent w-full h-52" />
              <div className="absolute inset-0 top-0 bg-black bg-opacity-30 w-full h-screen" />
              <div className="absolute top-0 h-full w-full bg-[radial-gradient(#ffffff23_1px,#f3f3f311_1px)] bg-[size:4px_4px]" />
            </figure>

            <div className="absolute w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white space-y-6 z-[10]">
              <h1 className="font-bold lg:text-[5.7vw] sm:text-6xl xs:text-3xl text-2xl whitespace-nowrap text-center tracking-wide font-palker">
                {item.title}
              </h1>
              <p className="text-center md:text-sm text-xs w-full line-clamp-3 md:w-[40%] mx-auto">
                An Everest expedition is a challenging and awe-inspiring
                adventure that takes climbers to the highest point on Earth,
                Mount Everest, standing at 8,848 meters (29,029 feet). Here's an
                overview of what this incredible journey entails:
              </p>
              <Link
                href="/package_detail"
                className="w-fit mx-auto justify-center relative z-[4] flex items-center px-12 py-3 overflow-hidden md:text-lg text-xs font-medium bg-primary-600 text-white rounded-xl hover:text-white group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-blue-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Explore Now</span>
              </Link>
            </div>
          </div>
        ))}
      </Slider>

      <div className="w-11/12 absolute flex items-center justify-between left-1/2 -translate-x-1/2 lg:bottom-[3vw] sm:bottom-[8vw] bottom-[20vw] text-white ">
        {/* Numbered Pagination */}
        <div>
          <span className="md:text-[4vw] text-4xl font-palker">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <span className="mx-2">/</span>
          <span>{String(cards.length).padStart(2, "0")}</span>
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-4">
          <div
            className="border rounded-full aspect-square lg:p-6 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300 hover:bg-white hover:text-black "
            onClick={handlePrev}
          >
            <Icon icon="mynaui:arrow-left" className="md:text-3xl text-xl" />
          </div>
          <div
            className="border rounded-full aspect-square lg:p-6 p-4 cursor-pointer  hover:scale-110 ease-in-out duration-300 hover:bg-white hover:text-black hover:animate-none animate-customPing"
            onClick={handleNext}
          >
            <Icon icon="mynaui:arrow-right" className="md:text-3xl text-xl" />
          </div>
        </div>
      </div>

      {/* Custom Pagination with Thumbnails */}
      <div className="absolute bottom-[3vw] left-1/2 -translate-x-1/2 flex md:gap-4 gap-2 z-[10]">
        {cards.map((item, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative md:w-12 md:h-12 w-6 h-6 rounded-full overflow-hidden transition-all duration-300 ${
              currentSlide === index
                ? "ring-2 ring-white scale-110"
                : "opacity-70"
            }`}
          >
            <Image
              src={item.img}
              alt={`Thumbnail ${item.title}`}
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
          </button>
        ))}
      </div>
    </main>
  );
};

export default NewHero;

const cards = [
  {
    title: "Langtang Base Camp Trek",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Annapurna Base Camp Trek",
    img: "https://images.unsplash.com/photo-1584395631446-e41b0fc3f68d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mardi Base Camp Trek",
    img: "https://images.unsplash.com/photo-1529556253689-cf147e0fb3d9?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Everest Base Camp Trek",
    img: "https://images.unsplash.com/photo-1551932733-22b68c904545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Dhaulagiri Base Camp Trek",
    img: "https://images.unsplash.com/photo-1592731057019-57ed336948ed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

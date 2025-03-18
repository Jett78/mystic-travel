"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const NewHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgImg, setBgImg] = useState(cards[0].img);
  const [title, setTitle] = useState(cards[0].title);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % cards.length;
        setBgImg(cards[newIndex].img);
        setTitle(cards[newIndex].title);
        return newIndex;
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleManualClick = (index: number) => {
    setCurrentIndex(index);
    setBgImg(cards[index].img);
    setTitle(cards[index].title);
  };

  return (
    <main
      className="md:h-screen h-[100dvh] fixed  w-full bg-cover transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0  h-full w-full bg-[radial-gradient(#ffffff23_1px,#f3f3f311_1px)] bg-[size:4px_4px] z-[2]" />

      <div className="absolute top-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent w-full h-40" />
      <div className="absolute inset-0 top-0 bg-black bg-opacity-20 w-full h-screen" />

      <div className="absolute left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/2 md:space-y-10 space-y-4 z-[4]">
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 border py-1 md:text-base text-xs rounded-full border-primary-600 bg-white text-black">
            Expedition
          </button>
          <button className="px-6 border py-1  md:text-base text-xs rounded-full border-primary-600 whitespace-nowrap text-white">
            Booking Available dates 2025-2026
          </button>
        </div>

        <h1 className="font-bold lg:text-[5vw]  md:text-6xl text-2xl text-white whitespace-nowrap text-center tracking-wide font-palker">
          {title}
        </h1>

        <Link
          href="/package_detail"
          className="w-fit mx-auto justify-center relative flex items-center px-12 py-3 overflow-hidden md:text-lg text-xs font-medium bg-primary-600 text-white  rounded-xl hover:text-white group hover:bg-gray-50"
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

      {/* Image Thumbnail Navigation */}
      <div className="lg:grid hidden md:grid-cols-5 grid-cols-3 gap-2 absolute z-[3] bottom-2">
        {cards.map((item, index) => (
          <div
            key={index}
            onClick={() => handleManualClick(index)}
            className="cursor-pointer group"
          >
            <figure
              className={`p-1 border rounded-xl border-dashed relative overflow-hidden ${
                index === currentIndex ? "border-primary-600" : ""
              }`}
            >
              <Image
                src={item.img}
                alt="card"
                width={1000}
                height={1000}
                className="lg:h-[28vh] h-[25vh] object-cover rounded-xl group-hover:scale-110 ease-in-out duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <h2 className="absolute top-1/2 -translate-y-1/2 lg:whitespace-nowrap left-1/2 -translate-x-1/2 font-semibold text-white tracking-wide lg:text-[1.1vw] text-xs text-center">
                {item.title}
              </h2>
            </figure>
          </div>
        ))}
      </div>

      <div className="lg:hidden grid md:grid-cols-3 grid-cols-3 gap-2 absolute bottom-6 mx-4 z-[3]">
        {cards.slice(0, 3).map((item, index) => (
          <div
            key={index}
            onClick={() => handleManualClick(index)}
            className="cursor-pointer group"
          >
            <figure
              className={`p-1 border rounded-xl border-dashed relative overflow-hidden ${
                index === currentIndex ? "border-primary-600" : ""
              }`}
            >
              <Image
                src={item.img}
                alt="card"
                width={1000}
                height={1000}
                className="md:h-[25vh] h-[15vh] object-cover rounded-xl group-hover:scale-110 ease-in-out duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <h2 className="absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 font-semibold text-white tracking-wide md:text-xl text-xs text-center">
                {item.title}
              </h2>
            </figure>
          </div>
        ))}
      </div>
    </main>
  );
};

export default NewHero;

const cards = [
  {
    title: "Langtang Base Camp Trek",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Annapurna Base Camp Trek",
    img: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mardi Base Camp Trek",
    img: "https://plus.unsplash.com/premium_photo-1672115681150-cce7a518bba1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Everest Base Camp Trek",
    img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Dhaulagiri Base Camp Trek",
    img: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

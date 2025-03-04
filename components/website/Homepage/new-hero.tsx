import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
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
      className="h-screen fixed  w-full bg-cover transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent w-full h-40" />
      <div className="absolute inset-0 top-0 bg-black bg-opacity-20 w-full h-screen" />

      <div className="absolute left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/2 space-y-4">
        <div className="flex justify-center gap-4">
          <button className="px-6 border py-1 rounded-full border-primary-600 bg-white text-black">
            Expedition
          </button>
          <button className="px-6 border py-1 text-sm rounded-full border-primary-600 text-white">
            Booking Available dates 2025-2026
          </button>
        </div>

        <h1 className="font-bold text-[5vw] text-white whitespace-nowrap text-center tracking-wide font-palker">
          {title}
        </h1>

        <div className="flex justify-center">
          <button className="px-6 flex items-center gap-2 py-3 font-bold rounded-full bg-primary-600 text-white">
            Explore Now
            <Icon icon="mynaui:arrow-right" width="24" height="24" />
          </button>
        </div>
      </div>

      {/* Image Thumbnail Navigation */}
      <div className="grid grid-cols-5 gap-2 absolute bottom-2">
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
                className="h-[20vh] object-cover rounded-xl group-hover:scale-110 ease-in-out duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <h2 className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap left-1/2 -translate-x-1/2 font-palker text-white tracking-wide text-[1.2vw]">
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

"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

function Reviews() {
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    // Responsive breakpoints
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
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
        breakpoint: 769,
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
    <div className="w-full py-[3rem] flex flex-col gap-20 justify-center items-center relative">
      <div className="w-10/12 mx-auto justify-between items-center flex">
        <div
          onClick={handlePrev}
          className="w-[2rem]  md:w-[2.5rem] h-[2rem] md:h-[2.5rem] hover:scale-105 duration-300 cursor-pointer overflow-hidden  text-secondary-700 hover:text-secondary-400"
        >
          <Icon
            icon="mynaui:fat-arrow-left"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h1 className="text-3xl md:text-6xl relative tracking-wide title font-bold text-secondary-500">
          TOP-RATED REVIEWS
        </h1>
        <div
          onClick={handleNext}
          className="w-[2rem]  md:w-[2.5rem] h-[2rem] md:h-[2.5rem] hover:scale-105 duration-300 cursor-pointer overflow-hidden  text-secondary-700 hover:text-secondary-400"
        >
          <Icon
            icon="mynaui:fat-arrow-right"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      {/* CARDS  */}
      <div className="w-11/12 md:w-11/12 mx-auto  flex  justify-center relative items-center p-2">
        <div className="w-full">
          <Slider {...settings} ref={sliderRef}>
            {ReviewsData.map((itemn, index) => (
              <div key={index}>
                <div className=" flex flex-col gap-3 border rounded-md p-3 mx-2">
                  <span className="flex text-primary-600 opacity-20">
                    <Icon
                      icon="mdi:comma"
                      className="w-[2rem] h-[2rem] object-cover object-center rotate-[180deg]"
                    />
                    <Icon
                      icon="mdi:comma"
                      className="w-[2rem] h-[2rem] object-cover object-center rotate-[180deg]"
                    />
                  </span>

                  <figure className="w-[6rem]  h-[6rem] mx-auto rounded-full bg-zinc-700 overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      alt="client-img"
                      className="w-full h-full object-cover rounded-full object-top"
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    ></Image>
                  </figure>
                  {/* review  */}
                  <p className="text-secondary-400 text-center py-4">
                    {itemn.review}
                  </p>

                  <div className="w-full flex flex-col">
                    {/* name  */}
                    <span className="title italic  tracking-wide">
                      {itemn.name}
                    </span>
                    <div className="w-full flex  items-center justify-between">
                      <span className="text-[14px] font-medium text-secondary-400">
                        Web Designer
                      </span>
                      <span className="flex justify-center items-center text-primary-600">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} icon="material-symbols:star" />
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

const ReviewsData = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Avid Hiker",
    img: "/path/to/alice.jpg",
    review:
      "Mystic Adventure has been my go-to platform for planning hiking trips. The detailed trail descriptions and user reviews helped me find the perfect trails for both solo hikes and group adventures.",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Beginner Hiker",
    img: "/path/to/bob.jpg",
    review:
      "As someone new to hiking, Mystic Adventure has been invaluable. The easy-to-use interface and comprehensive trail database allowed me to discover scenic routes near my area.",
  },
  {
    id: 3,
    name: "Charlie Davis",
    role: "Trek Leader",
    img: "/path/to/charlie.jpg",
    review:
      "I recently used Mystic Adventure to plan a trekking expedition with friends to a remote location. The platform's extensive trail information and downloadable maps were essential for our journey.",
  },
  {
    id: 4,
    name: "Dana Lee",
    role: "Outdoor Enthusiast",
    img: "/path/to/dana.jpg",
    review:
      "Mystic Adventure made it easy to find family-friendly hiking trails for our weekend trips. The user reviews and ratings helped us choose the best trails for our kids.",
  },
];

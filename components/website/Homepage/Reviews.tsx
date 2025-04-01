"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Reviews() {
  const reviewRef = useRef<HTMLDivElement>(null);
  const reviewcardsRef = useRef<HTMLDivElement>(null); // Ref for the slider container
  const sliderRef = useRef<Slider>(null);

  useGSAP(() => {
    // Animate the header text
    const headertext = new SplitType(".reviews");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: reviewRef.current,
        start: "top 85%",
        end: "40% 60%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(headertext.chars, {
      duration: 0.5,
      x: 20,
      opacity: 0,
      stagger: 0.2,
    });

    // Animate the review cards
    // if (reviewcardsRef.current) {
    //   const cards = reviewcardsRef.current.querySelectorAll(".review-card"); // Target cards by class
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
  }, []); // Empty dependency array ensures this runs once on mount

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
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
      className="w-full py-[3rem] flex flex-col gap-10 justify-center items-center relative"
      ref={reviewRef}
    >
      <h1 className="reviews text-2xl md:text-6xl relative text-center tracking-wide title font-bold text-secondary-500">
        Hear from our clients
      </h1>

      {/* CARDS */}
      <div className="w-11/12 md:w-11/12 mx-auto flex justify-center relative items-center">
        <div className="w-full" ref={reviewcardsRef}>
          <Slider {...settings} ref={sliderRef}>
            {ReviewsData.map((itemn, index) => (
              <div key={index}>
                <div className="review-card flex flex-col gap-3 border rounded-md p-2 mx-2">
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

                  <figure className="w-[6rem] h-[6rem] mx-auto rounded-full bg-zinc-700 overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      alt="client-img"
                      className="w-full h-full object-cover rounded-full object-top"
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                  </figure>

                  {/* review */}
                  <p className="text-secondary-400 text-center lg:text-base text-sm py-4 md:h-40">
                    {itemn.review}
                  </p>

                  <div className="w-full flex flex-col">
                    {/* name */}
                    <span className="title italic tracking-wide">
                      {itemn.name}
                    </span>
                    <div className="w-full flex items-center justify-between">
                      <span className="text-[14px] font-medium text-secondary-400">
                        Web Designer
                      </span>
                      <span className="flex justify-center items-center text-yellow-600">
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
      <div className="flex justify-center ">
        <div
          onClick={handlePrev}
          className="w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem] hover:scale-110 duration-300 cursor-pointer overflow-hidden text-zinc-700 hover:text-zinc-900"
        >
          <Icon
            icon="ei:arrow-left"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          onClick={handleNext}
          className="w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem] hover:scale-110 duration-300 cursor-pointer overflow-hidden text-zinc-700 hover:text-zinc-900"
        >
          <Icon
            icon="ei:arrow-right"
            className="w-full h-full object-cover object-center"
          />
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

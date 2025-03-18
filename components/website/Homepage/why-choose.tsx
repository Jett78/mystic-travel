"use client";
import PrimaryButton from "@/components/shared/primary-button";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const WhyChoose = () => {
  const mainchooseRef = useRef<HTMLDivElement>(null);
  const leftcontentRef = useRef<HTMLDivElement>(null);
  const rightcontentRef = useRef<HTMLDivElement>(null);
  const lastimageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainchooseRef.current,
        start: "10% bottom",
        end: "center 40%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(leftcontentRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.5,
    });
    tl.from(
      lastimageRef.current,
      {
        scale: 0,
        opacity: 0,
        duration: 1.5,
      },
      "<"
    );

    if (rightcontentRef.current) {
      tl.fromTo(
        Array.from(rightcontentRef.current.children),
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          stagger: 0.5,
        }
      );
    }
  });
  return (
    <main
      className="grid lg:grid-cols-2 gap-y-8 gap-x-8  py-16"
      ref={mainchooseRef}
    >
      <div className="md:order-1 order-2 grid grid-cols-2 items-center gap-4">
        <div className=" grid gap-4 h-full w-full" ref={rightcontentRef}>
          {choosedata.slice(0, 2).map((item, index) => (
            <div key={index} className="relative group">
              <figure className="overflow-hidden rounded-md h-full">
                <Image
                  src={item.img}
                  alt="dummy-img"
                  width={1000}
                  height={1000}
                  className="h-full object-cover group-hover:scale-125 ease-in-out duration-200"
                />
              </figure>
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black via-black/50 to-transparent w-full" />
              <h2 className="absolute bottom-2 left-2 lg:text-[1.2vw] text-xs text-white uppercase font-semibold  tracking-wide ">
                {item.title}
              </h2>
            </div>
          ))}
        </div>

        <figure className="" ref={lastimageRef}>
          {choosedata
            .filter((_, index) => index === 2)
            .map((item, index) => (
              <div key={index} className="relative group">
                <figure className="overflow-hidden rounded-md h-full">
                  <Image
                    src={item.img}
                    alt="dummy-img"
                    width={1000}
                    height={1000}
                    className="h-full object-cover group-hover:scale-125 ease-in-out duration-200"
                  />
                </figure>
                <div className="absolute inset-0 rounded-md  bg-gradient-to-t from-black via-black/50 to-transparent  w-full" />
                <h2 className="absolute bottom-2 left-2 lg:text-[1.2vw] text-xs text-white uppercase font-semibold  tracking-wide ">
                  {item.title}
                </h2>
              </div>
            ))}
        </figure>
      </div>

      <div ref={leftcontentRef} className=" items-center gap-4">
        <header className="">
          <h1 className="md:text-[3.5vw] text-3xl leading-[2] uppercase font-palker">
            Why <span className="text-primary-600">Choose</span>{" "}
          </h1>
          <h1 className="md:text-[3.5vw] text-3xl uppercase font-palker whitespace-nowrap">
            Mystic Adventure{" "}
          </h1>

          <div className="my-8 space-y-4 font-medium text-zinc-700 text-sm">
            <p>
              Mystic Nepal Adventure (P.).Ltd is an independently owned and
              officially authorized full-service tour operator based in
              Kathmandu, Nepal. Our team comprises of highly experienced members
              each of whom has served at least a decade in tourism related
              activities.
            </p>
            <p>
              {" "}
              Although the company was established relatively recently, in 2002,
              we offer a very high standard of personalized service. My Nepal
              Tours is licensed with the Ministry of Tourism of Nepal and
              authorized to organize tours in Nepal, Tibet, Bhutan and India. We
              are affiliated to various travel related bodies of Nepal including
              the major ones such as TAAN, NTB and KEEP.
            </p>
          </div>

          <PrimaryButton title="About Us" path="/about_us" />
        </header>

        <figure className="md:block hidden mt-4">
          {choosedata
            .filter((_, index) => index === 3)
            .map((item, index) => (
              <div key={index} className="relative group">
                <figure className="overflow-hidden rounded-md h-[20vh]">
                  <Image
                    src={item.img}
                    alt="dummy-img"
                    width={1000}
                    height={1000}
                    className="h-full object-cover  group-hover:scale-125 ease-in-out duration-200"
                  />
                </figure>
                <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black via-black/50 to-transparent w-full" />
                <h2 className="absolute bottom-2 left-2 lg:text-[1.2vw] text-white  font-semibold uppercase tracking-wide ">
                  {item.title}
                </h2>
              </div>
            ))}
        </figure>
      </div>
    </main>
  );
};

export default WhyChoose;

const choosedata = [
  {
    title: "Affordable Prices",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW5zfGVufDB8fDB8fHww",
  },
  {
    title: "Wildlife Encounters",
    img: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FmYXJpfGVufDB8fDB8fHww",
  },
  {
    title: "Exclusive Access",
    img: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww",
  },
  {
    title: "Remote Locations",
    img: "https://images.unsplash.com/photo-1494363939151-b6875454fe2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJ1cmFsJTIwdmlsbGxhZ2VzfGVufDB8fDB8fHww",
  },
];

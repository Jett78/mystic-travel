"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Cta = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const headertext = new SplitType(".cta");
    const headertext2 = new SplitType(".cta2");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 85%",
        end: "30% 60%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(headertext.chars, {
      duration: 0.5,
      y: 20,
      opacity: 0,
      stagger: 0.2,
    });
    tl.from(headertext2.chars, {
      duration: 0.5,
      y: 20,
      opacity: 0,
      stagger: 0.2,
    });
    tl.from(contactRef.current, {
      duration: 0.5,
      scale: 0,
      opacity: 0,
    });
  });
  return (
    <main className="h-[75vh] relative" ref={ctaRef}>
      <Image
        width={1000}
        height={1000}
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="banner-image"
        className="brightness-[0.5] w-full h-full object-cover object-bottom"
      />

      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-center space-y-4">
        <p className="text-zinc-200 mb-4">
          Contact Mystic Adventure for the best adventure of your life.
        </p>
        <h2 className="cta font-palker uppercase md:text-[5vw] text-4xl whitespace-nowrap tracking-wide leading-[1.1] inline-block ">
          Find Your Trail,
        </h2>
        <h2 className="cta2 font-palker uppercase md:text-[5vw] text-4xl whitespace-nowrap tracking-wide leading-[1.1] inline-block ">
          Start Your Journey!
        </h2>

        <div ref={contactRef}>
          <Link
            href="contact_us"
            className="cursor-pointer mx-auto mt-4 w-[8rem] hover:w-[10rem] hover:h-[10rem] duration-300  hover:font-semibold text-primary-50 whitespace-nowrap h-[8rem] p-1 border  border-primary-100 rounded-full flex justify-center items-center text-wrap text-center   text-sm"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Cta;

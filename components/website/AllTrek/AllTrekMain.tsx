"use client"
import React from "react";
import AllTrekHero from "./AllTrekHero";
import AllTrek from "./AllTrek";
import Leaf from "./leaf";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {};

function AllTrekMain({ region }: any) {
  useGSAP(() => {
    gsap.from(".all-trek-main-container", {
      opacity: 0,
      duration: 1,
      ease: "linear",
    });
  });
  return (
    <div className="all-trek-main-container">
     
      <div className="relative">
        <AllTrekHero region={region} />
      </div>
      <div className="w-11/12 relative z-50 md:w-10/12 mx-auto">
        <AllTrek region={region} />
      </div>
    </div>
  );
}

export default AllTrekMain;

import Image from "next/image";
import React from "react";
import CertificatesHero from "./CertificatesHero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {};
gsap.registerPlugin(ScrollTrigger);
export default function CertificatesMain({}: Props) {
  useGSAP(() => {
    CertificatesData.forEach((item, index) => {
      gsap.from(`.desc-${index}`, {
        rotate: index % 2 === 0 ? "-20deg" : "20deg",
        opacity: 0,
        duration: 1.5,
        x: index % 2 === 0 ? "-100px" : "100px",
        scrollTrigger: {
          trigger: `.desc-${index}`,
          // markers: true,
          start: "top 90%",
          end: "50% 50%",
          scrub: 1,
        },
      });

      gsap.from(`.image-${index}`, {
        rotate: index % 2 === 0 ? "20deg" : "-20deg",
        opacity: 0,
        duration: 1.5,
        x: index % 2 === 0 ? "100px" : "-100px",
        scrollTrigger: {
          trigger: `.image-${index}`,
          // markers: true,
          start: "top 90%",
          end: "50% 50%",
          scrub: 1,
        },
      });
    });
  });
  return (
    <>
      <div className="w-full">
        <CertificatesHero />
      </div>
      <div
        className="w-10/12 mx-auto
     py-[5rem] flex flex-col gap-10 justify-center items-center relative"
      >
        {CertificatesData.map((item, index) => {
          const isOddIndex = index % 2 !== 0;
          return (
            <div
              key={index}
              className={`w-full  gap-5 flex md:flex-row flex-col justify-center items-center ${
                isOddIndex ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`${
                  isOddIndex ? "text-left" : "text-right"
                } md:w-[50%] desc-${index}  flex gap-2 flex-col`}
              >
                <span className="font-bold text-zinc-400 text-lg">
                  {item.num}
                </span>
                {/* title  */}
                <div
                  className={`flex flex-col justify-start  gap-2  ${
                    isOddIndex ? "items-start" : "items-end"
                  } `}
                >
                  <span className="text-2xl md:text-4xl font-semibold title">
                    {item.name}
                  </span>
                  <hr className="bg-secondary-500 w-[7rem] rounded-[110%] h-[3px]" />
                </div>
                <p className="text-[13px  mt-[1rem] text-secondary-400 font-medium">
                  {item.desc}
                </p>
              </div>
              <div
                className={`w-[50%] image-${index} flex justify-center items-center`}
              >
                <Image
                  width={1000}
                  height={1000}
                  src="https://images.unsplash.com/photo-1568137224279-f19f0f825447?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="ghoriwalamart-aboutus"
                  className={`w-[50%] h-[50%]  object-cover ${
                    isOddIndex ? "-rotate-12" : "rotate-12"
                  } scale-[1.05] cursor-pointer hover:scale-100 duration-200 object-center`}
                ></Image>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

const CertificatesData = [
  {
    num: "01",
    name: "Sustainable Tourism Award",
    img: "",
    desc: "Recognized for our commitment to sustainable and eco-friendly tourism practices. Our treks aim to minimize environmental impact and promote conservation efforts in the regions we explore.",
  },
  {
    num: "02",
    name: "Best Adventure Travel Company",
    img: "",
    desc: "Awarded for our outstanding adventure travel experiences. Our team is dedicated to providing safe, thrilling, and unforgettable treks that cater to both novice and seasoned adventurers.",
  },
  {
    num: "03",
    name: "Excellence in Customer Service",
    img: "",
    desc: "Honored for our exceptional customer service. We strive to ensure every trekker has a seamless and enjoyable experience, from the initial booking to the end of their adventure.",
  },
  {
    num: "04",
    name: "Top Safety Standards Certification",
    img: "",
    desc: "Certified for our rigorous safety standards. Our guides are highly trained, and our equipment is meticulously maintained to ensure the highest level of safety on all our treks.",
  },
];

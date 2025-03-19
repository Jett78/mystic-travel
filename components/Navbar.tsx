"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "@/public/logo/logo-straight.svg";
import Logowhite from "@/public/logo/white-straight-logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PrimaryButton from "./shared/primary-button";
import MobileNav from "./layout/mobile-nav";
import {
  aboutLinks,
  activitiesLink,
  destinationsLinks,
  expeditionsLink,
  treksLink,
  usefulInfo,
} from "@/constants";

type Props = {};

function Navbar({}: Props) {
  const currentRoute = usePathname();
  const navContainerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentRoute]);

  useEffect(() => {
    setIsOpen(false);
  }, [currentRoute]);
  return (
    <div
      ref={navContainerRef}
      className={`${
        scrolled ? "bg-white shadow-sm" : "bg-transparent text-white"
      } ease-in-out duration-300 transition-all z-[900]  fixed w-full h-[4.5rem] `}
    >
      <div className="2xl:w-10/12 w-11/12 tracking-wide  mx-auto h-full  flex justify-between items-center gap-5">
        <Link href="/" className="font-bold text-2xl  tracking-wide ">
          {scrolled ? (
            <Image
              src={Logo}
              alt="trek-nepal-logo"
              className=" h-[4vh] w-fit object-fit object-center"
            />
          ) : (
            <Image
              src={Logowhite}
              alt="trek-nepal-logo"
              className=" h-[4vh] w-fit object-fit object-center"
            />
          )}
        </Link>
        {/*  nav links  */}
        <div className="xl:flex hidden items-center  gap-4">
          <div className="group relative">
            <div
              className={` flex gap-1 justify-center items-center cursor-pointer hover:text-primary-600 ${
                currentRoute.includes("/destinations")
                  ? "text-primary-600 font-semibold  duration-[0.5]"
                  : ""
              }`}
            >
              <span className="text-[0.9vw] font-medium">Destinations</span>
              <Icon
                icon="gridicons:dropdown"
                className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
              />
            </div>
            <ul className="absolute hidden group-hover:block duration-[0.5] top-[100%] left-[50%] translate-x-[-50%] whitespace-nowrap  bg-white shadow w-32 p-5">
              {destinationsLinks.map((trek) => (
                <li key={trek.href} className="py-1">
                  <Link href={trek.href}>
                    <div className="border-b border-primary-100 text-secondary-500 text-[13px] font-semibold hover:text-primary-600 cursor-pointer">
                      {trek.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative">
            <div
              className={` flex gap-1 justify-center items-center cursor-pointer hover:text-primary-600 ${
                currentRoute.includes("/info")
                  ? "text-primary-600 font-semibold  duration-[0.5]"
                  : ""
              }`}
            >
              <span className="text-[0.9vw] font-medium">Trekking</span>
              <Icon
                icon="gridicons:dropdown"
                className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
              />
            </div>
            <ul className="absolute hidden group-hover:block duration-[0.5] top-[100%] left-[50%] translate-x-[-50%] whitespace-nowrap  bg-white shadow p-5">
              {treksLink.map((trek) => (
                <li key={trek.href} className="py-1">
                  <Link href={trek.href}>
                    <div className="border-b border-primary-100 text-secondary-500 text-[13px] font-semibold hover:text-primary-600 cursor-pointer">
                      {trek.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* expedition  */}
          <div className="group relative">
            <div
              className={` flex gap-1 justify-center items-center cursor-pointer hover:text-primary-600 ${
                currentRoute.includes("/expedition")
                  ? "text-primary-600 font-semibold  duration-[0.5]"
                  : ""
              }`}
            >
              <span className="text-[0.9vw] font-medium">Expedition</span>
              <Icon
                icon="gridicons:dropdown"
                className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
              />
            </div>
            <ul className="absolute hidden group-hover:block duration-[0.5] top-[100%] left-[50%] translate-x-[-50%] whitespace-nowrap bg-white shadow p-5">
              {expeditionsLink.map((expedition) => (
                <li key={expedition.href} className="py-1">
                  <Link href={expedition.href}>
                    <div className="border-b border-primary-100 text-secondary-500 hover:text-primary-600 text-[13px] font-semibold  cursor-pointer">
                      {expedition.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* other activities  */}
          <div className="group relative">
            <div
              className={` flex gap-1 justify-center items-center cursor-pointer hover:text-primary-600 ${
                currentRoute.includes("/other_activities")
                  ? "text-primary-600   duration-[0.5]"
                  : ""
              }`}
            >
              <span className="text-[0.9vw] font-medium">Other Activities</span>
              <Icon
                icon="gridicons:dropdown"
                className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
              />
            </div>
            <ul className="absolute hidden group-hover:block duration-[0.5] top-[100%] left-[50%] translate-x-[-50%] whitespace-nowrap bg-white shadow p-5">
              {activitiesLink.map((activity) => (
                <li key={activity.href} className="py-1">
                  <Link href={activity.href}>
                    <div className="border-b border-primary-100 text-secondary-500 text-[13px] font-semibold uppercase hover:text-primary-600 cursor-pointer">
                      {activity.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="group relative ">
            <div
              className={` flex gap-1 justify-center items-center cursor-pointer hover:text-primary-600 ${
                currentRoute.includes("/about_us")
                  ? "text-primary-600 font-semibold  duration-[0.5]"
                  : ""
              }`}
            >
              <span className="text-[0.9vw] font-medium">About us</span>
              <Icon
                icon="gridicons:dropdown"
                className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
              />
            </div>
            <ul className="absolute hidden group-hover:block duration-[0.5] top-[100%] left-[50%] translate-x-[-50%] whitespace-nowrap  bg-white shadow p-5">
              {aboutLinks.map((trek) => (
                <li key={trek.href} className="py-1">
                  <Link href={trek.href}>
                    <div className="border-b border-primary-100 text-secondary-500 text-[13px] font-semibold hover:text-primary-600 cursor-pointer">
                      {trek.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative ">
            <div
              className={` flex gap-1 justify-center items-center cursor-pointer hover:text-primary-600 ${
                currentRoute.includes("/trekking_info")
                  ? "text-primary-600 font-semibold  duration-[0.5]"
                  : ""
              }`}
            >
              <span className="text-[0.9vw] font-medium">Useful info</span>
              <Icon
                icon="gridicons:dropdown"
                className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
              />
            </div>
            <ul className="absolute hidden group-hover:block duration-[0.5] top-[100%] left-[50%] translate-x-[-50%] whitespace-nowrap  bg-white shadow p-5">
              {usefulInfo.map((info) => (
                <li key={info.href} className="py-1">
                  <Link href={info.href}>
                    <div className="border-b border-primary-100 text-secondary-500 text-[13px] font-semibold hover:text-primary-600 cursor-pointer">
                      {info.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/blogs" className="text-[0.9vw] font-medium">
            Blogs
          </Link>

          {/* CONTACT US  */}

          <PrimaryButton
            title="Contact us"
            path="/contact_us"
            className="md:px-4"
          />
        </div>

        <div className="xl:hidden block" onClick={() => setIsOpen(!isOpen)}>
          <Icon icon="quill:hamburger" width="32" height="32" />
        </div>

        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } ease-in-out duration-500 h-screen xl:hidden fixed top-0 bg-white z-[2] p-4 left-0 w-full `}
        >
          <div className="flex justify-between">
            <Image
              src={Logo}
              alt="logo"
              width={1000}
              height={1000}
              className=" h-[4vh] w-fit object-fit object-center"
            />
            <div className="text-red-500" onClick={() => setIsOpen(!isOpen)}>
              <Icon icon="iconoir:cancel" width="32" height="32" />
            </div>
          </div>

          <MobileNav />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

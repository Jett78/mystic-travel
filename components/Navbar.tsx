"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Ham from "@/public/hamburger.png";
import Logo from "@/public/logo/logo-straight.svg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { usePathname } from "next/navigation";
import PrimaryButton from "./shared/primary-button";

type Props = {};

const sideNavLinks = [
  { title: "Home", href: "" },
  { title: "Trekking", href: "" },
  { title: "Expedition", href: "" },
  { title: "Other activities", href: "" },
  { title: "Expeditions", href: "" },
  { title: "Blogs", href: "" },
  { title: "Contact us", href: "" },
];

function Navbar({}: Props) {
  const currentRoute = usePathname();
  const navContainerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const sideNavRef = useRef(null);
  const [sideNav, setSideNav] = useState(false);
  const [sideLinks, setSideLinks] = useState(false);

  const { contextSafe } = useGSAP();
  const handleOpenNav = contextSafe(() => {
    if (!sideNav) {
      gsap.to(sideNavRef.current, { right: 0 });
      gsap.to(".links", { opacity: 1, duration: 1 });
      setSideNav(true);
    }
    if (sideNav) {
      gsap.to(sideNavRef.current, { right: "-100%" });
      gsap.to(".links", { opacity: 0, duration: 1 });
      setSideNav(false);
    }
  });

  const handleLink = (index: number) => {
    if (!sideLinks) {
      gsap.to(`openlinks-${index}`, { height: "20vh" });
      setSideLinks(true);
    }
    if (sideLinks) {
      gsap.to(`openlinks-${index}`, { height: "0vh" });
      setSideLinks(false);
    }
  };

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
  return (
    <div
      ref={navContainerRef}
      className={`${
        scrolled ? "bg-white shadow-sm" : "bg-transparent text-white"
      } ease-in-out duration-300 transition-all z-[900]  fixed w-full h-[4.5rem] `}
    >
      {/* mobile nav  */}
      <div
        ref={sideNavRef}
        className="absolute  md:hidden w-[100vw] flex justify-center items-center top-0 right-[-100%]  h-[100vh] mx-auto bg-secondary-50  py-2"
      >
        <div className="w-11/12 mx-auto  grid grid-cols-1  gap-5 place-content-center pt-[5rem] text-start h-full place-items-start  flex-col justify-center items-center">
          {sideNavLinks.map((link, index) => (
            <>
              <Link
                onClick={() => handleLink(index)}
                key={index}
                className="w-full"
                href={link.href}
              >
                <div className="title  links text-lg border-b mb-1 opacity-0 font-medium tracking-wide w-full flex justify-between items-center">
                  {link.title} <span></span> <span></span>
                </div>
                <div
                  className={`w-full  openlinks-${index} bg-green-200 h-0`}
                ></div>
              </Link>
            </>
          ))}
        </div>
      </div>

      <div className="w-11/12 md:hidden   relative  tracking-wide  mx-auto h-full flex  justify-between items-center gap-5">
        {/* LOGO  */}
        <Link href="/" className="cursor-pointer">
          <Image
            src={Logo}
            alt="trek-nepal-logo"
            className="w-[6rem] h-[3rem] object-fit object-center"
          />
          )
        </Link>
        <div onClick={handleOpenNav} className="">
          {sideNav === false ? (
            <Image
              width={500}
              height={500}
              src={Ham}
              alt="ham"
              className="w-[2rem]  h-[1rem] object-fit object-center pr-1"
            />
          ) : (
            <Icon
              icon="material-symbols:close"
              className="w-[2rem]  h-[2rem] object-fit object-center pr-1"
            />
          )}
        </div>
      </div>

      <div className="w-10/12 tracking-wide  mx-auto h-full hidden md:flex justify-between items-center gap-5">
        <Link href="/" className="font-bold text-2xl  tracking-wide ">
          <Image
            src={Logo}
            alt="trek-nepal-logo"
            className=" h-[4vh] w-fit object-fit object-center"
          />
        </Link>
        {/*  nav links  */}
        <div className="flex items-center  gap-6">
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
                currentRoute.includes("/trek")
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

          <div className="group relative">
            <div
              className={` flex gap-1 justify-center items-center cursor-pointer hover:text-primary-600 ${
                currentRoute.includes("/trek")
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
                currentRoute.includes("/trek")
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

          <Link href="/blogs" className="text-[0.9vw] font-medium">
            Blogs
          </Link>

          {/* CONTACT US  */}
          <Link
            href="/contact_us"
            className={`group relative ${
              currentRoute.includes("/blogs")
                ? "text-primary-600   duration-[0.5]"
                : ""
            }`}
          >
            <PrimaryButton title="contact" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
];

const aboutLinks = [
  { name: "Company", href: "/about_us" },
  { name: "Our team", href: "/our_team" },
  { name: "Certificates", href: "/certificates" },
];

const usefulInfo = [
  { name: "Visa Info", href: "/visa_info" },
  { name: "Travel Info", href: "/travel_info" },
  { name: "General Info", href: "/general_info" },
];
const destinationsLinks = [
  { name: "Nepal", href: "/nepal/everest_region" },
  { name: "India", href: "/india/city_tours" },
  { name: "Bhutan", href: "/bhutan/city_tours" },
  { name: "Tibet", href: "/tibet/city_tours" },
];

const activitiesLink = [
  { name: "Rafting", href: "/other_activities/rafting" },
  { name: "Heli Tour", href: "/other_activities/heli_tour" },
  { name: "Paragliding", href: "/other_activities/paragliding" },
  { name: "Mountain Biking", href: "/other_activities/mountain_biking" },
  { name: "Rock Climbing", href: "/other_activities/rock_climbing" },
];

const expeditionsLink = [
  { name: "8000 meters", href: "/expedition/8000m" },
  { name: "7000 meters", href: "/expedition/7000m" },
  { name: "6000 meters", href: "/expedition/6000m" },
  { name: "5000 meters", href: "/expedition/5000m" },
];

const treksLink = [
  { name: "Everest Region Trekking", href: "/trek/everest_region_trekking" },
  {
    name: "Annapurna Region Trekking",
    href: "/trek/annapurna_region_trekking",
  },
];

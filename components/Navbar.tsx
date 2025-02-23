"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Ham from "@/public/hamburger.png";
import Logo from "@/public/Trivision-blacktext.svg";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";

import { usePathname } from "next/navigation";

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

  // open animation
  const navContainerRef = useRef(null);
  // useGSAP(() => {
  //   gsap.from(navContainerRef.current, {
  //     height: 0,
  //     transformOrigin: "top",
  //     duration: 0.5,
  //     ease: "power4.out",
  //   });
  // });

  return (
    <div
      ref={navContainerRef}
      className={`fixed z-[100] nav-container  ${
        currentRoute === "/" ? "hidden" : "block"
      }  text-secondary-500 top-0 bg-secondary-50 left-0 w-full h-[4.5rem] `}
    >
      {/* mobile nav  */}
      <div
        ref={sideNavRef}
        className="absolute  md:hidden w-[100vw] flex justify-center items-center top-0 right-[-100%]  h-[100vh] mx-auto bg-secondary-50 text-secondary-500 py-2"
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
      {/* LOGO  */}
      <div className="w-11/12 md:hidden  text-secondary-500 relative  tracking-wide  mx-auto h-full flex  justify-between items-center gap-5">
        {/* LOGO  */}
        <Link href="/" className="cursor-pointer">
          <Image
            src={Logo}
            alt="trek-nepal-logo"
            className="w-[6rem] h-[3rem] object-fit object-center"
          ></Image>
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
      <div className="w-10/12  text-secondary-500    tracking-wide  mx-auto h-full hidden md:flex justify-between items-center gap-5">
        {/*  nav links  */}
        <div className="flex gap-5 text-[14px] font-semibold">
          {companyLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.href === currentRoute
                  ? "text-primary-600     duration-[0.5]"
                  : "text-secondary-500 hover:text-primary-600"
              }
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* LOGO  */}
        <Link
          href="/home"
          className="font-bold text-2xl  tracking-wide absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"
        >
          <Image
            src={Logo}
            alt="trek-nepal-logo"
            className="w-[8rem] h-[3rem] object-fit object-center"
          ></Image>
        </Link>
        <div className="flex gap-5  text-[14px] font-semibold">
          <div className="group relative">
            <div
              className={` flex gap-1 justify-center items-center cursor-pointer hover:text-primary-600 ${
                currentRoute.includes("/trek")
                  ? "text-primary-600 font-semibold  duration-[0.5]"
                  : ""
              }`}
            >
              <span>Trekking</span>
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
              <span>Expedition</span>
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
              <span>Other Activities</span>
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

          {/* CONTACT US  */}
          <Link href="/contact_us" className="group relative">
            <span
              className={` hover:text-primary-600 ${
                currentRoute.includes("/contact_us")
                  ? "text-primary-600 font-semibold scale-110 duration-[0.5]"
                  : ""
              }`}
            >
              Contact us
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about_us" },
  { name: "Our team", href: "/our_team" },
  { name: "Blogs", href: "/blogs" },
  { name: "Certificates", href: "/certificates" },
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

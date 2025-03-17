"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "@/public/logo/logo-straight.svg";
import Logowhite from "@/public/logo/white-straight-logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PrimaryButton from "./shared/primary-button";

type Props = {};

function Navbar({}: Props) {
  const currentRoute = usePathname();
  const navContainerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isOpenDestinations, setIsOpenDestinations] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isOpenExpeditions, setIsOpenExpeditions] = useState(false);
  const [isOpenTrekking, setIsOpenTrekking] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isRotatedDestinations, setIsRotatedDestinations] = useState(false);
  const [isUsefulInfo, setIsUsefulInfo] = useState(false);
  const [isRotatedTrekking, setIsRotatedTrekking] = useState(false);
  const [isRotatedExpeditions, setIsRotatedExpeditions] = useState(false);
  const [isRotatedAbout, setIsRotatedAbout] = useState(false);

  const toggleDropdownDestinations = () => {
    setIsOpenDestinations(!isOpenDestinations);
    setIsRotatedDestinations(!isRotatedDestinations);
    setIsOpenInfo(false);
    setIsOpenExpeditions(false);
    setIsOpenTrekking(false);
    setIsUsefulInfo(false);
    setIsRotatedTrekking(false);
    setIsRotatedExpeditions(false);
  };
  const toggleDropdownUsefulInfo = () => {
    setIsOpenInfo(!isOpenInfo);
    setIsUsefulInfo(!isUsefulInfo);
    setIsOpenDestinations(false);
    setIsOpenExpeditions(false);
    setIsOpenTrekking(false);
    setIsRotatedDestinations(false);
    setIsRotatedTrekking(false);
    setIsRotatedExpeditions(false);
  };

  const toggleDropdownTrekking = () => {
    setIsRotatedTrekking(!isRotatedTrekking);
    setIsOpenTrekking(!isOpenTrekking);
    setIsOpenInfo(false);
    setIsOpenDestinations(false);
    setIsUsefulInfo(false);
    setIsRotatedDestinations(false);
    setIsRotatedExpeditions(false);
  };
  const toggleDropdownExpeditions = () => {
    setIsOpenExpeditions(!isOpenExpeditions);
    setIsRotatedExpeditions(!isRotatedExpeditions);
    setIsOpenInfo(false);
    setIsOpenTrekking(false);
    setIsOpenDestinations(false);
    setIsUsefulInfo(false);
    setIsRotatedTrekking(false);
    setIsRotatedDestinations(false);
  };
  const toggleDropdownAbout = () => {
    setIsOpenAbout(!isOpenAbout);
    setIsRotatedAbout(!isRotatedAbout);
    setIsOpenInfo(false);
    setIsOpenTrekking(false);
    setIsOpenDestinations(false);
    setIsUsefulInfo(false);
    setIsRotatedTrekking(false);
    setIsRotatedDestinations(false);
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
        <div className="xl:flex hidden items-center  gap-6">
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

        <div className="xl:hidden block" onClick={() => setIsOpen(!isOpen)}>
          <Icon icon="quill:hamburger" width="32" height="32" />
        </div>

        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } ease-in-out duration-500 h-screen fixed top-0 bg-white z-[2] p-4 left-0 w-full `}
        >
          <div className="flex justify-between">
            <Image
              src={Logo}
              alt="logo"
              width={1000}
              height={1000}
              className=" h-[5vh] w-fit object-fit object-center"
            />
            <div className="text-red-500" onClick={() => setIsOpen(!isOpen)}>
              <Icon icon="iconoir:cancel" width="32" height="32" />
            </div>
          </div>

          <nav className="text-black mt-12 space-y-4">
            <div className="border-b  pb-2">
              <div
                className="flex justify-between items-center"
                onClick={toggleDropdownDestinations}
              >
                <h2 className="cursor-pointer font-semibold text-md ">
                  Destinations
                </h2>

                <Icon
                  icon="formkit:down"
                  width="16"
                  height="7"
                  className={`h-8 w-8 transition-transform duration-500 ${
                    isRotatedDestinations ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  isOpenDestinations ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="pl-4 mt-2 text-[14px] font-medium flex flex-col">
                  {destinationsLinks.map((item, index) => {
                    return (
                      <Link href={item.href} key={index}>
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-b  pb-2">
              <div
                className="flex justify-between items-center"
                onClick={toggleDropdownUsefulInfo}
              >
                <h2 className="cursor-pointer font-semibold text-md ">
                  Useful Info
                </h2>

                <Icon
                  icon="formkit:down"
                  width="16"
                  height="7"
                  className={`h-8 w-8 transition-transform duration-500 ${
                    isUsefulInfo ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  isOpenInfo ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="pl-4 mt-2 text-[14px] font-medium flex flex-col">
                  {usefulInfo.map((item, index) => {
                    return (
                      <Link href={item.href} key={index}>
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-b  pb-2">
              <div
                className="flex justify-between items-center"
                onClick={toggleDropdownExpeditions}
              >
                <h2 className="cursor-pointer font-semibold text-md ">
                  Expeditions
                </h2>

                <Icon
                  icon="formkit:down"
                  width="16"
                  height="7"
                  className={`h-8 w-8 transition-transform duration-500 ${
                    isRotatedExpeditions ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  isOpenExpeditions ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="pl-4 mt-2 text-[14px] font-medium flex flex-col">
                  {expeditionsLink.map((item, index) => {
                    return (
                      <Link href={item.href} key={index}>
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-b  pb-2">
              <div
                className="flex justify-between items-center"
                onClick={toggleDropdownTrekking}
              >
                <h2 className="cursor-pointer font-semibold text-md ">
                  Trekking
                </h2>

                <Icon
                  icon="formkit:down"
                  width="16"
                  height="7"
                  className={`h-8 w-8 transition-transform duration-500 ${
                    isRotatedTrekking ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  isOpenTrekking ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="pl-4 mt-2 text-[14px] font-medium flex flex-col">
                  {treksLink.map((item, index) => {
                    return (
                      <Link href={item.href} key={index}>
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-b  pb-2">
              <div
                className="flex justify-between items-center"
                onClick={toggleDropdownAbout}
              >
                <h2 className="cursor-pointer font-semibold text-md ">
                  About Us
                </h2>

                <Icon
                  icon="formkit:down"
                  width="16"
                  height="7"
                  className={`h-8 w-8 transition-transform duration-500 ${
                    isRotatedAbout ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  isOpenAbout ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="pl-4 mt-2 text-[14px] font-medium flex flex-col">
                  {aboutLinks.map((item, index) => {
                    return (
                      <Link href={item.href} key={index}>
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link
              href="/contact_us"
              className={`group relative mt-4 ${
                currentRoute.includes("/blogs")
                  ? "text-primary-600   duration-[0.5]"
                  : ""
              }`}
            >
              <PrimaryButton
                title="contact us"
                className="px-12 py-2 text-md"
              />
            </Link>

            {/* <Link href="/blogs" className="py-4  w-full ">
              <span className="border-b py-4 w-full h-8 cursor-pointer font-semibold text-md">
                {" "}
                Blogs
              </span>
            </Link> */}
          </nav>
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
  { name: "Trekking Info", href: "/trekking_info" },
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

"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React, { useState } from "react";
import PrimaryButton from "../shared/primary-button";
import { usePathname } from "next/navigation";
import { aboutLinks, destinationsLinks, expeditionsLink, treksLink, usefulInfo } from "@/constants";

const MobileNav = () => {
  const currentRoute = usePathname();

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

  return (
    <div>
      {" "}
      <nav className="text-black md:mt-16 mt-12 md:space-y-6 space-y-2">
        <div className="border-b  py-2">
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

        <div className="border-b  py-2">
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

        <div className="border-b  py-2">
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

        <div className="border-b  py-2">
          <div
            className="flex justify-between items-center"
            onClick={toggleDropdownTrekking}
          >
            <h2 className="cursor-pointer font-semibold text-md ">Trekking</h2>

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

        <div className="border-b  py-2">
          <div
            className="flex justify-between items-center"
            onClick={toggleDropdownAbout}
          >
            <h2 className="cursor-pointer font-semibold text-md ">About Us</h2>

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

        <div className="border-b  py-2">
          <Link
            href="/blogs"
            className={`cursor-pointer font-semibold text-md ${
              currentRoute.includes("/blogs")
                ? "text-primary-600   duration-[0.5]"
                : ""
            }`}
          >
            Blogs
          </Link>
        </div>

        <div>
          <PrimaryButton
            title="contact us"
            path="/contact_us"
            className="px-6 py-3 text-md"
          />
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;

import { Icon } from "@iconify/react/dist/iconify.js";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type cardprops = {
  packageImg: string | StaticImageData;
  packageName: string;
  packageDesc: string;
  packageDay: string;
};

type cardinterface = {
  item: cardprops;
};

const Card = ({ item }: cardinterface) => {
  return (
    <div className="w-full rounded-md p-2 cursor-pointer group flex flex-col justify-start items-start gap-3 border hover:border-primary-600 hover:shadow-md">
      {/* img */}
      <figure className="overflow-hidden w-full max-h-[35vh] rounded-md">
        <Image
          width={1000}
          height={1000}
          src={item.packageImg}
          alt="banner-image"
          className="w-full h-full object-cover object-bottom ease-in-out duration-300 group-hover:scale-110"
        />
      </figure>
      {/* desc */}
      <div className="flex w-full flex-col gap-2">
        {/* title */}
        <span className="text-md title font-medium lg:text-[1.4vw] tracking-wider">
          {item.packageName}
        </span>
        {/* short intro */}
        <p className="text-sm hidden md:block font-medium text-secondary-400 line-clamp-2 my-2">
          {item.packageDesc}
        </p>
        {/* short intro */}
        <p className="text-xs md:hidden block font-medium text-secondary-400 line-clamp-2 my-2">
          {item.packageDesc}
        </p>

        <div className="flex justify-between gap-3 text-sm font-medium">
          <div className="flex gap-1 items-center">
            <Icon icon="la:mountain" className="text-primary-600" />
            <span>Expedition</span>
          </div>
          <div className="flex gap-1 items-center">
            <Icon
              icon="simple-line-icons:calender"
              className="text-primary-600"
            />
            <span>{item.packageDay}</span>
          </div>
        </div>
      </div>

      {/* price */}
      <div className="grid grid-cols-2 w-full gap-2">
        <Link
          href="/package_detail"
          className="px-6 py-2 border rounded-md flex justify-center items-center text-sm font-medium hover:bg-black hover:text-white ease-in-out duration-200  text-black "
        >
          view more
        </Link>

        <Link href="/booking">
          <button className="w-full rounded-md py-3 bg-primary-600 hover:bg-blue-500 ease-in-out duration-200 text-sm font-medium text-secondary-100">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

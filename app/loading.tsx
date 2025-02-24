import React from "react";
import LogoIcon from "@/public/logo/logo-white.svg";
import Image from "next/image";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="w-full h-screen flex  justify-center items-center">
      <div className="">
        <Image
          src={LogoIcon}
          alt="trek-nepal-logo-icon"
          className="logo-icon w-[3rem] h-[3rem] object-cover object-center"
        ></Image>
      </div>
    </div>
  );
}

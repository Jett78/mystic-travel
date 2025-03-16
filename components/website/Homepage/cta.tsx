import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <main className="h-[75vh] relative">
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
        <h2 className="font-palker uppercase md:text-[5vw] text-4xl whitespace-nowrap tracking-wide leading-[1.1]">
          Find Your Trail,
        </h2>
        <h2 className="font-palker uppercase md:text-[5vw] text-4xl whitespace-nowrap tracking-wide leading-[1.1]">
          Start Your Journey!
        </h2>

        <Link
          href="contact_us"
          className="cursor-pointer mx-auto mt-4 w-[8rem] hover:w-[10rem] hover:h-[10rem] duration-300  hover:font-semibold text-primary-50 whitespace-nowrap h-[8rem] p-1 border  border-primary-100 rounded-full flex justify-center items-center text-wrap text-center   text-sm"
        >
          <span>CONTACT US</span>
        </Link>
      </div>
    </main>
  );
};

export default Cta;

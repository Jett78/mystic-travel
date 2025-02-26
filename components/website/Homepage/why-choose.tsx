import PrimaryButton from "@/components/shared/primary-button";
import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <main className="grid grid-cols-2 gap-x-8 h-screen py-20">
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="grid gap-4 h-full w-full">
          {choosedata.slice(0, 2).map((item, index) => (
            <div key={index} className="relative">
              <Image
                src={item.img}
                alt="dummy-img"
                width={1000}
                height={1000}
                className="h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black via-black/50 to-transparent w-full" />
              <h2 className="absolute bottom-2 left-2 text-[1.4vw] text-white uppercase font-palker tracking-wide ">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
        <figure className="">
          {choosedata
            .filter((_, index) => index === 2)
            .map((item, index) => (
              <div key={index} className="relative">
                <Image
                  src={item.img}
                  alt="dummy-img"
                  width={1000}
                  height={1000}
                  className="h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 rounded-md  bg-gradient-to-t from-black via-black/50 to-transparent  w-full" />
                <h2 className="absolute bottom-2 left-2 text-[1.4vw] text-white uppercase font-palker tracking-wide ">
                  {item.title}
                </h2>
              </div>
            ))}
        </figure>
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <header className="col-span-2">
          <h1 className="text-[3.5vw] uppercase font-palker">
            Why <span className="text-primary-600">Choose</span>{" "}
          </h1>
          <h1 className="text-[3.5vw] uppercase font-palker whitespace-nowrap">
            Mystic Adventure{" "}
          </h1>

          <div className="my-8 space-y-4 font-medium">
            <p>
              Mystic Nepal Adventure (P.).Ltd is an independently owned and
              officially authorized full-service tour operator based in
              Kathmandu, Nepal. Our team comprises of highly experienced members
              each of whom has served at least a decade in tourism related
              activities.
            </p>
            <p>
              {" "}
              Although the company was established relatively recently, in 2002,
              we offer a very high standard of personalized service. My Nepal
              Tours is licensed with the Ministry of Tourism of Nepal and
              authorized to organize tours in Nepal, Tibet, Bhutan and India. We
              are affiliated to various travel related bodies of Nepal including
              the major ones such as TAAN, NTB and KEEP.
            </p>
          </div>

          <PrimaryButton title="About Us" />
        </header>

        <figure>
          {choosedata
            .filter((_, index) => index === 3)
            .map((item, index) => (
              <div key={index} className="relative">
                <Image
                  src={item.img}
                  alt="dummy-img"
                  width={1000}
                  height={1000}
                  className="h-[20vh] object-cover rounded-md"
                />
                <div className="absolute inset-0 rounded-md bg-gradient-to-t from-black via-black/50 to-transparent w-full" />
                <h2 className="absolute bottom-2 left-2 text-[1.1vw] text-white uppercase font-palker tracking-wide ">
                  {item.title}
                </h2>
              </div>
            ))}
        </figure>
      </div>
    </main>
  );
};

export default WhyChoose;

const choosedata = [
  {
    title: "Affordable Prices",
    img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW5zfGVufDB8fDB8fHww",
  },
  {
    title: "Wildlife Encounters",
    img: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FmYXJpfGVufDB8fDB8fHww",
  },
  {
    title: "Exclusive Access",
    img: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8fDB8fHww",
  },
  {
    title: "Remote Locations",
    img: "https://images.unsplash.com/photo-1494363939151-b6875454fe2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJ1cmFsJTIwdmlsbGxhZ2VzfGVufDB8fDB8fHww",
  },
];

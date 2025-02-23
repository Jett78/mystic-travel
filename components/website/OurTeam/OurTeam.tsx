import Image from "next/image";
import React from "react";
import Team1 from "@/public/Team/team1.avif";
import Team2 from "@/public/Team/team2.avif";
import Team3 from "@/public/Team/team3.avif";
import Team4 from "@/public/Team/team4.avif";
import Team5 from "@/public/Team/team5.avif";
import Team6 from "@/public/Team/team6.avif";

type Props = {};

export default function OurTeam({}: Props) {
  return (
    <div className="pb-[5rem] w-full">
      <div className="w-full md:w-[70%] pb-[5rem] mx-auto flex flex-col gap-5">
        <h1 className="text-3xl md:text-6xl text-center relative tracking-wide mt-10 title font-bold text-secondary-500">
          MADE FOR CLIMBERS
        </h1>
        <div className="flex md:flex-row flex-col w-full gap-5">
          {/* left  */}
          <div className="w-full md:w-[50%] flex flex-col gap-2">
            <span className="tex-lg text-secondary-400">Our team</span>
            <span className="text-4xl font-medium uppercase">
              Creating the deltaboard has been our team
            </span>
          </div>
          {/* RIGHT  */}
          <div className="flex w-full md:w-[70%] flex-col gap-5">
            <div>
              <span className="text-sm font-bold">title</span>
              <p className="text-secondary-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi
                vitae ad illo dolore ipsum distinctio consequuntur quis natus
                quidem. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quasi dolores exercitationem perferendis magni? Ut quod
                culpa, saepe magni laborum omnis ratione officia veniam sit
                labore! Alias incidunt enim aut voluptatum!
              </p>
            </div>
            <div>
              <span className="text-sm font-bold">title</span>
              <p className="text-secondary-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo adipisci recusandae reprehenderit at facilis quaerat,
                necessitatibus facere nobis delectus quas deserunt vel illo
                doloribus nam consequatur. Vero, voluptatem neque consectetur
                maiores debitis adipisci minima alias. Saepe, dolor quis. Unde
                nihil ratione doloribus culpa magni ea sit perspiciatis soluta
                quisquam. Accusamus! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. At modi vitae ad illo dolore ipsum distinctio
                consequuntur quis natus quidem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full md:w-[90%] mx-auto md:gap-3 gap-10 grid-cols-1 md:grid-cols-3">
        {TeamData.map((teamMember, index) => (
          <div
            key={teamMember.id}
            className={`flex flex-col ${
              index % 3 === 1 ? "md:mt-[20%]" : ""
            } gap-1`}
          >
            <div className="w-full justify-between flex px-2">
              <span className="font-sm uppercase tracking-wide title">{teamMember.name}</span>
              <span className="text-[14px] italic   text-secondary-500">{teamMember.role}</span>
            </div>
            <div className="relative group h-[50vh] cursor-pointer">
              <div className="absolute md:group-hover:opacity-[0.5] duration-300  top-0  opacity-0 left-0 w-full h-[50vh] bg-black"></div>
              <div className="absolute bottom-[5%] opacity-0  duration-300 md:group-hover:opacity-[1] left-0 w-full px-5 text-secondary-50">
                <p>{teamMember.desc}</p>
              </div>
              <Image
                width={1000}
                height={1000}
                src={teamMember.img}
                alt="banner-image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const TeamData = [
  {
    id: 1,
    name: "Jane Doe",
    img:Team1,
    role: "Founder & CEO",
    desc: "Visionary leader dedicated to creating unforgettable outdoor adventures and experiences for travelers worldwide.",
  },
  {
    id: 2,
    name: "John Smith",
    img:Team2,
    role: "Chief Operating Officer (COO)",
    desc: "Oversees day-to-day operations and ensures seamless delivery of travel services and experiences.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    img:Team3,
    role: "Head of Customer Experience",
    desc: "Ensures exceptional customer satisfaction and personalized service throughout travelers' journeys.",
  },
  {
    id: 4,
    name: "Michael Brown",
    img:Team4,
    role: "Travel Consultant",
    desc: "Expert in crafting bespoke travel itineraries tailored to each traveler's preferences and interests.",
  },
  {
    id: 5,
    name: "Sarah Lee",
    img:Team5,
    role: "Marketing Manager",
    desc: "Develops and executes marketing strategies to promote Trivision's unique adventure travel offerings.",
  },
  {
    id: 6,
    name: "John Doe",
    img:Team6,
    role: "Team Member",
    desc: "Key contributor to various projects, bringing expertise and dedication to the team.",
  },
];

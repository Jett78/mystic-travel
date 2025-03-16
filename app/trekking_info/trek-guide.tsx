import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Image from "next/image";
import React from "react";

const TrekGuide = () => {
  return (
    <div className="grid grid-cols-3 gap-8 my-8">
      {trekguidedata.map((item, index) => (
        <div key={index}>
          <DirectionAwareHover imageUrl={item.img}>
            <p className="font-bold text-xl">{item.title}</p>
            <p className="font-normal text-sm">{item.designation}</p>
          </DirectionAwareHover>
        </div>
      ))}
    </div>
  );
};

export default TrekGuide;

const trekguidedata = [
  {
    title: "John Doe",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Trekking Guide",
  },
  {
    title: "John Doe",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Trekking Guide",
  },
  {
    title: "John Doe",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Trekking Guide",
  },
  {
    title: "John Doe",
    img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Trekking Guide",
  },
  {
    title: "John Doe",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Trekking Guide",
  },
];

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white h-screen relative border-t-2 border-dashed">
      <h1 className="font-palker uppercase text-[8vw] tracking-wider text-center">
        Mystic<span className="text-primary-600">Nepal</span>Adventure
      </h1>

      <div className="grid grid-cols-2 my-10">
        <div className="flex flex-col justify-center items-center space-y-6">
          <h1 className="font-palker tracking-wide text-[1.6vw] ">
            Our Affiliations
          </h1>
          <div className="flex items-center justify-center gap-6">
            {affiliations.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.img}
                  alt="affiliation"
                  width={200}
                  height={200}
                  className="h-16 w-16 rounded-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-6">
          <h1 className="font-palker tracking-wide text-[1.6vw] ">We Accept</h1>
          <Image
            src="https://mysticnepaladventure.com/wp-content/uploads/2024/12/payment.webp"
            alt="affiliation"
            width={200}
            height={200}
            className="h-20 w-40  object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 w-11/12 mx-autoPwhu ">
        <div>
          <h2>Contact</h2>
        </div>
        <div>
          <h2>Trekking Info</h2>
        </div>
        <div>
          <h2>Activities</h2>
        </div>
        <div>
          <h2>Useful Links</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const affiliations = [
  {
    img: "https://mysticnepaladventure.com/wp-content/uploads/2024/12/3ntb-e1709226116506.png",
  },
  {
    img: "https://mysticnepaladventure.com/wp-content/uploads/2024/12/4gon-e1709226141671.png",
  },
  {
    img: "https://mysticnepaladventure.com/wp-content/uploads/2024/12/1taan-e1709226064139.png",
  },
  {
    img: "https://mysticnepaladventure.com/wp-content/uploads/2024/12/2nma-e1709226090814.png",
  },
  {
    img: "https://mysticnepaladventure.com/wp-content/uploads/2024/12/himalayan-rescue.jpg",
  },
];

const activities = [
  {
    title: "Trekking",
  },
  {
    title: "Hiking",
  },
  {
    title: "Peak Climbing",
  },
  {
    title: "Expeditions",
  },
  {
    title: "Rafting",
  },
  {
    title: "Tours",
  },
  {
    title: "Adventure",
  },
];

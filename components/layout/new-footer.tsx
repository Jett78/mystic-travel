import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <h2 className=" font-bold md:mb-8 mb-4">
      {title}
      <hr className="h-[3px] w-8 bg-primary-600" />
    </h2>
  );
};

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-white  relative border-t-2 border-dashed">
      <Image
        src="/footer.png"
        alt="footer-img"
        width={1000}
        height={1000}
        className="w-full h-[45vh] object-cover absolute bottom-0 z-[0]"
      />
      <h1 className="font-palker uppercase text-[8vw] tracking-wider text-center">
        Mystic<span className="text-primary-600">Nepal</span>Adventure
      </h1>

      {/* major links */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 w-11/12 mx-auto border-t pt-8 relative z-[2]">
        <div>
          <PageTitle title="About Us" />
          <p className="font-medium text-zinc-800 text-sm mb-6">
            We are an independently owned and officially authorized full-service
            tour operator based in Kathmandu, Nepal.
          </p>
          <div className="space-x-4 flex ">
            {social.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.path}
                  className="font-medium text-sm text-zinc-800 hover:ml-2 ease-in-out duration-300 hover:text-primary-600"
                >
                  <Image src={item.img} alt="social" width={20} height={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <PageTitle title="Useful Info" />
          <div className="space-y-2">
            {usefulInfo.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href}
                  className="font-medium text-sm text-zinc-800 hover:ml-2 ease-in-out duration-300 hover:text-primary-600"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <PageTitle title="Activities" />
          <div className="space-y-2">
            {activities.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.path}
                  className="font-medium text-sm text-zinc-800 hover:ml-2 ease-in-out duration-300 hover:text-primary-600"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <PageTitle title="Contact Details" />
          <div className="space-y-2">
            {contactdetails.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <p className="text-xl">{item.icon}</p>
                <p className="font-medium text-sm text-zinc-800  ease-in-out duration-300 hover:text-primary-600 ">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center items-start space-y-6 pt-4">
            <h1 className="font-palker tracking-wide lg:text-[1.6vw] text-xl text-black">
              We Accept
            </h1>
            <Image
              src="https://mysticnepaladventure.com/wp-content/uploads/2024/12/payment.webp"
              alt="affiliation"
              width={200}
              height={200}
              className="h-10 w-40  object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-14  relative z-[2] w-11/12 mx-auto">
        <div className="flex flex-col  justify-start  items-start space-y-6">
          <h1 className="font-palker tracking-wide lg:text-[1.6vw] text-xl text-white">
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
                  className="md:h-16 md:w-16 h-10 w-10 rounded-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-11/12 relative z-[2] mx-auto py-6 flex flex-wrap gap-y-2 md:justify-between justify-center items-center font-medium text-white sm:text-sm text-xs">
        <p className="whitespace-nowrap ">
          © {date} Mystic Nepal Adventure. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          <p>Designed and Developed by</p>
          <Link href="https://www.webxnep.com/" target="_blank">
            <Image
              src="/logo/webx.svg"
              alt="webx"
              width={1000}
              height={1000}
              className="w-10 hover:scale-110 ease-in-out duration-300 cursor-pointer"
            />
          </Link>
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
    path: "/",
  },
  {
    title: "Hiking",
    path: "/",
  },
  {
    title: "Peak Climbing",
    path: "/",
  },
  {
    title: "Expeditions",
    path: "/",
  },
  {
    title: "Rafting",
    path: "/",
  },
  {
    title: "Tours",
    path: "/",
  },
  {
    title: "Adventure",
    path: "/",
  },
];

const usefulInfo = [
  { name: "Visa Info", href: "/visa_info" },
  { name: "Travel Info", href: "/travel_info" },
  { name: "General Info", href: "/general_info" },
];

const trekkinginfo = [
  {
    title: "Trek Guide",
    path: "/",
  },
  {
    title: "Time to Visit",
    path: "/",
  },
  {
    title: "Best Season",
    path: "/",
  },
  {
    title: "Gear List",
    path: "/",
  },
  {
    title: "Must Know",
    path: "/",
  },
  {
    title: "FAQ",
    path: "/",
  },
  {
    title: "Latest articles",
    path: "/",
  },
];

const contactdetails = [
  {
    title: "985-1073427",
    icon: <Icon icon="fluent:call-20-regular" />,
  },
  {
    title: "Tarkeshwor - 02 Shantidham Marga Kathmandu",
    icon: <Icon icon="ion:location-outline" />,
  },
  {
    title: "mnatours@hotmail.cominfo /@mysticnepaladventure.com",
    icon: <Icon icon="mdi-light:email" />,
  },
];

const social = [
  {
    img: "/icons/facebook.png",
    path: "/",
  },
  {
    img: "/icons/insta.png",
    path: "/",
  },
  {
    img: "/icons/whatsapp.png",
    path: "/",
  },
  {
    img: "/icons/x.png",
    path: "/",
  },
];

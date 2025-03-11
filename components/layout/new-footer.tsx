import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <h2 className=" font-bold mb-8">
      {title}
      <hr className="h-[3px] w-8 bg-primary-600" />
    </h2>
  );
};

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-primary-600  relative border-t-2 border-dashed">
      <Image src="/footer.png" alt="footer-img" width={1000} height={1000} className="w-full absolute bottom-0 z-[0]"/> 
      <h1 className="font-palker uppercase text-[8vw] tracking-wider text-center">
        Mystic<span className="text-white">Nepal</span>Adventure
      </h1>

      <div className="grid grid-cols-2 my-10">
        <div className="flex flex-col border-r justify-center items-center space-y-6">
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
                  className="h-16 w-16 rounded-full object-cover"
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

      {/* major links */}
      <div className="grid grid-cols-5 gap-8 w-11/12 mx-auto border-t pt-4 relative z-[2]">
        <div>
          <PageTitle title="About Us" />
          <p className="font-medium text-white text-sm mb-6">
            We are an independently owned and officially authorized full-service
            tour operator based in Kathmandu, Nepal.
          </p>
          <div className="space-x-4 flex ">
            {social.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.path}
                  className="font-medium text-sm text-white hover:ml-2 ease-in-out duration-300 hover:text-primary-600"
                >
                  <Image src={item.img} alt="social" width={20} height={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <PageTitle title="Trekking Info" />
          <div className="space-y-2">
            {trekkinginfo.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.path}
                  className="font-medium text-sm text-white hover:ml-2 ease-in-out duration-300 hover:text-primary-600"
                >
                  {item.title}
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
                  className="font-medium text-sm text-white hover:ml-2 ease-in-out duration-300 hover:text-primary-600"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <PageTitle title="Useful Links" />
          <div className="space-y-2">
            {usefullinks.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.path}
                  className="font-medium text-sm text-white hover:ml-2 ease-in-out duration-300 hover:text-primary-600"
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
                <p className="font-medium text-sm text-white  ease-in-out duration-300 hover:text-primary-600 ">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-11/12 relative z-[2] mx-auto py-6 flex justify-between items-center font-medium text-white text-sm">
        <p>© {date} Mystic Nepal Adventure. All rights reserved.</p>

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

const usefullinks = [
  {
    title: "TIA",
    path: "/",
  },
  {
    title: "Nepal Visa Process",
    path: "/",
  },
  {
    title: "Ambassador Process",
    path: "/",
  },
  {
    title: "Time of visit",
    path: "/",
  },
  {
    title: "Contact Us",
    path: "/",
  },
  {
    title: "Book Now",
    path: "/",
  },
  {
    title: "Customize Trips",
    path: "/",
  },
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

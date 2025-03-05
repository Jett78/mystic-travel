import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ContactData = () => {
  return (
    <div className="grid grid-cols-3 gap-8 w-9/12 mx-auto my-20">
      {contactdata.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 border rounded-md bg-zinc-50 border-primary-600 border-dashed"
        >
          <span className="text-[3.5vw] text-primary-600">{item.icon}</span>
          <div className="text-center mt-4">
            <h1 className="font-semibold text-[1.5vw] tracking-wider font-palker mb-2 text-zinc-800">
              {item.title}
            </h1>
            <p className="font-medium text-sm">{item.desc}</p>
            <p className="font-medium text-sm">{item.desc2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactData;

const contactdata = [
  {
    title: "Address Line",
    desc: "Tarkeshwor - 02 Shantidham Marga Kathmandu Nepal",
    icon: <Icon icon="mdi:address-marker-outline" />,
  },
  {
    title: "Contact Number",
    desc: "+977-1-5913427",
    desc2: "985-1073427",
    icon: <Icon icon="fluent:call-24-regular" />,
  },
  {
    title: "Mailing Address",
    desc: "info@mysticnepaladventure.com",
    desc2: " mnatours@hotmail.com",
    icon: <Icon icon="famicons:mail-outline" />,
  },
];

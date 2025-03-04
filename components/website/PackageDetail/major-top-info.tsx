import Image from "next/image";
import React from "react";

const MajorTopInfo = ({ title, item }: { title: string; item: any }) => {
  return (
    <div className="w-full rounded-md bg-white z-[50] sticky top-16 py-4 ">
      <div className="p-4 rounded-md w-full h-full border  bg-zinc-50">
        <h1 className="font-palker uppercase">{title}</h1>
        <div className="grid grid-cols-4 gap-8 p-4">
          {item.map((data: any, index: number) => (
            <div key={index} className="flex gap-2">
              <Image
                src={data.img}
                alt="img"
                width={1000}
                height={1000}
                className="w-10"
              />
              <div className="border-l  pl-2">
                <h2 className="text-sm font-semibold">{data.title}</h2>
                <h2
                  className="font-medium text-xs text-primary-600
                           "
                >
                  {data.info}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MajorTopInfo;

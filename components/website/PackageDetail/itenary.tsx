import React from "react";

const Itenary = ({ item, index }: { item: any; index: number }) => {
  return (
    <div
      key={index}
      className="w-full  py-4 md:py-2  overflow-hidden    items-center flex flex-col justify-between px-3 md:px-10"
    >
      <div className="w-full h-[4rem] flex  justify-between items-center">
        <div className="flex gap-10 items-center">
          {/* day */}
          <div className="font-bold justify-center items-center min-w-[3rem] leading-none h-[3rem] rounded-full overflow-hidden  text-primary-400  border-primary-300 border   text-[12px] flex flex-col gap-1">
            <span>Day</span>
            <span>{item.day}</span>
          </div>
          {/* title */}
          <span className="text-sm font-medium">{item.title}</span>
        </div>
        {/* open */}
        <div className="relative w-[3rem] h-[3rem]   overflow-hidden cursor-pointer">
          <span className="absolute toggle1 bg-zinc-50 h-[2px] top-[50%] w-[15px] left-[50%] -translate-x-[50%] inline-block"></span>
          <span
            className={`absolute toggle2-${index} bg-zinc-50 h-[2px] top-[50%] rotate-90 w-[15px] left-[50%] -translate-x-[50%] inline-block`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Itenary;

"use client";
import InputLabel from "@/components/website/BookForm/input-label";
import Image from "next/image";
import React, { useState } from "react";
import CustomizeInput from "./customize-input";
import PrimaryButton from "@/components/shared/primary-button";

const CustomizeForm = () => {
  const [selectedMountain, setSelectedMountain] = useState("");

  const mountains = ["Expedition", "Trekking", "Activities"];
  return (
    <div className="md:w-10/12 w-11/12 mx-auto grid lg:grid-cols-2  gap-4 md:p-4 p-2 border border-primary-600 rounded-md my-20 ">
      <figure className="lg:block hidden">
        <Image
          src="https://images.unsplash.com/photo-1610715897403-6bd03a9002a9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={1000}
          height={1000}
          alt="img"
          className="h-[80vh] object-cover rounded-md"
        />
      </figure>
      <div>
        <form action="" className="space-y-4 w-full p-4">
          <div className="grid grid-cols-2 w-full gap-6">
            <div>
              <InputLabel label="Full Name" />
              <CustomizeInput placeholder="John Doe" />
            </div>
            <div>
              <InputLabel label="Email" />
              <CustomizeInput placeholder="John Doe" />
            </div>
          </div>

          <div className="grid grid-cols-2 w-full gap-6">
            <div>
              <InputLabel label="Contact Number" />
              <CustomizeInput placeholder="John Doe" />
            </div>
            <div>
              <InputLabel label="Country" />
              <CustomizeInput placeholder="John Doe" />
            </div>
          </div>
          <div className="grid grid-cols-2 w-full gap-6">
            <div>
              <InputLabel label="Arrival Date" />
              <CustomizeInput type="date" />
            </div>
            <div>
              <InputLabel label="Departure Date" />
              <CustomizeInput type="date" />
            </div>
          </div>
          <div className="grid grid-cols-2 w-full gap-6">
            <div className="flex flex-col">
              <InputLabel label="Category" />
              <select
                className="h-10 border mt-2 rounded px-4 w-full bg-gray-50 outline-none"
                value={selectedMountain}
                onChange={(e) => setSelectedMountain(e.target.value)}
              >
                {mountains.map((mountain) => (
                  <option key={mountain} value={mountain}>
                    {mountain}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <InputLabel label="Sub Category" />
              <select
                className="h-10 border mt-2 rounded px-4 w-full bg-gray-50 outline-none"
                value={selectedMountain}
                onChange={(e) => setSelectedMountain(e.target.value)}
              >
                {mountains.map((mountain) => (
                  <option key={mountain} value={mountain}>
                    {mountain}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <InputLabel label="Message" />
            <textarea
              name=""
              id=""
              rows={8}
              className=" border mt-2 rounded px-4 w-full bg-gray-50 outline-none"
            ></textarea>
          </div>

          <div className="flex justify-end">
            {" "}
            <PrimaryButton title="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomizeForm;

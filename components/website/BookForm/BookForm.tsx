"use client";
import FormBg from "@/public/Hero.jpg";
import Image from "next/image";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import toast, { Toaster } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import Payment from "./Payment";
import gsap from "gsap";
import Link from "next/link";
import { Icon } from "@iconify/react";

const BookForm = () => {
  const paymentContainerRef = useRef(null);
  const [openPayment, setOpenPayment] = useState(false);

  const notify = () => {
    document.body.classList.add("overflow-hidden");
    if (!openPayment) {
      gsap.to(paymentContainerRef.current, {
        opacity: 1,
        duration: 0.3, // Adjust duration as needed
      });
      setOpenPayment(true);
    }
  };

  const handleClose = () => {
    document.body.classList.remove("overflow-hidden");
    if (openPayment) {
      gsap.to(paymentContainerRef.current, {
        opacity: 0,
        duration: 0.3, // Adjust duration as needed
        onComplete: () => {
          setOpenPayment(false);
        },
      });
    }
  };

  const [startDate, setStartDate] = useState<any>(new Date());
  return (
    <>
      <div className="w-full h-full relative">
        <div
          ref={paymentContainerRef}
          className={`w-full h-screen fixed z-40 top-0 left-0  backdrop-blur-sm ${
            openPayment ? "" : "hidden"
          }`}
          style={{ opacity: 0 }}
        >
          <Payment handleClose={handleClose} />
        </div>

        <div className="w-11/12 mx-auto md:w-10/12 py-[6rem]">
          <Link href="/package_detail" className="w-full flex justify-start">
            <div className="text-zinc-700 z-40 hover:scale-105 duration-300 hover:text-zinc-800 flex  justify-center items-center">
              <div className="overflow-hidden title flex justify-center items-center">
                <Icon
                  icon="ic:outline-arrow-left"
                  className="w-[1.5rem] h-[1.5rem]"
                />
              </div>
              <div className="font-medium">Back</div>
            </div>
          </Link>
          <h1 className="text-3xl md:text-6xl mb-5 mt-5 text-center relative tracking-wide  title font-bold text-secondary-500 z-10">
            Make your booking
          </h1>
          <div className=" bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
              <div>
                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                  <div className="grid gap-5 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="w-full flex flex-col gap-5">
                      <div className="text-gray-600">
                        <p className="font-medium text-lg">
                          Everest base camp trek
                        </p>
                        <p>Please fill out all the fields.</p>
                      </div>
                      <Image
                        alt="FormBg"
                        src={FormBg}
                        className="h-full w-full object-cover object-center"
                      ></Image>
                    </div>

                    {/* right form  */}
                    <div className="lg:col-span-2 ">
                      <div className="text-sm  flex flex-col gap-5">
                        <div className="w-full flex gap-2">
                          <div className="w-full">
                            <label htmlFor="full_name">Full Name</label>
                            <input
                              type="text"
                              name="full_name"
                              id="full_name"
                              placeholder="John Doe"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              value=""
                            />
                          </div>

                          <div className="w-full">
                            <label htmlFor="email">Email Address</label>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              value=""
                              placeholder="email@domain.com"
                            />
                          </div>
                        </div>

                        <div className="w-full flex gap-3">
                          <div className="w-full">
                            <label htmlFor="email">Email Address</label>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              value=""
                              placeholder="email@domain.com"
                            />
                          </div>
                          <div className="w-full">
                            <label htmlFor="country">Country / region</label>
                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <input
                                name="country"
                                id="country"
                                placeholder="Country"
                                className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                value=""
                              />
                            </div>
                          </div>
                        </div>

                        <div className="w-full flex gap-3">
                          <div className="w-full">
                            <label htmlFor="email">Selected Expedition</label>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              value=""
                              placeholder="Everest base camp trek"
                            />
                          </div>
                          <div className="w-full">
                            <label
                              htmlFor="activity"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Expedition / Trekking / Activity
                            </label>
                            <div className="bg-gray-50 flex items-center  rounded mt-1 px-4 h-10">
                              <input
                                type="checkbox"
                                name="activity"
                                id="activity"
                                className="appearance-none h-2 w-2 border border-gray-300  rounded-full bg-white checked:bg-primary-400 checked:border-transparent focus:outline-none transition duration-200 align-middle mr-2 cursor-pointer"
                              />
                              <span className="text-gray-800">Expedition</span>
                            </div>
                          </div>
                        </div>

                        {/* date puckedr  */}

                        <div className="w-full flex gap-3 justify-center items-center">
                          <div className="w-full flex flex-col gap-1">
                            <label htmlFor="email">Arrival Date</label>
                            <DatePicker
                              className="border border-gray-200 p-2 rounded-md bg-gray-50 text-sm !w-full"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            ></DatePicker>
                          </div>
                          <div className="w-full flex flex-col gap-1">
                            <label
                              htmlFor="activity"
                              className="block  text-sm font-medium text-gray-900"
                            >
                              Final Departure Date
                            </label>

                            <DatePicker
                              className="border border-gray-200 p-2 rounded-md bg-gray-50 text-sm !w-full"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            ></DatePicker>
                          </div>
                        </div>

                        <div className="md:col-span-5 text-right">
                          <div className="inline-flex items-end">
                            <button
                              type="submit"
                              onClick={notify}
                              className="w-full cursor-pointer py-3 px-10 bg-gradient-to-r from-primary-600 to-primary-500 text-sm font-medium text-secondary-50"
                            >
                              Proceed
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookForm;

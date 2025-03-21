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
import InputField from "./input-field";
import InputLabel from "./input-label";

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

        <div className="w-11/12 mx-auto md:w-10/12 py-[2rem]">
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

          <div className="mt-4  flex items-center justify-center">
            <div className="container  mx-auto">
              <div>
                <div className="border rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                  <div className="grid gap-5 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div className="w-full flex flex-col gap-5">
                      <div className="text-gray-600">
                        <p>Please fill out all the fields.</p>
                      </div>
                      <Image
                        alt="FormBg"
                        src="https://images.unsplash.com/photo-1529733905113-027ed85d7e33?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={1000}
                        height={1000}
                        className="h-full w-full object-cover object-center rounded-md"
                      ></Image>
                    </div>

                    {/* right form  */}
                    <div className="lg:col-span-2 ">
                      <div className="text-sm  flex flex-col gap-6">
                        <div className="w-full flex gap-2">
                          <div className="w-full">
                            <InputLabel label="Full Name" />

                            <InputField
                              type="text"
                              name="full_name"
                              id="full_name"
                              placeholder="John Doe"
                            />
                          </div>

                          <div className="w-full">
                            <InputLabel label="Email Address" />

                            <InputField
                              type="text"
                              name="email"
                              id="email"
                              placeholder="email@domain.com"
                            />
                          </div>
                        </div>

                        <div className="w-full flex gap-3">
                          <div className="w-full">
                            <InputLabel label="Contact Number" />

                            <InputField
                              type="text"
                              name="email"
                              id="email"
                              placeholder="email@domain.com"
                            />
                          </div>

                          <div className="w-full">
                            <InputLabel label="Country / Region" />

                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-2">
                              <input
                                name="country"
                                id="country"
                                placeholder="Country"
                                className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="w-full flex gap-3">
                          <div className="w-full">
                            <InputLabel label="Selected Expedition" />

                            <InputField
                              type="text"
                              name="expedition"
                              id="expedition"
                              placeholder="Everest Base Camp"
                            />
                          </div>
                          <div className="w-full">
                            <InputLabel label="Expedition / Trekking / Activity" />

                            <div className="bg-gray-50 flex items-center  rounded mt-2 px-4 h-10">
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
                            <InputLabel label="Arrival Date" />
                            <DatePicker
                              className="border border-gray-200 p-2 rounded-md bg-gray-50 text-sm !w-full"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            ></DatePicker>
                          </div>
                          <div className="w-full flex flex-col gap-1">
                            <InputLabel label="Final Departure Date" />

                            <DatePicker
                              className="border border-gray-200 p-2 rounded-md bg-gray-50 text-sm !w-full"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            ></DatePicker>
                          </div>
                        </div>

                        <div>
                          <InputLabel label="Your message" />
                          <textarea
                            name=""
                            id=""
                            rows={8}
                            className=" border mt-2 rounded px-4 w-full bg-gray-50"
                          ></textarea>
                        </div>

                        <div className="md:col-span-5 text-right">
                          <div className="inline-flex items-end">
                            <button
                              type="submit"
                              onClick={notify}
                              className="w-full cursor-pointer py-3 px-10 bg-primary-600 rounded-md text-sm font-medium text-secondary-50"
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

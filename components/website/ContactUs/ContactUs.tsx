import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
type Props = {};

function ContactUs({}: Props) {
  return (
    <>
      <div className="w-full py-[5rem] relative mx-auto">
        <div className="w-11/12 md:w-[70%] relative bg-secondary-50 mx-auto grid shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  md:grid-cols-2">
          <form action="" className="w-full h-full flex flex-col  gap-5 md:p-10 p-5 py-10 md:py-10">
            <div className="">
              <span className="text-sm font-semibold text-secondary-400">
                CONTACT US
              </span>
              <h1 className="title text-5xl tracking-wide font-semibold">
                REACH OUT US
              </h1>
            </div>

            <div className="w-full flex h-full items-start flex-col gap-3">
              <input
                type="text"
                placeholder="name"
                className="w-full px-3 py-2 h-[3rem] text-sm font-semibold outline-none"
              />
              <input
                type="text"
                placeholder="email"
                className="w-full px-3 py-2 h-[3rem] text-sm font-semibold outline-none"
              />
              <textarea
                className="w-full px-3 py-2 h-[40%] text-sm font-semibold outline-none"
                name=""
                id=""
                placeholder="message"
              ></textarea>

              <button
                type="submit"
                className="flex text-sm font-medium justify-center items-center py-3.5 px-10  text-white bg-primary-600 shadow-md w-fit transition-all duration-500 mx-auto xl:mx-0 hover:bg-primary-400"
              >
                SUBMIT
              </button>
            </div>
          </form>

          {/* RIGHT  */}
          <div className="w-full relative flex justify-center items-center">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.3]"></div>
            <div className="absolute w-[90%] md:w-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white  mx-auto p-5 flex flex-col gap-3 items-start justify-center">
              <span className="w-full text-center title font-semibold tracking-wide">
                Trivision
              </span>
              <div className="w-full flex justify-center items-center flex-col gap-2">
                <div className="flex justify-center items-center gap-3">
                  <Icon
                    icon="ep:phone"
                    className="w-[1rem] h-[1rem] object-cover object-center text-secondary-400"
                  />
                  <span className="text-sm text-secondary-400">
                    +977 9844195433
                  </span>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <Icon
                    icon="wpf:message-outline"
                    className="w-[1rem] h-[1rem] object-cover object-center text-secondary-400"
                  />
                  <span className="text-sm text-secondary-400">
                    trekexp@gmail.com
                  </span>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <Icon
                    icon="grommet-icons:map-location"
                    className="w-[1rem] h-[1rem] object-cover object-center text-secondary-400"
                  />
                  <span className="text-sm text-secondary-400">
                    Kapan 3, Kathmandu
                  </span>
                </div>
              </div>
            </div>
            <Image
              width={1000}
              height={1000}
              src="https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="expedition-image"
              className="w-full h-[70vh] object-cover object-center"
            />
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.3694673569767!2d85.31530117618843!3d27.736748024192952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19db1ac7cfc1%3A0x3f3557a1377b8d05!2sCreative%20Website%20Design%20in%20Nepal%20-%20WebX%20Nepal!5e0!3m2!1sen!2snp!4v1718874818311!5m2!1sen!2snp"
        width="600"
        height="450"
        loading="lazy"
        className="w-11/12 md:w-10/12 mx-auto mb-[5rem]"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default ContactUs;

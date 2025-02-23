"use client";  
import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {};

function Blogs({}: Props) {
  return (
    <div>
      <div className="py-[5rem]">
        <div className="w-11/12 md:w-8/12 mx-auto space-y-6 sm:space-y-12">
          <div className="md:flex gap-3">
            <Link
              rel="noopener noreferrer"
              href="blog_detail"
              className="block gap-3 mx-auto group hover:scale-95 duration-200  hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] dark:bg-gray-50"
            >
              <div className="w-full object-cover  h-64  sm:h-96 lg:col-span-7    overflow-hidden  duration-200 ">
                <Image
                  width={1000}
                  height={1000}
                  src="https://images.unsplash.com/photo-1525811902-f2342640856e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover w-full  h-full group-hover:scale-105 duration-200"
                />
              </div>
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-xl font-medium tracking-wide sm:text-4xl group-hover:underline group-focus:underline title">
                  Noster tincidunt reprimique ad pro
                </h3>
                <span className="text-xs text-secondary-500 font-medium">
                  February 19, 2021
                </span>
                <p className="text-sm font-medium text-secondary-400">
                  Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                  in graece fuisset, eos affert putent doctus id.
                </p>
              </div>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="blog_detail"
              className="block max-w-sm gap-3 mx-auto gr sm:max-w-full group hover:scale-95 duration-200 hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] dark:bg-gray-50"
            >
              <div className="w-full object-cover  h-64  sm:h-96 lg:col-span-7    overflow-hidden  duration-200 ">
                <Image
                  width={1000}
                  height={1000}
                  src="https://images.unsplash.com/photo-1525811902-f2342640856e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover w-full  h-full group-hover:scale-105 duration-200  "
                />
              </div>
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-xl font-medium tracking-wide sm:text-4xl group-hover:underline group-focus:underline title">
                  Noster tincidunt reprimique ad pro
                </h3>
                <span className="text-xs text-secondary-500 font-medium">
                  February 19, 2021
                </span>
                <p className="text-sm font-medium text-secondary-400">
                  Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                  in graece fuisset, eos affert putent doctus id.
                </p>
              </div>
            </Link>
          </div>
          <div className="grid justify-center grid-cols-1 place-content-center items-center place-items-center gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {BlogData.map((item, index) => (
              <Link
                key={item.id}
                rel="noopener noreferrer"
                href="blog_detail"
                className={`w-full mx-auto group ${
                  index === 0 ? "col-span-2 h-full" : ""
                } relative hover:scale-95 duration-200 w-full hover:no-underline shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] focus:no-underline dark:bg-gray-50 ${
                  index > 1 ? "hidden sm:block" : ""
                }`}
              >
                <div className="w-full h-44   overflow-hidden">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    role="presentation"
                    className="object-cover w-full  h-full group-hover:scale-105  duration-200   "
                    src={item.imageSrc}
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-medium tracking-wide group-hover:underline group-focus:underline title">
                    {item.title}
                  </h3>
                  <span className="text-xs text-secondary-500 font-medium">
                    {item.date}
                  </span>
                  <p className="text-sm font-medium text-secondary-400">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          {/* <div className="flex justify-center">
            <button
              type="button"
              className="px-5 flex justify-center items-center bg-gradient-to-r from-primary-600 to-primary-500  py-3 text-sm  border  darks:bg-gray-50 text-secondary-50 font-medium"
            >
              Load more
              <Icon
                icon="mdi:arrow-down-drop"
                className="w-[1.5rem] h-[1.5rem] object-cover object-center text-zinc-50"
              />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Blogs;

const BlogData = [
  {
    id: 1,
    imageSrc:
      "https://images.unsplash.com/photo-1594495894542-a46cc73e081a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "In usu laoreet repudiare legendos",
    date: "January 21, 2021",
    description:
      "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
  },
  {
    id: 2,
    imageSrc:
      "https://images.unsplash.com/photo-1523506591153-1504ba186b3b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "In usu laoreet repudiare legendos",
    date: "January 22, 2021",
    description:
      "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
  },
  {
    id: 3,
    imageSrc:
      "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "In usu laoreet repudiare legendos",
    date: "January 23, 2021",
    description:
      "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
  },
  {
    id: 4,
    imageSrc:
      "https://images.unsplash.com/photo-1642933196504-62107dac9258?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?4",
    title: "In usu laoreet repudiare legendos",
    date: "January 24, 2021",
    description:
      "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
  },
  {
    id: 4,
    imageSrc:
      "https://images.unsplash.com/photo-1642933196504-62107dac9258?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?4",
    title: "In usu laoreet repudiare legendos",
    date: "January 24, 2021",
    description:
      "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
  },
];

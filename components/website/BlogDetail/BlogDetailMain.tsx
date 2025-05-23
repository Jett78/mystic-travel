"use client";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import RelatedBlogs from "./RelatedBlogs";
import Link from "next/link";
type Props = {};

export default function BlogDetailMain({}: Props) {
  return (
    <>
      <div className="w-11/12 relative md:w-11/12 mx-auto py-[5rem]">
        <Link href="/blogs" className="w-full flex justify-start">
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
        <div className="w-full flex flex-col gap-5 justify-start items-start">
          {/* title  */}
          <div className="w-full">
            <h1 className="text-3xl md:text-6xl w-full text-center relative tracking-wide mt-10 title font-bold text-secondary-500">
              BLOG TITLE
            </h1>
            {/* intro  */}
            <p className="md:w-[70%] w-full mx-auto text-secondary-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate quisquam corrupti dignissimos nisi eveniet fugiat nemo
              dolorem corporis cum. Deserunt rem tempora, doloremque animi
              asperiores consequatur perspiciatis delectus, quia vero
              dignissimos tenetur! Laborum quae quos sapiente placeat dolorem
              eaque molestiae.
            </p>
          </div>

          {/* image  */}
          <Image
            width={1000}
            height={1000}
            src="https://images.unsplash.com/photo-1517934274943-d1749ff2d7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="expedition-image"
            className="w-full h-[70vh] object-cover object-top"
          />

          {/* author, date  */}
          <div className="w-full md:w-[70%] mx-auto flex gap-5 justify-start items-center">
            {/* author  */}
            <div className="flex items-center gap-2">
              <Image
                width={1000}
                height={1000}
                src="https://images.unsplash.com/photo-1517934274943-d1749ff2d7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="expedition-image"
                className="size-[2rem] rounded-full object-cover object-top"
              />
              {/* name  */}
              <span className="flex gap-1 text-[12px]">
                <span>by</span>
                <span className="underline">Kiran Nepali</span>
              </span>
            </div>

            {/* date  */}
            <div className="flex items-center text-[12px] gap-2">
              <Icon icon="uil:calender" />
              {/* name  */}
              <span className="">20 June, 2025</span>
            </div>
          </div>

          {/* CONTENT  */}
          <div className="flex flex-col gap-4">
            {/* topic 1  */}
            <div className="flex w-full md:w-[70%] mx-auto flex-col gap-2">
              <h2 className="title font-medium tracking-wide text-lg italic">
                1. HERE IS THE TITLE
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur repellendus eum saepe iusto, distinctio asperiores
                rem quis cupiditate minus laborum magnam aliquam molestiae quos
                at esse deleniti explicabo voluptatem sequi itaque quam omnis
                rerum. Est adipisci magnam tempore vel ullam! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Laudantium ipsa ea
                maiores! Odit voluptatibus nisi explicabo aut? Veritatis
                reiciendis dolores mollitia et? Eos, eveniet earum quas rem iste
                delectus blanditiis, illo ut ullam sint quo hic. Minus minima
                repellendus perspiciatis.
              </p>
            </div>

            {/* topic 2  */}
            <div className="flex w-full md:w-[70%] mx-auto flex-col gap-2">
              <h2 className="title font-medium tracking-wide text-lg italic">
                2. HERE IS THE TITLE
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur repellendus eum saepe iusto, distinctio asperiores
                rem quis cupiditate minus laborum magnam aliquam molestiae quos
                at esse deleniti explicabo voluptatem sequi itaque quam omnis
                rerum. Est adipisci magnam tempore vel ullam! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Laudantium ipsa ea
                maiores! Odit voluptatibus nisi explicabo aut? Veritatis
                reiciendis dolores mollitia et? Eos, eveniet earum quas rem iste
                delectus blanditiis, illo ut ullam sint quo hic. Minus minima
                repellendus perspiciatis.
              </p>
            </div>

            {/* banner  */}
            <div className="w-full md:w-[70%] relative h-[30vh] mx-auto flex justify-center items-center">
              {/* mask */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.3] z-10"></div>
              <Image
                width={1000}
                height={1000}
                src="https://images.unsplash.com/photo-1545787636-35db70ee2e6a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="banner-image"
                className="absolute top-0 left-0 bg-c w-full h-full object-cover object-bottom"
              ></Image>

              {/* <div className="relative z-20 w-11/12 flex justify-between items-center gap-5 mx-auto">
              <div className="w-[50%] flex items-start justify-start flex-col gap-2">
                <span className="text-lg font-medium text-secondary-100">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus, pariatur.
                </span>
                <h1 className="text-6xl tracking-wide title font-bold text-secondary-50">
                  You Get Now Memorable Wonderful Outdoor Experiences
                </h1>
              </div>

              <div className="cursor-pointer w-[8rem] text-primary-50 whitespace-nowrap h-[8rem] p-1 border  border-primary-100 rounded-full flex justify-center items-center text-wrap text-center  z-20 left-[50%] -translate-x-[50%] text-sm">
                <span>CONTACT US</span>
              </div>
            </div> */}
            </div>

            {/* topic 3  */}
            <div className="flex w-full md:w-[70%] mx-auto flex-col gap-2">
              <h2 className="title font-medium tracking-wide text-lg italic">
                3. HERE IS THE TITLE
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur repellendus eum saepe iusto, distinctio asperiores
                rem quis cupiditate minus laborum magnam aliquam molestiae quos
                at esse deleniti explicabo voluptatem sequi itaque quam omnis
                rerum. Est adipisci magnam tempore vel ullam! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Laudantium ipsa ea
                maiores! Odit voluptatibus nisi explicabo aut? Veritatis
                reiciendis dolores mollitia et? Eos, eveniet earum quas rem iste
                delectus blanditiis, illo ut ullam sint quo hic. Minus minima
                repellendus perspiciatis.
              </p>
            </div>

            {/* conlcuesion  */}
            <div className="flex w-full md:w-[70%] mx-auto flex-col gap-2">
              <h2 className="title font-medium tracking-wide text-lg italic">
                Conclusion
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur repellendus eum saepe iusto, distinctio asperiores
                rem quis cupiditate minus laborum magnam aliquam molestiae quos
                at esse deleniti explicabo voluptatem sequi itaque quam omnis
                rerum. Est adipisci magnam tempore vel ullam! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Laudantium ipsa ea
                maiores! Odit voluptatibus nisi explicabo aut? Veritatis
                reiciendis dolores mollitia et? Eos, eveniet earum quas rem iste
                delectus blanditiis, illo ut ullam sint quo hic. Minus minima
                repellendus perspiciatis.
              </p>
            </div>
          </div>

          {/* bottom part  */}
          <div className="flex mx-auto flex-col md:flex-row gap-5 justify-between md:items-center items-start w-full md:w-[70%]">
            {/* TAGS  */}
            <div className="flex justify-center items-center gap-2">
              <span className="bg-secondary-100 text-[12px] text-secondary-500 px-5 py-1.5 rounded-md">
                #tag1
              </span>
              <span className="bg-secondary-100 text-[12px] text-secondary-500 px-5 py-1.5 rounded-md">
                #tag2
              </span>
              <span className="bg-secondary-100 text-[12px] text-secondary-500 px-5 py-1.5 rounded-md">
                #tag3
              </span>
              <span className="bg-secondary-100 text-[12px] text-secondary-500 px-5 py-1.5 rounded-md">
                #tag4
              </span>
            </div>

            {/* share  */}
            <div className="flex justify-center items-center gap-4">
              <span className="text-[12px] font-semibold">Share:</span>
              {/* socio icon  */}
              <div className="flex justify-center items-center  gap-1">
                <div className="cursor-pointer">
                  <Icon
                    icon="logos:twitter"
                    className="w-[1.5rem] h-[1.5rem] object-cover object-center"
                  />
                </div>
                <div className="cursor-pointer">
                  <Icon
                    icon="logos:facebook"
                    className="w-[1.5rem] h-[1.5rem] object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related blogs  */}
      <div className="w-11/12 md:w-11/12 mx-auto">
        <RelatedBlogs />
      </div>
    </>
  );
}

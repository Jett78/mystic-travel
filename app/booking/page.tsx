"use client";
import Banner from "@/components/ui/banner";
import BookForm from "@/components/website/BookForm/BookForm";
import React, { useEffect } from "react";

type Props = {};

export default function Page({}: Props) {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <main className=" z-[20] relative">
      <Banner
        title="Make Your Booking"
        className="md:text-[5vw] text-4xl"
        img="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <BookForm />
    </main>
  );
}

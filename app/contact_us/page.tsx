"use client";
import ContactUs from "@/components/website/ContactUs/ContactUs";
import React, { useEffect } from "react";

type Props = {};

function Page({}: Props) {
  useEffect(() => {
    scrollTo(0, 0);
  },[]);
  return (
    <main className="bg-secondary-50 z-[20] relative">
      <ContactUs />
    </main>
  );
}

export default Page;

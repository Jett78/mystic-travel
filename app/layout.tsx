"use client";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import toast, { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const preloaderContainerRef = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const currentRoute = usePathname();
  useEffect(() => {
    const splitText = new SplitType(".text-preloader");
    const tl = gsap.timeline();
    tl.from(splitText.chars, {
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "sine.out",
    });
    // tl.to(splitText.chars, {
    //   opacity: 0,
    //   duration: 0.5,
    //   stagger: 0.02,
    //   ease: "expo.inOut",
    // });
    tl.to(preloaderContainerRef.current, {
      // scaleY: "0",
      transformOrigin: "top",
      duration: 0.6,
      opacity: 0,
      ease: "sine.out",
      onComplete: () => {
        gsap.to(".disable-scroll", {
          height: "auto",
        });
        setIsLoading(false);
      },
    });
  }, []);

  return (
    <html lang="en" className={inter.className}>
      <body className="">
        <Toaster />
        {/* Preloader */}
        {isLoading ? (
          <div
            ref={preloaderContainerRef}
            className="fixed top-0 left-0 w-full text-center h-screen bg-white text-secondary-500 z-[90000] title text-6xl flex justify-center items-center"
          >
            <span className="w-11/12 text-preloader tracking-wider font-bold">
              LOADING FOR YOUR NEXT ADVENTURE...
            </span>
          </div>
        ) : (
          <>
            <Navbar />
            <div
              className={`w-full h-full  ${
                currentRoute === "/" ? "" : "md:mb-[60vh]"
              } bg-secondary-50 text-secondary-500`}
            >
              {children}
            </div>
            <div className={`${currentRoute === "/" ? "hidden" : "block"}`}>
              <Footer />
            </div>
          </>
        )}
      </body>
    </html>
  );
}

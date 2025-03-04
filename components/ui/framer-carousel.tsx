"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
type Item = {
  id: number;
  imgSrc: string;
};

const items: Item[] = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1575819719798-83d97dd6949c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    imgSrc:
      "https://images.unsplash.com/photo-1509883488717-779cd2d85976?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    imgSrc:
      "https://images.unsplash.com/photo-1584780995549-43aa857e59d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGV2ZXJlc3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    imgSrc:
      "https://images.unsplash.com/photo-1569832856136-5f42d6a3ed67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGV2ZXJlc3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    imgSrc:
      "https://images.unsplash.com/photo-1523341139367-9de570b874ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGV2ZXJlc3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    imgSrc:
      "https://images.unsplash.com/photo-1515245469645-19dbee02403e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGV2ZXJlc3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    imgSrc:
      "https://images.unsplash.com/photo-1584780995549-43aa857e59d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGV2ZXJlc3R8ZW58MHx8MHx8fDA%3D",
  },
];

function FramerCarousel() {
  const [activeItem, setActiveItem] = useState(items[0]);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [carousel]);

  return (
    <>
      <motion.div
        layoutId={"activeItems"}
        className="rounded-md w-fit pb-4 gap-2 items-center mx-auto cursor-auto "
        onClick={(e) => e.stopPropagation()}
      >
        <>
          {items.map((tab) => (
            <>
              <AnimatePresence mode="popLayout" initial={false}>
                {tab.id === activeItem.id && (
                  <motion.figure
                    key={tab?.id}
                    className=" bg-gray-[#00042aac] border border-white/20  rounded-md p-4 backdrop-blur-sm"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          type: "ease",
                          ease: "easeInOut",
                          duration: 0.3,
                          delay: 0.2,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          type: "ease",
                          ease: "easeInOut",
                          duration: 0.2,
                        },
                      }}
                    >
                      <Image
                        src={activeItem.imgSrc}
                        width={1000}
                        height={1000}
                        alt="preview_img"
                        className=" object-cover md:h-96 h-60   mx-auto rounded-md"
                      />
                    </motion.div>
                  </motion.figure>
                )}
              </AnimatePresence>
            </>
          ))}
        </>
        <motion.div className="w-full mt-4 p-2 mx-auto overflow-hidden    bg-zinc-100 border border-white/20 rounded-md">
          <motion.div
            ref={carousel}
            drag="x"
            dragElastic={0.2}
            dragConstraints={{ right: 0, left: -width }}
            dragTransition={{ bounceDamping: 30 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex  "
          >
            {items.slice(0, 8)?.map((itemData) => {
              return (
                <motion.div
                  key={itemData.id}
                  className={`relative p-2 flex-shrink-0`}
                  onClick={() => setActiveItem(itemData)}
                >
                  <Image
                    src={itemData?.imgSrc}
                    width={400}
                    height={400}
                    alt="img"
                    className="w-28 cursor-pointer h-16 object-cover  relative z-[2] rounded-md pointer-events-none"
                  />
                  {itemData?.id === activeItem?.id && (
                    <motion.div
                      layoutId="slider"
                      transition={{
                        layout: {
                          duration: 0.2,
                          ease: "easeOut",
                        },
                      }}
                      className="absolute top-0 left-0 h-full w-full dark:bg-gray-300 bg-gray-800 rounded-md"
                    ></motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default FramerCarousel;

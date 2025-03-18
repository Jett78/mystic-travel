import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
type buttonprops = {
  title: string;
  className?: string;
  path?: string;
};
const PrimaryButton = ({ title, className, path }: buttonprops) => {
  return (
    <a href={`${path}`}>
      <button
        className={cn(
          "md:px-8 px-6 py-2 rounded-lg hover:bg-blue-500 ease-in-out duration-300 bg-primary-600 text-white font-semibold md:text-base text-xs",
          className
        )}
      >
        {title}
      </button>
    </a>
  );
};

export default PrimaryButton;

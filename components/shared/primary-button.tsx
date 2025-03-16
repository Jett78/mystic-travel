import { cn } from "@/lib/utils";
import React from "react";
type buttonprops = {
  title: string;
  className?: string;
};
const PrimaryButton = ({ title, className }: buttonprops) => {
  return (
    <button
      className={cn(
        "md:px-8 px-6 py-2 rounded-lg bg-primary-600 text-white font-semibold md:text-base text-xs",
        className
      )}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;

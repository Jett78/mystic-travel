import { cn } from "@/lib/utils";
import React from "react";
type buttonprops = {
  title: string;
  className?: string;
};
const PrimaryButton = ({ title, className }: buttonprops) => {
  return <button className={cn("px-8 py-2 rounded-full bg-primary-600 text-white font-bold", className)}>{title}</button>;
};

export default PrimaryButton;

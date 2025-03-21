import React from "react";

const InputLabel = ({ label }: { label: string }) => {
  return (
    <label htmlFor={label} className="text-sm font-medium">
      {label} <span className=" text-red-500">*</span>
    </label>
  );
};

export default InputLabel;

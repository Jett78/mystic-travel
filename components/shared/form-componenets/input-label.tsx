import React from "react";

const InputLabel = ({ label }: { label: string }) => {
  return (
    <label className="font-medium sm:text-sm text-xs">
      {label} <span className="text-red-500">*</span>
    </label>
  );
};

export default InputLabel;

import React from "react";

const InputLabel = ({ label }: { label: string }) => {
  return (
    <label className="font-medium text-sm">
      {label} <span className="text-red-500">*</span>
    </label>
  );
};

export default InputLabel;

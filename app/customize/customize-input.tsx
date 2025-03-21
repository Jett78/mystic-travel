import React from "react";

type customizeinput = {
  placeholder?: string;
  type?: string;
};

const CustomizeInput = ({ placeholder, type = "text" }: customizeinput) => {
  return (
    <input
      type={type}
      className="h-10 border mt-2 rounded px-4 w-full bg-gray-50 outline-none"
      placeholder={placeholder}
    />
  );
};

export default CustomizeInput;

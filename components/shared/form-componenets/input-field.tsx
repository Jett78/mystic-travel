import React from "react";

const InputField = ({ placeholder }: { placeholder: string }) => {
  return <input type="text" placeholder={placeholder} className="md:p-4 p-2 rounded-lg border-primary-600/50 outline-none md:text-sm text-xs  border w-full"/>;
};

export default InputField;

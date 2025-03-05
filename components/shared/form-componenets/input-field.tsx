import React from "react";

const InputField = ({ placeholder }: { placeholder: string }) => {
  return <input type="text" placeholder={placeholder} className="p-4 rounded-lg border-primary-600/50 outline-none text-sm  border w-full"/>;
};

export default InputField;

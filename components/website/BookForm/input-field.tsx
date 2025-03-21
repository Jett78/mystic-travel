import React from "react";

type inputprops = {
  placeholder: string;
  type: string;
  name: string;
  id: string;
};

const InputField = ({ placeholder, type, name, id }: inputprops) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="h-10 border mt-2 rounded px-4 w-full bg-gray-50"
      placeholder={placeholder}
    />
  );
};

export default InputField;

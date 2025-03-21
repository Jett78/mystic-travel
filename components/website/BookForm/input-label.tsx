import React from "react";

const InputLabel = ({ label }: { label: string }) => {
  return <label htmlFor={label}>{label}</label>;
};

export default InputLabel;

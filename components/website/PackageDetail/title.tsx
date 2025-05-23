import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="text-2xl relative fixed-date tracking-wider font-palker  mb-6 text-secondary-500">
      {title}
    </h2>
  );
};

export default Title;

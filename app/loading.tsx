import React from "react";

const Loading = () => {
  return (
    <div className="h-screen z-[999] fixed w-full bg-white flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;

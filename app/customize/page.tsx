import React from "react";
import CustomizeForm from "./customize-form-input";
import Banner from "@/components/ui/banner";

const CustomizePage = () => {
  return (
    <div>
      <Banner
        title="Customize your Trip"
        className="md:text-[4vw] text-4xl"
        img="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <CustomizeForm />
    </div>
  );
};

export default CustomizePage;

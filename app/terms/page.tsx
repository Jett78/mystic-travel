import Banner from "@/components/ui/banner";
import React from "react";
import TermList from "./term-list";

const Terms = () => {
  return (
    <div>
      <Banner
        title="Terms and Conditions "
        className="md:text-[4vw] text-3xl"
        img="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <TermList />
    </div>
  );
};

export default Terms;

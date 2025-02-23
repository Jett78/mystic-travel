import React from "react";
import AboutUsHero from "./AboutUsHero";
import AboutUs from "./AboutUs";

type Props = {};

function AboutUsMain({}: Props) {
  return (
    <div>
      <AboutUsHero />
      <div className="w-11/12 md:w-10/12 mx-auto">
        <AboutUs />
      </div>
    </div>
  );
}

export default AboutUsMain;

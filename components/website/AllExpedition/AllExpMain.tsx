"use client";
import React from "react";
import AllExpHero from "./AllExpHero";
import AllExp from "./AllExp";
import Snowfall from "react-snowfall";
type Props = {};

function AllExpMain({ distance }: any) {
  return (
    <>
      <Snowfall
        snowflakeCount={100}
        color="#FFFFFF" // Set the color of the snowflakes to white
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      />
      <div className="">
        <AllExpHero distance={distance} />
        <div className="w-11/12 md:w-10/12 mx-auto">
          <AllExp distance={distance} />
        </div>
      </div>
    </>
  );
}

export default AllExpMain;

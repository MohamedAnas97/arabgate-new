"use client";
import React from "react";
import Banner from "./banner";
import Video from "./video";
import Properties from "./properties";
import About from "./about";
import Reviews from "./reviews";
const Homepage = () => {
  return (
    <React.Fragment>
      <Banner />
      <Properties />
      <Video />
      <About />
      <Reviews />
    </React.Fragment>
  );
};
export default Homepage;

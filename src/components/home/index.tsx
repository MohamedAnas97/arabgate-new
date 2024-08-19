"use client";
import React from "react";
import Banner from "./banner";
import Video from "./video";
import Properties from "./properties";
import About from "./about";
import Reviews from "./reviews";
import Welcome from "./welcome";
const Homepage = () => {
  return (
    <React.Fragment>
      <Banner />
      <Properties />
      <About />
      <Video />
      <Reviews />
      <Welcome />
    </React.Fragment>
  );
};
export default Homepage;

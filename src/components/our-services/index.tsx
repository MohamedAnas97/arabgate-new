"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import Banner from "./banner";
import Experience from "./experience";
import Contact from "./contact";
import Welcome from "./welcome";

const OurServices = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <React.Fragment>
      <Banner />
      <Experience />
      <Contact />
      <Welcome />
    </React.Fragment>
  );
};
export default OurServices;

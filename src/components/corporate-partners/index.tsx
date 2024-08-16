"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import Banner from "./banner";
import Corporate from "./corporate";
import Contact from "./contact";

const Corporatepage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <React.Fragment>
      <Banner />
      <Corporate />
      <Contact />
    </React.Fragment>
  );
};
export default Corporatepage;

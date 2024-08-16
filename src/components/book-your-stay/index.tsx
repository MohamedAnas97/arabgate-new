"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import Banner from "./banner";
import Experience from "./experience";
import Contact from "./contact";
import Welcome from "./welcome";
import Properties from "../home/properties";
import Corporate from "./corporate";

const BookPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <React.Fragment>
      <Banner />
      <Properties />
      <Experience />
      <Contact />
      <Welcome />
      <Corporate />
    </React.Fragment>
  );
};
export default BookPage;

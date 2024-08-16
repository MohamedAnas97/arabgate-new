"use client";
import Banner from "./banner";
import WhyChoose from "./why-choose";
import Maxima from "./maxima";
import HowWorks from "./how-works";
import RentalSite from "./rental-site";
import OurServices from "./our-service";
import ContactUs from "@/shared/contact-us";
import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const BecomePage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <React.Fragment>
      <Banner />
      <WhyChoose />
      <Maxima />
      <HowWorks />
      <RentalSite />
      <OurServices />
      <ContactUs />
    </React.Fragment>
  );
};
export default BecomePage;

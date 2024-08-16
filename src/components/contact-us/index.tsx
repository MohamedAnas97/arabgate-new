"use client";
import React from "react";
import Banner from "./banner";
import Location from "./location";
import ContactUs from "@/shared/contact-us";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const ContactPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <React.Fragment>
      <Banner />
      <Location />
      <ContactUs />
    </React.Fragment>
  );
};
export default ContactPage;

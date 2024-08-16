"use client";
import React from "react";
import Banner from "./banner";
import OurMision from "./our-mision";
import Ourvalue from "./our-value";
import Careers from "./careers";
import ContactUs from "@/shared/contact-us";
import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const CompanyPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    if (window.location.hash === "#careers" && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <React.Fragment>
      <Banner />
      <OurMision />
      <Ourvalue />
      <div ref={ref}>
        <Careers />
      </div>
      <ContactUs />
    </React.Fragment>
  );
};
export default CompanyPage;

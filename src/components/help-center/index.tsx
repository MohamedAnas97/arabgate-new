"use client";
import Banner from "./banner";
import React, { Suspense } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";

const FAQ = dynamic(() => import("./faq"), { ssr: false });

const HelpCenter = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Suspense>
      <Banner />
      <FAQ />
    </Suspense>
  );
};
export default HelpCenter;

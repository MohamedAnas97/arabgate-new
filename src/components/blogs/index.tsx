"use client";
import Banner from "./banner";
import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Blog from "./blog";

const BlogPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <React.Fragment>
      <Banner />
      <Blog />
    </React.Fragment>
  );
};
export default BlogPage;

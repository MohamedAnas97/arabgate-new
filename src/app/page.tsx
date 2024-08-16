"use client";
import HomePage from "@/components/home";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <HomePage />
    </div>
  );
}

"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const WhyChoose = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-[#001D3D] overflow-hidden">
      <div className="xl:mx-[10%] lg:mx-[7%] mx-[5%] flex lg:flex-row flex-col lg:py-20 py-14">
        <div className="lg:w-[380px] w-full" data-aos="fade-right" data-aos-duration="1000">
          <h4 className="2xl:text-[40px] xl:text-[36px] sm:text-[30px] text-[27px] font-medium xl:leading-[48px] leading-[32px] text-[#CF9A2C] tracking-[-1.5px] inter-font">
            Why Choose Us?
          </h4>
        </div>
        <div className="flex items-center lg:mt-0 mt-3" data-aos="fade-left" data-aos-duration="1000">
          <p className="2xl:text-[36px] xl:text-[30px] sm:text-[26px] text-[22px] font-semibold lg:leading-[43px] leading-[32px] text-[#EBEBEB] inter-font">
            Exceptional Benefits for Our Hosts
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhyChoose;

"use client";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Maxima = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mb-20">
      {/*   Maximized Earnings */}
      <div
        className="flex lg:flex-row flex-col justify-between mt-5 lg:rounded-tr-none rounded-tr-[30px] lg:mx-0 mx-[5%] shadow-xl"
        style={{ backgroundColor: "rgba(92, 165, 246, 0.2)" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="lg:w-[35%] w-full">
          <Image src={require("/public/assets/become/img1.png")} alt="" />
        </div>
        <div className=" lg:w-[65%] w-full flex items-center justify-center ">
          <div className="lg:w-[80%] w-[90%] lg:py-0 py-10">
            <h4 className="2xl:text-[32px] xl:text-[28px] text-[24px] font-bold xl:leading-[45px] leading-[28px] text-[#000000] xl:tracking-[-1.5px] tracking-[-1px] manrope-font">
              Maximized Earnings
            </h4>
            <p className="3xl:text-[20px] 2xl:text-[19px] xl:text-[18px] sm:text-[16px] text-[14px] font-medium 2xl:leading-[24px] xl:leading-[22px] leading-[20px] text-[#777] inter-font py-6">
              {" "}
              Our dynamic pricing strategies ensure your property is always
              competitively priced, maximizing your income potential .
            </p>
            {/* <div>
              <button className="md:px-12 xl:px-8 px-6 py-3 bg-[#CF9A2C] rounded-full lg:text-[16px] text-[14px] font-medium leading-[14px] text-[#fff] transition ease-in-out delay-150 duration-200 btn-grad">
                Read More
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {/* Prime Locations  */}
      <div
        className="flex lg:flex-row flex-col justify-between mt-10 lg:rounded-tr-none rounded-tr-[30px] lg:mx-0 mx-[5%] bg-[#001D3D] shadow-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="lg:w-[35%] w-full">
          <Image src={require("/public/assets/become/img2.png")} alt="" />
        </div>
        <div className=" lg:w-[65%] w-full flex items-center justify-center ">
          <div className="lg:w-[80%] w-[90%] lg:py-0 py-10">
            <h4 className="2xl:text-[32px] xl:text-[28px] text-[24px] font-bold xl:leading-[45px] leading-[28px] text-[#CF9A2C] xl:tracking-[-1.5px] tracking-[-1px] manrope-font">
              {" "}
              Peace of Mind
            </h4>
            <p className="3xl:text-[20px] 2xl:text-[19px] xl:text-[18px] sm:text-[16px] text-[14px] font-medium 2xl:leading-[24px] xl:leading-[22px] leading-[20px] text-[#EBEBEB] inter-font py-6">
              {" "}
              Enjoy the peace of mind that comes with knowing your property is
              managed by professionals. From guest vetting to emergency
              maintenance, we handle it all. .
            </p>
            {/* <div>
              <button className="md:px-12 xl:px-8 px-6 py-3 bg-[#CF9A2C] rounded-full lg:text-[16px] text-[14px] font-medium leading-[14px] text-[#fff] transition ease-in-out delay-150 duration-200 btn-grad">
                Read More
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {/* Luxurious Comfort */}
      <div
        className="flex lg:flex-row flex-col justify-between bg-[#5CA5F6] mt-10 lg:rounded-tr-none rounded-tr-[30px] lg:mx-0 mx-[5%] shadow-xl"
        style={{ backgroundColor: "rgba(92, 165, 246, 0.2)" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="lg:w-[35%] w-full">
          <Image src={require("/public/assets/become/img3.png")} alt="" />
        </div>
        <div className=" lg:w-[65%] w-full flex items-center justify-center ">
          <div className="lg:w-[80%] w-[90%] lg:py-0 py-10">
            <h4 className="2xl:text-[32px] xl:text-[28px] text-[24px] font-bold xl:leading-[45px] leading-[28px] text-[#000000] xl:tracking-[-1.5px] tracking-[-1px] manrope-font">
              Personalized Service
            </h4>
            <p className="3xl:text-[20px] 2xl:text-[19px] xl:text-[18px] sm:text-[16px] text-[14px] font-medium 2xl:leading-[24px] xl:leading-[22px] leading-[20px] text-[#777] inter-font py-6">
              {" "}
              We tailor our services to meet your specific needs and
              preferences, ensuring your property is managed exactly how you
              envision.
            </p>
            {/* <div>
              <button className="md:px-12 xl:px-8 px-6 py-3 bg-[#CF9A2C] rounded-full lg:text-[16px] text-[14px] font-medium leading-[14px] text-[#fff] transition ease-in-out delay-150 duration-200 btn-grad">
                Read More
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {/*  Personalised Services */}
      <div
        className="flex lg:flex-row flex-col justify-between mt-10 lg:rounded-tr-none rounded-tr-[30px] lg:mx-0 mx-[5%] bg-[#001D3D] shadow-xl "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="lg:w-[35%] w-full">
          <Image src={require("/public/assets/become/img4.png")} alt="" />
        </div>
        <div className=" lg:w-[65%] w-full flex items-center justify-center ">
          <div className="lg:w-[80%] w-[90%] lg:py-0 py-10">
            <h4 className="2xl:text-[32px] xl:text-[28px] text-[24px] font-bold xl:leading-[45px] leading-[28px] text-[#CF9A2C] xl:tracking-[-1.5px] tracking-[-1px] manrope-font">
              {" "}
              Global Exposure
            </h4>
            <p className="3xl:text-[20px] 2xl:text-[19px] xl:text-[18px] sm:text-[16px] text-[14px] font-medium 2xl:leading-[24px] xl:leading-[22px] leading-[20px] text-[#EBEBEB] inter-font md:py-6 py-4">
              {" "}
              Leverage our extensive network and marketing expertise to attract
              guests from around the world.
            </p>
            {/* <div>
              <button className="md:px-12 xl:px-8 px-6 py-3 bg-[#CF9A2C] rounded-full lg:text-[16px] text-[14px] font-medium leading-[14px] text-[#fff] transition ease-in-out delay-150 duration-200 btn-grad">
                Read More
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Maxima;

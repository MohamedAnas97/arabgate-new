"use client";
import Image from "next/image";
const OurMision = () => {
  return (
    <div className="xl:my-8 my-6">
      {/*  Our Mission */}
      <div
        className="flex lg:flex-row flex-col justify-between lg:rounded-tr-none rounded-tr-[30px] lg:mx-0 mx-[5%] bg-[#001D3D] shadow-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="lg:w-[35%] w-full">
          <Image src={require("/public/assets/company/mission.png")} alt="" />
        </div>
        <div className=" lg:w-[65%] w-full flex items-center justify-center ">
          <div className="lg:w-[80%] w-[90%] lg:py-0 py-10">
            <h4 className="2xl:text-[32px] xl:text-[28px] text-[24px] font-bold xl:leading-[45px] leading-[28px] text-[#CF9A2C] xl:tracking-[-1.5px] tracking-[-1px] manrope-font">
              {" "}
              Our Mission
            </h4>
            <p className="3xl:text-[20px] 2xl:text-[19px] xl:text-[18px] sm:text-[16px] text-[14px] font-medium 2xl:leading-[24px] xl:leading-[22px] leading-[20px] text-[#EBEBEB] inter-font py-6">
              {" "}
              Our mission is to elevate the standard of hospitality in the world
              of holiday homes. We strive to exceed expectations by curating a
              portfolio of exclusive properties, delivering exceptional service,
              and creating memorable experiences for every guest.
            </p>
          </div>
        </div>
      </div>
      {/* Luxurious Comfort */}
      <div
        className="flex lg:flex-row flex-col justify-between bg-[#5CA5F6] xl:mt-8 mt-6 lg:rounded-tr-none rounded-tr-[30px] lg:mx-0 mx-[5%] shadow-xl"
        style={{ backgroundColor: "rgba(92, 165, 246, 0.2)" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="lg:w-[35%] w-full">
          <Image src={require("/public/assets/company/vision.png")} alt="" />
        </div>
        <div className=" lg:w-[65%] w-full flex items-center justify-center ">
          <div className="lg:w-[80%] w-[90%] lg:py-0 py-10">
            <h4 className="2xl:text-[32px] xl:text-[28px] text-[24px] font-bold xl:leading-[45px] leading-[28px] text-[#000000] xl:tracking-[-1.5px] tracking-[-1px] manrope-font">
              Our Vision
            </h4>
            <p className="3xl:text-[20px] 2xl:text-[19px] xl:text-[18px] sm:text-[16px] text-[14px] font-medium 2xl:leading-[24px] xl:leading-[22px] leading-[20px] text-[#777] inter-font py-6">
              {" "}
              We envision a world where every stay is an unforgettable journey.
              Through innovation, dedication, and a relentless pursuit of
              excellence, we aim to set new standards in premium accommodation
              and inspire a new era of hospitality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurMision;

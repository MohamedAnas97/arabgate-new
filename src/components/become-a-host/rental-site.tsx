"use client";
import Image from "next/image";
const RentalSite = () => {
  return (
    <div className="sitebanner w-full flex items-center justify-center xl:h-[558px] h-[520px] bg-[#CF9A2C]">
      <div className="flex flex-col w-full items-center md:mx-0 mx-[5%]">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h1 className="3xl:text-[48px] 2xl:text-[45px] xl:text-[38px] text-center lg:text-[34px] sm:text-[30px] text-[27px] font-semibold lg:leading-[58px] md:leading-[48px] sm:leading-[38px] leading-[30px] tracking-[-1.5px] text-[#011E3C] inter-font 2xl:mb-12 mb-10">
            We will list your property on top vacation rental sites
          </h1>
        </div>
        <div className="bg-[#FFFFFF] flex flex-wrap justify-bitween xl:w-[70%] lg:w-[82%] md:w-[90%] w-full lg:p-8 p-6 rounded-md">
          <div
            className="md:w-[35%] w-[50%] flex justify-center "
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <Image
              src={require("/public/assets/become/vrbo.png")}
              alt=""
              className="2xl:h-[50px] lg:h-[40px] sm:h-[35px] h-[34px] w-fit"
            />
          </div>
          <div
            className="md:w-[20%] w-[50%] flex justify-center"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <Image
              src={require("/public/assets/become/Group.png")}
              alt=""
              className="2xl:h-[50px] lg:h-[40px] sm:h-[35px] h-[34px] w-fit"
            />
          </div>
          <div
            className="md:w-[45%] w-[50%] flex justify-center md:mt-0 mt-6"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <Image
              src={require("/public/assets/become/book.png")}
              alt=""
              className="2xl:h-[50px] lg:h-[40px] sm:h-[35px] h-[30px] w-fit"
            />
          </div>
          <div
            className="md:w-[25%] w-[50%] flex justify-center md:mt-8 mt-6"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <Image
              src={require("/public/assets/become/air.png")}
              alt=""
              className="2xl:h-[50px] lg:h-[40px] h-[35px] w-fit"
            />
          </div>
          <div
            className="md:w-[25%] w-[50%] flex justify-center md:mt-8 mt-6"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <Image
              src={require("/public/assets/become/exo.png")}
              alt=""
              className="2xl:h-[50px] lg:h-[40px] sm:h-[35px] h-[28px] w-fit"
            />
          </div>
          <div
            className="md:w-[25%] w-[50%] flex justify-center md:mt-8 mt-6"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <Image
              src={require("/public/assets/become/bayut.png")}
              alt=""
              className="2xl:h-[50px] lg:h-[40px] sm:h-[35px] h-[30px] w-fit"
            />
          </div>
          <div
            className="md:w-[25%] w-[100%] flex justify-center md:mt-8 mt-6"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <Image
              src={require("/public/assets/become/new.png")}
              alt=""
              className="2xl:h-[50px] lg:h-[40px] sm:h-[35px] h-[30px] w-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RentalSite;

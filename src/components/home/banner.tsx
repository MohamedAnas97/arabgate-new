"use client";

const Banner = () => {
  return (
    <div className="relative h-full">
      <div className=" banner_img relative 2xl:h-[800px] xl:h-[750px] h-[700px] w-full z-[-1]">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] z-0 "></div>
      </div>

      <div className="2xl:mx-[18%] xl:mx-[12%] md:mx-[8%] mx-[5%]  absolute sm:bottom-16 bottom-60 z-10">
        <h1 className="2xl:text-[72px] xl:text-[64px] lg:text-[56px] md:text-[48px] text-[40px] font-bold text-[#fff] 2xl:leading-[70px] xl:leading-[64px] lg:leading-[56px] md:leading-[48px] leading-[40px] josefin-font">
          <span className="font-normal">
            Exceeding Expectations
            <br /> Your Customized
            <br />
          </span>{" "}
          Maintenance Partner
        </h1>
      </div>
    </div>
  );
};

export default Banner;

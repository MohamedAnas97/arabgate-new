"use client";
const Banner = () => {
  return (
    <div className="company-banner 3xl:h-[940px] 2xl:h-[900px] md:h-[800px] h-[850px] flex md:items-end items-center">
      <div className="xl:mx-[10%] lg:mx-[7%] mx-[5%] md:mb-[6%] mb-0">
        <div
          className="3xl:w-[75%] 2xl:w-[78%] xl:w-[80%] lg:w-[85%] w-full lg:p-8 md:p-6 p-4 rounded-lg"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <div className="lg:mb-10 xl:mb-14 mb-8">
            {" "}
            <h1 className="text-[#fff] 3xl:text-[64px] 2xl:text-[60px] xl:text-[52px] sm:text-[46px] text-[40px] xl:leading-[64px] lg:leading-[54px] sm:leading-[48px] leading-[42px] font-semibold josefin-font tracking-[-1.5px] opacity-100 ">
              About Duomo
            </h1>
          </div>
          <p className="text-[#EBEBEB] 3xl:text-[20px] 2xl:text-[19px] xl:text-[18px] sm:text-[16px] text-[14px] xl:leading-[24px] leading-[20px] font-medium inter-font my-3 mr-3">
            Welcome to Duomo, your premier destination for exceptional property
            management services and luxurious properties. Founded with a passion
            for redefining hospitality, Duomo is committed to providing
            unparalleled experiences for both hosts and guests alike. We believe
            that every property tells a story, and we take pride in showcasing
            each unique feature and detail to create unforgettable experiences
            for our guests.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;

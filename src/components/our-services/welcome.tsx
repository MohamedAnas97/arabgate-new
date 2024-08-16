"use client";
const Welcome = () => {

  return (
    <div className="welcomeBanner w-full flex md:items-end items-center justify-center xl:h-[466px] h-[420px] ">
      <div className="xl:mx-[10%] lg:mx-[7%] mx-[5%] md:mb-[5%] mb-0 w-full">
        <div
          className=" flex flex-wrap justify-bitween  w-full xl:p-8 md:p-6 p-4 rounded-md"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          data-aos="flip-up"
          data-aos-duration="1000"
          
        >
          <h2 className="2xl:text-[40px] xl:text-[36px] md:text-[32px] text-[28px] text-[#FFFFFF] xl:leading-[40px] leading-[32px] font-normal tracking-[-2px] josefin-font text-center ">
            Thank you for choosing Duomo for your upcoming stay. We can&apos;t
            wait to welcome you and ensure your experience is nothing short of
            extraordinary!
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Welcome;

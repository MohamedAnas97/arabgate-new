"use client";
const Banner = () => {
  return (
    <div className="blogbanner 3xl:h-[750px] md:h-[700px] h-[650px] flex md:items-end items-center ">
      <div className="xl:mx-[10%] lg:mx-[7%] mx-[5%] md:mb-[6%] w-full mb-0 flex justify-center">
        <div
          className="2xl:w-[68%] xl:w-[70%] lg:w-[75%] w-full lg:p-10 md:p-6 p-4 rounded-lg flex justify-center sm:mt-0 mt-6"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <h1 className="text-[#fff] 3xl:text-[64px] 2xl:text-[60px] xl:text-[52px] sm:text-[46px] text-[40px] xl:leading-[64px] lg:leading-[54px] sm:leading-[48px] leading-[42px] font-semibold josefin-font tracking-[-1.5px] opacity-100 ">
            Blogs
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Banner;

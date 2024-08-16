"use client";
const Banner = () => {
  const video =
    "https://public-general-s3-bucket-gng.s3.amazonaws.com/duomoproperty.mp4";
  return (
    <div className="w-full 3xl:h-[900px] 2xl:h-[850px] md:h-[800px] h-[650px] lg:pt-16 pt-10 video-container relative">
      <video
        controls={false}
        preload="auto"
        autoPlay={true}
        playsInline={true}
        loop
        muted
        className="!w-[100%] !h-[100%] "
      >
        <source src={video} type="video/mp4" />
        <track src={video} kind="subtitles" srcLang="en" label="English" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute lg:bottom-28 md:bottom-72 bottom-60 w-full flex justify-center">
        <div
          className="2xl:w-[55%] xl:w-[70%] lg:w-[75%] w-[90%] lg:p-10 md:p-6 p-4 rounded-lg flex justify-center sm:mt-0 mt-6"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <h1 className="text-[#fff] 3xl:text-[64px] 2xl:text-[60px] xl:text-[52px] sm:text-[46px] text-[40px] xl:leading-[64px] lg:leading-[54px] sm:leading-[48px] leading-[42px] font-semibold josefin-font tracking-[-1.5px] opacity-100 ">
            Corporate Partners
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Banner;

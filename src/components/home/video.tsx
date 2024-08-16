"use client";
import Image from "next/image";
const Video = () => {
  const video =
    "https://public-general-s3-bucket-gng.s3.amazonaws.com/arab-gate.mp4";
  return (
    <div className="bg-[#fffbf2] overflow-hidden">
      <div className=" 2xl:mx-[9%] lg:mx-[7%] ml-[5%] mr-[7%] 2xl:py-16 xl:py-14 md:py-12 sm:py-10 py-8">
        <h2 className="xl:text-[40px] md:text-[36px] text-[24px] font-bold josefin-font text-[#111827] text-center pb-7">
          Quality Service is Our Guarantee
        </h2>
        <div className="hero-bottom-image pb-6">
          <video
            controls={false}
            preload="auto"
            autoPlay={true}
            playsInline={true}
            loop
            muted
            className="!w-[100%]"
          >
            <source src={video} type="video/mp4" />
            <track src={video} kind="subtitles" srcLang="en" label="English" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-social">
            <h6 className="flex">
              <Image
                src={require("/public/assets/home/face.png")}
                alt=""
                className="sm:w-[20px] w-[17px] sm:h-[20px] h-[17px]"
              />
              <span className="text-[16px] text-[#111827] font-semibold manrope-font">
                Facebook
              </span>
            </h6>
            <h6 className="flex">
              <Image
                src={require("/public/assets/home/insta.png")}
                alt=""
                className="sm:w-[18px] w-[16px] sm:h-[18px] h-[16px]"
              />
              <span className="text-[16px] text-[#111827] font-semibold manrope-font">
                Instagram
              </span>
            </h6>
            <h6 className="flex">
              <Image
                src={require("/public/assets/home/tik.png")}
                alt=""
                className="sm:w-[20px] w-[18px] sm:h-[20px] h-[18px]"
              />
              <span className="text-[16px] text-[#111827] font-semibold manrope-font">
                Tiktok
              </span>
            </h6>
            <h6 className="flex">
              <Image
                src={require("/public/assets/home/you.png")}
                alt=""
                className="sm:w-[20px] w-[18px] sm:h-[20px] h-[18px]"
              />
              <span className="text-[16px] text-[#111827] font-semibold manrope-font">
                Youtube
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Video;

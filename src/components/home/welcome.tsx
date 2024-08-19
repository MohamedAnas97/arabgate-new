"use client";
import Image from "next/image";
const Welcome = () => {
  return (
    <div className="bg-[#e8eae2] w-full relative">
      <div className="2xl:mx-[9%] lg:mx-[5%] h-full relative ">
        <Image src={require("/public/assets/home/bg.png")} alt="" className="md:h-full h-[200px] object-cover" />
        <div className="absolute flex justify-center items-center top-0 w-full h-full">
          <div className="flex md:flex-row flex-col justify-evenly 2xl:w-[78%] xl:w-[88%] w-[90%] bg-[#ffffffd4] py-5 rounded-md">
            <div className="flex items-center">
              <div>
                <Image
                  src={require("/public/assets/home/phone.png")}
                  alt=""
                  className="md:h-[50px] h-[40px] md:w-[50px] w-[40px]" 
                />
              </div>
              <h3 className="text-[#111] font-bold text-[18px] leading-[26px] pl-2 josefin-font">
                Call Us 24/7 <br />
                +971 585443090
              </h3>
            </div>
            <div className="flex items-center">
              <div>
                <Image
                  src={require("/public/assets/home/home.png")}
                  alt=""
                  className="md:h-[50px] h-[40px] md:w-[50px] w-[40px]" 
                />
              </div>
              <h3 className="text-[#111] font-extrabold text-[18px] leading-[23px] pl-2 josefin-font">
                Emergency Services We <br />
                Serve All Over Dubai
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;

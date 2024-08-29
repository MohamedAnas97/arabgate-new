"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-[#f3f4f6] ">
      <div className="xl:mx-[10%] lg:mx-[7%] mx-[5%] py-10">
        <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 pb-10">
          <div className="md:col-span-1 col-span-2 " >
            {" "}
            <div className="flex items-center">
              <Image
                src={require("/public/assets/home/phone-black.png")}
                alt=""
                className="h-[18px] w-fit"
              />
              <li className="text-[16px] font-medium text-[#111827] leading-[20px] pl-1">
                +971 585443090
              </li>
            </div>
          </div>
          <div >
            <ul>
              <li className="sm:text-[18px] text-[16px] font-bold text-[#98753F] pb-2">
                Contact Us
              </li>
              <div className="flex items-center">
                <Image
                  src={require("/public/assets/home/phone-black.png")}
                  alt=""
                  className="h-[18px] w-fit"
                />
                <li className="sm:text-[16px] text-[15px] font-medium text-[#111827] leading-[20px] pl-1">
                  +971 585443090
                </li>
              </div>
              <div className="flex items-center">
                <Image
                  src={require("/public/assets/home/email.png")}
                  alt=""
                  className="h-[18px] w-fit"
                />
                <li className="sm:text-[16px] text-[15px] font-medium  text-[#111827] py-2 leading-[20px] pl-2">
                  agarabgate@gmail.com
                </li>
              </div>
            </ul>
          </div>
          <div>
            <ul className="xl:ml-4 sm:ml-0 ml-10">
              <li className="sm:text-[18px] text-[16px] font-bold text-[#98753F] pb-2">
                Information
              </li>
              <li className="sm:text-[16px] text-[15px] font-medium text-[#111827] leading-[20px]">
                Our Services
              </li>
              <li className="sm:text-[16px] text-[15px] font-medium  text-[#111827] leading-[20px] py-2">
                About Us
              </li>
              <li className="sm:text-[16px] text-[15px] font-medium  text-[#111827] leading-[20px]">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-2">
            <h5 className="sm:text-[18px] text-[16px] font-bold text-[#98753F] pb-2">
              Subscribe To Our Newsletter
            </h5>
            <h6 className="sm:text-[16px] text-[15px] font-medium  text-[#111827] leading-[20px]">
              Sign up for latest news, offers and more from Arab Gate!
            </h6>
            <div className="flex mt-4 w-full">
              <div className="w-[70%]">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="w-full py-[8px] px-2 outline-none sm:text-[16px] text-[15px] font-medium text-[#111827] leading-[20px]"
                />
              </div>
              <div className="flex justify-center w-[30%] bg-[#98753F]">
                <button className="text-[#fff] sm:text-[16px] text-[15px] font-medium text-center leading-[20px] ">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col-reverse justify-between border-t-[1px] border-[#111] xl:pt-7 sm:pt-6 pt-6">
          <div className="sm:mt-0 mt-2">
            <h6 className="sm:text-[15px] text-[14px] text-[#111] sm:leading-[23px] leading-[20px] rubik-font sm:text-left text-center">
              © 2024 Arab Gate Technical Services LLC, All rights reserved
            </h6>
          </div>
          <div className="flex items-center sm:justify-start justify-center ">
            <div className="mr-2">
              <Image
                src={require("/public/assets/home/facebook.png")}
                alt=""
                className="sm:h-[20px] h-[18px] w-fit cursor-pointer"
              />
            </div>
            <div className="mx-2">
              <Image
                src={require("/public/assets/home/instagram.png")}
                alt=""
                className="sm:h-[18px] h-[16px] w-fit cursor-pointer"
              />
            </div>
            <div className="mx-2">
              <Image
                src={require("/public/assets/home/tik-tok.png")}
                alt=""
                className="sm:h-[18px] h-[16px] w-fit cursor-pointer"
              />
            </div>
            <div className="ml-2">
              <Image
                src={require("/public/assets/home/youtube.png")}
                alt=""
                className="sm:h-[17px] h-[16px] w-fit cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

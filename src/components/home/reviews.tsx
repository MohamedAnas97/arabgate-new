"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Reviews = () => {
  const carouselRef = useRef<any>(null);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const data = [
    {
      id: 1,
      author: "Khalid R",
      content:
        "“ We've been extremely impressed with arab gate digital displays and signages. Not only do they enhance our brand visibility, but their team also provides ongoing support and maintenance, ensuring optimal performance at all times “",
    },
    {
      id: 2,
      author: "Layla H",
      content:
        "“ Arab Gate display fixtures for retail and exhibitions have helped us showcase our products in the best possible light. Their innovative designs and attention to detail have undoubtedly contributed to our success at trade shows and events. “",
    },
    {
      id: 3,
      author: "Amira K",
      content:
        "“ Arab Gate painting and epoxy services gave our property a fresh new look that exceeded our expectations. Their team worked diligently to ensure every detail was perfect, and the results speak for themselves. I'm extremely satisfied with their work and would highly recommend them to others “",
    },
    {
      id: 4,
      author: "Ahmed M",
      content:
        "“ We've relied on Arab Gate for all our electrical, plumbing, and HVAC needs, and they never disappoint. Their technicians are knowledgeable, reliable, and always go above and beyond to ensure our systems are running smoothly. A trusted partner indeed! “",
    },
    {
      id: 5,
      author: "Fathima",
      content:
        "“ I can't thank Arab Gate enough for their prompt response and top-notch service when we needed urgent painting and epoxy work done. Their attention to detail and dedication to quality craftsmanship truly sets them apart. “",
    },
    {
      id: 6,
      author: "Hassan B",
      content:
        "“ Arab Gate maintenance packages have been a lifesaver for our business. Their proactive approach to maintenance has helped us avoid costly repairs and downtime. Their team is professional, courteous, and always willing to go the extra mile. “",
    },
    {
      id: 6,
      author: "Mariam S",
      content:
        "“ The CCTV security systems installed by Arab Gate have provided us with peace of mind knowing that our property is protected. Their expertise in security solutions coupled with their excellent customer service makes them our go-to choice. “",
    },
  ];

  const CustomLeftArrow = () => (
    <button
      onClick={() => carouselRef.current?.previous()}
      aria-label="Previous slide"
    >
      <Image
        src={require("/public/assets/home/previous.png")}
        alt=""
        className="h-[32px] w-[32px] cursor-pointer"
      />
    </button>
  );

  const CustomRightArrow = () => (
    <button onClick={() => carouselRef.current?.next()} aria-label="Next slide">
      <Image
        src={require("/public/assets/home/next.png")}
        alt=""
        className="h-[32px] w-[32px] cursor-pointer"
      />
    </button>
  );

  return (
    <div>
      <div className="2xl:mx-[18%] xl:mx-[12%] md:mx-[8%] mx-[5%] py-20">
        <div className="w-full flex lg:flex-row flex-col justify-between ">
          <div className="lg:w-[50%] w-full p-8 flex flex-col justify-between bg-[#f7f8f4] ">
            <h2 className="text-[24px] leading-[28px] font-bold text-[#111827] manrope-font ">
              Get in Touch
            </h2>
            <form className="mt-6">
              <div>
                <label className="pr-2 text-[#111827] text-[16px] font-semibold manrope-font">
                  Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full border-[1px] py-[6px] px-3 mt-1 rounded-md outline-none text-[#111827] text-[14px] font-medium manrope-font"
                />
              </div>
              <div className="mt-3">
                <label className="pr-2 text-[#111827] text-[16px] font-semibold manrope-font">
                  Email Address:
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="w-full border-[1px] py-[6px] px-3 mt-1 rounded-md outline-none text-[#111827] text-[14px] font-medium manrope-font"
                />
              </div>
              <div className="mt-3">
                <label className="pr-2 text-[#111827] text-[16px] font-semibold manrope-font">
                  Phone Number:
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="w-full border-[1px] py-[6px] px-3 mt-1 rounded-md outline-none text-[#111827] text-[14px] font-medium manrope-font"
                />
              </div>
              <div className="mt-3">
                <label className="pr-2 text-[#111827] text-[16px] font-semibold manrope-font">
                  Subject:
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Subject"
                  className="w-full border-[1px] py-[6px] px-3 mt-1 rounded-md outline-none text-[#111827] text-[14px] font-medium manrope-font"
                />
              </div>
              <div className="mt-3">
                <label className="pr-2 text-[#111827] text-[16px] font-semibold manrope-font">
                  Message:
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter Your Message"
                  className="w-full border-[1px] py-[6px] px-3 mt-1 rounded-md outline-none text-[#111827] text-[15px] font-medium manrope-font"
                />
              </div>
              <div className="mt-4">
                <button className="text-[14px] font-bold leading-[20px] text-center manrope-font px-8 py-3 bg-[#a88c61] text-[#fff] transition ease-in-out delay-150 duration-200 rounded-md ">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-[50%] w-full bg-[#ab9460] relative ">
            <div className="w-full h-full ">
              <Image
                src={require("/public/assets/home/hg.png")}
                alt=""
                className="w-full sm:h-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] z-0 "></div>
            </div>
            <div className=" absolute top-0 flex justify-center items-center w-full h-full">
              <div className="xl:w-[78%] w-[85%] bg-[#f7f8f4] px-4 py-4 rounded-md">
                <h2 className="text-[15px] font-bold text-[#ab9460] leading-[20px] manrope-font pl-2">
                  Testimonials
                </h2>
                <h4 className="text-[20px] font-semibold leading-[26px] text-[#111] manrope-font py-3 pl-2">
                  What Our Customers Say About Us
                </h4>
                <Carousel
                  ref={carouselRef}
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                  arrows={false}
                  customLeftArrow={<CustomLeftArrow />}
                  customRightArrow={<CustomRightArrow />}
                >
                  {data?.map((item, index) => (
                    <div
                      className="border-[1px] bg-[#fff] rounded-xl mx-2 p-3"
                      key={index}
                    >
                      <div className="border-b-[1px]">
                        <p className="text-[15px] font-semibold leading-[20px] text-[#555] manrope-font pt-2 pb-4">
                          {item?.content}
                        </p>
                      </div>
                      <h5 className="text-[15px] font-semibold leading-[20px] text-[#111] manrope-font py-2">
                        {item?.author}
                      </h5>
                    </div>
                  ))}
                </Carousel>
                <div className="flex justify-between items-center mt-3 px-2">
                  <div className=" w-[40%] h-[2px] bg-[#98753F]"></div>
                  <div className="mx-1">
                    <CustomLeftArrow />
                  </div>
                  <div className="mx-1">
                    <CustomRightArrow />
                  </div>
                  <div className="w-[40%] h-[2px] bg-[#98753F]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

"use client";
import Image from "next/image";
const Corporate = () => {
  const data = [
    {
      id: 1,
      name: "Elevate Your Corporate Travel Experience ",
      image: require("/public/assets/book/img1.png"),
      content:
        "We pride ourselves on curating an exclusive portfolio of properties strategically located in prime destinations. Each property undergoes meticulous selection to ensure it meets the high standards expected by our corporate partners. At Duomo, we are dedicated to providing exceptional service, personalized attention, and an unwavering commitment to making every stay memorable for our corporate guests.",
    },
    {
      id: 2,
      name: "Exclusive Corporate Rates",
      image: require("/public/assets/book/img2.png"),
      content:
        "Enjoy significant cost savings with our exclusive corporate rates, offering a compelling alternative to top-rated properties in premium locations. Our tailored pricing ensures affordability without compromising on quality and convenience, allowing your team to focus on productivity without budget concerns.",
    },
    {
      id: 3,
      name: "Flexibility and Support",
      image: require("/public/assets/book/img3.png"),
      content:
        "Experience unparalleled flexibility with requested date extensions and cancellations, coupled with the assurance of 24/7 support for you and your team. Our dedicated corporate support team prioritizes your needs to ensure a seamless and accommodating experience, from booking to departure.",
    },
    {
      id: 4,
      name: "Elevate Productivity on the Go",
      image: require("/public/assets/book/img4.png"),
      content:
        "Maximize productivity with each of our properties equipped with a dedicated workspace. Designed to meet the needs of modern business travelers, our accommodations empower your team to stay focused and efficient while away from the office, ensuring business continuity and success.",
    },
    {
      id: 5,
      name: "Tailored Corporate Solution",
      image: require("/public/assets/book/img5.png"),
      content:
        "Partner with Duomo for tailored corporate solutions designed to meet your specific business requirements. Whether you need long-term accommodations for project teams, event accommodations, or executive retreats, we provide customized packages and services to suit your needs, ensuring a seamless and stress-free experience for you and your team.",
    },
    {
      id: 6,
      name: "Explore Partnership Opportunities",
      image: require("/public/assets/book/img6.png"),
      content:
        "Join Duomo's esteemed list of corporate partners and experience the unparalleled benefits of premium accommodation tailored to your business needs. Contact us today to explore partnership opportunities and elevate your corporate travel experience.",
    },
  ];
  return (
    <div className="bg-[#CF9A2C]">
      <div className=" xl:pt-24 xl:pb-28 py-14">
        <div className="xl:mx-[10%] lg:mx-[7%] mx-[5%] flex justify-center">
          <div data-aos="fade-up">
            <h1 className="xl:text-[48px] lg:text-[40px] sm:text-[36px] text-[30px] font-bold xl:leading-[58px] sm:leading-[48px] leading-[32px] text-[#011E3C] md:tracking-[-2px] tracking-[-1px] inter-font">
              Corporate Partners
            </h1>
            <div className="xl:w-[240px] lg:w-[200px] sm:w-[180px] w-[160px] h-[5px] bg-[#001D3D] rounded-full mt-2"></div>
          </div>
        </div>
        <div className="xl:mx-[8%] lg:mx-[6%] mx-[5%] md:mt-14 mt-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-12 gap-8">
            {data?.map((item, index) => (
              <div
                className="w-full bg-[#F7F7F7] md:p-5 p-4 rounded-lg "
                key={index}
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="imageContainer rounded-[10px]">
                  <Image
                    src={item?.image}
                    alt=""
                    className="serviceCard rounded-[10px]"
                  />
                </div>
                <div>
                  <h3 className="2xl:text-[24px] xl:text-[22px] sm:text-[20px] text-[18px] font-bold xl:leading-[29px] leading-[23px] text-[#131313] inter-font sm:py-2 py-1">
                    {item?.name}
                  </h3>
                </div>
                <div className="flex ">
                  <p className="xl:text-[16px] sm:text-[15px] text-[14px] font-medium xl:leading-[24px] leading-[20px] text-[#606060] inter-font">
                    {item?.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Corporate;

"use client";
import Image from "next/image";

const HowWorks = () => {
  const data = [
    {
      id: 1,
      name: "Enquire",
      image: require("/public/assets/become/m5.png"),
      content: "Contact us to submit your property for review.",
    },
    {
      id: 2,
      name: "Contract & Registration",
      image: require("/public/assets/become/m1.png"),
      content:
        "Our team will onboard your property, including registration with DET.",
    },
    {
      id: 3,
      name: "Inspect and Style",
      image: require("/public/assets/become/m4.png"),
      content:
        "Our experts will inspect the property and suggest modifications or maintenance.",
    },
    {
      id: 4,
      name: "List & Capture",
      image: require("/public/assets/become/m2.png"),
      content:
        "We will professionally photograph your property and list it across multiple platforms.",
    },
    {
      id: 5,
      name: "Enjoy the Earnings",
      image: require("/public/assets/become/m3.png"),
      content:
        "Sit back, relax, and watch your wallet grow as your property earns more.",
    },
  ];
  return (
    <div className="bg-[#001D3D] overflow-hidden ">
      <div className="xl:mx-[10%] lg:mx-[7%] mx-[5%] lg:py-20 py-14">
        <div className="xl:pl-10">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 className="xl:text-[48px] lg:text-[40px] sm:text-[36px] text-[30px] font-semibold xl:leading-[58px] sm:leading-[48px] leading-[32px] text-[#CF9A2C] tracking-[-2px] inter-font">
              How It Works?
            </h1>
            <div className="xl:w-[220px] lg:w-[180px] sm:w-[160px] w-[140px] h-[5px] bg-[#CF9A2C] rounded-full mt-2"></div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-16 xl:gap-12 gap-10 lg:mt-16 md:mt-10 mt-6">
            {data?.map((item, index) => (
              <div
                className=" w-full bg-[#F7F7F7] 2xl:p-8 p-6 rounded-md column-container "
                key={index}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="flex justify-center">
                  <Image
                    src={item?.image}
                    alt=""
                    className="3xl:h-[130px] lg:h-[100px] h-[80px] w-fit rotate-image"
                  />
                </div>
                <h3 className="2xl:text-[24px] xl:text-[22px] md:text-[20px] text-[18px] text-center font-bold xl:leading-[29px] leading-[23px] tracking-[-1px] text-[#151515] inter-font sm:py-2 py-1">
                  {item?.name}
                </h3>
                <p className="3xl:text-[20px] xl:text-[18px] sm:text-[16px] text-[14px] text-center font-medium xl:leading-[24px] leading-[20px] text-[#000] opacity-80 inter-font sm:py-2 py-1">
                  {item?.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowWorks;

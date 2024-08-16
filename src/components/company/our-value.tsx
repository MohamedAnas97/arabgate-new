"use client";
import Image from "next/image";
const Ourvalue = () => {
  const data = [
    {
      id: 1,
      name: "Innovation ",
      image: require("/public/assets/company/val1.png"),
      content:
        "We embrace innovation and continuously seek new ways to enhance the guest experience.",
    },
    {
      id: 2,
      name: "Hospitality",
      image: require("/public/assets/company/val2.png"),
      content:
        "We believe in the power of hospitality to create lasting connections and cherished memories.",
    },
    {
      id: 3,
      name: "Excellence",
      image: require("/public/assets/company/val3.png"),
      content:
        "We strive for excellence in everything we do, from property management to guest services.",
    },
    {
      id: 4,
      name: "Sustainability",
      image: require("/public/assets/company/val4.png"),
      content:
        "We are committed to sustainability and responsible tourism practices to protect our planet for future generations.",
    },
  ];
  return (
    <div className="bg-[#CF9A2C] mb-6">
      <div className=" xl:pt-24 xl:pb-28 py-14">
        <div className="xl:mx-[8%] lg:mx-[6%] mx-[5%]">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-12 xl:gap-10 gap-6">
            <div
              className="md:col-span-2 value-banner rounded-md xl:pl-[11%] sm:pl-[8%] pl-[5%] xl:pt-[10%] sm:pt-[7%] pt-[4%] lg:h-full md:h-[383px] h-[340px]"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h1 className="xl:text-[48px] lg:text-[40px] sm:text-[36px] text-[30px] font-bold xl:leading-[58px] sm:leading-[48px] leading-[32px] text-[#011E3C] md:tracking-[-2px] tracking-[-1px] inter-font">
                Our Values
              </h1>
              <div className="xl:w-[170px] lg:w-[150px] sm:w-[130px] w-[110px] h-[5px] bg-[#001D3D] rounded-full mt-2"></div>
            </div>
            {data?.map((item, index) => (
              <div
                className="w-full bg-[#F7F7F7] md:p-5 p-4 rounded-lg "
                key={index}
                data-aos="zoom-in-up"
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
                  <p className="xl:text-[16px] sm:text-[15px] text-[14px] font-medium xl:leading-[22px] leading-[20px] text-[#606060] inter-font">
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
export default Ourvalue;

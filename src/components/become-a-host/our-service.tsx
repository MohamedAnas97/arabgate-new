"use client";
import Image from "next/image";
const OurServices = () => {
  const data = [
    {
      id: 1,
      name: "Property Listing & Photography:",
      image: require("/public/assets/become/op.png"),
      content:
        "We create captivating and comprehensive property listings designed to attract potential guests. Our expert team highlights your property's unique features and amenities through compelling descriptions and high-quality photographs. By showcasing your property's charm and appeal, we ensure it stands out and captures the interest of prospective guests.",
    },
    {
      id: 2,
      name: "Professional Cleaning & Housekeeping:",
      image: require("/public/assets/become/op1.png"),
      content:
        "Our team of highly trained professionals ensures your property is immaculately maintained. We use industry-leading techniques and eco-friendly products to provide thorough and consistent housekeeping services. With our meticulous attention to detail, we guarantee a spotless environment that leaves a lasting impression on your guests.",
    },
    {
      id: 3,
      name: "Premium Bath and Bed Essentials:",
      image: require("/public/assets/become/op2.png"),
      content:
        "Elevate your guests' experience with our luxurious toiletries and linen. We provide high-quality, premium products, including soft, sumptuous towels, crisp bed linens, and elegant toiletries. Every detail is considered to ensure your guests enjoy the comfort and luxury of a five-star hotel during their stay.",
    },
    {
      id: 4,
      name: "Personalized Stay Experiences:",
      image: require("/public/assets/become/op4.png"),
      content:
        "Make each stay unforgettable with our personalized guest experiences. From custom welcome packs to tailored local recommendations, we go the extra mile to ensure your guests feel special and well-cared for. Our dedicated concierge team is available to assist with reservations, activity planning, and any special requests, ensuring a unique and memorable stay.",
    },
    {
      id: 5,
      name: "Elite Guest Assistance:",
      image: require("/public/assets/become/op3.png"),
      content:
        "Our commitment to excellence extends to our customer support. Available 24/7, our responsive and friendly support team is always on hand to address any queries or concerns. Whether it’s a booking issue or a maintenance request, we ensure prompt and effective solutions, providing peace of mind for both hosts and guests.",
    },
  ];

  return (
    <div style={{ backgroundColor: "rgba(92, 165, 246, 0.2)" }}>
      <div className=" lg:py-20 py-14">
        <div className="xl:mx-[10%] lg:mx-[7%] mx-[5%]">
          <div data-aos="fade-up">
            <h1 className="xl:text-[48px] lg:text-[40px] sm:text-[36px] text-[30px] font-bold xl:leading-[58px] sm:leading-[48px] leading-[32px] text-[#011E3C] md:tracking-[-2px] tracking-[-1px] inter-font">
              Our Services
            </h1>
          </div>
          <div className="xl:w-[240px] lg:w-[200px] sm:w-[180px] w-[160px] h-[5px] bg-[#001D3D] rounded-full mt-2"></div>
          <div className="mt-4" data-aos="fade-up" data-aos-duration="1000">
            <p className="sm:text-[16px] text-[14px] font-medium text-[#000] sm:leading-[26px] leading-[22px] inter-font">
              We pride ourselves on offering a comprehensive suite of services
              designed to elevate the hosting experience and delight your
              guests. From creating captivating property listings and
              maintaining immaculate homes to providing luxurious amenities and
              personalized experiences, our dedicated team ensures every aspect
              of property management is handled with the utmost care and
              professionalism. Explore our range of services and discover how we
              can help you provide an exceptional stay for your guests, ensuring
              they return time and time again.
            </p>
          </div>
        </div>
        <div className="xl:mx-[8%] lg:mx-[6%] mx-[5%]">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-x-10 md:gap-x-8 xl:gap-y-14 md:gap-y-10 gap-y-8 mt-10">
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
                    className="serviceCard rounded-[10px] "
                  />
                </div>
                <h3 className="2xl:text-[24px] xl:text-[22px] sm:text-[20px] text-[18px] font-bold xl:leading-[29px] leading-[23px] text-[#131313] inter-font sm:py-2 py-1">
                  {item?.name}
                </h3>
                <p className="xl:text-[16px] sm:text-[15px] text-[14px] font-medium xl:leading-[24px] leading-[20px] text-[#606060] inter-font">
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
export default OurServices;

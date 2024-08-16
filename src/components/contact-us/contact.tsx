"use client";
import Image from "next/image";
const Contact = () => {
  const data = [
    {
      id: 1,
      name: "General Enquiries",
      content:
        "For general inquiries about Duomo, our services, or any other questions you may have, please contact us at:",
      link: ["Email:", "Phone:", "Address:"],
    },
    {
      id: 2,
      name: "Customer Care",
      content:
        "Our dedicated customer care team is here to assist you with any issues, concerns, or feedback you may have. Reach out to us for personalized assistance at:",
      link: ["Email:", "Phone:"],
    },
    {
      id: 3,
      name: "Sales",
      content:
        "Interested in partnering with Duomo or exploring our services for your property? Contact our sales team to learn more about our offerings and how we can help you achieve your goals.",
      link: ["Email:", "Phone:"],
    },
  ];

  return (
    <div className="xl:ml-[10%] xl:mr-[11%] lg:mx-[7%] md:mx-[5%] mx-0 xl:mb-32 md:mb-24 mb-16">
      <div
        style={{ backgroundColor: "rgba(92, 165, 246, 0.2)" }}
        className="md:rounded-lg"
      >
        <div className="lg:py-12 py-6">
          <div className="xl:mx-[7%] lg:mx-[5%] mx-[5%]">
            <div data-aos="fade-up">
              <h1 className="xl:text-[48px] lg:text-[40px] sm:text-[36px] text-[30px] font-bold xl:leading-[58px] sm:leading-[48px] leading-[32px] text-[#011E3C] md:tracking-[-2px] tracking-[-1px] inter-font">
                Contact Us:
              </h1>
              <div className="xl:w-[130px] lg:w-[120px] sm:w-[100px] w-[80px] h-[5px] bg-[#001D3D] rounded-full mt-2"></div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-x-16 lg:gap-x-12 xl:gap-y-10 lg:gap-y-8 md:gap-8 gap-6 mt-8">
              {data?.map((item) => (
                <div
                  className="bg-[#FFFFFF] xl:p-7 sm:p-5 p-4 border-[rgba(0,0,0,0.2)] lg:border-[2px] border-[1px] rounded-md "
                  key={item.id}
                  data-aos="zoom-in"
                >
                  <h2 className="3xl:text-[40px] 2xl:text-[38px] xl:text-[36px] md:text-[32px] sm:text-[28px] text-[24px] font-bold leading-[48px] inter-font 3xl:tracking-[-2.5px] lg:tracking-[-2px] tracking-[-1px] text-[#011E3C]">
                    {item?.name}
                  </h2>
                  <p className="sm:text-[16px] text-[15px] font-medium leading-[24px] inter-font text-[#606060] my-4">
                    {item?.content}
                  </p>
                  {item?.link?.map((list, index) => (
                    <h6
                      className="sm:text-[16px] text-[15px] font-medium leading-[26px] inter-font text-[#001D3D] "
                      key={index}
                    >
                      {list}
                    </h6>
                  ))}
                </div>
              ))}
              <div
                className="bg-[#FFFFFF] xl:p-7 sm:p-5 p-4 border-[rgba(0,0,0,0.2)] lg:flex lg:flex-col lg:justify-between lg:border-[2px] border-[1px] rounded-md lg:my-2"
                data-aos="zoom-in"
              >
                <div>
                  <h2 className="3xl:text-[40px] 2xl:text-[38px] xl:text-[36px] md:text-[32px] sm:text-[28px] text-[24px] font-bold leading-[48px] inter-font 3xl:tracking-[-2.5px] lg:tracking-[-2px] tracking-[-1px] text-[#011E3C]">
                    Connect with Us
                  </h2>
                </div>
                <div>
                  <p className="text-[16px] font-medium leading-[24px] inter-font text-[#606060] lg:mb-4 lg:mt-0 my-4">
                    Stay connected with Duomo and receive updates, promotions,
                    and travel inspiration by following us on social media:
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="mr-2">
                    <Image
                      src={require("/public/assets/contact/face.png")}
                      alt=""
                      className="h-[20px] w-fit cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/profile.php?id=61554947276675",
                          "_blank"
                        )
                      }
                    />
                  </div>
                  <div className="mx-2">
                    <Image
                      src={require("/public/assets/contact/insta.png")}
                      alt=""
                      className="h-[18px] w-fit cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/myduomo",
                          "_blank"
                        )
                      }
                    />
                  </div>
                  <div className="mx-2">
                    <Image
                      src={require("/public/assets/contact/tiktok.png")}
                      alt=""
                      className="h-[18px] w-[18px] cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://www.tiktok.com/@myduomo?_t=8im50nOox3I&_r=1",
                          "_blank"
                        )
                      }
                    />
                  </div>
                  <div className="ml-2">
                    <Image
                      src={require("/public/assets/contact/link.png")}
                      alt=""
                      className="h-[18px] w-fit cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/company/duomotourism",
                          "_blank"
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

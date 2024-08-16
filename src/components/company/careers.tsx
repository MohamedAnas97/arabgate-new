"use client";
import Image from "next/image";
const Careers = () => {
  const data = [
    {
      id: 1,
      name: "Join the Duomo Team",
      content:
        "Are you passionate about hospitality, driven by excellence, and eager to be part of a dynamic team? Duomo offers exciting career opportunities for individuals who share our commitment to redefining the world of holiday homes.",
    },
    {
      id: 2,
      name: "Why Duomo?",
      content:
        "We believe in fostering a culture of collaboration, innovation, and growth. As a member of our team, you'll have the opportunity to work alongside industry professionals, contribute to meaningful projects, and make a real impact on the guest experience.",
    },
    {
      id: 3,
      name: "What We Look For",
      content:
        "We're seeking talented individuals with a passion for hospitality, a strong work ethic, and a desire to deliver exceptional service. We offer opportunities for growth and development in a supportive and dynamic environment.",
    },
    {
      id: 4,
      name: "Current Job Openings",
      content:
        "Ready to take the next step in your career? Explore our current job openings and submit your application online. ",
    },
  ];
  return (
    <div style={{ backgroundColor: "rgba(92, 165, 246, 0.2)" }}>
      <div className="lg:py-20 py-14">
        <div className="2xl:mx-[14%] xl:mx-[10%] lg:mx-[7%] mx-[5%]">
          <div data-aos="fade-up">
            <h1 className="xl:text-[48px] lg:text-[40px] sm:text-[36px] text-[30px] font-bold xl:leading-[58px] sm:leading-[48px] leading-[32px] text-[#011E3C] md:tracking-[-2px] tracking-[-1px] inter-font">
              Careers
            </h1>
            <div className="xl:w-[140px] lg:w-[130px] sm:w-[110px] w-[90px] h-[5px] bg-[#001D3D] rounded-full mt-2"></div>
          </div>
          <div className="lg:my-12 my-7" data-aos="fade-up">
            <Image src={require("/public/assets/company/career.png")} alt="" />
          </div>
          <div>
            {data?.map((item, index) => (
              <div className="w-full " key={index} data-aos="fade-up">
                <h3 className="2xl:text-[40px] xl:text-[36px] sm:text-[32px] text-[28px] font-bold xl:leading-[48px] xl:tracking-[-2px] tracking-[-1px] leading-[38px] text-[#001D3D] inter-font xl:pb-5 md:pb-4 pb-3">
                  {item?.name}
                </h3>
                <p className="3xl:text-[20px] 2xl:text-[19px] xl:text-[18px] sm:text-[16px] text-[15px] font-medium xl:leading-[28px] leading-[22px] text-[#001D3D] inter-font xl:pb-16 md:pb-12 pb-8 opacity-75">
                  {item?.content}
                </p>
              </div>
            ))}
          </div>
          <div
            className="border-[1px] border-[rgba(0,0,0,0.3)] rounded-md xl:pl-12 xl:pr-24 md:px-8 p-3 pt-6"
            data-aos="fade-up"
          >
            <h2 className="text-center 2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] text-[24px] md:tracking-[-1px] tracking-none xl:leading-[48px] leading-[38px] inter-font font-bold text-[#212123]">
              Open positions
            </h2>
            <div className="py-6">
              <div className="sm:overflow-x-none overflow-x-auto custom-scrollbar ">
                <table className="min-w-[700px] w-full ">
                  <thead>
                    <tr>
                      <th className="text-left inter-font text-[15px] uppercase leading-[16px] font-semibold text-[#5C5C5C] w-[40%] p-4">
                        Position
                      </th>
                      <th className="text-left inter-font text-[16px] leading-[24px] font-normal text-[#212123] w-[20%] p-4">
                        Department
                      </th>
                      <th className="text-left inter-font text-[16px] leading-[24px] font-normal text-[#212123] w-[20%] p-4">
                        Commitment
                      </th>
                      <th className="text-left inter-font text-[16px] leading-[24px] font-normal text-[#212123] w-[20%] p-4">
                        Location
                      </th>
                    </tr>
                  </thead>
                  {/* <tbody>
                    <tr className="bg-[#fff] ">
                      <td className="text-left inter-font xl:text-[18px] text-[16px] leading-[24px] font-medium  text-[#212123] !rounded-md pl-4 py-5">
                        <div className="flex items-center">
                          <h6>No Available </h6>
                          <Image
                            src={require("/public/assets/company/arrow.png")}
                            alt=""
                            className="h-[11px] w-fit opacity-30 ml-1 rounded-md"
                          />
                        </div>
                      </td>
                      <td className="text-left inter-font xl:text-[16px] text-[15px] leading-[24px] font-normal text-[#212123] w-[15%] xl:px-4 px-3 xl:py-5 py-4">
                      -
                      </td>
                      <td className="text-left inter-font xl:text-[16px] text-[15px] leading-[24px] font-normal text-[#212123] w-[15%] xl:px-4 px-3 xl:py-5 py-4">
                       -
                      </td>
                      <td className="text-left inter-font xl:text-[16px] text-[15px] leading-[24px] font-normal text-[#212123] w-[15%] xl:px-4 px-3 xl:py-5 py-4 rounded-r-md">
                      -
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left inter-font xl:text-[18px] text-[16px] leading-[24px] flex items-center font-medium w-full text-[#212123] rounded-md xl:px-4 px-3 xl:py-5 py-4">
                        <h6 className="rounded-md mt-2">Open application </h6>
                        <Image
                          src={require("/public/assets/company/arrow.png")}
                          alt=""
                          className="h-[11px] w-fit opacity-30 ml-1 rounded-md"
                        />
                      </td>
                      <td className="text-left inter-font xl:text-[16px] text-[15px] leading-[24px] font-normal text-[#212123] w-[20%] xl:px-4 px-3 xl:py-5 py-4">
                        Any team
                      </td>
                      <td className="text-left inter-font xl:text-[16px] text-[15px] leading-[24px] font-normal text-[#212123] w-[20%] xl:px-4 px-3 xl:py-5 py-4">
                        Full time
                      </td>
                      <td className="text-left inter-font xl:text-[16px] text-[15px] leading-[24px] font-normal text-[#212123] w-[20%] xl:px-4 px-3 xl:py-5 py-4">
                        European Union / United States
                      </td>
                    </tr>
                  </tbody> */}
                </table>
                <div className="bg-[#fff] w-full">
                  <h4 className="text-center inter-font xl:text-[18px] text-[16px] leading-[24px] font-medium  text-[#212123] !rounded-md pl-4 py-5">
                 Currently no opportunities available
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Careers;

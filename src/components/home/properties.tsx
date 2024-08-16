"use client";
import Image from "next/image";
const data = [
  {
    id: 1,
    images: require("/public/assets/home/h7.png"),
    name: "Interior Fit-out and Renovation",
    content:
      "This involves the process of making interior spaces suitable for occupation. It includes tasks like space planning, installing fixtures, flooring, walls, ceilings, and other interior elements.",
  },
  {
    id: 2,
    images: require("/public/assets/home/h2.png"),
    name: "Electrical Services",
    content:
      "This encompasses the installation, repair, and maintenance of electrical systems in residential, commercial, and industrial buildings. It includes wiring, lighting, outlets, circuit breakers, and other electrical components.",
  },
  {
    id: 3,
    images: require("/public/assets/home/h4.png"),
    name: "Plumbing Services",
    content:
      "Prompt and reliable plumbing services for residential, commercial, and industrial spaces. Trust our skilled team for comprehensive solutions to ensure the efficiency and safety of your water and drainage systems.",
  },
  {
    id: 4,
    images: require("/public/assets/home/h1.png"),
    name: "HVAC Maintenance and Repair",
    content:
      "HVAC stands for Heating, Ventilation, and Air Conditioning. This service involves maintaining, repairing, and installing heating and cooling systems in buildings.",
  },
  {
    id: 5,
    images: require("/public/assets/home/h8.png"),
    name: "Painting and Epoxy",
    content:
      "Painting services involve applying paint to surfaces, both interior and exterior, to enhance aesthetics and protect against corrosion. Epoxy coatings are often used for flooring and provide durability and chemical resistance.",
  },
  {
    id: 6,
    images: require("/public/assets/home/h88.png"),
    name: "CCTV Security Systems",
    content:
      "Closed-Circuit Television systems are used for surveillance and security purposes. Installation and maintenance of CCTV systems help monitor and secure premises.",
  },
  {
    id: 7,
    images: require("/public/assets/home/h5.png"),
    name: "Digital Displays & Signages",
    content:
      "This involves the installation and maintenance of digital signage solutions for advertising, information display, and branding purposes.",
  },
  {
    id: 8,
    images: require("/public/assets/home/h6.png"),
    name: "Display Fixtures for Retail & Exhibitions",
    content:
      "This involves designing, fabricating, and installing display fixtures for retail stores, exhibitions, trade shows, and other commercial spaces to showcase products effectively.",
  },
];

const Properties = () => {
  return (
    <div className="py-16">
      <h4 className="text-[16px] text-center font-bold manrope-font text-[#a88c61]">Our Services</h4>
      <h2 className="xl:text-[40px] md:text-[36px] text-[24px] font-bold josefin-font text-[#111827] text-center pt-2">
        How Can We Help You Today?
      </h2>
      <div className="2xl:mx-[18%] xl:mx-[12%] md:mx-[8%] mx-[5%] py-10">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-12 xl:gap-x-10 md:gap-x-8 md:gap-y-10 gap-y-6">
          {data?.map((items, index) => (
            <div key={index} className="shadow-md rounded-lg bg-[#ffffffd4]">
              <div>
                <Image
                  src={items?.images}
                  alt=""
                  className="rounded-t-md w-full md:h-full h-[320px] !object-cover overflow-hidden"
                />
              </div>
              <div className="p-4">
                <h3 className="xl:text-[18px] text-[16px] font-bold 2xl:leading-[28px] leading-[23px] text-[#111827] manrope-font truncate-2-lines truncate-2-lines1">
                  {items?.name}
                </h3>
                <p className="xl:text-[15px] md:text-[14px] xl:leading-[22px] leading-[20px] text-[#111827] truncate-3-lines font-medium manrope-font my-2">
                  {items?.content}
                </p>
                <div className="flex items-center justify-end">
                  <div className="flex items-center justify-center rounded-[5px] transition ease-in-out delay-150 duration-200 cursor-pointer ">
                    <div className="flex items-center ">
                      <h6 className="text-[14px] font-bold leading-[20px] text-[#a88c61] manrope-font">
                        Read More
                      </h6>
                      <Image
                        src={require("/public/assets/home/up-arrow.png")}
                        alt=""
                        className="h-[18px] w-fit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;

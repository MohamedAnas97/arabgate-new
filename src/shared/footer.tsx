"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Footer = () => {
  const router = useRouter();
  const data = [
    {
      id: 1,
      name: "Company",
      content: ["About Duomo", "Careers", "Blogs"],
    },
    {
      id: 2,
      name: "Become a Host",
      content: ["For Property Owners", "Why host with us?"],
    },
    {
      id: 3,
      name: "Book Your Stay",
      content: ["Short Term Rentals", "Mid Term Rentals"],
    },
    {
      id: 4,
      name: "Policies",
      content: ["Terms & Conditions", "Privacy Policy"],
    },
    {
      id: 5,
      name: "Contact Us",
      content: ["Enquiries", "Help Center"],
    },
  ];
  return (
    <div className="bg-[#001D3D] ">
      <div className="xl:ml-[10%] xl:mr-[7%] lg:mx-[7%] mx-[5%] 2xl:pt-32 xl:pb-10 sm:pb-8 pb-7 xl:pt-24 lg:pt-20 pt-14 xl:pl-10">
        <div className=" grid 2xl:gap-x-6 xl:gap-x-4 gap-x-0 xl:gap-y-0 gap-y-6 xl:grid-cols-6 sm:grid-cols-3 grid-cols-2 xl:pb-12 pb-10">
          <div>
            <Image
              src={require("/public/assets/home/logo1.png")}
              alt=""
              className="sm:w-fit w-[120px] md:h-[28px] h-[25px] cursor-pointer"
              onClick={() => {
                router.push("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
          {data?.map((item, index) => (
            <div key={index}>
              <ul>
                <li className="rubik-font 3xl:text-[24px] 2xl:text-[22px] xl:text-[20px] lg:text-[22px] sm:text-[20px] text-[18px] font-medium lg:leading-[28px] leading-[22px] text-[#fff] sm:mb-2 mb-1">
                  {item?.name}
                </li>
                {item?.content?.map((list, index) => (
                  <li
                    className="rubik-font 3xl:text-[18px] 2xl:text-[17px] xl:text-[15px] lg:text-[16px] sm:text-[15px] text-[14px] font-normal sm:leading-[21px] leading-[18px] text-[#fff] sm:py-2 py-1"
                    key={index}
                  >
                    {list === "Privacy Policy" ? (
                      <Link href="/privacy-policy">{list}</Link>
                    ) : list === "Terms & Conditions" ? (
                      <Link href="/terms-and-conditions">{list}</Link>
                    ) : list === "About Duomo" ? (
                      <Link href="/company">{list}</Link>
                    ) : list === "Blogs" ? (
                      <Link href="/blogs">{list}</Link>
                    ) : list === "Careers" ? (
                      <Link href="/company#careers">{list}</Link>
                    ) : list === "For Property Owners" ? (
                      <Link href="/become-a-host">{list}</Link>
                    ) : list === "Why host with us?" ? (
                      <Link href="/become-a-host">{list}</Link>
                    ) : list === "Short Term Rentals" ? (
                      <Link href="/book-your-stay">{list}</Link>
                    ) : list === "Mid Term Rentals" ? (
                      <Link href="/book-your-stay">{list}</Link>
                    ) : list === "Enquiries" ? (
                      <Link href="/become-a-host">{list}</Link>
                    ) : list === "Help Center" ? (
                      <Link href="/help-center">{list}</Link>
                    ) : (
                      list
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex sm:flex-row flex-col-reverse justify-between border-t-[1px] border-[#fff] xl:pt-10 sm:pt-8 pt-7">
          <div className="sm:mt-0 mt-2">
            <h6 className="sm:text-[16px] text-[14px] text-[#fff] sm:leading-[23px] leading-[20px] rubik-font sm:text-left text-center">
              © 2024 Duomo Holiday Homes LLC, All rights reserved
            </h6>
          </div>
          <div className="flex items-center sm:justify-start justify-center ">
            <div className="mr-2">
              <Image
                src={require("/public/assets/contact/facebook.png")}
                alt=""
                className="sm:h-[20px] h-[18px] w-fit cursor-pointer"
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
                src={require("/public/assets/contact/instagram.png")}
                alt=""
                className="sm:h-[18px] h-[16px] w-fit cursor-pointer"
                onClick={() =>
                  window.open("https://www.instagram.com/myduomo", "_blank")
                }
              />
            </div>
            <div className="mx-2">
              <Image
                src={require("/public/assets/contact/tiktok.png")}
                alt=""
                className="sm:h-[18px] h-[16px] w-fit cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.tiktok.com/@myduomo?_t=8nvn54Mr8fC&_r=1",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="ml-2">
              <Image
                src={require("/public/assets/contact/linkedin.png")}
                alt=""
                className="sm:h-[18px] h-[16px] w-fit cursor-pointer"
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
  );
};
export default Footer;

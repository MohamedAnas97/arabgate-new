"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Sidenav from "./sidenav";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState("0");
  const [servicesOpen, setServicesOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleServicesHover = (isOpen: any) => {
    setServicesOpen(isOpen);
  };

  return (
    <div className="fixed bg-[#ffffffd4] w-full z-50 border-b-[1px] border-[#E4E4E4]">
      <div className="px-[2%] py-4 flex items-center justify-between ">
        <div>
          {/* <Image
            src={require("/public/assets/home/logo.png")}
            alt="Logo"
            className="md:h-[28px] h-[25px] md:w-[120px] w-[120px] cursor-pointer"
            onClick={() => {
              router.push("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          /> */}
        </div>
        <div className="lg:block hidden">
          <ul className="flex">
            <div className="relative flex cursor-pointer mx-6">
              <li
                className="text-[14px] font-bold leading-[20px] text-center text-[#111827] manrope-font"
                onMouseEnter={() => handleServicesHover(true)}
                onMouseLeave={() => handleServicesHover(false)}
              >
                Our Services
              </li>
              {servicesOpen && (
                <div
                  onMouseEnter={() => handleServicesHover(true)}
                  onMouseLeave={() => handleServicesHover(false)}
                >
                  <ul className="absolute left-[-45px] pt-7  ">
                    <div className="bg-[#fff] shadow-gray-700 shadow-md py-4 px-4 w-[300px] z-10 text-left">
                      <div>
                        <li
                          className="text-[14px] font-bold leading-[20px] my-[7px] manrope-font book-animation"
                          onClick={() => {
                            window.open("https://myduomo.holidayfuture.com/");
                            handleServicesHover(false);
                          }}
                        >
                          Interior Fit-Out and Renovation
                        </li>
                      </div>
                      <div>
                        <li
                          className={`text-[14px] font-bold leading-[20px] my-[7px] manrope-font book-animation ${
                            pathname === "/book-your-stay/our-services"
                              ? "text-[#cf9a2c]"
                              : "text-[#161E2D]"
                          }`}
                          onClick={() => {
                            router.push("/book-your-stay/our-services");
                            handleServicesHover(false);
                          }}
                        >
                          Electrical Services
                        </li>
                      </div>
                      <div>
                        <li
                          className={`text-[14px] font-bold leading-[20px] my-[7px] manrope-font book-animation ${
                            pathname === "/book-your-stay/corporate-partners"
                              ? "text-[#cf9a2c]"
                              : "text-[#161E2D]"
                          }`}
                          onClick={() => {
                            router.push("/book-your-stay/corporate-partners");
                            handleServicesHover(false);
                          }}
                        >
                          Plumbing Services
                        </li>
                      </div>
                      <div>
                        <li
                          className={`text-[14px] font-bold leading-[20px] my-[7px] manrope-font book-animation ${
                            pathname === "/book-your-stay/corporate-partners"
                              ? "text-[#cf9a2c]"
                              : "text-[#161E2D]"
                          }`}
                          onClick={() => {
                            router.push("/book-your-stay/corporate-partners");
                            handleServicesHover(false);
                          }}
                        >
                          AC Maintenance and Repair
                        </li>
                      </div>
                      <div>
                        <li
                          className={`text-[14px] font-bold leading-[20px] my-[7px] manrope-font book-animation ${
                            pathname === "/book-your-stay/corporate-partners"
                              ? "text-[#cf9a2c]"
                              : "text-[#161E2D]"
                          }`}
                          onClick={() => {
                            router.push("/book-your-stay/corporate-partners");
                            handleServicesHover(false);
                          }}
                        >
                          Painting and Epoxy
                        </li>
                      </div>
                      <div>
                        <li
                          className={`text-[14px] font-bold leading-[20px] my-[7px] manrope-font book-animation ${
                            pathname === "/book-your-stay/corporate-partners"
                              ? "text-[#cf9a2c]"
                              : "text-[#161E2D]"
                          }`}
                          onClick={() => {
                            router.push("/book-your-stay/corporate-partners");
                            handleServicesHover(false);
                          }}
                        >
                          CCTV Security Systems
                        </li>
                      </div>
                      <div>
                        <li
                          className={`text-[14px] font-bold leading-[20px] my-[7px] manrope-font book-animation ${
                            pathname === "/book-your-stay/corporate-partners"
                              ? "text-[#cf9a2c]"
                              : "text-[#161E2D]"
                          }`}
                          onClick={() => {
                            router.push("/book-your-stay/corporate-partners");
                            handleServicesHover(false);
                          }}
                        >
                          Digital Displays & Signages
                        </li>
                      </div>
                      <div>
                        <li
                          className={`text-[14px] font-bold leading-[20px] my-[7px] manrope-font book-animation ${
                            pathname === "/book-your-stay/corporate-partners"
                              ? "text-[#cf9a2c]"
                              : "text-[#161E2D]"
                          }`}
                          onClick={() => {
                            router.push("/book-your-stay/corporate-partners");
                            handleServicesHover(false);
                          }}
                        >
                          Display Fixtures for Retail & Exhibitions
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              )}
            </div>
            <div
              className="flex cursor-pointer  "
            >
              <li
                className="text-[14px] font-bold leading-[20px] text-center text-[#161E2D] manrope-font"
                onClick={() => {
                  router.push("/company");
                }}
              >
                About Us
              </li>
            </div>
            <div className="flex cursor-pointer mx-6 ">
              <li
                className="text-[14px] font-bold leading-[20px] text-center text-[#161E2D] manrope-font "
                onClick={() => {
                  router.push("/company");
                }}
              >
                Contact Us
              </li>
            </div>
          </ul>
        </div>
        <div className="lg:block hidden ">
          <button
            className="text-[14px] font-bold leading-[20px] text-center manrope-font px-8 py-3 bg-[#98753F] text-[#fff] transition ease-in-out delay-150 duration-200 rounded-md "
            onClick={() => {
              router.push("/contact-us");
            }}
          >
          Get in Touch
          </button>
        </div>
        <div className="block lg:hidden flex items-center">
          <div
            className="cursor-pointer mb-1"
            onClick={() => {
              setSidebarOpen(`250px`);
            }}
          >
            <Image
              src={require("/public/assets/home/more.png")}
              alt=""
              className="md:w-[35px] md:h-[35px] w-[30px] h-[30px]"
            />
          </div>
        </div>
      </div>
      <Sidenav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default Header;

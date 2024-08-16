"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SideNav = ({ sidebarOpen, setSidebarOpen }: any) => {
  const router = useRouter();
  const handleSidebar = (): any => {
    setSidebarOpen(sidebarOpen === "300px" ? "0px" : "");
  };

  return (
    <div
      className={`sidenav-container inset-0 bg-black bg-opacity-50 z-50 `}
      style={{ width: sidebarOpen }}
    >
      <div className=" bg-white h-full shadow-md z-50 p-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <Image
              src={require("/public/assets/home/logo.png")}
              alt="Logo"
              className="md:h-[24px] h-[22px] w-fit cursor-pointer"
              onClick={() => {
                router.push("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
                handleSidebar();
              }}
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              handleSidebar();
            }}
          >
            <Image
              src={require("/public/assets/home/close.png")}
              alt=""
              className="h-[15px] w-[15px]"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center mb-4">
            <div className="mr-2">
              <Image
                src={require("/public/assets/contact/face.png")}
                alt=""
                className="h-[18px] w-fit cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/profile.php?id=61554947276675",
                    "_blank"
                  );
                  handleSidebar();
                }}
              />
            </div>
            <div className="mx-2">
              <Image
                src={require("/public/assets/contact/insta.png")}
                alt=""
                className="h-[18px] w-fit cursor-pointer"
                onClick={() => {
                  window.open("https://www.instagram.com/myduomo", "_blank");
                  handleSidebar();
                }}
              />
            </div>
            <div className="mx-2">
              <Image
                src={require("/public/assets/contact/tiktok1.png")}
                alt=""
                className="h-[18px] w-[18px] cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.tiktok.com/@myduomo?_t=8im50nOox3I&_r=1",
                    "_blank"
                  );
                  handleSidebar();
                }}
              />
            </div>
            <div className="ml-2">
              <Image
                src={require("/public/assets/contact/link.png")}
                alt=""
                className="h-[18px] w-fit cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/duomotourism",
                    "_blank"
                  );
                  handleSidebar();
                }}
              />
            </div>
          </div>
        </div>
        <ul className="flex flex-col">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => {
              router.push("/become-a-host");
              handleSidebar();
            }}
          >
            <li className="text-[16px] font-semibold leading-[26px] text-left text-[#161E2D] josefin-font py-1">
              Become A Host
            </li>
          </div>
          <div
            className="flex justify-between items-center cursor-pointer mt-1"
            onClick={() => {
              window.open("https://myduomo.holidayfuture.com/");
              handleSidebar();
            }}
          >
            <li className="text-[16px] font-semibold leading-[26px] text-left text-[#161E2D] josefin-font py-1">
              Our Properties
            </li>
          </div>
          <div
            className="flex justify-between items-center cursor-pointer mt-1"
            onClick={() => {
              router.push("/book-your-stay/our-services");
              handleSidebar();
            }}
          >
            <li className="text-[16px] font-semibold leading-[26px] text-left text-[#161E2D] josefin-font py-1">
              Our Services
            </li>
          </div>
          <div
            className="flex justify-between items-center cursor-pointer mt-1"
            onClick={() => {
              router.push("/book-your-stay/corporate-partners");
              handleSidebar();
            }}
          >
            <li className="text-[16px] font-semibold leading-[26px] text-left text-[#161E2D] josefin-font py-1">
              Corporate Partners
            </li>
          </div>
          <div className="flex justify-between items-center mt-1">
            <li
              className="text-[16px] font-semibold leading-[26px] text-left cursor-pointer text-[#161E2D] josefin-font py-1"
              onClick={() => {
                router.push("/company");
                handleSidebar();
              }}
            >
              Company
            </li>
          </div>
          <div className="flex justify-center cursor-pointer bg-[#161E2D] mt-4 text-[#fff] rounded-md hover:text-[#161E2D] hover:bg-[#CF9A2C] transition ease-in-out delay-150 duration-200">
            <button
              className="text-[16px] font-semibold leading-[26px] text-left josefin-font py-1"
              onClick={() => {
                router.push("/contact-us");
                handleSidebar();
              }}
            >
              Contact Us
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

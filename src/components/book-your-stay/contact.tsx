"use client";
import axios from "axios";
import { notification } from "antd";
import React, { useState } from "react";
const Contact = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (message: any, description: any) => {
    api.open({
      message: message,
      description: description,
      duration: 0,
    });
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);

  const onChangeHandler = (key: any, value: any) => {
    setUser((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    setLoader(true);
    const payload = {
      full_name: user?.name,
      email: user?.email,
      phone_number: user?.number,
      contact_subject: user?.subject,
      contact_message: user?.message,
    };
    axios
      .post("https://duomo_api.gngtest.site/form/contact/submit", payload)
      .then((response) => {
        console.log("response", response);
        setLoader(false);
        setUser({
          name: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        });
        openNotification(
          "Success",
          "Thank you! Our team will get back to you at the earliest."
        );
      })
      .catch((error) => {
        console.error("Error response", error);
        setLoader(false);
        openNotification(
          "Error",
          "Something went wrong. Please try again later."
        );
      });
  };
  return (
    <div className="bg-[#EBEBEB]">
      {contextHolder}
      <div className="xl:mx-[10%] lg:mx-[7%] mx-[5%] flex lg:flex-row flex-col justify-between xl:py-24 md:py-20 py-12 ">
        <div className="xl:w-[42%] lg:w-[45%] w-full" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="2xl:text-[48px] xl:text-[40px] md:text-[36px] text-[30px] font-semibold 2xl:leading-[52px] xl:leading-[48px] md:leading-[38px] leading-[32px] text-[#011E3C] inter-font tracking-[-2px] md:mb-8 mb-5">
            Contact Us for Personalized Assistance
          </h2>
          <p className="xl:text-[18px] sm:text-[16px] text-[15px] font-normal xl:leading-[28px] leading-[23px] text-[#001D3D] opacity-75 inter-font ">
            Have questions or need assistance with your booking? Our dedicated
            team is here to help. Contact us via phone, email, or fill out the
            form below, and we&apos;ll be happy to assist you with any inquiries
            or special requests.
          </p>
        </div>
        <div
          className="xl:w-[42%] lg:w-[45%] w-full lg:mt-0 mt-6 "
          data-aos="fade-up"
        >
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8">
              <div className="border-b-[1px] border-[#001D3D]">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={user?.name}
                  required
                  onChange={(e) => onChangeHandler("name", e?.target?.value)}
                  className="w-full bg-[#EBEBEB] outline-none xl:text-[20px] md:text-[18px] sm:text-[16px] text-[15px] font-normal sm:leading-[45px] leading-[35px] text-[#001D3D] placeholder-contact sm:px-0 px-1"
                />
              </div>
              <div className="border-b-[1px] border-[#001D3D]">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={user?.email}
                  onChange={(e) => onChangeHandler("email", e?.target?.value)}
                  className="w-full bg-[#EBEBEB] outline-none xl:text-[20px] md:text-[18px] sm:text-[16px] text-[15px] font-normal sm:leading-[45px] leading-[35px] text-[#001D3D] placeholder-contact sm:px-0 px-1"
                />
              </div>
              <div className="border-b-[1px] border-[#001D3D] ">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={user?.number}
                  onChange={(e) => onChangeHandler("number", e?.target?.value)}
                  className="w-full bg-[#EBEBEB] outline-none xl:text-[20px] md:text-[18px] sm:text-[16px] text-[15px] font-normal sm:leading-[45px] leading-[35px] text-[#001D3D] placeholder-contact sm:px-0 px-1"
                />
              </div>
            </div>
            <div className="sm:mt-8 mt-4">
              <textarea
                cols={2}
                placeholder="Message"
                required
                value={user?.message}
                onChange={(e) => onChangeHandler("message", e?.target?.value)}
                className="w-full bg-[#EBEBEB] outline-none xl:text-[20px] md:text-[18px] sm:text-[16px] text-[15px] font-normal sm:leading-[40px] leading-[30px] text-[#001D3D] placeholder-contact sm:px-0 px-1 border-b-[1px] border-[#001D3D]"
              />
            </div>
            <div className="mt-8 flex sm:justify-start justify-center">
              <button
                type="submit"
                disabled={loader}
                className=" py-3 bg-[#001D3D] text-[#fff] hover:text-[#161E2D] hover:bg-[#CF9A2C] transition ease-in-out delay-150 duration-200 text-[16px] leading-[26px] text-center font-bold josefin-font rounded-md sm:w-[180px] w-full"
              >
                {loader ? "Please Wait..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;

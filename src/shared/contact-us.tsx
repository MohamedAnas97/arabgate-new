"use client";
import axios from "axios";
import { notification } from "antd";
import React, { useState } from "react";
const { getData } = require("country-list");

const ContactUs = () => {
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
    country: "",
    company_name: "",
    interested: "",
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
      country: user?.country,
      company_name: user?.company_name,
      interested: user?.interested,
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
          country: "",
          company_name: "",
          interested: "",
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
      <div className="xl:mx-[7%] lg:mx-[7%] mx-[5%] ">
        <div className="xl:ml-[3%] xl:pl-10 flex lg:flex-row flex-col justify-between xl:py-32 lg:py-20 md:py-16 py-12 h-full">
          <div className="xl:w-[42%] lg:w-[44%] w-full">
            <h2 className="xl:text-[48px] lg:text-[40px] sm:text-[36px] text-[30px] font-semibold xl:leading-[58px] sm:leading-[48px] leading-[32px] text-[#011E3C] inter-font tracking-[-2px] md:mb-8 mb-5">
              Contact Us
            </h2>
            <h6 className="xl:text-[24px] sm:text-[20px] text-[18px] font-medium xl:leading-[28px] leading-[23px] text-[#001D3D] opacity-80 tracking-[-0.3px] inter-font pb-1">
              Interested in Becoming a Host?{" "}
            </h6>
            <p className="2xl:text-[18px] sm:text-[16px] text-[15px] font-normal xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font ">
              We are thrilled that you&apos;re considering partnering with Duomo
              to become a host! Whether you have questions about our property
              management services, want to learn more about the hosting process,
              or are ready to get started, our team is here to assist you every
              step of the way. Reach out to us using any of the methods below,
              and let&apos;s embark on this exciting journey together.
            </p>
          </div>
          <div className="xl:w-[42%] lg:w-[44%] w-full lg:mt-0 mt-6">
            <form onSubmit={(e) => onSubmitHandler(e)}>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 ">
                <div className="border-b-[1px] border-[#001D3D]">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={user?.name}
                    required
                    onChange={(e) => onChangeHandler("name", e?.target?.value)}
                    className="w-full bg-[#EBEBEB] outline-none 3xl:text-[20px] 2xl:text-[19px] md:text-[18px] sm:text-[16px] text-[15px] font-normal sm:leading-[45px] leading-[35px] text-[#001D3D] placeholder-contact sm:px-0 px-1"
                  />
                </div>
                <div className="border-b-[1px] border-[#001D3D]">
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={user?.email}
                    onChange={(e) => onChangeHandler("email", e?.target?.value)}
                    className="w-full bg-[#EBEBEB] outline-none 3xl:text-[20px] 2xl:text-[19px] md:text-[18px] sm:text-[16px] text-[15px] font-normal sm:leading-[45px] leading-[35px] text-[#001D3D] placeholder-contact sm:px-0 px-1"
                  />
                </div>
                <div className="border-b-[1px] border-[#001D3D] ">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={user?.number}
                    onChange={(e) =>
                      onChangeHandler("number", e?.target?.value)
                    }
                    className="w-full bg-[#EBEBEB] outline-none 3xl:text-[20px] 2xl:text-[19px] md:text-[18px] sm:text-[16px] text-[15px] font-normal sm:leading-[45px] leading-[35px] text-[#001D3D] placeholder-contact sm:px-0 px-1"
                  />
                </div>
                <div className="relative sm:mt-0 mt-1">
                  <select
                    value={user?.country}
                    onChange={(e) =>
                      onChangeHandler("country", e?.target?.value)
                    }
                    className="w-full custom-select4 sm:absolute 3xl:top-[8px] 2xl:top-[8px] md:top-[10px] sm:top-[13px] bg-[#EBEBEB] 3xl:text-[20px] 2xl:text-[19px] md:text-[18px] sm:text-[16px] text-[15px] font-normal text-[#001D3D] placeholder-contact common-input border-b-[1px] border-[#001D3D] pb-2 outline-none custom-select"
                  >
                    <option
                      style={{ backgroundColor: "#EBEBEB", color: "#001D3D" }}
                      value="country"
                      className="outline-none"
                    >
                      Country
                    </option>
                    {getData().map((country: any) => (
                      <option
                        key={country.code}
                        style={{ backgroundColor: "#EBEBEB", color: "#001D3D" }}
                        value={country.code}
                        className="outline-none"
                      >
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="border-b-[1px] border-[#001D3D]">
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={user?.company_name}
                    onChange={(e) =>
                      onChangeHandler("company_name", e?.target?.value)
                    }
                    className="w-full bg-[#EBEBEB] outline-none 3xl:text-[20px] 2xl:text-[19px] md:text-[18px] sm:text-[16px] text-[15px] font-normal sm:leading-[45px] leading-[35px] text-[#001D3D] placeholder-contact sm:px-0 px-1"
                  />
                </div>
                <div className="relative sm:mt-0 mt-1 w-full">
                  <select
                    value={user?.interested}
                    onChange={(e) =>
                      onChangeHandler("interested", e?.target?.value)
                    }
                    className="w-full sm:absolute 2xl:top-[8px] md:top-[10px] sm:top-[13px] bg-[#EBEBEB] 3xl:text-[20px] 2xl:text-[19px] md:text-[18px] sm:text-[16px] text-[15px] font-normal text-[#001D3D] placeholder-contact common-input border-b-[1px] border-[#001D3D] pb-2 outline-none custom-select"
                  >
                    <option
                      style={{ backgroundColor: "#EBEBEB", color: "#001D3D" }}
                      value="interested_in"
                      className="outline-none"
                    >
                      Interested in
                    </option>
                    <option
                      style={{ backgroundColor: "#EBEBEB", color: "#001D3D" }}
                      value="property_management"
                      className="outline-none"
                    >
                      Property Management
                    </option>
                    <option
                      style={{ backgroundColor: "#EBEBEB", color: "#001D3D" }}
                      value="vecation_rentals"
                      className="outline-none"
                    >
                      Vacation Rentals
                    </option>
                  </select>
                </div>
              </div>
              <div className="sm:mt-8 mt-4">
                <textarea
                  cols={2}
                  placeholder="Message"
                  required
                  value={user?.message}
                  onChange={(e) => onChangeHandler("message", e?.target?.value)}
                  className="w-full bg-[#EBEBEB] outline-none 3xl:text-[20px] 2xl:text-[19px] md:text-[18px] sm:text-[16px] text-[15px] font-normal sm:leading-[40px] leading-[30px] text-[#001D3D] placeholder-contact sm:px-0 px-1 border-b-[1px] border-[#001D3D]"
                />
              </div>
              <div className="mt-8 flex sm:justify-start justify-center">
                <button
                  type="submit"
                  className="py-3 bg-[#001D3D] text-[#fff] hover:text-[#161E2D] hover:bg-[#CF9A2C] transition ease-in-out delay-150 duration-200 text-[16px] leading-[26px] text-center font-bold josefin-font rounded-md sm:w-[180px] w-full"
                  disabled={loader}
                >
                  {loader ? "Please Wait..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

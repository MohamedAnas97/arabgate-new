"use client";
import Image from "next/image";
const About = () => {
  return (
    <div className="bg-[#eaefdb] relative ">
      <div className="h-full">
        <Image
          src={require("/public/assets/home/hero-bg.png")}
          alt=""
          className="2xl:h-[600px] xl:h-[520px] lg:h-[450px] md:h-[600px] sm:h-[650px] h-[680px] "
        />
      </div>
      <div className="2xl:mx-[18%] xl:mx-[12%] md:mx-[8%] mx-[5%] flex lg:flex-row flex-col lg:justify-between justify-center items-center absolute top-0 h-full lg:py-0 sm:pt-12 pt-10 ">
        <div className="xl:w-[48%] lg:w-[50%] w-full">
          <h4 className="text-[17px] font-bold  manrope-font text-[#a88c61] pb-1">
            About Us
          </h4>
          <h2 className="2xl:text-[32px] xl:text-[28px] md:text-[24px] text-[20px] 2xl:leading-[38px] md:leading-[32px] leading-[26px] font-bold manrope-font text-[#111827] pb-3">
            We are UAE’s leading Home Improvement & Maintenance Experts
          </h2>
          <p className="xl:text-[17px] md:text-[16px] text-[15px] xl:leading-[26px] md:leading-[23px] leading-[20px] text-[#111827] font-semibold manrope-font my-2">
            Welcome to Arab Gate, your trusted source for top-notch maintenance
            services. With eight years of industry expertise, we specialize in
            tailored solutions for residential, commercial and industrial
            spaces. Our skilled team is committed to prompt, reliable and
            quality service. Choose arab gate for hassle-free maintenance,
            ensuring your spaces remain in optimal condition.
          </p>
        </div>
        <div className="xl:w-[45%] lg:w-[37%] md:w-[40%] sm:w-[60%] w-[70%] h-full flex items-end">
          <div>
            <Image src={require("/public/assets/home/person.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

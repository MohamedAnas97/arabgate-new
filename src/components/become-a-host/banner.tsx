"use client";
const Banner = () => {
  return (
    <div className="becomebanner 3xl:h-[940px] 2xl:h-[900px] md:h-[800px] h-[850px] flex md:items-end items-center ">
      <div className="xl:mx-[10%] lg:mx-[7%] mx-[5%] md:mb-[6%] mb-0">
        <div
          className="3xl:w-[75%] 2xl:w-[78%] xl:w-[80%] lg:w-[85%] w-full lg:p-8 md:p-6 p-4 rounded-lg"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <div className="lg:mb-12 xl:mb-10 mb-8">
            {" "}
            <h1 className="text-[#fff] 3xl:text-[64px] 2xl:text-[60px] xl:text-[52px] sm:text-[46px] text-[40px] xl:leading-[64px] lg:leading-[54px] sm:leading-[48px] leading-[42px] font-semibold josefin-font tracking-[-1.5px] opacity-100 ">
              Elevate Your Hosting Experience
            </h1>
          </div>
          <p className="text-[#EBEBEB] 3xl:text-[20px] 2xl:text-[19px] xl:text-[18px] sm:text-[16px] text-[14px] xl:leading-[24px] leading-[20px] font-medium inter-font my-3 mr-3">
            We transform your properties into high-performing, stress-free
            vacation rentals. As a premier management company, we specialize in
            managing short and mid-term stays, offering comprehensive and
            luxurious property management solutions. Our strategy significantly
            boosts your revenue, ensuring maximum occupancy and an unparalleled
            guest experience.{" "}
          </p>
          <div className="lg:mt-6 mt-4">
            <a href="tel:+971501510743">
              {" "}
              <button className="bg-[#CF9A2C] px-6 py-2 text-[#fff] inter-font 3xl:text-[20px] xl:text-[18px] sm:text-[16px] text-[14px] tracking-[-0.5px] font-medium rounded-full transition ease-in-out delay-150 duration-200 btn-grad">
                Schedule a Call
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;

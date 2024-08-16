"use client";
const Banner = () => {
  return (
    <div className="contact-banner 3xl:h-[940px] 2xl:h-[900px] md:h-[800px] h-[850px] flex md:items-end items-center">
      <div className="xl:mx-[10%] lg:mx-[7%] mx-[5%] md:mb-[6%] mb-0">
        <div
          className="3xl:w-[75%] 2xl:w-[78%] xl:w-[80%] lg:w-[85%] w-full lg:p-8 md:p-6 p-4 rounded-lg"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <div className="lg:mb-10 xl:mb-14 mb-8">
            {" "}
            <h1 className="text-[#fff] 3xl:text-[64px] 2xl:text-[60px] xl:text-[52px] sm:text-[46px] text-[40px] xl:leading-[64px] lg:leading-[54px] sm:leading-[48px] leading-[42px] font-semibold josefin-font tracking-[-1.5px] opacity-100 ">
              Contact Us
            </h1>
          </div>
          <p className="text-[#EBEBEB] 3xl:text-[20px] 2xl:text-[19px] xl:text-[18px] sm:text-[16px] text-[14px] xl:leading-[24px] leading-[20px] font-medium inter-font my-3 mr-3">
            Feel free to reach out to us with any questions, feedback, or
            inquiries you may have. At Duomo, we value your input and strive to
            provide the best possible experience for our customers and partners.
            Whether you&apos;re seeking assistance with a booking, exploring
            partnership opportunities for property management services or simply
            wanting to learn more about our services, our dedicated team is here
            to help. You can reach out to us via phone, email or contact us
            form.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;

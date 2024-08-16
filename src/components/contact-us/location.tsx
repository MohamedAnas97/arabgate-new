import Link from "next/link";
const Location = () => {
  return (
    <div className="xl:mx-[10%] lg:mx-[7%] mx-[5%] xl:py-20 md:py-16 py-12 flex lg:flex-row flex-col justify-between overflow-hidden">
      <div data-aos="fade-right" data-aos-duration="1000" className="flex flex-col justify-between">
        <div>
          <h1 className="3xl:text-[48px] 2xl:text-[40px] xl:text-[34px] lg:text-[32px] sm:text-[36px] text-[30px] font-bold xl:leading-[58px] sm:leading-[48px] leading-[32px] text-[#011E3C] md:tracking-[-2px] tracking-[-1px] inter-font">
            Duomo Holiday Homes LLC
          </h1>
          <div className="2xl:w-[180px] xl:w-[160px] lg:w-[150px] sm:w-[140px] w-[120px] h-[5px] bg-[#001D3D] rounded-full mt-1"></div>
        </div>
        <div>
          <div className="lg:mt-6 mt-4">
            <h3 className="2xl:text-[19px] xl:text-[18px] text-[16px] text-[#000] font-semibold inter-font leading-[24px] mb-2">
              Email
            </h3>
            <h5 className="lg:text-[17px] md:text-[16px] text-[15px] text-[#000] font-medium inter-font leading-[22px] xl:pr-4 lg:pr-32">
              <Link href="mailto:info@myduomo.com"> info@myduomo.com</Link>
            </h5>
          </div>
          <div className="lg:mt-6 mt-4">
            <h3 className="2xl:text-[19px] xl:text-[18px] text-[16px] text-[#000] font-semibold inter-font leading-[24px] mb-2">
              Phone
            </h3>
            <h5 className="lg:text-[17px] md:text-[16px] text-[15px] text-[#000] font-medium inter-font leading-[22px] xl:pr-4 lg:pr-32">
              <a href="tel:+971501510743">+971 50 1510743</a>
            </h5>
          </div>
          <div className="lg:mt-6 mt-4">
            <h3 className="2xl:text-[19px] xl:text-[18px] text-[16px] text-[#000] font-semibold inter-font leading-[24px] mb-2">
              Address
            </h3>
            <h5 className="lg:text-[17px] md:text-[16px] text-[15px] text-[#000] font-medium inter-font leading-[22px] xl:pr-4 lg:pr-32">
              Grosvenor Business Tower, Barsha Heights,
              <br className="xl:block hidden" /> Dubai, United Arab Emirates
            </h5>
          </div>
        </div>
      </div>
      <div className="xl:w-[60%] lg:w-[55%] w-full lg:mt-0 mt-8">
        <div className="w-full" data-aos="fade-left" data-aos-duration="1000">
          <iframe
            width="100%"
            height="350"
            src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Grosvenor%20Business%20Tower+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Location;

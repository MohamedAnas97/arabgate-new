const Experience = () => {
  const data = [
    {
      id: 1,
      name: "Experience Exceptional Hospitality",
      content:
        "Whether you're planning a weekend getaway, a family retreat, or a business trip, our handpicked selection of properties offers the perfect blend of comfort, convenience, and luxury. Begin your journey by exploring our collection of stunning accommodations and book your stay today.",
    },
    {
      id: 2,
      name: "Start Planning Your Getaway Today",
      content:
        "Ready to embark on your next adventure? Use our intuitive booking platform to search for available properties, check rates, and secure your reservation in just a few clicks. With flexible booking options and instant confirmation, planning your dream vacation has never been easier.",
    },
    {
      id: 3,
      name: "Find Your Perfect Retreat",
      content:
        "Browse through our curated selection of properties, each meticulously chosen to ensure an unforgettable stay. We have amazing properties in best of the locations in Dubai to suit every taste and preference.",
    },
    {
      id: 4,
      name: "Book Direct for the Best Rates",
      content:
        "Why book through third-party platforms when you can enjoy the best rates and exclusive perks by booking directly with Duomo? Take advantage of our special offers and promotions to enhance your stay and make the most of your vacation budget.",
    },
    {
      id: 5,
      name: "Exceptional Service, Every Step of the Way",
      content:
        "We are committed to providing exceptional service from the moment you book until the end of your stay. Our friendly and expert team is here to assist you with any inquiries, special requests, or travel arrangements, ensuring a seamless and stress-free experience.",
    },
  ];
  return (
    <div className="bg-[#001D3D] ">
      <div className="xl:mx-[10%] lg:mx-[7%] mx-[5%] lg:py-20 py-10">
        <div className="grid md:grid-cols-2 grid-cols-1 2xl:gap-x-24 xl:gap-x-20 lg:gap-x-16 2xl:gap-y-12 xl:gap-y-10 lg:gap-y-8 sm:gap-10 gap-6">
          {data?.map((item, index) => (
            <div
              className=" w-full bg-[#EBEBEB] lg:py-6 lg:px-10 p-6 rounded-md "
              key={index}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h3 className="2xl:text-[32px] xl:text-[28px] md:text-[24px] text-[22px] font-bold xl:tracking-[-1.5px] tracking-[-1px] xl:leading-[38px] md:leading-[28px] leading-[28px] text-[#000000] manrope-font text-center">
                {item?.name}
              </h3>
              <p className="3xl:text-[20px] xl:text-[18px] sm:text-[16px] text-[14px] font-medium xl:leading-[24px] leading-[20px] text-[#000] opacity-45 inter-font sm:py-5 py-3 text-center">
                {item?.content}
              </p>
              {/* <div>
                <button className="xl:px-8 px-6 py-3 bg-[#CF9A2C] rounded-full lg:text-[16px] text-[14px] font-medium leading-[14px] text-[#fff] transition ease-in-out delay-150 duration-200 btn-grad">
                  Read More
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experience;

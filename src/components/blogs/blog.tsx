"use client";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const data = [
    {
      id: 1,
      name: "From Sand to Splendour: Redefining Holiday Homes in the UAE",
      image: require("/public/assets/blog/blog1.jpg"),
      content:
        "The United Arab Emirates (UAE) has undergone a remarkable transformation over the past few decades, evolving from a landscape dominated by deserts to becoming one of the world’s most sought-after destinations for luxury holiday homes. This journey reflects the nation’s rapid development and showcases its vision for blending tradition with modernity in the realm of hospitality.",
      link: "/blogs/blog1",
    },
  ];
  return (
    <div className="bg-[#CF9A2C]">
      <div className=" xl:pt-24 xl:pb-28 py-14">
        <div>
          <h2 className="xl:text-[36px] md:text-[32px] text-[28px] font-semibold xl:leading-[44px] leading-[38px] text-center josefin-font text-[#161E2D]">
            Our Latest Blogs
          </h2>
        </div>
        <div className="xl:mx-[8%] lg:mx-[6%] mx-[5%] md:mt-14 mt-10">
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-8">
            {data?.map((item, index) => (
              <div
                className="w-full bg-[#F7F7F7] flex md:flex-row flex-col justify-between rounded-lg p-5 "
                key={index}
              >
                <div className="rounded-[20px] md:w-[35%] h-auto w-full">
                  <Image
                    src={item?.image}
                    alt=""
                    className="rounded-[10px] h-full object-cover"
                  />
                </div>
                <div className="md:w-[62%] w-full flex  items-center">
                  <div className="py-4">
                    <h3 className="2xl:text-[24px] text-[22px] font-bold 2xl:leading-[32px] leading-[28px] text-[#161E2D] josefin-font truncate-3-lines">
                      {item?.name}
                    </h3>
                    <p className="text-[16px] font-medium leading-[24px] text-[#5C6368] dm-font my-3 truncate-4-lines">
                      {item?.content}
                    </p>

                    <div className="flex justify-end">
                      <Link href={item?.link}>
                        {" "}
                        <div className="flex items-center border-bottom-animation ">
                          <button className="text-[16px] font-semibold text-[#161E2D] leading-[20px] josefin-font mr-1 ">
                            Read More
                          </button>
                          <Image
                            src={require("/public/assets/book/right.png")}
                            alt=""
                            className="h-[14px] w-auto "
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;

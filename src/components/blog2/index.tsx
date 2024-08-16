// "use client";
// import { useEffect } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// const Blog2 = () => {
//   useEffect(() => {
//     Aos.init();
//   }, []);
//   return (
//     <div className="bg-[#deedfd]">
//       <div className="xl:mx-[12%] lg:mx-[7%] mx-[5%] sm:pt-32 pt-28 sm:pb-20 pb-16 ">
//         <div className="flex lg:flex-row flex-col justify-between bg-[#001d3d] rounded-xl">
//           <div className="lg:w-[60%] w-full ">
//             <Image
//               src={require("/public/assets/book/blog2.jpg")}
//               alt=""
//               className="rounded-l-xl lg:rounded-tr-none rounded-tr-xl"
//             />
//           </div>
//           <div className=" lg:w-[40%]  w-full flex items-center justify-center ">
//             <div className="lg:w-[80%] w-[90%] lg:py-0 py-10">
//               <h4 className="2xl:text-[40px] xl:text-[34px] text-[28px] font-bold 2xl:leading-[42px] xl:leading-[38px] leading-[32px] text-[#cf9a2c] josefin-font">
//                 “From Deserts to Destinations: The Evolution of Holiday Homes in
//                 the UAE”
//               </h4>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8">
//           <p
//             className="xl:text-[17px] sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 dm-font"
//             data-aos="fade-up"
//           >
//             In recent years, the United Arab Emirates (UAE) has undergone a
//             remarkable transformation—from vast desert landscapes to captivating
//             destinations that beckon travelers from around the globe. Amidst
//             this shift, a new trend has emerged: the preference for holiday
//             homes over traditional hotels. Let’s delve into how this change
//             occurred and why it has captured the imagination of visitors.
//           </p>
//         </div>
//         <div>
//           <h3
//             className="2xl:text-[22px] lg:text-[20px] text-[16px] font-bold lg:leading-[28px] leading-[24px] text-[#011E3C] josefin-font mt-6"
//             data-aos="fade-up"
//           >
//             Dubai’s Dynamic Allure:{" "}
//             <span className="font-medium dm-font xl:text-[17px] sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] ">
//               The UAE, with its iconic skyscrapers, beautiful beaches, and rich
//               cultural tapestry, has become synonymous with luxury and
//               adventure. While hotels once monopolized the accommodation scene,
//               Duomo holiday homes now offer an enticing alternative.{" "}
//             </span>
//           </h3>
//           <p
//             className="xl:text-[17px] sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 dm-font mt-2"
//             data-aos="fade-up"
//           >
//             Imagine waking up in a sleek city apartment in Jumeirah Beach
//             Residence, savoring breakfast with a view of the Arabian Gulf. Or
//             perhaps you’d prefer a spacious villa in Al Barsha South, where you
//             can unwind by your private pool after a day of exploration. And
//             let’s not forget the chic Address Dubai marina —where modern
//             elegance meets waterfront living.
//           </p>{" "}
//         </div>
//         <div>
//           <h3
//             className="2xl:text-[22px] lg:text-[20px] text-[16px] font-bold lg:leading-[28px] leading-[24px] text-[#011E3C] josefin-font mt-6"
//             data-aos="fade-up"
//           >
//             Driving Forces Behind the Rise:
//             <span className="font-medium dm-font xl:text-[17px] sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] ">
//               Several factors have fueled the surge in holiday homes across the
//               UAE:
//             </span>
//           </h3>
//         </div>
//         <div className="pt-8 sm:pl-5 pl-3">
//           <div>
//             <h3
//               className="2xl:text-[22px] lg:text-[20px] text-[16px] font-bold lg:leading-[28px] leading-[24px] text-[#011E3C] josefin-font "
//               data-aos="fade-up"
//             >
//               1. Government Support:
//             </h3>
//             <div>
//               <p
//                 className="xl:text-[17px] sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 dm-font mt-2"
//                 data-aos="fade-up"
//               >
//                 The UAE government has been a catalyst for change. By
//                 streamlining visa regulations and actively promoting tourism and
//                 investment, they’ve made it easier for travelers to explore the
//                 country. Improved infrastructure—including well-connected roads
//                 and top-notch facilities—has further enhanced the visitor
//                 experience.
//               </p>{" "}
//             </div>
//           </div>
//           <div>
//             <h3
//               className="2xl:text-[22px] lg:text-[20px] text-[16px] font-bold lg:leading-[28px] leading-[24px] text-[#011E3C] josefin-font mt-6"
//               data-aos="fade-up"
//             >
//               2. Yearning for Authenticity:
//             </h3>
//             <div>
//               <p
//                 className="xl:text-[17px] sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 dm-font mt-2"
//                 data-aos="fade-up"
//               >
//                 Modern travelers seek more than cookie-cutter hotel rooms. They
//                 crave authenticity and immersion.
//               </p>{" "}
//               <p
//                 className="xl:text-[17px] sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 dm-font mt-2"
//                 data-aos="fade-up"
//               >
//                 Duomo Holiday Homesprovidesmore than just that—an opportunity to
//                 live like a local, whether nestled in the vibrant Jumeirah Beach
//                 Residence, the bustling Al Barsha South, Dubai Marina, or Dubai
//                 Creek Harbour.assume waking up to the sound of waves or
//                 strolling through neighborhood markets—the essence of genuine
//                 exploration.
//               </p>
//             </div>
//           </div>
//           <div>
//             <h3
//               className="2xl:text-[22px] lg:text-[20px] text-[16px] font-bold lg:leading-[28px] leading-[24px] text-[#011E3C] josefin-font mt-6"
//               data-aos="fade-up"
//             >
//               3. Versatility for All Occasions:
//             </h3>
//             <div>
//               <p
//                 className="xl:text-[17px] sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 dm-font mt-2"
//                 data-aos="fade-up"
//               >
//                 Holiday homes cater to diverse needs. Whether you’re on a
//                 leisurely escape or a business trip, they adapt seamlessly.
//               </p>{" "}
//               <p
//                 className="xl:text-[17px] sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 dm-font mt-2"
//                 data-aos="fade-up"
//               >
//                 Holiday homes ensure that your stay aligns with your
//                 preferences.
//               </p>
//             </div>
//           </div>
//           <div>
//             <h3
//               className="2xl:text-[22px] lg:text-[20px] text-[16px] font-bold lg:leading-[28px] leading-[24px] text-[#011E3C] josefin-font mt-6"
//               data-aos="fade-up"
//             >
//               4. Tech-Savvy Booking:
//             </h3>
//             <div>
//               <p
//                 className="xl:text-[17px] sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 dm-font mt-2"
//                 data-aos="fade-up"
//               >
//                 The digital age has revolutionized travel planning. Websites and
//                 user-friendly apps allow travelers to browse photos, read
//                 reviews, and compare prices effortlessly. Booking a holiday home
//                 is now as simple as a few clicks, democratizing access for
//                 everyone.
//               </p>{" "}
//             </div>
//           </div>
//         </div>
//         <div>
//           <h3
//             className="2xl:text-[22px] lg:text-[20px] text-[16px] font-bold lg:leading-[28px] leading-[24px] text-[#011E3C] josefin-font mt-6"
//             data-aos="fade-up"
//           >
//             A Bright Horizon:
//             <span className="font-medium dm-font xl:text-[17px] sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] ">
//               Looking ahead, the future of holiday homes in the UAE shines
//               brightly. The government keeps investing in tourism and coming up
//               with new ideas. With big events on the horizon—the Expo 2020,
//               perhaps—holiday homes will become even more popular.
//             </span>
//           </h3>
//           <p
//             className="xl:text-[17px] sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 dm-font mt-4"
//             data-aos="fade-up"
//           >
//             In summary, these homes—more than mere accommodations—are gateways
//             to the soul of this dynamic nation.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Blog2;

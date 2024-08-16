"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import ShowMoreText from "react-show-more-text";
import "react-multi-carousel/lib/styles.css";

const Reviews = () => {
  const data = [
    {
      id: 1,
      name: "MyDuomo: 2 BR Family Apartment in Dubai Creek",
      image: require("/public/assets/home/b1.png"),
      author: "Benzy",
      date: "June 2024",
      profile: require("/public/assets/home/b11.png"),
      content:
        "I recently had the pleasure of staying at Duomo Apartment, and it was an absolutely delightful experience! The apartment is beautifully designed, with modern amenities and a cozy atmosphere that made me feel right at luxurious home. The location is unbeatable, provided stunning views and easy access to many attractions across the city. The host was incredibly welcoming and went above and beyond to ensure my stay was perfect. The apartment was immaculately clean and well-maintained, with all the comforts I needed for a relaxing stay. I highly recommend Duomo to anyone visiting Dubai. It offers the perfect blend of luxury, comfort, and convenience. I look forward to returning on my next trip!",
    },
    {
      id: 2,
      name: "MyDuomo: 2 BR Family Apartment in Dubai Creek",
      image: require("/public/assets/home/m1.png"),
      author: "Muhammad",
      date: "July 2024",
      profile: require("/public/assets/home/m11.png"),
      content:
        "The apartment is very beautiful, offering an amazing view of downtown Dubai and the Creek Harbour. One of Duomo representatives, I believe her name was Shakara, gave us Eid sweets as greetings and was in touch with us throughout our stay, promptly assisting with any issues. Overall, our stay was enjoyable and we had a great time.",
    },
    {
      id: 3,
      name: "MyDuomo: 2 BR Family Apartment in Dubai Creek",
      image: require("/public/assets/home/a1.png"),
      author: "Angela",
      date: "June 2024",
      profile: require("/public/assets/home/a11.png"),
      content:
        "This apartment was spacious, comfortable and quiet. It suited our needs perfectly and exceeded expectations regarding location and quality of apartment and furnishings. The infinity pool is temperature controlled and has the best views of Dubai. Thank you, team Duomo for an unforgettable stay.",
    },
    {
      id: 4,
      name: "MyDuomo: 2 BR Family Apartment in Dubai Creek",
      image: require("/public/assets/home/z1.png"),
      author: "Aziz",
      date: "July 2024",
      profile: require("/public/assets/home/z11.png"),
      content:
        "Thank you for the beautiful place and the quiet area for the hassle and easy access to anywhere in 20 minutes",
    },
    {
      id: 5,
      name: "MyDuomo: 2 BR Family Apartment in Dubai Creek",
      image: require("/public/assets/home/m5.png"),
      author: "Gianne",
      date: "August 2024",
      profile: require("/public/assets/home/review5.png"),
      content:
        "Superb Apartment and Great Hosting Experience by team Duomo Holiday Homes. ",
    },
  ];

  return (
    <div className="">
      <div className="2xl:mx-[18%] xl:mx-[12%] md:mx-[8%] mx-[5%] py-20">
        <div className="w-full flex justify-between">
          <div className="w-[50%] px-10 ">
            <h2>Get in Touch</h2>
            <form >
              <div >
                <label className="pr-2">Name:</label>
                <input type="text" placeholder="Enter Your Name" className="w-full" />
              </div>
              
            </form>
          </div>
          <div className="w-[50%] bg-[#fffbf2]">
            <Image
              src={require("/public/assets/home/service-bg.png")}
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

"use client";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

const FAQs = () => {
  const [selectedCategory, setSelectedCategory]: any = useState("general");
  const [selectedFaq, setSelectedFaq] = useState(1);
  const allFAQs: any = {
    // general
    general: [
      {
        id: 1,
        name: "Are there any requirements at the time of check-in?",
        answere:
          "At the time of check-in, we will need your Passport (International clients) or a valid National ID card. You would also be required to sign a guest registration form. There may also be a requirement for a security deposit.",
      },
      {
        id: 2,
        name: "Where can I confirm that I have paid for my booking?",
        answere:
          "Upon booking, you will receive an email confirmation with the booking details.",
      },
      {
        id: 3,
        name: "What is the standard timing for check-in and checkout?",
        answere:
          "Check in: 15:00 hours. <br/> <p class='mt-2'>Check out: 12:00 hours.</p>",
      },
      {
        id: 4,
        name: "Can I request additional services like early check-in, late check-out, extra bed, transportation, or anything else?",
        answere:
          "If you’d like to request an extra service, please contact us on +971 50 1510743, 2 days before arrival. We don’t guarantee, but we may be able to help.",
      },
      {
        id: 5,
        name: "Why do I need to give a security deposit?",
        answere:
          "You may be required to pay a security deposit upon arrival, this is intended to cover any damage to the property, loss of items, or any additional expenses incurred by the property owner during your stay. The security deposit, less of any deductions as stated earlier, will be refunded to you.",
      },
      {
        id: 6,
        name: "How to cancel/modify my booking?",
        answere:
          "To initiate your cancellation/modification process, kindly contact our customer support team via Whatsapp.",
      },
      {
        id: 7,
        name: "Where can I find the cancellation policy?",
        answere:
          "You can find the cancelation policy on the bottom right corner of the website or you can click ",
      },
    ],
    // property owner
    propertyOwner: [
      {
        id: 1,
        name: "How much can I make from my property?",
        answere:
          "Number of bedrooms, the demand and the occupancy rate are the major factors to be taken into consideration while generating a revenue forecast. Our team of experienced professionals will provide you with the most accurate revenue estimate for your property.",
      },
      {
        id: 2,
        name: "Can I list the property on my own on Duomo website?",
        answere:
          "This option is currently unavailable. Contact us on +971 50 1510743, and we will assist you in making the necessary arrangements. We will help you list the property on DUOMO as well as other platforms.",
      },
      {
        id: 3,
        name: " If my apartment is unfurnished, can I still list it with you?",
        answere:
          "At Duomo, we take care of the furnishing and styling your property. Contact us on +971 50 1510743 for further information.",
      },
      {
        id: 4,
        name: "What happens if something is damaged during a guest’s stay?",
        answere:
          "Our team ensures complete screening of the guests and property inspection before and after each stay. In the event of any damage, we will handle all aspects of maintenance. We also have a guest deposit policy to mitigate any such damage related situations.",
      },
    ],
    // corporate Partner
    corporatePartner: [
      {
        id: 1,
        name: "What is Duomo's Commercial Affiliates Program ?",
        answere:
          "Elevate your business accommodations with our specialized Corporate Partners Program. Tailored for businesses and organizations, this exclusive offering provides high-quality and cost-effective accommodations for your employees or clients. Discover a new level of comfort and convenience for your corporate stays.",
      },
      {
        id: 2,
        name: "What Benefits Await You in Unlocking Duomo's Corporate Affiliate Program?",
        answere:
          "As a corporate partner, you enjoy exclusive access to a diverse portfolio of meticulously managed properties. Tailor accommodations to your specific needs, offering unmatched comfort, cost-efficiency, and flexibility for your valued employees or clients",
      },
      {
        id: 3,
        name: "Ensuring Safety: What Measures Are in Place for Corporate Guests?",
        answere:
          "At Duomo, your safety is our priority. Our commitment to stringent safety and security standards includes thorough guest screening and clear guidelines for property behavior. Rest assured, these measures are in place to ensure the well-being of all our valued corporate guests",
      },
      {
        id: 4,
        name: "Wondering How to Start as a Corporate Partner with Duomo?",
        answere:
          "Getting started is easy – simply reach out to our dedicated Corporate Partners team. Share your specific accommodation needs and preferences, and we'll collaborate with you to tailor a partnership that perfectly suits the requirements of your organization.",
      },
    ],
  };

  return (
    <div className="bg-[#EBEBEB]">
      <div className="2xl:mx-[14%] xl:mx-[10%] lg:mx-[7%] mx-[5%] py-16">
        <div data-aos="fade-up">
          <h6 className="text-[14px] font-semibold uppercase leading-[24px] text-center tracking-[0.8px] josefin-font text-[#001D3D]">
            Learn how to get started
          </h6>
          <h2 className="xl:text-[36px] md:text-[32px] text-[28px] font-semibold xl:leading-[44px] leading-[38px] text-center josefin-font text-[#161E2D]">
            Frequently Asked Questions
          </h2>
          <div className="flex md:flex-row flex-col justify-center items-center my-4">
            <div className="flex flex-wrap justify-center">
              <div className="sm:mx-[6px] sm:my-0 m-[6px]">
                <button
                  className={`sm:text-[16px] text-[15px] font-semibold sm:leading-[26px] leading-[22px] hover:bg-[#001D3D] hover:text-[#fff] transition ease-in-out delay-150 duration-200 josefin-font sm:px-6 px-4 sm:py-2 py-[8px] rounded-[4px] ${
                    selectedCategory === "general"
                      ? "bg-[#001D3D] text-[#fff]"
                      : "bg-[#F7F7F7] text-[#161E2D]"
                  }`}
                  onClick={() => {
                    setSelectedCategory("general");
                    setSelectedFaq(1);
                  }}
                >
                  General
                </button>
              </div>
              <div className="sm:mx-[6px] sm:my-0 m-[6px]">
                <button
                  className={`sm:text-[16px] text-[15px] font-semibold sm:leading-[26px] leading-[22px] josefin-font hover:bg-[#001D3D] hover:text-[#fff] transition ease-in-out delay-150 duration-200 sm:px-6 px-4 sm:py-2 py-[8px] rounded-[4px] ${
                    selectedCategory === "propertyOwner"
                      ? "bg-[#001D3D] text-[#fff]"
                      : "bg-[#F7F7F7] text-[#161E2D]"
                  }`}
                  onClick={() => {
                    setSelectedCategory("propertyOwner");
                    setSelectedFaq(1);
                  }}
                >
                  Property Owner
                </button>
              </div>
              <div className="sm:mx-[6px] sm:my-0 m-[6px]">
                <button
                  className={`sm:text-[16px] text-[15px] font-semibold sm:leading-[26px] leading-[22px] josefin-font hover:bg-[#001D3D] hover:text-[#fff] transition ease-in-out delay-150 duration-200 sm:px-6 px-4 sm:py-2 py-[8px] rounded-[4px] ${
                    selectedCategory === "corporatePartner"
                      ? "bg-[#001D3D] text-[#fff]"
                      : "bg-[#F7F7F7] text-[#161E2D]"
                  }`}
                  onClick={() => {
                    setSelectedCategory("corporatePartner");
                    setSelectedFaq(1);
                  }}
                >
                  Corporate partner
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          {allFAQs[selectedCategory]?.map((faq: any, index: any) => (
            <div className="pt-6 pb-4 border-t border-[#979ba1]" key={index} data-aos="fade-up">
              <div>
                <div
                  className="cursor-pointer transition ease-in-out delay-150 duration-200 lg:text-[22px] text-[20px] font-medium xl:leading-[28px] leading-[23px] text-[#001D3D] opacity-80 tracking-[-0.3px] josefin-font pb-1"
                  aria-expanded={selectedFaq !== 0}
                  aria-controls="panel"
                  onClick={() => setSelectedFaq(faq.id)}
                >
                  {faq.name}
                </div>
                <AnimateHeight
                  id="panel"
                  duration={500}
                  height={faq.id === selectedFaq ? "auto" : 0} // see props documentation below
                >
                  <p
                    className="lg:text-[18px] text-[16px]  font-normal xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 josefin-font pt-2"
                    dangerouslySetInnerHTML={{ __html: faq.answere }}
                  />
                </AnimateHeight>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;

"use client";
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const PrivacyPolicy = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="xl:mx-[12%] lg:mx-[7%] mx-[5%] sm:pt-36 pt-28 sm:pb-20 pb-16">
      <div data-aos="fade-up">
        <h1 className="xl:text-[42px] uppercase lg:text-[38px] sm:text-[34px] text-[30px] font-semibold xl:leading-[52px] sm:leading-[48px] leading-[32px] tracking-[-2px] text-[#011E3C] josefin-font">
          Privacy Policy
        </h1>
        <div className="2xl:w-64 xl:w-52 md:w-48 w-36 h-[5px] bg-[#CF9A2C] rounded-full "></div>
      </div>
      <div className="pt-8">
        <div>
          <div data-aos="fade-up">
            <p className=" sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font">
              Duomo (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
              committed to protecting the privacy of our guests. We are a
              community built on trust and a fundamental part of earning that
              trust means being clear about how we use your information and
              protecting your human right to privacy. We’re committed to
              protecting and safeguarding your personal data. We act in our
              customers’ best interests and are transparent about the processing
              of your personal data.
            </p>
          </div>
          <div className="py-3" data-aos="fade-up">
            <p className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font ">
              This document (“The Privacy Policy” or “Our Privacy Policy”)
              explains what personal information we collect, how we use personal
              information and how personal information is shared. It also tells
              you what rights you can exercise in relation to your personal data
              and how you can contact us.
            </p>
          </div>
          <div data-aos="fade-up">
            <p className=" sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font">
              By using our holiday home services, you consent to the practices
              described in this Privacy Policy
            </p>
          </div>
        </div>
        <div>
          <h3
            className="2xl:text-[20px] xl:text-[18px] text-[16px] font-bold xl:leading-[28px] leading-[24px] text-[#011E3C] inter-font mt-6"
            data-aos="fade-up"
          >
            1. DEFINITIONS
          </h3>
          <div data-aos="fade-up">
            <p className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font">
              Undefined terms in this Privacy Policy have the same definition as
              in our Terms of Service (“Terms”).
            </p>
          </div>
        </div>
        <div>
          <h3
            className="2xl:text-[20px] xl:text-[18px] text-[16px] font-bold xl:leading-[28px] leading-[24px] text-[#011E3C] inter-font mt-6"
            data-aos="fade-up"
          >
            2. PERSONAL INFORMATION WE COLLECT
          </h3>
          <div>
            <div>
              <p
                className="sm:text-[16px] text-[15px] font-semibold xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-95 inter-font mt-2"
                data-aos="fade-up"
              >
                2.1 Information Needed to Use the Duomo Platform.
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                We collect personal information about you when you use the Duomo
                Platform. Without it, we may not be able to provide all services
                requested. This information may includes:
              </p>{" "}
            </div>
            <ul className="list-disc px-5 sm:pl-10 pl-6">
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">
                  Contact Information:
                </span>{" "}
                First name, last name, phone number, postal address, email
                address, date of birth, and profile photo, some of which will
                depend on the features you use.
              </li>
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">
                  Reservation Information:
                </span>{" "}
                Details about your reservation, including dates of stay, room
                preferences, and special requests.
              </li>
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">
                  Id entity Verification and Payment Information:
                </span>{" "}
                Images of your government-issued ID (as permitted by applicable
                laws), your ID number or other verification information. If a
                copy of your ID is provided to us, we may scan, use, and store
                information contained in your ID to verify your identity and for
                security purposes. Credit card/bank details and billing
                information for reservation and payment processing.
              </li>
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">
                  Guest Preferences:
                </span>{" "}
                Information regarding your preferences and special requests to
                enhance your stay.
              </li>
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">Communication:</span>{" "}
                Records of correspondence when you contact us, including emails
                and other forms of communication.
              </li>
            </ul>
            <div>
              <p
                className="sm:text-[16px] text-[15px] font-semibold xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-95 inter-font mt-2"
                data-aos="fade-up"
              >
                2.2 Information You Choose to Give Us.
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font"
                data-aos="fade-up"
              >
                You can choose to provide us with additional personal
                information. This information may include:
              </p>
            </div>
            <ul className="list-disc px-5 sm:pl-10 pl-6">
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">
                  Additional Profile Information:
                </span>{" "}
                Such as gender, preferred language(s), city, and personal
                description. Some of this information as indicated in your
                account settings is part of your public profile page and will be
                publicly visible.
              </li>
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">
                  Information About Others:
                </span>{" "}
                Such as a payment instrument belonging to another person or
                information about a co-traveler. By providing us with personal
                information about others, you certify that you have permission
                to provide that information to Duomo for the purposes described
                in this Privacy Policy and you have shared the Duomo Privacy
                Policy with them.
              </li>
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">
                  Other Information:
                </span>{" "}
                Such as when you fill in a form, add information to your
                account, respond to surveys, post to community forums,
                participate in promotions, communicate with Duomo Support and
                other Members, import or manually enter address book contacts,
                provide your address and/or geolocation, or share your
                experience with us. This may include health information if you
                choose to share it with us.
              </li>
            </ul>
            <div data-aos="fade-up">
              <p className="sm:text-[16px] text-[15px] font-semibold xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-95 inter-font mt-2">
                2.3 Information Automatically Collected by Using the Duomo
                Platform and Our Payment Services.
              </p>
              <p className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2">
                When you use the Duomo Platform and Payment Services, we
                automatically collect personal and other information. This
                information may include:
              </p>
            </div>
            <ul className="list-disc px-5 sm:pl-10 pl-6">
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">
                  Usage Information:
                </span>{" "}
                Such as the pages or content you view, searches for Listings,
                bookings you have made, additional services you have added, and
                other actions on the Duomo Platform.
              </li>
            </ul>
            <div data-aos="fade-up">
              <h3 className="2xl:text-[20px] xl:text-[18px] text-[16px] font-bold xl:leading-[28px] leading-[24px] text-[#011E3C] inter-font mt-6">
                3. UTILIZATION OF INFORMATION
              </h3>
            </div>
            <div data-aos="fade-up">
              <p className="sm:text-[16px] text-[15px] font-semibold xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-95 inter-font mt-2">
                3.1 How we use your information
              </p>
              <p className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2">
                We use the collected information for the following purposes:
              </p>
            </div>
            <ul className="list-disc px-5 sm:pl-10 pl-6">
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">
                  Reservation Processing:
                </span>{" "}
                To process and manage your reservation.
              </li>
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">
                  Customer Service:
                </span>{" "}
                To provide customer support and respond to inquiries.
              </li>
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">
                  Improving Services:
                </span>{" "}
                To enhance our services and tailor them to guest preferences.
              </li>
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">Marketing:</span>{" "}
                With your consent, to send promotional materials and updates
                about our holiday homes
              </li>
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">
                  Legal Requirements:{" "}
                </span>
                To comply with legal obligations.
              </li>
            </ul>
            <p
              className="sm:text-[16px] text-[15px] font-semibold xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-95 inter-font mt-2"
              data-aos="fade-up"
            >
              3.2 Information Sharing.
            </p>
            <p
              className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
              data-aos="fade-up"
            >
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this Privacy Policy.
            </p>
            <p
              className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
              data-aos="fade-up"
            >
              We may share your information with:
            </p>
            <p
              className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
              data-aos="fade-up"
            >
              Service providers and partners involved in providing our services.
            </p>
            <p
              className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
              data-aos="fade-up"
            >
              Legal authorities if required to comply with the law.
            </p>
            <p
              className="sm:text-[16px] text-[15px] font-semibold xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-95 inter-font mt-2"
              data-aos="fade-up"
            >
              3.3 Provide, Personalize, Measure, and Improve our Advertising and
              Marketing.
            </p>
            <p
              className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
              data-aos="fade-up"
            >
              We may utilize this information for the purpose of delivering
              promotional messages, marketing, advertising, and other relevant
              content tailored to your preferences on various platforms,
              including social media. Additionally, we may personalize,
              evaluate, and enhance our advertising efforts, oversee referral
              programs, rewards, surveys, sweepstakes, contests, or other
              promotional activities sponsored or managed by Duomo or its
              third-party partners. Our analysis of characteristics and
              preferences aims to deliver promotional messages, marketing,
              advertising, and other information that aligns with your
              interests. You may also receive invitations to events and relevant
              opportunities. With your explicit consent, we may send promotional
              messages, marketing, advertising, and other information that is
              likely to be of interest to you based on your preferences.
            </p>
            <p
              className="sm:text-[16px] text-[15px] font-semibold xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-95 inter-font mt-2"
              data-aos="fade-up"
            >
              3.4 Service Providers.
            </p>
            <p
              className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
              data-aos="fade-up"
            >
              We share personal information with affiliated and unaffiliated
              service providers (including their service providers) to help us
              run our business and for their compliance purposes, including
              those that help us:
            </p>
            <div className="sm:pl-5 pl-3">
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(i)</span> Verify
                your identity or authenticate your identification documents.
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(ii)</span> Check
                information against public databases.
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(iii)</span> Conduct
                background checks, fraud prevention, security investigations,
                and risk assessments.
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(iv)</span> Perform
                product development, maintenance, and debugging.
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(v)</span> Allow the
                provision of the Duomo Services through third-party platforms
                and software tools (e.g., through the integration with our
                APIs).
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(vi)</span> Provide
                customer service, advertising, or payments services.
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(vii)</span> Offer
                additional services you select.
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(viii)</span>{" "}
                Process, handle, or assess insurance claims or similar claims.
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(ix) </span> Review,
                scan, and analyze communications on the Duomo Platform for
                certain purposes (such as evidence of child exploitation).
              </p>
            </div>
            <p
              className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
              data-aos="fade-up"
            >
              See the Analyzing and Sharing Your Communications section for
              additional information. These providers are contractually bound to
              protect your personal information and have access to your personal
              information to perform these tasks. Other Members can use services
              other than Duomo to process your data. These can include email or
              reservation management software. Such services are outside of
              Duomo’s control and will be subject to applicable laws around the
              world with varying levels of data protection.
            </p>
            <p
              className="sm:text-[16px] text-[15px] font-semibold xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-95 inter-font mt-2"
              data-aos="fade-up"
            >
              3.5 User’s rights.
            </p>
            <p
              className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
              data-aos="fade-up"
            >
              You have the right to:
            </p>
            <ul className="list-disc px-5 sm:pl-10 pl-6">
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                Review and update your personal information.
              </li>
              <li
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                Opt-out of marketing communications.
              </li>
            </ul>
            <h3
              className="2xl:text-[20px] xl:text-[18px] text-[16px] font-bold xl:leading-[28px] leading-[24px] text-[#011E3C] inter-font mt-6"
              data-aos="fade-up"
            >
              4. LEGAL
            </h3>
            <p
              className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
              data-aos="fade-up"
            >
              Complying with Law, Responding to Legal Requests, Preventing Harm
              and Protecting Our Rights. We may disclose your information to
              courts, law enforcement, governmental or public authorities, tax
              authorities, authorized third parties, or other Members, if and to
              the extent we are required or permitted to do so by law or where
              disclosure is reasonably necessary to:
            </p>
            <div className="sm:pl-5 pl-3">
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(i)</span> Comply
                with our legal obligations.
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(ii)</span> Comply
                with a valid legal request (such as a subpoena or court order)
                or to respond to claims asserted against Duomo.
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(iii)</span> Respond
                to a valid legal request relating to a criminal investigation to
                address alleged or suspected illegal activity, or to respond to
                or address any other activity that may expose us, you, or any
                other of our users to legal or regulatory liability (more
                information on Duomo’s Law Enforcement Guidelines here).
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(iv)</span> Enforce
                and administer our agreements with Members, including our Terms,
                Additional Legal Terms, and Policies.
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(v)</span> Protect
                the rights, property or personal safety of Duomo, its employees,
                its Members, or members of the public.
              </p>
            </div>
            <p
              className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
              data-aos="fade-up"
            >
              Where appropriate, we may notify Members about legal requests
              unless:
            </p>
            <div className="sm:pl-5 pl-3">
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(i)</span> Providing
                notice is prohibited by the legal process itself, by court order
                we receive, or by applicable law.
              </p>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                <span className="font-semibold opacity-95">(ii)</span> We
                believe that providing notice would be futile, ineffective,
                create a risk of injury or bodily harm to an individual or
                group, or create or increase a risk of fraud upon or harm to
                Duomo, our Members, or expose Duomo to a claim of obstruction of
                justice.
              </p>
            </div>
            <p
              className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
              data-aos="fade-up"
            >
              Where legally required or permissible according to applicable law,
              we may disclose Hosts’ and/or Guests’ information to tax
              authorities or other governmental agencies for the purpose of the
              tax authorities’ determination of proper compliance with relevant
              tax obligations. Relevant tax obligations include Duomo tax
              obligations on its service fees, its facilitation of taxes on
              accommodations and withholding taxes, and Hosts’ individual tax
              obligations. Information that may be disclosed includes, but is
              not limited to, Host and Guest names, listing addresses, Host
              addresses, tax/business identification number(s), date of birth,
              and/or contact information, property parcel identification
              numbers, payout information, transaction dates and amounts, number
              of nights and Guests booked, gross and net booking value and
              payout amounts, taxes collected by Duomo on behalf of Guests and
              Hosts, to the extent any of this information is known by Duomo.
            </p>
            <p
              className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
              data-aos="fade-up"
            >
              In jurisdictions where Duomo facilitates or requires a
              registration, notification, permit, or license application or
              number of a Host with a governmental authority, we may share
              information of participating Hosts with the relevant authority,
              both during the application process, when the Listing is
              published, and periodically thereafter, such as the Host’s full
              name and contact details, Accommodation address, tax
              identification number, registration, permit, or license number,
              Listing details, reservation information, and number of nights
              booked subject to applicable laws.
            </p>
            <h3
              className="2xl:text-[20px] xl:text-[18px] text-[16px] font-bold xl:leading-[28px] leading-[24px] text-[#011E3C] inter-font mt-6"
              data-aos="fade-up"
            >
              5. SECURITY
            </h3>
            <p
              className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
              data-aos="fade-up"
            >
              While no organization can guarantee perfect security, we are
              continuously implementing and updating administrative, technical,
              and physical security measures to help protect your information
              against unlawful or unauthorized access, loss, destruction, or
              alteration.
            </p>
          </div>
          <div>
            <div>
              <h3
                className="2xl:text-[20px] xl:text-[18px] text-[16px] font-bold xl:leading-[28px] leading-[24px] text-[#011E3C] inter-font mt-6"
                data-aos="fade-up"
              >
                6. CHANGES TO THIS PRIVACY POLICY
              </h3>
              <p
                className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                data-aos="fade-up"
              >
                We reserve the right to update this Privacy Policy periodically.
                Any changes will be posted on our website.
              </p>
            </div>
            <div className="pt-4">
              <div>
                <p
                  className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                  data-aos="fade-up"
                >
                  Contact Us -
                </p>
                <p
                  className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
                  data-aos="fade-up"
                >
                  If you have questions about this Privacy Policy or your
                  personal information, please contact us at{" "}
                  <Link href="/contact-us">
                    <span>
                      <b>Contact Us</b>
                    </span>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="mt-14">
        <h1 className="xl:text-[42px] uppercase lg:text-[38px] sm:text-[34px] text-[30px] font-semibold xl:leading-[52px] sm:leading-[48px] leading-[32px] tracking-[-2px] text-[#011E3C] josefin-font">
          Cancellation Terms
        </h1>
        <div className="2xl:w-64 xl:w-52 md:w-48 w-36 h-[5px] bg-[#CF9A2C] rounded-full "></div>
      </div>
      <div className="mt-2">
        <h3
          className="2xl:text-[20px] uppercase xl:text-[18px] text-[16px] font-bold xl:leading-[28px] leading-[24px] text-[#011E3C] inter-font mt-6"
          data-aos="fade-up"
        >
          1. Non- Refundable Policy
        </h3>
        <ul className="list-disc px-5 sm:pl-10 pl-6">
          <li
            className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
            data-aos="fade-up"
          >
            For reservations that are booked less than 10 days prior to the
            arrival date.
          </li>
          <li
            className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
            data-aos="fade-up"
          >
            100% of the payment made will be taken as penalty.
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <h3
          className="2xl:text-[20px] uppercase xl:text-[18px] text-[16px] font-bold xl:leading-[28px] leading-[24px] text-[#011E3C] inter-font mt-6"
          data-aos="fade-up"
        >
          2. Flexible Policy
        </h3>
        <ul className="list-disc px-5 sm:pl-10 pl-6">
          <li
            className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
            data-aos="fade-up"
          >
            For reservations that are booked within 10-29 days prior to the
            arrival date.
          </li>
          <li
            className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
            data-aos="fade-up"
          >
            50% of the payment made will be refunded within 7-14 business days
            depending on their issuing banks.
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <h3
          className="2xl:text-[20px] uppercase xl:text-[18px] text-[16px] font-bold xl:leading-[28px] leading-[24px] text-[#011E3C] inter-font mt-6"
          data-aos="fade-up"
        >
          3. Refundable Policy
        </h3>
        <ul className="list-disc px-5 sm:pl-10 pl-6">
          <li
            className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
            data-aos="fade-up"
          >
            For reservations booked 30 days and above prior to the arrival date.
          </li>
          <li
            className="sm:text-[16px] text-[15px] font-medium xl:leading-[26px] leading-[23px] text-[#001D3D] opacity-75 inter-font mt-2"
            data-aos="fade-up"
          >
            100% of the payment will be refunded to the guests within 7-14
            business days depending on their issuing banks.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default PrivacyPolicy;

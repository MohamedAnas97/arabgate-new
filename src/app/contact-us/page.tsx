import ContactPage from "@/components/contact-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Duomo Holiday Homes LLC",
  description: "Duomo Holiday Homes LLC",
};

export default function ContactUs() {
  return (
    <>
      <ContactPage />
    </>
  );
}

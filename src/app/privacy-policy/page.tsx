import PrivacyPolicyPage from "@/components/privacy-policy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Duomo Holiday Homes LLC",
  description: "Duomo Holiday Homes LLC",
};

export default function PrivacyPolicy() {
  return (
    <>
      <PrivacyPolicyPage />
    </>
  );
}

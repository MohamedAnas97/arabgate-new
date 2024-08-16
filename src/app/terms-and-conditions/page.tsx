import TermsandConditionPage from "@/components/terms-and-conditions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Duomo Holiday Homes LLC",
  description: "Duomo Holiday Homes LLC",
};

export default function TermsandConditions() {
  return (
    <>
      <TermsandConditionPage />
    </>
  );
}

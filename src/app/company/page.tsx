import CompanyPage from "@/components/company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company - Duomo Holiday Homes LLC",
  description: "Duomo Holiday Homes LLC",
};

export default function Company() {
  return (
    <>
      <CompanyPage />
    </>
  );
}

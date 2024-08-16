import HelpCenterPage from "@/components/help-center";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center - Duomo Holiday Homes LLC",
  description: "Duomo Holiday Homes LLC",
};
export default function HelpCenter() {
  return (
    <>
      <HelpCenterPage />
    </>
  );
}

import BecomePage from "@/components/become-a-host";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become A Host - Duomo Holiday Homes LLC",
  description: "Duomo Holiday Homes LLC",
};
export default function BecomeAHost() {
  return (
    <>
      <BecomePage />
    </>
  );
}

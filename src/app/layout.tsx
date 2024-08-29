import type { Metadata } from "next";
import Header from "@/shared/header";
import Footer from "@/shared/footer";
import Whatsapp from "@/shared/whatsapp";
import "./globals.css";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Home Maintenance Services",
  description: "Home Maintenance Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/apple-icon.png?<generated>"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body>
        {" "}
        <Header />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}

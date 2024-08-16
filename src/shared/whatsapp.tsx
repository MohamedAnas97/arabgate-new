"use client";
import Image from "next/image";
const Whatsapp = () => {
  return (
    <div
      className="fixed bottom-5 right-5 z-[200] cursor-pointer"
      onClick={() =>
        window.open(
          "https://api.whatsapp.com/send?phone=971501510743&text=",
          "_blank"
        )
      }
    >
      <Image src={require("/public/assets/contact/whatsapp.png")} alt="" className="h-14 w-14" />
    </div>
  );
};
export default Whatsapp;

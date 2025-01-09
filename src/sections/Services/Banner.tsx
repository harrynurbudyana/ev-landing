import React from "react";
import Image from "next/image";
import banner from "@/images/services-banner.png";

export default function Banner() {
  return (
    <div
      className="relative w-screen overflow-hidden"
      style={{ height: "400px" }}
    >
      <Image
        className="object-cover w-full h-full"
        src={banner}
        alt="background"
        fill
      />
    </div>
  );
}

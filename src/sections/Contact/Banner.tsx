import React from "react";
import Image from "next/image";
import banner from "@/images/contact-banner.png";

export default function Banner() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "400px" }}
    >
      <Image
        className="object-cover w-full"
        src={banner}
        alt="background"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

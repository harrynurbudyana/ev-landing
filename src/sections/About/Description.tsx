import Image from "next/image";
import konversi from "@/images/konversi.png";
import React, { useEffect } from "react";
import Script from "next/script";

export default function Description() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({ duration: 1100 });
    }
  }, []);

  return (
    <>
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        onLoad={() => {
          if (typeof window !== "undefined" && window.AOS) {
            window.AOS.init({ duration: 1100 });
          }
        }}
      />

      <div className="flex flex-col bg-sky-500">
        <div className="flex flex-col lg:flex-row-reverse">
          <div data-aos="fade-left" className="flex w-full">
            <Image
              className="object-cover max-h-screen"
              src={konversi}
              alt="konversi"
            />
          </div>
          <div className="text-white text-justify bg-sky-500 p-10 md:p-20 lg:w-4/5">
            <div data-aos="fade-right">
              <div className="flex flex-row items-center lg:items-start">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  About Us
                  <div className="w-35 mt-1 h-1 bg-white" />
                </h1>
              </div>
              <p className="mt-5">
                Torsi EV is crucial in supporting the establishment of an
                Electric Vehicle ecosystem through activities encompassing, but
                not limited to, conversion, production, redesign, and
                development of supporting devices, such as charging stations and
                supporting applications. These activities are realized through
                research, dissemination of research findings via community
                service and teaching, and publication and Intellectual Property
                Rights registration. <br /> <br />
                Torsi EV aims to enhance the performance of Telkom University by
                developing innovative products that contribute practically and
                academically and are aligned with the institution's areas of
                expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import konversi from "@/images/konversi.png";
import React, { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

import volta from "@/images/volta-light.png";
import dms from "@/images/dms.png";
import telyu from "@/images/telyu.png";
import abe from "@/images/ABELogoWebsiteTransparent.png";
import left from "@/images/left-1.svg";
import right from "@/images/right-1.svg";

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

      <div className="w-full">
        <section className="">
          <div className="grid items-center py-4 justify-center text-center">
            <div className="flex flex-row md:gap-10 justify-center mb-5 items-center"></div>
            <div className="flex flex-col items-center lg:flex-row justify-center gap-5 py-5">
              <div className="" data-aos="zoom-in-down" data-aos-duration={800}>
                <Link href="https://telkomuniversity.ac.id" target="_blank">
                  <Image className="w-56" src={telyu} alt="logotelyu" />
                </Link>
              </div>
              <div
                className=""
                data-aos="zoom-in-down"
                data-aos-duration={1100}
              >
                <Link href="https://voltaindonesia.com" target="_blank">
                  <Image className="w-56" src={volta} alt="logovolta" />
                </Link>
              </div>
              <div
                className=""
                data-aos="zoom-in-down"
                data-aos-duration={1400}
              >
                <Link href="https://digitalmultisinergy.co.id/" target="_blank">
                  <Image className="w-56" src={dms} alt="logodms" />
                </Link>
              </div>
              <div
                className=""
                data-aos="zoom-in-down"
                data-aos-duration={1700}
              >
                <Link href="https://alphabetaengineering.id/" target="_blank">
                  <Image className="w-56" src={abe} alt="logoabe" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

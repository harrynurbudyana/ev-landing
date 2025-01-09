import Image from "next/image";
import React, { useEffect } from "react";
import Script from "next/script";
import pict1 from "@/images/partner1.png";
import pict2 from "@/images/partner2.png";
import pict3 from "@/images/partner3.png";
import pict4 from "@/images/partner4.png";
import pict5 from "@/images/partner5.png";
import pict6 from "@/images/partner6.png";
import pict7 from "@/images/partner7.png";
import pict8 from "@/images/partner8.png";
import pict9 from "@/images/partner9.png";

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
        <div className="justify-items-center text-center mb-5">
          <div
            className="text-sky-500 font-bold text-3xl lg:text-4xl mb-6"
            data-aos="fade-down"
          >
            Collaboration in Action
          </div>

          <div className="flex flex-col gap-3  pr-3 pl-3 md:p-0">
            <div className="max-w-screen-xl justify-items-center">
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="relative group overflow-hidden rounded-md"
                  data-aos="fade-down"
                  data-aos-duration={800}
                >
                  <Image
                    src={pict1}
                    className="size-auto transform group-hover:scale-110 transition-transform duration-300 rounded-md"
                    alt="pict1"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-md">
                    <p className="text-white text-center p-10">
                      Torsi EV conducted a trial of its electric vehicle
                      charging station on Friday, October 20, 2023.
                    </p>
                  </div>
                </div>
                <div
                  className="relative group overflow-hidden rounded-md"
                  data-aos="fade-down"
                  data-aos-duration={1100}
                >
                  <Image
                    src={pict2}
                    className="size-auto transform group-hover:scale-110 transition-transform duration-300 rounded-md"
                    alt="pict2"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-md">
                    <p className="text-white text-center p-10">
                      Powerindo partner visit: Stroom! Performance trial with
                      throttle response inspection on Wednesday, October 4,
                      2023.
                    </p>
                  </div>
                </div>
                <div
                  className="relative group overflow-hidden rounded-md"
                  data-aos="fade-down"
                  data-aos-duration={1300}
                >
                  <Image
                    src={pict3}
                    className="size-auto transform group-hover:scale-110 transition-transform duration-300 rounded-md"
                    alt="pict3"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-md">
                    <p className="text-white text-center p-10">
                      Powerindo partner visit: Torsi EV workshop site visit on
                      Wednesday, October 4, 2023.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-screen-xl justify-items-center">
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="relative group overflow-hidden rounded-md"
                  data-aos="fade-down"
                  data-aos-duration={800}
                >
                  <Image
                    src={pict4}
                    className="size-auto transform group-hover:scale-110 transition-transform duration-300 rounded-md"
                    alt="pict1"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-md">
                    <p className="text-white text-center p-10">
                      Group photo of Torsi EV executives with Powerindo partners
                      on Wednesday, October 4, 2023.
                    </p>
                  </div>
                </div>
                <div
                  className="relative group overflow-hidden rounded-md"
                  data-aos="fade-down"
                  data-aos-duration={1100}
                >
                  <Image
                    src={pict5}
                    className="size-auto transform group-hover:scale-110 transition-transform duration-300 rounded-md"
                    alt="pict2"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-md">
                    <p className="text-white text-center p-10">
                      The collaborative discussion meeting with Powerindo
                      partners is in a productive atmosphere on Wednesday,
                      October 4, 2023.
                    </p>
                  </div>
                </div>
                <div
                  className="relative group overflow-hidden rounded-md"
                  data-aos="fade-down"
                  data-aos-duration={1300}
                >
                  <Image
                    src={pict6}
                    className="size-auto transform group-hover:scale-110 transition-transform duration-300 rounded-md"
                    alt="pict3"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-md">
                    <p className="text-white text-center p-10">
                      Overview of the Torsi EV conversion motor system presented
                      to Powerindo partners on Wednesday, October 4, 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-screen-xl justify-items-center">
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="relative group overflow-hidden rounded-md"
                  data-aos="fade-down"
                  data-aos-duration={800}
                >
                  <Image
                    src={pict7}
                    className="size-auto transform group-hover:scale-110 transition-transform duration-300 rounded-md"
                    alt="pict1"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-md">
                    <p className="text-white text-center p-10">
                      Group photo of Torsi EV executives, Faculty of Applied
                      Science students, and partners on Friday, October 20,
                      2023.
                    </p>
                  </div>
                </div>
                <div
                  className="relative group overflow-hidden rounded-md"
                  data-aos="fade-down"
                  data-aos-duration={1100}
                >
                  <Image
                    src={pict8}
                    className="size-auto transform group-hover:scale-110 transition-transform duration-300 rounded-md"
                    alt="pict2"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-md">
                    <p className="text-white text-center p-10">
                      Charging Station installation at TULT in collaboration
                      with partners on Friday, October 20, 2023.
                    </p>
                  </div>
                </div>
                <div
                  className="relative group overflow-hidden rounded-md"
                  data-aos="fade-down"
                  data-aos-duration={1300}
                >
                  <Image
                    src={pict9}
                    className="size-auto transform group-hover:scale-110 transition-transform duration-300 rounded-md"
                    alt="pict3"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-md">
                    <p className="text-white text-center p-10">
                      Charging Point component assembly at TULT in partnership
                      with ... on Friday, October 20, 2023.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

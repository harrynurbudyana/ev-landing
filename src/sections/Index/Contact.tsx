import React, { useEffect } from "react";
import Image from "next/image";
import left from "@/images/left-1.svg";
import right from "@/images/right-1.svg";
import Script from "next/script";

export default function Contact() {
  return (
    <>
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />

      <div className="container mx-auto max-w-screen-xl my-auto px-4 mb-12">
        <div
          className="flex flex-row gap-10 justify-center mb-5 items-center"
          data-aos="zoom-in"
        >
          <Image className="h-2 md:h-10 mt-5" src={left} alt="line-left" />
          <h1 className="text-3xl lg:text-4xl mt-5 font-bold text-sky-500 text-center">
            Contact Us
          </h1>
          <Image className="h-2 md:h-10 mt-5" src={right} alt="line-right" />
        </div>

        {/* Wrapper untuk kartu Alamat, Telepon, dan Email */}
        <div className="flex flex-col lg:flex-row lg:gap-5 mt-12">
          <div className="flex flex-col lg:flex-col lg:gap-33 w-full md:w1/3">
            {/* Kartu Alamat */}
            <div
              className="card rounded-md bg-white w-[100%] h-1/3 shadow-md text-black mb-5 items-start hover:bg-slate-50 justify-center"
              data-aos="fade-down"
            >
              <a href="https://maps.app.goo.gl/o5rGZGF2Pwg75DuR6">
                <figure className="p-5">
                  <div className="flex flex-row items-start">
                    <button className="btn btn-circle mr-5 ml-5 bg-sky-500 border-none text-white hover:bg-sky-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M11.262 22.134S4 16.018 4 10a8 8 0 1 1 16 0c0 6.018-7.262 12.134-7.262 12.134c-.404.372-1.069.368-1.476 0M12 13.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex flex-col">
                      <div className="font-semibold text-lg">Location</div>
                      <div className="text-slate-500">
                        Selaru Building, Faculty of Applied Science 1st Floor,
                        COE Smart EV
                      </div>
                    </div>
                  </div>
                </figure>
              </a>
            </div>

            {/* Kartu Telepon */}
            <div
              className="card rounded-md bg-white w-[100%] h-1/3 shadow-md text-black mb-5 items-start hover:bg-slate-50 justify-center"
              data-aos="fade-down"
            >
              <figure className="p-5">
                <div className="flex flex-row items-start">
                  <button className="btn btn-circle mr-5 ml-5 bg-sky-500 border-none text-white hover:bg-sky-500 hover:border-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                      ></path>
                    </svg>
                  </button>
                  <div className="flex flex-col">
                    <div className="font-semibold text-lg">Call Us</div>
                    <div className="text-slate-500">+62 234 5678 9876</div>
                  </div>
                </div>
              </figure>
            </div>

            {/* Kartu Email */}
            <div
              className="card rounded-md bg-white w-[100%] h-1/3 shadow-md text-black mb-5 items-start hover:bg-slate-50 justify-center"
              data-aos="fade-down"
            >
              <figure className="p-5">
                <div className="flex flex-row items-start">
                  <button className="btn btn-circle mr-5 ml-5 bg-sky-500 border-none text-white hover:bg-sky-500 hover:border-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <rect width="24" height="24" fill="none" />
                      <g fill="currentColor">
                        <path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z" />
                        <path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z" />
                      </g>
                    </svg>
                  </button>
                  <div className="flex flex-col">
                    <div className="font-semibold text-lg">Email Us</div>
                    <div className="text-slate-500">info@example.com</div>
                  </div>
                </div>
              </figure>
            </div>
          </div>
          <div className="flex items-end" data-aos="fade-down">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.304369662571!2d107.63004257481983!3d-6.973371868282246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9afad6fa06f%3A0xd4fc2f579a78668a!2sFakultas%20Ilmu%20Terapan%20Universitas%20Telkom!5e0!3m2!1sid!2sid!4v1730269657713!5m2!1sid!2sid"
              width="815"
              height="450"
              className="border-none rounded-md"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

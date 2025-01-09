import React, { useEffect } from "react";
import Image from "next/image";
import items1 from "@/images/cs-items1.png";
import items2 from "@/images/cs-items2.png";
import items3 from "@/images/cs-items3.png";
import items4 from "@/images/cs-items4.png";
import Script from "next/script";

export default function Gallery() {
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

      <div className="flex flex-col lg:flex-row justify-center items-center relative">
        <div className="max-w-screen-lg mb-10 lg:mb-5 lg:mt-5">
          <div
            className="text-3xl lg:text-4xl font-bold text-sky-500 text-center mt-5"
            data-aos="zoom-in"
          >
            Highlights Activities
          </div>
          <div
            className="carousel carousel-center h-80 rounded-lg overflow-x-auto gap-x-5"
            data-aos="fade-down"
          >
            <div
              id="item1"
              className="carousel-item w-[90%] lg:w-[40%] ml-5 lg:ml-0"
            >
              <Image
                src={items1}
                className="object-contain drop-shadow-md"
                alt="Item 1"
              />
            </div>
            <div id="item2" className="carousel-item w-[90%] lg:w-[40%]">
              <Image
                src={items2}
                className="object-contain drop-shadow-md"
                alt="Item 2"
              />
            </div>
            <div id="item3" className="carousel-item w-[90%] lg:w-[40%]">
              <Image
                src={items3}
                className="object-contain drop-shadow-md"
                alt="Item 3"
              />
            </div>
            <div
              id="item4"
              className="carousel-item w-[90%] lg:w-[40%] mr-5 lg:mr-0"
            >
              <Image
                src={items4}
                className="object-contain drop-shadow-md"
                alt="Item 4"
              />
            </div>
          </div>
          {/* Tombol Navigasi Prev dan Next di Luar Carousel */}
          <div
            className="absolute inset-y-1/2 left-32 transform -translate-y-1/2 overflow-hidden lg:overflow-visible"
            data-aos="fade-down"
          >
            <a
              href="#item1"
              className="btn btn-circle bg-transparent border-none shadow-none hover:bg-sky-200 text-sky-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m14 7l-5 5l5 5"
                ></path>
              </svg>
            </a>
          </div>
          <div
            className="absolute inset-y-1/2 right-32 transform -translate-y-1/2 overflow-hidden lg:overflow-visible"
            data-aos="fade-down"
          >
            <a
              href="#item4"
              className="btn btn-circle bg-transparent border-none shadow-none hover:bg-sky-200 text-sky-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m10 17l5-5l-5-5"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

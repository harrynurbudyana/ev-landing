import React, { useEffect } from "react";
import Image from "next/image";
import cs from "@/images/services-chargingstation.png";
import items1 from "@/images/cs-items1.png";
import items3 from "@/images/cs-items2.png";
import items2 from "@/images/cs-items3.png";
import items4 from "@/images/cs-items4.png";
import Script from "next/script";
import abe from "@/images/ABELogoWebsiteTransparent.png";
import baraya from "@/images/baraya.png";

interface ChargingProps {
  id?: string;
}

const Charging: React.FC<ChargingProps> = ({ id }) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({ duration: 1000 });
    }
  }, []);

  return (
    <>
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        onLoad={() => {
          if (typeof window !== "undefined" && window.AOS) {
            window.AOS.init({ duration: 1000 });
          }
        }}
      />

      <div
        id={id}
        className="flex flex-col lg:flex-col justify-center overflow-x-hidden"
      >
        <div className="flex flex-col lg:flex-col justify-center z-20">
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 mt-12 justify-center">
            <div className="" data-aos="zoom-in">
              <Image className="w-56 mt-8 lg:mt-0" src={cs} alt="konversi" />
            </div>

            <div
              className="flex flex-col justify-center text-black w-3/4 lg:w-1/2"
              data-aos="fade-right"
            >
              <div className="flex items-center">
                <span className="font-bold text-xl md:text-2xl lg:text-3xl mb-2 pr-3">
                  Charging Station{" "}
                </span>
                <span className="font-semibold text-xs lg:text-sm bg-blue-200 rounded-md pt-1 pb-1 pr-3 pl-3">
                  Kedaireka Grant
                </span>
              </div>

              <div className="text-justify mb-10 lg:mb-0">
                <span className="font-bold">EV Charging Station</span> is a
                project funded by Kedaireka. The project includes 11kW and 22kW
                type-2 charging stations. The later charging station is operated
                in Telkom University Landmark Tower and is available to the
                public. The project also set a milestone for charging station
                application and integrated payment gateway research.
                <br />
                <span className="font-bold">Project value: </span>IDR.70M <br />
                <span className="font-bold">Project partner:</span> Alpha Beta
                Engineering, Baraya Telematika Nusantara
                <div className="flex gap-5 items-center mt-5">
                  <div>
                    <Image src={abe} className="w-32" alt="" />
                  </div>
                  <div>
                    <Image src={baraya} className="w-32" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col lg:flex-row justify-center items-center relative"
            data-aos="fade-down"
          >
            <div className="max-w-screen-lg mb-10 lg:mb-5 lg:mt-5">
              <div className="carousel carousel-center h-80 rounded-lg overflow-x-auto gap-x-5">
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

              <div className="absolute inset-y-1/2 left-44 transform -translate-y-1/2 overflow-hidden lg:overflow-visible">
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
              <div className="absolute inset-y-1/2 right-44 transform -translate-y-1/2 overflow-hidden lg:overflow-visible">
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
        </div>
      </div>
    </>
  );
};

export default Charging;

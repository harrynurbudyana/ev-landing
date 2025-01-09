import React from "react";
import Image from "next/image";
import conversion from "@/images/ICEkonversi.png";
import items1 from "@/images/conversion-items1.png";
import items2 from "@/images/conversion-items2.png";
import items3 from "@/images/conversion-items3.png";
import items4 from "@/images/cs-items4.png";
import cdc from "@/images/cdc.png";
import otomi from "@/images/otomi.png";
import brt from "@/images/brt.png";

interface ConversionProps {
  id?: string;
}

const Conversion: React.FC<ConversionProps> = ({ id }) => {
  return (
    <div
      id={id}
      className="flex flex-col lg:flex-col justify-center overflow-x-hidden max-w-full"
    >
      <div className="flex flex-col lg:flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 mt-10 justify-center">
          <div className="lg:mt-10" data-aos="zoom-in">
            <Image
              className="w-56 mt-8 lg:mt-0"
              src={conversion}
              alt="konversi"
            />
          </div>

          <div
            className="flex flex-col justify-center text-black w-3/4 lg:w-1/2"
            data-aos="fade-right"
          >
            <div className="flex items-center">
              <span className="font-bold text-xl md:text-2xl lg:text-3xl mb-2 pr-3">
                CDC Conversion & Workshop{" "}
              </span>
              <span className="font-semibold text-xs lg:text-sm bg-blue-200 rounded-md pt-1 pb-1 pr-3 pl-3">
                Industry Grant
              </span>
            </div>
            <div className="text-justify mb-10 lg:mb-0">
              <span className="font-bold">CDC Conversion & Workshop</span> is a
              conversion project funded by CDC Telkom. The project converted
              five motorcycle based on Honda Vario. In this project, the swing
              arm is redesigned and build from scratch. The battery compartment
              is also moved below the baggage compartment for better stability
              and accessibility. Controller and engine were tuned up on dynotest
              for accuracy. The project also laid the foundation of the TorsiEV
              conversion workshop.  <br />
              <span className="font-bold">Project value: </span> IDR.450M <br />
              <span className="font-bold">Project partners:</span> CDC Telkom,
              Otomi Indonesia, BRT, Ko+Lab <br />
              <div className="flex gap-5 items-center mt-5">
                <div className="flex gap-5 items-center">
                  <div>
                    <Image src={cdc} className="w-20" alt="" />
                  </div>
                  <div>
                    <Image src={otomi} className="w-28" alt="" />
                  </div>
                </div>
                <div>
                  <Image src={brt} className="w-20" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row justify-center items-center relative mb-0"
          data-aos="fade-down"
        >
          <div className="max-w-screen-lg mb-10 lg:mt-5 lg:mb-0">
            <div className="carousel carousel-center h-80 rounded-lg overflow-x-auto gap-x-5">
              <div
                id="convertion-item1"
                className="carousel-item w-[90%] lg:w-[40%] ml-5 lg:ml-0"
              >
                <Image
                  src={items1}
                  className="object-contain drop-shadow-md"
                  alt="Item 1"
                />
              </div>
              <div
                id="convertion-item2"
                className="carousel-item w-[90%] lg:w-[40%]"
              >
                <Image
                  src={items2}
                  className="object-contain drop-shadow-md"
                  alt="Item 2"
                />
              </div>
              <div
                id="convertion-item3"
                className="carousel-item w-[90%] lg:w-[40%]"
              >
                <Image
                  src={items3}
                  className="object-contain drop-shadow-md"
                  alt="Item 3"
                />
              </div>
              <div
                id="convertion-item4"
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
                href="#convertion-item1"
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
                href="#convertion-item4"
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
  );
};
export default Conversion;

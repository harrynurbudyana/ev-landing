import React from "react";
import Image from "next/image";
import charging from "@/images/charging.png";
import left from "@/images/left-1.svg";
import right from "@/images/right-1.svg";
import ice from "@/images/Str-4.png";
import stroom from "@/images/Str-1.png";
import Script from "next/script";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />

      <div className="container mx-auto max-w-screen-xl my-auto px-4 md:mt-0">
        <div
          className="mt-5 flex flex-row gap-10 justify-center mb-5 items-center"
          data-aos="zoom-in"
        >
          <Image className="h-2 md:h-10 mt-5" src={left} alt="line-left" />
          <h1 className="text-3xl lg:text-4xl mt-5 font-bold text-sky-500 text-center">
            Services
          </h1>
          <Image className="h-2 md:h-10 mt-5" src={right} alt="line-right" />
        </div>

        <div className="flex flex-col lg:flex-row gap-9 place-items-center mt-12">
          <div
            className="card bg-white w-full shadow-md text-black hover:shadow-xl"
            data-aos="fade-down"
            data-aos-duration="400"
          >
            <figure className="px-5 pt-5">
              <Image className="rounded" src={charging} alt="charging" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Charging Station</h2>
              <p className="text-justify line-clamp-4">
                <span className="font-bold">EV Charging Station</span> is a
                project funded by Kedaireka. The project includes 11kW and 22kW
                type-2 charging stations. The later charging station is operated
                in Telkom University Landmark Tower and is available to the
                public. The project also set a milestone for charging station
                application and integrated payment gateway research.
              </p>
              <div className="card-actions justify-end">
                <Link href="/services#charging">
                  <button className="group btn btn-sm w-32 h-10 bg-white border-sky-500 text-sky-500 hover:bg-sky-500 hover:border-none hover:text-white">
                    See More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="card bg-white w-full shadow-md text-black hover:shadow-xl"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <figure className="px-5 pt-5">
              <Image className="rounded" src={ice} alt="ice" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">ICE to EV Conversion</h2>
              <p className="text-justify line-clamp-4">
                <span className="font-bold">CDC Conversion & Workshop</span> is
                a conversion project funded by CDC Telkom. The project converted
                five motorcycle based on Honda Vario. In this project, the swing
                arm is redesigned and build from scratch. The battery
                compartment is also moved below the baggage compartment for
                better stability and accessibility. Controller and engine were
                tuned up on dynotest for accuracy. The project also laid the
                foundation of the TorsiEV conversion workshop.
              </p>
              <div className="card-actions justify-end">
                <Link href="/services#conversion">
                  <button className="btn btn-sm w-32 h-10 bg-white border-sky-500 text-sky-500 hover:bg-sky-500 hover:border-none hover:text-white">
                    See More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="card bg-white w-full shadow-md text-black hover:shadow-xl"
            data-aos="fade-down"
            data-aos-duration="1600"
          >
            <figure className="px-5 pt-5">
              <Image className="rounded" src={stroom} alt="ice" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">STROOM! - Electric Vehicle</h2>
              <p className="text-justify line-clamp-4">
                <span className="font-bold">Stroom</span> is our first project
                on an electric motorcycle. Stroom is based on Volta electric
                motorcyle, and given upgraded bodywork. The project was led by
                our team from the Faculty of Creative Industry in collaboration
                with the Faculty of Applied Science. The project also upgrade
                the instrument cluster and battery compartment.
              </p>
              <div className="card-actions justify-end">
                <Link href="/services#stroom">
                  <button className="group btn btn-sm w-32 h-10 bg-white border-sky-500 text-sky-500 hover:bg-sky-500 hover:border-none hover:text-white">
                    See More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

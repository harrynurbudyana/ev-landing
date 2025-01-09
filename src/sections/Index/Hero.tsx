import React from "react";
import Image from "next/image";
import str2 from "@/images/Str-2-min.png";

export default function Hero() {
  return (
    <div className="hero min-h-screen">
      <Image
        className="h-screen w-full object-cover"
        src={str2}
        alt="background"
      />
      <div className="hero-overlay bg-slate-800 bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center p-4 md:p-8">
        <div className="max-w-lg md:max-w-2xl lg:max-w-4xl">
          <h1
            className="mb-3 text-3xl md:text-5xl font-bold text-white"
            data-aos="fade-down"
            data-aos-duration={1000}
          >
            Welcome to Torsi EV
          </h1>
          <p
            className="mb-4 text-base md:text-lg lg:text-xl italic  text-white"
            data-aos="fade-down"
            data-aos-duration={1200}
          >
            Innovating Green Mobility, Inspiring Future Generations
          </p>
          <div data-aos="fade-down" data-aos-duration={1400}>
            <button className="btn tracking-widde rounded-md pl-7 pr-7 h-9 bg-transparent border-white border-[2px] text-white hover:bg-white hover:text-sky-500 hover:border-none text-base">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import Script from "next/script";

export default function Map() {
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

      <div className="container mx-auto max-w-screen-xl my-auto px-4 mb-12">
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
              data-aos-duration={1400}
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

        <div className="mt-10" data-aos="zoom-in">
          <p className="font-bold text-center text-sky-500 text-3xl lg:text-4xl mb-3">
            Join our social media community today!
          </p>
        </div>

        <section className="" data-aos="zoom-in" data-aos-duration={1300}>
          <div className="flex flex-col items-center lg:flex-row justify-center gap-5 py-5 w-full">
            <div className="card rounded-md bg-white w-[100%] h-1/3 shadow-md text-black mb-5 items-start hover:bg-slate-50">
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
                      <path
                        fill="currentColor"
                        d="M17.303 2.25H6.697A4.447 4.447 0 0 0 2.25 6.697v10.606a4.447 4.447 0 0 0 4.447 4.447h10.606a4.447 4.447 0 0 0 4.447-4.447V6.697a4.447 4.447 0 0 0-4.447-4.447m-8.46 15.742a.4.4 0 0 1-.4.423h-1.78a.41.41 0 0 1-.4-.412V10.6a.4.4 0 0 1 .4-.411h1.78a.4.4 0 0 1 .4.411zM7.52 8.632a1.467 1.467 0 1 1 .022-2.935A1.467 1.467 0 0 1 7.52 8.63m10.817 9.35a.39.39 0 0 1-.378.388H16.08a.39.39 0 0 1-.378-.389v-3.424c0-.511.156-2.223-1.356-2.223c-1.179 0-1.412 1.2-1.457 1.734v3.991a.39.39 0 0 1-.378.39h-1.823a.39.39 0 0 1-.389-.39v-7.493a.39.39 0 0 1 .39-.378h1.822a.39.39 0 0 1 .39.378v.645a2.59 2.59 0 0 1 2.434-1.112c3.035 0 3.024 2.835 3.024 4.447z"
                      />
                    </svg>
                  </button>
                  <div className="flex flex-col text-start">
                    <div className="font-semibold text-lg">LinkedIn</div>
                    <div className="text-slate-500">@coe.smartev</div>
                  </div>
                </div>
              </figure>
            </div>

            <div className="card rounded-md bg-white w-[100%] h-1/3 shadow-md text-black mb-5 items-start hover:bg-slate-50 justify-center">
              <figure className="p-5">
                <div className="flex flex-row items-start">
                  <button className="btn btn-circle mr-5 ml-5 bg-sky-500 border-none text-white hover:bg-sky-500 hover:border-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.08em"
                      height="2em"
                      viewBox="0 0 896 1664"
                    >
                      <path
                        fill="currentColor"
                        d="M895 12v264H738q-86 0-116 36t-30 108v189h293l-39 296H592v759H286V905H31V609h255V391q0-186 104-288.5T667 0q147 0 228 12"
                      ></path>
                    </svg>
                  </button>
                  <div className="flex flex-col text-start">
                    <div className="font-semibold text-lg">Facebook</div>
                    <div className="text-slate-500">@coe.smartev</div>
                  </div>
                </div>
              </figure>
            </div>

            <div className="card rounded-md bg-white w-[100%] h-1/3 shadow-md text-black mb-5 items-start hover:bg-slate-50 justify-center">
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
                      <path
                        fill="currentColor"
                        d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"
                      />
                    </svg>
                  </button>
                  <div className="flex flex-col text-start">
                    <div className="font-semibold text-lg">Instagram</div>
                    <div className="text-slate-500">@coe.smartev</div>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

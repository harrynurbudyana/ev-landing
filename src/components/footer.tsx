// import React from "react";
import Image from "next/image";
import logoTorsiFooter from "@/images/logotorsi-footer.svg";

export default function Footer() {
  return (
    <footer className="footer bg-sky-500 text-white p-10 flex place-content-center">
      <div className="flex flex-col md:items-center">
        <div className="flex flex-col md:flex-row gap-5 md:gap-32">
          <aside>
            <div className="flex flex-col gap-3">
              <Image
                className="w-48 lg:w-64"
                src={logoTorsiFooter}
                alt="logo"
              />
              <p className="font-bold text-base">
                Innovating Green Mobility,
                <br />
                Inspiring Future Generations
              </p>
            </div>
          </aside>
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover" href="/services#charging">
              Charging Station
            </a>
            <a className="link link-hover" href="/services#conversion">
              ICE to EV Conversion
            </a>
            <a className="link link-hover" href="/services#stroom">
              STROOM! - Electric Vehicle
            </a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover" href="/about">
              About
            </a>
            <a className="link link-hover" href="/partnership">
              Partner
            </a>
            <a className="link link-hover" href="/contact">
              Contact
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="flex flex-col lg:flex-row gap-3">
              <a className="link link-hover" href="">
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
              </a>
              <a className="link link-hover">
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
              </a>
              <a
                className="link link-hover"
                href="https://www.instagram.com/coe.smartev/"
              >
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
              </a>
            </div>
          </nav>
        </div>
        <div className="mt-5">
          <p className="text-center font-medium">
            Copyright © {new Date().getFullYear()} - All right reserved by
            Torsi-EV
          </p>
        </div>
      </div>
    </footer>
  );
}

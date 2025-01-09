import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import Hero from "@/sections/Index/Hero";
import Partner from "@/sections/Index/Partner";
import About from "@/sections/Index/About";
import Services from "@/sections/Index/Services";
import Contact from "@/sections/Index/Contact";

declare global {
  interface Window {
    AOS: any;
  }
}

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <About />
      <Services />
      <Partner />
      <Contact />
    </DefaultLayout>
  );
}
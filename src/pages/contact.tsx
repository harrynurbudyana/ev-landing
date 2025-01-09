import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import Banner from "@/sections/Contact/Banner";
import Map from "@/sections/Contact/Map";

export default function Contact() {
  return (
    <DefaultLayout>
      <Banner />
      <Map />
    </DefaultLayout>
  );
}
import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import Banner from "@/sections/About/Banner";
import Description from "@/sections/About/Description";
import Gallery from "@/sections/About/Gallery";

export default function Service() {
  return (
    <DefaultLayout>
      <Banner />
      <Description />
      <Gallery />
    </DefaultLayout>
  );
}
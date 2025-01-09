import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import Banner from "@/sections/Partnership/BannerPartner";
import Partner from "@/sections/Partnership/LogoPartner";
import Visit from "@/sections/Partnership/PartnerVisit";

export default function Partnership() {
  return (
    <DefaultLayout>
      <Banner />
      <Partner />
      <Visit />
    </DefaultLayout>
  );
}

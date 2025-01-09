import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import Banner from "@/sections/Services/Banner";
import Charging from "@/sections/Services/ChargingStation";
import Conversion from "@/sections/Services/IceToEvConversion";
import Stroom from "@/sections/Services/Stroom";

export default function Service() {
  return (
    <DefaultLayout>
      <Banner />
      <Charging id="charging" />
      <Conversion id="conversion" />
      <Stroom id="stroom" />
    </DefaultLayout>
  );
}

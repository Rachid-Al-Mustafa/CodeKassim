import React from "react";
import { BannerSlide } from "../../../modals/banner.moder"; 
import { BannerSlider } from "../../../generalComponents";


import CatigoriesPage from "./components/CatigoriesPage";

const slides: BannerSlide[] = [

];

export default function Home() {
  return (
    <div>
      {/* Render the BannerSlider component */}
      <BannerSlider slides={slides} />
      <CatigoriesPage/>
    </div>
  );
}
import React from "react";
import { BannerSlide } from "../../../modals/banner.moder"; // Ensure this path is correct
import { BannerSlider } from "../../../generalComponents";

// Import images using `import * as`
import * as banner1 from "../../../../public/assets/Images/Banner1.jpeg";
import * as banner3 from "../../../../public/assets/Images/Banner3.jpeg";
import * as banner4 from "../../../../public/assets/Images/Banner4.jpeg";

// Define slides for the banner slider using the imported images
const slides: BannerSlide[] = [
  {
    imageUrl: banner1.default, // Access the `default` property
    title: "Big Sale - Up to 50% Off!",
    alt: "Sale Banner",
  },
  {
    imageUrl: banner3.default, // Access the `default` property
    title: "Trendy Fashion Items",
    alt: "Fashion Banner",
  },
  {
    imageUrl: banner4.default, // Access the `default` property
    title: "Latest Electronics Deals",
    alt: "Electronics Banner",
  },
];

export default function Home() {
  return (
    <div>
      {/* Render the BannerSlider component */}
      <BannerSlider slides={slides} />
    </div>
  );
}
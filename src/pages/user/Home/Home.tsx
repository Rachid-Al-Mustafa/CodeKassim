import React from "react";
import { BannerSlide } from "../../../modals/banner.moder"; // Ensure this path is correct
import { BannerSlider } from "../../../generalComponents"; // Ensure this import is correct

// No need to import images when they are in the public folder
// Reference them directly via the public URL path

// Define slides with image URLs from the public folder
const slides: BannerSlide[] = [
  {
    imageUrl: "/assets/Images/Banner1.jpeg", // Direct URL reference
    title: "Big Sale - Up to 50% Off!",
    alt: "Sale Banner",
  },
  {
    imageUrl: "/assets/Images/Banner3.jpeg",
    title: "Trendy Fashion Items",
    alt: "Fashion Banner",
  },
  {
    imageUrl: "/assets/Images/Banner4.jpeg",
    title: "Latest Electronics Deals",
    alt: "Electronics Banner",
  },
];

export default function Home() {
  return (
    <div>
      {/* ✅ Render the BannerSlider component with slides */}
      <BannerSlider slides={slides} />
    </div>
  );
}

import React from 'react';
import Slider from 'react-slick';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BannerSliderProps } from '../../modals/banner.moder';

const BannerSlider: React.FC<BannerSliderProps> = ({ slides, autoPlay = true, interval = 5000 }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: interval,
    arrows: true,
    nextArrow: (
      <div className="slick-arrow slick-next bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition shadow-md">
        <RightOutlined className="text-sm text-gray-700" />
      </div>
    ),
    prevArrow: (
      <div className="slick-arrow slick-prev bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition shadow-md">
        <LeftOutlined className="text-sm text-gray-700" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { arrows: false, dots: true },
      },
      {
        breakpoint: 768,
        settings: { arrows: false, dots: true },
      },
      {
        breakpoint: 480,
        settings: { arrows: false, dots: true },
      },
    ],
  };

  return (
    <div className="w-full">
      {/* ✅ Banner Slider */}
      <div className="relative w-full h-[35vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] xl:h-[45vh] overflow-hidden rounded-xl shadow-lg mb-8">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative font-sans">
              {/* Image */}
              <img
                src={slide.imageUrl}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-10"></div>

              {/* Content */}
              <div
                className="
                  min-h-[350px] 
                  relative 
                  z-50 
                  h-full 
                  flex 
                  flex-col 
                  justify-center 
                  items-center 
                  text-center 
                  text-white 
                  p-6
                  sm:p-0
                "
              >
                {/* Title */}
                <h2
                  className="
                    text-3xl 
                    sm:text-5xl 
                    font-bold 
                    leading-tight 
                    sm:leading-snug 
                    mb-4 
                    px-4 
                    sm:px-0
                  "
                >
                  {slide.title}
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
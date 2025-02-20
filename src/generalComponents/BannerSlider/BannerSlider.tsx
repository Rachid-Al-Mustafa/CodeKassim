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
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="relative w-full h-40 sm:h-52 md:h-64 lg:h-[350px] xl:h-[400px] overflow-hidden rounded-xl shadow-lg mb-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="w-full h-40 sm:h-52 md:h-64 lg:h-[350px] xl:h-[400px] flex justify-center items-center overflow-hidden rounded-xl">
              <img
                src={slide.imageUrl}
                alt={slide.alt}
                className="max-w-full max-h-full object-contain object-center rounded-xl shadow-sm"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-end text-center px-4 pb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white drop-shadow-lg leading-snug bg-black bg-opacity-50 px-3 py-1 rounded-md">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
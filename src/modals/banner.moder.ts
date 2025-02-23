export interface BannerSlide {
    imageUrl: string;
    title: string;
    alt: string;
  }
  
  export interface BannerSliderProps {
    slides: BannerSlide[];
    autoPlay?: boolean;
    interval?: number;
    
  }
  
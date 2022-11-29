import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/pagination";
import "./Slider.css";
interface CarouselProps {
  data?: any;
}
export default function Carousel({ data }: CarouselProps) {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        spaceBetween={3}
        centeredSlides={true}
        roundLengths={true}
        loop={true}
        loopAdditionalSlides={30}
        slidesPerView={1.5}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div style={{}}>
            <img
              className="object-cover"
              src="/public/images/slideShow.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{}}>
            <img
              className="object-cover"
              src="/public/images/slideShow.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{}}>
            <img
              className="object-cover"
              src="/public/images/slideShow.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{}}>
            <img
              className="object-cover"
              src="/public/images/slideShow.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

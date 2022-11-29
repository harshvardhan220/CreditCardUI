import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import RollerIcon from "../assets/svg/RollerIcon";
import "../Components/Slider.css";
import "../Components/Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel } from "swiper";
import "swiper/css";

const CreditCard = () => {
  let baseUrl = "/public/images/card";
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i: any) {
      return (
        <a className="">
          <img className="" src={`${baseUrl}/abstract0${i + 1}.jpg`} />
        </a>
      );
    },
  };
  return (
    <div className=" w-full h-[480px] grid grid-cols-12 max-[375px]:flex max-[375px]:flex-col max-[375px]:h-auto max-[375px]:px-[25px] bg-[#F7F3FF] max-[375px]:bg-[#ffff]">
      <div className="col-span-6 px-[40px] max-[375px]:flex ">
        <div className="w-[600px] h-auto p-8 max-[375px]:mt-[-70px] ">
        <Carousel
            width={"100%"}
            className=""
            autoPlay
            infiniteLoop
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            thumbWidth={80}
          >
            <div className="">
              <img src="/public/images/card2.png" />
            </div>
            <div>
              <img className="" src="/public/images/card2.png" />
            </div>
            <div>
              <img src="/public/images/card2.png" />
            </div>
            <div>
              <img src="/public/images/card2.png"  />
            </div>
          </Carousel>
        </div>
        {/* <div className="h-[480px] w-[600px] pl-[100px] pt-[35px] max-[375px]:h-[272px] max-[375px]:w-[328px] max-[375px]:ml-[-42px] max-[375px]:bg-[#F7F3FF] ">
          <Carousel
            width={"350px"}
            className=""
            autoPlay
            infiniteLoop
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            thumbWidth={80}
          >
            <div className="">
              <img src="/public/images/card/abstract01.jpg" />
            </div>
            <div>
              <img className="" src="/public/images/card2.png" />
            </div>
            <div>
              <img src="/public/images/card3.png" />
            </div>
            <div>
              <img src="/public/images/card4.png" />
            </div>
          </Carousel>
        </div> */}
      </div>
      <div className="col-span-6">
        <div className=" w-[495px] pt-[72px] max-[375px]:mt-[-100px]">
          <div className="max-[375px]:hidden">
            <RollerIcon />
          </div>
          <h1 className="mt-[16px] text-[40px] font-medium max-[375px]:mt-[-60px] max-[375px]:text-[18px]">
            Select Your Style
          </h1>
          <p className="min-[1440px]:hidden text-[16px] font-normal w-[327px] mt-[16px]">
          Whether you like a minimal look or something that catches everyone’s eyes. We have a <br/> Card design for you
          </p>
          <p className="mt-[16px] text-[24px] font-normal max-[375px]:hidden">
            Match your card to your personality. Whether you like a minimal look
            or something that catches everyone’s eyes, we’ve got a style for
            you. You can update your style every year, for a small fee{" "}
          </p>
          <div className="flex mt-[16px] mb-[48px]">
          <p className="min-[1440px]:hidden text-[16px] font-medium font=['Helvetica Neue']  underline">Get Started</p> <span>&nbsp; 	&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;

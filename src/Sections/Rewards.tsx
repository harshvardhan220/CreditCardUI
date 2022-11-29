import React from "react";
import StarIcon from "../assets/StarIcon";
import "../Components/Slider.css";
// import Slider from "infinite-react-carousel";
import Carousel from "../Components/Carousel";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      item: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const Rewards = () => {

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500,
    slidesToShow: 3,
    gutter: 50,
    duration: 3000,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          autoplaySpeed: 100,
          slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            centerPadding: "60px",
        }
      }
    ]
  };

  return (
    <div className="w-full flex h-[608px] bg-[#FFE4E7] max-[375px]:flex max-[375px]:flex-col max-[375px]:bg-[#fff]">
      <div className="w-[47%]  ">
        <div className="flex flex-col items-start w-[587px] max-[375px]:w-[327px] max-[375px]:text-[16px] pl-[108px] pt-[136px] max-[375px]:p-0">
          <div className="max-[375px]:hidden">
            <StarIcon />
          </div>
            <div className="min-[1440px]:hidden w-[100%] bg-[#FFE4E7] h-[272px] mt-[20px] mx-[23px] pt-[10px]">
            <Carousel />
            </div>
          <div className="pl-[10px]  max-[375px]:px-[24px] ">
            <h1 className="pt-[16px] text-[40px] font-medium max-[375px]:w-[177px] max-[375px]:text-[18px]">
              Choose Your Rewards
            </h1>
            <p className="pt-[16px] text-[24px] max-[375px]:p-0 max-[375px]:pt-[16px] max-[375px]:text-[16px] font-normal">
              Match your card to your lifestyle. We’ve got benefits from across
              brands & categories for you to choose from. Each benefit has an
              attached fee. Just add the ones you like to your card.
            </p>
            </div >
            <div className="flex pl-[24px] pt-[16px]">
            <p className="min-[1440px]:hidden text-[16px] font-medium font=['Helvetica Neue']  underline">Get Started</p> <span>&nbsp; &gt;</span>
          </div>
        </div>
      </div>
      <div className="w-[36%] max-[375px]:hidden relative ml-[52px] flex justify-center items-center">
      <Carousel />
      </div>
    </div>
  );
};

export default Rewards;

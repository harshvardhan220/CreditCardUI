import React from "react";
import image from "../assets/gif.png";

function HeroC() {
  return (
    <div className="flex justify-between items-center mt-20  max-[375px]:flex-col  max-[375px]:justify-center  max-[375px]:mt-[38px]">
      <div className="block max-[375px]:text-center">
        <h1 className="text-5xl leading-[130%] my-2 font-['Roboto'] font-medium  max-[375px]:text-[32px]">
          Build a Credit Card
          <br /> That is Definitely Yours
        </h1>
        <h1 className="text-[20px] leading-[150%] my-2 font-['Roboto'] font-normal  max-[375px]:text-[17px]">
          With the OneSync Credit Card you can customise your{" "}
          <br className=" max-[375px]:hidden" /> card the way you want
        </h1>
        <button className="text-lg text-[#ffffff] px-10 py-2 bg-[#F2707C] rounded-full mt-4 font-['Roboto']">
          Get Started
        </button>
      </div>
      <div>
        <img
          src={image}
          className="w-[600px] object-contain  max-[375px]:my-6"
        />
      </div>
    </div>
  );
}

export default HeroC;

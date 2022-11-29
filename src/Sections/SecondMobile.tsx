import React from "react";
import Rightarrow from "../assets/svg/Rightarrow";

const SecondMobile = () => {
  return (
    <div className="bg-[#7C7EB5] hidden px-6 py-8 w-full h-auto text-[#FFFFFF] max-[375px]:block">
      <div className="text-[24px] font-['Questrial'] font-medium leading-[150%]">
        Why the OneSync Card is the Best Choice for you?
      </div>
      <div className="text-[18px] font-normal w-full py-4 font-['Questrial']">
        <h1 className="lending-[150%] font-normal">
          You can create a Credit Card that fits all your needs on your own.
          Gone are the days when you had choose from premade credit cards with
          features that you did not need.
        </h1>
        <h1 className="mt-4 lending-[150%] font-normal">
          With the OneSync card you can save on all the things that you love to
          do with a unique personal touch
        </h1>
        <button className="mt-4 text-[16px] font-medium flex items-center">
          <span className="underline">Get Started</span>
          <span className="ml-3">
            <Rightarrow className="scale-75" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SecondMobile;

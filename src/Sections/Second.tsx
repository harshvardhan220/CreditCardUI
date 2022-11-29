import React from "react";
import Rightarrow from "../assets/svg/Rightarrow";

const Second = () => {
  return (
    <div className="bg-[rgb(142,124,181)] w-full flex justify-between h-auto  text-[#FFFFFF] max-[375px]:flex-col max-[375px]:px-6">
      <div className="text-[40px] font-medium  pl-[108px] pt-[93px] pb-[187px] pr-[130px] font-['Questrial'] lending-[140%] max-[375px]:pt-8 max-[375px]:px-0 max-[375px]:text-2xl max-[375px]:pb-4">
        The Freedom to Create <br />
        The Credit Card You Want
      </div>
      <div className="text-[16px] font-normal w-[492px] py-[93px] font-['Questrial'] mr-[111px] max-[375px]:w-auto max-[375px]:mr-0 max-[375px]:py-0">
        <h1 className="lending-[150%] max-[375px]:hidden">
          That's why it comes with benefits & rewards chosen by you. Available
          in multiple designs, your card comes in a style selected by you. You
          can come back each year, to edit your benefits or update your style.
        </h1>
        <h1 className="mt-4 lending-[150%] max-[375px]:hidden">
          Your OneSync Credit Card stays true to you, year after year. It’s the
          only card you’ll ever need.
        </h1>
        <button className="mt-4 text-[20px] font-medium grid grid-cols-2 gap-4 max-[375px]:hidden">
          <span className="underline">Get Started</span>{" "}
          <span className="mt-2">
            <Rightarrow />
          </span>
        </button>

        <h1 className="mt-4 lending-[150%] hidden max-[375px]:block">
          Build your own Credit Card that fits in your day to day lifestyle.
          First, choose your rewards and then select your card design.
        </h1>
        <h1 className="mt-6 lending-[150%] hidden max-[375px]:block">
          Check if the card is available in your city
        </h1>
        <div className="w-full hidden max-[375px]:flex justify-between mb-12 mt-2 gap-4">
          <select name="SelectCity" className="w-full rounded-[21px]">
            <option value="Select City">Select City</option>
          </select>
          <button className="py-2 px-4 bg-[#4E3F6B] rounded-[21px] font-['Questrial']">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Second;

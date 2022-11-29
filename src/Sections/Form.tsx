import React from "react";
import Eligibility from "../assets/Eligibility";
import Rightarrow from "../assets/svg/Rightarrow";
import InputField from "../Components/InputField";

const Form = () => {
  return (
    <div className="w-full h-auto flex max-[375px]:flex-col max-[375px]:px-6 max-[375px]:py-8 ">
      <div className="hidden font-['Questrial'] text-2xl leading-[150%] font-[550px] text-['rgba(0, 0, 0, 0.87)'] max-[375px]:block">
        Create your own credit card in three easy steps
      </div>
      <div className="w-1/2 h-auto flex flex-col items-end justify-evenly pr-[124px] px-[64px] bg-[#BFE1FF] max-[375px]:hidden">
        <div>
          <InputField
            placeholder={"Enter your phone number"}
            style="drop-shadow-lg"
          />
        </div>
        <div>
          <InputField
            placeholder={"Enter your PAN number"}
            style="opacity-[0.8] drop-shadow-lg"
          />
        </div>
        <div>
          <InputField
            placeholder={"Enter your Address"}
            style="opacity-[0.5] drop-shadow-lg"
          />
        </div>
      </div>

      <div className="hidden max-[375px]:block bg-[#BFE1FF] w-full h-[272px] mt-8 relative">
        <div className="absolute top-[19px] left-[18px]">
          <input
            placeholder="Gender"
            className="w-[94px] h-[32px] rounded-[25px] bg-[#84B5F3] text-[14px] text-center text-[#ffffff] placeholder:text-[#ffffff] placeholder:text-center placeholder:font-normal placeholder:font-['Roboto'] font-['Roboto'] py-0 px-0 "
          />
        </div>
        <div className="absolute right-[26px] top-[19px]">
          <input
            placeholder="Address"
            className="w-[100px] h-[32px] rounded-[25px] bg-[#84B5F3] text-[14px] text-center text-[#ffffff] placeholder:text-[#ffffff] placeholder:text-center placeholder:font-normal py-0 px-0 placeholder:font-['Roboto'] font-['Roboto']"
          />
        </div>
        <div className="absolute top-[76px] left-[88px]">
          <input
            placeholder="Email Address"
            className="w-[139px] h-[32px] rounded-[25px] bg-[#84B5F3] text-[14px] text-center text-[#ffffff] placeholder:text-[#ffffff] placeholder:text-center placeholder:font-normal py-0 px-0 placeholder:font-['Roboto'] font-['Roboto']"
          />
        </div>
        <div className="absolute top-[133px] left-[18px]">
          <input
            placeholder="City"
            className="w-[73px] h-[32px] rounded-[25px] bg-[#84B5F3] text-[14px] text-center text-[#ffffff] placeholder:text-[#ffffff] placeholder:text-center placeholder:font-normal py-0 px-0 placeholder:font-['Roboto'] font-['Roboto']"
          />
        </div>
        <div className="absolute bottom-[99px] right-[26px]">
          <input
            placeholder="Phone Number"
            className="w-[142px] h-[32px] rounded-[25px] bg-[#84B5F3] text-[14px] text-center text-[#ffffff] placeholder:text-[#ffffff] placeholder:text-center placeholder:font-normal py-0 px-0 placeholder:font-['Roboto'] font-['Roboto']"
          />
        </div>
        <div className="absolute bottom-[30px] left-[34px]">
          <input
            placeholder="PAN Card"
            className="w-[108px] h-[32px] rounded-[25px] bg-[#84B5F3] text-[14px] text-center text-[#ffffff] placeholder:text-[#ffffff] placeholder:text-center placeholder:font-normal py-0 px-0 placeholder:font-['Roboto'] font-['Roboto']"
          />
        </div>
        <div className="absolute bottom-[19px] right-[26px]">
          <input
            placeholder="Name"
            className="w-[86px] h-[32px] rounded-[25px] bg-[#84B5F3] text-[14px] text-center text-[#ffffff] placeholder:text-[#ffffff] placeholder:text-center placeholder:font-normal py-0 px-0 placeholder:font-['Roboto'] font-['Roboto']"
          />
        </div>
      </div>

      <div className="hidden mt-4 max-[375px]:block">
        <div className="font-['Roboto'] text-[rgba(0, 0, 0, 0.87)] text-[18px] leading-[21px]">
          Fill Eligibility Form
        </div>
        <div className="font-['Questrial'] text-[rgba(0, 0, 0, 0.87)] text-[16px] leading-[150%] my-4">
          Please fill an application form to make sure you’re eligible for the
          card. You can fill this later as well
        </div>
        <button className="mt-4 text-[16px] font-medium flex items-center font-['Questrial']">
          <span className="underline">Get Started</span>
          <span className="ml-3">
            <Rightarrow className="scale-75" />
          </span>
        </button>
      </div>

      <div className="w-1/2 relative bg-[#FFFFFF] px-[102px] py-[126px] max-[375px]:hidden">
        <div className="">
          <Eligibility />
          <h1 className="text-[40px] font-medium font-['Roboto'] mt-4">
            Fill Eligibility Form
          </h1>
          <p className="text-[24px] font-normal font-['Roboto'] mt-4">
            Tell us about yourself, to find out if <br /> you’re eligible to
            apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;

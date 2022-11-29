import React from "react";
import "../Components/Slider.css"

const Footer = () => {
  return (
    <div className='bg-[#12193B] w-full h-auto font-["Questrial"] max-[375px]:px-6 max-[375px]:py-8'>
        {/* <div className="card3 w-[389px] h-[243px]   rounded-[20px] ml-[20px]"> */}
        {/* </div> */}
      <div className="w-full">
        <p className="text-[32px] text-white text-center pt-14 font-medium leading-10 max-[375px]:pt-0">
          OneSync Credit Card
        </p>
        <p className="text-xl text-white text-center font-normal leading-8 max-[375px]:mt-[2px]">
          Experience Freedom
        </p>
      </div>
      <div className="flex justify-center mt-[48px] mb-[65px] max-[375px]:mb-[64px]">
        <button className="bg-[#7C7EB5] px-10 py-2 rounded-[46px] text-[18px] text-white font-medium font-['Roboto'] leading-['27px'] max-[375px]:text-[16px]">
          Get Started
        </button>
      </div>
      <div className="border-[1px] border-[#ffffff] w-auto h-auto opacity-50 mx-[108px] max-[375px]:w-full max-[375px]:mx-0"></div>
      <div className="mt-[65px] max-[375px]:mt-[40px]">
        <div className="mx-[108px] flex justify-start gap-[170px] pb-[80px] text-white max-[375px]:w-full max-[375px]:mx-0 max-[375px]:pb-[29px]">
          <div className="">
            <p className="mb-6">Manage Your Card</p>
            <p className="mb-6">Track Your Application</p>
            <p>Contact Us</p>
          </div>
          <div className="max-[375px]:hidden">
            <p className="mb-6">Manage Your Card</p>
            <p className="mb-6">Track Your Application</p>
            <p>Contact Us</p>
          </div>
          <div className="max-[375px]:hidden">
            <p className="mb-6">Manage Your Card</p>
            <p className="mb-6">Track Your Application</p>
            <p>Contact Us</p>
          </div>
          <div className="max-[375px]:hidden">
            <p className="mb-6">Manage Your Card</p>
            <p className="mb-6">Track Your Application</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

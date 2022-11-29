import React, { useState } from "react";
import Accordian from "../Components/Accordian";

function Faq() {
  return (
    <div className="w-full px-[316px] h-auto relative my-20 max-[375px]:flex max-[375px]:flex-col max-[375px]:px-6 max-[375px]:pt-12 max-[375px]:my-0">
      <div className="w-full text-center text-[32px] text-[#000000] leading-[150%] font-medium font-['Roboto'] mb-8 max-[375px]:text-left max-[375px]:text-slate-900 max-[375px]:text-[24px]">
        FAQs
      </div>
      <div className="w-full flex flex-col items-center max-[375px]:mb-[26px]">
        <div className="w-[808px] h-auto my-4 max-[375px]:w-full max-[375px]:mt-0">
          <Accordian
            title={"Who’s eligible for the Card?"}
            description={` If you’re between 23-60 years of age, have a monthly income of ₹25,000
                or more, and have never defaulted on a credit card or loan payment,
                we’d encourage you to apply. However, your application will be
                declined if your location isn’t serviceable or if your credit score is
                low.`}
          />
        </div>
        <div className="w-[808px] h-auto my-4 max-[375px]:w-full">
          <Accordian
            title={"Is my location serviceable?"}
            description={` If you’re between 23-60 years of age, have a monthly income of ₹25,000
                or more, and have never defaulted on a credit card or loan payment,
                we’d encourage you to apply. However, your application will be
                declined if your location isn’t serviceable or if your credit score is
                low.`}
          />
        </div>
        <div className="w-[808px] h-auto my-4 max-[375px]:w-full">
          <Accordian
            title={"What if I don’t want to pay at all?"}
            description={` If you’re between 23-60 years of age, have a monthly income of ₹25,000
                or more, and have never defaulted on a credit card or loan payment,
                we’d encourage you to apply. However, your application will be
                declined if your location isn’t serviceable or if your credit score is
                low.`}
          />
        </div>
        <div className="w-[808px] h-auto my-4 max-[375px]:w-full">
          <Accordian
            title={"What happens after I’ve build my card?"}
            description={` If you’re between 23-60 years of age, have a monthly income of ₹25,000
                or more, and have never defaulted on a credit card or loan payment,
                we’d encourage you to apply. However, your application will be
                declined if your location isn’t serviceable or if your credit score is
                low.`}
          />
        </div>
      </div>
    </div>
  );
}

export default Faq;

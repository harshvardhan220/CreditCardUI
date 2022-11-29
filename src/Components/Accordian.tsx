import React, { useState } from "react";
import ChevronDown from "../assets/Icons/ChevronDown";
import ChevronUp from "../assets/Icons/ChevronUp";

interface AccordianTypes {
  title: string;
  description: string;
}

function Accordian({ title, description }: AccordianTypes) {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full h-auto">
      <div
        className="w-full h-full flex justify-between items-center"
        onClick={() => {
          setShow(!show);
        }}
      >
        <div className="text-[#F2707C] font-medium text-xl font-['Questrial'] max-[375px]:text-[14px]">
          {title}
        </div>
        <div>{!show ? <ChevronDown /> : <ChevronUp />}</div>
      </div>
      {show && (
        <div className="w-full py-4 border-b-[1px] text-[rgba(0, 0, 0, 0.87)] border-b-[rgba(0, 0, 0,0.4)] font-['Roboto']">
          {description}
        </div>
      )}
    </div>
  );
}

export default Accordian;

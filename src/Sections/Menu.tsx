import React, { useState } from "react";
import Cross from "../assets/Icons/Cross";
import Hamburger from "../assets/Icons/Hamburger";

function Menu() {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full h-auto">
      <div className="w-full flex justify-between items-center">
        <div className="text-[20px] py-4 px-6 bg-[#000000] text-[#ffffff] leading-5 font-bold font-['Exo']  max-[375px]:text-[14px]  max-[375px]:py-[13px] max-[375px]:px-[12px]">
          AFC Inc.
        </div>
        <div
          className="hidden max-[375px]:block max-[375px]:mr-[3px]"
          onClick={() => {
            setShow(!show);
          }}
        >
          <Hamburger />
        </div>
        <ul
          className={`list-none flex items-center text-base font-medium max-[375px]:absolute max-[375px]:flex max-[375px]:flex-col max-[375px]:right-0 max-[375px]:top-0 max-[375px]:bottom-0 max-[375px]:bg-[#ffffff] max-[375px]:h-screen max-[375px]:translate-x-[100%] ${
            show && "max-[375px]:-translate-x-[0%] max-[375px]:shadow-2xl max-[375px]:transition-all"
          }`}
        >
          <li
            className="hidden max-[375px]:block font-['Roboto'] text-[#262A2F] max-[375px]:mt-5 max-[375px]:ml-28"
            onClick={() => {
              setShow(false);
            }}
          >
            <Cross />
          </li>
          <li className="mx-5 font-['Roboto'] text-[#262A2F] max-[375px]:my-2 max-[375px]:mt-10">
            Track Application
          </li>
          <li className="mx-5 font-['Roboto'] text-[#262A2F] max-[375px]:my-2">
            Manage My Card
          </li>
          <li className="mx-5 font-['Roboto'] text-[#262A2F] max-[375px]:my-2">
            FAQs
          </li>
          <li className="mx-5 py-2 px-6 font-['Roboto'] bg-[#F2707C] text-[#ffffff] rounded-sm max-[375px]:my-2 max-[375px]:rounded-full">
            Get Started
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;

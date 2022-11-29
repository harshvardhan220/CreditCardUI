import React from "react";

function ChevronDown(props) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 12L16 20L24 12"
        stroke="#F2707C"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ChevronDown;

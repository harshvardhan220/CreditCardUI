import React from "react";

function Cross(props) {
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
        d="M22.6654 22.6668L9.33203 9.3335M22.6654 9.3335L9.33203 22.6668"
        stroke="#000000"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Cross;

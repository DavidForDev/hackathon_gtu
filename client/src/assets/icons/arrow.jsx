import * as React from "react";
const Arrow = (props) => (
  <svg
    width={9}
    height={15}
    viewBox="0 0 9 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 1L1 7.5L8 14"
      stroke="white"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Arrow;

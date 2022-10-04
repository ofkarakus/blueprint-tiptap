import { SVGProps } from "react";

const SvgClearStyle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M13 14.414V20h2v2H9v-2h2v-7.586L4.576 5.99 3 5.953V4.414L1.293 2.707l1.414-1.414 20 20-1.414 1.414L13 14.414Zm0-5.628-2-2V4H8.214l-2-2H21v4l-2-.047V4h-6v4.786Z" />
  </svg>
);

export default SvgClearStyle;

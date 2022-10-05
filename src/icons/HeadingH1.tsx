import { SVGProps } from "react";

const SvgHeadingH1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 7h2v10h-2v-4H7v4H5V7h2v4h4V7zm6.57 0A4.737 4.737 0 0 1 15 9v1h2v7h2V7h-1.43z" />
  </svg>
);

export default SvgHeadingH1;

import { SVGProps } from "react";

const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    xmlSpace="preserve"
    width="18px"
    height="18px"
    {...props}
  >
    <path d="M49.001 0H10.999C4.934 0 0 4.934 0 10.999v38.003C0 55.066 4.934 60 10.999 60h38.002C55.065 60 60 55.066 60 49.001V10.999C60 4.934 55.065 0 49.001 0z" />
  </svg>
);

export default SvgSquare;

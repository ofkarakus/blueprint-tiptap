import { SVGProps } from "react";

const SvgGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="18px"
    height="18px"
    viewBox="0 0 1024 1024"
    className="grid_svg__icon"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fill="currentColor"
      d="M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"
    />
  </svg>
);

export default SvgGrid;

import { SVGProps } from "react";

const SvgEditorListBullet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    viewBox="0 0 448 448"
    role="img"
    {...props}
  >
    <path
      style={{
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 24,
        strokeLinecap: "round",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      d="M96 956.362a48 48 0 0 1-48 48 48 48 0 0 1-48-48 48 48 0 0 1 48-48 48 48 0 0 1 48 48zm0-128a48 48 0 0 1-48 48 48 48 0 0 1-48-48 48 48 0 0 1 48-48 48 48 0 0 1 48 48zm0-128a48 48 0 0 1-48 48 48 48 0 0 1-48-48 48 48 0 0 1 48-48 48 48 0 0 1 48 48zm64 224h288v64H160zm0-128h288v64H160zm0-128h288v64H160z"
      transform="translate(0 -604.362)"
    />
  </svg>
);

export default SvgEditorListBullet;

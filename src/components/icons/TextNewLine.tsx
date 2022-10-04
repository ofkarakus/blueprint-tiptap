import { SVGProps } from "react";

const SvgTextNewLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M20.586 14.414 24.172 18H6V8H4v10a2.002 2.002 0 0 0 2 2h18.172l-3.586 3.586L22 25l6-6-6-6Z" />
    <path
      data-name="&lt;Transparent Rectangle&gt;"
      style={{
        fill: "none",
      }}
      d="M0 0h32v32H0z"
    />
  </svg>
);

export default SvgTextNewLine;

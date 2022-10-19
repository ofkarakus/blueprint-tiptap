import { SVGProps } from 'react';

const SvgHeadingH4 = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M11 17H9v-4H5v4H3V7h2v4h4V7h2v10zm10-2h-1v2h-2v-2h-5v-2l4.05-6H20v6h1v2zm-3-2V9l-2.79 4H18z" />
    </svg>
);

export default SvgHeadingH4;

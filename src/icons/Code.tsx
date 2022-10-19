import { SVGProps } from 'react';

const SvgCode = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <path
            fill="none"
            stroke="#000"
            strokeWidth={2}
            d="m9 22 6-20m2 15 5-5-5-5M7 17l-5-5 5-5"
        />
    </svg>
);

export default SvgCode;

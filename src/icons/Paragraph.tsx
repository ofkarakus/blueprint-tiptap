import { SVGProps } from 'react';

const SvgParagraph = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        width="20px"
        height="20px"
        role="img"
        {...props}
    >
        <path
            style={{
                fill: 'none',
                stroke: '#000',
                strokeWidth: 2,
                strokeMiterlimit: 10,
            }}
            d="M24 6H12a5 5 0 0 0 0 10h5M17 27V6M21 27V6"
        />
    </svg>
);

export default SvgParagraph;

import { SVGProps } from 'react';

const SvgUnorderedList = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <path d="M5.94 6.42H24v1.75H5.94zM5.94 11.71H24v1.75H5.94zM5.94 16.99H24v1.75H5.94z" />
        <circle cx={1.85} cy={7.29} r={1.52} />
        <circle cx={1.85} cy={12.58} r={1.52} />
        <circle cx={1.85} cy={17.87} r={1.52} />
    </svg>
);

export default SvgUnorderedList;

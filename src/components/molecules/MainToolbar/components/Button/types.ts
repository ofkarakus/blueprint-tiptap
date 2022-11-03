import { ReactElement, SVGProps } from 'react';

export type WrapperProps = {
    $isTooltipVisible: boolean;
    name: string;
};

export type Tool = {
    name: string;
    icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
    description: string;
};

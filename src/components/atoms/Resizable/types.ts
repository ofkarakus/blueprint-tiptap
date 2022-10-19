import { Props } from 'react-rnd';

export type StyledRndProps = {
    $isFocused: boolean;
};

export type ResizableProps = Props & { type?: string; id?: number };

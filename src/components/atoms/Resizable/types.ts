import { Props } from 'react-rnd';
import { BlockType } from 'components/molecules/Toolbar/types';

export type StyledRndProps = {
    $isFocused: boolean;
};

export type ResizableProps = Props & { type: BlockType; id?: number };

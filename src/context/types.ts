import { BlockType } from 'components/molecules/MainToolbar/types';
import { ReactElement } from 'react';

export type InitialState = {
    blocks: Block[];
    contextMenu: {
        isVisible: boolean;
        points: Coords;
    };
    blockIdCounter: number;
    focusedBlock?: Block;
    focusedBlockId: number;
    isMTbarVisible: boolean;
};

export type Size = {
    width: number;
    height: number;
};

export type Coords = {
    x: number;
    y: number;
};

export type Alignment = {
    vertical: string;
    horizontal: string;
};

export type Block = {
    id: number;
    block: ReactElement;

    ref?: string;
    type: BlockType;
    label: string;
    size: Size;
    coords: Coords;
    // text-block
    fontColor?: string;
    backgroundFill?: string;
    stroke?: number;
    strokeColor?: string;
    alignment?: Alignment;
    fontSize?: number;
    hide?: boolean;
    shrink?: boolean;
    caps?: boolean;
    fontFamily?: string;
};

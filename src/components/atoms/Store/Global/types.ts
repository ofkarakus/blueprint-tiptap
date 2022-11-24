import { BlockType } from 'components/molecules/MainToolbar/types';
import { ReactElement, RefObject } from 'react';
import { Rnd } from 'react-rnd';

export type InitialState = {
    blocks: Block[];
    contextMenu: {
        isVisible: boolean;
        points: Points;
    };
    blockIdCounter: number;
    focusedBlock?: Block;
    focusedBlockId: number;
    isMTbarVisible: boolean;
};

export type Points = {
    x: number;
    y: number;
};

export type Block = {
    id: number;
    block: ReactElement;
    ref: RefObject<Rnd>;
    type: BlockType;
    label: string;
};

export type Action =
    | {
          type: 'ADD_BLOCK';
          payload: { block: ReactElement; ref: RefObject<Rnd>; type: BlockType };
      }
    | { type: 'REMOVE_BLOCK'; payload: number }
    | {
          type: 'OPEN_CONTEXT_MENU';
          payload: { points: Points; blockId: number };
      }
    | { type: 'CLOSE_CONTEXT_MENU' }
    | { type: 'SET_FOCUSED_BLOCK_ID'; payload: number }
    | { type: 'BRING_FORWARDS'; payload: number }
    | { type: 'SEND_BACKWARDS'; payload: number }
    | { type: 'BRING_TO_FRONT'; payload: number }
    | { type: 'SEND_TO_BACK'; payload: number }
    | { type: 'SHOW_TOOLBARS' }
    | { type: 'HIDE_TOOLBARS' };

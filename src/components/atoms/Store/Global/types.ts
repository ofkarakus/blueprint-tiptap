import { ReactElement } from 'react';

export type InitialState = {
    blocks: Block[];
    contextMenu: {
        isVisible: boolean;
        points: Points;
    };
    blockIdCounter: number;
    selectedBlockId: number;
    focusedBlockId: number;
};

export type Points = {
    x: number;
    y: number;
};

export type Block = { id: number; block: ReactElement };

export type Action =
    | { type: 'ADD_BLOCK'; payload: ReactElement }
    | { type: 'REMOVE_BLOCK'; payload: number }
    | {
          type: 'OPEN_CONTEXT_MENU';
          payload: { points: Points; blockId: number };
      }
    | { type: 'CLOSE_CONTEXT_MENU' }
    | { type: 'SET_FOCUSED_BLOCK_ID'; payload: number }
    | { type: 'BRING_TO_FRONT'; payload: number };

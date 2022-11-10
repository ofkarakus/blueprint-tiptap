import { ReactElement, RefObject } from 'react';
import { Rnd } from 'react-rnd';

export type InitialState = {
    blocks: Block[];
    contextMenu: {
        isVisible: boolean;
        points: Points;
    };
    blockIdCounter: number;
    selectedBlockId: number;
    focusedBlockId: number;
    areToolbarsVisible: boolean;
};

export type Points = {
    x: number;
    y: number;
};

export type Block = { id: number; block: ReactElement; ref: RefObject<Rnd> };

export type Action =
    | {
          type: 'ADD_BLOCK';
          payload: { block: ReactElement; isBackground?: boolean; ref: RefObject<Rnd> };
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

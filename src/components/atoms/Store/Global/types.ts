import { BlockType } from 'components/molecules/MainToolbar/types';
import { RefObject, ReactElement } from 'react';
import { Rnd } from 'react-rnd';

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

export type VerticalAlignment = 'start' | 'center' | 'end';
export type HorizontalAlignment = 'start' | 'center' | 'stretch' | 'end';

export type StrokeType = 'dashed' | 'solid' | 'none';

export type Block = {
    id: number;
    block: ReactElement;

    ref?: RefObject<Rnd>;
    type: BlockType;
    label: string;
    size: Size;
    coords: Coords;
    // text-block
    fontColor: string;
    bgColor: string;
    strokeType: StrokeType;
    strokeWidth: number;
    strokeColor: string;
    verticalAlignment: VerticalAlignment;
    horizontalAlignment: HorizontalAlignment;
    fontSize?: number;
    hide?: boolean;
    shrink?: boolean;
    caps?: boolean;
    fontFamily?: string;
};

export type Action =
    | {
          type: 'ADD_BLOCK';
          payload: {
              block: ReactElement;

              type: BlockType;
              size: Size;
              coords: Coords;
          };
      }
    | { type: 'REMOVE_BLOCK'; payload: number }
    | {
          type: 'OPEN_CONTEXT_MENU';
          payload: { points: Coords; blockId: number };
      }
    | { type: 'CLOSE_CONTEXT_MENU' }
    | { type: 'SET_FOCUSED_BLOCK_ID'; payload: number }
    | { type: 'BRING_FORWARDS'; payload: number }
    | { type: 'SEND_BACKWARDS'; payload: number }
    | { type: 'BRING_TO_FRONT'; payload: number }
    | { type: 'SEND_TO_BACK'; payload: number }
    | { type: 'SHOW_TOOLBARS' }
    | { type: 'HIDE_TOOLBARS' }
    | { type: 'SET_LABEL'; payload: string }
    | { type: 'SET_SIZE'; payload: Size }
    | { type: 'SET_COORDS'; payload: Coords }
    | { type: 'SET_FONT_COLOR'; payload: string }
    | { type: 'SET_BG_COLOR'; payload: string }
    | { type: 'SET_STROKE_TYPE'; payload: StrokeType }
    | { type: 'SET_STROKE_WIDTH'; payload: number }
    | { type: 'SET_STROKE_COLOR'; payload: string }
    | { type: 'SET_VERTICAL_ALIGNMENT'; payload: VerticalAlignment }
    | { type: 'SET_HORIZONTAL_ALIGNMENT'; payload: HorizontalAlignment }
    | { type: 'SET_REF'; payload: { ref: RefObject<Rnd>; id: number } };

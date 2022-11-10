import React, { RefObject } from 'react';
import { move } from 'utils/helpers';
import * as types from './types';
import { Rnd } from 'react-rnd';
import { BlockType } from 'components/molecules/MainToolbar/types';

export const initialState: types.InitialState = {
    blocks: [],
    contextMenu: {
        isVisible: false,
        points: {
            x: 0,
            y: 0,
        },
    },
    blockIdCounter: 1,
    selectedBlockId: 0,
    focusedBlockId: 0,
    isMTbarVisible: true,
};

export const actions = (dispatch: React.Dispatch<types.Action>) => ({
    addBlock: (block: React.ReactElement, ref: RefObject<Rnd>, type: BlockType) => {
        dispatch({ type: 'ADD_BLOCK', payload: { block, ref, type } });
    },
    removeBlock: (blockId: number) => {
        dispatch({ type: 'REMOVE_BLOCK', payload: blockId });
    },
    openContextMenu: (points: types.Points, blockId: number) => {
        dispatch({ type: 'OPEN_CONTEXT_MENU', payload: { points, blockId } });
    },
    closeContextMenu: () => {
        dispatch({ type: 'CLOSE_CONTEXT_MENU' });
    },
    setFocusedBlockId: (blockId: number) => {
        dispatch({ type: 'SET_FOCUSED_BLOCK_ID', payload: blockId });
    },
    bringForwards: (blockId: number) => {
        dispatch({ type: 'BRING_FORWARDS', payload: blockId });
    },
    sendBackwards: (blockId: number) => {
        dispatch({ type: 'SEND_BACKWARDS', payload: blockId });
    },
    bringToFront: (blockId: number) => {
        dispatch({ type: 'BRING_TO_FRONT', payload: blockId });
    },
    sendToBack: (blockId: number) => {
        dispatch({ type: 'SEND_TO_BACK', payload: blockId });
    },
    showToolbars: () => dispatch({ type: 'SHOW_TOOLBARS' }),
    hideToolbars: () => dispatch({ type: 'HIDE_TOOLBARS' }),
});

export function reducer(state: types.InitialState, action: types.Action): types.InitialState {
    let from: number;
    switch (action.type) {
        case 'ADD_BLOCK':
            return {
                ...state,
                blocks:
                    action.payload.type === 'background'
                        ? [
                              {
                                  id: state.blockIdCounter,
                                  block: action.payload.block,
                                  ref: action.payload.ref,
                                  type: action.payload.type,
                              },
                              ...state.blocks,
                          ]
                        : [
                              ...state.blocks,
                              {
                                  id: state.blockIdCounter,
                                  block: action.payload.block,
                                  ref: action.payload.ref,
                                  type: action.payload.type,
                              },
                          ],
                blockIdCounter: state.blockIdCounter + 1,
            };
        case 'REMOVE_BLOCK':
            return {
                ...state,
                blocks: state.blocks.filter((el) => el.id !== action.payload),
            };
        case 'OPEN_CONTEXT_MENU':
            return {
                ...state,
                contextMenu: {
                    isVisible: true,
                    points: {
                        x: action.payload.points.x,
                        y: action.payload.points.y,
                    },
                },
                selectedBlockId: action.payload.blockId,
            };
        case 'CLOSE_CONTEXT_MENU':
            return {
                ...state,
                contextMenu: {
                    ...state.contextMenu,
                    isVisible: false,
                },
            };
        case 'SET_FOCUSED_BLOCK_ID':
            return {
                ...state,
                focusedBlockId: action.payload,
            };
        case 'BRING_FORWARDS':
            from = state.blocks.findIndex((el) => el.id === action.payload);
            return {
                ...state,
                blocks: move(state.blocks, from, from + 1),
            };
        case 'SEND_BACKWARDS':
            from = state.blocks.findIndex((el) => el.id === action.payload);
            return {
                ...state,
                blocks: move(state.blocks, from, from - 1),
            };
        case 'BRING_TO_FRONT':
            from = state.blocks.findIndex((el) => el.id === action.payload);
            return {
                ...state,
                blocks: move(state.blocks, from, state.blocks.length - 1),
            };
        case 'SEND_TO_BACK':
            from = state.blocks.findIndex((el) => el.id === action.payload);
            return {
                ...state,
                blocks: move(state.blocks, from, 0),
            };
        case 'SHOW_TOOLBARS':
            return {
                ...state,
                isMTbarVisible: true,
            };
        case 'HIDE_TOOLBARS':
            return {
                ...state,
                isMTbarVisible: false,
            };
        default:
            return state;
    }
}

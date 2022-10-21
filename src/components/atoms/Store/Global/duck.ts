import React from 'react';
import { move } from 'utils/helpers';
import * as types from './types';

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
};

export const actions = (dispatch: React.Dispatch<types.Action>) => ({
    addBlock: (block: React.ReactElement, isBackground?: boolean) => {
        dispatch({ type: 'ADD_BLOCK', payload: { block, isBackground } });
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
});

export function reducer(state: types.InitialState, action: types.Action): types.InitialState {
    let from;
    switch (action.type) {
        case 'ADD_BLOCK':
            return {
                ...state,
                blocks: action.payload.isBackground
                    ? [{ id: state.blockIdCounter, block: action.payload.block }, ...state.blocks]
                    : [...state.blocks, { id: state.blockIdCounter, block: action.payload.block }],
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
        default:
            return state;
    }
}

import React, { RefObject } from 'react';
import { move, capitalize, addItem, removeItem } from 'utils/helpers';
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
    focusedBlock: undefined,
    focusedBlockId: 0,
    isMTbarVisible: true,
};

export const actions = (dispatch: React.Dispatch<types.Action>) => ({
    addBlock: (
        block: React.ReactElement,
        ref: RefObject<Rnd>,
        type: BlockType,
        size: types.Size,
        coords: types.Coords,
    ) => {
        dispatch({ type: 'ADD_BLOCK', payload: { block, ref, type, size, coords } });
    },
    removeBlock: (blockId: number) => {
        dispatch({ type: 'REMOVE_BLOCK', payload: blockId });
    },
    openContextMenu: (points: types.Coords, blockId: number) => {
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
    setLabel: (label: string) => {
        dispatch({ type: 'SET_LABEL', payload: label });
    },
    setSize: (size: types.Size) => {
        dispatch({ type: 'SET_SIZE', payload: size });
    },
    setCoords: (coords: types.Coords) => {
        dispatch({ type: 'SET_COORDS', payload: coords });
    },
});

export function reducer(state: types.InitialState, action: types.Action): types.InitialState {
    let from: number;
    const index = state.blocks.findIndex((el) => el.id === state.focusedBlockId);
    const block = { ...state.focusedBlock! };
    const blockArr = [...state.blocks];
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
                                  label: `Shape ${state.blockIdCounter}: ${capitalize(
                                      action.payload.type,
                                  )}`,
                                  size: action.payload.size,
                                  coords: action.payload.coords,
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
                                  label: `Shape ${state.blockIdCounter}: ${capitalize(
                                      action.payload.type,
                                  )}`,
                                  size: action.payload.size,
                                  coords: action.payload.coords,
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
                focusedBlockId: action.payload.blockId,
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
                focusedBlock: state.blocks.find((el) => el.id === action.payload),
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
        case 'SET_LABEL':
            block.label = action.payload;
            removeItem<types.Block>(blockArr, index);
            addItem<types.Block>(blockArr, index, block);

            return {
                ...state,
                blocks: blockArr,
                focusedBlock: block,
            };
        case 'SET_SIZE':
            block.size.width = action.payload.width;
            block.size.height = action.payload.height;
            removeItem<types.Block>(blockArr, index);
            addItem<types.Block>(blockArr, index, block);

            return {
                ...state,
                blocks: blockArr,
                focusedBlock: block,
            };
        case 'SET_COORDS':
            block.coords.x = action.payload.x;
            block.coords.y = action.payload.y;
            removeItem<types.Block>(blockArr, index);
            addItem<types.Block>(blockArr, index, block);

            return {
                ...state,
                blocks: blockArr,
                focusedBlock: block,
            };
        default:
            return state;
    }
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as types from './types';
import React, { RefObject } from 'react';
import { Rnd } from 'react-rnd';
import { BlockType } from 'components/molecules/MainToolbar/types';
import { move, capitalize } from 'utils/helpers';

const initialState: types.InitialState = {
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

export const blockSlice = createSlice({
    name: 'block',
    initialState,
    reducers: {
        addBlockRedux: (
            state,
            action: PayloadAction<{
                block: React.ReactElement;
                type: BlockType;
                size: types.Size;
                coords: types.Coords;
            }>,
        ) => {
            if (action.payload.type === 'background') {
                state.blocks.unshift({
                    id: state.blockIdCounter,
                    block: action.payload.block,
                    type: action.payload.type,
                    label: `Shape ${state.blockIdCounter}: ${capitalize(action.payload.type)}`,
                    size: action.payload.size,
                    coords: action.payload.coords,
                });
            } else {
                state.blocks.push({
                    id: state.blockIdCounter,
                    block: action.payload.block,
                    type: action.payload.type,
                    label: `Shape ${state.blockIdCounter}: ${capitalize(action.payload.type)}`,
                    size: action.payload.size,
                    coords: action.payload.coords,
                });
            }
            state.blockIdCounter += 1;
        },

        removeBlockRedux: (state, action: PayloadAction<{ blockId: number }>) => {
            const newBlocks = state.blocks.filter((el) => el.id !== action.payload.blockId);
            state.blocks = newBlocks;
        },
        openContextMenuRedux: (
            state,
            action: PayloadAction<{ points: types.Coords; blockId: number }>,
        ) => {
            state.contextMenu = {
                isVisible: true,
                points: {
                    x: action.payload.points.x,
                    y: action.payload.points.y,
                },
            };
            state.focusedBlockId = action.payload.blockId;
        },
        closeContextMenuRedux: (state) => {
            state.contextMenu.isVisible = false;
        },
        setFocusedBlockIdRedux: (state, action: PayloadAction<{ blockId: number }>) => {
            state.focusedBlockId = action.payload.blockId;
            state.focusedBlock = state.blocks.find((el) => el.id === action.payload.blockId);
        },
        bringForwardsRedux: (state, action: PayloadAction<{ blockId: number }>) => {
            const from = state.blocks.findIndex((el) => el.id === action.payload.blockId);
            move(state.blocks, from, from + 1);
        },
        sendBackwardsRedux: (state, action: PayloadAction<{ blockId: number }>) => {
            const from = state.blocks.findIndex((el) => el.id === action.payload.blockId);
            move(state.blocks, from, from - 1);
        },
        bringToFrontRedux: (state, action: PayloadAction<{ blockId: number }>) => {
            const from = state.blocks.findIndex((el) => el.id === action.payload.blockId);
            move(state.blocks, from, state.blocks.length - 1);
        },
        sendToBackRedux: (state, action: PayloadAction<{ blockId: number }>) => {
            const from = state.blocks.findIndex((el) => el.id === action.payload.blockId);
            move(state.blocks, from, 0);
        },
        showToolbarsRedux: (state) => {
            state.isMTbarVisible = true;
        },
        hideToolbarsRedux: (state) => {
            state.isMTbarVisible = false;
        },
        setLabelRedux: (state, action: PayloadAction<{ label: string }>) => {
            const block = state.blocks.find((el) => el.id === state.focusedBlockId);
            if (block && state.focusedBlock) {
                block.label = action.payload.label;
                state.focusedBlock.label = action.payload.label;
            }
        },
        setSizeRedux: (state, action: PayloadAction<{ size: types.Size }>) => {
            const block = state.blocks.find((el) => el.id === state.focusedBlockId);
            if (block && state.focusedBlock) {
                block.size = action.payload.size;
                state.focusedBlock.size = action.payload.size;
            }
        },
        setCoordsRedux: (state, action: PayloadAction<{ coords: types.Coords }>) => {
            const block = state.blocks.find((el) => el.id === state.focusedBlockId);
            if (block && state.focusedBlock) {
                block.coords = action.payload.coords;
                state.focusedBlock.coords = action.payload.coords;
            }
        },
        setFontColorRedux: (state, action: PayloadAction<{ color: string }>) => {
            const block = state.blocks.find((el) => el.id === state.focusedBlockId);
            if (block && state.focusedBlock) {
                block.fontColor = action.payload.color;
                state.focusedBlock.fontColor = action.payload.color;
            }
        },
        setRefRedux: (
            state,
            action: PayloadAction<{
                ref: RefObject<Rnd>;
                id: number;
            }>,
        ) => {
            const block = state.blocks.find((el) => el.id === action.payload.id);
            if (block) {
                block.ref = action.payload.ref as any;
            }
        },
    },
});

export const {
    addBlockRedux,
    removeBlockRedux,
    openContextMenuRedux,
    closeContextMenuRedux,
    setFocusedBlockIdRedux,
    bringForwardsRedux,
    sendBackwardsRedux,
    bringToFrontRedux,
    sendToBackRedux,
    showToolbarsRedux,
    hideToolbarsRedux,
    setLabelRedux,
    setSizeRedux,
    setCoordsRedux,
    setFontColorRedux,
    setRefRedux,
} = blockSlice.actions;

export default blockSlice.reducer;

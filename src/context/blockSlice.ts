import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as types from './types';
import React, { RefObject } from 'react';
import { Rnd } from 'react-rnd';
import { BlockType } from 'components/molecules/MainToolbar/types';
import { capitalize } from 'utils/helpers';

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
        // increment: (state) => {
        //     state.value += 1;
        // },
        // decrement: (state) => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },

        addBlock: (
            state,
            action: PayloadAction<{
                block: React.ReactElement;
                ref: RefObject<Rnd>;
                type: BlockType;
                size: types.Size;
                coords: types.Coords;
            }>,
        ) => {
            if (action.payload.type === 'background') {
                state.blocks.unshift({
                    id: state.blockIdCounter,
                    type: action.payload.type,
                    label: `Shape ${state.blockIdCounter}: ${capitalize(action.payload.type)}`,
                    size: action.payload.size,
                    coords: action.payload.coords,
                });
            } else {
                state.blocks.push({
                    id: state.blockIdCounter,
                    type: action.payload.type,
                    label: `Shape ${state.blockIdCounter}: ${capitalize(action.payload.type)}`,
                    size: action.payload.size,
                    coords: action.payload.coords,
                });
            }
        },
    },
});

// export const { increment, decrement, incrementByAmount } = blockSlice.actions;
export const {} = blockSlice.actions;

export default blockSlice.reducer;

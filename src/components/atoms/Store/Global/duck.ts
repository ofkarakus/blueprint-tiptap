import React from "react";
import * as types from "./types";

export const initialState: types.InitialState = {
  textBlocks: [],
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
  addTextBlock: (textBlock: React.ReactElement) => {
    dispatch({ type: "ADD_BLOCK", payload: textBlock });
  },
  removeBlock: (blockId: number) => {
    dispatch({ type: "REMOVE_BLOCK", payload: blockId });
  },
  openContextMenu: (points: types.Points, blockId: number) => {
    dispatch({ type: "OPEN_CONTEXT_MENU", payload: { points, blockId } });
  },
  closeContextMenu: () => {
    dispatch({ type: "CLOSE_CONTEXT_MENU" });
  },
  setFocusedBlockId: (blockId: number) => {
    dispatch({ type: "SET_FOCUSED_BLOCK_ID", payload: blockId });
  },
});

export function reducer(
  state: types.InitialState,
  action: types.Action
): types.InitialState {
  switch (action.type) {
    case "ADD_BLOCK":
      return {
        ...state,
        textBlocks: [
          ...state.textBlocks,
          { id: state.blockIdCounter, block: action.payload },
        ],
        blockIdCounter: state.blockIdCounter + 1,
      };
    case "REMOVE_BLOCK":
      return {
        ...state,
        textBlocks: state.textBlocks.filter((el) => el.id !== action.payload),
      };
    case "OPEN_CONTEXT_MENU":
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
    case "CLOSE_CONTEXT_MENU":
      return {
        ...state,
        contextMenu: {
          ...state.contextMenu,
          isVisible: false,
        },
      };
    case "SET_FOCUSED_BLOCK_ID":
      return {
        ...state,
        focusedBlockId: action.payload,
      };
    default:
      return state;
  }
}

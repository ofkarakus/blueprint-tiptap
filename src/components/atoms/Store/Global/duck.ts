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
  counter: 1,
};

export const actions = (dispatch: React.Dispatch<types.Action>) => ({
  addTextBlock: (textBlock: React.ReactNode) =>
    dispatch({ type: "ADD_BLOCK", payload: textBlock }),
  openContextMenu: (points: types.Points) =>
    dispatch({ type: "OPEN_CONTEXT_MENU", payload: points }),
  closeContextMenu: () => dispatch({ type: "CLOSE_CONTEXT_MENU" }),
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
          { id: state.counter, block: action.payload },
        ],
        counter: state.counter + 1,
      };
    case "REMOVE_BLOCK":
      return {
        ...state,
        textBlocks: [...state.textBlocks],
      };
    case "OPEN_CONTEXT_MENU":
      return {
        ...state,
        contextMenu: {
          isVisible: true,
          points: {
            x: action.payload.x,
            y: action.payload.y,
          },
        },
      };
    case "CLOSE_CONTEXT_MENU":
      return {
        ...state,
        contextMenu: {
          ...state.contextMenu,
          isVisible: false,
        },
      };
    default:
      return state;
  }
}
